interface FilterGroupProps {
  title: string;
  options: string[];
}

export default function FilterGroup({ title, options }: FilterGroupProps) {
  return (
    <div className="mb-6">
      <h3 className="text-liberty font-medium mb-2">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 text-liberty cursor-pointer"
          >
            <input
              type="checkbox"
              className="accent-parrotPink w-4 h-4 rounded-md border-cadetBlue cursor-pointer"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
