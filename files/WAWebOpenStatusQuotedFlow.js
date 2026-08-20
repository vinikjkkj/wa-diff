__d(
  "WAWebOpenStatusQuotedFlow",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebNullFunc",
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
      if (
        !o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
      ) {
        var u = (s || (s = n("Promise"))).resolve().finally(function () {
          m.delete(l);
        });
        return (m.set(l, u), u);
      }
      var c = o("WAWebStatusCollection").StatusCollection.get(i);
      c != null && (c.isLoading = !0);
      var d = r("JSResourceForInteraction")("WAWebNewsletterStatusFetchAction")
        .__setRef("WAWebOpenStatusQuotedFlow")
        .load()
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield (s || (s = n("Promise"))).all([
                    e.fetchNewsletterStatuses(a),
                    e
                      .fetchMyStatusReactions(a)
                      .catch(o("WAWebNullFunc").returnNull),
                  ]),
                  i = t[1];
                i != null &&
                  (yield e.hydrateMyStatusReactions(i, a).catch(r("WAWebNoop")),
                  yield e
                    .reconcileMyStatusReactions(i, a)
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
      return (m.set(l, d), d);
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
              e != null && f(e) && d({ status: e, rowSection: l, rowIndex: i });
            })
            .catch(r("WAWebNoop")));
    }
    function f(e) {
      return !e.isSyntheticFromMetadata && e.totalCount > 0;
    }
    ((l.ensureNewsletterStatusLoaded = p),
      (l.fetchAndOpenNewsletterStatus = _),
      (l.isStatusOpenable = f));
  },
  98,
);
