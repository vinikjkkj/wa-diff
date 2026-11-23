__d(
  "WAWebWorkDirectoryFetchCompanyNameJob",
  [
    "WALogger",
    "WAWebRelayClient",
    "WAWebWorkDirectoryFetchCompanyNameJobQuery.graphql",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebWorkDirectoryFetchCompanyNameJobQuery.graphql"));
    async function c(e) {
      try {
        var t,
          n = await o("WAWebRelayClient").fetchQuery(
            u,
            { lid: e.user },
            { environmentType: "whatsapp_web", fetchPolicy: "network-only" },
          ),
          a =
            n == null ||
            (t = n.xwa_whatsapp_for_work_employee_directory_member) == null
              ? void 0
              : t.company_name;
        return a == null || a === "" ? null : a;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[work-directory] fetching the company name failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("work-directory-company-name-fetch-failed"),
          null
        );
      }
    }
    l.fetchWorkDirectoryCompanyName = c;
  },
  98,
);
