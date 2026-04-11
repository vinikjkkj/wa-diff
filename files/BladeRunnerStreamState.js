__d(
  "BladeRunnerStreamState",
  ["BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$1 = e),
          (this.$2 = null),
          (this.$3 = 0),
          (this.$4 = !1),
          (this.$5 = 0),
          (this.$6 = !1));
      }
      var t = e.prototype;
      return (
        (t.getRequest = function () {
          return this.$1;
        }),
        (t.updateRetryRequestPayload = function (t) {
          this.$1.updateRetryRequestPayload(t);
        }),
        (t.isAlive = function () {
          return !(
            this.$2 == o("BladeRunnerStreamStatus").StreamStatus.CLOSED ||
            this.$2 == o("BladeRunnerStreamStatus").StreamStatus.REJECTED
          );
        }),
        (t.canAmend = function () {
          return (
            this.$2 == o("BladeRunnerStreamStatus").StreamStatus.ACCEPTED ||
            this.$2 == o("BladeRunnerStreamStatus").StreamStatus.STARTED ||
            this.$2 == o("BladeRunnerStreamStatus").StreamStatus.STOPPED
          );
        }),
        (t.getLastStatus = function () {
          return this.$2;
        }),
        (t.setLastStatus = function (t) {
          this.$2 = t;
        }),
        (t.onError = function () {
          this.$3 += 1;
        }),
        (t.getErrorCount = function () {
          return this.$3;
        }),
        (t.resetErrors = function () {
          this.$3 = 0;
        }),
        (t.getRetryRequestScheduled = function () {
          return this.$6;
        }),
        (t.setRetryRequestScheduled = function (t) {
          this.$6 = t;
        }),
        (t.witnessFrame = function (t) {
          switch (t.type) {
            case o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
              var e = t.getStatusUpdate(),
                n = !0;
              switch (e.status) {
                case o("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                  ((n = !this.$4), this.$4 || (this.$4 = !0));
                  break;
                case o("BladeRunnerStreamStatus").StreamStatus.STARTED:
                  n =
                    this.getLastStatus() !=
                    o("BladeRunnerStreamStatus").StreamStatus.STARTED;
                  break;
                case o("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                  n =
                    this.getLastStatus() ==
                    o("BladeRunnerStreamStatus").StreamStatus.STARTED;
                  break;
                case o("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                case o("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                default:
                  n = !0;
              }
              return (this.setLastStatus(e.status), n);
            case o("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
              return (this.$7(t.getRewriteRequest()), !1);
            default:
              return !0;
          }
        }),
        (t.setRetriesAllowed = function (t) {
          this.$5 = t;
        }),
        (t.getRetriesAllowed = function () {
          return this.$5;
        }),
        (t.$7 = function (t) {
          if (!(t.temporary != null || t.temporary == !0)) {
            if (
              (t.newBody != null && (this.$1.payload = t.newBody),
              t.newExtraHeader != null &&
                ((this.$1.extraHeader = t.newExtraHeader),
                (this.$1.headers = JSON.parse(t.newExtraHeader))),
              t.patchExtraHeader != null)
            )
              try {
                var e = JSON.parse(t.patchExtraHeader),
                  n =
                    this.$1.extraHeader != null
                      ? JSON.parse(this.$1.extraHeader)
                      : {};
                this.$1.headers == null && (this.$1.headers = {});
                for (var o of Object.keys(e))
                  ((this.$1.headers[o] = e[o]), (n[o] = e[o]));
                this.$1.extraHeader = JSON.stringify(n);
              } catch (e) {
                r("BladeRunnerLogger").warn(
                  "Failed to patch header: " + t.patchExtraHeader,
                );
              }
            t.killBody != null && t.killBody == !0 && (this.$1.payload = null);
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
