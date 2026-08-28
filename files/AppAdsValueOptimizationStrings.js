__d(
  "AppAdsValueOptimizationStrings",
  ["fbt", "GeoLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "https://www.facebook.com/business/help/330074040129013",
      d = "https://www.facebook.com/business/help/1382473436615209",
      m = function () {
        return s._(
          /*BTDS*/ "To choose {=m1}, you need to first set up a purchase or ad impression app event. {Business verification link}",
          [
            s._param(
              "Business verification link",
              u.jsx("div", {
                children: u.jsx(r("GeoLink.react"), {
                  href: c,
                  target: "_blank",
                  children: "More about eligibility requirements",
                }),
              }),
            ),
            s._implicitParam(
              "=m1",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "Maximize value of conversions"),
              }),
            ),
          ],
        );
      },
      p = function () {
        return s._(
          /*BTDS*/ "In-app {=m1} events need at least 15 clicks that led to purchases with values in the last 7 days. {newline1}{newline2} In-app {=m6} events need at least 15 ad impressions with at least 2 different values in the last 28 days. {newline3}{newline4} All events and values must come from a campaign that is currently running. {newline5}{newline6}{eligibility link}",
          [
            s._param("newline1", u.jsx("br", {})),
            s._param("newline2", u.jsx("br", {})),
            s._param("newline3", u.jsx("br", {})),
            s._param("newline4", u.jsx("br", {})),
            s._param("newline5", u.jsx("br", {})),
            s._param("newline6", u.jsx("br", {})),
            s._param(
              "eligibility link",
              u.jsx("div", {
                children: u.jsx(r("GeoLink.react"), {
                  href: d,
                  target: "_blank",
                  children: "See eligibility requirements",
                }),
              }),
            ),
            s._implicitParam(
              "=m1",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "purchase conversion"),
              }),
            ),
            s._implicitParam(
              "=m6",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "ad impression conversion"),
              }),
            ),
          ],
        );
      },
      _ = function () {
        return s._(
          /*BTDS*/ "In-app {=m1} events need at least 15 clicks that led to purchases with values in the last 7 days. {newline1}{newline2} All events and values must come from a campaign that is currently running. {newline3}{newline4}{eligibility link}",
          [
            s._param("newline1", u.jsx("br", {})),
            s._param("newline2", u.jsx("br", {})),
            s._param("newline3", u.jsx("br", {})),
            s._param("newline4", u.jsx("br", {})),
            s._param(
              "eligibility link",
              u.jsx("div", {
                children: u.jsx(r("GeoLink.react"), {
                  href: d,
                  target: "_blank",
                  children: "See eligibility requirements",
                }),
              }),
            ),
            s._implicitParam(
              "=m1",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "purchase conversion"),
              }),
            ),
          ],
        );
      },
      f = s._(/*BTDS*/ "In-app purchase"),
      g = s._(/*BTDS*/ "In-app ad impression"),
      h = function () {
        return s._(
          /*BTDS*/ "You can only set a ROAS goal when the {=m1} is {=m4}.",
          [
            s._implicitParam(
              "=m1",
              u.jsx("strong", { children: s._(/*BTDS*/ "Conversion event") }),
            ),
            s._implicitParam(
              "=m4",
              u.jsx("strong", { children: s._(/*BTDS*/ "In-app purchase") }),
            ),
          ],
        );
      };
    ((l.getAppAdsValueOptimizationDisableTooltipContent = m),
      (l.getIAAVOEligibilityTooltipContent = p),
      (l.getIAPVOEligibilityTooltipContent = _),
      (l.IN_APP_PURCHASE_EVENT_LABEL = f),
      (l.IN_APP_AD_IMPRESSION_EVENT_LABEL = g),
      (l.getBiddingEditorDisabledTooltipForInAppAdImpression = h));
  },
  226,
);
