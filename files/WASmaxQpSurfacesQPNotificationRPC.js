__d(
  "WASmaxQpSurfacesQPNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("QPNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeQPNotificationResponseAck: function () {
          return T(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "surfaces");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "psa",
      );
      if (!a.success) return a;
      var i = k(n.value);
      if (!i.success) return i;
      var l = I(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                surfacesQPSurfacesMixin: i.value,
              },
              l.value,
            ),
          )
        : l;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "trigger");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success ? o("WAResultOrError").makeResult({ name: n.value }) : n;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "header");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "title");
      return n.success
        ? o("WAResultOrError").makeResult({ title: n.value })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "light");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "dark");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "image");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "light", d);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "dark", m);
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
    function _(e) {
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
    function f(e) {
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
    function g(e) {
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
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "attribute");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "key");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      return r.success
        ? o("WAResultOrError").makeResult({ key: n.value, value: r.value })
        : r;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "content_attributes");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "attribute",
        0,
        50,
        h,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ attribute: n.value })
        : n;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "filter_rules");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "instance_log_data");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function v(e) {
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
    function S(e) {
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
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pacing");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "promotion_config",
        v,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "user_info", S);
      return r.success
        ? o("WAResultOrError").makeResult({
            promotionConfig: n.value,
            userInfo: r.value,
          })
        : r;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "promotion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "title");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "text");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "qp_config");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "triggers");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "header", c);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(e, "image", p);
      if (!s.success) return s;
      var d = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "primary_action",
        _,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "secondary_action",
        f,
      );
      if (!m.success) return m;
      var h = o("WASmaxParseUtils").optionalChildWithTag(e, "colors", g);
      if (!h.success) return h;
      var v = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "content_attributes",
        y,
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "filter_rules",
        C,
      );
      if (!S.success) return S;
      var L = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "instance_log_data",
        b,
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optionalChildWithTag(a.value, "pacing", R);
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").attrString(e, "id");
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "instance_id",
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").contentString(n.value);
      if (!T.success) return T;
      var $ = o("WASmaxParseUtils").contentString(r.value);
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").attrString(a.value, "template_name");
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").attrInt(a.value, "start_time_seconds");
      if (!N.success) return N;
      var M = o("WASmaxParseUtils").attrInt(a.value, "end_time_seconds");
      if (!M.success) return M;
      var w = o("WASmaxParseUtils").attrInt(a.value, "ttl_seconds");
      if (!w.success) return w;
      var A = o("WASmaxParseUtils").attrStringEnum(a.value, "dismissable", x);
      if (!A.success) return A;
      var F = o("WASmaxParseUtils").attrStringEnum(a.value, "force_pass", x);
      if (!F.success) return F;
      var O = o("WASmaxParseUtils").attrInt(
        a.value,
        "surface_delay_time_seconds",
      );
      if (!O.success) return O;
      var B = o("WASmaxParseUtils").attrStringEnum(a.value, "deterministic", x);
      if (!B.success) return B;
      var W = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "experiment_key",
      );
      if (!W.success) return W;
      var q = o("WASmaxParseUtils").attrStringEnum(
        a.value,
        "exposure_holdout",
        x,
      );
      if (!q.success) return q;
      var U = o("WASmaxParseUtils").attrInt(a.value, "max_impressions");
      if (!U.success) return U;
      var V = o("WASmaxParseUtils").attrInt(a.value, "impression_cooldown");
      if (!V.success) return V;
      var H = o("WASmaxParseUtils").attrInt(a.value, "eligibility_duration_ms");
      if (!H.success) return H;
      var G = o("WASmaxParseUtils").attrInt(a.value, "priority");
      if (!G.success) return G;
      var z = o("WASmaxParseUtils").attrStringEnum(
        a.value,
        "log_eligibility_waterfall",
        x,
      );
      if (!z.success) return z;
      var j = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        a.value,
        "exposure_strategy",
        D,
      );
      if (!j.success) return j;
      var K = o("WASmaxParseUtils").mapChildrenWithTag(
        i.value,
        "trigger",
        1,
        50,
        u,
      );
      return K.success
        ? o("WAResultOrError").makeResult({
            id: k.value,
            instanceId: I.value,
            titleElementValue: T.value,
            textElementValue: $.value,
            qpConfigTemplateName: P.value,
            qpConfigStartTimeSeconds: N.value,
            qpConfigEndTimeSeconds: M.value,
            qpConfigTtlSeconds: w.value,
            qpConfigDismissable: A.value,
            qpConfigForcePass: F.value,
            qpConfigSurfaceDelayTimeSeconds: O.value,
            qpConfigDeterministic: B.value,
            qpConfigExperimentKey: W.value,
            qpConfigExposureHoldout: q.value,
            qpConfigMaxImpressions: U.value,
            qpConfigImpressionCooldown: V.value,
            qpConfigEligibilityDurationMs: H.value,
            qpConfigPriority: G.value,
            qpConfigLogEligibilityWaterfall: z.value,
            qpConfigExposureStrategy: j.value,
            header: l.value,
            image: s.value,
            primaryAction: d.value,
            secondaryAction: m.value,
            colors: h.value,
            contentAttributes: v.value,
            qpConfigFilterRules: S.value,
            qpConfigInstanceLogData: L.value,
            qpConfigPacing: E.value,
            qpConfigTriggersTrigger: K.value,
          })
        : K;
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "surface");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "promotion",
        0,
        100,
        L,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, promotion: r.value })
        : r;
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "surfaces");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(e, "surface", 0, 100, E);
      return n.success
        ? o("WAResultOrError").makeResult({ surface: n.value })
        : n;
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "offline",
        0,
        1024,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            id: r.value,
            offline: a.value,
          })
        : a;
    }
    function T(e) {
      var t = P(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    var D = { client: "client", server: "server" },
      x = { false: "false", true: "true" };
    function $(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrUserJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").USER_JID(n.value),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.receiveQPNotificationRPC = e),
      (l.parseQPNotificationRequest = s),
      (l.parseQPSurfacesSurfacePromotionQpConfigTriggersTrigger = u),
      (l.parseQPSurfacesSurfacePromotionHeader = c),
      (l.parseQPSurfacesSurfacePromotionImageLight = d),
      (l.parseQPSurfacesSurfacePromotionImageDark = m),
      (l.parseQPSurfacesSurfacePromotionImage = p),
      (l.parseQPSurfacesSurfacePromotionPrimaryAction = _),
      (l.parseQPSurfacesSurfacePromotionSecondaryAction = f),
      (l.parseQPSurfacesSurfacePromotionColors = g),
      (l.parseQPSurfacesSurfacePromotionContentAttributesAttribute = h),
      (l.parseQPSurfacesSurfacePromotionContentAttributes = y),
      (l.parseQPSurfacesSurfacePromotionQpConfigFilterRules = C),
      (l.parseQPSurfacesSurfacePromotionQpConfigInstanceLogData = b),
      (l.parseQPSurfacesSurfacePromotionQpConfigPacingPromotionConfig = v),
      (l.parseQPSurfacesSurfacePromotionQpConfigPacingUserInfo = S),
      (l.parseQPSurfacesSurfacePromotionQpConfigPacing = R),
      (l.parseQPSurfacesSurfacePromotion = L),
      (l.parseQPSurfacesSurface = E),
      (l.parseQPSurfacesMixin = k),
      (l.parseServerNotificationMixin = I),
      (l.makeQPNotificationResponseAck = T),
      (l.ENUM_CLIENT_SERVER = D),
      (l.ENUM_FALSE_TRUE = x),
      (l.mergeNotificationClientAckMixin = P));
  },
  98,
);
