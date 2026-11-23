__d(
  "WAWebHatchAttestationCloudflareProof",
  [
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationErrors",
    "WAWebHatchAttestationTransparencyProofProto.pb",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 32,
      u = 64,
      c = 255,
      d = 4294967295;
    function m(t) {
      var n, r;
      try {
        ((n = new TextDecoder("utf-8", { fatal: !0 }).decode(t)),
          (r = JSON.parse(n)));
      } catch (e) {
        throw E(
          "invalid Cloudflare proof JSON: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
      if ((f(n), r == null || typeof r != "object" || Array.isArray(r)))
        throw E("invalid Cloudflare proof JSON: expected an object");
      var a = r,
        i = S(a, "version", d),
        l = S(a, "ciphersuite", d),
        c = i != null ? i : l;
      if (c === void 0)
        throw E("Either version or ciphersuite must be provided");
      if (c !== e) throw E("unsupported Cloudflare ciphersuite " + c);
      var m = {
        ciphersuite: c,
        namespace: C(a, "namespace"),
        timestampUnixMs: v(a, "timestamp"),
        epoch: v(a, "epoch"),
        digest: R(a, "digest", s),
        signature: R(a, "signature", u),
      };
      return (_(m, a), m);
    }
    function p(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(
          o("WAWebHatchAttestationTransparencyProofProto.pb")
            .SignatureMessageSpec,
          {
            version: e.ciphersuite,
            namespace: e.namespace,
            timestamp: e.timestampUnixMs,
            epoch: { inner: e.epoch },
            digest: e.digest,
          },
        )
        .readByteArrayView();
    }
    function _(e, t) {
      if (e.namespace.length === 0)
        throw E("Cloudflare proof namespace is empty");
      if (e.timestampUnixMs === 0)
        throw E("Cloudflare proof timestamp is zero");
      if (e.epoch === 0) throw E("Cloudflare proof epoch is zero");
      S(t, "key_id", c);
      var n = b(t, "serialized_message");
      n !== void 0 && L("serialized_message", n);
    }
    function f(e) {
      for (var t = [], n = !1, r = 0; r < e.length; ) {
        var o = e[r];
        if (o === '"') {
          var a = y(e, r);
          (n && g(t[t.length - 1], e.slice(r, a)) && (n = !1), (r = a));
        } else ((n = h(t, o, n)), r++);
      }
    }
    function g(e, t) {
      if (e == null || !e.isObject) return !1;
      var n = String(JSON.parse(t));
      if (e.keys.has(n))
        throw E("Cloudflare proof JSON repeats the " + n + " field");
      return (e.keys.add(n), !0);
    }
    function h(e, t, n) {
      if (t === "{" || t === "[")
        return (e.push({ isObject: t === "{", keys: new Set() }), t === "{");
      if (t === "}" || t === "]") return (e.pop(), !1);
      if (t === ",") {
        var r, o;
        return (r = (o = e[e.length - 1]) == null ? void 0 : o.isObject) != null
          ? r
          : !1;
      }
      return n;
    }
    function y(e, t) {
      for (var n = t + 1; n < e.length; ) {
        var r = e[n];
        if (r === "\\") {
          n += 2;
          continue;
        }
        if (r === '"') return n + 1;
        n++;
      }
      throw E("unterminated string in Cloudflare proof JSON");
    }
    function C(e, t) {
      var n = e[t];
      if (typeof n != "string")
        throw E("Cloudflare " + t + " must be a string");
      return n;
    }
    function b(e, t) {
      var n = e[t];
      if (n != null) {
        if (typeof n != "string")
          throw E("Cloudflare " + t + " must be a string");
        return n;
      }
    }
    function v(e, t) {
      var n = e[t];
      if (typeof n != "number" || !Number.isSafeInteger(n) || n < 0)
        throw E("Cloudflare " + t + " must be a non-negative safe integer");
      return n;
    }
    function S(e, t, n) {
      var r = e[t];
      if (r != null) {
        if (typeof r != "number" || !Number.isInteger(r) || r < 0 || r > n)
          throw E(
            "Cloudflare " + t + " must be a " + (n === c ? "uint8" : "uint32"),
          );
        return r;
      }
    }
    function R(e, t, n) {
      var r = L(t, C(e, t));
      if (r.length !== n)
        throw E(
          "Cloudflare " + t + " is " + r.length + " bytes, expected " + n,
        );
      return r;
    }
    function L(e, t) {
      var n = o("WAWebHatchAttestationBytes").hexToBytesOrNull(t);
      if (n == null) throw E("Cloudflare " + e + " is not valid hex");
      return n;
    }
    function E(e) {
      return new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "TransparencyBundleMalformed",
        e,
      );
    }
    ((l.parseCloudflareProof = m), (l.encodeCloudflareSignatureMessage = p));
  },
  98,
);
