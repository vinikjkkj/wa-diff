__d(
  "AutomatedShoppingAdsConstants",
  ["AdsPersonalSettingsBusinessConstraintsMinAgeConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "asa_existing_customers_updated",
      s = "asa_custom_audience_info_updated",
      u = 100,
      c = "0",
      d = ["ad_schedule_start_date_field_path"],
      m = ["ad_schedule_end_date_field_path"],
      p = 1727938800;
    ((l.EXISTING_CUSTOMERS_UPDATED_STORAGE_KEY = e),
      (l.CUSTOM_AUDIENCE_INFO_UPDATED_STORAGE_KEY = s),
      (l.EXISTING_CUSTOMERS_BUDGET_PERCENTAGE_FOR_HEC = u),
      (l.ACCOUNT_CONTROL_DEFAULT_AGE_MIN = r(
        "AdsPersonalSettingsBusinessConstraintsMinAgeConstants",
      ).DEFAULT_MIN_AGE_ACCOUNT_CONTROL),
      (l.AD_SCHEDULE_DEFAULT_TIME = c),
      (l.AD_SCHEDULE_START_DATE_FIELD_PATH = d),
      (l.AD_SCHEDULE_END_DATE_FIELD_PATH = m),
      (l.UNIX_TIMESTAMP_OCT_3_2024 = p));
  },
  98,
);
