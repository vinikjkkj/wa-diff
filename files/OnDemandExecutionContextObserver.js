__d(
  "OnDemandExecutionContextObserver",
  ["TimeSlice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$5 = !1),
          (this.$4 = !1),
          (this.$1 = 0),
          (this.$2 = {}),
          (this.$3 = 0));
      }
      var t = e.prototype;
      return (
        (t.onNewContextCreatedWhileEnabled = function (t, n, r) {
          var e = Error("unimplemented abstract method");
          throw (e.stack, e);
        }),
        (t.onBeforeContextStartedWhileEnabled = function (t, n, r) {
          var e = Error("unimplemented abstract method");
          throw (e.stack, e);
        }),
        (t.onAfterContextEndedWhileEnabled = function (t, n, r, o) {
          var e = Error("unimplemented abstract method");
          throw (e.stack, e);
        }),
        (t.onNewContextCreated = function (t, n, r) {
          return this.isEnabled()
            ? this.onNewContextCreatedWhileEnabled(t, n, r)
            : null;
        }),
        (t.onBeforeContextStarted = function (t, n, r) {
          return this.isEnabled()
            ? this.onBeforeContextStartedWhileEnabled(t, n, r)
            : null;
        }),
        (t.onAfterContextStarted = function (t, n, r, o) {
          return null;
        }),
        (t.onAfterContextEnded = function (t, n, r, o) {
          if (this.isEnabled()) {
            var e = r;
            this.onAfterContextEndedWhileEnabled(t, n, e, o);
          }
          this.$4 && !this.$5 && t.isRoot && (this.onDisable(), (this.$4 = !1));
        }),
        (t.onDisable = function () {}),
        (t.onEnable = function () {}),
        (t.getBeforeID = function () {
          var e = Error("unimplemented abstract method");
          throw (e.stack, e);
        }),
        (t.getAfterID = function () {
          var e = Error("unimplemented abstract method");
          throw (e.stack, e);
        }),
        (t.isEnabled = function () {
          return this.$4;
        }),
        (t.__getExpiryCallback = function () {
          var e = this,
            t = ++this.$1;
          return (
            (this.$2[t] = !0),
            this.$3++,
            function () {
              e.$2[t] && (delete e.$2[t], e.$3--, e.$3 === 0 && (e.$5 = !1));
            }
          );
        }),
        (t.expressInterest = function () {
          var e = this.__getExpiryCallback();
          return (
            this.isEnabled() ||
              (this.onEnable(),
              r("TimeSlice").catchUpOnDemandExecutionContextObservers(this)),
            (this.$4 = !0),
            (this.$5 = !0),
            e
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
