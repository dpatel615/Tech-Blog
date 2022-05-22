
async function newFormHandler(event) {
   event.preventDefault();

   const title = document.querySelector('input[name="post-title"]').nodeValue;
   const post_text = document.querySelector('textarea[name="post-text"]').nodeValue;
    
   const response = await fetch(`/api/posts `, {
       method: 'POST',
       body: JSON.stringify ({
           title,
           post_text
       }),
       header: {
           'Content-Type': 'application/json'
       }
   });

   if (response.ok) {
       document.location.replace('/dashboard/');
   } else {
       alert(response.statusText);
   }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);