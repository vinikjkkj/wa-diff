__d(
  "WAWebGroupStatusAuthorImage.react",
  ["WAWebDetailImage.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.primaryContactId,
        n = e.secondaryContactId,
        r = 28;
      return s.jsxs("div", {
        "data-testid": void 0,
        className: "x1n2onr6 x78zum5 x1q0g3np x100vrsf x1vqgdyp",
        children: [
          s.jsx("div", {
            className: "x1n2onr6 xgw9rtw x1r4y97",
            children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n,
              size: r,
            }),
          }),
          s.jsx("div", {
            className: "x10l6tqk x1tk7jg1",
            children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: t,
              size: r,
            }),
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
