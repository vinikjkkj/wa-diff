__d(
  "WAWebHatchAttestationSnpReport",
  ["WAWebHatchAttestationBundle", "WAWebHatchAttestationErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = 8,
      u = 48,
      c = 64,
      d = 80,
      m = 144,
      p = 384,
      _ = 392,
      f = 393,
      g = 394,
      h = 416,
      y = 672,
      C = 8,
      b = 64,
      v = 48,
      S = 64,
      R = 72,
      L = 16,
      E = 18,
      k = 19,
      I = 25,
      T = 0,
      D = 5;
    function x(t) {
      if (t.length !== o("WAWebHatchAttestationBundle").REPORT_SIZE)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpReportInvalid",
          "failed to parse SNP report: expected " +
            o("WAWebHatchAttestationBundle").REPORT_SIZE +
            " bytes, got " +
            t.length,
        );
      var n = new DataView(t.buffer, t.byteOffset, t.byteLength),
        r = n.getUint32(e, !0),
        a = t.slice(h, h + S),
        i = P(t, $(r), a),
        l = n.getUint32(s, !0),
        _ = n.getUint32(c, !0);
      return {
        version: r,
        generation: i.generation,
        policy: {
          smtAllowed: A(l, L),
          migrateMaAllowed: A(l, E),
          debugAllowed: A(l, k),
          pageSwapDisabled: A(l, I),
        },
        platInfo: { smtEnabled: A(_, T), aliasCheckComplete: A(_, D) },
        vmpl: n.getUint32(u, !0),
        reportData: t.slice(d, d + b),
        measurement: t.slice(m, m + v),
        reportedTcb: w(t.subarray(p, p + C), i.generation),
        cpuidFamId: i.famId,
        cpuidModId: i.modId,
        cpuidStep: i.step,
        chipId: a,
        signature: { r: t.slice(y, y + R), s: t.slice(y + R, y + 2 * R) },
        raw: t,
      };
    }
    function $(e) {
      if (e === 0 || e === 1)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpReportInvalid",
          "failed to parse SNP report: unsupported version " + e,
        );
      return e === 2 ? "V2" : e === 3 || e === 4 ? "V3" : "V5";
    }
    function P(e, t, n) {
      var r, o, a;
      if (t === "V2")
        return { generation: N(n), famId: null, modId: null, step: null };
      var i = (r = e[_]) != null ? r : 0,
        l = (o = e[f]) != null ? o : 0;
      return {
        generation: M(i, l),
        famId: i,
        modId: l,
        step: (a = e[g]) != null ? a : 0,
      };
    }
    function N(e) {
      if (F(e))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "SnpReportInvalid",
          "failed to parse SNP report: chip id is masked",
        );
      return F(e.subarray(8)) ? "Turin" : "Genoa";
    }
    function M(e, t) {
      if (e === 25 && ((t >= 16 && t <= 31) || (t >= 160 && t <= 175)))
        return "Genoa";
      if (e === 26 && t <= 17) return "Turin";
      throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "SnpReportInvalid",
        "failed to parse SNP report: unknown CPU generation (family=0x" +
          e.toString(16) +
          ", model=0x" +
          t.toString(16) +
          ")",
      );
    }
    function w(e, t) {
      var n, r, o, a;
      if (t === "Turin") {
        var i, l, s, u, c;
        return {
          fmc: (i = e[0]) != null ? i : 0,
          bootloader: (l = e[1]) != null ? l : 0,
          tee: (s = e[2]) != null ? s : 0,
          snp: (u = e[3]) != null ? u : 0,
          microcode: (c = e[7]) != null ? c : 0,
        };
      }
      return {
        fmc: null,
        bootloader: (n = e[0]) != null ? n : 0,
        tee: (r = e[1]) != null ? r : 0,
        snp: (o = e[6]) != null ? o : 0,
        microcode: (a = e[7]) != null ? a : 0,
      };
    }
    function A(e, t) {
      return Math.floor(e / Math.pow(2, t)) % 2 === 1;
    }
    function F(e) {
      return e.every(function (e) {
        return e === 0;
      });
    }
    l.parseReport = x;
  },
  98,
);
