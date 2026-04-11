__d(
  "WAWebFailedMessageEditResendModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebSendMessageEditAction",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginBottom32: { marginBottom: "xg6s713", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.failedEditedMsg,
        r = e.ref,
        a = o("WAWebMsgActionCapability").canEditText(n),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Try again")), (t[0] = i))
        : (i = t[0]);
      var l = i,
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Cancel")), (t[1] = d))
        : (d = t[1]);
      var p = d,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(
            /*BTDS*/ "Your edited message was not sent. Please try again.",
          )),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] !== n
        ? ((g = function () {
            return (
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebSendMessageEditAction").resendLatestEdit(n)
            );
          }),
          (t[3] = n),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { surface: "unknown", viewName: "failed-message-edit-resend" }),
          (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
              xstyle: [c.marginTop16, c.marginBottom32],
              children: f,
            }),
          })),
          (t[6] = C))
        : (C = t[6]);
      var b;
      return (
        t[7] !== h || t[8] !== r
          ? ((b = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              ref: r,
              tsNavigationData: y,
              okText: l,
              onOK: h,
              cancelText: p,
              onCancel: m,
              children: C,
            })),
            (t[7] = h),
            (t[8] = r),
            (t[9] = b))
          : (b = t[9]),
        b
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
  },
  226,
);
