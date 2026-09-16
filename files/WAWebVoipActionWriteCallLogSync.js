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
      f,
      g = [],
      h = null;
    function y() {
      if (h != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: listener already registered",
              ])),
          ),
          h.promise
        );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "generateCallLogFromCallSyncRecord: setting up listener",
          ])),
      ),
        (h = new (o("WAResolvable").Resolvable)()));
      var t = h;
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
              g.length,
            ),
              yield o("WAPromiseEach").promiseEach(g, function (e, n) {
                return v(e).then(function () {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "generateCallLogFromCallSyncRecord: done histSync=",
                        "",
                      ])),
                    e.fromHistorySync,
                  ),
                    t.resolve(),
                    (g = []),
                    (h = null));
                });
              }));
          }),
        ),
        t.promise
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              yield v(e));
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
              g.push(e),
              y()
            );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              E = L.callCreatorUserWid,
              k = L.chatId,
              I = L.fromMe,
              T = L.msgKeyId,
              D = L.participant,
              x = L.viewMode,
              $ = o("WATimeUtils").castToUnixTime(
                (t = o("WALongInt").maybeNumber(b)) != null
                  ? t
                  : o("WATimeUtils").unixTime(),
              ),
              P = !1;
            if (
              !i &&
              !o("WATimeUtils").happenedWithin(
                $,
                o("WATimeUtils").MINUTE_SECONDS,
              )
            ) {
              var N,
                M =
                  (N = o("WAWebChatCollection").ChatCollection.get(k)) == null
                    ? void 0
                    : N.t;
              P = M != null && M >= $;
            }
            var w =
              x === o("WAWebViewMode.flow").ViewModeType.HIDDEN ||
              x ===
                o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL;
            try {
              var A,
                F = {
                  id: new (r("WAWebMsgKey"))({
                    remote: k,
                    participant: D,
                    fromMe: I,
                    id: T,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode:
                    !w && (P || i || v)
                      ? o("WAWebViewMode.flow").ViewModeType
                          .HISTORY_SYNCED_CALL_LOG
                      : x,
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
                  from: E,
                  t: $,
                  to: k,
                  isCallLink: v,
                  callLinkToken: c != null ? c : void 0,
                };
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(k, F, !1);
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
        S.apply(this, arguments)
      );
    }
    l.generateCallLogFromCallSyncRecord = C;
  },
  98,
);
