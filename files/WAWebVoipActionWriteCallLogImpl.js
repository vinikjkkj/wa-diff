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
    "WAWebDBStoreMessageOrphans",
    "WAWebFindChatAction",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMsgCollection",
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgChatAction",
    "WAWebUpdateMessageUIAction",
    "WAWebViewMode.flow",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallLogAnrGating",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
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
      y = new Set(),
      C = 100,
      b = new Map();
    function v(e) {
      if (!y.has(e)) {
        if (y.size >= C) {
          var t = y.values().next().value;
          t != null && y.delete(t);
        }
        y.add(e);
      }
    }
    function S(e) {
      return y.has(e);
    }
    function R(e, t, n, r, o) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, m) {
            (l === void 0 && (l = !1), m === void 0 && (m = !1));
            var p = E(a),
              _ = o("WAWebVoipPhaseTracker").beginPostCallWork();
            try {
              var f,
                g = yield o("WAWebChatGetExistingBridge").getExisting(t);
              if (
                (g && g.ephemeralDuration != null
                  ? (f = babelHelpers.extends({}, a, {
                      ephemeralDuration: g.ephemeralDuration,
                    }))
                  : (f = a),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG,
                ),
                p != null && (yield p.waitForPrevious),
                yield T(f))
              )
                return null;
              if ((p == null || p.release(), l && !i)) {
                var y = o("WAWebMsgCollection").MsgCollection.get(f.id);
                if (!y) {
                  var C = o("WAWebMsgCollection").MsgCollection.add(
                    babelHelpers.extends({}, f),
                  )[0];
                  if (C)
                    return (
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log in-mem, async IDB persist scheduled",
                          ])),
                      ),
                      k({ callLogMessage: f, chatId: t, msg: C }),
                      C
                    );
                }
              }
              var b = new (o("WAResolvable").Resolvable)(),
                v = Date.now();
              return (
                o("WAWebMessageQueue").onMessageQueue({
                  chatWid: t,
                  isOffline: i,
                  msgCategory: null,
                  skipOfflineWait: o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_anr_optimizations",
                  ),
                  action: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        var e = Date.now() - v;
                        (o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[voip] call log dequeued after ",
                              "ms queue wait",
                            ])),
                          e,
                        ),
                          o("WAWebVoipActivityTracker").trackUiActivity(
                            o("WAWebVoipActivityTracker").VoipUiActivity
                              .ICCE_WRITE_CALL_LOG_QUEUED,
                          ));
                        var t = S(f)
                          .then(function (t) {
                            var n = Date.now() - v,
                              r = n - e;
                            (o("WALogger").LOG(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
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
                              b.resolve(t));
                          })
                          .catch(function (e) {
                            (o("WALogger")
                              .ERROR(
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "[voip] call log write failed",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(e))
                              .sendLogs("voip-callog-write-failed"),
                              b.resolve(null));
                          });
                        return i ? (h || (h = n("Promise"))).resolve() : t;
                      },
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                }),
                yield b.promise
              );
            } finally {
              (p == null || p.release(),
                o("WAWebVoipPhaseTracker").endPostCallWork(_));
            }
            function S(e) {
              return R.apply(this, arguments);
            }
            function R() {
              return (
                (R = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    !i &&
                      o(
                        "WAWebVoipCallLogAnrGating",
                      ).isWebVoipCallLogAnrOptimizationEnabled() &&
                      (yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
                    var a = null;
                    if (i)
                      (o("WAWebCmd").Cmd.isMainStreamReadyMd &&
                        o("WAWebUpdateMessageUIAction").updateUI({
                          chatId: t,
                          msg: e,
                        }),
                        yield o("WAWebGetMessageCache")
                          .getMessageCache()
                          .addMessages([{ msg: e }], !1));
                    else {
                      var l = o("WAWebMsgCollection").MsgCollection.get(e.id);
                      if (l) {
                        var s =
                          l.viewMode ===
                            o("WAWebViewMode.flow").ViewModeType
                              .CALL_LOG_OFFLINE_RESUME ||
                          l.viewMode ===
                            o("WAWebViewMode.flow").ViewModeType
                              .CALL_LOG_OFFLINE_RESUME_PROMOTED;
                        s &&
                          e.viewMode !==
                            o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
                          o("WALogger")
                            .WARN(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "[writeVoipCallLogMessageImpl] placeholder ",
                                  " -> non-VISIBLE ",
                                  "",
                                ])),
                              l.viewMode,
                              e.viewMode,
                            )
                            .sendLogs("voip-callog-promote-non-visible");
                        var u =
                            s &&
                            e.viewMode ===
                              o("WAWebViewMode.flow").ViewModeType.VISIBLE
                              ? babelHelpers.extends({}, e, {
                                  viewMode:
                                    o("WAWebViewMode.flow").ViewModeType
                                      .CALL_LOG_OFFLINE_RESUME_PROMOTED,
                                })
                              : e,
                          c = x(l.callOutcome, u);
                        (m
                          ? yield l.applyUpdate(c)
                          : yield (h || (h = n("Promise"))).all([
                              l.applyUpdate(c),
                              yield o(
                                "WAWebHandleSingleMsgWorkerCompatible",
                              ).handleSingleMsg({
                                chatId: t,
                                newMsg: c,
                                handleSingleMsgOrigin: "voipNotification",
                                messageOverwriteOption: o(
                                  "WAWebHandleMsgTypes.flow",
                                ).MessageOverwriteOption.VOIP_CALL_LOG,
                              }),
                            ]),
                          (a = l));
                      } else
                        a = yield o(
                          "WAWebSendMsgChatAction",
                        ).addVoipCallLogMsgToChat(t, e);
                    }
                    return (
                      r("WAWebVoipCallsTabPanelManager").trigger(
                        "onWriteCallLogMessage",
                        a,
                      ),
                      a
                    );
                  },
                )),
                R.apply(this, arguments)
              );
            }
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t, r;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return null;
      var a = (t = e.id) == null ? void 0 : t.id;
      if (a == null) return null;
      var i = (r = b.get(a)) != null ? r : (h || (h = n("Promise"))).resolve(),
        l = new (o("WAResolvable").Resolvable)(),
        s = i.then(function () {
          return l.promise;
        });
      b.set(a, s);
      var u = !1;
      return {
        waitForPrevious: i,
        release: function () {
          u ||
            ((u = !0),
            l.resolve(),
            s.then(function () {
              b.get(a) === s && b.delete(a);
            }));
        },
      };
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] call log IDB persist dequeued after ",
                        "ms",
                      ])),
                    e,
                  ),
                    o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .ICCE_WRITE_CALL_LOG_QUEUED,
                    ),
                    o(
                      "WAWebVoipCallLogAnrGating",
                    ).isWebVoipCallLogAnrOptimizationEnabled() &&
                      (yield o(
                        "WAWebReleaseToEventLoop",
                      ).releaseToEventLoop()));
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
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log persisted to IDB successfully",
                          ])),
                      ));
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                  (o("WAWebVoipActivityTracker").trackUiActivity(
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var s = x(a, e);
            (yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
              [s],
              function (e) {
                return e.id;
              },
            ),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] orphaned for placeholder callId=",
                    "",
                  ])),
                n,
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
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
    ((l.markCallIdProcessed = v),
      (l.isCallIdAlreadyProcessed = S),
      (l.writeVoipCallLogMessageImpl = R));
  },
  98,
);
