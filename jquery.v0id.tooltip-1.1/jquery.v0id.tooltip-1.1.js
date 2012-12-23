(function($) {

	var methods = {
		init : function(options) {

			return this.each(function() {

				var settings = {
					'content' : 'This is sample content for v0id tooltip',
					'position' : 'top',
					'left' : 0,
					'top' : 0
				};
				settings = $.extend(settings, options);

				var $this = $(this);
				if($('.v0idtooltipcontall').length <= 0) {
					$('body').append(getv0idtooltipHTML());
				}

				var data = $this.data('v0idtooltip');
				// If the plugin hasn't been initialized yet
				if (!data) {
					$(this).data('v0idtooltip', {
						'target' : $this,
						'settings' : settings
					});

					$this.bind('mouseenter.v0idtooltip', methods.show);
					$this.bind('mouseleave.v0idtooltip', methods.hide);
				}

			});

		},
		show : function() {
			var $this = $(this);
			var data = $this.data('v0idtooltip');
			var v0idtooltipCont;
			var textCont;
			var arrow;
			var offLeft = data.settings.left;
			var offTop = data.settings.top;

			switch (data.settings.position) {
			case 'left':
				v0idtooltipCont = $('.v0idtooltipcontleft');
				textCont = v0idtooltipCont.children('.v0idtooltiptextcont');
				arrow = v0idtooltipCont.children('.v0idtooltiparrowright');
				textCont.html(data.settings.content);
				arrow.css('margin-top', ((v0idtooltipCont.outerHeight() - arrow.outerHeight())/2) + 'px');
				offLeft += parseInt($this.offset().left) - parseInt(v0idtooltipCont.outerWidth()) ;
				offTop += parseInt($this.offset().top) + (parseInt($this.outerHeight()) - parseInt(v0idtooltipCont.outerHeight()))/2;
				break;
			case 'right':
				v0idtooltipCont = $('.v0idtooltipcontright');
				textCont = v0idtooltipCont.children('.v0idtooltiptextcont');
				arrow = v0idtooltipCont.children('.v0idtooltiparrowleft');
				textCont.html(data.settings.content);
				arrow.css('margin-top', ((v0idtooltipCont.outerHeight() - arrow.outerHeight())/2) + 'px');
				offLeft += parseInt($this.offset().left) + parseInt($this.outerWidth()) ;
				offTop += parseInt($this.offset().top) + (parseInt($this.outerHeight()) - parseInt(v0idtooltipCont.outerHeight()))/2;
				break;
			case 'bottom':
				v0idtooltipCont = $('.v0idtooltipcontbottom');
				v0idtooltipCont.children('.v0idtooltiptextcont').html(data.settings.content);
				offLeft += parseInt($this.offset().left) + (parseInt($this.outerWidth()) - parseInt(v0idtooltipCont.outerWidth()))/2 ;
				offTop += parseInt($this.offset().top) + parseInt($this.outerHeight()) ;
				break;
			default:
				v0idtooltipCont = $('.v0idtooltipconttop');
				v0idtooltipCont.children('.v0idtooltiptextcont').html(data.settings.content);
				offLeft += parseInt($this.offset().left) + (parseInt($this.outerWidth()) - parseInt(v0idtooltipCont.outerWidth()))/2 ;
				offTop += parseInt($this.offset().top) - parseInt(v0idtooltipCont.outerHeight()) ;
				break;
			}
			
			$(v0idtooltipCont).css('position','absolute').css('left', offLeft+'px').css('top',offTop+'px').fadeIn(100);
		},
		hide : function() {
			var $this = $(this);
			var data = $this.data('v0idtooltip');
			
			var v0idtooltipCont;
			
			switch (data.settings.position) {
			case 'left':
				v0idtooltipCont = $('.v0idtooltipcontleft');
				v0idtooltipCont.children('.v0idtooltiptextcont').css('style','');
				v0idtooltipCont.children('.v0idtooltiparrowup').css('style','');
				break;
			case 'right':
				v0idtooltipCont = $('.v0idtooltipcontright');
				v0idtooltipCont.children('.v0idtooltiptextcont').css('style','');
				v0idtooltipCont.children('.v0idtooltiparrowup').css('style','');
				break;
			case 'bottom':
				v0idtooltipCont = $('.v0idtooltipcontbottom');
				v0idtooltipCont.children('.v0idtooltiptextcont').css('style','');
				v0idtooltipCont.children('.v0idtooltiparrowup').css('style','');
				break;
			default:
				v0idtooltipCont = $('.v0idtooltipconttop');
				v0idtooltipCont.children('.v0idtooltiptextcont').css('style','');
				v0idtooltipCont.children('.v0idtooltiparrowdown').css('style','');
				break;
			}
			
			v0idtooltipCont.fadeOut(100);
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

	var getv0idtooltipHTML = function() {
		var v0idtooltipcontall = $("<div class='v0idtooltipcontall'></div>");
		var v0idtooltipconttop = $("<div class='v0idtooltipconttop'></div>").append($("<div class='v0idtooltiptextcont'></div>")).append($("<div class='v0idtooltiparrowdown'></div>"));
		var v0idtooltipcontbottom = $("<div class='v0idtooltipcontbottom'></div>").append($("<div class='v0idtooltiparrowup'></div>")).append($("<div class='v0idtooltiptextcont'></div>"));
		var v0idtooltipcontleft = $("<div class='v0idtooltipcontleft'></div>").append($("<div class='v0idtooltiptextcont' style='float:left;'></div>")).append($("<div class='v0idtooltiparrowright'></div>"));
		var v0idtooltipcontright = $("<div class='v0idtooltipcontright'></div>").append($("<div class='v0idtooltiparrowleft'></div>")).append($("<div class='v0idtooltiptextcont' style='float:right;'></div>"));
		v0idtooltipcontall.append(v0idtooltipconttop).append(v0idtooltipcontbottom).append(v0idtooltipcontleft).append(v0idtooltipcontright);
		return v0idtooltipcontall;
	};

})(jQuery);