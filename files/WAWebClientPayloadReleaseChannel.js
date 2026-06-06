__d(
  "WAWebClientPayloadReleaseChannel",
  [
    "WALogger",
    "WAWebBuildType",
    "WAWebProtobufsWa6.pb",
    "asyncToGeneratorRuntime",
    "cr:9565",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (e = n("cr:9565")) != null ? e : {},
      d = c.getWindowsBuildType;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          d != null
            ? (e = d())
            : (e = yield o("WAWebBuildType").getBuildType());
          var t;
          e: {
            if (e === o("WAWebBuildType").BuildType.RELEASE) {
              t = o("WAWebProtobufsWa6.pb")
                .ClientPayload$UserAgent$ReleaseChannel.RELEASE;
              break e;
            }
            if (e === o("WAWebBuildType").BuildType.BETA) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Web] Enabling BETA features",
                  ])),
              ),
                (t = o("WAWebProtobufsWa6.pb")
                  .ClientPayload$UserAgent$ReleaseChannel.BETA));
              break e;
            }
            if (e === o("WAWebBuildType").BuildType.ALPHA) {
              t = o("WAWebProtobufsWa6.pb")
                .ClientPayload$UserAgent$ReleaseChannel.ALPHA;
              break e;
            }
            if (e === o("WAWebBuildType").BuildType.DEBUG) {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Web]: Enabling DEBUG features",
                  ])),
              ),
                (t = o("WAWebProtobufsWa6.pb")
                  .ClientPayload$UserAgent$ReleaseChannel.DEBUG));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          }
          return t;
        })),
        p.apply(this, arguments)
      );
    }
    l.getReleaseChannel = m;
  },
  98,
);
