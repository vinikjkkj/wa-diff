__d(
  "StreamAvailabilityState",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = (function () {
        function t() {
          ((this.$1 = "available"),
            (this.$2 = "available"),
            (this.$3 = null),
            (this.$4 = !1),
            (this.$5 = []),
            (this.$6 = null),
            (this.$7 = []),
            (this.$8 = null));
        }
        var n = t.prototype;
        return (
          (n.processEvent = function (t, n) {
            if ((n === void 0 && (n = Date.now()), this.$4))
              return {
                streamBecameAvailable: !1,
                streamBecameUnavailable: !1,
                becameTerminated: !1,
              };
            var e = this.$1,
              r = this.isTrueUnavailable(),
              o = this.$8;
            switch (t.type) {
              case "create_stream":
                (this.$3 == null && (this.$3 = n),
                  (this.$1 = "unavailable"),
                  (this.$8 = "DOWNSTREAM"));
                break;
              case "flow_status_started":
              case "data_received":
              case "stream_ping_success":
                this.$1 = "available";
                break;
              case "stream_ping_timeout":
                ((this.$1 = "unavailable"), (this.$8 = "DOWNSTREAM"));
                break;
              case "error_retryable":
                ((this.$1 = "unavailable"), (this.$8 = "RETRY"));
                break;
              case "error_terminal":
              case "cancel":
                this.$4 = !0;
                break;
              case "network_ping_success":
                this.$2 = "available";
                break;
              case "network_ping_timeout":
                this.$2 = "unavailable";
                break;
            }
            var a = this.isTrueUnavailable();
            return (
              !r && a
                ? this.$9(n)
                : r && (!a || this.$4)
                  ? this.$10(n)
                  : r && a && o !== this.$8 && (this.$10(n), this.$9(n)),
              this.$11(t, n),
              {
                streamBecameAvailable:
                  e !== "available" && this.$1 === "available",
                streamBecameUnavailable:
                  e !== "unavailable" && this.$1 === "unavailable",
                becameTerminated: this.$4,
              }
            );
          }),
          (n.getSnapshot = function () {
            return { stream: this.$1, network: this.$2, terminated: this.$4 };
          }),
          (n.isTerminated = function () {
            return this.$4;
          }),
          (n.isTrueUnavailable = function () {
            return this.$1 === "unavailable" && this.$2 === "available";
          }),
          (n.getDurationMs = function (t) {
            return (
              t === void 0 && (t = Date.now()),
              this.$3 == null ? 0 : t - this.$3
            );
          }),
          (n.finalize = function (t) {
            (t === void 0 && (t = Date.now()),
              !this.$4 &&
                (this.$10(t), this.isTrueUnavailable() && this.$9(t)));
          }),
          (n.getTotalUnavailabilityMs = function () {
            return this.$5.reduce(function (e, t) {
              var n;
              return e + ((n = t.durationMs) != null ? n : 0);
            }, 0);
          }),
          (n.getMaxUnavailabilityMs = function () {
            return this.$5.reduce(function (e, t) {
              var n;
              return Math.max(e, (n = t.durationMs) != null ? n : 0);
            }, 0);
          }),
          (n.getUnavailabilities = function () {
            return this.$5;
          }),
          (n.getEvents = function () {
            return this.$7;
          }),
          (n.$9 = function (t) {
            this.$6 = {
              startMs: t,
              endMs: null,
              durationMs: null,
              cause: r("nullthrows")(this.$8),
            };
          }),
          (n.$10 = function (t) {
            this.$6 != null &&
              ((this.$6.endMs = t),
              (this.$6.durationMs = t - this.$6.startMs),
              this.$5.push(this.$6),
              (this.$6 = null));
          }),
          (n.$11 = function (n, r) {
            (this.$7.push({
              event: n,
              timestamp: r,
              state: this.getSnapshot(),
            }),
              this.$7.length > e && this.$7.shift());
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
