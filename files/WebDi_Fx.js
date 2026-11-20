__d(
  "WebDi.Fx",
  ["WebDi.Node", "WebDi.UnsafeCoerce"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          ((this.tag = "Async"), (this.register = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })(),
      s = (function () {
        function e(e) {
          ((this.tag = "Suspend"), (this.make = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })(),
      u = (function () {
        function e(e, t) {
          ((this.tag = "Transform"), (this.source = e), (this.transform = t));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })(),
      c = (function () {
        function e(e, t) {
          ((this.tag = "Chain"), (this.source = e), (this.transform = t));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })(),
      d = (function () {
        function e(e, t, n) {
          (n === void 0 && (n = !1),
            (this.tag = "Recover"),
            (this.source = e),
            (this.recover = t),
            (this.all = n));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })(),
      m = (function () {
        function e(e, t, n) {
          ((this.tag = "WithServices"),
            (this.source = e),
            (this.overrides = t),
            (this.base = n));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })(),
      p = (function () {
        function e(e) {
          ((this.tag = "WithFiber"), (this.use = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })(),
      _ = (function () {
        function e(e) {
          ((this.tag = "Raise"), (this.cause = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.Node").iterate(this);
            }),
          e
        );
      })();
    function f(e) {
      return new (o("WebDi.Node").Sync)(e);
    }
    function g(e) {
      return new s(e);
    }
    function h(t) {
      return new e(t);
    }
    function y(e) {
      return function (t) {
        return new u(t, o("WebDi.UnsafeCoerce").coerce(e));
      };
    }
    function C(e) {
      return function (t) {
        return new c(t, o("WebDi.UnsafeCoerce").coerce(e));
      };
    }
    function b(e) {
      return function (t) {
        return new d(t, o("WebDi.UnsafeCoerce").coerce(e));
      };
    }
    ((l.Async = e),
      (l.Suspend = s),
      (l.Transform = u),
      (l.Chain = c),
      (l.Recover = d),
      (l.WithServices = m),
      (l.WithFiber = p),
      (l.Raise = _),
      (l.sync = f),
      (l.suspend = g),
      (l.async_ = h),
      (l.map = y),
      (l.flatMap = C),
      (l.catchAll = b));
  },
  98,
);
