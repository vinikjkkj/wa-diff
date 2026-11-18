__d(
  "WAWebForwardToStatusPluginForwardToMyStatus",
  ["WAWebForwardToStatusPluginForwardToMyStatusRegistry"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("WAWebForwardToStatusPluginForwardToMyStatusRegistry").find(
        function (t) {
          return t.canForwardToMyStatus(e);
        },
      );
    }
    l.findForwardToMyStatusPlugin = e;
  },
  98,
);
