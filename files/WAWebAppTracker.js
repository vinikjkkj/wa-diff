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
          t != null ? p.getAppContextWithLookback(t, n) : p.getAppContext());
    }
    function c(e, t, n) {
      Object.hasOwn(e, "appContext") || (e.appContext = t(n));
    }
    function d(e, t, n) {
      var r = t ? " " + String(t) + ":" : "",
        o = n != null ? " (" + n.toLocaleString() + "ms)" : "";
    }
    var m = (function () {
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
              (d("Start Tracker", t),
              this.$1.set(t, {
                startTime: self.performance.now(),
                endTime: void 0,
                isRunning: !0,
              }),
              this.$4(),
              this.$5());
          }),
          (n.mark = function (t) {
            d("Mark Tracker", t);
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
              (d("Stop Tracker", t, n), this.$4(), this.$5());
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
            return (
              n === void 0 && (n = self.performance.now()),
              _(this.$1, t, n)
            );
          }),
          (n.captureAppContextWithLookback = function () {
            var e = self.performance.now(),
              t = new Map();
            for (var n of this.$1) {
              var r = n[0],
                o = n[1];
              t.set(r, babelHelpers.extends({}, o));
            }
            return function (n) {
              return _(t, n, e);
            };
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
      p = new m();
    function _(e, t, n) {
      var r = n - t,
        o = [];
      for (var a of e) {
        var i = a[0],
          l = a[1];
        l.startTime > n ||
          ((l.isRunning || (l.endTime != null && l.endTime >= r)) && o.push(i));
      }
      return o.length === 0 ? "" : (o.sort(), o.join("+"));
    }
    ((l.AppTrackerType = s),
      (l.attachWAMAppContext = u),
      (l.attachCapturedWAMAppContext = c),
      (l.AppTracker = p));
  },
  98,
);
