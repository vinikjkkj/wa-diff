__d(
  "ResourceTimingLoomProvider",
  ["clamp", "performanceNow", "sanitizeURIStringForLoom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = t.substring(t.lastIndexOf(".") + 1);
      return n == "js" || n == "css"
        ? n
        : e == "img" || n == "png" || n == "jpg" || n == "ico"
          ? "img"
          : e;
    }
    var u = (function () {
        function t(e, t, n) {
          ((this.$1 = e), (this.$2 = t), (this.$3 = n));
        }
        t.isSupported = function () {
          return (
            window.performance &&
            window.performance.getEntriesByType &&
            window.performance.timing &&
            window.performance.timing.navigationStart
          );
        };
        var n = t.prototype;
        return (
          (n.$4 = function (t) {
            var e = this,
              n = t.endTime,
              o = t.entry,
              a = t.resourceId,
              i = t.resourceName,
              l = t.resourceType,
              s = t.startTime,
              u = this.$1;
            if (u != null) {
              var c = o;
              u.buffer.addEvent(
                {
                  type: "RESOURCE_TIMING_START",
                  resourceType: l,
                  resourceId: a,
                  resourceName: i,
                  encodedSize:
                    c != null && typeof c.encodedBodySize == "number"
                      ? c.encodedBodySize
                      : 0,
                  decodedSize:
                    c != null && typeof c.decodedBodySize == "number"
                      ? c.decodedBodySize
                      : 0,
                  transferSize:
                    c != null && typeof c.transferSize == "number"
                      ? c.transferSize
                      : 0,
                  responseStatus:
                    c != null && typeof c.responseStatus == "number"
                      ? c.responseStatus
                      : -1,
                },
                s,
              );
              var d = function (o, i) {
                var t = i + e.$3.appStart;
                u.buffer.addEvent(
                  {
                    type: "RESOURCE_TIMING_POINT",
                    resourceType: l,
                    resourceId: a,
                    pointName: o,
                  },
                  r("clamp")(t, s, n),
                );
              };
              (d("requestStart", o.requestStart),
                d("responseStart", o.responseStart),
                u.buffer.addEvent(
                  {
                    type: "RESOURCE_TIMING_END",
                    resourceType: l,
                    resourceId: a,
                  },
                  n,
                ));
            }
          }),
          (n.$5 = function (t) {
            if (this.$3.sanitizeURIs)
              return r("sanitizeURIStringForLoom")(t, this.$2);
            var e = t.indexOf("?");
            return e == -1 ? t : t.substring(0, e);
          }),
          (n.loomTraceWillEnd = function () {
            var t = this,
              n = this.$1;
            if (n != null) {
              var o = n.startTime,
                a = (e || (e = r("performanceNow")))() + this.$3.appStart;
              window.performance
                .getEntriesByType("resource")
                .filter(function (e) {
                  return (
                    e.startTime < e.responseEnd &&
                    e.startTime + t.$3.appStart >= o &&
                    e.responseEnd + t.$3.appStart <= a
                  );
                })
                .forEach(function (e, n) {
                  var r = e.startTime + t.$3.appStart,
                    o = e.responseEnd + t.$3.appStart,
                    a = t.$5(e.name),
                    i = s(e.initiatorType, a);
                  t.$4({
                    entry: e,
                    resourceName: a,
                    resourceId: n,
                    resourceType: i,
                    startTime: r,
                    endTime: o,
                  });
                });
              var i = window.performance.getEntriesByType("navigation")[0],
                l =
                  typeof PerformanceNavigationTiming != "undefined" &&
                  i instanceof PerformanceNavigationTiming
                    ? i
                    : null;
              if (
                l != null &&
                (l.responseEnd === 0 || l.responseEnd + this.$3.appStart >= o)
              ) {
                var u = "document",
                  c = -1,
                  d = o > this.$3.appStart ? o : this.$3.appStart,
                  m =
                    l.responseEnd === 0 ? a : l.responseEnd + this.$3.appStart;
                this.$4({
                  entry: l,
                  resourceName: this.$5(location.href),
                  resourceId: c,
                  resourceType: u,
                  startTime: d,
                  endTime: m,
                });
              }
            }
            this.$1 = null;
          }),
          t
        );
      })(),
      c = {
        loomProviderId: "ResourceTiming",
        isSupported: function () {
          return u.isSupported();
        },
        getInstance: function (t, n, r) {
          return new u(t, n, r);
        },
      };
    l.default = c;
  },
  98,
);
