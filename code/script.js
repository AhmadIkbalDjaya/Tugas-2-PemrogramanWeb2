function translate(){
    $.ajax({
        url: 'https://amm-api-translate.herokuapp.com/translate',
        type: 'get',
        dataType: 'json',
        data: {
            'engine' : 'google',
            'text' : $('.text-indo').val(),
            'to' : $('#pilihan-bahasa option:selected').data('code')
        },
        success: function(hasil){
            console.log(hasil);
            if(hasil.status == true){
                $('.text-hasil').html(`
                    `+ hasil.data.result +`
                `);
            }
            else{
                $('.text-hasil').html(`
                    `+ hasil.message +`
                `);
            }
        }
    });
}

$('#translate-button').on('click', function(){
    translate();
})

$('#pilihan-bahasa').on('change', function(){
    $('.bahasa-terpilih').html($('#pilihan-bahasa option:selected').val())
})