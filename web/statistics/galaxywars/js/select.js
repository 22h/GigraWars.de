(function($) {
	$.fn.jqselectbox = function() {
		return this.each(function() {
			if($(this).attr('multiple') != '') {
                return;
            }
            var id = $(this).attr('id');
            var name = $(this).attr('name');
            var cssClass = $(this).attr('class');
            var onChange = $(this).attr('onChange');
            var options = '';
            var spanText = '';
            var spanClass = '';
            var selectedValue = '';

            $(this).find('option').each(function() {
                if($(this).attr('value') == $(this).parent().attr('value') && spanText == '') {
                    selectedValue = $(this).attr('value');
                    spanText = $(this).html();
                    if($(this).attr('class') != '') spanClass = ' '+$(this).attr('class');
                }
                options += '<li class="'+$(this).attr('class')+'" selectValue="'+$(this).attr('value')+'">';
                options += $(this).html();
                options += '</li>';
            });

            var newSelect = '<div class="selectdummy" id="div_'+id+'" name="div_'+$(this).attr('name')+'">';
            newSelect += '<select class="'+cssClass+'" id="'+id+'" name="'+name+'">';
            newSelect += $(this).html();
            newSelect += '</select>';
            newSelect += '<span class="text'+spanClass+'" id="span_'+id+'">'+spanText+'</span>';
            newSelect += '<span class="arrow" id="arrow_'+id+'"></span>';
            newSelect += '<ul id="ul_'+id+'" class="dropdown_ul">';
            newSelect += options;
            newSelect += '</ul>';
            newSelect += '</div>';
            $(this).before(newSelect).remove();
            if(onChange != '') {
                $('#'+id).change(function() {
                    eval(onChange);
                });
            }

            $('#'+id).attr('value', selectedValue);
            $('#'+id).change();

            var ulWidth = $('#ul_'+id).width();
            $('#ul_'+id).width(ulWidth+10);
            $('#span_'+id).width(ulWidth);
            $('#ul_'+id).hide(0)

            $('#span_'+id+', #arrow_'+id).bind('click', function() {
                if($('#ul_'+id).css('display') == 'none') {
                    $('#div_'+id+', #span_'+id+', #arrow_'+id).addClass('active');
                    $('#ul_'+id).slideDown(100, function() {
                        $(this).children('li').bind('click', function() {
                            $('#span_'+id).html($(this).html());
                            spanClass = '';
                            if($(this).attr('class') != '') {
                                spanClass = ' '+$(this).attr('class');
                            }
                            $('#span_'+id).attr('class', 'text'+spanClass);
                            $('#'+id).attr('value', $(this).attr('selectValue'));
                            $('#'+id).change();
                        });
                        $("body").bind('click', function() {
                            $('#ul_'+id).children('li').unbind('click');
                            $('#div_'+id+', #span_'+id+', #arrow_'+id).removeClass('active');
                            $('#ul_'+id).slideUp(100);
                            $("body").unbind('click');
                        });
                    });
                }
            });
		});
	};
    $.fn.jqselectboxremove = function() {
        return this.each(function() {
            var id = $(this).attr('id');
            var newSelect = '<select class="'+$(this).attr('class')+'" id="'+id+'" name="'+$(this).attr('name')+'">';
            newSelect += $(this).html();
            newSelect += '</select>';
            $('#div_'+id).before(newSelect).remove();
        });
    };
})(jQuery);
