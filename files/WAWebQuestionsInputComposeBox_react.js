__d(
  "WAWebQuestionsInputComposeBox.react",
  [
    "WATimeUtils",
    "WAWebComposeBox.react",
    "WAWebModalManager",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(9),
        i = e.chat,
        l = e.getComposeBoxEditorRef,
        u = e.onComposeHeightChange,
        c = e.onSend,
        d = e.questionReplyQuotedMessage,
        m = e.questionType,
        p =
          (t = l == null || (n = l()) == null ? void 0 : n.getTextContent()) !=
          null
            ? t
            : "";
      i.setComposeContents({ text: p, timestamp: o("WATimeUtils").unixTime() });
      var _;
      a[0] !== l || a[1] !== c
        ? ((_ = function () {
            var e;
            (c == null || c(),
              o("WAWebModalManager").ModalManager.close(),
              l == null || (e = l()) == null || e.reset());
          }),
          (a[0] = l),
          (a[1] = c),
          (a[2] = _))
        : (_ = a[2]);
      var f;
      return (
        a[3] !== i || a[4] !== u || a[5] !== d || a[6] !== m || a[7] !== _
          ? ((f = s.jsx(o("WAWebComposeBox.react").ComposeBox, {
              chat: i,
              onComposeHeightChange: u,
              onPageUpDown: r("WAWebNoop"),
              questionType: m,
              questionReplyQuotedMessage: d,
              onSend: _,
            })),
            (a[3] = i),
            (a[4] = u),
            (a[5] = d),
            (a[6] = m),
            (a[7] = _),
            (a[8] = f))
          : (f = a[8]),
        f
      );
    }
    l.default = u;
  },
  98,
);
