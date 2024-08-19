# BlogSpace

For this project, the user is presented with a landing page containing a navigation bar and a list of blog posts created by other users. The user can choose to signup login and access more features. Once an account is signed up or logged in, the user is directed to a modified landing page with more features, including the option to add comments to existing blog posts. The user can also navigate to a profile page containing their own blog posts, as well as an option to upload a personal profile picture.

The intent of this application is to provide a place for developers and writers to communicate with each other and share ideas.


## User Story

As a blogger, I need a secure place to share my thoughts and ideas, and get feedback on my writing.

As a consumer of creative content, I want to read material that is presented by people who share my interests.

As a developer and writer, I want to find a place where I can network with other professionals.


## Acceptance Criteria

When I navigate to the application, I am presented with the landing page where I can see the most recent blogs posted by other users.

If I click on the login button, I am taken to a working login/sign up page.

When I submit a sign up form, my login credentials are saved in a secure database.

Once I submit the correct login criteria, I am redirected to a more personalized landing page with my profile image, a link to my blog page, and a sign out button in the nav bar.

When I navigate to my blog page, I am presented with a list of my blog posts, as well as a form to create a new post and a form for uploading a new profile image.

When I complete and submit the new blog form, a new blog post is generated at the top of the list of existing posts.

When I upload an image file from the form in the nav bar, my profile image is updated using the new image file.

When I click the 'new comment' button, I am presented with a form which appends a comment to the comments section of the relative blog post.

When I click the logout button, I am signed out of my page and redirected to the landing page.


## Screenshots

### Wireframes

![Homepage](/docAssets/Homepage%20Wireframe.png)
![MobileView](/docAssets/Mobile%20View%20Wireframe.png)
![Login](/docAssets/Login%20Wireframe.png)
![Profile](/docAssets/Profile%20Wireframe.png)

### Screenshots Coming Soon!


## Deployment

[Repo](https://github.com/bewtaich/Project-2)<br>
[BlogSpace](https://blogspace-application.onrender.com/)<br>

The application homepage contains a navigation bar and a list of blog posts created by other users. The user is not yet logged in, and some features will not be available at this time. To access more features, the user can click on the 'login' button, which will take them to the login page where both a login form and a signup form exist.

Completing the signup form will create a new user model in the database and automatically login the user. Alternatively, existing users can complete the login form. Either option will redirect the user to the homepage with access to all available features.

A comment button below the body of each blog post, once clicked, opens a comment form which appends a comment to the relative blog post when submitted. In the navigation bar, there is a new 'Profile' button which will redirect the user to their own profile page. 

On the profile page, the user can find a form in the navigation bar where they can upload an image file. Once submitted, the image file will appear in the navigation bar as a profile picture. There is also a 'Blog Post' form in the body of the page. Once submitted, A new blog is generated at the top of a list just below the form. All blogs created by the user appear on this portion of the page.

A logout button also exists in the navigation bar, and if the user wants to return to the homepage, clicking on the app icon will redirect them.



## Authors

Brian Taich
Chris Moore
Jarvis Washington
Will Ziebert


## License

MIT License

Copyright (c) 2024 bewtaich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Acknowledgements

[ReadMe Editor](https://readme.so/editor)<br>
CSS Framework: [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)<br>
[Express Multer Middleware](https://expressjs.com/en/resources/middleware/multer.html)

