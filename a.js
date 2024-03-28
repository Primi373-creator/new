const cai = require('./lib/ai');

// Call the function with the character ID and message
cai('rXLTGQ5ojO0gx2Uwv2EoD_prbT25bfu0hnlb_WC8sxk', 'hey there')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
