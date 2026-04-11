__d(
  "kotlinx-atomicfu",
  ["kotlin-kotlin-stdlib"],
  function (t, n, r, o, a, i, l) {
    var e;
    ((e = o("kotlin-kotlin-stdlib")).initMetadataForClassbxx6q50dy2s7(
      s,
      "AtomicArray",
    ),
      e.initMetadataForClassbxx6q50dy2s7(p, "TraceBase"),
      e.initMetadataForObject1cxne3s9w65el(c, "None", e.VOID3gxj6tk5isa35, p),
      e.initMetadataForClassbxx6q50dy2s7(_, "AtomicRef"),
      e.initMetadataForClassbxx6q50dy2s7(g, "AtomicBoolean"),
      e.initMetadataForClassbxx6q50dy2s7(y, "AtomicInt"),
      e.initMetadataForClassbxx6q50dy2s7(b, "AtomicLong"));
    function s(e) {
      for (var t = this, n = 0, r = Array(e); n < e; )
        ((r[n] = f(null)), (n = (n + 1) | 0));
      t.uj_1 = r;
    }
    ((e.protoOf180f3jzyo7rfj(s).vj = function () {
      return this.uj_1.length;
    }),
      (e.protoOf180f3jzyo7rfj(s).atomicfu$get = function (e) {
        return this.uj_1[e];
      }));
    function u(e) {
      return new s(e);
    }
    function c() {
      ((d = this), p.call(this));
    }
    var d;
    function m() {
      return (d == null && new c(), d);
    }
    function p() {}
    ((e.protoOf180f3jzyo7rfj(p).atomicfu$Trace$append$1 = function (e) {}),
      (e.protoOf180f3jzyo7rfj(p).atomicfu$Trace$append$2 = function (e, t) {}),
      (e.protoOf180f3jzyo7rfj(p).atomicfu$Trace$append$3 = function (
        e,
        t,
        n,
      ) {}),
      (e.protoOf180f3jzyo7rfj(p).atomicfu$Trace$append$4 = function (
        e,
        t,
        n,
        r,
      ) {}));
    function _(e) {
      this.kotlinx$atomicfu$value = e;
    }
    ((e.protoOf180f3jzyo7rfj(_).wj = function (e) {
      this.kotlinx$atomicfu$value = e;
    }),
      (e.protoOf180f3jzyo7rfj(_).xj = function () {
        return this.kotlinx$atomicfu$value;
      }),
      (e.protoOf180f3jzyo7rfj(_).atomicfu$compareAndSet = function (e, t) {
        return this.kotlinx$atomicfu$value !== e
          ? !1
          : ((this.kotlinx$atomicfu$value = t), !0);
      }),
      (e.protoOf180f3jzyo7rfj(_).atomicfu$getAndSet = function (e) {
        var t = this.kotlinx$atomicfu$value;
        return ((this.kotlinx$atomicfu$value = e), t);
      }),
      (e.protoOf180f3jzyo7rfj(_).toString = function () {
        return o("kotlin-kotlin-stdlib").toString30pk9tzaqopn(
          this.kotlinx$atomicfu$value,
        );
      }));
    function f(e) {
      return S(e, m());
    }
    function g(e) {
      this.kotlinx$atomicfu$value = e;
    }
    ((e.protoOf180f3jzyo7rfj(g).yj = function (e) {
      this.kotlinx$atomicfu$value = e;
    }),
      (e.protoOf180f3jzyo7rfj(g).xj = function () {
        return this.kotlinx$atomicfu$value;
      }),
      (e.protoOf180f3jzyo7rfj(g).atomicfu$compareAndSet = function (e, t) {
        return this.kotlinx$atomicfu$value !== e
          ? !1
          : ((this.kotlinx$atomicfu$value = t), !0);
      }),
      (e.protoOf180f3jzyo7rfj(g).atomicfu$getAndSet = function (e) {
        var t = this.kotlinx$atomicfu$value;
        return ((this.kotlinx$atomicfu$value = e), t);
      }),
      (e.protoOf180f3jzyo7rfj(g).toString = function () {
        return this.kotlinx$atomicfu$value.toString();
      }));
    function h(e) {
      return R(e, m());
    }
    function y(e) {
      this.kotlinx$atomicfu$value = e;
    }
    ((e.protoOf180f3jzyo7rfj(y).zj = function (e) {
      this.kotlinx$atomicfu$value = e;
    }),
      (e.protoOf180f3jzyo7rfj(y).xj = function () {
        return this.kotlinx$atomicfu$value;
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$compareAndSet = function (e, t) {
        return this.kotlinx$atomicfu$value !== e
          ? !1
          : ((this.kotlinx$atomicfu$value = t), !0);
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$getAndSet = function (e) {
        var t = this.kotlinx$atomicfu$value;
        return ((this.kotlinx$atomicfu$value = e), t);
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$getAndIncrement = function () {
        var e = this.kotlinx$atomicfu$value;
        return ((this.kotlinx$atomicfu$value = (e + 1) | 0), e);
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$getAndDecrement = function () {
        var e = this.kotlinx$atomicfu$value;
        return ((this.kotlinx$atomicfu$value = (e - 1) | 0), e);
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$getAndAdd = function (e) {
        var t = this.kotlinx$atomicfu$value;
        return (
          (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value + e) | 0),
          t
        );
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$addAndGet = function (e) {
        return (
          (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value + e) | 0),
          this.kotlinx$atomicfu$value
        );
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$incrementAndGet = function () {
        return (
          (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value + 1) | 0),
          this.kotlinx$atomicfu$value
        );
      }),
      (e.protoOf180f3jzyo7rfj(y).atomicfu$decrementAndGet = function () {
        return (
          (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value - 1) | 0),
          this.kotlinx$atomicfu$value
        );
      }),
      (e.protoOf180f3jzyo7rfj(y).toString = function () {
        return this.kotlinx$atomicfu$value.toString();
      }));
    function C(e) {
      return L(e, m());
    }
    function b(e) {
      this.kotlinx$atomicfu$value = e;
    }
    ((e.protoOf180f3jzyo7rfj(b).ak = function (e) {
      this.kotlinx$atomicfu$value = e;
    }),
      (e.protoOf180f3jzyo7rfj(b).xj = function () {
        return this.kotlinx$atomicfu$value;
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$compareAndSet = function (e, t) {
        return this.kotlinx$atomicfu$value !== e
          ? !1
          : ((this.kotlinx$atomicfu$value = t), !0);
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$getAndSet = function (e) {
        var t = this.kotlinx$atomicfu$value;
        return ((this.kotlinx$atomicfu$value = e), t);
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$getAndIncrement$long = function () {
        var e = this.kotlinx$atomicfu$value;
        return (
          (this.kotlinx$atomicfu$value = o(
            "kotlin-kotlin-stdlib",
          ).add2suhfggl4zvkk(
            e,
            o("kotlin-kotlin-stdlib").get_ONEazvfdh9ju3d4(),
          )),
          e
        );
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$getAndDecrement$long = function () {
        var e = this.kotlinx$atomicfu$value;
        return (
          (this.kotlinx$atomicfu$value = o(
            "kotlin-kotlin-stdlib",
          ).subtract2orl8z9upxd9l(
            e,
            o("kotlin-kotlin-stdlib").get_ONEazvfdh9ju3d4(),
          )),
          e
        );
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$getAndAdd$long = function (e) {
        var t = this.kotlinx$atomicfu$value;
        return (
          (this.kotlinx$atomicfu$value = o(
            "kotlin-kotlin-stdlib",
          ).add2suhfggl4zvkk(this.kotlinx$atomicfu$value, e)),
          t
        );
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$addAndGet$long = function (e) {
        return (
          (this.kotlinx$atomicfu$value = o(
            "kotlin-kotlin-stdlib",
          ).add2suhfggl4zvkk(this.kotlinx$atomicfu$value, e)),
          this.kotlinx$atomicfu$value
        );
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$incrementAndGet$long = function () {
        return (
          (this.kotlinx$atomicfu$value = o(
            "kotlin-kotlin-stdlib",
          ).add2suhfggl4zvkk(
            this.kotlinx$atomicfu$value,
            o("kotlin-kotlin-stdlib").get_ONEazvfdh9ju3d4(),
          )),
          this.kotlinx$atomicfu$value
        );
      }),
      (e.protoOf180f3jzyo7rfj(b).atomicfu$decrementAndGet$long = function () {
        return (
          (this.kotlinx$atomicfu$value = o(
            "kotlin-kotlin-stdlib",
          ).subtract2orl8z9upxd9l(
            this.kotlinx$atomicfu$value,
            o("kotlin-kotlin-stdlib").get_ONEazvfdh9ju3d4(),
          )),
          this.kotlinx$atomicfu$value
        );
      }),
      (e.protoOf180f3jzyo7rfj(b).toString = function () {
        return this.kotlinx$atomicfu$value.toString();
      }));
    function v(e) {
      return E(e, m());
    }
    function S(e, t) {
      return (
        (t = t === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? m() : t),
        new _(e)
      );
    }
    function R(e, t) {
      return (
        (t = t === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? m() : t),
        new g(e)
      );
    }
    function L(e, t) {
      return (
        (t = t === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? m() : t),
        new y(e)
      );
    }
    function E(e, t) {
      return (
        (t = t === o("kotlin-kotlin-stdlib").VOID3gxj6tk5isa35 ? m() : t),
        new b(e)
      );
    }
    (e.defineProp3ur6h3slcvq4x(
      e.protoOf180f3jzyo7rfj(s),
      "atomicfu$size",
      e.protoOf180f3jzyo7rfj(s).vj,
    ),
      (l.atomicfu$AtomicRefArray$ofNulls2kz3j9ehigwa3 = u),
      (l.atomic$boolean$1iggki4z65a2h = h),
      (l.atomic$long$129k9zwo6n9ogd = v),
      (l.atomic$ref$130aurmcwdfdf1 = f),
      (l.atomic$int$11d5swdyn6j0pu = C));
  },
  98,
);
