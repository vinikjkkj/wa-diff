__d(
  "WAWebDrainOrphansAfterOfflineDelivery",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebDBReplayParkedOrphans",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebSchemaMessageOrphans",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "offline-orphan-drain-failed",
      d = 1e4,
      m = null;
    function p(e, t) {
      if (e.length === 0) return Promise.resolve();
      var n = m != null ? m : _();
      for (var r of e) n.parentKeys.set(r.id.toString(), r.id);
      return (n.onScreen.push(t), n.drained);
    }
    function _() {
      var e = {
        parentKeys: new Map(),
        onScreen: [],
        drained: Promise.resolve(),
      };
      return ((m = e), (e.drained = f(e)), e);
    }
    async function f(t) {
      try {
        await o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drainOrphansAfterOfflineDelivery: waiting for offline delivery failed, draining anyway",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .tags("messaging")
          .sendLogs("offline-orphan-drain-wait-failed", { sampling: 0.01 });
      }
      ((m = null),
        await g(t.onScreen),
        (await h()) &&
          (await o("WAWebDBReplayParkedOrphans").replayParkedOrphans({
            parents: Array.from(t.parentKeys.values()),
            getKey: function (t) {
              return t;
            },
            isWaitingOrphan: o("WAWebBoolFunc").returnTrue,
            shouldReplay: o("WAWebBoolFunc").returnTrue,
            getReplayableParent: function (t, n) {
              return n;
            },
            sendLogsReason: c,
          })));
    }
    async function g(e) {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          Promise.all(e),
          d,
          "offline orphan drain waiting on UI notification",
        );
      } catch (e) {
        var t =
          e instanceof o("WACustomError").TimeoutError
            ? "timed out"
            : "rejected";
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "drainOrphansAfterOfflineDelivery: UI notification ",
                ", draining anyway",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(e))
          .tags("messaging")
          .sendLogs("offline-orphan-drain-ui-notification-unsettled", {
            sampling: 0.1,
          });
      }
    }
    async function h() {
      try {
        return (
          (await o("WAWebSchemaMessageOrphans")
            .getMessageOrphanTable()
            .count()) > 0
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "drainOrphansAfterOfflineDelivery: counting parked orphans failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("messaging")
            .sendLogs(c, { sampling: 0.01 }),
          !0
        );
      }
    }
    l.drainOrphansAfterOfflineDelivery = p;
  },
  98,
);
