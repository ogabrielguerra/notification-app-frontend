const messageStatus = {
    0 : "Sent",
    1: "Received",
    2: "Read"
  };

const messagePost = {
    "message": {
        "user": {
            "id": "1"
        },
        "body": {
            "content": "Dummy messages for general purposes."
        },
        "channel_id": "1"
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