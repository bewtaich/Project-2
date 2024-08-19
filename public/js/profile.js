
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const body = document.querySelector('#blog-description').value.trim();

  if (title && body) {
    const response = await fetch(`/api/upload`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const newCommentHandler = async (event) => {
  event.preventDefault();
  const id = localStorage.getItem(`comment_id`);
  const body = document.querySelector('#comment-description').value.trim();

  console.log(id)
    if (body && id) {
      const response = await fetch(`/api/sub/${id}`, {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };
document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);