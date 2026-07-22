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
    var m = new Map();
    function p(t) {
      var a = t.newsletterJid,
        i = t.statusModelId,
        l = i.toString();
      if (m.has(l)) return null;
      var u = o("WAWebStatusCollection").StatusCollection.get(i);
      u != null && (u.isLoading = !0);
      var c = r("JSResourceForInteraction")("WAWebNewsletterStatusFetchAction")
        .__setRef("WAWebOpenStatusQuotedFlow")
        .load()
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield (s || (s = n("Promise"))).all([
                    e.fetchNewsletterStatuses(a),
                    e.fetchMyStatusReactions(a).catch(function () {
                      return null;
                    }),
                  ]),
                  o = t[1];
                o != null &&
                  (yield e.hydrateMyStatusReactions(o, a).catch(r("WAWebNoop")),
                  yield e
                    .reconcileMyStatusReactions(o, a)
                    .catch(r("WAWebNoop")));
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
                  "[newsletter][status] fetch statuses failed ",
                  "",
                ])),
              a,
            )
            .catching(r("getErrorSafe")(t))
            .tags("newsletter", "status")
            .sendLogs("newsletter-status-ensure-load-failed");
        })
        .finally(function () {
          m.delete(l);
          var e = o("WAWebStatusCollection").StatusCollection.get(i);
          e != null && (e.isLoading = !1);
        });
      return (m.set(l, c), c);
    }
    function _(e) {
      var t,
        n = e.event,
        a = e.newsletterJid,
        i = e.rowIndex,
        l = e.rowSection,
        s = e.statusModelId;
      (n == null || n.stopPropagation == null || n.stopPropagation(),
        n == null || n.preventDefault == null || n.preventDefault(),
        (t = p({ newsletterJid: a, statusModelId: s })) == null ||
          t
            .then(function () {
              var e = o("WAWebStatusCollection").StatusCollection.get(s);
              e != null &&
                !e.isSyntheticFromMetadata &&
                e.totalCount > 0 &&
                d({ status: e, rowSection: l, rowIndex: i });
            })
            .catch(r("WAWebNoop")));
    }
    ((l.ensureNewsletterStatusLoaded = p),
      (l.fetchAndOpenNewsletterStatus = _));
  },
  98,
);
