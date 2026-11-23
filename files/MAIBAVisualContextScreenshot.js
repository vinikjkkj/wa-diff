__d(
  "MAIBAVisualContextScreenshot",
  ["FBLogger", "gkx", "hyperionTestAndSet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (alert(e), r("FBLogger")("maiba_visual_context_screenshot").warn(e));
    }
    var s = (function () {
        function t(e, t) {
          ((this.windowContext = e), (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.$3 = function () {
            var t,
              n =
                (t = navigator.mediaDevices) == null
                  ? void 0
                  : t.getDisplayMedia({
                      video: { displaySurface: "window" },
                      audio: !1,
                      preferCurrentTab: !0,
                    });
            return (
              n == null
                ? e(
                    "Failed to take screenshot. Either your browser does not support this feature or you have not granted permission to use your camera. Please try again.",
                  )
                : n
                    .then(function (t) {
                      t == null &&
                        e("Failed to take screenshot. Please try again.");
                    })
                    .catch(function (t) {
                      e(
                        "Failed to take screenshot. Please try again." +
                          String(t),
                      );
                    }),
              n
            );
          }),
          (n.startCapture = async function () {
            return this.$2 == null &&
              ((this.$2 = await this.$3()), this.$2 == null)
              ? Promise.resolve(!1)
              : ((this.$1.srcObject = this.$2),
                await this.$1.play(),
                Promise.resolve(!0));
          }),
          (n.stopCapture = function () {
            var e,
              t = (e = this.$2) == null ? void 0 : e.getTracks();
            (t == null ||
              t.forEach(function (e) {
                return e.stop();
              }),
              (this.$1.srcObject = null),
              (this.$2 = null));
          }),
          (n.takeScreenshot = function () {
            var e = this.$1.style.maxWidth;
            this.$1.style.maxWidth = "999%";
            var t = this.$1.getBoundingClientRect(),
              n = this.windowContext.document.createElement("canvas");
            ((n.width = Math.max(t.width, this.windowContext.innerWidth)),
              (n.height = Math.max(t.height, this.windowContext.innerHeight)));
            var r = n.getContext("2d");
            r.drawImage(this.$1, 0, 0, n.width, n.height);
            var o = n.toDataURL("image/png");
            return ((this.$1.style.maxWidth = e), o);
          }),
          t
        );
      })(),
      u = null;
    async function c() {
      (u == null && (u = new s(window, window.document.createElement("video"))),
        await u.startCapture());
    }
    function d(e, t) {
      var n = e.document.createElement("a");
      ((n.href = t), (n.download = "screenshot.png"), n.click());
    }
    var m = null;
    function p() {
      if (m != null) {
        m.focus();
        return;
      }
      var e = window.open(
        "",
        "MAIBA Visual Context Screenshot",
        "width=1000,height=1000",
      );
      if (e != null) {
        var t = e.document;
        t.write(`
  <html>
    <head>
      <style>
        div {
          display: flex;
          gap: 5%;
        }
        video {
          flex: 1;
          max-width: 99%;
          //aspect-ratio: 4/3;
        }
      </style>
    </head>
    <body>
      <p id="controls"></p>
      <div id="video-container"></div>
    </body>
  </html>
  `);
        var n = t.getElementById("controls"),
          r = t.getElementById("video-container");
        if (n == null || r == null) {
          e.close();
          return;
        }
        m = e;
        var o = t.createElement("video");
        r.appendChild(o);
        var a = t.createElement("button");
        a.textContent = "Start Capture";
        var i = t.createElement("button");
        i.textContent = "Stop Capture";
        var l = t.createElement("button");
        ((l.textContent = "Take a screenshot"),
          n.appendChild(a),
          n.appendChild(t.createTextNode("\xA0\xA0\xA0")),
          n.appendChild(i),
          n.appendChild(t.createTextNode("\xA0\xA0\xA0")),
          n.appendChild(l));
        var u = new s(e, o);
        (a.addEventListener("click", async function () {
          ((a.disabled = !(await u.startCapture())), (i.disabled = !1));
        }),
          i.addEventListener("click", function () {
            (u.stopCapture(), (a.disabled = !1), (i.disabled = !0));
          }),
          l.addEventListener("click", function () {
            d(u.windowContext, u.takeScreenshot());
          }));
      }
    }
    var _ = new (o("hyperionTestAndSet").TestAndSet)();
    function f() {
      r("gkx")("12720") &&
        (_.testAndSet() ||
          document.addEventListener("keydown", function (e) {
            (e.key === "s" || e.code === "KeyS") &&
              e.altKey &&
              e.shiftKey &&
              e.ctrlKey &&
              p();
          }));
    }
    ((l.startCapture = c), (l.init = f));
  },
  98,
);
