__d(
  "WAWebBizAdCreationLinkedPagesLookup",
  ["WAWebLinkedAccountsJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return u(
            yield o("WAWebLinkedAccountsJob").queryLinkedAccountsResult(),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return e == null || !e.pageInfoComplete
        ? { type: "unavailable" }
        : {
            info: o("WAWebLinkedAccountsJob").getLinkedPagesInfo(
              e.accounts.accounts,
            ),
            type: "resolved",
          };
    }
    ((l.queryLinkedPagesLookup = e), (l.toLinkedPagesLookup = u));
  },
  98,
);
