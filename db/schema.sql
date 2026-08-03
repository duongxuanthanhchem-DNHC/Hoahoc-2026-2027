-- Supabase / Postgres schema for Hoahoc learning app

-- Profiles (extend Supabase auth)
create table if not exists profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  role text default 'student', -- student | teacher | admin
  avatar_url text,
  created_at timestamptz default now(),
  primary key (id)
);

-- Courses
create table if not exists courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  description text,
  author_id uuid references profiles(id),
  created_at timestamptz default now()
);

-- Lessons
create table if not exists lessons (
  id uuid default gen_random_uuid() primary key,
  course_id uuid references courses(id) on delete cascade,
  title text not null,
  content text,
  ordering int default 0,
  created_at timestamptz default now()
);

-- Quizzes
create table if not exists quizzes (
  id uuid default gen_random_uuid() primary key,
  lesson_id uuid references lessons(id) on delete cascade,
  title text,
  created_at timestamptz default now()
);

-- Questions
create table if not exists questions (
  id uuid default gen_random_uuid() primary key,
  quiz_id uuid references quizzes(id) on delete cascade,
  content text not null,
  type text default 'multiple_choice', -- multiple_choice | input | true_false
  ordering int default 0
);

-- Answers (possible answers for multiple choice)
create table if not exists answers (
  id uuid default gen_random_uuid() primary key,
  question_id uuid references questions(id) on delete cascade,
  content text not null,
  is_correct boolean default false
);

-- Quiz attempts / results
create table if not exists quiz_attempts (
  id uuid default gen_random_uuid() primary key,
  quiz_id uuid references quizzes(id) on delete cascade,
  user_id uuid references profiles(id),
  score numeric,
  metadata jsonb,
  created_at timestamptz default now()
);

-- Lesson progress
create table if not exists lesson_progress (
  id uuid default gen_random_uuid() primary key,
  lesson_id uuid references lessons(id) on delete cascade,
  user_id uuid references profiles(id),
  status text default 'not_started', -- not_started|in_progress|completed
  updated_at timestamptz default now()
);
