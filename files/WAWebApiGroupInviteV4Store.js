__d(
  "WAWebApiGroupInviteV4Store",
  ["WATimeUtils", "WAWebSchemaGroupInviteV4", "WAWebUserPrefsMeUser"],
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
    async function u(e, t, n, r) {
      var a = await o("WAWebSchemaGroupInviteV4")
        .getGroupInviteV4Table()
        .equals(["from", "to", "groupId"], [e, t, n])
        .then(function (e) {
          return e.filter(function (e) {
            return !e.expired && e.expiration <= r;
          });
        });
      return (
        await o("WAWebSchemaGroupInviteV4")
          .getGroupInviteV4Table()
          .bulkCreateOrReplace(
            a.map(function (e) {
              return babelHelpers.extends({}, e, { expired: !0 });
            }),
          ),
        a
      );
    }
    function c(e, t) {
      var n = o("WAWebUserPrefsMeUser")
          .getMePnUserOrThrow_DO_NOT_USE()
          .toString(),
        r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
        a = t ? r : n;
      return o("WAWebSchemaGroupInviteV4")
        .getGroupInviteV4Table()
        .equals(["from", "groupId"], [a, e.toString()])
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
      (l.getPendingParticipants = c));
  },
  98,
);
