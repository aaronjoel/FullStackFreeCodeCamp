function getAverage(testScores) {
    let avgScore = 0;
    for (let i = 0; i < testScores.length; i++) {
      avgScore += testScores[i];
    }
    return avgScore / testScores.length;
  }
  
  function getGrade(score) {
    if (score >= 100) {
      return "A+";
    } else if (score >= 90 && score <= 99) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 60 && score <= 69) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    let grade = getGrade(score); 
    return grade !== "F";
  }
  
  function studentMsg(scores, studentScore) {
    let classAverage = getAverage(scores);
    let studentGrade = getGrade(studentScore);
    if (hasPassingGrade(studentScore)) {
      return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;
    } else {
      return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
    }
  }
  
  let scores = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
  console.log(getAverage(scores));
  
  scores = [45, 87, 98, 100, 86, 94, 67, 88, 94, 95];
  console.log(getAverage(scores));
  
  scores = [38, 99, 87, 100, 100, 100, 100, 100, 100, 100];
  console.log(getAverage(scores));
  
  let studentScore = 100;
  console.log(`Your grade is: ${getGrade(studentScore)}`);
  
  studentScore = 92;
  console.log(`Your grade is: ${getGrade(studentScore)}`);
  
  studentScore = 76;
  console.log(`Your grade is: ${getGrade(studentScore)}`);
  
  studentScore = 68;
  console.log(`Your grade is: ${getGrade(studentScore)}`);
  
  studentScore = 58;
  console.log(`Your grade is: ${getGrade(studentScore)}`);
  
  console.log('Is A a passing grade: ' + hasPassingGrade(90));
  
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));