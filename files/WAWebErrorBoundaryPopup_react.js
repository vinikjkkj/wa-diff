__d(
  "WAWebErrorBoundaryPopup.react",
  ["fbt", "WALogger", "WAWebConfirmPopup.react", "gkx", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = e.boundaryName;
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "error-boundary" },
        cover: !0,
        okText: s._(/*BTDS*/ "Reload"),
        onOK: p,
        children: [
          s._(/*BTDS*/ "Unexpected error occurred."),
          !r("gkx")("26258") &&
            c.jsx("p", {
              children: s._(/*BTDS*/ "Boundary name: {boundaryName}.", [
                s._param("boundaryName", t),
              ]),
            }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
