__d(
  "WASmaxBizCtwaActionBannerSuggestionRPC",
  [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = p(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("BannerSuggestion", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "action");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "deep_link",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "local_link",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "local_android_link",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            deepLink: n.value,
            localLink: r.value,
            localAndroidLink: a.value,
          })
        : a;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "localised_heading");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "localisation_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = h(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            value: r.value,
            localisationMetadataLocalisationMetadataMixin: a.value,
          })
        : a;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "localised_body");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "localisation_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = h(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            value: r.value,
            localisationMetadataLocalisationMetadataMixin: a.value,
          })
        : a;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "localised_highlight");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "localisation_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = h(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            value: r.value,
            localisationMetadataLocalisationMetadataMixin: a.value,
          })
        : a;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "banner");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "config");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "content");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "heading");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "body");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "highlight");
      if (!l.success) return l;
      var m = o("WASmaxParseUtils").optionalChildWithTag(e, "action", s);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "localised_heading",
        u,
      );
      if (!p.success) return p;
      var g = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "localised_body",
        c,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "localised_highlight",
        d,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "expires_at",
        1,
        void 0,
      );
      if (!y.success) return y;
      var b = o("WASmaxParseUtils").attrStringEnum(n.value, "display", f);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").attrStringEnum(n.value, "revoked", _);
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").attrString(r.value, "locale");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").contentString(a.value);
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").contentString(i.value);
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").contentString(l.value);
      if (!E.success) return E;
      var k = C(e);
      return k.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                configExpiresAt: y.value,
                configDisplay: b.value,
                configRevoked: v.value,
                contentLocale: S.value,
                contentHeadingElementValue: R.value,
                contentBodyElementValue: L.value,
                contentHighlightElementValue: E.value,
              },
              k.value,
              {
                action: m.value,
                contentLocalisedHeading: p.value,
                contentLocalisedBody: g.value,
                contentLocalisedHighlight: h.value,
              },
            ),
          )
        : k;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ctwa_suggestion");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(n.value, "banner", m);
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "business",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(n.value, "target_entity_id");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "notification_log_id",
      );
      if (!s.success) return s;
      var u = b(e);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                ctwaSuggestionTargetEntityId: l.value,
                ctwaSuggestionNotificationLogId: s.value,
              },
              u.value,
              { ctwaSuggestionBanner: r.value },
            ),
          )
        : u;
    }
    var _ = { false: "false", true: "true" },
      f = { info: "info", warning: "warning" };
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "parameter");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, value: r.value })
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "localisation_metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "uid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "translation_project");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "parameter",
        0,
        20,
        g,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            uid: n.value,
            translationProject: r.value,
            parameter: a.value,
          })
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "native_action");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "platform");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "min_app_version");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "local_link");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "universal_link",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            platform: n.value,
            minAppVersion: r.value,
            localLink: a.value,
            universalLink: i.value,
          })
        : i;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "native_action",
        0,
        50,
        y,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ nativeAction: t.value })
        : t;
    }
    function b(e) {
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
    ((l.receiveBannerSuggestionRPC = e),
      (l.parseBannerSuggestionRequestCtwaSuggestionBannerAction = s),
      (l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHeading =
        u),
      (l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedBody =
        c),
      (l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHighlight =
        d),
      (l.parseBannerSuggestionRequestCtwaSuggestionBanner = m),
      (l.parseBannerSuggestionRequest = p),
      (l.ENUM_FALSE_TRUE = _),
      (l.ENUM_INFO_WARNING = f),
      (l.parseLocalisationMetadataParameter = g),
      (l.parseLocalisationMetadataMixin = h),
      (l.parseNativeActionsMixinNativeAction = y),
      (l.parseNativeActionsMixinMixin = C),
      (l.parseServerNotificationMixin = b));
  },
  98,
);
