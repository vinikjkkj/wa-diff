__d(
  "WAWebCallLinkDesktopAppDetect",
  ["WALogger", "WAWebExternalLink.react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 1e3,
      m = d + 250;
    function p(t) {
      var n = t.beginCurrentTabNavigation,
        r = t.callType,
        a = t.idHash,
        i = t.onResult,
        l =
          "whatsapp://call/" +
          encodeURIComponent(r) +
          "/" +
          encodeURIComponent(a);
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[desktop-app] attempting detection via ",
            "",
          ])),
        l,
      );
      var p = !1,
        _ = null,
        f = function () {
          var e = _;
          ((_ = null), e == null || e());
        },
        g = navigator.userAgent,
        h =
          g.includes("Safari") &&
          !g.includes("Chrome") &&
          !g.includes("Chromium");
      if (h) {
        var y = document.getElementById("wa-desktop-launcher");
        if (y == null) {
          var C;
          ((y = document.createElement("iframe")),
            (y.id = "wa-desktop-launcher"),
            (y.style.display = "none"),
            (C = document.body) == null || C.appendChild(y));
        }
        y.setAttribute("src", l);
      } else {
        var b;
        _ = (b = n == null ? void 0 : n()) != null ? b : null;
        try {
          o("WAWebExternalLink.react").openExternalLink(l, {
            noApiCmdHandling: !0,
            target: o("WAWebExternalLink.react").ExternalLinkTarget.CURRENT_TAB,
          });
        } catch (e) {
          throw (f(), e);
        }
      }
      var v = window.performance.now(),
        S = window.setTimeout(function () {
          if ((window.removeEventListener("blur", R), !p)) {
            if (window.performance.now() - v > m) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[desktop-app] status: installed (timer delayed, page was backgrounded)",
                  ])),
              ),
                i("installed"));
              return;
            }
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[desktop-app] status: not-installed (timeout fired, no blur detected)",
                ])),
            ),
              f(),
              i("not-installed"));
          }
        }, d),
        R = function () {
          (window.clearTimeout(S),
            window.removeEventListener("blur", R),
            !p &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[desktop-app] status: installed (window lost focus)",
                  ])),
              ),
              i("installed")));
        };
      return (
        window.addEventListener("blur", R),
        function () {
          ((p = !0),
            window.clearTimeout(S),
            window.removeEventListener("blur", R),
            f());
        }
      );
    }
    l.default = p;
  },
  98,
);
