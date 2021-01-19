function mapChooser(locationName) {
  if (!locationName) locationName = "none";
  return `/images/${locationName}.png`;
}
export default mapChooser;
