__d(
  "WAWebNewsletterGetStatusesJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebJidToWid",
    "WAWebNewsletterGetStatusesQuery",
    "WAWebNewsletterStatusUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a, i) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterStatuses",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: t,
              }),
              l;
            try {
              l = yield o(
                "WAWebNewsletterGetStatusesQuery",
              ).queryNewsletterStatuses(
                t,
                a,
                i == null ? void 0 : i.afterServerId,
                i == null ? void 0 : i.beforeServerId,
              );
            } catch (a) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] Failed to fetch statuses for ",
                        ": ",
                        "",
                      ])),
                    t,
                    r("getErrorSafe")(a).message,
                  )
                  .sendLogs("newsletter-status-fetch-error"),
                { msgs: [], from: n, viewCounts: new Map() }
              );
            }
            var s = [],
              u = new Map();
            for (var c of l) {
              var d = o("WAWebNewsletterStatusUtils").mapStatusEntryToMsgData(
                c,
                n,
              );
              if (d != null) {
                var m,
                  p =
                    (m = c.statusNewsletterViewsCountsMixin) == null
                      ? void 0
                      : m.viewsCountCount;
                (s.push(
                  babelHelpers.extends({}, d, {
                    isNewsletterStatus: !0,
                    author: n,
                    viewCount: p,
                  }),
                ),
                  p != null && u.set(d.id.toString(), p));
              }
            }
            return { msgs: s, from: n, viewCounts: u };
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterStatuses = s;
  },
  98,
);
