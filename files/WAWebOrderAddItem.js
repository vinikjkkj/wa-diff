__d(
  "WAWebOrderAddItem",
  [
    "WAWebCellFrame.react",
    "WAWebOrderIcons",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        a = e.title,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx(o("WAWebOrderIcons").AddItemIcon, {})), (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] !== n || t[2] !== a
          ? ((l = s.jsx(r("WAWebCellFrame.react"), {
              testid: "add-order-item-button",
              image: i,
              primary: a,
              theme: "add-order-item",
              onClick: n,
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = u;
  },
  98,
);
