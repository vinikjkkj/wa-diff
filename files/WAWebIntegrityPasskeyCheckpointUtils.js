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
      f = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebPasskeyCheckpoint.react",
        )
          .__setRef("WAWebIntegrityPasskeyCheckpointUtils")
          .load();
        return e;
      }, "WAWebPasskeyCheckpoint"),
      g = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebMexIntegrityChallengeResponse",
        )
          .__setRef("WAWebIntegrityPasskeyCheckpointUtils")
          .load();
        return e.mexSubmitPasskeyChallengeResponse;
      }, "WAWebMexIntegrityChallengeResponse");
    async function h(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[integrity-challenge] passkey assertion completed",
          ])),
      );
      var n = await g(),
        a = await n(t);
      if (a.success)
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[integrity-challenge] server rejected challenge response",
                ])),
            )
            .sendLogs("integrity-challenge-response-rejected"),
          r("err")("Server rejected challenge response")
        );
    }
    function y(e) {
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[integrity-challenge] passkey assertion failed: ",
              "",
            ])),
          e,
        )
        .sendLogs("integrity-challenge-passkey-error");
    }
    function C() {
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[integrity-challenge] user initiated logout from checkpoint",
          ])),
      ),
        o("WAWebModalManager").ModalManager.close(),
        o("WAWebSocketModel").Socket.logout());
    }
    function b(e) {
      f()
        .then(function (t) {
          o("WAWebModalManager").ModalManager.open(
            _.jsx(t, {
              onLogout: C,
              onPasskeyComplete: h,
              onPasskeyError: y,
              passkeyChallenge: e,
            }),
            { blockClose: !0 },
          );
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[integrity-challenge] failed to load checkpoint modal",
                ])),
            )
            .sendLogs("integrity-challenge-modal-load-failed");
        });
    }
    l.openPasskeyCheckpoint = b;
  },
  98,
);
