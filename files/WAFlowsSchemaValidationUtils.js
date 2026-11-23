__d(
  "WAFlowsSchemaValidationUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = "^(?=[\\s\\S]*\\S)[\\r\\n]*[^\\r\\n\\u2028\\u2029]",
      l = "^#([A-Fa-f0-9]{6})$",
      s = "^https://[^\\s]+.*$",
      u = "base64",
      c = function (t, n) {
        return t.type != null
          ? t.type === n
          : typeof t != "boolean" && t.oneOf != null
            ? t.oneOf.some(function (e) {
                return d(e, n);
              })
            : t.anyOf != null
              ? t.anyOf.some(function (e) {
                  return d(e, n);
                })
              : t.allOf != null
                ? t.allOf.every(function (e) {
                    return d(e, n);
                  })
                : !1;
      },
      d = function (t, n) {
        return (t.pattern == null || t.contentEncoding === u) && t.type === n;
      };
    ((i.WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN = e),
      (i.WA_FLOW_JSON_6_DIGIT_HEX_PATTERN = l),
      (i.WA_FLOW_JSON_URI_REGEX = s),
      (i.isTypeMatchingComponentSchema = c));
  },
  66,
);
