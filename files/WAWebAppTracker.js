__d(
  "WAWebAppTracker",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
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
      "FTSIndex",
      "PdfViewer",
      "StatusTab",
      "ChannelsTab",
      "CommunitiesTab",
      "UpdatesTab",
      "MediaMgr",
    ]);
    function s(e, t, n) {
      Object.prototype.hasOwnProperty.call(e, "appContext") ||
        (e.appContext =
          t != null ? d.getAppContextWithLookback(t, n) : d.getAppContext());
    }
    function u(e, t, n) {
      var r = t ? " " + String(t) + ":" : "",
        o = n != null ? " (" + n.toLocaleString() + "ms)" : "";
    }
    var c = (function () {
        function e() {
          ((this.$1 = new Map()), (this.$2 = null));
        }
        var t = e.prototype;
        return (
          (t.$3 = function () {
            this.$2 = null;
          }),
          (t.start = function (t) {
            var e;
            ((e = this.$1.get(t)) != null && e.isRunning) ||
              (u("Start Tracker", t),
              this.$1.set(t, {
                startTime: self.performance.now(),
                endTime: void 0,
                isRunning: !0,
              }),
              this.$3());
          }),
          (t.mark = function (t) {
            u("Mark Tracker", t);
            var e = self.performance.now();
            (this.$1.set(t, { startTime: e, endTime: e, isRunning: !1 }),
              this.$3());
          }),
          (t.stop = function (t) {
            var e = this.$1.get(t);
            if (e != null && e.isRunning) {
              ((e.endTime = self.performance.now()), (e.isRunning = !1));
              var n = Math.round(e.endTime - e.startTime);
              (u("Stop Tracker", t, n), this.$3());
            }
          }),
          (t.isRunning = function (t) {
            var e = this.$1.get(t);
            return e != null && e.isRunning;
          }),
          (t.getAppContext = function () {
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
          (t.getAppContextWithLookback = function (t, n) {
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
          (t.clear = function () {
            (this.$1.clear(), this.$3());
          }),
          (t.getRunningTrackers = function () {
            var e = [];
            for (var t of this.$1) {
              var n = t[0],
                r = t[1];
              r.isRunning && e.push(n);
            }
            return e;
          }),
          e
        );
      })(),
      d = new c();
    ((l.AppTrackerType = e), (l.attachWAMAppContext = s), (l.AppTracker = d));
  },
  98,
);
