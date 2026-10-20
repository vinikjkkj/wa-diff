__d(
  "WAWebGroupNotificationContextCardActionsUtils",
  ["compactMap"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "name",
        "inviteViaEmail",
        "addMembers",
        "inviteViaLink",
        "memberTag",
        "groupInfo",
      ],
      s = [
        "name",
        "groupInfo",
        "addMembers",
        "inviteViaLink",
        "inviteViaEmail",
        "memberTag",
      ],
      u = 2,
      c = 3;
    function d(e, t, n, r) {
      r === void 0 && (r = u);
      var o = e
        .filter(function (e) {
          return n[e];
        })
        .slice(0, r);
      return [].concat(o).sort(function (e, n) {
        return t.indexOf(e) - t.indexOf(n);
      });
    }
    function m(t, n) {
      var o = babelHelpers.extends({}, t, { inviteViaEmail: n }),
        a = {};
      for (var i of e) {
        var l;
        a[i] = ((l = o[i]) == null ? void 0 : l.available) === !0;
      }
      var m = d(e, s, a, (n == null ? void 0 : n.available) === !0 ? c : u),
        p = r("compactMap")(m, function (e) {
          return o[e];
        }),
        _ = p[0],
        f = p[1],
        g = p[2];
      return {
        firstConfig: _ != null ? _ : null,
        secondConfig: f != null ? f : null,
        thirdConfig: g != null ? g : null,
        useVerticalLayout: p.some(function (e) {
          return e.useVerticalLayout === !0;
        }),
      };
    }
    ((l.getButtonConfig = d), (l.getGroupNotificationButtonConfig = m));
  },
  98,
);
