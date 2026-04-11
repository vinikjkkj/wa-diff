__d(
  "XRequest",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    var e = function (n, r, o) {
        var t;
        switch (n) {
          case "Bool":
            t = (r && r !== "false" && r !== "0") || !1;
            break;
          case "Int":
            ((t = r.toString()), /-?\d+/.test(t) || l(0, 11839, r));
            break;
          case "Float":
            ((t = parseFloat(r, 10)), !isNaN(t) || l(0, 11840, r));
            break;
          case "FBID":
            t = r.toString();
            for (var a = 0; a < t.length; ++a) {
              var i = t.charCodeAt(a);
              (48 <= i && i <= 57) || l(0, 11841, r);
            }
            break;
          case "String":
            t = r.toString();
            break;
          case "Enum":
            o === 0
              ? (t = e("Int", r, null))
              : o === 1
                ? (t = e("String", r, null))
                : o === 2
                  ? (t = r)
                  : l(0, 5044, o);
            break;
          default:
            var s, u, c, d;
            if ((s = /^Nullable(\w+)$/.exec(n)))
              r === null ? (t = null) : (t = e(s[1], r, o));
            else if ((u = /^(\w+)Vector$/.exec(n))) {
              Array.isArray(r)
                ? (t = r)
                : ((t = r.toString()), (t = t === "" ? [] : t.split(",")));
              var m = u[1];
              (typeof m == "string" || l(0, 5045),
                (t = t.map(function (t) {
                  return e(m, t, o && o.member);
                })));
            } else if ((c = /^(\w+)(Set|Keyset)$/.exec(n)))
              (Array.isArray(r)
                ? (t = r)
                : ((t = r.toString()), (t = t === "" ? [] : t.split(","))),
                (t = t.reduce(function (e, t) {
                  return ((e[t] = t), e);
                }, {})),
                (m = c[1]),
                typeof m == "string" || l(0, 5045),
                (t = Object.keys(t).map(function (n) {
                  return e(m, t[n], o && o.member);
                })));
            else if ((d = /^(\w+)To(\w+)Map$/.exec(n))) {
              t = {};
              var p = d[1],
                _ = d[2];
              ((typeof p == "string" && typeof _ == "string") || l(0, 5045),
                Object.keys(r).forEach(function (n) {
                  t[e(p, n, o && o.key)] = e(_, r[n], o && o.value);
                }));
            } else l(0, 11842, n);
        }
        return t;
      },
      s = (function () {
        function t(e, t, n) {
          var r = this;
          ((this.$1 = t),
            (this.$2 = babelHelpers.extends({}, n.getQueryData())));
          for (
            var o = e.split("/").filter(function (e) {
                return e;
              }),
              a = n
                .getPath()
                .split("/")
                .filter(function (e) {
                  return e;
                }),
              i,
              s = 0;
            s < o.length;
            ++s
          ) {
            var u = /^\{(\?)?(\*)?(\w+)\}$/.exec(o[s]);
            if (!u) {
              o[s] === a[s] || l(0, 5047, n.getPath());
              continue;
            }
            var c = !!u[1],
              d = !!u[2];
            (!d || s === o.length - 1 || l(0, 11843, i),
              (i = u[3]),
              Object.prototype.hasOwnProperty.call(this.$1, i) ||
                l(0, 11844, i),
              this.$1[i].required
                ? !c || l(0, 5050, i)
                : c || this.$1[i].defaultValue != null || l(0, 5057, i),
              a[s] && (this.$2[i] = d ? a.slice(s).join("/") : a[s]));
          }
          Object.keys(this.$1).forEach(function (e) {
            !r.$1[e].required ||
              Object.prototype.hasOwnProperty.call(r.$2, e) ||
              l(0, 5051);
          });
        }
        var n = t.prototype;
        return (
          (n.getExists = function (t) {
            return this.$2[t] !== void 0;
          }),
          (n.getBool = function (t) {
            return this.$3(t, "Bool");
          }),
          (n.getInt = function (t) {
            return this.$3(t, "Int");
          }),
          (n.getFloat = function (t) {
            return this.$3(t, "Float");
          }),
          (n.getFBID = function (t) {
            return this.$3(t, "FBID");
          }),
          (n.getString = function (t) {
            return this.$3(t, "String");
          }),
          (n.getEnum = function (t) {
            return this.$3(t, "Enum");
          }),
          (n.getOptionalInt = function (t) {
            return this.$4(t, "Int");
          }),
          (n.getOptionalFloat = function (t) {
            return this.$4(t, "Float");
          }),
          (n.getOptionalFBID = function (t) {
            return this.$4(t, "FBID");
          }),
          (n.getOptionalString = function (t) {
            return this.$4(t, "String");
          }),
          (n.getOptionalEnum = function (t) {
            return this.$4(t, "Enum");
          }),
          (n.getIntVector = function (t) {
            return this.$3(t, "IntVector");
          }),
          (n.getFloatVector = function (t) {
            return this.$3(t, "FloatVector");
          }),
          (n.getFBIDVector = function (t) {
            return this.$3(t, "FBIDVector");
          }),
          (n.getStringVector = function (t) {
            return this.$3(t, "StringVector");
          }),
          (n.getEnumVector = function (t) {
            return this.$3(t, "EnumVector");
          }),
          (n.getOptionalIntVector = function (t) {
            return this.$4(t, "IntVector");
          }),
          (n.getOptionalFloatVector = function (t) {
            return this.$4(t, "FloatVector");
          }),
          (n.getOptionalFBIDVector = function (t) {
            return this.$4(t, "FBIDVector");
          }),
          (n.getOptionalStringVector = function (t) {
            return this.$4(t, "StringVector");
          }),
          (n.getOptionalEnumVector = function (t) {
            return this.$4(t, "EnumVector");
          }),
          (n.getIntSet = function (t) {
            return this.$3(t, "IntSet");
          }),
          (n.getFBIDSet = function (t) {
            return this.$3(t, "FBIDSet");
          }),
          (n.getFBIDKeyset = function (t) {
            return this.$3(t, "FBIDKeyset");
          }),
          (n.getStringSet = function (t) {
            return this.$3(t, "StringSet");
          }),
          (n.getEnumKeyset = function (t) {
            return this.$3(t, "EnumKeyset");
          }),
          (n.getOptionalIntSet = function (t) {
            return this.$4(t, "IntSet");
          }),
          (n.getOptionalFBIDSet = function (t) {
            return this.$4(t, "FBIDSet");
          }),
          (n.getOptionalFBIDKeyset = function (t) {
            return this.$4(t, "FBIDKeyset");
          }),
          (n.getOptionalStringSet = function (t) {
            return this.$4(t, "StringSet");
          }),
          (n.getEnumToBoolMap = function (t) {
            return this.$3(t, "EnumToBoolMap");
          }),
          (n.getEnumToEnumMap = function (t) {
            return this.$3(t, "EnumToEnumMap");
          }),
          (n.getEnumToFloatMap = function (t) {
            return this.$3(t, "EnumToFloatMap");
          }),
          (n.getEnumToIntMap = function (t) {
            return this.$3(t, "EnumToIntMap");
          }),
          (n.getEnumToStringMap = function (t) {
            return this.$3(t, "EnumToStringMap");
          }),
          (n.getIntToBoolMap = function (t) {
            return this.$3(t, "IntToBoolMap");
          }),
          (n.getIntToEnumMap = function (t) {
            return this.$3(t, "IntToEnumMap");
          }),
          (n.getIntToFloatMap = function (t) {
            return this.$3(t, "IntToFloatMap");
          }),
          (n.getIntToIntMap = function (t) {
            return this.$3(t, "IntToIntMap");
          }),
          (n.getIntToStringMap = function (t) {
            return this.$3(t, "IntToStringMap");
          }),
          (n.getStringToBoolMap = function (t) {
            return this.$3(t, "StringToBoolMap");
          }),
          (n.getStringToEnumMap = function (t) {
            return this.$3(t, "StringToEnumMap");
          }),
          (n.getStringToFloatMap = function (t) {
            return this.$3(t, "StringToFloatMap");
          }),
          (n.getStringToIntMap = function (t) {
            return this.$3(t, "StringToIntMap");
          }),
          (n.getStringToStringMap = function (t) {
            return this.$3(t, "StringToStringMap");
          }),
          (n.getOptionalEnumToBoolMap = function (t) {
            return this.$4(t, "EnumToBoolMap");
          }),
          (n.getOptionalEnumToEnumMap = function (t) {
            return this.$4(t, "EnumToEnumMap");
          }),
          (n.getOptionalEnumToFloatMap = function (t) {
            return this.$4(t, "EnumToFloatMap");
          }),
          (n.getOptionalEnumToIntMap = function (t) {
            return this.$4(t, "EnumToIntMap");
          }),
          (n.getOptionalEnumToStringMap = function (t) {
            return this.$4(t, "EnumToStringMap");
          }),
          (n.getOptionalIntToBoolMap = function (t) {
            return this.$4(t, "IntToBoolMap");
          }),
          (n.getOptionalIntToEnumMap = function (t) {
            return this.$4(t, "IntToEnumMap");
          }),
          (n.getOptionalIntToFloatMap = function (t) {
            return this.$4(t, "IntToFloatMap");
          }),
          (n.getOptionalIntToIntMap = function (t) {
            return this.$4(t, "IntToIntMap");
          }),
          (n.getOptionalIntToStringMap = function (t) {
            return this.$4(t, "IntToStringMap");
          }),
          (n.getOptionalStringToBoolMap = function (t) {
            return this.$4(t, "StringToBoolMap");
          }),
          (n.getOptionalStringToEnumMap = function (t) {
            return this.$4(t, "StringToEnumMap");
          }),
          (n.getOptionalStringToFloatMap = function (t) {
            return this.$4(t, "StringToFloatMap");
          }),
          (n.getOptionalStringToIntMap = function (t) {
            return this.$4(t, "StringToIntMap");
          }),
          (n.getOptionalStringToStringMap = function (t) {
            return this.$4(t, "StringToStringMap");
          }),
          (n.getEnumToNullableEnumMap = function (t) {
            return this.$3(t, "EnumToNullableEnumMap");
          }),
          (n.getEnumToNullableFloatMap = function (t) {
            return this.$3(t, "EnumToNullableFloatMap");
          }),
          (n.getEnumToNullableIntMap = function (t) {
            return this.$3(t, "EnumToNullableIntMap");
          }),
          (n.getEnumToNullableStringMap = function (t) {
            return this.$3(t, "EnumToNullableStringMap");
          }),
          (n.getIntToNullableEnumMap = function (t) {
            return this.$3(t, "IntToNullableEnumMap");
          }),
          (n.getIntToNullableFloatMap = function (t) {
            return this.$3(t, "IntToNullableFloatMap");
          }),
          (n.getIntToNullableIntMap = function (t) {
            return this.$3(t, "IntToNullableIntMap");
          }),
          (n.getIntToNullableStringMap = function (t) {
            return this.$3(t, "IntToNullableStringMap");
          }),
          (n.getStringToNullableEnumMap = function (t) {
            return this.$3(t, "StringToNullableEnumMap");
          }),
          (n.getStringToNullableFloatMap = function (t) {
            return this.$3(t, "StringToNullableFloatMap");
          }),
          (n.getStringToNullableIntMap = function (t) {
            return this.$3(t, "StringToNullableIntMap");
          }),
          (n.getStringToNullableStringMap = function (t) {
            return this.$3(t, "StringToNullableStringMap");
          }),
          (n.getOptionalEnumToNullableEnumMap = function (t) {
            return this.$4(t, "EnumToNullableEnumMap");
          }),
          (n.getOptionalEnumToNullableFloatMap = function (t) {
            return this.$4(t, "EnumToNullableFloatMap");
          }),
          (n.getOptionalEnumToNullableIntMap = function (t) {
            return this.$4(t, "EnumToNullableIntMap");
          }),
          (n.getOptionalEnumToNullableStringMap = function (t) {
            return this.$4(t, "EnumToNullableStringMap");
          }),
          (n.getOptionalIntToNullableEnumMap = function (t) {
            return this.$4(t, "IntToNullableEnumMap");
          }),
          (n.getOptionalIntToNullableFloatMap = function (t) {
            return this.$4(t, "IntToNullableFloatMap");
          }),
          (n.getOptionalIntToNullableIntMap = function (t) {
            return this.$4(t, "IntToNullableIntMap");
          }),
          (n.getOptionalIntToNullableStringMap = function (t) {
            return this.$4(t, "IntToNullableStringMap");
          }),
          (n.getOptionalStringToNullableEnumMap = function (t) {
            return this.$4(t, "StringToNullableEnumMap");
          }),
          (n.getOptionalStringToNullableFloatMap = function (t) {
            return this.$4(t, "StringToNullableFloatMap");
          }),
          (n.getOptionalStringToNullableStringMap = function (t) {
            return this.$4(t, "StringToNullableStringMap");
          }),
          (n.$3 = function (n, r) {
            this.$5(n, r);
            var t = this.$1[n];
            return !Object.prototype.hasOwnProperty.call(this.$2, n) &&
              t.defaultValue != null
              ? (!t.required || l(0, 5052), e(r, t.defaultValue, t.enumType))
              : (t.required ||
                  r === "Bool" ||
                  t.defaultValue != null ||
                  l(0, 11845, r, n, r, n),
                e(r, this.$2[n], t.enumType));
          }),
          (n.$4 = function (n, r) {
            this.$5(n, r);
            var t = this.$1[n];
            return (
              !t.required || l(0, 11846, r, n, r, n),
              !t.defaultValue || l(0, 5052),
              Object.prototype.hasOwnProperty.call(this.$2, n)
                ? e(r, this.$2[n], t.enumType)
                : null
            );
          }),
          (n.$5 = function (t, n) {
            (Object.prototype.hasOwnProperty.call(this.$1, t) || l(0, 37317, t),
              this.$1[t].type === n || l(0, 11848, t, n, this.$1[t].type));
          }),
          t
        );
      })();
    i.default = s;
  },
  66,
);
