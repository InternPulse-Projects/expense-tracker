import { Image } from "@chakra-ui/react";

function ProfileImage(props) {
  return (
    <>
      <Image
        src="https://bit.ly/dan-abramov"
        alt="profile-image"
        objectFit="contain"
        rounded="full"
        cursor="pointer"
        loading="lazy"
        {...props}
      />
    </>
  );
}

export default ProfileImage;
