USE [brainybuddiesdb]
GO

INSERT INTO [dbo].[Member]
           ([name]
           ,[surname]
           ,[role]
           ,[age]
           ,[gender]
           ,[username]
           ,[password]
           ,[email])
     VALUES
           ('Huma',
		   'Sejdini',
		   'Teacher',
		   22,
		   'Female',
		   'hsejdini',
		   'huma1234',
		   'humasejdini12@gmail.com'
           ),
		   ('Filip',
		   'Kramarski',
		   'Admin',
		   22,
		   'Male',
		   'fkramarski',
		   'filip1234',
		   'filip.kramarski@gmail.com'
           ),
		   ('Brankica',
		   'Tundjeva',
		   'Parent',
		   22,
		   'Female',
		   'btundjeva',
		   'brankica1234',
		   'tundjeva.brankica@gmail.com'
           ),
		   ('Ana',
		   'Drogriska',
		   'Teacher',
		   22,
		   'Female',
		   'adrogriska',
		   '1234ana',
		   'drogriska.ana@gmail.com'
           ),
		   ('Kiril',
		   'Gurev',
		   'Parent',
		   22,
		   'Male',
		   'kirlg',
		   'kiril4321',
		   'kiril.gurev@gmail.com'
           ),
		   ('Anastasija',
		   'Gjosheva',
		   'Teacher',
		   22,
		   'Female',
		   'gjoshevaanastasija',
		   'anastasija4321',
		   'g.anastasija@gmail.com'
           ),
		   ('Anastasija',
		   'Temelkovksa',
		   'Parent',
		   22,
		   'Female',
		   'temelkovskaanastasija',
		   'anastasija1234',
		   't.anastasija@gmail.com'
           ),
		   ('Milos',
		   'Kuzmanovski',
		   'Admin',
		   22,
		   'Male',
		   'mkuzmanovski',
		   '4321milos',
		   'milos.k@gmail.com'
           ),
		   ('Antonija',
		   'Batalkovska',
		   'Parent',
		   22,
		   'Female',
		   'antonijab',
		   'antonija1234',
		   'b.antonija@gmail.com'
           )

GO

INSERT INTO [dbo].[Activity]
           ([age]
           ,[subject]
           ,[theme]
           ,[content]
           ,[title])
     VALUES
           (10
           ,'Mathematic'
           ,'Arithmetics Operation'
           ,'The four basic arithmetic operations in Maths, for all real numbers, are:

Addition (Finding the Sum; ‘+’)
Subtraction (Finding the difference;  ‘-’)
Multiplication (Finding the product; ‘×’ )
Division (Finding the quotient; ‘÷’)
Let us discuss all these four basic arithmetic operations with rules and examples in detail.'
           ,'Basic Arithmetic Operations')
GO

INSERT INTO [dbo].[Lesson]
           ([id_member]
           ,[id_activity]
           ,[lesson_description])
     VALUES
           (4,1,'Today we will learn about Arithmetics Operation and we gonna solve some examples')
GO

INSERT INTO [dbo].[Quiz]
           ([points]
           ,[id_member]
           ,[id_activity])
     VALUES
           (99.8,4,1)
GO

INSERT INTO [dbo].[Score]
           ([total_result]
           ,[id_quiz]
           ,[id_member])
     VALUES
           (150,1,4)
GO
INSERT INTO [dbo].[Question]
			([question_text] 
			,[correct_answer]
			,[id_quiz]
			,[wrong_question1]
			,[wrong_question2]
			,[wrong_question3]
			)
	VALUES ('Which number comes after 4?','5',1,'2','3','6'),
	('Which number comes before 4?','3',1,'2','5','10'),
	('Which number comes after 8?','9',1,'7','6','11'),
	('Which number comes after 2?','3',1,'4','1','5'),
	('Which number comes before 6?','5',1,'4','7','8'),
	('Which number comes after 6?','7',1,'5','4','8'),
	('Which number comes after 4?','5',1,'3','2','6')


	