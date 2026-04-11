__d(
  "WAWebIntegrityCheckpointOpener",
  [
    "WALogger",
    "WAWebIntegrityChallengeUtils",
    "WAWebIntegrityPasskeyCheckpointUtils",
    "WAWebUserPrefsIndexedDBStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var n = o("WAWebIntegrityChallengeUtils").ChallengeTypes.cast(
        t.challenge_type,
      );
      e: {
        if (n === o("WAWebIntegrityChallengeUtils").ChallengeTypes.PASSKEY) {
          var r = t.passkey_challenge_base64;
          if (r == null) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[integrity-challenge] missing passkey challenge data",
                  ])),
              )
              .sendLogs("integrity-challenge-missing-passkey-data");
            return;
          }
          o("WAWebIntegrityPasskeyCheckpointUtils").openPasskeyCheckpoint(r);
          break e;
        }
        if (n === o("WAWebIntegrityChallengeUtils").ChallengeTypes.CAPTCHA) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[integrity-challenge] captcha checkpoint not yet implemented",
              ])),
          );
          break e;
        }
        if (n === void 0) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[integrity-challenge] unknown challenge type: ",
                  "",
                ])),
              t.challenge_type,
            )
            .sendLogs("integrity-challenge-unknown-type");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function d() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebIntegrityChallengeUtils").INTEGRITY_CHALLENGE_IDB_KEY,
      );
      e != null && c(e);
    }
    ((l.openChallengeModal = c), (l.initIntegrityCheckpointOpener = d));
  },
  98,
);
