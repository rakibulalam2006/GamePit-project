import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateProfileFunc ,setLoading } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;

    updateProfileFunc(displayName, photoURL)
      .then(() => {
        toast.success("Profile Updated Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    document.title = "Update Profile - GamePit";
  }, []);

  return (
    <div className="max-w-md mx-auto p-5 border rounded-lg">
      <h2 className="text-2xl font-bold mb-5 text-center">Update Profile</h2>

      <form onSubmit={handleUpdate}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
           
            className="border p-3 rounded text-black bg-white"
            
          />

          <input
            type="text"
            name="photo"
            defaultValue={user?.photoURL}
            
            className="border p-3 rounded text-black bg-white"
            
          />

          <button type="submit" className="mu-btn">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;