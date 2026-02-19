# Projectify

This simple project is for learning antd and redux state management.
It uses a simple mock api for data.

### Users
- Students -> They upload projects through the app and get graded by their tutors/lecturers
- Tutor/Lecturer -> They view the uploaded projects and grade them.
  
The projects will be displayed on a leaderboard visible to everyone to see the top projects.

### Entities
Since MockApi.io limits to 2 entities on their free plan, I will be having only 2 entities

- Users(id, fullname, avatar, email, password, role:{student or tutor})
- Projects(id, user_id, title, description, points, image)