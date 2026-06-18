__d(
  "StreamAvailabilityState",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e3,
      s = 6e4,
      u = (function () {
        function t() {
          ((this.$1 = "available"),
            (this.$2 = "available"),
            (this.$3 = "active"),
            (this.$4 = null),
            (this.$5 = !1),
            (this.$6 = []),
            (this.$7 = null),
            (this.$8 = {}),
            (this.$9 = 0),
            (this.$10 = []),
            (this.$11 = []),
            (this.$12 = []),
            (this.$13 = null),
            (this.$14 = null));
        }
        var n = t.prototype;
        return (
          (n.processEvent = function (t, n) {
            (n === void 0 && (n = Date.now()), this.$15(n));
            var e = this.$16(t, n);
            return ((this.$14 = n), e);
          }),
          (n.heartbeat = function (t) {
            (t === void 0 && (t = Date.now()), this.$15(t), (this.$14 = t));
          }),
          (n.$15 = function (t) {
            if (this.$14 != null) {
              var e = t - this.$14;
              this.$3 === "active" && e > s
                ? this.$16({ type: "app_suspended" }, this.$14)
                : this.$3 === "suspended" &&
                  e <= s &&
                  this.$16({ type: "app_resumed" }, t);
            }
          }),
          (n.$16 = function (t, n) {
            if (this.$5)
              return {
                streamBecameAvailable: !1,
                streamBecameUnavailable: !1,
                becameTerminated: !1,
              };
            var e = this.$1,
              r = this.isTrueUnavailable(),
              o = this.$13;
            switch (t.type) {
              case "create_stream":
                (this.$4 == null && (this.$4 = n),
                  (this.$1 = "unavailable"),
                  (this.$13 = "DOWNSTREAM"));
                break;
              case "flow_status_started":
              case "data_received":
              case "stream_ping_success":
                ((this.$1 = "available"), (this.$2 = "available"));
                break;
              case "stream_ping_timeout":
                (this.$1 === "available" && (this.$13 = "DOWNSTREAM"),
                  (this.$1 = "unavailable"));
                break;
              case "error_retryable":
                ((this.$1 = "unavailable"), (this.$13 = "RETRY"));
                break;
              case "error_terminal":
              case "cancel":
                this.$5 = !0;
                break;
              case "network_ping_success":
                this.$2 = "available";
                break;
              case "network_ping_timeout":
                this.$2 = "unavailable";
                break;
              case "app_suspended":
                this.$3 = "suspended";
                break;
              case "app_resumed":
                this.$3 = "active";
                break;
            }
            var a = this.isTrueUnavailable();
            return (
              !r && a
                ? this.$17(n)
                : r && (!a || this.$5)
                  ? this.$18(n)
                  : r && a && o !== this.$13 && (this.$18(n), this.$17(n)),
              this.$19(t, n),
              {
                streamBecameAvailable:
                  e !== "available" && this.$1 === "available",
                streamBecameUnavailable:
                  e !== "unavailable" && this.$1 === "unavailable",
                becameTerminated: this.$5,
              }
            );
          }),
          (n.getSnapshot = function () {
            return {
              stream: this.$1,
              network: this.$2,
              runtime: this.$3,
              terminated: this.$5,
            };
          }),
          (n.isTerminated = function () {
            return this.$5;
          }),
          (n.isTrueUnavailable = function () {
            return (
              this.$1 === "unavailable" &&
              this.$2 === "available" &&
              this.$3 === "active"
            );
          }),
          (n.getStartMs = function () {
            return this.$4;
          }),
          (n.getDurationMs = function (t) {
            return (
              t === void 0 && (t = Date.now()),
              this.$4 == null ? 0 : t - this.$4
            );
          }),
          (n.finalize = function (t) {
            (t === void 0 && (t = Date.now()),
              !this.$5 &&
                (this.$18(t), this.isTrueUnavailable() && this.$17(t)));
          }),
          (n.getTotalUnavailabilityMs = function () {
            return this.$6.reduce(function (e, t) {
              var n;
              return e + ((n = t.durationMs) != null ? n : 0);
            }, 0);
          }),
          (n.getMaxUnavailabilityMs = function () {
            return this.$6.reduce(function (e, t) {
              var n;
              return Math.max(e, (n = t.durationMs) != null ? n : 0);
            }, 0);
          }),
          (n.getUnavailabilities = function () {
            return this.$6;
          }),
          (n.getEvents = function () {
            return this.$8;
          }),
          (n.getStateSegments = function () {
            return { stream: this.$10, network: this.$11, runtime: this.$12 };
          }),
          (n.$17 = function (t) {
            this.$7 = {
              startMs: t,
              endMs: null,
              durationMs: null,
              cause: r("nullthrows")(this.$13),
            };
          }),
          (n.$18 = function (t) {
            this.$7 != null &&
              ((this.$7.endMs = t),
              (this.$7.durationMs = t - this.$7.startMs),
              this.$7.durationMs > 0 && this.$6.push(this.$7),
              (this.$7 = null));
          }),
          (n.$19 = function (n, r) {
            if (this.$9 < e) {
              var t = this.$8[n.type];
              (t == null && ((t = []), (this.$8[n.type] = t)),
                t.push(r),
                this.$20(this.$10, r, this.$1),
                this.$20(this.$11, r, this.$2),
                this.$20(this.$12, r, this.$3),
                this.$9++);
            }
          }),
          (n.$20 = function (t, n, r) {
            (t.length === 0 || t[t.length - 1][1] !== r) && t.push([n, r]);
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
