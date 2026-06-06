__d(
  "WAWebSetPrivacyForOneCategoryAction",
  [
    "WALogger",
    "WANullthrows",
    "WAWebBackendErrors",
    "WAWebLidMigrationUtils",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSetPrivacyJob",
    "WAWebSyncPrivacyDisallowedLists",
    "WAWebUserPrefsGeneral",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      switch (e) {
        case "readreceipts":
          return "readReceipts";
        case "groupadd":
          return "groupAdd";
        case "profile":
          return "profilePicture";
        case "status":
          return "about";
        case "last":
          return "lastSeen";
        case "online":
          return "online";
        case "calladd":
          return "callAdd";
        case "messages":
          return "messages";
      }
    }
    function u(e) {
      switch (e) {
        case "readReceipts":
          return "readreceipts";
        case "groupAdd":
          return "groupadd";
        case "profilePicture":
          return "profile";
        case "about":
          return "status";
        case "lastSeen":
          return "last";
        case "online":
          return "online";
        case "callAdd":
          return "calladd";
        case "messages":
          return "messages";
      }
    }
    function c(e) {
      switch (e) {
        case "status":
          return o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
            .About;
        case "groupadd":
          return o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
            .GroupAdd;
        case "last":
          return o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
            .LastSeen;
        case "profile":
          return o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
            .ProfilePicture;
        default:
          throw r("err")("castToPrivacyDisallowedListType: invalid name");
      }
    }
    async function d(e, t) {
      var n,
        a = await o("WAWebSetPrivacyJob").setPrivacy(e);
      if (a.length !== 1)
        throw r("err")("setPrivacy should return one response");
      var i = a[0];
      if (i instanceof o("WAWebBackendErrors").ServerStatusCodeError)
        throw (
          i.statusCode === 409 &&
            e.value === "contact_blacklist" &&
            (await o(
              "WAWebSyncPrivacyDisallowedLists",
            ).syncSinglePrivacyDisallowedList(c(e.name))),
          i
        );
      var l = e.name,
        u = e.value,
        d = s(l);
      if (
        (o("WAWebUserPrefsGeneral").setUserPrivacySettings(
          babelHelpers.extends(
            {},
            o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
            ((n = {}), (n[d] = u), n),
          ),
        ),
        u === "contact_blacklist")
      ) {
        var p = c(l),
          _ = {
            id: p,
            disallowedList: m(r("WANullthrows")(t)),
            dhash: r("WANullthrows")(i.dhash),
          };
        await o("WAWebSchemaPrivacyDisallowedList")
          .getPrivacyDisallowedListTable()
          .createOrReplace(_);
      }
    }
    function m(t) {
      if (
        o(
          "WAWebQueryPrivacyDisallowedListUtil",
        ).isPrivacyDisallowedListTypeLidMigrated()
      ) {
        var n = 0,
          r = t.map(function (e) {
            var t = o("WAWebLidMigrationUtils").toLid(e);
            return t == null ? (n++, e.toString()) : t.toString();
          });
        return (
          n > 0 &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getDisallowedListWids: ",
                    " unknown-lid-for-privacy-list-contact",
                  ])),
                n,
              )
              .sendLogs("unknown-lid-for-privacy-list-contact"),
          r
        );
      }
      return t.map(function (e) {
        return e.toString();
      });
    }
    ((l.privacyWebNameToServerName = u), (l.setPrivacyForOneCategory = d));
  },
  98,
);
