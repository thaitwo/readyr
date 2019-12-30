import fetch from 'isomorphic-fetch';
import { parseString } from 'xml2js';
import { GOODREADS_API_BASE_URL, CROSS_ORIGIN_URL } from '../js/const/api';

export function fetchBookData(bookId = 3228917) {
	return fetch(
		`${CROSS_ORIGIN_URL}/${GOODREADS_API_BASE_URL}/book/show.xml?key=${process.env.GOODREADS_API_KEY}&id=${bookId}`
	)
		.then(xml => {
			console.log('xml', xml.data);
			parseString(xml.data, (err, result) => {
				return result['GoodreadsResponse'].book[0];
			});
		})
		.catch(error => {
			console.warn(error);
			return null;
		});
}
