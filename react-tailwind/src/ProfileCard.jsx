function ProfileCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-bold">Tayyaba</h2>
      <p className="text-gray-500">Frontend Developer</p>
   <button
  onClick={() => alert("Button Clicked")}
  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
>
  Click Me
</button>
ٍ
    </div>
    
  );
}

export default ProfileCard;
