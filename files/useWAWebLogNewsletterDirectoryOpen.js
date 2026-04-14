__d(
  "useWAWebLogNewsletterDirectoryOpen",
  ["useVisibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.channelDirectorySurface,
        n = e.countryCode,
        o = e.entryPoint,
        a = e.listView,
        i = e.newsletterDirectoryFunnelLogger,
        l = function () {
          i.logDirectoryOpen({
            entryPointToLog: o,
            countryCode: n,
            listView: a,
            channelDirectorySurface: t,
          });
        },
        s = r("useVisibility")({ onVisible: l }),
        u = s[0];
      return u;
    }
    l.useLogNewsletterDirectoryOpen = e;
  },
  98,
);
