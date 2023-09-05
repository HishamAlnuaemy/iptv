<script>
<script type="text/javascript">
        var first = true;
        var playerElement = document.getElementById("playerhubllxgAnwSY");
        var player = new Clappr.Player({
            source:"",
            autoPlay: true,
            height: 360,
            plugins: {
                container: [ResponsiveContainer]
            }
        });
    </script>

    <script>
        var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

        var mixer = mixitup(containerEl, {
            selectors: {
                control: '[data-mixitup-control]'
            }
        });
    </script>
    <script>
        $('#playerModal').on('hidden.bs.modal', function() {
            player.stop();
        })
        $('#playerModal').on('show.bs.modal', function() {

        });
        $(".playerTrigger").click(function(e) {
            if (first == true) {
                player.attachTo(playerElement);
                first = false;
            }
            if ($(this).data("type") == "0") {


                $("#hd").prop("disabled", true);

            } else {
                $("#hd").prop("disabled", false);
            }
            $("#appname").val($(this).data("app"));
            $("#sname").val($(this).data("streamname"));
            $xname = $("#hd").is(":checked") || $(this).data("type") == "0" ? "" : "";
            player.load($(this).data("video-path"));
            $(".modal-title").html($(this).data("title"));

        });

        function openPlayer(element) {
            var serverip = element.getAttribute('data-serverip');
            var app = element.getAttribute('data-app');
            var streamname = element.getAttribute('data-streamname');
            var type = element.getAttribute('data-type');
            var title = element.getAttribute('data-title');
            var videoPath = element.getAttribute('data-video-path');

            var playerElement = document.getElementById("playerhubllxgAnwSY");
            var player = new Clappr.Player({
                source: videoPath,
                autoPlay: true,
                height: 360,
                plugins: {
                    container: [ResponsiveContainer]
                }
            });

            $("#appname").val(app);
            $("#sname").val(streamname);
            $xname = (type === "0") ? "" : "/playlist.m3u8";
            player.load(videoPath);
            $(".modal-title").html(title);

            $('#playerModal').modal('show');
        }

        // دالة لإيقاف تشغيل المشغل عند إغلاق النافذة المنبثقة
        function stopPlayer() {
            player.stop();
        }
    </script>