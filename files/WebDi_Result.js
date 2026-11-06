__d(
  "WebDi.Result",
  ["WebDi.Node", "WebDi.UnsafeCoerce"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          ((this.tag = "Ok"), (this.ok = !0), (this.value = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.UnsafeCoerce").coerce(
                new (o("WebDi.Node").SingleShot)(this),
              );
            }),
          (t.map = function (n) {
            return new e(n(this.value));
          }),
          (t.mapErr = function (t) {
            return this;
          }),
          (t.andThen = function (t) {
            return t(this.value);
          }),
          (t.orElse = function (t) {
            return this;
          }),
          (t.match = function (t) {
            return t.ok(this.value);
          }),
          (t.tap = function (t) {
            return (t(this.value), this);
          }),
          (t.tapErr = function (t) {
            return this;
          }),
          (t.getOrElse = function (t) {
            return this.value;
          }),
          (t.getOrThrow = function () {
            return this.value;
          }),
          (t.getOrNull = function () {
            return this.value;
          }),
          (t.toTuple = function () {
            return [this.value, null];
          }),
          (t.toUnion = function () {
            return this.value;
          }),
          e
        );
      })(),
      s = (function () {
        function e(e) {
          ((this.tag = "Err"), (this.ok = !1), (this.error = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return o("WebDi.UnsafeCoerce").coerce(
                new (o("WebDi.Node").SingleShot)(this),
              );
            }),
          (t.map = function (t) {
            return this;
          }),
          (t.mapErr = function (n) {
            return new e(n(this.error));
          }),
          (t.andThen = function (t) {
            return this;
          }),
          (t.orElse = function (t) {
            return t(this.error);
          }),
          (t.match = function (t) {
            return t.err(this.error);
          }),
          (t.tap = function (t) {
            return this;
          }),
          (t.tapErr = function (t) {
            return (t(this.error), this);
          }),
          (t.getOrElse = function (t) {
            return t;
          }),
          (t.getOrThrow = function () {
            throw this.error;
          }),
          (t.getOrNull = function () {
            return null;
          }),
          (t.toTuple = function () {
            return [null, this.error];
          }),
          (t.toUnion = function () {
            return this.error;
          }),
          e
        );
      })();
    function u(t) {
      return new e(t);
    }
    function c(e) {
      return new s(e);
    }
    function d(t) {
      return t instanceof e;
    }
    function m(e) {
      return e instanceof s;
    }
    function p(t) {
      return t instanceof e || t instanceof s;
    }
    function _(t, n) {
      try {
        return new e(t());
      } catch (e) {
        return new s(n(e));
      }
    }
    function f(t, n) {
      return t == null ? new s(n()) : new e(t);
    }
    function g(t) {
      var n = [];
      for (var r of t) {
        if (r instanceof s) return o("WebDi.UnsafeCoerce").coerce(r);
        n.push(r.value);
      }
      return new e(o("WebDi.UnsafeCoerce").coerce(n));
    }
    function h(t) {
      var n = [],
        r = [];
      for (var o of t) o instanceof e ? n.push(o.value) : r.push(o.error);
      return { errors: r, values: n };
    }
    ((l.Ok = e),
      (l.Err = s),
      (l.ok = u),
      (l.err = c),
      (l.fail = c),
      (l.succeed = u),
      (l.isOk = d),
      (l.isErr = m),
      (l.isResult = p),
      (l.attempt = _),
      (l.fromNullable = f),
      (l.all = g),
      (l.partition = h));
  },
  98,
);
