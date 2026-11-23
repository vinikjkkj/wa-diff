__d(
  "WAWebSwOfflineResumeState",
  [],
  function (t, n, r, o, a, i) {
    var e = null,
      l = !1;
    function s() {
      return l || e != null ? null : ((e = new AbortController()), e.signal);
    }
    function u() {
      e = null;
    }
    function c() {
      var t;
      (t = e) == null || t.abort();
    }
    function d() {
      ((l = !0), c());
    }
    ((i.tryStartOfflineResume = s),
      (i.resetOfflineResumeState = u),
      (i.cancelOfflineResume = c),
      (i.blockOfflineResume = d));
  },
  66,
);
