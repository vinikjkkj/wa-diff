__d(
  "WAWebWindowsMediaFileExistsCache",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = 500,
      s = new Map();
    function u(e, t, n) {
      var r;
      return m()
        ? (r = s.get(f(t, n))) != null
          ? r
          : p(e, t, n)
        : e.isCachedMediaFileExist(t, n);
    }
    function c(e, t, n) {
      return m() ? p(e, t, n) : e.isCachedMediaFileExist(t, n);
    }
    function d(e, t) {
      s.delete(f(e, t));
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_anr_cache_media_file_exists_enabled",
      );
    }
    function p(t, n, r) {
      var o = f(n, r),
        a = t.isCachedMediaFileExist(n, r).then(
          function (e) {
            return (e || _(o, a), e);
          },
          function (e) {
            throw (_(o, a), e);
          },
        );
      if ((s.delete(o), s.set(o, a), s.size > e)) {
        var i = s.keys().next().value;
        i != null && s.delete(i);
      }
      return a;
    }
    function _(e, t) {
      s.get(e) === t && s.delete(e);
    }
    function f(e, t) {
      return e + "/" + t;
    }
    ((l.checkCachedMediaFileExists = u),
      (l.recheckCachedMediaFileExists = c),
      (l.forgetCachedMediaFile = d));
  },
  98,
);
