__d(
  "WAWebGroupHistoryNoticeHandler",
  [
    "WALogger",
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
          if (t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE) {
            var r = t.groupHistoryBundleMetadata;
            if (r != null) {
              var a = t.id.remote,
                i;
              try {
                i = o("WAWebWidToJid").widToGroupJid(a);
              } catch (e) {
                return;
              }
              var l = r.historyReceivers;
              l.length !== 0 &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history][M2] notice rcvd, ",
                      " receivers",
                    ])),
                  l.length,
                ),
                yield o("WAWebModelStorageUtils")
                  .getStorage()
                  .lock(
                    ["group-history-participant"],
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t,
                            n = e[0],
                            r = yield n.get(i),
                            a =
                              (t =
                                r == null
                                  ? void 0
                                  : r.participantMetadataMap) != null
                                ? t
                                : new Map();
                          for (var s of l) {
                            var u,
                              c = o("WAWebLidMigrationUtils").toUserLid(s);
                            if (c != null) {
                              var d = o("WAWebWidToJid").userLidtoLidUserJid(c),
                                m = a.get(d);
                              a.set(d, {
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
                          yield n.createOrMerge(i, {
                            chatId: i,
                            participantMetadataMap: a,
                          });
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.maybeHandleGroupHistoryNotice = s;
  },
  98,
);
