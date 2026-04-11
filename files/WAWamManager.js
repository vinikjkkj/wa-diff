__d(
  "WAWamManager",
  ["WALogger", "WAWam"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 65535,
      d = (function () {
        function t(e) {
          ((this.$1 = new Map()), (this.$2 = e));
        }
        var n = t.prototype;
        return (
          (n.$3 = function (t, n) {
            n == null || n === 0
              ? this.$1.set(t, "uninitialized")
              : n < 0
                ? this.$1.set(t, "uninitialized")
                : this.$1.set(t, n);
          }),
          (n.getSequenceNumber__INTERNAL = function () {
            return this.$1;
          }),
          (n.initializeForChannel = function (n, r) {
            var t = this;
            r.forEach(function (r, a) {
              var i;
              if (n === "regular" && a === "regular") t.$3(a, r);
              else if (n === "realtime" && a === "realtime") t.$3(a, r);
              else if (n === "private" && a !== "regular" && a !== "realtime")
                t.$3(a, r);
              else if (
                n === "private" &&
                !((i = t.$2) != null && i.multipleSequences)
              )
                t.$3(a, r);
              else {
                var l;
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "SequenceNumberGenerator::initializeForChannel: Incorrect combination of parameters: ",
                      " ",
                      " ",
                      "",
                    ])),
                  n,
                  a,
                  (l = t.$2) == null ? void 0 : l.multipleSequences,
                );
              }
            });
          }),
          (n.next = function (t) {
            var e = this.$1.get(t),
              n;
            return (
              e == null || e === "uninitialized"
                ? (n = 1)
                : ((n = e + 1), n > c && (n = 1)),
              this.$1.set(t, n),
              n
            );
          }),
          t
        );
      })(),
      m = (function () {
        function e() {
          ((this.$1 = new Map()), (this.$2 = null));
        }
        var t = e.prototype;
        return (
          (t.getWamInstance = function (t) {
            var e = this.$1.get(t);
            return (e || ((e = new (o("WAWam").Wam)(t)), this.$1.set(t, e)), e);
          }),
          (t.initialize = function (t, n, r, a, i) {
            var e = this.getWamInstance(t);
            if (e.isInitialized()) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAM instance for channel ",
                    " has already been initialized",
                  ])),
                t,
              );
              return;
            }
            this.$2 == null && (this.$2 = new d(i));
            var l = this.$2;
            (this.$2.initializeForChannel(t, r),
              e.initialize(
                n,
                function (e) {
                  return l.next(e);
                },
                a,
                i,
              ));
          }),
          (t.deinitialize = function () {
            (this.$1.forEach(function (e, t) {
              e.isInitialized() &&
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WamManager: Deinitializing WAM Channel ",
                      "",
                    ])),
                  t,
                ),
                e.deinitialize());
            }),
              (this.$2 = null));
          }),
          (t.enqueueEvent = function (t, n, r, o, a, i, l) {
            var e = this.getWamInstance(t);
            e.enqueueEvent(n, r, o, a, i, l);
          }),
          (t.enqueueAttributesUpdate = function (t, n) {
            var e = this.getWamInstance(t);
            e.enqueueAttributesUpdate(n);
          }),
          (t.updatePrivateStatsIds = function (t) {
            var e = this.getWamInstance("private");
            e.updatePrivateStatsIds(t);
          }),
          (t.forceFlushBuffers = function () {
            this.$1.forEach(function (e) {
              e.forceSerializePending();
            });
          }),
          (t.rotateBuffers = function () {
            this.$1.forEach(function (e) {
              e.finalizeBuffers.forceRunNow();
            });
          }),
          (t.getSequenceNumberGenerator__INTERNAL = function () {
            return this.$2;
          }),
          e
        );
      })();
    l.WamManager = m;
  },
  98,
);
