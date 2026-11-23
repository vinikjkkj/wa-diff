__d(
  "WAWebHatchAttestationChipPin",
  ["WAWebHatchAttestationBytes", "WAWebHatchAttestationErrors", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 16,
      s = 128,
      u = 4294967296;
    function c(t) {
      return (t.length !== e && t.length !== s) ||
        !/^(?:[0-9a-f]{16}|[0-9a-f]{128})$/i.test(t)
        ? null
        : t.toUpperCase().padEnd(s, "0");
    }
    function d(e, t) {
      var n = t.map(c).filter(Boolean);
      if (n.length === 0 || n.length !== t.length)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "ChipPinInvalid",
          "destination chip constraint is empty or malformed",
        );
      var r = n.some(function (t) {
        var n = o("WAWebHatchAttestationBytes").hexToBytesOrNull(t);
        return n != null && o("WAWebHatchAttestationBytes").bytesEqual(n, e);
      });
      if (!r)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "ChipMismatch",
          "attested destination is outside the selected chip set",
        );
    }
    function m(e) {
      return e === e.toUpperCase() && c(e) != null;
    }
    function p(e) {
      var t = new Map();
      for (var n of e) t.set(y(n), n);
      return Array.from(t.keys())
        .sort()
        .map(function (e) {
          var n;
          return (n = t.get(e)) != null ? n : "";
        });
    }
    function _(e, t) {
      var n = new Set(t.map(y));
      return p(e).filter(function (e) {
        return !n.has(y(e));
      });
    }
    function f(e, t) {
      return (t === void 0 && (t = crypto), h(p(e), t));
    }
    function g(e, t) {
      t === void 0 && (t = crypto);
      var n = p(e);
      if (n.length < 2)
        throw r("err")("Chip selection requires two distinct candidates");
      var o = h(n, t);
      return [
        o,
        h(
          n.filter(function (e) {
            return e !== o;
          }),
          t,
        ),
      ];
    }
    function h(e, t) {
      if (e.length === 0 || e.length > u)
        throw r("err")("Invalid chip selection population");
      var n = u - (u % e.length),
        o = new Uint32Array(1);
      do t.getRandomValues(o);
      while (o[0] >= n);
      return e[o[0] % e.length];
    }
    function y(e) {
      var t = c(e);
      if (t == null) throw r("err")("Invalid chip identifier");
      return t;
    }
    ((l.normalizeCvmChipIdentity = c),
      (l.checkExpectedChipIds = d),
      (l.isCanonicalCvmChipId = m),
      (l.deduplicateCvmChipIds = p),
      (l.excludeCvmChipIdentities = _),
      (l.selectCvmChip = f),
      (l.selectCvmChips = g));
  },
  98,
);
