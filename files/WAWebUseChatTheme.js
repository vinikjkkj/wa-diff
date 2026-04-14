__d(
  "WAWebUseChatTheme",
  ["JSResourceForInteraction", "react"],
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
      e === void 0 && (e = { isChatThemeEnabled: !1 });
      var t = e,
        n = t.isChatThemeEnabled,
        r = c(null),
        o = r[0],
        a = r[1];
      return (
        u(
          function () {
            if (n === !0) {
              var e = !1;
              return (
                d.load().then(function (t) {
                  e ||
                    a({
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
          },
          [n],
        ),
        n === !0 ? o : null
      );
    }
    l.useLazyChatThemeDefinitions = m;
  },
  98,
);
