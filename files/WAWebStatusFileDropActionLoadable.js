__d(
  "WAWebStatusFileDropActionLoadable",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebShowStatusFileDropError.react",
    "WAWebStatusGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebOpenStatusMediaFromFiles")
          .__setRef("WAWebStatusFileDropActionLoadable")
          .load();
      }, "StatusMediaFromFiles"),
      u = null;
    function c(t, o, a) {
      if (t.length === 0 || o.aborted || !a.isCurrent())
        return (e || (e = n("Promise"))).resolve();
      var i = {
          files: [].concat(t),
          signal: o,
          isCurrent: a.isCurrent,
          onAbort: r("WAWebNoop"),
        },
        l = u;
      if (l != null && l.scopeKey === a.key) return (m(l, i), l.completion);
      l != null && (l.cancel(), l.complete());
      var s = d(a.key);
      return ((u = s), m(s, i), _(s), s.completion);
    }
    function d(t) {
      var o = r("WAWebNoop"),
        a = new (e || (e = n("Promise")))(function (e) {
          o = e;
        }),
        i = {
          scopeKey: t,
          batches: [],
          completion: a,
          complete: r("WAWebNoop"),
          cancel: r("WAWebNoop"),
        };
      return (
        (i.complete = function () {
          u === i &&
            ((u = null),
            i.batches.forEach(function (e) {
              return e.signal.removeEventListener("abort", e.onAbort);
            }),
            o(void 0));
        }),
        i
      );
    }
    function m(e, t) {
      ((t.onAbort = function () {
        u === e && p(e).length === 0 && (e.cancel(), e.complete());
      }),
        e.batches.push(t),
        t.signal.addEventListener("abort", t.onAbort, { once: !0 }));
    }
    function p(e) {
      return u !== e
        ? []
        : e.batches
            .filter(function (e) {
              return !e.signal.aborted && e.isCurrent();
            })
            .flatMap(function (e) {
              return e.files;
            });
    }
    function _(e) {
      s()
        .then(function (t) {
          var n = t.openStatusMediaFromFiles;
          if (!f(e)) {
            e.complete();
            return;
          }
          e.cancel = n(
            function () {
              return p(e);
            },
            { onReady: e.complete, onDispose: e.complete },
          );
        })
        .catch(function (t) {
          (o("WAWebShowStatusFileDropError.react").showStatusFileDropError(
            t,
            f(e),
          ),
            e.complete());
        });
    }
    function f(e) {
      if (
        p(e).length === 0 ||
        !o("WAWebStatusGatingUtils").isStatusFileDropEnabled()
      )
        return !1;
      var t = !1,
        n = !1;
      return (
        o("WAWebModalManager").ModalManager.existsMedia(function (e) {
          t = e;
        }),
        o("WAWebModalManager").ModalManager.exists(function (e) {
          n = e;
        }),
        !t && !n
      );
    }
    l.openDroppedStatusFiles = c;
  },
  98,
);
