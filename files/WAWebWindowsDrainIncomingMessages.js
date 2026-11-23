__d(
  "WAWebWindowsDrainIncomingMessages",
  [
    "$InternalEnum",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 5e3,
      m = 2e3,
      p = 50,
      _ = 3,
      f = n("$InternalEnum")({
        Drained: "drained",
        StillQueued: "still_queued",
        SocketClosed: "socket_closed",
        TimedOut: "timed_out",
        Failed: "failed",
      }),
      g = Promise.resolve();
    function h() {
      var e = self.performance.now() + d,
        t = function () {
          return y(e);
        },
        n = g.then(t, t);
      return ((g = n), n);
    }
    async function y(t) {
      var n = self.performance.now(),
        r = await C(t),
        a = Math.round(self.performance.now() - n);
      return (
        I(r),
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
    }
    async function C(e) {
      var t = e - self.performance.now();
      if (t <= 0)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "WindowsDrainIncomingMessages: timed out waiting for an earlier drain",
              ])),
          ),
          f.TimedOut
        );
      var n = { stopped: !1 };
      try {
        return (
          await o("WAPromiseTimeout").promiseTimeout(b(n, 1), t),
          await L()
        );
      } catch (e) {
        return e instanceof o("WACustomError").TimeoutError
          ? (o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsDrainIncomingMessages: timed out",
                ])),
            ),
            f.TimedOut)
          : (o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsDrainIncomingMessages: failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).name,
            ),
            f.Failed);
      } finally {
        n.stopped = !0;
      }
    }
    async function b(e, t) {
      e.stopped ||
        (await v(e),
        !(e.stopped || !k()) &&
          (await o("WAWebWindowsLoginOfflineDelivery").waitForPingAnswer(),
          t < _ && (await R()) && (await b(e, t + 1))));
    }
    async function v(e) {
      o(
        "WAWebOfflineHandler",
      ).OfflineMessageHandler.hasInitOfflineResumeManager() &&
        (await S(e, self.performance.now() + m),
        !e.stopped &&
          (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
            (await o("WAWebOneQueue").waitForOneQueueOfflineWorkDrained()),
          !e.stopped &&
            (await o("WAWebOfflineResumeUtils").clearOfflineSnapShot())));
    }
    async function S(e, t) {
      e.stopped ||
        !E() ||
        self.performance.now() >= t ||
        (await o("WAPromiseDelays").delayMs(p), await S(e, t));
    }
    async function R() {
      return E()
        ? !0
        : o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.hasInitOfflineResumeManager()
          ? (await o("WAWebGetMessageCache").getMessageCache().size()) > 0
          : !1;
    }
    async function L() {
      return k() ? ((await R()) ? f.StillQueued : f.Drained) : f.SocketClosed;
    }
    function E() {
      var e = o("WAWebMessageQueue").getMessageQueueDepth(),
        t = e.offline,
        n = e.online;
      return t + n > 0;
    }
    function k() {
      var e;
      return (
        ((e = o("WAComms").getComms()) == null
          ? void 0
          : e.isSocketConnected()) === !0
      );
    }
    function I(e) {
      e: {
        if (e === f.Drained) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.drained",
          );
          break e;
        }
        if (e === f.StillQueued) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.still_queued",
          );
          break e;
        }
        if (e === f.SocketClosed) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.socket_closed",
          );
          break e;
        }
        if (e === f.TimedOut) {
          r("WAWebODS").incr(
            "web.hybrid.bridge.connection.incoming_drain.timed_out",
          );
          break e;
        }
        if (e === f.Failed) {
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
    ((l.INCOMING_DRAIN_TIMEOUT_MS = d),
      (l.IncomingDrainOutcome = f),
      (l.drainIncomingMessagesBeforeSocketClose = h));
  },
  98,
);
