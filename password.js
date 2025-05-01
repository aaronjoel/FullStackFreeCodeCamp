function generatePassword(length) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let prevIdx = -1;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      let randIndex = Math.floor(Math.random() * str.length); // use let, not const
      while (randIndex === prevIdx) {
        randIndex = Math.floor(Math.random() * str.length);
      }
      password += str[randIndex];
      prevIdx = randIndex;
    }
  
    return password;
  }
  
  let password = generatePassword(7);
  console.log(`Generated password: ${password}`);
  