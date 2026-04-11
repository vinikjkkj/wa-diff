__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebChatGetExistingBridge",
    "WAWebCmd",
    "WAWebFindChatAction",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgFactory",
    "WAWebMessageQueue",
    "WAWebMsgCollection",
    "WAWebSendMsgChatAction",
    "WAWebUpdateMessageUIAction",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallsTabPanelManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            l === void 0 && (l = !1);
            var c,
              d = yield o("WAWebChatGetExistingBridge").getExisting(t);
            if (
              (d && d.ephemeralDuration != null
                ? (c = babelHelpers.extends({}, a, {
                    ephemeralDuration: d.ephemeralDuration,
                  }))
                : (c = a),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG,
              ),
              l && !i)
            ) {
              var m = o("WAWebMsgCollection").MsgCollection.get(c.id);
              if (!m) {
                var _ = o("WAWebMsgCollection").MsgCollection.add(
                  babelHelpers.extends({}, c),
                )[0];
                if (_)
                  return (
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log in-mem, async IDB persist scheduled",
                        ])),
                    ),
                    g(t, c, _),
                    _
                  );
              }
            }
            var f = new (o("WAResolvable").Resolvable)(),
              h = Date.now();
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
                      var e = Date.now() - h;
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
                      var t = y(c).then(function (t) {
                        var n = Date.now() - h,
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
                      return i ? (p || (p = n("Promise"))).resolve() : t;
                    },
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              }),
              f.promise
            );
            function y(e) {
              return C.apply(this, arguments);
            }
            function C() {
              return (
                (C = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var a = null;
                    if (i)
                      (o("WAWebCmd").Cmd.isMainStreamReadyMd &&
                        o("WAWebUpdateMessageUIAction").updateUI(t, e),
                        yield o("WAWebGetMessageCache")
                          .getMessageCache()
                          .addMessages([{ msg: e }], !1));
                    else {
                      var l = o("WAWebMsgCollection").MsgCollection.get(e.id);
                      l
                        ? (yield (p || (p = n("Promise"))).all([
                            l.applyUpdate(e),
                            yield o(
                              "WAWebHandleSingleMsgFactory",
                            ).handleSingleMsg({
                              chatId: t,
                              newMsg: e,
                              handleSingleMsgOrigin: "voipNotification",
                              messageOverwriteOption: o(
                                "WAWebHandleMsgTypes.flow",
                              ).MessageOverwriteOption.VOIP_CALL_LOG,
                            }),
                          ]),
                          (a = l))
                        : (a = yield o(
                            "WAWebSendMsgChatAction",
                          ).addVoipCallLogMsgToChat(t, e));
                    }
                    return (
                      r("WAWebVoipCallsTabPanelManager").trigger(
                        "onWriteCallLogMessage",
                      ),
                      a
                    );
                  },
                )),
                C.apply(this, arguments)
              );
            }
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] call log IDB persist dequeued after ",
                        "ms",
                      ])),
                    n,
                  ),
                    o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .ICCE_WRITE_CALL_LOG_QUEUED,
                    ));
                  try {
                    var l = yield o(
                        "WAWebFindChatAction",
                      ).findOrCreateLatestChat(e, "voipCallLog"),
                      s = l.chat;
                    (yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
                      chatId: s.id,
                      newMsg: t,
                      handleSingleMsgOrigin: "voipNotification",
                    }),
                      s.msgs.add(a),
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
              );
              function s() {
                return l.apply(this, arguments);
              }
              return s;
            })(),
          });
        })),
        h.apply(this, arguments)
      );
    }
    l.writeVoipCallLogMessageImpl = _;
  },
  98,
);
