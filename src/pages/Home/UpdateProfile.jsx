import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateProfileFunc, setUser } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(name, photo);

    updateProfileFunc(name, photo)
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });

        toast.success("Profile Updated");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg">
      <form onSubmit={handleUpdate}>
        <div className="flex flex-col gap-3">
          <input
            className="bg-white/20 text-white placeholder:text-gray-200 border border-white/20 focus:ring-2 focus:ring-pink-400"
            name="name"
            defaultValue={user?.displayName}
          />

          <input
            className="bg-white/20 text-white placeholder:text-gray-200 border border-white/20 focus:ring-2 focus:ring-pink-400"
            name="photo"
            defaultValue={user?.photoURL}
          />
        </div>
        <button className="my-btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;