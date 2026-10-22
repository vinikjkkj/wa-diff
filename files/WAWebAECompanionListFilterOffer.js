__d(
  "WAWebAECompanionListFilterOffer",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebAEOnboarded",
    "WAWebCTWAConstants",
    "WAWebLabelCollection",
    "WAWebMobilePlatforms",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebAECompanionDialogs.react",
      ).__setRef("WAWebAECompanionListFilterOffer");
    function u(t) {
      var n;
      if (o("WAWebMobilePlatforms").isSMB()) {
        var a =
          t != null
            ? (n = o("WAWebLabelCollection").LabelCollection.get(t)) == null
              ? void 0
              : n.predefinedId
            : null;
        (a !== o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID &&
          a !== o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) ||
          o("WAWebAEOnboarded").getCanonicalAEOnboardedStatus() !== !1 ||
          s
            .load()
            .then(function (e) {
              return e.maybeOpenAECompanionOnboardingNuxForListFilter();
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeOfferAECompanionForListFilter: failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("ae-companion-list-filter-offer-failed");
            });
      }
    }
    l.maybeOfferAECompanionForListFilter = u;
  },
  98,
);
