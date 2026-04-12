__d(
  "WAWebAvatarSpinner.react",
  ["fbt", "WAWebClassnames", "WAWebSpinner.react", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        container: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          height: "x5yr21d",
          backgroundColor: "x1honnu5",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.className,
        l = a.size,
        c = l === void 0 ? 50 : l,
        p = a.xstyle;
      return d.jsx("div", {
        "aria-label": s._(/*BTDS*/ "Loading photo"),
        ref: n,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (u || (u = r("stylex")))(m.container, p),
          i,
        ),
        children: d.jsx(o("WAWebSpinner.react").Spinner, {
          size: c,
          stroke: 3,
          color: "solidwhite",
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
