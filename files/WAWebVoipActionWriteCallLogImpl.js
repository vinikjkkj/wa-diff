__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
    "TaskSchedulerError",
    "WALogger",
    "WAResolvable",
    "WAWebCallLogMsgData.flow",
    "WAWebChatGetExistingBridge",
    "WAWebCmd",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessageOrphans",
    "WAWebFindChatAction",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgChatAction",
    "WAWebUpdateMessageUIAction",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipActionSurfaceCallLogChat",
    "WAWebVoipActivityTracker",
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipCallLogMessageTarget",
    "WAWebVoipCallLogOrderingAdmission",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipLiveRootCallLogState",
    "WAWebVoipPendingCallLogOutcome",
    "WAWebVoipPhaseTracker",
    "WAWebVoipUnresolvedPlaceholderLoadable",
    "getErrorSafe",
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
      x,
      $ = new Set(),
      P = 100,
      N = new Map(),
      M = new Map();
    function w(e) {
      if (!$.has(e)) {
        if ($.size >= P) {
          var t = $.values().next().value;
          t != null && $.delete(t);
        }
        $.add(e);
      }
    }
    function A(e) {
      return $.has(e);
    }
    async function F(t) {
      var n = t.chatId,
        a = t.isNonTerminalCall,
        i = t.msgKey,
        l = t.notificationViewMode,
        s = t.preparedOrderingPolicy,
        u = t.t,
        c = t.viewMode;
      if (
        c !== o("WAWebViewMode.flow").ViewModeType.VISIBLE ||
        i.fromMe ||
        n.isGroup() ||
        o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() ||
        a === !0
      )
        return c;
      o("WAWebVoipCallLogOrderingAdmission").rememberOrderingPolicyContext(
        i,
        s == null ? void 0 : s.policy,
        u,
        c,
        l,
      );
      var d = o("WAWebMsgCollection").MsgCollection.get(i);
      if (d != null) return B(d.viewMode, c);
      try {
        var m = await O(n, i, u, c, l, s);
        return (
          o(
            "WAWebVoipCallLogOrderingAdmission",
          ).rememberOrderingHiddenOriginalViewMode(
            i,
            m.originalNotificationViewMode,
          ),
          m.viewMode
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] call log order check failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          c
        );
      }
    }
    async function O(e, t, n, r, a, i) {
      var l =
        i != null
          ? i.policy
          : await o(
              "WAWebVoipUnresolvedPlaceholderLoadable",
            ).loadCallLogOrderingPolicy();
      return (
        o("WAWebVoipCallLogOrderingAdmission").rememberOrderingPolicyContext(
          t,
          l,
          n,
          r,
          a,
        ),
        l != null
          ? l.getStoredOrderSafeCallLogViewMode(e, t, n, r, a)
          : { viewMode: r }
      );
    }
    function B(e, t) {
      return e === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
        ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
        : t;
    }
    async function W(e) {
      var t = e.callOutcome,
        n = e.chatId,
        a = e.expectedPendingOutcome,
        i = e.msgKey,
        l = e.screenedElsewhere,
        _ = o("WAWebVoipPhaseTracker").beginPostCallWork(),
        f = Date.now();
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
      );
      try {
        await o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: n,
            isOffline: !1,
            msgCategory: null,
            skipOfflineWait: !0,
            action: async function () {
              var e,
                _,
                g = Date.now() - f;
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log outcome update dequeued after ",
                    "ms",
                  ])),
                g,
              ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_QUEUED,
                ));
              var h = o("WAWebMsgCollection").MsgCollection.get(i),
                y = _e(i),
                C = y
                  ? null
                  : (e = h == null ? void 0 : h.toJSON()) != null
                    ? e
                    : await o("WAWebDBMsgUtils").getMsgByMsgKey(i);
              if (C == null) {
                if (a != null) {
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] deferred call log outcome skipped; row still missing for ",
                        "",
                      ])),
                    i.id,
                  ),
                    o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .ICCE_WRITE_CALL_LOG_COMPLETE,
                    ));
                  return;
                }
                (o(
                  "WAWebVoipPendingCallLogOutcome",
                ).rememberPendingCallLogOutcome(i, t, {
                  keepAnyOutcome: y,
                  screenedElsewhere: l,
                })
                  ? o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log outcome deferred; no row for ",
                          "",
                        ])),
                      i.id,
                    )
                  : o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log outcome update skipped; no row for ",
                          "",
                        ])),
                      i.id,
                    ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_COMPLETE,
                  ));
                return;
              }
              if (
                h == null
                  ? C.kind !== "callLog"
                  : h.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG
              ) {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log outcome update skipped; row is not a call log for ",
                      "",
                    ])),
                  i.id,
                ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_COMPLETE,
                  ));
                return;
              }
              var b = o(
                "WAWebVoipPendingCallLogOutcome",
              ).prepareCallLogOutcomeUpdate({
                existingCallOutcome:
                  (_ = h == null ? void 0 : h.callOutcome) != null
                    ? _
                    : C.kind === "callLog"
                      ? C.callOutcome
                      : null,
                expectedPendingOutcome: a,
                msgKey: i,
                requestedCallOutcome: t,
              });
              if (b.type === "skip") {
                (b.reason === "consumed" &&
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] deferred call log outcome skipped; token was consumed for ",
                        "",
                      ])),
                    i.id,
                  ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_COMPLETE,
                  ));
                return;
              }
              var v = l != null ? l : a == null ? void 0 : a.screenedElsewhere,
                S = babelHelpers.extends(
                  {},
                  C,
                  { kind: "callLog", callOutcome: b.callOutcome },
                  v != null ? { screenedElsewhere: v } : null,
                );
              (h != null
                ? await Promise.all([
                    h.applyUpdate(S),
                    o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                      chatId: n,
                      newMsg: S,
                      handleSingleMsgOrigin: "voipNotification",
                      messageOverwriteOption: o("WAWebHandleMsgTypes")
                        .MessageOverwriteOption.VOIP_CALL_LOG,
                    }),
                  ])
                : await o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: n,
                    newMsg: S,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes")
                      .MessageOverwriteOption.VOIP_CALL_LOG,
                  }),
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                  i,
                  b.pendingOutcome,
                ),
                r("WAWebVoipCallsTabPanelManager").trigger(
                  "onWriteCallLogMessage",
                  h,
                ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_COMPLETE,
                ));
            },
          })
          .catch(function (e) {
            return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
              e,
              "voip_call_log_outcome",
            );
          });
      } finally {
        o("WAWebVoipPhaseTracker").endPostCallWork(_);
      }
    }
    async function q(e) {
      var t = e.chatId,
        n = e.msgKey,
        r = e.update,
        a = o("WAWebVoipPhaseTracker").beginPostCallWork();
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
      );
      try {
        await o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: t,
            isOffline: !1,
            msgCategory: null,
            skipOfflineWait: !0,
            action: async function () {
              var e;
              ((e = o("WAWebVoipActivityTracker")).trackUiActivity(
                e.VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED,
              ),
                await U({ chatId: t, msgKey: n, update: r }),
                e.trackUiActivity(
                  e.VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE,
                ));
            },
          })
          .catch(function (e) {
            return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
              e,
              "voip_call_log_outcome",
            );
          });
      } finally {
        o("WAWebVoipPhaseTracker").endPostCallWork(a);
      }
    }
    async function U(e) {
      var t,
        n = e.chatId,
        a = e.msgKey,
        i = e.update;
      if (_e(a)) {
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] ongoing call log update skipped; placeholder awaiting merge for ",
              "",
            ])),
          a.id,
        );
        return;
      }
      var l = o("WAWebMsgCollection").MsgCollection.get(a),
        s =
          (t = l == null ? void 0 : l.toJSON()) != null
            ? t
            : await o("WAWebDBMsgUtils").getMsgByMsgKey(a);
      if (s == null || !H(l, s)) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] ongoing call log update skipped for ",
              "",
            ])),
          a.id,
        );
        return;
      }
      var u = babelHelpers.extends({}, s, { kind: "callLog" }, i);
      (await Promise.all([
        l == null ? void 0 : l.applyUpdate(u),
        o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: n,
          newMsg: u,
          handleSingleMsgOrigin: "voipNotification",
          messageOverwriteOption: o("WAWebHandleMsgTypes")
            .MessageOverwriteOption.VOIP_CALL_LOG,
        }),
      ]),
        r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", l));
    }
    async function V(e) {
      return (
        o("WAWebMsgCollection").MsgCollection.get(e) != null ||
        (await o("WAWebDBMsgUtils").getMsgByMsgKey(e)) != null
      );
    }
    function H(e, t) {
      return e != null
        ? e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            e.callOutcome ===
              o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
            e.finalCallOutcome !==
              o("WAWebCallLogMsgData.flow").CallOutcome.Completed
        : t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            t.callOutcome ===
              o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
            t.finalCallOutcome !==
              o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
    }
    async function G(e, t, n, a, i, l) {
      (a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1));
      var s = e,
        u = o(
          "WAWebVoipCallLogOrderingAdmission",
        ).takeOrderingHiddenOriginalViewMode(t),
        c = o("WAWebVoipCallLogOrderingAdmission").takeOrderingPolicyContext(t),
        d = null,
        m = ue(t),
        p = o("WAWebVoipPhaseTracker").beginPostCallWork();
      try {
        var _,
          f = await o("WAWebChatGetExistingBridge").getExisting(s);
        if (
          (f && f.ephemeralDuration != null
            ? (_ = babelHelpers.extends({}, t, {
                ephemeralDuration: f.ephemeralDuration,
              }))
            : (_ = t),
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
          ),
          m != null && (await m.waitForPrevious),
          await fe(_, l))
        )
          return null;
        if ((m == null || m.release(), a && !n)) {
          var v = o(
              "WAWebVoipPendingCallLogOutcome",
            ).mergePendingCallLogOutcome(_),
            S = v.callLogMessage,
            R = v.pendingOutcome,
            L =
              f != null
                ? f
                : (
                    await o("WAWebFindChatAction").findOrCreateLatestChat(
                      s,
                      "voipCallLog",
                      {
                        buildFirstIncomingMsg: function (t) {
                          return o(
                            "WAWebVoipCallLogMessageTarget",
                          ).withCallLogChatId(S, t);
                        },
                      },
                    )
                  ).chat;
          ((s = L.id),
            (_ = o("WAWebVoipCallLogMessageTarget").withCallLogChatId(S, s)));
          var E = o("WAWebMsgCollection").MsgCollection.get(_.id);
          if (!E) {
            var k = await z(_, c);
            u != null || (u = k.originalViewMode);
            var I = await o(
                "WAWebVoipLiveRootCallLogState",
              ).withNativeLiveRootViewMode(await ee(k.message)),
              T = o("WAWebMsgCollection").MsgCollection.add(
                babelHelpers.extends({}, I),
              )[0];
            if (T)
              return (
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                  S.id,
                  R,
                ),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log in-mem, async IDB persist scheduled",
                    ])),
                ),
                ce({
                  callLogMessage: I,
                  chat: L,
                  msg: T,
                  orderingHiddenOriginalViewMode: u,
                  orderingWriteContext: c,
                }),
                T
              );
          }
        }
        var D = new (o("WAResolvable").Resolvable)(),
          x = Date.now();
        o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: s,
            isOffline: n,
            msgCategory: null,
            skipOfflineWait: !0,
            action: async function () {
              var e = Date.now() - x;
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip-order] q ",
                    " ms=",
                    " off=",
                    " end=",
                    "",
                  ])),
                _.id.id,
                e,
                n,
                o("WAWebCmd").Cmd.isOfflineDeliveryEnd,
              ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_QUEUED,
                ));
              var t = P(_)
                .then(function (t) {
                  var n = Date.now() - x,
                    r = n - e;
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip-order] done ",
                        " w=",
                        " all=",
                        " t=",
                        " v=",
                        " o=",
                        "",
                      ])),
                    _.id.id,
                    r,
                    n,
                    t == null ? void 0 : t.t,
                    t == null ? void 0 : t.viewMode,
                    t == null ? void 0 : t.callOutcome,
                  ),
                    o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .ICCE_WRITE_CALL_LOG_COMPLETE,
                    ),
                    D.resolve(t));
                })
                .catch(function (e) {
                  (o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip-order] fail ",
                          "",
                        ])),
                      _.id.id,
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-callog-write-failed"),
                    D.resolve(null));
                });
              return n ? Promise.resolve() : t;
            },
          })
          .catch(function (e) {
            return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
              e,
              "voip_call_log_write",
            );
          });
        var $ = await D.promise;
        return (K(d), $);
      } finally {
        (m == null || m.release(),
          o("WAWebVoipPhaseTracker").endPostCallWork(p));
      }
      async function P(e) {
        n || (await o("WAWebReleaseToEventLoop").releaseToEventLoop());
        var t = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(
            e,
          ),
          a = await o(
            "WAWebVoipBackendCallLogTargetResolver",
          ).resolveCallLogMessageTarget(t.callLogMessage),
          s = a.id.remote;
        if (l && (await V(a.id)))
          return (
            await o(
              "WAWebVoipLiveRootCallLogState",
            ).reactivateExistingNativeRoot(a),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] call log create skipped; row exists for ",
                  "",
                ])),
              a.id.id,
            ),
            null
          );
        var m = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(
            a,
          ),
          p = m.callLogMessage,
          _ = m.pendingOutcome;
        if (n)
          return (
            await X({ callLogMessage: p, chatId: s, pendingOutcome: _ }),
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              e.id,
              t.pendingOutcome,
            ),
            r("WAWebVoipCallsTabPanelManager").trigger(
              "onWriteCallLogMessage",
              null,
            ),
            null
          );
        var f = await Z({
            callLogMessage: p,
            chatId: s,
            pendingOutcome: _,
            skipIdbPersistForUpdate: i,
            orderingWriteContext: c,
          }),
          g = f.msg,
          h = f.originalViewMode,
          y = f.surface;
        if (
          (u != null || (u = h),
          (d = j(g, y, u)),
          g != null &&
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              e.id,
              t.pendingOutcome,
            ),
          y === "promoted" || (y === "created" && !i))
        ) {
          var C, v;
          await o(
            "WAWebVoipActionSurfaceCallLogChat",
          ).maybeSurfaceCallLogChatInChatList(
            (C = g == null ? void 0 : g.id.remote) != null ? C : s,
            (v = g == null ? void 0 : g.toJSON()) != null ? v : p,
          );
        }
        return (
          r("WAWebVoipCallsTabPanelManager").trigger(
            "onWriteCallLogMessage",
            g,
          ),
          g
        );
      }
    }
    async function z(e, t) {
      return t == null
        ? { message: e }
        : t.policy.recheckStoredCallLogOrdering(e, t);
    }
    function j(e, t, n) {
      return e == null || n == null || t !== "created"
        ? null
        : e.viewMode ===
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER &&
            e.isNewlyStored === !0 &&
            o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.NOTIFICATION,
              n,
            ) &&
            !o(
              "WAWebVoipCallLogPlaceholderTracker",
            ).isOfflineCallLogOrderingEnabled()
          ? { msg: e, originalViewMode: n }
          : null;
    }
    function K(e) {
      e != null &&
        o(
          "WAWebVoipUnresolvedPlaceholderLoadable",
        ).scheduleOrderingHiddenCallLogAlertLoadable(e);
    }
    async function Q(e, t) {
      var n = ue(e);
      try {
        return (await (n == null ? void 0 : n.waitForPrevious), await t());
      } finally {
        n == null || n.release();
      }
    }
    async function X(e) {
      var t = e.callLogMessage,
        n = e.chatId,
        r = e.pendingOutcome;
      (await Y(n, t, !1).stored,
        o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(t.id, r),
        await J(n, t));
    }
    function Y(e, t, n) {
      var a = o("WAWebCmd").Cmd.isMainStreamReadyMd
          ? o("WAWebUpdateMessageUIAction")
              .updateUI({ chatId: e, msg: t })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] call log UI insert failed for callId=",
                        "",
                      ])),
                    t.id.id,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-call-log-ui-insert-fail");
              })
          : Promise.resolve(),
        i = o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages([{ msg: t }], n);
      return { shown: a, stored: i };
    }
    async function J(e, t) {
      var n = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(t),
        a = n.callLogMessage,
        i = n.pendingOutcome;
      if (i != null) {
        if (a === t) {
          o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
            t.id,
            i,
          );
          return;
        }
        try {
          await W({
            callOutcome: i.callOutcome,
            chatId: e,
            expectedPendingOutcome: i,
            msgKey: t.id,
          });
        } catch (e) {
          o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] deferred call log outcome replay failed for callId=",
                  "",
                ])),
              t.id.id,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-deferred-outcome-replay-fail");
        }
      }
    }
    async function Z(e) {
      var t = e.callLogMessage,
        n = e.chatId,
        r = e.orderingWriteContext,
        a = e.pendingOutcome,
        i = e.skipIdbPersistForUpdate,
        l = await z(t, r),
        s = l.message,
        u = o("WAWebMsgCollection").MsgCollection.get(s.id);
      if (u == null) {
        var c = await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(
          n,
          await o("WAWebVoipLiveRootCallLogState").withNativeLiveRootViewMode(
            await ee(l.message),
          ),
        );
        return (
          c != null &&
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              s.id,
              a,
            ),
          {
            msg: c,
            surface: c != null ? "created" : "none",
            originalViewMode: l.originalViewMode,
          }
        );
      }
      var d =
          u.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME ||
          u.viewMode ===
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_PROMOTED,
        m = se(d, u.viewMode, s.viewMode),
        p = ie(u.viewMode, s.viewMode),
        _ = await o("WAWebVoipLiveRootCallLogState").withNativeLiveRootViewMode(
          te(d, u, s),
        );
      le(d, u.viewMode, _.viewMode);
      var f = ge(
        u.t,
        o("WAWebVoipLiveRootCallLogState").preserveCallParticipants(
          u.callParticipants,
          ye(u.screenedElsewhere, he(u.callOutcome, _)),
        ),
      );
      return (
        i
          ? await u.applyUpdate(f)
          : await Promise.all([
              u.applyUpdate(f),
              await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: n,
                newMsg: f,
                handleSingleMsgOrigin: "voipNotification",
                messageOverwriteOption: o("WAWebHandleMsgTypes")
                  .MessageOverwriteOption.VOIP_CALL_LOG,
              }),
            ]),
        o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(s.id, a),
        p &&
          o(
            "WAWebVoipUnresolvedPlaceholderLoadable",
          ).countShownPlaceholderAgainLoadable(s.id),
        { msg: u, surface: m ? "promoted" : "none" }
      );
    }
    async function ee(e) {
      if (
        e.id.remote.isGroup() ||
        e.viewMode ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
      )
        return e;
      var t = await o("WAWebDBMsgUtils").getMsgByMsgKey(e.id);
      return t == null ||
        t.viewMode !==
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER ||
        re(null, t, e)
        ? e
        : babelHelpers.extends({}, e, {
            viewMode:
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER,
          });
    }
    function te(e, t, n) {
      if (ne(t, n))
        return babelHelpers.extends({}, n, {
          viewMode: o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER,
        });
      var r = oe(e, t.viewMode, n.viewMode);
      return r === n.viewMode
        ? n
        : babelHelpers.extends({}, n, { viewMode: r });
    }
    function ne(e, t) {
      return (
        e.viewMode ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER &&
        !re(e, t, t)
      );
    }
    function re(e, t, n) {
      return (
        n.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          n.viewMode,
        ) &&
        H(e, t)
      );
    }
    function oe(e, t, n) {
      return e && n === o("WAWebViewMode.flow").ViewModeType.VISIBLE
        ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED
        : t != null &&
            ae(t) &&
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              n,
            )
          ? t
          : n;
    }
    function ae(e) {
      return (
        e ===
          o("WAWebViewMode.flow").ViewModeType
            .CALL_LOG_OFFLINE_RESUME_UNCOUNTED ||
        (e === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
          o(
            "WAWebVoipCallLogPlaceholderTracker",
          ).isOfflineCallLogOrderingEnabled())
      );
    }
    function ie(e, t) {
      return (
        e ===
          o("WAWebViewMode.flow").ViewModeType
            .CALL_LOG_OFFLINE_RESUME_UNCOUNTED &&
        t === o("WAWebViewMode.flow").ViewModeType.VISIBLE
      );
    }
    function le(e, t, n) {
      e &&
        n !== o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
        !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          n,
        ) &&
        o("WALogger")
          .WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[writeVoipCallLogMessageImpl] placeholder ",
                " -> non-VISIBLE ",
                "",
              ])),
            String(t),
            n,
          )
          .tags("non-sad")
          .sendLogs("voip-callog-promote-non-visible");
    }
    function se(e, t, n) {
      return (
        n === o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
        (e ||
          t ===
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_UNCOUNTED)
      );
    }
    function ue(e) {
      var t, n;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return null;
      var r = (t = e.id) == null ? void 0 : t.id;
      if (r == null) return null;
      var a = (n = N.get(r)) != null ? n : Promise.resolve(),
        i = new (o("WAResolvable").Resolvable)(),
        l = a.then(function () {
          return i.promise;
        });
      N.set(r, l);
      var s = !1;
      return {
        waitForPrevious: a,
        release: function () {
          s ||
            ((s = !0),
            i.resolve(),
            l.then(function () {
              N.get(r) === l && N.delete(r);
            }));
        },
      };
    }
    async function ce(e) {
      var t = e.callLogMessage,
        n = e.chat,
        a = e.msg,
        i = e.orderingHiddenOriginalViewMode,
        l = e.orderingWriteContext,
        s = i,
        u = n.id,
        c = Date.now(),
        d = null,
        m = me(a);
      o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: u,
          isOffline: !1,
          msgCategory: null,
          skipOfflineWait: !0,
          action: m.run(async function () {
            var e = Date.now() - c;
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip-order] eager-q ",
                  " ms=",
                  " end=",
                  "",
                ])),
              a.id.id,
              e,
              o("WAWebCmd").Cmd.isOfflineDeliveryEnd,
            ),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG_QUEUED,
              ),
              await o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var i = t;
            try {
              var m,
                p = await z(t, l);
              (s != null || (s = p.originalViewMode),
                (i = await o(
                  "WAWebVoipLiveRootCallLogState",
                ).withNativeLiveRootViewMode(await ee(p.message))),
                (m = o("WAWebMsgCollection").MsgCollection.get(t.id)) == null ||
                  m.set({ viewMode: i.viewMode }),
                await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg(
                  {
                    chatId: u,
                    newMsg: i,
                    handleSingleMsgOrigin: "voipNotification",
                  },
                ),
                await o(
                  "WAWebVoipLiveRootCallLogState",
                ).recoverSwitchEntryStateFromRow(a),
                n.msgs.add(a),
                (d = j(a, "created", s)),
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip-order] phase=eager-handled ",
                      " modelT=",
                      " modelView=",
                      " modelOutcome=",
                      "",
                    ])),
                  a.id.id,
                  a.t,
                  a.viewMode,
                  a.callOutcome,
                ));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip-order] eager-fail ",
                      "",
                    ])),
                  a.id.id,
                )
                .catching(r("getErrorSafe")(e))
                .tags("voip")
                .sendLogs("voip: persistCallLogAsync"),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_FAILED,
                ),
                await o(
                  "WAWebVoipLiveRootCallLogState",
                ).recoverSwitchEntryStateFromRow(a));
              return;
            }
            (await o(
              "WAWebVoipActionSurfaceCallLogChat",
            ).maybeSurfaceCallLogChatInChatList(u, i),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG_COMPLETE,
              ),
              r("WAWebVoipCallsTabPanelManager").trigger(
                "onWriteCallLogMessage",
                a,
              ),
              K(d));
          }),
        })
        .catch(m.handleQueueError);
    }
    function de(e) {
      var t = M.get(e.id);
      return t == null
        ? Promise.resolve()
        : t.then(function () {
            return de(e);
          });
    }
    function me(e) {
      var t = e.id.id,
        n = new (o("WAResolvable").Resolvable)(),
        r = "queued",
        a = Promise.all([M.get(t), n.promise]);
      return (
        M.set(t, a),
        a.then(function () {
          M.get(t) === a && M.delete(t);
        }),
        {
          run: function (t) {
            return async function () {
              if (r !== "recovered") {
                r = "started";
                try {
                  await t();
                } finally {
                  n.resolve();
                }
              }
            };
          },
          handleQueueError: function (a) {
            (r === "queued" &&
              !(
                a instanceof o("TaskSchedulerError").TaskSchedulerTimeoutError
              ) &&
              ((r = "recovered"),
              o("WAWebVoipLiveRootCallLogState")
                .recoverSwitchEntryStateFromRow(e)
                .then(function () {
                  return n.resolve();
                })),
              pe(a));
          },
        }
      );
    }
    function pe(e) {
      try {
        o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
          e,
          "voip_call_log_persist",
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call log IDB persist not queued",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("voip")
          .sendLogs("voip: persistCallLogAsync");
      }
    }
    function _e(e) {
      return (
        o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(e.id)
      );
    }
    async function fe(e, t) {
      var n;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return !1;
      var a = (n = e.id) == null ? void 0 : n.id;
      if (
        a == null ||
        !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(a)
      )
        return !1;
      if (t)
        return (
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call log create skipped; placeholder pending for callId=",
                "",
              ])),
            a,
          ),
          !0
        );
      try {
        var i = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(
            e,
          ),
          l = await o(
            "WAWebVoipBackendCallLogTargetResolver",
          ).resolveCallLogMessageTarget(i.callLogMessage),
          s = null,
          u = null,
          c = null;
        if (l.kind === "callLog") {
          var d = await o(
            "WAWebDBGetByParentMsgKey",
          ).getMessageOrphansByParentMsgKey(l.id);
          for (var m of d) {
            var p = m.parsedMsgPayload;
            if (p.kind === "callLog") {
              ((s = p.callOutcome),
                (u = p.screenedElsewhere),
                (c = p.callParticipants));
              break;
            }
          }
        }
        var _ = o("WAWebVoipLiveRootCallLogState").preserveCallParticipants(
            c,
            ye(u, he(s, l)),
          ),
          f = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(_),
          g = f.callLogMessage,
          h = f.pendingOutcome;
        (await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
          [g],
          function (e) {
            return e.id;
          },
        ),
          o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
            g.id,
            h,
          ),
          o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
            e.id,
            i.pendingOutcome,
          ),
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] orphaned for placeholder callId=",
                "",
              ])),
            a,
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] storeMessageOrphans failed for callId=",
                "",
              ])),
            a,
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-orphan-store-fail");
      }
      return !0;
    }
    function ge(e, t) {
      return e != null && t.t !== e ? babelHelpers.extends({}, t, { t: e }) : t;
    }
    function he(e, t) {
      return e ===
        o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere &&
        t.kind === "callLog" &&
        t.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed
        ? babelHelpers.extends({}, t, {
            callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
              .AcceptedElsewhere,
          })
        : t;
    }
    function ye(e, t) {
      return e === !1 && t.kind === "callLog" && t.screenedElsewhere === !0
        ? babelHelpers.extends({}, t, { screenedElsewhere: !1 })
        : t;
    }
    ((l.markCallIdProcessed = w),
      (l.isCallIdAlreadyProcessed = A),
      (l.getOutOfOrderSafeCallLogViewMode = F),
      (l.updateVoipCallLogOutcomeImpl = W),
      (l.updateOngoingVoipCallLogImpl = q),
      (l.writeVoipCallLogMessageImpl = G),
      (l.withCallLogOrphanWriteTurn = Q),
      (l.cacheCallLogMessage = Y),
      (l.replayDeferredCallLogOutcome = J),
      (l.waitForEagerCallLogPersist = de));
  },
  98,
);
