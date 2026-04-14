__d(
  "WAWebMessageEditActionsModal.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebText_DONOTUSE.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginBottom32: { marginBottom: "xg6s713", $$css: !0 },
      };
    function c(e) {
      var t = e.ref,
        n = e.cancelText,
        r = n === void 0 ? null : n,
        a = e.modalText,
        i = e.okText,
        l = e.onCancel,
        c = l === void 0 ? null : l,
        d = e.onOk,
        m = e.titleText,
        p = m === void 0 ? null : m,
        _ = e.type;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "message-edit-actions",
        },
        ref: t,
        type: _,
        title: p,
        okText: i,
        onOK: d,
        cancelText: r,
        onCancel: c,
        children: s.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: s.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: [!p && u.marginTop16, u.marginBottom32],
            children: a,
          }),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
