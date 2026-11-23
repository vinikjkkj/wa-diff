__d(
  "WAWebUseChatTheme",
  ["JSResourceForInteraction", "WAWebABProps", "react"],
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
      e === void 0 && (e = { isChatThemeEnabled: !1 });
      var t = e,
        n = t.isChatThemeEnabled,
        r = c(function () {
          return o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4")
            ? m
            : null;
        }),
        a = r[0],
        i = r[1];
      return (
        u(
          function () {
            if (!(n !== !0 || a != null)) {
              var e = !1;
              return (
                d.load().then(function (t) {
                  var n = _(t);
                  (o("WAWebABProps").getABPropConfigValue(
                    "web_memlab_fixes_4",
                  ) && (m = n),
                    e || i(n));
                }),
                function () {
                  e = !0;
                }
              );
            }
          },
          [n, a],
        ),
        n === !0 ? a : null
      );
    }
    function _(e) {
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
