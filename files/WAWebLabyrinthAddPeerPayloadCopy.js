__d(
  "WAWebLabyrinthAddPeerPayloadCopy",
  [
    "WALogger",
    "WAWebODS",
    "WAWebUserPrefsIndexedDBStorage",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WALabyrinthPendingAddPeerPayload";
    function u() {
      r("gkx")("7031") ||
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) == null ||
        c();
    }
    async function c() {
      try {
        return (
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s),
          !0
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[labyrinth add peer] deleting the pairing payload copy failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          r("WAWebODS").incr(
            "web.app.labyrinth_add_peer.pairing.copy_delete_failed",
          ),
          !1
        );
      }
    }
    ((l.ADD_PEER_PAYLOAD_COPY_KEY = s),
      (l.deleteAddPeerPayloadCopyWhileOnboardingOff = u),
      (l.deleteAddPeerPayloadCopy = c));
  },
  98,
);
