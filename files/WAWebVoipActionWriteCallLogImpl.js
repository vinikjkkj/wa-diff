__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebCallLogMsgData.flow",
    "WAWebChatGetExistingBridge",
    "WAWebCmd",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessageOrphans",
    "WAWebFindChatAction",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMessageQueue",
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
      L = new Set(),
      E = 100,
      k = new Map();
    function I(e) {
      if (!L.has(e)) {
        if (L.size >= E) {
          var t = L.values().next().value;
          t != null && L.delete(t);
        }
        L.add(e);
      }
    }
    function T(e) {
      return L.has(e);
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.callOutcome,
            i = t.chatId,
            l = t.expectedPendingOutcome,
            p = t.msgKey,
            _ = o("WAWebVoipPhaseTracker").beginPostCallWork(),
            f = Date.now();
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
          );
          try {
            yield o("WAWebMessageQueue").onMessageQueue({
              chatWid: i,
              isOffline: !1,
              msgCategory: null,
              skipOfflineWait:
                l != null ||
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_anr_optimizations",
                ),
              action: (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
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
                    var h = o("WAWebMsgCollection").MsgCollection.get(p),
                      y =
                        (t = h == null ? void 0 : h.toJSON()) != null
                          ? t
                          : yield o("WAWebDBMsgUtils").getMsgByMsgKey(p);
                    if (y == null) {
                      if (l != null) {
                        (o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[voip] deferred call log outcome skipped; row still missing for ",
                              "",
                            ])),
                          p.id,
                        ),
                          o("WAWebVoipActivityTracker").trackUiActivity(
                            o("WAWebVoipActivityTracker").VoipUiActivity
                              .ICCE_WRITE_CALL_LOG_COMPLETE,
                          ));
                        return;
                      }
                      (o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).rememberPendingCallLogOutcome(p, a)
                        ? o("WALogger").LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log outcome deferred; no row for ",
                                "",
                              ])),
                            p.id,
                          )
                        : o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] call log outcome update skipped; no row for ",
                                "",
                              ])),
                            p.id,
                          ),
                        o("WAWebVoipActivityTracker").trackUiActivity(
                          o("WAWebVoipActivityTracker").VoipUiActivity
                            .ICCE_WRITE_CALL_LOG_COMPLETE,
                        ));
                      return;
                    }
                    if (
                      h == null
                        ? y.kind !== "callLog"
                        : h.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG
                    ) {
                      (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log outcome update skipped; row is not a call log for ",
                            "",
                          ])),
                        p.id,
                      ),
                        o("WAWebVoipActivityTracker").trackUiActivity(
                          o("WAWebVoipActivityTracker").VoipUiActivity
                            .ICCE_WRITE_CALL_LOG_COMPLETE,
                        ));
                      return;
                    }
                    var C = o(
                      "WAWebVoipPendingCallLogOutcome",
                    ).prepareCallLogOutcomeUpdate(
                      p,
                      (_ = h == null ? void 0 : h.callOutcome) != null
                        ? _
                        : y.kind === "callLog"
                          ? y.callOutcome
                          : null,
                      a,
                      l,
                    );
                    if (C.type === "skip") {
                      (C.reason === "consumed" &&
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[voip] deferred call log outcome skipped; token was consumed for ",
                              "",
                            ])),
                          p.id,
                        ),
                        o("WAWebVoipActivityTracker").trackUiActivity(
                          o("WAWebVoipActivityTracker").VoipUiActivity
                            .ICCE_WRITE_CALL_LOG_COMPLETE,
                        ));
                      return;
                    }
                    var b = babelHelpers.extends({}, y, {
                      kind: "callLog",
                      callOutcome: C.callOutcome,
                    });
                    (h != null
                      ? yield (R || (R = n("Promise"))).all([
                          h.applyUpdate(b),
                          o(
                            "WAWebHandleSingleMsgWorkerCompatible",
                          ).handleSingleMsg({
                            chatId: i,
                            newMsg: b,
                            handleSingleMsgOrigin: "voipNotification",
                            messageOverwriteOption: o(
                              "WAWebHandleMsgTypes.flow",
                            ).MessageOverwriteOption.VOIP_CALL_LOG,
                          }),
                        ])
                      : yield o(
                          "WAWebHandleSingleMsgWorkerCompatible",
                        ).handleSingleMsg({
                          chatId: i,
                          newMsg: b,
                          handleSingleMsgOrigin: "voipNotification",
                          messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                            .MessageOverwriteOption.VOIP_CALL_LOG,
                        }),
                      o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).clearPendingCallLogOutcome(p, C.pendingOutcome),
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
                  return t.apply(this, arguments);
                }
                return _;
              })(),
            });
          } finally {
            o("WAWebVoipPhaseTracker").endPostCallWork(_);
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r, o) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            (i === void 0 && (i = !1), l === void 0 && (l = !1));
            var s = F(t),
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
                yield W(c))
              )
                return null;
              if ((s == null || s.release(), i && !a)) {
                var m = o(
                    "WAWebVoipPendingCallLogOutcome",
                  ).mergePendingCallLogOutcome(c),
                  h = m.callLogMessage,
                  y = m.pendingOutcome,
                  C = o("WAWebMsgCollection").MsgCollection.get(h.id);
                if (!C) {
                  var b = o("WAWebMsgCollection").MsgCollection.add(
                    babelHelpers.extends({}, h),
                  )[0];
                  if (b)
                    return (
                      o(
                        "WAWebVoipPendingCallLogOutcome",
                      ).clearPendingCallLogOutcome(h.id, y),
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log in-mem, async IDB persist scheduled",
                          ])),
                      ),
                      O({ callLogMessage: h, chatId: e, msg: b }),
                      b
                    );
                }
              }
              var v = new (o("WAResolvable").Resolvable)(),
                S = Date.now();
              return (
                o("WAWebMessageQueue").onMessageQueue({
                  chatWid: e,
                  isOffline: a,
                  msgCategory: null,
                  skipOfflineWait: o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_anr_optimizations",
                  ),
                  action: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        var e = Date.now() - S;
                        (o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[voip] call log dequeued after ",
                              "ms queue wait",
                            ])),
                          e,
                        ),
                          o("WAWebVoipActivityTracker").trackUiActivity(
                            o("WAWebVoipActivityTracker").VoipUiActivity
                              .ICCE_WRITE_CALL_LOG_QUEUED,
                          ));
                        var t = L(c)
                          .then(function (t) {
                            var n = Date.now() - S,
                              r = n - e;
                            (o("WALogger").LOG(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
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
                                g ||
                                  (g = babelHelpers.taggedTemplateLiteralLoose([
                                    "[voip] call log write failed",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(e))
                              .sendLogs("voip-callog-write-failed"),
                              v.resolve(null));
                          });
                        return a ? (R || (R = n("Promise"))).resolve() : t;
                      },
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                }),
                yield v.promise
              );
            } finally {
              (s == null || s.release(),
                o("WAWebVoipPhaseTracker").endPostCallWork(u));
            }
            function L(e) {
              return E.apply(this, arguments);
            }
            function E() {
              return (
                (E = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                        yield N(e, i, s),
                        r("WAWebVoipCallsTabPanelManager").trigger(
                          "onWriteCallLogMessage",
                          null,
                        ),
                        null
                      );
                    var u = yield w({
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
                E.apply(this, arguments)
              );
            }
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebCmd").Cmd.isMainStreamReadyMd &&
            o("WAWebUpdateMessageUIAction").updateUI({ chatId: e, msg: t });
          var r = o("WAWebGetMessageCache").getMessageCache();
          (yield r.addMessages([{ msg: t }], !1),
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              t.id,
              n,
            ));
          var a = t.id;
          if (a != null) {
            var i = o(
                "WAWebVoipPendingCallLogOutcome",
              ).mergePendingCallLogOutcome(t),
              l = i.callLogMessage,
              s = i.pendingOutcome;
            if (s != null) {
              if (l !== t) {
                yield D({
                  callOutcome: s.callOutcome,
                  chatId: e,
                  expectedPendingOutcome: s,
                  msgKey: a,
                });
                return;
              }
              o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                a,
                s,
              );
            }
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[writeVoipCallLogMessageImpl] placeholder ",
                    " -> non-VISIBLE ",
                    "",
                  ])),
                l.viewMode,
                t.viewMode,
              )
              .sendLogs("voip-callog-promote-non-visible");
          var d =
              u && t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE
                ? babelHelpers.extends({}, t, {
                    viewMode:
                      o("WAWebViewMode.flow").ViewModeType
                        .CALL_LOG_OFFLINE_RESUME_PROMOTED,
                  })
                : t,
            m = U(l.t, V(l.callOutcome, d));
          return (
            i
              ? yield l.applyUpdate(m)
              : yield (R || (R = n("Promise"))).all([
                  l.applyUpdate(m),
                  yield o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: r,
                    newMsg: m,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t, r;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return null;
      var a = (t = e.id) == null ? void 0 : t.id;
      if (a == null) return null;
      var i = (r = k.get(a)) != null ? r : (R || (R = n("Promise"))).resolve(),
        l = new (o("WAResolvable").Resolvable)(),
        s = i.then(function () {
          return l.promise;
        });
      k.set(a, s);
      var u = !1;
      return {
        waitForPrevious: i,
        release: function () {
          u ||
            ((u = !0),
            l.resolve(),
            s.then(function () {
              k.get(a) === s && k.delete(a);
            }));
        },
      };
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callLogMessage,
            a = e.chatId,
            i = e.msg,
            l = Date.now();
          o("WAWebMessageQueue").onMessageQueue({
            chatWid: a,
            isOffline: !1,
            msgCategory: null,
            action: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = Date.now() - l;
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
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
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log persisted to IDB successfully",
                          ])),
                      ));
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
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
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var s = V(a, e),
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] orphaned for placeholder callId=",
                    "",
                  ])),
                n,
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return e != null && t.t !== e ? babelHelpers.extends({}, t, { t: e }) : t;
    }
    function V(e, t) {
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
    ((l.markCallIdProcessed = I),
      (l.isCallIdAlreadyProcessed = T),
      (l.updateVoipCallLogOutcomeImpl = D),
      (l.writeVoipCallLogMessageImpl = $));
  },
  98,
);
