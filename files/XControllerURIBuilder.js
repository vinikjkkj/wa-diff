__d(
  "XControllerURIBuilder",
  ["invariant", "URI", "gkx", "isInternalFBURI"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (function () {
        function t(e, t) {
          ((this.$1 = {}), (this.$2 = e), (this.$3 = t));
        }
        var n = t.prototype;
        return (
          (n.setInt = function (t, n) {
            return this.__setParam(t, "Int", n);
          }),
          (n.setFBID = function (t, n) {
            return this.__setParam(t, "FBID", n);
          }),
          (n.setFloat = function (t, n) {
            return this.__setParam(t, "Float", n);
          }),
          (n.setString = function (t, n) {
            return this.__setParam(t, "String", n);
          }),
          (n.setExists = function (t, n) {
            return (n === !1 && (n = void 0), this.__setParam(t, "Exists", n));
          }),
          (n.setBool = function (t, n) {
            return this.__setParam(t, "Bool", n);
          }),
          (n.setBoolVector = function (t, n) {
            return this.__setParam(t, "BoolVector", n);
          }),
          (n.setBoolVec = function (t, n) {
            return this.__setParam(t, "BoolVec", n);
          }),
          (n.setEnum = function (t, n) {
            return this.__setParam(t, "Enum", n);
          }),
          (n.setPath = function (t, n) {
            return this.__setParam(t, "Path", n);
          }),
          (n.setIntVector = function (t, n) {
            return this.__setParam(t, "IntVector", n);
          }),
          (n.setIntVec = function (t, n) {
            return this.__setParam(t, "IntVec", n);
          }),
          (n.setIntKeyset = function (t, n) {
            return this.__setParam(t, "IntKeyset", n);
          }),
          (n.setIntSet = function (t, n) {
            return this.__setParam(t, "IntSet", n.join(","));
          }),
          (n.setFloatVector = function (t, n) {
            return this.__setParam(t, "FloatVector", n);
          }),
          (n.setFloatVec = function (t, n) {
            return this.__setParam(t, "FloatVec", n);
          }),
          (n.setFloatSet = function (t, n) {
            return this.__setParam(t, "FloatSet", n.join(","));
          }),
          (n.setFloatKeyset = function (t, n) {
            return this.__setParam(t, "FloatKeyset", n.join(","));
          }),
          (n.setStringVector = function (t, n) {
            return this.__setParam(t, "StringVector", n);
          }),
          (n.setStringVec = function (t, n) {
            return this.__setParam(t, "StringVec", n);
          }),
          (n.setStringKeyset = function (t, n) {
            return this.__setParam(t, "StringKeyset", n);
          }),
          (n.setStringSet = function (t, n) {
            return this.__setParam(t, "StringSet", n);
          }),
          (n.setFBIDVector = function (t, n) {
            return this.__setParam(t, "FBIDVector", n);
          }),
          (n.setFBIDVec = function (t, n) {
            return this.__setParam(t, "FBIDVec", n);
          }),
          (n.setFBIDSet = function (t, n) {
            return this.__setParam(t, "FBIDSet", n);
          }),
          (n.setFBIDKeyset = function (t, n) {
            return this.__setParam(t, "FBIDKeyset", n);
          }),
          (n.setEnumVector = function (t, n) {
            return this.__setParam(t, "EnumVector", n);
          }),
          (n.setEnumVec = function (t, n) {
            return this.__setParam(t, "EnumVec", n);
          }),
          (n.setEnumSet = function (t, n) {
            return this.__setParam(t, "EnumSet", n);
          }),
          (n.setEnumKeyset = function (t, n) {
            return this.__setParam(t, "EnumKeyset", n);
          }),
          (n.setIntToIntMap = function (t, n) {
            return this.__setParam(t, "IntToIntMap", n);
          }),
          (n.setIntToIntDict = function (t, n) {
            return this.__setParam(t, "IntToIntDict", n);
          }),
          (n.setIntToFloatMap = function (t, n) {
            return this.__setParam(t, "IntToFloatMap", n);
          }),
          (n.setIntToFloatDict = function (t, n) {
            return this.__setParam(t, "IntToFloatDict", n);
          }),
          (n.setIntToStringMap = function (t, n) {
            return this.__setParam(t, "IntToStringMap", n);
          }),
          (n.setIntToStringDict = function (t, n) {
            return this.__setParam(t, "IntToStringDict", n);
          }),
          (n.setIntToBoolMap = function (t, n) {
            return this.__setParam(t, "IntToBoolMap", n);
          }),
          (n.setIntToBoolDict = function (t, n) {
            return this.__setParam(t, "IntToBoolDict", n);
          }),
          (n.setStringToIntMap = function (t, n) {
            return this.__setParam(t, "StringToIntMap", n);
          }),
          (n.setStringToFloatMap = function (t, n) {
            return this.__setParam(t, "StringToFloatMap", n);
          }),
          (n.setStringToStringMap = function (t, n) {
            return this.__setParam(t, "StringToStringMap", n);
          }),
          (n.setStringToNullableStringMap = function (t, n) {
            return this.__setParam(t, "StringToNullableStringMap", n);
          }),
          (n.setStringToBoolMap = function (t, n) {
            return this.__setParam(t, "StringToBoolMap", n);
          }),
          (n.setStringToEnumMap = function (t, n) {
            return this.__setParam(t, "StringToEnumMap", n);
          }),
          (n.setEnumToStringVectorMap = function (t, n) {
            return this.__setParam(t, "EnumToStringVectorMap", n);
          }),
          (n.setEnumToStringVecDict = function (t, n) {
            return this.__setParam(t, "EnumToStringVecDict", n);
          }),
          (n.setEnumToStringMap = function (t, n) {
            return this.__setParam(t, "EnumToStringMap", n);
          }),
          (n.setEnumToBoolMap = function (t, n) {
            return this.__setParam(t, "EnumToBoolMap", n);
          }),
          (n.setEnumToBoolDict = function (t, n) {
            return this.__setParam(t, "EnumToBoolDict", n);
          }),
          (n.setEnumToEnumMap = function (t, n) {
            return this.__setParam(t, "EnumToEnumMap", n);
          }),
          (n.setEnumToEnumDict = function (t, n) {
            return this.__setParam(t, "EnumToEnumDict", n);
          }),
          (n.setEnumToIntMap = function (t, n) {
            return this.__setParam(t, "EnumToIntMap", n);
          }),
          (n.setEnumToEnumToStringVecMapMap = function (t, n) {
            return this.__setParam(t, "EnumToEnumToStringVecMapMap", n);
          }),
          (n.setEnumToFBIDVectorMap = function (t, n) {
            return this.__setParam(t, "EnumToFBIDVectorMap", n);
          }),
          (n.setEnumToFBIDVecDict = function (t, n) {
            return this.__setParam(t, "EnumToFBIDVecDict", n);
          }),
          (n.setStringToIntDict = function (t, n) {
            return this.__setParam(t, "StringToIntDict", n);
          }),
          (n.setStringToNullableIntDict = function (t, n) {
            return this.__setParam(t, "StringToNullableIntDict", n);
          }),
          (n.setStringToFloatDict = function (t, n) {
            return this.__setParam(t, "StringToFloatDict", n);
          }),
          (n.setStringToStringKeysetDict = function (t, n) {
            return this.__setParam(t, "StringToStringKeysetDict", n);
          }),
          (n.setStringToNullableFloatDict = function (t, n) {
            return this.__setParam(t, "StringToNullableFloatDict", n);
          }),
          (n.setStringToStringDict = function (t, n) {
            return this.__setParam(t, "StringToStringDict", n);
          }),
          (n.setStringToNullableStringDict = function (t, n) {
            return this.__setParam(t, "StringToNullableStringDict", n);
          }),
          (n.setStringToBoolDict = function (t, n) {
            return this.__setParam(t, "StringToBoolDict", n);
          }),
          (n.setStringToEnumDict = function (t, n) {
            return this.__setParam(t, "StringToEnumDict", n);
          }),
          (n.setEnumToIntDict = function (t, n) {
            return this.__setParam(t, "EnumToIntDict", n);
          }),
          (n.setEnumToStringDict = function (t, n) {
            return this.__setParam(t, "EnumToStringDict", n);
          }),
          (n.setHackType = function (t, n) {
            return this.__setParam(t, "HackType", n);
          }),
          (n.setTypeAssert = function (t, n) {
            return this.__setParam(t, "TypeAssert", n);
          }),
          (n.__validateRequiredParamsExistence = function () {
            for (var e in this.$3)
              !this.$3[e].required ||
                Object.prototype.hasOwnProperty.call(this.$1, e) ||
                s(0, 903, e);
          }),
          (n.setParams = function (t) {
            for (var e in t) {
              this.__assertParamExists(e);
              var n = this.$3[e].type;
              this.__setParam(e, n, t[e]);
            }
            return this;
          }),
          (n.__assertParamExists = function (t) {
            t in this.$3 || s(0, 37339, t);
          }),
          (n.__setParam = function (t, n, r) {
            this.__assertParamExists(t);
            var e = this.$3[t].type,
              o = {
                StringOrPFBID: "String",
                IntOrPFBID: "Int",
                FBIDOrPFBID: "FBID",
                PaymentLegacyAdAccountID: "Int",
              },
              a = o[e];
            return (
              e === n || a === n || s(0, 37340, t, n, e),
              this.__setParamInt(t, r),
              this
            );
          }),
          (n.__setParamInt = function (t, n) {
            this.$1[t] = n;
          }),
          (n.getRequest_LEGACY_UNTYPED = function (t) {
            return t.setReplaceTransportMarkers().setURI(this.getURI());
          }),
          (n.setPreviousActorIsPageVoice = function (t) {
            return (this.__setParamInt("paipv", t ? 1 : 0), this);
          }),
          (n.getURI = function () {
            this.__validateRequiredParamsExistence();
            for (
              var t = {},
                n = "",
                o = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
                a = this.$2.split("/"),
                i = !1,
                l = 0;
              l < a.length;
              l++
            ) {
              var u = a[l];
              if (u !== "") {
                var c = o.exec(u);
                if (!c) n += "/" + u;
                else {
                  var d = c[2] === "?",
                    m = c[4],
                    p = this.$3[m];
                  if ((p || s(0, 11837, m, this.$2), d && i)) continue;
                  if (this.$1[m] == null && d) {
                    i = !0;
                    continue;
                  }
                  var _ = this.$1[m] != null ? this.$1[m] : p.defaultValue;
                  _ != null || s(0, 907, m);
                  var f = c[1] ? c[1] : "",
                    g = c[5] ? c[5] : "";
                  ((n += "/" + f + _ + g), (t[m] = !0));
                }
              }
            }
            (this.$2.slice(-1) === "/" && (n += "/"), n === "" && (n = "/"));
            var h = new (e || (e = r("URI")))(n);
            for (var y in this.$1) {
              var C = this.$1[y];
              if (!t[y] && C != null) {
                var b = this.$3[y];
                h.addQueryData(y, b && b.type === "Exists" ? null : C);
              }
            }
            return h;
          }),
          (n.getLookasideURI = function () {
            var t = "lookaside.facebook.com";
            return (
              r("isInternalFBURI")((e || (e = r("URI"))).getRequestURI())
                ? (t = "lookaside.internalfb.com")
                : r("gkx")("21116") && (t = "lookaside.internmc.facebook.com"),
              this.getURI().setDomain(t).setProtocol("https")
            );
          }),
          (t.create = function (n, r) {
            return function () {
              return new t(n, r);
            };
          }),
          t
        );
      })();
    ((u.prototype.getRequest = function (e) {
      return this.getRequest_LEGACY_UNTYPED(e);
    }),
      (l.default = u));
  },
  98,
);
