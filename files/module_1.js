__d(
  "$InternalEnum",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.prototype.hasOwnProperty,
      l = typeof WeakMap == "function" ? new WeakMap() : new Map();
    function s(e) {
      var t = l.get(e);
      if (t !== void 0) return t;
      var n = new Map();
      Object.getOwnPropertyNames(e).forEach(function (t) {
        n.set(e[t], t);
      });
      try {
        l.set(e, n);
      } catch (e) {}
      return n;
    }
    var u = Object.freeze(
      Object.defineProperties(Object.create(null), {
        isValid: {
          value: function (t) {
            return s(this).has(t);
          },
        },
        cast: {
          value: function (t) {
            return this.isValid(t) ? t : void 0;
          },
        },
        members: {
          value: function () {
            return s(this).keys();
          },
        },
        getName: {
          value: function (t) {
            return s(this).get(t);
          },
        },
      }),
    );
    function c(t) {
      var n = Object.create(u);
      for (var r in t)
        e.call(t, r) && Object.defineProperty(n, r, { value: t[r] });
      return Object.freeze(n);
    }
    var d = Object.freeze(
      Object.defineProperties(Object.create(null), {
        isValid: {
          value: function (n) {
            return typeof n == "string" ? e.call(this, n) : !1;
          },
        },
        cast: { value: u.cast },
        members: {
          value: function () {
            return Object.getOwnPropertyNames(this).values();
          },
        },
        getName: {
          value: function (t) {
            return t;
          },
        },
      }),
    );
    ((c.Mirrored = function (t) {
      for (var e = Object.create(d), n = 0, r = t.length; n < r; ++n)
        Object.defineProperty(e, t[n], { value: t[n] });
      return Object.freeze(e);
    }),
      Object.freeze(c.Mirrored),
      (a.exports = Object.freeze(c)));
  },
  null,
);
