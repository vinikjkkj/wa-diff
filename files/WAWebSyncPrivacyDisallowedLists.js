__d(
  "WAWebSyncPrivacyDisallowedLists",
  ["WAWebQueryPrivacyDisallowedListUtil", "WAWebSchemaPrivacyDisallowedList"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await Promise.all(
          e.map(async function (e) {
            var t = await o(
              "WAWebQueryPrivacyDisallowedListUtil",
            ).queryPrivacyDisallowedList(e);
            return { type: e, response: t };
          }),
        ),
        n = [];
      return (
        t.forEach(function (e) {
          var t = e.response,
            r = t.dhash,
            o = t.status,
            a = t.users;
          o !== "mismatch" ||
            a == null ||
            r == null ||
            n.push({
              id: e.type,
              disallowedList: a.map(function (e) {
                return e.toString();
              }),
              dhash: r,
            });
        }),
        await o("WAWebSchemaPrivacyDisallowedList")
          .getPrivacyDisallowedListTable()
          .bulkCreateOrReplace(n),
        n
      );
    }
    async function s(t) {
      await e([t]);
    }
    ((l.syncPrivacyDisallowedLists = e),
      (l.syncSinglePrivacyDisallowedList = s));
  },
  98,
);
