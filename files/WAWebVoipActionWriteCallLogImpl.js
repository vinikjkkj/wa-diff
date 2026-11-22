__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      x = new Set(),
      $ = 100,
      P = new Map();
    function N(e) {
      if (!x.has(e)) {
        if (x.size >= $) {
          var t = x.values().next().value;
          t != null && x.delete(t);
        }
        x.add(e);
      }
    }
    function M(e) {
      return x.has(e);
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callOutcome,
            a = e.chatId,
            i = e.expectedPendingOutcome,
            l = e.msgKey,
            s = e.screenedElsewhere,
            f = o("WAWebVoipPhaseTracker").beginPostCallWork(),
            g = Date.now();
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
          );
          try {
            yield o("WAWebMessageQueue")
              .onMessageQueue({
                chatWid: a,
                isOffline: !1,
                msgCategory: null,
                skipOfflineWait: !0,
                action: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var e,
                        f,
                        h = Date.now() - g;
                      (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log outcome update dequeued after ",
                            "ms",
                          ])),
                        h,
                      ),
                        o("WAWebVoipActivityTracker").trackUiActivity(
                          o("WAWebVoipActivityTracker").VoipUiActivity
                            .ICCE_WRITE_CALL_LOG_QUEUED,
                        ));
                      var y = o("WAWebMsgCollection").MsgCollection.get(l),
                        C = ce(l),
                        b = C
                          ? null
                          : (e = y == null ? void 0 : y.toJSON()) != null
                            ? e
                            : yield o("WAWebDBMsgUtils").getMsgByMsgKey(l);
                      if (b == null) {
                        if (i != null) {
                          (o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
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
                        ).rememberPendingCallLogOutcome(l, t, {
                          keepAnyOutcome: C,
                          screenedElsewhere: s,
                        })
                          ? o("WALogger").LOG(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "[voip] call log outcome deferred; no row for ",
                                  "",
                                ])),
                              l.id,
                            )
                          : o("WALogger").LOG(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
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
                        y == null
                          ? b.kind !== "callLog"
                          : y.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG
                      ) {
                        (o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
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
                      var v = o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).prepareCallLogOutcomeUpdate({
                        existingCallOutcome:
                          (f = y == null ? void 0 : y.callOutcome) != null
                            ? f
                            : b.kind === "callLog"
                              ? b.callOutcome
                              : null,
                        expectedPendingOutcome: i,
                        msgKey: l,
                        requestedCallOutcome: t,
                      });
                      if (v.type === "skip") {
                        (v.reason === "consumed" &&
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                      var S =
                          s != null
                            ? s
                            : i == null
                              ? void 0
                              : i.screenedElsewhere,
                        R = babelHelpers.extends(
                          {},
                          b,
                          { kind: "callLog", callOutcome: v.callOutcome },
                          S != null ? { screenedElsewhere: S } : null,
                        );
                      (y != null
                        ? yield (D || (D = n("Promise"))).all([
                            y.applyUpdate(R),
                            o(
                              "WAWebHandleSingleMsgWorkerCompatible",
                            ).handleSingleMsg({
                              chatId: a,
                              newMsg: R,
                              handleSingleMsgOrigin: "voipNotification",
                              messageOverwriteOption: o("WAWebHandleMsgTypes")
                                .MessageOverwriteOption.VOIP_CALL_LOG,
                            }),
                          ])
                        : yield o(
                            "WAWebHandleSingleMsgWorkerCompatible",
                          ).handleSingleMsg({
                            chatId: a,
                            newMsg: R,
                            handleSingleMsgOrigin: "voipNotification",
                            messageOverwriteOption: o("WAWebHandleMsgTypes")
                              .MessageOverwriteOption.VOIP_CALL_LOG,
                          }),
                        o(
                          "WAWebVoipPendingCallLogOutcome",
                        ).clearPendingCallLogOutcome(l, v.pendingOutcome),
                        r("WAWebVoipCallsTabPanelManager").trigger(
                          "onWriteCallLogMessage",
                          y,
                        ),
                        o("WAWebVoipActivityTracker").trackUiActivity(
                          o("WAWebVoipActivityTracker").VoipUiActivity
                            .ICCE_WRITE_CALL_LOG_COMPLETE,
                        ));
                    },
                  );
                  function f() {
                    return e.apply(this, arguments);
                  }
                  return f;
                })(),
              })
              .catch(function (e) {
                return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                  e,
                  "voip_call_log_outcome",
                );
              });
          } finally {
            o("WAWebVoipPhaseTracker").endPostCallWork(f);
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            r = e.msgKey,
            a = e.update,
            i = o("WAWebVoipPhaseTracker").beginPostCallWork();
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
          );
          try {
            yield o("WAWebMessageQueue")
              .onMessageQueue({
                chatWid: t,
                isOffline: !1,
                msgCategory: null,
                skipOfflineWait: !0,
                action: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var e;
                      ((e = o("WAWebVoipActivityTracker")).trackUiActivity(
                        e.VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED,
                      ),
                        yield B({ chatId: t, msgKey: r, update: a }),
                        e.trackUiActivity(
                          e.VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE,
                        ));
                    },
                  );
                  function i() {
                    return e.apply(this, arguments);
                  }
                  return i;
                })(),
              })
              .catch(function (e) {
                return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                  e,
                  "voip_call_log_outcome",
                );
              });
          } finally {
            o("WAWebVoipPhaseTracker").endPostCallWork(i);
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.chatId,
            i = e.msgKey,
            l = e.update;
          if (ce(i)) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] ongoing call log update skipped; placeholder awaiting merge for ",
                  "",
                ])),
              i.id,
            );
            return;
          }
          var s = o("WAWebMsgCollection").MsgCollection.get(i),
            u =
              (t = s == null ? void 0 : s.toJSON()) != null
                ? t
                : yield o("WAWebDBMsgUtils").getMsgByMsgKey(i);
          if (u == null || !V(s, u)) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] ongoing call log update skipped for ",
                  "",
                ])),
              i.id,
            );
            return;
          }
          var c = babelHelpers.extends({}, u, { kind: "callLog" }, l);
          (yield (D || (D = n("Promise"))).all([
            s == null ? void 0 : s.applyUpdate(c),
            o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: a,
              newMsg: c,
              handleSingleMsgOrigin: "voipNotification",
              messageOverwriteOption: o("WAWebHandleMsgTypes")
                .MessageOverwriteOption.VOIP_CALL_LOG,
            }),
          ]),
            r("WAWebVoipCallsTabPanelManager").trigger(
              "onWriteCallLogMessage",
              s,
            ));
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            o("WAWebMsgCollection").MsgCollection.get(e) != null ||
            (yield o("WAWebDBMsgUtils").getMsgByMsgKey(e)) != null
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
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
    function H(e, t, n, r, o, a) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            (i === void 0 && (i = !1),
              l === void 0 && (l = !1),
              s === void 0 && (s = !1));
            var u = e,
              c = le(t),
              d = o("WAWebVoipPhaseTracker").beginPostCallWork();
            try {
              var m,
                p = yield o("WAWebChatGetExistingBridge").getExisting(u);
              if (
                (p && p.ephemeralDuration != null
                  ? (m = babelHelpers.extends({}, t, {
                      ephemeralDuration: p.ephemeralDuration,
                    }))
                  : (m = t),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG,
                ),
                c != null && (yield c.waitForPrevious),
                yield de(m, s))
              )
                return null;
              if ((c == null || c.release(), i && !a)) {
                var _ = o(
                    "WAWebVoipPendingCallLogOutcome",
                  ).mergePendingCallLogOutcome(m),
                  f = _.callLogMessage,
                  g = _.pendingOutcome,
                  S =
                    p != null
                      ? p
                      : (yield o("WAWebFindChatAction").findOrCreateLatestChat(
                          u,
                          "voipCallLog",
                          {
                            buildFirstIncomingMsg: function (t) {
                              return o(
                                "WAWebVoipCallLogMessageTarget",
                              ).withCallLogChatId(f, t);
                            },
                          },
                        )).chat;
                ((u = S.id),
                  (m = o("WAWebVoipCallLogMessageTarget").withCallLogChatId(
                    f,
                    u,
                  )));
                var R = o("WAWebMsgCollection").MsgCollection.get(m.id);
                if (!R) {
                  var L = o("WAWebMsgCollection").MsgCollection.add(
                    babelHelpers.extends({}, m),
                  )[0];
                  if (L)
                    return (
                      o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).clearPendingCallLogOutcome(f.id, g),
                      o("WALogger").LOG(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log in-mem, async IDB persist scheduled",
                          ])),
                      ),
                      se({ callLogMessage: m, chat: S, msg: L }),
                      L
                    );
                }
              }
              var E = new (o("WAResolvable").Resolvable)(),
                k = Date.now();
              return (
                o("WAWebMessageQueue")
                  .onMessageQueue({
                    chatWid: u,
                    isOffline: a,
                    msgCategory: null,
                    skipOfflineWait: !0,
                    action: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e = Date.now() - k;
                          (o("WALogger").LOG(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log dequeued after ",
                                "ms queue wait",
                              ])),
                            e,
                          ),
                            o("WAWebVoipActivityTracker").trackUiActivity(
                              o("WAWebVoipActivityTracker").VoipUiActivity
                                .ICCE_WRITE_CALL_LOG_QUEUED,
                            ));
                          var t = I(m)
                            .then(function (t) {
                              var n = Date.now() - k,
                                r = n - e;
                              (o("WALogger").LOG(
                                C ||
                                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
                                E.resolve(t));
                            })
                            .catch(function (e) {
                              (o("WALogger")
                                .ERROR(
                                  b ||
                                    (b =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[voip] call log write failed",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .sendLogs("voip-callog-write-failed"),
                                E.resolve(null));
                            });
                          return a ? (D || (D = n("Promise"))).resolve() : t;
                        },
                      );
                      function t() {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                  })
                  .catch(function (e) {
                    return o(
                      "WAWebMessageQueueTimeout",
                    ).handleMessageQueueTimeout(e, "voip_call_log_write");
                  }),
                yield E.promise
              );
            } finally {
              (c == null || c.release(),
                o("WAWebVoipPhaseTracker").endPostCallWork(d));
            }
            function I(e) {
              return T.apply(this, arguments);
            }
            function T() {
              return (
                (T = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    a ||
                      (yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
                    var t = o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).mergePendingCallLogOutcome(e),
                      n = yield o(
                        "WAWebVoipBackendCallLogTargetResolver",
                      ).resolveCallLogMessageTarget(t.callLogMessage),
                      i = n.id.remote;
                    if (s && (yield q(n.id)))
                      return (
                        o("WALogger").LOG(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "[voip] call log create skipped; row exists for ",
                              "",
                            ])),
                          n.id.id,
                        ),
                        null
                      );
                    var u = o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).mergePendingCallLogOutcome(n),
                      c = u.callLogMessage,
                      d = u.pendingOutcome;
                    if (a)
                      return (
                        yield K({
                          callLogMessage: c,
                          chatId: i,
                          pendingOutcome: d,
                        }),
                        o(
                          "WAWebVoipPendingCallLogOutcome",
                        ).clearPendingCallLogOutcome(e.id, t.pendingOutcome),
                        r("WAWebVoipCallsTabPanelManager").trigger(
                          "onWriteCallLogMessage",
                          null,
                        ),
                        null
                      );
                    var m = yield Z({
                        callLogMessage: c,
                        chatId: i,
                        pendingOutcome: d,
                        skipIdbPersistForUpdate: l,
                      }),
                      p = m.msg,
                      _ = m.surface;
                    if (
                      (p != null &&
                        o(
                          "WAWebVoipPendingCallLogOutcome",
                        ).clearPendingCallLogOutcome(e.id, t.pendingOutcome),
                      _ === "promoted" || (_ === "created" && !l))
                    ) {
                      var f, g;
                      yield o(
                        "WAWebVoipActionSurfaceCallLogChat",
                      ).maybeSurfaceCallLogChatInChatList(
                        (f = p == null ? void 0 : p.id.remote) != null ? f : i,
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
                  },
                )),
                T.apply(this, arguments)
              );
            }
          },
        )),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = le(e);
          try {
            return (yield n == null ? void 0 : n.waitForPrevious, yield t());
          } finally {
            n == null || n.release();
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callLogMessage,
            n = e.chatId,
            r = e.pendingOutcome;
          (yield X(n, t, !1).stored,
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              t.id,
              r,
            ),
            yield Y(n, t));
        })),
        Q.apply(this, arguments)
      );
    }
    function X(t, a, i) {
      var l = o("WAWebCmd").Cmd.isMainStreamReadyMd
          ? o("WAWebUpdateMessageUIAction")
              .updateUI({ chatId: t, msg: a })
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] call log UI insert failed for callId=",
                        "",
                      ])),
                    a.id.id,
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("voip-call-log-ui-insert-fail");
              })
          : (D || (D = n("Promise"))).resolve(),
        s = o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages([{ msg: a }], i);
      return { shown: l, stored: s };
    }
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WAWebVoipPendingCallLogOutcome",
            ).mergePendingCallLogOutcome(t),
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
              yield w({
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
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callLogMessage,
            r = e.chatId,
            a = e.pendingOutcome,
            i = e.skipIdbPersistForUpdate,
            l = o("WAWebMsgCollection").MsgCollection.get(t.id);
          if (l == null) {
            var s = yield o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(
              r,
              t,
            );
            return (
              s != null &&
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                  t.id,
                  a,
                ),
              { msg: s, surface: s != null ? "created" : "none" }
            );
          }
          var u =
              l.viewMode ===
                o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME ||
              l.viewMode ===
                o("WAWebViewMode.flow").ViewModeType
                  .CALL_LOG_OFFLINE_RESUME_PROMOTED,
            c = ie(u, l.viewMode, t.viewMode),
            d = oe(l.viewMode, t.viewMode),
            m = te(u, l.viewMode, t);
          ae(u, l.viewMode, m.viewMode);
          var p = pe(
            l.t,
            _e(
              l.callParticipants,
              ge(l.screenedElsewhere, fe(l.callOutcome, m)),
            ),
          );
          return (
            i
              ? yield l.applyUpdate(p)
              : yield (D || (D = n("Promise"))).all([
                  l.applyUpdate(p),
                  yield o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: r,
                    newMsg: p,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes")
                      .MessageOverwriteOption.VOIP_CALL_LOG,
                  }),
                ]),
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              t.id,
              a,
            ),
            d &&
              o(
                "WAWebVoipUnresolvedPlaceholderLoadable",
              ).countShownPlaceholderAgainLoadable(t.id),
            { msg: l, surface: c ? "promoted" : "none" }
          );
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n) {
      var r = ne(e, t, n.viewMode);
      return r === n.viewMode
        ? n
        : babelHelpers.extends({}, n, { viewMode: r });
    }
    function ne(e, t, n) {
      return e && n === o("WAWebViewMode.flow").ViewModeType.VISIBLE
        ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED
        : t != null &&
            re(t) &&
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              n,
            )
          ? t
          : n;
    }
    function re(e) {
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
    function oe(e, t) {
      return (
        e ===
          o("WAWebViewMode.flow").ViewModeType
            .CALL_LOG_OFFLINE_RESUME_UNCOUNTED &&
        t === o("WAWebViewMode.flow").ViewModeType.VISIBLE
      );
    }
    function ae(e, t, n) {
      e &&
        n !== o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
        !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          n,
        ) &&
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
    function ie(e, t, n) {
      return (
        n === o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
        (e ||
          t ===
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_UNCOUNTED)
      );
    }
    function le(e) {
      var t, r;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return null;
      var a = (t = e.id) == null ? void 0 : t.id;
      if (a == null) return null;
      var i = (r = P.get(a)) != null ? r : (D || (D = n("Promise"))).resolve(),
        l = new (o("WAResolvable").Resolvable)(),
        s = i.then(function () {
          return l.promise;
        });
      P.set(a, s);
      var u = !1;
      return {
        waitForPrevious: i,
        release: function () {
          u ||
            ((u = !0),
            l.resolve(),
            s.then(function () {
              P.get(a) === s && P.delete(a);
            }));
        },
      };
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callLogMessage,
            a = e.chat,
            i = e.msg,
            l = a.id,
            s = Date.now();
          o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: l,
              isOffline: !1,
              msgCategory: null,
              action: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = Date.now() - s;
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
                      yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
                    try {
                      (yield o(
                        "WAWebHandleSingleMsgWorkerCompatible",
                      ).handleSingleMsg({
                        chatId: l,
                        newMsg: t,
                        handleSingleMsgOrigin: "voipNotification",
                      }),
                        a.msgs.add(i),
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
                    (yield o(
                      "WAWebVoipActionSurfaceCallLogChat",
                    ).maybeSurfaceCallLogChatInChatList(l, t),
                      o("WAWebVoipActivityTracker").trackUiActivity(
                        o("WAWebVoipActivityTracker").VoipUiActivity
                          .ICCE_WRITE_CALL_LOG_COMPLETE,
                      ),
                      r("WAWebVoipCallsTabPanelManager").trigger(
                        "onWriteCallLogMessage",
                        i,
                      ));
                  },
                );
                function u() {
                  return e.apply(this, arguments);
                }
                return u;
              })(),
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "voip_call_log_persist",
              );
            });
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return (
        o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(e.id)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var i = o(
                "WAWebVoipPendingCallLogOutcome",
              ).mergePendingCallLogOutcome(e),
              l = yield o(
                "WAWebVoipBackendCallLogTargetResolver",
              ).resolveCallLogMessageTarget(i.callLogMessage),
              s = null,
              u = null,
              c = null;
            if (l.kind === "callLog") {
              var d = yield o(
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
            var _ = _e(c, ge(u, fe(s, l))),
              f = o(
                "WAWebVoipPendingCallLogOutcome",
              ).mergePendingCallLogOutcome(_),
              g = f.callLogMessage,
              h = f.pendingOutcome;
            (yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
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
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return e != null && t.t !== e ? babelHelpers.extends({}, t, { t: e }) : t;
    }
    function _e(e, t) {
      return e != null && t.kind === "callLog" && t.callParticipants == null
        ? babelHelpers.extends({}, t, { callParticipants: e })
        : t;
    }
    function fe(e, t) {
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
    function ge(e, t) {
      return e === !1 && t.kind === "callLog" && t.screenedElsewhere === !0
        ? babelHelpers.extends({}, t, { screenedElsewhere: !1 })
        : t;
    }
    ((l.markCallIdProcessed = N),
      (l.isCallIdAlreadyProcessed = M),
      (l.updateVoipCallLogOutcomeImpl = w),
      (l.updateOngoingVoipCallLogImpl = F),
      (l.writeVoipCallLogMessageImpl = H),
      (l.withCallLogOrphanWriteTurn = z),
      (l.cacheCallLogMessage = X),
      (l.replayDeferredCallLogOutcome = Y));
  },
  98,
);
