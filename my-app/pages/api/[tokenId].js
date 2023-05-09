// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Base URI + tokenID 
// Base URI = https://nft-collection-raizo07.vercel.app/api/
// Token ID = 1

// TokenURI(1) => https://example.com/1

export default function handler(req, res) {
  const tokenId = req.query.tokenId;
 
  const image_url = "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";

  res.status(200).json({
    name: "Crypto Dev #" + tokenId,
    description: "Crypto Dev is a collection of developers in crypto",
    image: image_url + tokenId + ".svg",
  });
}
