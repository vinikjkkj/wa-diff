__d(
  "useWAWebSettingSync",
  ["WALogger", "WAWebSettingsSyncBridge", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useCallback;
    function c(t, n, r) {
      return (
        r === void 0 && (r = "app"),
        u(
          function (a) {
            for (
              var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), s = 1;
              s < i;
              s++
            )
              l[s - 1] = arguments[s];
            (n.apply(void 0, [a].concat(l)),
              o("WAWebSettingsSyncBridge")
                .sendSettingChange(t, a, r)
                .catch(function (n) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Error sending mutation for ",
                          ": ",
                          "",
                        ])),
                      t,
                      String(n),
                    )
                    .tags("settings-sync");
                }));
          },
          [t, n, r],
        )
      );
    }
    l.useSettingSync = c;
  },
  98,
);
