__d(
  "WAWebWasaDebugActions",
  [
    "WABase64",
    "WAHex",
    "WAWebWasaRootSecretWriter",
    "WAWebWasaUserPrefs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 32,
      s = 16;
    function u() {
      return o("WAHex")
        .toHex(self.crypto.getRandomValues(new Uint8Array(e)))
        .toLowerCase();
    }
    function c(e) {
      var t = e.trim();
      if (t === "") return null;
      if (/^[0-9a-f]+$/i.test(t) && t.length % 2 === 0) {
        for (var n = new Uint8Array(t.length / 2), r = 0; r < n.length; r++)
          n[r] = parseInt(t.slice(r * 2, r * 2 + 2), 16);
        return n;
      }
      try {
        return new Uint8Array(o("WABase64").decodeB64(t));
      } catch (e) {
        return null;
      }
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = c(t),
            a = c(n);
          if (r == null || a == null)
            return "Invalid input: target key and root secret must each be hex or base64.";
          yield o("WAWebWasaRootSecretWriter").applyWasaRootSecret(e, r, a);
          var i = o("WAHex").toHex(r).toLowerCase().slice(0, s);
          return "Applied (target=" + i + "\u2026).";
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWasaUserPrefs").getWasaActiveTargetMessageKey(e.user);
          if (t == null) return "No WASA secret configured.";
          var n = o("WAHex").toHex(t).toLowerCase().slice(0, s),
            r = yield o("WAWebWasaRootSecretWriter").getWasaCarrierSecret(e, t);
          return r == null
            ? "Pointer set (target=" + n + "\u2026) but no carrier row found."
            : "Configured: target=" +
                n +
                "\u2026, secret=" +
                r.length +
                " bytes.";
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            yield o("WAWebWasaRootSecretWriter").clearWasaRootSecret(e),
            "Cleared."
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.generateRandomKeyHex = u),
      (l.parseWasaKeyText = c),
      (l.applyWasaRootSecretFromText = d),
      (l.describeStoredWasaSecret = p),
      (l.clearWasaRootSecretWithStatus = f));
  },
  98,
);
