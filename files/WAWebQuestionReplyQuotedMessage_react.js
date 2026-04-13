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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(27),
        a = e.questionReplyQuotedMessage,
        i = e.replyMsg,
        l;
      t[0] !== i
        ? ((l =
            i &&
            o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
              o("WAWebFrontendMsgGetters").getChat(i).id.toJid(),
            )),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        d = i == null ? void 0 : i.serverId,
        m;
      t[2] !== u || t[3] !== d
        ? ((m = function () {
            d == null ||
              u == null ||
              o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                newsletterJid: u,
                serverId: d,
              });
          }),
          (t[2] = u),
          (t[3] = d),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] !== p || t[6] !== u || t[7] !== a.questionServerId
        ? ((_ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              u != null &&
                o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                  newsletterJid: u,
                  serverId: a.questionServerId,
                  onMessageDeleted: p,
                  onMessageNotFound: p,
                });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[5] = p),
          (t[6] = u),
          (t[7] = a.questionServerId),
          (t[8] = _))
        : (_ = t[8]);
      var f = _,
        g;
      if (t[9] !== a.quotedQuestion) {
        var h = o("WAWebMsgModelFromData").msgModelFromMsgData(
          a.quotedQuestion,
        );
        ((g = o("WAWebMsgCollection").MsgCollection.gadd(h)),
          (t[9] = a.quotedQuestion),
          (t[10] = g));
      } else g = t[10];
      var y = g,
        C = i != null,
        b;
      t[11] !== i
        ? ((b = i == null ? void 0 : i.safe()), (t[11] = i), (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] !== y ? ((v = y.safe()), (t[13] = y), (t[14] = v)) : (v = t[14]);
      var S;
      t[15] !== v
        ? ((S = s.jsx(r("WAWebQuotedMsgContent.react"), {
            msg: v,
            theme: "questions",
          })),
          (t[15] = v),
          (t[16] = S))
        : (S = t[16]);
      var R;
      t[17] !== a.quotedResponse.body
        ? ((R = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: c.responseBody,
            text: a.quotedResponse.body,
            breakWord: !0,
          })),
          (t[17] = a.quotedResponse.body),
          (t[18] = R))
        : (R = t[18]);
      var L;
      t[19] !== S || t[20] !== R
        ? ((L = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.contentWrapper,
            children: [S, R],
          })),
          (t[19] = S),
          (t[20] = R),
          (t[21] = L))
        : (L = t[21]);
      var E;
      return (
        t[22] !== f || t[23] !== L || t[24] !== C || t[25] !== b
          ? ((E = s.jsx(r("WAWebQuotedMsgWrapper.react"), {
              authorBackgroundStyle: c.barColor,
              handleClick: f,
              clickable: C,
              rootMsg: b,
              children: L,
            })),
            (t[22] = f),
            (t[23] = L),
            (t[24] = C),
            (t[25] = b),
            (t[26] = E))
          : (E = t[26]),
        E
      );
    }
    l.default = d;
  },
  98,
);
