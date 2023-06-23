$(document).ready(function() {
    divResize();
    $(window).resize(function() {
        divResize();
    }).resize();

    // $(".header-0 > label").click(function () {
    //     $header = $(this);
    //     $content = $header.next();
    //     $content.slideToggle(500);
    // });

    $('#modal1').on('hidden.bs.modal', function (e) {
        $('#modal1 video').attr("src", $("#modal1 video").attr("src"));
      });

      $('#modal2').on('hidden.bs.modal', function (e) {
        $('#modal2 video').attr("src", $("#modal2 video").attr("src"));
      });

      $('#modal3').on('hidden.bs.modal', function (e) {
        $('#modal3 video').attr("src", $("#modal3 video").attr("src"));
      });

      $('#modal4').on('hidden.bs.modal', function (e) {
        $('#modal4 video').attr("src", $("#modal4 video").attr("src"));
      });

      $('#modal1').on('shown.bs.modal', function () {
        $('#modal1 video')[0].play();
      })

      $('#modal2').on('shown.bs.modal', function () {
        $('#modal2 video')[0].play();
      })

      $('#modal3').on('shown.bs.modal', function () {
        $('#modal3 video')[0].play();
      })

      $('#modal4').on('shown.bs.modal', function () {
        $('#modal4 video')[0].play();
      })
    
    function divResize(){
        if(!(window.matchMedia("(max-width: 768px)").matches)){
            var div2 = $(".document-section .layer").height();
            $(".video-section .layer").height(div2);
        }else{
            $(".document-section .layer,.video-section .layer").height("auto");
        }
    }
});