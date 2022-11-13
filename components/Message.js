export default function Message({ children, avatar, username, description, timestamp }) {
  let date = new Date(timestamp.seconds*1000);
  let shortDate = date.toLocaleDateString("en-US");
  return (
      <div className="bg-red p-8 border-b-2 rounded-lg">
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={avatar} className="w-10 rounded-full" />
          <h2>{username}</h2>
        </div>
          <div className="text-xs m-5">{shortDate}</div>
        </div>

        <div className="py-4">
          <p>{description}</p>
        </div>
        {children}
      </div>
    );
  }