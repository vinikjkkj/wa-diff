__d(
  "AdsWorkerBatchedFuncChannel",
  ["Batcher", "FBLogger", "MainPageUrl", "WorkerFuncChannel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = (function (t) {
        function n(n, a, i) {
          var l, s;
          (i === void 0 && (i = null),
            (s = t.call(this, n, a) || this),
            (s.$AdsWorkerBatchedFuncChannel$p_1 = null));
          var u = s.__remoteInternalFunc(e, function (e) {
              (o("MainPageUrl").isWorkerLogEnabled() &&
                r("FBLogger")("adsworker").debug(
                  "remote batch call received in %s: %s",
                  s.name,
                  e
                    .map(function (e) {
                      return e.method;
                    })
                    .join(),
                ),
                e.forEach(function (e) {
                  return s.__messageToCall(e);
                }));
            }),
            c = (l = i) == null ? void 0 : l.callBatcher;
          return (
            c != null &&
              (s.$AdsWorkerBatchedFuncChannel$p_1 = new (o("Batcher").Batcher)(
                c.timeout,
                c.size,
                function (e) {
                  var t = s.$AdsWorkerBatchedFuncChannel$p_1;
                  ((s.$AdsWorkerBatchedFuncChannel$p_1 = null),
                    u(e),
                    (s.$AdsWorkerBatchedFuncChannel$p_1 = t));
                },
              )),
            s
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__onPostOutMessage = function (t) {
            return this.$AdsWorkerBatchedFuncChannel$p_1
              ? (this.$AdsWorkerBatchedFuncChannel$p_1.push(t), null)
              : t;
          }),
          (a.__callCallback = function (t, n) {
            t.apply(null, n.argList);
          }),
          n
        );
      })(o("WorkerFuncChannel").WorkerFuncChannel);
    function u(e, t, n, r) {
      return o("WorkerFuncChannel").exportChannelOnPort(
        n,
        function () {
          return new s(
            function (t) {
              return e;
            },
            n,
            r,
          );
        },
        e,
        t,
      );
    }
    function c(e, t, n) {
      return new s(
        function (t) {
          return e;
        },
        t,
        n,
      );
    }
    function d(e, t, n, r) {
      return o("WorkerFuncChannel").importChannelOnPort(c(e, n, r), t);
    }
    ((l.AdsWorkerBatchedFuncChannel = s),
      (l.exportChannel = u),
      (l.importChannel = d));
  },
  98,
);
