__d(
  "WebBloksToast",
  [
    "WebBloksAbstractButton",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = o("WebBloksStyle").createStyles({
        root: {
          backgroundColor: "#262626",
          flexDirection: "row",
          minHeight: "44px",
          padding: "0 16px!important",
          width: "100%",
        },
        messageContainer: {
          flexGrow: 1,
          flexShrink: 1,
          justifyContent: "center",
          minWidth: "200px",
        },
        message: {
          color: "#fff",
          fontSize: "14px",
          lineHeight: "18px",
          maxHeight: "72px",
          overflow: "hidden",
          padding: "12px 0!important",
        },
      });
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.actionText,
        a = e.onActionClick,
        i = e.text,
        l;
      t[0] !== a
        ? ((l = function (t) {
            (t.preventDefault(), a && a(t));
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WebBloksStyle").classNames(c.root)), (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== i
        ? ((m = s.jsx("div", {
            className: c.messageContainer,
            children: s.jsx("p", { className: c.message, children: i }),
          })),
          (t[3] = i),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== n || t[6] !== u
        ? ((p =
            n != null &&
            s.jsx(r("WebBloksAbstractButton"), { title: n, onClick: u })),
          (t[5] = n),
          (t[6] = u),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== m || t[9] !== p
          ? ((_ = s.jsxs("div", { className: d, children: [m, p] })),
            (t[8] = m),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = d;
  },
  98,
);
