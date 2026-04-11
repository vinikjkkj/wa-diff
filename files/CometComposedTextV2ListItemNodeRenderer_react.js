__d(
  "CometComposedTextV2ListItemNodeRenderer.react",
  ["BaseHtmlListItem.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        listItem: { marginBottom: "x98p3ps", marginTop: "x1xfr64x", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.node,
        i;
      t[0] !== a ? ((i = a.getState()), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l = i,
        c = l.checked,
        d = l.value,
        m;
      t[2] !== c || t[3] !== n
        ? ((m =
            c != null
              ? s.jsxs("div", {
                  className: "x78zum5",
                  children: [
                    s.jsx("input", {
                      checked: c,
                      readOnly: !0,
                      type: "checkbox",
                    }),
                    " ",
                    n,
                  ],
                })
              : n),
          (t[2] = c),
          (t[3] = n),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== m || t[6] !== d
          ? ((p = s.jsx(r("BaseHtmlListItem.react"), {
              value: d,
              xstyle: u.listItem,
              children: m,
            })),
            (t[5] = m),
            (t[6] = d),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = c;
  },
  98,
);
