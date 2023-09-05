function _changeChannel() {

    $(".chinfox").click(function() {
        $id = $(this).data("id");
        //alert('rtmp://'+$(this).data("serverip")+'/'+$(this).data("app")+'/'+$(this).data("streamname"));
        $("#sip").val($(this).data("serverip"));
        $("#appname").val($(this).data("app"));
        $("#sname").val($(this).data("streamname"));
        $("#hdsd").val($(this).data("type"));
        $("#maintitle").html($(this).data("title"));
        if ($("#hd").is(":checked") || $("#hdsd").val() == '0') {
            $name = "";
        } else {
            $name = "_sd";
        }
        //alert($("#hdsd").val());
        if ($("#hdsd").val() == '0') {
            $("#hd").prop("disabled", true);
        } else {
            $("#hd").prop("disabled", false);
        }
        var source = 'https://' + $.trim($("#sip").val()) + ':1995/' + $.trim($("#appname").val()) + '/' + $.trim($("#sname").val()) + '/playlist.m3u8';
        player.load(source);

        $(".active").removeClass("active");
        $("#x" + $id).addClass("active");
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            data: {
                do: "all",
                epg: $(this).data("epg")
            },
            url: "ajax.php",
            dataType: "json",
            success: function(d) {
                $("#now-title").html(d['nowtitle']);
                $("#epg-body").html(d['full']);
                $("#now-title2").html(d['nowtitle']);
                $("#now-title").append(d['nowdesc']);
                $("#now-title2").append(d['nowdesc']);
            }
        })
    });
}

function _hdSd() {
    $("#hd").change(function() {
        if ($(this).is(":checked")) {
            $name = "";
        } else {
            $name = "_sd";
        }


        $.ajax({
            type: "POST",
            async: true,
            cache: false,
            data: {
                do: 'hd',
                hd: $name
            },
            url: "ajax.php"
        });
    })
}