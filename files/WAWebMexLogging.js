__d(
  "WAWebMexLogging",
  ["WAWebMexEventV2WamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$1 = !1),
          (this.$2 = ""),
          (this.$3 = ""),
          (this.$4 = -1),
          (this.$5 = -1),
          (this.$6 = -1),
          (this.$7 = !1),
          (this.$8 = ""),
          (this.$9 = ""),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          this.$4 = Date.now();
        }),
        (t.stop = function () {
          ((this.$5 = Date.now()), (this.$6 = this.$5 - this.$4));
        }),
        (t.setQueryId = function (t) {
          t != null && (this.$3 = t);
        }),
        (t.setOperationName = function (t) {
          t != null && (this.$2 = t);
        }),
        (t.setHasData = function (t) {
          this.$7 = t;
        }),
        (t.setErrors = function (t) {
          if (t != null) {
            var e = this.parseErrorsAndCodes(t);
            ((this.$8 = e.errors), (this.$9 = e.errorCodes));
          }
        }),
        (t.setExtensionErrors = function (t) {
          if (t != null) {
            var e = t
              .filter(function (e) {
                var t;
                return (
                  ((t = e.extensions) == null ? void 0 : t.error_code) != null
                );
              })
              .map(function (e) {
                return s(e.extensions.error_code, e.message);
              });
            this.setErrors(e);
          }
        }),
        (t.logEvent = function () {
          var e = {
            mexEventV2DurationMs: this.$6,
            mexEventV2EndTime: this.$5,
            mexEventV2ErrorCodes: this.$9,
            mexEventV2Errors: this.$8,
            mexEventV2HasData: this.$7,
            mexEventV2IsMex: this.$1,
            mexEventV2OperationName: this.$2,
            mexEventV2QueryId: this.$3,
            mexEventV2StartTime: this.$4,
          };
          new (o("WAWebMexEventV2WamEvent").MexEventV2WamEvent)(e).commit();
        }),
        (t.parseErrorsAndCodes = function (t) {
          var e = t.map(function (e) {
            return e.code;
          });
          return { errors: JSON.stringify(t), errorCodes: JSON.stringify(e) };
        }),
        e
      );
    })();
    function s(e, t) {
      return { code: e, detail: t, type: "EXTENSION" };
    }
    function u(e, t) {
      return { code: e, detail: t, type: "CLIENT" };
    }
    function c(e, t) {
      return { code: e, detail: t, type: "TRANSPORT" };
    }
    ((l.MexPerfTracker = e),
      (l.createLoggingClientError = u),
      (l.createLoggingTransportError = c));
  },
  98,
);
