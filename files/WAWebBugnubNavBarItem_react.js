__d(
  "WAWebBugnubNavBarItem.react",
  [
    "WAWebBugnubLoadable",
    "WAWebBugnubRefreshedIcon.react",
    "WAWebCurrentUser",
    "WAWebNavBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = function () {
          r("WAWebBugnubLoadable")();
        },
        t = "Report a bug (internal)",
        n = s.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          testid: void 0,
          icon: s.jsx(
            o("WAWebBugnubRefreshedIcon.react").BugnubRefreshedIcon,
            {},
          ),
          title: t,
          onClick: e,
          isActive: !1,
        });
      return o("WAWebCurrentUser").isEmployee() ? n : null;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.BugnubNavBarItem = u));
  },
  98,
);
