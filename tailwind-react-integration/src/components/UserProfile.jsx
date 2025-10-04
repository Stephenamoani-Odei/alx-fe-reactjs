
function UserProfile() {
  return (
    <div class="bg-grey-100 p-8 max-w-sm mx-auto, my-20 round-lg shadow- sm:p-4 md:p-8 max-w-xs max-w-sm  hover:shadow-xl"  className="user-profile">
      <img clas="rounded-full w-36 h-36 mx-auto sm:w-24 h-24 sm:w-36 h-36 hover:scale-110 transition-transform duration-300 ease-in-out" src="https://via.placeholder.com/150" alt="User" />
      <h1 class="text-xl text-blue-800 my-4  sm:text-lg md: text-xl hover:text-blue-500">John Doe</h1>
      <p class="text-grey-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}


export default UserProfile;

