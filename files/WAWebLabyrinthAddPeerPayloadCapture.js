__d(
  "WAWebLabyrinthAddPeerPayloadCapture",
  [
    "WABase64",
    "WALogger",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthPendingAddPeerPayload",
    "WAWebODS",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 59,
      u = 4096;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebLabyrinthPendingAddPeerPayload").holdAddPeerPayload(
            m(e, t),
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, n) {
      try {
        if (
          (r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.received"),
          r("justknobx")._("6730") === !0)
        )
          return (
            r("WAWebODS").incr("web.app.labyrinth_add_peer.pairing.killswitch"),
            null
          );
        if (n.byteLength < s)
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
          ).makeSealedAddPeerDevicePayload(p(n)),
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
    function p(e) {
      return e instanceof ArrayBuffer ? e.slice(0) : e.slice().buffer;
    }
    l.captureAddPeerPayload = c;
  },
  98,
);
