import React from "react";

const commentData = [
  {
    id: 1,
    name: "John",
    text: "Great post!",
    replies: [
      {
        id: 2,
        name: "Jane",
        text: "Thank you for sharing this.",
        replies: [], // Add empty array for replies
      },
      {
        id: 3,
        name: "Bob",
        text: "I agree with your points",
        replies: [
          {
            id: 4,
            name: "Alice",
            text: "Nice blog",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        name: "Alice",
        text: "Nice blog",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    name: "John",
    text: "Great post!",
    replies: [
      {
        id: 2,
        name: "Jane",
        text: "Thank you for sharing this.",
        replies: [],
      },
      {
        id: 3,
        name: "Bob",
        text: "I agree with your points",
        replies: [],
      },
      {
        id: 4,
        name: "Alice",
        text: "Nice blog",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: "John",
    text: "Great post!",
    replies: [
      {
        id: 2,
        name: "Jane",
        text: "Thank you for sharing this.",
        replies: [],
      },
      {
        id: 3,
        name: "Bob",
        text: "I agree with your points",
        replies: [],
      },
      {
        id: 4,
        name: "Alice",
        text: "Nice blog",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm rounded-2xl bg-gray-100 my-2">
      <div>
        <img
          className="h-10 w-10 m-2 "
          src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
          alt="user"
        />
      </div>
      <div className="px-3">
        <div className=" font-bold">{name}</div>
        <div className="">{text}</div>
        {replies.length ? (
          <div className="text-blue-700 hover:cursor-pointer font-semibold">
            {replies.length} replies
          </div>
        ) : null}
      </div>
    </div>
  );
};
// const CommentList = ({ comments }) => {
//   const { replies } = comments;
//   console.log("replies", replies);
//   return comments.map((comment) => (
//     <div>
//       <Comment data={comment} />
//       <div className="pl-8">
//         <CommentList data={comments.replies} />
//       </div>)
//     </div>
//   ));
// };

const CommentList = ({ comments }) => {
  return comments.map((comment, id) => (
    <div key={id}>
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div>
          <div className="pl-8 border border-l-black">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      )}
    </div>
  ));
};
console.log(commentData);
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      Comments:
      <div>
        <CommentList className="" comments={commentData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
