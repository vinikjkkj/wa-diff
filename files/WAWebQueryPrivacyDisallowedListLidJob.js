__d(
  "WAWebQueryPrivacyDisallowedListLidJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("JSResourceForInteraction")(
        "WASmaxPrivacyGetContactBlacklistRPC",
      ).__setRef("WAWebQueryPrivacyDisallowedListLidJob");
    async function f(t) {
      var n;
      if (
        t ===
        o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.About
      )
        n = "status";
      else if (
        t ===
        o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.GroupAdd
      )
        n = "groupadd";
      else if (
        t ===
        o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.LastSeen
      )
        n = "last";
      else if (
        t ===
        o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
          .ProfilePicture
      )
        n = "profile";
      else if (
        t ===
        o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.Pix
      )
        n = "pix";
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
        i = await _.load(),
        l = i.sendGetContactBlacklistRPC,
        f = await l(a);
      if (f.name === "GetContactBlacklistResponseError")
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "GetContactBlacklist lid err: ",
                "",
              ])),
            f.value.errorGetPrivacyListError.name,
          ),
          r("err")("GetContactBlacklist lid request invalid response")
        );
      var g = f.value,
        h = g.privacyAddressingMode,
        y = g.privacyList,
        C = y == null ? void 0 : y.user;
      if (y == null || C == null || C.length === 0)
        return {
          status: "mismatch",
          users: [],
          dhash: y == null ? void 0 : y.dhash,
        };
      if (f.name === "GetContactBlacklistResponseSuccess")
        throw (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "retrieved pn response for GetContactBlacklist lid request",
              ])),
          ),
          r("err")("GetContactBlacklist lid request invalid response")
        );
      if (h !== "lid")
        throw (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "response privacyAddressingMode should be lid but it is pn",
              ])),
          ),
          r("err")("GetContactBlacklist lid request invalid response")
        );
      var b = [],
        v = [],
        S = C.map(function (e) {
          var t,
            n = e.jid,
            a;
          if (n == null) {
            var i,
              l =
                (i = e.privacyContactListIdentifierMixin) == null
                  ? void 0
                  : i.contactListIds;
            if (l == null || l.name !== "PnJid")
              throw (
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "contactListIds should be PnJid for user without LID",
                    ])),
                ),
                r("err")("GetContactBlacklist lid request invalid response")
              );
            var s = o("WAWebJidToWid").userJidToUserWid(l.value.pnJid),
              u = o("WAWebLidMigrationUtils").toUserLid(s);
            if (u == null) return s;
            a = o("WAWebLidMigrationUtils").toUserLidOrThrow(u);
          } else {
            var c = o("WAWebJidToWid").userJidToUserWid(n);
            a = o("WAWebLidMigrationUtils").toUserLidOrThrow(c);
          }
          var _ =
            (t = e.privacyContactListIdentifierMixin) == null
              ? void 0
              : t.contactListIds;
          if ((_ == null ? void 0 : _.name) === "Username")
            b.push({
              userId: a,
              username: o("WAWebUsernameTypes").asUsername(_.value.username),
            });
          else if ((_ == null ? void 0 : _.name) === "PnJid")
            v.push({
              lid: a,
              pn: o("WAWebJidToWid").userJidToUserWid(_.value.pnJid),
            });
          else if (
            (_ == null ? void 0 : _.name) === "EmptyContactListIdentifier"
          )
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "response contactListIds name is EmptyContactListIdentifier",
                ])),
            );
          else
            throw (
              o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "response contactListIds name is unexpected ",
                    "",
                  ])),
                _ == null ? void 0 : _.name,
              ),
              r("err")("GetContactBlacklist lid request invalid response")
            );
          return a;
        });
      (await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
        mappings: v,
        write: "now",
        learningSource: "query-privacy-disallowed-list",
      }),
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          b.length > 0 &&
          (await o("WAWebSetUsernameJob").setUsernamesJob(b)));
      var R = y.dhash;
      return { status: "mismatch", users: S, dhash: R };
    }
    l.queryPrivacyDisallowedListLid = f;
  },
  98,
);
