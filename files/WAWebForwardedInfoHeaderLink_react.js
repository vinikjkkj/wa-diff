__d(
  "WAWebForwardedInfoHeaderLink.react",
  ["WAWebText.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.onClick,
        r = e.testId;
      return s.jsx("div", {
        "data-testid": void 0,
        className: "x1tiyuxx x1nbhmlj",
        children: s.jsx(o("WAWebText.react").WAWebClickableText, {
          onClick: n,
          children: s.jsx(o("WAWebText.react").WAWebTextSmall, {
            weight: "semibold",
            color: "link",
            children: t,
          }),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
