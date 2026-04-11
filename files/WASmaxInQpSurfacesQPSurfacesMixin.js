__d(
  "WASmaxInQpSurfacesQPSurfacesMixin",
  ["WAResultOrError", "WASmaxInQpSurfacesEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "trigger");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success ? o("WAResultOrError").makeResult({ name: n.value }) : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "header");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "title");
      return n.success
        ? o("WAResultOrError").makeResult({ title: n.value })
        : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "light");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "dark");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "image");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "light", u);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "dark", c);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "description");
      return a.success
        ? o("WAResultOrError").makeResult({
            description: a.value,
            light: n.value,
            dark: r.value,
          })
        : a;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "primary_action");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "text");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "universal_link",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "deep_link",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            text: n.value,
            universalLink: r.value,
            deepLink: a.value,
          })
        : a;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "secondary_action");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "text");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "universal_link",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "deep_link",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            text: n.value,
            universalLink: r.value,
            deepLink: a.value,
          })
        : a;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "colors");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "light");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "dark");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "background",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "highlight",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "background",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "highlight",
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            lightBackground: a.value,
            lightHighlight: i.value,
            darkBackground: l.value,
            darkHighlight: s.value,
          })
        : s;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "attribute");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "key");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      return r.success
        ? o("WAResultOrError").makeResult({ key: n.value, value: r.value })
        : r;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "content_attributes");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "attribute",
        0,
        50,
        f,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ attribute: n.value })
        : n;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "filter_rules");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "instance_log_data");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "promotion_config");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrInt(e, "max_impressions");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrInt(e, "max_primary_clicks");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrInt(e, "max_secondary_clicks");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrInt(e, "max_dismisses");
      return i.success
        ? o("WAResultOrError").makeResult({
            maxImpressions: n.value,
            maxPrimaryClicks: r.value,
            maxSecondaryClicks: a.value,
            maxDismisses: i.value,
          })
        : i;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user_info");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrInt(e, "impression_count");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrInt(e, "primary_click_count");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrInt(e, "secondary_click_count");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrInt(e, "dismiss_click_count");
      return i.success
        ? o("WAResultOrError").makeResult({
            impressionCount: n.value,
            primaryClickCount: r.value,
            secondaryClickCount: a.value,
            dismissClickCount: i.value,
          })
        : i;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pacing");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "promotion_config",
        C,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "user_info", b);
      return r.success
        ? o("WAResultOrError").makeResult({
            promotionConfig: n.value,
            userInfo: r.value,
          })
        : r;
    }
    function S(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "promotion");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "title");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "text");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(t, "qp_config");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(i.value, "triggers");
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optionalChildWithTag(t, "header", s);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optionalChildWithTag(t, "image", d);
      if (!c.success) return c;
      var f = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "primary_action",
        m,
      );
      if (!f.success) return f;
      var C = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "secondary_action",
        p,
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChildWithTag(t, "colors", _);
      if (!b.success) return b;
      var S = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "content_attributes",
        g,
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optionalChildWithTag(
        i.value,
        "filter_rules",
        h,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optionalChildWithTag(
        i.value,
        "instance_log_data",
        y,
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optionalChildWithTag(i.value, "pacing", v);
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").attrString(t, "id");
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "instance_id",
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").contentString(r.value);
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").contentString(a.value);
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").attrString(i.value, "template_name");
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").attrInt(i.value, "start_time_seconds");
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").attrInt(i.value, "end_time_seconds");
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").attrInt(i.value, "ttl_seconds");
      if (!N.success) return N;
      var M = o("WASmaxParseUtils").attrStringEnum(
        i.value,
        "dismissable",
        o("WASmaxInQpSurfacesEnums").ENUM_FALSE_TRUE,
      );
      if (!M.success) return M;
      var w = o("WASmaxParseUtils").attrStringEnum(
        i.value,
        "force_pass",
        o("WASmaxInQpSurfacesEnums").ENUM_FALSE_TRUE,
      );
      if (!w.success) return w;
      var A = o("WASmaxParseUtils").attrInt(
        i.value,
        "surface_delay_time_seconds",
      );
      if (!A.success) return A;
      var F = o("WASmaxParseUtils").attrStringEnum(
        i.value,
        "deterministic",
        o("WASmaxInQpSurfacesEnums").ENUM_FALSE_TRUE,
      );
      if (!F.success) return F;
      var O = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        i.value,
        "experiment_key",
      );
      if (!O.success) return O;
      var B = o("WASmaxParseUtils").attrStringEnum(
        i.value,
        "exposure_holdout",
        o("WASmaxInQpSurfacesEnums").ENUM_FALSE_TRUE,
      );
      if (!B.success) return B;
      var W = o("WASmaxParseUtils").attrInt(i.value, "max_impressions");
      if (!W.success) return W;
      var q = o("WASmaxParseUtils").attrInt(i.value, "impression_cooldown");
      if (!q.success) return q;
      var U = o("WASmaxParseUtils").attrInt(i.value, "eligibility_duration_ms");
      if (!U.success) return U;
      var V = o("WASmaxParseUtils").attrInt(i.value, "priority");
      if (!V.success) return V;
      var H = o("WASmaxParseUtils").attrStringEnum(
        i.value,
        "log_eligibility_waterfall",
        o("WASmaxInQpSurfacesEnums").ENUM_FALSE_TRUE,
      );
      if (!H.success) return H;
      var G = o("WASmaxParseUtils").mapChildrenWithTag(
        l.value,
        "trigger",
        1,
        50,
        e,
      );
      return G.success
        ? o("WAResultOrError").makeResult({
            id: k.value,
            instanceId: I.value,
            titleElementValue: T.value,
            textElementValue: D.value,
            qpConfigTemplateName: x.value,
            qpConfigStartTimeSeconds: $.value,
            qpConfigEndTimeSeconds: P.value,
            qpConfigTtlSeconds: N.value,
            qpConfigDismissable: M.value,
            qpConfigForcePass: w.value,
            qpConfigSurfaceDelayTimeSeconds: A.value,
            qpConfigDeterministic: F.value,
            qpConfigExperimentKey: O.value,
            qpConfigExposureHoldout: B.value,
            qpConfigMaxImpressions: W.value,
            qpConfigImpressionCooldown: q.value,
            qpConfigEligibilityDurationMs: U.value,
            qpConfigPriority: V.value,
            qpConfigLogEligibilityWaterfall: H.value,
            header: u.value,
            image: c.value,
            primaryAction: f.value,
            secondaryAction: C.value,
            colors: b.value,
            contentAttributes: S.value,
            qpConfigFilterRules: R.value,
            qpConfigInstanceLogData: L.value,
            qpConfigPacing: E.value,
            qpConfigTriggersTrigger: G.value,
          })
        : G;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "surface");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "promotion",
        0,
        100,
        S,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, promotion: r.value })
        : r;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "surfaces");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(e, "surface", 0, 100, R);
      return n.success
        ? o("WAResultOrError").makeResult({ surface: n.value })
        : n;
    }
    ((l.parseQPSurfacesSurfacePromotionQpConfigTriggersTrigger = e),
      (l.parseQPSurfacesSurfacePromotionHeader = s),
      (l.parseQPSurfacesSurfacePromotionImageLight = u),
      (l.parseQPSurfacesSurfacePromotionImageDark = c),
      (l.parseQPSurfacesSurfacePromotionImage = d),
      (l.parseQPSurfacesSurfacePromotionPrimaryAction = m),
      (l.parseQPSurfacesSurfacePromotionSecondaryAction = p),
      (l.parseQPSurfacesSurfacePromotionColors = _),
      (l.parseQPSurfacesSurfacePromotionContentAttributesAttribute = f),
      (l.parseQPSurfacesSurfacePromotionContentAttributes = g),
      (l.parseQPSurfacesSurfacePromotionQpConfigFilterRules = h),
      (l.parseQPSurfacesSurfacePromotionQpConfigInstanceLogData = y),
      (l.parseQPSurfacesSurfacePromotionQpConfigPacingPromotionConfig = C),
      (l.parseQPSurfacesSurfacePromotionQpConfigPacingUserInfo = b),
      (l.parseQPSurfacesSurfacePromotionQpConfigPacing = v),
      (l.parseQPSurfacesSurfacePromotion = S),
      (l.parseQPSurfacesSurface = R),
      (l.parseQPSurfacesMixin = L));
  },
  98,
);
