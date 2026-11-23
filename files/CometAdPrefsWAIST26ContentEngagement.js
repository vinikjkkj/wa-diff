__d(
  "CometAdPrefsWAIST26ContentEngagement",
  [
    "fbt",
    "CometAdPrefsWAIST26ContentUtils",
    "FBTWAIST26ConnectionType$FbtEnum",
    "FBTWAIST26FriendsConnectionType$FbtEnum",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      u = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      c = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      d = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      m = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      p = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      _ = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      f = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      g = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      h = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      y = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_eca",
            ),
          ),
        ]);
      },
      C = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      b = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      v = function (t, n) {
        return s._(/*BTDS*/ "", [
          s._enum(t, r("FBTWAIST26ConnectionType$FbtEnum")),
          s._param(
            "connection name (e.g. app name, page name, or event name)",
            n,
          ),
        ]);
      },
      S = function (t, n) {
        return s._(/*BTDS*/ "", [
          s._enum(t, r("FBTWAIST26FriendsConnectionType$FbtEnum")),
          s._param("connection name (e.g. app name or page name)", n),
        ]);
      },
      R = function (t) {
        var e = t.length;
        switch (e) {
          case 1:
            return s._(/*BTDS*/ "", [s._param("first interest name", t[0])]);
          case 2:
            return s._(/*BTDS*/ "", [
              s._param("first interest name", t[0]),
              s._param("second interest name", t[1]),
            ]);
          default:
            return s._(/*BTDS*/ "", [
              s._param("first interest name", t[0]),
              s._param("second interest name", t[1]),
            ]);
        }
      },
      L = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_interest",
            ),
          ),
        ]);
      },
      E = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_interest",
            ),
          ),
        ]);
      },
      k = function () {
        return s._(/*BTDS*/ "");
      },
      I = function () {
        return s._(/*BTDS*/ "");
      },
      T = function () {
        return s._(/*BTDS*/ "");
      },
      D = function (t) {
        return (
          t === void 0 && (t = !1),
          t ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "")
        );
      },
      x = function () {
        return s._(/*BTDS*/ "");
      },
      $ = function () {
        return s._(/*BTDS*/ "");
      };
    ((l.getLandingPageEngagementCAEventTitle = e),
      (l.getDetailPageEngagementCAEventTitle = u),
      (l.getLandingPageEngagementCAIGProfileTitle = c),
      (l.getDetailPageEngagementCAIGProfileTitle = d),
      (l.getLandingPageEngagementCALeadGenTitle = m),
      (l.getDetailPageEngagementCALeadGenTitle = p),
      (l.getLandingPageEngagementCAPageTitle = _),
      (l.getDetailPageEngagementCAPageTitle = f),
      (l.getLandingPageEngagementCAVideoTitle = g),
      (l.getDetailPageEngagementCAVideoTitle = h),
      (l.getDetailPageEngagementCAHowLearnParagraph = y),
      (l.getLandingPageFacebookWifiCATitle = C),
      (l.getDetailPageFacebookWifiCATitle = b),
      (l.getLandingPageConnectionTitle = v),
      (l.getLandingPageFriendsOfConnectionTitle = S),
      (l.getLandingPageInterestsTitle = R),
      (l.getDetailInterestPageParagraph = L),
      (l.getDetailInterestPageParagraphForUTC = E),
      (l.getDetailInterestPageActionParagraph = k),
      (l.getDetailInterestPageActionParagraphForUTC = I),
      (l.getDetailInterestPageActionSubParagraph = T),
      (l.getDetailInterestPageActionSubParagraphForUTC = D),
      (l.getDetailPageReviewInterestTitle = x),
      (l.getDetailPageReviewInterestTitleForUTC = $));
  },
  226,
);
