__d(
  "WAWebCommonNewsletterIntegrityStrings",
  [
    "fbt",
    "WAWebCountriesUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e || {},
            n = t.countryCode,
            r = t.isPreview,
            a = r === void 0 ? !0 : r,
            i;
          if (
            (n != null &&
              (i = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(
                n,
              )),
            i == null)
          ) {
            var l = o(
              "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
            ).getMaybeMyCountryCodeIso();
            ((i = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(
              l,
            )),
              i == null && (i = s._(/*BTDS*/ "your country")));
          }
          return a
            ? s._(/*BTDS*/ "This channel is closed in {country_name}", [
                s._param("country_name", i),
              ])
            : s._(
                /*BTDS*/ "Channel history and new updates are not available in {country_name}.",
                [s._param("country_name", i)],
              );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return e.length > 1
        ? s._(/*BTDS*/ "Your channel is closed in some countries")
        : s._(/*BTDS*/ "Your channel is closed in this country: {country}", [
            s._param("country", e[0].countryName),
          ]);
    }
    function p() {
      return s._(/*BTDS*/ "Why this happened");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Channel alerts");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "appropriate content.");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Delete from channel");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Update review completed");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Status in review");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Status review completed");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Profile picture in review");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Profile picture review completed");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Your channel profile picture has been removed");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "Your channel profile picture has been removed");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "A channel admin profile has been removed");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Channel admin profile in review");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "Channel admin profile review completed");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "Channel review completed");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "Channel in review");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(
        /*BTDS*/ "Our Support team is reviewing your channel. You will hear back within a few days.",
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(/*BTDS*/ "See review details");
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "Review details");
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "Request review");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Request a review");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "Dispute settlement body");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w() {
      return s._(/*BTDS*/ "Email the reporter");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "See options");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Channel reports");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(
        /*BTDS*/ "Your report is closed as this channel is no longer available.",
      );
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(
        /*BTDS*/ "Report review typically takes 24 hours. We'll let you know when your report is complete.",
      );
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined some updates on this channel do not follow our {=m2}. WhatsApp requires all updates and channels to follow our Channels Guidelines.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined this update does not follow our {=m2}. WhatsApp requires all updates and channels to follow our Channels Guidelines.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined this response doesn't follow our {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined this response follows our {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(
        /*BTDS*/ "Your report is closed as this response is no longer available. It may have expired after 30 days, or been deleted by a channel admin.",
      );
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined this channel follows our {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined this update follows our {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    z.displayName = z.name + " [from " + i.id + "]";
    function j() {
      return s._(
        /*BTDS*/ "Your report is closed as this update is no longer available on this channel. It may have expired after 30 days, or been deleted by a channel admin.",
      );
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined this channel status does not follow our {=m2}. WhatsApp requires all updates and channels to follow our Channels Guidelines.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q() {
      return s._(
        /*BTDS*/ "We have reviewed your report and determined this channel status follows our {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
              children: s._(/*BTDS*/ "Channels Guidelines"),
            }),
          ),
        ],
      );
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X() {
      return s._(
        /*BTDS*/ "Your report is closed as this channel status is no longer available on this channel. It may have expired after 24 hours, or been deleted by a channel admin.",
      );
    }
    ((X.displayName = X.name + " [from " + i.id + "]"),
      (l.getGeosuspendedInYourCountryString = c),
      (l.getGeosuspensionStringForChannelAlertsDrawer = m),
      (l.getWhyThisHappenedSectionTitleString = p),
      (l.getNewsletterAlertsDrawerTitle = _),
      (l.getNewsletterGenericViolationPolicyString = f),
      (l.deleteViolatingContentText = g),
      (l.getUpdateReviewCompletedString = h),
      (l.getStatusInReviewTitleString = y),
      (l.getStatusReviewCompletedString = C),
      (l.getProfilePictureDeletionInReviewTitleString = b),
      (l.getProfilePictureDeletionReviewCompletedString = v),
      (l.getDeleteProfilePictureTextForTitle = S),
      (l.getDeleteProfilePictureTextForList = R),
      (l.getAdminProfileRemovedTextForList = L),
      (l.getAdminProfileInReviewTitleString = E),
      (l.getAdminProfileReviewCompletedString = k),
      (l.getChannelReviewCompletedString = I),
      (l.getChannelInReviewTitleString = T),
      (l.getChannelInReviewString = D),
      (l.getSeeReviewDetailsText = x),
      (l.getNewsletterAppealOutcomeDrawerTitle = $),
      (l.getRequestAppealButtonText = P),
      (l.getRequestAppealRemediationOptionsRowText = N),
      (l.getNewsletterDSBDrawerTitle = M),
      (l.getNewsletterContactIPReporterDrawerTitle = w),
      (l.getNewsletterRemediationOptionsDrawerTitle = A),
      (l.getNewsletterDSAReportsDrawerTitle = F),
      (l.getNewsletterReportClosedNullNewsletterNameDescription = O),
      (l.getNewsletterReportPendingDescription = B),
      (l.getNewsletterReportSuccessDescription = W),
      (l.getNewsletterReportMessageLevelSuccessDescription = q),
      (l.getNewsletterResponseReportSuccessDescription = U),
      (l.getNewsletterResponseReportFailDescription = V),
      (l.getNewsletterResponseReportContentUnavailableDescription = H),
      (l.getNewsletterReportFailDescription = G),
      (l.getNewsletterReportMessageLevelFailDescription = z),
      (l.getNewsletterReportContentUnavailableDescription = j),
      (l.getNewsletterStatusReportSuccessDescription = K),
      (l.getNewsletterStatusReportFailDescription = Q),
      (l.getNewsletterStatusReportContentUnavailableDescription = X));
  },
  226,
);
