__d(
  "AdsAdgroupScheduleValidator",
  [
    "errorCode",
    "errorDesc",
    "AdSchedulingStrings",
    "AdSchedulingUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAbstractValidator",
    "AdsError",
    "AutomatedShoppingAdsConstants",
    "DateConsts",
    "DateTime",
    "unixTimestampFromDate",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = 1,
      c = Object.freeze({
        account: { timezone_id: null },
        adgroup: { ad_schedule_start_time: null, ad_schedule_end_time: null },
        adgroupLiveFields: {
          ad_schedule_start_time: null,
          ad_schedule_end_time: null,
        },
        campaign: { start_time: null, end_time: null },
        campaignGroup: null,
      }),
      d = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getName = function () {
            return i.id;
          }),
          (a.getDependencies = function () {
            return c;
          }),
          (a.shouldValidate = function (t) {
            var e = t.account,
              n = t.campaignGroup;
            return !e || !n
              ? !1
              : o(
                  "AdsAPICampaignGroupRecordUtils",
                ).isAppOrSalesODAXOrPreODAXObjective(n);
          }),
          (a.validate = function (n) {
            var t = n.account,
              a = n.adgroup,
              i = n.adgroupLiveFields,
              l = n.campaign,
              s = n.campaignGroup,
              u = [],
              c = this.$AdsAdgroupScheduleValidator$p_1(
                a.ad_schedule_start_time,
              ),
              d = this.$AdsAdgroupScheduleValidator$p_1(a.ad_schedule_end_time),
              m = this.$AdsAdgroupScheduleValidator$p_1(
                i == null ? void 0 : i.ad_schedule_start_time,
              ),
              p = this.$AdsAdgroupScheduleValidator$p_1(
                i == null ? void 0 : i.ad_schedule_end_time,
              ),
              _ = this.$AdsAdgroupScheduleValidator$p_1(
                l == null ? void 0 : l.start_time,
              ),
              f = this.$AdsAdgroupScheduleValidator$p_1(
                l == null ? void 0 : l.end_time,
              ),
              g = (t == null ? void 0 : t.timezone_id) || e,
              h = r("DateTime").now(g).getUnixTimestampSeconds(),
              y = c != null && c !== m,
              C = d != null && d !== p,
              b =
                s != null
                  ? o("AdsAPICampaignGroupRecordUtils").isManualSalesOrApp(s)
                  : !1;
            return (
              y &&
                (c != null &&
                  c > 0 &&
                  c < h &&
                  u.push(this.$AdsAdgroupScheduleValidator$p_2()),
                m != null &&
                  m > 0 &&
                  c != null &&
                  c > 0 &&
                  c > m &&
                  m > h &&
                  m < h + 15 * o("DateConsts").SEC_PER_MIN &&
                  u.push(this.$AdsAdgroupScheduleValidator$p_3())),
              C &&
                (d != null &&
                  d > 0 &&
                  d < h &&
                  u.push(this.$AdsAdgroupScheduleValidator$p_4()),
                d != null &&
                  d > 0 &&
                  d < h + 15 * o("DateConsts").SEC_PER_MIN &&
                  (p == null || p === 0 || d < p) &&
                  u.push(this.$AdsAdgroupScheduleValidator$p_5())),
              c !== 0 &&
                d !== 0 &&
                (c != null &&
                  d != null &&
                  d < c &&
                  u.push(
                    this.$AdsAdgroupScheduleValidator$p_6(
                      new (r("DateTime"))(d, g),
                    ),
                  ),
                c != null &&
                  d != null &&
                  d < c + 30 * o("DateConsts").SEC_PER_MIN &&
                  u.push(this.$AdsAdgroupScheduleValidator$p_7())),
              y &&
                c != null &&
                c > 0 &&
                _ != null &&
                c < _ &&
                u.push(
                  this.$AdsAdgroupScheduleValidator$p_8(
                    b,
                    new (r("DateTime"))(_, g),
                  ),
                ),
              y &&
                c != null &&
                c > 0 &&
                f != null &&
                f > 0 &&
                c > f &&
                u.push(this.$AdsAdgroupScheduleValidator$p_9()),
              C &&
                d != null &&
                d > 0 &&
                f != null &&
                f > 0 &&
                d > f &&
                u.push(
                  this.$AdsAdgroupScheduleValidator$p_10(
                    b,
                    new (r("DateTime"))(f, g),
                  ),
                ),
              C &&
                d != null &&
                d > 0 &&
                _ != null &&
                d < _ &&
                u.push(this.$AdsAdgroupScheduleValidator$p_11()),
              u
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_1 = function (t) {
            var e = o("AdSchedulingUtils").hasSetAdScheduleDate(t) ? t : null;
            return e != null ? r("unixTimestampFromDate")(e) : null;
          }),
          (a.$AdsAdgroupScheduleValidator$p_2 = function () {
            return new (r("AdsError"))(
              3858130,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_START_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_4 = function () {
            return new (r("AdsError"))(
              3858131,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_END_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_3 = function () {
            return new (r("AdsError"))(
              3858136,
              o("AdSchedulingStrings")
                .AD_SCHEDULE_STARTING_TOO_SOON_ERROR_MESSAGE,
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_START_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_5 = function () {
            return new (r("AdsError"))(
              3858137,
              o("AdSchedulingStrings")
                .AD_SCHEDULE_ENDING_TOO_SOON_ERROR_MESSAGE,
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_END_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_6 = function (t) {
            return new (r("AdsError"))(
              3858132,
              o(
                "AdSchedulingStrings",
              ).getAdScheduleStartTimeMustBeBeforeEndTimeError(t),
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_START_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_8 = function (t, n) {
            return new (r("AdsError"))(
              3858134,
              o(
                "AdSchedulingStrings",
              ).getAdScheduleStartTimeOutsideCampaignScheduleError(t, n),
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_START_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_10 = function (t, n) {
            return new (r("AdsError"))(
              3858135,
              o(
                "AdSchedulingStrings",
              ).getAdScheduleEndTimeOutsideCampaignScheduleError(t, n),
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_END_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_9 = function () {
            return new (r("AdsError"))(
              3858156,
              u._(function (e, t) {
                return e._(/*BTDS*/ "", [
                  e._param("campaign_end_date", t.campaign_end_date),
                ]);
              }, {}),
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_START_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_START_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_11 = function () {
            return new (r("AdsError"))(
              3858157,
              u._(function (e, t) {
                return e._(/*BTDS*/ "", [
                  e._param("campaign_start_date", t.campaign_start_date),
                ]);
              }, {}),
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_END_DATE_FIELD_PATH,
              },
            );
          }),
          (a.$AdsAdgroupScheduleValidator$p_7 = function () {
            return new (r("AdsError"))(
              3858133,
              o("AdSchedulingStrings")
                .AD_SCHEDULE_DURATION_TOO_SHORT_ERROR_MESSAGE,
              {
                cta: o("AdSchedulingStrings").AD_SCHEDULE_EDIT_END_DATE_CTA,
                level: r("AdsError").Level.WARN,
                path: o("AutomatedShoppingAdsConstants")
                  .AD_SCHEDULE_END_DATE_FIELD_PATH,
              },
            );
          }),
          n
        );
      })(r("AdsAbstractValidator")),
      m = new d();
    l.default = m;
  },
  226,
);
