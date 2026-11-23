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
        t = s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function p() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function _() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function f() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function g() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function h(e) {
      return s._(/*BTDS*/ "", [
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
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
        case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE:
          return e === "PENDING"
            ? o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getAdminProfileInReviewTitleString()
            : o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getAdminProfileReviewCompletedString();
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
              return s._(/*BTDS*/ "");
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
              return s._(/*BTDS*/ "");
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
        case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE: {
          switch (e) {
            case "PENDING":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getAdminProfileInReviewTitleString();
            case "REJECT":
            case "SUCCESS":
            case "CONTENT_UNAVAILABLE":
              return o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getAdminProfileReviewCompletedString();
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
      if (e === "CONTENT_UNAVAILABLE") return s._(/*BTDS*/ "");
      if (t === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG)
        switch (e) {
          case "PENDING":
            return s._(/*BTDS*/ "");
          case "REJECT":
            return s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m2",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  onClick: o("WAWebNewsletterDSAModals.react")
                    .logChannelGuidelinesClick,
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ]);
          case "SUCCESS":
            return s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m2",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  onClick: o("WAWebNewsletterDSAModals.react")
                    .logChannelGuidelinesClick,
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ]);
        }
      switch (e) {
        case "PENDING":
          return s._(/*BTDS*/ "");
        case "REJECT":
          return s._(/*BTDS*/ "");
        case "SUCCESS":
          return s._(/*BTDS*/ "", [
            s._implicitParam(
              "=m2",
              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                onClick: o("WAWebNewsletterDSAModals.react")
                  .logChannelGuidelinesClick,
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ]);
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
              return s._(/*BTDS*/ "");
            case "REJECT":
              return s._(/*BTDS*/ "");
            case "SUCCESS":
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
            case "CONTENT_UNAVAILABLE":
              return s._(/*BTDS*/ "");
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
                ? s._(/*BTDS*/ "", [
                    s._param("list_of_suspended_country", d),
                    s._implicitParam(
                      "=m5",
                      c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                        onClick: o("WAWebNewsletterDSAModals.react")
                          .logChannelGuidelinesClick,
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ])
                : null;
            case "SUCCESS":
              return (n == null ? void 0 : n.length) !== 0
                ? s._(/*BTDS*/ "", [
                    s._param("list_of_suspended_country", d),
                    s._implicitParam(
                      "=m5",
                      c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                        onClick: o("WAWebNewsletterDSAModals.react")
                          .logChannelGuidelinesClick,
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ])
                : null;
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG: {
          switch (t) {
            case "PENDING":
              return s._(/*BTDS*/ "");
            case "REJECT":
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
            case "SUCCESS":
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
            case "CONTENT_UNAVAILABLE":
              return s._(/*BTDS*/ "");
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM: {
          switch (t) {
            case "PENDING":
              return s._(/*BTDS*/ "");
            case "REJECT":
              return s._(/*BTDS*/ "");
            case "SUCCESS":
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
            case "CONTENT_UNAVAILABLE":
              return s._(/*BTDS*/ "");
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
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
            case "SUCCESS":
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE: {
          switch (t) {
            case "PENDING":
              return s._(/*BTDS*/ "");
            case "REJECT":
              return s._(/*BTDS*/ "", [
                s._param("violation_category_text", R(i)),
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
            case "SUCCESS":
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
          }
          break;
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType
          .PROFILE_PICTURE_DELETION: {
          switch (t) {
            case "PENDING":
              return s._(/*BTDS*/ "");
            case "REJECT":
              return s._(/*BTDS*/ "", [
                s._param("violation_category_text", R(i)),
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
            case "SUCCESS":
              return s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                    onClick: o("WAWebNewsletterDSAModals.react")
                      .logChannelGuidelinesClick,
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]);
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
          return s._(/*BTDS*/ "");
        case "ADULT_SEXUAL_SOLICITATION":
          return s._(/*BTDS*/ "");
        case "BULLYING_AND_HARASSMENT":
          return s._(/*BTDS*/ "");
        case "CHILD_SEXUAL_EXPLOITATION":
          return s._(/*BTDS*/ "");
        case "COORDINATING_HARM_AND_PROMOTING_CRIME":
          return s._(/*BTDS*/ "");
        case "CYBERSECURITY":
          return s._(/*BTDS*/ "");
        case "DANGEROUS_INDIVIDUALS_AND_ORGS":
          return s._(/*BTDS*/ "");
        case "FRAUD_AND_DECEPTION":
          return s._(/*BTDS*/ "");
        case "GRAPHIC_VIOLENCE":
          return s._(/*BTDS*/ "");
        case "HARMFUL_HEALTH":
          return s._(/*BTDS*/ "");
        case "HATE":
          return s._(/*BTDS*/ "");
        case "HUMAN_EXPLOITATION":
          return s._(/*BTDS*/ "");
        case "INTELLECTUALPROPERTY_RIGHTS":
          return s._(/*BTDS*/ "");
        case "PLATFORM_POLICY":
          return s._(/*BTDS*/ "");
        case "PORN":
          return s._(/*BTDS*/ "");
        case "PRIVACY_VIOLATION":
          return s._(/*BTDS*/ "");
        case "REGULATED_GOODS":
          return s._(/*BTDS*/ "");
        case "SPAM":
          return s._(/*BTDS*/ "");
        case "SSI":
          return s._(/*BTDS*/ "");
        case "VIOLENCE_AND_INCITEMENT":
          return s._(/*BTDS*/ "");
        case "IP_COUNTERFEIT_REPORTED":
        case "IP_TRADEMARK_REPORTED":
          return s._(/*BTDS*/ "");
        case "IP_COPYRIGHT_REPORTED":
          return s._(/*BTDS*/ "");
        case "IP_REPEAT_INFRINGEMENT_REPORTED":
          return s._(/*BTDS*/ "");
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
      return s._(/*BTDS*/ "", [
        s._param("violation_category_text", R(e)),
        s._implicitParam(
          "=m1",
          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            onClick: o("WAWebNewsletterDSAModals.react")
              .logChannelGuidelinesClick,
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(t) {
      if (t == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[enforcement] getServerDrivenPolicyGuideline: no policyInfo",
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
              children: s._(/*BTDS*/ ""),
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
            children: s._(/*BTDS*/ ""),
          }),
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t, n) {
      return n === !0
        ? t != null
          ? s._(/*BTDS*/ "", [
              s._param("rights_holder_name", t.name),
              s._implicitParam(
                "=m4",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  onClick: C,
                  xstyle: d.seeRule,
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._param("violation_category_text", R(e)),
              s._implicitParam(
                "=m4",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  onClick: C,
                  xstyle: d.seeRule,
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ])
        : t != null
          ? s._(/*BTDS*/ "", [
              s._param("rights_holder_name", t.name),
              s._implicitParam(
                "=m4",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  onClick: C,
                  xstyle: d.seeRule,
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._param("violation_category_text", R(e)),
              s._implicitParam(
                "=m4",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  onClick: C,
                  xstyle: d.seeRule,
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ]);
    }
    function I(e) {
      return s._(/*BTDS*/ "", [
        s._param("violation_category_text", R(e)),
        s._implicitParam(
          "=m2",
          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            onClick: o("WAWebNewsletterDSAModals.react")
              .logChannelGuidelinesClick,
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      return s._(/*BTDS*/ "", [
        s._param("violation_category_text", R(e)),
        s._implicitParam(
          "=m2",
          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            onClick: o("WAWebNewsletterDSAModals.react")
              .logChannelGuidelinesClick,
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      return e.reportStatus === "PENDING" || e.appeal.state === "PENDING"
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = e.reportContentData;
      return t.reportContentType === "status"
        ? e.newsletterName != null
          ? s._(/*BTDS*/ "", [s._param("channel_name", e.newsletterName)])
          : s._(/*BTDS*/ "")
        : t.reportContentType === "response" &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterIntegrityQuestionsM1Enabled() === !0
          ? t.notifyName != null
            ? s._(/*BTDS*/ "", [s._param("sender_name", t.notifyName)])
            : s._(/*BTDS*/ "")
          : t.reportContentType === "message"
            ? e.newsletterName != null
              ? s._(/*BTDS*/ "", [s._param("channel_name", e.newsletterName)])
              : s._(/*BTDS*/ "")
            : e.newsletterName != null
              ? s._(/*BTDS*/ "", [s._param("channel_name", e.newsletterName)])
              : s._(/*BTDS*/ "");
    }
    function $(e) {
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
    function P(e) {
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
    var N = "8639295579439940";
    function M(e) {
      var t = e.msg,
        n = e.reportId,
        a = t != null,
        i =
          t != null &&
          ((t.type !== o("WAWebMsgType").MSG_TYPE.CHAT &&
            t.type !==
              o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE) ||
            o("WAWebMsgGetters").getLinkPreview(t) === !0);
      return a === !0 &&
        i &&
        o("WAWebNewsletterGatingUtils").isNewsletterUSNCIIReportingEnabled()
        ? {
            learnMoreUrl: o(
              "WAWebContactFormsUrl",
            ).getReportContentUSNCIIFormUrl(),
            bannerText: s._(/*BTDS*/ ""),
            actionText: s._(/*BTDS*/ ""),
            showViewReport: !1,
          }
        : o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterReportUnlawfulContentEnabled()
          ? {
              learnMoreUrl:
                o("WAWebFaqUrl").getReportUnlawfulContentWebFaqUrl(),
              bannerText: s._(/*BTDS*/ ""),
              actionText: r("WAWebFbtCommon")("Learn more"),
              showViewReport: !0,
            }
          : o("WAWebNewsletterGatingUtils").isNewsletterUKOSAReportingEnabled()
            ? {
                learnMoreUrl: o(
                  "WAWebContactFormsUrl",
                ).getReportContentUKFormUrl(n),
                bannerText: s._(/*BTDS*/ ""),
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
                  ).getReportContentAUSFormUrl(n, N),
                  bannerText: s._(/*BTDS*/ ""),
                  actionText: s._(/*BTDS*/ ""),
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
      (l.getAdminProfilePolicyGuideline = T),
      (l.getReportStatusString = D),
      (l.getReportDetailsTitleString = x),
      (l.getReportDetailsSubtitleString = $),
      (l.getReportDetailsWithAppealInfoSubtitleString = P),
      (l.getNewsletterReportComplianceConfig = M));
  },
  226,
);
