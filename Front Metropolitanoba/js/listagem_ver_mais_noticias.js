var $parent = $(".listagem"),
      $items = $parent.find("a"),
      $loadMoreBtn = $("#load-more-comments"),
      maxItems = 6,
      hiddenClass = "visually-hidden";

    // add visually hidden class to items beyond maxItems
    $.each($items, function(idx, boxItems) {
      if (idx > maxItems - 1) {
        $(this).addClass(hiddenClass);
      }
    });

    // onclick of show more button show more = maxItems
    // if there are none left to show kill show more button
    $loadMoreBtn.on("click", function(e) {
      $("." + hiddenClass).each(function(idx, boxItems) {
        if (idx < maxItems - 0) {
          $(this).removeClass(hiddenClass);
        }
        // kill button if no more to show
        if ($("." + hiddenClass).size('') === 0) {
          $loadMoreBtn.hide();
        }
      });
    });