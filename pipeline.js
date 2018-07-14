const operations = {
  set: (input, arg )=> {
    return arg*1;
  },
  add: (input, arg)=> {
    //we need to add to something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input + arg*1;
  },
  mult: (input, arg)=> {
    //we need to multiply by something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input * arg*1;
  }
};

const pipeline = (str) => {

  // parse arg string into an array where nested array = operations, integer
  const args = str.split(' | ').map((element) => element.split(' '));

  // using reduce on array args
  // accumulator begins at 0
  // nested array consists of operation string and arg value
  // args[0] = [operations string][in,teger string]
  return args.reduce((accumulator, element) => {

    // reduce function invokes operations method (see operations object above),
    // passing in element[0] as operations method string and element[1] as arg (value)
    return operations[element[0]](accumulator, element[1]);

  }, 0);

  // console.log(args);

  // return args;

}

console.log(pipeline('set 1 | mult 10 | mult 4 | add 3'));

module.exports = pipeline;
