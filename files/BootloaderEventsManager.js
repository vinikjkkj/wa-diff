__d(
  "BootloaderEventsManager",
  ["CallbackDependencyManager", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          ((this.$1 = new (r("CallbackDependencyManager"))()),
            (this.$2 = new Map()));
        }
        var n = t.prototype;
        return (
          (n.rsrcDone = function (t) {
            return t;
          }),
          (n.bootload = function (t) {
            return "bl:" + t.join(",");
          }),
          (n.tierOne = function (t) {
            return "t1:" + t;
          }),
          (n.tierTwoStart = function (t) {
            return "t2s:" + t;
          }),
          (n.tierTwo = function (t) {
            return "t2:" + t;
          }),
          (n.tierThreeStart = function (t) {
            return "t3s:" + t;
          }),
          (n.tierThree = function (t) {
            return "t3:" + t;
          }),
          (n.tierOneLog = function (t) {
            return "t1l:" + t;
          }),
          (n.tierTwoLog = function (t) {
            return "t2l:" + t;
          }),
          (n.tierThreeLog = function (t) {
            return "t3l:" + t;
          }),
          (n.beDone = function (t) {
            return "beDone:" + t;
          }),
          (n.notify = function (n) {
            (this.$2.set(n, (e || (e = r("performanceAbsoluteNow")))()),
              this.$1.satisfyPersistentDependency(n));
          }),
          (n.getEventTime = function (t) {
            return this.$2.get(t);
          }),
          (n.registerCallback = function (t, n) {
            this.$1.registerCallback(t, n);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
