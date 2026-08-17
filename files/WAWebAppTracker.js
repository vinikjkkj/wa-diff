__d(
  "WAWebAppTracker",
  ["$InternalEnum", "WALogger", "WAWebLogForCrash", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "ADVProcessing",
        "BlockingOR",
        "BulkCreateOrMerge",
        "Camera",
        "ContactSync",
        "CriticalSync",
        "Disconnected",
        "FullSync",
        "GroupSync",
        "HistorySync",
        "HSProtobufParsing",
        "LayoutZoom",
        "Logout",
        "MediaDL",
        "MediaOpen",
        "MediaOpenImage",
        "MediaOpenVideo",
        "MediaProcessing",
        "MediaUL",
        "OfflineResume",
        "OnDemandSync",
        "PlayPTT",
        "PreKeyProcessing",
        "PurgeEphemeral",
        "PurgeStatuses",
        "PurgeViewOnce",
        "RecentSync",
        "RecordPTT",
        "Registration",
        "SelectChat",
        "SendMessage",
        "SyncD",
        "VoipAudio",
        "VoipVideo",
        "VoipWasmLoad",
        "FTSIndex",
        "PdfViewer",
        "StatusTab",
        "ChannelsTab",
        "CommunitiesTab",
        "UpdatesTab",
        "MediaMgr",
        "InitialChatLoad",
        "LoadMainScreen",
        "ClosingBrowserTab",
        "BrowserTabHidden",
        "VoipPreCall",
        "VoipPostCall",
        "VoipCameraPrewarm",
        "VoipOfferDecrypt",
        "VoipUiWindowCreate",
        "VoipSctpPrewarm",
        "VoipThreadPoolSetup",
        "VoipCallsTab",
        "CpuPressureCritical",
        "MemPressureHigh",
      ]);
    function u(e, t, n) {
      Object.hasOwn(e, "appContext") ||
        (e.appContext =
          t != null ? m.getAppContextWithLookback(t, n) : m.getAppContext());
    }
    function c(e, t, n) {
      var r = t ? " " + String(t) + ":" : "",
        o = n != null ? " (" + n.toLocaleString() + "ms)" : "";
    }
    var d = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = null), (this.$3 = new Set()));
        }
        var n = t.prototype;
        return (
          (n.$4 = function () {
            this.$2 = null;
          }),
          (n.subscribe = function (t) {
            var e = this;
            return (
              this.$3.add(t),
              function () {
                e.$3.delete(t);
              }
            );
          }),
          (n.$5 = function () {
            var t = this.getAppContext();
            o("WAWebLogForCrash").logForCrash("wa:appContext", t || "none");
            for (var n of this.$3)
              try {
                n(t);
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[metric-attribution] app context listener failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t));
              }
          }),
          (n.start = function (t) {
            var e;
            ((e = this.$1.get(t)) != null && e.isRunning) ||
              (c("Start Tracker", t),
              this.$1.set(t, {
                startTime: self.performance.now(),
                endTime: void 0,
                isRunning: !0,
              }),
              this.$4(),
              this.$5());
          }),
          (n.mark = function (t) {
            c("Mark Tracker", t);
            var e = self.performance.now();
            (this.$1.set(t, { startTime: e, endTime: e, isRunning: !1 }),
              this.$4(),
              this.$5());
          }),
          (n.stop = function (t) {
            var e = this.$1.get(t);
            if (e != null && e.isRunning) {
              ((e.endTime = self.performance.now()), (e.isRunning = !1));
              var n = Math.round(e.endTime - e.startTime);
              (c("Stop Tracker", t, n), this.$4(), this.$5());
            }
          }),
          (n.isRunning = function (t) {
            var e = this.$1.get(t);
            return e != null && e.isRunning;
          }),
          (n.getAppContext = function () {
            if (this.$2 != null) return this.$2;
            var e = [];
            for (var t of this.$1) {
              var n = t[0],
                r = t[1];
              r.isRunning && e.push(n);
            }
            return e.length === 0
              ? ""
              : (e.sort(), (this.$2 = e.join("+")), this.$2);
          }),
          (n.getAppContextWithLookback = function (t, n) {
            n === void 0 && (n = self.performance.now());
            var e = n - t,
              r = [];
            for (var o of this.$1) {
              var a = o[0],
                i = o[1];
              i.startTime > n ||
                ((i.isRunning || (i.endTime != null && i.endTime >= e)) &&
                  r.push(a));
            }
            return r.length === 0 ? "" : (r.sort(), r.join("+"));
          }),
          (n.clear = function () {
            (this.$1.clear(), this.$4(), this.$5());
          }),
          (n.getRunningTrackers = function () {
            var e = [];
            for (var t of this.$1) {
              var n = t[0],
                r = t[1];
              r.isRunning && e.push(n);
            }
            return e;
          }),
          t
        );
      })(),
      m = new d();
    ((l.AppTrackerType = s), (l.attachWAMAppContext = u), (l.AppTracker = m));
  },
  98,
);
