__d(
  "WAWebVoipVirtualVideoCaptureDriver",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1280,
      d = 720,
      m = 30,
      p = 2e3,
      _ = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFC0CB"],
      f = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = 0),
            (this.$4 = null),
            (this.$5 = null));
        }
        var n = t.prototype;
        return (
          (n.start = function () {
            var t = this;
            this.$3 = 0;
            var n = document.createElement("canvas");
            ((n.width = c), (n.height = d), (this.$1 = n));
            var a = n.getContext("2d");
            if (a == null) throw r("err")("Failed to get 2D canvas context");
            ((this.$2 = a),
              this.$6(),
              (this.$4 = window.setInterval(function () {
                t.$3 = (t.$3 + 1) % _.length;
              }, p)),
              (this.$5 = window.setInterval(function () {
                t.$6();
              }, 1e3 / m)));
            var i = n.captureStream(m);
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VirtualVideoCapture] Started ",
                    "x",
                    " @ ",
                    "fps",
                  ])),
                c,
                d,
                m,
              ),
              i
            );
          }),
          (n.stop = function () {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [VirtualVideoCapture] Stopping",
                ])),
            ),
              this.$5 != null &&
                (window.clearInterval(this.$5), (this.$5 = null)),
              this.$4 != null &&
                (window.clearInterval(this.$4), (this.$4 = null)),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VirtualVideoCapture] Stopped",
                  ])),
              ));
          }),
          (n.$6 = function () {
            var e = this.$2;
            if (e != null)
              for (var t = _.length, n = c / t, r = 0; r < t; r++) {
                var o = (r + this.$3) % t;
                ((e.fillStyle = _[o]), e.fillRect(r * n, 0, n, d));
              }
          }),
          t
        );
      })();
    l.WAWebVoipVirtualVideoCaptureDriver = f;
  },
  98,
);
