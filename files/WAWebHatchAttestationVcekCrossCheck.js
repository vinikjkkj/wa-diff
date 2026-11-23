__d(
  "WAWebHatchAttestationVcekCrossCheck",
  [
    "WAWebHatchAttestationBytes",
    "WAWebHatchAttestationCrypto",
    "WAWebHatchAttestationErrors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "1.3.6.1.4.1.3704.1.4",
      s = "1.3.6.1.4.1.3704.1.3.1",
      u = "1.3.6.1.4.1.3704.1.3.2",
      c = "1.3.6.1.4.1.3704.1.3.3",
      d = "1.3.6.1.4.1.3704.1.3.8",
      m = "1.3.6.1.4.1.3704.1.3.9",
      p = 64,
      _ = 8,
      f = 2,
      g = 128;
    async function h(t, n) {
      var r;
      try {
        var a,
          i = await o("WAWebHatchAttestationCrypto").loadHatchAttestationPki();
        r =
          (a = o("WAWebHatchAttestationCrypto").parseDerCertificate(
            i,
            o("WAWebHatchAttestationBytes").pemToDer(t),
          ).extensions) != null
            ? a
            : [];
      } catch (e) {
        throw L(
          "failed to parse VCEK PEM: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
      C(S(r, e, "chip_id"), n.chipId);
      var l = n.reportedTcb;
      (b(r, s, "bootloader", l.bootloader),
        b(r, u, "tee", l.tee),
        b(r, c, "snp", l.snp),
        b(r, d, "microcode", l.microcode),
        v(R(r, m, "fmc"), l.fmc));
    }
    function y(e, t) {
      var n,
        r,
        o,
        a,
        i = function (n) {
          return L("failed to parse TCB " + t + " as DER INTEGER: " + n);
        };
      if (e.length < 2 || e[0] !== f) throw i("not a DER INTEGER");
      var l = (n = e[1]) != null ? n : 0;
      if (l >= g) throw i("non-canonical (long-form) length");
      if (e.length !== 2 + l) throw i("length does not match buffer");
      if (l === 0) throw i("empty integer content");
      var s = e.subarray(2),
        u = (r = s[0]) != null ? r : 0;
      if (u >= g) throw i("value is negative");
      if (s.length >= 2 && u === 0 && ((o = s[1]) != null ? o : 0) < g)
        throw i("non-minimal leading zero");
      for (var c = 0; c + 1 < s.length && s[c] === 0; ) c++;
      var d = s.subarray(c);
      if (d.length !== 1)
        throw L(
          "TCB " +
            t +
            " value out of range for u8 (" +
            d.length +
            " bytes after stripping leading zeros)",
        );
      return (a = d[0]) != null ? a : 0;
    }
    function C(e, t) {
      if (e.length === p) {
        if (!o("WAWebHatchAttestationBytes").bytesEqual(e, t))
          throw L(
            "chip_id mismatch: cert=" +
              o("WAWebHatchAttestationBytes").bytesToHex(e) +
              ", report=" +
              o("WAWebHatchAttestationBytes").bytesToHex(t),
          );
        return;
      }
      if (e.length === _) {
        var n = t.subarray(0, _);
        if (!o("WAWebHatchAttestationBytes").bytesEqual(e, n))
          throw L(
            "chip_id mismatch (Turin 8-byte form): cert=" +
              o("WAWebHatchAttestationBytes").bytesToHex(e) +
              ", report[0..8]=" +
              o("WAWebHatchAttestationBytes").bytesToHex(n),
          );
        if (
          t.subarray(_).some(function (e) {
            return e !== 0;
          })
        )
          throw L("Turin chip_id padding bytes [8..64] are not all zero");
        return;
      }
      throw L(
        "VCEK chip_id has unexpected length: " +
          e.length +
          " bytes (expected 8 or 64)",
      );
    }
    function b(e, t, n, r) {
      var o = y(S(e, t, n), n);
      if (o !== r)
        throw L("TCB " + n + " mismatch: cert=" + o + ", report=" + r);
    }
    function v(e, t) {
      if (!(e == null && t == null)) {
        if (e == null)
          throw L(
            "report's reported_tcb carries an fmc value but VCEK has no FMC extension",
          );
        if (t == null)
          throw L(
            "VCEK has FMC extension but report's reported_tcb has no fmc value",
          );
        var n = y(e, "fmc");
        if (n !== t) throw L("TCB fmc mismatch: cert=" + n + ", report=" + t);
      }
    }
    function S(e, t, n) {
      var r = R(e, t, n);
      if (r == null)
        throw L("VCEK missing required extension " + n + " (" + t + ")");
      return r;
    }
    function R(e, t, n) {
      var r = e.filter(function (e) {
        return e.extnID === t;
      });
      if (r.length > 1)
        throw L("VCEK contains duplicate extension " + n + " (" + t + ")");
      var o = r[0];
      return o == null ? null : new Uint8Array(o.extnValue.valueBlock.valueHex);
    }
    function L(e) {
      return new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "VcekCrossCheckFailed",
        e,
      );
    }
    ((l.crossCheckVcekReport = h), (l.parseDerUintU8 = y));
  },
  98,
);
