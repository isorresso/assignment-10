$(document).ready(() => {

    $('#swamp').hide();
    $('#swamp2').hide();
    $('#swamp3').hide();

    $('#weimer').hide();
    $('#weimer2').hide();
    $('#weimer3').hide();

    $('#graduation').hide();
    $('#graduation2').hide();
    $('#graduation3').hide();

    $('#hollywoodsign').hide();
    $('#hollywoodsign2').hide();
    $('#hollywoodsign3').hide();

$('div').on('click', () => {

    let divText = $(event.currentTarget).text();

    if (divText === 'School') {
      $('#swamp').toggle();
      $('#swamp2').toggle();
      $('#swamp3').toggle();
    }

    if (divText === 'Major') {
      $('#weimer').toggle();
      $('#weimer2').toggle();
      $('#weimer3').toggle();
    }

    if (divText === 'Graduation') {
      $('#graduation').toggle();
      $('#graduation2').toggle();
      $('#graduation3').toggle();
    }
    if (divText === 'Goals') {
      $('#hollywoodsign').toggle();
      $('#hollywoodsign2').toggle();
      $('#hollywoodsign3').toggle();
    }

  })

}); //end of document tag
