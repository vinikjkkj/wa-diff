__d(
  "WAWebEditImageModal.react",
  [
    "fbt",
    "WAWebEditImageDrawer.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.cropShape,
        r = e.img,
        a = e.onFinished,
        i = e.onRetake,
        l = e.theme,
        c = d,
        m;
      t[0] !== a
        ? ((m = function (t, n) {
            (a(t, n),
              o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[0] = a),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Drag the image to adjust")), (t[2] = _))
        : (_ = t[2]);
      var f = n || void 0,
        g;
      t[3] !== p || t[4] !== r || t[5] !== i || t[6] !== f
        ? ((g = u.jsx(o("WAWebEditImageDrawer.react").EditImageDrawer, {
            onCancel: c,
            onFinished: p,
            onRetake: i,
            retryText: o("WAWebEditImageDrawer.react").RETRY_OPTIONS.RESTART,
            img: r,
            cropShape: f,
          })),
          (t[3] = p),
          (t[4] = r),
          (t[5] = i),
          (t[6] = f),
          (t[7] = g))
        : (g = t[7]);
      var h;
      return (
        t[8] !== g || t[9] !== l
          ? ((h = u.jsx(o("WAWebModal.react").Modal, {
              type: l,
              ariaLabel: _,
              testid: void 0,
              children: g,
            })),
            (t[8] = g),
            (t[9] = l),
            (t[10] = h))
          : (h = t[10]),
        h
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    l.default = c;
  },
  226,
);
