__d(
  "VideoPlayerFullscreenController",
  ["CometFullScreen", "FBLogger", "getErrorSafe", "removeFromArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.current != null &&
        o("CometFullScreen").getFullScreenElement() === e.current
      );
    }
    function s(t) {
      var n = [];
      function a() {
        n.forEach(function (e) {
          e();
        });
      }
      var i = null;
      return {
        getIsFullscreen: function () {
          return e(t);
        },
        requestSetIsFullscreen: function (a, i) {
          var n = t.current;
          if (n == null)
            throw r("FBLogger")("comet_video_player").mustfixThrow(
              "Requested full screen while the element is not present",
            );
          o("CometFullScreen").isSupported()
            ? a !== e(t) &&
              (a === !0
                ? o("CometFullScreen")
                    .requestFullScreen(n)
                    .catch(function (e) {
                      r("FBLogger")("comet_video_player")
                        .catching(r("getErrorSafe")(e))
                        .mustfix("Failed to request fullscreen");
                    })
                : a === !1 &&
                  o("CometFullScreen")
                    .exitFullScreen()
                    .catch(function (e) {
                      r("FBLogger")("comet_video_player")
                        .catching(r("getErrorSafe")(e))
                        .mustfix("Failed to exit fullscreen");
                    }))
            : a && i != null && typeof i.webkitEnterFullScreen == "function"
              ? i.webkitEnterFullScreen()
              : !a &&
                i != null &&
                typeof i.webkitExitFullScreen == "function" &&
                i.webkitExitFullscreen();
        },
        subscribe: function (t) {
          return (
            n.length === 0 &&
              i == null &&
              (i = o("CometFullScreen").subscribeToFullScreenChangeEvent(a)),
            n.push(t),
            {
              remove: function () {
                (r("removeFromArray")(n, t),
                  n.length === 0 && i != null && (i(), (i = null)));
              },
            }
          );
        },
      };
    }
    l.createFullscreenController = s;
  },
  98,
);
