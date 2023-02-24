
const openai = require('open-ai');

export const  getImage = async(prompt, n, size) => {

const response = await openai.createImage({
    prompt: `${prompt}`,
    n: n,
    size: `${size}`,
});

const image_url = response.data.data[0].url;

return image_url;
}


// check if url can be used to upload image 
  //if not a buffer needs to be used with node
    //look up how to extract buffer with node fs()
// export const getImageEditable = async (prompt, n, size) => {

//     const response = await openai.createImageEdit(
//         fs.createReadStream("sunlit_lounge.png"),
//         fs.createReadStream("mask.png"),
//         `${prompt}`,
//         n,
//         `${size}`
//     );

//     const image_url = response.data.data[0].url;

//     return image_url;
// }

module.exports = { getImage };