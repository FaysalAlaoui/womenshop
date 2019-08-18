const products = [
	{
		id: 0,
		pcode: 2000378536,
		sku: '',
		price: 13.99,
		title: 'Sheer Floral Organza Shirt',
		desc: 'A sheer woven shirt featuring an allover floral print, basic collar, button front, darting at the bust, long balloon sleeves with button cuffs, and a partially curved hem.',
		images: [
				'women-cloathes-sheer-floral-organza-shirt-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 1,
		pcode: 1000370838,
		sku: '00370838021',
		price: 9.99,
		title: 'Ombre Tinted Sunglasses',
		desc: 'This pair of sunglasses has ombre tinted lenses, a trapezoid shape, high-polish brow bar, and contrast temples.',
		images: [
				'women-cloathes-ombre-tinted-sunglasses-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 2,
		pcode: 2000366343,
		sku: '',
		price: 72.99,
		title: 'Ribbed Mock Neck Top & Skirt Set',
		desc: 'A matching ribbed knit set featuring a mock neck top with long sleeves and a knee-length bodycon skirt.',
		images: [
				'women-cloathes-ombre-ribbed-mock-neck-top-and-skirt-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 3,
		pcode: 2000360722,
		sku: '',
		price: 35.99,
		title: 'Plus Size Striped Trim Pullover',
		desc: 'A French terry pullover featuring a striped panel throughout the front and long sleeves, dropped shoulders, mock neck, ribbed trim, and a partial front zip closure with a pull ring.',
		images: [
				'women-cloathes-plussize-striped-trim-pullover-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 4,
		pcode: 1000380215,
		sku: '00380215011',
		price: 49.99,
		title: 'Layered Pendant Necklace',
		desc: 'A high-polish layered necklace featuring anchor, herringbone, and rolo chains, disc charm, etched Africa pendant, and a lobster-clasp closure.',
		images: [
				'women-cloathes-layered-pendant-necklac-pic1.png',
				'women-cloathes-layered-pendant-necklac-pic2.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 5,
		pcode: 1000384412,
		sku: '00384412011',
		price: 25.99,
		title: 'Quilted Structured Crossbody Bag',
		desc: 'A square-shaped, structured faux leather crossbody bag featuring a quilted design, high-polish curb chain strap, and flap-top with snap-button closure.',
		images: [
				'women-cloathes-quilted-structured-crossbody-bag-pic1.png',
			],
		seller: 'jean.harrold@gmail.com'
	},
	{
		id: 6,
		pcode: 1000381024,
		sku: '00381024021',
		price: 63.99,
		title: 'Rhinestone Hoop Earrings',
		desc: 'A pair of hoop earrings featuring rhinestone trim and omega closures.',
		images: [
				'women-cloathes-rhinestone-hoop-earrnings-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 7,
		pcode: 2000358214,
		sku: '0045802561',
		price: 57.99,
		title: 'Faux Leather Buckled Block Heels',
		desc: 'This pair of high heels with a faux leather upper has a crisscross woven vamp strap, thick ankle strap with high-polish buckle, open backshaft, open toe, and a high stacked block heel.',
		images: [
				'women-cloathes-faux-leather-heals-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 10,
		pcode: 2000369850,
		sku: '',
		price: 28.00,
		title: 'Faux Leather Pointed Toe Booties',
		desc: 'A pair of faux leather booties featuring a pointed toe, side zipper, and a block heel.',
		images: [
				'women-cloathes-faux-leather-pointed-toe-booties-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 14,
		pcode: 2000369850,
		sku: '',
		price: 25.00,
		title: 'Faux Suede Block Heels',
		desc: 'A pair of faux suede block heels featuring an open toe, strappy vamp, and an adjustable ankle strap closure.',
		images: [
				'women-cloathes-faux-suede-block-heels-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 22,
		pcode: 2000352561,
		sku: '',
		price: 29.90,
		title: 'Braided Espadrille Wedges',
		desc: 'A pair of faux suede wedges featuring an open toe, braided vamp design, and an espadrille sole.',
		images: [
				'women-cloathes-braided-espadrille-wedges-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 26,
		pcode: 2000378139,
		sku: '',
		price: 32.00,
		title: 'Strappy Stiletto Heels',
		desc: 'A pair of faux leather stiletto heels featuring an open toe, strappy vamp that leads into an ankle strap closure, and a back zip closure.',
		images: [
				'women-cloathes-strappy-stiletto-heels-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 36,
		pcode: 2000374779,
		sku: '',
		price: 29.90,
		title: 'Low-Top Lace-Up Sneakers',
		desc: '	This pair of low-top sneakers has a combined faux leather and fabric upper with breathable mesh details and ribbed trim, lace-up front closure, back pull tab, round toe with a bumper, and a comfortable insole with a platform heel sole.',
		images: [
				'women-cloathes-low-top-lace-up-sneakers-pic1.png',
			],
		seller: 'forever21@gmail.com'
	},
	{
		id: 74,
		pcode: 2000355286,
		sku: '',
		price: 55.00,
		title: 'Keds Metallic Platform Sneakers',
		desc: 'A pair of platform sneakers by Keds™ with a metallic fabric upper, bumper toe, lace-up closure with burnished grommets, and a thin tongue.',
		images: [
				'women-cloathes-keds-metallic-platform-sneakers-pic1.png',
			],
		seller: 'forever21@gmail.com'
	}

];
export default products;