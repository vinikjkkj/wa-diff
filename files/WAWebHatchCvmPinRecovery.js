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
      _ = "VESTA_CLIENT_ERROR",
      f = 400,
      g = 401,
      h = 500,
      y = new Set(["AbortError", "TimeoutError", "TypeError"]),
      C = "InvalidUserPassword",
      b = r("JSResourceForInteraction")("VestaHatchLoginModule").__setRef(
        "WAWebHatchCvmPinRecovery",
      );
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            r = yield R(e);
          if (r.kind !== "secret") return r;
          try {
            return yield M({
              accountGeneration: n,
              ownerLid: t,
              secret: r.secret,
            });
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(r.secret);
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield F();
          if (t == null) return { cause: "abra_token", kind: "failed" };
          var n;
          try {
            var r = yield b.load(),
              a = r.hatchVestaLogin;
            n = yield a({ config: { accessToken: t }, pin: e });
          } catch (e) {
            return E(e);
          }
          if (n.status !== "success") return P(n);
          var i = B(n.userSecret);
          return (
            o("WAWebHatchNoiseBytes").zeroBytes(n.userSecret),
            i == null
              ? { cause: "malformed_secret", kind: "failed" }
              : { kind: "secret", secret: i }
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(t) {
      if (T(t))
        return {
          attemptsRemaining: null,
          kind: "wrong_pin",
          retryAfterSecs: null,
        };
      var n = D(t);
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: Vesta login failed cause=",
                "",
              ])),
            n,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-cvm-vesta-login-failed"),
        { cause: n, kind: "failed" }
      );
    }
    function k(e) {
      return typeof e == "object" && e != null ? e.errorType : null;
    }
    function I(e) {
      return typeof e == "object" && e != null ? e.detailedError : null;
    }
    function T(e) {
      if (k(e) !== _) return !1;
      var t = I(e);
      return typeof t == "object" && t != null && t.name === C;
    }
    function D(e) {
      return (function (t) {
        return t === "VESTA_CLIENT_ERROR"
          ? "vesta_crypto"
          : t === "VESTA_SERVER_ERROR"
            ? "vesta_malformed"
            : t === "ISLAND_PUB_RSA_KEY_INVALID" ||
                t === "ISLAND_PUB_ED25519_KEY_INVALID"
              ? "vesta_hsm_check"
              : t === "NETWORK_PROVIDER_ERROR"
                ? x(I(e))
                : "vesta";
      })(k(e));
    }
    function x(e) {
      return typeof e != "object" || e == null
        ? "vesta_malformed"
        : typeof e.status == "number"
          ? $(e.status)
          : y.has(e.name)
            ? "vesta_transport"
            : "vesta_malformed";
    }
    function $(e) {
      return e === g
        ? "vesta_http_401"
        : e >= h
          ? "vesta_http_5xx"
          : e >= f
            ? "vesta_http_4xx"
            : "vesta_transport";
    }
    function P(e) {
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
          "attemptsRemaining" in t &&
          "loginTimeoutRemainingSecs" in t
        ) {
          var n = t.attemptsRemaining,
            r = t.loginTimeoutRemainingSecs;
          return { attemptsRemaining: n, kind: "wrong_pin", retryAfterSecs: r };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "attempts_exhausted"
        )
          return { kind: "locked_out" };
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "login_timeout" &&
          "attemptsRemaining" in t &&
          "loginTimeoutRemainingSecs" in t
        ) {
          var o = t.attemptsRemaining,
            a = t.loginTimeoutRemainingSecs;
          return {
            attemptsRemaining: o,
            kind: "rate_limited",
            retryAfterSecs: a,
          };
        }
        return ((typeof t == "object" && t !== null) ||
          typeof t == "function") &&
          t.status === "not_registered"
          ? { kind: "not_registered" }
          : N(String(e.status));
      })(e);
    }
    function N(e) {
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
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.accountGeneration,
            n = e.ownerLid,
            a = e.secret;
          if (!A({ accountGeneration: t, ownerLid: n }))
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
          return A({ accountGeneration: t, ownerLid: n })
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
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
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
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
    ((l.recoverHatchCvmSecretWithPin = v), (l.decodeEscrowedSecret = B));
  },
  98,
);
