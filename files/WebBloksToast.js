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
      var t = o("react-compiler-runtime").c(13),
        n = e.actionText,
        a = e.className,
        i = e.onActionClick,
        l = e.text,
        u;
      t[0] !== i
        ? ((u = function (t) {
            (t.preventDefault(), i && i(t));
          }),
          (t[0] = i),
          (t[1] = u))
        : (u = t[1]);
      var d = u,
        m;
      t[2] !== a
        ? ((m = o("WebBloksStyle").classNames(a, c.root)),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== l
        ? ((p = s.jsx("div", {
            className: c.messageContainer,
            children: s.jsx("p", { className: c.message, children: l }),
          })),
          (t[4] = l),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== n || t[7] !== d
        ? ((_ =
            n != null &&
            s.jsx(r("WebBloksAbstractButton"), { title: n, onClick: d })),
          (t[6] = n),
          (t[7] = d),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      return (
        t[9] !== m || t[10] !== p || t[11] !== _
          ? ((f = s.jsxs("div", { className: m, children: [p, _] })),
            (t[9] = m),
            (t[10] = p),
            (t[11] = _),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    l.default = d;
  },
  98,
);
