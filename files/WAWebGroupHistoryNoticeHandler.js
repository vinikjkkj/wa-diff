__d(
  "WAWebGroupHistoryNoticeHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPersistAndSyncGroupHistoryToggle",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      if (t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE) {
        var n = t.groupHistoryBundleMetadata;
        if (n != null) {
          var r = n.historyReceivers;
          r.length !== 0 &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history][M2] notice rcvd, ",
                  " receivers",
                ])),
              r.length,
            ),
            await u(t.id.remote, r),
            t.id.fromMe === !0 &&
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySendOnceDefaultOnEnabled() &&
              (await o(
                "WAWebPersistAndSyncGroupHistoryToggle",
              ).persistAndSyncGroupHistoryToggle(t.id.remote, !0),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateGroupMetadataModelForShareHistoryDefault",
                { group: t.id.remote, shouldDefaultGroupHistoryShareOn: !0 },
              )));
        }
      }
    }
    async function u(e, t) {
      await c(
        e,
        t,
        o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT,
      );
    }
    async function c(e, t, n) {
      if (t.length !== 0) {
        var r;
        try {
          r = o("WAWebWidToJid").widToGroupJid(e);
        } catch (e) {
          return;
        }
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["group-history-participant"], async function (e) {
            var a,
              i = e[0],
              l = await i.get(r),
              s =
                (a = l == null ? void 0 : l.participantMetadataMap) != null
                  ? a
                  : new Map();
            for (var u of t) {
              var c,
                d = o(
                  "WAWebGroupHistoryParticipantJob",
                ).toGroupHistoryParticipantKey(u);
              if (d != null) {
                var m = s.get(d);
                s.set(d, {
                  joinTime:
                    (c = m == null ? void 0 : m.joinTime) != null ? c : null,
                  groupHistorySentState: n,
                });
              }
            }
            await i.createOrMerge(r, { chatId: r, participantMetadataMap: s });
          }),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateParticipantsGroupHistorySentState",
            { group: e, receiverIds: t, state: n },
          ));
      }
    }
    async function d(e, t) {
      if (t.length === 0) return !0;
      var n;
      try {
        n = o("WAWebWidToJid").widToGroupJid(e);
      } catch (e) {
        return !1;
      }
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["group-history-participant"], async function (e) {
          var r = e[0],
            a = await r.get(n),
            i = a == null ? void 0 : a.participantMetadataMap;
          if (i == null) return !1;
          for (var l of t) {
            var s,
              u = o(
                "WAWebGroupHistoryParticipantJob",
              ).toGroupHistoryParticipantKey(l);
            if (u == null) return !1;
            var c = (s = i.get(u)) == null ? void 0 : s.groupHistorySentState;
            if (
              c !==
                o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
                  .NOTICE_SENT &&
              c !==
                o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
                  .HISTORY_SENT
            )
              return !1;
          }
          return !0;
        });
    }
    ((l.maybeHandleGroupHistoryNotice = s),
      (l.markGroupHistoryNoticeSent = u),
      (l.setGroupHistorySentStateForReceivers = c),
      (l.areAllReceiversNoticeSent = d));
  },
  98,
);
