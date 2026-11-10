__d(
  "WAWebLabyrinthAddPeerPayloadCopy",
  [
    "WALogger",
    "WAWebODS",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
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
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return (
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s),
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
        })),
        d.apply(this, arguments)
      );
    }
    ((l.ADD_PEER_PAYLOAD_COPY_KEY = s),
      (l.deleteAddPeerPayloadCopyWhileOnboardingOff = u),
      (l.deleteAddPeerPayloadCopy = c));
  },
  98,
);
