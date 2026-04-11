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
      s = ["event"],
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
    function m(e) {
      var t = e.event,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      (t == null || t.stopPropagation == null || t.stopPropagation(),
        t == null || t.preventDefault == null || t.preventDefault(),
        d(n));
    }
    var p = new Set();
    function _(t) {
      var n = t.event,
        a = t.newsletterJid,
        i = t.rowIndex,
        l = t.rowSection,
        s = t.statusModelId;
      (n == null || n.stopPropagation == null || n.stopPropagation(),
        n == null || n.preventDefault == null || n.preventDefault());
      var u = s.toString();
      if (!p.has(u)) {
        p.add(u);
        var c = o("WAWebStatusCollection").StatusCollection.get(s);
        (c != null && (c.isLoading = !0),
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
                d({ status: e, rowSection: l, rowIndex: i });
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
              p.delete(u);
              var e = o("WAWebStatusCollection").StatusCollection.get(s);
              e != null && (e.isLoading = !1);
            }));
      }
    }
    ((l.openStatusQuotedFlow = d),
      (l.openStatusQuotedFlowFromEvent = m),
      (l.fetchAndOpenNewsletterStatus = _));
  },
  98,
);
