__d(
  "WAWebOrderConfirmDiscardModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onOK,
        r,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { surface: "unknown", viewName: "order-confirm-discard" }),
          (a = s._(/*BTDS*/ "Discard changes?")),
          (t[0] = r),
          (t[1] = a))
        : ((r = t[0]), (a = t[1]));
      var i;
      t[2] !== n
        ? ((i = function () {
            (o("WAWebModalManager").ModalManager.close(), n());
          }),
          (t[2] = n),
          (t[3] = i))
        : (i = t[3]);
      var l;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Discard")), (t[4] = l))
        : (l = t[4]);
      var c;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "If you close this, your draft will be discarded.",
            ),
          })),
          (t[5] = c))
        : (c = t[5]);
      var d;
      return (
        t[6] !== i
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: r,
              title: a,
              onOK: i,
              okText: l,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: c,
            })),
            (t[6] = i),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = c;
  },
  226,
);
