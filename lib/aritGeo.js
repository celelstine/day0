/**
 * A function to check if a series is an Arithmetic or Geometric series
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict'

var aritGeo = function(sequence) {
	
	if(sequence.constructor === Array) {
			var is_arit,
	    is_geo = false,
	    first_term = sequence[0],
	    arit_common = sequence[1]-first_term,
	    geo_common =sequence[1]/first_term,
	    sequence_length = sequence.length -1,
	    arit_last_term = first_term + ( (sequence_length)*arit_common ),
	    geo_last_term = first_term * Math.pow(geo_common, sequence_length);

			is_arit= (arit_last_term ==sequence[sequence_length])? true:false
			is_geo= (geo_last_term ==sequence[sequence_length])? true:false

			if(sequence_length<0) {
				return 0;
			} else	{
				if(is_arit ) {
					return "Arithmetic";
				} else if(is_geo) {
					return 	"Geometric";
				} else {
					return -1	
				}
			}
	} else{
		return 'Invalid input, expect an array';
	}
	
}


module.exports = aritGeo;