__d(
  "WAWebSetTcTokenChatAction",
  [
    "WAArrayBufferUtils",
    "WALogger",
    "WAWebApiOrphanTcToken",
    "WAWebChatCollection",
    "WAWebChatGetExistingBridge",
    "WAWebLidMigrationUtils",
    "WAWebProfilePicPrivacyTokenGating",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            if (a != null && t.isRegularUser()) {
              var i = n != null ? n : o("WAWebLidMigrationUtils").toLid(t),
                l = i
                  ? yield o(
                      "WAWebChatCollection",
                    ).ChatCollection.getChatByAccountLid(i)
                  : null;
              if (
                (l == null &&
                  (l = yield o("WAWebChatGetExistingBridge").getExisting(t)),
                l == null)
              ) {
                yield o("WAWebApiOrphanTcToken").createOrUpdateOrphanTcToken(
                  i != null ? i : t,
                  { tcToken: a, tcTokenTimestamp: r },
                );
                return;
              }
              if (
                !(
                  (l.tcToken != null &&
                    o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(
                      l.tcToken,
                      a,
                    )) ||
                  (l.tcTokenTimestamp != null && l.tcTokenTimestamp > r)
                )
              ) {
                var s = !1;
                o(
                  "WAWebProfilePicPrivacyTokenGating",
                ).isProfilePicIQPrivacyTokenEnabled() &&
                  l.tcToken == null &&
                  o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.get(l.id) == null &&
                  (s = !0);
                var u = { tcToken: a, tcTokenTimestamp: r };
                (l.set(u),
                  s &&
                    (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[ProfilePicIqTC] fetch pp after tc token received",
                        ])),
                    ),
                    o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.find(l.id)),
                  yield o("WAWebSchemaChat")
                    .getChatTable()
                    .merge(l.id.toString(), u));
              }
            }
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.handleIncomingTcToken = s;
  },
  98,
);
