const postId = document.querySelector('input[name="post-id"]').value;

// this is the edit form
const editFormHandler = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            image,
            content,
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Something wrong!");
    }
    document.location.replace('/dashboard');
};

// this is delete button
const deleteHandler = async () => {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
};

document.querySelector('.edit-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteHandler);