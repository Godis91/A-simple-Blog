const initState = {
  posts: [
    {
      id: "1",
      title: "I am a champion",
      body:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dignissimos tempore iure esse deleniti praesentium est in commodi atque maxime."
    },
    {
      id: "2",
      title: "Go win it all",
      body:
        "libero vitae? Soluta dolor rem, neque sapiente at doloribus perferendis inventore expedita qui, animi voluptas iste nobis adipisci."
    },
    {
      id: "3",
      title: "The land is green",
      body:
        "Magnam soluta nihil, consequatur quae assumenda quibusdam quo sapiente nemo? Aliquid numquam, corrupti nulla ad, officia molestiae eaque neque nemo minima commodi quam inventore "
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });

    return {
      ...state,
      posts: newPosts
    };
  }

  return state;
};

export default rootReducer;
