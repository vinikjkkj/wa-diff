__d(
  "VideoUploadFlowNotifier",
  [
    "Banzai",
    "MediaCancelledPostFlowFalcoEvent",
    "MediaFailedPostFlowFalcoEvent",
    "MediaFinishedPostFlowFalcoEvent",
    "MediaStartedPostFlowFalcoEvent",
    "Run",
    "SubscriptionsHandler",
    "VideoUploadLoggerEvents",
    "VideoUploadLoggerTyped",
    "WaterfallIDGenerator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        SUCCESSFUL: "successful",
        FAILED: "failed",
        CANCELED: "canceled",
        REQUESTED: "requested",
        STARTED: "started",
      }),
      s = (function () {
        function t() {
          this.$1 = {};
        }
        var n = t.prototype;
        return (
          (n.registerUpload = function (t, n) {
            var e = {
              isStarted: !1,
              isUploaded: !1,
              isCanceled: !1,
              isFailed: !1,
            };
            ((this.$1[String(n)] = e),
              t.subscribe("upload-started", function () {
                e.isStarted = !0;
              }),
              t.subscribe("upload-canceled", function () {
                e.isCanceled = !0;
              }),
              t.subscribe("upload-failed", function () {
                e.isFailed = !0;
              }),
              t.subscribe("upload-finished", function () {
                e.isUploaded = !0;
              }));
          }),
          (n.cancelUpload = function (t) {
            var e = this.$1[String(t)];
            e != null && (e.isCanceled = !0);
          }),
          (n.$2 = function (n) {
            return n.isCanceled
              ? e.CANCELED
              : n.isUploaded
                ? e.SUCCESSFUL
                : n.isFailed
                  ? e.FAILED
                  : n.isStarted
                    ? e.STARTED
                    : e.REQUESTED;
          }),
          (n.areAnyVideosIncludedInPost = function () {
            var t = this,
              n = Object.keys(this.$1).map(function (e) {
                return t.$2(t.$1[e]);
              });
            return n.some(function (t) {
              return t !== e.CANCELED;
            });
          }),
          (n.getSummary = function () {
            var t = this,
              n = Object.keys(this.$1).map(function (e) {
                return t.$2(t.$1[e]);
              });
            return {
              total: n.length,
              successful: n.filter(function (t) {
                return t === e.SUCCESSFUL;
              }).length,
              started: n.filter(function (t) {
                return t === e.STARTED;
              }).length,
              canceled: n.filter(function (t) {
                return t === e.CANCELED;
              }).length,
              failed: n.filter(function (t) {
                return t === e.FAILED;
              }).length,
            };
          }),
          t
        );
      })(),
      u = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.logFlowStarted = function () {}),
          (t.logFlowFinished = function () {}),
          (t.logFlowCanceled = function () {}),
          (t.logFlowFailed = function () {}),
          (t.release = function () {}),
          e
        );
      })(),
      c = (function () {
        function e(e, t) {
          var n = this;
          ((this.$2 = t),
            (this.$1 = e),
            (this.$4 = new Set()),
            (this.$3 = new (r("SubscriptionsHandler"))()),
            e.cancel_on_unload &&
              this.$3.addSubscriptions(
                r("Banzai").subscribe(r("Banzai").SHUTDOWN, function () {
                  return n.$6("shutdown");
                }),
              ),
            e.cancel_on_leave &&
              this.$3.addSubscriptions(
                o("Run").onLeave(function () {
                  return n.$6("leave");
                }),
              ));
        }
        var t = e.prototype;
        return (
          (t.release = function () {
            this.$3.release();
          }),
          (t.$7 = function () {
            var e = this.$2.getSummary(),
              t = this.$5;
            return {
              composer_session_id: this.$1.composer_session_id,
              source_type: this.$1.source,
              target_id: this.$1.target_id,
              target_type: this.$1.target_type,
              composer_entry_point_ref: this.$1.composer_entry_point_ref,
              total_uploads: e.total,
              started_uploads: e.started,
              successful_uploads: e.successful,
              canceled_uploads: e.canceled,
              failed_uploads: e.failed,
              elapsed_time: t != null ? Date.now() - t : null,
            };
          }),
          (t.logFlowFinished = function () {
            var e = this;
            this.$4.has(r("MediaFinishedPostFlowFalcoEvent")) ||
              (r("MediaFinishedPostFlowFalcoEvent").log(function () {
                return e.$7();
              }),
              this.$4.add(r("MediaFinishedPostFlowFalcoEvent")));
          }),
          (t.logFlowStarted = function () {
            var e = this;
            this.$4.has(r("MediaStartedPostFlowFalcoEvent")) ||
              (r("MediaStartedPostFlowFalcoEvent").log(function () {
                return e.$7();
              }),
              (this.$5 = Date.now()),
              this.$4.add(r("MediaStartedPostFlowFalcoEvent")));
          }),
          (t.logFlowCanceled = function () {
            this.$6("user");
          }),
          (t.logFlowFailed = function () {
            var e = this;
            this.$4.has(r("MediaFailedPostFlowFalcoEvent")) ||
              (r("MediaFailedPostFlowFalcoEvent").log(function () {
                return e.$7();
              }),
              this.$4.add(r("MediaFailedPostFlowFalcoEvent")));
          }),
          (t.$6 = function (t) {
            var e = this;
            this.$4.has(r("MediaCancelledPostFlowFalcoEvent")) ||
              (r("MediaCancelledPostFlowFalcoEvent").log(function () {
                return babelHelpers.extends({}, e.$7(), { event_reason: t });
              }),
              this.$4.add(r("MediaCancelledPostFlowFalcoEvent")));
          }),
          e
        );
      })(),
      d = (function () {
        function e(e, t) {
          var n = this;
          ((this.$1 = t),
            (this.$3 = new Set()),
            (this.$4 = new (o("VideoUploadLoggerTyped").VideoUploadLogger)({
              source: e.source,
              waterfall_id: e.composer_session_id,
              composer_session_id: e.composer_session_id,
              target_id: e.target_id,
              composer_entry_point_ref: e.composer_entry_point_ref,
              reported_by_notifier: !0,
            })),
            (this.$2 = new (r("SubscriptionsHandler"))()),
            this.$2.addSubscriptions(
              this.$4.postOnShutdown(function () {
                return n.$5("shutdown");
              }),
            ),
            e.cancel_on_leave &&
              this.$2.addSubscriptions(
                o("Run").onLeave(function () {
                  return n.$5("leave");
                }),
              ));
        }
        var t = e.prototype;
        return (
          (t.release = function () {
            this.$2.release();
          }),
          (t.logFlowFinished = function () {
            this.$6(
              o("VideoUploadLoggerEvents").VideoUploadLoggerEvents
                .EVENT_FINISHED_FLOW,
            );
          }),
          (t.logFlowStarted = function () {
            this.$6(
              o("VideoUploadLoggerEvents").VideoUploadLoggerEvents
                .EVENT_STARTED_FLOW,
            );
          }),
          (t.logFlowCanceled = function () {
            this.$5("user");
          }),
          (t.logFlowFailed = function () {
            this.$6(
              o("VideoUploadLoggerEvents").VideoUploadLoggerEvents
                .EVENT_FAILED_FLOW,
            );
          }),
          (t.$6 = function (t, n) {
            if (!this.$3.has(t)) {
              var e = this.$1.getSummary();
              (this.$4.logEvent(
                t,
                babelHelpers.extends({}, n, {
                  debug: {
                    total_uploads: e.total,
                    started_uploads: e.started,
                    successful_uploads: e.successful,
                    canceled_uploads: e.canceled,
                    failed_uploads: e.failed,
                  },
                }),
              ),
                this.$3.add(t));
            }
          }),
          (t.$5 = function (t) {
            this.$6(
              o("VideoUploadLoggerEvents").VideoUploadLoggerEvents
                .EVENT_CANCELED_FLOW,
              { event_reason: t },
            );
          }),
          e
        );
      })(),
      m = Object.freeze({ UPLOAD_USER_REMOVED: "upload_removed" }),
      p = Object.freeze({
        POST_USER_CANCELED: "post_user_canceled",
        POST_USER_REQUESTED: "post_user_requested",
        POST_FAILED: "post_failed",
        POST_SUCCESSFUL: "post_successful",
      });
    function _(e) {
      return e == null ? o("WaterfallIDGenerator").generate() : e;
    }
    function f(e) {
      return e.extended_flow_logging_enabled ? new h(e) : g.getInstance();
    }
    var g = (function () {
      function e() {}
      e.getInstance = function () {
        return e.$1;
      };
      var t = e.prototype;
      return (
        (t.registerVideoUpload = function (t, n) {
          return _(n);
        }),
        (t.notifyOnUploadAction = function (t) {}),
        (t.notifyOnPostAction = function (t) {}),
        e
      );
    })();
    g.$1 = new g();
    var h = (function () {
      function e(e) {
        ((this.$3 = e),
          (this.$5 = new s()),
          (this.$2 = new u()),
          (this.$1 = !1),
          (this.$4 =
            e.composer_session_id == null
              ? o("WaterfallIDGenerator").generate()
              : e.composer_session_id));
      }
      var t = e.prototype;
      return (
        (t.$6 = function () {
          var e = o(
              "VideoUploadLoggerTyped",
            ).VideoUploadLogger.shouldSendFlowEventsViaNotifier({
              source_type: this.$3.source,
              composer_entry_point_ref: this.$3.composer_entry_point_ref,
            }),
            t = e ? d : c;
          return new t(
            {
              composer_entry_point_ref: this.$3.composer_entry_point_ref,
              source: this.$3.source,
              target_id: this.$3.target_id,
              target_type: this.$3.target_type,
              composer_session_id: this.$4,
              cancel_on_leave: this.$3.cancel_on_leave,
              cancel_on_unload:
                this.$3.cancel_on_unload == null
                  ? !0
                  : this.$3.cancel_on_unload,
            },
            this.$5,
          );
        }),
        (t.registerVideoUpload = function (t, n) {
          var e = _(n);
          return (
            t.setComposerSessionID(this.$4),
            this.$5.registerUpload(t, e),
            e
          );
        }),
        (t.notifyOnUploadAction = function (t) {
          switch (t.action) {
            case m.UPLOAD_USER_REMOVED:
              this.$5.cancelUpload(t.trackingID);
              break;
          }
        }),
        (t.notifyOnPostAction = function (t) {
          switch (t.action) {
            case p.POST_USER_REQUESTED:
              (!this.$1 &&
                this.$5.areAnyVideosIncludedInPost() &&
                ((this.$2 = this.$6()), (this.$1 = !0)),
                this.$2.logFlowStarted());
              break;
            case p.POST_FAILED:
              (this.$2.logFlowFailed(), this.$2.release());
              break;
            case p.POST_SUCCESSFUL:
              (this.$2.logFlowFinished(),
                this.$2.release(),
                (this.$2 = new u()));
              break;
            case p.POST_USER_CANCELED:
              (this.$2.logFlowCanceled(), this.$2.release());
              break;
          }
        }),
        e
      );
    })();
    ((l.VideoUploadActions = m),
      (l.VideoPostActions = p),
      (l.createVideoUploadFlowNotifier = f),
      (l.NoOpVideoUploadFlowNotifier = g));
  },
  98,
);
