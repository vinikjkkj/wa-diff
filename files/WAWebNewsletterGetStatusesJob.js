__d(
  "WAWebNewsletterGetStatusesJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebJidToWid",
    "WAWebNewsletterGetStatusesQuery",
    "WAWebNewsletterStatusUtils",
    "WAWebOrchestratorNonPersistedJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, a) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterStatuses",
          async function () {
            var i = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: t,
              }),
              l;
            try {
              l = await o(
                "WAWebNewsletterGetStatusesQuery",
              ).queryNewsletterStatuses({
                afterServerId: a == null ? void 0 : a.afterServerId,
                beforeServerId: a == null ? void 0 : a.beforeServerId,
                count: a == null ? void 0 : a.count,
                newsletterJid: t,
                viewRole: n,
              });
            } catch (n) {
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
                    r("getErrorSafe")(n).message,
                  )
                  .sendLogs("newsletter-status-fetch-error"),
                {
                  msgs: [],
                  from: i,
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
                  i,
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
                      author: i,
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
              from: i,
              viewCounts: c,
              reactionCounts: d,
              revokedServerIds: m,
            };
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterStatuses = u;
  },
  98,
);
