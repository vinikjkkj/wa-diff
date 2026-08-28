__d(
  "LoadingMarkerListener",
  ["AdsInterfacesUserConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e !== 0 && Math.random() * e < 1;
    }
    var s = [],
      u = [],
      c = (function () {
        function t(e) {
          ((this.config = e),
            (this.__events = {}),
            (this.__lifeCycleEvents = {}));
        }
        var n = t.prototype;
        return (
          (n.start = function (t) {
            return this.$1(t);
          }),
          (n.end = function (t) {
            this.$2(t);
          }),
          (n.mount = function (t) {
            var e = t.id;
            return ((this.__lifeCycleEvents[e] = t), this.__handleMount(t), e);
          }),
          (n.unmount = function (t) {
            var e = t.end,
              n = t.id,
              r = this.__lifeCycleEvents[n];
            (this.__handleUnmount(r, e), delete this.__lifeCycleEvents[n]);
          }),
          (n.$1 = function (t) {
            var e = t.id;
            return ((this.__events[e] = t), this.__logStart(t), e);
          }),
          (n.$2 = function (t) {
            var e = t.end,
              n = t.id,
              r = this.__events[n];
            (this.__logEnd(r, e), delete this.__events[n]);
          }),
          (n.__logStart = function (t) {}),
          (n.__logEnd = function (t, n) {}),
          (n.__handleMount = function (t) {
            s.forEach(function (e) {
              return e(t);
            });
          }),
          (n.__handleUnmount = function (t, n) {
            u.forEach(function (e) {
              return e(t, n);
            });
          }),
          (n.shouldLog = function () {
            return this.config.generalRate == null
              ? r("AdsInterfacesUserConfig").is_loading_marker_enabled
              : e(this.config.generalRate);
          }),
          (n.shouldLogCSS = function () {
            return e(this.config.cssStackRate);
          }),
          (n.shouldLogContext = function () {
            return e(this.config.contextRate);
          }),
          (n.shouldLogReact = function () {
            return e(this.config.reactStackRate);
          }),
          (n.subscribeComponentLifeCycle = function (t, n) {
            (s.push(t), u.push(n));
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
