__d(
  "StreamAvailabilityState",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
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
            (this.$8 = []),
            (this.$9 = null),
            (this.$10 = null));
        }
        var n = t.prototype;
        return (
          (n.processEvent = function (t, n) {
            (n === void 0 && (n = Date.now()), this.$11(n));
            var e = this.$12(t, n);
            return ((this.$10 = n), e);
          }),
          (n.heartbeat = function (t) {
            (t === void 0 && (t = Date.now()), this.$11(t), (this.$10 = t));
          }),
          (n.$11 = function (t) {
            if (this.$10 != null) {
              var e = t - this.$10;
              this.$3 === "active" && e > s
                ? this.$12({ type: "app_suspended" }, this.$10)
                : this.$3 === "suspended" &&
                  e <= s &&
                  this.$12({ type: "app_resumed" }, t);
            }
          }),
          (n.$12 = function (t, n) {
            if (this.$5)
              return {
                streamBecameAvailable: !1,
                streamBecameUnavailable: !1,
                becameTerminated: !1,
              };
            var e = this.$1,
              r = this.isTrueUnavailable(),
              o = this.$9;
            switch (t.type) {
              case "create_stream":
                (this.$4 == null && (this.$4 = n),
                  (this.$1 = "unavailable"),
                  (this.$9 = "DOWNSTREAM"));
                break;
              case "flow_status_started":
              case "data_received":
              case "stream_ping_success":
                ((this.$1 = "available"), (this.$2 = "available"));
                break;
              case "stream_ping_timeout":
                ((this.$1 = "unavailable"), (this.$9 = "DOWNSTREAM"));
                break;
              case "error_retryable":
                ((this.$1 = "unavailable"), (this.$9 = "RETRY"));
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
                ? this.$13(n)
                : r && (!a || this.$5)
                  ? this.$14(n)
                  : r && a && o !== this.$9 && (this.$14(n), this.$13(n)),
              this.$15(t, n),
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
                (this.$14(t), this.isTrueUnavailable() && this.$13(t)));
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
          (n.$13 = function (t) {
            this.$7 = {
              startMs: t,
              endMs: null,
              durationMs: null,
              cause: r("nullthrows")(this.$9),
            };
          }),
          (n.$14 = function (t) {
            this.$7 != null &&
              ((this.$7.endMs = t),
              (this.$7.durationMs = t - this.$7.startMs),
              this.$7.durationMs > 0 && this.$6.push(this.$7),
              (this.$7 = null));
          }),
          (n.$15 = function (n, r) {
            (this.$8.push({
              event: n,
              timestamp: r,
              state: this.getSnapshot(),
            }),
              this.$8.length > e && this.$8.shift());
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
