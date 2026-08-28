__d(
  "FBWebBloksAlertButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "#",
      c = "$";
    function d(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.node,
        a;
      t[0] !== n ? ((a = n.get(c)), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = n.getExpression(u)), (t[2] = n), (t[3] = l))
        : (l = t[3]);
      var d = l,
        p = o("WebBloksComponentContext").useWebBloksContext(),
        _ = p.executeCatch,
        f = p.objectSet,
        g;
      t[4] !== _ || t[5] !== n || t[6] !== f.navigationManager || t[7] !== d
        ? ((g = function () {
            (f.navigationManager.pop(), d != null && _(n, d, []));
          }),
          (t[4] = _),
          (t[5] = n),
          (t[6] = f.navigationManager),
          (t[7] = d),
          (t[8] = g))
        : (g = t[8]);
      var h;
      return (
        t[9] !== g || t[10] !== i
          ? ((h = s.jsx(r("WebBloksAbstractButton"), {
              title: i,
              onClick: g,
              className: m.alertButton,
            })),
            (t[9] = g),
            (t[10] = i),
            (t[11] = h))
          : (h = t[11]),
        h
      );
    }
    var m = o("WebBloksStyle").createStyles({
      alertButton: function (t) {
        var e;
        return (
          (e = {}),
          (e["div" + t] = {
            display: "block",
            borderTop: "1px solid #CED0D4",
            cursor: "pointer",
            lineHeight: 24 / 16,
            padding: "12px 10px",
            pointerEvents: "auto !important",
            marginLeft: "0px !important",
            color: "#1877F2",
            flex: "1 1 0",
          }),
          (e[t + " + " + t] = { borderLeft: "1px solid #CED0D4" }),
          e
        );
      },
    });
    l.default = d;
  },
  98,
);
