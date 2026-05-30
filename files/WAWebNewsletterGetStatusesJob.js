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
                i == null ? void 0 : i.count,
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
                  revokedServerIds: [],
                }
              );
            }
            var s = [],
              u = new Map(),
              c = new Map(),
              d = [];
            for (var m of l) {
              var p;
              if (
                ((p = m.statusNewsletterContentMixin) == null
                  ? void 0
                  : p.newsletterStatusContentTypeMixins.name) ===
                "StatusNewsletterRevoke"
              ) {
                d.push(m.serverId);
                continue;
              }
              var _ = o("WAWebNewsletterStatusUtils").mapStatusEntryToMsgData(
                m,
                n,
              );
              if (_ != null) {
                var f,
                  g,
                  h =
                    (f = m.statusNewsletterViewsCountsMixin) == null
                      ? void 0
                      : f.viewsCountCount,
                  y = _.id.toString();
                (s.push(
                  babelHelpers.extends({}, _, {
                    isNewsletterStatus: !0,
                    author: n,
                    viewCount: h,
                  }),
                ),
                  h != null && u.set(y, h));
                var C = o("WAWebNewsletterStatusUtils").buildEmojiCountMap(
                  (g = m.statusNewsletterReactionsMixin) == null
                    ? void 0
                    : g.reactionsReaction,
                );
                C != null && c.set(y, C);
              }
            }
            return {
              msgs: s,
              from: n,
              viewCounts: u,
              reactionCounts: c,
              revokedServerIds: d,
            };
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterStatuses = s;
  },
  98,
);
