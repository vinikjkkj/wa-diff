__d(
  "WAWebABPropsLocalStorage",
  ["WANullthrows", "WAWebLocalStorage", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    var e = 600,
      s = 604800,
      u = 86400;
    function c(t, n, a, i) {
      var l,
        u,
        c = null;
      a != null && ((c = a), c < e ? (c = e) : c > s && (c = s));
      var m = d() || {},
        p = {
          abKey: t != null ? t : m.abKey,
          hash: n != null ? n : m.hash,
          refresh:
            (l = (u = c) == null ? void 0 : u.toString()) != null
              ? l
              : m.refresh,
          lastSyncTime: i,
        };
      r("WANullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.ABPROPS,
        JSON.stringify(p),
      );
    }
    function d() {
      var e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS.ABPROPS,
      );
      return e == null ? null : JSON.parse(e);
    }
    function m() {
      return d() != null;
    }
    function p() {
      var e = d();
      return e == null ? void 0 : e.abKey;
    }
    function _() {
      var e = d();
      return e == null ? void 0 : e.hash;
    }
    function f() {
      var e,
        t = d();
      return parseInt((e = t == null ? void 0 : t.refresh) != null ? e : u, 10);
    }
    function g() {
      var e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS.ABPROPS_REFRESH_ID,
      );
      return (e == null && h(0), e == null ? 0 : parseInt(e, 10));
    }
    function h(e) {
      r("WANullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.ABPROPS_REFRESH_ID,
        String(e),
      );
    }
    function y() {
      var e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").UserPrefs.AbpropsWebRefreshId,
      );
      return (e == null && C(0), e == null ? 0 : parseInt(e, 10));
    }
    function C(e) {
      r("WANullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").UserPrefs.AbpropsWebRefreshId,
        String(e),
      );
    }
    function b() {
      var e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_REFRESH_ID,
      );
      return e == null ? 0 : parseInt(e, 10);
    }
    function v(e) {
      r("WANullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_REFRESH_ID,
        String(e),
      );
    }
    function S() {
      var e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_EMERGENCY_PUSH_TIMESTAMP,
      );
      return e == null ? null : parseInt(e, 10);
    }
    function R(e) {
      r("WANullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_EMERGENCY_PUSH_TIMESTAMP,
        String(e),
      );
    }
    ((l.updateAttributesLocalStorage = c),
      (l.isABPropsAfterFirstSync = m),
      (l.getABKey = p),
      (l.getHash = _),
      (l.getRefresh = f),
      (l.getRefreshId = g),
      (l.setRefreshId = h),
      (l.getWebRefreshId = y),
      (l.setWebRefreshId = C),
      (l.getGroupAbPropsRefreshId = b),
      (l.setGroupAbPropsRefreshId = v),
      (l.getGroupAbPropsEmergencyPushTimestamp = S),
      (l.setGroupAbPropsEmergencyPushTimestamp = R));
  },
  98,
);
