let input = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
      }
    }
  ];
  
  function calAverage(scores) {
    let total = 0;
    let count = 0;
    
    for (let subject in scores) {
      if (scores.hasOwnProperty(subject)) {
        total += scores[subject];
        count++;
      }
    }
    
    if (count > 0) {
      return Math.round(total / count); 
    } else {
      return 0;
    }
  }
  
  let output = input.map(student => {
    let studentKey = Object.keys(student)[0];
    let studentScores = student[studentKey];
    
    let average = calAverage(studentScores);
    
    return { [studentKey]: { average } };
  });
  
  console.log(output);
  