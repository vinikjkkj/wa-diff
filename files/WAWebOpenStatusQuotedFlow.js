__d(
  "WAWebOpenStatusQuotedFlow",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
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
    var d = new Map();
    function m(t) {
      var n = t.newsletterJid,
        a = t.statusModelId,
        i = a.toString();
      if (d.has(i)) return null;
      if (
        !o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
      ) {
        var l = Promise.resolve().finally(function () {
          d.delete(i);
        });
        return (d.set(i, l), l);
      }
      var s = o("WAWebStatusCollection").StatusCollection.get(a);
      s != null && (s.isLoading = !0);
      var u = r("JSResourceForInteraction")("WAWebNewsletterStatusFetchAction")
        .__setRef("WAWebOpenStatusQuotedFlow")
        .load()
        .then(async function (e) {
          await e.fetchNewsletterStatusesAndMyReactions(n);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status] fetch statuses failed ",
                  "",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(t))
            .tags("newsletter", "status")
            .sendLogs("newsletter-status-ensure-load-failed");
        })
        .finally(function () {
          d.delete(i);
          var e = o("WAWebStatusCollection").StatusCollection.get(a);
          e != null && (e.isLoading = !1);
        });
      return (d.set(i, u), u);
    }
    function p(e) {
      var t,
        n = e.event,
        a = e.newsletterJid,
        i = e.rowIndex,
        l = e.rowSection,
        s = e.statusModelId;
      (n == null || n.stopPropagation == null || n.stopPropagation(),
        n == null || n.preventDefault == null || n.preventDefault(),
        (t = m({ newsletterJid: a, statusModelId: s })) == null ||
          t
            .then(function () {
              var e = o("WAWebStatusCollection").StatusCollection.get(s);
              e != null && _(e) && c({ status: e, rowSection: l, rowIndex: i });
            })
            .catch(r("WAWebNoop")));
    }
    function _(e) {
      return !e.isSyntheticFromMetadata && e.totalCount > 0;
    }
    ((l.ensureNewsletterStatusLoaded = m),
      (l.fetchAndOpenNewsletterStatus = p),
      (l.isStatusOpenable = _));
  },
  98,
);
