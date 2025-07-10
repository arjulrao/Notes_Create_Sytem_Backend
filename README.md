# 📝 Task Notes Creating Backend

This is a simple **Node.js + Express** micro project for creating, viewing, deleting, and updating notes. It is a fully functional backend that works without any frontend — tested using **Postman** or any other REST client.

---

## 🔧 Features

- **Create Notes** – Add a new note with a title and description.
- **View Notes** – See all notes.
- **Delete Notes** – Delete a note by its index.
- **Update Notes** – Update the title of a specific note by its index.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **Postman** (for testing APIs)

---


## 📌 API Endpoints

### ➕ Create Note

- **POST** `/notes`
- **Body (JSON)**:
  ```json
  {
    "title": "Note Title",
    "description": "Note Description"
  }

# Response 
{
  "Message": "Title and Description add successful"
}

### 📄 Get All Notes

- **GET** `/notes`

# Response:

[
  {
    "title": "Note Title",
    "description": "Note Description"
  }
]


### ❌ Delete Note
- **DELETE** `/notes/:index`

- Example: /notes/1 deletes the first note

# Response:

{
  "Message": "Note Delete Successful."
}

### ✏️ Update Note

- **PATCH** `/notes/:index`

- Only updates the title

- Body (JSON):
{
  "title": "Updated Title"
}


# Response:

{
  "Message": "Note update successful."
}


### 🛠 How to Run

1. Clone the repository:

git clone `https://github.com/arjulrao/task_notes_creating_backend`
cd `task_notes_creating_backend`


2. Install dependencies:

`npm install``

3. Run the server:

`node server.js`

4. Open Postman and test APIs at:

`http://localhost:3000`

📌 Notes
- This project does not use a database — it stores notes in memory.

- Ideal for learning REST API basics and testing with Postman.

- For persistence, you can later connect MongoDB or any other DB.

# 📬 Author
**Arjul Rao**
Frontend Developer | Learning Full Stack
🔗 GitHub | 📸 Instagram

# 🖤 Support
If you find this useful, feel free to ⭐️ the repo and share!


---

`Let me know if you'd like to include a GIF/demo of Postman testing or convert this into a Notion-style layout!`
