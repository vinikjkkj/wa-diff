__d(
  "WAWebMemberLabelDeleteModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        a = e.onDelete,
        i = c(!1),
        l = i[0],
        d = i[1],
        p = m,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Delete member tag?")), (t[0] = _))
        : (_ = t[0]);
      var f = _,
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(
            /*BTDS*/ "Your member tag will no longer appear in this group and will be deleted.",
          )),
          (t[1] = g))
        : (g = t[1]);
      var h = g,
        y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Delete")), (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] !== a
        ? ((b = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (d(!0), yield a(), d(!1));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[3] = a),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            children: h,
          })),
          (t[5] = S))
        : (S = t[5]);
      var R;
      return (
        t[6] !== v || t[7] !== l
          ? ((R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: v,
              okText: C,
              okButtonType: "solid-warning",
              onCancel: p,
              cancelButtonType: "simplified",
              onOverlayClick: p,
              okSpinner: l,
              okDisabled: l,
              title: f,
              children: S,
            })),
            (t[6] = v),
            (t[7] = l),
            (t[8] = R))
          : (R = t[8]),
        R
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.closeSupportModal();
    }
    l.default = d;
  },
  226,
);
