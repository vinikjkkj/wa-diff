__d(
  "WAWebOpenStatusQuotedFlow",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = e.rowIndex,
        n = e.rowSection,
        r = e.status;
      r.isSyntheticFromMetadata !== !0 &&
        o("WAWebModalManager").ModalManager.openMedia(
          c.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
            status: r,
            onClose: function () {
              return o("WAWebModalManager").ModalManager.closeMedia();
            },
            rowSection: n,
            rowIndex: t,
          }),
          { transition: "status-modal" },
        );
    }
    var m = new Set();
    function p(t) {
      var a = t.event,
        i = t.newsletterJid,
        l = t.rowIndex,
        u = t.rowSection,
        c = t.statusModelId;
      (a == null || a.stopPropagation == null || a.stopPropagation(),
        a == null || a.preventDefault == null || a.preventDefault());
      var p = c.toString();
      if (!m.has(p)) {
        m.add(p);
        var _ = o("WAWebStatusCollection").StatusCollection.get(c);
        (_ != null && (_.isLoading = !0),
          r("JSResourceForInteraction")("WAWebNewsletterStatusFetchAction")
            .__setRef("WAWebOpenStatusQuotedFlow")
            .load()
            .then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield (s || (s = n("Promise"))).all([
                        e.fetchNewsletterStatuses(i),
                        e.fetchMyStatusReactions(i).catch(function () {
                          return [];
                        }),
                      ]),
                      a = t[1];
                    yield e
                      .hydrateMyStatusReactions(a, i)
                      .catch(r("WAWebNoop"));
                    var m = o("WAWebStatusCollection").StatusCollection.get(c);
                    m != null &&
                      !m.isSyntheticFromMetadata &&
                      m.totalCount > 0 &&
                      d({ status: m, rowSection: u, rowIndex: l });
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] fetch/open viewer failed ",
                      "",
                    ])),
                  i,
                )
                .catching(r("getErrorSafe")(t))
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-fetch-open-failed");
            })
            .finally(function () {
              m.delete(p);
              var e = o("WAWebStatusCollection").StatusCollection.get(c);
              e != null && (e.isLoading = !1);
            }));
      }
    }
    l.fetchAndOpenNewsletterStatus = p;
  },
  98,
);
