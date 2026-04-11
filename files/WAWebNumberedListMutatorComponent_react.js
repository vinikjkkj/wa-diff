__d(
  "WAWebNumberedListMutatorComponent.react",
  [
    "WAWebL10N",
    "WAWebTextMutatorComponentUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        ol: {
          wordBreak: "x13faqbe",
          whiteSpace: "xeaf4i8",
          position: "x1n2onr6",
          listStyleType: "x3yw8vx",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.children,
        i = t.inline,
        l = t.largerIndentation,
        s = t.quoted,
        d = a === void 0 ? "" : a,
        m = i === void 0 ? !1 : i,
        p = l === void 0 ? !1 : l,
        _ = s === void 0 ? !1 : s;
      if (m) return d;
      var f;
      return (
        n[0] !== d || n[1] !== p || n[2] !== _
          ? ((f = []),
            o("WAWebTextMutatorComponentUtils")
              .groupListChildren(d)
              .forEach(function (t, n) {
                t.isList
                  ? f.push(
                      u.jsx(
                        "ol",
                        babelHelpers.extends(
                          {},
                          (e || (e = r("stylex"))).props(
                            c.ol,
                            o("WAWebUISpacing").uiMargin.start30,
                            !_ && o("WAWebUISpacing").uiMargin.vert4,
                            p
                              ? o("WAWebUISpacing").uiMargin.start30
                              : o("WAWebUISpacing").uiMargin.start20,
                          ),
                          {
                            dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
                            children: t.children,
                          },
                        ),
                        n,
                      ),
                    )
                  : f.push(t.children);
              }),
            (n[0] = d),
            (n[1] = p),
            (n[2] = _),
            (n[3] = f))
          : (f = n[3]),
        f
      );
    }
    ((d.displayName = "NumberedList"), (l.default = d));
  },
  98,
);
