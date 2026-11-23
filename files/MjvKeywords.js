__d(
  "MjvKeywords",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      REQUIRED: {
        ID: "required",
        message: function (t) {
          return "should have required property '" + t + "'";
        },
      },
      TYPE: {
        ID: "type",
        message: function (t) {
          return "should be " + t;
        },
      },
      PROPERTY_NAMES: {
        ID: "propertyNames",
        message: function (t) {
          return "property name '" + t + "' is invalid";
        },
      },
      MIN_ITEMS: {
        ID: "minItems",
        message: function (t) {
          return (
            t === void 0 && (t = 0),
            "should NOT have fewer than " + t + " items"
          );
        },
      },
      MAX_ITEMS: {
        ID: "maxItems",
        message: function (t) {
          return (
            t === void 0 && (t = 0),
            "should NOT have more than " + t + " items"
          );
        },
      },
      UNIQUE_ITEMS: {
        ID: "uniqueItems",
        message: function (t) {
          var e, n;
          return (
            "should NOT have duplicate items (items ## " +
            ((e = t.j) != null ? e : 0) +
            " and " +
            ((n = t.i) != null ? n : 0) +
            " are identical)"
          );
        },
      },
      ADDITIONAL_PROPERTIES: {
        ID: "additionalProperties",
        message: function () {
          return "should NOT have additional properties";
        },
      },
      PATTERN_PROPERTIES: { ID: "patternProperties" },
      MIN_LENGTH: {
        ID: "minLength",
        message: function (t) {
          return (
            t === void 0 && (t = 0),
            "should NOT be shorter than " + t + " characters"
          );
        },
      },
      MAX_LENGTH: {
        ID: "maxLength",
        message: function (t) {
          return (
            t === void 0 && (t = 0),
            "should NOT be longer than " + t + " characters"
          );
        },
      },
      MIN_PROPERTIES: {
        ID: "minProperties",
        message: function (t) {
          return (
            t === void 0 && (t = 0),
            "should NOT have fewer than " + t + " properties"
          );
        },
      },
      MAX_PROPERTIES: {
        ID: "maxProperties",
        message: function (t) {
          return (
            t === void 0 && (t = 0),
            "should NOT have more than " + t + " properties"
          );
        },
      },
      MINIMUM: {
        ID: "minimum",
        COMPARISON: ">=",
        message: function (t) {
          return (t === void 0 && (t = 0), "should be >= " + t);
        },
      },
      MAXIMUM: {
        ID: "maximum",
        COMPARISON: "<=",
        message: function (t) {
          return (t === void 0 && (t = 0), "should be <= " + t);
        },
      },
      EXCLUSIVE_MAXIMUM: {
        ID: "exclusiveMaximum",
        COMPARISON: "<",
        message: function (t) {
          return (t === void 0 && (t = 0), "should be < " + t);
        },
      },
      EXCLUSIVE_MINIMUM: {
        ID: "exclusiveMinimum",
        COMPARISON: ">",
        message: function (t) {
          return (t === void 0 && (t = 0), "should be > " + t);
        },
      },
      MULTIPLE_OF: {
        ID: "multipleOf",
        message: function (t) {
          return (t === void 0 && (t = 0), "should be multiple of " + t);
        },
      },
      IF: {
        ID: "if",
        message: function (t) {
          return "should match '" + t + "' schema";
        },
      },
      ELSE: { ID: "else" },
      THEN: { ID: "then" },
      ENUM: {
        ID: "enum",
        message: function () {
          return "should be equal to one of the allowed values";
        },
      },
      CONST: {
        ID: "const",
        message: function () {
          return "should be equal to constant";
        },
      },
      CONTAINS: {
        ID: "contains",
        message: function () {
          return "should contain a valid item";
        },
      },
      FORMAT: {
        ID: "format",
        message: function (t) {
          return "should match format '" + t + "'";
        },
      },
      ALL_OF: { ID: "allOf" },
      ANY_OF: {
        ID: "anyOf",
        message: function () {
          return "should match some schema in anyOf";
        },
      },
      ONE_OF: {
        ID: "oneOf",
        message: function () {
          return "should match exactly one schema in oneOf";
        },
      },
      NOT: {
        ID: "not",
        message: function () {
          return "should NOT be valid";
        },
      },
      PATTERN: {
        ID: "pattern",
        message: function (t) {
          return "should match pattern " + t;
        },
      },
      ADDITIONAL_ITEMS: {
        ID: "additionalItems",
        message: function (t) {
          return "should NOT have more than " + t + " items";
        },
      },
      FALSE_SCHEMA: {
        ID: "false schema",
        message: function () {
          return "boolean schema is false";
        },
      },
      TRUE_SCHEMA: {
        ID: "true schema",
        message: function () {
          return "boolean schema is true";
        },
      },
      DEPENDENCIES: {
        ID: "dependencies",
        message: function (t, n) {
          return (
            "should have property " + t + " when property " + n + " is present"
          );
        },
      },
      KEYWORD: {
        message: function (t) {
          return "should pass '" + t + "' keyword validation";
        },
      },
    };
    i.default = e;
  },
  66,
);
