__d(
  "CVCv3SubscriptionHelper",
  ["CvcV3HttpEventFalcoEvent", "DateConsts", "guid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = e),
          (this.$2 = r("guid")()),
          (this.$3 =
            (t != null ? t : "null") + "::" + (n != null ? n : "null")),
          (this.$4 = null),
          (this.$5 = null));
      }
      var t = e.prototype;
      return (
        (t.isValidSubscription = function () {
          return !!this.$1;
        }),
        (t.makeCVCv3StateUpdate = function (t, n, r, a) {
          var e = null;
          t != null &&
            !Number.isNaN(t) &&
            n != null &&
            !Number.isNaN(n) &&
            (e = {
              m: a,
              pf: Math.floor((n - t) * o("DateConsts").MS_PER_SEC),
              s: r,
              sa: Math.floor(t * o("DateConsts").MS_PER_SEC),
            });
          var i = {
            pps: this.$4,
            ps: e,
            si: this.$2,
            so: this.$3,
            vi: this.$1,
          };
          return ((this.$4 = e), i);
        }),
        (t.makeUnifiedVideoCVCUpdate = function (t, n, r, o, a) {
          var e = this.makeCVCv3StateUpdate(t, n, r, o);
          return (
            this.$5 != null && (e.tk = this.$5),
            babelHelpers.extends({}, e, a)
          );
        }),
        (t.processUnifiedResponse = function (t) {
          var e = t;
          return ((this.$5 = e.tk), e);
        }),
        (t.clearAnyPreviousContext = function () {
          this.$4 = null;
        }),
        (t.logHttpRequestSuccess = function (t) {
          var e = this;
          r("CvcV3HttpEventFalcoEvent").log(function () {
            return {
              name: "http_request_success",
              duration_ms: t != null ? t.toString() : null,
              countable_id: e.$1,
            };
          });
        }),
        (t.logHttpRequestFailure = function (t, n) {
          var e = this;
          r("CvcV3HttpEventFalcoEvent").log(function () {
            return {
              name: "http_request_failed",
              error_msg: t,
              duration_ms: n != null ? n.toString() : null,
              countable_id: e.$1,
            };
          });
        }),
        (t.logHttpRequestTimeout = function (t) {
          var e = this;
          r("CvcV3HttpEventFalcoEvent").log(function () {
            return {
              name: "http_request_timeout",
              duration_ms: t != null ? t.toString() : null,
              countable_id: e.$1,
            };
          });
        }),
        (t.logHttpResponseBad = function (t, n) {
          var e = this;
          r("CvcV3HttpEventFalcoEvent").log(function () {
            return {
              name: "http_response_bad",
              error_msg: t,
              duration_ms: n != null ? n.toString() : null,
              countable_id: e.$1,
            };
          });
        }),
        (t.logDebugInfo = function (t) {
          var e = this;
          r("CvcV3HttpEventFalcoEvent").log(function () {
            return { name: t, countable_id: e.$1 };
          });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
