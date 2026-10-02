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
      if (h > 1) return void h--;
      var t,
        i = !1;
      for (
        (function () {
          var t = e;
          for (e = void 0; void 0 !== t; ) {
            var _i = t.S;
            if (_i.v === t.v)
              for (var _o = _i.t; void 0 !== _o; _o = _o.x)
                _o.i === t.i && (_o.i = _i.i);
            t = t.o;
          }
        })();
        void 0 !== s;
      ) {
        var _o2 = s;
        for (s = void 0, f++; void 0 !== _o2; ) {
          var _n = _o2.u;
          if (((_o2.u = void 0), (_o2.f &= -3), !(8 & _o2.f) && l(_o2)))
            try {
              _o2.c();
            } catch (o) {
              i || ((t = o), (i = !0));
            }
          _o2 = _n;
        }
      }
      if (((f = 0), h--, i)) throw t;
    }
    var o, n, s;
    function r(t) {
      var i = o,
        s = n;
      ((o = void 0), (n = void 0));
      try {
        return t();
      } finally {
        ((o = i), (n = s));
      }
    }
    var e,
      h = 0,
      f = 0,
      c = 0,
      u = 0,
      v = 0;
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
    function p(t, i) {
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
      for (var _i2 = t.s; void 0 !== _i2; _i2 = _i2.n)
        if (_i2.S.i !== _i2.i || !_i2.S.h() || _i2.S.i !== _i2.i) return !0;
      return !1;
    }
    function y(t) {
      for (var _i3 = t.s; void 0 !== _i3; _i3 = _i3.n) {
        var _o3 = _i3.S.n;
        if (
          (void 0 !== _o3 && (_i3.r = _o3),
          (_i3.S.n = _i3),
          (_i3.i = -1),
          void 0 === _i3.n)
        ) {
          t.s = _i3;
          break;
        }
      }
    }
    function a(t) {
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
    function S(t, i) {
      (p.call(this, void 0, i),
        (this.x = t),
        (this.s = void 0),
        (this.g = v - 1),
        (this.f = 4));
    }
    function x(t) {
      var n = t.m;
      if (((t.m = void 0), "function" == typeof n)) {
        h++;
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
      for (var _i4 = t.s; void 0 !== _i4; _i4 = _i4.n) _i4.S.U(_i4);
      ((t.x = void 0), (t.s = void 0), x(t));
    }
    function b(t) {
      if (o !== this) throw new Error("Out-of-order effect");
      (a(this), (o = t), (this.f &= -2), 8 & this.f && w(this), i());
    }
    function m(t, i) {
      ((this.x = t),
        (this.m = void 0),
        (this.s = void 0),
        (this.u = void 0),
        (this.f = 32),
        (this.name = null == i ? void 0 : i.name),
        n && n.push(this));
    }
    function g(t, i) {
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
    ((p.prototype.brand = t),
      (p.prototype.h = function () {
        return !0;
      }),
      (p.prototype.S = function (t) {
        var _this = this;
        var i = this.t;
        i !== t &&
          void 0 === t.e &&
          ((t.x = i),
          (this.t = t),
          void 0 !== i
            ? (i.e = t)
            : r(function () {
                var t;
                null == (t = _this.W) || t.call(_this);
              }));
      }),
      (p.prototype.U = function (t) {
        var _this2 = this;
        if (void 0 !== this.t) {
          var _i5 = t.e,
            _o4 = t.x;
          (void 0 !== _i5 && ((_i5.x = _o4), (t.e = void 0)),
            void 0 !== _o4 && ((_o4.e = _i5), (t.x = void 0)),
            t === this.t &&
              ((this.t = _o4),
              void 0 === _o4 &&
                r(function () {
                  var t;
                  null == (t = _this2.Z) || t.call(_this2);
                })));
        }
      }),
      (p.prototype.subscribe = function (t) {
        var _this3 = this;
        return g(
          function () {
            var i = _this3.value;
            r(function () {
              return t(i);
            });
          },
          { name: "sub" },
        );
      }),
      (p.prototype.valueOf = function () {
        return this.value;
      }),
      (p.prototype.toString = function () {
        return this.value + "";
      }),
      (p.prototype.toJSON = function () {
        return this.value;
      }),
      (p.prototype.peek = function () {
        var _this4 = this;
        return r(function () {
          return _this4.value;
        });
      }),
      Object.defineProperty(p.prototype, "value", {
        get: function get() {
          var t = d(this);
          return (void 0 !== t && (t.i = this.i), this.v);
        },
        set: function set(t) {
          if (t !== this.v) {
            if (f > 100) throw new Error("Cycle detected");
            (!(function (t) {
              0 !== h &&
                0 === f &&
                t.l !== u &&
                ((t.l = u), (e = { S: t, v: t.v, i: t.i, o: e }));
            })(this),
              (this.v = t),
              this.i++,
              v++,
              h++);
            try {
              for (var _t2 = this.t; void 0 !== _t2; _t2 = _t2.x) _t2.t.N();
            } finally {
              i();
            }
          }
        },
      }),
      (S.prototype = new p()),
      (S.prototype.h = function () {
        if (((this.f &= -3), 1 & this.f)) return !1;
        if (32 == (36 & this.f)) return !0;
        if (((this.f &= -5), this.g === v)) return !0;
        if (((this.g = v), (this.f |= 1), this.i > 0 && !l(this)))
          return ((this.f &= -2), !0);
        var t = o;
        try {
          (y(this), (o = this));
          var _t3 = this.x();
          (16 & this.f || this.v !== _t3 || 0 === this.i) &&
            ((this.v = _t3), (this.f &= -17), this.i++);
        } catch (t) {
          ((this.v = t), (this.f |= 16), this.i++);
        }
        return ((o = t), a(this), (this.f &= -2), !0);
      }),
      (S.prototype.S = function (t) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var _t4 = this.s; void 0 !== _t4; _t4 = _t4.n) _t4.S.S(_t4);
        }
        p.prototype.S.call(this, t);
      }),
      (S.prototype.U = function (t) {
        if (
          void 0 !== this.t &&
          (p.prototype.U.call(this, t), void 0 === this.t)
        ) {
          this.f &= -33;
          for (var _t5 = this.s; void 0 !== _t5; _t5 = _t5.n) _t5.S.U(_t5);
        }
      }),
      (S.prototype.N = function () {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var _t6 = this.t; void 0 !== _t6; _t6 = _t6.x) _t6.t.N();
        }
      }),
      Object.defineProperty(S.prototype, "value", {
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
        ((this.f |= 1), (this.f &= -9), x(this), y(this), h++);
        var t = o;
        return ((o = this), b.bind(this, t));
      }),
      (m.prototype.N = function () {
        2 & this.f || ((this.f |= 2), (this.u = s), (s = this));
      }),
      (m.prototype.d = function () {
        ((this.f |= 8), 1 & this.f || w(this));
      }),
      (m.prototype.dispose = function () {
        this.d();
      }),
      (exports.batch = function (t) {
        if (h > 0) return t();
        ((u = ++c), h++);
        try {
          return t();
        } finally {
          i();
        }
      }),
      (exports.computed = function (t, i) {
        return new S(t, i);
      }),
      (exports.effect = g),
      (exports.signal = function (t, i) {
        return new p(t, i);
      }),
      (exports.untracked = r));
  },
  null,
);
