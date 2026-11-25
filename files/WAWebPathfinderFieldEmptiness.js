__d(
  "WAWebPathfinderFieldEmptiness",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = /^\u200B*$/,
      s = new Set(["email", "search", "tel", "text", "url"]);
    function u(e) {
      return r("justknobx")._("8647") ? c(e) : null;
    }
    function c(t) {
      var n;
      if (v(t) || (t instanceof HTMLInputElement && !s.has(t.type)))
        return null;
      var r =
        t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement
          ? t.value
          : (n = t.textContent) != null
            ? n
            : "";
      return e.test(r);
    }
    var d = new Set(["current-password", "new-password", "one-time-code"]),
      m = new Set([
        "password-input",
        "password-input-confirm",
        "pdf-password-input",
        "wa_privacy_unlock_password",
        "ad-account-recovery-code-input",
      ]),
      p = ["name", "id", "data-testid", "autocomplete"],
      _ =
        /passcode|password|passwd|passphrase|passkey|apikey|usernamekey|twofactor|twostep|securitycode|verificationcode|backupcode|upipin|otpcode|secretcode/,
      f = new Set(["2step", "onetime", "pincode"]),
      g =
        /^(?:new|old|confirm|current|user|my|account|login|app|lock|access|auth|refresh|session|m)?(?:pin|otp|secret|token|recovery|verification)$/,
      h = /^2fa(?:code|auth|pin|otp|token|key)?$/,
      y = "-webkit-text-security",
      C = new Set(["", "none"]),
      b = Symbol("pathfinderSecretField");
    function v(e) {
      return Reflect.get(e, b) === !0
        ? !0
        : S(e)
          ? (Reflect.set(e, b, !0), !0)
          : !1;
    }
    function S(e) {
      return R(e) || L(e);
    }
    function R(e) {
      var t, n;
      return (e instanceof HTMLInputElement && e.type === "password") ||
        m.has((t = e.getAttribute("data-testid")) != null ? t : "") ||
        p.some(function (t) {
          var n;
          return E((n = e.getAttribute(t)) != null ? n : "");
        })
        ? !0
        : ((n = e.getAttribute("autocomplete")) != null ? n : "")
            .toLowerCase()
            .split(/\s+/)
            .some(function (e) {
              return d.has(e);
            });
    }
    function L(e) {
      if (e.style.getPropertyValue(y) !== "") return !0;
      var t = window.getComputedStyle(e).getPropertyValue(y);
      return !C.has(t);
    }
    function E(e) {
      if (
        I(e).some(function (e) {
          return h.test(e);
        })
      )
        return !0;
      var t = k(e);
      return (
        _.test(t.join("")) ||
        t.some(function (e, n) {
          var r;
          return (
            g.test(e) ||
            f.has(e) ||
            f.has(e + ((r = t[n + 1]) != null ? r : ""))
          );
        })
      );
    }
    function k(e) {
      return I(
        e
          .replace(/([A-Za-z])([0-9])/g, "$1 $2")
          .replace(/([0-9])([A-Za-z])/g, "$1 $2"),
      );
    }
    function I(e) {
      return e
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter(function (e) {
          return e !== "";
        });
    }
    l.getLoggedIsEmpty = u;
  },
  98,
);
