__d(
  "WAWebMexFetchAboutStatusJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAboutStatusJobQuery.graphql",
    "WAWebPrivacyGatingUtils",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var a = t.tcToken,
        i = t.wid;
      if (!r("WAWebWid").isWid(i) || !i.isUser())
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][about_status] expected user wid, got: ",
                  "",
                ])),
              i,
            )
            .tags("mex", "about_status")
            .sendLogs("mex-about-status-wrong-wid"),
          Promise.resolve({ id: i })
        );
      var l =
          e !== void 0
            ? e
            : (e = n("WAWebMexFetchAboutStatusJobQuery.graphql")),
        c = { user_id: i.user };
      a != null &&
        o(
          "WAWebPrivacyGatingUtils",
        ).isProfileScrappingProtectionInMexFetchEnabled() &&
        (c.privacy_token = {
          tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(a),
        });
      var d = { user: c };
      try {
        var m,
          p,
          _ = await o("WAWebMexClient").fetchQuery(l, d),
          f = (m = _.xwa2_users_updates_since) == null ? void 0 : m[0];
        f == null &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][about_status] empty return list",
                ])),
            )
            .tags("mex", "about_status")
            .sendLogs("mex-about-status-empty-return-list");
        var g =
          f == null || (p = f.updates) == null || (p = p[0]) == null
            ? void 0
            : p.text;
        return { id: i, status: g };
      } catch (e) {
        if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
          var h = e.statusCode;
          return h === 401
            ? { id: i, status: "" }
            : { id: i, error: { errorCode: h, errorText: e.message } };
        }
        throw e;
      }
    }
    l.mexGetAbout = c;
  },
  98,
);
