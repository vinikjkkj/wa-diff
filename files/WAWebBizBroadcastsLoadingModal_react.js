__d(
  "WAWebBizBroadcastsLoadingModal.react",
  [
    "WAWebModal.react",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        controlsStyle: {
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1c1uobl",
          paddingTop: "xl7twdi",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onCancel,
        r = u(!1),
        a = r[0],
        i = r[1],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i(!0);
          }),
          (t[0] = l))
        : (l = t[0]);
      var d;
      if (
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { immediate: !0 }), (t[1] = d))
          : (d = t[1]),
        o("useWAWebTimeout").useTimeout(l, 1e3, d),
        !a)
      )
        return null;
      var m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx("div", {
            className: "x6s0dn4 x78zum5 xl56j7k xz65tgg",
            children: s.jsx(o("WAWebSpinner.react").Spinner, { size: 48 }),
          })),
          (t[2] = m))
        : (m = t[2]);
      var p;
      return (
        t[3] !== n
          ? ((p = s.jsx(o("WAWebModal.react").Modal, {
              onOverlayClick: n,
              testid: void 0,
              controlsStyle: c.controlsStyle,
              children: m,
            })),
            (t[3] = n),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    l.default = d;
  },
  98,
);
