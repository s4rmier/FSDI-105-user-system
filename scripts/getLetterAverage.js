function gradeEquivalent(avg) {
  let equivalent;
  if (avg >= 3.7 && avg <= 4) {
    equivalent = "A";
  } else if (avg >= 3.3 && avg <= 3.69) {
    equivalent = "A-";
  } else if (avg >= 3.0 && avg <= 3.29) {
    equivalent = "B+";
  } else if (avg >= 2.7 && avg <= 2.99) {
    equivalent = "B";
  } else if (avg >= 2.3 && avg <= 2.69) {
    equivalent = "B-";
  } else if (avg >= 2.0 && avg <= 2.29) {
    equivalent = "C+";
  } else if (avg >= 1.7 && avg <= 1.99) {
    equivalent = "C";
  } else if (avg >= 1.3 && avg <= 1.69) {
    equivalent = "C-";
  } else if (avg >= 1.0 && avg <= 1.29) {
    equivalent = "D+";
  } else if (avg >= 0.7 && avg <= 0.99) {
    equivalent = "D";
  } else {
    equivalent = "F";
  }
  return equivalent;
}
