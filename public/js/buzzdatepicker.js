/**
 * Created by Remy on 25/09/2015.
 */

$(function(){
    var startDate = new Date();
    var endDate = new Date();
    $('#dpReg').datepicker()

        .on('changeDate', function(ev){
            if (ev.date.valueOf() > endDate.valueOf()){
                $('#alert').show().find('strong').text(' l\'enregistrement est après la diffusion! ');
            } else {
                $('#alert').hide();
                startDate = new Date(ev.date);
                $('#startDate').text($('#dpReg').data('date'));
            }
            $('#dpReg').datepicker('hide');
        });
    $('#dpDif').datepicker()
        .on('changeDate', function(ev){
            if (ev.date.valueOf() < startDate.valueOf()){
                $('#alert').show().find('strong').text(' La diffusion est avant l\'enregistrement! ');
            } else {
                $('#alert').hide();
                endDate = new Date(ev.date);
                $('#endDate').text($('#dpDif').data('date'));
            }
            $('#dpDif').datepicker('hide');
        });
});