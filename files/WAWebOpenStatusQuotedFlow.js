__d(
  "WAWebOpenStatusQuotedFlow",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebModalManager",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = e.rowIndex,
        n = e.rowSection,
        r = e.status;
      r.isSyntheticFromMetadata !== !0 &&
        o("WAWebModalManager").ModalManager.openMedia(
          u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
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
    var d = new Set();
    function m(t) {
      var n = t.event,
        a = t.newsletterJid,
        i = t.rowIndex,
        l = t.rowSection,
        s = t.statusModelId;
      (n == null || n.stopPropagation == null || n.stopPropagation(),
        n == null || n.preventDefault == null || n.preventDefault());
      var u = s.toString();
      if (!d.has(u)) {
        d.add(u);
        var m = o("WAWebStatusCollection").StatusCollection.get(s);
        (m != null && (m.isLoading = !0),
          r("JSResourceForInteraction")("WAWebNewsletterStatusFetchAction")
            .__setRef("WAWebOpenStatusQuotedFlow")
            .load()
            .then(function (e) {
              return e.fetchNewsletterStatuses(a);
            })
            .then(function () {
              var e = o("WAWebStatusCollection").StatusCollection.get(s);
              e != null &&
                !e.isSyntheticFromMetadata &&
                e.totalCount > 0 &&
                c({ status: e, rowSection: l, rowIndex: i });
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] fetch/open viewer failed ",
                      "",
                    ])),
                  a,
                )
                .catching(r("getErrorSafe")(t))
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-fetch-open-failed");
            })
            .finally(function () {
              d.delete(u);
              var e = o("WAWebStatusCollection").StatusCollection.get(s);
              e != null && (e.isLoading = !1);
            }));
      }
    }
    l.fetchAndOpenNewsletterStatus = m;
  },
  98,
);
