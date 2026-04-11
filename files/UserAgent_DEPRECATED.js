__d(
  "UserAgent_DEPRECATED",
  [],
  function (t, n, r, o, a, i) {
    var e = !1,
      l,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S;
    function R() {
      if (!e) {
        e = !0;
        var t = navigator.userAgent,
          n =
            /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
              t,
            ),
          r = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
        if (
          ((y = /\b(iPhone|iP[ao]d)/.exec(t)),
          (C = /\b(iP[ao]d)/.exec(t)),
          (g = /Android/i.exec(t)),
          (b = /FBAN\/\w+;/i.exec(t)),
          (v = /FBAN\/mLite;/i.exec(t)),
          (S = /Mobile/i.exec(t)),
          (h = !!/Win64/.exec(t)),
          n)
        ) {
          ((l = n[1] ? parseFloat(n[1]) : n[5] ? parseFloat(n[5]) : NaN),
            l &&
              document &&
              document.documentMode &&
              (l = document.documentMode));
          var o = /(?:Trident\/(\d+.\d+))/.exec(t);
          ((m = o ? parseFloat(o[1]) + 4 : l),
            (s = n[2] ? parseFloat(n[2]) : NaN),
            (u = n[3] ? parseFloat(n[3]) : NaN),
            (c = n[4] ? parseFloat(n[4]) : NaN),
            c
              ? ((n = /(?:Chrome\/(\d+\.\d+))/.exec(t)),
                (d = n && n[1] ? parseFloat(n[1]) : NaN))
              : (d = NaN));
        } else l = s = u = d = c = NaN;
        if (r) {
          if (r[1]) {
            var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
            p = a ? parseFloat(a[1].replace("_", ".")) : !0;
          } else p = !1;
          ((_ = !!r[2]), (f = !!r[3]));
        } else p = _ = f = !1;
      }
    }
    function L() {
      return (R(), l);
    }
    function E() {
      return (R(), m > l);
    }
    function k() {
      return L() && h;
    }
    function I() {
      return (R(), s);
    }
    function T() {
      return (R(), u);
    }
    function D() {
      return (R(), c);
    }
    function x() {
      return D();
    }
    function $() {
      return (R(), d);
    }
    function P() {
      return (R(), _);
    }
    function N() {
      return (R(), p);
    }
    function M() {
      return (R(), f);
    }
    function w() {
      return (R(), y);
    }
    function A() {
      return (R(), y || C || g || S);
    }
    function F() {
      return (R(), v != null ? null : b);
    }
    function O() {
      return (R(), g);
    }
    function B() {
      return (R(), C);
    }
    ((i.ie = L),
      (i.ieCompatibilityMode = E),
      (i.ie64 = k),
      (i.firefox = I),
      (i.opera = T),
      (i.webkit = D),
      (i.safari = x),
      (i.chrome = $),
      (i.windows = P),
      (i.osx = N),
      (i.linux = M),
      (i.iphone = w),
      (i.mobile = A),
      (i.nativeApp = F),
      (i.android = O),
      (i.ipad = B));
  },
  66,
);
