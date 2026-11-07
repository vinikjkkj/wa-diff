__d(
  "WAWebInitFromStorage",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          (yield o("WAWebMobilePlatforms").setMobilePlatform(t, !1),
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
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
              "WAWebAccountLinkingDBOperationsAPI",
            ).getAccountLinkingDBOps("account_linking"),
            t = yield e.getAccountLinkingStatus();
          o("WAWebBackendApi").frontendFireAndForget(
            "updateAccountLinkingStatus",
            {
              isFBLinked: t.isFBLinked,
              isIGLinked: t.isIGLinked,
              linkState: t.linkState,
            },
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (c || (c = n("Promise"))).all([
              o("WAWebUserPrefsStatus").getShareToFB(),
              o("WAWebUserPrefsStatus").getShareToIG(),
            ]),
            t = e[0],
            r = e[1];
          o("WAWebBackendApi").frontendFireAndForget(
            "updateCrosspostAutoShareSettings",
            { shareToFB: t, shareToIG: r },
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return o("WAWebSchemaNonMessageDataRequest")
        .getNonMessageDataRequestTable()
        .all()
        .then(function (e) {
          o(
            "WAWebNonMessageDataRequestMediaHandlingUtils",
          ).initializeMediaUploadResultFromStorage(e);
        });
    }
    ((l.restoreImportantMetaData = d),
      (l.restoreAccountLinkingSettings = p),
      (l.restoreCrosspostAutoShareSettings = f),
      (l.restoreMediaUploadResult = h));
  },
  98,
);
