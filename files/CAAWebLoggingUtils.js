__d(
  "CAAWebLoggingUtils",
  [
    "CAAWebAccessFlowVersionSingleton__UI_BASED",
    "CAAWebEventRequestIdSingleton",
    "CAAWebWaterfallIdSingleton",
    "CaaAccountRecoveryClientEventsFbFalcoEvent",
    "CaaAccountRecoveryClientEventsIgFalcoEvent",
    "CaaAccountRecoveryClientEventsRlFalcoEvent",
    "CaaAccountRecoveryClientEventsThFalcoEvent",
    "CaaAcquisitionClientEventsRlFalcoEvent",
    "CaaAcquisitionClientFbEventFalcoEvent",
    "CaaAcquisitionClientIgEventFalcoEvent",
    "CaaAymhClientEventsFbFalcoEvent",
    "CaaAymhClientEventsIgFalcoEvent",
    "CaaAymhClientEventsRlFalcoEvent",
    "CaaLoginClientEventsFbMsgrFalcoEvent",
    "CaaLoginClientEventsIgFalcoEvent",
    "CaaLoginClientEventsRlFalcoEvent",
    "PolarisSiteData",
    "PolarisUA",
    "gkx",
    "objectEntries",
    "qex",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["is_feta_ntm", "ntp_source_platform", "state"],
      s = ["is_feta_ntm", "ntp_source_platform", "state"],
      u = [
        "age_range",
        "exception_category",
        "state",
        "youth_regulation_enabled",
      ],
      c,
      d,
      m = (c = r("qex")._("501")) != null ? c : !1,
      p = (d = r("qex")._("2004")) != null ? d : !1;
    function _(t, n) {
      var o,
        a = t.account_recovery_params,
        i = t.acquisition_client_params,
        l = t.aymh_params,
        s = t.login_params,
        u = n.access_flow_version != null ? n.access_flow_version : null,
        c = babelHelpers.extends({}, n, {
          access_flow_version: u,
          account_type_shown: n.account_type_shown
            ? n.account_type_shown
            : void 0,
          event: n.event,
          event_category: n.event_category,
          event_flow: n.event_flow,
          event_step: n.event_step,
          extra_client_data: $((o = n.extra_client_data) != null ? o : {}),
          ig_did_override: r("PolarisSiteData").device_id,
          ig_mid_override: r("PolarisSiteData").machine_id,
        });
      if (a != null)
        r("CaaAccountRecoveryClientEventsIgFalcoEvent").logImmediately(
          function () {
            return { account_recovery_params: a, core: c };
          },
        );
      else if (s != null) {
        var d = m
          ? r("CaaLoginClientEventsIgFalcoEvent").log
          : r("CaaLoginClientEventsIgFalcoEvent").logImmediately;
        d(function () {
          return { core: c, login_params: s };
        });
      } else if (i != null) {
        var _ = i.is_feta_ntm,
          f = i.ntp_source_platform,
          g = i.state,
          h = babelHelpers.objectWithoutPropertiesLoose(i, e),
          y = p
            ? r("CaaAcquisitionClientIgEventFalcoEvent").log
            : r("CaaAcquisitionClientIgEventFalcoEvent").logImmediately;
        y(function () {
          return {
            acquisition_client_params: babelHelpers.extends({}, h, {
              state: g == null ? null : g,
            }),
            core: c,
          };
        });
      } else
        l != null &&
          r("CaaAymhClientEventsIgFalcoEvent").logImmediately(function () {
            return { aymh_params: l, core: c };
          });
    }
    function f(e, t) {
      var n = e.account_recovery_params;
      if (n != null) {
        var o,
          a = t.access_flow_version != null ? t.access_flow_version : null,
          i = babelHelpers.extends({}, t, {
            access_flow_version: a,
            account_type_shown: t.account_type_shown
              ? t.account_type_shown
              : void 0,
            event: t.event,
            event_category: t.event_category,
            event_flow: t.event_flow,
            event_step: t.event_step,
            extra_client_data: $((o = t.extra_client_data) != null ? o : {}),
          });
        r("CaaAccountRecoveryClientEventsThFalcoEvent").logImmediately(
          function () {
            return { account_recovery_params: n, core: i };
          },
        );
      } else _(e, t);
    }
    function g(e, t) {
      var n,
        o = e.account_recovery_params,
        a = e.acquisition_client_params,
        i = e.aymh_params,
        l = e.login_params,
        u = t.access_flow_version != null ? t.access_flow_version : null,
        c = babelHelpers.extends({}, t, {
          access_flow_version: u,
          account_type_shown: t.account_type_shown
            ? t.account_type_shown
            : void 0,
          event: t.event,
          event_category: t.event_category,
          event_flow: t.event_flow,
          event_step: t.event_step,
          extra_client_data: $((n = t.extra_client_data) != null ? n : {}),
        });
      if (o != null)
        r("CaaAccountRecoveryClientEventsFbFalcoEvent").logImmediately(
          function () {
            return { account_recovery_params: o, core: c };
          },
        );
      else if (l != null)
        r("CaaLoginClientEventsFbMsgrFalcoEvent").logImmediately(function () {
          return { core: c, login_params: l };
        });
      else if (a != null) {
        var d = a.is_feta_ntm,
          m = a.ntp_source_platform,
          p = a.state,
          _ = babelHelpers.objectWithoutPropertiesLoose(a, s);
        r("CaaAcquisitionClientFbEventFalcoEvent").logImmediately(function () {
          return {
            acquisition_client_params: babelHelpers.extends({}, _, {
              state: p == null ? null : p,
            }),
            core: c,
          };
        });
      } else
        i != null &&
          r("CaaAymhClientEventsFbFalcoEvent").logImmediately(function () {
            return { aymh_params: i, core: c };
          });
    }
    function h(e, t) {
      var n,
        o = e.account_recovery_params,
        a = e.acquisition_client_params,
        i = e.aymh_params,
        l = e.login_params,
        s = t.access_flow_version != null ? t.access_flow_version : null,
        c = babelHelpers.extends(
          {},
          (n = t.extra_client_data) != null ? n : {},
          { is_web_flow_override: "1" },
        ),
        d = babelHelpers.extends({}, t, {
          access_flow_version: s,
          account_type_shown: t.account_type_shown
            ? t.account_type_shown
            : void 0,
          event: t.event,
          event_category: t.event_category,
          event_flow: t.event_flow,
          event_step: t.event_step,
          extra_client_data: $(c),
        });
      if (o != null)
        r("CaaAccountRecoveryClientEventsRlFalcoEvent").logCritical(
          function () {
            return { account_recovery_params: o, core: d };
          },
        );
      else if (l != null)
        r("CaaLoginClientEventsRlFalcoEvent").logCritical(function () {
          return { core: d, login_params: l };
        });
      else if (a != null) {
        var m = a.age_range,
          p = a.exception_category,
          _ = a.state,
          f = a.youth_regulation_enabled,
          g = babelHelpers.objectWithoutPropertiesLoose(a, u);
        r("CaaAcquisitionClientEventsRlFalcoEvent").logCritical(function () {
          var e;
          return {
            acquisition_client_params: babelHelpers.extends({}, g, {
              state: P(
                _,
                (e = t.extra_client_data) == null ? void 0 : e.error_code,
              ),
            }),
            core: d,
          };
        });
      } else
        i != null &&
          r("CaaAymhClientEventsRlFalcoEvent").logCritical(function () {
            return { aymh_params: i, core: d };
          });
    }
    function y(e, t) {
      var n = C(e.core_logging_data, t);
      t === 0
        ? g(e, n)
        : t === 1
          ? _(e, n)
          : t === 5
            ? f(e, n)
            : t === 4 && h(e, n);
    }
    function C(e, t) {
      var n = r("CAAWebWaterfallIdSingleton").getWaterfallID();
      return (
        n === void 0 &&
          ((n = r("uuidv4")()),
          r("CAAWebWaterfallIdSingleton").setWaterfallID(n)),
        (e.waterfall_id = n),
        (e.event_request_id = r(
          "CAAWebEventRequestIdSingleton",
        ).getEventRequestID()),
        e.access_flow_version == null &&
          (t === 4
            ? (e.access_flow_version = "pre_mt_behavior")
            : (e.access_flow_version = r(
                "CAAWebAccessFlowVersionSingleton__UI_BASED",
              ).getAccessFlowVersion())),
        e
      );
    }
    function b(e) {
      if (e === 0) {
        var t, n;
        return (
          ((t = r("qex")._("5570")) != null ? t : !1) ||
          ((n = r("qex")._("491")) != null ? n : !1)
        );
      }
      if (e === 1) {
        var o, a;
        return (
          ((o = r("qex")._("5571")) != null ? o : !1) ||
          ((a = r("qex")._("520")) != null ? a : !1)
        );
      }
      if (e === 4) {
        var i;
        return (i = r("qex")._("5578")) != null ? i : !1;
      }
      return !1;
    }
    function v() {
      var e,
        t,
        n = (e = r("qex")._("5284")) != null ? e : !1,
        o = (t = r("qex")._("1757")) != null ? t : !1;
      return n || o;
    }
    function S(e) {
      var t = {
          event: "redirection_to_checkpoint",
          event_category: "checkpoint",
          event_flow: "checkpoint",
          event_step: "checkpoint_redirect",
          extra_client_data: { login_source: e },
        },
        n = { core_logging_data: t, login_params: {} };
      y(n, 1);
    }
    function R(e, t) {
      if (o("PolarisUA").isMobile()) {
        var n = r("gkx")("6708") || r("gkx")("6181");
        if (n) {
          var a = "pre_mt_behavior",
            i = {
              access_flow_version: a,
              event: e,
              event_category: "spi",
              event_flow: "logged_out_login_spi",
              event_step: "home_page",
            },
            l = { core_logging_data: i, login_params: {} };
          y(l, 1);
        }
      }
    }
    function L(e, t, n) {
      if (
        (n === void 0 && (n = "pre_mt_behavior"), !o("PolarisUA").isMobile())
      ) {
        var r = {
            access_flow_version: n,
            event: e,
            event_category: "spi",
            event_flow: "logged_out_login_spi",
            event_step: "home_page",
          },
          a = { core_logging_data: r, login_params: {} };
        y(a, t);
      }
    }
    function E(e, t) {
      var n = { core_logging_data: e, login_params: {} };
      y(n, t);
    }
    function k(e, t) {
      e === 1 &&
        r("CaaLoginClientEventsIgFalcoEvent").log(function () {
          return {
            core: {
              event: "debug_info",
              event_category: "impression",
              event_flow: "login",
              event_step: "landing",
              extra_client_data: $({ message: t }),
              ig_did_override: r("PolarisSiteData").device_id,
              ig_mid_override: r("PolarisSiteData").machine_id,
            },
            login_params: {},
          };
        });
    }
    function I(e, t) {
      t === void 0 && (t = null);
      var n = {
        event: e,
        event_category: "ig_mweb_client_sync_to_server",
        event_flow: "aymh",
        event_step: "ig_mweb_client_sync_to_server",
        extra_client_data: t,
      };
      T(n, 1);
    }
    function T(e, t) {
      var n = { aymh_params: {}, core_logging_data: e };
      y(n, t);
    }
    function D(e, t, n) {
      var r = { account_recovery_params: t, core_logging_data: e };
      y(r, n);
    }
    function x(e, t, n) {
      var r = { acquisition_client_params: t, core_logging_data: e };
      y(r, n);
    }
    function $(e) {
      return Object.fromEntries(
        r("objectEntries")(e != null ? e : {}).map(function (e) {
          var t = e[0],
            n = e[1];
          return [t, n];
        }),
      );
    }
    function P(e, t) {
      return e == null ? null : e === "error_code" ? t : e;
    }
    ((l.getIsFeta = b),
      (l.getIsFetaNtp = v),
      (l.logmWebCheckpointedEvent = S),
      (l.logMWebLoginSPIEvent = R),
      (l.logWebLoginSPIEvent = L),
      (l.logLoginEvent = E),
      (l.logDebugEvent = k),
      (l.logIGmWebAymhClientSyncEvent = I),
      (l.logAymhEvent = T),
      (l.logArEvent = D),
      (l.logRegEvent = x));
  },
  98,
);
