__d(
  "WAWebOfflineSyncQplSession",
  [
    "$InternalEnum",
    "QPLFlow",
    "WAWebABProps",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWamPlatform",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("qpl")._(891431279, "3267"),
      u = 6e4,
      c = 10,
      d = (e = n("$InternalEnum"))({
        FromOpenTab: "resume_from_open_tab",
        FromRestart: "resume_from_restart",
      }),
      m = e({ Guest: "guest", WhatsApp: "whatsapp" }),
      p = e({
        OfflineIbReceived: "offline_ib_received",
        OfflinePreviewReceived: "offlinePreviewReceived",
        PassiveTasksEnd: "passive_tasks_end",
        PassiveTasksStart: "passive_tasks_start",
        ProcessComplete: "processComplete",
        QueueDrainEnd: "queue_drain_end",
        QueueDrainStart: "queue_drain_start",
        SuccessReceived: "success_received",
      }),
      _ = e({
        Empty: "empty",
        InitialSync: "initial_sync",
        Superseded: "superseded",
      });
    function f() {
      return o("WAWebRuntimeEnvironmentUtils").isServiceWorker()
        ? "service_worker"
        : o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? "worker"
          : "main";
    }
    function g() {
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? null
        : o("WAWebWamPlatform").getWamPlatform().toLowerCase();
    }
    var h = (function () {
        function e() {
          ((this.$1 = 0), (this.$2 = 0), (this.$3 = null), (this.$4 = null));
        }
        var t = e.prototype;
        return (
          (t.setCommsInWorkerExpoKey = function (t) {
            this.$3 = t;
          }),
          (t.begin = function (t) {
            var e, n, r;
            (this.$5(_.Superseded),
              (this.$2 = 0),
              (this.$1 = 0),
              (this.$4 = o("QPLFlow").startQPLFlow(s, {
                annotations: {
                  bool: {
                    comms_in_worker: o("WAWebABProps").getABPropConfigValue(
                      "waweb_comms_in_backend_worker",
                    ),
                  },
                  string: {
                    comms_in_worker_expo_key:
                      (e = this.$3) != null ? e : void 0,
                    entry_point: t.entryPoint.valueOf(),
                    guest_experience_type:
                      (n = t.guestExperienceType) != null ? n : void 0,
                    offline_resume_mode: t.mode.valueOf(),
                    offline_session_id: t.sessionId,
                    realm: f(),
                    webc_web_platform: (r = g()) != null ? r : void 0,
                  },
                },
                timeoutInMs: u,
              })));
          }),
          (t.mark = function (t, n) {
            var e;
            (e = this.$4) == null || e.addPoint(t.valueOf(), n);
          }),
          (t.addPoint = function (t) {
            var e;
            (e = this.$4) == null || e.addPoint(t);
          }),
          (t.markBatchRequest = function () {
            (this.$2++, this.$6("batch_request", this.$2));
          }),
          (t.markBatchArrived = function () {
            (this.$1++, this.$6("batch_arrived", this.$1));
          }),
          (t.addAnnotations = function (t) {
            var e;
            (e = this.$4) == null || e.addAnnotations(t);
          }),
          (t.endSuccess = function (t) {
            this.$4 != null && (this.$4.endSuccess(t), (this.$4 = null));
          }),
          (t.endFail = function (t, n) {
            this.$5(t, n);
          }),
          (t.$6 = function (t, n) {
            var e;
            n > c || (e = this.$4) == null || e.addPoint(t + "_" + n);
          }),
          (t.$5 = function (t, n) {
            var e = this.$4;
            e != null && (e.endFail(t.valueOf(), n), (this.$4 = null));
          }),
          e
        );
      })(),
      y = new h();
    ((l.OfflineSyncMode = d),
      (l.OfflineSyncEntryPoint = m),
      (l.OfflineSyncPoint = p),
      (l.OfflineSyncEndReason = _),
      (l.OfflineSyncQpl = y));
  },
  98,
);
