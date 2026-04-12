__d(
  "WAWebQuestionsInputComposeBox.react",
  [
    "WATimeUtils",
    "WAWebComposeBox.react",
    "WAWebModalManager",
    "WAWebNoop",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        a = e.chat,
        i = e.getComposeBoxEditorRef,
        l = e.onComposeHeightChange,
        u = e.onSend,
        c = e.questionReplyQuotedMessage,
        d = e.questionType,
        m =
          (t = i == null || (n = i()) == null ? void 0 : n.getTextContent()) !=
          null
            ? t
            : "";
      return (
        a.setComposeContents({
          text: m,
          timestamp: o("WATimeUtils").unixTime(),
        }),
        s.jsx(o("WAWebComposeBox.react").ComposeBox, {
          chat: a,
          onComposeHeightChange: l,
          onPageUpDown: r("WAWebNoop"),
          questionType: d,
          questionReplyQuotedMessage: c,
          onSend: function () {
            var e;
            (u == null || u(),
              o("WAWebModalManager").ModalManager.close(),
              i == null || (e = i()) == null || e.reset());
          },
        })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
