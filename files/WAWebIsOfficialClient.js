__d(
  "WAWebIsOfficialClient",
  ["WALogger", "WAWebUA", "WAWebWamGlobals", "err", "getErrorSafe", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = function () {
        var e = typeof self != "undefined" ? self.navigator : null;
        return !!e.webdriver;
      },
      p = function () {
        return !(
          m() ||
          (o("WAWebUA").UA.isChrome &&
            /HeadlessChrome/.test(window.navigator.userAgent))
        );
      },
      _ = function () {
        try {
          var t = r("err")(""),
            n = t.stack,
            a = n
              .split("\n")
              .filter(function (e) {
                return !!e.trim();
              })
              .pop();
          if (a == null)
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "A caller is not found ",
                      "",
                    ])),
                  n,
                )
                .tags("uc"),
              !0
            );
          if (!a.includes(".whatsapp.com"))
            return (
              r("gkx")("26258")
                ? o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Caller ",
                          "",
                        ])),
                      a,
                    )
                    .tags("uc")
                : o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Caller ",
                          "",
                        ])),
                      a,
                    )
                    .tags("uc")
                    .sendLogs("Unexpectedly detected UC"),
              !1
            );
        } catch (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Cannot analyze UC ",
                  "",
                ])),
              r("getErrorSafe")(e).stack,
            )
            .tags("uc");
        }
        return !0;
      },
      f = "webpackChunkwhatsapp_web_client";
    f in window || (window[f] = []);
    var g = window[f],
      h = p(),
      y = h;
    function C() {
      return y;
    }
    g != null &&
      Object.defineProperty(window, f, {
        get: function () {
          if (!_()) {
            y = !1;
            try {
              o("WAWebWamGlobals").Global.set({ ocVersion: 0 });
            } catch (e) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Cannot set ocVersion ",
                      "",
                    ])),
                  r("getErrorSafe")(e).stack,
                )
                .tags("uc");
            }
          }
          return g;
        },
      });
    var b = function (t) {
      return !!t.startsWith("BA");
    };
    ((l.isOfficialClient = h),
      (l.getIsOfficialClient = C),
      (l.isUnofficialStanzaId = b));
  },
  98,
);
