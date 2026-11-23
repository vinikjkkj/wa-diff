__d(
  "WAFlowsComponentsSchemaV701",
  [
    "WAFlowsChipsSelector.react",
    "WAFlowsComponentConstants",
    "WAFlowsImageCarousel.react",
    "WAFlowsValidationConstants",
    "WAFlowsWELJUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("WAFlowsValidationConstants"))
          .MIN_SELECTED_ITEMS_LESS_THAN_MAX_SELECTED_ITEMS,
        e.REQUIRED_AND_ENABLED,
        e.REQUIRED_AND_VISIBLE,
      ],
      u = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {},
            o("WAFlowsChipsSelector.react").SCHEMA.properties,
            {
              onSelect: { instanceof: "Function" },
              onUnselect: { instanceof: "Function" },
            },
          ),
        },
        o("WAFlowsWELJUtils").getValidationSchema(
          [
            {
              prop: "label",
              keyword: "maxLength",
              value: o("WAFlowsComponentConstants")
                .CHIPS_SELECTOR_TITLE_MAX_LENGTH,
            },
          ],
          s,
          [e.INIT_VALUE_MATCHES_TYPE],
          !0,
        ),
        { required: ["dataSource", "label"], additionalProperties: !1 },
        o("WAFlowsWELJUtils").getHardValidation([
          e.ON_SELECT_ACTION_EXCLUSIVE_VALIDATOR,
          e.ON_UNSELECT_ACTION_EXCLUSIVE_VALIDATOR,
        ]),
      ),
      c = {
        type: "object",
        properties: babelHelpers.extends(
          {},
          o("WAFlowsImageCarousel.react").SCHEMA.properties,
        ),
        required: o("WAFlowsImageCarousel.react").SCHEMA.required,
        additionalProperties: !1,
      };
    ((l.WAFlowsChipsSelectorV701Schema = u),
      (l.WAFlowsImageCarouselV701Schema = c));
  },
  98,
);
