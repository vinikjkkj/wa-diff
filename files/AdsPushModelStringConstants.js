__d(
  "AdsPushModelStringConstants",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx("b", { children: s._(/*BTDS*/ "related media") });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return u.jsx("b", { children: s._(/*BTDS*/ "Ad Creative") });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = function () {
      return s._(/*BTDS*/ "Use your new upload as {related media string}", [
        s._param("related media string", c()),
      ]);
    };
    function p(e, t) {
      return s._(
        /*BTDS*/ "{number of opt in push ads} of {number of total push ads} ads selected",
        [
          s._param("number of opt in push ads", e),
          s._param("number of total push ads", t),
        ],
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Select all");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Ad name");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Ad set name");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Campaign");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Destination");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Primary");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Headline");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "View this ad");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(
        /*BTDS*/ "Your media will be displayed under {related media string} within the {ad creative string} card and will also be visible in the preview. If you need to make any changes, you can do so by returning to this ad after it has been published.",
        [
          s._param("related media string", c()),
          s._param("ad creative string", d()),
        ],
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "original ad");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t) {
      return s._(
        /*BTDS*/ "Related media was added to this ad from {source_ad_name} and can be edited in the {original_ad_link}.",
        [
          s._param("source_ad_name", u.jsx("b", { children: e })),
          s._param("original_ad_link", t),
        ],
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"{Published items description} {Push ads count} ads are now using your new upload.","_1":"{Published items description} {Push ads count} ad is now using your new upload."}',
        [
          s._plural(t),
          s._param("Published items description", e),
          s._param("Push ads count", t),
        ],
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return e
        ? s._(/*BTDS*/ "PUBLISHING CHANGES...")
        : s._(/*BTDS*/ "Publishing changes...");
    }
    function I() {
      return s._(
        /*BTDS*/ "Use your uploaded media in other ads with the same messaging",
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "12.9\u0025 higher conversion rate");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      return s._(
        /*BTDS*/ "You could get a {conversion rate highlight} by using uploaded media from this ad in other ads:",
        [s._param("conversion rate highlight", e)],
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      return s._(/*BTDS*/ "Apply to {recommended ads count} ads", [
        s._param("recommended ads count", e),
      ]);
    }
    ((x.displayName = x.name + " [from " + i.id + "]"),
      (l.getPushModelEntryTitle = m),
      (l.getPushModelEntryDescription = p),
      (l.getPushModelSelectAllCheckboxLabel = _),
      (l.getPushModelPopoverAdNameLabel = f),
      (l.getPushModelPopoverCampaignNameLabel = g),
      (l.getPushModelPopoverCampaignLabel = h),
      (l.getPushModelPopoverDestinationLabel = y),
      (l.getPushModelPopoverPrimaryLabel = C),
      (l.getPushModelPopoverHeadlineLabel = b),
      (l.getPushModelPopoverViewAdLabel = v),
      (l.getPushModelPopoverDescription = S),
      (l.getPushModelOriginalAdText = R),
      (l.getPushModelDestinationEditBannerDescription = L),
      (l.getPushModelPublishSuccessBody = E),
      (l.getPushModelPublishProgressLabel = k),
      (l.getPushModelGuidanceHeader = I),
      (l.getPushModelConversionRateHighlight = T),
      (l.getPushModelGuidanceDescription = D),
      (l.getPushModelGuidanceCTA = x));
  },
  226,
);
