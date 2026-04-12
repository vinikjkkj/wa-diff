__d(
  "WAWebQuestionReplyQuotedMessage.react",
  [
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgModelFromData",
    "WAWebNewsletterOpenAtAction",
    "WAWebNewsletterValidationUtils",
    "WAWebQuotedMsgContent.react",
    "WAWebQuotedMsgWrapper.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        barColor: { backgroundColor: "x1518k6t", $$css: !0 },
        contentWrapper: {
          paddingInlineEnd: "x1nzty39",
          paddingInlineStart: "x12w63v0",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          backgroundColor: "x1bu39yj",
          width: "xh8yej3",
          $$css: !0,
        },
        responseBody: { paddingTop: "x1tiyuxx", $$css: !0 },
      };
    function d(e) {
      var t = e.questionReplyQuotedMessage,
        a = e.replyMsg,
        i =
          a &&
          o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            o("WAWebFrontendMsgGetters").getChat(a).id.toJid(),
          ),
        l = a == null ? void 0 : a.serverId,
        d = function () {
          l == null ||
            i == null ||
            o("WAWebNewsletterOpenAtAction").openNewsletterAt({
              newsletterJid: i,
              serverId: l,
            });
        },
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            i != null &&
              o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                newsletterJid: i,
                serverId: t.questionServerId,
                onMessageDeleted: d,
                onMessageNotFound: d,
              });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        p = u(
          function () {
            var e = o("WAWebMsgModelFromData").msgModelFromMsgData(
              t.quotedQuestion,
            );
            return o("WAWebMsgCollection").MsgCollection.gadd(e);
          },
          [t.quotedQuestion],
        );
      return s.jsx(r("WAWebQuotedMsgWrapper.react"), {
        authorBackgroundStyle: c.barColor,
        handleClick: m,
        clickable: a != null,
        rootMsg: a == null ? void 0 : a.safe(),
        children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: c.contentWrapper,
          children: [
            s.jsx(r("WAWebQuotedMsgContent.react"), {
              msg: p.safe(),
              theme: "questions",
            }),
            s.jsx(o("WAWebEmojiText.react").EmojiText, {
              xstyle: c.responseBody,
              text: t.quotedResponse.body,
              breakWord: !0,
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
