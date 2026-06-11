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
    var e, s;
    function u(t, a, i) {
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
            var u = [],
              c = new Map(),
              d = new Map(),
              m = [];
            for (var p of l)
              try {
                var _;
                if (
                  ((_ = p.statusNewsletterContentMixin) == null
                    ? void 0
                    : _.newsletterStatusContentTypeMixins.name) ===
                  "StatusNewsletterRevoke"
                ) {
                  m.push(p.serverId);
                  continue;
                }
                var f = o("WAWebNewsletterStatusUtils").mapStatusEntryToMsgData(
                  p,
                  n,
                );
                if (f != null) {
                  var g,
                    h,
                    y =
                      (g = p.statusNewsletterViewsCountsMixin) == null
                        ? void 0
                        : g.viewsCountCount,
                    C = f.id.toString();
                  (u.push(
                    babelHelpers.extends({}, f, {
                      isNewsletterStatus: !0,
                      author: n,
                      viewCount: y,
                    }),
                  ),
                    y != null && c.set(C, y));
                  var b = o("WAWebNewsletterStatusUtils").buildEmojiCountMap(
                    (h = p.statusNewsletterReactionsMixin) == null
                      ? void 0
                      : h.reactionsReaction,
                  );
                  b != null && d.set(C, b);
                }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] Skipping unparseable status entry ",
                        " for ",
                        "",
                      ])),
                    String(p.serverId),
                    t,
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("newsletter", "status")
                  .sendLogs("newsletter-status-entry-skipped");
              }
            return {
              msgs: u,
              from: n,
              viewCounts: c,
              reactionCounts: d,
              revokedServerIds: m,
            };
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterStatuses = u;
  },
  98,
);
