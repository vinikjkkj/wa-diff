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
      var m = (n == null ? void 0 : n.available) === !0,
        p = d(e, m ? s : e, a, m ? c : u),
        _ = r("compactMap")(p, function (e) {
          return o[e];
        }),
        f = _.find(function (e) {
          return e.isPreferredPrimary === !0;
        }),
        g =
          f == null
            ? _
            : [f].concat(
                _.filter(function (e) {
                  return e !== f;
                }),
              ),
        h = g[0],
        y = g[1],
        C = g[2];
      return {
        firstConfig: h != null ? h : null,
        secondConfig: y != null ? y : null,
        thirdConfig: C != null ? C : null,
        useVerticalLayout: g.some(function (e) {
          return e.useVerticalLayout === !0;
        }),
      };
    }
    ((l.getButtonConfig = d), (l.getGroupNotificationButtonConfig = m));
  },
  98,
);
