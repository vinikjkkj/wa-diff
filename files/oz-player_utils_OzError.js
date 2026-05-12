__d(
  "oz-player/utils/OzError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        (n === void 0 && (n = 0),
          (r = e.call(this, t.description) || this),
          (r.$OzErrorClass$p_1 = t),
          (r.name = t.type),
          (r.message = t.description));
        var o = r.stack;
        if (!(typeof o == "string" && o !== ""))
          if (Error.captureStackTrace) {
            var a = {};
            (Error.captureStackTrace(a, r.constructor), (o = a.stack));
          } else {
            var i = new Error().stack.split("\n");
            (i.splice(/^Error/.test(i[0]) ? 1 : 0, 1),
              (o = "Error\n" + i.join("\n")));
          }
        return (
          typeof o == "string" && o !== ""
            ? (r.stack = o
                .split("\n")
                .map(function (e, t) {
                  return t === 0
                    ? r.name + ": " + r.message.replace(/\n.*/, " (...)")
                    : t - 1 < n
                      ? null
                      : e;
                })
                .filter(Boolean)
                .join("\n"))
            : (r.stack = ""),
          r
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
    i.OzErrorClass = e;
  },
  66,
);
