export async function loader() {
  const products = [
    {
      id: 1,
      name: "Luxury Foundation",
      price: "$39.99",
      image:
        "https://media.istockphoto.com/id/623060244/photo/group-of-compact-make-up-powders.webp?a=1&b=1&s=612x612&w=0&k=20&c=g_6kr9jH-_EWu9EvhJ-TBEKp_soKzCrGHoFyHJkqI88=",
      category: "Foundation",
    },
    {
      id: 2,
      name: "Radiant Blush",
      price: "$29.99",
      image:
        "https://plus.unsplash.com/premium_photo-1723629827844-7d2ac36ad696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFkaWFudCUyMGJsdXNoJTIwaW4lMjBtYWtldXB8ZW58MHx8MHx8fDA%3D",
      category: "Blush",
    },
    {
      id: 3,
      name: "Hydrating Primer",
      price: "$34.99",
      image:
        "https://media.istockphoto.com/id/1688412960/photo/face-essential-oil-and-woman-in-studio-for-skincare-wellness-or-serum-and-cosmetic.webp?a=1&b=1&s=612x612&w=0&k=20&c=DqqI3Zc5NFvk5nquUmy7XMu8qcYUC54Ri2WZE00omv8=",
      category: "Primer",
    },
    {
      id: 4,
      name: "Matte Lipstick",
      price: "$24.99",
      image:
        "https://media.istockphoto.com/id/1137392664/photo/young-woman-applying-lipstick-at-a-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=axyMqTpiss-vjbunO-v152N8KHQ5SAXUTN96tiJp5Xk=",
      category: "Lipstick",
    },
    {
      id: 5,
      name: "Nourishing Concealer",
      price: "$27.99",
      image:
        "https://media.istockphoto.com/id/1206721088/photo/skin-care-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=byputNPIXYjq7EaOuSoIwC-zLyueCXrXu7y_lWz1ACU=",
      category: "Concealer",
    },
    {
      id: 6,
      name: "Bold Eyeliner",
      price: "$19.99",
      image:
        "https://media.istockphoto.com/id/478639548/photo/close-up-view-of-blue-female-eye-with-beautiful-modern-creative.webp?a=1&b=1&s=612x612&w=0&k=20&c=mLCHH1664XNpXqGMKIwBSwaVKOpbC-1d9_fzajGI7Ps=",
      category: "Eyeliner",
    },
    {
      id: 7,
      name: "Volumizing Mascara",
      price: "$22.99",
      image:
        "https://media.istockphoto.com/id/485201410/photo/make-up-blue-eye-with-long-lashes-with-black-mascara.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uei9Opv82aLGzlhZy-V0DyvrtPXIbJWnMp8cMmv7OEI=",
      category: "Mascara",
    },
    {
      id: 8,
      name: "Shimmer Eyeshadow",
      price: "$18.99",
      image:
        "https://plus.unsplash.com/premium_photo-1670006626742-64170846e39e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpbW1lciUyMGV5ZXNoYWRvdyUyMGluJTIwbWFrZXVwfGVufDB8fDB8fHww",
      category: "Eyeshadow",
    },
    {
      id: 9,
      name: "Matte Setting Powder",
      price: "$30.99",
      image:
        "https://images.unsplash.com/photo-1512207724313-a4e675ec79ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0dGUlMjBzZXR0aW5nJTIwcG93ZGVyJTIwaW4lMjBtYWtldXB8ZW58MHx8MHx8fDA%3D",
      category: "Powder",
    },
    {
      id: 10,
      name: "Hydrating Setting Spray",
      price: "$28.99",
      image:
        "https://media.istockphoto.com/id/2057206537/photo/face-woman-and-spray-after-makeup-studio-with-product-for-mockup-in-cosmetics-on-gray.webp?a=1&b=1&s=612x612&w=0&k=20&c=IOLjzeNbuzz3dJsGCHEJIBb9978beyl98Zk1e0hTatA=",
      category: "Setting Spray",
    },
    {
      id: 11,
      name: "Cream Blush",
      price: "$26.99",
      image:
        "https://media.istockphoto.com/id/941044106/photo/gorgeous-woman-applying-make-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=jYeq1AIHf52320PqZiCW-SU2w67rBit2h_HyD2JmoNg=",
      category: "Blush",
    },
    {
      id: 12,
      name: "Long-Wear Lip Gloss",
      price: "$23.99",
      image:
        "https://media.istockphoto.com/id/1277111725/photo/beautiful-woman-with-pink-rose.webp?a=1&b=1&s=612x612&w=0&k=20&c=EPcnTOqxyMUTWNjuSuuxwWTRpA3IbnqRbGnAsjJaY0M=",
      category: "Lip Gloss",
    },
    {
      id: 13,
      name: "Bronzing Powder",
      price: "$31.99",
      image:
        "https://media.istockphoto.com/id/1340968762/photo/set-of-make-up-with-crushed-beige-face-finishing-and-bronzing-powder-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y_xFTvXyJgP4J0IHkadIOa-dckNYE45sDgrRU0DNU9c=",
      category: "Powder",
    },
    {
      id: 14,
      name: "Silk Foundation",
      price: "$40.99",
      image:
        "https://media.istockphoto.com/id/1210059888/photo/foundation-make-up-color-swatch-showing.webp?a=1&b=1&s=612x612&w=0&k=20&c=BeDkz_vLXaPNz-8J9BTZ1iASnEjb90I0Q_xmgLidRD8=",
      category: "Foundation",
    },
    {
      id: 15,
      name: "Glow Highlighter",
      price: "$25.99",
      image:
        "https://media.istockphoto.com/id/1077206846/photo/make-up-palette-and-brushes-on-beige-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=00zu-_iFQnTHMpDOtk-jhqH9rRKjYUCy6Bo5LyfFkvM=",
      category: "Highlighter",
    },
    {
      id: 16,
      name: "Gel Eyeliner",
      price: "$20.99",
      image:
        "https://images.unsplash.com/photo-1595550912256-b24059bb08e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdlbCUyMGV5ZWxpbmVyJTIwaW4lMjBtYWtldXB8ZW58MHx8MHx8fDA%3D",
      category: "Eyeliner",
    },
    {
      id: 17,
      name: "Tinted Moisturizer",
      price: "$32.99",
      image:
        "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGludGVkJTIwbW9pc3R1cml6ZXJ8ZW58MHx8MHx8fDA%3D",
      category: "Moisturizer",
    },
    {
      id: 18,
      name: "Color Correcting Primer",
      price: "$29.99",
      image:
        "https://media.istockphoto.com/id/1759594962/photo/beautician-put-makeup-prime-foundation-cream-on-womans-face.webp?a=1&b=1&s=612x612&w=0&k=20&c=ASyJ3P7kLjQW70rDab4GCRuynudQNFnMK9qt3f4Y_gA=",
      category: "Primer",
    },
    {
      id: 19,
      name: "Matte Eyeshadow Palette",
      price: "$45.99",
      image:
        "https://media.istockphoto.com/id/906517920/photo/eye-shadow-palette.webp?a=1&b=1&s=612x612&w=0&k=20&c=UjizsRcZ0llXy_8xbkgP0s8W0_fKiX5Da-VL2mKhvus=",
      category: "Eyeshadow",
    },
    {
      id: 20,
      name: "Luxury Lip Balm",
      price: "$17.99",
      image:
        "https://images.unsplash.com/photo-1650531975421-d79837ba4ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpcCUyMGJhbG18ZW58MHx8MHx8fDA%3D",
      category: "Lip Balm",
    },
  ];
  return { products };
}
