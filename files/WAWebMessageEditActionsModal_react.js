__d(
  "WAWebMessageEditActionsModal.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginBottom32: { marginBottom: "xg6s713", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.ref,
        r = e.cancelText,
        a = e.modalText,
        i = e.okText,
        l = e.onCancel,
        c = e.onOk,
        d = e.titleText,
        m = e.type,
        p = r === void 0 ? null : r,
        _ = l === void 0 ? null : l,
        f = d === void 0 ? null : d,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { surface: "unknown", viewName: "message-edit-actions" }),
          (t[0] = g))
        : (g = t[0]);
      var h = !f && u.marginTop16,
        y;
      t[1] !== h
        ? ((y = [h, u.marginBottom32]), (t[1] = h), (t[2] = y))
        : (y = t[2]);
      var C;
      t[3] !== a || t[4] !== y
        ? ((C = s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: s.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
              xstyle: y,
              children: a,
            }),
          })),
          (t[3] = a),
          (t[4] = y),
          (t[5] = C))
        : (C = t[5]);
      var b;
      return (
        t[6] !== p ||
        t[7] !== i ||
        t[8] !== _ ||
        t[9] !== c ||
        t[10] !== n ||
        t[11] !== C ||
        t[12] !== f ||
        t[13] !== m
          ? ((b = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: g,
              ref: n,
              type: m,
              title: f,
              okText: i,
              onOK: c,
              cancelText: p,
              onCancel: _,
              children: C,
            })),
            (t[6] = p),
            (t[7] = i),
            (t[8] = _),
            (t[9] = c),
            (t[10] = n),
            (t[11] = C),
            (t[12] = f),
            (t[13] = m),
            (t[14] = b))
          : (b = t[14]),
        b
      );
    }
    l.default = c;
  },
  98,
);
