__d(
  "WAWebGroupHistoryNoticeHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebGroupHistoryPostJoinTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      if (t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE) {
        var n = t.groupHistoryBundleMetadata;
        if (n != null) {
          var r = t.id.remote,
            a;
          try {
            a = o("WAWebWidToJid").widToGroupJid(r);
          } catch (e) {
            return;
          }
          var i = n.historyReceivers;
          i.length !== 0 &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history][M2] notice rcvd, ",
                  " receivers",
                ])),
              i.length,
            ),
            await o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["group-history-participant"], async function (e) {
                var t,
                  n = e[0],
                  r = await n.get(a),
                  l =
                    (t = r == null ? void 0 : r.participantMetadataMap) != null
                      ? t
                      : new Map();
                for (var s of i) {
                  var u,
                    c = o("WAWebLidMigrationUtils").toUserLid(s);
                  if (c != null) {
                    var d = o("WAWebWidToJid").userLidtoLidUserJid(c),
                      m = l.get(d);
                    l.set(d, {
                      joinTime:
                        (u = m == null ? void 0 : m.joinTime) != null
                          ? u
                          : null,
                      groupHistorySentState: o(
                        "WAWebGroupHistoryPostJoinTypes.flow",
                      ).GroupHistorySentState.NOTICE_SENT,
                    });
                  }
                }
                await n.createOrMerge(a, {
                  chatId: a,
                  participantMetadataMap: l,
                });
              }),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateParticipantsGroupHistorySentState",
              {
                group: r,
                receiverIds: i,
                state: o("WAWebGroupHistoryPostJoinTypes.flow")
                  .GroupHistorySentState.NOTICE_SENT,
              },
            ));
        }
      }
    }
    l.maybeHandleGroupHistoryNotice = s;
  },
  98,
);
