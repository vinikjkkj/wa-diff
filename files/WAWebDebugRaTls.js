__d(
  "WAWebDebugRaTls",
  ["WATheiaRaTls", "WAWebDebugRaTlsConnection", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e = "rc";
    async function s(t, n, a) {
      return (
        t === void 0 && (t = o("WATheiaRaTls").WATheiaRaTlsClientPolicy.DEBUG),
        n === void 0 && (n = !0),
        a === void 0 && (a = e),
        r("vulture")("U6xdoTMDVjiK4v0tosmgto-RVyQ="),
        o("WAWebDebugRaTlsConnection").checkTheiaRaTlsHandshake({
          clientPolicy: t,
          env: a,
          shouldVerifyCert: n,
        })
      );
    }
    ((s.doc =
      "Full flow: fetch a TEE node token through OHAI, then run a browser RA-TLS WASM handshake against the teellm WebSocket endpoint. Run window.Debug.setLogLevel(1) first to show phase and TLS-round details. Optional args: clientPolicy, shouldVerifyCert, env."),
      (s.paramsToExecute = []));
    var u = { runTheiaRaTlsHandshake: s };
    l.default = u;
  },
  98,
);
