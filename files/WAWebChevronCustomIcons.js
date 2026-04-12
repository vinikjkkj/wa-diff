__d(
  "WAWebChevronCustomIcons",
  ["WAWebChevronIcon.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        reversed: { display: "x1rg5ohu", rotate: "x1qul50q", $$css: !0 },
        rotatedUp: { display: "x1rg5ohu", rotate: "x7lonkb", $$css: !0 },
        rotatedDown: { display: "x1rg5ohu", rotate: "xq77vm1", $$css: !0 },
      };
    function c(e) {
      return s.jsx(
        o("WAWebChevronIcon.react").ChevronIcon,
        babelHelpers.extends({}, e, { xstyle: [e.xstyle, u.reversed] }),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return s.jsx(
        o("WAWebChevronIcon.react").ChevronIcon,
        babelHelpers.extends({}, e, { xstyle: [e.xstyle, u.rotatedUp] }),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      return s.jsx(
        o("WAWebChevronIcon.react").ChevronIcon,
        babelHelpers.extends({}, e, { xstyle: [e.xstyle, u.rotatedDown] }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ChevronLeftCustomIcon = c),
      (l.ChevronUpCustomIcon = d),
      (l.ChevronDownCustomIcon = m));
  },
  98,
);
