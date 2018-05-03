## Database Directory

### db.js
File which exports the database connection object. The connection is established to MongoDB through the ODM Mongoose and the credentials are pulled from the .env file.

### Models
Folder which contains Mongoose models for Users and for Conversations.

```
db
  |
  -- db.js
  |
  -- models
    |
    -- User.js
    |
    -- Conversation.js

```