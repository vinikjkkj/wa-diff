__d(
  "WAWebQueryPrivacyDisallowedListLidJob",
  [
    "WALogger",
    "WASmaxPrivacyGetContactBlacklistRPC",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (
            t ===
            o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .About
          )
            n = "status";
          else if (
            t ===
            o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .GroupAdd
          )
            n = "groupadd";
          else if (
            t ===
            o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .LastSeen
          )
            n = "last";
          else if (
            t ===
            o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .ProfilePicture
          )
            n = "profile";
          else
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "invalid privacyType: ",
                    "",
                  ])),
                t,
              ),
              r("err")("GetContactBlacklist lid request invalid privacyType")
            );
          var a = {
              getContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroupArgs:
                {
                  getContactBlacklistGetContactBlacklistLID: {
                    categoryNamesForContactBlacklistMixinArgs: { anyName: n },
                  },
                },
            },
            i = yield o(
              "WASmaxPrivacyGetContactBlacklistRPC",
            ).sendGetContactBlacklistRPC(a);
          if (i.name === "GetContactBlacklistResponseError")
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "GetContactBlacklist lid err: ",
                    "",
                  ])),
                i.value.errorGetPrivacyListError.name,
              ),
              r("err")("GetContactBlacklist lid request invalid response")
            );
          var l = i.value,
            p = l.privacyAddressingMode,
            _ = l.privacyList,
            f = _ == null ? void 0 : _.user;
          if (_ == null || f == null || f.length === 0)
            return {
              status: "mismatch",
              users: [],
              dhash: _ == null ? void 0 : _.dhash,
            };
          if (i.name === "GetContactBlacklistResponseSuccess")
            throw (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "retrieved pn response for GetContactBlacklist lid request",
                  ])),
              ),
              r("err")("GetContactBlacklist lid request invalid response")
            );
          if (p !== "lid")
            throw (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "response privacyAddressingMode should be lid but it is pn",
                  ])),
              ),
              r("err")("GetContactBlacklist lid request invalid response")
            );
          var g = [],
            h = [],
            y = f.map(function (e) {
              var t = e.jid,
                n;
              if (t == null) {
                var a = e.contactListIds;
                if (a == null || a.name !== "PnJid")
                  throw (
                    o("WALogger").ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "contactListIds should be PnJid for user without LID",
                        ])),
                    ),
                    r("err")("GetContactBlacklist lid request invalid response")
                  );
                var i = o("WAWebJidToWid").userJidToUserWid(a.value.pnJid),
                  l = o("WAWebLidMigrationUtils").toUserLid(i);
                if (l == null) return i;
                n = o("WAWebLidMigrationUtils").toUserLidOrThrow(l);
              } else {
                var s = o("WAWebJidToWid").userJidToUserWid(t);
                n = o("WAWebLidMigrationUtils").toUserLidOrThrow(s);
              }
              var u = e.contactListIds;
              if ((u == null ? void 0 : u.name) === "Username")
                g.push({ userId: n, username: u.value.username });
              else if ((u == null ? void 0 : u.name) === "PnJid")
                h.push({
                  lid: n,
                  pn: o("WAWebJidToWid").userJidToUserWid(u.value.pnJid),
                });
              else
                throw (
                  o("WALogger").ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "response contactListIds name is unexpected ",
                        "",
                      ])),
                    u == null ? void 0 : u.name,
                  ),
                  r("err")("GetContactBlacklist lid request invalid response")
                );
              return n;
            });
          (yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
            mappings: h,
            flushImmediately: !0,
            learningSource: "other",
          }),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              g.length > 0 &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(g)));
          var C = _.dhash;
          return { status: "mismatch", users: y, dhash: C };
        })),
        _.apply(this, arguments)
      );
    }
    l.queryPrivacyDisallowedListLid = p;
  },
  98,
);
