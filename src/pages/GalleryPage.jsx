import React, { useState } from 'react';
import { Eye, Sparkles, Filter, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Storefront & Mannequin Display',
      category: 'store',
      categoryLabel: 'Silvassa Storefront',
      image: '/images/storefront-hero.jpg',
      aspect: 'col-span-1 md:col-span-8 row-span-2',
      caption: 'The flagship Agarwal Hosiery Silvassa store at Shop No. 05, Rajshree Tower on Silvassa Ring Road with full festive collection display.'
    },
    {
      id: 2,
      title: 'Champagne Gold Floor-Length Anarkali',
      category: 'festive',
      categoryLabel: 'Festive Ensembles',
      image: '/images/womens-collection/outfit-2-champagne-anarkali.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Regal flared anarkali gown featuring fine mirror work and antique gold zari embroidery.'
    },
    {
      id: 3,
      title: 'Rust Orange Indo-Western Fusion Set',
      category: 'festive',
      categoryLabel: 'Indo-Western',
      image: '/images/womens-collection/outfit-1-orange-dhoti.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Hand-embroidered jacket with draped tulip dhoti pants in rich vibrant rust.'
    },
    {
      id: 4,
      title: 'Royal Blue Tiered Sharara Suit',
      category: 'festive',
      categoryLabel: 'Festive Ensembles',
      image: '/images/womens-collection/outfit-4-royal-blue-sharara.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Tiered flared sharara with scalloped dupatta borders and delicate floral threadwork.'
    },
    {
      id: 5,
      title: 'Fuchsia Magenta Straight Tunic Suit',
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/outfit-3-magenta-suit.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Pure Chanderi silk tunic paired with straight trousers against a marigold festive backdrop.'
    },
    {
      id: 8,
      title: 'Aqua Blue Chanderi Silk Kurti & Organza',
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/outfit-5-aqua-chanderi.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Pastel turquoise straight kurti with straight pants and delicate sheer organza dupatta.'
    },
    {
      id: 9,
      title: 'Mustard Festive Jacquard Set',
      category: 'festive',
      categoryLabel: 'Festive Ensembles',
      image: '/images/womens-collection/outfit-6-mustard-festive.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Rich textured jacquard silk suit with coordinated heavy woven festive stole.'
    },
    {
      id: 11,
      title: 'Ivory & Black Block Print Indo-Western Gown',
      category: 'festive',
      categoryLabel: 'Indo-Western Gown',
      image: '/images/womens-collection/outfit-7-ivory-block-gown.png',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Sweetheart Ajrakh block-print bodice with cascading waist tassels and panel flare inserts.'
    },
    {
      id: 12,
      title: 'Black & Maroon Navratri Special Flared Gown',
      category: 'festive',
      categoryLabel: 'Navratri Special',
      image: '/images/womens-collection/outfit-8-black-maroon-navratri-gown.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Navratri exclusive flared gown with bandhani print bustier and voluminous 4-meter gher.'
    },
    {
      id: 14,
      title: 'White Lavender Floral Embroidered Anarkali',
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/outfit-10-white-lavender-anarkali.jpg',
      aspect: 'col-span-1 md:col-span-6 row-span-2',
      caption: 'Flared white cotton anarkali adorned with soft lavender floral embroidery and sheer dupatta.'
    },
    {
      id: 15,
      title: 'Peacock Teal Geometric Print Kurti Pant Set',
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/outfit-11-teal-peacock-kurta-set.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Peacock teal long kurti with geometric prints, gota lace accents, and matching pants.'
    },
    {
      id: 16,
      title: 'Emerald Green Printed Sleeveless Midi Dress',
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/outfit-12-emerald-printed-midi-dress.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Pure cotton summer midi dress with front button placket and side pockets.'
    },
    {
      id: 17,
      title: 'Fuchsia Pink Flared Gown with Gold Zari Yoke',
      category: 'festive',
      categoryLabel: 'Festive Gown',
      image: '/images/womens-collection/outfit-13-fuchsia-pink-maxi-gown.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Vibrant fuchsia gown with bell sleeves, gold zari embroidery, and tasseled drawstring.'
    },
    {
      id: 18,
      title: 'Maroon & Beige Chevron Printed Kurta Set',
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/outfit-14-maroon-chevron-kurta-set.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Contemporary chevron printed A-line kurta with mirror work medallion and printed stole.'
    },
    {
      id: 19,
      title: 'Sunset Ombré Bandhani Print Festive Lehenga Choli',
      category: 'festive',
      categoryLabel: 'Festive Lehenga',
      image: '/images/womens-collection/outfit-15-ombre-sunset-lehenga-choli.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Sunset ombré Patola and Bandhani printed lehenga with woven zari borders and net dupatta.'
    },
    {
      id: 21,
      title: "Women's Pastel Floral Embroidered Lace Handkerchiefs",
      category: 'hosiery',
      categoryLabel: "Ladies' Handkerchiefs",
      image: '/images/hosiery/womens-floral-lace-handkerchiefs.jpg',
      aspect: 'col-span-1 md:col-span-6 row-span-2',
      caption: "Exquisite pure cotton women's handkerchiefs with delicate floral embroidery and crochet lace borders."
    },
    {
      id: 22,
      title: "Men's Premium Cotton Handkerchief Box Set & Checks",
      category: 'hosiery',
      categoryLabel: "Men's Handkerchiefs",
      image: '/images/hosiery/mens-premium-cotton-handkerchiefs-box.jpg',
      aspect: 'col-span-1 md:col-span-6 row-span-2',
      caption: "Executive men's handkerchiefs presented in gift box, featuring classic satin stripes and woven checks."
    },
    {
      id: 23,
      title: 'Half-Moon Welcome Floral Tufted Entrance Mat',
      category: 'mats',
      categoryLabel: 'Door Mats & Rugs',
      image: '/images/mats/half-moon-welcome-door-mat.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Semi-circular welcome doormat with crimson floral motifs and anti-skid vulcanized rubber backing.'
    },
    {
      id: 24,
      title: 'Geometric Botanical Branch Designer Floor Mat',
      category: 'mats',
      categoryLabel: 'Door Mats & Rugs',
      image: '/images/mats/geometric-leaf-designer-door-mat.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Earthy beige and chocolate brown botanical branch floor mat with diamond geometric border.'
    },
    {
      id: 25,
      title: "Crimson Red & Gold 'Welcome' Bordered Tufted Entrance Mat",
      category: 'mats',
      categoryLabel: 'Door Mats & Rugs',
      image: '/images/mats/welcome-crimson-floral-door-mat.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Festive crimson red entrance doormat with cursive Welcome script and corner leafy embellishments.'
    },
    {
      id: 26,
      title: 'Solid Earthy Tan Heavy-Duty Loop-Pile Mat',
      category: 'mats',
      categoryLabel: 'Door Mats & Rugs',
      image: '/images/mats/solid-tan-loop-pile-door-mat.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Heavyweight camel tan loop-pile door mat with stitched perimeter binding for high traffic entryways.'
    },
    {
      id: 27,
      title: 'Charcoal Black Anti-Skid Dirt-Trapper Doormat',
      category: 'mats',
      categoryLabel: 'Door Mats & Rugs',
      image: '/images/mats/charcoal-grey-anti-skid-door-mat.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Stain-resistant charcoal black textured mat engineered to scrape soles clean and conceal dirt.'
    },
    {
      id: 28,
      title: 'Textured Olive Green Dual-Bordered Floor & Bath Mat',
      category: 'mats',
      categoryLabel: 'Door Mats & Rugs',
      image: '/images/mats/olive-green-textured-entrance-mat.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Calming botanical olive moss green rectangular floor mat with geometric double border trim.'
    },
    {
      id: 29,
      title: 'Coral Pink Floral Printed Peplum Kurti & Flared Sharara Set',
      category: 'festive',
      categoryLabel: 'Festive Ensembles',
      image: '/images/womens-collection/outfit-16-coral-floral-sharara-set.jpg',
      aspect: 'col-span-1 md:col-span-6 row-span-2',
      caption: 'Angrakha V-neck bodice with gold zari lace, micro-pleated peplum tier, flared sharara, and organza dupatta.'
    },
    {
      id: 30,
      title: 'Royal Navy & Crimson Red Tiered Bandhani Sharara Set',
      category: 'festive',
      categoryLabel: 'Festive Ensembles',
      image: '/images/womens-collection/outfit-17-navy-crimson-tiered-sharara.jpg',
      aspect: 'col-span-1 md:col-span-6 row-span-2',
      caption: 'Dual-tone festive set with gold lace yoke, 3-tier kalidar sharara, and gold grid gota patti dupatta.'
    },
    {
      id: 31,
      title: 'Navratri Heritage Multicolor Patchwork Mirror-Work Chaniya Choli',
      category: 'festive',
      categoryLabel: 'Festive Ensembles',
      image: '/images/womens-collection/outfit-18-navratri-mirrorwork-chaniya-choli.jpg',
      aspect: 'col-span-1 md:col-span-6 row-span-2',
      caption: 'Authentic Garba Chaniya Choli featuring real mirror work, Kutchi embroidery, pom-pom latkan hemline, and Bandhani dupatta.'
    },
    {
      id: 32,
      title: 'Traditional Kutchi Heavy Hand-Embroidered Mirror-Work Ghagra',
      category: 'festive',
      categoryLabel: 'Festive Ensembles',
      image: '/images/womens-collection/outfit-19-kutchi-traditional-garba-ghagra.jpg',
      aspect: 'col-span-1 md:col-span-6 row-span-2',
      caption: 'Master-artisan Kutchi embroidered festive Ghagra skirt with 5+ meter gher, real mirrors, and geometric border trims.'
    },
    {
      id: 33,
      title: 'Van Heusen Mustard, White & Navy Color-Block Polo T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-01-mustard-navy-polo.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Pique cotton color-block polo with contrast tipping collar, stag crest, and two-button placket.'
    },
    {
      id: 34,
      title: 'Urban Streetwear Sage Green, White & Black Tri-Panel T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-02-sage-green-black-streetwear.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Sage green, white, and jet black horizontal tri-panel streetwear tee with chest typography.'
    },
    {
      id: 35,
      title: 'Urban Edge Wine Maroon Chest-Stripe Stag Crewneck T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-03-maroon-chest-stripe.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Wine maroon combed cotton tee with crisp white chest band, embroidered stag insignia, and striped cuffs.'
    },
    {
      id: 36,
      title: 'Urban Fit Navy & White Dual-Tone Athletic Crewneck T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-04-navy-white-athletic.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Navy and white athletic split crewneck with twin chest racing stripes and stretch jersey cotton.'
    },
    {
      id: 37,
      title: 'Agarwal Hosiery Signature Navy, White & Olive Tri-Block T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-05-navy-white-olive-triblock.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Signature store tri-block tee featuring navy yoke, white stag chest band, and olive green lower half.'
    },
    {
      id: 38,
      title: 'Denver Navy & Powder Blue Tri-Tone Striped T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-06-denver-navy-powder-blue.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Cool-tone summer tee combining navy shoulders, white stag panel, accent micro-stripes, and powder sky blue.'
    },
    {
      id: 39,
      title: 'Armani Exchange Burgundy & Black Tricolor V-Neck T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-07-burgundy-black-vneck.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Burgundy wine and black V-neck t-shirt with centered white A|X chest block and contrast sleeve cuffs.'
    },
    {
      id: 40,
      title: 'Royal Crest White & Olive Green Wave Drop-Shoulder T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-08-white-olive-wave-oversized.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Oversized drop-shoulder streetwear tee featuring an asymmetric diagonal wave panel and crown R crest.'
    },
    {
      id: 41,
      title: 'Urban Edge Black, Mustard & White Curved-Hem Longline T-Shirt',
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-tshirt-09-black-mustard-curved-hem.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Geometric color-blocked streetwear t-shirt with mustard diagonal slash and curved drop-tail scoop hem.'
    },
    {
      id: 42,
      title: "Men's Classic White Cotton Drawstring Joggers",
      category: 'men',
      categoryLabel: "Men's Wear",
      image: '/images/mens-collection/mens-white-cotton-jogger-trackpants.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Pure combed cotton white lounge joggers with elasticated drawstring waist and tapered cuffs.'
    },
    {
      id: 43,
      title: "Women's Pastel Floral Scalloped Embroidered Handkerchief Set",
      category: 'hosiery',
      categoryLabel: "Ladies' Handkerchiefs",
      image: '/images/hosiery/womens-pastel-scalloped-floral-handkerchiefs.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Fine floral stem embroidery with scalloped crochet borders in pastel pink, peach, lilac, buttercup, and sky blue.'
    },
    {
      id: 44,
      title: "Women's Split-Toe Floral Jacquard Cotton Ankle Socks (Pack of 5)",
      category: 'hosiery',
      categoryLabel: "Women's Socks",
      image: '/images/hosiery/womens-split-toe-tabi-ankle-socks-5pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Specialized tabi split-toe knit socks for chappals and flip-flops in soft sage, lavender, black, and sky blue.'
    },
    {
      id: 45,
      title: "Men's Tricolor Tab Low-Cut Athletic Cotton Ankle Socks (Pack of 5)",
      category: 'hosiery',
      categoryLabel: "Men's Socks",
      image: '/images/hosiery/mens-athletic-tricolor-tab-ankle-socks-5pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Blister-preventing heel pull-tab socks with contrast red toe seams and arch compression support.'
    },
    {
      id: 46,
      title: "Unisex Honeycomb Cushion Athletic Performance Ankle Socks (Pack of 6)",
      category: 'hosiery',
      categoryLabel: 'Sports & Athletic Socks',
      image: '/images/hosiery/unisex-cushion-performance-running-socks-6pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'High-density terry cushioned sports running socks with breathable honeycomb open mesh and neon X monogram.'
    },
    {
      id: 47,
      title: "Nordic Geometric Fair-Isle Patterned Knit Ankle Socks",
      category: 'hosiery',
      categoryLabel: 'Fashion Socks',
      image: '/images/hosiery/womens-tribal-fairisle-pattern-ankle-socks.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Authentic Nordic geometric jacquard pattern with warm brushed interior and snug elastic ribbed cuffs.'
    },
    {
      id: 48,
      title: "HRX Active Pastel Cotton Ankle Sports Socks (Pack of 3)",
      category: 'hosiery',
      categoryLabel: 'Sports & Athletic Socks',
      image: '/images/hosiery/hrx-pastel-cotton-ankle-sports-socks-3pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Lightweight pastel activewear ankle socks with midfoot arch compression bands and terry cushioned soles.'
    },
    {
      id: 49,
      title: "Men's Ribbed Quarter Crew Monogram Embroidered Socks (Pack of 5)",
      category: 'hosiery',
      categoryLabel: "Men's Socks",
      image: '/images/hosiery/mens-ribbed-quarter-crew-socks-5pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Vertical ribbed quarter crew socks with cursive monogram embroidery in essential boardroom shades.'
    },
    {
      id: 50,
      title: "Classic Paisley Heritage Cotton Bandana Pocket Squares (Pair of 2)",
      category: 'hosiery',
      categoryLabel: 'Bandanas & Rumals',
      image: '/images/hosiery/classic-paisley-cotton-bandana-rumal-pair.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Crimson red and royal navy blue paisley bandana handkerchiefs crafted from 100% spun cotton with rolled hems.'
    },
    {
      id: 51,
      title: "Women's Diamond Pointelle Textured Pastel Ankle Socks (Pack of 3)",
      category: 'hosiery',
      categoryLabel: "Women's Socks",
      image: '/images/hosiery/womens-pastel-textured-knit-socks-3pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Delicate openwork diamond textured pointelle knit in mint green, blush peach, and buttercup yellow.'
    },
    {
      id: 52,
      title: "Vintage Polka Dot Combed Cotton Mid-Calf Crew Socks",
      category: 'hosiery',
      categoryLabel: 'Fashion Socks',
      image: '/images/hosiery/classic-polka-dot-cotton-calf-crew-socks.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Retro jet-black mid-calf crew socks with crisp woven white polka dots and reinforced seamless toe closure.'
    },
    {
      id: 53,
      title: "Gents Executive Crisp White Striped Handkerchiefs (Pack of 6)",
      category: 'hosiery',
      categoryLabel: "Men's Handkerchiefs",
      image: '/images/hosiery/executive-white-striped-pocket-handkerchiefs-6pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Formal boardroom pure white combed cotton pocket squares featuring satin vertical accent pinstripes.'
    },
    {
      id: 54,
      title: "Cotton Square Plush Waffle Pocket Towels & Face Napkins (Pack of 5)",
      category: 'hosiery',
      categoryLabel: 'Pocket Napkins & Towels',
      image: '/images/hosiery/cotton-square-pastel-plush-pocket-napkins-5pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Ultra-absorbent pure cotton honeycomb waffle-weave pocket towels and gym face napkins in soft pastel hues.'
    },
    {
      id: 55,
      title: "Pastel Waffle-Knit Embroidered Floral Handkerchief Set (Pack of 12)",
      category: 'hosiery',
      categoryLabel: 'Handkerchiefs & Rumals',
      image: '/images/hosiery/embroidered-waffle-knit-handkerchiefs-12pack.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: '12-piece family pack of waffle-textured cotton pocket squares with corner floral embroidery and edge trim.'
    },
    {
      id: 56,
      title: "Olive Green Mandala Medallion Kurta, Palazzo & Dupatta Set",
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/olive-green-mandala-kurta-pant-dupatta-set.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Olive moss-green cotton straight kurti with central mandala medallions, tassel dori neckline, palazzo, and ivory dupatta.'
    },
    {
      id: 57,
      title: "Dusty Rose Pintuck Pleated Cotton Flared Midi Dress",
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/dusty-rose-pintuck-pleated-midi-dress.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Charming dusty rose-pink flared cotton midi dress with vertical pintuck pleated bodice and ivory palm frond block prints.'
    },
    {
      id: 58,
      title: "White & Pink Floral Pintuck Pleated Cotton Anarkali Dress",
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/white-pink-floral-pintuck-flared-midi-dress.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Breezy off-white pure cotton dress sprinkled with vibrant fuchsia pink floral bootis and chest pintuck pleats.'
    },
    {
      id: 59,
      title: "Terracotta Rust Mandala Print Kurta, Palazzo & Dupatta Set",
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/rust-orange-mandala-kurta-palazzo-set.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Warm terracotta rust-orange straight cotton kurti with mandala block print motifs, matching palazzo trousers, and ivory border dupatta.'
    },
    {
      id: 60,
      title: "Pristine White Kutchi Mirror-Work Navratri Chaniya Choli Set",
      category: 'festive',
      categoryLabel: "Festive Ensembles",
      image: '/images/womens-collection/white-kutchi-mirrorwork-chaniya-choli.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Full-flared pristine white Garba lehenga skirt with gold panel accents, pom-pom latkans, ornate arch mirror border hem, and colorful embroidered blouse.'
    },
    {
      id: 61,
      title: "Teal Botanical Vine Printed Breathable Cotton Short Kurti",
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/teal-botanical-leaf-cotton-short-kurti-tunic.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Airy ivory pure cotton short kurti tunic sprinkled with refreshing teal botanical vine prints, button placket, and 3/4th cuffed sleeves.'
    },
    {
      id: 62,
      title: "Plus Collection Mocha & Earth Abstract Brushstroke Cotton Tunic",
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/beige-mocha-abstract-brushstroke-tunic-kurti.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Chic contemporary fusion short kurti featuring earthy mocha, tan, and black abstract brushstroke prints with mandarin notch collar.'
    },
    {
      id: 63,
      title: "Plus Collection Blush Pink Embroidered Floral Cotton Tunic",
      category: 'women',
      categoryLabel: "Women's Wear",
      image: '/images/womens-collection/blush-pink-embroidered-floral-cotton-short-kurti.jpg',
      aspect: 'col-span-1 md:col-span-4 row-span-2',
      caption: 'Pastel dusty rose-blush cotton blend tunic adorned with delicate white floral branch embroidery, lace-trimmed V-neckline, and box pleat.'
    }
  ];

  const filterTabs = [
    { label: 'All Photos', key: 'all' },
    { label: 'Festive Ensembles', key: 'festive' },
    { label: "Women's Wear", key: 'women' },
    { label: "Men's Wear", key: 'men' },
    { label: 'Hosiery & Essentials', key: 'hosiery' },
    { label: 'Door Mats & Rugs', key: 'mats' },
    { label: 'Storefront', key: 'store' }
  ];

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 sm:pt-28 pb-24 text-[#151515]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12 border-b border-[#EAE7E2]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151515] text-[#C6A576] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm">
          <Sparkles className="w-3 h-3" />
          <span>Lookbook Archive</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-[#151515]">
          VISUAL EDITORIAL GALLERY
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-light text-[#151515]/70 max-w-xl mx-auto leading-relaxed">
          Explore curated imagery of our festive anarkalis, everyday cotton staples, and our Silvassa Ring Road flagship store.
        </p>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? 'bg-[#151515] text-[#C6A576] shadow-sm'
                    : 'bg-white border border-[#EAE7E2] text-[#151515]/80 hover:border-[#151515]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry / Asymmetric Editorial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative overflow-hidden bg-[#151515] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 min-h-[380px] sm:min-h-[440px] flex flex-col justify-end ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 brightness-[0.92] group-hover:brightness-100"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A576] border border-[#C6A576]/30">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-9 h-9 rounded-full bg-[#C6A576] text-[#151515] flex items-center justify-center shadow-md">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              <div className="relative z-10 p-6 text-left">
                <h3 className="font-editorial text-2xl text-white group-hover:text-[#C6A576] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-up"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-[#181818] border border-white/15 max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-[#C6A576] hover:text-[#151515] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-3/5 bg-black/95 flex items-center justify-center p-3 sm:p-5 min-h-[320px] md:min-h-[520px]">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain mx-auto"
              />
            </div>

            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A576] font-semibold">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-3 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/60 space-y-1">
                  <p>📍 Shop No. 05, Rajshree Tower</p>
                  <p>Silvassa Ring Road, Dadra and Nagar Haveli</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>
                <a
                  href={`https://wa.me/917600903749?text=${encodeURIComponent(
                    `Hello Agarwal Hosiery Silvassa, I am inquiring about the "${selectedPhoto.title}" featured in your visual gallery.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/15"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C6A576]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
