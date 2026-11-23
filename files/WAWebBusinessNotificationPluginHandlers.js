__d(
  "WAWebBusinessNotificationPluginHandlers",
  ["WAWebBusinessNotificationPluginHandlerRegistry"],
  function (t, n, r, o, a, i, l) {
    var e = []
      .concat(r("WAWebBusinessNotificationPluginHandlerRegistry"))
      .sort(function (e, t) {
        return e.priority - t.priority;
      });
    function s(t) {
      var n;
      return (n = e.find(function (e) {
        return e.matches(t);
      })) == null
        ? void 0
        : n.parse(t);
    }
    l.parseBusinessNotificationPluginAction = s;
  },
  98,
);
