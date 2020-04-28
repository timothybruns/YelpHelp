import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -v5O_Ihr1596ESAcj_zcxv4N2B64mdgcTffwwjmiVuR-Ep3xebSYoLLc6g111C2k5FLvVAt6CIbSsmyTD2Z-xyNfmYCoPqyRwDa9nsybd_bif6HZuWzqhKdP57weWnYx'
    }
});

