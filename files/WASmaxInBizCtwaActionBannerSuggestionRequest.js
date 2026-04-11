__d(
  "WASmaxInBizCtwaActionBannerSuggestionRequest",
  [
    "WAResultOrError",
    "WASmaxInBizCtwaActionEnums",
    "WASmaxInBizCtwaActionLocalisationMetadataMixin",
    "WASmaxInBizCtwaActionNativeActionsMixinMixin",
    "WASmaxInBizCtwaActionServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "localised_heading");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "localisation_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizCtwaActionLocalisationMetadataMixin",
      ).parseLocalisationMetadataMixin(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            value: r.value,
            localisationMetadataLocalisationMetadataMixin: a.value,
          })
        : a;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "localised_body");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "localisation_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizCtwaActionLocalisationMetadataMixin",
      ).parseLocalisationMetadataMixin(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            value: r.value,
            localisationMetadataLocalisationMetadataMixin: a.value,
          })
        : a;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "localised_highlight");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "localisation_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizCtwaActionLocalisationMetadataMixin",
      ).parseLocalisationMetadataMixin(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            value: r.value,
            localisationMetadataLocalisationMetadataMixin: a.value,
          })
        : a;
    }
    function d(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "banner");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "config");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "content");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "heading");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "body");
      if (!l.success) return l;
      var d = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "highlight");
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalChildWithTag(t, "action", e);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "localised_heading",
        s,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "localised_body",
        u,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "localised_highlight",
        c,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrIntRange(
        r.value,
        "expires_at",
        1,
        void 0,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "display",
        o("WASmaxInBizCtwaActionEnums").ENUM_INFO_WARNING,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "revoked",
        o("WASmaxInBizCtwaActionEnums").ENUM_FALSE_TRUE,
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").attrString(a.value, "locale");
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").contentString(i.value);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").contentString(l.value);
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").contentString(d.value);
      if (!S.success) return S;
      var R = o(
        "WASmaxInBizCtwaActionNativeActionsMixinMixin",
      ).parseNativeActionsMixinMixin(t);
      return R.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                configExpiresAt: g.value,
                configDisplay: h.value,
                configRevoked: y.value,
                contentLocale: C.value,
                contentHeadingElementValue: b.value,
                contentBodyElementValue: v.value,
                contentHighlightElementValue: S.value,
              },
              R.value,
              {
                action: m.value,
                contentLocalisedHeading: p.value,
                contentLocalisedBody: _.value,
                contentLocalisedHighlight: f.value,
              },
            ),
          )
        : R;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ctwa_suggestion");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(n.value, "banner", d);
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "business",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(n.value, "target_entity_id");
      if (!s.success) return s;
      var u = o(
        "WASmaxInBizCtwaActionServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                to: i.value,
                type: l.value,
                ctwaSuggestionTargetEntityId: s.value,
              },
              u.value,
              { ctwaSuggestionBanner: r.value },
            ),
          )
        : u;
    }
    ((l.parseBannerSuggestionRequestCtwaSuggestionBannerAction = e),
      (l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHeading =
        s),
      (l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedBody =
        u),
      (l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHighlight =
        c),
      (l.parseBannerSuggestionRequestCtwaSuggestionBanner = d),
      (l.parseBannerSuggestionRequest = m));
  },
  98,
);
