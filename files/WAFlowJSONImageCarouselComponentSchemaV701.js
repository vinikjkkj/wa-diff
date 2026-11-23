__d(
  "WAFlowJSONImageCarouselComponentSchemaV701",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONImageCarouselProperties",
    "WAFlowJSONSchemaUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r, a;
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE,
          (r = o("WAFlowJSONImageCarouselProperties"))
            .WAFlowJSONImageCarouselPropsType.IMAGES,
        ],
        additionalProperties: !1,
        properties:
          ((n = {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .IMAGE_CAROUSEL,
            },
            "aspect-ratio": (a = o(
              "WAFlowJSONSchemaUtils",
            )).getStringEnumBindingSchemaType(e, [
              r.WAFlowJSONImageCarouselAspectRatioType.STANDARD_4_3,
              r.WAFlowJSONImageCarouselAspectRatioType.LANDSCAPE_16_9,
            ]),
          }),
          (n[r.WAFlowJSONImageCarouselPropsType.IMAGES] =
            a.getArrayObjectBindingSchemaType(
              e,
              [
                r.WAFlowJSONImageCarouselPropsType.SRC,
                r.WAFlowJSONImageCarouselPropsType.ALT_TEXT,
              ],
              ((t = {}),
              (t[r.WAFlowJSONImageCarouselPropsType.SRC] =
                a.getBase64StringBindingSchemaType(e)),
              (t[r.WAFlowJSONImageCarouselPropsType.ALT_TEXT] =
                a.getStringBindingSchemaType(e)),
              t),
            )),
          (n[r.WAFlowJSONImageCarouselPropsType.SCALE_TYPE] =
            a.getStringEnumBindingSchemaType(e, [
              r.WAFlowJSONImageCarouselScaleType.CONTAIN,
              r.WAFlowJSONImageCarouselScaleType.COVER,
            ])),
          (n.visible = a.getBoolBindingSchemaType(e)),
          n),
      };
    }
    l.getImageCarouselComponentSchemaV701 = e;
  },
  98,
);
