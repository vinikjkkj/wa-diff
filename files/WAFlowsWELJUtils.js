__d(
  "WAFlowsWELJUtils",
  ["WDSNativeSelectListOptionConstant"],
  function (t, n, r, o, a, i, l) {
    var e = ["required"];
    function s(t) {
      var n = t.required,
        r = n === void 0 ? [] : n,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return {
        type: "object",
        properties: babelHelpers.extends({}, o),
        additionalProperties: !0,
        required: r,
      };
    }
    function u(e, t, n, r, o) {
      (t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = !1));
      var a = m(e, t, r, o),
        i = c(n);
      return { allOf: [a, i] };
    }
    function c(e) {
      e === void 0 && (e = []);
      var t = e.reduce(function (e, t) {
        var n;
        return babelHelpers.extends({}, e, ((n = {}), (n[t] = !0), n));
      }, {});
      return t;
    }
    function d(e) {
      var t = {};
      for (var n of e) {
        var r = n.keyword,
          o = n.value;
        t[r] = o;
      }
      return t;
    }
    function m(e, t, n, r) {
      (t === void 0 && (t = []), n === void 0 && (n = !1));
      var a = {};
      for (var i of e) {
        var l,
          s = i.keyword,
          u = i.prop,
          c = i.value;
        a[u] = ((l = {}), (l[s] = c), l);
      }
      var d = {};
      for (var m of t) d[m] = !0;
      var p = n
        ? (a.dataSource = {
            dataSource: {
              items: {
                properties: {
                  title: {
                    maxLength:
                      r != null
                        ? r
                        : o("WDSNativeSelectListOptionConstant")
                            .SELECT_LIST_OPTION_TITLE_MAX_LENGTH,
                  },
                  metadata: {
                    maxLength: o("WDSNativeSelectListOptionConstant")
                      .SELECT_LIST_OPTION_METADATA_MAX_LENGTH,
                  },
                  description: {
                    maxLength: o("WDSNativeSelectListOptionConstant")
                      .SELECT_LIST_OPTION_DESCRIPTION_MAX_LENGTH,
                  },
                },
              },
            },
          })
        : {};
      return {
        if: { properties: { isSoftValidationMode: { enum: [!0] } } },
        then: babelHelpers.extends(
          { properties: babelHelpers.extends({}, a, p) },
          d,
        ),
        else: {},
      };
    }
    ((l.transformDataModelSchema = s),
      (l.getValidationSchema = u),
      (l.getHardValidation = c),
      (l.getHardValidationWithSchema = d),
      (l.getSoftValidation = m));
  },
  98,
);
