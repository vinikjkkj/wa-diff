__d(
  "WASmaxInCoexistenceOffboardingNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInCoexistenceEnums",
    "WASmaxInCoexistenceProviderInfoMixin",
    "WASmaxInCoexistenceServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "offboarding");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "hosted",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "product_surface",
        o("WASmaxInCoexistenceEnums")
          .ENUM_AIFROMMETA_AUTOMATION_BUSINESSPLATFORM,
      );
      if (!i.success) return i;
      var l = o("WASmaxInCoexistenceProviderInfoMixin").parseProviderInfoMixin(
        n.value,
      );
      if (!l.success) return l;
      var s = o(
        "WASmaxInCoexistenceServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                offboardingProductSurface: i.value,
                offboardingProviderInfoMixin: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseOffboardingNotificationRequest = e;
  },
  98,
);
