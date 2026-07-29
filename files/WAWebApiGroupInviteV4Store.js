__d(
  "WAWebApiGroupInviteV4Store",
  [
    "WATimeUtils",
    "WAWebSchemaGroupInviteV4",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebSchemaGroupInviteV4")
        .getGroupInviteV4Table()
        .createOrMerge(e, t);
    }
    function s(e) {
      return o("WAWebSchemaGroupInviteV4")
        .getGroupInviteV4Table()
        .bulkCreateOrMerge(e);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.expiration,
            n = e.from,
            r = e.groupId,
            a = e.to,
            i = yield o("WAWebSchemaGroupInviteV4")
              .getGroupInviteV4Table()
              .equals(["from", "to", "groupId"], [n, a, r])
              .then(function (e) {
                return e.filter(function (e) {
                  return !e.expired && e.expiration <= t;
                });
              });
          return (
            yield o("WAWebSchemaGroupInviteV4")
              .getGroupInviteV4Table()
              .bulkCreateOrReplace(
                i.map(function (e) {
                  return babelHelpers.extends({}, e, { expired: !0 });
                }),
              ),
            i
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString();
      return o("WAWebSchemaGroupInviteV4")
        .getGroupInviteV4Table()
        .equals(["from", "groupId"], [t, e.toString()])
        .then(function (e) {
          return e.filter(function (e) {
            return !e.expired && o("WATimeUtils").unixTime() <= e.expiration;
          });
        })
        .then(function (e) {
          return e.map(function (e) {
            return e.to;
          });
        });
    }
    ((l.persistGroupInviteV4Msg = e),
      (l.persistGroupInviteV4Msgs = s),
      (l.revokeGroupInvites = u),
      (l.getPendingParticipantsDB = d));
  },
  98,
);
