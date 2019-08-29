<!-- 검색창 스크립트  -->
            <script>
                    $(function(){
                        $(window).on("resize",function(){
                            if(window.innerWidth<720){
                                $("nav").hide();
                            }
                        
                        });
                        // $("#navi").hide();
                        $("#tgl_menu").on("click",function(){
                            $("#nav").slideToggle();
                            $("#search_form").hide();
                        });
        
                        $("#search_icon2").on("click",function(){
                            $("#search_form").slideToggle();
                        });
                        
                        $(window).on("resize",function(){
                           var wWidth= $(window).innerWidth();
                           if(wWidth>690){
                            $("#nav").show();
                                }
                        });
                    });
                </script>
