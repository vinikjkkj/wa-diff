__d(
  "VideoAdsCreationTypedLogger",
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
              "logger:VideoAdsCreationLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:VideoAdsCreationLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:VideoAdsCreationLoggerConfig",
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
          (t.setAdAccountID = function (t) {
            return ((this.$1.ad_account_id = t), this);
          }),
          (t.setAdsCreateSessionKey = function (t) {
            return ((this.$1.ads_create_session_key = t), this);
          }),
          (t.setAPIAdFormat = function (t) {
            return ((this.$1.api_ad_format = t), this);
          }),
          (t.setAppID = function (t) {
            return ((this.$1.app_id = t), this);
          }),
          (t.setChunkBandwidth = function (t) {
            return ((this.$1.chunk_bandwidth = t), this);
          }),
          (t.setChunkSize = function (t) {
            return ((this.$1.chunk_size = t), this);
          }),
          (t.setClienttime = function (t) {
            return ((this.$1.clienttime = t), this);
          }),
          (t.setComposerEntryPointRef = function (t) {
            return ((this.$1.composer_entry_point_ref = t), this);
          }),
          (t.setConnectionClass = function (t) {
            return ((this.$1.connection_class = t), this);
          }),
          (t.setCopyConversionOptions = function (t) {
            return (
              (this.$1.copy_conversion_options = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setCreatorProduct = function (t) {
            return ((this.$1.creator_product = t), this);
          }),
          (t.setDuration = function (t) {
            return ((this.$1.duration = t), this);
          }),
          (t.setElapsedTime = function (t) {
            return ((this.$1.elapsed_time = t), this);
          }),
          (t.setError = function (t) {
            return ((this.$1.error = t), this);
          }),
          (t.setErrorCode = function (t) {
            return ((this.$1.error_code = t), this);
          }),
          (t.setErrorDescription = function (t) {
            return ((this.$1.error_description = t), this);
          }),
          (t.setErrorDomain = function (t) {
            return ((this.$1.error_domain = t), this);
          }),
          (t.setErrorInner = function (t) {
            return ((this.$1.error_inner = t), this);
          }),
          (t.setErrorInnerCode = function (t) {
            return ((this.$1.error_inner_code = t), this);
          }),
          (t.setErrorInnerDescription = function (t) {
            return ((this.$1.error_inner_description = t), this);
          }),
          (t.setErrorTrace = function (t) {
            return ((this.$1.error_trace = t), this);
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setHasFileBeenReplaced = function (t) {
            return ((this.$1.has_file_been_replaced = t), this);
          }),
          (t.setIsSpherical = function (t) {
            return ((this.$1.is_spherical = t), this);
          }),
          (t.setNewCampaignID = function (t) {
            return ((this.$1.new_campaign_id = t), this);
          }),
          (t.setNewObjective = function (t) {
            return ((this.$1.new_objective = t), this);
          }),
          (t.setNewObjectiveStr = function (t) {
            return ((this.$1.new_objective_str = t), this);
          }),
          (t.setNewOptimizationGoal = function (t) {
            return ((this.$1.new_optimization_goal = t), this);
          }),
          (t.setNewOptimizationGoalStr = function (t) {
            return ((this.$1.new_optimization_goal_str = t), this);
          }),
          (t.setOldCampaignID = function (t) {
            return ((this.$1.old_campaign_id = t), this);
          }),
          (t.setOldObjective = function (t) {
            return ((this.$1.old_objective = t), this);
          }),
          (t.setOldObjectiveStr = function (t) {
            return ((this.$1.old_objective_str = t), this);
          }),
          (t.setOldOptimizationGoal = function (t) {
            return ((this.$1.old_optimization_goal = t), this);
          }),
          (t.setOldOptimizationGoalStr = function (t) {
            return ((this.$1.old_optimization_goal_str = t), this);
          }),
          (t.setOriginalFileSize = function (t) {
            return ((this.$1.original_file_size = t), this);
          }),
          (t.setPassedDuplicationGks = function (t) {
            return (
              (this.$1.passed_duplication_gks = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setRequestManagerState = function (t) {
            return ((this.$1.request_manager_state = t), this);
          }),
          (t.setRetries = function (t) {
            return ((this.$1.retries = t), this);
          }),
          (t.setServerResponse = function (t) {
            return ((this.$1.server_response = t), this);
          }),
          (t.setServerRetries = function (t) {
            return ((this.$1.server_retries = t), this);
          }),
          (t.setSourceHeight = function (t) {
            return ((this.$1.source_height = t), this);
          }),
          (t.setSourceType = function (t) {
            return ((this.$1.source_type = t), this);
          }),
          (t.setSourceWidth = function (t) {
            return ((this.$1.source_width = t), this);
          }),
          (t.setSpinnerID = function (t) {
            return ((this.$1.spinner_id = t), this);
          }),
          (t.setSpinnerName = function (t) {
            return ((this.$1.spinner_name = t), this);
          }),
          (t.setSpinnerSource = function (t) {
            return ((this.$1.spinner_source = t), this);
          }),
          (t.setTriggerTime = function (t) {
            return ((this.$1.trigger_time = t), this);
          }),
          (t.setUploadDomain = function (t) {
            return ((this.$1.upload_domain = t), this);
          }),
          (t.setUploadMethod = function (t) {
            return ((this.$1.upload_method = t), this);
          }),
          (t.setVideoID = function (t) {
            return ((this.$1.video_id = t), this);
          }),
          (t.setWaterfallID = function (t) {
            return ((this.$1.waterfall_id = t), this);
          }),
          e
        );
      })(),
      l = {
        ad_account_id: !0,
        ads_create_session_key: !0,
        api_ad_format: !0,
        app_id: !0,
        chunk_bandwidth: !0,
        chunk_size: !0,
        clienttime: !0,
        composer_entry_point_ref: !0,
        connection_class: !0,
        copy_conversion_options: !0,
        creator_product: !0,
        duration: !0,
        elapsed_time: !0,
        error: !0,
        error_code: !0,
        error_description: !0,
        error_domain: !0,
        error_inner: !0,
        error_inner_code: !0,
        error_inner_description: !0,
        error_trace: !0,
        event: !0,
        has_file_been_replaced: !0,
        is_spherical: !0,
        new_campaign_id: !0,
        new_objective: !0,
        new_objective_str: !0,
        new_optimization_goal: !0,
        new_optimization_goal_str: !0,
        old_campaign_id: !0,
        old_objective: !0,
        old_objective_str: !0,
        old_optimization_goal: !0,
        old_optimization_goal_str: !0,
        original_file_size: !0,
        passed_duplication_gks: !0,
        request_manager_state: !0,
        retries: !0,
        server_response: !0,
        server_retries: !0,
        source_height: !0,
        source_type: !0,
        source_width: !0,
        spinner_id: !0,
        spinner_name: !0,
        spinner_source: !0,
        trigger_time: !0,
        upload_domain: !0,
        upload_method: !0,
        video_id: !0,
        waterfall_id: !0,
      };
    i.default = e;
  },
  66,
);
