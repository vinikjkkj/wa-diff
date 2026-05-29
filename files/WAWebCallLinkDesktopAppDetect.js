__d(
  "WAWebCallLinkDesktopAppDetect",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 1e3,
      m = d + 250;
    function p(t, n, r) {
      var a =
        "whatsapp://call/" +
        encodeURIComponent(t) +
        "/" +
        encodeURIComponent(n);
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[desktop-app] attempting detection via ",
            "",
          ])),
        a,
      );
      var i = !1,
        l = navigator.userAgent,
        p =
          l.includes("Safari") &&
          !l.includes("Chrome") &&
          !l.includes("Chromium");
      if (p) {
        var _ = document.getElementById("wa-desktop-launcher");
        if (_ == null) {
          var f;
          ((_ = document.createElement("iframe")),
            (_.id = "wa-desktop-launcher"),
            (_.style.display = "none"),
            (f = document.body) == null || f.appendChild(_));
        }
        _.setAttribute("src", a);
      } else window.location.href = a;
      var g = window.performance.now(),
        h = window.setTimeout(function () {
          if ((window.removeEventListener("blur", y), !i)) {
            if (window.performance.now() - g > m) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[desktop-app] status: installed (timer delayed, page was backgrounded)",
                  ])),
              ),
                r("installed"));
              return;
            }
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[desktop-app] status: not-installed (timeout fired, no blur detected)",
                ])),
            ),
              r("not-installed"));
          }
        }, d),
        y = function () {
          (window.clearTimeout(h),
            window.removeEventListener("blur", y),
            !i &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[desktop-app] status: installed (window lost focus)",
                  ])),
              ),
              r("installed")));
        };
      return (
        window.addEventListener("blur", y),
        function () {
          ((i = !0),
            window.clearTimeout(h),
            window.removeEventListener("blur", y));
        }
      );
    }
    l.default = p;
  },
  98,
);
