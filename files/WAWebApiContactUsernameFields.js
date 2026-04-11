__d(
  "WAWebApiContactUsernameFields",
  [
    "WAWebApiContact",
    "WAWebCountryCodeUtils",
    "WAWebLidAwareContactsDB",
    "WAWebMexUsersGetCountryCode",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebApiContact").getContactRecord(e);
          return t == null ? void 0 : t.username;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebApiContact").getContactRecord(e);
          if ((t == null ? void 0 : t.usernameCountryCode) != null)
            return t.usernameCountryCode;
          var n = o("WAWebWidFactory").asUserWidOrThrow(e),
            r = o("WAWebCountryCodeUtils").getCountryCodeFromPn(n);
          return r != null
            ? r
            : o("WAWebMexUsersGetCountryCode").getMexUserCountryCode(n);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebApiContact").bulkGetContactRecord(e);
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
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getContactUsername = e),
      (l.bulkUpdateUsernamesInDb = u),
      (l.getOrFetchContactUsernameCountryCode = c),
      (l.bulkGetContactToUsernameInfoMap = m));
  },
  98,
);
