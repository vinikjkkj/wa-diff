__d(
  "WAWebVoipOffloadedCleanupQueue",
  ["WAWebVoipMainThreadLockODS", "WAWebVoipRecentRpcMethods"],
  function (t, n, r, o, a, i, l) {
    var e = {
        cleanupPosition: null,
        isOfferBehind: null,
        isStarted: null,
        rpcsBehind: null,
      },
      s = 0;
    function u() {
      return (
        s++,
        {
          issueNumber: s,
          sentRpcCount: o("WAWebVoipRecentRpcMethods").getSentRpcCount(),
        }
      );
    }
    function c(e) {
      var t = _(e);
      e: {
        if (t.state === "not_sent") {
          o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadQueueEvent(
            "timeout_not_sent",
          );
          break e;
        }
        if (t.state === "overlapped") {
          o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadQueueEvent(
            "timeout_overlapped",
          );
          break e;
        }
        if (t.state === "sent") {
          p(t);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t.state,
        );
      }
      return t;
    }
    function d(e) {
      if ((e == null ? void 0 : e.state) !== "sent") return null;
      var t = f(e.cleanupPosition);
      return (
        o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadStartEvent(
          t === !0
            ? "no_reply_in_native"
            : t === !1
              ? "no_reply_in_queue"
              : t == null
                ? "no_reply_start_unknown"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })(),
        ),
        t
      );
    }
    function m(e) {
      _(e).isStarted === !1 &&
        o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadStartEvent(
          "start_unreported",
        );
    }
    function p(e) {
      var t;
      (o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadStartEvent(
        e.isStarted === !0
          ? "timeout_in_native"
          : e.isStarted === !1
            ? "timeout_in_queue"
            : e.isStarted === null || e.isStarted === void 0
              ? "timeout_start_unknown"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e.isStarted,
                  );
                })(),
      ),
        ((t = e.rpcsBehind) != null ? t : 0) > 0 &&
          o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadQueueEvent(
            "timeout_rpcs_behind",
          ),
        e.isOfferBehind === !0 &&
          o("WAWebVoipMainThreadLockODS").logMainThreadLockOffloadQueueEvent(
            "timeout_offer_behind",
          ));
    }
    function _(t) {
      if (s !== t.issueNumber)
        return babelHelpers.extends({}, e, { state: "overlapped" });
      var n = o("WAWebVoipRecentRpcMethods").getLastSentRpcPosition(
        "cleanupUnfinishedCallStats",
      );
      if (n == null || n <= t.sentRpcCount)
        return babelHelpers.extends({}, e, { state: "not_sent" });
      var r = o("WAWebVoipRecentRpcMethods").getLastSentRpcPosition(
        "handleIncomingSignalingOffer",
      );
      return {
        cleanupPosition: n,
        isOfferBehind: r != null && r > n,
        isStarted: f(n),
        rpcsBehind: o("WAWebVoipRecentRpcMethods").getSentRpcCount() - n,
        state: "sent",
      };
    }
    function f(e) {
      return e == null || !g()
        ? null
        : o("WAWebVoipRecentRpcMethods").getLastStartedRpcPosition(
            "cleanupUnfinishedCallStats",
          ) === e;
    }
    function g() {
      var e = o("WAWebVoipRecentRpcMethods").getLastSentRpcPosition("voipInit");
      return (
        e != null &&
        o("WAWebVoipRecentRpcMethods").getLastStartedRpcPosition("voipInit") ===
          e
      );
    }
    ((l.startOffloadedCleanupQueueTracking = u),
      (l.reportOffloadedCleanupQueueAtTimeout = c),
      (l.reportOffloadedCleanupNoReply = d),
      (l.reportOffloadedCleanupReply = m));
  },
  98,
);
