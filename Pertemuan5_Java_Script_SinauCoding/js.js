var i;
for (i = 1; i < 11; i++) {
  if (i < 7) {
    console.log("bus transjakarta " + i + " beroprasi dengan baik ");
  } else {
    if (i == 8) {
      console.log("bus transjakarta " + i + "  sedang lembur");
    } else {
      console.log("bus transjakarta " + i + " tidak beroprasi dengan baik ");
    }
  }
}
