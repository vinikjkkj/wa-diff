__d(
  "WAWebIntegrityPasskeyCheckpointUtils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebIntegrityChallengeUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebSocketModel",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebPasskeyCheckpoint.react",
          )
            .__setRef("WAWebIntegrityPasskeyCheckpointUtils")
            .load();
          return e;
        }),
        "WAWebPasskeyCheckpoint",
      ),
      g = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMexIntegrityChallengeResponse",
          )
            .__setRef("WAWebIntegrityPasskeyCheckpointUtils")
            .load();
          return e.mexSubmitPasskeyChallengeResponse;
        }),
        "WAWebMexIntegrityChallengeResponse",
      );
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[integrity-challenge] passkey assertion completed",
              ])),
          );
          var t = yield g(),
            n = yield t(e);
          if (n.success)
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[integrity-challenge] challenge response accepted by server",
                ])),
            ),
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
                o("WAWebIntegrityChallengeUtils").INTEGRITY_CHALLENGE_IDB_KEY,
              ),
              o("WAWebModalManager").ModalManager.close());
          else
            throw (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[integrity-challenge] server rejected challenge response",
                    ])),
                )
                .sendLogs("integrity-challenge-response-rejected"),
              r("err")("Server rejected challenge response")
            );
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[integrity-challenge] passkey assertion failed: ",
              "",
            ])),
          t,
        )
        .sendLogs("integrity-challenge-passkey-error");
    }
    function b() {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[integrity-challenge] user initiated logout from checkpoint",
          ])),
      ),
        o("WAWebModalManager").ModalManager.close(),
        o("WAWebSocketModel").Socket.logout());
    }
    function v(e) {
      f()
        .then(function (t) {
          o("WAWebModalManager").ModalManager.open(
            _.jsx(t, {
              onLogout: b,
              onPasskeyComplete: h,
              onPasskeyError: C,
              passkeyChallenge: e,
            }),
            { blockClose: !0 },
          );
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[integrity-challenge] failed to load checkpoint modal",
                ])),
            )
            .sendLogs("integrity-challenge-modal-load-failed");
        });
    }
    l.openPasskeyCheckpoint = v;
  },
  98,
);
