__d(
  "CometThemeInfraFallbackConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(e, t) {
      return e.auto === t.auto && e.dark === t.dark && e.light === t.light;
    }
    var s = {
        fallbackThemes: { auto: null, dark: null, light: null },
        setFallbackTheme: function (n) {
          l(s.fallbackThemes, n) ||
            ((s.fallbackThemes = n),
            e.forEach(function (e) {
              return e();
            }));
        },
        subscribe: function (n) {
          return (
            e.add(n),
            function () {
              e.delete(n);
            }
          );
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
