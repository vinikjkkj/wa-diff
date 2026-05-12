__d(
  "oz-player/utils/OzError",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var o;
        (n === void 0 && (n = 0),
          (o = e.call(this, t.description) || this),
          (o.$OzErrorClass$p_1 = t),
          (o.name = t.type),
          (o.message = t.description));
        var a = o.stack;
        if (!(typeof a == "string" && a !== ""))
          if (Error.captureStackTrace) {
            var i = {};
            (Error.captureStackTrace(i, o.constructor), (a = i.stack));
          } else {
            var l = r("err")("").stack.split("\n");
            (l.splice(/^Error/.test(l[0]) ? 1 : 0, 1),
              (a = "Error\n" + l.join("\n")));
          }
        return (
          typeof a == "string" && a !== ""
            ? (o.stack = a
                .split("\n")
                .map(function (e, t) {
                  return t === 0
                    ? o.name + ": " + o.message.replace(/\n.*/, " (...)")
                    : t - 1 < n
                      ? null
                      : e;
                })
                .filter(Boolean)
                .join("\n"))
            : (o.stack = ""),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getExtra = function () {
          return this.$OzErrorClass$p_1.extra || {};
        }),
        (n.getType = function () {
          return this.$OzErrorClass$p_1.type;
        }),
        (n.getDescription = function () {
          return this.$OzErrorClass$p_1.description;
        }),
        t
      );
    })(babelHelpers.wrapNativeSuper(Error));
    l.OzErrorClass = e;
  },
  98,
);
