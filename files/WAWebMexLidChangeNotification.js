__d(
  "WAWebMexLidChangeNotification",
  ["WAWebMexLidChangeNotificationQuery.graphql", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    e !== void 0 || (e = n("WAWebMexLidChangeNotificationQuery.graphql"));
    function s(e) {
      var t = e.xwa2_notify_lid_change;
      if (t.old == null || t.new == null)
        throw r("err")(
          "parseLidChangeNotification: missing old or new LID values",
        );
      var n = t.old,
        a = t.new,
        i = o("WAWebWidFactory").createUserLidOrThrow(n),
        l = o("WAWebWidFactory").createUserLidOrThrow(a);
      return { oldLid: i, newLid: l };
    }
    l.parseLidChangeNotification = s;
  },
  98,
);
