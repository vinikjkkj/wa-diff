__d(
  "AdsHelpTrayUILoggerStoreUtils",
  [
    "ALToolTab",
    "BusinessUnifiedNavigationLoggingConfig",
    "PaidSupportFalcoEvent",
    "URI",
    "WebStorage",
    "getBusinessCurrentToolType",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null;
    r("requireWeak")("AdsAccountStore", function (e) {
      u = e.getSelectedAccountID();
    });
    var c = "ht_persistent_session_id";
    function d(t, n, a, i) {
      var l,
        d = (e || (e = r("WebStorage"))).getSessionStorage(),
        m =
          window.sessionStorage &&
          (l = window.sessionStorage.getItem(c)) != null
            ? l
            : "";
      m === "" &&
        ((e || (e = r("WebStorage"))).setItemGuarded(
          d,
          c,
          r("BusinessUnifiedNavigationLoggingConfig").sessionID,
        ),
        (m = r("BusinessUnifiedNavigationLoggingConfig").sessionID));
      var p = new (s || (s = r("URI")))(window.location.href).getQueryData(),
        _ = u != null ? u : p.act,
        f = o("ALToolTab").getCurrentToolTab();
      r("PaidSupportFalcoEvent").log(function () {
        return {
          ad_account_id: _,
          event: t,
          event_data: n,
          referrer_tab: f.tab,
          referrer_tool: f.tool,
          session_id: r("BusinessUnifiedNavigationLoggingConfig").sessionID,
          session_id_persistent: m,
          surface: n == null ? void 0 : n.surface,
          tool: i != null ? i : r("getBusinessCurrentToolType")() || a,
        };
      });
    }
    l.logHelpTrayEvents = d;
  },
  98,
);
