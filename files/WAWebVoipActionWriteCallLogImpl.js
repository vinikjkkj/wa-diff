__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
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
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
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
      D = new Set(),
      x = 100,
      $ = new Map();
    function P(e) {
      if (!D.has(e)) {
        if (D.size >= x) {
          var t = D.values().next().value;
          t != null && D.delete(t);
        }
        D.add(e);
      }
    }
    function N(e) {
      return D.has(e);
    }
    async function M(t) {
      var n = t.callOutcome,
        a = t.chatId,
        i = t.expectedPendingOutcome,
        l = t.msgKey,
        p = t.screenedElsewhere,
        _ = o("WAWebVoipPhaseTracker").beginPostCallWork(),
        f = Date.now();
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
      );
      try {
        await o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: a,
            isOffline: !1,
            msgCategory: null,
            skipOfflineWait: !0,
            action: async function () {
              var t,
                _,
                g = Date.now() - f;
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log outcome update dequeued after ",
                    "ms",
                  ])),
                g,
              ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_QUEUED,
                ));
              var h = o("WAWebMsgCollection").MsgCollection.get(l),
                y = Z(l),
                C = y
                  ? null
                  : (t = h == null ? void 0 : h.toJSON()) != null
                    ? t
                    : await o("WAWebDBMsgUtils").getMsgByMsgKey(l);
              if (C == null) {
                if (i != null) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] deferred call log outcome skipped; row still missing for ",
                        "",
                      ])),
                    l.id,
                  ),
                    o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .ICCE_WRITE_CALL_LOG_COMPLETE,
                    ));
                  return;
                }
                (o(
                  "WAWebVoipPendingCallLogOutcome",
                ).rememberPendingCallLogOutcome(l, n, {
                  keepAnyOutcome: y,
                  screenedElsewhere: p,
                })
                  ? o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log outcome deferred; no row for ",
                          "",
                        ])),
                      l.id,
                    )
                  : o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log outcome update skipped; no row for ",
                          "",
                        ])),
                      l.id,
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log outcome update skipped; row is not a call log for ",
                      "",
                    ])),
                  l.id,
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
                expectedPendingOutcome: i,
                msgKey: l,
                requestedCallOutcome: n,
              });
              if (b.type === "skip") {
                (b.reason === "consumed" &&
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] deferred call log outcome skipped; token was consumed for ",
                        "",
                      ])),
                    l.id,
                  ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_COMPLETE,
                  ));
                return;
              }
              var v = p != null ? p : i == null ? void 0 : i.screenedElsewhere,
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
                      chatId: a,
                      newMsg: S,
                      handleSingleMsgOrigin: "voipNotification",
                      messageOverwriteOption: o("WAWebHandleMsgTypes")
                        .MessageOverwriteOption.VOIP_CALL_LOG,
                    }),
                  ])
                : await o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: a,
                    newMsg: S,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes")
                      .MessageOverwriteOption.VOIP_CALL_LOG,
                  }),
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                  l,
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
    async function w(e) {
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
                await A({ chatId: t, msgKey: n, update: r }),
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
    async function A(e) {
      var t,
        n = e.chatId,
        a = e.msgKey,
        i = e.update;
      if (Z(a)) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
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
      if (s == null || !O(l, s)) {
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    async function F(e) {
      return (
        o("WAWebMsgCollection").MsgCollection.get(e) != null ||
        (await o("WAWebDBMsgUtils").getMsgByMsgKey(e)) != null
      );
    }
    function O(e, t) {
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
    async function B(e, t, n, a, i, l) {
      (a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1));
      var s = e,
        u = Y(t),
        c = o("WAWebVoipPhaseTracker").beginPostCallWork();
      try {
        var d,
          m = await o("WAWebChatGetExistingBridge").getExisting(s);
        if (
          (m && m.ephemeralDuration != null
            ? (d = babelHelpers.extends({}, t, {
                ephemeralDuration: m.ephemeralDuration,
              }))
            : (d = t),
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
          ),
          u != null && (await u.waitForPrevious),
          await ee(d, l))
        )
          return null;
        if ((u == null || u.release(), a && !n)) {
          var p = o(
              "WAWebVoipPendingCallLogOutcome",
            ).mergePendingCallLogOutcome(d),
            _ = p.callLogMessage,
            b = p.pendingOutcome,
            v =
              m != null
                ? m
                : (
                    await o("WAWebFindChatAction").findOrCreateLatestChat(
                      s,
                      "voipCallLog",
                      {
                        buildFirstIncomingMsg: function (t) {
                          return o(
                            "WAWebVoipCallLogMessageTarget",
                          ).withCallLogChatId(_, t);
                        },
                      },
                    )
                  ).chat;
          ((s = v.id),
            (d = o("WAWebVoipCallLogMessageTarget").withCallLogChatId(_, s)));
          var S = o("WAWebMsgCollection").MsgCollection.get(d.id);
          if (!S) {
            var R = o("WAWebMsgCollection").MsgCollection.add(
              babelHelpers.extends({}, d),
            )[0];
            if (R)
              return (
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                  _.id,
                  b,
                ),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log in-mem, async IDB persist scheduled",
                    ])),
                ),
                J({ callLogMessage: d, chat: v, msg: R }),
                R
              );
          }
        }
        var L = new (o("WAResolvable").Resolvable)(),
          E = Date.now();
        return (
          o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: s,
              isOffline: n,
              msgCategory: null,
              skipOfflineWait: !0,
              action: async function () {
                var e = Date.now() - E;
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log dequeued after ",
                      "ms queue wait",
                    ])),
                  e,
                ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_QUEUED,
                  ));
                var t = k(d)
                  .then(function (t) {
                    var n = Date.now() - E,
                      r = n - e;
                    (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log done: queue=",
                          "ms write=",
                          "ms total=",
                          "ms",
                        ])),
                      e,
                      r,
                      n,
                    ),
                      o("WAWebVoipActivityTracker").trackUiActivity(
                        o("WAWebVoipActivityTracker").VoipUiActivity
                          .ICCE_WRITE_CALL_LOG_COMPLETE,
                      ),
                      L.resolve(t));
                  })
                  .catch(function (e) {
                    (o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log write failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("voip-callog-write-failed"),
                      L.resolve(null));
                  });
                return n ? Promise.resolve() : t;
              },
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "voip_call_log_write",
              );
            }),
          await L.promise
        );
      } finally {
        (u == null || u.release(),
          o("WAWebVoipPhaseTracker").endPostCallWork(c));
      }
      async function k(e) {
        n || (await o("WAWebReleaseToEventLoop").releaseToEventLoop());
        var t = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(
            e,
          ),
          a = await o(
            "WAWebVoipBackendCallLogTargetResolver",
          ).resolveCallLogMessageTarget(t.callLogMessage),
          s = a.id.remote;
        if (l && (await F(a.id)))
          return (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] call log create skipped; row exists for ",
                  "",
                ])),
              a.id.id,
            ),
            null
          );
        var u = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(
            a,
          ),
          c = u.callLogMessage,
          d = u.pendingOutcome;
        if (n)
          return (
            await q({ callLogMessage: c, chatId: s, pendingOutcome: d }),
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
        var m = await H({
            callLogMessage: c,
            chatId: s,
            pendingOutcome: d,
            skipIdbPersistForUpdate: i,
          }),
          p = m.msg,
          _ = m.surface;
        if (
          (p != null &&
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              e.id,
              t.pendingOutcome,
            ),
          _ === "promoted" || (_ === "created" && !i))
        ) {
          var f, g;
          await o(
            "WAWebVoipActionSurfaceCallLogChat",
          ).maybeSurfaceCallLogChatInChatList(
            (f = p == null ? void 0 : p.id.remote) != null ? f : s,
            (g = p == null ? void 0 : p.toJSON()) != null ? g : c,
          );
        }
        return (
          r("WAWebVoipCallsTabPanelManager").trigger(
            "onWriteCallLogMessage",
            p,
          ),
          p
        );
      }
    }
    async function W(e, t) {
      var n = Y(e);
      try {
        return (await (n == null ? void 0 : n.waitForPrevious), await t());
      } finally {
        n == null || n.release();
      }
    }
    async function q(e) {
      var t = e.callLogMessage,
        n = e.chatId,
        r = e.pendingOutcome;
      (await U(n, t, !1).stored,
        o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(t.id, r),
        await V(n, t));
    }
    function U(e, t, n) {
      var a = o("WAWebCmd").Cmd.isMainStreamReadyMd
          ? o("WAWebUpdateMessageUIAction")
              .updateUI({ chatId: e, msg: t })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
    async function V(e, t) {
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
          await M({
            callOutcome: i.callOutcome,
            chatId: e,
            expectedPendingOutcome: i,
            msgKey: t.id,
          });
        } catch (e) {
          o("WALogger")
            .ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
    async function H(e) {
      var t = e.callLogMessage,
        n = e.chatId,
        r = e.pendingOutcome,
        a = e.skipIdbPersistForUpdate,
        i = o("WAWebMsgCollection").MsgCollection.get(t.id);
      if (i == null) {
        var l = await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(n, t);
        return (
          l != null &&
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              t.id,
              r,
            ),
          { msg: l, surface: l != null ? "created" : "none" }
        );
      }
      var s =
          i.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME ||
          i.viewMode ===
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_PROMOTED,
        u = X(s, i.viewMode, t.viewMode),
        c = K(i.viewMode, t.viewMode),
        d = G(s, i.viewMode, t);
      Q(s, i.viewMode, d.viewMode);
      var m = te(
        i.t,
        ne(i.callParticipants, oe(i.screenedElsewhere, re(i.callOutcome, d))),
      );
      return (
        a
          ? await i.applyUpdate(m)
          : await Promise.all([
              i.applyUpdate(m),
              await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: n,
                newMsg: m,
                handleSingleMsgOrigin: "voipNotification",
                messageOverwriteOption: o("WAWebHandleMsgTypes")
                  .MessageOverwriteOption.VOIP_CALL_LOG,
              }),
            ]),
        o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(t.id, r),
        c &&
          o(
            "WAWebVoipUnresolvedPlaceholderLoadable",
          ).countShownPlaceholderAgainLoadable(t.id),
        { msg: i, surface: u ? "promoted" : "none" }
      );
    }
    function G(e, t, n) {
      var r = z(e, t, n.viewMode);
      return r === n.viewMode
        ? n
        : babelHelpers.extends({}, n, { viewMode: r });
    }
    function z(e, t, n) {
      return e && n === o("WAWebViewMode.flow").ViewModeType.VISIBLE
        ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED
        : t != null &&
            j(t) &&
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              n,
            )
          ? t
          : n;
    }
    function j(e) {
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
    function K(e, t) {
      return (
        e ===
          o("WAWebViewMode.flow").ViewModeType
            .CALL_LOG_OFFLINE_RESUME_UNCOUNTED &&
        t === o("WAWebViewMode.flow").ViewModeType.VISIBLE
      );
    }
    function Q(e, t, n) {
      e &&
        n !== o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
        !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          n,
        ) &&
        o("WALogger")
          .WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
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
    function X(e, t, n) {
      return (
        n === o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
        (e ||
          t ===
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_UNCOUNTED)
      );
    }
    function Y(e) {
      var t, n;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return null;
      var r = (t = e.id) == null ? void 0 : t.id;
      if (r == null) return null;
      var a = (n = $.get(r)) != null ? n : Promise.resolve(),
        i = new (o("WAResolvable").Resolvable)(),
        l = a.then(function () {
          return i.promise;
        });
      $.set(r, l);
      var s = !1;
      return {
        waitForPrevious: a,
        release: function () {
          s ||
            ((s = !0),
            i.resolve(),
            l.then(function () {
              $.get(r) === l && $.delete(r);
            }));
        },
      };
    }
    async function J(e) {
      var t = e.callLogMessage,
        n = e.chat,
        a = e.msg,
        i = n.id,
        l = Date.now();
      o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: i,
          isOffline: !1,
          msgCategory: null,
          action: async function () {
            var e = Date.now() - l;
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] call log IDB persist dequeued after ",
                  "ms",
                ])),
              e,
            ),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG_QUEUED,
              ),
              await o("WAWebReleaseToEventLoop").releaseToEventLoop());
            try {
              (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: i,
                newMsg: t,
                handleSingleMsgOrigin: "voipNotification",
              }),
                n.msgs.add(a),
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log persisted to IDB successfully",
                    ])),
                ));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log IDB persist failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("voip")
                .sendLogs("voip: persistCallLogAsync"),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_FAILED,
                ));
              return;
            }
            (await o(
              "WAWebVoipActionSurfaceCallLogChat",
            ).maybeSurfaceCallLogChatInChatList(i, t),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG_COMPLETE,
              ),
              r("WAWebVoipCallsTabPanelManager").trigger(
                "onWriteCallLogMessage",
                a,
              ));
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_call_log_persist",
          );
        });
    }
    function Z(e) {
      return (
        o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(e.id)
      );
    }
    async function ee(e, t) {
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
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
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
        var _ = ne(c, oe(u, re(s, l))),
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
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] orphaned for placeholder callId=",
                "",
              ])),
            a,
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
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
    function te(e, t) {
      return e != null && t.t !== e ? babelHelpers.extends({}, t, { t: e }) : t;
    }
    function ne(e, t) {
      return e != null && t.kind === "callLog" && t.callParticipants == null
        ? babelHelpers.extends({}, t, { callParticipants: e })
        : t;
    }
    function re(e, t) {
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
    function oe(e, t) {
      return e === !1 && t.kind === "callLog" && t.screenedElsewhere === !0
        ? babelHelpers.extends({}, t, { screenedElsewhere: !1 })
        : t;
    }
    ((l.markCallIdProcessed = P),
      (l.isCallIdAlreadyProcessed = N),
      (l.updateVoipCallLogOutcomeImpl = M),
      (l.updateOngoingVoipCallLogImpl = w),
      (l.writeVoipCallLogMessageImpl = B),
      (l.withCallLogOrphanWriteTurn = W),
      (l.cacheCallLogMessage = U),
      (l.replayDeferredCallLogOutcome = V));
  },
  98,
);
