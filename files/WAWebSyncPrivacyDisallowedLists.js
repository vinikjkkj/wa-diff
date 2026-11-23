__d(
  "WAWebSyncPrivacyDisallowedLists",
  [
    "WAWebBackendRuntime",
    "WAWebPrivacyService",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSchemaPrivacyDisallowedList",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await Promise.all(
          e.map(async function (e) {
            var t = await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebPrivacyService").PrivacyService,
                  ).queryPrivacyDisallowedList
                : o("WAWebQueryPrivacyDisallowedListUtil")
                    .queryPrivacyDisallowedList
            )(e);
            return { type: e, response: t };
          }),
        ),
        n = r("compactMap")(t, function (e) {
          var t = e.response,
            n = t.dhash,
            r = t.status,
            a = t.users;
          return r !== "mismatch" || a == null || n == null
            ? null
            : o(
                "WAWebSchemaPrivacyDisallowedList",
              ).createPrivacyDisallowedListRow(
                e.type,
                a.map(function (e) {
                  return e.toString();
                }),
                n,
              );
        });
      return (
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
