__d(
  "WAFlowJSONRoutingModelShoppingScreensPathValidatorV502",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WAFlowsTypes",
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
          var e = this.flowJSONData.flowJson,
            t = e.routing_model
              ? s(e.routing_model)
              : this.flowJSONData.generatedRoutingModel;
          return this.validateShoppingPath(t);
        }),
        (n.validateShoppingPath = function (t) {
          var e = this,
            n = [];
          return (
            t.forEach(function (t, r) {
              var a,
                i =
                  (a = e.flowJSONData.screenData.get(r)) == null ||
                  (a = a.data.layout) == null
                    ? void 0
                    : a.type;
              if (i !== void 0) {
                var l = u().get(i);
                l !== void 0 &&
                  t.forEach(function (t, a) {
                    var s,
                      u =
                        (s = e.flowJSONData.screenData.get(t)) == null ||
                        (s = s.data.layout) == null
                          ? void 0
                          : s.type;
                    if (u && !l.includes(u)) {
                      var c = o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidShoppingRoutingModelPathErrorMsg(
                          i,
                          u,
                        ),
                        d = [];
                      (d.push.apply(
                        d,
                        o("WAFlowJSONValidationResultUtil").getValuePointers([
                          "/" +
                            o("WAFlowJSONConstants")
                              .WA_FLOW_JSON_ROUTING_MODEL +
                            "/" +
                            r +
                            "/" +
                            a,
                        ]),
                      ),
                        d.push.apply(
                          d,
                          o("WAFlowJSONValidationResultUtil").getKeyPointers([
                            "/" +
                              o("WAFlowJSONConstants")
                                .WA_FLOW_JSON_ROUTING_MODEL +
                              "/" +
                              r,
                          ]),
                        ),
                        n.push(
                          e.getError(
                            c,
                            d,
                            o("WAFlowJSONValidationError")
                              .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                              .INVALID_ROUTING_MODEL,
                          ),
                        ));
                    }
                  });
              }
            }),
            n
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function s(e) {
      var t = new Map();
      for (var n in e) t.set(n, e[n]);
      return t;
    }
    function u() {
      var e,
        t = new Map();
      return (
        t.set((e = o("WAFlowsTypes")).WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST, [
          e.WA_FLOWS_LAYOUT_NAMES.ITEM_LIST,
          e.WA_FLOWS_LAYOUT_NAMES.CART,
        ]),
        t.set(e.WA_FLOWS_LAYOUT_NAMES.ITEM_LIST, [
          e.WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL,
          e.WA_FLOWS_LAYOUT_NAMES.CART,
        ]),
        t.set(e.WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL, [
          e.WA_FLOWS_LAYOUT_NAMES.CART,
        ]),
        t
      );
    }
    l.WAFlowJSONRoutingModelShoppingScreensPathValidatorV502 = e;
  },
  98,
);
