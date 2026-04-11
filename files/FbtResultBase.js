__d(
  "FbtResultBase",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e),
          (this.__errorListener = t),
          (this.$3 = !1),
          (this.$2 = null));
      }
      var t = e.prototype;
      return (
        (t.flattenToArray = function () {
          return e.flattenToArray(this.$1);
        }),
        (t.getContents = function () {
          return this.$1;
        }),
        (t.toString = function () {
          if (Object.isFrozen(this)) return this.$4();
          if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
          this.$3 = !0;
          try {
            return this.$4();
          } finally {
            this.$3 = !1;
          }
        }),
        (t.$4 = function () {
          if (this.$2 != null) return this.$2;
          for (
            var t = "", n = this.flattenToArray(), r = 0;
            r < n.length;
            ++r
          ) {
            var o = n[r];
            if (typeof o == "string" || o instanceof e) t += o.toString();
            else {
              var a;
              (a = this.__errorListener) == null ||
                a.onStringSerializationError == null ||
                a.onStringSerializationError(o);
            }
          }
          return (Object.isFrozen(this) || (this.$2 = t), t);
        }),
        (t.toJSON = function () {
          return this.toString();
        }),
        (e.flattenToArray = function (n) {
          for (var t = [], r = 0; r < n.length; ++r) {
            var o = n[r];
            Array.isArray(o)
              ? t.push.apply(t, e.flattenToArray(o))
              : o instanceof e
                ? t.push.apply(t, o.flattenToArray())
                : t.push(o);
          }
          return t;
        }),
        e
      );
    })();
    [
      "anchor",
      "big",
      "blink",
      "bold",
      "charAt",
      "charCodeAt",
      "codePointAt",
      "contains",
      "endsWith",
      "fixed",
      "fontcolor",
      "fontsize",
      "includes",
      "indexOf",
      "italics",
      "lastIndexOf",
      "link",
      "localeCompare",
      "match",
      "normalize",
      "repeat",
      "replace",
      "search",
      "slice",
      "small",
      "split",
      "startsWith",
      "strike",
      "sub",
      "substr",
      "substring",
      "sup",
      "toLocaleLowerCase",
      "toLocaleUpperCase",
      "toLowerCase",
      "toUpperCase",
      "trim",
      "trimLeft",
      "trimRight",
    ].forEach(function (t) {
      e.prototype[t] = function () {
        var e;
        (e = this.__errorListener) == null ||
          e.onStringMethodUsed == null ||
          e.onStringMethodUsed(t);
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return String.prototype[t].apply(this, r);
      };
    });
    var l = e;
    a.exports = l;
  },
  null,
);
