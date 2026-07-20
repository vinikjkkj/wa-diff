__d(
  "WAWebVoipActionWriteCallLogSync",
  [
    "WALogger",
    "WALongInt",
    "WAPromiseEach",
    "WAResolvable",
    "WATimeUtils",
    "WAWebCallLogUtils",
    "WAWebCallsOnlyGating",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = [],
      g = null;
    function h() {
      if (g != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: listener already registered",
              ])),
          ),
          g.promise
        );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "generateCallLogFromCallSyncRecord: setting up listener",
          ])),
      ),
        (g = new (o("WAResolvable").Resolvable)()));
      var t = g;
      return (
        o("WAWebCmd").Cmd.on(
          "on_initial_chat_synced_from_bridge",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "generateCallLogFromCallSyncRecord: listener called, pending=",
                  "",
                ])),
              f.length,
            ),
              yield o("WAPromiseEach").promiseEach(f, function (e, n) {
                return b(e).then(function () {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "generateCallLogFromCallSyncRecord: done histSync=",
                        "",
                      ])),
                    e.fromHistorySync,
                  ),
                    t.resolve(),
                    (f = []),
                    (g = null));
                });
              }));
          }),
        ),
        t.promise
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete() ||
            o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()
          )
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "generateCallLogFromCallSyncRecord: start+ histSync=",
                  "",
                ])),
              e.fromHistorySync,
            ),
              yield b(e));
          else
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "generateCallLogFromCallSyncRecord: start- histSync=",
                    "",
                  ])),
                e.fromHistorySync,
              ),
              f.push(e),
              h()
            );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.callLogRecord,
            a = e.fromHistorySync,
            i = a === void 0 ? !1 : a,
            l = {
              message:
                "generateCallLogFromCallSyncdRecord: failed to find chat target details for call log syncd record",
              log: "generate-call-log-message-syncd-failed",
            };
          i &&
            (l = {
              message:
                "generateCallLogFromCallHistorySyncRecord: failed to find chat target details for call log history sync record",
              log: "generate-call-log-message-history-sync-failed",
            });
          var s = n.callCreatorJid,
            u = n.callId,
            c = n.callLinkToken,
            d = n.callResult,
            m = n.groupJid,
            f = n.isCallLink,
            g = f === void 0 ? !1 : f,
            h = n.isVideo,
            y = n.silenceReason,
            C = n.startTime;
          if (
            !(
              u != null &&
              !i &&
              o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(u)
            )
          ) {
            var b,
              v =
                s != null && s !== ""
                  ? o("WAWebWidFactory").createWid(s)
                  : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
            try {
              b = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: v,
                callId: u,
                groupJid: r("isStringNullOrEmpty")(m)
                  ? null
                  : o("WAWebWidFactory").createWid(m),
                isCallLink: g || void 0,
                participants: r("compactMap")(n.participants, function (e) {
                  return e.userJid != null && e.userJid !== ""
                    ? o("WAWebWidFactory").createWid(e.userJid)
                    : null;
                }),
              });
            } catch (e) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
                l.message,
                String(e),
              );
              return;
            }
            var S = b,
              R = S.callCreatorUserWid,
              L = S.chatId,
              E = S.fromMe,
              k = S.msgKeyId,
              I = S.participant,
              T = S.viewMode,
              D = o("WATimeUtils").castToUnixTime(
                (t = o("WALongInt").maybeNumber(C)) != null
                  ? t
                  : o("WATimeUtils").unixTime(),
              ),
              x = !1;
            if (
              !i &&
              !o("WATimeUtils").happenedWithin(
                D,
                o("WATimeUtils").MINUTE_SECONDS,
              )
            ) {
              var $,
                P =
                  ($ = o("WAWebChatCollection").ChatCollection.get(L)) == null
                    ? void 0
                    : $.t;
              x = P != null && P >= D;
            }
            try {
              var N,
                M = {
                  id: new (r("WAWebMsgKey"))({
                    remote: L,
                    participant: I,
                    fromMe: E,
                    id: k,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode:
                    x || i || g
                      ? o("WAWebViewMode.flow").ViewModeType
                          .HISTORY_SYNCED_CALL_LOG
                      : T,
                  callOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallResultSyncProto(
                    r("nullthrows")(
                      d,
                      "generateCallLogFromCallSyncRecord: callResult is null from call log record sync",
                    ),
                  ),
                  callSilenceReason:
                    y != null
                      ? o("WAWebCallLogUtils").getCallSilenceReason(y)
                      : void 0,
                  isVideoCall: h != null ? h : !1,
                  callCreator: v,
                  callDuration:
                    n.duration == null
                      ? void 0
                      : (N = o("WALongInt").maybeNumber(n.duration)) != null
                        ? N
                        : void 0,
                  callParticipants: n.participants
                    .filter(function (e) {
                      return e.userJid != null;
                    })
                    .map(function (e) {
                      return {
                        participant: o("WAWebWidFactory").createWid(
                          r("nullthrows")(e.userJid),
                        ),
                        outcome:
                          e.callResult != null
                            ? o(
                                "WAWebCallLogUtils",
                              ).getCallParticipantStateFromCallResultSyncProto(
                                e.callResult,
                              )
                            : o("WAWebVoipWaCallEnums").CallParticipantState
                                .Invalid,
                      };
                    }),
                  from: R,
                  t: D,
                  to: L,
                  isCallLink: g != null ? g : !1,
                  callLinkToken: c != null ? c : void 0,
                };
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(L, M, !1);
            } catch (e) {
              (i
                ? (l.message =
                    "generateCallLogFromCallHistorySyncRecord: failed to generate call log message from history sync")
                : (l.message =
                    "generateCallLogFromCallSyncRecord: failed to generate call log message from syncd"),
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    l.message,
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("nexus-voip")
                  .sendLogs(l.log));
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    l.generateCallLogFromCallSyncRecord = y;
  },
  98,
);
