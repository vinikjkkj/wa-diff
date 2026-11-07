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
        ReadyWaitEnd: "offline_ready_wait_end",
        ReadyWaitStart: "offline_ready_wait_start",
        SuccessReceived: "success_received",
      }),
      _ = e({ SocketClosed: "socket_closed", Superseded: "superseded" }),
      f = e({
        ClientFailureAccountLocked: "client_failure_account_locked",
        ClientFailureClientTooOld: "client_failure_client_too_old",
        ClientFailureNotAuthorized: "client_failure_not_authorized",
        ClientLogout: "client_logout",
        ClientTabTakeover: "client_tab_takeover",
        StreamErrorAck: "stream_error_ack",
        StreamErrorCode515: "stream_error_code_515",
        StreamErrorCode516: "stream_error_code_516",
        StreamErrorCodeOther: "stream_error_code_other",
        StreamErrorDeviceRemoved: "stream_error_device_removed",
        StreamErrorOther: "stream_error_other",
        StreamErrorReplaced: "stream_error_replaced",
        StreamErrorXmlNotWellFormed: "stream_error_xml_not_well_formed",
        Unknown: "unknown",
      }),
      g = "socket_close_reason";
    function h() {
      return o("WAWebRuntimeEnvironmentUtils").isServiceWorker()
        ? "service_worker"
        : o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? "worker"
          : "main";
    }
    function y() {
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? null
        : o("WAWebWamPlatform").getWamPlatform().toLowerCase();
    }
    var C = (function () {
        function e() {
          ((this.$1 = 0), (this.$2 = null), (this.$3 = null), (this.$4 = !1));
        }
        var t = e.prototype;
        return (
          (t.setCommsInWorkerExpoKey = function (t) {
            this.$2 = t;
          }),
          (t.begin = function (t) {
            var e, n, r;
            (this.$5(_.Superseded),
              (this.$1 = 0),
              (this.$4 = !1),
              (this.$3 = o("QPLFlow").startQPLFlow(s, {
                annotations: {
                  bool: {
                    comms_in_worker: o("WAWebABProps").getABPropConfigValue(
                      "waweb_comms_in_backend_worker",
                    ),
                  },
                  string: {
                    comms_in_worker_expo_key:
                      (e = this.$2) != null ? e : void 0,
                    entry_point: t.entryPoint.valueOf(),
                    guest_experience_type:
                      (n = t.guestExperienceType) != null ? n : void 0,
                    offline_resume_mode: t.mode.valueOf(),
                    offline_session_id: t.sessionId,
                    realm: h(),
                    webc_web_platform: (r = y()) != null ? r : void 0,
                  },
                },
                timeoutInMs: u,
              })));
          }),
          (t.mark = function (t, n) {
            var e;
            (e = this.$3) == null || e.addPoint(t.valueOf(), n);
          }),
          (t.addPoint = function (t) {
            var e;
            (e = this.$3) == null || e.addPoint(t);
          }),
          (t.markBatchRequest = function () {
            return (this.$1++, this.$6("batch_request", this.$1), this.$1);
          }),
          (t.markBatchSent = function (t) {
            this.$6("batch_sent", t);
          }),
          (t.markBatchArrived = function (t) {
            this.$6("batch_arrived", t);
          }),
          (t.markBatchAbandoned = function (t) {
            this.$6("batch_abandoned", t);
          }),
          (t.markReadyWaitStart = function () {
            return this.$4
              ? !1
              : ((this.$4 = !0), this.mark(p.ReadyWaitStart), !0);
          }),
          (t.markReadyWaitEnd = function () {
            this.mark(p.ReadyWaitEnd);
          }),
          (t.markSocketClosed = function (t) {
            var e;
            this.$5(_.SocketClosed, {
              string: ((e = {}), (e[g] = t.valueOf()), e),
            });
          }),
          (t.addAnnotations = function (t) {
            var e;
            (e = this.$3) == null || e.addAnnotations(t);
          }),
          (t.endSuccess = function (t) {
            this.$3 != null && (this.$3.endSuccess(t), (this.$3 = null));
          }),
          (t.endFail = function (t, n) {
            this.$5(t, n);
          }),
          (t.$6 = function (t, n) {
            var e;
            n > c || (e = this.$3) == null || e.addPoint(t + "_" + n);
          }),
          (t.$5 = function (t, n) {
            var e = this.$3;
            e != null && (e.endFail(t.valueOf(), n), (this.$3 = null));
          }),
          e
        );
      })(),
      b = new C();
    ((l.OfflineSyncMode = d),
      (l.OfflineSyncEntryPoint = m),
      (l.OfflineSyncPoint = p),
      (l.OfflineSyncEndReason = _),
      (l.SocketCloseReason = f),
      (l.OfflineSyncQpl = b));
  },
  98,
);
