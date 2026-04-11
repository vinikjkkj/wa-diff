__d(
  "WAWebMexFetchTextStatusListJob",
  [
    "WALogger",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebMexClient",
    "WAWebMexFetchTextStatusListJobQuery.graphql",
    "WAWebPrivacyGatingUtils",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (!r("WAWebWid").isWid(t) || !t.isUser())
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][TEXT-STATUS] expected user wid, got: ",
                      "",
                    ])),
                  t.toLogString(),
                )
                .sendLogs("mex-text-status-list-invalid-wid"),
              r("err")(
                "[MEX][TEXT-STATUS] this method should only take user wid, instead it received: " +
                  t.toLogString(),
              )
            );
          var i = {
            jid: t.toJid(),
            last_update_time: a == null ? void 0 : a.toString(),
          };
          if (
            o(
              "WAWebPrivacyGatingUtils",
            ).isProfileScrappingProtectionInMexFetchEnabled()
          ) {
            var l,
              c = yield o(
                "WAWebGroupsPrivacyTokenUtils",
              ).getPermissionTokenMapForChatIds([t]),
              d = (l = c.get(t)) == null ? void 0 : l.anyElementValue;
            d != null &&
              (i.privacy_token = {
                tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(
                  d.buffer,
                ),
              });
          }
          var p =
              e !== void 0
                ? e
                : (e = n("WAWebMexFetchTextStatusListJobQuery.graphql")),
            _ = { input: [i] },
            f = yield o("WAWebMexClient").fetchQuery(p, _),
            g = r("nullthrows")(
              f.xwa2_text_status_list,
              "textStatusListResponse is null",
            ),
            h = r("nullthrows")(g[0], "textStatusListResponse[0] is null"),
            y = h.text;
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][TEXT-STATUS] fetched text status for ",
                  "",
                ])),
              h.jid,
            )
            .tags("GQL", "MEX");
          var C = m(h);
          return {
            id: C.id,
            text: C.textStatusString,
            emoji: C.textStatusEmoji,
            lastUpdateTime: C.textStatusLastUpdateTime,
            ephemeralDurationSeconds: C.textStatusEphemeralDuration,
          };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t;
      return {
        id: o("WAWebWidFactory").createWid(e.jid),
        textStatusString: e.text,
        textStatusEmoji: (t = e.emoji) == null ? void 0 : t.content,
        textStatusEphemeralDuration: e.ephemeral_duration_sec,
        textStatusLastUpdateTime: Number(e.last_update_time),
      };
    }
    ((l.mexGetTextStatusList = c), (l.parseTextStatusServerResponse = m));
  },
  98,
);
