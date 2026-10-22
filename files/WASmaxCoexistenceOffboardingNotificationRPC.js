__d(
  "WASmaxCoexistenceOffboardingNotificationRPC",
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
            "OffboardingNotification",
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
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "offboarding");
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
        "product_surface",
        o("WASmaxInCoexistenceEnums")
          .ENUM_AIFROMMETA_AUTHORIZEDAGENT_AUTOMATION_BBPRO_BUSINESSPLATFORM,
      );
      if (!l.success) return l;
      var u = o("WASmaxInCoexistenceProviderInfoMixin").parseProviderInfoMixin(
        n.value,
      );
      if (!u.success) return u;
      var c = o(
        "WASmaxInCoexistenceServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                offboardingProductSurface: l.value,
                offboardingProviderInfoMixin: u.value,
              },
              c.value,
              { offboardingCoexConnectionDescriptor: r.value },
            ),
          )
        : c;
    }
    ((l.receiveOffboardingNotificationRPC = e),
      (l.parseOffboardingNotificationRequestOffboardingCoexConnectionDescriptor =
        s),
      (l.parseOffboardingNotificationRequest = u));
  },
  98,
);
