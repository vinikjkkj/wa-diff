__d(
  "VideoUploadCrashMonitor",
  ["Bandicoot", "VideoUploadLogger"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r, o, a, i, l, s) {
        var u;
        return (
          (u = e.call(this, "VideoUploadSession") || this),
          (u.$VideoUploadCrashMonitor1 = {
            waterfallID: t,
            actorID: n,
            source: r,
            targetID: o,
            loggingDelay: a,
            supportsChunking: i,
            composerEntryPointRef: l,
            flowStarted: s,
          }),
          u
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.flowStarted = function () {
          this.$VideoUploadCrashMonitor1.flowStarted = !0;
        }),
        (n.getCrashTimeData = function () {
          return this.$VideoUploadCrashMonitor1;
        }),
        (n.logCrash = function (t, n, o) {
          if (n.waterfallID) {
            var e = new (r("VideoUploadLogger"))({
                actor_id: n.actorID,
                source: n.source,
                waterfall_id: n.waterfallID,
                target_id: n.targetID,
                delay: n.loggingDelay,
                is_chunked_upload: n.supportsChunking,
                composer_entry_point_ref: n.composerEntryPointRef,
              }),
              a = {
                error: "Crash Detected",
                error_description:
                  "Detected video upload did not complete due to a crash",
              };
            (e.logEvent(r("VideoUploadLogger").EVENT_FAILED_UPLOADING, a),
              n.flowStarted &&
                e.logEvent(r("VideoUploadLogger").EVENT_RESIGNED_FLOW, {}));
          }
        }),
        t
      );
    })(r("Bandicoot"));
    l.default = e;
  },
  98,
);
