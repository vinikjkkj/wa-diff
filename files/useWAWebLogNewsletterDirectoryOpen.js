__d(
  "useWAWebLogNewsletterDirectoryOpen",
  ["react-compiler-runtime", "useVisibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.channelDirectorySurface,
        a = e.countryCode,
        i = e.entryPoint,
        l = e.listView,
        s = e.newsletterDirectoryFunnelLogger,
        u;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== s
        ? ((u = function () {
            s.logDirectoryOpen({
              entryPointToLog: i,
              countryCode: a,
              listView: l,
              channelDirectorySurface: n,
            });
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = u))
        : (u = t[5]);
      var c = u,
        d;
      t[6] !== c
        ? ((d = { onVisible: c }), (t[6] = c), (t[7] = d))
        : (d = t[7]);
      var m = r("useVisibility")(d),
        p = m[0];
      return p;
    }
    l.useLogNewsletterDirectoryOpen = e;
  },
  98,
);
