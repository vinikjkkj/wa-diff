__d(
  "WAWebChatSendGroupInviteMessage",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebGroupMetadataCollection",
    "WAWebMsgKey",
    "WAWebSendMsgChatAction",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.caption,
            a = e.chat_,
            i = e.code,
            l = e.exp,
            s = e.gid,
            u = e.name,
            c = e.thumb,
            d = o("WAWebStateUtils").unproxy(a),
            m =
              ((t = r("WAWebGroupMetadataCollection").get(s)) == null
                ? void 0
                : t.isLidAddressingMode) === !0,
            p = m
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            _ = d.id,
            f = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              from: p,
              to: _,
              participant: void 0,
              selfDir: "out",
            }),
            g = babelHelpers.extends(
              {
                id: f,
                from: p,
                to: _,
                ack: o("WAWebAck").ACK.CLOCK,
                local: !0,
                t: o("WATimeUtils").unixTime(),
                type: "groups_v4_invite",
                isNewMsg: !0,
                inviteGrpJpegThum: c,
                inviteCode: i,
                inviteCodeExp: l,
                inviteGrp: s,
                inviteGrpName: u,
                comment: n,
              },
              o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(d),
            );
          return o("WAWebSendMsgChatAction").addAndSendMsgToChat(d, g)[1];
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGroupInviteMessage = e;
  },
  98,
);
