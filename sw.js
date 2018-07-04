// Add version number for easy updating
const cacheName = 'cache-v1';
// Files to cache:
const cacheAssets = [
	'./',
	'./index.html',
	'./restaurant.html',
	'./css/styles.css',
	'./js/main.js',
	'./data/restaurants.json',
	'./js/dbhelper.js',
	'./js/restaurant_info.js',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/2.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
	'./img/10.jpg',
	'./img/restaurant_icons.png'
];

/**
 * Install and store site assets
 * Service worker will not install until the code inside
 * waitUntil has sucseeded.
 */
self.addEventListener('install', function (evt) {
	evt.waitUntil(
		caches
		.open(cacheName)
		.then((cache) => {
			console.log('Service Worker: Caching Assets');
			return cache.addAll(cacheAssets);
		})
	);
});