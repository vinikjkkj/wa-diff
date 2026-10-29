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
    "WAWebVoipActionSurfaceCallLogChat",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipPendingCallLogOutcome",
    "WAWebVoipPhaseTracker",
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
      k = new Set(),
      I = 100,
      T = new Map();
    function D(e) {
      if (!k.has(e)) {
        if (k.size >= I) {
          var t = k.values().next().value;
          t != null && k.delete(t);
        }
        k.add(e);
      }
    }
    function x(e) {
      return k.has(e);
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callOutcome,
            a = e.chatId,
            i = e.expectedPendingOutcome,
            l = e.msgKey,
            _ = o("WAWebVoipPhaseTracker").beginPostCallWork(),
            f = Date.now();
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
                      var h = o("WAWebMsgCollection").MsgCollection.get(l),
                        y = j(l),
                        C = y
                          ? null
                          : (e = h == null ? void 0 : h.toJSON()) != null
                            ? e
                            : yield o("WAWebDBMsgUtils").getMsgByMsgKey(l);
                      if (C == null) {
                        if (i != null) {
                          (o("WALogger").LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
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
                          keepAnyOutcome: y,
                        })
                          ? o("WALogger").LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[voip] call log outcome deferred; no row for ",
                                  "",
                                ])),
                              l.id,
                            )
                          : o("WALogger").LOG(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
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
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
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
                            l.id,
                          ),
                          o("WAWebVoipActivityTracker").trackUiActivity(
                            o("WAWebVoipActivityTracker").VoipUiActivity
                              .ICCE_WRITE_CALL_LOG_COMPLETE,
                          ));
                        return;
                      }
                      var v = babelHelpers.extends({}, C, {
                        kind: "callLog",
                        callOutcome: b.callOutcome,
                      });
                      (h != null
                        ? yield (E || (E = n("Promise"))).all([
                            h.applyUpdate(v),
                            o(
                              "WAWebHandleSingleMsgWorkerCompatible",
                            ).handleSingleMsg({
                              chatId: a,
                              newMsg: v,
                              handleSingleMsgOrigin: "voipNotification",
                              messageOverwriteOption: o("WAWebHandleMsgTypes")
                                .MessageOverwriteOption.VOIP_CALL_LOG,
                            }),
                          ])
                        : yield o(
                            "WAWebHandleSingleMsgWorkerCompatible",
                          ).handleSingleMsg({
                            chatId: a,
                            newMsg: v,
                            handleSingleMsgOrigin: "voipNotification",
                            messageOverwriteOption: o("WAWebHandleMsgTypes")
                              .MessageOverwriteOption.VOIP_CALL_LOG,
                          }),
                        o(
                          "WAWebVoipPendingCallLogOutcome",
                        ).clearPendingCallLogOutcome(l, b.pendingOutcome),
                        r("WAWebVoipCallsTabPanelManager").trigger(
                          "onWriteCallLogMessage",
                          h,
                        ),
                        o("WAWebVoipActivityTracker").trackUiActivity(
                          o("WAWebVoipActivityTracker").VoipUiActivity
                            .ICCE_WRITE_CALL_LOG_COMPLETE,
                        ));
                    },
                  );
                  function _() {
                    return e.apply(this, arguments);
                  }
                  return _;
                })(),
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
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r, o) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            (i === void 0 && (i = !1), l === void 0 && (l = !1));
            var s = H(t),
              u = o("WAWebVoipPhaseTracker").beginPostCallWork();
            try {
              var c,
                d = yield o("WAWebChatGetExistingBridge").getExisting(e);
              if (
                (d && d.ephemeralDuration != null
                  ? (c = babelHelpers.extends({}, t, {
                      ephemeralDuration: d.ephemeralDuration,
                    }))
                  : (c = t),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG,
                ),
                s != null && (yield s.waitForPrevious),
                yield K(c))
              )
                return null;
              if ((s == null || s.release(), i && !a)) {
                var m = o(
                    "WAWebVoipPendingCallLogOutcome",
                  ).mergePendingCallLogOutcome(c),
                  p = m.callLogMessage,
                  y = m.pendingOutcome,
                  C = o("WAWebMsgCollection").MsgCollection.get(p.id);
                if (!C) {
                  var b = o("WAWebMsgCollection").MsgCollection.add(
                    babelHelpers.extends({}, p),
                  )[0];
                  if (b)
                    return (
                      o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).clearPendingCallLogOutcome(p.id, y),
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log in-mem, async IDB persist scheduled",
                          ])),
                      ),
                      G({ callLogMessage: p, chatId: e, msg: b }),
                      b
                    );
                }
              }
              var v = new (o("WAResolvable").Resolvable)(),
                S = Date.now();
              return (
                o("WAWebMessageQueue")
                  .onMessageQueue({
                    chatWid: e,
                    isOffline: a,
                    msgCategory: null,
                    skipOfflineWait: !0,
                    action: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e = Date.now() - S;
                          (o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log dequeued after ",
                                "ms queue wait",
                              ])),
                            e,
                          ),
                            o("WAWebVoipActivityTracker").trackUiActivity(
                              o("WAWebVoipActivityTracker").VoipUiActivity
                                .ICCE_WRITE_CALL_LOG_QUEUED,
                            ));
                          var t = R(c)
                            .then(function (t) {
                              var n = Date.now() - S,
                                r = n - e;
                              (o("WALogger").LOG(
                                g ||
                                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
                                v.resolve(t));
                            })
                            .catch(function (e) {
                              (o("WALogger")
                                .ERROR(
                                  h ||
                                    (h =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[voip] call log write failed",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .sendLogs("voip-callog-write-failed"),
                                v.resolve(null));
                            });
                          return a ? (E || (E = n("Promise"))).resolve() : t;
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
                yield v.promise
              );
            } finally {
              (s == null || s.release(),
                o("WAWebVoipPhaseTracker").endPostCallWork(u));
            }
            function R(e) {
              return L.apply(this, arguments);
            }
            function L() {
              return (
                (L = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    a ||
                      (yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
                    var n = o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).mergePendingCallLogOutcome(t),
                      i = n.callLogMessage,
                      s = n.pendingOutcome;
                    if (a)
                      return (
                        yield F({
                          callLogMessage: i,
                          chatId: e,
                          pendingOutcome: s,
                        }),
                        r("WAWebVoipCallsTabPanelManager").trigger(
                          "onWriteCallLogMessage",
                          null,
                        ),
                        null
                      );
                    var u = yield U({
                        callLogMessage: i,
                        chatId: e,
                        pendingOutcome: s,
                        skipIdbPersistForUpdate: l,
                      }),
                      c = u.msg,
                      d = u.surface;
                    return (
                      (d === "promoted" || (d === "created" && !l)) &&
                        (yield o(
                          "WAWebVoipActionSurfaceCallLogChat",
                        ).maybeSurfaceCallLogChatInChatList(e, i)),
                      r("WAWebVoipCallsTabPanelManager").trigger(
                        "onWriteCallLogMessage",
                        c,
                      ),
                      c
                    );
                  },
                )),
                L.apply(this, arguments)
              );
            }
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = H(e);
          try {
            return (yield n == null ? void 0 : n.waitForPrevious, yield t());
          } finally {
            n == null || n.release();
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
          var t = e.callLogMessage,
            n = e.chatId,
            r = e.pendingOutcome;
          (yield B(n, t, !1).stored,
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              t.id,
              r,
            ),
            yield W(n, t));
        })),
        O.apply(this, arguments)
      );
    }
    function B(t, a, i) {
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
          : (E || (E = n("Promise"))).resolve(),
        s = o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages([{ msg: a }], i);
      return { shown: l, stored: s };
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              yield $({
                callOutcome: i.callOutcome,
                chatId: e,
                expectedPendingOutcome: i,
                msgKey: t.id,
              });
            } catch (e) {
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            c =
              u && t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE;
          u &&
            t.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
            o("WALogger")
              .WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[writeVoipCallLogMessageImpl] placeholder ",
                    " -> non-VISIBLE ",
                    "",
                  ])),
                l.viewMode,
                t.viewMode,
              )
              .tags("non-sad")
              .sendLogs("voip-callog-promote-non-visible");
          var d =
              u && t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE
                ? babelHelpers.extends({}, t, {
                    viewMode:
                      o("WAWebViewMode.flow").ViewModeType
                        .CALL_LOG_OFFLINE_RESUME_PROMOTED,
                  })
                : t,
            m = X(l.t, Y(l.callOutcome, d));
          return (
            i
              ? yield l.applyUpdate(m)
              : yield (E || (E = n("Promise"))).all([
                  l.applyUpdate(m),
                  yield o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: r,
                    newMsg: m,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes")
                      .MessageOverwriteOption.VOIP_CALL_LOG,
                  }),
                ]),
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              t.id,
              a,
            ),
            { msg: l, surface: c ? "promoted" : "none" }
          );
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      var t, r;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return null;
      var a = (t = e.id) == null ? void 0 : t.id;
      if (a == null) return null;
      var i = (r = T.get(a)) != null ? r : (E || (E = n("Promise"))).resolve(),
        l = new (o("WAResolvable").Resolvable)(),
        s = i.then(function () {
          return l.promise;
        });
      T.set(a, s);
      var u = !1;
      return {
        waitForPrevious: i,
        release: function () {
          u ||
            ((u = !0),
            l.resolve(),
            s.then(function () {
              T.get(a) === s && T.delete(a);
            }));
        },
      };
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callLogMessage,
            a = e.chatId,
            i = e.msg,
            l = Date.now();
          o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: a,
              isOffline: !1,
              msgCategory: null,
              action: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = Date.now() - l;
                    (o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
                      var n = yield o(
                          "WAWebFindChatAction",
                        ).findOrCreateLatestChat(a, "voipCallLog"),
                        s = n.chat;
                      (yield o(
                        "WAWebHandleSingleMsgWorkerCompatible",
                      ).handleSingleMsg({
                        chatId: s.id,
                        newMsg: t,
                        handleSingleMsgOrigin: "voipNotification",
                      }),
                        s.msgs.add(i),
                        o("WALogger").LOG(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "[voip] call log persisted to IDB successfully",
                            ])),
                        ));
                    } catch (e) {
                      (o("WALogger")
                        .ERROR(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
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
                    ).maybeSurfaceCallLogChatInChatList(a, t),
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
                function s() {
                  return e.apply(this, arguments);
                }
                return s;
              })(),
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "voip_call_log_persist",
              );
            });
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return (
        o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(e.id)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (
            !o(
              "WAWebVoipCallLogPlaceholderTracker",
            ).isOfflineCallLogOrderingEnabled()
          )
            return !1;
          var n = (t = e.id) == null ? void 0 : t.id;
          if (
            n == null ||
            !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(n)
          )
            return !1;
          try {
            var a = null;
            if (
              e.kind === "callLog" &&
              e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed
            ) {
              var i = yield o(
                "WAWebDBGetByParentMsgKey",
              ).getMessageOrphansByParentMsgKey(e.id);
              for (var l of i)
                if (l.parsedMsgPayload.kind === "callLog") {
                  a = l.parsedMsgPayload.callOutcome;
                  break;
                }
            }
            var s = Y(a, e),
              u = o(
                "WAWebVoipPendingCallLogOutcome",
              ).mergePendingCallLogOutcome(s),
              c = u.callLogMessage,
              d = u.pendingOutcome;
            (yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
              [c],
              function (e) {
                return e.id;
              },
            ),
              o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                c.id,
                d,
              ),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] orphaned for placeholder callId=",
                    "",
                  ])),
                n,
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] storeMessageOrphans failed for callId=",
                    "",
                  ])),
                n,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-orphan-store-fail");
          }
          return !0;
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return e != null && t.t !== e ? babelHelpers.extends({}, t, { t: e }) : t;
    }
    function Y(e, t) {
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
    ((l.markCallIdProcessed = D),
      (l.isCallIdAlreadyProcessed = x),
      (l.updateVoipCallLogOutcomeImpl = $),
      (l.writeVoipCallLogMessageImpl = N),
      (l.withCallLogOrphanWriteTurn = w),
      (l.cacheCallLogMessage = B),
      (l.replayDeferredCallLogOutcome = W));
  },
  98,
);
