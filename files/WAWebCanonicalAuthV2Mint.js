__d(
  "WAWebCanonicalAuthV2Mint",
  [
    "WAPromiseDelays",
    "WAWebCanonicalAuthV2MintHistory",
    "WAWebCanonicalAuthV2Policy",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalNoiseAuthClient",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCanonicalEntEventMarker",
    "WAWebWamEnumCanonicalEntRecoveryCompanionEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2e3;
    async function s(e, t, n) {
      var r = o("WAWebCanonicalNoiseAuthClient").makeNoiseProofKey(
        t,
        await o("WAWebUserPrefsInfoStore").waNoiseInfo.getIfUnlocked(),
      );
      if (r == null) return { kind: "unavailable" };
      var a = C(r, n.signal) ? await c(e, n.signal) : { kind: "stale" };
      if (a.kind !== "tracked" && a.kind !== "untracked") return p(a);
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CRED_REQUEST_STARTED,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        e,
      );
      var i = await f({
          proofKey: r,
          purpose: e,
          session: n,
          latch: { tokenRequestSent: !1 },
        }),
        l = await m(a, i, n.signal);
      return C(r, n.signal) ? _(i, l) : { kind: "cancelled", retryAtMs: l };
    }
    function u(e, t) {
      var n = e.attempts,
        r = e.failure,
        a = e.tokenRequestSent;
      (o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        r.cause === "timeout"
          ? o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
              .CANONICAL_ENT_RECOVERY_COMPANION_EVENT
              .CRED_REQUEST_FAILED_TIMEOUT
          : o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
              .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CRED_REQUEST_FAILED_ERROR,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .ERROR,
        t,
      ),
        o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
          r.cause === "store_failed"
            ? "noise_auth_store_write_failed"
            : "noise_auth_mint_failed",
          t,
          JSON.stringify({
            phase: r.phase,
            reason: r.cause,
            httpStatus: r.httpStatus,
            errorName: r.errorName,
            tokenRequested: a,
            attempts: n,
          }),
        ));
    }
    async function c(e, t) {
      var n = o(
        "WAWebCanonicalGating",
      ).getCanonicalAuthV2MinMintIntervalSeconds();
      if (n <= 0) return { kind: "untracked" };
      var r = await o("WAWebCanonicalAuthV2MintHistory").updateMintHistory(
        function (e) {
          return t.aborted
            ? { next: null, result: { kind: "stale" } }
            : d(e, n);
        },
      );
      return (
        (r == null ? void 0 : r.kind) === "refused" &&
          o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
            "noise_auth_mint_throttled",
            e,
          ),
        r != null ? r : { kind: "unowned" }
      );
    }
    function d(e, t) {
      var n = Date.now(),
        r = o("WAWebCanonicalAuthV2Policy").getMintAllowedAtMs(e, t, n);
      if (n < r)
        return { next: null, result: { kind: "refused", retryAtMs: r } };
      var a = o("WAWebCanonicalAuthV2Policy").claimMintThrottle(e, n);
      return {
        next: a,
        result: { kind: "tracked", throttle: a, intervalSeconds: t },
      };
    }
    async function m(e, t, n) {
      if (e.kind !== "tracked") return 0;
      var r =
        t.kind === "cancelled"
          ? null
          : await o("WAWebCanonicalAuthV2MintHistory").updateMintHistory(
              function (r) {
                var a = n.aborted
                  ? null
                  : o("WAWebCanonicalAuthV2Policy").settleMintThrottle(
                      r != null ? r : e.throttle,
                      t,
                    );
                return { next: a, result: a };
              },
            );
      return o("WAWebCanonicalAuthV2Policy").getMintBackoffEndMs(
        r != null ? r : e.throttle,
        e.intervalSeconds,
      );
    }
    function p(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "refused" &&
          "retryAtMs" in e
        ) {
          var t = e.retryAtMs;
          return { kind: "throttled", retryAtMs: t };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unowned"
        )
          return { kind: "unavailable" };
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "stale"
        )
          return { kind: "cancelled", retryAtMs: 0 };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function _(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "stored"
        )
          return { kind: "stored" };
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failed" &&
          "failure" in e &&
          "tokenRequestSent" in e &&
          "attempts" in e
        ) {
          var n = e.failure,
            r = e.tokenRequestSent,
            o = e.attempts;
          return {
            kind: "failed",
            failure: n,
            tokenRequestSent: r,
            attempts: o,
            retryAtMs: t,
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "cancelled"
        )
          return { kind: "cancelled", retryAtMs: t };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    async function f(t) {
      var n = await g(t),
        r =
          n.kind === "failed" &&
          o("WAWebCanonicalAuthV2Policy").isRetriableAttemptFailure(n.failure)
            ? n.failure
            : null;
      r != null &&
        !o("WAWebCanonicalAuthV2Policy").isRejectedProof(r) &&
        (await o("WAPromiseDelays").delayMs(e));
      var a = r != null && !t.session.signal.aborted,
        i = a ? await g(t) : n;
      return i.kind === "failed"
        ? {
            kind: "failed",
            failure: i.failure,
            tokenRequestSent: t.latch.tokenRequestSent,
            attempts: a ? 2 : 1,
          }
        : i;
    }
    async function g(e) {
      var t = o("WAWebCanonicalEntRecoveryWam").generateRequestId(),
        n = await h(e, t);
      if (n.kind !== "issued") return n;
      var r = await o("WAWebCanonicalNoiseAuthClient").signNoiseChallenge(
        e.proofKey,
        n.challenge,
      );
      return r.kind === "failed"
        ? {
            kind: "failed",
            failure: {
              phase: "proof",
              cause: "signing_failed",
              httpStatus: null,
              errorName: r.errorName,
            },
          }
        : y(e, t, r.proof);
    }
    async function h(e, t) {
      var n = e.proofKey,
        r = e.purpose,
        a = e.session;
      if (!C(n, a.signal)) return { kind: "cancelled" };
      b(
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        r,
        t,
      );
      var i = await o("WAWebCanonicalNoiseAuthClient").requestNoiseChallenge(
        n,
        a.signal,
      );
      if (!C(n, a.signal)) return { kind: "cancelled" };
      if (i.kind === "failed") {
        var l;
        return (
          b(
            o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
              .ERROR,
            r,
            t,
          ),
          {
            kind: "failed",
            failure: {
              phase: "challenge",
              cause: i.failure,
              httpStatus: i.httpStatus,
              errorName: (l = i.errorName) != null ? l : null,
            },
          }
        );
      }
      return (
        b(
          o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
            .SUCCESS,
          r,
          t,
        ),
        i
      );
    }
    async function y(e, t, n) {
      var r = e.latch,
        a = e.proofKey,
        i = e.purpose,
        l = e.session;
      if (!C(a, l.signal)) return { kind: "cancelled" };
      (v(
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        i,
        t,
      ),
        (r.tokenRequestSent = !0));
      var s = o("WAWebCanonicalNoiseAuthClient").exchangeNoiseProof(n);
      l.onTokenRequest(s);
      var u = await s;
      if (!C(a, l.signal)) return { kind: "cancelled" };
      if (u.kind === "failed") {
        var c;
        return (
          v(
            o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
              .ERROR,
            i,
            t,
          ),
          {
            kind: "failed",
            failure: {
              phase: "token",
              cause: u.failure,
              httpStatus: u.httpStatus,
              errorName: (c = u.errorName) != null ? c : null,
            },
          }
        );
      }
      return (
        v(
          o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
            .SUCCESS,
          i,
          t,
        ),
        { kind: "stored" }
      );
    }
    function C(e, t) {
      return (
        !t.aborted &&
        o("WAWebCanonicalNoiseAuthClient").isProofKeyFor(
          e,
          o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1),
        )
      );
    }
    function b(e, t, n) {
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.NOISE_AUTH_CHALLENGE,
        e,
        t,
        n,
      );
    }
    function v(e, t, n) {
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.NOISE_AUTH_TOKEN,
        e,
        t,
        n,
      );
    }
    ((l.runMint = s), (l.logMintFailed = u));
  },
  98,
);
