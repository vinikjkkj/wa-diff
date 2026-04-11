__d(
  "QPLFlipperPlugin",
  ["QPLEvent", "flipperApi", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s = (e || (e = n("QPLEvent"))).getMarkerId,
      u = n("flipperApi").FlipperPlugin;
    function c(e, t) {
      return s(e) + "/" + t;
    }
    function d(e) {
      return s(e).toString();
    }
    var m = 500;
    function p(e, t) {
      var n, r, o, a;
      if (e.id !== t.id || e.markerID !== t.markerID) return !1;
      ((e.startTime = e.startTime || t.startTime),
        (e.endTime = e.endTime || t.endTime),
        (e.action = (n = e.action) != null ? n : t.action),
        (e.points = (r = e.points) != null ? r : []));
      for (var i of (l = t.points) != null ? l : []) {
        var l;
        e.points.push(i);
      }
      return (
        (e.annotations = (o = e.annotations) != null ? o : {}),
        Object.assign(e.annotations, (a = t.annotations) != null ? a : {}),
        !0
      );
    }
    var _ = (function () {
        "use strict";
        function e() {
          ((this.mBuff = []),
            (this.idToIdx = new Map()),
            (this.mBuff = []),
            (this.idToIdx = new Map()));
        }
        var t = e.prototype;
        return (
          (t.startRecording = function () {}),
          (t.stopRecording = function () {
            ((this.mBuff = []), this.idToIdx.clear());
          }),
          (t.onMarkerStart = function (t, n, r) {
            if (!(this.mBuff.length > m)) {
              var e = {
                id: c(t, n),
                markerID: d(t),
                startTime: r,
                endTime: 0,
                cancelled: !1,
                points: [],
              };
              this.$1(e);
            }
          }),
          (t.onMarkerEnd = function (t, n, r, o) {
            if (!(this.mBuff.length > m)) {
              var e = {
                id: c(n, r),
                markerID: d(n),
                startTime: 0,
                endTime: o,
                cancelled: !1,
                points: [],
                action: t,
              };
              this.$1(e);
            }
          }),
          (t.onAnnotation = function (t, n, r, o) {
            var e;
            if (!(this.mBuff.length > m)) {
              var a = {
                id: c(t, n),
                markerID: d(t),
                startTime: 0,
                endTime: 0,
                cancelled: !1,
                annotations: ((e = {}), (e[r] = o), e),
                points: [],
              };
              this.$1(a);
            }
          }),
          (t.onMarkerPoint = function (t, n, r, o, a) {
            if (!(this.mBuff.length > m)) {
              var e = {
                id: c(t, n),
                markerID: d(t),
                startTime: 0,
                endTime: 0,
                cancelled: !1,
                points: [
                  {
                    timestamp: a,
                    name: r,
                    absoluteTime: !0,
                    data: o != null ? o : void 0,
                  },
                ],
              };
              this.$1(e);
            }
          }),
          (t.$1 = function (t) {
            var e = this.idToIdx.get(t.id);
            if (e != null) {
              var n = this.mBuff[e];
              if (p(n, t)) return;
            }
            (this.idToIdx.set(t.id, this.mBuff.length), this.mBuff.push(t));
          }),
          (t.getTraceRecords = function () {
            var e = this.mBuff;
            return ((this.mBuff = []), this.idToIdx.clear(), e);
          }),
          e
        );
      })(),
      f = (function (e) {
        "use strict";
        function t() {
          var t;
          return (
            (t = e.call(this, "UIPerf") || this),
            (t.tracesRecordsProvider = new _()),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.onConnect = function (n) {
            (e.prototype.onConnect.call(this, n), this.startSendingTraces());
          }),
          (r.onDisconnect = function () {
            (e.prototype.onDisconnect.call(this), this.stopSendingTraces());
          }),
          (r.startSendingTraces = function () {
            var e = this;
            this.timer = setTimeout(function () {
              return setInterval(function () {
                var t = e.obtainTraces();
                if (t.traces.length !== 0) {
                  var n = e.getConnection();
                  n && n.send("reportEvent", t);
                }
              }, 1e3);
            }, 3e3);
          }),
          (r.stopSendingTraces = function () {
            this.timer && clearTimeout(this.timer);
          }),
          (r.obtainTraces = function () {
            return {
              traces: this.tracesRecordsProvider
                ? this.tracesRecordsProvider.getTraceRecords()
                : [],
              currentTimestamp: (l || (l = n("performanceAbsoluteNow")))(),
            };
          }),
          (r.listener = function () {
            var e = this.tracesRecordsProvider;
            return {
              onMarkerStart: function (n, r, o) {
                e.onMarkerStart(n, r, o);
              },
              onMarkerEnd: function (n, r, o, a) {
                e.onMarkerEnd(n, r, o, a);
              },
              onMarkerPoint: function (n, r, o, a, i) {
                e.onMarkerPoint(n, r, o, a, i);
              },
              onAnnotation: function (n, r, o, a) {
                e.onAnnotation(n, r, o, a);
              },
            };
          }),
          t
        );
      })(u);
    a.exports = { QPLFlipperPlugin: f, QPLListenerForFlipper: _ };
  },
  null,
);
