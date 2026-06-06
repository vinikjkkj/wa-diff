__d(
  "WAWebNewsletterSendQuestionResponseAction",
  [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebNewsletterQuestionResponseDataUtils",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterValidationUtils",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a = t.serverId;
      if (a == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sendNewsletterQuestionResponse] Message missing serverId",
              ])),
          ),
          o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
        );
      var i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        l = o("WAWebFrontendMsgGetters").getChat(t).id,
        u = o("WATimeUtils").unixTime(),
        c = new (r("WAWebMsgKey"))({
          from: i,
          to: l,
          id: await r("WAWebMsgKey").newId(),
        }),
        d = await o(
          "WAWebNewsletterQuestionResponseDataUtils",
        ).getQuestionResponseMsgData({
          parentMsg: t,
          body: n,
          from: i,
          msgKey: c,
          globalClockUnixTimeSeconds: u,
          to: l,
        }),
        m = new (o("WAWebMsgModel").Msg)(d);
      try {
        var p = await o("WAWebNewsletterSendMessageJob").sendNewsletterMessage({
          type: "newsletterQuestionResponse",
          newsletterJid: o(
            "WAWebNewsletterValidationUtils",
          ).toNewsletterJidOrThrow(l.toJid()),
          parentMsgServerId: a,
          msg: d,
        });
        return p.success
          ? (m.updateAck(o("WAAckLevel").ACK.SENT),
            o("WAWebSendMsgResultAction").SendMsgResult.OK)
          : (m.updateAck(o("WAAckLevel").ACK.FAILED),
            p.ack.error === "419"
              ? o("WAWebSendMsgResultAction").SendMsgResult.ERROR_RATE_LIMIT
              : o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] Failed to send question response",
                ])),
            )
            .tags("newsletter"),
          m.updateAck(o("WAAckLevel").ACK.FAILED, void 0),
          o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
        );
      }
    }
    l.sendNewsletterQuestionResponse = u;
  },
  98,
);
