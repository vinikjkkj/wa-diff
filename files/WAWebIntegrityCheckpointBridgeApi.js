__d(
  "WAWebIntegrityCheckpointBridgeApi",
  ["WALogger", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebIntegrityCheckpointOpener").__setRef(
        "WAWebIntegrityCheckpointBridgeApi",
      ),
      c = {
        openIntegrityCheckpoint: function (n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[integrity-challenge] openIntegrityCheckpoint called",
              ])),
          ),
            u
              .load()
              .then(function (e) {
                return e.openChallengeModal(n);
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[integrity-challenge] failed to load checkpoint opener",
                      ])),
                  )
                  .sendLogs("integrity-challenge-opener-load-failed");
              }));
        },
      };
    l.IntegrityCheckpointBridgeApi = c;
  },
  98,
);
