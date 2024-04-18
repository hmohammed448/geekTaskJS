let cont = document.querySelector(".cont");

let pageCount = 1;
let postCount = 1;

// for POSTS fetching
let fetchPosts = async () => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?userId=${pageCount}`
  );
  let data = await response.json();
  //   console.log(data);

  data.forEach((ele) => {
    let createHTML = `
        <div class="post_id">${postCount++}</div>
        <h4 class="post_title"><span>Title : </span>${ele.title}</h4>
        <p class="post_body"><span>Body : </span>${ele.body}</p>`;

    // Create a temporary container element to hold the HTML string
    let tempContainer = document.createElement("div");
    tempContainer.className = "post";
    tempContainer.innerHTML = createHTML;

    // Append the child nodes of the temporary container to the actual container
    cont.appendChild(tempContainer);
  });
};

// for COMMENTS fetching
let fetchComments = async () => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/?postId=${pageCount}`
  );
  let data = await response.json();
  //   console.log(data);

  data.forEach((ele) => {
    let createHTML = `
        <div class="post_id">${postCount++}</div>
        <h4 class="post_title"><span>Name : </span>${ele.name}</h4>
        <a href="mailto: ${ele.email}"><h6 class="comment_email"><i class="material-symbols-outlined">mail</i> :
         ${ele.email}</h6></a>
        <p class="post_body"><span>Comment : </span>${ele.body}</p>`;

    // Create a temporary container element to hold the HTML string
    let tempContainer = document.createElement("div");
    tempContainer.className = "post";
    tempContainer.innerHTML = createHTML;

    // Append the child nodes of the temporary container to the actual container
    cont.appendChild(tempContainer);
  });
};

if (
  confirm(
    "Confirm if you want to see Comments OR cancel if you want to see Posts?"
  )
) {
  fetchComments();
  window.addEventListener("scroll", () => {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setTimeout(() => {
        pageCount++;
        fetchComments();
      }, 100);
    }
  });
} else {
  fetchPosts();
  window.addEventListener("scroll", () => {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setTimeout(() => {
        pageCount++;
        fetchPosts();
      }, 100);
    }
  });
}
