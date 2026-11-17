__d(
  "WAWebVoipActionWriteCallLogPlaceholder",
  [
    "JSResourceForInteraction",
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
      g = !1,
      h = null,
      y = new (o("WAWebPromiseQueue").PromiseQueue)(),
      C = 30 * 1e3,
      b = 500,
      v = 30 * 1e3,
      S = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionPrefetchCallOfferPlaceholderTarget",
        )
          .__setRef("WAWebVoipActionWriteCallLogPlaceholder")
          .load();
      }, "VoipPrefetchCallOfferPlaceholderTarget"),
      R = null,
      L = new Set();
    function E(e) {
      return (
        L.add(e.callId),
        S().then(
          function (t) {
            var n = t.prefetchCallOfferPlaceholderTarget,
              r = t.takePrefetchedPlaceholderTarget;
            ((R = r), L.delete(e.callId) && n(e));
          },
          function () {
            L.delete(e.callId);
          },
        )
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          L.delete(e.callId);
          var t = R == null ? void 0 : R(e.callId),
            n = F(e);
          if (t == null || (yield x(t.target, n ? 0 : b))) {
            yield P(e, T(e, t == null ? void 0 : t.target));
            return;
          }
          if (n) {
            (t.abandon(), yield P(e, w(e)));
            return;
          }
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] placeholder ",
                  ": chat lookup still running after ",
                  "ms, cached once it finishes",
                ])),
              e.callId,
              b,
            )
            .tags("non-sad")
            .sendLogs("voip-placeholder-target-slow", { sampling: 0.01 }),
            P(e, T(e, t.target, q)));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
            t == null
              ? null
              : yield o("WAPromiseTimeout")
                  .promiseTimeout(t, v)
                  .catch(o("WAWebNullFunc").returnNull);
          return r != null ? r : (yield n == null ? void 0 : n(), w(e));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return (yield o("WAPromiseTimeout").promiseTimeout(e, t), !0);
          } catch (e) {
            return !(e instanceof o("WACustomError").TimeoutError);
          }
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
          var n = e.callCreator,
            a = e.callId,
            i = e.groupJid,
            l = e.isVideoCall,
            s = e.t,
            u = a;
          try {
            var c = yield t,
              d = c.chatId,
              p = c.fromMe,
              _ = c.msgKeyId,
              f = c.participant;
            u = M(a, _);
            var g = i != null ? i : d,
              h = {
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
                isVideoCall: l,
                callCreator: n,
                from: n,
                t: s,
                id: new (r("WAWebMsgKey"))({
                  remote: g,
                  fromMe: p,
                  id: _,
                  participant: f,
                }),
                to: g,
              },
              y = yield o(
                "WAWebVoipBackendCallLogTargetResolver",
              ).resolveCallLogMessageTarget(h),
              C = y.id.remote,
              b = o("WAWebMsgCollection").MsgCollection.get(y.id);
            if (b != null) {
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": ICCE exists, skip",
                  ])),
                a,
              ),
                o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(
                  u,
                ),
                b.viewMode ===
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_OFFLINE_RESUME &&
                  o(
                    "WAWebVoipUnresolvedPlaceholderLoadable",
                  ).scheduleUnresolvedPlaceholderCheckLoadable(y.id),
                o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).replayDeferredCallLogOutcome(C, y));
              return;
            }
            O(u, C, y);
          } catch (e) {
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(u),
              Q(a, e));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return (
        t !== e &&
          (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderPending(t),
          o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e)),
        t
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callCreator,
            n = e.callId,
            r = e.groupJid,
            a = F(e)
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = e.callId,
        n = e.groupJid;
      return (
        n != null &&
        o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(t) == null
      );
    }
    function O(t, n, a) {
      var i = o("WAWebCmd").Cmd.isOfflineDeliveryEnd,
        l = q();
      i || V(l);
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
          return B(function () {
            return H(t, n, a);
          });
        })
        .then(function () {
          return o(
            "WAWebVoipActionWriteCallLogImpl",
          ).replayDeferredCallLogOutcome(n, a);
        })
        .catch(function (e) {
          (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(t),
            Q(t, e));
        });
    }
    function B(e) {
      var t = (f || (f = n("Promise"))).resolve();
      return y
        .enqueue(function () {
          return (
            (t = o("WAWebReleaseToEventLoop").releaseToEventLoop().then(e)),
            o("WAPromiseTimeout").promiseTimeout(t, C).catch(W)
          );
        })
        .then(function () {
          return t;
        });
    }
    function W(e) {
      e instanceof o("WACustomError").TimeoutError &&
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder merge still running after ",
                "ms",
              ])),
            C,
          )
          .tags("non-sad")
          .sendLogs("voip-placeholder-merge-turn-timeout");
    }
    function q() {
      return o("WAWebCmd").Cmd.isOfflineDeliveryEnd
        ? (f || (f = n("Promise"))).resolve()
        : (h == null &&
            (h = U().finally(function () {
              h = null;
            })),
          h);
    }
    function U() {
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
    function V(e) {
      g ||
        ((g = !0),
        e.then(function () {
          ((g = !1),
            o("WAWebGetMessageCache").getMessageCache().createSnapshot());
        }));
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = !1;
          try {
            yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).withCallLogOrphanWriteTurn(
              r,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  a = yield z(t, r);
                } finally {
                  o(
                    "WAWebVoipCallLogPlaceholderTracker",
                  ).markPlaceholderResolved(e);
                }
              }),
            );
          } catch (t) {
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(e),
              Q(e, t));
          }
          a ||
            o(
              "WAWebVoipUnresolvedPlaceholderLoadable",
            ).scheduleUnresolvedPlaceholderCheckLoadable(r.id);
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.id.id,
            a = yield o(
              "WAWebDBGetByParentMsgKey",
            ).getMessageOrphansByParentMsgKey(t.id),
            i;
          a.length > 0
            ? ((i = K(
                babelHelpers.extends({}, a[0].parsedMsgPayload, {
                  id: t.id,
                  t: t.t,
                }),
              )),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": merged with orphan",
                  ])),
                n,
              ))
            : ((i = t),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        j.apply(this, arguments)
      );
    }
    function K(e) {
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
    function Q(e, t) {
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
    ((l.PLACEHOLDER_TARGET_SLOT_WAIT_MS = b),
      (l.MAX_PLACEHOLDER_TARGET_WAIT_MS = v),
      (l.prefetchCallOfferPlaceholderTargetLoadable = E),
      (l.writeCallOfferPlaceholder = k));
  },
  98,
);
