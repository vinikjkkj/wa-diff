__d(
  "WASmaxMessageDeliverPeerRPC",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
    "WASmaxInMessageDeliverBizAcceptTsMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverDeviceIdentityMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverIndividualRegularMixin",
    "WASmaxInMessageDeliverOfflineMixin",
    "WASmaxInMessageDeliverPaddingMixin",
    "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
    "WASmaxInMessageDeliverQualityControlMixin",
    "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverRegistrationIDMixin",
    "WASmaxInMessageDeliverRetryMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxInMessageDeliverTraceContextMixin",
    "WASmaxInMessageDeliverVerifiedNameMixin",
    "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
    "WASmaxInMessageDeliverWaReportingMixin",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("Peer", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makePeerResponseNegative: function () {
          return d(e);
        },
        makePeerResponseSuccess: function () {
          return m(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "push_priority",
        o("WASmaxInMessageDeliverEnums").ENUM_HIGH_HIGHFORCE_LOW,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!i.success) return i;
      var l = o("WASmaxInMessageDeliverOfflineMixin").parseOfflineMixin(e),
        s = o("WASmaxInMessageDeliverVerifiedNameMixin").parseVerifiedNameMixin(
          e,
        ),
        d = o(
          "WASmaxInMessageDeliverContentTypeTextMixin",
        ).parseContentTypeTextMixin(e);
      if (!d.success) return d;
      var m = o(
          "WASmaxInMessageDeliverRegistrationIDMixin",
        ).parseRegistrationIDMixin(e),
        _ = o(
          "WASmaxInMessageDeliverDeviceIdentityMixin",
        ).parseDeviceIdentityMixin(e),
        f = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        g = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        h = u(e),
        y = o("WASmaxInMessageDeliverWaReportingMixin").parseWaReportingMixin(
          e,
        ),
        C = o(
          "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
        ).parseCountryCodeMetaTagMixin(e),
        b = o(
          "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
        ).parseRecipientCountryCodeMetaTagMixin(e),
        v = o(
          "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
        ).parsePeerRecipientUsernameMixin(e),
        S = o("WASmaxInMessageDeliverTraceContextMixin").parseTraceContextMixin(
          e,
        ),
        R = o("WASmaxInMessageDeliverPaddingMixin").parsePaddingMixin(e),
        L = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        E = o("WASmaxInMessageDeliverBizAcceptTsMixin").parseBizAcceptTsMixin(
          e,
        ),
        k = o(
          "WASmaxInMessageDeliverQualityControlMixin",
        ).parseQualityControlMixin(e),
        I = c(e);
      if (!I.success) return I;
      var T = p(e);
      return T.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                id: n.value,
                category: r.value,
                pushPriority: a.value,
                t: i.value,
                offlineMixin: l.success ? l.value : null,
                verifiedNameMixin: s.success ? s.value : null,
              },
              d.value,
              {
                registrationIDMixin: m.success ? m.value : null,
                deviceIdentityMixin: _.success ? _.value : null,
                appdataMetaAttributeMixin: f.success ? f.value : null,
                viewOnceMetaAttributeMixin: g.success ? g.value : null,
                privacySensitiveAttributeMixin: h.success ? h.value : null,
                waReportingMixin: y.success ? y.value : null,
                countryCodeMetaTagMixin: C.success ? C.value : null,
                recipientCountryCodeMetaTagMixin: b.success ? b.value : null,
                peerRecipientUsernameMixin: v.success ? v.value : null,
                traceContextMixin: S.success ? S.value : null,
                paddingMixin: R.success ? R.value : null,
                stsMixin: L.success ? L.value : null,
                bizAcceptTsMixin: E.success ? E.value : null,
                qualityControlMixin: k.success ? k.value : null,
                retryOrIndividualRegularMixinGroup: I.value,
                fromCoExV2PeerOrUserMixinGroup: T.value,
              },
            ),
          )
        : T;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "privacy_sensitive",
        "1",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ privacySensitive: n.value })
        : n;
    }
    function c(e) {
      var t = o("WASmaxInMessageDeliverRetryMixin").parseRetryMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverIndividualRegularMixin",
      ).parseIndividualRegularMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IndividualRegular",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Retry", "IndividualRegular"],
            [t, n],
          );
    }
    function d(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        o("WASmaxInMessageDeliverEnums").USERJID_DEVICEJID,
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
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
      var a = g(
        o("WASmaxJsx").smax("ack", {
          to: o("WAWap").JID(t.value),
          class: "message",
          id: o("WAWap").STANZA_ID(n.value),
          type: o("WAWap").CUSTOM_STRING(r.value),
        }),
      );
      return a;
    }
    function m(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        o("WASmaxInMessageDeliverEnums").USERJID_DEVICEJID,
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
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
        to: o("WAWap").JID(t.value),
        class: "message",
        id: o("WAWap").STANZA_ID(n.value),
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function p(e) {
      var t = y(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FromCoExV2Peer",
          value: t.value,
        });
      var n = _(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "FromUser", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["FromCoExV2Peer", "FromUser"],
            [t, n],
          );
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "from");
      return n.success ? o("WAResultOrError").makeResult({ from: n.value }) : n;
    }
    function f() {
      var e = o("WASmaxJsx").smax("smax$any", { error: "498" });
      return e;
    }
    function g(e) {
      var t = f();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "CoexStateSync",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "meta", h);
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(e, "from");
      return a.success
        ? o("WAResultOrError").makeResult({ from: a.value, meta: r.value })
        : a;
    }
    ((l.receivePeerRPC = e),
      (l.parsePeerRequest = s),
      (l.parsePrivacySensitiveAttributeMixin = u),
      (l.parseRetryOrIndividualRegularMixinGroup = c),
      (l.makePeerResponseNegative = d),
      (l.makePeerResponseSuccess = m),
      (l.parseFromCoExV2PeerOrUserMixinGroup = p),
      (l.parseFromUserMixin = _),
      (l.mergeInvalidPeerMessageErrorMixin = g),
      (l.parseFromCoExV2PeerMeta = h),
      (l.parseFromCoExV2PeerMixin = y));
  },
  98,
);
