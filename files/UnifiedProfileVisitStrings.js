__d(
  "UnifiedProfileVisitStrings",
  ["fbt", "GeoLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "https://www.facebook.com/business/help/1174990279685960",
      d = s._(/*BTDS*/ "Identity"),
      m = s._(/*BTDS*/ "Choose a Facebook Page for this ad."),
      p = s._(/*BTDS*/ "Business Portfolio"),
      _ = s._(/*BTDS*/ "Choose a portfolio to see its available ad assets."),
      f = s._(
        /*BTDS*/ "Business portfolios let you manage your business assets together and securely assign other people access to them.",
      ),
      g = s._(/*BTDS*/ "Choosing a Facebook Page"),
      h = s._(
        /*BTDS*/ "You can select any Page that you manage with this ad account. Your selected Page and any connected Instagram accounts will represent your business in your ads.",
      ),
      y = s._(
        /*BTDS*/ "Pages and Instagram accounts connected to your selected Page will be available for you to choose as your ad\u2019s destination. The Page admin can manage connections in Page settings.",
      ),
      C = s._(/*BTDS*/ "Destination"),
      b = s._(/*BTDS*/ "Facebook Page"),
      v = s._(/*BTDS*/ "Instagram profile"),
      S = function () {
        return s._(
          /*BTDS*/ "Tell us where to send people immediately after they tap or click your ad. You can select multiple destinations to reach more people. {learn more link}",
          [
            s._param(
              "learn more link",
              u.jsx(r("GeoLink.react"), {
                href: c,
                target: "_blank",
                children: "Learn more",
              }),
            ),
          ],
        );
      },
      R = s._(/*BTDS*/ "This destination requires a Facebook Page."),
      L = s._(
        /*BTDS*/ "To select Instagram as your destination, connect your Instagram profile.",
      ),
      E = s._(/*BTDS*/ "At least one destination needs to be selected."),
      k = s._(/*BTDS*/ "Visit Page"),
      I = s._(/*BTDS*/ "Visit Facebook Page");
    ((l.IDENTITY_SECTION_LABEL = d),
      (l.IDENTITY_SECTION_DESCRIPTION = m),
      (l.BUSINESS_PORTFOLIO_SECTION_LABEL = p),
      (l.BUSINESS_PORTFOLIO_SECTION_DESCRIPTION = _),
      (l.BUSINESS_PORTFOLIO_SECTION_TOOLTIP = f),
      (l.IDENTITY_TOOLTIP_TITLE = g),
      (l.IDENTITY_SECTION_TIP_PART_1 = h),
      (l.IDENTITY_SECTION_TIP_PART_2 = y),
      (l.DESTINATION_SECTION_LABEL = C),
      (l.FACEBOOK_DESTINATION_LABEL = b),
      (l.INSTAGRAM_DESTINATION_LABEL = v),
      (l.getDestinationSectionDescription = S),
      (l.PAGE_REQUIREMENT_STRING = R),
      (l.DISABLED_INSTAGRAM_DESTINATION_STRING = L),
      (l.SELECT_AT_LEAST_ONE_DESTINATION_STRING = E),
      (l.VISIT_PAGE = k),
      (l.VISIT_FACEBOOK_PAGE = I));
  },
  226,
);
