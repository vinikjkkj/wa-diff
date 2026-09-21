__d(
  "LexicalExtensionSignals.prod",
  [],
  function $module_LexicalExtensionSignals_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var t = Symbol["for"]("preact-signals");
    function i() {
      if (e > 1) return void e--;
      var t,
        i = !1;
      for (
        !(function () {
          var t = r;
          for (r = void 0; void 0 !== t; )
            (t.S.v === t.v && (t.S.i = t.i), (t = t.o));
        })();
        void 0 !== n;
      ) {
        var _o = n;
        for (n = void 0, h++; void 0 !== _o; ) {
          var _n = _o.u;
          if (((_o.u = void 0), (_o.f &= -3), !(8 & _o.f) && l(_o)))
            try {
              _o.c();
            } catch (o) {
              i || ((t = o), (i = !0));
            }
          _o = _n;
        }
      }
      if (((h = 0), e--, i)) throw t;
    }
    var o, n;
    function s(t) {
      var i = o;
      o = void 0;
      try {
        return t();
      } finally {
        o = i;
      }
    }
    var r,
      e = 0,
      h = 0,
      f = 0,
      c = 0,
      u = 0;
    function d(t) {
      if (void 0 === o) return;
      var i = t.n;
      return void 0 === i || i.t !== o
        ? ((i = {
            i: 0,
            S: t,
            p: o.s,
            n: void 0,
            t: o,
            e: void 0,
            x: void 0,
            r: i,
          }),
          void 0 !== o.s && (o.s.n = i),
          (o.s = i),
          (t.n = i),
          32 & o.f && t.S(i),
          i)
        : -1 === i.i
          ? ((i.i = 0),
            void 0 !== i.n &&
              ((i.n.p = i.p),
              void 0 !== i.p && (i.p.n = i.n),
              (i.p = o.s),
              (i.n = void 0),
              (o.s.n = i),
              (o.s = i)),
            i)
          : void 0;
    }
    function v(t, i) {
      ((this.v = t),
        (this.i = 0),
        (this.n = void 0),
        (this.t = void 0),
        (this.l = 0),
        (this.W = null == i ? void 0 : i.watched),
        (this.Z = null == i ? void 0 : i.unwatched),
        (this.name = null == i ? void 0 : i.name));
    }
    function l(t) {
      for (var _i = t.s; void 0 !== _i; _i = _i.n)
        if (_i.S.i !== _i.i || !_i.S.h() || _i.S.i !== _i.i) return !0;
      return !1;
    }
    function p(t) {
      for (var _i2 = t.s; void 0 !== _i2; _i2 = _i2.n) {
        var _o2 = _i2.S.n;
        if (
          (void 0 !== _o2 && (_i2.r = _o2),
          (_i2.S.n = _i2),
          (_i2.i = -1),
          void 0 === _i2.n)
        ) {
          t.s = _i2;
          break;
        }
      }
    }
    function y(t) {
      var i,
        o = t.s;
      for (; void 0 !== o; ) {
        var _t = o.p;
        (-1 === o.i
          ? (o.S.U(o),
            void 0 !== _t && (_t.n = o.n),
            void 0 !== o.n && (o.n.p = _t))
          : (i = o),
          (o.S.n = o.r),
          void 0 !== o.r && (o.r = void 0),
          (o = _t));
      }
      t.s = i;
    }
    function a(t, i) {
      (v.call(this, void 0),
        (this.x = t),
        (this.s = void 0),
        (this.g = u - 1),
        (this.f = 4),
        (this.W = null == i ? void 0 : i.watched),
        (this.Z = null == i ? void 0 : i.unwatched),
        (this.name = null == i ? void 0 : i.name));
    }
    function S(t) {
      var n = t.m;
      if (((t.m = void 0), "function" == typeof n)) {
        e++;
        var _s = o;
        o = void 0;
        try {
          n();
        } catch (i) {
          throw ((t.f &= -2), (t.f |= 8), w(t), i);
        } finally {
          ((o = _s), i());
        }
      }
    }
    function w(t) {
      for (var _i3 = t.s; void 0 !== _i3; _i3 = _i3.n) _i3.S.U(_i3);
      ((t.x = void 0), (t.s = void 0), S(t));
    }
    function x(t) {
      if (o !== this) throw new Error("Out-of-order effect");
      (y(this), (o = t), (this.f &= -2), 8 & this.f && w(this), i());
    }
    function m(t, i) {
      ((this.x = t),
        (this.m = void 0),
        (this.s = void 0),
        (this.u = void 0),
        (this.f = 32),
        (this.name = null == i ? void 0 : i.name));
    }
    function b(t, i) {
      var o = new m(t, i);
      try {
        o.c();
      } catch (t) {
        throw (o.d(), t);
      }
      var n = o.d.bind(o);
      return (
        (n[typeof Symbol === "function" ? Symbol.dispose : "@@dispose"] = n),
        n
      );
    }
    ((v.prototype.brand = t),
      (v.prototype.h = function () {
        return !0;
      }),
      (v.prototype.S = function (t) {
        var _this = this;
        var i = this.t;
        i !== t &&
          void 0 === t.e &&
          ((t.x = i),
          (this.t = t),
          void 0 !== i
            ? (i.e = t)
            : s(function () {
                var t;
                null == (t = _this.W) || t.call(_this);
              }));
      }),
      (v.prototype.U = function (t) {
        var _this2 = this;
        if (void 0 !== this.t) {
          var _i4 = t.e,
            _o3 = t.x;
          (void 0 !== _i4 && ((_i4.x = _o3), (t.e = void 0)),
            void 0 !== _o3 && ((_o3.e = _i4), (t.x = void 0)),
            t === this.t &&
              ((this.t = _o3),
              void 0 === _o3 &&
                s(function () {
                  var t;
                  null == (t = _this2.Z) || t.call(_this2);
                })));
        }
      }),
      (v.prototype.subscribe = function (t) {
        var _this3 = this;
        return b(
          function () {
            var i = _this3.value,
              n = o;
            o = void 0;
            try {
              t(i);
            } finally {
              o = n;
            }
          },
          { name: "sub" },
        );
      }),
      (v.prototype.valueOf = function () {
        return this.value;
      }),
      (v.prototype.toString = function () {
        return this.value + "";
      }),
      (v.prototype.toJSON = function () {
        return this.value;
      }),
      (v.prototype.peek = function () {
        var t = o;
        o = void 0;
        try {
          return this.value;
        } finally {
          o = t;
        }
      }),
      Object.defineProperty(v.prototype, "value", {
        get: function get() {
          var t = d(this);
          return (void 0 !== t && (t.i = this.i), this.v);
        },
        set: function set(t) {
          if (t !== this.v) {
            if (h > 100) throw new Error("Cycle detected");
            (!(function (t) {
              0 !== e &&
                0 === h &&
                t.l !== c &&
                ((t.l = c), (r = { S: t, v: t.v, i: t.i, o: r }));
            })(this),
              (this.v = t),
              this.i++,
              u++,
              e++);
            try {
              for (var _t2 = this.t; void 0 !== _t2; _t2 = _t2.x) _t2.t.N();
            } finally {
              i();
            }
          }
        },
      }),
      (a.prototype = new v()),
      (a.prototype.h = function () {
        if (((this.f &= -3), 1 & this.f)) return !1;
        if (32 == (36 & this.f)) return !0;
        if (((this.f &= -5), this.g === u)) return !0;
        if (((this.g = u), (this.f |= 1), this.i > 0 && !l(this)))
          return ((this.f &= -2), !0);
        var t = o;
        try {
          (p(this), (o = this));
          var _t3 = this.x();
          (16 & this.f || this.v !== _t3 || 0 === this.i) &&
            ((this.v = _t3), (this.f &= -17), this.i++);
        } catch (t) {
          ((this.v = t), (this.f |= 16), this.i++);
        }
        return ((o = t), y(this), (this.f &= -2), !0);
      }),
      (a.prototype.S = function (t) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var _t4 = this.s; void 0 !== _t4; _t4 = _t4.n) _t4.S.S(_t4);
        }
        v.prototype.S.call(this, t);
      }),
      (a.prototype.U = function (t) {
        if (
          void 0 !== this.t &&
          (v.prototype.U.call(this, t), void 0 === this.t)
        ) {
          this.f &= -33;
          for (var _t5 = this.s; void 0 !== _t5; _t5 = _t5.n) _t5.S.U(_t5);
        }
      }),
      (a.prototype.N = function () {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var _t6 = this.t; void 0 !== _t6; _t6 = _t6.x) _t6.t.N();
        }
      }),
      Object.defineProperty(a.prototype, "value", {
        get: function get() {
          if (1 & this.f) throw new Error("Cycle detected");
          var t = d(this);
          if ((this.h(), void 0 !== t && (t.i = this.i), 16 & this.f))
            throw this.v;
          return this.v;
        },
      }),
      (m.prototype.c = function () {
        var t = this.S();
        try {
          if (8 & this.f) return;
          if (void 0 === this.x) return;
          var _t7 = this.x();
          "function" == typeof _t7 && (this.m = _t7);
        } finally {
          t();
        }
      }),
      (m.prototype.S = function () {
        if (1 & this.f) throw new Error("Cycle detected");
        ((this.f |= 1), (this.f &= -9), S(this), p(this), e++);
        var t = o;
        return ((o = this), x.bind(this, t));
      }),
      (m.prototype.N = function () {
        2 & this.f || ((this.f |= 2), (this.u = n), (n = this));
      }),
      (m.prototype.d = function () {
        ((this.f |= 8), 1 & this.f || w(this));
      }),
      (m.prototype.dispose = function () {
        this.d();
      }),
      (exports.batch = function (t) {
        if (e > 0) return t();
        ((c = ++f), e++);
        try {
          return t();
        } finally {
          i();
        }
      }),
      (exports.computed = function (t, i) {
        return new a(t, i);
      }),
      (exports.effect = b),
      (exports.signal = function (t, i) {
        return new v(t, i);
      }),
      (exports.untracked = s));
  },
  null,
);
