__d(
  "WAFlowJSONValidation",
  [
    "invariant",
    "Mjv",
    "WAFlowJSONLineColumnPointerUtil",
    "WAFlowJSONRootSchema",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONUnsafePathValidation",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WAFlowJSONValidatorChainUtils",
    "WAFlowJSONVersionUtils",
    "ajv",
    "err",
    "getErrorSafe",
    "isPlainObject",
    "justknobx",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new (r("ajv"))({ allErrors: !0, verbose: !0 }),
      u = new (r("Mjv"))({ allErrors: !0, verbose: !0 });
    function c(t, n, a, i) {
      (n === void 0 && (n = null),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1));
      var l = {};
      try {
        if (((l = JSON.parse(t)), !r("isPlainObject")(l)))
          throw r("err")("JSON is not an object");
        var c = o(
            "WAFlowJSONLineColumnPointerUtil",
          ).getWAFlowJSONLineColumnPointerData(t),
          d = o("WAFlowJSONVersionUtils").isFlowJSONVersionValid(l, c);
        if (d.isValid === !1) return d;
        var m = o("WAFlowJSONUnsafePathValidation").findUnsafeFlowJSONPath(l);
        if (m != null) {
          var p, _;
          return o("WAFlowJSONValidationResultUtil").getWAFlowJSONResult({
            code:
              m.kind === "key"
                ? o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_KEY
                : o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
            message: o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyErrorMsg(
              m.propertyName,
              null,
            ),
            pointers:
              (p = (_ = c.get(m.path)) == null ? void 0 : _[m.kind]) != null
                ? p
                : o(
                    "WAFlowJSONValidationResultUtil",
                  ).getWAFlowJSONDefaultErrorPointer(),
          });
        }
        var f = o("WAFlowJSONVersionUtils").getFlowJSONVersionInternal(
          l.version,
        );
        f != null || s(0, 90358);
        var g = r("unsafeCast")(
            o("WAFlowJSONRootSchema").getWAFlowJSONDynamicSchema(f),
          ),
          h;
        try {
          h = a ? o("WAFlowJSONSchemaUtils").minifySchema(g, l) : g;
        } catch (e) {
          h = g;
        }
        var y =
            i || r("justknobx")._("1207")
              ? { instance: u, validate: u.compile(h) }
              : { instance: e, validate: e.compile(h) },
          C = o("WAFlowJSONValidatorChainUtils").getWAFlowJSONValidatorChain(
            y,
            f,
            t,
            n,
          );
        return C.validate(t, f, c, a);
      } catch (e) {
        var b = r("getErrorSafe")(e);
        return o("WAFlowJSONValidationError").invalidFlowJSONError(b.message);
      }
    }
    function d(e, t, n, r) {
      return (
        t === void 0 && (t = null),
        n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        JSON.stringify(c(e, t, n, r))
      );
    }
    ((l.validateFlowJSON = c), (l.validateFlowJSONAPI = d));
  },
  98,
);
