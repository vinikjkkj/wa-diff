__d(
  "XRequest",
  ["invariant", "vulture"],
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
        var r = t.prototype;
        return (
          (r.getExists = function (t) {
            return this.$2[t] !== void 0;
          }),
          (r.getBool = function (t) {
            return this.$3(t, "Bool");
          }),
          (r.getInt = function (t) {
            return this.$3(t, "Int");
          }),
          (r.getFloat = function (t) {
            return this.$3(t, "Float");
          }),
          (r.getFBID = function (t) {
            return this.$3(t, "FBID");
          }),
          (r.getString = function (t) {
            return this.$3(t, "String");
          }),
          (r.getEnum = function (t) {
            return this.$3(t, "Enum");
          }),
          (r.getOptionalInt = function (t) {
            return this.$4(t, "Int");
          }),
          (r.getOptionalFloat = function (t) {
            return this.$4(t, "Float");
          }),
          (r.getOptionalFBID = function (t) {
            return this.$4(t, "FBID");
          }),
          (r.getOptionalString = function (t) {
            return this.$4(t, "String");
          }),
          (r.getOptionalEnum = function (t) {
            return this.$4(t, "Enum");
          }),
          (r.getIntVector = function (t) {
            return this.$3(t, "IntVector");
          }),
          (r.getFloatVector = function (t) {
            return this.$3(t, "FloatVector");
          }),
          (r.getFBIDVector = function (t) {
            return this.$3(t, "FBIDVector");
          }),
          (r.getStringVector = function (t) {
            return this.$3(t, "StringVector");
          }),
          (r.getEnumVector = function (t) {
            return this.$3(t, "EnumVector");
          }),
          (r.getOptionalIntVector = function (t) {
            return this.$4(t, "IntVector");
          }),
          (r.getOptionalFloatVector = function (t) {
            return this.$4(t, "FloatVector");
          }),
          (r.getOptionalFBIDVector = function (t) {
            return this.$4(t, "FBIDVector");
          }),
          (r.getOptionalStringVector = function (t) {
            return this.$4(t, "StringVector");
          }),
          (r.getOptionalEnumVector = function (t) {
            return this.$4(t, "EnumVector");
          }),
          (r.getIntSet = function (t) {
            return this.$3(t, "IntSet");
          }),
          (r.getFBIDSet = function (t) {
            return this.$3(t, "FBIDSet");
          }),
          (r.getFBIDKeyset = function (t) {
            return this.$3(t, "FBIDKeyset");
          }),
          (r.getStringSet = function (t) {
            return this.$3(t, "StringSet");
          }),
          (r.getEnumKeyset = function (t) {
            return this.$3(t, "EnumKeyset");
          }),
          (r.getOptionalIntSet = function (t) {
            return this.$4(t, "IntSet");
          }),
          (r.getOptionalFBIDSet = function (t) {
            return this.$4(t, "FBIDSet");
          }),
          (r.getOptionalFBIDKeyset = function (t) {
            return this.$4(t, "FBIDKeyset");
          }),
          (r.getOptionalStringSet = function (t) {
            return this.$4(t, "StringSet");
          }),
          (r.getEnumToBoolMap = function (t) {
            return this.$3(t, "EnumToBoolMap");
          }),
          (r.getEnumToEnumMap = function (t) {
            return this.$3(t, "EnumToEnumMap");
          }),
          (r.getEnumToFloatMap = function (t) {
            return this.$3(t, "EnumToFloatMap");
          }),
          (r.getEnumToIntMap = function (t) {
            return this.$3(t, "EnumToIntMap");
          }),
          (r.getEnumToStringMap = function (t) {
            return this.$3(t, "EnumToStringMap");
          }),
          (r.getIntToBoolMap = function (t) {
            return this.$3(t, "IntToBoolMap");
          }),
          (r.getIntToEnumMap = function (t) {
            return this.$3(t, "IntToEnumMap");
          }),
          (r.getIntToFloatMap = function (t) {
            return this.$3(t, "IntToFloatMap");
          }),
          (r.getIntToIntMap = function (t) {
            return this.$3(t, "IntToIntMap");
          }),
          (r.getIntToStringMap = function (t) {
            return this.$3(t, "IntToStringMap");
          }),
          (r.getStringToBoolMap = function (t) {
            return this.$3(t, "StringToBoolMap");
          }),
          (r.getStringToEnumMap = function (t) {
            return this.$3(t, "StringToEnumMap");
          }),
          (r.getStringToFloatMap = function (t) {
            return this.$3(t, "StringToFloatMap");
          }),
          (r.getStringToIntMap = function (t) {
            return this.$3(t, "StringToIntMap");
          }),
          (r.getStringToStringMap = function (t) {
            return this.$3(t, "StringToStringMap");
          }),
          (r.getOptionalEnumToBoolMap = function (t) {
            return this.$4(t, "EnumToBoolMap");
          }),
          (r.getOptionalEnumToEnumMap = function (t) {
            return this.$4(t, "EnumToEnumMap");
          }),
          (r.getOptionalEnumToFloatMap = function (t) {
            return this.$4(t, "EnumToFloatMap");
          }),
          (r.getOptionalEnumToIntMap = function (t) {
            return this.$4(t, "EnumToIntMap");
          }),
          (r.getOptionalEnumToStringMap = function (t) {
            return this.$4(t, "EnumToStringMap");
          }),
          (r.getOptionalIntToBoolMap = function (t) {
            return this.$4(t, "IntToBoolMap");
          }),
          (r.getOptionalIntToEnumMap = function (t) {
            return this.$4(t, "IntToEnumMap");
          }),
          (r.getOptionalIntToFloatMap = function (t) {
            return this.$4(t, "IntToFloatMap");
          }),
          (r.getOptionalIntToIntMap = function (t) {
            return this.$4(t, "IntToIntMap");
          }),
          (r.getOptionalIntToStringMap = function (t) {
            return this.$4(t, "IntToStringMap");
          }),
          (r.getOptionalStringToBoolMap = function (t) {
            return this.$4(t, "StringToBoolMap");
          }),
          (r.getOptionalStringToEnumMap = function (t) {
            return this.$4(t, "StringToEnumMap");
          }),
          (r.getOptionalStringToFloatMap = function (t) {
            return this.$4(t, "StringToFloatMap");
          }),
          (r.getOptionalStringToIntMap = function (t) {
            return this.$4(t, "StringToIntMap");
          }),
          (r.getOptionalStringToStringMap = function (t) {
            return this.$4(t, "StringToStringMap");
          }),
          (r.getEnumToNullableEnumMap = function (t) {
            return this.$3(t, "EnumToNullableEnumMap");
          }),
          (r.getEnumToNullableFloatMap = function (t) {
            return this.$3(t, "EnumToNullableFloatMap");
          }),
          (r.getEnumToNullableIntMap = function (t) {
            return this.$3(t, "EnumToNullableIntMap");
          }),
          (r.getEnumToNullableStringMap = function (t) {
            return this.$3(t, "EnumToNullableStringMap");
          }),
          (r.getIntToNullableEnumMap = function (t) {
            return this.$3(t, "IntToNullableEnumMap");
          }),
          (r.getIntToNullableFloatMap = function (t) {
            return this.$3(t, "IntToNullableFloatMap");
          }),
          (r.getIntToNullableIntMap = function (t) {
            return this.$3(t, "IntToNullableIntMap");
          }),
          (r.getIntToNullableStringMap = function (t) {
            return (
              n("vulture")("VovY0UwOc5GHbRQwPnP6owF1aTk="),
              this.$3(t, "IntToNullableStringMap")
            );
          }),
          (r.getStringToNullableEnumMap = function (t) {
            return this.$3(t, "StringToNullableEnumMap");
          }),
          (r.getStringToNullableFloatMap = function (t) {
            return this.$3(t, "StringToNullableFloatMap");
          }),
          (r.getStringToNullableIntMap = function (t) {
            return this.$3(t, "StringToNullableIntMap");
          }),
          (r.getStringToNullableStringMap = function (t) {
            return this.$3(t, "StringToNullableStringMap");
          }),
          (r.getOptionalEnumToNullableEnumMap = function (t) {
            return this.$4(t, "EnumToNullableEnumMap");
          }),
          (r.getOptionalEnumToNullableFloatMap = function (t) {
            return this.$4(t, "EnumToNullableFloatMap");
          }),
          (r.getOptionalEnumToNullableIntMap = function (t) {
            return this.$4(t, "EnumToNullableIntMap");
          }),
          (r.getOptionalEnumToNullableStringMap = function (t) {
            return this.$4(t, "EnumToNullableStringMap");
          }),
          (r.getOptionalIntToNullableEnumMap = function (t) {
            return this.$4(t, "IntToNullableEnumMap");
          }),
          (r.getOptionalIntToNullableFloatMap = function (t) {
            return this.$4(t, "IntToNullableFloatMap");
          }),
          (r.getOptionalIntToNullableIntMap = function (t) {
            return this.$4(t, "IntToNullableIntMap");
          }),
          (r.getOptionalIntToNullableStringMap = function (t) {
            return this.$4(t, "IntToNullableStringMap");
          }),
          (r.getOptionalStringToNullableEnumMap = function (t) {
            return this.$4(t, "StringToNullableEnumMap");
          }),
          (r.getOptionalStringToNullableFloatMap = function (t) {
            return this.$4(t, "StringToNullableFloatMap");
          }),
          (r.getOptionalStringToNullableStringMap = function (t) {
            return this.$4(t, "StringToNullableStringMap");
          }),
          (r.$3 = function (n, r) {
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
          (r.$4 = function (n, r) {
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
          (r.$5 = function (t, n) {
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
