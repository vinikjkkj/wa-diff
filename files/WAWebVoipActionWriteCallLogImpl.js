__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
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
      g = new Set(),
      h = 100;
    function y(e) {
      if (!g.has(e)) {
        if (g.size >= h) {
          var t = g.values().next().value;
          t != null && g.delete(t);
        }
        g.add(e);
      }
    }
    function C(e) {
      return g.has(e);
    }
    async function b(t, n, a, i, l) {
      (i === void 0 && (i = !1), l === void 0 && (l = !1));
      var d,
        m = await o("WAWebChatGetExistingBridge").getExisting(t);
      if (
        (m && m.ephemeralDuration != null
          ? (d = babelHelpers.extends({}, n, {
              ephemeralDuration: m.ephemeralDuration,
            }))
          : (d = n),
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
        ),
        await S(d))
      )
        return null;
      if (i && !a) {
        var p = o("WAWebMsgCollection").MsgCollection.get(d.id);
        if (!p) {
          var _ = o("WAWebMsgCollection").MsgCollection.add(
            babelHelpers.extends({}, d),
          )[0];
          if (_)
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log in-mem, async IDB persist scheduled",
                  ])),
              ),
              v(t, d, _),
              _
            );
        }
      }
      var f = new (o("WAResolvable").Resolvable)(),
        g = Date.now();
      return (
        o("WAWebMessageQueue").onMessageQueue({
          chatWid: t,
          isOffline: a,
          msgCategory: null,
          skipOfflineWait: o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_anr_optimizations",
          ),
          action: async function () {
            var e = Date.now() - g;
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
            var t = h(d).then(function (t) {
              var n = Date.now() - g,
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
                f.resolve(t));
            });
            return a ? Promise.resolve() : t;
          },
        }),
        f.promise
      );
      async function h(e) {
        !a &&
          o(
            "WAWebVoipCallLogAnrGating",
          ).isWebVoipCallLogAnrOptimizationEnabled() &&
          (await o("WAWebReleaseToEventLoop").releaseToEventLoop());
        var n = null;
        if (a)
          (o("WAWebCmd").Cmd.isMainStreamReadyMd &&
            o("WAWebUpdateMessageUIAction").updateUI(t, e),
            await o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages([{ msg: e }], !1));
        else {
          var i = o("WAWebMsgCollection").MsgCollection.get(e.id);
          if (i) {
            var s =
              i.viewMode ===
                o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME ||
              i.viewMode ===
                o("WAWebViewMode.flow").ViewModeType
                  .CALL_LOG_OFFLINE_RESUME_PROMOTED;
            s &&
              e.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "writeVoipCallLogMessageImpl: unexpected promotion of offline-resume placeholder (existing=",
                      ") to non-VISIBLE viewMode ",
                      "",
                    ])),
                  i.viewMode,
                  e.viewMode,
                )
                .sendLogs("voip-callog-promote-non-visible");
            var u =
              s && e.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE
                ? babelHelpers.extends({}, e, {
                    viewMode:
                      o("WAWebViewMode.flow").ViewModeType
                        .CALL_LOG_OFFLINE_RESUME_PROMOTED,
                  })
                : e;
            (l
              ? await i.applyUpdate(u)
              : await Promise.all([
                  i.applyUpdate(u),
                  await o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: t,
                    newMsg: u,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                      .MessageOverwriteOption.VOIP_CALL_LOG,
                  }),
                ]),
              (n = i));
          } else
            n = await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(t, e);
        }
        return (
          r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage"),
          n
        );
      }
    }
    async function v(e, t, n) {
      var a = Date.now();
      o("WAWebMessageQueue").onMessageQueue({
        chatWid: e,
        isOffline: !1,
        msgCategory: null,
        action: async function () {
          var i = Date.now() - a;
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call log IDB persist dequeued after ",
                "ms",
              ])),
            i,
          ),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .ICCE_WRITE_CALL_LOG_QUEUED,
            ),
            o(
              "WAWebVoipCallLogAnrGating",
            ).isWebVoipCallLogAnrOptimizationEnabled() &&
              (await o("WAWebReleaseToEventLoop").releaseToEventLoop()));
          try {
            var l = await o("WAWebFindChatAction").findOrCreateLatestChat(
                e,
                "voipCallLog",
              ),
              s = l.chat;
            (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: s.id,
              newMsg: t,
              handleSingleMsgOrigin: "voipNotification",
            }),
              s.msgs.add(n),
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
      });
    }
    async function S(e) {
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
        (await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
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
    }
    ((l.markCallIdProcessed = y),
      (l.isCallIdAlreadyProcessed = C),
      (l.writeVoipCallLogMessageImpl = b));
  },
  98,
);
