__d(
  "WAWebSendLocationChatAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMsgKey",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.chat,
        a = t.lat,
        i = t.lng,
        l = t.loc,
        s = t.meUser,
        c = await u({ chat: n, lat: a, lng: i, loc: l, meUser: s });
      try {
        var d = await o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, c)[1];
        if (
          !d ||
          d.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          throw r("err")("Location message SendMsgResult failure status");
      } catch (t) {
        throw (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Location message send to chat failure: ",
                "",
              ])),
            t,
          ),
          t
        );
      }
    }
    async function u(e) {
      var t = e.chat,
        n = e.lat,
        a = e.lng,
        i = e.loc,
        l = e.meUser,
        s = babelHelpers.extends(
          {
            type: "location",
            ack: o("WAWebAck").ACK.CLOCK,
            from: l,
            id: new (r("WAWebMsgKey"))({
              from: l,
              to: t.id,
              id: await r("WAWebMsgKey").newId(),
              participant: void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: t.id,
            lat: n,
            lng: a,
            loc: i,
          },
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
        );
      return s;
    }
    l.default = s;
  },
  98,
);
