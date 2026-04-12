__d(
  "WAWebBulletedListMutatorComponent.react",
  [
    "WAWebL10N",
    "WAWebTextMutatorComponentUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        ul: {
          wordBreak: "x13faqbe",
          whiteSpace: "xeaf4i8",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.children,
        a = n === void 0 ? "" : n,
        i = t.inline,
        l = i === void 0 ? !1 : i,
        s = t.largerIndentation,
        d = s === void 0 ? !1 : s,
        m = t.quoted,
        p = m === void 0 ? !1 : m;
      if (l) return a;
      var _ = [];
      return (
        o("WAWebTextMutatorComponentUtils")
          .groupListChildren(a)
          .forEach(function (t, n) {
            t.isList
              ? _.push(
                  u.jsx(
                    "ul",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        c.ul,
                        !p && o("WAWebUISpacing").uiMargin.vert4,
                        o("WAWebUISpacing").uiMargin.start18,
                        d
                          ? o("WAWebUISpacing").uiMargin.start18
                          : o("WAWebUISpacing").uiMargin.start8,
                      ),
                      {
                        dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
                        children: t.children,
                      },
                    ),
                    n,
                  ),
                )
              : _.push(t.children);
          }),
        _
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
