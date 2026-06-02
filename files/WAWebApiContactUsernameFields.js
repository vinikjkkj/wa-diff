__d(
  "WAWebApiContactUsernameFields",
  [
    "WAWebApiContact",
    "WAWebCountryCodeUtils",
    "WAWebLidAwareContactsDB",
    "WAWebMexUsersGetCountryCode",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebApiContact").getContactRecord(e);
      return t == null ? void 0 : t.username;
    }
    function s(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], function () {
          var t = e.map(function (e) {
            var t = e.displayNameLID,
              n = e.id,
              r = e.username,
              o = e.usernameCountryCode,
              a = e.usernameSoftDeleted,
              i = { id: n };
            return (
              t != null && (i.displayNameLID = t),
              o != null && (i.usernameCountryCode = o),
              a === !0
                ? (i.usernameSoftDeleted = !0)
                : ((i.username = r), (i.usernameSoftDeleted = void 0)),
              i
            );
          });
          return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            t,
            "ApiContactUsernameFields.bulkUpdateUsernamesInDb",
          );
        });
    }
    async function u(e) {
      var t = await o("WAWebApiContact").getContactRecord(e);
      if ((t == null ? void 0 : t.usernameCountryCode) != null)
        return t.usernameCountryCode;
      var n = o("WAWebWidFactory").asUserWidOrThrow(e),
        r = o("WAWebCountryCodeUtils").getCountryCodeFromPn(n);
      return r != null
        ? r
        : o("WAWebMexUsersGetCountryCode").getMexUserCountryCode(n);
    }
    async function c(e) {
      var t = await o("WAWebApiContact").bulkGetContactRecord(e);
      return t.reduce(function (e, t) {
        return (
          t != null &&
            e.set(t.id, {
              username: t.username,
              usernameCountryCode: t.usernameCountryCode,
              usernameSoftDeleted: t.usernameSoftDeleted,
            }),
          e
        );
      }, new Map());
    }
    ((l.getContactUsername = e),
      (l.bulkUpdateUsernamesInDb = s),
      (l.getOrFetchContactUsernameCountryCode = u),
      (l.bulkGetContactToUsernameInfoMap = c));
  },
  98,
);
