__d(
  "WAWebDebugWWWSettings.react",
  [
    "WAWebCanonicalDebug.react",
    "WAWebConfirmPopup.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onExit,
        a;
      t[0] !== n
        ? ((a = function () {
            (n == null || n(), o("WAWebModalManager").ModalManager.close());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsxs("div", {
            className: "xdpfuu1 x9orja2 x5zjp28 xbaz6xv x162tt16",
            children: [
              s.jsx(r("WDSText.react"), {
                type: "LargeTitle2",
                colorName: "contentDefault",
                children: "Canonical",
              }),
              s.jsx(r("WAWebCanonicalDebug.react"), {}),
            ],
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== a
          ? ((l = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.Flex,
              onCancel: a,
              cancelText: "Close",
              children: i,
            })),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = u;
  },
  98,
);
