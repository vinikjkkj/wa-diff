__d(
  "WAWebPollsSendPollEditMsgAction",
  [
    "WATimeUtils",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebClock",
    "WAWebFrontendMsgGetters",
    "WAWebLidMeUserForChat",
    "WAWebMessageEditUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollEditEncryptMsgData",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAXplatTrim",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.newTitle,
            a = e.parentMsg,
            i = o("WAXplatTrim").trim(n),
            l = o("WAXplatTrim").trim((t = a.pollName) != null ? t : "");
          if (!a.id.fromMe)
            throw r("err")("Only the poll creator can edit the poll");
          if (i === "") throw r("err")("Poll edit title cannot be empty");
          if (i === l) throw r("err")("Poll edit title is unchanged");
          if (
            !o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
              msgKey: a.id,
              parentTsInSeconds: a.t,
            })
          )
            throw r("err")("Poll edit window has expired");
          if (
            a.pollEndTime != null &&
            a.pollEndTime <= o("WAWebClock").Clock.getServerTimeMs()
          )
            throw r("err")("Poll has ended");
          var s = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
              o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
            ),
            u = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: a.id.remote,
              id: yield r("WAWebMsgKey").newId(),
              participant: o("WAWebMsgGetters").getIsGroupMsg(a.unsafe())
                ? s
                : void 0,
            }),
            c = babelHelpers.extends(
              {},
              o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                u,
                o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
              ),
              {
                id: u,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "poll_edit_decrypted",
                kind: o("WAWebMsgType").MsgKind.ProtocolPollEdit,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                latestEditSenderTimestampMs: o(
                  "WAWebAddOnParseWebMsgInfo",
                ).getIncreasingLatestSenderTimestampMs(
                  a.unsafe().latestEditSenderTimestampMs,
                ),
                latestEditMsgKey: u,
                protocolMessageKey: a.id,
                editMsgType: o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
                pollName: i,
              },
            ),
            d = yield o(
              "WAWebPollEditEncryptMsgData",
            ).createEncryptedPollEditMsgData(c, a.unsafe()),
            m = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(d);
          if (
            m.messageSendResult !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK
          )
            throw r("err")("Failed to send poll edit");
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPollEdit = e;
  },
  98,
);
