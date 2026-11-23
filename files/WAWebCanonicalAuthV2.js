__d(
  "WAWebCanonicalAuthV2",
  [
    "WAComms",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebCanonicalAuthV2Mint",
    "WAWebCanonicalAuthV2Policy",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalNoiseAuthClient",
    "WAWebCanonicalUserValidQuery",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebNoop",
    "WAWebUserPrefsCanonical",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCanonicalEntEventMarker",
    "WAWebWamEnumCanonicalEntRecoveryCompanionEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 30,
      s = new AbortController(),
      u = Promise.resolve(),
      c = null,
      d = null,
      m = {
        signal: s.signal,
        onTokenRequest: function (t) {
          d = t;
        },
      };
    async function p() {
      if (
        !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd ||
        !o("WAComms").isCommsInitialized()
      )
        return e;
      if (
        s.signal.aborted ||
        o("WAWebCanonicalUtils").isCanonicalReloadPending()
      )
        return o("WATimeUtils").DAY_SECONDS;
      if (o("WAWebCanonicalUtils").isCanonicalTokenPresent())
        return (I(), o("WATimeUtils").DAY_SECONDS);
      var t = o("WAWebCanonicalUtils").isCanonicalPresent() ? await b(h) : null;
      if ((t == null ? void 0 : t.kind) === "recheck") return t.seconds;
      var n =
        t == null
          ? await C("recovery")
          : await f({ reason: "rejected", seen: t.seen });
      return E(n);
    }
    async function _() {
      return (
        o("WAWebCanonicalEntRecoveryWam").logCompanionRegistered(),
        C("registration")
      );
    }
    async function f(e) {
      return e.reason === "rejected" &&
        !o("WAWebCanonicalUtils").markCanonicalRejected(e.seen)
        ? { kind: "newer_issuance" }
        : C("recovery");
    }
    async function g() {
      (s.abort(), await d);
    }
    async function h() {
      var e = o("WAWebCanonicalUtils").getCanonicalIssuance(),
        t = o(
          "WAWebCanonicalGating",
        ).getCanonicalAuthV2ValidationIntervalHours(),
        n = Date.now(),
        r = o("WAWebCanonicalAuthV2Policy").getValidationDueAtMs(
          o("WAWebUserPrefsCanonical").getCanonicalAuthV2LastValidatedAtMs(),
          t,
          n,
        );
      if (r == null || n < r)
        return (
          L(),
          {
            kind: "recheck",
            seconds:
              r == null
                ? o("WATimeUtils").DAY_SECONDS
                : o("WAWebCanonicalAuthV2Policy").secondsUntil(r, n),
          }
        );
      var a = await y();
      return a === "rejected"
        ? { kind: "rejected", seen: e }
        : {
            kind: "recheck",
            seconds:
              a == null
                ? o("WATimeUtils").DAY_SECONDS
                : o("WAWebCanonicalAuthV2Policy").getValidationRecheckSeconds(
                    a,
                    t,
                    Date.now(),
                  ),
          };
    }
    async function y() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.VALIDATE_ACCESS_TOKEN,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        "recovery",
      );
      var t = await o(
        "WAWebCanonicalUserValidQuery",
      ).fetchCanonicalUserValidity();
      if (
        s.signal.aborted ||
        !k(e, o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1))
      )
        return null;
      e: {
        if (t === "valid") {
          (o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
            o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
              .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.VALIDATE_ACCESS_TOKEN,
            o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
              .SUCCESS,
            "recovery",
          ),
            o("WAWebUserPrefsCanonical").setCanonicalAuthV2LastValidatedAtMs(
              Date.now(),
            ),
            L());
          break e;
        }
        if (t === "rejected") {
          (o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
            o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
              .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.VALIDATE_ACCESS_TOKEN,
            o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
              .ERROR,
            "recovery",
          ),
            o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
              "access_token_invalid",
              "recovery",
            ));
          break e;
        }
        if (t === "incomplete" || t === "error") {
          o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
            o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
              .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.VALIDATE_ACCESS_TOKEN,
            o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
              .ERROR,
            "recovery",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
      return t;
    }
    function C(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1),
        n = c;
      if (n != null && k(n.deviceLid, t)) return n.result;
      var r = {
        deviceLid: t,
        result: b(function () {
          return o("WAWebCanonicalAuthV2Mint")
            .runMint(e, t, m)
            .then(function (t) {
              return v(t, e);
            });
        }).catch(function (t) {
          return R(t, e);
        }),
      };
      return (
        (c = r),
        r.result.finally(function () {
          c === r && (c = null);
        }),
        r.result
      );
    }
    function b(e) {
      var t = u.then(e);
      return ((u = t.then(r("WAWebNoop"), r("WAWebNoop"))), t);
    }
    function v(e, t) {
      return (
        e.kind === "stored"
          ? S(t)
          : e.kind === "failed" &&
            o("WAWebCanonicalAuthV2Mint").logMintFailed(e, t),
        e
      );
    }
    function S(e) {
      (o("WAWebCanonicalUtils").setCanonicalTokenPresent(!0),
        o("WAWebCanonicalEntRecoveryWam").logCredentialsStored(e),
        o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
          o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
            .CANONICAL_ENT_RECOVERY_COMPANION_EVENT
            .CRED_REQUEST_SUCCEEDED_VIA_RECOVERY,
          o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
            .SUCCESS,
          e,
        ),
        o("WAWebCanonicalWamFalcoBuffer").drainCanonicalWamFalcoBuffer(),
        e === "recovery" && I());
    }
    function R(e, t) {
      return (
        o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
          "noise_auth_mint_failed",
          t,
          JSON.stringify({
            phase: "local",
            errorName: o("WAWebCanonicalNoiseAuthClient").getBoundedErrorName(
              e,
            ),
          }),
        ),
        { kind: "unavailable" }
      );
    }
    function L() {
      o("WAWebCanonicalEntRecoveryWam").logCompanionEvent(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT
          .CRED_REQUEST_SUCCEEDED_FROM_STORAGE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        "recovery",
      );
    }
    function E(e) {
      return (
        e.kind === "stored" && I(),
        s.signal.aborted
          ? o("WATimeUtils").DAY_SECONDS
          : o("WAWebCanonicalAuthV2Policy").getMintRetrySeconds(e, Date.now())
      );
    }
    function k(e, t) {
      return e == null ? t == null : e.equals(t);
    }
    function I() {
      o("WAWebBackendApi").frontendFireAndForget(
        "scheduleCanonicalReload",
        void 0,
      );
    }
    ((l.ensureCanonicalCredentials = p),
      (l.mintCanonicalCredentialsAfterRegistration = _),
      (l.refreshCanonicalCredentials = f),
      (l.endCanonicalAuthSession = g));
  },
  98,
);
