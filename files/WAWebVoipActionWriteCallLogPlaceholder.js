__d(
  "WAWebVoipActionWriteCallLogPlaceholder",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebCmd",
    "WAWebDBGetByParentMsgKey",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessageOrphans",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebVoipActionSurfaceCallLogChat",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipPendingCallLogOutcome",
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
      m = !1;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callCreator,
            n = e.callId,
            a = e.groupJid,
            i = e.isVideoCall,
            l = e.t;
          try {
            var s = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: t,
                callId: n,
                groupJid: a,
              }),
              c = s.chatId,
              d = s.fromMe,
              m = s.msgKeyId,
              p = s.participant,
              _ = a != null ? a : c,
              g = {
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
                isVideoCall: i,
                callCreator: t,
                from: t,
                t: l,
                id: new (r("WAWebMsgKey"))({
                  remote: _,
                  fromMe: d,
                  id: m,
                  participant: p,
                }),
                to: _,
              },
              h = o("WAWebMsgCollection").MsgCollection.get(g.id);
            if (h != null) {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": ICCE exists, skip",
                  ])),
                n,
              ),
                o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(
                  n,
                ),
                o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).replayDeferredCallLogOutcome(_, g));
              return;
            }
            f(n, _, g);
          } catch (e) {
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(n),
              S(n, e));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(t, n, a) {
      var i = o("WAWebCmd").Cmd.isOfflineDeliveryEnd;
      i || g();
      var l = o("WAWebVoipActionWriteCallLogImpl").cacheCallLogMessage(n, a, i),
        s = l.shown,
        u = l.stored;
      u.catch(function (n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder cache write failed for callId=",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs("voip-placeholder-cache-write-fail");
      })
        .then(function () {
          return s;
        })
        .then(function () {
          return h(t, n, a);
        })
        .catch(function (e) {
          (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(t),
            S(t, e));
        });
    }
    function g() {
      m ||
        ((m = !0),
        o("WAWebCmd").Cmd.once("offline_delivery_end_from_bridge", function () {
          ((m = !1),
            o("WAWebGetMessageCache").getMessageCache().createSnapshot());
        }));
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          try {
            yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).withCallLogOrphanWriteTurn(
              r,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  yield C(t, r);
                } finally {
                  o(
                    "WAWebVoipCallLogPlaceholderTracker",
                  ).markPlaceholderResolved(e);
                }
              }),
            );
          } catch (t) {
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e),
              S(e, t));
          }
          yield o(
            "WAWebVoipActionWriteCallLogImpl",
          ).replayDeferredCallLogOutcome(t, r);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.id.id,
            a = yield o(
              "WAWebDBGetByParentMsgKey",
            ).getMessageOrphansByParentMsgKey(t.id),
            i;
          a.length > 0
            ? ((i = v(
                babelHelpers.extends({}, a[0].parsedMsgPayload, {
                  id: t.id,
                  t: t.t,
                }),
              )),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": merged with orphan",
                  ])),
                n,
              ))
            : ((i = t),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": writing hidden ICCE",
                  ])),
                n,
              ));
          var l = o(
              "WAWebVoipPendingCallLogOutcome",
            ).mergePendingCallLogOutcome(i),
            s = l.callLogMessage,
            u = l.pendingOutcome,
            m = yield o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(
              e,
              s,
              o("WAWebHandleMsgTypes").MessageOverwriteOption.VOIP_CALL_LOG,
            );
          (m != null &&
            u != null &&
            s.id != null &&
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              s.id,
              u,
            ),
            a.length > 0 &&
              (yield o("WAWebSchemaMessageOrphans")
                .getMessageOrphanTable()
                .bulkRemove(
                  a.map(function (e) {
                    return e.msgKey;
                  }),
                )),
            m != null &&
              (yield o(
                "WAWebVoipActionSurfaceCallLogChat",
              ).maybeSurfaceCallLogChatInChatList(e, s)),
            r("WAWebVoipCallsTabPanelManager").trigger(
              "onWriteCallLogMessage",
              m,
            ));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return e.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE
        ? babelHelpers.extends({}, e, {
            viewMode:
              o("WAWebViewMode.flow").ViewModeType
                .CALL_LOG_OFFLINE_RESUME_PROMOTED,
          })
        : e;
    }
    function S(e, t) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder resolve failed for callId=",
              "",
            ])),
          e,
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("voip-placeholder-resolve-fail");
    }
    l.writeCallOfferPlaceholder = p;
  },
  98,
);
