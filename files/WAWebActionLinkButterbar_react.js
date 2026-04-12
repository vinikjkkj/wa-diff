__d(
  "WAWebActionLinkButterbar.react",
  ["WAWebChevronIcon.react", "WAWebClickable.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        chevron: { display: "x1rg5ohu", verticalAlign: "x16dsc37", $$css: !0 },
      };
    function c(e) {
      var t = e.action,
        n = e.children,
        r = e.dataTab,
        a = e.inline,
        i = e.overrideDirection,
        l = i === void 0 ? null : i;
      return s.jsx(o("WAWebClickable.react").Clickable, {
        "data-tab": r,
        onClick: function () {
          t == null || t();
        },
        children: s.jsxs(
          "span",
          babelHelpers.extends(
            {},
            { 0: {}, 1: { className: "x1lliihq" } }[!a << 0],
            {
              children: [
                s.jsx("span", { className: "xt0b8zv x1277o0a", children: n }),
                s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                  xstyle: u.chevron,
                  directional: !1,
                  height: 20,
                  width: 18,
                  overrideDirection: l,
                }),
              ],
            },
          ),
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
