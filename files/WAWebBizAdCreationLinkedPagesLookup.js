__d(
  "WAWebBizAdCreationLinkedPagesLookup",
  ["WAWebLinkedAccountsJob"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return s(await o("WAWebLinkedAccountsJob").queryLinkedAccountsResult());
    }
    function s(e) {
      return e == null || !e.pageInfoComplete
        ? { type: "unavailable" }
        : {
            info: o("WAWebLinkedAccountsJob").getLinkedPagesInfo(
              e.accounts.accounts,
            ),
            type: "resolved",
          };
    }
    ((l.queryLinkedPagesLookup = e), (l.toLinkedPagesLookup = s));
  },
  98,
);
