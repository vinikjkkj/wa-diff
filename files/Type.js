__d(
  "Type",
  ["Assert"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = this.__mixins;
      if (e) for (var t = 0; t < e.length; t++) e[t].apply(this, arguments);
    }
    function l(t, n) {
      if (n instanceof t) return !0;
      if (n instanceof e) {
        for (var r = 0; r < n.__mixins.length; r++)
          if (n.__mixins[r] === t) return !0;
      }
      return !1;
    }
    function s(e, t) {
      var n = e.prototype;
      Array.isArray(t) || (t = [t]);
      for (
        var r = function () {
            var e = t[o];
            (typeof e == "function" && (n.__mixins.push(e), (e = e.prototype)),
              Object.keys(e).forEach(function (t) {
                n[t] = e[t];
              }));
          },
          o = 0;
        o < t.length;
        o++
      )
        r();
    }
    function u(t, r, o) {
      var a =
        r && Object.prototype.hasOwnProperty.call(r, "constructor")
          ? r.constructor
          : function () {
              this.parent.apply(this, arguments);
            };
      if ((n("Assert").isFunction(a), t && !(t.prototype instanceof e))) {
        var i = new Error("parent type does not inherit from Type");
        throw (i.stack, i);
      }
      return (
        (t = t || e),
        (a.prototype = Object.create(t.prototype)),
        r && Object.assign(a.prototype, r),
        (a.prototype.constructor = a),
        (a.parent = t),
        (a.prototype.__mixins = t.prototype.__mixins
          ? Array.prototype.slice.call(t.prototype.__mixins)
          : []),
        o && s(a, o),
        (a.prototype.parent = function () {
          ((this.parent = t.prototype.parent), t.apply(this, arguments));
        }),
        (a.prototype.parentCall = function (e) {
          return t.prototype[e].apply(
            this,
            Array.prototype.slice.call(arguments, 1),
          );
        }),
        (a.extend = function (e, t) {
          return u(this, e, t);
        }),
        a
      );
    }
    (Object.assign(e.prototype, {
      instanceOf: function (t) {
        return l(t, this);
      },
    }),
      Object.assign(e, {
        extend: function (t, n) {
          return typeof t == "function"
            ? u.apply(null, arguments)
            : u(null, t, n);
        },
        instanceOf: l,
      }),
      (a.exports = e));
  },
  null,
);
