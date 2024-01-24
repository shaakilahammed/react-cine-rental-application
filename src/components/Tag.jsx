const Tag = ({ tags }) => {
  return (
    <div className="flex gap-1">
      {tags.map((tag, index) => {
        if (tag === 'trending') {
          return (
            <span
              key={index}
              className="inline-flex items-center px-1 rounded-md text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500"
            >
              {tag}
            </span>
          );
        } else if (tag === 'new-release') {
          return (
            <span
              key={index}
              className="inline-flex items-center px-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"
            >
              {tag}
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className="inline-flex items-center px-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500"
            >
              {tag}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Tag;
