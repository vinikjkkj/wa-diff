__d(
  "WAWebDomFullscreen",
  ["Promise", "WALogger", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = {
        fullscreenEnabled: 0,
        fullscreenElement: 1,
        requestFullscreen: 2,
        exitFullscreen: 3,
        fullscreenchange: 4,
        fullscreenerror: 5,
      },
      v = [
        "webkitFullscreenEnabled",
        "webkitFullscreenElement",
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
      ],
      S = [
        "mozFullScreenEnabled",
        "mozFullScreenElement",
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozfullscreenchange",
        "mozfullscreenerror",
      ],
      R = [
        "msFullscreenEnabled",
        "msFullscreenElement",
        "msRequestFullscreen",
        "msExitFullscreen",
        "msfullscreenchange",
        "msfullscreenerror",
      ],
      L,
      E,
      k = (function (t) {
        function r() {
          var n;
          if (
            ((n = t.call(this) || this),
            (n.requestFullscreen = function (t) {
              if (!t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "The element requesting fullscreen is null or undefined.",
                    ])),
                );
                return;
              }
              if (!L) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Your browser does not support fullscreen API.",
                    ])),
                );
                return;
              }
              t[L[b.requestFullscreen]]();
            }),
            (n.$Fullscreen$p_1 = function (e) {
              n.trigger("fullscreen_change", e);
            }),
            (n.$Fullscreen$p_2 = function (e) {
              n.trigger("fullscreen_error", e);
            }),
            typeof window != "object" || typeof window.document != "object")
          )
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "document object does not exist",
                  ])),
              ),
              babelHelpers.assertThisInitialized(n)
            );
          E = window.document;
          var r = E;
          if (
            ("fullscreenEnabled" in E
              ? (L = Object.keys(b))
              : v[b.fullscreenEnabled] in E
                ? (L = v)
                : S[b.fullscreenEnabled] in E
                  ? (L = S)
                  : R[b.fullscreenEnabled] in E && (L = R),
            !L)
          )
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Your browser does not support fullscreen API.",
                  ])),
              ),
              babelHelpers.assertThisInitialized(n)
            );
          var a = L;
          return (
            r.addEventListener(a[b.fullscreenchange], n.$Fullscreen$p_1),
            r.addEventListener(a[b.fullscreenerror], n.$Fullscreen$p_2),
            n
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.exitFullscreen = function () {
            return E
              ? L
                ? E[L[b.exitFullscreen]].bind(E)()
                : (o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Your browser does not support fullscreen API.",
                      ])),
                  ),
                  (C || (C = n("Promise"))).resolve())
              : (o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "document object does not exist",
                    ])),
                ),
                (C || (C = n("Promise"))).resolve());
          }),
          (a.isFullscreenMode = function () {
            return E
              ? L
                ? !!E[L[b.fullscreenElement]]
                : (o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Your browser does not support fullscreen API.",
                      ])),
                  ),
                  !1)
              : (o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "document object does not exist",
                    ])),
                ),
                !1);
          }),
          (a.isFullscreenEnabled = function () {
            return E
              ? L
                ? !!E[L[b.fullscreenEnabled]]
                : (o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Your browser does not support fullscreen API.",
                      ])),
                  ),
                  !1)
              : (o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "document object does not exist",
                    ])),
                ),
                !1);
          }),
          (a.getFullscreenElement = function () {
            if (!E) {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "document object does not exist",
                  ])),
              );
              return;
            }
            if (!L) {
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "Your browser does not support fullscreen API.",
                  ])),
              );
              return;
            }
            return E[L[b.fullscreenElement]];
          }),
          r
        );
      })(r("WAWebEventEmitter")),
      I = new k(),
      T = I;
    l.default = T;
  },
  98,
);
