__d(
  "AdsManagerQPLUserFlowLoggerHelpers",
  [
    "AdsManagerInteractionQuickLogModule",
    "AdsManagerReportingInteractionQuickLogModule",
    "AdsPerfInteractionUtil",
    "AdsReportingInteractionQuickLogModule",
    "AdsWebdriverConfig.experimental",
    "FBLogger",
    "MainPageUrl",
    "PEAppContext",
    "QPLEvent",
    "QPLUserFlow",
    "QuickLogActionType",
    "err",
    "guid",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u() {
      return s;
    }
    function c() {
      return o("MainPageUrl").mainPageUrl.searchParams.get("showlog") != null;
    }
    function d(e) {
      var t = [].concat(
          Object.entries(r("AdsManagerInteractionQuickLogModule")),
          Object.entries(r("AdsReportingInteractionQuickLogModule")),
          Object.entries(r("AdsManagerReportingInteractionQuickLogModule")),
        ),
        n = t.find(function (t) {
          var n = t[0],
            r = t[1];
          return r === e;
        });
      return (n == null ? void 0 : n[0]) || "UNKNOWN";
    }
    function m(e) {
      return (
        Object.keys(r("QuickLogActionType")).find(function (t) {
          return r("QuickLogActionType")[t] === e;
        }) || "UNKNOWN"
      );
    }
    function p(e, t, n) {
      var a = o("PEAppContext").getEventDataForLogging(),
        i = r("ifRequired")("hyperionUtil", function (e) {
          return e.ClientSessionID;
        });
      r("QPLUserFlow").addAnnotations(
        e,
        {
          string: {
            ad_account_id: a.ad_account_id,
            at_section: a.at_section,
            at_tool: a.at_tool,
            backing_user_type: a.backing_user_type,
            draft_id: a.draft_id,
            flow_instance_id: n,
            session_id: a.session_id,
            test_id: r("AdsWebdriverConfig.experimental").test_id,
            browser_session_id: i,
          },
        },
        { instanceKey: t },
      );
    }
    function _(t, n) {
      var a = (e || (e = o("QPLEvent"))).getMarkerId(t),
        i = o("PEAppContext").getEventDataForLogging().session_id,
        l = a + "_" + i.slice(-2) + r("guid")();
      return (
        c() &&
          r("FBLogger")("ads").info(
            "[Reliability QPL User Flow] Generated instance ID %s for %s (flowID %s) and instanceKey %s",
            l,
            d(a),
            a,
            n,
          ),
        l
      );
    }
    function f(t, n, a) {
      var i,
        l,
        u = (e || (e = o("QPLEvent"))).getMarkerId(t),
        c = (i = s.get(u)) == null ? void 0 : i.get(n);
      (c != null &&
        r("FBLogger")("ads").warn(
          "Detected pre-existing stale flow instance ID! flowID %s, instanceKey %s, existing instance ID %s, new instance ID %s. Overwriting flow instance %s.",
          u,
          n,
          c.instanceId,
          a,
          c.instanceId,
        ),
        s.has(u) || s.set(u, new Map()),
        (l = s.get(u)) == null || l.set(n, { instanceId: a, qplEvent: t }));
    }
    function g(t, n) {
      var r, a;
      ((r = s.get((e || (e = o("QPLEvent"))).getMarkerId(t))) == null ||
        r.delete(n),
        ((a = s.get((e || (e = o("QPLEvent"))).getMarkerId(t))) == null
          ? void 0
          : a.size) === 0 &&
          s.delete((e || (e = o("QPLEvent"))).getMarkerId(t)));
    }
    function h(e) {
      var t = e.eventData,
        n = e.marker,
        a = e.qplEvent;
      if (t != null) return (t == null ? void 0 : t.marker_type) === 2;
      if (a != null)
        return (
          (n == null ? void 0 : n.type) === 2 ||
          o("AdsPerfInteractionUtil").isPerfQPL(a)
        );
      throw r("err")("Should never reach here but we must appease Flow.");
    }
    ((l.getActiveFlowInstanceIDs = u),
      (l.isDebugEnabled = c),
      (l.getQuickLogModuleKey = d),
      (l.getQuickLogActionName = m),
      (l.addBaseAnnotations = p),
      (l.generateInstanceID = _),
      (l.trackInstance = f),
      (l.untrackInstance = g),
      (l.shouldAnnotateAndTrack = h));
  },
  98,
);
