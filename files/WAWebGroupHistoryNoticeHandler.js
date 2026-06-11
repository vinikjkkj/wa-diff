__d(
  "WAWebGroupHistoryNoticeHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE &&
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(t.id.remote)
          ) {
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
                yield c(t.id.remote, r));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.length !== 0) {
            var r;
            try {
              r = o("WAWebWidToJid").widToGroupJid(e);
            } catch (e) {
              return;
            }
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["group-history-participant"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n,
                        a = e[0],
                        i = yield a.get(r),
                        l =
                          (n = i == null ? void 0 : i.participantMetadataMap) !=
                          null
                            ? n
                            : new Map();
                      for (var s of t) {
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
                      yield a.createOrMerge(r, {
                        chatId: r,
                        participantMetadataMap: l,
                      });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateParticipantsGroupHistorySentState",
                {
                  group: e,
                  receiverIds: t,
                  state: o("WAWebGroupHistoryPostJoinTypes.flow")
                    .GroupHistorySentState.NOTICE_SENT,
                },
              ));
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.maybeHandleGroupHistoryNotice = s), (l.markGroupHistoryNoticeSent = c));
  },
  98,
);
