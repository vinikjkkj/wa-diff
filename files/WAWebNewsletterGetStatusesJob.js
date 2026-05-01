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
                {
                  msgs: [],
                  from: n,
                  viewCounts: new Map(),
                  reactionCounts: new Map(),
                }
              );
            }
            var s = [],
              u = new Map(),
              c = new Map();
            for (var d of l) {
              var m = o("WAWebNewsletterStatusUtils").mapStatusEntryToMsgData(
                d,
                n,
              );
              if (m != null) {
                var p,
                  _,
                  f =
                    (p = d.statusNewsletterViewsCountsMixin) == null
                      ? void 0
                      : p.viewsCountCount,
                  g = m.id.toString();
                (s.push(
                  babelHelpers.extends({}, m, {
                    isNewsletterStatus: !0,
                    author: n,
                    viewCount: f,
                  }),
                ),
                  f != null && u.set(g, f));
                var h = o("WAWebNewsletterStatusUtils").buildEmojiCountMap(
                  (_ = d.statusNewsletterReactionsMixin) == null
                    ? void 0
                    : _.reactionsReaction,
                );
                h != null && c.set(g, h);
              }
            }
            return { msgs: s, from: n, viewCounts: u, reactionCounts: c };
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterStatuses = s;
  },
  98,
);
