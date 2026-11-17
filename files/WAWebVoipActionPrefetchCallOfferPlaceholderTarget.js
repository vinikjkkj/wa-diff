__d(
  "WAWebVoipActionPrefetchCallOfferPlaceholderTarget",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebChatFindBridge",
    "WAWebPromiseQueue",
    "WAWebVoipActionWriteCallLogPlaceholder",
    "WAWebVoipBackendCallLogPlaceholderTargetResolver",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWaitForInitialChatsSynced",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1e3,
      d = 600 * 1e3,
      m =
        o("WAWebVoipActionWriteCallLogPlaceholder")
          .PLACEHOLDER_TARGET_SLOT_WAIT_MS / 2,
      p = new (o("WAWebPromiseQueue").PromiseQueue)(),
      _ = 0.01,
      f = new Map();
    function g(e) {
      if ((f.size >= c && v(), !(f.has(e.callId) || f.size >= c))) {
        var t = o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced(),
          n = { isAbandoned: !1 },
          r = t.then(function () {
            return y(e, n);
          });
        (r.catch(function (t) {
          return b(e.callId, t);
        }),
          f.set(e.callId, {
            initialChatsSynced: t,
            lookupTurn: n,
            startedAtMs: Date.now(),
            target: r,
          }));
      }
    }
    function h(e) {
      var t = f.get(e);
      if ((f.delete(e), t == null)) return null;
      var n = function () {
        t.lookupTurn.isAbandoned = !0;
      };
      return t.initialChatsSynced !==
        o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced() ||
        o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(e) != null
        ? (n(), null)
        : { abandon: n, target: t.target };
    }
    function y(e, t) {
      var r = (u || (u = n("Promise"))).resolve(null);
      return p
        .enqueue(function () {
          if (!t.isAbandoned)
            return (
              (r = S(e)),
              o("WAPromiseTimeout")
                .promiseTimeout(r, m)
                .catch(function (t) {
                  return C(e.callId, t);
                })
            );
        })
        .then(function () {
          return r;
        });
    }
    function C(t, n) {
      n instanceof o("WACustomError").TimeoutError &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder ",
                ": early chat lookup still running after ",
                "ms",
              ])),
            t,
            m,
          )
          .tags("non-sad")
          .sendLogs("voip-placeholder-prefetch-turn-timeout", { sampling: _ });
    }
    function b(e, t) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": early chat lookup failed",
            ])),
          e,
        )
        .catching(r("getErrorSafe")(t))
        .tags("non-sad")
        .sendLogs("voip-placeholder-prefetch-fail", { sampling: _ });
    }
    function v() {
      var e = Date.now() - d;
      f.forEach(function (t, n) {
        var r = t.lookupTurn,
          o = t.startedAtMs;
        o < e && ((r.isAbandoned = !0), f.delete(n));
      });
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callCreator,
            n = e.callId,
            r = e.groupJid;
          if (
            o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(n) !=
            null
          )
            return null;
          var a = yield o(
            "WAWebVoipBackendCallLogPlaceholderTargetResolver",
          ).getCallLogPlaceholderTargetDetails({
            callCreatorWid: t,
            callId: n,
            groupJid: r,
          });
          return a == null ||
            r != null ||
            (yield o("WAWebChatFindBridge").findLocal(a.chatId.toString())) !=
              null
            ? a
            : null;
        })),
        R.apply(this, arguments)
      );
    }
    ((l.MAX_PREFETCHED_PLACEHOLDER_TARGETS = c),
      (l.MAX_PREFETCHED_PLACEHOLDER_TARGET_AGE_MS = d),
      (l.MAX_LOOKUP_TURN_MS = m),
      (l.prefetchCallOfferPlaceholderTarget = g),
      (l.takePrefetchedPlaceholderTarget = h));
  },
  98,
);
