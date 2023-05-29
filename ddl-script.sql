
--use database
--USE brainybuddiesdb
--GO;
EXEC sp_fkeys Member;

-- dropping tables if exists
drop table if exists brainybuddiesdb.dbo.Member ;
drop table if exists brainybuddiesdb.dbo.Lesson ;
drop table if exists brainybuddiesdb.dbo.Activity ;
drop table if exists brainybuddiesdb.dbo.Quiz;
drop table if exists brainybuddiesdb.dbo.Score;
drop table if exists brainybuddiesdb.dbo.Refreshtoken;
drop table if exists brainybuddiesdb.dbo.Question;
--GO;

create table Member(
id_member int identity primary key, 
name varchar(50) not null,  
surname varchar(50) not null,
role varchar(50) not null,
age int not null,
gender varchar(50) not null,
username varchar(50) not null,
password varchar(100) not null,
email varchar(100) not null,
--constraint ck_password check(length(password) >= 9)
);

create table Activity(
id_activity int identity primary key,
age int not null,
subject varchar(200) not null,
theme varchar(200) not null,
content varchar(2000) not null,
title varchar(200) not null
);

create table Lesson(
id_lesson int identity primary key,
id_member int not null,--poradi referenca
id_activity int not null ,-- isto i ova
lesson_description varchar(500) not null,
constraint fk_id_member foreign key (id_member) references Member (id_member)
on delete cascade on update cascade,
constraint fk_id_acitivity foreign key (id_activity) references Activity (id_activity)
on delete cascade on update cascade
);


create table Quiz(
id_quiz int identity primary key,
points float not null,
id_member int not null,
id_activity int not null ,
constraint fk_id_member2 foreign key (id_member) references Member (id_member)
on delete cascade on update cascade,
constraint fk_id_acitivity2 foreign key (id_activity) references Activity (id_activity)
on delete cascade on update cascade
);

create table Score(
id_score int identity primary key,
total_result float not null,
id_quiz int not null,
id_member int not null,
constraint fk_id_member3 foreign key (id_member) references Member (id_member)
on delete cascade on update cascade,
constraint fk_id_quiz foreign key (id_quiz) references Quiz (id_quiz) 
on delete no action on update no action
);

create table RefreshToken(
id_token int identity primary key,
id_member int not null,
refreshToken varchar(200),
isActive varchar(200),
constraint fk_id_member4 foreign key (id_member) references Member (id_member)
on delete cascade on update cascade
);

create table Question(
id_question int identity primary key,
question_text varchar(400) not null,
correct_answer varchar(400) not null,
id_quiz int not null,
wrong_question1 varchar(400) not null,
wrong_question2 varchar(400) not null,
wrong_question3 varchar(400) not null,
constraint fk_id_quiz2 foreign key(id_quiz) references Quiz(id_quiz)
on delete cascade on update cascade
);

