__d(
  "WASmaxInMessageDeliverBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAutomatedMixin",
    "WASmaxInMessageDeliverBizMixin",
    "WASmaxInMessageDeliverCollectionContentTypeMixin",
    "WASmaxInMessageDeliverContentTypeMixin",
    "WASmaxInMessageDeliverDHashMixin",
    "WASmaxInMessageDeliverDeviceIdentityMixin",
    "WASmaxInMessageDeliverFolderMixin",
    "WASmaxInMessageDeliverFrankingMixin",
    "WASmaxInMessageDeliverInternalTestMixin",
    "WASmaxInMessageDeliverLIDSessionDeprecationMixin",
    "WASmaxInMessageDeliverMessageAssociationTypeMixin",
    "WASmaxInMessageDeliverMetaHideDecryptionPlaceholderMixin",
    "WASmaxInMessageDeliverMulticastMixin",
    "WASmaxInMessageDeliverOfflineMixin",
    "WASmaxInMessageDeliverPaddingMixin",
    "WASmaxInMessageDeliverPreFilledNumberMixin",
    "WASmaxInMessageDeliverPreFilledTextMixin",
    "WASmaxInMessageDeliverPushNameMixin",
    "WASmaxInMessageDeliverRegistrationIDMixin",
    "WASmaxInMessageDeliverTraceContextMixin",
    "WASmaxInMessageDeliverTriggerBlockMixin",
    "WASmaxInMessageDeliverTriggerMessageCSATMixin",
    "WASmaxInMessageDeliverVerifiedNameMixin",
    "WASmaxInMessageDeliverWaReportingMixin",
    "WASmaxInMessageDeliverWebDriverConfigMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverTriggerBlockMixin",
        ).parseTriggerBlockMixin(e),
        r = o(
          "WASmaxInMessageDeliverTriggerMessageCSATMixin",
        ).parseTriggerMessageCSATMixin(e),
        a = o("WASmaxInMessageDeliverOfflineMixin").parseOfflineMixin(e),
        i = o("WASmaxInMessageDeliverPushNameMixin").parsePushNameMixin(e),
        l = o(
          "WASmaxInMessageDeliverDeviceIdentityMixin",
        ).parseDeviceIdentityMixin(e),
        s = o("WASmaxInMessageDeliverVerifiedNameMixin").parseVerifiedNameMixin(
          e,
        ),
        u = o("WASmaxInMessageDeliverBizMixin").parseBizMixin(e),
        c = o("WASmaxInMessageDeliverMulticastMixin").parseMulticastMixin(e),
        d = o(
          "WASmaxInMessageDeliverPreFilledTextMixin",
        ).parsePreFilledTextMixin(e),
        m = o(
          "WASmaxInMessageDeliverPreFilledNumberMixin",
        ).parsePreFilledNumberMixin(e),
        p = o("WASmaxInMessageDeliverAutomatedMixin").parseAutomatedMixin(e),
        _ = o("WASmaxInMessageDeliverDHashMixin").parseDHashMixin(e),
        f = o(
          "WASmaxInMessageDeliverRegistrationIDMixin",
        ).parseRegistrationIDMixin(e),
        g = o("WASmaxInMessageDeliverFolderMixin").parseFolderMixin(e),
        h = o("WASmaxInMessageDeliverFrankingMixin").parseFrankingMixin(e),
        y = o("WASmaxInMessageDeliverWaReportingMixin").parseWaReportingMixin(
          e,
        ),
        C = o("WASmaxInMessageDeliverInternalTestMixin").parseInternalTestMixin(
          e,
        ),
        b = o(
          "WASmaxInMessageDeliverMetaHideDecryptionPlaceholderMixin",
        ).parseMetaHideDecryptionPlaceholderMixin(e),
        v = o("WASmaxInMessageDeliverTraceContextMixin").parseTraceContextMixin(
          e,
        ),
        S = o("WASmaxInMessageDeliverPaddingMixin").parsePaddingMixin(e),
        R = o(
          "WASmaxInMessageDeliverLIDSessionDeprecationMixin",
        ).parseLIDSessionDeprecationMixin(e),
        L = o(
          "WASmaxInMessageDeliverWebDriverConfigMixin",
        ).parseWebDriverConfigMixin(e),
        E = o(
          "WASmaxInMessageDeliverMessageAssociationTypeMixin",
        ).parseMessageAssociationTypeMixin(e),
        k = o("WASmaxInMessageDeliverContentTypeMixin").parseContentTypeMixin(
          e,
        ),
        I = o(
          "WASmaxInMessageDeliverCollectionContentTypeMixin",
        ).parseCollectionContentTypeMixin(e);
      return o("WAResultOrError").makeResult({
        triggerBlockMixin: n.success ? n.value : null,
        triggerMessageCSATMixin: r.success ? r.value : null,
        offlineMixin: a.success ? a.value : null,
        pushNameMixin: i.success ? i.value : null,
        deviceIdentityMixin: l.success ? l.value : null,
        verifiedNameMixin: s.success ? s.value : null,
        bizMixin: u.success ? u.value : null,
        hasMulticastMixin: c.success,
        hasPreFilledTextMixin: d.success,
        hasPreFilledNumberMixin: m.success,
        hasAutomatedMixin: p.success,
        dHashMixin: _.success ? _.value : null,
        registrationIDMixin: f.success ? f.value : null,
        folderMixin: g.success ? g.value : null,
        frankingMixin: h.success ? h.value : null,
        waReportingMixin: y.success ? y.value : null,
        internalTestMixin: C.success ? C.value : null,
        metaHideDecryptionPlaceholderMixin: b.success ? b.value : null,
        traceContextMixin: v.success ? v.value : null,
        paddingMixin: S.success ? S.value : null,
        lIDSessionDeprecationMixin: R.success ? R.value : null,
        webDriverConfigMixin: L.success ? L.value : null,
        messageAssociationTypeMixin: E.success ? E.value : null,
        contentTypeMixin: k.success ? k.value : null,
        collectionContentTypeMixin: I.success ? I.value : null,
      });
    }
    l.parseBaseMixin = e;
  },
  98,
);
