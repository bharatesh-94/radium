const axios = require("axios");
const cryptoModel= require("../Models/cryptoModel")

const getCryptoData = async function (req, res) {
  try {

        let options = {
          headers: {
            Authorization: "Bearer 650f074e-0f8e-4e31-a605-f6c7a34b3824"
          },
          method: "get",
          url: "http://api.coincap.io/v2/assets"
        };
        const x = await axios(options);

        let sortedAsPerGrowth = x.data.data.sort(function (a,b) {return b.changePercent24Hr - a.changePercent24Hr})
          for (let i=0; i<sortedAsPerGrowth.length; i++){
            let data = (({symbol, name, marketCapUsd, priceUsd}) => ({symbol, name, marketCapUsd, priceUsd}))(sortedAsPerGrowth[i])
            await cryptoModel.findOneAndUpdate({"name":data.name},data,{upsert: true})   
          } 
        const finaldDataOfCrypto = await cryptoModel.find()
        res.status(200).send({ data: finaldDataOfCrypto});
  }
    catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
    }
}

module.exports.getCryptoData = getCryptoData;