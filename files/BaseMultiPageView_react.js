__d(
  "BaseMultiPageView.react",
  [
    "BaseMultiPageViewContainer.react",
    "BaseMultiPageViewReducer",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useReducer;
    function p(t) {
      var n = o("react-compiler-runtime").c(10),
        a,
        i;
      n[0] !== t
        ? ((a = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = m(
          o("BaseMultiPageViewReducer").reducer,
          o("BaseMultiPageViewReducer").initialState,
        ),
        s = l[0],
        c = l[1],
        d;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t, n, r) {
            c({
              component: n,
              direction: t,
              pageKey: r == null ? void 0 : r.pageKey,
              type: "push_page",
            });
          }),
          (n[3] = d))
        : (d = n[3]);
      var p = d,
        _;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function (t) {
            return c({
              index: t == null ? void 0 : t.index,
              pageKey: t == null ? void 0 : t.pageKey,
              type: "pop_page",
            });
          }),
          (n[4] = _))
        : (_ = n[4]);
      var f = _,
        g;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            c({ type: "clear_removed_pages" });
          }),
          (n[5] = g))
        : (g = n[5]);
      var h = g,
        y;
      return (
        n[6] !== a || n[7] !== i || n[8] !== s
          ? ((y = u.jsx(
              r("BaseMultiPageViewContainer.react"),
              babelHelpers.extends({}, i, {
                onAddPage: p,
                onClearRemovedPages: h,
                onPopPage: f,
                pageHistory: s,
                ref: a,
              }),
            )),
            (n[6] = a),
            (n[7] = i),
            (n[8] = s),
            (n[9] = y))
          : (y = n[9]),
        y
      );
    }
    var _ = p;
    l.default = _;
  },
  98,
);
