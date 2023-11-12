function Time() {
  return (
    <center>
      This is the current Time:{new Date().toLocaleDateString()}-
      {new Date().toLocaleTimeString()}
    </center>
  );
}
export default Time;
