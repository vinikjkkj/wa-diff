__d(
  "WAWebBizAdCreationInlineValidationNotices.react",
  [
    "WAWebBizInlineValidationNotice.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationInlineValidationNotices",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { container: { rowGap: "x1qvou4u", $$css: !0 } };
    function c(e) {
      return e === "ERROR" || e === "BLOCKING_TIP" ? "error" : "warning";
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.specElement,
        a = r("useWAWebBizAdCreationInlineValidationNotices")(n);
      if (a.length === 0) return null;
      var i;
      t[0] !== a ? ((i = a.map(m)), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l;
      return (
        t[2] !== i
          ? ((l = s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: u.container,
              children: i,
            })),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function m(e, t) {
      return s.jsx(
        r("WAWebBizInlineValidationNotice.react"),
        { message: e.title, type: c(e.severity) },
        t,
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
