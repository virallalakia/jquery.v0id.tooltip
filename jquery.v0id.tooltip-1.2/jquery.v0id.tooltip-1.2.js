(function($) {

	var methods = {
		init : function(options) {

			return this.each(function() {

				var settings = {
					'content' : 'This is sample content for v0id tooltip',
					'position' : 'top',
					'left' : 0,
					'top' : 0,
					'contClass' : 'v0idtooltipcont',
					'textClass' : 'v0idtooltiptextcont',
					'downArrowClass' : 'v0idtooltiparrowdown',
					'upArrowClass' : 'v0idtooltiparrowup',
					'rightArrowClass' : 'v0idtooltiparrowright',
					'leftArrowClass' : 'v0idtooltiparrowleft',
					'speed' : 100
				};
				settings = $.extend(settings, options);

				var $this = $(this);
				if($("[voidtooltip='contall']").length <= 0) {
					$('body').append(getv0idtooltipHTML(settings));
				}

				var data = $this.data('v0idtooltip');
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
				v0idtooltipCont = $("[voidtooltip='contleft']");
				textCont = v0idtooltipCont.children("[voidtooltip='conttext']");
				arrow = v0idtooltipCont.children("[voidtooltip='arrowright']");
				v0idtooltipCont.removeAttr('class').addClass(data.settings.contClass);
				textCont.removeAttr('class').addClass(data.settings.textClass);
				arrow.removeAttr('class').addClass(data.settings.rightArrowClass);
				textCont.html(data.settings.content);
				arrow.css('margin-top', ((v0idtooltipCont.outerHeight() - arrow.outerHeight())/2) + 'px');
				offLeft += parseInt($this.offset().left) - parseInt(v0idtooltipCont.outerWidth()) ;
				offTop += parseInt($this.offset().top) + (parseInt($this.outerHeight()) - parseInt(v0idtooltipCont.outerHeight()))/2;
				break;
			case 'right':
				v0idtooltipCont = $("[voidtooltip='contright']");
				textCont = v0idtooltipCont.children("[voidtooltip='conttext']");
				arrow = v0idtooltipCont.children("[voidtooltip='arrowleft']");
				v0idtooltipCont.removeAttr('class').addClass(data.settings.contClass);
				textCont.removeAttr('class').addClass(data.settings.textClass);
				arrow.removeAttr('class').addClass(data.settings.leftArrowClass);
				textCont.html(data.settings.content);
				arrow.css('margin-top', ((v0idtooltipCont.outerHeight() - arrow.outerHeight())/2) + 'px');
				offLeft += parseInt($this.offset().left) + parseInt($this.outerWidth()) ;
				offTop += parseInt($this.offset().top) + (parseInt($this.outerHeight()) - parseInt(v0idtooltipCont.outerHeight()))/2;
				break;
			case 'bottom':
				v0idtooltipCont = $("[voidtooltip='contbottom']");
				textCont = v0idtooltipCont.children("[voidtooltip='conttext']");
				arrow = v0idtooltipCont.children("[voidtooltip='arrowup']");
				v0idtooltipCont.removeAttr('class').addClass(data.settings.contClass);
				textCont.removeAttr('class').addClass(data.settings.textClass);
				arrow.removeAttr('class').addClass(data.settings.upArrowClass);
				textCont.html(data.settings.content);
				offLeft += parseInt($this.offset().left) + (parseInt($this.outerWidth()) - parseInt(v0idtooltipCont.outerWidth()))/2 ;
				offTop += parseInt($this.offset().top) + parseInt($this.outerHeight()) ;
				break;
			default:
				v0idtooltipCont = $("[voidtooltip='conttop']");
				textCont = v0idtooltipCont.children("[voidtooltip='conttext']");
				arrow = v0idtooltipCont.children("[voidtooltip='arrowdown']");
				v0idtooltipCont.removeAttr('class').addClass(data.settings.contClass);
				textCont.removeAttr('class').addClass(data.settings.textClass);
				arrow.removeAttr('class').addClass(data.settings.downArrowClass);
				textCont.html(data.settings.content);
				offLeft += parseInt($this.offset().left) + (parseInt($this.outerWidth()) - parseInt(v0idtooltipCont.outerWidth()))/2 ;
				offTop += parseInt($this.offset().top) - parseInt(v0idtooltipCont.outerHeight()) ;
				break;
			}
			
			v0idtooltipCont.css('position','absolute').css('left', offLeft+'px').css('top',offTop+'px').fadeIn(data.settings.speed);
		},
		hide : function() {
			var $this = $(this);
			var data = $this.data('v0idtooltip');
			
			var v0idtooltipCont;
			
			switch (data.settings.position) {
			case 'left':
				v0idtooltipCont = $("[voidtooltip='contleft']");
				v0idtooltipCont.children("[voidtooltip='conttext']").css('style','');
				v0idtooltipCont.children("[voidtooltip='arrowright']").css('style','');
				break;
			case 'right':
				v0idtooltipCont = $("[voidtooltip='contright']");
				v0idtooltipCont.children("[voidtooltip='conttext']").css('style','');
				v0idtooltipCont.children("[voidtooltip='arrowleft']").css('style','');
				break;
			case 'bottom':
				v0idtooltipCont = $("[voidtooltip='contbottom']");
				v0idtooltipCont.children("[voidtooltip='conttext']").css('style','');
				v0idtooltipCont.children("[voidtooltip='arrowup']").css('style','');
				break;
			default:
				v0idtooltipCont = $("[voidtooltip='conttop']");
				v0idtooltipCont.children("[voidtooltip='conttext']").css('style','');
				v0idtooltipCont.children("[voidtooltip='arrowdown']").css('style','');
				break;
			}
			
			v0idtooltipCont.fadeOut(data.settings.speed);
		},
		remove : function(options) {
			return this.each(function() {
				var $this = $(this);
				var data = $this.data('v0idtooltip');
				$this.unbind('.v0idtooltip');
				data.v0idtooltip.remove();
				$this.removeData('v0idtooltip');
			});
		}
	};

	var getv0idtooltipHTML = function(settings) {
		var v0idtooltipcontall = $("<div voidtooltip='contall' class='v0idtooltipcontall'></div>");
		var v0idtooltipconttop = $("<div voidtooltip='conttop' class='"+settings.contClass+"'></div>").append($("<div voidtooltip='conttext' class='"+settings.textClass+"'></div>")).append($("<div voidtooltip='arrowdown' class='"+settings.downArrowClass+"'></div>"));
		var v0idtooltipcontbottom = $("<div voidtooltip='contbottom' class='"+settings.contClass+"'></div>").append($("<div voidtooltip='arrowup' class='"+settings.upArrowClass+"'></div>")).append($("<div voidtooltip='conttext' class='"+settings.textClass+"'></div>"));
		var v0idtooltipcontleft = $("<div voidtooltip='contleft' class='"+settings.contClass+"'></div>").append($("<div voidtooltip='conttext' class='"+settings.textClass+"' style='float:left;'></div>")).append($("<div voidtooltip='arrowright' class='"+settings.rightArrowClass+"'></div>"));
		var v0idtooltipcontright = $("<div voidtooltip='contright' class='"+settings.contClass+"'></div>").append($("<div voidtooltip='arrowleft' class='"+settings.leftArrowClass+"'></div>")).append($("<div voidtooltip='conttext' class='"+settings.textClass+"' style='float:right;'></div>"));
		v0idtooltipcontall.append(v0idtooltipconttop).append(v0idtooltipcontbottom).append(v0idtooltipcontleft).append(v0idtooltipcontright);
		return v0idtooltipcontall;
	};
	
	$.fn.v0idtooltip = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}

	};

})(jQuery);