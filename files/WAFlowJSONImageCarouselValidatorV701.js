__d(
  "WAFlowJSONImageCarouselValidatorV701",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONImageCarouselProperties",
    "WAFlowJSONImageSourceValidatorV500",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "unsafeCast",
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
          var e = this,
            t = [],
            n = [],
            a = [],
            i = [];
          return (
            this.flowJSONData.getAllScreenIds().forEach(function (t) {
              var l = e.flowJSONData.getComponentDataByType(
                t,
                o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                  .IMAGE_CAROUSEL,
              );
              l.forEach(function (e) {
                n.push(e.jsonPointer);
                var t = r("unsafeCast")(e.component);
                if (
                  !o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV400(
                    t.images,
                  )
                ) {
                  var l = t.images.length;
                  (l >
                    o("WAFlowJSONImageCarouselProperties")
                      .WAFlowJSONImageCarouselConstants.MAX_IMAGES &&
                    a.push(e.jsonPointer + "/images"),
                    t.images.forEach(function (t, n) {
                      !o(
                        "WAFlowJSONValidationResultUtil",
                      ).isDynamicDataBindingV400(t.src) &&
                        !o("WAFlowJSONImageSourceValidatorV500").isValidBase64(
                          t.src,
                        ) &&
                        i.push(e.jsonPointer + "/images/" + n + "/src");
                    }));
                }
              });
            }),
            n.length >
              o("WAFlowJSONImageCarouselProperties")
                .WAFlowJSONImageCarouselConstants.MAX_COMPONENTS_PER_FLOW &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxComponentPerFlowErrorMsg(
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                      .IMAGE_CAROUSEL,
                    o("WAFlowJSONImageCarouselProperties")
                      .WAFlowJSONImageCarouselConstants.MAX_COMPONENTS_PER_FLOW,
                    n.length,
                  ),
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
                ),
              ),
            a.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxQuantityRequiredErrorMsg(
                    o("WAFlowJSONImageCarouselProperties")
                      .WAFlowJSONImageCarouselPropsType.IMAGES,
                    o("WAFlowJSONImageCarouselProperties")
                      .WAFlowJSONImageCarouselConstants.MAX_IMAGES,
                    o("WAFlowJSONImageCarouselProperties")
                      .WAFlowJSONImageCarouselPropsType.ITEMS,
                  ),
                  a,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
                ),
              ),
            i.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidImageSourceErrorMsg(),
                  i,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
                ),
              ),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONImageCarouselValidatorV701 = e;
  },
  98,
);
