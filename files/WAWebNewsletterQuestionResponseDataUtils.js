__d(
  "WAWebNewsletterQuestionResponseDataUtils",
  [
    "WALogger",
    "WAWebAck",
    "WAWebContactCollection",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterQuestionResponseModel",
    "WAWebProfilePicThumbCollection",
    "WAWebReferentialMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t) {
      if (e.parentServerId !== t)
        throw r("err")(
          "question server id in the request does not match question server id we got in the response",
        );
      return new (o(
        "WAWebNewsletterQuestionResponseModel",
      ).NewsletterQuestionResponse)(
        babelHelpers.extends(
          {
            parentMsgKey: e.parentMsgKey,
            id: e.id,
            t: e.t,
            questionServerId: e.parentServerId,
            ack: e.ack,
            body: e.body,
            senderId: e.author,
          },
          e.questionResponseInfo,
        ),
      );
    }
    function d(e) {
      var t, n, r;
      return {
        type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
        kind: "newsletterQuestionResponse",
        body: e.body,
        id: e.id,
        t: e.t,
        ack: (t = e.ack) != null ? t : void 0,
        author: (n = e.senderId) != null ? n : void 0,
        parentMsgKey: e.parentMsgKey,
        parentServerId: e.questionServerId,
        questionResponseInfo: {
          responseServerId: e.responseServerId,
          senderNotifyName: e.senderNotifyName,
          senderPictureDirectPath:
            (r = e.senderPictureDirectPath) != null ? r : "",
        },
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        from: e.parentMsgKey.remote,
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      };
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l = t.body,
            c = t.from,
            d = t.globalClockUnixTimeSeconds,
            m = t.msgKey,
            p = t.parentMsg,
            _ = t.to,
            f = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              m,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            );
          (c.equals(f.from) ||
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "create question response: ",
                    " and ",
                    " do not match",
                  ])),
                c.toLogString(),
                f.from.toLogString(),
              )
              .tags("messaging")
              .sendLogs("questionResponseMsgData: from is not matching", {
                sampling: 0.01,
              }),
            _.equals(f.to) ||
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "create question response: ",
                      " and ",
                      " do not match",
                    ])),
                  _.toLogString(),
                  f.to.toLogString(),
                )
                .tags("messaging")
                .sendLogs("questionResponseMsgData: to is not matching", {
                  sampling: 0.01,
                }));
          var g = p.serverId;
          if (g == null)
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "create question response: question server id is missing",
                    ])),
                )
                .tags("messaging")
                .sendLogs(
                  "questionResponseMsgData: question does not have server id",
                ),
              r("err")("question does not have server id")
            );
          return {
            id: m,
            parentMsgKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(p),
            parentServerId: g,
            type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            kind: o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
            t: d,
            from: c,
            to: _,
            author: f.author,
            ack: o("WAWebAck").ACK.CLOCK,
            body: l,
            questionResponseInfo: {
              senderNotifyName:
                (n = o("WAWebContactCollection").ContactCollection.get(c)) ==
                null
                  ? void 0
                  : n.pushname,
              senderPictureDirectPath:
                (a =
                  (i = o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.get(c)) == null
                    ? void 0
                    : i.fullDirectPath) != null
                  ? a
                  : "",
            },
          };
        })),
        p.apply(this, arguments)
      );
    }
    ((l.createQuestionResponseModel = c),
      (l.getQuestionResponseMsgDataFromQuestionResponseModel = d),
      (l.getQuestionResponseMsgData = m));
  },
  98,
);
