__d(
  "LiveObjectMonitorTableClass",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "WeakRefApiUtils",
    "clearInterval",
    "performance",
    "setInterval",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["state"],
      s,
      u,
      c,
      d = (s = window) != null ? s : self,
      m = o("WeakRefApiUtils").getNativeWeakMapOrFallback(),
      p = o("WeakRefApiUtils").getNativeWeakRefOrFallback(),
      _ = o("WeakRefApiUtils").isWeakAPINative();
    _ ||
      r("FBLogger")("comet_performance.memory").warn(
        "Browser doesn't support weak reference API",
      );
    var f = (function () {
      function t() {
        ((this.$4 = 2e4),
          (this.isStarted = !1),
          (this.shouldReport = !0),
          (this.$1 = new m()),
          (this.$2 = new Set()),
          (this.$5 = []),
          (this.$3 = this.$6()));
      }
      var n = t.prototype;
      return (
        (n.setScanIntervalMs = function (t) {
          this.$4 = t;
        }),
        (n.getScanIntervalMs = function () {
          return this.$4;
        }),
        (n.getSize = function () {
          return this.$2.size;
        }),
        (n.getAllRefs = function () {
          return Array.from(this.$2);
        }),
        (n.$8 = function (t) {
          this.$2.forEach(function (e) {
            t(e);
          });
        }),
        (n.$9 = function (t) {
          var e = null;
          return (
            this.$8(function (n) {
              var r = n.deref();
              r === t && (e = n);
            }),
            e
          );
        }),
        (n.initStateData_DO_NOT_USE = function (t) {
          var e = this.$10(),
            n = t.deref(),
            r = 0;
          try {
            r = JSON.stringify(n || {}).length;
          } catch (e) {}
          return { ref: t, approxSize: r, lastScaned: e };
        }),
        (n.$11 = function () {
          return new Error("no error").stack;
        }),
        (n.$6 = function () {
          if (
            (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
            d.FinalizationRegistry != null
          )
            return new d.FinalizationRegistry(t.$7);
        }),
        (n.$10 = function () {
          return (u || (u = r("ExecutionEnvironment"))).canUseDOM ||
            (c || (c = r("performance"))).now != null
            ? (c || (c = r("performance"))).now()
            : (r("FBLogger")("comet_performance.memory").warn(
                "Need to be able to call performance.now()",
              ),
              0);
        }),
        (n.getMonitorMetaData = function (t) {
          var e = t.deref();
          return e == null ? void 0 : this.$1.get(e);
        }),
        (n.setMonitorMetaData = function (t, n) {
          var e = t.deref();
          e != null && this.$1.set(e, n);
        }),
        (n.deleteMonitorMetaData = function (t) {
          var e = t.deref();
          e != null && this.$1.delete(e);
        }),
        (n.updateRefData_DO_NOT_USE = function (n) {
          var t = this.initStateData_DO_NOT_USE(n),
            r = this.getMonitorMetaData(n);
          if (r && t) {
            var o = r.state,
              a = babelHelpers.objectWithoutPropertiesLoose(r, e);
            this.setMonitorMetaData(
              n,
              babelHelpers.extends({}, a, { state: t }),
            );
          }
        }),
        (n.fullScan_DO_NOT_USE = function () {
          var e = this;
          (this.$8(function (t) {
            e.updateRefData_DO_NOT_USE(t);
          }),
            this.afterPeoridicChecking_DO_NOT_USE());
        }),
        (n.afterPeoridicChecking_DO_NOT_USE = function () {}),
        (n.getRefSet = function () {
          return this.$2;
        }),
        (n.$12 = function () {
          (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
            d.gc != null &&
            d.gc();
        }),
        (n.start = function () {
          var e = this;
          if (!_) return !1;
          this.isStarted = !0;
          var t = r("setInterval")(function () {
            (e.$12(), e.fullScan_DO_NOT_USE(), e.shouldReport && e.report());
          }, this.$4);
          return ((this.$5 = [t]), !0);
        }),
        (n.stop = function () {
          (this.$5.map(function (e) {
            return r("clearInterval")(e);
          }),
            (this.$5 = []),
            (this.$1 = new m()),
            (this.$2 = new Set()),
            (this.isStarted = !1),
            (this.$3 = this.$6()));
        }),
        (n.add = function (t) {
          if (!_) return t;
          if ((this.isStarted || this.start(), t == null))
            throw r("FBLogger")("comet_performance.memory").info(
              "You passed a null into LiveObjectMonitorTable.add()",
            );
          if (typeof t != "object")
            throw r("FBLogger")("comet_performance.memory").info(
              "Can only pass objects for now",
            );
          var e = new p(t),
            n = {
              id: "" + r("uuidv4")(),
              stack: this.$11(),
              creationTime: this.$10(),
              state: this.initStateData_DO_NOT_USE(e),
            };
          return (this.trackObject_DO_NOT_USE(t, e, n), t);
        }),
        (n.trackObject_DO_NOT_USE = function (t, n, r) {
          var e;
          (this.$2.add(n),
            this.setMonitorMetaData(n, r),
            (e = this.$3) == null ||
              e.register(t, { set: this.$2, ref: n }, n));
        }),
        (n.inspectObj = function (t) {
          if (t == null)
            throw r("FBLogger")("comet_performance.memory").info(
              "You passed a null into LiveObjectMonitorTable.inspectObj()",
            );
          if (typeof t != "object")
            throw r("FBLogger")("comet_performance.memory").info(
              "Can only pass objects for now",
            );
          var e = this.$9(t);
          if (e)
            return (
              this.updateRefData_DO_NOT_USE(e),
              this.getMonitorMetaData(e)
            );
        }),
        (n.inspectRef = function (t) {
          return (this.updateRefData_DO_NOT_USE(t), this.getMonitorMetaData(t));
        }),
        (n.removeDataForWeakRef = function (t) {
          (this.deleteMonitorMetaData(t), this.$2.delete(t));
        }),
        (n.refByID = function (t) {
          var e = this,
            n;
          return (
            this.$8(function (r) {
              var o = e.getMonitorMetaData(r);
              o && o.id === t && (n = r);
            }),
            n
          );
        }),
        (n.report = function () {
          var e = this;
          if (!this.shouldReport) return [];
          var t = this.$10(),
            n = [];
          return (
            this.$8(function (r) {
              var o = e.inspectRef(r);
              o &&
                n.push({
                  id: o.id,
                  age: t - o.creationTime,
                  size: o.state.approxSize,
                  stackTrace: o.stack,
                });
            }),
            n.length > 0 &&
              n.sort(function (e, t) {
                return t.age - e.age;
              }),
            n
          );
        }),
        (n.stackForRef = function (t) {
          var e = this.getMonitorMetaData(t);
          if (e != null) {
            var n = e == null ? void 0 : e.stack;
            if (n != null) return n;
          }
          return null;
        }),
        t
      );
    })();
    ((f.$7 = function (e) {
      var t = e.ref,
        n = e.set;
      n.delete(t);
    }),
      (l.default = f));
  },
  98,
);
