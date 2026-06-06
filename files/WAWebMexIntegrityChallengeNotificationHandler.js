__d(
  "WAWebMexIntegrityChallengeNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebIntegrityChallengeGatingUtils",
    "WAWebIntegrityChallengeUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            !o(
              "WAWebIntegrityChallengeGatingUtils",
            ).isIntegrityCheckpointEnabled()
          ) {
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][integrity-challenge] kill switch on, skip",
                  ])),
              )
              .tags("mex", "integrity-challenge");
            return;
          }
          try {
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][integrity-challenge] notification received",
                  ])),
              )
              .tags("mex", "integrity-challenge");
            var a = n.xwa2_notify_integrity_challenge,
              i = a.captcha_challenge,
              l = a.challenge_type,
              c = a.passkey_challenge,
              d = o("WAWebIntegrityChallengeUtils").ChallengeTypes.cast(l),
              m;
            e: {
              if (
                d === o("WAWebIntegrityChallengeUtils").ChallengeTypes.PASSKEY
              ) {
                var p = c == null ? void 0 : c.challenge_base64;
                if (p == null)
                  throw r("err")("Missing passkey challenge_base64");
                m = { challenge_type: "PASSKEY", passkey_challenge_base64: p };
                break e;
              }
              if (
                d === o("WAWebIntegrityChallengeUtils").ChallengeTypes.CAPTCHA
              ) {
                var _ = i == null ? void 0 : i.site_key,
                  f = i == null ? void 0 : i.challenge_url;
                if (_ == null || f == null)
                  throw r("err")("Missing captcha site_key or challenge_url");
                m = {
                  challenge_type: "CAPTCHA",
                  captcha_site_key: _,
                  captcha_challenge_url: f,
                };
                break e;
              }
              throw d === void 0
                ? r("err")("Unknown challenge type: " + l)
                : Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      d,
                  );
            }
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebIntegrityChallengeUtils").INTEGRITY_CHALLENGE_IDB_KEY,
              m,
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "openIntegrityCheckpoint",
                m,
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][integrity-challenge] notif handling failed",
                  ])),
              )
              .tags("integrity-challenge")
              .sendLogs("mex-handle-integrity-challenge-notification-failed");
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.mexHandleIntegrityChallengeNotification = c;
  },
  98,
);
