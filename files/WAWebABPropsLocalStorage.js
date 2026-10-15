__d(
  "WAWebABPropsLocalStorage",
  ["WAWebLocalStorage", "WAWebUserPrefsKeys", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = 600,
      s = 604800,
      u = 86400;
    function c(t) {
      var n,
        a,
        i = t.abKey,
        l = t.currentTime,
        u = t.hash,
        c = t.refresh,
        m = null;
      c != null && ((m = c), m < e ? (m = e) : m > s && (m = s));
      var p = d() || {},
        _ = {
          abKey: i != null ? i : p.abKey,
          hash: u != null ? u : p.hash,
          refresh:
            (n = (a = m) == null ? void 0 : a.toString()) != null
              ? n
              : p.refresh,
          lastSyncTime: l,
        };
      r("nullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.ABPROPS,
        JSON.stringify(_),
      );
    }
    function d() {
      var e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
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
      var e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS.ABPROPS_REFRESH_ID,
      );
      return (e == null && h(0), e == null ? 0 : parseInt(e, 10));
    }
    function h(e) {
      r("nullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.ABPROPS_REFRESH_ID,
        String(e),
      );
    }
    function y() {
      var e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").UserPrefs.AbpropsWebRefreshId,
      );
      return (e == null && C(0), e == null ? 0 : parseInt(e, 10));
    }
    function C(e) {
      r("nullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").UserPrefs.AbpropsWebRefreshId,
        String(e),
      );
    }
    function b() {
      var e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_REFRESH_ID,
      );
      return e == null ? 0 : parseInt(e, 10);
    }
    function v(e) {
      r("nullthrows")(r("WAWebLocalStorage")).setItem(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_REFRESH_ID,
        String(e),
      );
    }
    function S() {
      var e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_EMERGENCY_PUSH_TIMESTAMP,
      );
      return e == null ? null : parseInt(e, 10);
    }
    function R(e) {
      r("nullthrows")(r("WAWebLocalStorage")).setItem(
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
