__d(
  "WAWebUserPrefsPreProcessors",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    var e = { WANoiseInfo: s, WARoutingInfo: u };
    function s(e) {
      var t = e.certificateChainBuffer,
        n = e.recoveryToken,
        r = e.staticKeyPair,
        a = r.privKey,
        i = r.pubKey;
      return {
        privKey: o("WABase64").encodeB64(a),
        pubKey: o("WABase64").encodeB64(i),
        recoveryToken: o("WABase64").encodeB64(n),
        certificateChainBuffer: t != null ? o("WABase64").encodeB64(t) : void 0,
      };
    }
    function u(e) {
      var t = e.domain,
        n = e.edgeRouting,
        r = { domain: t, edgeRouting: n ? o("WABase64").encodeB64(n) : null };
      return r;
    }
    function c(t, n) {
      var r = n,
        o = e[t];
      return (o != null && (r = o(n)), r);
    }
    l.preProcessUserPref = c;
  },
  98,
);
