(function($) {

	"use strict";

	$(document).ready(function(){
		
		//  LocalStorage tests
		//  if(localStorage.getItem(spanId) == null)
		//       $('.vote-count').text(0);
		//   else {
		//       count = localStorage.getItem(spanId);
		//       $('.vote-count').text(count);
		//   }
		//   iconFav.click(function(){
		//     localStorage.setItem(spanId, count);
		//   });

		//Global Variables
		var item = $('.items');	
		var section = $('.item-voting');

		//Sorter
		$.fn.sortItems = function sortItems() {

		    $("> article", this[0]).sort(sorter).appendTo(this[0]);
		    
		    function sorter(a, b){ 
		    	return ($(b).attr('data-votes')) > ($(a).attr('data-votes')) ? 1 : -1; 
		    }

		}


		//Click Counter
		$.fn.extend({

			countPlus: function(votes) {
				var count = votes;
				var iconFav = $('.like-icon');

				iconFav.click(function(){
					if (count == 0) {

						count++;
						$(this).next('.vote-count').text(count);
						$(this).parent().parent().attr('data-votes', count);
						setTimeout(function(){
							section.sortItems();
						}, 1000);

					} else {

						var valueCount = parseInt($(this).next('.vote-count').text());
						valueCount++;
						$(this).next('.vote-count').text(valueCount);
						$(this).parent().parent().attr('data-votes', valueCount);
						setTimeout(function(){
							section.sortItems();
						}, 1000);

					}
				});
			}

	    }); 

		//Item Upvotes
	    item.find('.voting-set').countPlus({
			votes: parseInt($(this).find('.voting-set').children('.vote-count').text())
		});

	});

})(jQuery);