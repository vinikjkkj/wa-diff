__d(
  "Mjv",
  [
    "Mjv$Ref",
    "MjvAdditionalPropertiesValidator",
    "MjvAllOfValidator",
    "MjvAnyOfValidator",
    "MjvBooleanSchemaValidator",
    "MjvBuiltins",
    "MjvConstValidator",
    "MjvContainsValidator",
    "MjvDependenciesValidator",
    "MjvEnumValidator",
    "MjvFormatValidator",
    "MjvIfThenElseValidator",
    "MjvItemsValidator",
    "MjvKeywordsValidator",
    "MjvMinMaxItemsValidator",
    "MjvMinMaxLengthValidator",
    "MjvMinMaxProperties",
    "MjvMinimumMaximumValidator",
    "MjvMultipleOfValidator",
    "MjvNotValidator",
    "MjvOneOfValidator",
    "MjvPatternPropertiesValidator",
    "MjvPatternValidator",
    "MjvPropertiesValidator",
    "MjvPropertyNamesValidator",
    "MjvRegexSafety",
    "MjvRequiredValidator",
    "MjvTypeValidator",
    "MjvUniqueItemsValidator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getStartingSchema: o("Mjv$Ref").getStartingSchema,
        isUnsafeRegexPattern: o("MjvRegexSafety").isUnsafeRegexPattern,
        manage$Refs: o("Mjv$Ref").manage$Refs,
        validateAdditionalProperties: o("MjvAdditionalPropertiesValidator")
          .validateAdditionalProperties,
        validateAllOf: o("MjvAllOfValidator").validateAllOf,
        validateAnyOf: o("MjvAnyOfValidator").validateAnyOf,
        validateBooleanSchema: o("MjvBooleanSchemaValidator")
          .validateBooleanSchema,
        validateConst: o("MjvConstValidator").validateConst,
        validateContains: o("MjvContainsValidator").validateContains,
        validateDependencies: o("MjvDependenciesValidator")
          .validateDependencies,
        validateEnum: o("MjvEnumValidator").validateEnum,
        validateExclusiveMaximum: (e = o("MjvMinimumMaximumValidator"))
          .validateExclusiveMaximum,
        validateExclusiveMinimum: e.validateExclusiveMinimum,
        validateFormat: o("MjvFormatValidator").validateFormat,
        validateIfThenElse: o("MjvIfThenElseValidator").validateIfThenElse,
        validateItems: o("MjvItemsValidator").validateItems,
        validateKeywords: o("MjvKeywordsValidator").validateKeywords,
        validateMaxItems: o("MjvMinMaxItemsValidator").validateMaxItems,
        validateMaxLength: o("MjvMinMaxLengthValidator").validateMaxLength,
        validateMaxProperties: o("MjvMinMaxProperties").validateMaxProperties,
        validateMaximum: e.validateMaximum,
        validateMinItems: o("MjvMinMaxItemsValidator").validateMinItems,
        validateMinLength: o("MjvMinMaxLengthValidator").validateMinLength,
        validateMinProperties: o("MjvMinMaxProperties").validateMinProperties,
        validateMinimum: e.validateMinimum,
        validateMultipleOf: o("MjvMultipleOfValidator").validateMultipleOf,
        validateNot: o("MjvNotValidator").validateNot,
        validateOneOf: o("MjvOneOfValidator").validateOneOf,
        validatePattern: o("MjvPatternValidator").validatePattern,
        validatePatternProperties: o("MjvPatternPropertiesValidator")
          .validatePatternProperties,
        validateProperties: o("MjvPropertiesValidator").validateProperties,
        validatePropertyNames: o("MjvPropertyNamesValidator")
          .validatePropertyNames,
        validateRequired: o("MjvRequiredValidator").validateRequired,
        validateType: o("MjvTypeValidator").validateType,
        validateUniqueItems: o("MjvUniqueItemsValidator").validateUniqueItems,
      },
      u = {
        URI: "^(?![\\s\\S]*[\\n\\r\\u2028\\u2029])(https?://|www.)(?:[a-zA-Z0-9-]+[^a-zA-Z0-9\\n\\r\\u2028\\u2029-][a-zA-Z0-9-]+(?:[^a-zA-Z0-9\\n\\r\\u2028\\u2029-][a-zA-Z0-9-]+)*|[a-zA-Z0-9-]{3,})([/?#].*)?$",
      },
      c = {
        PREFIX: "schema is invalid",
        MESSAGES: {
          NULL: function () {
            return "cannot be null";
          },
          REGEX_UNSAFE: function (t) {
            return (
              "Unsafe regex pattern detected: " +
              t +
              ". This pattern may cause ReDoS (Regular Expression Denial of Service) attacks."
            );
          },
          REGEX_INVALID: function (t) {
            return (
              "Invalid regex pattern: " +
              t +
              ". It cannot be compiled as a JavaScript regular expression."
            );
          },
          REGEX_TIMEOUT: function (t, n) {
            return (
              'Regex execution timeout: Pattern "' +
              t +
              '" took ' +
              n +
              "ms to execute, exceeding the 100ms threshold. This may indicate a ReDoS vulnerability."
            );
          },
          NO_SCHEMA_ID: function (t) {
            return "no schema with key or ref " + t;
          },
          MAX_DEPTH: function (t) {
            return (
              "maximum validation depth of " +
              t +
              " exceeded. The data nests too deeply, or the schema refers to itself without consuming any data."
            );
          },
        },
        TOKENS: {
          DATA_PATH_SEPARATOR: ".",
          MESSAGE_PREFIX: "data",
          KEYWORD_PREFIX: "properties",
        },
      },
      d = 100,
      m = 256,
      p = 1e3;
    function _(e) {
      for (var t of e.keys()) {
        e.delete(t);
        return;
      }
    }
    var f = 256,
      g = /[\uD800-\uDFFF]/,
      h = { unsafe: !1, regex: null },
      y = [],
      C = function (t, n, r, o) {
        return s.validateFormat(t, n, r, o, u);
      },
      b = function (t, n, r, o) {
        return s.validateBooleanSchema(t, n === !0, r, o);
      },
      v = [b],
      S = (function () {
        function e(e) {
          ((this.errors = null),
            (this.$1 = { allErrors: !1, verbose: !1 }),
            (this.$2 = new Map()),
            (this.$3 = 0),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = 1e4),
            (this.$7 = null),
            (this.$8 = []),
            (this.$9 = !1),
            (this.$10 = !1),
            (this.$11 = null),
            (this.$12 = void 0),
            (this.$13 = null),
            (this.$14 = new Map()),
            (this.$15 = void 0),
            (this.$16 = null),
            (this.$17 = new Map()),
            (this.$18 = f),
            (this.$19 = void 0),
            (this.$20 = -1),
            (this.$21 = new WeakMap()),
            (this.$22 = new WeakMap()),
            (this.$23 = new WeakMap()),
            (this.$24 = 0),
            (this.$1 = e),
            (this.$9 = (e == null ? void 0 : e.allErrors) === !0),
            (this.$10 = (e == null ? void 0 : e.verbose) === !0),
            (this.$11 = e == null ? void 0 : e.compiler));
          var t = e == null ? void 0 : e.maxDepth;
          if (t != null) {
            if (!Number.isInteger(t) || t < 1) {
              var n = new Error(
                "maxDepth must be a positive integer, got " + String(t),
              );
              throw (n.stack, n);
            }
            this.$18 = t;
          }
        }
        var t = e.prototype;
        return (
          (t.compile = function (t) {
            var e = this;
            this.$25(t);
            var n = t != null ? this.$4.get(t) : null;
            if (n != null) return n;
            this.$26();
            var r = s.getStartingSchema(this, t, u, this.$8);
            r == null && this.throwError(c.MESSAGES.NULL());
            var o = this.$27(r),
              a = this.$11,
              i = function () {
                var t;
                return (t = a != null ? a(e, o, u) : null) != null
                  ? t
                  : e.$28(e.$29(o));
              },
              l = i(),
              d = this.$3,
              m = function (n) {
                (d !== e.$3 && ((d = e.$3), (l = i())), e.$24++);
                var t;
                try {
                  t = l(n);
                } catch (t) {
                  throw ((m.errors = null), e.$30(t));
                }
                return ((m.errors = e.errors), t);
              };
            return (t != null && this.$4.set(t, m), m);
          }),
          (t.$25 = function (t) {
            typeof t == "object" &&
              (t == null ? void 0 : t.$id) != null &&
              t.$id !== this.$7 &&
              (this.$31(), this.$4.clear(), (this.$7 = String(t.$id)));
          }),
          (t.$27 = function (t) {
            if (t == null || typeof t != "object") return t;
            var e = s.manage$Refs(this, t, {
              required: [],
              dataPath: "",
              schemaPath: "#",
              skipErrors: !1,
              isRootValidation: !0,
              validateUndefined: !1,
              rootSchema: t,
            });
            return e;
          }),
          (t.$29 = function (t) {
            var e = this;
            if (typeof t == "boolean")
              return function (n) {
                return (
                  (e.errors = null),
                  s.validateBooleanSchema(e, t, n, {
                    required: [],
                    dataPath: "",
                    schemaPath: "#",
                    skipErrors: !1,
                    isRootValidation: !1,
                    validateUndefined: !1,
                    rootSchema: t,
                  })
                );
              };
            if (typeof t != "object" || t == null)
              return function (t) {
                return ((e.errors = null), !0);
              };
            var n = [],
              r = {
                required: [],
                dataPath: "",
                schemaPath: "#",
                skipErrors: !1,
                isRootValidation: !1,
                validateUndefined: !1,
                rootSchema: t,
              };
            (t.type != null &&
              n.push(function (n) {
                return s.validateType(e, t, n, r);
              }),
              t.const !== void 0 &&
                n.push(function (n) {
                  return s.validateConst(e, t, n, r);
                }),
              t.enum != null &&
                n.push(function (n) {
                  return s.validateEnum(e, t, n, r);
                }),
              t.required != null &&
                n.push(function (n) {
                  return s.validateRequired(e, t, n, r);
                }),
              t.properties != null &&
                n.push(function (n) {
                  return s.validateProperties(e, t, n, r);
                }),
              t.minimum != null &&
                n.push(function (n) {
                  return s.validateMinimum(e, t, n, r);
                }),
              t.maximum != null &&
                n.push(function (n) {
                  return s.validateMaximum(e, t, n, r);
                }),
              t.maxLength != null &&
                n.push(function (n) {
                  return s.validateMaxLength(e, t, n, r);
                }),
              t.minLength != null &&
                n.push(function (n) {
                  return s.validateMinLength(e, t, n, r);
                }),
              t.pattern != null &&
                n.push(function (n) {
                  return s.validatePattern(e, t, n, r);
                }),
              t.format != null &&
                n.push(function (n) {
                  return s.validateFormat(e, t, n, r, u);
                }),
              t.exclusiveMaximum != null &&
                n.push(function (n) {
                  return s.validateExclusiveMaximum(e, t, n, r);
                }),
              t.exclusiveMinimum != null &&
                n.push(function (n) {
                  return s.validateExclusiveMinimum(e, t, n, r);
                }),
              t.multipleOf != null &&
                n.push(function (n) {
                  return s.validateMultipleOf(e, t, n, r);
                }),
              t.minItems != null &&
                n.push(function (n) {
                  return s.validateMinItems(e, t, n, r);
                }),
              t.maxItems != null &&
                n.push(function (n) {
                  return s.validateMaxItems(e, t, n, r);
                }),
              t.uniqueItems != null &&
                n.push(function (n) {
                  return s.validateUniqueItems(e, t, n, r);
                }),
              t.contains != null &&
                n.push(function (n) {
                  return s.validateContains(e, t, n, r);
                }),
              t.items != null &&
                n.push(function (n) {
                  return s.validateItems(e, t, n, r);
                }),
              t.minProperties != null &&
                n.push(function (n) {
                  return s.validateMinProperties(e, t, n, r);
                }),
              t.maxProperties != null &&
                n.push(function (n) {
                  return s.validateMaxProperties(e, t, n, r);
                }),
              t.patternProperties != null &&
                n.push(function (n) {
                  return s.validatePatternProperties(e, t, n, r);
                }),
              t.additionalProperties != null &&
                n.push(function (n) {
                  return s.validateAdditionalProperties(e, t, n, r);
                }),
              t.propertyNames != null &&
                n.push(function (n) {
                  return s.validatePropertyNames(e, t, n, r);
                }),
              t.dependencies != null &&
                n.push(function (n) {
                  return s.validateDependencies(e, t, n, r);
                }),
              t.allOf != null &&
                n.push(function (n) {
                  return s.validateAllOf(e, t, n, r);
                }),
              t.anyOf != null &&
                n.push(function (n) {
                  return s.validateAnyOf(e, t, n, r);
                }),
              t.oneOf != null &&
                n.push(function (n) {
                  return s.validateOneOf(e, t, n, r);
                }),
              t.not != null &&
                n.push(function (n) {
                  return s.validateNot(e, t, n, r);
                }),
              (t.if != null || t.then != null || t.else != null) &&
                n.push(function (n) {
                  return s.validateIfThenElse(e, t, n, r);
                }),
              this.$2.size > 0 &&
                n.push(function (n) {
                  return s.validateKeywords(e, t, n, r);
                }));
            var o = this.exitOnError();
            return function (t) {
              if (((e.errors = null), n.length === 0)) return !0;
              for (var r = !0, a = 0; a < n.length; a++)
                if (!n[a](t)) {
                  if (o) return !1;
                  r = !1;
                }
              return (r && e.errors != null && (e.errors = null), r);
            };
          }),
          (t.validate = function (t, n, r) {
            if (
              (r === void 0 &&
                (r = {
                  required: [],
                  dataPath: "",
                  schemaPath: "#",
                  skipErrors: !1,
                  isRootValidation: !0,
                  validateUndefined: !1,
                  rootSchema: void 0,
                }),
              !r.isRootValidation)
            )
              return this.$32(t, n, r);
            try {
              return this.$32(t, n, r);
            } catch (e) {
              throw this.$30(e);
            }
          }),
          (t.$32 = function (t, n, r) {
            var e,
              o = this.$19,
              a = this.$20;
            typeof n == "object" &&
              n !== null &&
              n !== o &&
              (a >= this.$18 && this.throwMaxDepthError(),
              (this.$19 = n),
              (this.$20 = a + 1));
            var i = typeof t == "object" && t != null ? t : null;
            i != null && i.$id != null && this.$25(i);
            var l = !0,
              d = r.isRootValidation;
            d && this.$26();
            var m =
              i != null && i.$ref != null
                ? s.getStartingSchema(this, i, u, this.$8)
                : t;
            (m == null && this.throwError(c.MESSAGES.NULL()),
              d &&
                ((this.errors = null),
                (r.isRootValidation = !1),
                (r.rootSchema = m),
                this.$31()));
            var p =
              typeof m == "object" && m != null && m.$ref != null
                ? s.manage$Refs(this, m, r)
                : m;
            if (p !== void 0)
              for (
                var _ = this.$33(p), f = !this.$9, g = 0;
                g < _.length && !(!_[g](this, p, n, r) && ((l = !1), f));
                g++
              );
            return (
              l &&
                d &&
                (e = this.errors) != null &&
                e.length &&
                (this.errors = null),
              (this.$19 = o),
              (this.$20 = a),
              l
            );
          }),
          (t.resolveRegisteredSchema = function (t) {
            return s.getStartingSchema(this, t, u, this.$8);
          }),
          (t.getMaxDepth = function () {
            return this.$18;
          }),
          (t.throwMaxDepthError = function () {
            this.throwError(c.MESSAGES.MAX_DEPTH(this.$18));
          }),
          (t.validateAtDepth = function (t, n, r, o) {
            var e = this.$19,
              a = this.$20;
            ((this.$19 = void 0), (this.$20 = o - 1));
            var i = this.validate(t, n, r);
            return ((this.$19 = e), (this.$20 = a), i);
          }),
          (t.$28 = function (t) {
            var e = this;
            return function (n) {
              ((e.$19 = n), (e.$20 = 0));
              var r = t(n);
              return ((e.$19 = void 0), (e.$20 = -1), r);
            };
          }),
          (t.$30 = function (t) {
            ((this.$19 = void 0), (this.$20 = -1), this.$31());
            var e =
                typeof t == "object" && t != null
                  ? String(Reflect.get(t, "name"))
                  : "",
              n =
                typeof t == "object" && t != null
                  ? String(Reflect.get(t, "message"))
                  : "",
              r =
                (e === "RangeError" || e === "InternalError") &&
                /call stack|recursion/i.test(n);
            return (r && this.throwMaxDepthError(), t);
          }),
          (t.addKeyword = function (t, n) {
            (this.$2.set(t, n), this.$34());
          }),
          (t.getKeyword = function (t) {
            var e;
            return (e = this.$2.get(t)) != null ? e : !1;
          }),
          (t.removeKeyword = function (t) {
            return (this.$2.delete(t), this.$34(), this);
          }),
          (t.$34 = function () {
            (this.$3++,
              (this.$21 = new WeakMap()),
              this.$4.clear(),
              this.$31());
          }),
          (t.addMetaSchema = function (t) {
            var e = Array.isArray(t) ? t : [t];
            for (var n of e) {
              var r = this.$35(n);
              r != null && this.$8.push({ $ref: r, source: n });
            }
            return this;
          }),
          (t.addSchema = function (t, n) {
            var e = Array.isArray(t) ? t : [t];
            for (var r of e) {
              var o = n != null ? n : this.$35(r);
              o != null && this.$8.push({ $ref: o, source: r });
            }
            return this;
          }),
          (t.$35 = function (t) {
            var e;
            if (typeof t != "object") return null;
            var n = (function (e) {
              return e === "id"
                ? t.id
                : e === "auto"
                  ? typeof t.$id == "string"
                    ? t.$id
                    : t.id
                  : t.$id;
            })((e = this.$1) == null ? void 0 : e.schemaId);
            if (typeof n == "string") return n;
            this.throwError(
              c.MESSAGES.NO_SCHEMA_ID(
                typeof t.$schema == "string" ? t.$schema : "unknown",
              ),
            );
          }),
          (t.removeSchema = function (t) {
            return (
              typeof t == "string"
                ? (this.$8 = this.$8.filter(function (e) {
                    return e.$ref !== t;
                  }))
                : t instanceof RegExp
                  ? (this.$8 = this.$8.filter(function (e) {
                      return !t.test(e.$ref);
                    }))
                  : typeof t == "object" &&
                    t != null &&
                    (this.$8 = this.$8.filter(function (e) {
                      return e.source !== t;
                    })),
              this
            );
          }),
          (t.resolveExternalSchema = function (t, n) {
            for (var e of this.$8) if (e.$ref === t) return e.source;
            if (typeof n == "object" && n != null && typeof n.$id == "string") {
              var r = String(n.$id).split("/");
              r.pop();
              var o = t;
              t.startsWith("./")
                ? (o = r.join("/") + "/" + t.substring(2))
                : !t.startsWith("/") &&
                  !t.includes("://") &&
                  (o = r.join("/") + "/" + t);
              for (var a of this.$8) if (a.$ref === o) return a.source;
            }
          }),
          (t.getSchema = function (t) {
            var e = this.$8.find(function (e) {
              return e.$ref === t;
            });
            if (e != null) {
              var n = this.compile(e.source);
              return ((n.schema = e.source), n);
            }
          }),
          (t.errorsText = function (t, n) {
            var e,
              r = n != null ? n : {},
              o = r.dataVar,
              a = o === void 0 ? "data" : o,
              i = r.separator,
              l = i === void 0 ? ", " : i;
            return ((e = t != null ? t : this.errors) != null ? e : [])
              .map(function (e) {
                return a + " " + e.message;
              })
              .join(l);
          }),
          (t.$33 = function (t) {
            switch (typeof t) {
              case "boolean":
                return v;
              case "object": {
                var e = this.$21.get(t);
                if (e != null) return e;
                var n = this.$36(t);
                return (this.$21.set(t, n), n);
              }
              default:
                return y;
            }
          }),
          (t.$36 = function (t) {
            var e = [];
            return (
              t.type != null && e.push(o("MjvTypeValidator").validateType),
              t.const !== void 0 &&
                e.push(o("MjvConstValidator").validateConst),
              t.enum != null && e.push(o("MjvEnumValidator").validateEnum),
              t.required != null &&
                e.push(o("MjvRequiredValidator").validateRequired),
              t.patternProperties != null &&
                e.push(
                  o("MjvPatternPropertiesValidator").validatePatternProperties,
                ),
              t.additionalProperties != null &&
                e.push(
                  o("MjvAdditionalPropertiesValidator")
                    .validateAdditionalProperties,
                ),
              t.properties != null &&
                e.push(o("MjvPropertiesValidator").validateProperties),
              t.maxLength != null &&
                e.push(o("MjvMinMaxLengthValidator").validateMaxLength),
              t.minLength != null &&
                e.push(o("MjvMinMaxLengthValidator").validateMinLength),
              t.minimum != null &&
                e.push(o("MjvMinimumMaximumValidator").validateMinimum),
              t.maximum != null &&
                e.push(o("MjvMinimumMaximumValidator").validateMaximum),
              t.exclusiveMaximum != null &&
                e.push(
                  o("MjvMinimumMaximumValidator").validateExclusiveMaximum,
                ),
              t.exclusiveMinimum != null &&
                e.push(
                  o("MjvMinimumMaximumValidator").validateExclusiveMinimum,
                ),
              t.multipleOf != null &&
                e.push(o("MjvMultipleOfValidator").validateMultipleOf),
              t.minItems != null &&
                e.push(o("MjvMinMaxItemsValidator").validateMinItems),
              t.maxItems != null &&
                e.push(o("MjvMinMaxItemsValidator").validateMaxItems),
              t.uniqueItems != null &&
                e.push(o("MjvUniqueItemsValidator").validateUniqueItems),
              t.contains != null &&
                e.push(o("MjvContainsValidator").validateContains),
              t.items != null && e.push(o("MjvItemsValidator").validateItems),
              t.minProperties != null &&
                e.push(o("MjvMinMaxProperties").validateMinProperties),
              t.maxProperties != null &&
                e.push(o("MjvMinMaxProperties").validateMaxProperties),
              t.pattern != null &&
                e.push(o("MjvPatternValidator").validatePattern),
              t.format != null && e.push(C),
              t.propertyNames != null &&
                e.push(o("MjvPropertyNamesValidator").validatePropertyNames),
              t.dependencies != null &&
                e.push(o("MjvDependenciesValidator").validateDependencies),
              t.allOf != null && e.push(o("MjvAllOfValidator").validateAllOf),
              t.anyOf != null && e.push(o("MjvAnyOfValidator").validateAnyOf),
              t.oneOf != null && e.push(o("MjvOneOfValidator").validateOneOf),
              t.not != null && e.push(o("MjvNotValidator").validateNot),
              (t.if != null || t.then != null || t.else != null) &&
                e.push(o("MjvIfThenElseValidator").validateIfThenElse),
              this.$2.size > 0 &&
                e.push(o("MjvKeywordsValidator").validateKeywords),
              e
            );
          }),
          (t.$26 = function () {
            ((this.$21 = new WeakMap()),
              (this.$22 = new WeakMap()),
              (this.$23 = new WeakMap()));
          }),
          (t.$31 = function () {
            (this.$5.clear(),
              (this.$12 = void 0),
              (this.$13 = null),
              this.$14.clear(),
              (this.$15 = void 0),
              (this.$16 = null));
          }),
          (t.getSchemaMeta = function (t) {
            var e = this.$22.get(t);
            return (e == null && ((e = {}), this.$22.set(t, e)), e);
          }),
          (t.isWorthCaching = function (t) {
            if (t == null || typeof t != "object") return !1;
            var e = this.getSchemaMeta(t),
              n = e.worthCaching;
            if (n != null) return n;
            var r =
              t.properties != null ||
              t.items != null ||
              t.allOf != null ||
              t.anyOf != null ||
              t.oneOf != null ||
              t.not != null ||
              t.if != null ||
              t.$ref != null ||
              t.patternProperties != null ||
              t.additionalProperties != null ||
              t.dependencies != null ||
              t.propertyNames != null ||
              t.contains != null;
            return ((e.worthCaching = r), r);
          }),
          (t.hasCustomKeywords = function () {
            return this.$2.size > 0;
          }),
          (t.getKeywordDefinition = function (t) {
            return this.$2.get(t);
          }),
          (t.$37 = function (t, n, r) {
            try {
              var e = r != null && typeof r == "object" ? this.$38(r) : "";
              return "" + t + e + "::" + String(this.$39(n));
            } catch (e) {
              return "";
            }
          }),
          (t.$38 = function (t) {
            var e = this.getSchemaMeta(t),
              n = e.constraintsKey;
            if (n != null) return n;
            var r = [];
            (t.type != null && r.push("t:" + String(t.type)),
              t.const !== void 0 && r.push("c:" + String(this.$39(t.const))),
              t.enum != null && r.push("e:" + String(this.$39(t.enum))),
              t.minItems != null && r.push("min:" + String(t.minItems)),
              t.maxItems != null && r.push("max:" + String(t.maxItems)),
              t.minLength != null && r.push("minL:" + String(t.minLength)),
              t.maxLength != null && r.push("maxL:" + String(t.maxLength)),
              t.minimum != null && r.push("minV:" + String(t.minimum)),
              t.maximum != null && r.push("maxV:" + String(t.maximum)),
              t.pattern != null && r.push("pat:" + String(t.pattern)),
              t.format != null && r.push("fmt:" + String(t.format)),
              t.uniqueItems != null && r.push("uniq:" + String(t.uniqueItems)),
              t.exclusiveMinimum != null &&
                r.push("xMinV:" + String(t.exclusiveMinimum)),
              t.exclusiveMaximum != null &&
                r.push("xMaxV:" + String(t.exclusiveMaximum)),
              t.multipleOf != null && r.push("mult:" + String(t.multipleOf)),
              t.minProperties != null &&
                r.push("minP:" + String(t.minProperties)),
              t.maxProperties != null &&
                r.push("maxP:" + String(t.maxProperties)),
              t.required != null &&
                r.push("req:" + String(this.$39(t.required))));
            var o = r.length > 0 ? "[" + r.join(",") + "]" : "";
            return ((e.constraintsKey = o), o);
          }),
          (t.$39 = function (t) {
            if (t == null || typeof t != "object")
              return r("MjvBuiltins").stringify(t);
            var e = this.$24,
              n = this.$23.get(t);
            if (n != null && n.generation === e) return n.value;
            var o = r("MjvBuiltins").stringify(t);
            return (
              o != null && this.$23.set(t, { generation: e, value: o }),
              o
            );
          }),
          (t.generatePropertyCacheKey = function (t, n, r) {
            return this.$37(t, n, r);
          }),
          (t.getPropertyCachePathKey = function (t, n) {
            return n != null && typeof n == "object" ? "" + t + this.$38(n) : t;
          }),
          (t.getPropertyCacheValueKey = function (t) {
            try {
              return this.$39(t);
            } catch (e) {
              return null;
            }
          }),
          (t.getCachedPropertyResult = function (t, n, r) {
            var e;
            if (r != null)
              return (e = this.$40(r).paths.get(t)) == null ? void 0 : e.get(n);
          }),
          (t.hasCachedPropertyResults = function (t, n) {
            return n == null ? !1 : this.$40(n).paths.has(t);
          }),
          (t.getPropertyResultCacheSize = function (t) {
            var e, n;
            return t == null
              ? 0
              : (e =
                    (n = this.$14.get(this.$41(t))) == null
                      ? void 0
                      : n.size) != null
                ? e
                : 0;
          }),
          (t.cachePropertyResult = function (t, n, r, o) {
            if (o != null) {
              var e = this.$40(o),
                a = e.paths.get(t);
              (a == null && ((a = new Map()), e.paths.set(t, a)),
                a.has(n) || e.size++,
                a.set(n, r),
                e.size > this.$6 && this.$42(e));
            }
          }),
          (t.$42 = function (t) {
            for (var e of t.paths) {
              var n = e[0],
                r = e[1];
              for (var o of r.keys()) {
                r.delete(o);
                break;
              }
              (t.size--, r.size === 0 && t.paths.delete(n));
              return;
            }
          }),
          (t.$40 = function (t) {
            var e = this.$41(t);
            if (this.$15 === e && this.$16) return this.$16;
            var n = this.$14.get(e);
            return (
              n == null &&
                ((n = { paths: new Map(), size: 0 }), this.$14.set(e, n)),
              (this.$15 = e),
              (this.$16 = n),
              n
            );
          }),
          (t.$41 = function (t) {
            return typeof t == "object" && t.$id != null ? t.$id : t;
          }),
          (t.getCachedValidationResult = function (t, n) {
            var e;
            if (n != null) return (e = this.$43(n)) == null ? void 0 : e.get(t);
          }),
          (t.$43 = function (t) {
            var e = typeof t == "object" && t.$id != null ? t.$id : t;
            if (this.$12 === e && this.$13) return this.$13;
            var n = this.$5.get(e);
            return (n != null && ((this.$12 = e), (this.$13 = n)), n);
          }),
          (t.$44 = function (t) {
            var e = this.$43(t);
            if (e != null) return e;
            var n = typeof t == "object" && t.$id != null ? t.$id : t,
              r = new Map();
            return (this.$5.set(n, r), (this.$12 = n), (this.$13 = r), r);
          }),
          (t.cacheValidationResult = function (t, n, r) {
            if (r != null) {
              var e = this.$44(r);
              (e.set(t, n), e.size > this.$6 && _(e));
            }
          }),
          (t.getStringDataLength = function (t) {
            return g.test(t) ? Array.from(t).length : t.length;
          }),
          (t.getCompiledPattern = function (t) {
            var e = this.$17.get(t);
            if (e == null) {
              var n = s.isUnsafeRegexPattern(t);
              if (((e = h), n)) e = { unsafe: n, regex: null };
              else
                try {
                  e = { unsafe: n, regex: new RegExp(t) };
                } catch (e) {}
              (this.$17.size >= p && _(this.$17), this.$17.set(t, e));
            }
            e.unsafe && this.throwError(c.MESSAGES.REGEX_UNSAFE(t));
            var r = e.regex;
            if (r == null) {
              var o = new Error(c.PREFIX + ": " + c.MESSAGES.REGEX_INVALID(t));
              throw (o.stack, o);
            }
            return r;
          }),
          (t.isValidPattern = function (t, n) {
            if (n == null || typeof t != "string") return !0;
            var e = this.getCompiledPattern(n);
            if (t.length < m) return e.test(t);
            var r = Date.now(),
              o = e.test(t),
              a = Date.now() - r;
            return (
              a > d && this.throwError(c.MESSAGES.REGEX_TIMEOUT(n, a)),
              o
            );
          }),
          (t.getParamsWithSchemaPath = function (t, n, r) {
            var e =
              typeof t == "object" && (t == null ? void 0 : t.$ref) != null
                ? String(t.$ref)
                : n.schemaPath;
            return {
              required: n.required,
              dataPath: n.dataPath,
              schemaPath: e + "/" + r,
              skipErrors: n.skipErrors,
              isRootValidation: n.isRootValidation,
              validateUndefined: n.validateUndefined,
              rootSchema: n.rootSchema,
              seen$Refs: n.seen$Refs,
            };
          }),
          (t.copyParams = function (t) {
            return {
              required: t.required,
              dataPath: t.dataPath,
              schemaPath: t.schemaPath,
              skipErrors: t.skipErrors,
              isRootValidation: t.isRootValidation,
              validateUndefined: t.validateUndefined,
              rootSchema: t.rootSchema,
              seen$Refs: t.seen$Refs,
            };
          }),
          (t.getParamsWithDataPath = function (t, n) {
            return {
              required: t.required,
              dataPath: t.dataPath === "" ? "." + n : t.dataPath + "." + n,
              schemaPath: t.schemaPath,
              skipErrors: t.skipErrors,
              isRootValidation: t.isRootValidation,
              validateUndefined: t.validateUndefined,
              rootSchema: t.rootSchema,
              seen$Refs: t.seen$Refs,
            };
          }),
          (t.throwError = function (t, n, r) {
            var e;
            n != null ? (e = this.$45(n, r) + " " + t) : (e = t);
            var o = new Error(c.PREFIX + ": " + e);
            throw (o.stack, o);
          }),
          (t.$45 = function (t, n) {
            var e = t.dataPath
                .split(c.TOKENS.DATA_PATH_SEPARATOR)
                .slice(1)
                .map(function (e) {
                  return c.TOKENS.KEYWORD_PREFIX + "['" + e + "']";
                })
                .join(c.TOKENS.DATA_PATH_SEPARATOR),
              r = c.TOKENS.MESSAGE_PREFIX,
              o = n != null ? "." + n : "";
            return r + "." + e + o;
          }),
          (t.isEqual = function (t, n) {
            if (t === n) return !0;
            if (t === null || n === null || typeof t != typeof n) return !1;
            if (r("MjvBuiltins").isArray(t)) {
              if (!r("MjvBuiltins").isArray(n) || t.length !== n.length)
                return !1;
              for (var e = 0; e < t.length; e++)
                if (!this.isEqual(t[e], n[e])) return !1;
              return !0;
            }
            if (typeof t == "object" && typeof n == "object") {
              var o = r("MjvBuiltins").objectKeys(t),
                a = r("MjvBuiltins").objectKeys(n),
                i = o.length;
              if (i !== a.length) return !1;
              for (var l = 0; l < i; l++) {
                var s = o[l];
                if (!this.isEqual(t[s], n[s])) return !1;
              }
              return !0;
            }
            return !1;
          }),
          (t.pushError = function (t, n, r, o, a) {
            var e;
            if ((r === void 0 && (r = {}), !o.skipErrors)) {
              var i = (e = this.errors) != null ? e : (this.errors = []);
              if (!(i.length && !this.$9)) {
                if (this.$10) {
                  i.push({
                    keyword: t,
                    message: n,
                    dataPath: o.dataPath,
                    schemaPath: o.schemaPath,
                    params: r,
                    schema: a.schema,
                    parentSchema: a.parentSchema,
                    data: a.data,
                  });
                  return;
                }
                i.push({
                  keyword: t,
                  message: n,
                  dataPath: o.dataPath,
                  schemaPath: o.schemaPath,
                  params: r,
                });
              }
            }
          }),
          (t.pushCompiledError = function (t, n, r, o, a, i, l, s) {
            var e = this.errors;
            if (!(e != null && e.length !== 0 && !this.$9)) {
              var u = this.$10
                ? {
                    keyword: t,
                    message: n,
                    dataPath: o,
                    schemaPath: a,
                    params: r != null ? r : {},
                    schema: l,
                    parentSchema: i,
                    data: s,
                  }
                : {
                    keyword: t,
                    message: n,
                    dataPath: o,
                    schemaPath: a,
                    params: r != null ? r : {},
                  };
              e == null ? (this.errors = [u]) : e.push(u);
            }
          }),
          (t.exitOnError = function () {
            return !this.$9;
          }),
          e
        );
      })();
    l.default = S;
  },
  98,
);
