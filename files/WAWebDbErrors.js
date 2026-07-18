__d(
  "WAWebDbErrors",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "MasterDatabaseEncryptionKey." +
                  t +
                  " was accessed before init",
              ) || this),
            (n.name = "DbEncKeyNotLoaded"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((e = o("WACustomError")).CustomError),
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "MasterDatabaseMessageEncryptionKey." +
                  t +
                  " was accessed before init",
              ) || this),
            (n.name = "DbMsgEncKeyNotLoaded"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      c = (function (e) {
        function t(n) {
          var r;
          return (
            (r = e.call(this, n != null ? n : t.message) || this),
            (r.name = "DbOnLogoutAbort"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError);
    c.message = "DB operation was dropped due to logout activity";
    var d = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, n != null ? n : t.message) || this),
          (r.name = "DbClosedOnTakeover"),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.CustomError);
    d.message = "DB operation was dropped due to session takeover (DB closed)";
    var m = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, n != null ? n : t.message) || this),
          (r.name = "DbNotFoundOnTakeover"),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.CustomError);
    m.message =
      "DB operation was dropped due to session takeover (DB not found)";
    var p = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, n != null ? n : t.message) || this),
          (r.name = "DBInvalidFtsHMACKey"),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.CustomError);
    ((p.message =
      "MasterDatabaseEncryptionKey.fts_hmac_keys is in an invalid state"),
      (l.DbEncKeyNotLoaded = s),
      (l.DbMsgEncKeyNotLoaded = u),
      (l.DbOnLogoutAbort = c),
      (l.DbClosedOnTakeover = d),
      (l.DbNotFoundOnTakeover = m),
      (l.DBInvalidFtsHMACKey = p));
  },
  98,
);
