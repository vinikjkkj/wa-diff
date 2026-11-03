__d(
  "WAWebUseChatTheme",
  [
    "JSResourceForInteraction",
    "WAWebABProps",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = r("JSResourceForInteraction")(
        "WAWebChatThemeDefinitions.stylex",
      ).__setRef("WAWebUseChatTheme"),
      m = null;
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] !== e
        ? ((n = e === void 0 ? { isChatThemeEnabled: !1 } : e),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = n,
        a = r.isChatThemeEnabled,
        i = c(_),
        l = i[0],
        s = i[1],
        p,
        g;
      return (
        t[2] !== a || t[3] !== l
          ? ((p = function () {
              if (!(a !== !0 || l != null)) {
                var e = !1;
                return (
                  d.load().then(function (t) {
                    var n = f(t);
                    (o("WAWebABProps").getABPropConfigValue(
                      "web_memlab_fixes_4",
                    ) && (m = n),
                      e || s(n));
                  }),
                  function () {
                    e = !0;
                  }
                );
              }
            }),
            (g = [a, l]),
            (t[2] = a),
            (t[3] = l),
            (t[4] = p),
            (t[5] = g))
          : ((p = t[4]), (g = t[5])),
        u(p, g),
        a === !0 ? l : null
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4")
        ? m
        : null;
    }
    function f(e) {
      return {
        getAllColorSchemes: e.getAllColorSchemes,
        getAllThemes: e.getAllThemes,
        getBaseTheme: e.getBaseTheme,
        getBubbleTheme: e.getBubbleTheme,
        getChatTheme: e.getChatTheme,
        getColorSchemeName: e.getColorSchemeName,
        getDoodleThemeOrder: e.getDoodleThemeOrder,
        isMinimalScheme: e.isMinimalScheme,
      };
    }
    l.useLazyChatThemeDefinitions = p;
  },
  98,
);
