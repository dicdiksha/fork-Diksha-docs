---
title: Types of Users
description: Description of the different types of users on DIKSHA
keywords: 'Admin, System Admin, Org Admin, Instructor, Student, Roles, Book Creator, Book Reviewer, Badge Issuer, Textbook Badge Issuer, Content Reviewer, Book Creator, Permissions, Flag Reviewer'
showSidebar: false
allowSearch: false
order: 1
---

On DIKSHA, each user type is associated with a user role. The permissions and responsibilities vary for each user role.  
Before users are assigned with appropriate roles, it is important to understand: <br>1. Responsibilities of each user role <br>2. Features accessible to each user role

This section elaborates the various user types and their associated responsibilities on DIKSHA

### User Roles and Respective Responsibilities

|User Role    | Description | Content Creation | Review, Reject, Publish | Upload Content |Other Actions|
| ---------------------------- | -------------------------------------------- |------------|----|----|----|
|**Organization Administrator**  | A registered user with the organization administrator rights  |   No  |   No  |   No  |   ✔️ |   
| **Course Mentor** | A registered user who guides and instructs learners on how to undertake a course. They create batches of users to enroll for a course and ensure completion of a course within a stipulated time |       No       |       No       |  No | ✔️ [read more](#other-actions)|
| **Content Reviewer** | A registered user who assesses  created content within prescribed guidelines | No | ✔️  | ✔️  | No |
| **Teacher Badge Issuer** | A registered user who is responsible for assigning badges to teachers based on the discretion of the concerned organization | No | No | No | ✔️ [read more](#other-actions)|
| **Book Creator** | A registered user who curates and compiles books. Registered users become book creators when book creation rights are assigned to them | ✔️  (Only Books) | No | ✔️ | No |
|**Official Textbook Badge Issuer**| A registered use who is responsible for assigning badges to textbook |    No  |    No  |   No  |   ✔️  |
| **Book Reviewer** | A registered user who assesses books within defined and prescribed guidelines| No | ✔️  (Only Books) | No | No |
| **Public** | A public user is any user with registered credentials | No | No | No | ✔️ [read more](#other-actions)|
| **Announcement Sender** | A registered user who is assigned the tole to create and send announcements. The Announcement feature allows to send system wide messages to a target audience| No | No | No | ✔️ [read more](#other-actions) |
| **Content Creator** | A registered user with permission to create content | ✔️ (Collection, Course, Study Material, Lesson Plan) | No | ✔️ | No |
| **Flag Reviewer** | A registered user who assesses flagged content within prescribed guidelines | No | ✔️ (Only flagged content) | No | No |
| **Report Viewer** | A report viewer can access reports. A report viewer of a specific tenant has access to the reports of that specific tenant only. This role can be granted/ removed by an admin in the user edit page. Admins have this role assigned to them by default.| No | No | No | ✔️ [read more](#other-actions)|
| **Program Manager** | Program Managers has access to the data of all the resources that are part of a specific program. | No | No | No | ✔️ [read more](#other-actions)|
| **Program Designer** | A registered user with permission to create program | No | No | No | ✔️ [read more](#other-actions)|

### User Interface for Different User Roles

The User Interface (UI) differs for each DIKSHA user role. The UI elements vary based on the rights assigned to users.

|User Role | Profile | Workspace | To Do (Home Page) | Courses | Library |
|-------------------|---------|------|----------------|----------------------------|------------------------|
|Content Creator, Content Reviewer, Flag Reviewer & Course Mentor |✔️|✔️ |✔️|✔️|✔️|
|Book Creator & Book Reviewer |✔️|✔️|✔️|✔️|✔️|
|Teacher Badge Issuer |✔️|No|✔️|✔️|✔️|
|Announcement Sender|✔️|No|No|No |No|
|Public |✔️|No|✔️|✔️|✔️|

### Other Actions

1. **Course Mentor**: The chief responsibilities of a course mentor are: 
    - Create, edit, and delete batches 
    - Add mentors and participants

2. **Teacher Badge Issuer**: Organization administrators create badges and assign users to issue this badge to teachers. A user with teacher badge issuer rights issues these created badges to eligible teachers

3. **Public**: A public user can only view and consume content on DIKSHA. A public user cannot create, curate, review , upload or publish content

4. **Announcement Sender**:  An announcement sender, on DIKSHA, can create and send announcements based on organizational requirements

5. **Report Viewer**: A Report viewer can access reports from the Admin Dashboard page

6. **Program Manager**: The Program Manager is mapped to specific programs that are created and conducted in a specific tenant. A state can have multiple Program Managers.

7. **Program Designer**: A Program Designer has the right to create programs for different entities and different system roles in a particular tenant. A state can have multiple Program Designers.