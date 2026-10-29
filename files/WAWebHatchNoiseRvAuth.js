__d(
  "WAWebHatchNoiseRvAuth",
  [
    "WAWebHatchAttestationProtobufReader",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseProtobuf",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = 32,
      u = 1,
      c = 2,
      d = 1,
      m = 1,
      p = 2,
      _ = 3,
      f = 4,
      g = 5,
      h = 1,
      y = 3,
      C = new TextEncoder(),
      b = C.encode("hatch.noise-auth.key.v1"),
      v = C.encode("vm-proof-key"),
      S = C.encode("client-proof-key"),
      R = C.encode("hatch.noise-auth.vm-proof.v1"),
      L = C.encode("hatch.noise-auth.client-proof.v1"),
      E = (function (e) {
        function t(t) {
          var n,
            r = "WAWebHatchNoiseRvAuth: " + t;
          return (
            (n = e.call(this, r) || this),
            (n.message = r),
            (n.code = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function k() {
      return crypto.getRandomValues(new Uint8Array(e));
    }
    function I(t) {
      if (t.length !== e)
        throw r("err")("WAWebHatchNoiseRvAuth: client nonce must be 32 bytes");
      var n = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      return (n.writeBytes(d, t), n.finish());
    }
    function T(e) {
      var t = D(x(e));
      if (t == null) throw new E("malformed_challenge");
      return t;
    }
    function D(t) {
      if (t == null) return null;
      var n = t.attestation,
        r = t.state,
        o = t.vmNonce,
        a = t.vmProof;
      return n == null || o == null || o.length !== e
        ? null
        : r === u
          ? a == null
            ? { attestation: n, state: "unprovisioned", vmNonce: o }
            : null
          : r === c && a != null && a.length === s
            ? { attestation: n, state: "provisioned", vmNonce: o, vmProof: a }
            : null;
    }
    function x(e) {
      try {
        return $(e);
      } catch (e) {
        return null;
      }
    }
    function $(e) {
      for (
        var t = new (o(
            "WAWebHatchAttestationProtobufReader",
          ).HatchAttestationProtobufReader)(e),
          n = {};
        t.pos < t.len;
      ) {
        var r = t.tag(),
          a = r.fieldNo,
          i = r.wireType,
          l =
            a === m
              ? P(t, i, n, "attestation")
              : a === p
                ? N(t, i, n)
                : a === _
                  ? P(t, i, n, "vmNonce")
                  : a === f
                    ? P(t, i, n, "vmProof")
                    : a === g
                      ? !1
                      : null;
        if (l == null) t.skip(i, a);
        else if (!l) return null;
      }
      return n;
    }
    function P(e, t, n, r) {
      return t !==
        o("WAWebHatchAttestationProtobufReader").WIRE_LENGTH_DELIMITED ||
        n[r] != null
        ? !1
        : ((n[r] = e.bytes()), !0);
    }
    function N(e, t, n) {
      return t !== o("WAWebHatchAttestationProtobufReader").WIRE_VARINT ||
        n.state != null
        ? !1
        : ((n.state = e.int32()), !0);
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.challenge,
            a = t.clientNonce,
            i = t.message1Hash,
            l = t.message2Hash,
            u = t.notaryToken,
            c = t.rvKey;
          if (n.state !== "provisioned") throw new E("cvm_enrollment_required");
          var d = u.trim();
          if (
            d === "" ||
            a.length !== e ||
            c.length !== s ||
            i.length !== s ||
            l.length !== s
          )
            throw r("err")("WAWebHatchNoiseRvAuth: invalid message 3 inputs");
          var m = n.vmNonce,
            p = yield A({
              clientNonce: a,
              messageHash: i,
              rvKey: c,
              vmNonce: m,
            }),
            _ = o("WAWebHatchNoiseBytes").constantTimeEqual(p, n.vmProof);
          if ((o("WAWebHatchNoiseBytes").zeroBytes(p), !_))
            throw new E("cvm_key_rejected");
          var f = yield O({
            clientNonce: a,
            messageHash: l,
            rvKey: c,
            vmNonce: m,
          });
          try {
            var g = new (o(
              "WAWebHatchNoiseProtobuf",
            ).WAWebHatchNoiseProtoWriter)();
            return (g.writeString(h, d), g.writeBytes(y, f), g.finish());
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(f);
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.clientNonce,
            n = e.messageHash,
            r = e.rvKey,
            a = e.vmNonce;
          return W(r, v, o("WAWebHatchNoiseBytes").concat(R, n, t, a));
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.clientNonce,
            n = e.messageHash,
            r = e.rvKey,
            a = e.vmNonce;
          return W(r, S, o("WAWebHatchNoiseBytes").concat(L, n, a, t));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield U(e, o("WAWebHatchNoiseBytes").concat(b, t));
          try {
            return yield U(r, n);
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(r);
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.slice();
          try {
            var r = yield crypto.subtle.importKey(
              "raw",
              n,
              { hash: "SHA-256", name: "HMAC" },
              !1,
              ["sign"],
            );
            return new Uint8Array(
              yield crypto.subtle.sign("HMAC", r, t.slice()),
            );
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(n);
          }
        })),
        V.apply(this, arguments)
      );
    }
    ((l.NOISE_CLIENT_NONCE_BYTES = e),
      (l.WAWebHatchNoiseRvError = E),
      (l.createNoiseClientNonce = k),
      (l.encodeRvMessage1 = I),
      (l.decodeRvChallenge = T),
      (l.buildRvMessage3 = M),
      (l.createVmProof = A),
      (l.createClientProof = O));
  },
  98,
);
