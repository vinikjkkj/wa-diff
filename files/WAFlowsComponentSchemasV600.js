__d(
  "WAFlowsComponentSchemasV600",
  [
    "WAFlowsComponentConstants",
    "WAFlowsComponentSchemasV401",
    "WAFlowsEmbeddedLink.react",
    "WAFlowsOptIn.react",
    "WAFlowsSchemaValidationUtils",
    "WAFlowsValidationConstants",
    "WAFlowsWELJUtils",
    "WDSNativeSelectListOptionConstant",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        onSelect: { instanceof: "Function" },
        onUnselect: { instanceof: "Function" },
      },
      u = [
        (e = o("WAFlowsValidationConstants")).REQUIRED_AND_ENABLED,
        e.REQUIRED_AND_VISIBLE,
        e.DISABLED_OPTION_SELECTED,
        e.DATA_SOURCE_IMAGE_SIZE_IS_UNDER_100KB,
      ];
    function c() {
      var e = o("WAFlowsComponentSchemasV401").getDataSourceItemsSchemaV401();
      if (typeof e != "object" || e === null) return null;
      var t = e.items;
      return t == null || Array.isArray(t)
        ? null
        : ((e.items = babelHelpers.extends({}, t, {
            properties: babelHelpers.extends({}, t.properties, s),
          })),
          e);
    }
    var d = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {},
            typeof o("WAFlowsComponentSchemasV401")
              .WAFlowsCheckboxGroupV401Schema == "object"
              ? o("WAFlowsComponentSchemasV401").WAFlowsCheckboxGroupV401Schema
                  .properties
              : {},
            {
              dataSource: babelHelpers.extends({}, c(), {
                minItems: o("WDSNativeSelectListOptionConstant")
                  .SELECT_LIST_MIN_OPTIONS,
                maxItems: o("WDSNativeSelectListOptionConstant")
                  .SELECT_LIST_MAX_OPTIONS,
              }),
            },
            s,
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
          u,
          [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE],
          !0,
        ),
        {
          required: ["dataSource", "name", "isSoftValidationMode", "label"],
          additionalProperties: !1,
        },
        o("WAFlowsWELJUtils").getHardValidation([
          o("WAFlowsValidationConstants").ON_SELECT_ACTION_EXCLUSIVE_VALIDATOR,
          o("WAFlowsValidationConstants")
            .ON_UNSELECT_ACTION_EXCLUSIVE_VALIDATOR,
        ]),
      ),
      m = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {},
            typeof o("WAFlowsComponentSchemasV401").WAFlowsDropdownV401Schema ==
              "object"
              ? o("WAFlowsComponentSchemasV401").WAFlowsDropdownV401Schema
                  .properties
              : {},
            { dataSource: babelHelpers.extends({}, c()) },
            s,
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
          u,
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
        o("WAFlowsWELJUtils").getHardValidation([
          o("WAFlowsValidationConstants").ON_SELECT_ACTION_EXCLUSIVE_VALIDATOR,
          o("WAFlowsValidationConstants")
            .ON_UNSELECT_ACTION_EXCLUSIVE_VALIDATOR,
        ]),
      ),
      p = babelHelpers.extends(
        {
          type: "object",
          properties: babelHelpers.extends(
            {},
            typeof o("WAFlowsComponentSchemasV401")
              .WAFlowsRadioButtonsGroupV401Schema == "object"
              ? o("WAFlowsComponentSchemasV401")
                  .WAFlowsRadioButtonsGroupV401Schema.properties
              : {},
            {
              dataSource: babelHelpers.extends({}, c(), {
                minItems: o("WDSNativeSelectListOptionConstant")
                  .SELECT_LIST_MIN_OPTIONS,
                maxItems: o("WDSNativeSelectListOptionConstant")
                  .SELECT_LIST_MAX_OPTIONS,
              }),
            },
            s,
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
          u,
          [o("WAFlowsValidationConstants").INIT_VALUE_MATCHES_TYPE],
          !0,
        ),
        {
          required: ["dataSource", "name", "isSoftValidationMode", "label"],
          additionalProperties: !1,
        },
        o("WAFlowsWELJUtils").getHardValidation([
          o("WAFlowsValidationConstants").ON_SELECT_ACTION_EXCLUSIVE_VALIDATOR,
          o("WAFlowsValidationConstants")
            .ON_UNSELECT_ACTION_EXCLUSIVE_VALIDATOR,
        ]),
      ),
      _ = babelHelpers.extends({}, o("WAFlowsOptIn.react").SCHEMA, {
        properties: babelHelpers.extends(
          {},
          o("WAFlowsOptIn.react").SCHEMA.properties,
          s,
          {
            onClick: {
              url: {
                type: "string",
                format: "uri",
                pattern: o("WAFlowsSchemaValidationUtils")
                  .WA_FLOW_JSON_URI_REGEX,
              },
            },
          },
        ),
      }),
      f = babelHelpers.extends({}, o("WAFlowsEmbeddedLink.react").SCHEMA, {
        properties: babelHelpers.extends(
          {},
          o("WAFlowsEmbeddedLink.react").SCHEMA.properties,
          {
            onClick: {
              url: {
                type: "string",
                format: "uri",
                pattern: o("WAFlowsSchemaValidationUtils")
                  .WA_FLOW_JSON_URI_REGEX,
              },
            },
          },
        ),
      });
    ((l.WAFlowsCheckboxGroupV600Schema = d),
      (l.WAFlowsDropdownV600Schema = m),
      (l.WAFlowsRadioButtonsGroupV600Schema = p),
      (l.WAFlowsOptInV600Schema = _),
      (l.WAFlowsEmbeddedLinkV600Schema = f));
  },
  98,
);
