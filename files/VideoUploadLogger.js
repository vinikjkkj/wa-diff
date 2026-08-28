__d(
  "VideoUploadLogger",
  [
    "Banzai",
    "CurrentUser",
    "VideoUploadLoggerEvents",
    "VideoUploadLoggingConfig.experimental",
    "logVideoUploadViaFalco",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = babelHelpers.extends(
        {
          BANZAI_GK: "videos",
          BANZAI_ROUTE: "video_waterfall",
          SOURCE_SIMPLE: "simple",
          SOURCE_COMPOSER: "composer",
        },
        (e = o("VideoUploadLoggerEvents")).VideoUploadLoggerEvents,
      ),
      u = new Set([
        e.VideoUploadLoggerEvents.EVENT_STARTED_FLOW,
        e.VideoUploadLoggerEvents.EVENT_FINISHED_FLOW,
        e.VideoUploadLoggerEvents.EVENT_FAILED_FLOW,
        e.VideoUploadLoggerEvents.EVENT_CANCELED_FLOW,
      ]),
      c = (function () {
        function e(t) {
          ((this.$1 = t.source),
            (this.$2 = t.composer_dialog_version),
            (this.$3 = t.waterfall_id),
            (this.$4 = t.ad_account_id),
            (this.$5 = t.target_id),
            (this.$6 = t.delay),
            (this.$7 = {}),
            (this.$8 = t.is_chunked_upload),
            (this.$9 = t.actor_id),
            (this.$10 = t.composer_entry_point_ref),
            (this.$11 = t.composer_work_shared_draft_mode),
            (this.$12 = t.is_remote_upload),
            (this.$13 = t.container_type),
            (this.$14 = t.has_file_been_replaced),
            (this.$15 = t.composer_session_id),
            (this.$16 = t.creative_tools),
            (this.$17 = t.asset_id),
            (this.$18 = r("CurrentUser").getAppID()),
            (this.$19 =
              !t.reported_by_notifier &&
              e.shouldSendFlowEventsViaNotifier({
                source_type: t.source,
                composer_entry_point_ref: t.composer_entry_point_ref,
              })));
        }
        e.shouldSendFlowEventsViaNotifier = function (t) {
          return !!(
            r("VideoUploadLoggingConfig.experimental")
              .FLOW_VIA_NOTIFIER_COMPOSERS || []
          ).find(function (e) {
            return (
              e.source_type === t.source_type &&
              e.composer_entry_point_ref === t.composer_entry_point_ref
            );
          });
        };
        var t = e.prototype;
        return (
          (t.logEvent = function (t, n) {
            if (!(this.$19 && u.has(t))) {
              var e = babelHelpers.extends({}, n);
              (e.elapsed_time == null &&
                (t.indexOf("started") !== -1
                  ? (this.$7[t] = Date.now())
                  : t.indexOf("finished") !== -1
                    ? (e.elapsed_time = this.$20(t, "finished"))
                    : t.indexOf("canceled") !== -1
                      ? (e.elapsed_time = this.$20(t, "canceled"))
                      : t.indexOf("failed") !== -1 &&
                        (e.elapsed_time = this.$20(t, "failed"))),
                (e.event = t),
                (e.source = this.$1),
                (e.composer_dialog_version =
                  e.composer_dialog_version || this.$2),
                (e.waterfall_id = this.$3),
                (e.ad_account_id = this.$4),
                (e.target_id = this.$5),
                (e.is_chunked_upload = this.$8),
                (e.actor_id = this.$9),
                (e.composer_entry_point_ref = this.$10),
                (e.composer_work_shared_draft_mode = this.$11),
                (e.is_remote_upload = this.$12),
                (e.container_type = this.$13),
                (e.has_file_been_replaced = this.$14),
                (e.trigger_time = Date.now()),
                (e.composer_session_id = this.$15),
                (e.asset_id = this.$17),
                (e.app_id = this.$18),
                r("logVideoUploadViaFalco")(e));
            }
          }),
          (t.postOnShutdown = function (t) {
            return r("Banzai").subscribe(r("Banzai").SHUTDOWN, t);
          }),
          (t.getWaterfallID = function () {
            return this.$3;
          }),
          (t.$20 = function (t, n) {
            var e = t.replace(n, "started"),
              r = this.$7[e];
            return r ? Date.now() - r : null;
          }),
          e
        );
      })();
    Object.assign(c, s);
    var d = c;
    l.default = d;
  },
  98,
);
