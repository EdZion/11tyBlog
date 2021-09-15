const axios = require('axios');

module.exports = async () => {
    const { data } = await axios.get('https://api.github.com/users/edzion/repos');

    console.log(data);

    return data;
};