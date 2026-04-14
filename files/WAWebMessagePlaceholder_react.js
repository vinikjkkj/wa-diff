__d(
  "WAWebMessagePlaceholder.react",
  ["WAWebMessageSpacerText.react", "WAWebUISpacing", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { icon: { flex: "x1okw0bk", color: "x1cmudvs", $$css: !0 } };
    function d(t) {
      var n = t.Icon,
        a = t.children,
        i = t.hasCaption,
        l = t.msg,
        s = t.theme,
        d = i
          ? a
          : u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props([
                  o("WAWebUISpacing").uiMargin.top3,
                  o("WAWebUISpacing").uiMargin.bottom2,
                  s === "small-icon" && o("WAWebUISpacing").uiMargin.top0,
                ]),
                {
                  children: u.jsx(r("WAWebMessageSpacerText.react"), {
                    msg: l,
                    theme: "placeholder",
                    children: a,
                  }),
                },
              ),
            );
      return u.jsxs("div", {
        className:
          "x78zum5 x1q0g3np x1cy8zhl x6ikm8r x10wlt62 x1wl59ut x1k4tb9n xd4r4e8 x1vvkbs",
        children: [
          n != null
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props([
                    c.icon,
                    o("WAWebUISpacing").uiMargin.end5,
                    s === "status-icon" && o("WAWebUISpacing").uiMargin.top5,
                  ]),
                  { children: n },
                ),
              )
            : null,
          d,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
