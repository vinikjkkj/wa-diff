__d(
  "WAWebVoipActionWriteCallLogSync",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAPromiseEach",
    "WAResolvable",
    "WATimeUtils",
    "WAWebApiChatCommon",
    "WAWebCallLogUtils",
    "WAWebCallsOnlyGating",
    "WAWebCmd",
    "WAWebDBMsgUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
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
      f,
      g,
      h,
      y = [],
      C = null;
    function b() {
      if (C != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: listener already registered",
              ])),
          ),
          C.promise
        );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "generateCallLogFromCallSyncRecord: setting up listener",
          ])),
      ),
        (C = new (o("WAResolvable").Resolvable)()));
      var t = C;
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
              y.length,
            ),
              yield o("WAPromiseEach").promiseEach(y, function (e, n) {
                return R(e).then(function () {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "generateCallLogFromCallSyncRecord: done histSync=",
                        "",
                      ])),
                    e.fromHistorySync,
                  ),
                    t.resolve(),
                    (y = []),
                    (C = null));
                });
              }));
          }),
        ),
        t.promise
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              yield R(e));
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
              y.push(e),
              b()
            );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            g = n.isCallLink,
            h = g === void 0 ? !1 : g,
            y = n.isVideo,
            C = n.silenceReason,
            b = n.startTime;
          if (
            !(
              u != null &&
              !i &&
              o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(u)
            )
          ) {
            var v = h || !r("isStringNullOrEmpty")(c),
              S,
              R =
                s != null && s !== ""
                  ? o("WAWebWidFactory").createWid(s)
                  : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
            try {
              S = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: R,
                callId: u,
                groupJid: r("isStringNullOrEmpty")(m)
                  ? null
                  : o("WAWebWidFactory").createWid(m),
                isCallLink: v,
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
            var L = S,
              k = L.callCreatorUserWid,
              I = L.chatId,
              T = L.fromMe,
              D = L.msgKeyId,
              x = L.participant,
              $ = L.viewMode,
              P = o("WATimeUtils").castToUnixTime(
                (t = o("WALongInt").maybeNumber(b)) != null
                  ? t
                  : o("WATimeUtils").unixTime(),
              ),
              N = new (r("WAWebMsgKey"))({
                remote: I,
                participant: x,
                fromMe: T,
                id: D,
              }),
              M =
                !i &&
                !o("WATimeUtils").happenedWithin(
                  P,
                  o("WATimeUtils").MINUTE_SECONDS,
                ) &&
                (yield E(I, N, P)),
              w =
                $ === o("WAWebViewMode.flow").ViewModeType.HIDDEN ||
                $ ===
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_AD_HOC_GROUP_CALL;
            try {
              var A,
                F = {
                  id: N,
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode:
                    !w && (M || i || v)
                      ? o("WAWebViewMode.flow").ViewModeType
                          .HISTORY_SYNCED_CALL_LOG
                      : $,
                  callOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallResultSyncProto(
                    r("nullthrows")(
                      d,
                      "generateCallLogFromCallSyncRecord: callResult is null from call log record sync",
                    ),
                  ),
                  callSilenceReason:
                    C != null
                      ? o("WAWebCallLogUtils").getCallSilenceReason(C)
                      : void 0,
                  isVideoCall: y != null ? y : !1,
                  callCreator: R,
                  callDuration:
                    n.duration == null
                      ? void 0
                      : (A = o("WALongInt").maybeNumber(n.duration)) != null
                        ? A
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
                  from: k,
                  t: P,
                  to: I,
                  isCallLink: v,
                  callLinkToken: c != null ? c : void 0,
                };
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(I, F, !1);
            } catch (e) {
              i
                ? o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "generateCallLogFromCallHistorySyncRecord: failed to generate call log message from history sync",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("nexus-voip")
                    .sendLogs(l.log)
                : o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "generateCallLogFromCallSyncRecord: failed to generate call log message from syncd",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("nexus-voip")
                    .sendLogs(l.log);
            }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          try {
            var i = yield (h || (h = n("Promise"))).all([
                o("WAWebApiChatCommon").getChatRecord(e),
                o("WAWebDBMsgUtils").getMsgByMsgKey(t),
              ]),
              l = i[0],
              s = i[1];
            if (
              o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(
                s == null ? void 0 : s.viewMode,
              )
            )
              return !1;
            var u = l == null ? void 0 : l.t;
            return u != null && u >= a;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "generateCallLogFromCallSyncRecord: stored chat lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !1
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    l.generateCallLogFromCallSyncRecord = v;
  },
  98,
);
