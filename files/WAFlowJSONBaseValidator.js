__d(
  "WAFlowJSONBaseValidator",
  ["invariant", "WAFlowJSONValidationResultUtil", "WATypeUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.creationSource = null),
          (this.nextInChain = null),
          (this.flowJSONData = e),
          (this.creationSource = t));
      }
      var t = e.prototype;
      return (
        (t.doValidate = function () {
          return o("WAFlowJSONValidationResultUtil").deduplicateErrors(
            this.validate(),
          );
        }),
        (t.validate = function () {
          s(0, 82237);
        }),
        (e.addToErrors = function (t, n) {
          var e,
            r = [].concat((e = t.errors) != null ? e : [], n);
          return ((t.errors = r), t);
        }),
        (t.getError = function (t, n, r) {
          var e;
          o("WATypeUtils").isString(n)
            ? (e = o("WAFlowJSONValidationResultUtil").getValuePointers(n))
            : (e = n.map(function (e) {
                return o("WATypeUtils").isString(e)
                  ? o("WAFlowJSONValidationResultUtil").getValuePointers(e)[0]
                  : e;
              }));
          var a = [];
          for (var i of e) {
            var l = this.flowJSONData.flowJSONPointers.get(i.pointer),
              s = i.isKeyPointer
                ? l == null
                  ? void 0
                  : l.key
                : l == null
                  ? void 0
                  : l.value;
            s != null && a.push(s);
          }
          return o(
            "WAFlowJSONValidationResultUtil",
          ).getWAFlowJSONValidationError({ message: t, pointers: a, code: r });
        }),
        e
      );
    })();
    l.WAFlowJSONBaseValidator = e;
  },
  98,
);
