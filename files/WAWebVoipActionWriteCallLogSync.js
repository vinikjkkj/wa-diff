__d(
  "WAWebVoipActionWriteCallLogSync",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAPromiseEach",
    "WAResolvable",
    "WATimeUtils",
    "WAWebCallLogUtils",
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
          if (o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete())
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
          var t = e.callLogRecord,
            n = e.fromHistorySync,
            a = n === void 0 ? !1 : n,
            i = e.shouldHideInConversation,
            l = i === void 0 ? !1 : i,
            s = {
              message:
                "generateCallLogFromCallSyncdRecord: failed to find chat target details for call log syncd record",
              log: "generate-call-log-message-syncd-failed",
            };
          a &&
            (s = {
              message:
                "generateCallLogFromCallHistorySyncRecord: failed to find chat target details for call log history sync record",
              log: "generate-call-log-message-history-sync-failed",
            });
          var u = t.callCreatorJid,
            c = t.callId,
            d = t.callLinkToken,
            m = t.callResult,
            f = t.groupJid,
            g = t.isCallLink,
            h = g === void 0 ? !1 : g,
            y = t.isVideo,
            C = t.silenceReason,
            b = t.startTime;
          if (
            !(
              c != null &&
              !a &&
              o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(c)
            )
          ) {
            var v,
              S =
                u != null && u !== ""
                  ? o("WAWebWidFactory").createWid(u)
                  : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
            try {
              v = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: S,
                callId: c,
                groupJid: r("isStringNullOrEmpty")(f)
                  ? null
                  : o("WAWebWidFactory").createWid(f),
                isCallLink: h || void 0,
                participants: r("compactMap")(t.participants, function (e) {
                  return e.userJid != null && e.userJid !== ""
                    ? o("WAWebWidFactory").createWid(e.userJid)
                    : null;
                }),
              });
            } catch (e) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
                s.message,
                e,
              );
              return;
            }
            var R = v,
              L = R.callCreatorUserWid,
              E = R.chatId,
              k = R.fromMe,
              I = R.msgKeyId,
              T = R.participant,
              D = R.viewMode;
            try {
              var x,
                $,
                P = {
                  id: new (r("WAWebMsgKey"))({
                    remote: E,
                    participant: T,
                    fromMe: k,
                    id: I,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode:
                    l || a || h
                      ? o("WAWebViewMode.flow").ViewModeType
                          .HISTORY_SYNCED_CALL_LOG
                      : D,
                  callOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallResultSyncProto(
                    r("WANullthrows")(
                      m,
                      "generateCallLogFromCallSyncRecord: callResult is null from call log record sync",
                    ),
                  ),
                  callSilenceReason:
                    C != null
                      ? o("WAWebCallLogUtils").getCallSilenceReason(C)
                      : void 0,
                  isVideoCall: y != null ? y : !1,
                  callCreator: S,
                  callDuration:
                    t.duration == null
                      ? void 0
                      : (x = o("WALongInt").maybeNumber(t.duration)) != null
                        ? x
                        : void 0,
                  callParticipants: t.participants
                    .filter(function (e) {
                      return e.userJid != null;
                    })
                    .map(function (e) {
                      return {
                        participant: o("WAWebWidFactory").createWid(
                          r("WANullthrows")(e.userJid),
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
                  from: L,
                  t: o("WATimeUtils").castToUnixTime(
                    ($ = o("WALongInt").maybeNumber(b)) != null
                      ? $
                      : o("WATimeUtils").unixTime(),
                  ),
                  to: E,
                  isCallLink: h != null ? h : !1,
                  callLinkToken: d != null ? d : void 0,
                };
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(E, P, !1);
            } catch (e) {
              (a
                ? (s.message =
                    "generateCallLogFromCallHistorySyncRecord: failed to generate call log message from history sync")
                : (s.message =
                    "generateCallLogFromCallSyncRecord: failed to generate call log message from syncd"),
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    s.message,
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("nexus-voip")
                  .sendLogs(s.log));
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
