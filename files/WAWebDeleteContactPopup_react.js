__d(
  "WAWebDeleteContactPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.hasCustomerData,
        r = e.onCancel,
        a = e.onOK,
        i = e.syncToAddressbook,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Delete contact?")), (t[0] = l))
        : (l = t[0]);
      var c = l,
        d;
      if (n === !0) {
        var m;
        (t[1] !== i
          ? ((m = i
              ? s._(
                  /*BTDS*/ "This contact and customer information will be deleted from WhatsApp and your phone.",
                )
              : s._(
                  /*BTDS*/ "This contact and customer information will be deleted from WhatsApp.",
                )),
            (t[1] = i),
            (t[2] = m))
          : (m = t[2]),
          (d = m));
      } else {
        var p;
        (t[3] !== i
          ? ((p = i
              ? s._(
                  /*BTDS*/ "This contact will be deleted from WhatsApp and your phone.",
                )
              : s._(/*BTDS*/ "This contact will be deleted from WhatsApp.")),
            (t[3] = i),
            (t[4] = p))
          : (p = t[4]),
          (d = p));
      }
      var _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Delete")), (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g;
      t[6] !== d
        ? ((g = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: d })),
          (t[6] = d),
          (t[7] = g))
        : (g = t[7]);
      var h;
      return (
        t[8] !== r || t[9] !== a || t[10] !== g
          ? ((h = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: a,
              okText: f,
              okButtonType: "solid-warning",
              onCancel: r,
              title: c,
              children: g,
            })),
            (t[8] = r),
            (t[9] = a),
            (t[10] = g),
            (t[11] = h))
          : (h = t[11]),
        h
      );
    }
    l.default = c;
  },
  226,
);
