__d(
  "WAWebHatchAttestationBundle",
  ["WAWebHatchAttestationErrors", "WAWebHatchAttestationProtobufReader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1184,
      s = 32,
      u = 0,
      c = 1;
    function d(e) {
      return g("AttestationBundle", e, h);
    }
    function m(e) {
      return g("RevocationEvidence", e, function (e) {
        return S(v(e, e.len, null));
      });
    }
    function p(e) {
      return g("ReportDataInput", e, function (e) {
        var t = f,
          n = f;
        return (
          o("WAWebHatchAttestationProtobufReader").readFields(
            e,
            e.len,
            function (r) {
              if (r === 1) t = e.bytes();
              else if (r === 2) n = e.bytes();
              else return !1;
              return !0;
            },
          ),
          { x25519PublicKey: t, clientNonce: n }
        );
      });
    }
    function _(e) {
      var t = e.snp;
      if (t == null)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          "no evidence in bundle",
        );
      if (t.certs == null)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          "SnpEvidence.certs is missing",
        );
      return { report: t.report, certs: t.certs };
    }
    var f = new Uint8Array(0);
    function g(e, t, n) {
      try {
        return n(
          new (o(
            "WAWebHatchAttestationProtobufReader",
          ).HatchAttestationProtobufReader)(t),
        );
      } catch (t) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          e + ": " + o("WAWebHatchAttestationErrors").errorMessage(t),
        );
      }
    }
    function h(e) {
      var t = u,
        n = f,
        r = null,
        a = f,
        i = null,
        l = null,
        s = {
          1: function () {
            t = e.int32();
          },
          2: function () {
            n = e.bytes();
          },
          10: function () {
            r = y(e, r);
          },
          20: function () {
            a = e.bytes();
          },
          21: function () {
            i = b(e, i).proof;
          },
          22: function () {
            l = v(
              e,
              o("WAWebHatchAttestationProtobufReader").embeddedMessageEnd(e),
              l,
            );
          },
        };
      return (
        o("WAWebHatchAttestationProtobufReader").readFields(
          e,
          e.len,
          function (e) {
            var t = s[e];
            return t == null ? !1 : (t(), !0);
          },
        ),
        {
          platform: t,
          reportDataInput: n,
          snp: r,
          imageManifest: a,
          transparencyProof: i,
          revocationEvidence: l == null ? null : S(l),
        }
      );
    }
    function y(e, t) {
      var n,
        r,
        a = (n = t == null ? void 0 : t.report) != null ? n : f,
        i = (r = t == null ? void 0 : t.certs) != null ? r : null;
      return (
        o("WAWebHatchAttestationProtobufReader").readFields(
          e,
          o("WAWebHatchAttestationProtobufReader").embeddedMessageEnd(e),
          function (t) {
            if (t === 1) a = e.bytes();
            else if (t === 2) i = C(e, i);
            else return !1;
            return !0;
          },
        ),
        { report: a, certs: i }
      );
    }
    function C(e, t) {
      var n,
        r,
        a,
        i = (n = t == null ? void 0 : t.vcekPem) != null ? n : f,
        l = (r = t == null ? void 0 : t.askPem) != null ? r : f,
        s = (a = t == null ? void 0 : t.crl) != null ? a : f;
      return (
        o("WAWebHatchAttestationProtobufReader").readFields(
          e,
          o("WAWebHatchAttestationProtobufReader").embeddedMessageEnd(e),
          function (t) {
            if (t === 1) i = e.bytes();
            else if (t === 2) l = e.bytes();
            else if (t === 4) s = e.bytes();
            else return !1;
            return !0;
          },
        ),
        { vcekPem: i, askPem: l, crl: s }
      );
    }
    function b(e, t, n) {
      var r;
      n === void 0 && (n = 0);
      var a = (r = t == null ? void 0 : t.proof) != null ? r : null,
        i = o("WAWebHatchAttestationProtobufReader").readFields(
          e,
          o("WAWebHatchAttestationProtobufReader").embeddedMessageEnd(e),
          function (t) {
            if (t === 1) a = { case: "sigstore", value: e.bytes() };
            else if (t === 2) a = { case: "cloudflare", value: e.bytes() };
            else return !1;
            return !0;
          },
        );
      return { proof: { proof: a }, unknownLength: n + i };
    }
    function v(e, t, n) {
      var r,
        a,
        i,
        l,
        s = (r = n == null ? void 0 : n.serializedRl) != null ? r : f,
        u = (a = n == null ? void 0 : n.transparencyProof) != null ? a : null,
        c = (i = n == null ? void 0 : n.proofUnknownLength) != null ? i : 0,
        d = o("WAWebHatchAttestationProtobufReader").readFields(
          e,
          t,
          function (t) {
            if (t === 1) s = e.bytes();
            else if (t === 2) {
              var n = b(e, u, c);
              ((u = n.proof), (c = n.unknownLength));
            } else return !1;
            return !0;
          },
        );
      return {
        serializedRl: s,
        transparencyProof: u,
        proofUnknownLength: c,
        unknownLength:
          ((l = n == null ? void 0 : n.unknownLength) != null ? l : 0) + d,
      };
    }
    function S(e) {
      var t =
          e.serializedRl.length > 0
            ? o(
                "WAWebHatchAttestationProtobufReader",
              ).lengthDelimitedFieldLength(e.serializedRl.length)
            : 0,
        n = e.transparencyProof,
        r =
          n == null
            ? 0
            : o(
                "WAWebHatchAttestationProtobufReader",
              ).lengthDelimitedFieldLength(
                (n.proof == null
                  ? 0
                  : o(
                      "WAWebHatchAttestationProtobufReader",
                    ).lengthDelimitedFieldLength(n.proof.value.length)) +
                  e.proofUnknownLength,
              );
      return {
        serializedRl: e.serializedRl,
        transparencyProof: n,
        encodedLength: t + r + e.unknownLength,
      };
    }
    ((l.REPORT_SIZE = e),
      (l.X25519_PUBLIC_KEY_LEN = s),
      (l.PLATFORM_NON_TEE = u),
      (l.PLATFORM_AMD_SEV_SNP = c),
      (l.decodeBundle = d),
      (l.decodeRevocationEvidence = m),
      (l.decodeReportDataInput = p),
      (l.extractSnpReport = _));
  },
  98,
);
