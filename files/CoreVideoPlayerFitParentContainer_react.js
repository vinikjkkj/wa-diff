__d(
  "CoreVideoPlayerFitParentContainer.react",
  ["DOMContainer.react", "cr:964538", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.ref,
        r = e.children,
        a = e.debugRole,
        i = e.testid,
        l;
      t[0] !== a ? ((l = null), (t[0] = a), (t[1] = l)) : (l = t[1]);
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = "x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z"), (t[2] = u))
        : (u = t[2]);
      var c;
      return (
        t[3] !== r || t[4] !== n || t[5] !== l || t[6] !== i
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({}, l, {
                className: u,
                "data-testid": void 0,
                ref: n,
                children: r,
              }),
            )),
            (t[3] = r),
            (t[4] = n),
            (t[5] = l),
            (t[6] = i),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.ref,
        a = e.debugRole,
        i = e.domElement,
        l;
      t[0] !== a ? ((l = null), (t[0] = a), (t[1] = l)) : (l = t[1]);
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = "x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z"), (t[2] = u))
        : (u = t[2]);
      var c;
      return (
        t[3] !== i || t[4] !== n || t[5] !== l
          ? ((c = s.jsx(
              r("DOMContainer.react"),
              babelHelpers.extends({}, l, {
                className: u,
                display: "block",
                ref: n,
                children: i,
              }),
            )),
            (t[3] = i),
            (t[4] = n),
            (t[5] = l),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    function d(e) {
      var t = e.debugRole,
        n = document.createElement("div");
      return ((n.className = "x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z"), n);
    }
    ((l.CoreVideoPlayerFitParentContainer = u),
      (l.CoreVideoPlayerFitParentDOMContainer = c),
      (l.createFitParentContainerDiv = d));
  },
  98,
);
