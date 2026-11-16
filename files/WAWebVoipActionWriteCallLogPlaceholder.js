__d(
  "WAWebVoipActionWriteCallLogPlaceholder",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebCmd",
    "WAWebDBGetByParentMsgKey",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebPromiseQueue",
    "WAWebRegionReadinessSignals",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaMessageOrphans",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipActionSurfaceCallLogChat",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipBackendCallLogPlaceholderTargetResolver",
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipPendingCallLogOutcome",
    "WAWebVoipTransferredCallRegistry",
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
      f = !1,
      g = null,
      h = new (o("WAWebPromiseQueue").PromiseQueue)(),
      y = 30 * 1e3;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callCreator,
            n = e.callId,
            a = e.groupJid,
            i = e.isVideoCall,
            l = e.t,
            s = n;
          try {
            var u = yield S(e),
              c = u.chatId,
              m = u.fromMe,
              p = u.msgKeyId,
              _ = u.participant;
            s = v(n, p);
            var f = a != null ? a : c,
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
                  remote: f,
                  fromMe: m,
                  id: p,
                  participant: _,
                }),
                to: f,
              },
              h = yield o(
                "WAWebVoipBackendCallLogTargetResolver",
              ).resolveCallLogMessageTarget(g),
              y = h.id.remote,
              C = o("WAWebMsgCollection").MsgCollection.get(h.id);
            if (C != null) {
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": ICCE exists, skip",
                  ])),
                n,
              ),
                o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(
                  s,
                ),
                C.viewMode ===
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_OFFLINE_RESUME &&
                  o(
                    "WAWebVoipUnresolvedPlaceholderLoadable",
                  ).scheduleUnresolvedPlaceholderCheckLoadable(h.id),
                o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).replayDeferredCallLogOutcome(y, h));
              return;
            }
            L(s, y, h);
          } catch (e) {
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(s),
              w(n, e));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return (
        t !== e &&
          (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderPending(t),
          o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e)),
        t
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callCreator,
            n = e.callId,
            r = e.groupJid,
            a =
              r != null &&
              o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(n) ==
                null
                ? yield o(
                    "WAWebVoipBackendCallLogPlaceholderTargetResolver",
                  ).getCallLogPlaceholderTargetDetails({
                    callCreatorWid: t,
                    callId: n,
                    groupJid: r,
                  })
                : null;
          return a != null
            ? a
            : yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: t,
                callId: n,
                groupJid: r,
              });
        })),
        R.apply(this, arguments)
      );
    }
    function L(t, n, a) {
      var i = o("WAWebCmd").Cmd.isOfflineDeliveryEnd,
        l = I();
      i || D(l);
      var s = o("WAWebVoipActionWriteCallLogImpl").cacheCallLogMessage(n, a, i),
        u = s.shown,
        c = s.stored;
      c.catch(function (n) {
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
          return u;
        })
        .then(function () {
          return l;
        })
        .then(function () {
          return E(function () {
            return x(t, n, a);
          });
        })
        .then(function () {
          return o(
            "WAWebVoipActionWriteCallLogImpl",
          ).replayDeferredCallLogOutcome(n, a);
        })
        .catch(function (e) {
          (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(t),
            w(t, e));
        });
    }
    function E(e) {
      var t = (_ || (_ = n("Promise"))).resolve();
      return h
        .enqueue(function () {
          return (
            (t = o("WAWebReleaseToEventLoop").releaseToEventLoop().then(e)),
            o("WAPromiseTimeout").promiseTimeout(t, y).catch(k)
          );
        })
        .then(function () {
          return t;
        });
    }
    function k(e) {
      e instanceof o("WACustomError").TimeoutError &&
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder merge still running after ",
                "ms",
              ])),
            y,
          )
          .tags("non-sad")
          .sendLogs("voip-placeholder-merge-turn-timeout");
    }
    function I() {
      return o("WAWebCmd").Cmd.isOfflineDeliveryEnd
        ? (_ || (_ = n("Promise"))).resolve()
        : (g == null &&
            (g = T().finally(function () {
              g = null;
            })),
          g);
    }
    function T() {
      var e = new AbortController();
      return o("WAPromiseTimeout")
        .promiseTimeout(
          o("WAWebRegionReadinessSignals")
            .waitForOfflineDeliveryEnd(e.signal)
            .catch(r("WAWebNoop")),
          o("WAWebEventsWaitForOfflineDeliveryEnd").OFFLINE_RESUME_WAIT_TIMEOUT,
        )
        .then(r("WAWebNoop"), function () {
          (e.abort(),
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] offline delivery end not reported after ",
                    "ms",
                  ])),
                o("WAWebEventsWaitForOfflineDeliveryEnd")
                  .OFFLINE_RESUME_WAIT_TIMEOUT,
              )
              .tags("non-sad")
              .sendLogs("voip-placeholder-delivery-end-timeout", {
                sampling: 0.01,
              }));
        });
    }
    function D(e) {
      f ||
        ((f = !0),
        e.then(function () {
          ((f = !1),
            o("WAWebGetMessageCache").getMessageCache().createSnapshot());
        }));
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = !1;
          try {
            yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).withCallLogOrphanWriteTurn(
              r,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  a = yield P(t, r);
                } finally {
                  o(
                    "WAWebVoipCallLogPlaceholderTracker",
                  ).markPlaceholderResolved(e);
                }
              }),
            );
          } catch (t) {
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e),
              w(e, t));
          }
          a ||
            o(
              "WAWebVoipUnresolvedPlaceholderLoadable",
            ).scheduleUnresolvedPlaceholderCheckLoadable(r.id);
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.id.id,
            a = yield o(
              "WAWebDBGetByParentMsgKey",
            ).getMessageOrphansByParentMsgKey(t.id),
            i;
          a.length > 0
            ? ((i = M(
                babelHelpers.extends({}, a[0].parsedMsgPayload, {
                  id: t.id,
                  t: t.t,
                }),
              )),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": merged with orphan",
                  ])),
                n,
              ))
            : ((i = t),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
            c = yield o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(
              e,
              s,
              o("WAWebHandleMsgTypes").MessageOverwriteOption.VOIP_CALL_LOG,
            );
          return (
            c != null &&
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
            c != null &&
              (yield o(
                "WAWebVoipActionSurfaceCallLogChat",
              ).maybeSurfaceCallLogChatInChatList(e, s)),
            r("WAWebVoipCallsTabPanelManager").trigger(
              "onWriteCallLogMessage",
              c,
            ),
            c != null &&
              o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                s.viewMode,
              )
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return e.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE
        ? babelHelpers.extends({}, e, {
            viewMode:
              o("WAWebViewMode.flow").ViewModeType
                .CALL_LOG_OFFLINE_RESUME_PROMOTED,
          })
        : o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              e.viewMode,
            )
          ? e
          : babelHelpers.extends({}, e, {
              viewMode:
                o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
            });
    }
    function w(e, t) {
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder resolve failed for callId=",
              "",
            ])),
          e,
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("voip-placeholder-resolve-fail");
    }
    l.writeCallOfferPlaceholder = C;
  },
  98,
);
