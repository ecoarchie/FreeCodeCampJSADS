function telephoneCheck(str) {
  const regex =
    /^([(](?=\d{3}\)))?[1]?[ ]?([(](?=\d{3}\)))?[0-9]{3}((?<=\(\d{3})[)])?[-| ]?[0-9]{3}[-| ]?[0-9]{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
