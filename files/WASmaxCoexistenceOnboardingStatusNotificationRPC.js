__d(
  "WASmaxCoexistenceOnboardingStatusNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInCoexistenceEnums",
    "WASmaxInCoexistenceProviderInfoMixin",
    "WASmaxInCoexistenceServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "OnboardingStatusNotification",
            { Request: t },
          ),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "coex_connection_descriptor");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "product");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "provider_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 64);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 32);
      return i.success
        ? o("WAResultOrError").makeResult({
            productElementValue: a.value,
            providerIdElementValue: i.value,
          })
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "onboarding_status",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "coex_connection_descriptor",
        s,
      );
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
        "hosted",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status",
        o("WASmaxInCoexistenceEnums").ENUM_COMPLETED_FAILED,
      );
      if (!l.success) return l;
      var u = c(n.value);
      if (!u.success) return u;
      var d = o("WASmaxInCoexistenceProviderInfoMixin").parseProviderInfoMixin(
        n.value,
      );
      if (!d.success) return d;
      var m = o(
        "WASmaxInCoexistenceServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                onboardingStatusStatus: l.value,
                onboardingStatusProductSurfaceMixin: u.value,
                onboardingStatusProviderInfoMixin: d.value,
              },
              m.value,
              { onboardingStatusCoexConnectionDescriptor: r.value },
            ),
          )
        : m;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "product_surface",
        o("WASmaxInCoexistenceEnums")
          .ENUM_AIFROMMETA_AUTHORIZEDAGENT_AUTOMATION_BBPRO_BUSINESSPLATFORM,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ productSurface: t.value })
        : t;
    }
    ((l.receiveOnboardingStatusNotificationRPC = e),
      (l.parseOnboardingStatusNotificationRequestOnboardingStatusCoexConnectionDescriptor =
        s),
      (l.parseOnboardingStatusNotificationRequest = u),
      (l.parseProductSurfaceMixin = c));
  },
  98,
);
