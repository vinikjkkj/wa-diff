__d(
  "WAWebCommonNewsletterIntegrityStrings",
  [
    "fbt",
    "WAWebCountriesUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    async function c(e) {
      var t = e || {},
        n = t.countryCode,
        r = t.isPreview,
        a = r === void 0 ? !0 : r,
        i;
      if (
        (n != null &&
          (i = await o("WAWebCountriesUtils").getCountryNameFromCountryCode(n)),
        i == null)
      ) {
        var l = o(
          "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
        ).getMaybeMyCountryCodeIso();
        ((i = await o("WAWebCountriesUtils").getCountryNameFromCountryCode(l)),
          i == null && (i = s._(/*BTDS*/ "")));
      }
      return a
        ? s._(/*BTDS*/ "", [s._param("country_name", i)])
        : s._(/*BTDS*/ "", [s._param("country_name", i)]);
    }
    function d(e) {
      return e.length > 1
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "", [s._param("country", e[0].countryName)]);
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(/*BTDS*/ "");
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(/*BTDS*/ "");
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "");
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "");
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(/*BTDS*/ "");
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return s._(/*BTDS*/ "");
    }
    ((G.displayName = G.name + " [from " + i.id + "]"),
      (l.getGeosuspendedInYourCountryString = c),
      (l.getGeosuspensionStringForChannelAlertsDrawer = d),
      (l.getWhyThisHappenedSectionTitleString = m),
      (l.getNewsletterAlertsDrawerTitle = p),
      (l.getNewsletterGenericViolationPolicyString = _),
      (l.deleteViolatingContentText = f),
      (l.getUpdateReviewCompletedString = g),
      (l.getStatusInReviewTitleString = h),
      (l.getStatusReviewCompletedString = y),
      (l.getProfilePictureDeletionInReviewTitleString = C),
      (l.getProfilePictureDeletionReviewCompletedString = b),
      (l.getAdminProfileRemovedTextForList = v),
      (l.getAdminProfileInReviewTitleString = S),
      (l.getAdminProfileReviewCompletedString = R),
      (l.getChannelReviewCompletedString = L),
      (l.getChannelInReviewTitleString = E),
      (l.getChannelInReviewString = k),
      (l.getRequestAppealButtonText = I),
      (l.getRequestAppealRemediationOptionsRowText = T),
      (l.getNewsletterDSBDrawerTitle = D),
      (l.getNewsletterContactIPReporterDrawerTitle = x),
      (l.getNewsletterRemediationOptionsDrawerTitle = $),
      (l.getNewsletterDSAReportsDrawerTitle = P),
      (l.getNewsletterReportClosedNullNewsletterNameDescription = N),
      (l.getNewsletterReportPendingDescription = M),
      (l.getNewsletterReportSuccessDescription = w),
      (l.getNewsletterReportMessageLevelSuccessDescription = A),
      (l.getNewsletterResponseReportSuccessDescription = F),
      (l.getNewsletterResponseReportFailDescription = O),
      (l.getNewsletterResponseReportContentUnavailableDescription = B),
      (l.getNewsletterReportFailDescription = W),
      (l.getNewsletterReportMessageLevelFailDescription = q),
      (l.getNewsletterReportContentUnavailableDescription = U),
      (l.getNewsletterStatusReportSuccessDescription = V),
      (l.getNewsletterStatusReportFailDescription = H),
      (l.getNewsletterStatusReportContentUnavailableDescription = G));
  },
  226,
);
