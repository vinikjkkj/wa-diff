__d(
  "WAWebUserPrefsPostProcessors",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    var e = { WANoiseInfo: s, WARoutingInfo: u };
    function s(e) {
      var t = e.certificateChainBuffer,
        n = e.privKey,
        r = e.pubKey,
        a = e.recoveryToken,
        i = {
          recoveryToken: o("WABase64").decodeB64(a),
          staticKeyPair: {
            pubKey: o("WABase64").decodeB64(r),
            privKey: o("WABase64").decodeB64(n),
          },
          certificateChainBuffer:
            t != null ? o("WABase64").decodeB64(t) : void 0,
        };
      return i;
    }
    function u(e) {
      var t = e.domain,
        n = e.edgeRouting,
        r = {
          domain: t,
          edgeRouting: n != null ? o("WABase64").decodeB64(n) : null,
        };
      return r;
    }
    function c(t, n) {
      var r = n,
        o = e[t];
      return (o != null && (r = o(n)), r);
    }
    l.postProcessUserPref = c;
  },
  98,
);
