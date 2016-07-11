$(document).ready(function() {
        $('.filter').on('click', function() {

            var item = $(this).closest('.filter'),
                contentItem = $('.tab_item'),
                itemPosition = item.index();
                console.log(itemPosition);


                contentItem.eq(itemPosition)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

                    item.addClass('active')
                    .siblings()
                    .removeClass('active');
        });
    });