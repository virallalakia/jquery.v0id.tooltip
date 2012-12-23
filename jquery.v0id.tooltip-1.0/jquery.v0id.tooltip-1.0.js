(function($) {

	var methods = {
		init : function(options) {

			return this.each(function() {

				var settings = {
					'content' : 'This is sample content for v0id tooltip'
				};
				settings = $.extend(settings, options);

				var $this = $(this);
				var data = $this.data('v0idtooltip');
				var contentHTML = getv0idtooltipHTML(settings.content);

				// If the plugin hasn't been initialized yet
				if (!data) {
					$(this).data('v0idtooltip', {
						target : $this,
						tooltipHTML : contentHTML
					});

					$this.bind('mouseenter.v0idtooltip', methods.show);
					$this.bind('mouseleave.v0idtooltip', methods.hide);
				}

			});

		},
		show : function() {
			var $this = $(this);
			var data = $this.data('v0idtooltip');
			
			var v0idtooltipCont = $(data.tooltipHTML);
			
			$("body").append(v0idtooltipCont);
			var offLeft = parseInt($this.offset().left) + (parseInt($this.outerWidth()) - parseInt($(v0idtooltipCont).outerWidth()))/2 ;
			var offTop = parseInt($this.offset().top) - parseInt($(v0idtooltipCont).outerHeight()) ;
			$(v0idtooltipCont).css('position','absolute').css('left', offLeft+'px').css('top',offTop+'px').fadeIn(100);
		},
		hide : function() {
			var $this = $(this);
			var data = $this.data('v0idtooltip');
			
			var v0idtooltipCont = $(data.tooltipHTML);
			
			$(v0idtooltipCont).fadeOut(100,function(){
				$(v0idtooltipCont).remove();
			});
		},
		remove : function(options) {
			return this.each(function() {
				var $this = $(this);
				var data = $this.data('v0idtooltip');

				// Namespacing FTW
				$this.unbind('.v0idtooltip');
				data.v0idtooltip.remove();
				$this.removeData('v0idtooltip');
			});
		}
	};

	$.fn.v0idtooltip = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}

	};

	var getv0idtooltipHTML = function(content) {
		return $("<div class='v0idtooltipcont' />").append($("<div class='v0idtooltiptextcont' />").append(content)).append($("<div class='v0idtooltiparrow' />"));
	};

})(jQuery);