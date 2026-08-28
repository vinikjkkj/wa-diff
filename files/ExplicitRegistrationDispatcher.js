__d(
  "ExplicitRegistrationDispatcher",
  [
    "Dispatcher_DEPRECATED",
    "ExplicitRegistrationDispatcherUtils",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.strict;
        return (
          (n = e.call(this) || this),
          (n.$ExplicitRegistrationDispatcher$p_2 = r),
          (n.$ExplicitRegistrationDispatcher$p_1 = {}),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.explicitlyRegisterStore = function (t) {
          var e = t.getDispatchToken();
          return ((this.$ExplicitRegistrationDispatcher$p_1[e] = !0), e);
        }),
        (n.explicitlyRegisterStores = function (t) {
          var e = this;
          return t.map(function (t) {
            return e.explicitlyRegisterStore(t);
          });
        }),
        (n.register = function (n, r) {
          var t = this,
            o = this.__genID(r);
          this.$ExplicitRegistrationDispatcher$p_1[o] = !1;
          var a = e.prototype.register.call(
            this,
            this.$ExplicitRegistrationDispatcher$p_4.bind(this, o, n),
            o,
          );
          return a;
        }),
        (n.$ExplicitRegistrationDispatcher$p_4 = function (t, n, r) {
          (this.$ExplicitRegistrationDispatcher$p_1[t] ||
            !this.$ExplicitRegistrationDispatcher$p_2) &&
            this.__invokeCallback(t, n, r);
        }),
        (n.unregister = function (n) {
          (e.prototype.unregister.call(this, n),
            delete this.$ExplicitRegistrationDispatcher$p_1[n]);
        }),
        (n.__getMaps = function () {}),
        t
      );
    })(r("Dispatcher_DEPRECATED"));
    l.default = e;
  },
  98,
);
