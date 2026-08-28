__d(
  "Result",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e(e) {
          ((this.success = !1), (this.error = e));
        }
        var t = e.prototype;
        return (
          (t.andThen = function (t) {
            return this;
          }),
          (t.map = function (t) {
            return this;
          }),
          (t.mapError = function (t) {
            return g(t(this.error));
          }),
          (t.match = function (t) {
            return t.Error(this.error);
          }),
          (t.withDefault = function (t) {
            return t;
          }),
          e
        );
      })(),
      l = (function () {
        function e(e) {
          ((this.success = !0), (this.value = e));
        }
        var t = e.prototype;
        return (
          (t.andThen = function (t) {
            return t(this.value);
          }),
          (t.map = function (t) {
            return h(t(this.value));
          }),
          (t.mapError = function (t) {
            return this;
          }),
          (t.match = function (t) {
            return t.Success(this.value);
          }),
          (t.withDefault = function (t) {
            return this.value;
          }),
          e
        );
      })(),
      s = c,
      u = _;
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return t.reduce(function (e, t) {
          return e.andThen(t);
        }, h(e));
      };
    }
    function d(e, t) {
      return t.match(e);
    }
    function m(e, t) {
      return t.map(e);
    }
    function p(e, t) {
      return t.mapError(e);
    }
    function _(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      var o = n.find(function (e) {
        return !e.success;
      });
      if (o) return o;
      var a = n.map(function (e) {
        return e.value;
      });
      return h(e.apply(void 0, a));
    }
    function f(e, t) {
      return e.success === !1 ? t : e.value;
    }
    function g(t) {
      return new e(t);
    }
    function h(e) {
      return new l(e);
    }
    ((i.chain = s),
      (i.reduce = u),
      (i.match = d),
      (i.map = m),
      (i.mapError = p),
      (i.withDefault = f),
      (i.withError = g),
      (i.withSuccess = h));
  },
  66,
);
