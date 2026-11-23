__d(
  "MAIBAA2UIv09ComponentHelpers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "start"
        ? "start"
        : e === "center"
          ? "center"
          : e === "end"
            ? "end"
            : "stretch";
    }
    function l(e) {
      return e === 0
        ? 0
        : e === 2
          ? 2
          : e === 4
            ? 4
            : e === 6
              ? 6
              : e === 8
                ? 8
                : e === 12
                  ? 12
                  : e === 16
                    ? 16
                    : e === 18
                      ? 18
                      : e === 20
                        ? 20
                        : e === 22
                          ? 22
                          : e === 24
                            ? 24
                            : e === 28
                              ? 28
                              : e === 29
                                ? 29
                                : e === 32
                                  ? 32
                                  : e === 36
                                    ? 36
                                    : e === 40
                                      ? 40
                                      : 8;
    }
    function s(e) {
      return e === "spaceBetween" || e === "space-between"
        ? "space-between"
        : e === "spaceAround" ||
            e === "space-around" ||
            e === "spaceEvenly" ||
            e === "space-evenly"
          ? "space-around"
          : e === "center"
            ? "center"
            : e === "end"
              ? "end"
              : "start";
    }
    function u(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t[n] = String(e[n]);
        }),
        t
      );
    }
    function c(e, t) {
      var n = u(t);
      if (e.event != null) {
        var r;
        return babelHelpers.extends({}, e, {
          event: babelHelpers.extends({}, e.event, {
            context: babelHelpers.extends(
              {},
              n,
              (r = e.event.context) != null ? r : {},
            ),
          }),
        });
      }
      var o = n;
      return babelHelpers.extends({}, e, {
        functionCall: babelHelpers.extends({}, e.functionCall, {
          args: babelHelpers.extends({}, o, e.functionCall.args),
        }),
      });
    }
    function d(e) {
      return typeof e.message == "string" ? e.message : null;
    }
    var m = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    function p(e, t, n, r, o) {
      return t != null && e < t
        ? r != null
          ? r
          : "Must be at least " + t + o + "."
        : n != null && e > n
          ? r != null
            ? r
            : "Must be at most " + n + o + "."
          : null;
    }
    function _(e, t) {
      var n,
        r,
        o,
        a,
        i =
          (n = (r = t.condition) == null ? void 0 : r.call) != null
            ? n
            : t.call,
        l =
          (o = (a = t.condition) == null ? void 0 : a.args) != null
            ? o
            : t.args;
      if (i === "required") {
        var s;
        return e.trim() === ""
          ? (s = d(t)) != null
            ? s
            : "This field is required."
          : null;
      }
      if (i === "email") {
        var u;
        return e === "" || m.test(e)
          ? null
          : (u = d(t)) != null
            ? u
            : "Enter a valid email address.";
      }
      if (i === "regex") {
        var c,
          _ =
            typeof (l == null ? void 0 : l.pattern) == "string"
              ? l.pattern
              : null;
        if (_ == null || e === "") return null;
        var f;
        try {
          f = new RegExp(_);
        } catch (e) {
          return null;
        }
        return f.test(e) ? null : (c = d(t)) != null ? c : "Invalid value.";
      }
      if (i === "length") {
        if (e === "") return null;
        var g = typeof (l == null ? void 0 : l.min) == "number" ? l.min : null,
          h = typeof (l == null ? void 0 : l.max) == "number" ? l.max : null;
        return p(e.length, g, h, d(t), " characters");
      }
      if (i === "numeric") {
        if (e === "") return null;
        var y = Number(e);
        if (Number.isNaN(y)) {
          var C;
          return (C = d(t)) != null ? C : "Enter a valid number.";
        }
        var b = typeof (l == null ? void 0 : l.min) == "number" ? l.min : null,
          v = typeof (l == null ? void 0 : l.max) == "number" ? l.max : null;
        return p(y, b, v, d(t), "");
      }
      return null;
    }
    function f(e, t) {
      if (t == null) return null;
      for (var n of t) {
        var r = _(e, n);
        if (r != null) return r;
      }
      return null;
    }
    function g(e, t) {
      return f(e, t) == null;
    }
    ((i.mapAlign = e),
      (i.mapGap = l),
      (i.mapJustify = s),
      (i.enrichActionWithFormData = c),
      (i.checkFailureMessage = f),
      (i.checksPass = g));
  },
  66,
);
