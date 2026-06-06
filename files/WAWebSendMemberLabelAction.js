__d(
  "WAWebSendMemberLabelAction",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBProcessMessage",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabel.flow",
    "WAWebMemberLabelBridgeApi",
    "WAWebMemberLabelJob",
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WATimeUtils").unixTime(),
            r = babelHelpers.extends(
              {},
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(
                e,
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              ),
              {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.MemberLabel,
                subtype: "member_label",
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                memberLabelData: { label: t, labelTimestamp: n },
              },
            ),
            a = new (o("WAWebMsgModel").Msg)(r);
          (e.msgs.add(a),
            yield o("WAWebDBProcessMessage").storeMessages([r], e.id));
          var i = yield o("WAWebSendMsgRecordAction").sendMsgRecord(a);
          if (
            i.messageSendResult !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK
          )
            return (a.updateAck(o("WAWebAck").ACK.FAILED), i);
          var l = a.id.participant;
          if (l == null || !e.id.isGroup()) return i;
          var s = o("WAWebLidMigrationUtils").toUserLid(l);
          if (!s) return i;
          var u = {
              label: o("WAWebMemberLabel.flow").castToMemberLabeString(t),
              lastEditTimestamp: o("WATimeUtils").castToUnixTime(n),
            },
            c = o("WAWebWidToJid").widToGroupJid(e.id),
            d = o("WAWebWidToJid").userLidtoLidUserJid(s);
          return (
            yield o("WAWebMemberLabelJob").createOrUpdateMemberLabel({
              chatId: c,
              member: d,
              memberLabel: u,
            }),
            o(
              "WAWebMemberLabelBridgeApi",
            ).MemberLabelBridgeApi.updateMemberLabelCollection({
              updates: [
                {
                  type: "UPSERT",
                  data: { chatId: c, member: d, memberLabel: u },
                },
              ],
            }),
            i
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendMemberLabelMsg = e;
  },
  98,
);
