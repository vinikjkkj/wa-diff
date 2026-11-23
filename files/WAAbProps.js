__d(
  "WAAbProps",
  ["WAAbPropsHelpers", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      if (e) return e;
      throw r("err")("abProps::" + t + " called before startAbProps");
    }
    function u(t, n) {
      e == null && (e = { config: n, db: t });
    }
    function c() {
      return s("getHash").db.getHash();
    }
    function d() {
      return s("getRefreshSecs")
        .db.getRefreshSecs()
        .then(function (e) {
          return o("WAAbPropsHelpers").maybeUpdateRefresh(e);
        });
    }
    function m() {
      return s("getConfig").config;
    }
    function p() {
      return s("getAbProps").db.getAbProps();
    }
    function _(e) {
      return s("getAbProps").db.setAbProps(e);
    }
    ((l.startAbProps = u),
      (l.getHash = c),
      (l.getRefreshSecs = d),
      (l.getConfig = m),
      (l.getAbProps = p),
      (l.setAbProps = _));
  },
  98,
);
