__d(
  "WAFlowsComponentSchemasV400",
  [
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
      c = [
        (e = o("WAFlowsValidationConstants")).REQUIRED_AND_ENABLED,
        e.REQUIRED_AND_VISIBLE,
        e.DISABLED_OPTION_SELECTED,
      ],
      d = {
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            metadata: { type: "string" },
            description: { type: "string" },
            enabled: { type: "boolean" },
          },
          required: ["id", "title"],
          additionalProperties: !1,
        },
      },
      m = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {
              isSoftValidationMode: { type: "boolean" },
              label: {
                type: "string",
                pattern: o("WAFlowsSchemaValidationUtils")
                  .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
              },
              description: { type: "string" },
              name: { type: "string" },
              required: { type: "boolean" },
              dataSource: babelHelpers.extends(
                {
                  type: "array",
                  minItems: (s = o("WDSNativeSelectListOptionConstant"))
                    .SELECT_LIST_MIN_OPTIONS,
                  maxItems: s.SELECT_LIST_MAX_OPTIONS,
                },
                (u = o("WAFlowsWELJUtils")).getHardValidation([
                  e.NON_EMPTY_ID_IN_DATA_SOURCE,
                  e.UNIQUE_IDS_IN_DATA_SOURCE,
                ]),
                d,
              ),
              visible: { type: "boolean" },
            },
            o("WAFlowsComponentsCommon")
              .WAFlowsComponentsCommonSchemaProperties,
            {
              onSelect: {
                instanceof: "Function",
                properties: { name: { type: "string" } },
                required: ["name"],
              },
            },
          ),
        },
        u.getValidationSchema(
          [
            {
              prop: "label",
              keyword: "maxLength",
              value: s.CBG_RBG_LIST_LABEL_MAX_LENGTH_v400,
            },
            {
              prop: "description",
              keyword: "maxLength",
              value: s.SELECT_LIST_OPTION_DESCRIPTION_MAX_LENGTH,
            },
          ],
          c,
          [e.INIT_VALUE_MATCHES_TYPE],
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
            {
              isSoftValidationMode: { type: "boolean" },
              label: {
                type: "string",
                pattern: o("WAFlowsSchemaValidationUtils")
                  .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
              },
              description: { type: "string" },
              name: { type: "string" },
              required: { type: "boolean" },
              dataSource: babelHelpers.extends(
                { type: "array" },
                u.getHardValidation([
                  e.NON_EMPTY_ID_IN_DATA_SOURCE,
                  e.UNIQUE_IDS_IN_DATA_SOURCE,
                ]),
                {
                  minItems: s.SELECT_LIST_MIN_OPTIONS,
                  maxItems: s.SELECT_LIST_MAX_OPTIONS,
                },
                d,
              ),
              minSelectedItems: { type: "number", minimum: 0 },
              maxSelectedItems: { type: "number", minimum: 2 },
              visible: { type: "boolean" },
              onSelect: {
                instanceof: "Function",
                properties: { name: { type: "string" } },
                required: ["name", "label"],
              },
            },
            o("WAFlowsComponentsCommon")
              .WAFlowsComponentsCommonSchemaProperties,
          ),
        },
        u.getValidationSchema(
          [
            {
              prop: "label",
              keyword: "maxLength",
              value: s.CBG_RBG_LIST_LABEL_MAX_LENGTH_v400,
            },
            {
              prop: "description",
              keyword: "maxLength",
              value: s.SELECT_LIST_OPTION_DESCRIPTION_MAX_LENGTH,
            },
          ],
          c,
          [e.INIT_VALUE_MATCHES_TYPE],
          !0,
        ),
        {
          required: ["dataSource", "name", "isSoftValidationMode", "label"],
          additionalProperties: !1,
        },
      );
    ((l.dataSourceItemsSchemaV400 = d),
      (l.WAFlowsRadioButtonsGroupV400Schema = m),
      (l.WAFlowsCheckboxGroupV400Schema = p));
  },
  98,
);
