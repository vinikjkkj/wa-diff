__d(
  "WAWebBusinessNotificationPluginHandlers",
  ["WAWebBusinessNotificationPluginHandlerRegistry"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return (n = r("WAWebBusinessNotificationPluginHandlerRegistry").find(
        function (t) {
          return t.matches(e);
        },
      )) == null
        ? void 0
        : n.parse(e, t);
    }
    l.parseBusinessNotificationPluginAction = e;
  },
  98,
);
