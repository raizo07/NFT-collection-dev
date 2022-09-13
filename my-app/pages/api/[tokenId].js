// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const tokenId = req.query.tokenId;
 
  const name = `Crypto Dev #$(tokenId)`;
  const description = "CryptDevs is an NFT Collection for Web3 Developers";
  const image = `https://raw.githubusercontent.com/raizo07/NFT-collection-dev/main/my-app/public/cryptodevs/${Number(tokenId) - 1}.svg`;

  return res.json({
    name: name,
    description: description,
    image: image,
  });

}
