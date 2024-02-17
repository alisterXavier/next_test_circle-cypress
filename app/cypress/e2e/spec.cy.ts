// import { components } from '@/shared/types/api';
const CateArray = ['Home', 'Women', 'Kids', 'Electronics', 'Men'];
const mockData = [
  {
    created_at: '2024-01-03 17:16:39.827078+00',
    productName: 'OVERSIZED OFFICIAL SCENIC PRINT HOODIE',
    description:
      "Wanna keep things comfy? Jump on the oversized trend with this men's oversized hoodie from our latest collection. With a relaxed fit and a hood attached to the neckline, we're talking all over comfort all. season. long. Wear with joggers and slides for off-duty days or team with paint splatter jeans and a shacket for a look we love.",
    price: 15,
    category: 'men',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm23051_white_xl/male-white-oversized-official-scenic-print-hoodie?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm23051_white_xl_1/male-white-oversized-official-scenic-print-hoodie?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '2262422f-c230-4902-9938-db716949f528',
  },
  {
    created_at: '2024-01-03 18:09:00.473815+00',
    productName: 'PLATFORM SOLE CHUNKY HIKER BOOTS',
    description:
      "Sitting pretty at the top of our wish list are these chunky boots that you’re guaranteed to fall in love with. This street-style shoe has that edge that can make your look go from normal to feisty, the kind of style we all deserve to rock in the cooler months. Women's chunky boots are fashion-forward, comfortable, and can pair well with a variety of different looks, dressing an outfit up. The sole of these shoes is large and wide, adding extra comfort.",
    price: 89.99,
    category: 'women',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz76637_black_xl/female-black-platform-sole-chunky-hiker-boots?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz76637_black_xl_1/female-black-platform-sole-chunky-hiker-boots?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '69d610e5-37b1-4afb-a54b-e628357f5560',
  },
  {
    created_at: '2024-01-03 18:20:18.744749+00',
    productName: 'PLUS VINTAGE FAUX LEATHER CROP BIKER JACKET',
    description:
      "Add the finishing touch to your outfit with this outerwear piece from our women's plus size coats range. A wardrobe staple that’s perfect for layering, this style provides added warmth and adds an extra something to your fit. Made with added fabric for the perfect fit, this piece is a whole vibe – just throw on over your fave outfit and you’re sorted. Whether you choose a plus size denim jacket or keep things cosy in winter with a plus size teddy coat we've got the hottest coats for curvy girls that are always on-trend.",
    price: 44,
    category: 'women',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz67578_brown_xl/female-brown-plus-vintage-faux-leather-crop-biker-jacket-?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz67578_brown_xl_1/female-brown-plus-vintage-faux-leather-crop-biker-jacket-?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '06595b35-6188-4568-a079-996dcbf7fe52',
  },
  {
    created_at: '2024-01-07 01:23:33.232475+00',
    productName: 'Apple Watch Series 9 [GPS + Cellular 45mm]',
    description:
      'Smartwatch with Midnight Aluminum Case with Midnight Sport Loop. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Carbon Neutral',
    price: 469,
    category: 'electronics',
    discount: 0,
    productImages: [
      'https://m.media-amazon.com/images/I/71XK8ehwesL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/61ZTOkBHSSL._SX679_.jpg',
    ],
    id: '95af57e0-8bef-48ae-be89-b84b28d9b56f',
  },
  {
    created_at: '2024-01-03 19:58:15.154871+00',
    productName: '2-pack Cotton Dungarees',
    description:
      'Dungarees in soft cotton. One pair in ribbed jersey and one pair in lightweight sweat fabric. Featuring shoulder straps with an adjustable fastening at the front and long legs with covered elastication at the hems.',
    price: 34,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F35%2F8b%2F358b1b9ecf067eb4c5e238264dd719acd93074e7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F56%2F8a562e2f36f4a09c66a58de98f38eac335b83986.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
    ],
    id: 'b4de30e9-6835-47da-a4f8-1b514f286cd2',
  },
  {
    created_at: '2024-01-03 17:21:36.120215+00',
    productName: 'RIBBED MICRO BEANIE',
    description:
      "Complete your autumn/winter accessories collection with this beanie hat from our fashionable-yet-functional collection of men's beanie hats. Whether you need a hat that will keep you warm on colder days, or you want to add the perfect finishing touch to your smart/casual transitional wardrobe, this men's beanie is a versatile choice. Best of all, these men's beanies are small enough to carry around and perfect for hiding bad hair days!",
    price: 25,
    category: 'men',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm10545_charcoal_xl/male-charcoal-ribbed-micro-beanie?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm10545_charcoal_xl_1/male-charcoal-ribbed-micro-beanie?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: 'a503a9b4-21cc-4432-9339-244bd2c39a62',
  },
  {
    created_at: '2024-01-03 18:56:06.358749+00',
    productName: '2-piece Top & Skirt Set',
    description:
      'Coordinated top and skirt set. Top in soft, ribbed jersey features a narrow trim around the neckline and short sleeves. Tiered skirt in an airy weave features elastication at the waist.',
    price: 16,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2F40%2F4d40aca67ff23427cb5ae88ff00dfd142b5d2156.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbf%2Fdf%2Fbfdff0f000ce3459e21cd43edb731141aa4f9118.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    ],
    id: '3829388f-cc72-499f-93b7-43fb8633b62b',
  },
  {
    created_at: '2024-01-03 17:37:10.295894+00',
    productName: 'ELASTIC WAIST RELAXED FIT CARGO TROUSER',
    description:
      'Feel comfy and look your best in our on-trend men’s elasticated waist trousers. With a stretchy fit, these elasticated trousers are far more comfortable than buttons or zippers. Easy to wear, men’s stretch waist trousers are sure to be a welcome addition to your wardrobe that you’ll be reaching for on your days off. They can be paired with multiple types of shoes and tops to create your unique look. Even better, pants like these tend to last longer than denim so you can get your wear out of them no matter how often you put them on.',
    price: 160,
    category: 'men',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm30528_black_xl/male-black-elastic-waist-relaxed-fit-cargo-trouser?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm30528_black_xl_1/male-black-elastic-waist-relaxed-fit-cargo-trouser?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: 'cc765e4b-d113-4bda-9d29-453d1d19a9b0',
  },
  {
    created_at: '2024-01-03 17:58:52.465141+00',
    productName: 'TIE DYE OPEN BACK FLARE SLEEVE MINI DRESS',
    description:
      'Searching for a statement piece to add to your new-season wardrobe? Look no further than this backless dress. Exposing the back for maximum impact, backless dresses are sexy, chic, and a summer wardrobe classic. The best bit? You can dress them up or down, depending on your vibe. Pair with trainers and hoop earrings for a day time look, or team with heels and a blazer for PM plans. From full open back dresses to low back styles, this style will look great on you.',
    price: 99.99,
    category: 'women',
    discount: 15,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz75678_green_xl/female-green-tie-dye-open-back-flare-sleeve-mini-dress?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz75678_green_xl_1/female-green-tie-dye-open-back-flare-sleeve-mini-dress?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '34e6ee9f-7ae8-4e4d-adb7-6acb1e552f1f',
  },
  {
    created_at: '2024-01-03 18:18:04.81277+00',
    productName: 'OVERSIZED SUEDE LOOK BELTED MAXI TRENCH',
    description:
      "For a look that's as timeless as they come, you can't go wrong with the classic trench coat. We love its loose fit, double-breasted design - it's perfect for throwing on over jeans and your favourite knit. A tailored fit that's snug at the waist, a women's trench coat is the ideal trans-seasonal piece to keep out the rain. We're pairing ours with heeled boots and culottes for a head to toe refresh. Longline, elegant and featuring wide lapels, what's not to love about this flattering cover-up?\nStyle: Faux Leather Jacket",
    price: 345,
    category: 'women',
    discount: 45,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz60251_brown_xl/female-brown-oversized-suede-look-belted-maxi-trench?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz60251_brown_xl_1/female-brown-oversized-suede-look-belted-maxi-trench?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '59f17d1a-ccd1-463b-a5f1-9f397e7fae01',
  },
  {
    created_at: '2024-01-03 20:03:21.748822+00',
    productName: '2-piece Knit Set',
    description:
      'Beanie and mittens set in a soft knit with fleece lining. Beanie features a pompom on the top, a ribbed, turned up hem, earflaps and ties under the chin. Mittens with ribbed cuffs. Size 0-2M and 000-00 without thumbs.',
    price: 24,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbf%2F6e%2Fbf6e29096eb98753235645a6d4355bb11ff676dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F74%2F40%2F7440339e50c3e69079a44e7a25ecb91673d60c50.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
    ],
    id: '1a4930aa-c787-451c-869a-4f6a8e366aa7',
  },
  {
    created_at: '2024-01-07 01:32:28.859002+00',
    productName: 'Apple iPhone 15 Black',
    description:
      'The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.',
    price: 799,
    category: 'electronics',
    discount: 0,
    productImages: [
      'https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/51brdXeugJL._SX679_.jpg',
    ],
    id: '9ab4fc08-a1d4-4e5f-be49-cbb0ffff3d3c',
  },
  {
    created_at: '2024-01-03 17:41:13.458142+00',
    productName: 'CHUNKY SOLE PANEL TRAINER',
    description:
      "Elevate your look with this pair of on-trend men's chunky trainers. These trainers feature a platform sole and are sometimes called dad shoes or ugly trainers! Whatever you like to call them, these men's dad trainers are the perfect choice when you want to add a bit of height. From date nights and shopping trips to drinks with the lads, just pair them with your favourite jeans or joggers and get ready to stand tall in these fashionable oversized trainers.",
    price: 120,
    category: 'men',
    discount: 20,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm56684_black_xl/male-black-chunky-sole-panel-trainer?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm56684_black_xl_1/male-black-chunky-sole-panel-trainer?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: 'e760fb5b-a648-4138-b6b2-2f06122b9b37',
  },
  {
    created_at: '2024-01-03 18:03:34.527471+00',
    productName: 'SLINKY ROUCHED WRAP MAXI DRESS',
    description:
      'A longline style that’s elegant, stylish and effortlessly chic, please every member of your bride squad this season with this maxi bridesmaid dress from our latest collection. Featuring a luxe fabric that skims the body and accentuates curves for a super flattering fit, this long bridesmaid dress is the perfect choice for every kind of wedding palette…and we’re obsessed. Need inspo? Pair with understated accessories and soft makeup to finish off the look. Dress stress? Never heard of it.',
    price: 77,
    category: 'women',
    discount: 35,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz26431_black_xl/female-black-slinky-rouched-wrap-maxi-dress?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz26431_black_xl_1/female-black-slinky-rouched-wrap-maxi-dress?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '4a8c9507-1fac-440d-808f-a436ea996b04',
  },
  {
    created_at: '2024-01-03 18:12:57.801145+00',
    productName: 'BORG LINED AVIATOR JACKET',
    description:
      "Take your outfit to new style heights with an aviator jacket. Perfect for layering, create a stylish oversized silhouette as you choose from crop belted jackets to faux fur lined options. A cross between a classic flight jacket and a leather biker, it's all about the detailing with this snug winter staple. Pair your aviator coat with high waisted mom jeans and a fierce attitude as you stroll your way through your social calendar.",
    price: 111,
    category: 'women',
    discount: 22,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz78634_taupe_xl/female-taupe-borg-lined-aviator-jacket-?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz78634_taupe_xl_1/female-taupe-borg-lined-aviator-jacket-?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: 'a1bb77fc-5c96-4032-8320-ea7ba8939fa2',
  },
  {
    created_at: '2024-01-03 17:54:33.265081+00',
    productName: 'REFLECTIVE DSGN STUDIO WIDE LEG JOGGER',
    description:
      "Whether you're a beginner slope baddie or practically pro, hit the slopes in style this season with this reflective dsgn studio wide leg jogger from the boohoo ski clothing collection. The perfect piece for chalet chills, these joggers feature reflective detailing so you can combine comfort with style. And for when après is calling, this piece brings slope-ready style as well as functionality. Discover the full ski clothing edit right here…let it snow!",
    price: 78,
    category: 'women',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz74365_grey_xl/female-grey-reflective-dsgn-studio-wide-leg-jogger?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz74365_grey_xl_1/female-grey-reflective-dsgn-studio-wide-leg-jogger?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: 'cfbc0fb4-4a32-48ad-a73f-ac1f2bb20686',
  },
  {
    created_at: '2024-01-03 18:02:04.542864+00',
    productName: 'PREMIUM HEAVY WEIGHT SLINKY LONG SLEEVE MAXI DRESS',
    description:
      "Colder days are incoming. Layer up this season with a long sleeve dress to embrace cold weather days. Complete with a full sleeve extending from shoulder to arm, this style is perfect for winter styling. Comfortable, warm, and the perfect addition to your winter wardrobe, choose a long sleeve maxi dress for formal events or opt for a long sleeve midi dress for off-duty plans. Team this one with chunky boots or statement heels…we're talking maximum impact, minimal effort.",
    price: 199,
    category: 'women',
    discount: 20,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz48589_chocolate_xl/female-chocolate-premium-heavy-weight-slinky-long-sleeve-maxi-dress?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz48589_chocolate_xl_1/female-chocolate-premium-heavy-weight-slinky-long-sleeve-maxi-dress?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '111b90be-b001-4248-af08-39ccdbf0e89c',
  },
  {
    created_at: '2024-01-03 17:52:44.178867+00',
    productName: 'CARGO WIDE LEG JOGGER',
    description:
      "Whether you're a beginner slope baddie or practically pro, hit the slopes in style this season with this cargo wide leg jogger from the boohoo ski clothing collection. The perfect piece for chalet chills, these joggers feature cargo detailing so you can combine comfort with style. And for when après is calling, this piece brings slope-ready style as well as functionality. Discover the full ski clothing edit right here…let it snow!",
    price: 119,
    category: 'women',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz74366_khaki_xl/female-khaki-cargo-wide-leg-jogger?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz74366_khaki_xl_1/female-khaki-cargo-wide-leg-jogger?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '603dd895-77bc-4843-9423-d590b8a6d55b',
  },
  {
    created_at: '2024-01-03 17:43:11.166638+00',
    productName: 'WORKER BOOTS',
    description:
      "Fashion-forward boots for men are the feature of every autumn and winter outfit. Get trend-led treads in our edit of this season's most talked about men's boots, from black to brown finishes. Men's suede boots help you stand out when you need to be smart whilst casual boots are perfect for everyday dressing.",
    price: 222,
    category: 'men',
    discount: 10,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm55573_tan_xl/male-tan-worker-boots?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm55573_tan_xl_1/male-tan-worker-boots?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '486ed6fa-c5c6-477c-b0d3-b85af5f7792f',
  },
  {
    created_at: '2024-01-03 17:26:19.650351+00',
    productName: 'BOXY FIT JERSEY AND DENIM HOODED BOMBER',
    description:
      "Men's denim jackets are your wardrobe essential for every season. For those colder nights, a men's denim jacket with faux fur is your staple piece so make sure you're lined up, whether you're loving suede or borg finishes. And when those long awaited summer days hit, turn up in a men's distressed denim jacket or oversized style so you can complete all outfits with a statement finish.\nStyle: Detail Denim Jacket",
    price: 46,
    category: 'men',
    discount: 10,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm69279_antique%20blue_xl/male-antique%20blue-boxy-fit-jersey-and-denim-hooded-bomber?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm69279_antique%20blue_xl_1/male-antique%20blue-boxy-fit-jersey-and-denim-hooded-bomber',
    ],
    id: '39028a82-735f-4edb-9dc0-0e48fdbd73d6',
  },
  {
    created_at: '2024-01-03 18:50:56.930176+00',
    productName: 'Oversized Zip Up Hoodie',
    description:
      'Lakwena x H&M. Oversized zip up hoodie in lightweight sweat fabric. Features an embroidered design on the chest and vibrant print designs on the sleeves and back. Hood, concealed zip down the front and low dropped shoulders. Kangaroo front pockets and ribbing around the cuffs and hem.',
    price: 77,
    category: 'kids',
    discount: 10,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3e%2F8d%2F3e8d12e9bd14dccaaa123a2f0d3ce3ac36cb2fca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcf%2F54%2Fcf5470f64c1f81f90b156af011c24a30f4404689.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    ],
    id: '0a042e84-452d-4d1c-8ccf-f7f5841bfd9b',
  },
  {
    created_at: '2023-11-12 14:58:23.547047+00',
    productName: 'PLUS OVERSIZED ROSE BACK GRAPHIC T-SHIRT',
    description:
      "Your tee collection just got an upgrade with this plus size tshirt for men from our latest collection. Cut with additional room for the perfect fit, this style has serious add-to-bag potential. With short sleeves and a classic neckline, this is a wardrobe staple we can't get enough of. Wear with jeans and trainers for a casual fit or layer under an open shirt for weekend plans.\nStyle: Printed T-Shirt\nDesign: Graphic\nFabric: Cotton\nLength: Regular\nNeckline: Crew\nSleeve Length: Short Sleeve\n100% Cotton. Model is 6'1\" and wears a size 3XL",
    price: 33,
    category: 'men',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm50924_sage_xl/male-sage-plus-oversized-rose-back-graphic-t-shirt?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: 'bd9f2da1-75f0-427e-ba40-0d2c8d01f2f4',
  },
  {
    created_at: '2024-01-03 17:28:22.624845+00',
    productName: 'CRINKLE NYLON ZIP THROUGH HARRINGTON',
    description:
      "Effortlessly cool and totally timeless, this piece from our men's Harrington jackets collection will add a touch of class to your summer outerwear. If you're scrolling for a new casual jacket, this lightweight, waist-length men's Harrington jacket is the perfect choice for the spring/summer season. Featuring a zip-down front, you can add edge to your look by teaming it with biker jeans. And if you want to go for a more relaxed look, try pairing it with slim-fit light wash jeans and a plain T-shirt.",
    price: 23,
    category: 'men',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm67279_rust_xl/male-rust-crinkle-nylon-zip-through-harrington?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm67279_rust_xl_1/male-rust-crinkle-nylon-zip-through-harrington?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '7e54ed07-2d80-4d5e-a824-9784895ed58b',
  },
  {
    created_at: '2024-01-03 18:47:19.977158+00',
    productName: 'Embroidered Baseball Jacket',
    description:
      'Loose fit baseball jacket in woven fabric with embroidered designs. Features a small, ribbed collar, dropped shoulders and press studs down the front. Welt front pockets and ribbing at the cuffs and hem.',
    price: 44,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe3%2Fb2%2Fe3b285d047fde006658e2af43ca8faa9ffc5eaec.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F07%2F3b%2F073ba657c238698ba726d43a5131e0df4c822728.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    ],
    id: '81db11d3-2883-4754-aa8a-4754fcc05732',
  },
  {
    created_at: '2024-01-07 01:14:08.725646+00',
    productName: 'Sony WH-1000XM5',
    description:
      'Wireless Industry Leading Noise Canceling Headphones | Silver',
    price: 349.99,
    category: 'electronics',
    discount: 10,
    productImages: [
      'https://m.media-amazon.com/images/I/61vJtKbAssL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/51KGPDttQhL._SX522_.jpg',
    ],
    id: 'a57192de-7010-4ff1-ad21-68ed1884c3aa',
  },
  {
    created_at: '2024-01-07 01:41:41.165283+00',
    productName: 'Apple Ipad Air 10.9',
    description: '5Th Gen 8 Gb 64 Gb Wi-Fi Blue',
    price: 2099,
    category: 'electronics',
    discount: 25,
    productImages: [
      'https://m.media-amazon.com/images/I/61ImGCuIWiL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/71VbHaAqbML._SX679_.jpg',
    ],
    id: 'a6904a6e-fe10-4027-986d-1432f504d8d8',
  },
  {
    created_at: '2024-01-07 01:18:22.58807+00',
    productName: 'Apple AirPods Max',
    description: 'Wireless Over-Ear Headphones Space Gray',
    price: 599,
    category: 'electronics',
    discount: 15,
    productImages: [
      'https://m.media-amazon.com/images/I/81thV7SoLZL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81IfN-Rw8uL._SX679_.jpg',
    ],
    id: '2a4596f3-a3a0-4544-8eff-dda7de44a18a',
  },
  {
    created_at: '2024-01-07 01:21:27.108535+00',
    productName:
      'Raspberry Pi 4 8GB RAM | All New Raspberry Pi Desktop Computer',
    description:
      'his Raspberry Pi 4 is integrated with a 64 bit quad core cortex- A72 ARM v8, broadcom BCM2711 and runs at a speed of 1.5GHz. Form Factor: Nano-ITX\nThe new Raspberry Pi product is equipped with bluetooth 5.0, BLE, gigabit ethernet and has 802.11ac wireless at 2.4GHz and 5GHz\nIt provides faster data transfer with two USB 3.0 ports, two USB 2.0 ports, micro SD slot for data storage and loading operating systems\nThe Raspberry Pi 4 has 2 micro HDMI ports (supports 4k@60p), 2 lane MIPI DSI display port, 2 lane MIPI CSI camera port and 4-pole stereo audio and composite video port',
    price: 299,
    category: 'electronics',
    discount: 0,
    productImages: [
      'https://m.media-amazon.com/images/I/61C1t50ieIL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/61mRJm8+c4L._SX522_.jpg',
    ],
    id: '416ce56d-e1a7-48a8-b732-8448a67933ec',
  },
  {
    created_at: '2024-01-03 17:35:05.715959+00',
    productName: 'BASIC OVERSIZED CARGO JOGGER',
    description:
      "Give your jeans a day off with this pair of men's cargo pants from our latest collection. A trending style that we can't get enough of this season, this pair features utility-style cargo pocket detailing and a relaxed fit perfect for off-duty plans. Wear with an oversized tee and classic trainers for a cool casual look we're absolutely here for.",
    price: 75,
    category: 'men',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm61726_black_xl/male-black-basic-oversized-cargo-jogger?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm61726_black_xl_1/male-black-basic-oversized-cargo-jogger?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '86aa1158-20ed-424a-a8b7-fe453a3012ba',
  },
  {
    created_at: '2024-01-03 17:31:36.006988+00',
    productName: 'MAN ACTIVE TECH HOODIE AND SHORTS SET',
    description: "60% Cotton 40% Polyester. Model is 6'1 and wears size M.",
    price: 62,
    category: 'men',
    discount: 5,
    productImages: [
      'https://media.boohoo.com/i/boohoo/bmm66894_charcoal_xl/male-charcoal-man-active-tech-hoodie-and-shorts-set?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/bmm66894_charcoal_xl_1/male-charcoal-man-active-tech-hoodie-and-shorts-set?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '2b212ead-cb55-42d3-ac9d-3cf50f2c250a',
  },
  {
    created_at: '2024-01-03 18:07:09.865416+00',
    productName: 'CHUNKY SOLE CHELSEA BOOTS',
    description:
      "For guaranteed style points, opt for a pair of Chelsea boots. An elastic-sided boot typically with a small heel, Chelsea boots have been much-loved since the 'mod' scene in the '50s and we can see why. Extremely versatile, we can see you in a suede Chelsea boot for your day-to-evening outfits or perhaps a heeled Chelsea boot is your perfect choice? Seen in black, brown and grey designs, they're perfect for both casual and dressy events so you can wear them all season.",
    price: 34,
    category: 'women',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz80744_beige_xl/female-beige-chunky-sole-chelsea-boots--?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz80744_beige_xl_1/female-beige-chunky-sole-chelsea-boots--?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '8f4a8fe0-3ec0-4f3a-b2c3-58de9d7ca47d',
  },
  {
    created_at: '2024-01-03 18:52:53.759848+00',
    productName: 'Wide Print Pants',
    description:
      'Loose fit pants in printed denim look sweat fabric. Featuring an easy pull on, elasticised waist, mock fly and wide legs. Mock front pockets and open back pockets.',
    price: 32,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fce%2Fa5%2Fcea5dd8b0de0fbb8de60e06a066e2f0f82ff705b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F02%2F7b%2F027bda853744a43685a9c52084cc62f3316f408a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    ],
    id: '695b7e3e-2e03-44c0-b018-a08f82b04801',
  },
  {
    created_at: '2024-01-07 01:25:50.38335+00',
    productName: 'Apple 2023 MacBook Pro Laptop M3 Pro chip',
    description:
      '12‑core CPU, 18‑core GPU: 14.2-inch Liquid Retina XDR Display, 18GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Black',
    price: 2369,
    category: 'electronics',
    discount: 0,
    productImages: [
      'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg',
      'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61x8BQ8-5wL._AC_SX466_.jpg',
    ],
    id: '199964de-da46-4496-ba54-5b6974126e68',
  },
  {
    created_at: '2024-01-03 20:08:56.221984+00',
    productName: 'DryMove™ Cotton Hoodie',
    description:
      'Cotton hoodie in DryMove™ functional fabric that helps draw moisture away from your skin, keeping you comfortably dry while active. Features a loose fit and a lined, wrap hood. Dropped shoulders, long sleeves and a kangaroo pocket. Ribbing at the cuffs and hem.',
    price: 99.99,
    category: 'kids',
    discount: 15,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2Fe2%2F46e2f382d6a959db4f17e065a3e8f118d7328d2d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa5%2Fe8%2Fa5e803cc519bba46ff318227d13dfdd3d51c9301.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe6%2Fed%2Fe6edfefca2a5838bc5aa16dd0e11bc8a6691346f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff8%2F82%2Ff882fb6eda41c069922ad1770ba69ceb1c094846.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    ],
    id: '14401944-03f5-4efd-99cd-835c79101dbc',
  },
  {
    created_at: '2024-01-03 17:50:58.141434+00',
    productName: 'SEAMLESS RIB PADDED SPORTS BRA',
    description:
      "Let our women's sport bras keep you cool and fashion-forward whether you're hitting it hard at the gym, or just feel like something a little more comfortable on those busy, on-the-go days. Our stylish workout bras look unreal worn alone with matching leggings. If you're after extra support, grab a padded sports bra or push up style - our gym bras are about to become your new fave workout piece.",
    price: 68,
    category: 'women',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz78226_mocha_xl/female-mocha-seamless-rib-padded-sports-bra?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz78226_mocha_xl_1/female-mocha-seamless-rib-padded-sports-bra?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '96d63c10-5e51-46c4-8c5c-6380381c0d2d',
  },
  {
    created_at: '2024-01-03 18:41:33.15745+00',
    productName: 'KIDS MATCHING FAMILY CHRISTMAS PJS',
    description:
      'Super soft, ultra comfortable, and perfect for festive evenings, ensure they look good while they feel snug this season in this cosy pyjama set from our edit of kid’s Christmas pyjamas. From all-day movie marathons to Christmas eve chills, these children’s Christmas pyjamas were made for lounging. Just team with fluffy slippers and a fleece dressing gown and prepare for Santa’s arrival (hot chocolate is essential). On the hunt for your own snug set? Get the whole family involved with our collection of family Christmas pyjamas for ultimate fam goals.',
    price: 64,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://media.boohoo.com/i/boohoo/gzz72204_cream_xl/male-cream-kids-matching-family-christmas-pjs--?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      'https://media.boohoo.com/i/boohoo/gzz72204_cream_xl_1/male-cream-kids-matching-family-christmas-pjs--?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    ],
    id: '12c27aa4-93b6-4b02-8c34-03b28c96a4ee',
  },
  {
    created_at: '2024-01-03 19:56:10.16309+00',
    productName: 'Fleece Shirt Jacket',
    description:
      'Fleece shirt jacket featuring a collar and buttons down the front. Gently dropped shoulders, long sleeves with button cuffs and open chest pockets. Rounded hem. Unlined.',
    price: 29,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3e%2Fbf%2F3ebfdde4e8c93955dbcfbf4a3a4a70febb70c54f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_baby_boy_outerwear_jacketscoats%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6a%2F19%2F6a19d8a51096bd86802e1027ae7ade0ad0d93c3d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_baby_boy_outerwear_jacketscoats%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    ],
    id: '3ed8422c-3c53-4c0c-af2f-7e8fdf2e1e22',
  },
  {
    created_at: '2024-01-03 20:12:34.691108+00',
    productName: 'Activewear Hoodie',
    description:
      'Sleeveless hoodie in fast drying jersey designed to help keep you dry and cool while exercising. Features a raglan cut and flatlock seams. Mesh lined hood with a decorative drawstring. Gently rounded hem.',
    price: 137,
    category: 'kids',
    discount: 0,
    productImages: [
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F09%2F22%2F0922e4bf76fb3ac0a978f2456098fcb4c56ccf36.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7f%2Ff6%2F7ff66f6d29cc252d76c4e1b92ecd7c9ebe86db4b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
    ],
    id: '4344aa56-9a83-45fd-9e65-80f4a9d8b9ac',
  },
  {
    created_at: '2024-01-07 01:39:09.666499+00',
    productName: 'Edifier R1280DB',
    description: 'Bluetooth Speaker System (Brown)',
    price: 149,
    category: 'electronics',
    discount: 10,
    productImages: [
      'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/edifier_4003066_r1280db_brown_r1280db_bookshelf_speakers_with_1568118094_1503880.jpg',
      'https://static.bhphoto.com/images/multiple_images/images500x500/1654687824_IMG_1769178.jpg',
    ],
    id: 'fc85e782-4156-43d8-8561-e95d70aa10bb',
  },
  {
    created_at: '2024-01-07 01:35:19.090016+00',
    productName: 'Sony Bravia KD-55X85L 55',
    description: 'LED HDR 4K Ultra HD Smart Google TV Black',
    price: 2999,
    category: 'electronics',
    discount: 0,
    productImages: [
      'https://media.veli.store/media/product/sony_bravia_KD_55X85L_tv_black_2.jpeg',
      'https://media.veli.store/media/product/sony_bravia_KD_55X85L_tv_black_4.jpeg',
    ],
    id: '11b295f7-3789-4ba9-9cd2-3049fc9f444c',
  },
];

const mockCart = {
  id: 'testId',
  customerId: 'testCustomer',
  products: [
    { ...mockData[0], quantity: 2 },
    { ...mockData[1], quantity: 5 },
  ],
  total: 0,
};
mockCart.total = mockCart.products.reduce((i, acc) => {
  return i + acc.price;
}, 0);

describe('App flow', () => {
  it('runs', () => {
    cy.visit('http://localhost:3000/login');
  });
  

  // before(() => {
  //   cy.viewport(window.screen.width, window.screen.height);
  //   cy.readFile('public/images/Logo.jpg', null).then((img) => {
  //     cy.intercept('_next/image*', {
  //       statusCode: 200,
  //       headers: { 'Content-Type': 'image/png' },
  //       body: img.buffer,
  //     });
  //   });

  //   cy.intercept('GET', 'http://localhost:5001/products/men?price=', {
  //     data: mockData,
  //   });
  //   CateArray.forEach((item) => {
  //     cy.intercept(
  //       'GET',
  //       `http://localhost:5001/products/${item.toLowerCase()}?price=`,
  //       {
  //         data: mockData,
  //       }
  //     );
  //   });
  //   cy.intercept('POST', 'http://localhost:5001/register', {
  //     message: 'Registration successful',
  //     user: {},
  //   });
  //   cy.intercept('PATCH', 'http://localhost:5001/cart', {
  //     data: mockCart,
  //   });
  //   cy.intercept(
  //     'GET',
  //     'http://localhost:5001/cart/27b15b92-2daa-45e6-a4ae-d4ef370f48d7',
  //     {
  //       data: mockCart,
  //     }
  //   );
  //   mockData.forEach((item) => {
  //     cy.intercept('GET', `http://localhost:5001/product/${item.id}`, {
  //       data: mockData.filter((i) => i.id === item.id)[0],
  //     });
  //   });
  // });

  // describe('Sign in and perfrom user activities', () => {
  //   beforeEach(() => {
  //     cy.viewport(window.screen.width, window.screen.height);
  //     cy.visit('http://localhost:3000/login', {
  //       failOnStatusCode: false,
  //     });
  //     cy.get('[data-cy="test-signIn-container"]').within(() => {
  //       cy.get('[data-cy="test-email-input"]').type('fidosa9512@bitofee.com');
  //       cy.get('[data-cy="test-password-input"]').type('123456789');
  //       cy.get('[data-cy="test-confirm-btn"]').click();
  //     });
  //     cy.wait(1000);
  //   });

  //   it('App flow check', () => {
  //     // Navbar -- Tests
  //     CateArray.forEach((item) => {
  //       cy.get('[data-cy="test-nav-items"]')
  //         .contains(item)
  //         .click()
  //         .then(() => {
  //           cy.location().should((loc) => {
  //             expect(loc.pathname).to.eq(
  //               item === 'Home' ? '/' : `/category/${item}`
  //             );
  //           });
  //         });
  //     });
  //     // cy.get('[data-cy="test-logo"]').contains('Store');

  //     cy.get('[data-cy="test-category-title"] h2:first').should(
  //       'have.text',
  //       'HOME'
  //     );
  //     cy.get('[data-cy="test-category-title"] h2:last').should(
  //       'have.text',
  //       'Men'
  //     );

  //     // Product Card -- Tests
  //     cy.get('[data-cy="test-small-product-card"] div:last').click();

  //     // Product Page -- Tests
  //     const selectedProduct = mockData[mockData.length - 1];
  //     cy.get('[data-cy="test-product-image"]');
  //     cy.get('[data-cy="test-product-name"]').should(
  //       'have.text',
  //       selectedProduct.productName
  //     );
  //     cy.get('[data-cy="test-product-description"]').should(
  //       'have.text',
  //       selectedProduct.description
  //     );
  //     cy.get('[data-cy="test-product-price"]').contains(selectedProduct.price);
  //     cy.get('[data-cy="test-add-product"]').click();

  //     cy.get('[data-cy="test-cart"]').contains(
  //       mockCart.products.reduce((a, b) => {
  //         return a + b.quantity;
  //       }, 0)
  //     );

  //     cy.get('[data-cy="test-cart"]').click();

  //     mockCart.products.map((item, index) => {
  //       const qty = cy.get(`[data-cy="test-cart-item-qty-${item.id}"]`);
  //       cy.get(`[data-cy="test-cart-item-image-${item.id}"]`).should(
  //         'have.attr',
  //         'src'
  //       );

  //       // Cart -- Tests
  //       cy.get(`[data-cy="test-cart-item-title-${item.id}"]`)
  //         .should('have.text', item.productName)
  //         // .get(`[data-cy="test-cart-item-discount-${item.id}"]`)
  //         // .should('have.text', `-${item.discount}%`)
  //         // .get(`[data-cy="test-cart-item-price-${item.id}"]`)
  //         // .should(
  //         //   'have.text',
  //         //   `$${parseFloat(
  //         //     calculateDiscountedPrice(item.price, item.discount)
  //         //   )}`
  //         // )
  //         .get(`[data-cy="test-cart-item-decrement-${item.id}"]`)
  //         .click()
  //         .then(() => qty.should('have.text', item.quantity - 1))
  //         .get(`[data-cy="test-cart-item-increment-${item.id}"]`)
  //         .dblclick()
  //         .then(() => qty.should('have.text', item.quantity + 1))
  //         .get(`[data-cy="test-cart-item-remove-${item.id}"]`)
  //         .click();
  //     });

  //     // Checkout Page
  //     cy.get('[data-cy="test-checkout-btn"]').click();

  //     // const userOptions = cy.get('[data-cy="test-user-options"]');
  //     // userOptions.should('not.be.visible');
  //     // cy.get('[data-cy="test-user"]')
  //     //   .click()
  //     //   .then(($userBtn) => {
  //     //     userOptions.should('be.visible');
  //     //     cy.wrap($userBtn)
  //     //       .get('[data-cy="test-user-options-item"]')
  //     //       .contains('Sign Out')
  //     //       .click();
  //     //   });
  //     // cy.get("[data-cy='test-login-btn']").click();
  //   });
  // });
});
