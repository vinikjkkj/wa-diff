__d(
  "WAWebGroupHistoryAgentBundleFilter",
  ["WAWebBotUtils", "WAWebGroupHistoryGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.some(o("WAWebBotUtils").isWidGroupAgentFbidWid) &&
        o("WAWebGroupHistoryGating").isMuseGroupHistoryShareEnabled()
      );
    }
    l.isAgentHistoryBundle = e;
  },
  98,
);
