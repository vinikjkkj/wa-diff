__d(
  "WAWebVoipActionPrefetchCallOfferPlaceholderTarget",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebChatFindBridge",
    "WAWebPromiseQueue",
    "WAWebVoipActionWriteCallLogPlaceholder",
    "WAWebVoipBackendCallLogPlaceholderTargetResolver",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWaitForInitialChatsSynced",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e3,
      c = 600 * 1e3,
      d =
        o("WAWebVoipActionWriteCallLogPlaceholder")
          .PLACEHOLDER_TARGET_SLOT_WAIT_MS / 2,
      m = new (o("WAWebPromiseQueue").PromiseQueue)(),
      p = 0.01,
      _ = new Map();
    function f(e) {
      if ((_.size >= u && b(), !(_.has(e.callId) || _.size >= u))) {
        var t = o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced(),
          n = { isAbandoned: !1 },
          r = t.then(function () {
            return h(e, n);
          });
        (r.catch(function (t) {
          return C(e.callId, t);
        }),
          _.set(e.callId, {
            initialChatsSynced: t,
            lookupTurn: n,
            startedAtMs: Date.now(),
            target: r,
          }));
      }
    }
    function g(e) {
      var t = _.get(e);
      if ((_.delete(e), t == null)) return null;
      var n = function () {
        t.lookupTurn.isAbandoned = !0;
      };
      return t.initialChatsSynced !==
        o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced() ||
        o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(e) != null
        ? (n(), null)
        : { abandon: n, target: t.target };
    }
    function h(e, t) {
      var n = Promise.resolve(null);
      return m
        .enqueue(function () {
          if (!t.isAbandoned)
            return (
              (n = v(e)),
              o("WAPromiseTimeout")
                .promiseTimeout(n, d)
                .catch(function (t) {
                  return y(e.callId, t);
                })
            );
        })
        .then(function () {
          return n;
        });
    }
    function y(t, n) {
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
            d,
          )
          .tags("non-sad")
          .sendLogs("voip-placeholder-prefetch-turn-timeout", { sampling: p });
    }
    function C(e, t) {
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
        .sendLogs("voip-placeholder-prefetch-fail", { sampling: p });
    }
    function b() {
      var e = Date.now() - c;
      _.forEach(function (t, n) {
        var r = t.lookupTurn,
          o = t.startedAtMs;
        o < e && ((r.isAbandoned = !0), _.delete(n));
      });
    }
    async function v(e) {
      var t = e.callCreator,
        n = e.callId,
        r = e.groupJid;
      if (
        o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(n) != null
      )
        return null;
      var a = await o(
        "WAWebVoipBackendCallLogPlaceholderTargetResolver",
      ).getCallLogPlaceholderTargetDetails({
        callCreatorWid: t,
        callId: n,
        groupJid: r,
      });
      return a == null ||
        r != null ||
        (await o("WAWebChatFindBridge").findLocal(a.chatId.toString())) != null
        ? a
        : null;
    }
    ((l.MAX_PREFETCHED_PLACEHOLDER_TARGETS = u),
      (l.MAX_PREFETCHED_PLACEHOLDER_TARGET_AGE_MS = c),
      (l.MAX_LOOKUP_TURN_MS = d),
      (l.prefetchCallOfferPlaceholderTarget = f),
      (l.takePrefetchedPlaceholderTarget = g));
  },
  98,
);
