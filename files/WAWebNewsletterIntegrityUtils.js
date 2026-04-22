__d(
  "WAWebNewsletterIntegrityUtils",
  [
    "fbt",
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebContactFormsUrl",
    "WAWebDSADateUtils",
    "WAWebEnforcementActionLogging",
    "WAWebEnforcementPolicyDetailsModal.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterDSAModals.react",
    "WAWebNewsletterGatingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { seeRule: { color: "x1v5yvga", cursor: "x1ypdohk", $$css: !0 } };
    function m() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "Failed to request review");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function p() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "Review requested");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function _() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "Failed to get reference number");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function f() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "Status deleted");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function g() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "Couldn't delete status. Please try again.");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function h(e) {
      return s._(/*BTDS*/ "Date requested : {review_request_date}", [
        s._param(
          "review_request_date",
          o("WAWebDSADateUtils").getDSADateDisplayString(e.toString()),
        ),
      ]);
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t, n) {
      switch (t) {
        case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND:
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND:
          return e === "PENDING"
            ? o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelInReviewTitleString()
            : o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelReviewCompletedString();
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM:
        case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM:
        case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG:
          return n === !0
            ? e === "PENDING"
              ? o(
                  "WAWebCommonNewsletterIntegrityStrings",
                ).getStatusInReviewTitleString()
              : o(
                  "WAWebCommonNewsletterIntegrityStrings",
                ).getStatusReviewCompletedString()
            : e === "PENDING"
              ? s._(/*BTDS*/ "Update in review")
              : s._(/*BTDS*/ "Update review completed");
        case o("WAWebCommonNewsletterEnums").EnforcementType
          .PROFILE_PICTURE_DELETION:
          return e === "PENDING"
            ? o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getProfilePictureDeletionInReviewTitleString()
            : o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getProfilePictureDeletionReviewCompletedString();
      }
    }
    function C() {
      r("WAWebEnforcementActionLogging").logSeeRuleClick();
    }
    function b(e, t, n) {
      switch (t) {
        case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
          switch (e) {
            case "PENDING":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelInReviewTitleString();
            case "REJECT":
            case "SUCCESS":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelReviewCompletedString();
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM:
        case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG: {
          if (n === !0)
            return e === "PENDING"
              ? o(
                  "WAWebCommonNewsletterIntegrityStrings",
                ).getStatusInReviewTitleString()
              : o(
                  "WAWebCommonNewsletterIntegrityStrings",
                ).getStatusReviewCompletedString();
          switch (e) {
            case "PENDING":
              return s._(/*BTDS*/ "Update in review");
            case "REJECT":
            case "SUCCESS":
            case "CONTENT_UNAVAILABLE":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getUpdateReviewCompletedString();
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM: {
          if (n === !0)
            return e === "PENDING"
              ? o(
                  "WAWebCommonNewsletterIntegrityStrings",
                ).getStatusInReviewTitleString()
              : o(
                  "WAWebCommonNewsletterIntegrityStrings",
                ).getStatusReviewCompletedString();
          switch (e) {
            case "PENDING":
              return s._(/*BTDS*/ "Update in review");
            case "REJECT":
            case "SUCCESS":
            case "CONTENT_UNAVAILABLE":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getUpdateReviewCompletedString();
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND: {
          switch (e) {
            case "PENDING":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelInReviewTitleString();
            case "REJECT":
            case "SUCCESS":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelReviewCompletedString();
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType
          .PROFILE_PICTURE_DELETION: {
          switch (e) {
            case "PENDING":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getProfilePictureDeletionInReviewTitleString();
            case "REJECT":
            case "SUCCESS":
            case "CONTENT_UNAVAILABLE":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getProfilePictureDeletionReviewCompletedString();
          }
          break;
        }
      }
    }
    function v(e, t) {
      if (e === "CONTENT_UNAVAILABLE")
        return s._(
          /*BTDS*/ "Your review is closed as this status is no longer available on your channel. It may have expired after 24 hours, or been deleted by a channel admin.",
        );
      if (t === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG)
        switch (e) {
          case "PENDING":
            return s._(
              /*BTDS*/ "Our Support team is reviewing your status. You will hear back within a few days.",
            );
          case "REJECT":
            return s._(
              /*BTDS*/ "Our Support team has confirmed this status doesn't follow our {=m2}.",
              [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ "Channels Guidelines"),
                  }),
                ),
              ],
            );
          case "SUCCESS":
            return s._(
              /*BTDS*/ "Our Support team determined this status follows our {=m2}.",
              [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ "Channels Guidelines"),
                  }),
                ),
              ],
            );
        }
      switch (e) {
        case "PENDING":
          return s._(
            /*BTDS*/ "Your status is being reviewed. You will hear back within a few days.",
          );
        case "REJECT":
          return s._(
            /*BTDS*/ "Your status has not been restored. The rights holder has not released their claim.",
          );
        case "SUCCESS":
          return s._(
            /*BTDS*/ "Your status has been restored. The rights holder has released their claim, and determined this status follows our {=m2}.",
            [
              s._implicitParam(
                "=m2",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  onClick: o("WAWebNewsletterDSAModals.react")
                    .logChannelGuidelinesClick,
                  children: s._(/*BTDS*/ "Channels Guidelines"),
                }),
              ),
            ],
          );
      }
    }
    function S(e) {
      var t = e.appealOutcome,
        n = e.countries,
        a = e.enforcementType,
        i = e.enforcementViolationCategory,
        l = e.isStatusContent;
      if (
        l === !0 &&
        (a === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG ||
          a ===
            o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM ||
          a ===
            o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM)
      )
        return v(t, a);
      var u =
          n == null
            ? void 0
            : n.map(function (e) {
                return e.countryName;
              }),
        d =
          u != null
            ? r("WAWebFbtIntlList")(
                u,
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.COMMA,
              )
            : null;
      switch (a) {
        case o("WAWebCommonNewsletterEnums").EnforcementType
          .GEOSUSPEND_INFORM: {
          switch (t) {
            case "PENDING":
              return s._(
                /*BTDS*/ "Your update is being reviewed. You will hear back within a few days.",
              );
            case "REJECT":
              return s._(
                /*BTDS*/ "Your update has not been restored. The rights holder has not released their claim.",
              );
            case "SUCCESS":
              return s._(
                /*BTDS*/ "Your update has been restored. The rights holder has released their claim, and determined this update follows our {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
            case "CONTENT_UNAVAILABLE":
              return s._(
                /*BTDS*/ "Your review is closed as this update is no longer available on your channel. It may have expired after 30 days, or been deleted by a channel admin.",
              );
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
          switch (t) {
            case "PENDING":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelInReviewString();
            case "REJECT":
              return (n == null ? void 0 : n.length) !== 0
                ? s._(
                    /*BTDS*/ "Your channel is still closed in these countries: {list_of_suspended_country}. Our Support team has confirmed this channel doesn't follow our {=m5} or local laws.",
                    [
                      s._param("list_of_suspended_country", d),
                      s._implicitParam(
                        "=m5",
                        c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                          href: o(
                            "WAWebFaqUrl",
                          ).getNewsletterGuidelinesFaqUrl(),
                          onClick: o("WAWebNewsletterDSAModals.react")
                            .logChannelGuidelinesClick,
                          children: s._(/*BTDS*/ "Channels Guidelines"),
                        }),
                      ),
                    ],
                  )
                : null;
            case "SUCCESS":
              return (n == null ? void 0 : n.length) !== 0
                ? s._(
                    /*BTDS*/ "Your channel has been reopened in these countries: {list_of_suspended_country}. Our Support team has determined this channel follows our {=m5}.",
                    [
                      s._param("list_of_suspended_country", d),
                      s._implicitParam(
                        "=m5",
                        c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                          href: o(
                            "WAWebFaqUrl",
                          ).getNewsletterGuidelinesFaqUrl(),
                          onClick: o("WAWebNewsletterDSAModals.react")
                            .logChannelGuidelinesClick,
                          children: s._(/*BTDS*/ "Channels Guidelines"),
                        }),
                      ),
                    ],
                  )
                : null;
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG: {
          switch (t) {
            case "PENDING":
              return s._(
                /*BTDS*/ "Our Support team is reviewing your update. You will hear back within a few days.",
              );
            case "REJECT":
              return s._(
                /*BTDS*/ "Our Support team has confirmed this update doesn't follow our {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
            case "SUCCESS":
              return s._(
                /*BTDS*/ "Our Support team determined this update follows our {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
            case "CONTENT_UNAVAILABLE":
              return s._(
                /*BTDS*/ "Your review is closed as this update is no longer available on your channel. It may have expired after 30 days, or been deleted by a channel admin.",
              );
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM: {
          switch (t) {
            case "PENDING":
              return s._(
                /*BTDS*/ "Your update is being reviewed. You will hear back within a few days.",
              );
            case "REJECT":
              return s._(
                /*BTDS*/ "Your update has not been restored. The rights holder has not released their claim.",
              );
            case "SUCCESS":
              return s._(
                /*BTDS*/ "Your update has been restored. The rights holder has released their claim, and determined this update follows our {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
            case "CONTENT_UNAVAILABLE":
              return s._(
                /*BTDS*/ "Your review is closed as this update is no longer available on your channel. It may have expired after 30 days, or been deleted by a channel admin.",
              );
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND: {
          switch (t) {
            case "PENDING":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getChannelInReviewString();
            case "REJECT":
              return s._(
                /*BTDS*/ "Your channel is still closed. Our Support team has confirmed this channel doesn't follow our {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
            case "SUCCESS":
              return s._(
                /*BTDS*/ "Your channel has been reopened. Our WhatsApp team has determined this channel follows our {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType
          .PROFILE_PICTURE_DELETION: {
          switch (t) {
            case "PENDING":
              return s._(
                /*BTDS*/ "Our Support team is reviewing your profile picture. You will hear back within a few days.",
              );
            case "REJECT":
              return s._(
                /*BTDS*/ "Your profile picture does not follow our {=m2} on {violation_category_text}",
                [
                  s._param("violation_category_text", R(i)),
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
            case "SUCCESS":
              return s._(
                /*BTDS*/ "Your profile picture has been restored. Our Support team has determined this channel follows our {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                      onClick: o("WAWebNewsletterDSAModals.react")
                        .logChannelGuidelinesClick,
                      children: s._(/*BTDS*/ "Channels Guidelines"),
                    }),
                  ),
                ],
              );
          }
          break;
        }
      }
    }
    function R(e) {
      if (e == null)
        return o(
          "WAWebCommonNewsletterIntegrityStrings",
        ).getNewsletterGenericViolationPolicyString();
      switch (e) {
        case "ADULT_SEXUAL_EXPLOITATION":
          return s._(
            /*BTDS*/ "showing or promoting sexual exploitation or violence.",
          );
        case "ADULT_SEXUAL_SOLICITATION":
          return s._(
            /*BTDS*/ "sexually explicit content or arranging commercial sexual services.",
          );
        case "BULLYING_AND_HARASSMENT":
          return s._(/*BTDS*/ "threats, intimidation, or harassment.");
        case "CHILD_SEXUAL_EXPLOITATION":
          return s._(
            /*BTDS*/ "content that could endanger children, shows child abuse, or sexually exploits children.",
          );
        case "COORDINATING_HARM_AND_PROMOTING_CRIME":
          return s._(
            /*BTDS*/ "encouraging, promoting or helping coordinate harm or crime.",
          );
        case "CYBERSECURITY":
          return s._(/*BTDS*/ "cybersecurity risks that could harm others.");
        case "DANGEROUS_INDIVIDUALS_AND_ORGS":
          return s._(
            /*BTDS*/ "showing support for terrorist, hate, and criminal groups or individuals.",
          );
        case "FRAUD_AND_DECEPTION":
          return s._(/*BTDS*/ "engaging in fraud or scams.");
        case "GRAPHIC_VIOLENCE":
          return s._(/*BTDS*/ "excessively violent or graphic content.");
        case "HARMFUL_HEALTH":
          return s._(/*BTDS*/ "content that could cause harm to people.");
        case "HATE":
          return s._(
            /*BTDS*/ "threatening, hateful, or racially offensive content.",
          );
        case "HUMAN_EXPLOITATION":
          return s._(
            /*BTDS*/ "promoting or facilitating human trafficking or exploitation, violence, or sexual exploitation.",
          );
        case "INTELLECTUALPROPERTY_RIGHTS":
          return s._(/*BTDS*/ "infringement of intellectual property rights.");
        case "PLATFORM_POLICY":
          return s._(
            /*BTDS*/ "legally acceptable use for international compliance.",
          );
        case "PORN":
          return s._(/*BTDS*/ "graphic or sexual content.");
        case "PRIVACY_VIOLATION":
          return s._(/*BTDS*/ "privacy risks and misrepresentation.");
        case "REGULATED_GOODS":
          return s._(
            /*BTDS*/ "buying, selling, or exchanging regulated or restricted goods.",
          );
        case "SPAM":
          return s._(/*BTDS*/ "spam and cybersecurity risks.");
        case "SSI":
          return s._(
            /*BTDS*/ "content that could encourage suicide or self-injury.",
          );
        case "VIOLENCE_AND_INCITEMENT":
          return s._(
            /*BTDS*/ "encouraging violence or physical harm, or threats to public safety.",
          );
        case "IP_COUNTERFEIT_REPORTED":
        case "IP_TRADEMARK_REPORTED":
          return s._(
            /*BTDS*/ "infringement of intellectual property rights, including our policies on trademark.",
          );
        case "IP_COPYRIGHT_REPORTED":
          return s._(
            /*BTDS*/ "infringement of intellectual property rights, including our policies on copyright.",
          );
        case "IP_REPEAT_INFRINGEMENT_REPORTED":
          return s._(/*BTDS*/ "infringement of intellectual property rights.");
        case "SUICIDE_OR_SELFINJURY":
        case "HATESPEECH":
        case "UNKNOWN":
        default:
          return o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterGenericViolationPolicyString();
      }
    }
    function L(e) {
      return s._(
        /*BTDS*/ "Some updates shared by this channel don't follow our {=m1} on {violation_category_text}",
        [
          s._param("violation_category_text", R(e)),
          s._implicitParam(
            "=m1",
            c.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              onClick: o("WAWebNewsletterDSAModals.react")
                .logChannelGuidelinesClick,
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(t) {
      if (t == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[enforcement] getServerDrivenPolicyGuideline: policyInformation is null",
              ])),
          ),
          null
        );
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterEnforcementPolicyBottomSheetEnabled()
      ) {
        var n = function () {
          (r("WAWebEnforcementActionLogging").logClickSeeDetails(),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebEnforcementPolicyDetailsModal.react"), {
                policyInformation: t,
              }),
            ));
        };
        return c.jsxs(c.Fragment, {
          children: [
            t.overview,
            c.jsx("br", {}),
            c.jsx(r("WDSTextualLink.react"), {
              onClick: n,
              testid: "enforcement-policy-see-details-link",
              children: s._(/*BTDS*/ "See details"),
            }),
          ],
        });
      }
      return c.jsxs(c.Fragment, {
        children: [
          t.overview,
          c.jsx("br", {}),
          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
            onClick: C,
            xstyle: d.seeRule,
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ "See rule"),
          }),
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t, n) {
      return n === !0
        ? t != null
          ? s._(
              /*BTDS*/ "This status contains copyrighted material from {rights_holder_name}. {=m4}",
              [
                s._param("rights_holder_name", t.name),
                s._implicitParam(
                  "=m4",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    onClick: C,
                    xstyle: d.seeRule,
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    children: s._(/*BTDS*/ "See rule"),
                  }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "This status doesn't follow our Channel Guidelines on {violation_category_text} {=m4}",
              [
                s._param("violation_category_text", R(e)),
                s._implicitParam(
                  "=m4",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    onClick: C,
                    xstyle: d.seeRule,
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    children: s._(/*BTDS*/ "See rule"),
                  }),
                ),
              ],
            )
        : t != null
          ? s._(
              /*BTDS*/ "This update contains copyrighted material from {rights_holder_name}. {=m4}",
              [
                s._param("rights_holder_name", t.name),
                s._implicitParam(
                  "=m4",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    onClick: C,
                    xstyle: d.seeRule,
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    children: s._(/*BTDS*/ "See rule"),
                  }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "This update doesn't follow our Channel Guidelines on {violation_category_text} {=m4}",
              [
                s._param("violation_category_text", R(e)),
                s._implicitParam(
                  "=m4",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    onClick: C,
                    xstyle: d.seeRule,
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    children: s._(/*BTDS*/ "See rule"),
                  }),
                ),
              ],
            );
    }
    function I(e) {
      return s._(
        /*BTDS*/ "Your profile picture does not follow our {=m2} on {violation_category_text}",
        [
          s._param("violation_category_text", R(e)),
          s._implicitParam(
            "=m2",
            c.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              onClick: o("WAWebNewsletterDSAModals.react")
                .logChannelGuidelinesClick,
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      return e.reportStatus === "PENDING" || e.appeal.state === "PENDING"
        ? s._(/*BTDS*/ "Report in review")
        : s._(/*BTDS*/ "Report reviewed");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.reportContentData;
      return t.reportContentType === "status"
        ? e.newsletterName != null
          ? s._(
              /*BTDS*/ "You reported a channel status shared by {channel_name}",
              [s._param("channel_name", e.newsletterName)],
            )
          : s._(/*BTDS*/ "You reported a channel status")
        : t.reportContentType === "response" &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterIntegrityQuestionsM1Enabled() === !0
          ? t.notifyName != null
            ? s._(
                /*BTDS*/ "You reported a channel question response from {sender_name}",
                [s._param("sender_name", t.notifyName)],
              )
            : s._(/*BTDS*/ "You reported a response to a channel question")
          : t.reportContentType === "message"
            ? e.newsletterName != null
              ? s._(
                  /*BTDS*/ "You reported an update shared by {channel_name}",
                  [s._param("channel_name", e.newsletterName)],
                )
              : s._(/*BTDS*/ "You reported an update shared by a channel")
            : e.newsletterName != null
              ? s._(/*BTDS*/ "You reported {channel_name}", [
                  s._param("channel_name", e.newsletterName),
                ])
              : s._(/*BTDS*/ "You reported a channel");
    }
    function x(e) {
      if (e.newsletterName == null)
        return o(
          "WAWebCommonNewsletterIntegrityStrings",
        ).getNewsletterReportClosedNullNewsletterNameDescription();
      var t = e.reportContentData;
      if (t.reportContentType === "status")
        switch (e.reportStatus) {
          case "PENDING":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterReportPendingDescription();
          case "SUCCESS":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterStatusReportSuccessDescription();
          case "FAIL":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterStatusReportFailDescription();
          case "CONTENT_UNAVAILABLE":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterStatusReportContentUnavailableDescription();
        }
      if (
        t.reportContentType === "response" &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterIntegrityQuestionsM1Enabled() === !0
      )
        switch (e.reportStatus) {
          case "PENDING":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterReportPendingDescription();
          case "SUCCESS":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterResponseReportSuccessDescription();
          case "FAIL":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterResponseReportFailDescription();
          case "CONTENT_UNAVAILABLE":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterResponseReportContentUnavailableDescription();
        }
      switch (e.reportStatus) {
        case "PENDING":
          return o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterReportPendingDescription();
        case "SUCCESS":
          return e.reportContentData.reportContentType === "message"
            ? o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportMessageLevelSuccessDescription()
            : o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportSuccessDescription();
        case "FAIL":
          return e.reportContentData.reportContentType === "message"
            ? o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportMessageLevelFailDescription()
            : o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportFailDescription();
        case "CONTENT_UNAVAILABLE":
          return o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterReportContentUnavailableDescription();
      }
    }
    function $(e) {
      if (e.newsletterName == null)
        return o(
          "WAWebCommonNewsletterIntegrityStrings",
        ).getNewsletterReportClosedNullNewsletterNameDescription();
      var t = e.reportContentData;
      if (t.reportContentType === "status")
        switch (e.appeal.state) {
          case "PENDING":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterReportPendingDescription();
          case "SUCCESS":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterStatusReportSuccessDescription();
          case "REJECT":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterStatusReportFailDescription();
          case "CONTENT_UNAVAILABLE":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterStatusReportContentUnavailableDescription();
          case "NON_APPEALABLE":
            return null;
        }
      if (
        t.reportContentType === "response" &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterIntegrityQuestionsM1Enabled() === !0
      )
        switch (e.appeal.state) {
          case "PENDING":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterReportPendingDescription();
          case "SUCCESS":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterResponseReportSuccessDescription();
          case "REJECT":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterResponseReportFailDescription();
          case "CONTENT_UNAVAILABLE":
            return o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterResponseReportContentUnavailableDescription();
        }
      switch (e.appeal.state) {
        case "PENDING":
          return o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterReportPendingDescription();
        case "SUCCESS":
          return t.reportContentType === "message"
            ? o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportMessageLevelSuccessDescription()
            : o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportSuccessDescription();
        case "REJECT":
          return t.reportContentType === "message"
            ? o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportMessageLevelFailDescription()
            : o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterReportFailDescription();
        case "CONTENT_UNAVAILABLE":
          return o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterReportContentUnavailableDescription();
        case "NON_APPEALABLE":
          return null;
      }
    }
    var P = "8639295579439940";
    function N(e) {
      var t = e.msg,
        n = e.reportId,
        a = t != null,
        i =
          t != null &&
          ((t.type !== o("WAWebMsgType").MSG_TYPE.CHAT &&
            t.type !==
              o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE) ||
            o("WAWebMsgGetters").getLinkPreview(t) != null);
      return a === !0 &&
        i &&
        o("WAWebNewsletterGatingUtils").isNewsletterUSNCIIReportingEnabled()
        ? {
            learnMoreUrl: o(
              "WAWebContactFormsUrl",
            ).getReportContentUSNCIIFormUrl(),
            bannerText: s._(
              /*BTDS*/ "In the US, you can create a detailed report for something that contains intimate imagery.",
            ),
            actionText: s._(/*BTDS*/ "Fill in form"),
            showViewReport: !1,
          }
        : o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterReportUnlawfulContentEnabled()
          ? {
              learnMoreUrl:
                o("WAWebFaqUrl").getReportUnlawfulContentWebFaqUrl(),
              bannerText: s._(
                /*BTDS*/ "You can send an additional report for unlawful content.",
              ),
              actionText: r("WAWebFbtCommon")("Learn more"),
              showViewReport: !0,
            }
          : o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled()
            ? {
                learnMoreUrl: o(
                  "WAWebContactFormsUrl",
                ).getReportContentUKFormUrl(n),
                bannerText: s._(
                  /*BTDS*/ "You can send an additional report for unlawful content.",
                ),
                actionText: r("WAWebFbtCommon")("Learn more"),
                showViewReport: !1,
              }
            : a === !0 &&
                n != null &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterAusOSAReportingEnabled()
              ? {
                  learnMoreUrl: o(
                    "WAWebContactFormsUrl",
                  ).getReportContentAUSFormUrl(n, P),
                  bannerText: s._(
                    /*BTDS*/ "You can send an additional report under the Australian Online Safety Act.",
                  ),
                  actionText: s._(/*BTDS*/ "Learn more"),
                  showViewReport: !1,
                }
              : null;
    }
    ((l.showReviewSubmissionFailureToast = m),
      (l.showReviewSubmissionSuccessToast = p),
      (l.showDsbReferenceNumberFailureToast = _),
      (l.showStatusDeleteSuccessToast = f),
      (l.showStatusDeleteFailureToast = g),
      (l.getOutcomeListSubtitle = h),
      (l.getOutcomeListTitle = y),
      (l.getTitleBasedOnEnforcementTypeAndOutcome = b),
      (l.getHeaderBodyTextBasedOnEnforcementTypeAndOutcome = S),
      (l.getSuspendedNewsletterPolicyGuideline = L),
      (l.getServerDrivenPolicyGuideline = E),
      (l.getSuspendInformPolicyGuideline_ToBeDeprecated = k),
      (l.getProfilePictureDeletionPolicyGuideline = I),
      (l.getReportStatusString = T),
      (l.getReportDetailsTitleString = D),
      (l.getReportDetailsSubtitleString = x),
      (l.getReportDetailsWithAppealInfoSubtitleString = $),
      (l.getNewsletterReportComplianceConfig = N));
  },
  226,
);
