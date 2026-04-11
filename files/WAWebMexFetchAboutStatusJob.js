__d(
  "WAWebMexFetchAboutStatusJob",
  [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAboutStatusJobQuery.graphql",
    "WAWebPrivacyGatingUtils",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              (c || (c = n("Promise"))).resolve({ id: i })
            );
          var l =
              e !== void 0
                ? e
                : (e = n("WAWebMexFetchAboutStatusJobQuery.graphql")),
            d = { user_id: i.user };
          a != null &&
            o(
              "WAWebPrivacyGatingUtils",
            ).isProfileScrappingProtectionInMexFetchEnabled() &&
            (d.privacy_token = {
              tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(a),
            });
          var m = { user: d };
          try {
            var p,
              _,
              f = yield o("WAWebMexClient").fetchQuery(l, m),
              g = (p = f.xwa2_users_updates_since) == null ? void 0 : p[0];
            g == null &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][about_status] empty return list",
                    ])),
                )
                .tags("mex", "about_status")
                .sendLogs("mex-about-status-empty-return-list");
            var h =
              g == null || (_ = g.updates) == null || (_ = _[0]) == null
                ? void 0
                : _.text;
            return { id: i, status: h };
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              var y = e.statusCode;
              return y === 401
                ? { id: i, status: "" }
                : { id: i, error: { errorCode: y, errorText: e.message } };
            }
            throw e;
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.mexGetAbout = d;
  },
  98,
);
