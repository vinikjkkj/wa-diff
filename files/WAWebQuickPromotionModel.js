__d(
  "WAWebQuickPromotionModel",
  [
    "WATimeUtils",
    "WAWebBaseModel",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQuickPromotionCustomHandlingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.promotion = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.dismiss = function () {
          var e = this.promotion.tracking;
          ((e.dismisses += 1),
            (e.lastDismissTs = o("WATimeUtils").unixTime()),
            o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .fireAndForget(
                o(
                  "WAWebPersistedJobDefinitions",
                ).jobSerializers.dismissQuickPromotion(this.promotion.id),
              ),
            o(
              "WAWebQuickPromotionCustomHandlingUtils",
            ).maybeExecuteQuickPromotionCustomHandlingSpec(
              this.promotion,
              "dismiss",
            ));
        }),
        (n.primaryActionClick = function () {
          var e = this.promotion.tracking;
          ((e.primaryClicks += 1),
            (e.lastPrimaryClickTs = o("WATimeUtils").unixTime()),
            o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .fireAndForget(
                o(
                  "WAWebPersistedJobDefinitions",
                ).jobSerializers.primaryActionClickInQuickPromotion(
                  this.promotion.id,
                ),
              ),
            o(
              "WAWebQuickPromotionCustomHandlingUtils",
            ).maybeExecuteQuickPromotionCustomHandlingSpec(
              this.promotion,
              "primaryActionClick",
            ));
        }),
        (n.impression = function () {
          var e = this.promotion,
            t = e.tracking,
            n = t.lastImpressionTs;
          if (n != null) {
            var r = e.data.qpConfigEligibilityDurationMs;
            if (
              o("WATimeUtils").castUnixTimeToMillisTime(n) + r >=
              o("WATimeUtils").millisTime()
            )
              return;
          }
          ((t.impressions += 1),
            (t.lastImpressionTs = o("WATimeUtils").unixTime()),
            o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .fireAndForget(
                o(
                  "WAWebPersistedJobDefinitions",
                ).jobSerializers.impressionOnQuickPromotion(e.id),
              ),
            o(
              "WAWebQuickPromotionCustomHandlingUtils",
            ).maybeExecuteQuickPromotionCustomHandlingSpec(
              this.promotion,
              "impression",
            ));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "QuickPromotion";
    var s = o("WAWebBaseModel").defineModel(e);
    l.QuickPromotionModel = s;
  },
  98,
);
