__d(
  "WAWebHatchJarvisForwardProof",
  ["WAWebStructuredClone"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return { snapshots: new Map() };
    }
    function s(e, t, n) {
      var o,
        a,
        i = t.id.toString(),
        l = e.snapshots.get(i);
      if (l != null) return l;
      var s = u(t.unifiedResponseRawData);
      if (s == null) return null;
      var c = {
        inspected: n,
        proofs: r("WAWebStructuredClone")(
          (o =
            (a = t.botSignatureVerificationMetadata) == null
              ? void 0
              : a.proofs) != null
            ? o
            : null,
        ),
        rawBytes: s,
      };
      return (e.snapshots.set(i, c), c);
    }
    function u(e) {
      return e instanceof ArrayBuffer
        ? e.byteLength > 0
          ? new Uint8Array(e.slice(0))
          : null
        : e instanceof Uint8Array && e.length > 0
          ? e.slice()
          : null;
    }
    ((l.createHatchJarvisForwardSession = e), (l.takeHatchJarvisSnapshot = s));
  },
  98,
);
