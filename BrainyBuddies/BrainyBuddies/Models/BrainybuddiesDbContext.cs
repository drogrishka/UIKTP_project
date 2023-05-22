using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BrainyBuddies.Models;

public partial class BrainybuddiesDbContext : DbContext
{
    public BrainybuddiesDbContext()
    {
    }

    public BrainybuddiesDbContext(DbContextOptions<BrainybuddiesDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Activity> Activities { get; set; }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<Lesson> Lessons { get; set; }

    public virtual DbSet<Member> Members { get; set; }

    public virtual DbSet<Quiz> Quizzes { get; set; }

    public virtual DbSet<RefreshToken> RefreshTokens { get; set; }

    public virtual DbSet<Score> Scores { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-62VUS53; database=brainybuddiesDB; Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Activity>(entity =>
        {
            entity.HasKey(e => e.IdActivity).HasName("PK__Activity__BBF4A247A18B22E7");

            entity.ToTable("Activity");

            entity.Property(e => e.IdActivity).HasColumnName("id_activity");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Content)
                .HasMaxLength(2000)
                .IsUnicode(false)
                .HasColumnName("content");
            entity.Property(e => e.Subject)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("subject");
            entity.Property(e => e.Theme)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("theme");
            entity.Property(e => e.Title)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("title");
        });

        modelBuilder.Entity<Course>(entity =>
        {
            entity.Property(e => e.ImgUrl).HasColumnName("ImgURL");
        });

        modelBuilder.Entity<Lesson>(entity =>
        {
            entity.HasKey(e => e.IdLesson).HasName("PK__Lesson__BC5E15A032B873D1");

            entity.ToTable("Lesson");

            entity.Property(e => e.IdLesson).HasColumnName("id_lesson");
            entity.Property(e => e.IdActivity).HasColumnName("id_activity");
            entity.Property(e => e.IdMember).HasColumnName("id_member");
            entity.Property(e => e.LessonDescription)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("lesson_description");

            entity.HasOne(d => d.IdActivityNavigation).WithMany(p => p.Lessons)
                .HasForeignKey(d => d.IdActivity)
                .HasConstraintName("fk_id_acitivity");

            entity.HasOne(d => d.IdMemberNavigation).WithMany(p => p.Lessons)
                .HasForeignKey(d => d.IdMember)
                .HasConstraintName("fk_id_member");
        });

        modelBuilder.Entity<Member>(entity =>
        {
            entity.HasKey(e => e.IdMember).HasName("PK__Member__4CD3FB2B429DF1AB");

            entity.ToTable("Member");

            entity.Property(e => e.IdMember).HasColumnName("id_member");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Gender)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("gender");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("role");
            entity.Property(e => e.Surname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("surname");
            entity.Property(e => e.Username)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("username");
        });

        modelBuilder.Entity<Quiz>(entity =>
        {
            entity.HasKey(e => e.IdQuiz).HasName("PK__Quiz__20800BD155FF8CEE");

            entity.ToTable("Quiz");

            entity.Property(e => e.IdQuiz).HasColumnName("id_quiz");
            entity.Property(e => e.IdActivity).HasColumnName("id_activity");
            entity.Property(e => e.IdMember).HasColumnName("id_member");
            entity.Property(e => e.Points).HasColumnName("points");

            entity.HasOne(d => d.IdActivityNavigation).WithMany(p => p.Quizzes)
                .HasForeignKey(d => d.IdActivity)
                .HasConstraintName("fk_id_acitivity2");

            entity.HasOne(d => d.IdMemberNavigation).WithMany(p => p.Quizzes)
                .HasForeignKey(d => d.IdMember)
                .HasConstraintName("fk_id_member2");
        });

        modelBuilder.Entity<RefreshToken>(entity =>
        {
            entity.HasKey(e => e.IdToken).HasName("PK__RefreshT__3C2FA9C402BA09DB");

            entity.ToTable("RefreshToken");

            entity.Property(e => e.IdToken).HasColumnName("id_token");
            entity.Property(e => e.IdMember).HasColumnName("id_member");
            entity.Property(e => e.IsActive)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("isActive");
            entity.Property(e => e.RefreshToken1)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("refreshToken");

            entity.HasOne(d => d.IdMemberNavigation).WithMany(p => p.RefreshTokens)
                .HasForeignKey(d => d.IdMember)
                .HasConstraintName("fk_id_member4");
        });

        modelBuilder.Entity<Score>(entity =>
        {
            entity.HasKey(e => e.IdScore).HasName("PK__Score__47406A110FB16B9E");

            entity.ToTable("Score");

            entity.Property(e => e.IdScore).HasColumnName("id_score");
            entity.Property(e => e.IdMember).HasColumnName("id_member");
            entity.Property(e => e.IdQuiz).HasColumnName("id_quiz");
            entity.Property(e => e.TotalResult).HasColumnName("total_result");

            entity.HasOne(d => d.IdMemberNavigation).WithMany(p => p.Scores)
                .HasForeignKey(d => d.IdMember)
                .HasConstraintName("fk_id_member3");

            entity.HasOne(d => d.IdQuizNavigation).WithMany(p => p.Scores)
                .HasForeignKey(d => d.IdQuiz)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_id_quiz");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
