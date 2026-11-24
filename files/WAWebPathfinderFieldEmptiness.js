__d(
  "WAWebPathfinderFieldEmptiness",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = /^\u200B*$/,
      s = new Set(["email", "number", "search", "tel", "text", "url"]);
    function u(e) {
      return r("justknobx")._("8647") ? c(e) : null;
    }
    function c(t) {
      var n;
      if (R(t) || (t instanceof HTMLInputElement && !s.has(t.type)))
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
      ]),
      p = [
        "name",
        "id",
        "data-testid",
        "aria-label",
        "title",
        "autocomplete",
        "placeholder",
      ],
      _ = new Set([
        "conversation-compose-box-input",
        "edit-message-composer",
        "media-caption-input-container",
        "instant-viewer-reply-input",
      ]),
      f = ["name", "id", "data-testid", "autocomplete"],
      g =
        /passcode|password|passwd|passphrase|passkey|apikey|usernamekey|twofactor|twostep|securitycode|verificationcode|backupcode|upipin|otpcode|secretcode/,
      h = new Set(["2step", "onetime", "pincode"]),
      y =
        /^(?:new|old|confirm|current|user|my|account|login|app|lock|access|auth|refresh|session|m)?(?:pin|otp|secret|token|recovery|verification)$/,
      C = /^2fa(?:code|auth|pin|otp|token|key)?$/,
      b = "-webkit-text-security",
      v = new Set(["", "none"]),
      S = Symbol("pathfinderSecretField");
    function R(e) {
      return Reflect.get(e, S) === !0
        ? !0
        : L(e)
          ? (Reflect.set(e, S, !0), !0)
          : !1;
    }
    function L(e) {
      return E(e) || k(e);
    }
    function E(e) {
      var t, n;
      if (
        (e instanceof HTMLInputElement && e.type === "password") ||
        m.has((t = e.getAttribute("data-testid")) != null ? t : "")
      )
        return !0;
      var r = _.has(String(e.getAttribute("data-testid")))
          ? [f, []]
          : [p, I(e)],
        o = r[0],
        a = r[1];
      return o.some(function (t) {
        var n;
        return T((n = e.getAttribute(t)) != null ? n : "");
      }) || a.some(T)
        ? !0
        : ((n = e.getAttribute("autocomplete")) != null ? n : "")
            .toLowerCase()
            .split(/\s+/)
            .some(function (e) {
              return d.has(e);
            });
    }
    function k(e) {
      if (e.style.getPropertyValue(b) !== "") return !0;
      var t = window.getComputedStyle(e).getPropertyValue(b);
      return !v.has(t);
    }
    function I(e) {
      var t,
        n,
        r =
          e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
            ? Array.from((t = e.labels) != null ? t : [])
            : [],
        o = ((n = e.getAttribute("aria-labelledby")) != null ? n : "")
          .split(/\s+/)
          .map(function (e) {
            return e !== "" ? document.getElementById(e) : null;
          });
      return [].concat(r, o).map(function (e) {
        var t;
        return (t = e == null ? void 0 : e.textContent) != null ? t : "";
      });
    }
    function T(e) {
      if (
        x(e).some(function (e) {
          return C.test(e);
        })
      )
        return !0;
      var t = D(e);
      return (
        g.test(t.join("")) ||
        t.some(function (e, n) {
          var r;
          return (
            y.test(e) ||
            h.has(e) ||
            h.has(e + ((r = t[n + 1]) != null ? r : ""))
          );
        })
      );
    }
    function D(e) {
      return x(
        e
          .replace(/([A-Za-z])([0-9])/g, "$1 $2")
          .replace(/([0-9])([A-Za-z])/g, "$1 $2"),
      );
    }
    function x(e) {
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
