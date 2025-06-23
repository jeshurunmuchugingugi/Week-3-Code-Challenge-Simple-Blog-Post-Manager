const form = document.getElementById('post-form');
const blogIdentity = document.getElementById('blog-identity');
const blogContentContainer = document.getElementById('blog-content-container');

let editPostId = null; // Used for tracking edit mode

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('post-title').value;
  const author = document.getElementById('author-name').value;
  const image = document.getElementById('image-url').value;
  const content = document.getElementById('post-content').value;
  const date = new Date().toISOString().split("T")[0];

  const postData = { title, author, date, image, content };

  if (editPostId) {
    // Update
    await fetch(`http://localhost:3000/posts/${editPostId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    editPostId = null;
  } else {
    // Create new post
    await fetch("http://localhost:3000/posts", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
  }

  form.reset();
  loadPosts();
});

async function loadPosts() {
  const res = await fetch("http://localhost:3000/posts");
  const posts = await res.json();

  blogIdentity.innerHTML = '';
  blogContentContainer.innerHTML = '';

  posts.forEach((post) => {
    // Sidebar identity
    const identityDiv = document.createElement('div');
    identityDiv.className = 'blog-content-area';
    identityDiv.innerHTML = `
      <h1>${post.title}</h1>
      <p>By ${post.author} ${post.date}</p>
    `;
    blogIdentity.appendChild(identityDiv);

    identityDiv.addEventListener('click', () => {
        displaySinglePost(post); // Show only the clicked post
      });
      


    // Full post content
    const blogDiv = document.createElement('div');
    blogDiv.className = 'blog-content-div1';
    let shortContent = post.content;
    if (post.content.length > 150) {
        shortContent = post.content.slice(0, 250) + '...';
}

    blogDiv.innerHTML = `
        <div class="titles">
            <h1 id="blog-title">${post.title}</h1>
            <p>By ${post.author} ${post.date}</p>
        </div>
        <div class="btns">
            <button onclick="editPost(${post.id})">Edit</button>
           <button onclick="deletePost(${post.id})">Delete</button>
        </div>
      </div>
      <div class="img">
       <img src="${post.image}" alt="Post Image">
      <p id="message-blog">${shortContent}</p>
      </div>
       
      <hr />

    `;
    blogContentContainer.appendChild(blogDiv);

    const messageBlog = document.getElementById('message-blog');
  });
}

function displaySinglePost(post) {
    blogContentContainer.innerHTML = ''; // Clear previous content
    let shortContent = post.content;
    if (post.content.length > 150) {
        shortContent = post.content.slice(0, 250) + '...';
    }
  
    const blogDiv = document.createElement('div');
    blogDiv.className = 'blog-content-div1';
    blogDiv.innerHTML = `
      <div class="titles">
        <h1 id="blog-title">${post.title}</h1>
        <p>By ${post.author} ${post.date}</p>
      </div>
      <div class="btns">
        <button onclick="editPost(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      </div>
      <div class="img">
        <img src="${post.image}" alt="Post Image">
        <p id="message-blog">${shortContent}</p>
      </div>
    `;
  
    blogContentContainer.appendChild(blogDiv);

    const messageBlog = document.getElementById('message-blog');
    function textReducer(){
        if(messageBlog.textContent.length >= 150){
           const newParagraph = messageBlog.textContent.slice(0,150) +"";
           messageBlog.textContent = newParagraph;
        }
    }
    textReducer();
  }
  
const blogTitle = document.getElementById("blog-title");

async function editPost(id) {
  const res = await fetch(`http://localhost:3000/posts/${id}`);
  const post = await res.json();

  document.getElementById('post-title').value = post.title;
  document.getElementById('author-name').value = post.author;
  document.getElementById('image-url').value = post.image;
  document.getElementById('post-content').value = post.content;

  editPostId = id;
  document.getElementById('submit-button').textContent = "Update Post";
}

async function deletePost(id) {
  if (confirm("Are you sure you want to delete this post?")) {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    });
    loadPosts();
  }
}

// Load posts on page load
window.addEventListener('DOMContentLoaded', loadPosts);
