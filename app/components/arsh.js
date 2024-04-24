<<<<<<< HEAD
function Arsh({ onSelect }) {
    return (
       <arsh className="fixed bottom-0 left-0 right-0 flex justify-center p-4 bg-gray-100 bg-opacity-0 backdrop-blur-lg z-50">
        <button
          className="mx-4 px-5 py-3 border border-transparent rounded-md text-base font-semibold text-gray-750 bg-white hover:bg-gray-60"
          onClick={() => onSelect('local')}
          type="button"
        >
          Local Clock
        </button>
        <button
          className="mx-4 px-5 py-3 border border-transparent rounded-md text-base font-semibold text-gray-750 bg-white hover:bg-gray-60"
          onClick={() => onSelect('world')}
          type="button"
        >
          World Clock
        </button>
      </arsh>
    );
  }
=======
function Arsh({ onSelect }) {
    return (
       <arsh className="fixed bottom-0 left-0 right-0 flex justify-center p-4 bg-gray-100 bg-opacity-0 backdrop-blur-lg z-50">
        <button
          className="mx-4 px-5 py-3 border border-transparent rounded-md text-base font-semibold text-gray-750 bg-white hover:bg-gray-60"
          onClick={() => onSelect('local')}
          type="button"
        >
          Local Clock
        </button>
        <button
          className="mx-4 px-5 py-3 border border-transparent rounded-md text-base font-semibold text-gray-750 bg-white hover:bg-gray-60"
          onClick={() => onSelect('world')}
          type="button"
        >
          World Clock
        </button>
      </arsh>
    );
  }
>>>>>>> a94ee18406908d1f64985510a400b32b67515cb2
  export default Arsh;