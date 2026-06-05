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
      h = new Set(),
      y = 100;
    function C(e) {
      if (!h.has(e)) {
        if (h.size >= y) {
          var t = h.values().next().value;
          t != null && h.delete(t);
        }
        h.add(e);
      }
    }
    function b(e) {
      return h.has(e);
    }
    function v(e, t, n, r, o) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, d) {
            (l === void 0 && (l = !1), d === void 0 && (d = !1));
            var m,
              p = yield o("WAWebChatGetExistingBridge").getExisting(t);
            if (
              (p && p.ephemeralDuration != null
                ? (m = babelHelpers.extends({}, a, {
                    ephemeralDuration: p.ephemeralDuration,
                  }))
                : (m = a),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG,
              ),
              yield E(m))
            )
              return null;
            if (l && !i) {
              var _ = o("WAWebMsgCollection").MsgCollection.get(m.id);
              if (!_) {
                var f = o("WAWebMsgCollection").MsgCollection.add(
                  babelHelpers.extends({}, m),
                )[0];
                if (f)
                  return (
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log in-mem, async IDB persist scheduled",
                        ])),
                    ),
                    R(t, m, f),
                    f
                  );
              }
            }
            var h = new (o("WAResolvable").Resolvable)(),
              y = Date.now();
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
                      var e = Date.now() - y;
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
                      var t = C(m).then(function (t) {
                        var n = Date.now() - y,
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
                          h.resolve(t));
                      });
                      return i ? (g || (g = n("Promise"))).resolve() : t;
                    },
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              }),
              h.promise
            );
            function C(e) {
              return b.apply(this, arguments);
            }
            function b() {
              return (
                (b = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "writeVoipCallLogMessageImpl: unexpected promotion of offline-resume placeholder (existing=",
                                  ") to non-VISIBLE viewMode ",
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
                        (d
                          ? yield l.applyUpdate(u)
                          : yield (g || (g = n("Promise"))).all([
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
                b.apply(this, arguments)
              );
            }
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log persisted to IDB successfully",
                          ])),
                      ));
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log stored as orphan for callId=",
                    ", placeholder will handle write",
                  ])),
                n,
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
        k.apply(this, arguments)
      );
    }
    ((l.markCallIdProcessed = C),
      (l.isCallIdAlreadyProcessed = b),
      (l.writeVoipCallLogMessageImpl = v));
  },
  98,
);
