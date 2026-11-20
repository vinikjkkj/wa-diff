__d(
  "WAWebWindowsDrainIncomingMessages",
  [
    "$InternalEnum",
    "Promise",
    "WAComms",
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAWebGetMessageCache",
    "WAWebMessageQueue",
    "WAWebMessageQueueImpl",
    "WAWebODS",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeUtils",
    "WAWebOneQueue",
    "WAWebWindowsLoginOfflineDelivery",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 5e3,
      p = 2e3,
      _ = 50,
      f = 3,
      g = n("$InternalEnum")({
        Drained: "drained",
        StillQueued: "still_queued",
        SocketClosed: "socket_closed",
        TimedOut: "timed_out",
        Failed: "failed",
      }),
      h = (d || (d = n("Promise"))).resolve();
    function y() {
      var e = self.performance.now() + m,
        t = function () {
          return C(e);
        },
        n = h.then(t, t);
      return ((h = n), n);
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = self.performance.now(),
            r = yield v(t),
            a = Math.round(self.performance.now() - n);
          return (
            w(r),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsDrainIncomingMessages: ",
                  " in ",
                  " ms",
                ])),
              r,
              a,
            ),
            r
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e - self.performance.now();
          if (t <= 0)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsDrainIncomingMessages: timed out waiting for an earlier drain",
                  ])),
              ),
              g.TimedOut
            );
          var n = { stopped: !1 };
          try {
            return (
              yield o("WAPromiseTimeout").promiseTimeout(R(n, 1), t),
              yield $()
            );
          } catch (e) {
            return e instanceof o("WACustomError").TimeoutError
              ? (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsDrainIncomingMessages: timed out",
                    ])),
                ),
                g.TimedOut)
              : (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsDrainIncomingMessages: failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).name,
                ),
                g.Failed);
          } finally {
            n.stopped = !0;
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e.stopped ||
            (yield E(e),
            !(e.stopped || !M()) &&
              (yield o("WAWebWindowsLoginOfflineDelivery").waitForPingAnswer(),
              t < f && (yield D()) && (yield R(e, t + 1))));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.hasInitOfflineResumeManager() &&
            (yield I(e, self.performance.now() + p),
            !e.stopped &&
              (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
                (yield o("WAWebOneQueue").waitForOneQueueOfflineWorkDrained()),
              !e.stopped &&
                (yield o("WAWebOfflineResumeUtils").clearOfflineSnapShot())));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e.stopped ||
            !N() ||
            self.performance.now() >= t ||
            (yield o("WAPromiseDelays").delayMs(_), yield I(e, t));
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return N()
            ? !0
            : o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.hasInitOfflineResumeManager()
              ? (yield o("WAWebGetMessageCache").getMessageCache().size()) > 0
              : !1;
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return M()
            ? (yield D())
              ? g.StillQueued
              : g.Drained
            : g.SocketClosed;
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      var e = o("WAWebMessageQueue").getMessageQueueDepth(),
        t = e.offline,
        n = e.online;
      return t + n > 0;
    }
    function M() {
      var e;
      return (
        ((e = o("WAComms").getComms()) == null
          ? void 0
          : e.isSocketConnected()) === !0
      );
    }
    function w(e) {
      e: {
        if (e === g.Drained) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.drained",
          );
          break e;
        }
        if (e === g.StillQueued) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.still_queued",
          );
          break e;
        }
        if (e === g.SocketClosed) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.socket_closed",
          );
          break e;
        }
        if (e === g.TimedOut) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.timed_out",
          );
          break e;
        }
        if (e === g.Failed) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.failed",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.INCOMING_DRAIN_TIMEOUT_MS = m),
      (l.IncomingDrainOutcome = g),
      (l.drainIncomingMessagesBeforeSocketClose = y));
  },
  98,
);
