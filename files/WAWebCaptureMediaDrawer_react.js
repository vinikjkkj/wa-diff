__d(
  "WAWebCaptureMediaDrawer.react",
  [
    "WALogger",
    "WAWebCaptureDrawer.react",
    "WAWebMedia",
    "WAWebQuestions.flow",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.chat,
        a = t.disposeStream,
        i = t.onCancel,
        l = t.onCaptureSent,
        s = t.onClose,
        c = t.questionReplyQuotedMessage,
        d = t.questionType,
        m = t.stream,
        p = t.threadId,
        _ = function (r) {
          var t,
            a = r.caption,
            i = r.getImg,
            u = r.isViewOnce,
            m = r.isWamoSub,
            _ = r.mentionedJidList,
            f = n,
            g = f.composeQuotedMsg;
          f.composeQuotedMsg = null;
          var h =
            ((t = f.getComposeContents()) == null ? void 0 : t.ctwaContext) ||
            void 0;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebCaptureMediaDrawer: before prepRawMedia",
              ])),
          ),
            o("WAWebMedia")
              .prepRawMedia(i, {})
              .sendToChat({
                chat: f,
                options: {
                  caption: a,
                  mentionedJidList: _,
                  quotedMsg: g,
                  ctwaContext: h,
                  isViewOnce: u,
                  isWamoSub: m,
                  isQuestion:
                    d === o("WAWebQuestions.flow").QuestionType.Question,
                  questionReplyQuotedMessage: c,
                  threadId: p,
                },
              }),
            l(),
            s());
        };
      return u.jsx(r("WAWebCaptureDrawer.react"), {
        onBack: function () {
          (s(), i());
        },
        chat: n,
        caption: !0,
        theme: "capture-contain",
        onSend: _,
        stream: m,
        disposeStream: a,
        questionType: d,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
