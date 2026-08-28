__d(
  "AdsInterfacesLogger",
  ["invariant", "JSScheduler", "gkx", "requestIdleCallback"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = "primary",
      d = "secondary",
      m = "ads_interfaces_logger_primary_app",
      p = "ads_interfaces_logger_secondary_app",
      _ =
        ((e = {}),
        (e[c] = { data: [], isRegistered: !1 }),
        (e[d] = { data: [], isRegistered: !1 }),
        e),
      f = new Map(),
      g = new Set(),
      h = (function () {
        function e(e, t) {
          ((this.__log = e.log), (this.__interfaceID = t));
        }
        ((e.__reset = function () {
          ((_[c] = { data: [], isRegistered: !1 }),
            f.has(m) && f.delete(m),
            (_[d] = { data: [], isRegistered: !1 }),
            f.has(p) && f.delete(p),
            (g = new Set()));
        }),
          (e.getPath = function (t) {
            return t === c ? m : p;
          }),
          (e.log = function (t, n) {
            var e = this;
            if ((n === void 0 && (n = c), r("gkx")("9794")))
              (u || (u = r("JSScheduler"))).scheduleSpeculativeCallback(
                function () {
                  e.$1(t, n);
                },
              );
            else if (r("gkx")("17832"))
              r("requestIdleCallback")(
                function () {
                  e.$1(t, n);
                },
                { timeout: 2e3 },
              );
            else return this.$1(t, n);
          }),
          (e.logSync = function (t, n) {
            (n === void 0 && (n = c), this.$1(t, n));
          }),
          (e.$1 = function (n, r) {
            var t = r === d && !_[r].isRegistered && _[c].isRegistered ? c : r;
            if (!_[t].isRegistered) {
              _[t].data.push(n);
              return;
            }
            var o = f.get(this.getPath(t));
            (o || s(0, 2975), o instanceof e || s(0, 2976), o.__log(n));
          }),
          (e.logOnce = function (t, n) {
            var e = this;
            if ((n === void 0 && (n = c), r("gkx")("9794")))
              (u || (u = r("JSScheduler"))).scheduleSpeculativeCallback(
                function () {
                  e.$2(t, n);
                },
              );
            else if (r("gkx")("17832"))
              r("requestIdleCallback")(
                function () {
                  e.$2(t, n);
                },
                { timeout: 2e3 },
              );
            else return this.$2(t, n);
          }),
          (e.$2 = function (n, r) {
            r === void 0 && (r = c);
            var t = JSON.stringify(n);
            g.has(t) || (e.$1(n, r), g.add(t));
          }),
          (e.get = function (t) {
            t === void 0 && (t = c);
            var e = t === d && !_[t].isRegistered && _[c].isRegistered ? c : t,
              n = f.get(this.getPath(e));
            return n;
          }));
        var t = e.prototype;
        return (
          (t.getInterfaceID = function () {
            return this.__interfaceID;
          }),
          (t.register = function (t) {
            (f.set(this.constructor.getPath(t), this),
              (_[t].isRegistered = !0),
              _[t].data.length > 0 &&
                (_[t].data.forEach(this.__log), (_[t].data = [])),
              t === c &&
                _[d].data.length > 0 &&
                (_[d].data.forEach(this.__log), (_[d].data = [])));
          }),
          (t.unregister = function (t) {
            (f.delete(this.constructor.getPath(t)), (_[t].isRegistered = !1));
          }),
          e
        );
      })();
    ((h.LOG_TYPE_PRIMARY_APP = c),
      (h.LOG_TYPE_SECONDARY_APP = d),
      (l.default = h));
  },
  98,
);
