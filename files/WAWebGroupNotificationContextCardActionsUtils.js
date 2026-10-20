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
    function c(t, n) {
      var r;
      if ((n == null ? void 0 : n.available) === !0)
        r = [t.addMembers, t.inviteViaLink, n].filter(function (e) {
          return e.available;
        });
      else {
        var o = {};
        for (var a of e) o[a] = t[a].available;
        r = u(e, l, o).map(function (e) {
          return t[e];
        });
      }
      var i = r,
        s = i[0],
        c = i[1],
        d = i[2],
        m = r.some(function (e) {
          return e.useVerticalLayout === !0;
        });
      return {
        firstConfig: s != null ? s : null,
        secondConfig: c != null ? c : null,
        thirdConfig: d != null ? d : null,
        useVerticalLayout: m,
      };
    }
    ((i.getButtonConfig = u), (i.getGroupNotificationButtonConfig = c));
  },
  66,
);
