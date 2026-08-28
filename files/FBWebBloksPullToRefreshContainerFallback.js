__d(
  "FBWebBloksPullToRefreshContainerFallback",
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
      u = "#";
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.node,
        a;
      t[0] !== n
        ? ((a = n.getExpression(u)), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        c = l.executeCatch,
        m;
      if (t[2] !== c || t[3] !== n || t[4] !== i) {
        var p = function () {
          i != null && c(n, i, []);
        };
        ((m = s.jsx(r("WebBloksAbstractButton"), {
          title: "Refresh",
          onClick: p,
          className: d.alertButton,
        })),
          (t[2] = c),
          (t[3] = n),
          (t[4] = i),
          (t[5] = m));
      } else m = t[5];
      return m;
    }
    var d = o("WebBloksStyle").createStyles({
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
    l.default = c;
  },
  98,
);
