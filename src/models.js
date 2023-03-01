const messageStatus = {
    1 : "Sent",
    2: "Received",
    3: "Read"
  };

const messageType = {
    1: "SMS",
    2: "E-mail",
    3: "Push Notification"
  };  

const messagePost = {
    "message": {
        "id_type": "1",
        "id_user": "1",
        "id_channel": "1",
        "body": "Dummy messages for general purposes.",
    }
}  

const log = [
    {
      user: {
        id: 1,
        name: "Johnatan Harker",
      },
      message: {
        created_at: "YYYY-MM-DD hh:mm:ss",
        status: 0,
        channel: "Movies",
        body: {
          was_edited: false,
          content: "Hey, Bram. Whats up?"
        }
      }
    },
    {
      user: {
        id: 1,
        name: "Ken Masters",
      },
      message: {
        created_at: "YYYY-MM-DD hh:mm:ss",
        status: 0,
        channel: "Sports",
        body: {
          was_edited: false,
          content: "What's up, Ryu?"
        }
      }
    },
    {
      user: {
        id: 1,
        name: "Ryu Hayabusa",
      },
      message: {
        created_at: "YYYY-MM-DD hh:mm:ss",
        status: 0,
        channel: "Finances",
        body: {
          was_edited: false,
          content: "My mana is getting low."
        }
      }
    }
  ]