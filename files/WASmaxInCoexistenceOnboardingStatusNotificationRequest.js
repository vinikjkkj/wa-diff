__d(
  "WASmaxInCoexistenceOnboardingStatusNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInCoexistenceEnums",
    "WASmaxInCoexistenceProductSurfaceMixin",
    "WASmaxInCoexistenceProviderInfoMixin",
    "WASmaxInCoexistenceServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "onboarding_status",
      );
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
        "status",
        o("WASmaxInCoexistenceEnums").ENUM_COMPLETED_FAILED,
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInCoexistenceProductSurfaceMixin",
      ).parseProductSurfaceMixin(n.value);
      if (!l.success) return l;
      var s = o("WASmaxInCoexistenceProviderInfoMixin").parseProviderInfoMixin(
        n.value,
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInCoexistenceServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                onboardingStatusStatus: i.value,
                onboardingStatusProductSurfaceMixin: l.value,
                onboardingStatusProviderInfoMixin: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    l.parseOnboardingStatusNotificationRequest = e;
  },
  98,
);
