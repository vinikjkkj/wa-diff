__d(
  "DGWLoggingContext",
  [
    "DGWGlobalLogger",
    "DgwClientFalcoEvent",
    "IDGWLoggingContext",
    "ODS",
    "QuickPerformanceLogger",
    "Random",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "dgw_client",
      c = r("qpl")._(701242292, "2919"),
      d = r("qpl")._(701238781, "3037"),
      m = { VERBOSE: -1, INFO: 0, WARNING: 1, ERROR: 2, FATAL: 3 };
    function p(e) {
      switch (e) {
        case o("IDGWLoggingContext").DGWLoggingComponent
          .GROUPED_STREAM_COMPONENT:
        case o("IDGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT:
          return !0;
        default:
          return !1;
      }
    }
    var _ = (function () {
      function t(e, t, n, r, o, a, i) {
        (a === void 0 && (a = !1),
          i === void 0 && (i = !1),
          (this.$5 = "" + e),
          (this.$1 = t),
          (this.$4 = n),
          (this.$3 = r),
          (this.sgTransportId = o),
          (this.$2 = a),
          (this.$6 = i));
      }
      var n = t.prototype;
      return (
        (n.getGlobalLogger = function () {
          return o("DGWGlobalLogger").getInstance();
        }),
        (t.bumpODSKey = function (t, n, r) {
          if ((r === void 0 && (r = 1), !!o("Random").coinflip(r))) {
            var e = t + "." + n;
            (s || (s = o("ODS"))).bumpEntityKey(3589, "dgw_web_client", e, r);
          }
        }),
        (n.bumpODSKey = function (t, n, r) {
          if ((r === void 0 && (r = 1), !!o("Random").coinflip(r))) {
            var e = this.$4 + "." + t + "." + n;
            (s || (s = o("ODS"))).bumpEntityKey(3589, "dgw_web_client", e, r);
          }
        }),
        (n.logEvent = function (t, n, r, o, a) {
          (o === void 0 && (o = !1),
            this.$2 || this.$7(t, n, null, m.INFO, r, o, a));
        }),
        (n.$7 = function (t, n, o, a, i, l, s) {
          var e = this;
          (l === void 0 && (l = !1),
            !(l && !this.$6) &&
              ((p(t) && this.$1 != null) ||
                (!p(t) && this.sgTransportId != null)) &&
              r("DgwClientFalcoEvent").log(function () {
                return {
                  event: n,
                  logging_id: s != null ? s : e.$1,
                  dgw_version: e.$5,
                  message: o,
                  severity: a,
                  uuid: e.$3,
                  dgw_component: t,
                  extra_info: i,
                  destination_tier: e.$4,
                  sg_transport_id: e.sgTransportId,
                  source: 2,
                };
              }));
        }),
        (n.logError = function (t, n, r, o, a, i) {
          (a === void 0 && (a = !1),
            this.$2 || this.$7(t, n, r, m.ERROR, o, a, i));
        }),
        (n.logWarn = function (t, n, r, o, a) {
          (a === void 0 && (a = !1),
            this.$2 || this.$7(t, n, r, m.WARNING, o, a));
        }),
        (n.$8 = function (t) {
          switch (t) {
            case o("IDGWLoggingContext").QPLEvent.STREAM_LIFECYCLE:
              return c;
            case o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT:
              return d;
          }
        }),
        (n.qplMarkerStart = function (n, o) {
          (e || (e = r("QuickPerformanceLogger"))).markerStart(this.$8(n), o);
        }),
        (n.qplMarkerEnd = function (n, a, i) {
          var t = a === o("IDGWLoggingContext").QPLResult.SUCCESS ? 2 : 3;
          (e || (e = r("QuickPerformanceLogger"))).markerEnd(this.$8(n), t, i);
        }),
        (n.qplMarkerPoint = function (n, o, a) {
          (e || (e = r("QuickPerformanceLogger"))).markerPoint(this.$8(n), o, {
            instanceKey: a,
          });
        }),
        (n.qplMarkerAnnotate = function (n, o, a) {
          (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
            this.$8(n),
            o,
            { instanceKey: a },
          );
        }),
        t
      );
    })();
    ((l.DGWLoggingComponent = o("IDGWLoggingContext").DGWLoggingComponent),
      (l.QPLEvent = o("IDGWLoggingContext").QPLEvent),
      (l.QPLResult = o("IDGWLoggingContext").QPLResult),
      (l.DGW_MODULE = u),
      (l.DGWLoggingContext = _));
  },
  98,
);
