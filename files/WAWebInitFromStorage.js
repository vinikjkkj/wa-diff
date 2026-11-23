__d(
  "WAWebInitFromStorage",
  [
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebBackendApi",
    "WAWebConnModel",
    "WAWebLogoutReasonConstants",
    "WAWebMobilePlatforms",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebSchemaNonMessageDataRequest",
    "WAWebSocketModel",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[InitFromStorage] init metadata from storage",
          ])),
      );
      var t = o("WAWebUserPrefsGeneral").getLastMobilePlatform();
      if (t == null)
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "platform not found in UserPrefs.",
              ])),
          ),
          o("WAWebSocketModel").Socket.logout(
            o("WAWebLogoutReasonConstants").LogoutReason.UnknownCompanion,
          )
        );
      (await o("WAWebMobilePlatforms").setMobilePlatform(t, !1),
        o("WAWebConnModel").Conn.trigger("me_ready"),
        (o("WAWebConnModel").Conn.meReadyTriggered = !0));
      var n = o("WAWebUserPrefsGeneral").getPushname();
      ((o("WAWebConnModel").Conn.pushname = n),
        (o("WAWebConnModel").Conn.platform = t),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[InitFromStorage] important metadata loaded",
            ])),
        ));
    }
    async function d() {
      var e = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
          "account_linking",
        ),
        t = await e.getAccountLinkingStatus();
      o("WAWebBackendApi").frontendFireAndForget("updateAccountLinkingStatus", {
        isFBLinked: t.isFBLinked,
        isIGLinked: t.isIGLinked,
        linkState: t.linkState,
      });
    }
    async function m() {
      var e = await Promise.all([
          o("WAWebUserPrefsStatus").getShareToFB(),
          o("WAWebUserPrefsStatus").getShareToIG(),
        ]),
        t = e[0],
        n = e[1];
      o("WAWebBackendApi").frontendFireAndForget(
        "updateCrosspostAutoShareSettings",
        { shareToFB: t, shareToIG: n },
      );
    }
    function p() {
      return o("WAWebSchemaNonMessageDataRequest")
        .getNonMessageDataRequestTable()
        .all()
        .then(function (e) {
          o(
            "WAWebNonMessageDataRequestMediaHandlingUtils",
          ).initializeMediaUploadResultFromStorage(e);
        });
    }
    ((l.restoreImportantMetaData = c),
      (l.restoreAccountLinkingSettings = d),
      (l.restoreCrosspostAutoShareSettings = m),
      (l.restoreMediaUploadResult = p));
  },
  98,
);
