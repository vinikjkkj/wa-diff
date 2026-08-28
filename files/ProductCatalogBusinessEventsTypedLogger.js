__d(
  "ProductCatalogBusinessEventsTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ProductCatalogBusinessEventsLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ProductCatalogBusinessEventsLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ProductCatalogBusinessEventsLoggerConfig",
              this.$1,
              { signal: !0 },
              t,
            );
          }),
          (t.clear = function () {
            return ((this.$1 = {}), this);
          }),
          (t.getData = function () {
            return babelHelpers.extends({}, this.$1);
          }),
          (t.updateData = function (t) {
            return ((this.$1 = babelHelpers.extends({}, this.$1, t)), this);
          }),
          (t.setActionData = function (t) {
            return (
              (this.$1.action_data = n("GeneratedLoggerUtils").serializeMap(t)),
              this
            );
          }),
          (t.setActionElement = function (t) {
            return ((this.$1.action_element = t), this);
          }),
          (t.setAdAccountID = function (t) {
            return ((this.$1.ad_account_id = t), this);
          }),
          (t.setAdAccountRelationship = function (t) {
            return ((this.$1.ad_account_relationship = t), this);
          }),
          (t.setAdcampaignGroupID = function (t) {
            return ((this.$1.adcampaign_group_id = t), this);
          }),
          (t.setAddItemsUIInputMethod = function (t) {
            return ((this.$1.add_items_ui_input_method = t), this);
          }),
          (t.setCallsite = function (t) {
            return ((this.$1.callsite = t), this);
          }),
          (t.setCatalogHomeTab = function (t) {
            return ((this.$1.catalog_home_tab = t), this);
          }),
          (t.setCatalogID = function (t) {
            return ((this.$1.catalog_id = t), this);
          }),
          (t.setCatalogSubTab = function (t) {
            return ((this.$1.catalog_sub_tab = t), this);
          }),
          (t.setCategory = function (t) {
            return ((this.$1.category = t), this);
          }),
          (t.setClientAppID = function (t) {
            return ((this.$1.client_app_id = t), this);
          }),
          (t.setClientPerformanceTime = function (t) {
            return ((this.$1.client_performance_time = t), this);
          }),
          (t.setClientTime = function (t) {
            return ((this.$1.client_time = t), this);
          }),
          (t.setCssStack = function (t) {
            return (
              (this.$1.css_stack = n("GeneratedLoggerUtils").serializeVector(
                t,
              )),
              this
            );
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setEventSourcesTab = function (t) {
            return ((this.$1.event_sources_tab = t), this);
          }),
          (t.setExternalURI = function (t) {
            return ((this.$1.external_uri = t), this);
          }),
          (t.setFeedFileError = function (t) {
            return ((this.$1.feed_file_error = t), this);
          }),
          (t.setFeedFileName = function (t) {
            return ((this.$1.feed_file_name = t), this);
          }),
          (t.setFeedFileSize = function (t) {
            return ((this.$1.feed_file_size = t), this);
          }),
          (t.setFeedID = function (t) {
            return ((this.$1.feed_id = t), this);
          }),
          (t.setFeedName = function (t) {
            return ((this.$1.feed_name = t), this);
          }),
          (t.setFeedNameError = function (t) {
            return ((this.$1.feed_name_error = t), this);
          }),
          (t.setFeedURI = function (t) {
            return ((this.$1.feed_uri = t), this);
          }),
          (t.setFeedURIError = function (t) {
            return ((this.$1.feed_uri_error = t), this);
          }),
          (t.setFileoptionsDefaultCurrency = function (t) {
            return ((this.$1.fileoptions_default_currency = t), this);
          }),
          (t.setFileoptionsDelimiter = function (t) {
            return ((this.$1.fileoptions_delimiter = t), this);
          }),
          (t.setFileoptionsEncoding = function (t) {
            return ((this.$1.fileoptions_encoding = t), this);
          }),
          (t.setFileoptionsUseQuotedFields = function (t) {
            return ((this.$1.fileoptions_use_quoted_fields = t), this);
          }),
          (t.setInputMethod = function (t) {
            return ((this.$1.input_method = t), this);
          }),
          (t.setIsErrorExpected = function (t) {
            return ((this.$1.is_error_expected = t), this);
          }),
          (t.setNavSource = function (t) {
            return ((this.$1.nav_source = t), this);
          }),
          (t.setPageURI = function (t) {
            return ((this.$1.page_uri = t), this);
          }),
          (t.setPasswordError = function (t) {
            return ((this.$1.password_error = t), this);
          }),
          (t.setReactStack = function (t) {
            return (
              (this.$1.react_stack = n("GeneratedLoggerUtils").serializeVector(
                t,
              )),
              this
            );
          }),
          (t.setSessionID = function (t) {
            return ((this.$1.session_id = t), this);
          }),
          (t.setTimeTakenInMs = function (t) {
            return ((this.$1.time_taken_in_ms = t), this);
          }),
          (t.setUpdateOnly = function (t) {
            return ((this.$1.update_only = t), this);
          }),
          (t.setUploadDateDate = function (t) {
            return ((this.$1.upload_date_date = t), this);
          }),
          (t.setUploadDateTime = function (t) {
            return ((this.$1.upload_date_time = t), this);
          }),
          (t.setUploadFrequency = function (t) {
            return ((this.$1.upload_frequency = t), this);
          }),
          (t.setUploadScheduleDayOfWeek = function (t) {
            return ((this.$1.upload_schedule_day_of_week = t), this);
          }),
          (t.setUploadScheduleTimeInSeconds = function (t) {
            return ((this.$1.upload_schedule_time_in_seconds = t), this);
          }),
          (t.setUploadSessionID = function (t) {
            return ((this.$1.upload_session_id = t), this);
          }),
          (t.setUsernameError = function (t) {
            return ((this.$1.username_error = t), this);
          }),
          (t.setWebSessionID = function (t) {
            return ((this.$1.web_session_id = t), this);
          }),
          e
        );
      })(),
      l = {
        action_data: !0,
        action_element: !0,
        ad_account_id: !0,
        ad_account_relationship: !0,
        adcampaign_group_id: !0,
        add_items_ui_input_method: !0,
        callsite: !0,
        catalog_home_tab: !0,
        catalog_id: !0,
        catalog_sub_tab: !0,
        category: !0,
        client_app_id: !0,
        client_performance_time: !0,
        client_time: !0,
        css_stack: !0,
        event: !0,
        event_sources_tab: !0,
        external_uri: !0,
        feed_file_error: !0,
        feed_file_name: !0,
        feed_file_size: !0,
        feed_id: !0,
        feed_name: !0,
        feed_name_error: !0,
        feed_uri: !0,
        feed_uri_error: !0,
        fileoptions_default_currency: !0,
        fileoptions_delimiter: !0,
        fileoptions_encoding: !0,
        fileoptions_use_quoted_fields: !0,
        input_method: !0,
        is_error_expected: !0,
        nav_source: !0,
        page_uri: !0,
        password_error: !0,
        react_stack: !0,
        session_id: !0,
        time_taken_in_ms: !0,
        update_only: !0,
        upload_date_date: !0,
        upload_date_time: !0,
        upload_frequency: !0,
        upload_schedule_day_of_week: !0,
        upload_schedule_time_in_seconds: !0,
        upload_session_id: !0,
        username_error: !0,
        web_session_id: !0,
      };
    i.default = e;
  },
  66,
);
