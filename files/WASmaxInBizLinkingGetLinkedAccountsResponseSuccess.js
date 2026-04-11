__d(
  "WASmaxInBizLinkingGetLinkedAccountsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizLinkingEnums",
    "WASmaxInBizLinkingFBBizResponseMixin",
    "WASmaxInBizLinkingFBPageResponseBaseMixin",
    "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
    "WASmaxInBizLinkingHasDisplayNameMixin",
    "WASmaxInBizLinkingHasProfilePictureMixin",
    "WASmaxInBizLinkingHasShowOnProfileMixin",
    "WASmaxInBizLinkingIGProfessionalResponseBaseMixin",
    "WASmaxInBizLinkingWhatsAppAdIdentityResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fb_page");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "whatsapp_as_page_button",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "state",
        o("WASmaxInBizLinkingEnums").ENUM_OFF_ON,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizLinkingFBPageResponseBaseMixin",
      ).parseFBPageResponseBaseMixin(e);
      if (!a.success) return a;
      var i = o(
          "WASmaxInBizLinkingHasProfilePictureMixin",
        ).parseHasProfilePictureMixin(e),
        l = o(
          "WASmaxInBizLinkingHasShowOnProfileMixin",
        ).parseHasShowOnProfileMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ whatsappAsPageButtonState: r.value }, a.value, {
          hasProfilePictureMixin: i.success ? i.value : null,
          hasShowOnProfileMixin: l.success ? l.value : null,
        }),
      );
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fb_biz");
      if (!t.success) return t;
      var n = o("WASmaxInBizLinkingFBBizResponseMixin").parseFBBizResponseMixin(
        e,
      );
      return (n.success, n);
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ig_professional");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBizLinkingIGProfessionalResponseBaseMixin",
      ).parseIGProfessionalResponseBaseMixin(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInBizLinkingHasProfilePictureMixin",
        ).parseHasProfilePictureMixin(e),
        a = o("WASmaxInBizLinkingHasDisplayNameMixin").parseHasDisplayNameMixin(
          e,
        ),
        i = o(
          "WASmaxInBizLinkingHasShowOnProfileMixin",
        ).parseHasShowOnProfileMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          hasProfilePictureMixin: r.success ? r.value : null,
          hasDisplayNameMixin: a.success ? a.value : null,
          hasShowOnProfileMixin: i.success ? i.value : null,
        }),
      );
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "whatsapp_ad_identity");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBizLinkingWhatsAppAdIdentityResponseMixin",
      ).parseWhatsAppAdIdentityResponseMixin(e);
      return (n.success, n);
    }
    function d(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "linked_accounts");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(a.value, "fb_page", e);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(a.value, "fb_biz", s);
      if (!l.success) return l;
      var d = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "ig_professional",
        u,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "whatsapp_ad_identity",
        c,
      );
      if (!m.success) return m;
      var p = o(
        "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(t, n);
      return p.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, p.value, {
              linkedAccountsFbPage: i.value,
              linkedAccountsFbBiz: l.value,
              linkedAccountsIgProfessional: d.value,
              linkedAccountsWhatsappAdIdentity: m.value,
            }),
          )
        : p;
    }
    ((l.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbPage = e),
      (l.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbBiz = s),
      (l.parseGetLinkedAccountsResponseSuccessLinkedAccountsIgProfessional = u),
      (l.parseGetLinkedAccountsResponseSuccessLinkedAccountsWhatsappAdIdentity =
        c),
      (l.parseGetLinkedAccountsResponseSuccess = d));
  },
  98,
);
