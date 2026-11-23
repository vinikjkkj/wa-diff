__d(
  "WAWebLabyrinthCompanionTestMessageController",
  [
    "JSResourceForInteraction",
    "WAPromiseBackoffs",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebLabyrinthSaveCompanionOnboarding",
    "WAWebODS",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10 * o("WATimeUtils").MINUTE_MILLISECONDS,
      s = {
        algo: { first: 15 * 1e3, type: "exponential" },
        max: 2 * o("WATimeUtils").MINUTE_MILLISECONDS,
      },
      u = 30 * 1e3,
      c = r("JSResourceForInteraction")(
        "WAWebLabyrinthCompanionTestMessageCheck",
      ).__setRef("WAWebLabyrinthCompanionTestMessageController"),
      d = {
        "decode-ciphertext-error": "decrypt",
        "decode-epoch-edge-error": "epochs",
        "decrypt-error": "decrypt",
        "derive-epochs-error": "epochs",
        exception: "exception",
        "fetch-page-error": "fetch",
        "load-device-state-error": "load_state",
        "missing-device-state": "load_state",
        "missing-epoch-key": "epochs",
        "missing-payload": "decrypt",
        "orf-thread-id-error": "thread",
        "parse-error": "parse",
        "thread-id-error": "thread",
      },
      m = 0,
      p = null,
      _ = !1;
    function f(e) {
      (h(), (_ = !0), y(e, 1, m, !1));
    }
    function g(e) {
      var t = e.testMessage;
      _ ||
        (t == null ? void 0 : t.outcome.kind) !== "checking" ||
        ((_ = !0), y(e, t.attemptCount + 1, m, !0));
    }
    function h() {
      ((m += 1), (_ = !1), p != null && (self.clearTimeout(p), (p = null)));
    }
    async function y(t, n, a, i) {
      var l = await C();
      if (a === m) {
        var u = o("WATimeUtils").unixTimeMs(),
          c = o("WAPromiseBackoffs").getDelay(n, s),
          d = u + c < o("WATimeUtils").fromMillisTime(t.capturedAt) + e,
          f = b(l, d),
          g = await o(
            "WAWebLabyrinthSaveCompanionOnboarding",
          ).saveLabyrinthCompanionOnboarding(
            babelHelpers.extends({}, t, {
              testMessage: {
                attemptCount: n,
                checkedAt: o("WATimeUtils").castToMillisTime(u),
                outcome: f,
              },
            }),
          );
        if (
          (g.success ||
            r("WAWebODS").incr(
              "web.app.labyrinth_add_peer.test_message.save_failed",
            ),
          a === m)
        ) {
          if (f.kind === "checking") {
            p = self.setTimeout(function () {
              y(t, n + 1, a, i || g.success);
            }, c);
            return;
          }
          if (!g.success && i) {
            _ = !1;
            return;
          }
          v(l, u - o("WATimeUtils").fromMillisTime(t.capturedAt));
        }
      }
    }
    async function C() {
      try {
        var e = await o("WAPromiseTimeout").promiseTimeout(c.load(), u),
          t = e.checkLabyrinthCompanionTestMessage;
        return await t();
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "exception",
        });
      }
    }
    function b(e, t) {
      if (e.success && e.value.kind === "restored")
        return { createdAt: e.value.createdAtMs, kind: "restored" };
      var n = e.success ? "missing" : e.error.kind;
      return t
        ? { kind: "checking", lastResult: n }
        : e.success
          ? { kind: "missing" }
          : { kind: "failed", reason: e.error.kind };
    }
    function v(e, t) {
      if (!e.success) {
        S(d[e.error.kind]);
        return;
      }
      if (e.value.kind === "missing") {
        r("WAWebODS").incr("web.app.labyrinth_add_peer.test_message.missing");
        return;
      }
      (r("WAWebODS").incr("web.app.labyrinth_add_peer.test_message.restored"),
        R(t));
    }
    function S(e) {
      e: {
        if (e === "decrypt") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.failed.decrypt",
          );
          break e;
        }
        if (e === "epochs") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.failed.epochs",
          );
          break e;
        }
        if (e === "exception") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.failed.exception",
          );
          break e;
        }
        if (e === "fetch") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.failed.fetch",
          );
          break e;
        }
        if (e === "load_state") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.failed.load_state",
          );
          break e;
        }
        if (e === "parse") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.failed.parse",
          );
          break e;
        }
        if (e === "thread") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.failed.thread",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function R(t) {
      t < 10 * 1e3
        ? r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.test_message.restored_after.under_10s",
          )
        : t < o("WATimeUtils").MINUTE_MILLISECONDS
          ? r("WAWebODS").incr(
              "web.app.labyrinth_add_peer.test_message.restored_after.under_1m",
            )
          : t < 5 * o("WATimeUtils").MINUTE_MILLISECONDS
            ? r("WAWebODS").incr(
                "web.app.labyrinth_add_peer.test_message.restored_after.under_5m",
              )
            : t < e
              ? r("WAWebODS").incr(
                  "web.app.labyrinth_add_peer.test_message.restored_after.under_10m",
                )
              : r("WAWebODS").incr(
                  "web.app.labyrinth_add_peer.test_message.restored_after.over_10m",
                );
    }
    ((l.startLabyrinthCompanionTestMessageCheck = f),
      (l.resumeLabyrinthCompanionTestMessageCheck = g),
      (l.stopLabyrinthCompanionTestMessageCheck = h));
  },
  98,
);
