__d(
  "ZenonSWConnectFunnelLogger",
  ["QPLUserFlow", "QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(398998571, "3516"),
      u = r("qpl")._(398994003, "3517"),
      c = (function () {
        function e(e, t, n, r, o) {
          ((this.$2 = !1),
            (this.$3 = !1),
            (this.$1 = e),
            (this.$4 = t),
            (this.$5 = n),
            (this.$6 = r),
            (this.$7 = o));
        }
        var t = e.prototype;
        return (
          (t.isStarted = function () {
            return this.$3;
          }),
          (t.startCalleeFunnel = function () {
            this.$3 ||
              ((this.$3 = !0),
              r("QPLUserFlow").start(s, {
                annotations: {
                  bool: { is_video_call: this.$4, isE2eeMandated: this.$5 },
                  string: {
                    local_call_id: this.$6,
                    server_info_data: this.$7,
                    signaling_transport: "shared_worker",
                  },
                },
                instanceKey: +this.$1,
              }));
          }),
          (t.startCallerFunnel = function () {
            this.$3 ||
              ((this.$3 = !0),
              (this.$2 = !0),
              r("QPLUserFlow").start(u, {
                annotations: {
                  bool: { is_video_call: this.$4, isE2eeMandated: this.$5 },
                  string: {
                    local_call_id: this.$6,
                    signaling_transport: "shared_worker",
                  },
                },
                instanceKey: +this.$1,
              }),
              this.addPoint("sw_call_initiated"));
          }),
          (t.addPoint = function (t) {
            this.$3 &&
              r("QPLUserFlow").addPoint(this.$8(), t, {
                instanceKey: +this.$1,
              });
          }),
          (t.endCancel = function (t, n) {
            this.$3 &&
              r("QPLUserFlow").endCancel(this.$8(), {
                annotations: {
                  string: { endCallReason: t, endCallSubreason: n },
                },
                instanceKey: +this.$1,
              });
          }),
          (t.$8 = function () {
            return this.$2 ? u : s;
          }),
          e
        );
      })(),
      d = (function () {
        function t(e, t) {
          ((this.$2 = !1), (this.$3 = !1), (this.$1 = e), (this.$4 = t));
        }
        var n = t.prototype;
        return (
          (n.getIsCaller = function () {
            return this.$2;
          }),
          (n.detectFlow = function () {
            var t = (e || (e = r("QuickPerformanceLogger"))).getMarker(
              s,
              +this.$1,
            );
            this.$2 = !t;
          }),
          (n.addPoint = function (n) {
            this.$3 ||
              (e || (e = r("QuickPerformanceLogger"))).markerPoint(
                this.$5(),
                n,
                { instanceKey: +this.$1, timestamp: this.$4() },
              );
          }),
          (n.endSuccess = function (n) {
            this.$3 ||
              ((this.$3 = !0),
              (e || (e = r("QuickPerformanceLogger"))).markerPoint(
                this.$5(),
                n,
                { instanceKey: +this.$1, timestamp: this.$4() },
              ),
              e.markerEnd(this.$5(), 2, +this.$1, this.$4()));
          }),
          (n.endCancel = function (n, o) {
            this.$3 ||
              ((this.$3 = !0),
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                this.$5(),
                { string: { endCallReason: n, endCallSubreason: o } },
                { instanceKey: +this.$1 },
              ),
              e.markerEnd(this.$5(), 4, +this.$1, this.$4()));
          }),
          (n.$5 = function () {
            return this.$2 ? u : s;
          }),
          t
        );
      })();
    ((l.ZenonSWParentFunnelLogger = c), (l.ZenonSWChildFunnelLogger = d));
  },
  98,
);
