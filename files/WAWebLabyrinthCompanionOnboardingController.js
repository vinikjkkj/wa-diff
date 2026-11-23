__d(
  "WAWebLabyrinthCompanionOnboardingController",
  [
    "WALogger",
    "WAPromiseBackoffs",
    "WATimeUtils",
    "WAWebLabyrinthCompanionRegisteredListeners",
    "WAWebLabyrinthCompanionRegistration",
    "WAWebLabyrinthCompanionTestMessageController",
    "WAWebLabyrinthLoadCompanionOnboarding",
    "WAWebLabyrinthLocalIdentity",
    "WAWebLabyrinthPendingAddPeerPayload",
    "WAWebLabyrinthReportedHistoryStart",
    "WAWebLabyrinthSaveCompanionOnboarding",
    "WAWebLabyrinthSaveRegisteredCompanion",
    "WAWebODS",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 5 * o("WATimeUtils").DAY_MILLISECONDS,
      c = 2 * 1e3,
      d = {
        algo: { first: c, type: "exponential" },
        max: o("WATimeUtils").HOUR_MILLISECONDS,
      },
      m = {
        "already-registered": { kind: "abandon", reason: "already-registered" },
        "identity-key-error": { kind: "retry", reason: "web-identity" },
        "load-device-state-error": { kind: "retry", reason: "storage" },
        "local-account-changed": { kind: "abandon", reason: "account-changed" },
        "local-account-changed-after-registration": {
          kind: "abandon",
          reason: "account-changed",
        },
        "missing-local-account-id": {
          kind: "defer",
          reason: "missing-local-account-id",
        },
        "missing-local-device-id": {
          kind: "defer",
          reason: "missing-local-device-id",
        },
        "missing-wa-canonical-user-fbid": {
          kind: "defer",
          reason: "missing-wa-canonical-user-fbid",
        },
        "no-active-epoch": { kind: "abandon", reason: "no-active-epoch" },
        "onboarding-disabled": { kind: "abandon", reason: "gated-off" },
        "persist-device-state-error": { kind: "retry", reason: "storage" },
        "sign-binding-error": { kind: "retry", reason: "web-identity" },
      },
      p = null,
      _ = null,
      f = 0,
      g = !1;
    function h() {
      if (p != null) return p;
      g = !1;
      var t = C()
        .catch(function (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[labyrinth-companion-onboarding] run failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .tags("labyrinth")
            .sendLogs("labyrinth-companion-onboarding-run-failed"),
            M(o("WATimeUtils").HOUR_MILLISECONDS));
        })
        .finally(function () {
          p = null;
        });
      return ((p = t), t);
    }
    function y() {
      ((g = !0),
        w(),
        o(
          "WAWebLabyrinthCompanionTestMessageController",
        ).stopLabyrinthCompanionTestMessageCheck(),
        (f = 0),
        o("WAWebLabyrinthPendingAddPeerPayload").holdAddPeerPayload(null));
    }
    async function C() {
      w();
      var e = f;
      (await b(), f === e && (f = 0));
    }
    async function b() {
      await v();
      var e = o("WAWebLabyrinthPendingAddPeerPayload").takeAddPeerPayload();
      if (e != null && !(await S(e))) {
        g ||
          (o("WAWebLabyrinthPendingAddPeerPayload").putBackAddPeerPayload(e),
          N());
        return;
      }
      if (!g) {
        var t = await o(
          "WAWebLabyrinthLoadCompanionOnboarding",
        ).loadLabyrinthCompanionOnboarding();
        if (!t.success) {
          (r("WAWebODS").incr("web.app.labyrinth_add_peer.load_failed"), N());
          return;
        }
        t.value != null && (await R(t.value));
      }
    }
    async function v() {
      var e = await o(
        "WAWebLabyrinthPendingAddPeerPayload",
      ).restoreAddPeerPayload();
      if (!e.success) {
        (o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-companion-onboarding] restoring the pairing payload copy failed",
              ])),
          )
          .catching(e.error.error),
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.pairing.restore_failed",
          ));
        return;
      }
      e.value &&
        r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.restored");
    }
    async function S(e) {
      var t = await o(
        "WAWebLabyrinthSaveCompanionOnboarding",
      ).saveLabyrinthCompanionOnboarding({
        attemptCount: 0,
        capturedAt: o("WATimeUtils").castToMillisTime(
          o("WATimeUtils").unixTimeMs(),
        ),
        lastFailure: null,
        nextAttemptAt: null,
        step: babelHelpers.extends({ kind: "captured" }, e),
      });
      return (
        t.success
          ? r("WAWebODS").incr("web.app.labyrinth_add_peer.persisted")
          : r("WAWebODS").incr("web.app.labyrinth_add_peer.persist_failed"),
        t.success
      );
    }
    async function R(e) {
      var t = e.step;
      if (t.kind === "registered") {
        T(e);
        return;
      }
      if (t.kind !== "abandoned") {
        if (L(e)) {
          await D(e, { kind: "abandon", reason: "expired" });
          return;
        }
        var n = E(e);
        if (n > 0) {
          M(n);
          return;
        }
        var a = o("WAWebLabyrinthLocalIdentity").getLabyrinthLocalIdentity();
        if (!a.success) {
          B(a.error.kind);
          return;
        }
        var i = babelHelpers.extends({}, e, {
          attemptCount: e.attemptCount + 1,
          lastFailure: null,
          nextAttemptAt: null,
        });
        if (!(await P(i))) {
          N();
          return;
        }
        r("WAWebODS").incr("web.app.labyrinth_add_peer.attempted");
        var l =
          t.kind === "captured"
            ? await k(i, {
                advSecret: t.advSecret,
                sealedPayload: t.sealedPayload,
              })
            : t.prepared;
        l != null &&
          (await I(
            babelHelpers.extends({}, i, {
              step: { kind: "prepared", prepared: l },
            }),
            l,
          ));
      }
    }
    function L(e) {
      return (
        o("WATimeUtils").unixTimeMs() -
          o("WATimeUtils").fromMillisTime(e.capturedAt) >
        u
      );
    }
    function E(e) {
      var t = e.nextAttemptAt;
      if (t == null) return 0;
      var n =
        o("WATimeUtils").fromMillisTime(t) - o("WATimeUtils").unixTimeMs();
      return n > 2 * o("WATimeUtils").HOUR_MILLISECONDS ? 0 : n;
    }
    async function k(e, t) {
      if (g) return null;
      var n = await o(
        "WAWebLabyrinthCompanionRegistration",
      ).prepareLabyrinthCompanion(t);
      if (!n.success) return (await D(e, A(n.error)), null);
      r("WAWebODS").incr("web.app.labyrinth_add_peer.opened");
      var a = await P(
        babelHelpers.extends({}, e, {
          step: { kind: "prepared", prepared: n.value },
        }),
      );
      return a
        ? n.value
        : (await D(e, { kind: "retry", reason: "storage" }), null);
    }
    async function I(e, t) {
      if (!g) {
        var n = await o(
          "WAWebLabyrinthCompanionRegistration",
        ).enrolLabyrinthCompanion(t);
        if (!n.success) {
          await D(e, A(n.error));
          return;
        }
        if (!g) {
          var a = babelHelpers.extends({}, e, { step: { kind: "registered" } }),
            i = await o(
              "WAWebLabyrinthSaveRegisteredCompanion",
            ).saveRegisteredLabyrinthCompanion(
              o("WAWebLabyrinthCompanionRegistration").labyrinthCompanionBackup(
                t,
                n.value,
              ),
              a,
            );
          if (!i.success) {
            await D(e, { kind: "retry", reason: "storage" });
            return;
          }
          (await o(
            "WAWebLabyrinthReportedHistoryStart",
          ).keepLabyrinthReportedHistoryStartFromPairing(
            t.reportedHistoryStartSec,
          ),
            r("WAWebODS").incr("web.app.labyrinth_add_peer.registered"),
            o(
              "WAWebLabyrinthCompanionRegisteredListeners",
            ).notifyLabyrinthCompanionRegistered(),
            g ||
              o(
                "WAWebLabyrinthCompanionTestMessageController",
              ).startLabyrinthCompanionTestMessageCheck(a));
        }
      }
    }
    function T(e) {
      g ||
        o(
          "WAWebLabyrinthCompanionTestMessageController",
        ).resumeLabyrinthCompanionTestMessageCheck(e);
    }
    async function D(e, t) {
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "abandon" &&
          "reason" in n
        ) {
          var r = n.reason;
          await x(e, r);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "retry" &&
          "reason" in n
        ) {
          var o = n.reason;
          await $(e, o);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "defer" &&
          "reason" in n
        ) {
          var a = n.reason;
          (B(a), await P(babelHelpers.extends({}, e, { lastFailure: a })));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    async function x(e, t) {
      var n = await P(
        babelHelpers.extends({}, e, {
          lastFailure: t,
          nextAttemptAt: null,
          step: { kind: "abandoned", reason: t },
        }),
      );
      if (!n) {
        N();
        return;
      }
      W(t);
    }
    async function $(e, t) {
      var n = o("WAPromiseBackoffs").getDelay(e.attemptCount, d),
        r = await P(
          babelHelpers.extends({}, e, {
            lastFailure: t,
            nextAttemptAt: o("WATimeUtils").castToMillisTime(
              o("WATimeUtils").unixTimeMs() + n,
            ),
          }),
        );
      if (!r) {
        N();
        return;
      }
      (q(t), M(n));
    }
    async function P(e) {
      if (g) return !1;
      var t = await o(
        "WAWebLabyrinthSaveCompanionOnboarding",
      ).saveLabyrinthCompanionOnboarding(e);
      return (
        t.success ||
          r("WAWebODS").incr("web.app.labyrinth_add_peer.save_failed"),
        t.success
      );
    }
    function N() {
      g || ((f += 1), M(o("WAPromiseBackoffs").getDelay(f, d)));
    }
    function M(e) {
      (w(),
        !g &&
          (_ = self.setTimeout(function () {
            h();
          }, e)));
    }
    function w() {
      _ != null && (self.clearTimeout(_), (_ = null));
    }
    function A(e) {
      return e.kind === "add-peer-device-error" ||
        e.kind === "fetch-epoch-chain-error"
        ? F(e.error)
        : e.kind === "prepare-add-peer-device-error"
          ? O(e.error)
          : m[e.kind];
    }
    function F(e) {
      return e.kind !== "server-rejection"
        ? { kind: "retry", reason: "network" }
        : e.errorCode === "CONFLICT"
          ? { kind: "abandon", reason: "conflict" }
          : e.errorCode === "NOT_FOUND"
            ? { kind: "abandon", reason: "not-found" }
            : e.errorCode === "INVALID_STATE"
              ? { kind: "abandon", reason: "invalid-state" }
              : { kind: "retry", reason: "server" };
    }
    function O(e) {
      return ((typeof e == "object" && e !== null) || typeof e == "function") &&
        (e.kind === "missing-output" || e.kind === "wasm-output-error")
        ? { kind: "abandon", reason: "payload-unopenable" }
        : { kind: "retry", reason: "wasm" };
    }
    function B(e) {
      e === "missing-wa-canonical-user-fbid"
        ? r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.deferred.no_canonical_user",
          )
        : r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.deferred.no_local_identity",
          );
    }
    function W(e) {
      e: {
        if (e === "already-registered") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.abandoned.already_registered",
          );
          break e;
        }
        if (e === "account-changed") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.abandoned.account_changed",
          );
          break e;
        }
        if (e === "conflict") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.abandoned.conflict");
          break e;
        }
        if (e === "expired") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.abandoned.expired");
          break e;
        }
        if (e === "gated-off") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.abandoned.gated_off");
          break e;
        }
        if (e === "invalid-state") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.abandoned.invalid_state",
          );
          break e;
        }
        if (e === "no-active-epoch") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.abandoned.no_active_epoch",
          );
          break e;
        }
        if (e === "not-found") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.abandoned.not_found");
          break e;
        }
        if (e === "payload-unopenable") {
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.abandoned.payload_unopenable",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function q(e) {
      e: {
        if (e === "network") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.retry.network");
          break e;
        }
        if (e === "server") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.retry.server");
          break e;
        }
        if (e === "storage") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.retry.storage");
          break e;
        }
        if (e === "wasm") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.retry.wasm");
          break e;
        }
        if (e === "web-identity") {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.retry.web_identity");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.runLabyrinthCompanionOnboarding = h),
      (l.stopLabyrinthCompanionOnboarding = y));
  },
  98,
);
