__d(
  "WAWebVoipActionWriteCallLogSync",
  [
    "WALogger",
    "WALongInt",
    "WAPromiseEach",
    "WAResolvable",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebCallsOnlyGating",
    "WAWebCmd",
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsHistorySync",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
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
          async function () {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "generateCallLogFromCallSyncRecord: listener called, pending=",
                  "",
                ])),
              y.length,
            ),
              await o("WAPromiseEach").promiseEach(y, function (e, n) {
                return S(e).then(function () {
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
          },
        ),
        t.promise
      );
    }
    async function v(e) {
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
          await S(e));
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
    }
    async function S(e) {
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
          L,
          k =
            s != null && s !== ""
              ? o("WAWebWidFactory").createWid(s)
              : o("WAWebUserUtils").getMeDevicePnLessOrFallback_DO_NOT_USE();
        try {
          L = await o("WAWebCallLogUtils").getCallLogTargetDetails({
            callCreatorWid: k,
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
            p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
            l.message,
            String(e),
          );
          return;
        }
        var I = L,
          T = I.callCreatorUserWid,
          D = I.chatId,
          x = I.fromMe,
          $ = I.msgKeyId,
          P = I.participant,
          N = I.viewMode,
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
        if (
          (i &&
            D.isRegularUser() &&
            o("WAWebLidMigrationUtils").toUserLid(D) == null) ||
          (!i && R(D, w, M))
        ) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: skip unresolved history target or transferred segment, histSync=",
                "",
              ])),
            i,
          );
          return;
        }
        var A =
            !i &&
            !o("WATimeUtils").happenedWithin(
              M,
              o("WATimeUtils").MINUTE_SECONDS,
            ) &&
            (await E(D, w, M)),
          F =
            N === o("WAWebViewMode.flow").ViewModeType.HIDDEN ||
            N ===
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL,
          O = !r("isStringNullOrEmpty")(m) && u != null;
        O &&
          (await o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.waitUntilLoaded());
        var B = await o(
          "WAWebVoipCallLogWriteMutex",
        ).WACallLogWriteMutex.acquire();
        try {
          var W,
            q =
              O && u != null
                ? o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.getByCallId(u)
                : null,
            U = o("WAWebCallLogUtils").getCallOutcomeFromCallResultSyncProto(
              r("nullthrows")(
                d,
                "generateCallLogFromCallSyncRecord: callResult is null from call log record sync",
              ),
            ),
            V = {
              id: w,
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              kind: o("WAWebMsgType").MsgKind.CallLog,
              viewMode:
                !F && (A || i || S)
                  ? o("WAWebViewMode.flow").ViewModeType.HISTORY_SYNCED_CALL_LOG
                  : N,
              callOutcome:
                q != null
                  ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
                  : U,
              finalCallOutcome: q != null ? U : void 0,
              callSilenceReason:
                b != null
                  ? o("WAWebCallLogUtils").getCallSilenceReason(b)
                  : void 0,
              isVideoCall: C != null ? C : !1,
              callCreator: k,
              callDuration:
                n.duration == null
                  ? void 0
                  : (W = o("WALongInt").maybeNumber(n.duration)) != null
                    ? W
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
              from: T,
              t: M,
              to: D,
              isCallLink: S,
              callLinkToken: c != null ? c : void 0,
            };
          await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(D, V, !1);
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
        } finally {
          B.release();
        }
      }
    }
    function R(e, t, n) {
      var a,
        i = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.id,
        l = o(
          "WAWebVoipTransferredCallRegistry",
        ).getLiveTransferredCallStartTime(i),
        s = l != null ? L(i, e) : null;
      return s == null || l == null
        ? !1
        : t.fromMe &&
            !s.id.equals(t) &&
            s.id.remote.equals(e) &&
            n >= s.t &&
            n <= l;
    }
    function L(e, t) {
      var n,
        a = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.msg;
      if (a != null) return a;
      var i = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(e);
      return i == null
        ? null
        : o("WAWebMsgCollection").MsgCollection.get(
            new (r("WAWebMsgKey"))({
              remote: t,
              fromMe: o("WAWebUserUtils").isMeAccount(i.rootCallCreatorWid),
              id: i.rootCallId,
            }),
          );
    }
    async function E(e, t, n) {
      try {
        var a = await Promise.all([
            o("WAWebApiChatCommon").getChatRecord(e),
            o("WAWebDBMsgUtils").getMsgByMsgKey(t),
          ]),
          i = a[0],
          l = a[1];
        if (k(t) || I(l == null ? void 0 : l.viewMode)) return !1;
        var s = i == null ? void 0 : i.t;
        return s != null && s >= n;
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
    }
    function k(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ) !== !0
      )
        return !1;
      var t = o("WAWebMsgCollection").MsgCollection.get(e);
      return (
        t != null &&
        t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
        t.selfOtherDeviceConnected === !0
      );
    }
    function I(e) {
      return (
        o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(e) ||
        e ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_UNCOUNTED
      );
    }
    l.generateCallLogFromCallSyncRecord = v;
  },
  98,
);
