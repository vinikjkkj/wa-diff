__d(
  "FluxContainerSubscriptions",
  [
    "expectationViolation",
    "getUniformDispatcher",
    "nullthrows",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = []), (this.$4 = e != null ? e : this.constructor.name));
      }
      var t = e.prototype;
      return (
        (t.setStores = function (t) {
          var e = this;
          if (!(this.$3 && r("shallowArrayEqual")(this.$3, t))) {
            if (((this.$3 = t), this.$7(), this.$8(), t.length === 0)) {
              r("expectationViolation")(
                "there should be at least 1 store in a flux subscription",
              );
              return;
            }
            var n = !1,
              o = [],
              a = function () {
                n &&
                  (e.$1.forEach(function (e) {
                    return e();
                  }),
                  (n = !1));
              },
              i = r("getUniformDispatcher")(t),
              l = function () {
                if (i.registerContainer != null)
                  e.$6 = i.registerContainer(function (e) {
                    a();
                  }, e.$4);
                else {
                  var n = t.map(function (e) {
                    return e.getDispatchToken();
                  });
                  e.$6 = i.register(
                    function (e) {
                      (i.waitFor(n), a());
                    },
                    e.$4,
                    null,
                    e.$4,
                  );
                }
                i.explicitlyRegisterStore && i.explicitlyRegisterStore(e);
              };
            ((this.$2 = t.map(function (e) {
              return e.addListener(function () {
                n = !0;
              });
            })),
              l(),
              (this.$5 = i));
          }
        }),
        (t.addListener = function (t) {
          this.$1.push(t);
        }),
        (t.removeListener = function (t) {
          var e = this.$1.indexOf(t);
          e !== -1 && this.$1.splice(e, 1);
        }),
        (t.getNumListeners = function () {
          return this.$1.length;
        }),
        (t.reset = function () {
          (this.$7(), this.$8(), this.$9(), this.$10());
        }),
        (t.$7 = function () {
          this.$2 &&
            (this.$2.forEach(function (e) {
              return e.remove();
            }),
            (this.$2 = null));
        }),
        (t.$8 = function () {
          (this.$5 && this.$6 != null && this.$5.unregister(this.$6),
            (this.$5 = null),
            (this.$6 = null));
        }),
        (t.$10 = function () {
          this.$3 = null;
        }),
        (t.$9 = function () {
          this.$1 = [];
        }),
        (t.getDispatchToken = function () {
          return r("nullthrows")(this.$6, "dispatchToken must be set");
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
