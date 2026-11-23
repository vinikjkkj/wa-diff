__d(
  "WAWebWorkerHandleSuccessApi",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebChatdLoginIdentity",
    "WAWebDbEncryptionKey",
    "WAWebUpdateClockSkewUtils",
    "WAWebUpdateMeLidUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumConnectionOriginType",
    "WAWebWamLoginMetricUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("successParser", function (e) {
        return (
          e.assertTag("success"),
          {
            ts: e.attrTime("t"),
            companionEncStatic:
              e.maybeAttrString("companion_enc_static") || "NULL",
            lid: e.maybeAttrString("lid"),
            displayName: e.maybeAttrString("display_name"),
          }
        );
      });
    async function c(t) {
      var n = u.parse(t);
      if (n.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleSuccess: failed to parse ",
                "",
              ])),
            n.error,
          ),
          Promise.reject(n.error)
        );
      var a = n.success;
      (o("WAWebChatdLoginIdentity").onChatdLoginSucceeded(),
        o("WAWebUpdateClockSkewUtils").updateClockSkew(a.ts),
        o("WAWebUpdateMeLidUtils").updateMeLid(
          a.lid != null ? o("WAWebWidFactory").createWid(a.lid) : null,
        ),
        a.displayName != null &&
          o("WAWebUserPrefsMeUser").setMeDisplayName(a.displayName),
        o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!1));
      var i = a.companionEncStatic;
      (o("WAWebDbEncryptionKey")
        .DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(i)
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "generateFinalDbEncryptionAndFtsKey failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("db-enc-key-gen-fail");
        }),
        await o("WAWebWamLoginMetricUtils").logLoginSuccess(
          o("WAWebWamEnumConnectionOriginType").CONNECTION_ORIGIN_TYPE.PUSH,
        ));
    }
    l.default = c;
  },
  98,
);
