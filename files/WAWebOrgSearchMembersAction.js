__d(
  "WAWebOrgSearchMembersAction",
  [
    "WALogger",
    "WAWebNetworkStatus",
    "WAWebOrgBridgeApi",
    "WAWebOrgDirectorySyncJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield o("WAWebOrgDirectorySyncJob").searchOrgDirectory(
                t,
                n.trim(),
              ),
              i = a.lids,
              l = a.rows;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-search] server search hits=",
                    "",
                  ])),
                i.length,
              ),
              o("WAWebOrgBridgeApi").applyOrgContactRows({
                createModels: !0,
                lids: i,
                rows: l,
              }),
              { failure: null, lids: i }
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-search] member search failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-member-search-failed-per-org"),
              {
                failure: r("WAWebNetworkStatus").online
                  ? "unavailable"
                  : "offline",
                lids: [],
              }
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.searchOrgMembersOnServer = u;
  },
  98,
);
