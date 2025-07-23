const styleSelect = document.getElementById("style-select");
const avatarImage = document.getElementById("avatar-image");

// Mapping baddie vibes to their avatar image filenames
const avatarMap = {
  malibu: "avatars/malibu.png",
  bubblegum: "avatars/bubblegum.png",
  glossy: "avatars/glossy.png",
  barbie: "avatars/barbie.png"
};

// When the dropdown changes, update the avatar image
styleSelect.addEventListener("change", () => {
  const selectedStyle = styleSelect.value;
  const avatarPath = avatarMap[selectedStyle];

  if (avatarPath) {
    avatarImage.src = avatarPath;
  }
});


