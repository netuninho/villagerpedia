interface FilterGroupProps {
  title: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function FilterGroup({
  title,
  options,
  selected,
  onChange,
}: FilterGroupProps) {
  function handleCheckboxChange(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  }

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
              checked={selected.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="accent-parrotPink w-4 h-4 rounded-md border-cadetBlue cursor-pointer"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
