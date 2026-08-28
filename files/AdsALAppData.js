__d(
  "AdsALAppData",
  [
    "ALToolTab",
    "AdsManagerAutoLoggingAppConfig",
    "PEAppContext",
    "SiteData",
    "hyperionAutoLogging",
    "hyperionUtil",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n,
        r,
        a,
        i,
        l,
        u,
        c,
        d = o("PEAppContext").getEventDataForLogging(),
        m =
          (n = o("AdsManagerAutoLoggingAppConfig").ad_account_id) != null
            ? n
            : d.ad_account_id,
        p =
          (r = o("AdsManagerAutoLoggingAppConfig").business_id) != null
            ? r
            : d.business_id,
        _ = o("ALToolTab").getCurrentToolTab(t);
      return {
        ad_account_id: m != null && m !== "" ? m : "0",
        app_session_id:
          (a =
            (i = o("AdsManagerAutoLoggingAppConfig").session_id) != null
              ? i
              : d.session_id) != null
            ? a
            : "",
        browser_session_id: (e || (e = o("hyperionUtil"))).ClientSessionID,
        flow_session_id:
          (l = (s || (s = o("hyperionAutoLogging"))).getSessionFlowID()) == null
            ? void 0
            : l.id,
        business_id: p != null && p !== "" ? p : null,
        page_uri: (u = _.page_uri) != null ? u : "",
        tab: _.tab,
        tool: _.tool,
        backing_user_type:
          (c = o("AdsManagerAutoLoggingAppConfig").backing_user_type) != null
            ? c
            : "UNKNOWN",
      };
    }
    function c() {
      return {
        client_revision: r("SiteData").client_revision,
        server_revision: r("SiteData").server_revision,
      };
    }
    ((l.getAppData = u), (l.getRevisionSiteData = c));
  },
  98,
);
