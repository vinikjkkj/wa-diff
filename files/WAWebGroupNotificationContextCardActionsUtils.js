__d(
  "WAWebGroupNotificationContextCardActionsUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = ["name", "addMembers", "inviteViaLink", "memberTag", "groupInfo"],
      l = ["name", "groupInfo", "addMembers", "inviteViaLink", "memberTag"],
      s = 2;
    function u(e, t, n) {
      var r = e
        .filter(function (e) {
          return n[e];
        })
        .slice(0, s);
      return [].concat(r).sort(function (e, n) {
        return t.indexOf(e) - t.indexOf(n);
      });
    }
    function c(t) {
      var n = {};
      for (var r of e) n[r] = t[r].available;
      var o = u(e, l, n),
        a = o.map(function (e) {
          return t[e];
        }),
        i = a[0],
        s = a[1],
        c = o.some(function (e) {
          return t[e].useVerticalLayout === !0;
        });
      return {
        firstConfig: i != null ? i : null,
        secondConfig: s != null ? s : null,
        useVerticalLayout: c,
      };
    }
    ((i.getButtonConfig = u), (i.getGroupNotificationButtonConfig = c));
  },
  66,
);
