__d(
  "AHGLogUtils",
  ["AdsAgpExperimentLoggingFalcoEvent", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "IntelligentComponent";
    function s(e, t) {
      r("AdsInterfacesLogger").log({
        eventCategory: "user_action",
        eventName: e,
        data: t,
      });
    }
    function u(e) {}
    function c(e, t, n, r) {}
    function d(t, n, r, o, a, i, l) {
      var u;
      s(
        "ahg_message_click",
        ((u = {}),
        (u.component_name = t),
        (u.message_format = l),
        (u.message_id = n),
        (u.ahg_placement = o),
        (u.subobject_category = a),
        (u.subobject_type = i),
        (u.ahg_fbjoiner_key = r),
        (u.ahg_log_source = e),
        u),
      );
    }
    function m(e, t, n, r, o) {}
    function p(t) {
      var n;
      s(
        t.event,
        ((n = {}),
        (n.component_name = t.componentName),
        (n.ahg_ad_object_id = t.adObjectID),
        (n.ahg_experiments = t.experiments),
        (n.ahg_fbjoiner_key = t.fbjoinerKey),
        (n.ahg_log_source = e),
        (n.ahg_message_group = t.messageGroup),
        (n.ahg_message_type_id = t.messageTypeID),
        (n.ahg_message_type = t.messageType),
        (n.ahg_placement = t.placement),
        (n.ahg_score = t.score),
        (n.card_category = t.contentCardCategory),
        (n.message_format = t.format),
        (n.message_id = t.messageID),
        (n.subobject_category = t.subobjectCategory),
        n),
      );
    }
    function _(e, t, n, r) {}
    function f(e, t, n, r) {}
    function g(e, t) {}
    function h(e, t, n) {}
    function y(e, t) {}
    function C(t, n) {
      t.forEach(function (t) {
        var r;
        s(
          "ahg_message_eligible",
          ((r = {}),
          (r.message_id = t.getID()),
          (r.ahg_score = t.getScore()),
          (r.recommend_message = n),
          (r.ahg_log_source = e),
          r),
        );
      });
    }
    function b(e, t, n, o) {
      r("AdsAgpExperimentLoggingFalcoEvent").log(function () {
        return {
          ad_account_id: parseInt(t.ad_account_id, 10),
          ad_object_id: e.getAdObjectID(),
          aymt_message_name: e.getID(),
          bp_message_id: e.getMessageTypeID(),
          experiments: JSON.stringify(e.getExperiments()),
          impression_type: n,
          impression_reason: o,
        };
      });
    }
    ((l.log = s),
      (l.logAYMTTipsLoaded = u),
      (l.logLinkClick = c),
      (l.logMessageClick = d),
      (l.logXOut = m),
      (l.logFloatingTipEvent = p),
      (l.logMountContainer = _),
      (l.logCloseMessage = f),
      (l.logCompleteTour = g),
      (l.logTourStep = h),
      (l.logResetCap = y),
      (l.logEligibleMessages = C),
      (l.logExperimentResult = b));
  },
  98,
);
