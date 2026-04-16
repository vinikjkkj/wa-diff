__d(
  "WAWebQuickPromotionCollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebConsumerFetchQuickPromotions",
    "WAWebFetchQuickPromotions",
    "WAWebL10N",
    "WAWebMobilePlatforms",
    "WAWebQuickPromotionEligibilityEvaluator",
    "WAWebQuickPromotionGating",
    "WAWebQuickPromotionModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.localeChangeListener = null),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.refreshPromotions = function (n) {
            (this.reset(),
              this.initializeFromCache(
                n.map(function (e) {
                  return new (o(
                    "WAWebQuickPromotionModel",
                  ).QuickPromotionModel)({ id: e.id, promotion: e });
                }),
              ),
              this.localeChangeListener == null &&
                o("WAWebQuickPromotionGating").qpGraphQLEnabled() &&
                (this.localeChangeListener = r("WAWebL10N").on(
                  "locale_change",
                  function () {
                    (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "QuickPromotionCollectionImpl: locale changed, refetching",
                        ])),
                    ),
                      o("WAWebMobilePlatforms").isSMB()
                        ? o("WAWebFetchQuickPromotions").fetchQuickPromotions()
                        : o(
                            "WAWebConsumerFetchQuickPromotions",
                          ).fetchConsumerQuickPromotions());
                  },
                )),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "QuickPromotionCollectionImpl: cache refreshed",
                  ])),
              ));
          }),
          (a.bestPromotionForSurface = function (t) {
            return this.findFirst(function (e) {
              var n = e.promotion;
              return o(
                "WAWebQuickPromotionEligibilityEvaluator",
              ).checkPromotionEligible(n, t);
            });
          }),
          (a.allEligiblePromotionsForSurface = function (t) {
            return this.filter(function (e) {
              var n = e.promotion;
              return o(
                "WAWebQuickPromotionEligibilityEvaluator",
              ).checkPromotionEligible(n, t);
            });
          }),
          (a.getPromotionWithLastImpressionOnSurface = function (t) {
            return this.reduce(function (e, n) {
              var r = n.promotion,
                o = r.surfaceId;
              if (t !== o) return e;
              var a = r.tracking.lastImpressionTs;
              return a == null
                ? e
                : e == null
                  ? { promotion: n, lastImpressionTs: a }
                  : e.lastImpressionTs >= a
                    ? e
                    : { promotion: n, lastImpressionTs: a };
            }, null);
          }),
          (a.promotionDismissed = function (t) {
            var e = this.get(t);
            if (e == null) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "promotionDismissed: promotion not found",
                  ])),
              );
              return;
            }
            (e.dismiss(), this.trigger("change", e, this));
          }),
          (a.promotionPrimaryActionClicked = function (t) {
            var e = this.get(t);
            if (e == null) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "promotionPrimaryActionClicked: promotion not found",
                  ])),
              );
              return;
            }
            e.primaryActionClick();
          }),
          (a.promotionShown = function (t) {
            var e = this.get(t);
            if (e == null) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "promotionShown: promotion not found",
                  ])),
              );
              return;
            }
            e.impression();
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    m.model = o("WAWebQuickPromotionModel").QuickPromotionModel;
    var p = new m();
    l.QuickPromotionCollection = p;
  },
  98,
);
