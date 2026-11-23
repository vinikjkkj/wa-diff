__d(
  "WAWebLabyrinthAddPeerPayloadCapture",
  [
    "WABase64",
    "WALogger",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthPendingAddPeerPayload",
    "WAWebODS",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 59,
      u = 4096;
    async function c(e, t) {
      await o("WAWebLabyrinthPendingAddPeerPayload").holdAddPeerPayload(
        d(e, t),
      );
    }
    function d(t, n) {
      try {
        if (
          (r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.received"),
          n.byteLength < s)
        )
          return (
            r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.undersized"),
            null
          );
        if (n.byteLength > u)
          return (
            r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.oversized"),
            null
          );
        var a = {
          advSecret: o("WAWebLabyrinthOpaqueTypes").makeAdvSecret(
            o("WABase64").decodeB64(t),
          ),
          sealedPayload: o(
            "WAWebLabyrinthOpaqueTypes",
          ).makeSealedAddPeerDevicePayload(m(n)),
        };
        return (
          r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.captured"),
          a
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[labyrinth add peer] capturing the pairing payload failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.error"),
          null
        );
      }
    }
    function m(e) {
      return e instanceof ArrayBuffer ? e.slice(0) : e.slice().buffer;
    }
    l.captureAddPeerPayload = c;
  },
  98,
);
