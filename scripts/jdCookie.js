
var cookies = {CookieJD1:'pt_key=AAJh4_VJADBclzTRBseGU5sEnVtV8COqqBq01efh1SlUPl8x2LC9UX0a5sZbo0jSALYAeeo79_Y;pt_pin=18815834929_p;',CookieJD2:'pt_key=AAJh4rImADCz-QTbIGbxlZ2SWGC9JVtVwUbL20USmZ8treadQNAZyO1qr5pqt6NHrKSJkcpgkQ8;pt_pin=jd_ElQMZEmyWYyS;',CookieJD3:'pt_key=AAJh5A3rADCEA-_lCrrsI5qLdya3yGsRg1mugbz-C1D6F68ENA0Ujkq_FaTzCpJU-z5g0BjMoCU;pt_pin=sweet%E6%88%91%E5%BE%88%E9%AA%84%E5%82%B2;',CookieJD4:'pt_key=AAJh5A9OADD5ezRTvCclszS3wZFghbwQ-BWICQukB1OxZI6zcu_aThovTrtMzrurmpcpj7Rfkbk;pt_pin=jd_483dc5d1d4476;',CookieJD5:'pt_key=AAJh8iaiADB76sWLjm2QMDucqIS5Njo62lvJs4lJr8ZVkh_cIadG5_urd5SFHVsmmymc6dAD5_g;pt_pin=jd_ULEcbGAAakqP;',CookieJD6:'pt_key=AAJh5U0iADAviiO6qLSOz8z5symTH-SSR8K_4BQm38mwKEL6BWO6SLXtvqvI6tZrtYbo8FYMIHI;pt_pin=oooooo1101;',CookieJD7:'pt_key=AAJh5VcSADDYQgUgxAR6zbzZtCWxKeNQKO3E9qxw9_Oqcf5mQBKAfXWM8EwEZ7tHdal_dbY7hY8;pt_pin=jd_giyZnPhjfsgF;',CookieJD8:'pt_key=AAJh6XfoADBSeUqfjlDGteLqupdfGlnU5BIFziGwjUj_OHhEj-2T_0hMqnMLCaJbvnMlL1RgEvo;pt_pin=x112332051;',CookieJD9:'pt_key=AAJh-P33ADBKyD-0KCoKda5fgQSLOkVNY3ga6qGO4S4EbSB-DQvAAe-SDxQYryKi1uuHyXfw-3E;pt_pin=jd_NDKBQxumPCMQ;'}
var pins = process.env.pins
if(pins){
	pins = pins.split("&")
	for (var key in cookies) {
	    c = false
	    for (var pin of pins) {
		   if (pin && cookies[key].indexOf(pin) != -1) {
			  c = true
			  break
		   }
	    }
	    if (!c) {
		   delete cookies[key]
	    }
	}
}
module.exports = cookies