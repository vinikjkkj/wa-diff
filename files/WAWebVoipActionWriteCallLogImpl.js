__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebChatGetExistingBridge",
    "WAWebCmd",
    "WAWebFindChatAction",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMsgCollection",
    "WAWebSendMsgChatAction",
    "WAWebUpdateMessageUIAction",
    "WAWebVoipActivityTracker",
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
      p = new Set(),
      _ = 100;
    function f(e) {
      if (!p.has(e)) {
        if (p.size >= _) {
          var t = p.values().next().value;
          t != null && p.delete(t);
        }
        p.add(e);
      }
    }
    function g(e) {
      return p.has(e);
    }
    async function h(t, n, a, i) {
      i === void 0 && (i = !1);
      var l,
        c = await o("WAWebChatGetExistingBridge").getExisting(t);
      if (
        (c && c.ephemeralDuration != null
          ? (l = babelHelpers.extends({}, n, {
              ephemeralDuration: c.ephemeralDuration,
            }))
          : (l = n),
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
        ),
        i && !a)
      ) {
        var d = o("WAWebMsgCollection").MsgCollection.get(l.id);
        if (!d) {
          var m = o("WAWebMsgCollection").MsgCollection.add(
            babelHelpers.extends({}, l),
          )[0];
          if (m)
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log in-mem, async IDB persist scheduled",
                  ])),
              ),
              y(t, l, m),
              m
            );
        }
      }
      var p = new (o("WAResolvable").Resolvable)(),
        _ = Date.now();
      return (
        o("WAWebMessageQueue").onMessageQueue({
          chatWid: t,
          isOffline: a,
          msgCategory: null,
          skipOfflineWait: o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_anr_optimizations",
          ),
          action: async function () {
            var e = Date.now() - _;
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
            var t = f(l).then(function (t) {
              var n = Date.now() - _,
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
                p.resolve(t));
            });
            return a ? Promise.resolve() : t;
          },
        }),
        p.promise
      );
      async function f(e) {
        var n = null;
        if (a)
          (o("WAWebCmd").Cmd.isMainStreamReadyMd &&
            o("WAWebUpdateMessageUIAction").updateUI(t, e),
            await o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages([{ msg: e }], !1));
        else {
          var i = o("WAWebMsgCollection").MsgCollection.get(e.id);
          i
            ? (await Promise.all([
                i.applyUpdate(e),
                await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg(
                  {
                    chatId: t,
                    newMsg: e,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                      .MessageOverwriteOption.VOIP_CALL_LOG,
                  },
                ),
              ]),
              (n = i))
            : (n = await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(
                t,
                e,
              ));
        }
        return (
          r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage"),
          n
        );
      }
    }
    async function y(e, t, n) {
      var a = Date.now();
      o("WAWebMessageQueue").onMessageQueue({
        chatWid: e,
        isOffline: !1,
        msgCategory: null,
        action: async function () {
          var i = Date.now() - a;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call log IDB persist dequeued after ",
                "ms",
              ])),
            i,
          ),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .ICCE_WRITE_CALL_LOG_QUEUED,
            ));
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log persisted to IDB successfully",
                  ])),
              ));
          } catch (e) {
            (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.markCallIdProcessed = f),
      (l.isCallIdAlreadyProcessed = g),
      (l.writeVoipCallLogMessageImpl = h));
  },
  98,
);
