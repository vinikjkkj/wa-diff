__d(
  "WAWebHatchAttestationManifest",
  ["WAWebHatchAttestationBytes", "WAWebHatchAttestationErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.length === 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          "image_manifest is empty",
        );
      var n = s(e);
      if (n.length === 0)
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "MeasurementMismatch",
          "report=" +
            o("WAWebHatchAttestationBytes").bytesToHex(t.measurement) +
            ", manifest=(no launch digests)",
        );
      for (var r of n) {
        var a = o("WAWebHatchAttestationBytes").hexToBytesOrNull(r);
        if (a == null)
          throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
            "InvalidProto",
            "launch_digest hex: invalid hex string",
          );
        if (o("WAWebHatchAttestationBytes").bytesEqual(t.measurement, a))
          return { launchDigests: n };
      }
      throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "MeasurementMismatch",
        "report=" +
          o("WAWebHatchAttestationBytes").bytesToHex(t.measurement) +
          ", manifest=" +
          JSON.stringify(n),
      );
    }
    function s(e) {
      var t;
      try {
        t = JSON.parse(new TextDecoder().decode(e));
      } catch (e) {
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          "invalid manifest JSON: " +
            o("WAWebHatchAttestationErrors").errorMessage(e),
        );
      }
      if (!u(t))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          "invalid manifest JSON: expected an object",
        );
      var n = t.snp_measurement,
        r = u(n) ? n.configs : null;
      if (!u(r))
        throw new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
          "InvalidProto",
          "invalid manifest JSON: snp_measurement.configs missing",
        );
      var a = [];
      for (var i of Object.values(r))
        u(i) && typeof i.launch_digest == "string" && a.push(i.launch_digest);
      return a;
    }
    function u(e) {
      return typeof e == "object" && e != null && !Array.isArray(e);
    }
    l.parseAndCheckManifest = e;
  },
  98,
);
