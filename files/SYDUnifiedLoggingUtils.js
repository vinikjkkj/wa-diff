__d(
  "SYDUnifiedLoggingUtils",
  [
    "AdsInterfacesLogger",
    "AdsInterfacesRouter",
    "AdvertiserProfileEventsFalcoEvent",
    "FBLogger",
    "SYDActionTypesEnum",
    "SYDWidgetPlacementProvider",
    "advertiserProfileScopeIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("AdsInterfacesLogger").log({
        eventCategory: "start_your_day",
        eventName: "account.syd.has_actionable_recommendations",
        data: babelHelpers.extends({}, h()),
      });
    }
    function s(e) {}
    function u() {
      (r("AdsInterfacesLogger").log({
        eventCategory: "start_your_day",
        eventName: "account.syd.page_impression",
        data: babelHelpers.extends({}, h()),
      }),
        r("AdvertiserProfileEventsFalcoEvent").log(function () {
          return {
            event: "visit_flex_space",
            flex_space: "ACCOUNT_OVERVIEW",
            scope_ids: o(
              "advertiserProfileScopeIDsSelector",
            ).advertiserProfileScopeIDsSelector(),
          };
        }));
    }
    function c(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventCategory: "start_your_day",
        eventName: "account.syd.component_impression",
        data: babelHelpers.extends(
          {},
          n,
          h(),
          ((o = {}),
          (o.component_name = e),
          (o.tooltip_placement = y(e)),
          (o.nav_source = t == null ? void 0 : t.nav_source),
          (o.message = g(t)),
          o),
        ),
      });
    }
    function d(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventCategory: "start_your_day",
        eventName: "account.syd.impression",
        data: babelHelpers.extends(
          {},
          n,
          h(),
          ((o = {}),
          (o.component_name = e),
          (o.tooltip_placement = y(e)),
          (o.message_id = t),
          o),
        ),
      });
    }
    function m(e, t, n, o) {
      var a;
      (r("FBLogger")("syd")
        .catching(t)
        .warn("[SYD] Error thrown from '%s': %s'", e, t.message),
        r("AdsInterfacesLogger").log({
          eventCategory: "start_your_day",
          eventName: "account.syd.error",
          data: babelHelpers.extends(
            {},
            o,
            h(),
            ((a = {}),
            (a.component_name = e),
            (a.message_id = n),
            (a.message = t.message),
            a),
          ),
        }));
    }
    function p(e, t, n, o, a, i) {
      var l, s;
      r("AdsInterfacesLogger").log({
        eventCategory: "start_your_day",
        eventName: "account.syd.click",
        data: babelHelpers.extends(
          {},
          a,
          h(),
          ((s = {}),
          (s.component_name = e),
          (s.tooltip_placement = y(e)),
          (s.custom_event_type = t),
          (s.nav_source =
            (l = r("AdsInterfacesRouter").getOrNull()) == null ||
            (l = l.getTypedParams()) == null
              ? void 0
              : l.nav_source),
          (s.action_type =
            i != null
              ? i
              : n
                ? r("SYDActionTypesEnum").VALUABLE
                : r("SYDActionTypesEnum").NEUTRAL),
          (s.message_id = o),
          s),
        ),
      });
    }
    function _(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventCategory: "start_your_day",
        eventName: "account.syd.component_mount",
        data: babelHelpers.extends(
          {},
          h(),
          ((t = {}), (t.component_name = e), t),
        ),
      });
    }
    function f(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventCategory: "start_your_day",
        eventName: "account.syd.count",
        data: babelHelpers.extends(
          {},
          o,
          h(),
          ((a = {}),
          (a.component_name = e),
          (a.message = t),
          (a.source = n),
          (a.object_ids = n),
          a),
        ),
      });
    }
    function g(e) {
      return JSON.stringify({
        focus_area: e == null ? void 0 : e.focus_area,
        notif_type: e == null ? void 0 : e.notif_type,
      });
    }
    function h() {
      var e;
      return (
        (e = {}),
        (e.at_section = "ACCOUNT"),
        (e.at_tool = "MANAGE_ADS"),
        e
      );
    }
    function y(e) {
      var t =
        e === "PageHeader"
          ? { column: "Header", order: -1 }
          : r("SYDWidgetPlacementProvider")()[e];
      return t != null ? t.column + "|" + t.order.toString() : "-1";
    }
    ((l.logHasActionableRecommendation = e),
      (l.logNotificationImpression = s),
      (l.logPageImpression = u),
      (l.logComponentImpression = c),
      (l.logSubComponentImpression = d),
      (l.logError = m),
      (l.logClick = p),
      (l.logMount = _),
      (l.logCount = f));
  },
  98,
);
