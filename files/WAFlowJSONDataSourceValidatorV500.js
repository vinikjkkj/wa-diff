__d(
  "WAFlowJSONDataSourceValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["RadioButtonsGroup", "CheckboxGroup", "Dropdown"],
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.validate = function () {
            for (
              var t = this,
                n = [],
                r = this.flowJSONData.flowJson.screens,
                a = this.flowJSONData.flowJSONPointers,
                i = function () {
                  var i = r[l],
                    s = t.flowJSONData.componentTypeDataMap.get(i.id),
                    d = [],
                    m = [];
                  if (s == null) return 1;
                  var p = Array.from(s.keys()),
                    _ = p.filter(function (t) {
                      return e.includes(t);
                    });
                  (_.forEach(function (e) {
                    var t,
                      n,
                      r = (t = s.get(e)) != null ? t : [],
                      o = c(r);
                    (n = d).push.apply(n, o);
                    var i = u(d, a, e);
                    (m.push.apply(m, i), (d = []));
                  }),
                    m.length > 0 &&
                      m.forEach(function (e) {
                        var t = e.componentName,
                          r = e.componentType;
                        return n.push(
                          o(
                            "WAFlowJSONValidationResultUtil",
                          ).getWAFlowJSONValidationError({
                            code: o("WAFlowJSONValidationError")
                              .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                              .DATA_SOURCE_ITEMS_HAVE_BOTH_IMAGE_AND_COLOR,
                            message: o(
                              "WAFlowJSONValidationError",
                            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDataSourceCannotContainBothImageAndColor(
                              t,
                              r,
                            ),
                            pointers: e.errorPointers,
                          }),
                        );
                      }));
                },
                l = 0;
              l < r.length && !i();
              l++
            );
            return n;
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function u(e, t, n) {
      var r = e.reduce(function (e, r) {
        var o = [];
        r.errorPathsFromDataSource.forEach(function (e) {
          var n;
          return o.push((n = t.get(e)) == null ? void 0 : n.value);
        });
        var a = r.componentName;
        return (
          o.length > 0 &&
            e.push({ errorPointers: o, componentName: a, componentType: n }),
          e
        );
      }, []);
      return r;
    }
    function c(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = e.component,
            r = e.jsonPointer + "/data-source";
          if (
            Object.prototype.hasOwnProperty.call(n, "data-source") &&
            Array.isArray(n["data-source"])
          ) {
            var o = n["data-source"],
              a = new Set(),
              i = new Set();
            if (
              (o.forEach(function (e, t) {
                (Object.prototype.hasOwnProperty.call(e, "color") &&
                  a.add(r + "/" + t + "/color"),
                  Object.prototype.hasOwnProperty.call(e, "image") &&
                    i.add(r + "/" + t + "/image"));
              }),
              a.size > 0 && i.size > 0)
            ) {
              var l = Array.from(a).concat(Array.from(i));
              t.push({ errorPathsFromDataSource: l, componentName: n.name });
            }
          }
        }),
        t
      );
    }
    l.WAFlowJSONDataSourceValidatorV500 = s;
  },
  98,
);
