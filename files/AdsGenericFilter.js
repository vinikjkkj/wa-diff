__d(
  "AdsGenericFilter",
  [
    "invariant",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterOperator",
    "FBLogger",
    "LegacyImmutableObject",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("getObjectValues")(r("AdsGenericFilterOperator")),
      u = {},
      c = (function (e) {
        function t(t, n, o, a, i) {
          (a === void 0 && (a = {}), i === void 0 && (i = []));
          var l = o,
            s = l;
          if (l == null || (typeof l == "number" && isNaN(l)))
            throw r("FBLogger")("ads").warn("invalid filter value");
          Array.isArray(l) && l.length > 1 && ((l = l.slice(0)), l.sort());
          var c = i.map(function (e) {
            return e == null ? e : e.toLowerCase();
          });
          return (
            (u.field = t),
            (u.operator = n),
            (u.value = s),
            (u.extraRenderingProps = a),
            (u.prefixes = c),
            (u.key = JSON.stringify(c.concat(t.toString(), n, l))),
            e.call(this, u) || this
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getField = function () {
            return this.field;
          }),
          (n.getOperator = function () {
            return this.operator;
          }),
          (n.getValue = function () {
            return this.value;
          }),
          (n.toString = function () {
            return this.key;
          }),
          (n.toAPI = function () {
            return this.isComplete()
              ? {
                  field: this.prefixes.join("") + this.field.name,
                  operator: this.operator,
                  value: this.value,
                }
              : null;
          }),
          (n.isComplete = function () {
            switch (this.operator) {
              case "IN":
              case "NOT_IN":
              case "ALL":
              case "ANY":
                return Array.isArray(this.value) && this.value.length !== 0;
              case "IN_RANGE":
              case "NOT_IN_RANGE":
                return Array.isArray(this.value) && this.value.length === 2;
              case "CONTAINS_ANY":
              case "NOT_CONTAINS_ANY":
              case "CONTAINS_ALL":
                return Array.isArray(this.value)
                  ? this.value.length !== 0
                  : typeof this.value == "string" && this.value !== "";
              default:
                return this.value !== "";
            }
          }),
          t
        );
      })(r("LegacyImmutableObject"));
    l.default = c;
  },
  98,
);
