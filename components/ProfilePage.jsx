import ProfilePictureUpload from "./ProfilePictureUpload";
import ProfileForm from "./ProfileForm";
import PhoneMockup from "./PhoneMockup";

async function ProfilePage({ currentUser }) {
  return (
    <div className="mb-10 h-full lg:grid lg:grid-cols-[1fr_1.59fr]">
      <PhoneMockup currentUser={currentUser} />
      <ProfileForm currentUser={currentUser}>
        <ProfilePictureUpload />
      </ProfileForm>
    </div>
  );
}

export default ProfilePage;
