__d(
  "WAWebNuxAction",
  [
    "Promise",
    "WAWebNoop",
    "WAWebNuxSync",
    "WAWebNuxSyncKey",
    "WAWebUserPrefsNuxPreferences",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return { views: 0 };
    }
    function u(t, a) {
      a === void 0 && (a = !1);
      var i = o("WAWebUserPrefsNuxPreferences").getNUX(t),
        l = i != null ? i : s(),
        u = o("WAWebUserPrefsNuxPreferences").getNuxMaxViews(t),
        c = a ? u : l.views + 1;
      if ((o("WAWebUserPrefsNuxPreferences").setNUX(t, { views: c }), c >= u)) {
        var d = o("WAWebNuxSyncKey").getNuxSyncKey(t);
        if (d != null)
          return r("WAWebNuxSync").acknowledgeNux(d).then(r("WAWebNoop"));
      }
      return (e || (e = n("Promise"))).resolve();
    }
    function c(e) {
      return u(e, !0);
    }
    function d(t) {
      o("WAWebUserPrefsNuxPreferences").removeNUX(t);
      var a = o("WAWebNuxSyncKey").getNuxSyncKey(t);
      return a != null
        ? r("WAWebNuxSync").unAcknowledgeNux(a).then(r("WAWebNoop"))
        : (e || (e = n("Promise"))).resolve();
    }
    ((l.viewNux = u), (l.dismissNux = c), (l.resetNux = d));
  },
  98,
);
