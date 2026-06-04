__d(
  "WAWebShortcakeLinkingHandoffProof",
  ["WACryptoHkdf", "WACryptoHmac", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = "shortcake-passkey-handoff-v1",
      s = 32,
      u = 300 * 1e3;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.byteLength === 0)
            throw r("err")(
              "Shortcake handoff: priorAttemptSecret must be non-empty",
            );
          return o("WACryptoHkdf").extractAndExpand(t, e, s);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.byteLength !== s)
            throw r("err")(
              "Shortcake handoff: hmacKey must be " + s + " bytes",
            );
          return o("WACryptoHmac").hmacSha256(e, t);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (var n = 0, r = 0; r < e.byteLength; r++) n |= e[r] ^ t[r];
      return n === 0;
    }
    var f = (function () {
        function e(e, t) {
          (e === void 0 &&
            (e = function () {
              return Date.now();
            }),
            t === void 0 && (t = u),
            (this.$1 = null),
            (this.$2 = 0),
            (this.$4 = e),
            (this.$3 = t));
        }
        var t = e.prototype;
        return (
          (t.stash = function (t) {
            (this.clear(),
              (this.$1 = new Uint8Array(t.slice(0))),
              (this.$2 = this.$4()));
          }),
          (t.peek = function () {
            if (this.$1 == null) return null;
            if (this.$4() - this.$2 > this.$3) return (this.clear(), null);
            var e = this.$1;
            return e == null ? null : e.buffer.slice(0);
          }),
          (t.clear = function () {
            (this.$1 != null && (this.$1.fill(0), (this.$1 = null)),
              (this.$2 = 0));
          }),
          (t.hasValidKey = function () {
            return this.$1 == null
              ? !1
              : this.$4() - this.$2 > this.$3
                ? (this.clear(), !1)
                : !0;
          }),
          e
        );
      })(),
      g = new f();
    function h() {
      return g;
    }
    ((l.derivePairingHandoffHmacKey = c),
      (l.computePairingHandoffProof = m),
      (l.constantTimeEquals = _),
      (l.PairingHandoffKeyHolder = f),
      (l.getHandoffKeyHolder = h));
  },
  98,
);
