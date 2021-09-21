const axios = require('axios');

module.exports = async () => {
    axios
        .get('https://api.github.com/users/edzion/repos')
        .then(function (response) {
            const { data } = response;
            return data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
};
