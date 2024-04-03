
export default function Search() {
  return (
    <div className="flex mt-5">
      <input 
        type="text" 
        placeholder="Search..." 
        className="border-2 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:border-blue-500 focus:outline-none"
      />
      <button className="ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4a69bd" className="inline w-6 h-6">
          <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
