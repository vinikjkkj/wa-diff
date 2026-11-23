__d(
  "WAWebCanonicalAuthV2Mint",
  [
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
    async function e(e, t, n) {
      var r = o("WAWebCanonicalNoiseAuthClient").makeNoiseProofKey(
        t,
        await o("WAWebUserPrefsInfoStore").waNoiseInfo.getIfUnlocked(),
      );
      if (r == null) return { kind: "unavailable" };
      var a = y(r, n.signal) ? await u(e, n.signal) : { kind: "stale" };
      if (a.kind !== "tracked" && a.kind !== "untracked") return m(a);
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CRED_REQUEST_STARTED,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        e,
      );
      var i = await _({
          proofKey: r,
          purpose: e,
          session: n,
          latch: { tokenRequestSent: !1 },
        }),
        l = await d(a, i, n.signal);
      return y(r, n.signal) ? p(i, l) : { kind: "cancelled", retryAtMs: l };
    }
    function s(e, t) {
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
    async function u(e, t) {
      var n = o(
        "WAWebCanonicalGating",
      ).getCanonicalAuthV2MinMintIntervalSeconds();
      if (n <= 0) return { kind: "untracked" };
      var r = await o("WAWebCanonicalAuthV2MintHistory").updateMintHistory(
        function (e) {
          return t.aborted
            ? { next: null, result: { kind: "stale" } }
            : c(e, n);
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
    function c(e, t) {
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
    async function d(e, t, n) {
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
    function m(e) {
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
    function p(e, t) {
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
    async function _(e) {
      var t = await f(e),
        n =
          t.kind === "failed" &&
          o("WAWebCanonicalAuthV2Policy").isRejectedProof(t.failure),
        r = n ? await f(e) : t;
      return r.kind === "failed"
        ? {
            kind: "failed",
            failure: r.failure,
            tokenRequestSent: e.latch.tokenRequestSent,
            attempts: n ? 2 : 1,
          }
        : r;
    }
    async function f(e) {
      var t = o("WAWebCanonicalEntRecoveryWam").generateRequestId(),
        n = await g(e, t);
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
        : h(e, t, r.proof);
    }
    async function g(e, t) {
      var n = e.proofKey,
        r = e.purpose,
        a = e.session;
      if (!y(n, a.signal)) return { kind: "cancelled" };
      C(
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        r,
        t,
      );
      var i = await o("WAWebCanonicalNoiseAuthClient").requestNoiseChallenge(
        n,
        a.signal,
      );
      return y(n, a.signal)
        ? i.kind === "failed"
          ? (C(
              o("WAWebWamEnumCanonicalEntEventMarker")
                .CANONICAL_ENT_EVENT_MARKER.ERROR,
              r,
              t,
            ),
            {
              kind: "failed",
              failure: {
                phase: "challenge",
                cause: i.failure,
                httpStatus: i.httpStatus,
                errorName: null,
              },
            })
          : (C(
              o("WAWebWamEnumCanonicalEntEventMarker")
                .CANONICAL_ENT_EVENT_MARKER.SUCCESS,
              r,
              t,
            ),
            i)
        : { kind: "cancelled" };
    }
    async function h(e, t, n) {
      var r = e.latch,
        a = e.proofKey,
        i = e.purpose,
        l = e.session;
      if (!y(a, l.signal)) return { kind: "cancelled" };
      (b(
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        i,
        t,
      ),
        (r.tokenRequestSent = !0));
      var s = o("WAWebCanonicalNoiseAuthClient").exchangeNoiseProof(n);
      l.onTokenRequest(s);
      var u = await s;
      return y(a, l.signal)
        ? u.kind === "failed"
          ? (b(
              o("WAWebWamEnumCanonicalEntEventMarker")
                .CANONICAL_ENT_EVENT_MARKER.ERROR,
              i,
              t,
            ),
            {
              kind: "failed",
              failure: {
                phase: "token",
                cause: u.failure,
                httpStatus: u.httpStatus,
                errorName: null,
              },
            })
          : (b(
              o("WAWebWamEnumCanonicalEntEventMarker")
                .CANONICAL_ENT_EVENT_MARKER.SUCCESS,
              i,
              t,
            ),
            { kind: "stored" })
        : { kind: "cancelled" };
    }
    function y(e, t) {
      return (
        !t.aborted &&
        o("WAWebCanonicalNoiseAuthClient").isProofKeyFor(
          e,
          o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1),
        )
      );
    }
    function C(e, t, n) {
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.NOISE_AUTH_CHALLENGE,
        e,
        t,
        n,
      );
    }
    function b(e, t, n) {
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.NOISE_AUTH_TOKEN,
        e,
        t,
        n,
      );
    }
    ((l.runMint = e), (l.logMintFailed = s));
  },
  98,
);
