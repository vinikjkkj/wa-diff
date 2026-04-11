__d(
  "WAWebErrorBoundaryPopup.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "gkx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.boundaryName,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { surface: "unknown", viewName: "error-boundary" }), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Reload")), (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Unexpected error occurred.")), (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== n
        ? ((u =
            !r("gkx")("26258") &&
            c.jsx("p", {
              children: s._(/*BTDS*/ "Boundary name: {boundaryName}.", [
                s._param("boundaryName", n),
              ]),
            })),
          (t[3] = n),
          (t[4] = u))
        : (u = t[4]);
      var d;
      return (
        t[5] !== u
          ? ((d = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: a,
              cover: !0,
              okText: i,
              onOK: p,
              children: [l, u],
            })),
            (t[5] = u),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    var m = function (t) {
      var e = t.boundaryName;
      return c.jsx(d, { boundaryName: e });
    };
    function p() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] handleReload",
          ])),
      ),
        window.location.reload());
    }
    l.errorBoundaryPopupFallback = m;
  },
  226,
);
