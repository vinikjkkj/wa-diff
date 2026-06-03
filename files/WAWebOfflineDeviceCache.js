__d(
  "WAWebOfflineDeviceCache",
  [
    "WAComms",
    "WADeprecatedSendIq",
    "WALogger",
    "WAShiftTimer",
    "WAWebApiPendingDeviceSync",
    "WAWebPromiseQueue",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3e3,
      c = (function () {
        function t() {
          var e = this;
          ((this.pendingDeviceCache = new Set()),
            (this.pendingAcks = []),
            (this.snapshotTimer = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                e.createSnapshot();
              },
            )),
            (this.checkpointQueue = new (o(
              "WAWebPromiseQueue",
            ).PromiseQueue)()));
        }
        var r = t.prototype;
        return (
          (r.addOfflinePendingDevice = function (n, r) {
            (this.pendingDeviceCache.add(n),
              r && this.pendingAcks.push(r),
              this.snapshotTimer.isScheduled() ||
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][device-cache]: creating snapshot: schedule in ",
                      " ms",
                    ])),
                  u,
                ),
                this.snapshotTimer.onOrAfter(u)));
          }),
          (r.createSnapshot = function () {
            this.snapshotTimer.isScheduled() && this.snapshotTimer.cancel();
            var e = Array.from(this.pendingDeviceCache),
              t = this.pendingAcks;
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][device-cache]: creating snapshot for pending devices ",
                  "",
                ])),
              e.join(","),
            ),
              this.checkpointQueue.enqueue(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield o(
                    "WAWebApiPendingDeviceSync",
                  ).addUserToPendingDeviceSync(e),
                    t.forEach(function (e) {
                      return o("WADeprecatedSendIq").deprecatedCastStanza(e);
                    }),
                    o("WAComms").cancelDeadSocketTimer());
                }),
              ),
              (this.pendingDeviceCache = new Set()),
              (this.pendingAcks = []));
          }),
          t
        );
      })(),
      d = new c();
    l.OfflinePendingDeviceCache = d;
  },
  98,
);
