__d(
  "WAWebNewsletterDSAModals.react",
  [
    "fbt",
    "WAWebBusinessWebsiteIcon.react",
    "WAWebCommonNewsletterEnums",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebLocationSearchingIcon.react",
    "WAWebNewsletterLearnMoreModal.react",
    "WAWebNullFunc",
    "WAWebSettingsDocumentIcon.react",
    "WAWebStatusVcardIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e = [
        {
          key: "dsa-guidelines-modal-first-paragraph",
          content: function () {
            return s._(
              /*BTDS*/ "To help keep WhatsApp safe, we require all updates shared to follow our Channels Guidelines and any local laws.",
            );
          },
        },
        {
          key: "dsa-guidelines-modal-second-paragraph",
          content: function () {
            return s._(
              /*BTDS*/ "By following our {=m1} and local laws you can help keep your channel open to all followers.",
              [
                s._implicitParam(
                  "=m1",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: m,
                    children: s._(/*BTDS*/ "Channels Guidelines"),
                  }),
                ),
              ],
            );
          },
        },
      ];
      return u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
        title: s._(/*BTDS*/ "How to keep your channel open"),
        paragraphs: e,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
    }
    function p(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
          .RM_COPS:
        case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
          .IP_SRT_VIOLATION:
          return s._(
            /*BTDS*/ "Your content was reported by a third party for infringing their intellectual property rights, which doesn't follow our {=m1}. As a result, action was taken.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  onClick: m,
                  children: s._(/*BTDS*/ "Channels Guidelines"),
                }),
              ),
            ],
          );
        case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
          .RM_PRODUCT_RESTRICTION:
        case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
          .GENERIC_VIOLATION:
          return s._(
            /*BTDS*/ "Our technology found your update doesn't follow our {=m1}. As a result, action was taken.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  onClick: m,
                  children: s._(/*BTDS*/ "Channels Guidelines"),
                }),
              ),
            ],
          );
        case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
          .LEGAL_TDR:
          return s._(
            /*BTDS*/ "Your content was reported by a third party for not following local laws, which doesn't follow our {=m1}. As a result, action was taken.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  onClick: m,
                  children: s._(/*BTDS*/ "Channels Guidelines"),
                }),
              ),
            ],
          );
        case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory
          .RESPONSE_VIOLATES_GUIDELINES:
          return s._(
            /*BTDS*/ "Our technology reviewed your report to make sure all responses follow our {=m1}.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  onClick: m,
                  children: s._(/*BTDS*/ "Channels Guidelines"),
                }),
              ),
            ],
          );
      }
    }
    function _(e) {
      var t = e.DSADecisionModalCategory,
        n = [
          {
            key: "dsa-decision-modal-first-paragraph",
            content: function () {
              return p(t);
            },
          },
        ],
        a = [
          {
            key: "dsa-decision-modal-first-section",
            bullets: [
              {
                Icon: o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
                iconXstyle: c.secondaryColor,
                text: o("WAWebNullFunc").returnNull,
                subtext: function () {
                  return s._(
                    /*BTDS*/ "WhatsApp uses the same Channels Guidelines around the world.",
                  );
                },
              },
              {
                Icon: o("WAWebLocationSearchingIcon.react")
                  .LocationSearchingIcon,
                iconXstyle: c.secondaryColor,
                text: o("WAWebNullFunc").returnNull,
                subtext: function () {
                  return s._(
                    /*BTDS*/ "Our technology and teams work in many languages to make sure our Channels Guidelines are applied consistently.",
                  );
                },
              },
            ],
          },
        ];
      return u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
        title: s._(/*BTDS*/ "How we made this decision"),
        paragraphs: n,
        sections: a,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      var e = [
          {
            key: "dsa-eu-notice-modal-first-paragraph",
            content: function () {
              return s._(
                /*BTDS*/ "In addition to the option to ask for a review, you also have other options.",
              );
            },
          },
        ],
        t = [
          {
            key: "dsa-eu-notice-modal-first-section",
            bullets: [
              {
                Icon: o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon,
                iconXstyle: c.secondaryColor,
                text: o("WAWebNullFunc").returnNull,
                subtext: function () {
                  return s._(
                    /*BTDS*/ "You may be able to challenge our decision in court.",
                  );
                },
              },
              {
                Icon: o("WAWebStatusVcardIcon.react").StatusVcardIcon,
                iconXstyle: c.secondaryColor,
                text: o("WAWebNullFunc").returnNull,
                subtext: function () {
                  return s._(
                    /*BTDS*/ "You may be able to refer our decision to a certified dispute settlement body.",
                  );
                },
              },
            ],
          },
        ];
      return u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
        title: s._(/*BTDS*/ "Information for people in the EU"),
        paragraphs: e,
        sections: t,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.NewsletterDSAGuidelinesModal = d),
      (l.logChannelGuidelinesClick = m),
      (l.NewsletterDSADecisionModal = _),
      (l.NewsletterDSAEUNoticeModal = f));
  },
  226,
);
