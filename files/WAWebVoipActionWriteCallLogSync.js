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
    "WAWebSchemaMessage",
    "WAWebUserPrefsHistorySync",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogOrderingAdmission",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipUnresolvedPlaceholderLoadable",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
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
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x = [],
      $ = null;
    function P() {
      if ($ != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromCallSyncRecord: listener already registered",
              ])),
          ),
          $.promise
        );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "generateCallLogFromCallSyncRecord: setting up listener",
          ])),
      ),
        ($ = new (o("WAResolvable").Resolvable)()));
      var t = $;
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
              x.length,
            ),
              await o("WAPromiseEach").promiseEach(x, function (e, n) {
                return M(e).then(function () {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "generateCallLogFromCallSyncRecord: done histSync=",
                        "",
                      ])),
                    e.fromHistorySync,
                  ),
                    t.resolve(),
                    (x = []),
                    ($ = null));
                });
              }));
          },
        ),
        t.promise
      );
    }
    async function N(e) {
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
          await M(e));
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
          x.push(e),
          P()
        );
    }
    async function M(e) {
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
        C = n.isCallLink,
        b = C === void 0 ? !1 : C,
        v = n.isVideo,
        S = n.silenceReason,
        R = n.startTime;
      if (
        u != null &&
        !i &&
        o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(u)
      ) {
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] producer=sync callId=",
              " reason=already-processed",
            ])),
          u,
        ),
          o(
            "WAWebVoipUnresolvedPlaceholderLoadable",
          ).scheduleSyncedRootCallLogRepair(n, u, null));
        return;
      }
      var L = b || !r("isStringNullOrEmpty")(c),
        E,
        k =
          s != null && s !== ""
            ? o("WAWebWidFactory").createWid(s)
            : o("WAWebUserUtils").getMeDevicePnLessOrFallback_DO_NOT_USE();
      try {
        E = await o("WAWebCallLogUtils").getCallLogTargetDetails({
          callCreatorWid: k,
          callId: u,
          groupJid: r("isStringNullOrEmpty")(m)
            ? null
            : o("WAWebWidFactory").createWid(m),
          isCallLink: L,
          participants: r("compactMap")(n.participants, function (e) {
            return e.userJid != null && e.userJid !== ""
              ? o("WAWebWidFactory").createWid(e.userJid)
              : null;
          }),
        });
      } catch (e) {
        o("WALogger").LOG(
          _ || (_ = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
          l.message,
          String(e),
        );
        return;
      }
      var I = E,
        T = I.callCreatorUserWid,
        D = I.chatId,
        x = I.fromMe,
        $ = I.msgKeyId,
        P = I.participant,
        N = I.viewMode,
        M = o("WATimeUtils").castToUnixTime(
          (t = o("WALongInt").maybeNumber(R)) != null
            ? t
            : o("WATimeUtils").unixTime(),
        ),
        A = new (r("WAWebMsgKey"))({
          remote: D,
          participant: P,
          fromMe: x,
          id: $,
        });
      if (
        (i &&
          D.isRegularUser() &&
          o("WAWebLidMigrationUtils").toUserLid(D) == null) ||
        (!i && V(D, A, M))
      ) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "generateCallLogFromCallSyncRecord: skip unresolved history target or transferred segment, histSync=",
              "",
            ])),
          i,
        );
        return;
      }
      var F = await w({
        chatId: D,
        callLogMsgKey: A,
        callLogT: M,
        viewMode: N,
        fromHistorySync: i,
        isCallLinkCall: L,
      });
      !i &&
        !x &&
        !D.isGroup() &&
        !L &&
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] producer=sync callId=",
              " inputT=",
              " view=",
              " admittedView=",
              " result=",
              " offlineEnd=",
              "",
            ])),
          A.id,
          M,
          N,
          F,
          d,
          o("WAWebCmd").Cmd.isOfflineDeliveryEnd,
        );
      var O = !r("isStringNullOrEmpty")(m) && u != null;
      O &&
        (await o(
          "WAWebVoipOngoingCallCollection",
        ).WAWebVoipOngoingCallCollection.waitUntilLoaded());
      var B = null,
        W = await o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
      try {
        var H,
          G =
            O && u != null
              ? o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getByCallId(u)
              : null,
          z = o("WAWebCallLogUtils").getCallOutcomeFromCallResultSyncProto(
            r("nullthrows")(
              d,
              "generateCallLogFromCallSyncRecord: callResult is null from call log record sync",
            ),
          ),
          j = {
            id: A,
            type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
            kind: o("WAWebMsgType").MsgKind.CallLog,
            viewMode: F,
            callOutcome:
              G != null ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing : z,
            finalCallOutcome: G != null ? z : void 0,
            callSilenceReason:
              S != null
                ? o("WAWebCallLogUtils").getCallSilenceReason(S)
                : void 0,
            isVideoCall: v != null ? v : !1,
            callCreator: k,
            callDuration:
              n.duration == null
                ? void 0
                : (H = o("WALongInt").maybeNumber(n.duration)) != null
                  ? H
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
                      : o("WAWebVoipWaCallEnums").CallParticipantState.Invalid,
                };
              }),
            from: T,
            t: M,
            to: D,
            isCallLink: L,
            callLinkToken: c != null ? c : void 0,
          },
          K = await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(D, j, !1);
        B = q(K, i, A, u);
      } catch (e) {
        i
          ? o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "generateCallLogFromCallHistorySyncRecord: failed to generate call log message from history sync",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("nexus-voip")
              .sendLogs(l.log)
          : o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "generateCallLogFromCallSyncRecord: failed to generate call log message from syncd",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("nexus-voip")
              .sendLogs(l.log);
      } finally {
        W.release();
      }
      U(B, n);
    }
    async function w(e) {
      var t = e.callLogMsgKey,
        n = e.callLogT,
        r = e.chatId,
        a = e.fromHistorySync,
        i = e.isCallLinkCall,
        l = e.viewMode;
      return l === o("WAWebViewMode.flow").ViewModeType.HIDDEN ||
        l === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL
        ? l
        : a || i
          ? o("WAWebViewMode.flow").ViewModeType.HISTORY_SYNCED_CALL_LOG
          : !t.fromMe &&
              !r.isGroup() &&
              !o(
                "WAWebVoipCallLogPlaceholderTracker",
              ).isOfflineCallLogOrderingEnabled()
            ? F(r, t, n, l)
            : A(r, t, n, l);
    }
    async function A(e, t, n, r) {
      var a =
          !o("WATimeUtils").happenedWithin(
            n,
            o("WATimeUtils").MINUTE_SECONDS,
          ) && (await G(e, t, n)),
        i = a
          ? o("WAWebViewMode.flow").ViewModeType.HISTORY_SYNCED_CALL_LOG
          : r;
      return (
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] source=sync callId=",
              " reason=legacy view=",
              "",
            ])),
          t.id,
          i,
        ),
        i
      );
    }
    async function F(e, t, n, a) {
      if (!B())
        return (
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[voip-order] phase=sync-admission callId=",
                " reason=kill-switch",
              ])),
            t.id,
          ),
          A(e, t, n, a)
        );
      try {
        var i = await o(
          "WAWebVoipUnresolvedPlaceholderLoadable",
        ).loadCallLogOrderingPolicy();
        if (!B()) return A(e, t, n, a);
        var l = function (t, n, r, o) {
            return W(i.getCallLogOrdering, t, n, r, o);
          },
          s = babelHelpers.extends({}, i, {
            getStoredOrderSafeCallLogViewMode: l,
            recheckStoredCallLogOrdering: async function (t, r) {
              if (!B()) {
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip-order] phase=sync-dequeue callId=",
                      " reason=kill-switch",
                    ])),
                  t.id.id,
                );
                var e = await A(t.id.remote, t.id, n, a);
                return {
                  message: babelHelpers.extends({}, t, { viewMode: e }),
                };
              }
              if (
                t.viewMode ===
                  o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER &&
                !o(
                  "WAWebVoipCallLogPlaceholderTracker",
                ).isOfflineCallLogOrderingEnabled()
              )
                return O(t, n, a, l);
              var s = await i.recheckStoredCallLogOrdering(t, r);
              return (
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip-order] phase=sync-dequeue callId=",
                      " before=",
                      " after=",
                      "",
                    ])),
                  t.id.id,
                  t.viewMode,
                  s.message.viewMode,
                ),
                s
              );
            },
          });
        return (
          o("WAWebVoipCallLogOrderingAdmission").rememberOrderingPolicyContext(
            t,
            s,
            n,
            a,
            null,
          ),
          (await l(e, t, n, a)).viewMode
        );
      } catch (i) {
        return (
          o("WALogger")
            .WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip-order] phase=sync-admission callId=",
                  " reason=policy-error-legacy",
                ])),
              t.id,
            )
            .catching(r("getErrorSafe")(i)),
          A(e, t, n, a)
        );
      }
    }
    async function O(e, t, n, a) {
      try {
        var i = await a(e.id.remote, e.id, t, n, null);
        return (
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "[voip-order] phase=sync-dequeue callId=",
                " before=",
                " after=",
                " reason=recheck-provisional-hide",
              ])),
            e.id.id,
            e.viewMode,
            i.viewMode,
          ),
          { message: babelHelpers.extends({}, e, { viewMode: i.viewMode }) }
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip-order] phase=sync-dequeue callId=",
                  " reason=keep-provisional-hide",
                ])),
              e.id.id,
            )
            .catching(r("getErrorSafe")(t)),
          { message: e }
        );
      }
    }
    function B() {
      return !r("justknobx")._("8695");
    }
    async function W(e, t, n, r, a) {
      var i,
        l = o("WAWebSchemaMessage").getMessageTable(),
        s = await l.get(n.toString(), !1);
      if (
        (s == null ? void 0 : s.viewMode) ===
        o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
      )
        return (
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[voip-order] phase=sync-check callId=",
                " stored=true storedT=",
                " reason=durable-hide",
              ])),
            n.id,
            s == null ? void 0 : s.t,
          ),
          { viewMode: s.viewMode }
        );
      var u = z(n);
      if (u || j(s == null ? void 0 : s.viewMode))
        return (
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[voip-order] phase=sync-check callId=",
                " stored=",
                " storedT=",
                " reason=",
                " view=",
                "",
              ])),
            n.id,
            s != null,
            s == null ? void 0 : s.t,
            u ? "live-join" : "reserved-slot",
            a,
          ),
          { viewMode: a }
        );
      var c = (i = s == null ? void 0 : s.t) != null ? i : r,
        d = await e(l, t, s == null ? void 0 : s.internalId, c),
        m = d.isOutOfOrder,
        p = d.predecessorT,
        _ = d.scanLimited,
        f = d.successorT;
      return (
        o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] phase=sync-check callId=",
              " stored=",
              " comparedT=",
              " predecessorT=",
              " successorT=",
              " limited=",
              " reason=",
              "",
            ])),
          n.id,
          s != null,
          c,
          p,
          f,
          _,
          m ? "new-hide" : "no-inversion-found",
        ),
        {
          viewMode: m
            ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
            : a,
        }
      );
    }
    function q(e, t, n, r) {
      return e != null && !t && n.id === r ? n : null;
    }
    function U(e, t) {
      e != null &&
        o(
          "WAWebVoipUnresolvedPlaceholderLoadable",
        ).scheduleSyncedRootCallLogRepair(t, e.id, e);
    }
    function V(e, t, n) {
      var a,
        i = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.id,
        l = o(
          "WAWebVoipTransferredCallRegistry",
        ).getLiveTransferredCallStartTime(i),
        s = l != null ? H(i, e) : null;
      return s == null || l == null
        ? !1
        : t.fromMe &&
            !s.id.equals(t) &&
            s.id.remote.equals(e) &&
            n >= s.t &&
            n <= l;
    }
    function H(e, t) {
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
    async function G(e, t, n) {
      try {
        var a = await Promise.all([
            o("WAWebApiChatCommon").getChatRecord(e),
            o("WAWebDBMsgUtils").getMsgByMsgKey(t),
          ]),
          i = a[0],
          l = a[1];
        if (z(t) || j(l == null ? void 0 : l.viewMode)) return !1;
        var s = i == null ? void 0 : i.t;
        return s != null && s >= n;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "generateCallLogFromCallSyncRecord: stored chat lookup failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function z(e) {
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
    function j(e) {
      return (
        o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(e) ||
        e ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_UNCOUNTED
      );
    }
    l.generateCallLogFromCallSyncRecord = N;
  },
  98,
);
