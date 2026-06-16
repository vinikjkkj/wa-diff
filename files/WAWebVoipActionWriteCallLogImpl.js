__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebChatGetExistingBridge",
    "WAWebCmd",
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
    "WAWebVoipSessionTracker",
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
      C = 100;
    function b(e) {
      if (!y.has(e)) {
        if (y.size >= C) {
          var t = y.values().next().value;
          t != null && y.delete(t);
        }
        y.add(e);
      }
    }
    function v(e) {
      return y.has(e);
    }
    function S(e, t, n, r, o) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, m) {
            (l === void 0 && (l = !1), m === void 0 && (m = !1));
            var p = o("WAWebVoipSessionTracker").beginVoipSession();
            try {
              var _,
                f = yield o("WAWebChatGetExistingBridge").getExisting(t);
              if (
                (f && f.ephemeralDuration != null
                  ? (_ = babelHelpers.extends({}, a, {
                      ephemeralDuration: f.ephemeralDuration,
                    }))
                  : (_ = a),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG,
                ),
                yield k(_))
              )
                return null;
              if (l && !i) {
                var g = o("WAWebMsgCollection").MsgCollection.get(_.id);
                if (!g) {
                  var y = o("WAWebMsgCollection").MsgCollection.add(
                    babelHelpers.extends({}, _),
                  )[0];
                  if (y)
                    return (
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log in-mem, async IDB persist scheduled",
                          ])),
                      ),
                      L(t, _, y),
                      y
                    );
                }
              }
              var C = new (o("WAResolvable").Resolvable)(),
                b = Date.now();
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
                        var e = Date.now() - b;
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
                        var t = v(_)
                          .then(function (t) {
                            var n = Date.now() - b,
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
                              C.resolve(t));
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
                              C.resolve(null));
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
                yield C.promise
              );
            } finally {
              o("WAWebVoipSessionTracker").endVoipSession(p);
            }
            function v(e) {
              return S.apply(this, arguments);
            }
            function S() {
              return (
                (S = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    !i &&
                      o(
                        "WAWebVoipCallLogAnrGating",
                      ).isWebVoipCallLogAnrOptimizationEnabled() &&
                      (yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
                    var a = null;
                    if (i)
                      (o("WAWebCmd").Cmd.isMainStreamReadyMd &&
                        o("WAWebUpdateMessageUIAction").updateUI(t, e),
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
                            : e;
                        (m
                          ? yield l.applyUpdate(u)
                          : yield (h || (h = n("Promise"))).all([
                              l.applyUpdate(u),
                              yield o(
                                "WAWebHandleSingleMsgWorkerCompatible",
                              ).handleSingleMsg({
                                chatId: t,
                                newMsg: u,
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
                      ),
                      a
                    );
                  },
                )),
                S.apply(this, arguments)
              );
            }
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = Date.now();
          o("WAWebMessageQueue").onMessageQueue({
            chatWid: e,
            isOffline: !1,
            msgCategory: null,
            action: (function () {
              var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var n = Date.now() - i;
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] call log IDB persist dequeued after ",
                        "ms",
                      ])),
                    n,
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
                    var l = yield o(
                        "WAWebFindChatAction",
                      ).findOrCreateLatestChat(e, "voipCallLog"),
                      s = l.chat;
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: s.id,
                      newMsg: t,
                      handleSingleMsgOrigin: "voipNotification",
                    }),
                      s.msgs.add(a),
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
                    ));
                },
              );
              function s() {
                return l.apply(this, arguments);
              }
              return s;
            })(),
          });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
              [e],
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
        I.apply(this, arguments)
      );
    }
    ((l.markCallIdProcessed = b),
      (l.isCallIdAlreadyProcessed = v),
      (l.writeVoipCallLogMessageImpl = S));
  },
  98,
);
