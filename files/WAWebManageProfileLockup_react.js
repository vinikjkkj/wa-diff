__d(
  "WAWebManageProfileLockup.react",
  [
    "WAWebCellFrame.react",
    "WAWebConnModel",
    "WAWebDetailImage.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.status,
        n = e.user,
        a = o("useWAWebModelValues").useModelValues(t, ["status"]);
      return s.jsx(r("WAWebCellFrame.react"), {
        image: s.jsx(o("WAWebDetailImage.react").DetailImage, { id: n }),
        primary: o("WAWebConnModel").Conn.pushname,
        secondary: a.status,
        idle: !0,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
