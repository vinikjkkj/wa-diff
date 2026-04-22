__d(
  "QPLFlipperPlugin",
  ["QPLEvent", "flipperApi", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return (s || (s = o("QPLEvent"))).getMarkerId(e) + "/" + t;
    }
    function c(e) {
      return (s || (s = o("QPLEvent"))).getMarkerId(e).toString();
    }
    var d = 500;
    function m(e, t) {
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
    var p = (function () {
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
            if (!(this.mBuff.length > d)) {
              var e = {
                id: u(t, n),
                markerID: c(t),
                startTime: r,
                endTime: 0,
                cancelled: !1,
                points: [],
              };
              this.$1(e);
            }
          }),
          (t.onMarkerEnd = function (t, n, r, o) {
            if (!(this.mBuff.length > d)) {
              var e = {
                id: u(n, r),
                markerID: c(n),
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
            if (!(this.mBuff.length > d)) {
              var a = {
                id: u(t, n),
                markerID: c(t),
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
            if (!(this.mBuff.length > d)) {
              var e = {
                id: u(t, n),
                markerID: c(t),
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
              if (m(n, t)) return;
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
      _ = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this, "UIPerf") || this),
            (e.tracesRecordsProvider = new p()),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.onConnect = function (n) {
            (t.prototype.onConnect.call(this, n), this.startSendingTraces());
          }),
          (o.onDisconnect = function () {
            (t.prototype.onDisconnect.call(this), this.stopSendingTraces());
          }),
          (o.startSendingTraces = function () {
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
          (o.stopSendingTraces = function () {
            this.timer && clearTimeout(this.timer);
          }),
          (o.obtainTraces = function () {
            return {
              traces: this.tracesRecordsProvider
                ? this.tracesRecordsProvider.getTraceRecords()
                : [],
              currentTimestamp: (e || (e = r("performanceAbsoluteNow")))(),
            };
          }),
          (o.listener = function () {
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
          n
        );
      })(o("flipperApi").FlipperPlugin);
    ((l.QPLFlipperPlugin = _), (l.QPLListenerForFlipper = p));
  },
  98,
);
