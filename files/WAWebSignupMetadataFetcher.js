__d(
  "WAWebSignupMetadataFetcher",
  ["WALogger", "WAWebSignupMetadataQuery", "getErrorSafe", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null;
    function c(e) {
      r("gkx")("26256") && (u = e);
    }
    async function d(t, n) {
      if (r("gkx")("26256") && u != null) return u;
      try {
        var a = await o("WAWebSignupMetadataQuery").fetchSignupMetadataGraphQL(
          t,
          n,
        );
        return a == null || a.id == null || a.signup_message == null
          ? (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:metadata] invalid response signupId=",
                    "",
                  ])),
                t,
              )
              .sendLogs("signup-metadata-invalid-response"),
            null)
          : {
              signupId: a.id,
              signupMessage: a.signup_message,
              privacyPolicyUrl: a.privacy_policy_url,
            };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[signup:metadata] fetch failed signupId=",
                  "",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("signup-metadata-fetch-failed"),
          null
        );
      }
    }
    ((l.setSignupMetadataOverride = c), (l.fetchSignupMetadata = d));
  },
  98,
);
