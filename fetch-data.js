async function fetchUserData() {
  // Function body
  try {
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
const dataContainer = document.getElementById("api-data");
const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchUserData);
}

}