__d(
  "WAFlowsMinMaxPropertyValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          for (
            var e = this,
              t = [],
              n = this.flowJSONData.flowJson.screens,
              r = this.flowJSONData.flowJSONPointers,
              a = function () {
                var a = n[i],
                  l = e.flowJSONData.componentTypeDataMap.get(a.id),
                  u = [],
                  c = [];
                if (l == null) return 1;
                var d = Array.from(l.keys()),
                  m = e.getComponentsToMinMaxPropertiesMap();
                (m.forEach(function (e, t) {
                  if (d.includes(t)) {
                    var n,
                      o,
                      a = (n = l.get(t)) != null ? n : [],
                      i = s(a, e);
                    (o = u).push.apply(o, i);
                    var m = u.reduce(function (n, o) {
                      var a,
                        i = (a = r.get(o.errorPath)) == null ? void 0 : a.value,
                        l = o.componentName;
                      return (
                        i != null &&
                          n.push({
                            errorPointer: i,
                            componentName: l,
                            componentType: t,
                            attributes: e,
                          }),
                        n
                      );
                    }, []);
                    c.push.apply(c, m);
                  }
                  u = [];
                }),
                  c.length > 0 &&
                    c.forEach(function (e) {
                      return t.push(
                        o(
                          "WAFlowJSONValidationResultUtil",
                        ).getWAFlowJSONValidationError({
                          code: o("WAFlowJSONValidationError")
                            .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                            .MIN_VALUE_GREATER_THAN_MAX,
                          message: o(
                            "WAFlowJSONValidationError",
                          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinIsGreaterThanMaxPropertyErrorMsg(
                            e.attributes[0],
                            e.attributes[1],
                            e.componentType,
                            e.componentName,
                          ),
                          pointers: e.errorPointer,
                        }),
                      );
                    }));
              },
              i = 0;
            i < n.length && !a();
            i++
          );
          return t;
        }),
        (n.getComponentsToMinMaxPropertiesMap = function () {
          return o("WAFlowJSONConstants").componentsToMinMaxPropertiesV400;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function s(e, t) {
      var n = [];
      if (t.length !== 2) return n;
      var r = t[0],
        o = t[1];
      return (
        e.forEach(function (e) {
          var t = e.component;
          typeof t[r] == "number" &&
            typeof t[o] == "number" &&
            t[r] > t[o] &&
            Object.prototype.hasOwnProperty.call(t, "name") &&
            n.push({
              errorPath: e.jsonPointer + "/" + r,
              componentName: t.name,
            });
        }),
        n
      );
    }
    l.WAFlowsMinMaxPropertyValidatorV500 = e;
  },
  98,
);
