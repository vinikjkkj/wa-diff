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
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebCallsOnlyGating",
    "WAWebCmd",
    "WAWebDBMsgUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipTransferredCallRegistry",
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
      y,
      C = [],
      b = null;
    function v() {
      if (b != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: listener already registered",
              ])),
          ),
          b.promise
        );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "generateCallLogFromCallSyncRecord: setting up listener",
          ])),
      ),
        (b = new (o("WAResolvable").Resolvable)()));
      var t = b;
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
              C.length,
            ),
              yield o("WAPromiseEach").promiseEach(C, function (e, n) {
                return L(e).then(function () {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "generateCallLogFromCallSyncRecord: done histSync=",
                        "",
                      ])),
                    e.fromHistorySync,
                  ),
                    t.resolve(),
                    (C = []),
                    (b = null));
                });
              }));
          }),
        ),
        t.promise
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              yield L(e));
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
              C.push(e),
              v()
            );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            h = n.isCallLink,
            y = h === void 0 ? !1 : h,
            C = n.isVideo,
            b = n.silenceReason,
            v = n.startTime;
          if (
            !(
              u != null &&
              !i &&
              o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(u)
            )
          ) {
            var S = y || !r("isStringNullOrEmpty")(c),
              R,
              L =
                s != null && s !== ""
                  ? o("WAWebWidFactory").createWid(s)
                  : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
            try {
              R = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: L,
                callId: u,
                groupJid: r("isStringNullOrEmpty")(m)
                  ? null
                  : o("WAWebWidFactory").createWid(m),
                isCallLink: S,
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
            var E = R,
              I = E.callCreatorUserWid,
              D = E.chatId,
              x = E.fromMe,
              $ = E.msgKeyId,
              P = E.participant,
              N = E.viewMode,
              M = o("WATimeUtils").castToUnixTime(
                (t = o("WALongInt").maybeNumber(v)) != null
                  ? t
                  : o("WATimeUtils").unixTime(),
              ),
              w = new (r("WAWebMsgKey"))({
                remote: D,
                participant: P,
                fromMe: x,
                id: $,
              });
            if (!i && k(D, w, M)) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "generateCallLogFromCallSyncRecord: skip, segment of call transferred here",
                  ])),
              );
              return;
            }
            var A =
                !i &&
                !o("WATimeUtils").happenedWithin(
                  M,
                  o("WATimeUtils").MINUTE_SECONDS,
                ) &&
                (yield T(D, w, M)),
              F =
                N === o("WAWebViewMode.flow").ViewModeType.HIDDEN ||
                N ===
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_AD_HOC_GROUP_CALL;
            try {
              var O,
                B = {
                  id: w,
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode:
                    !F && (A || i || S)
                      ? o("WAWebViewMode.flow").ViewModeType
                          .HISTORY_SYNCED_CALL_LOG
                      : N,
                  callOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallResultSyncProto(
                    r("nullthrows")(
                      d,
                      "generateCallLogFromCallSyncRecord: callResult is null from call log record sync",
                    ),
                  ),
                  callSilenceReason:
                    b != null
                      ? o("WAWebCallLogUtils").getCallSilenceReason(b)
                      : void 0,
                  isVideoCall: C != null ? C : !1,
                  callCreator: L,
                  callDuration:
                    n.duration == null
                      ? void 0
                      : (O = o("WALongInt").maybeNumber(n.duration)) != null
                        ? O
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
                  from: I,
                  t: M,
                  to: D,
                  isCallLink: S,
                  callLinkToken: c != null ? c : void 0,
                };
              yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(D, B, !1);
            } catch (e) {
              i
                ? o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "generateCallLogFromCallHistorySyncRecord: failed to generate call log message from history sync",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("nexus-voip")
                    .sendLogs(l.log)
                : o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "generateCallLogFromCallSyncRecord: failed to generate call log message from syncd",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("nexus-voip")
                    .sendLogs(l.log);
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      var a,
        i = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.id,
        l = o(
          "WAWebVoipTransferredCallRegistry",
        ).getLiveTransferredCallStartTime(i),
        s = l != null ? I(i, e) : null;
      return s == null || l == null
        ? !1
        : t.fromMe &&
            !s.id.equals(t) &&
            s.id.remote.equals(e) &&
            n >= s.t &&
            n <= l;
    }
    function I(e, t) {
      var n,
        a = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.msg;
      if (a != null) return a;
      var i = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(e);
      return i == null
        ? null
        : o("WAWebMsgCollection").MsgCollection.get(
            new (r("WAWebMsgKey"))({
              remote: t,
              fromMe: o("WAWebUserPrefsMeUser").isMeAccount(
                i.rootCallCreatorWid,
              ),
              id: i.rootCallId,
            }),
          );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          try {
            var i = yield (y || (y = n("Promise"))).all([
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "generateCallLogFromCallSyncRecord: stored chat lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !1
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    l.generateCallLogFromCallSyncRecord = S;
  },
  98,
);
