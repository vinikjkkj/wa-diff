__d(
  "WAWebHatchCvmPinRecovery",
  [
    "JSResourceForInteraction",
    "WABase64",
    "WALogger",
    "WAWebHatchAuthCredentials",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchGenAbraTokenJob",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchNoiseBytes",
    "WAWebHatchVmConnection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 32,
      p = 4,
      _ = "NOT_REGISTERED",
      f = "VESTA_CLIENT_ERROR",
      g = "InvalidUserPassword",
      h = r("JSResourceForInteraction")("VestaHatchLoginModule").__setRef(
        "WAWebHatchCvmPinRecovery",
      );
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            r = yield b(e);
          if (r.kind !== "secret") return r;
          try {
            return yield I({
              accountGeneration: n,
              ownerLid: t,
              secret: r.secret,
            });
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(r.secret);
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield x();
          if (t == null) return { cause: "abra_token", kind: "failed" };
          var n;
          try {
            var r = yield h.load(),
              a = r.hatchVestaLogin;
            n = yield a({ config: { accessToken: t }, pin: e });
          } catch (e) {
            return S(e);
          }
          if (n.status !== "success") return E(n);
          var i = P(n.userSecret);
          return (
            o("WAWebHatchNoiseBytes").zeroBytes(n.userSecret),
            i == null
              ? { cause: "malformed_secret", kind: "failed" }
              : { kind: "secret", secret: i }
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(t) {
      return R(t) === _
        ? { kind: "not_registered" }
        : L(t)
          ? { attemptsRemaining: null, kind: "wrong_pin" }
          : (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-cvm: Vesta login failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-cvm-vesta-login-failed"),
            { cause: "vesta", kind: "failed" });
    }
    function R(e) {
      return typeof e == "object" && e != null ? e.errorType : null;
    }
    function L(e) {
      if (R(e) !== f) return !1;
      var t = typeof e == "object" && e != null ? e.detailedError : null;
      return typeof t == "object" && t != null && t.name === g;
    }
    function E(e) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "invalid_pin" &&
          t.attemptsRemaining === 0
        )
          return { kind: "locked_out" };
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "invalid_pin" &&
          "attemptsRemaining" in t
        ) {
          var n = t.attemptsRemaining;
          return { attemptsRemaining: n, kind: "wrong_pin" };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "locked_out" &&
          "loginTimeoutRemainingSecs" in t
        ) {
          var r = t.loginTimeoutRemainingSecs;
          return { kind: "rate_limited", retryAfterSecs: r };
        }
        return k(String(e.status));
      })(e);
    }
    function k(e) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: unexpected Vesta login status ",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-cvm-vesta-login-unexpected-status"),
        { cause: "vesta", kind: "failed" }
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.accountGeneration,
            n = e.ownerLid,
            a = e.secret;
          if (!D({ accountGeneration: t, ownerLid: n }))
            return { cause: "unlinked", kind: "failed" };
          var i;
          try {
            i = yield o("WAWebHatchCvmSecretPref").saveHatchCvmSecret({
              ownerLid: n,
              secret: a,
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: recovered secret not saved",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("hatch-cvm-pin-secret-save-failed"),
              { cause: "storage", kind: "failed" }
            );
          }
          return D({ accountGeneration: t, ownerLid: n })
            ? { kind: "recovered" }
            : (yield o("WAWebHatchCvmSecretPref")
                .removeHatchCvmSecret({ generation: i, ownerLid: n })
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-cvm: recovered secret not removed after an unlink",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("hatch-cvm-pin-secret-remove-failed");
                }),
              { cause: "unlinked", kind: "failed" });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t,
        n = e.accountGeneration,
        a = e.ownerLid;
      return (
        o("WAWebHatchVmConnection").getHatchVmAccountGeneration() === n &&
        !r("WAWebHatchLinkedStatusManager").isUnlinked() &&
        ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.equals(a)) === !0
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebHatchAuthCredentials").readHatchAuthAbraToken();
          if (e != null) return e;
          var t = yield o("WAWebHatchGenAbraTokenJob").genHatchAbraToken();
          return t.kind !== "ok"
            ? (o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: no ABRA token for the PIN check",
                    ])),
                )
                .sendLogs("hatch-cvm-pin-abra-token-failed"),
              null)
            : t.token;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      if (e.length === m) return e.slice();
      var t;
      try {
        t = new TextDecoder("utf-8", { fatal: !0 })
          .decode(e)
          .trim()
          .replace(/=+$/, "");
      } catch (e) {
        return null;
      }
      if (!/^[A-Za-z0-9+/_-]+$/.test(t)) return null;
      var n = t.replace(/-/g, "+").replace(/_/g, "/"),
        r = n.padEnd(Math.ceil(n.length / p) * p, "=");
      try {
        var a = new Uint8Array(o("WABase64").decodeB64(r));
        return a.length === m ? a : null;
      } catch (e) {
        return null;
      }
    }
    ((l.recoverHatchCvmSecretWithPin = y), (l.decodeEscrowedSecret = P));
  },
  98,
);
