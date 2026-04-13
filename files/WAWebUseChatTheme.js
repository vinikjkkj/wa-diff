__d(
  "WAWebUseChatTheme",
  ["JSResourceForInteraction", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = r("JSResourceForInteraction")("ChatThemeDefinitions.stylex").__setRef(
        "WAWebUseChatTheme",
      );
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e
        ? ((n = e === void 0 ? { isChatThemeEnabled: !1 } : e),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = n,
        a = r.isChatThemeEnabled,
        i = c(null),
        l = i[0],
        s = i[1],
        m,
        p;
      return (
        t[2] !== a
          ? ((m = function () {
              if (a === !0) {
                var e = !1;
                return (
                  d.load().then(function (t) {
                    e ||
                      s({
                        Theme: t.Theme,
                        getAllColorSchemes: t.getAllColorSchemes,
                        getBaseTheme: t.getBaseTheme,
                        getChatTheme: t.getChatTheme,
                        getColorSchemeName: t.getColorSchemeName,
                      });
                  }),
                  function () {
                    e = !0;
                  }
                );
              }
            }),
            (p = [a]),
            (t[2] = a),
            (t[3] = m),
            (t[4] = p))
          : ((m = t[3]), (p = t[4])),
        u(m, p),
        a === !0 ? l : null
      );
    }
    l.useLazyChatThemeDefinitions = m;
  },
  98,
);
