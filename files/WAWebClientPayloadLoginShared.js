__d(
  "WAWebClientPayloadLoginShared",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebChatdLoginIdentity",
    "WAWebClientPayloadReleaseChannel",
    "WAWebProtobufsWa6.pb",
    "WAWebUserPrefsGeneral",
    "WAWebWamPlatform",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0;
    function u() {
      s++;
    }
    function c() {
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForLogin: connectAttemptCount=",
                "",
              ])),
            s,
          )
          .tags("launch-socket-chat"),
        babelHelpers.extends(
          {},
          o("WAWebChatdLoginIdentity").getChatdLoginIdentity(),
          {
            lc: o("WAWebUserPrefsGeneral").getLoginCounter(),
            connectAttemptCount: s,
            lidDbMigrated: !0,
          },
        )
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return babelHelpers.extends(
            {
              appVersion: {
                primary: Number(o("WAWebBuildConstants").VERSION_PRIMARY),
                secondary: Number(o("WAWebBuildConstants").VERSION_SECONDARY),
                tertiary: Number(o("WAWebBuildConstants").VERSION_TERTIARY),
              },
              platform: o("WAWebProtobufsWa6.pb")
                .ClientPayload$UserAgent$Platform.WEB,
              releaseChannel: yield o(
                "WAWebClientPayloadReleaseChannel",
              ).getReleaseChannel(),
            },
            e,
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return (function (e) {
        if (e === "WEB" || e === "PWA")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .WEB_BROWSER;
        if (e === "DARWIN" || e === "DARWIN_BETA")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .DARWIN;
        if (e === "MACSTORE")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .APP_STORE;
        if (e === "WIN_HYBRID")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .WIN_HYBRID;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(o("WAWebWamPlatform").getWamPlatform());
    }
    ((l.incrementSuccessfulLoginCounter = u),
      (l.getLoginClientPayloadFields = c),
      (l.getWebUserAgent = d),
      (l.getWebSubPlatform = p));
  },
  98,
);
