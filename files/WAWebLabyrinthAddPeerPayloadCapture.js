__d(
  "WAWebLabyrinthAddPeerPayloadCapture",
  [
    "WABase64",
    "WALogger",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthPendingAddPeerPayload",
    "WAWebODS",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 59,
      u = 4096;
    function c(t, n) {
      o("WAWebLabyrinthPendingAddPeerPayload").holdAddPeerPayload(null);
      try {
        if (
          (r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.received"),
          r("justknobx")._("6730") === !0)
        ) {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.killswitch");
          return;
        }
        if (n.byteLength < s) {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.undersized");
          return;
        }
        if (n.byteLength > u) {
          r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.oversized");
          return;
        }
        (o("WAWebLabyrinthPendingAddPeerPayload").holdAddPeerPayload({
          advSecret: o("WAWebLabyrinthOpaqueTypes").makeAdvSecret(
            o("WABase64").decodeB64(t),
          ),
          sealedPayload: o(
            "WAWebLabyrinthOpaqueTypes",
          ).makeSealedAddPeerDevicePayload(d(n)),
        }),
          r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.captured"));
      } catch (t) {
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth add peer] capturing the pairing payload failed",
              ])),
          )
          .catching(r("getErrorSafe")(t)),
          r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.error"));
      }
    }
    function d(e) {
      return e instanceof ArrayBuffer ? e.slice(0) : e.slice().buffer;
    }
    l.captureAddPeerPayload = c;
  },
  98,
);
