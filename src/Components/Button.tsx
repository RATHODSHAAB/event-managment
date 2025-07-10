export function Button({label}) {
  return (
    <button
      
      type="button"
      className="mt-4 w-full text-white bg-[#080808dc] hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 pt-1"
    >
      {label}
    </button>
  );
}