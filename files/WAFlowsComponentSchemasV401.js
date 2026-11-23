__d(
  "WAFlowsComponentSchemasV401",
  [
    "WAFlowsComponentConstants",
    "WAFlowsComponentSchemasV400",
    "WAFlowsComponentsCommon",
    "WAFlowsSchemaValidationUtils",
    "WAFlowsValidationConstants",
    "WAFlowsWELJUtils",
    "WDSNativeSelectListOptionConstant",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = function () {
        return babelHelpers.extends(
          {
            items: babelHelpers.extends(
              {},
              o("WAFlowsComponentSchemasV400").dataSourceItemsSchemaV400.items,
              {
                properties: babelHelpers.extends(
                  {},
                  o("WAFlowsComponentSchemasV400").dataSourceItemsSchemaV400
                    .items.properties,
                  {
                    image: { type: "string" },
                    color: {
                      type: "string",
                      pattern: o("WAFlowsSchemaValidationUtils")
                        .WA_FLOW_JSON_6_DIGIT_HEX_PATTERN,
                    },
                    "alt-text": { type: "string" },
                  },
                ),
              },
            ),
          },
          o("WAFlowsWELJUtils").getHardValidation([
            o("WAFlowsValidationConstants").NON_EMPTY_ID_IN_DATA_SOURCE,
            o("WAFlowsValidationConstants").UNIQUE_IDS_IN_DATA_SOURCE,
            o("WAFlowsValidationConstants")
              .NO_DATA_SOURCE_CAN_HAVE_IMAGES_AND_COLORS,
          ]),
        );
      },
      d = [
        (u = o("WAFlowsValidationConstants")).REQUIRED_AND_ENABLED,
        u.REQUIRED_AND_VISIBLE,
        u.DISABLED_OPTION_SELECTED,
        u.DATA_SOURCE_IMAGE_SIZE_IS_UNDER_300KB,
      ],
      m = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {},
            o("WAFlowsComponentSchemasV400").WAFlowsRadioButtonsGroupV400Schema
              .properties,
            {
              mediaSize: { enum: ["regular", "large"] },
              dataSource: babelHelpers.extends(
                {},
                (e = o("WAFlowsComponentSchemasV400")
                  .WAFlowsRadioButtonsGroupV400Schema.properties) == null
                  ? void 0
                  : e.dataSource,
                c(),
              ),
            },
          ),
        },
        o("WAFlowsWELJUtils").getValidationSchema(
          [
            {
              prop: "label",
              keyword: "maxLength",
              value: o("WDSNativeSelectListOptionConstant")
                .CBG_RBG_LIST_LABEL_MAX_LENGTH_v400,
            },
            {
              prop: "description",
              keyword: "maxLength",
              value: o("WDSNativeSelectListOptionConstant")
                .SELECT_LIST_OPTION_DESCRIPTION_MAX_LENGTH,
            },
          ],
          d,
          [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE],
          !0,
        ),
        {
          required: ["dataSource", "name", "isSoftValidationMode", "label"],
          additionalProperties: !1,
        },
      ),
      p = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {},
            o("WAFlowsComponentSchemasV400").WAFlowsCheckboxGroupV400Schema
              .properties,
            {
              mediaSize: { enum: ["regular", "large"] },
              dataSource: babelHelpers.extends(
                {},
                (s = o("WAFlowsComponentSchemasV400")
                  .WAFlowsCheckboxGroupV400Schema.properties) == null
                  ? void 0
                  : s.dataSource,
                c(),
              ),
            },
          ),
        },
        o("WAFlowsWELJUtils").getValidationSchema(
          [
            {
              prop: "label",
              keyword: "maxLength",
              value: o("WDSNativeSelectListOptionConstant")
                .CBG_RBG_LIST_LABEL_MAX_LENGTH_v400,
            },
            {
              prop: "description",
              keyword: "maxLength",
              value: o("WDSNativeSelectListOptionConstant")
                .SELECT_LIST_OPTION_DESCRIPTION_MAX_LENGTH,
            },
          ],
          d,
          [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE],
          !0,
        ),
        {
          required: ["dataSource", "name", "isSoftValidationMode", "label"],
          additionalProperties: !1,
        },
      ),
      _ = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {
              isSoftValidationMode: { type: "boolean" },
              label: { type: "string", minLength: 1 },
              name: { type: "string", minLength: 1 },
              required: { type: "boolean" },
              selectedId: { type: "string" },
              dataSource: babelHelpers.extends(
                {
                  type: "array",
                  minItems: o("WDSNativeSelectListOptionConstant")
                    .SELECT_LIST_MIN_OPTIONS,
                },
                c(),
              ),
              visible: { type: "boolean" },
              onSelect: {
                instanceof: "Function",
                properties: { name: { type: "string" } },
                required: ["name"],
              },
            },
            o("WAFlowsComponentsCommon")
              .WAFlowsComponentsCommonSchemaProperties,
          ),
        },
        o("WAFlowsWELJUtils").getValidationSchema(
          [
            {
              prop: "label",
              keyword: "maxLength",
              value: o("WAFlowsComponentConstants")
                .DROPDOWN_SELECT_LIST_LABEL_MAX_LENGTH,
            },
          ],
          d,
          [
            o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE,
            o("WAFlowsValidationConstants").DROPDOWN_DATA_SOURCE_MAX_ITEMS,
            o("WAFlowsValidationConstants")
              .DROPDOWN_DATA_SOURCE_MAX_ITEMS_IMAGES,
          ],
          !0,
          o("WAFlowsComponentConstants")
            .DROPDOWN_SELECT_LIST_OPTION_TITLE_MAX_LENGTH,
        ),
        {
          required: ["dataSource", "name", "label", "isSoftValidationMode"],
          additionalProperties: !1,
        },
      );
    ((l.getDataSourceItemsSchemaV401 = c),
      (l.WAFlowsRadioButtonsGroupV401Schema = m),
      (l.WAFlowsCheckboxGroupV401Schema = p),
      (l.WAFlowsDropdownV401Schema = _));
  },
  98,
);
