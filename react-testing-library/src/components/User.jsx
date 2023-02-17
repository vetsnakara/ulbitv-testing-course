export const User = ({ user, onDelete }) => {
  return (
    <div data-user>
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};
