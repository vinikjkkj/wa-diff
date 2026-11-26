__d(
  "WAWebVoipActionWriteCallLogPlaceholder",
  [
    "JSResourceForInteraction",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCallLogMsgData.flow",
    "WAWebCmd",
    "WAWebDBGetByParentMsgKey",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes",
    "WAWebLazyLoadedRetriable",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebNullFunc",
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
      y = 30 * 1e3,
      C = 500,
      b = 30 * 1e3,
      v = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionPrefetchCallOfferPlaceholderTarget",
        )
          .__setRef("WAWebVoipActionWriteCallLogPlaceholder")
          .load();
      }, "VoipPrefetchCallOfferPlaceholderTarget"),
      S = null,
      R = new Set();
    function L(e) {
      return (
        R.add(e.callId),
        v().then(
          function (t) {
            var n = t.prefetchCallOfferPlaceholderTarget,
              r = t.takePrefetchedPlaceholderTarget;
            ((S = r), R.delete(e.callId) && n(e));
          },
          function () {
            R.delete(e.callId);
          },
        )
      );
    }
    async function E(t) {
      R.delete(t.callId);
      var n = S == null ? void 0 : S(t.callId),
        r = $(t);
      if (n == null || (await I(n.target, r ? 0 : C))) {
        await T(t, k(t, n == null ? void 0 : n.target));
        return;
      }
      if (r) {
        (n.abandon(), await T(t, x(t)));
        return;
      }
      (o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": chat lookup still running after ",
              "ms, cached once it finishes",
            ])),
          t.callId,
          C,
        )
        .tags("non-sad")
        .sendLogs("voip-placeholder-target-slow", { sampling: 0.01 }),
        T(t, k(t, n.target, w)));
    }
    async function k(e, t, n) {
      var r =
        t == null
          ? null
          : await o("WAPromiseTimeout")
              .promiseTimeout(t, b)
              .catch(o("WAWebNullFunc").returnNull);
      return r != null ? r : (await (n == null ? void 0 : n()), x(e));
    }
    async function I(e, t) {
      try {
        return (await o("WAPromiseTimeout").promiseTimeout(e, t), !0);
      } catch (e) {
        return !(e instanceof o("WACustomError").TimeoutError);
      }
    }
    async function T(e, t) {
      var n = e.callCreator,
        a = e.callId,
        i = e.groupJid,
        l = e.isVideoCall,
        u = e.t,
        c = a;
      try {
        var d = await t,
          m = d.chatId,
          p = d.fromMe,
          _ = d.msgKeyId,
          f = d.participant;
        c = D(a, _);
        var g = i != null ? i : m,
          h = {
            type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
            kind: o("WAWebMsgType").MsgKind.CallLog,
            viewMode:
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
            callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
            isVideoCall: l,
            callCreator: n,
            from: n,
            t: u,
            id: new (r("WAWebMsgKey"))({
              remote: g,
              fromMe: p,
              id: _,
              participant: f,
            }),
            to: g,
          },
          y = await o(
            "WAWebVoipBackendCallLogTargetResolver",
          ).resolveCallLogMessageTarget(h),
          C = y.id.remote,
          b = o("WAWebMsgCollection").MsgCollection.get(y.id);
        if (b != null) {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder ",
                ": ICCE exists, skip",
              ])),
            a,
          ),
            o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(c),
            b.viewMode ===
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
              o(
                "WAWebVoipUnresolvedPlaceholderLoadable",
              ).scheduleUnresolvedPlaceholderCheckLoadable(y.id),
            o("WAWebVoipActionWriteCallLogImpl").replayDeferredCallLogOutcome(
              C,
              y,
            ));
          return;
        }
        P(c, C, y);
      } catch (e) {
        (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(c),
          q(a, e));
      }
    }
    function D(e, t) {
      return (
        t !== e &&
          (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderPending(t),
          o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e)),
        t
      );
    }
    async function x(e) {
      var t = e.callCreator,
        n = e.callId,
        r = e.groupJid,
        a = $(e)
          ? await o(
              "WAWebVoipBackendCallLogPlaceholderTargetResolver",
            ).getCallLogPlaceholderTargetDetails({
              callCreatorWid: t,
              callId: n,
              groupJid: r,
            })
          : null;
      return a != null
        ? a
        : await o(
            "WAWebVoipBackendCallLogTargetResolver",
          ).getCallLogTargetDetails({
            callCreatorWid: t,
            callId: n,
            groupJid: r,
          });
    }
    function $(e) {
      var t = e.callId,
        n = e.groupJid;
      return (
        n != null &&
        o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(t) == null
      );
    }
    function P(e, t, n) {
      var a = o("WAWebCmd").Cmd.isOfflineDeliveryEnd,
        i = w();
      a || F(i);
      var l = o("WAWebVoipActionWriteCallLogImpl").cacheCallLogMessage(t, n, a),
        s = l.shown,
        c = l.stored;
      c.catch(function (t) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder cache write failed for callId=",
                "",
              ])),
            e,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("voip-placeholder-cache-write-fail");
      })
        .then(function () {
          return s;
        })
        .then(function () {
          return i;
        })
        .then(function () {
          return N(function () {
            return O(e, t, n);
          });
        })
        .then(function () {
          return o(
            "WAWebVoipActionWriteCallLogImpl",
          ).replayDeferredCallLogOutcome(t, n);
        })
        .catch(function (t) {
          (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e),
            q(e, t));
        });
    }
    function N(e) {
      var t = Promise.resolve();
      return h
        .enqueue(function () {
          return (
            (t = o("WAWebReleaseToEventLoop").releaseToEventLoop().then(e)),
            o("WAPromiseTimeout").promiseTimeout(t, y).catch(M)
          );
        })
        .then(function () {
          return t;
        });
    }
    function M(e) {
      e instanceof o("WACustomError").TimeoutError &&
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder merge still running after ",
                "ms",
              ])),
            y,
          )
          .tags("non-sad")
          .sendLogs("voip-placeholder-merge-turn-timeout");
    }
    function w() {
      return o("WAWebCmd").Cmd.isOfflineDeliveryEnd
        ? Promise.resolve()
        : (g == null &&
            (g = A().finally(function () {
              g = null;
            })),
          g);
    }
    function A() {
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function F(e) {
      f ||
        ((f = !0),
        e.then(function () {
          ((f = !1),
            o("WAWebGetMessageCache").getMessageCache().createSnapshot());
        }));
    }
    async function O(e, t, n) {
      var r = !1;
      try {
        await o("WAWebVoipActionWriteCallLogImpl").withCallLogOrphanWriteTurn(
          n,
          async function () {
            try {
              r = await B(t, n);
            } finally {
              o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(
                e,
              );
            }
          },
        );
      } catch (t) {
        (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e),
          q(e, t));
      }
      r ||
        o(
          "WAWebVoipUnresolvedPlaceholderLoadable",
        ).scheduleUnresolvedPlaceholderCheckLoadable(n.id);
    }
    async function B(e, t) {
      var n = t.id.id,
        a = await o("WAWebDBGetByParentMsgKey").getMessageOrphansByParentMsgKey(
          t.id,
        ),
        i;
      a.length > 0
        ? ((i = W(
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
      var l = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(i),
        s = l.callLogMessage,
        u = l.pendingOutcome,
        c = await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(
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
          (await o("WAWebSchemaMessageOrphans")
            .getMessageOrphanTable()
            .bulkRemove(
              a.map(function (e) {
                return e.msgKey;
              }),
            )),
        c != null &&
          (await o(
            "WAWebVoipActionSurfaceCallLogChat",
          ).maybeSurfaceCallLogChatInChatList(e, s)),
        r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", c),
        c != null &&
          o("WAWebViewModeUtils").isViewModeVisibleInSurface(
            o("WAWebViewMode.flow").ViewModeSurface.CHAT,
            s.viewMode,
          )
      );
    }
    function W(e) {
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
    function q(e, t) {
      o("WALogger")
        .ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder resolve failed for callId=",
              "",
            ])),
          e,
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("voip-placeholder-resolve-fail");
    }
    ((l.PLACEHOLDER_TARGET_SLOT_WAIT_MS = C),
      (l.MAX_PLACEHOLDER_TARGET_WAIT_MS = b),
      (l.prefetchCallOfferPlaceholderTargetLoadable = L),
      (l.writeCallOfferPlaceholder = E));
  },
  98,
);
