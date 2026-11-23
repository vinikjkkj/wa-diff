__d(
  "WAFlowJSONValidationError",
  [
    "WAFlowJSONComponentPlacementValidatorV600",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationResultUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "https://developers.facebook.com/docs/whatsapp/flows",
      s = Object.freeze({
        INVALID_FLOW_JSON: "INVALID_FLOW_JSON",
        MISSING_FLOW_JSON_VERSION: "MISSING_FLOW_JSON_VERSION",
        INVALID_FLOW_JSON_VERSION: "INVALID_FLOW_JSON_VERSION",
        UNAVAILABLE_FLOW_JSON_VERSION: "UNAVAILABLE_FLOW_JSON_VERSION",
        INVALID_FLOW_JSON_VERSION_STATE: "INVALID_FLOW_JSON_VERSION_STATE",
        INVALID_DATA_API_VERSION: "INVALID_DATA_API_VERSION",
        NO_SUPPORTED_DATA_API_VERSION: "NO_SUPPORTED_DATA_API_VERSION",
        NO_SCHEMA_FOUND: "NO_SCHEMA_FOUND",
        INVALID_SCHEMA: "INVALID_SCHEMA",
        INVALID_ONE_OF_SCHEMA: "INVALID_ONE_OF_SCHEMA",
        INVALID_PROPERTY_KEY: "INVALID_PROPERTY_KEY",
        INVALID_PROPERTY_VALUE: "INVALID_PROPERTY_VALUE",
        INVALID_PROPERTY_VALUE_FORMAT: "INVALID_PROPERTY_VALUE_FORMAT",
        INVALID_PROPERTY_TYPE: "INVALID_PROPERTY_TYPE",
        MISSING_REQUIRED_PROPERTY: "MISSING_REQUIRED_PROPERTY",
        MIN_ITEMS_REQUIRED: "MIN_ITEMS_REQUIRED",
        MAX_ITEMS_REQUIRED: "MAX_ITEMS_REQUIRED",
        MIN_CHARS_REQUIRED: "MIN_CHARS_REQUIRED",
        MINIMUM_VALUE_REQUIRED: "MINIMUM_VALUE_REQUIRED",
        MAXIMUM_VALUE_REQUIRED: "MAXIMUM_VALUE_REQUIRED",
        PATTERN_MISMATCH: "PATTERN_MISMATCH",
        PROPERTY_NAME_MISMATCH: "PROPERTY_NAME_MISMATCH",
        INVALID_ENUM_VALUE: "INVALID_ENUM_VALUE",
        INVALID_DEPENDENCIES: "INVALID_DEPENDENCIES",
        NOT_KEYWORD_SCHEMA_VALIDATION_FAILED:
          "NOT_KEYWORD_SCHEMA_VALIDATION_FAILED",
        ONE_OF_SCHEMA_VALIDATION_FAILED: "ONE_OF_SCHEMA_VALIDATION_FAILED",
        INVALID_TYPE_PROPERTY_VALUE: "INVALID_TYPE_PROPERTY_VALUE",
        MISSING_REQUIRED_TYPE_PROPERTY: "MISSING_REQUIRED_TYPE_PROPERTY",
        INVALID_PROPERTY_TYPE_NUMBER: "INVALID_PROPERTY_TYPE:NUMBER",
        INVALID_PROPERTY_TYPE_STRING: "INVALID_PROPERTY_TYPE:STRING",
        INVALID_PROPERTY_TYPE_BOOLEAN: "INVALID_PROPERTY_TYPE:BOOLEAN",
        INVALID_PROPERTY_TYPE_INTEGER: "INVALID_PROPERTY_TYPE:INTEGER",
        INVALID_ROUTING_MODEL: "INVALID_ROUTING_MODEL",
        INVALID_NAVIGATE_ACTION_PAYLOAD: "INVALID_NAVIGATE_ACTION_PAYLOAD",
        MISSING_NAVIGATION_ACTION_PAYLOAD: "MISSING_NAVIGATION_ACTION_PAYLOAD",
        INVALID_UPDATE_DATA_ACTION_PAYLOAD:
          "INVALID_UPDATE_DATA_ACTION_PAYLOAD",
        INVALID_SCREEN_DATA: "INVALID_SCREEN_DATA",
        INVALID_SCREEN_DYNAMIC_DATA: "INVALID_SCREEN_DYNAMIC_DATA",
        INVALID_COMPLETE_ACTION: "INVALID_COMPLETE_ACTION",
        INVALID_ON_CLICK_ACTION_PAYLOAD: "INVALID_ON_CLICK_ACTION_PAYLOAD",
        INVALID_NAVIGATE_ACTION_STATIC_DATA:
          "INVALID_NAVIGATE_ACTION_STATIC_DATA",
        INVALID_NAVIGATE_ACTION_NEXT_SCREEN_NAME:
          "INVALID_NAVIGATE_ACTION_NEXT_SCREEN_NAME",
        MAX_ALLOWED_COMPONENTS_PER_SCREEN: "MAX_ALLOWED_COMPONENTS_PER_SCREEN",
        INVALID_RICHTEXT_PLACEMENT: "INVALID_RICHTEXT_PLACEMENT",
        INVALID_COMPONENT_PLACEMENT: "INVALID_COMPONENT_PLACEMENT",
        INVALID_TEXT_DYNAMIC_DATA: "INVALID_TEXT_DYNAMIC_DATA",
        SCREEN_ID_IS_RESERVED_KEYWORD: "SCREEN_ID_IS_RESERVED_KEYWORD",
        DUPLICATE_SCREEN_IDS: "DUPLICATE_SCREEN_IDS",
        MISSING_TERMINAL_SCREEN: "MISSING_TERMINAL_SCREEN",
        MISSING_FOOTER_ON_TERMINAL_SCREEN: "MISSING_FOOTER_ON_TERMINAL_SCREEN",
        DUPLICATE_FORM_COMPONENT_NAMES: "DUPLICATE_FORM_COMPONENT_NAMES",
        MAX_SCREENS_NUMBER: "MAX_SCREENS_NUMBER",
        MIN_VALUE_GREATER_THAN_MAX: "MIN_VALUE_GREATER_THAN_MAX",
        COMPONENTS_OUTSIDE_FORM: "COMPONENTS_OUTSIDE_FORM",
        MISSING_FOOTER_IN_IF_ELSE_BRANCHES:
          "MISSING_FOOTER_IN_IF_ELSE_BRANCHES",
        MISSING_FOOTER_IN_SWITCH_BRANCHES: "MISSING_FOOTER_IN_SWITCH_BRANCHES",
        NATIVE_COMPONENT_IN_FORM_INIT_VALUES:
          "NATIVE_COMPONENT_IN_FORM_INIT_VALUES",
        COMPONENT_TYPE_MAX_NUMBER_PER_SCREEN:
          "COMPONENT_TYPE_MAX_NUMBER_PER_SCREEN",
        MISSING_CART_LAYOUT: "MISSING_CART_LAYOUT",
        DATA_SOURCE_ITEMS_HAVE_BOTH_IMAGE_AND_COLOR:
          "DATA_SOURCE_ITEMS_HAVE_BOTH_IMAGE_AND_COLOR",
        EMPTY_SWITCH_CASES: "EMPTY_SWITCH_CASES",
        MAXIMUM_IF_NESTING: "MAXIMUM_IF_NESTING",
        INVALID_DATE_RANGE: "INVALID_DATE_RANGE",
        INVALID_SENSITIVE_FIELD: "INVALID_SENSITIVE_FIELD",
        INVALID_MIN_MAX_DAYS: "INVALID_MIN_MAX_DAYS",
        INVALID_DATE_SINGLE_INIT_VALUE_FORMAT:
          "INVALID_DATE_SINGLE_INIT_VALUE_FORMAT",
        INVALID_TYPE: "INVALID_TYPE",
        MISSING_CALENDAR_PICKER_RANGE_MODE_PROP:
          "MISSING_CALENDAR_PICKER_RANGE_MODE_PROP",
        UNEXPECTED_CALENDAR_PICKER_RANGE_MODE_PROP:
          "UNEXPECTED_CALENDAR_PICKER_RANGE_MODE_PROP",
        INVALID_PROPERTY_NAME_FOR_CONDITION:
          "INVALID_PROPERTY_NAME_FOR_CONDITION",
        INVALID_PROPERTY_VALUE_FOR_CONDITION:
          "INVALID_PROPERTY_VALUE_FOR_CONDITION",
        DUPLICATE_PROPETY_FOR_CONDITION: "DUPLICATE_PROPETY_FOR_CONDITION",
        INVALID_ACTION_PAYLOAD_PROPERTY: "INVALID_ACTION_PAYLOAD_PROPERTY",
      }),
      u = Object.freeze({
        INVALID_FLOW_JSON: "Flow JSON is not valid.",
        INVALID_FLOW_JSON_SCHEMA: "Invalid Flow JSON schema.",
        MISSING_FLOW_JSON_VERSION: "Flow JSON version is not specified.",
        INVALID_FLOW_JSON_VERSION:
          "Given Flow JSON version is not supported. Please refer the supported versions at https://developers.facebook.com/docs/whatsapp/flows/changelogs#currently-supported-versions.",
        UNSUPPORTED_FLOW_JSON_VERSION: "Unsupported Flow JSON version.",
        UNAVAILABLE_FLOW_JSON_VERSION:
          "Given Flow JSON version is not available for your WABA ID.",
        UNPUBLISHED_FLOW_JSON_VERSION: "Flow JSON version is not published.",
        INVALID_FLOW_JSON_VERSION_STATE: "Invalid state of Flow JSON version.",
        INVALID_DATA_API_VERSION: "Invalid Data API version.",
        NO_SUPPORTED_DATA_API_VERSION:
          "No supported Data API version found for given Flow JSON version.",
        UNSUPPORTED_VALUE_TYPE: "Unsupported value type.",
        UNSUPPORTED_COMPONENT_TYPE: "Unsupported component type.",
        UNSUPPORTED_STORE_TYPE: "Unsupported store type.",
        UNSUPPORTED_RICH_TEXT_STRING_INTERPOLATION:
          'String interpolation is not supported by RichText component. Either use static value (e.g. "# Title") or dynamic only (e.g. "${data.title}").',
        getExpiredFlowJVersionErrorMsg: function (t) {
          return (
            "Flow JSON version " +
            t +
            " has expired. Sending is now blocked. Please migrate to the recommended version as soon as possible. For more information, please refer to https://developers.facebook.com/docs/whatsapp/flows/changelogs#currently-supported-versions."
          );
        },
        LEADING_ZERO: "Number cannot not have leading zeroes",
        EMPTY_ARRAY: "Expected array to contain at least one component.",
        EMPTY_CONDITION:
          "Expected property 'condition' to contain at least one operand.",
        INVALID_EMPTY_PARENTHESES: "Found invalid empty parentheses",
        LITERALS_ON_BOTH_SIDES_OF_OPERATOR:
          "An operator cannot not have literals on both sides. Found invalid syntax",
        MISSING_OPENING_PARENTHESIS:
          "Missing opening parenthesis for the closing parenthesis",
        MISSING_NUMBER_AFTER_NEGATIVE_SIGN:
          "A numerical value is expected to follow the negative sign",
        MISSING_PARENTHESIS_CLOUSURE: "Missing closing parenthesis.",
        MISSING_STRING_ENCLOSURE: "Missing closing quote for string.",
        ONLY_OPERAND_NOT_BOOLEAN: "Expected single operand to be a boolean.",
        ONLY_OPERAND_IS_LITERAL:
          "The only operand is a literal value. Expected single operand to be a boolean.",
        WRONG_POSITIONING_CLOSING_PARENTHESIS:
          "Found invalid positioning of closing parenthesis.",
        INVALID_ON_SELECT_ACTION_PATH:
          "The 'on-select-action' property cannot be used at both the component and data-source levels.",
        INVALID_ON_UNSELECT_ACTION_PATH:
          "The 'on-unselect-action' property cannot be used at both the component and data-source levels.",
        ON_SELECT_ACTION_SELF_UPDATE:
          "Attempting to update a key with its own value is redundant and not allowed.",
        getNoSchemaFoundErrorMsg: function (t) {
          return "No schema found for the given version " + t + ".";
        },
        getInvalidSchemaErrorMsg: function (t) {
          return "Invalid schema found for the given version " + t + ".";
        },
        getMissingPropertyErrorMsg: function (t) {
          return "Required property '" + t + "' is missing.";
        },
        getInvalidPropertyErrorMsg: function (n, r, a) {
          return n === o("WAFlowJSONConstants").WA_FLOW_JSON_DATA_CHANNEL_URI &&
            a === !0
            ? "Property '" +
                n +
                "' is no longer supported in Flow JSON as of version '3.0'. Please configure your endpoint URI using Flows API or Builder. Refer Flows documentation at " +
                e +
                " for more information."
            : r != null
              ? "Property '" + n + "' is not allowed in '" + r + "' component."
              : "Property '" + n + "' is not allowed.";
        },
        getInvalidPropertyValueErrorMsg: function (t, n) {
          var e = "Invalid value found for property '" + t + "'.";
          return n != null && n.length > 0
            ? n.length === 1
              ? e + " Expected '" + n[0] + "'."
              : e + " Expected one of: [" + n.join(", ") + "]."
            : e;
        },
        getInvalidPropertyTypeErrorMsg: function (t, n, r) {
          return (
            "Expected property '" +
            t +
            "' to be of type '" +
            n +
            "' but found '" +
            r +
            "'."
          );
        },
        getUnusedInitValuePropertyTypeErrorMsg: function (t) {
          return (
            "The property '" +
            t +
            "' is declared but not used in the init-values'."
          );
        },
        getMinQuantityRequiredErrorMsg: function (t, n, r) {
          return (
            "Property '" + t + "' should have at least '" + n + "' " + r + "."
          );
        },
        getMaxQuantityRequiredErrorMsg: function (t, n, r) {
          return (
            "Property '" + t + "' should have at most '" + n + "' " + r + "."
          );
        },
        getMinMaxErrorMsg: function (t, n, r) {
          var e = r ? "minimum" : "maximum";
          return (
            "The " + e + " value allowed for property '" + t + "' is " + n + "."
          );
        },
        getInvalidPropertyValueFormatErrorMsg: function (t, n) {
          return "Property '" + t + "' should be in '" + n + "' format.";
        },
        getInvalidPatternErrorMsg: function (t, n, r, o) {
          return r != null
            ? "Property '" + r + "' " + c(t, n)
            : o != null
              ? "'" + o + "' " + c(t, n)
              : "Property " + c(t, n);
        },
        getInvalidEnumValueErrorMsg: function (t) {
          return "Value should be one of: [" + t + "].";
        },
        getInvalidDependenciesErrorMsg: function (t, n) {
          return n != null ? n + " " + t + "." : t + ".";
        },
        getNotKeywordErrorMessage: function (t, n, r, a) {
          if ((a === void 0 && (a = !1), t !== null)) {
            if (a) {
              var e =
                "Property '" + t + "' cannot be specified at on-click-action";
              return n !== null ? e + " '" + n + "'." : e + ".";
            }
            return n !== null
              ? r != null
                ? "Properties '" +
                  n +
                  "' and [" +
                  t +
                  "] must be present exclusively at " +
                  r +
                  "."
                : "Properties '" +
                  n +
                  "' and [" +
                  t +
                  "] must be present exclusively."
              : "Properties [" +
                  t +
                  "] must be present exclusively at " +
                  r +
                  ".";
          }
          return n === o("WAFlowJSONConstants").WA_FLOW_JSON_PROPERTY_SUCCESS
            ? "Property '" + n + "' can only be specified on a terminal screen."
            : "The NOT keyword schema validation failed. Please refer to the Flow JSON schema.";
        },
        getMissingFormParentPropertyErrorMessage: function (t) {
          return (
            "Property '" +
            t +
            "' must be defined inside parent property 'Form'."
          );
        },
        getRichTextPlacementErrorMsg: function () {
          return "RichText cannot be used with other components on the same screen. Please either remove RichText or ensure that it is the only component on the screen.";
        },
        getRichTextInvalidItemDynamicDataErrorMsg: function (t, n, r) {
          return (
            "Every item of the array in the 'text' property of " +
            t +
            " on the screen '" +
            n +
            "' should be a static string. Please remove dynamic binding - " +
            r +
            " from the item of the array."
          );
        },
        getMissingScreenIdsErrorMsg: function (t) {
          return (
            "Following screens are missing in the routing model: [" +
            t.join(", ") +
            "]."
          );
        },
        getComponentPlacementErrorMsg: function (t, n, r) {
          (n === void 0 &&
            (n = o(
              "WAFlowJSONComponentPlacementValidatorV600",
            ).WA_FLOW_JSON_DEFAULT_MAX_LONE_COMPONENT_COUNT),
            r === void 0 && (r = []));
          var e = n === 1 ? "one" : "up to " + n,
            a = r.length > 0 ? " " + r.join(", ") : "";
          return r.length > 0 && n === 1
            ? t +
                " can either be the only component on the screen or it can be paired exclusively with the " +
                a +
                " component. Please remove all components other than " +
                a +
                " from the same screen to use " +
                t +
                "."
            : "Only " +
                e +
                " " +
                t +
                " component" +
                (n > 1 ? "s" : "") +
                " can be used per screen. Please remove other components.";
        },
        getMultipleExternalDataSourceUsageErrorMsg: function (t) {
          return (
            "Expected external source to be same for all screens. Value can be one of: " +
            t +
            "."
          );
        },
        getInvalidScreensInRoutingModelErrorMsg: function (t) {
          return (
            "Invalid screens found in the routing model: [" +
            t.join(", ") +
            "]."
          );
        },
        getLoopsInRoutingModelErrorMsg: function (t) {
          return (
            "Loop detected in the routing model for screens: [" +
            t.join(", ") +
            "]."
          );
        },
        getMaxBranchLimitInRoutingModelErrorMsg: function (t, n) {
          return (
            "Number of branches exceeds the max limit of " +
            n +
            " for screens: [" +
            t.join(", ") +
            "]."
          );
        },
        getBackRouteInRoutingModelErrorMsg: function (t, n) {
          return (
            "Backward route [" +
            n +
            "->" +
            t +
            "] corresponding to forward route [" +
            t +
            "->" +
            n +
            "] is not allowed in the routing model. Only forward routes can be specified."
          );
        },
        getNoEntryScreenInRoutingModelErrorMsg: function () {
          return "No entry screen found in the routing model. Expected a screen with no inbound edges as the entry screen.";
        },
        getDataChannelLessNoEntryScreenInRoutingModelErrorMsg: function () {
          return "No entry screen found in the routing model. Add a screen that is not used as the next screen in any of the navigate actions.";
        },
        getDisconnectedScreensInRoutingModelErrorMsg: function (t) {
          return (
            "Following screens are not connected with the rest of the screens: [" +
            t.join(", ") +
            "]. All screens should be connected."
          );
        },
        getDCLessDisconnectedScreensInRoutingModelErrorMsg: function (t) {
          return (
            "Following screens are not connected with the rest of the screens via navigate screen action: [" +
            t.join(", ") +
            "]. All screens should be connected."
          );
        },
        getDataChannelLessMaxBranchLimitInRoutingModelErrorMsg: function (
          t,
          n,
        ) {
          return (
            "Number of branches exceeds the max limit of " +
            n +
            " for screens: [" +
            t.join(",") +
            "]. Reduce navigate actions for the screen."
          );
        },
        getRouteMissingInRoutingModelErrorMsg: function (t, n) {
          return (
            "Missing direct route from screen '" +
            t +
            "' to screen '" +
            n +
            "' in the routing model, while it exists in the navigate screen action of screen '" +
            t +
            "'."
          );
        },
        getMissingCartLayoutErrorMsg: function () {
          return "Screen with 'CartLayout' must be defined when 'ItemListLayout' screen exists. Please add a screen with the required layout type: 'CartLayout'.";
        },
        getInvalidExampleInDataModelErrorMsg: function (t) {
          return (
            "Property '__example__' is allowed only as a top level property of data model. Invalid entry: '" +
            t +
            "'."
          );
        },
        getMissingTypeInDataModelErrorMsg: function () {
          return "Missing the definition of property 'type'.";
        },
        getExpectStringTypeInDataModelErrorMsg: function () {
          return "Expected the property 'type' to be of type string.";
        },
        getMissingItemsSchemaInDataModelErrorMsg: function () {
          return "Missing the schema for property 'items' in array.";
        },
        getExpectedItemsTypeInDataModelErrorMsg: function () {
          return "Expected the property 'items' to be of type boolean or object.";
        },
        getInvalidExampleSchemaInDataModelErrorMsg: function (t) {
          return "Invalid data model schema. " + t;
        },
        getPropertyInArrayInScreenDataErrorMsg: function (t, n, r, o, a) {
          return (
            t +
            " on screen '" +
            n +
            "' for " +
            r +
            " property '" +
            o +
            "' is invalid as '" +
            a +
            "' is defined in an array schema in the data model."
          );
        },
        getDynamicBindingSchemaMissingInScreenDataErrorMsg: function (t, n) {
          return (
            o("WAFlowJSONValidationResultUtil").getBindingType(t) +
            " '" +
            t +
            "' is invalid as its schema is missing in the data model of screen '" +
            n +
            "'."
          );
        },
        getPropertySchemaNotMatchInScreenDataErrorMsg: function (t, n) {
          return (
            "Expected '" +
            t +
            "' to be of type '" +
            Array.from(n).join(", ") +
            "'."
          );
        },
        getPropSchemaConstMismatchErrorMsg: function (t, n) {
          return (
            "Expected '" +
            t +
            "' to be a const with value '" +
            n +
            "' (e.g., '{const: " +
            n +
            "})'"
          );
        },
        getRequiredPropertyMissingInScreenDataErrorMsg: function (t, n) {
          return (
            "Data model schema is invalid for '" +
            t +
            "'. Missing schema for " +
            n +
            "."
          );
        },
        getMissingFormComponentErrorMsg: function (t, n) {
          return "Missing Form component " + t + " for screen '" + n + "'.";
        },
        getMissingDynamicDataErrorMsg: function (t, n) {
          return n != null
            ? "Missing dynamic data '" +
                t +
                "' in the data model for screen " +
                n +
                "."
            : "Missing dynamic data '" + t + "' in the screen data model.";
        },
        getInvalidDynamicDataFormat: function (t) {
          return (
            "Invalid format of dynamic data '" +
            t +
            '\' in the screen data model. Please avoid "-", " ", "`" or "\'".'
          );
        },
        getMissingGlobalDynamicDataErrorMsg: function (t, n, r) {
          return (
            "Global dynamic data '" +
            t +
            "' does not exist on screen '" +
            n +
            "' but is used on screen '" +
            r +
            "'."
          );
        },
        getCompleteActionOnlyOnTerminalScreenErrorMsg: function () {
          return "On-click-action 'complete' can only be configured on a terminal screen.";
        },
        getNoDataModelInNextScreenErrorMsg: function (t) {
          return "No data model is defined in the next screen '" + t + "'.";
        },
        getNoDataModelInGivenScreenErrorMsg: function (t) {
          return "No data model is defined in the screen '" + t + "'.";
        },
        getMissingFieldsInNextScreenErrorMsg: function (t) {
          return (
            "Following fields are missing in the next screen's data model: [" +
            t.join(", ") +
            "]."
          );
        },
        getMissingFieldsInGivenScreenErrorMsg: function (t, n) {
          return (
            "Following fields are missing in the screen '" +
            t +
            "' data model: [" +
            n.join(", ") +
            "]."
          );
        },
        getMissingFieldsInNavigateActionPayloadErrorMsg: function (t) {
          return (
            "Following fields are expected in the next screen's data model but missing in payload: [" +
            t.join(", ") +
            "]."
          );
        },
        getMissingPayloadInNavigateActionErrorMsg: function () {
          return "Property 'payload' is required when the next screen's data model is not empty.";
        },
        getMaxComponentPerScreenErrorMsg: function (t, n, r) {
          return (
            "Maximum number of " +
            t +
            " allowed per screen is " +
            n +
            " but found " +
            r +
            "."
          );
        },
        getMaxComponentPerFlowErrorMsg: function (t, n, r) {
          return (
            "Maximum number of " +
            t +
            " allowed per Flow is " +
            n +
            " but found " +
            r +
            "."
          );
        },
        getMaxScreensPerFlowErrorMsg: function (t, n) {
          return (
            "Maximum number of screens allowed per Flow is " +
            t +
            " but found " +
            n +
            "."
          );
        },
        getPayloadFieldNotMatchSchemaInNextScreenErrorMsg: function (
          t,
          n,
          r,
          o,
          a,
        ) {
          return (
            "Schema of payload data at '" +
            t +
            "' on screen '" +
            n +
            "' is not matching with schema of data model field on screen '" +
            o +
            "'. Property is expecting '" +
            a +
            "' but got " +
            r +
            "."
          );
        },
        getUnknownScreenErrorMsg: function (t) {
          return "Unknown screen ids found: [" + t.join(", ") + "].";
        },
        getSameScreenNavigationErrorMsg: function (t) {
          return (
            "Same screen navigation is not allowed. Loop detected at [" +
            t.join(", ") +
            "]."
          );
        },
        getScreenIDIsReservedKeywordErrorMsg: function (t) {
          return (
            "Screen id cannot be '" + t + "' since it is a reserved keyword."
          );
        },
        getDuplicateScreenIDErrorMsg: function (t) {
          return "Duplicate screen id found: '" + t + "'.";
        },
        getMissingTerminalScreenErrorMsg: function () {
          return "Terminal screen is required but not provided.";
        },
        getPayloadFieldSchemaNotMatchInNextScreenErrorMsg: function (
          t,
          n,
          r,
          o,
          a,
        ) {
          return (
            "Schema of dynamic data '" +
            n +
            "' is not matching schema of data model field '" +
            t +
            "' on screen '" +
            o +
            "'. Property is expecting '" +
            a +
            "' but got '" +
            r +
            "'."
          );
        },
        getMissingPropertiesErrorMsg: function (t, n, r, o) {
          return (
            "Unable to validate the schema of dynamic data '" +
            t +
            "' against the schema of data model field '" +
            r +
            "' on screen '" +
            n +
            "'. Missing property '" +
            o +
            "'."
          );
        },
        getPropertiesIsNotObjectErrorMsg: function (t) {
          return "Invalid value found for the property '" + t + "'.";
        },
        getPropertiesNotMatchErrorMsg: function (t) {
          return (
            "Properties in navigate action payload differ from properties in data model of screen '" +
            t +
            "'."
          );
        },
        getFooterMissingOnTerminalScreenErrorMsg: function (t) {
          return t.length > 1
            ? "Footer component is missing on terminal screens: [" +
                t.join(", ") +
                "]."
            : "Footer component is missing on terminal screen '" + t[0] + "'.";
        },
        getDuplicateFormComponentNamesErrorMsg: function (t) {
          return "Duplicate name found for Form components: '" + t + "'.";
        },
        getRefreshOnBackForStaticFlowErrorMsg: function () {
          return (
            "Property '" +
            o("WAFlowJSONConstants").WA_FLOW_JSON_REFRESH_ON_BACK +
            "' can be true only when property '" +
            o("WAFlowJSONConstants").WA_FLOW_JSON_DATA_API_VERSION +
            "' is set."
          );
        },
        getMisingDataApiVersionForDataChannelErrorMsg: function () {
          return (
            "The property '" +
            o("WAFlowJSONConstants").WA_FLOW_JSON_DATA_API_VERSION +
            "' is required for data_exchange action."
          );
        },
        getMisingRoutingModelForDataChannelErrorMsg: function () {
          return (
            "The property '" +
            o("WAFlowJSONConstants").WA_FLOW_JSON_ROUTING_MODEL +
            "' is required for property '" +
            o("WAFlowJSONConstants").WA_FLOW_JSON_DATA_API_VERSION +
            "'."
          );
        },
        getInvalidFooterOutsideFormErrorMsg: function () {
          return "Footer placed outside Form component is not allowed to reference form data.";
        },
        getMinIsGreaterThanMaxPropertyErrorMsg: function (t, n, r, o) {
          return (
            "'" +
            t +
            "' cannot be greater than '" +
            n +
            "' for " +
            r +
            " '" +
            o +
            "'."
          );
        },
        getDataSourceCannotContainBothImageAndColor: function (t, n) {
          return (
            "Data source can only have either only image attributes or only color attributes for all items for " +
            n +
            " '" +
            t +
            "'."
          );
        },
        getSuccessOnTerminalScreenErrorMsg: function () {
          return "At least one terminal screen must have property 'success' set as true.";
        },
        getComponentsOutsideFormErrorMsg: function (t) {
          return t.length === 1
            ? "Component '" +
                t.join("', '") +
                "' is not allowed outside Form when Form component is present."
            : "Components '" +
                t.join("', '") +
                "' are not allowed outside Form when Form component is present.";
        },
        getMoreThanMaxFooterErrorMsg: function () {
          return (
            "Maximum number of Footer component allowed per screen is " +
            o("WAFlowJSONConstants").SCREEN_COMPONENT_MAX_COUNT.Footer +
            "."
          );
        },
        getMissingFooterInsideIfErrorMsg: function () {
          return "Footer component must be present in all branches of 'If' component if it exists in any one branch.";
        },
        getMissingFooterInIfElseErrorMsg: function () {
          return "Missing Footer inside one of the 'If' component branches. Branch 'else' should exist and contain one Footer.";
        },
        getMissingFooterInSwitchBranchErrorMsg: function () {
          return "Footer component must be present in all switch cases if it exists in one of the cases.";
        },
        getInvalidOperandFormatErrorMsg: function (t) {
          return "Invalid operand format '" + t + "'";
        },
        getInvalidOperatorFormatErrorMsg: function (t) {
          return "Invalid operator '" + t + "'";
        },
        getMissingOperatorBetweenOperandsErrorMsg: function (t, n) {
          return "Missing operator between '" + t + "' and '" + n + "'";
        },
        getUnsupportedOperandTypeErrorMsg: function (t, n) {
          return "Operand '" + t + "' with type '" + n + "' is not supported.";
        },
        getUnexpectedCharacterErrorMsg: function (t) {
          return "Unexpected character '" + t + "'";
        },
        getWrongPositioningOfOperatorErrorMsg: function (t) {
          return "Wrong positioning of operator '" + t + "'";
        },
        getWrongConcatenationOfOperatorErrorMsg: function (t, n) {
          return (
            "Wrong positioning of operator '" +
            n +
            "'. It cannot be used in concatenation with '" +
            t +
            "'"
          );
        },
        getWrongPositioningGenericErrorMsg: function (t, n, r) {
          return (
            "Wrong positioning of " +
            t +
            " '" +
            r +
            "'. It cannot be used after '" +
            n +
            "'"
          );
        },
        getConditionTypeMismatchInEqualtyErrorMsg: function (t, n) {
          return (
            "Type mismatch in an equality operation between '" +
            t +
            "' and '" +
            n +
            "'"
          );
        },
        getComponentNotAllowedInNavigatePayloadErrorMsg: function (t) {
          return (
            "The value of " +
            t +
            " component is not allowed in the payload of navigate action."
          );
        },
        getComponentOnlyAllowedInTopLevelErrorMsg: function (t) {
          return (
            "The value of following components must be a top-level string in complete and data_exchange on-click-action payload: [" +
            t.join(", ") +
            "]."
          );
        },
        getCompleteActionPayloadMoreThanOneNativeCompErrorMsg: function () {
          return "Complete action payload can contain either a single PhotoPicker or a single DocumentPicker component.";
        },
        getCompleteActionPayloadMaxUploadFileErrorMsg: function (t, n) {
          return (
            "The aggregated maximum uploaded files of the PhotoPicker and DocumentPicker components cannot exceed " +
            t +
            " when using in the complete action payload. If 'max-uploaded-photos' or 'max-uploaded-documents' property is not set, the default uploaded files count is " +
            n +
            "."
          );
        },
        getCompleteActionPayloadMaxUploadSizeErrorMsg: function (t, n) {
          return (
            "The aggregated size of maximum uploaded files of the PhotoPicker and DocumentPicker components cannot exceed " +
            t +
            " KB when using in the complete action payload. If 'max-file-size-kb' property is not set, the default file size is " +
            n +
            " KB."
          );
        },
        getGlobalDynamicDataCanNotReferCurrentScreenErrorMsg: function (
          t,
          n,
          r,
          o,
        ) {
          return (
            "Global dynamic data '" +
            t +
            "' used on screen '" +
            n +
            "' for " +
            r +
            " property '" +
            o +
            "' is invalid since screen '" +
            n +
            "' represents current screen. Convert expression to local referencing of the form ${data.<property>}."
          );
        },
        getReferencedScreenMissingErrorMsg: function (t, n, r, o, a) {
          return (
            "Global dynamic data '" +
            t +
            "' used on screen '" +
            n +
            "' for " +
            r +
            " property '" +
            o +
            "' is invalid since screen '" +
            a +
            "' is missing in the Flow JSON."
          );
        },
        getReferenceDoesNotExistErrorMsg: function (t, n, r) {
          return (
            o("WAFlowJSONValidationResultUtil").getBindingType(t) +
            " '" +
            t +
            "' from screen '" +
            r +
            "' does not exist, but is used on screen '" +
            n +
            "'."
          );
        },
        getPropertySchemaNotMatchComponentValueSchemaErrorMsg: function (t, n) {
          return (
            "Found invalid " +
            _(t) +
            ". Expected '" +
            t.expression +
            "' to be of type '" +
            Array.from(n).join(", ") +
            "'."
          );
        },
        getInvalidLiteralErrorMsg: function (t) {
          return "Invalid literal '" + t + "'";
        },
        getMissingOperandAfterLastOperatorErrorMsg: function (t) {
          return "Missing operand after last operator '" + t + "'.";
        },
        getNativeComponentInFormInitValuesErrorMsg: function (t) {
          return (
            "Property 'init-values'  should not contain value for components: [" +
            t.join(", ") +
            "]."
          );
        },
        getPropertySchemaNotMatchAnyScreenDataErrorMsg: function (t, n) {
          return (
            "Expected '" +
            t +
            "' to be of one of these types: [" +
            n.join(", ") +
            "]."
          );
        },
        getInvalidShoppingRoutingModelPathErrorMsg: function (t, n) {
          return (
            "Routing Model is invalid as a route between '" +
            t +
            "' and '" +
            n +
            "' layout is not allowed."
          );
        },
        getInvalidImageSourceErrorMsg: function () {
          return "Image source is not in a valid base64 format.";
        },
        getInvalidComponentTypeForFormBindingErrorMsg: function (t) {
          return (
            "Value of '" + t + "' component cannot be used in form binding."
          );
        },
        getBindingScreenDoesNotExistErrorMsg: function (t, n) {
          return (
            "The screen id '" +
            t +
            "' referenced in the dynamic binding expression '" +
            n +
            "' does not exist."
          );
        },
        getPayloadFieldIsMissingInNextScreenErrorMsg: function (t, n, r) {
          return (
            "The payload field '" +
            t +
            "' on screen '" +
            n +
            "' is missing in the data model of screen '" +
            r +
            "'."
          );
        },
        getDataModelFieldsAreMissingInPayloadErrorMsg: function (t, n, r) {
          return t.length > 1
            ? "Fields '[" +
                t.join(", ") +
                "]' are missing in payload of screen '" +
                n +
                "', but expected in data model of screen '" +
                r +
                "'."
            : "Field '" +
                t[0] +
                "' is missing in payload of screen '" +
                n +
                "', but expected in data model of screen '" +
                r +
                "'.";
        },
        getOnlyOneNativeComponentPerScreenErrorMsg: function () {
          return "You can only have a maximum of 1 component of type PhotoPicker or DocumentPicker per screen.";
        },
        getEmptySwitchCasesErrorMsg: function () {
          return "The 'cases' property of a Switch component cannot be empty.";
        },
        getInvalidDateFormatErrorMsg: function (t) {
          return 'The date field must be in the format "' + t + '".';
        },
        getInvalidErrorMessageFormatError: function (t) {
          return "The error message field must be in the format '" + t + "'.";
        },
        getInvalidRangeErrorMessageErrorMsg: function (t) {
          return (
            "The range error message field can only contain the character '" +
            t +
            "' once."
          );
        },
        getDateNotInRangeErrorMsg: function (t, n, r, o) {
          return (
            "The value of property '" +
            n +
            "' of component '" +
            t +
            "' must be in the range of [" +
            r +
            ", " +
            o +
            "]."
          );
        },
        getMaximumNestingLevelForIfComponent: function () {
          return "The 'If' component can only be nested up to 3 levels deep.";
        },
        getInvalidSensitiveFieldErrorMsg: function (t, n) {
          return (
            "No component corresponding to the sensitive field" +
            (n.length > 1 ? "s" : "") +
            " '" +
            n.join("', '") +
            "' can be found in screen '" +
            t +
            "'."
          );
        },
        getInvalidTypeErrorMsg: function (t, n, r) {
          return (
            "The value of property '" +
            n +
            "' of component '" +
            t +
            "' must be of type '" +
            r +
            "'."
          );
        },
        getCalendarPickerRangeFormatErrorMsg: function (t, n) {
          return (
            "The value of property '" +
            n +
            "' of component '" +
            t +
            "' must be of type '{\"start-date\": <value>, \"end-date\": <value>}' when the 'mode' is set to 'range'."
          );
        },
        getCalendarPickerMissingRangePropErrorMsg: function (t, n) {
          return (
            "The property '" +
            n +
            "' of component '" +
            t +
            "' must be present when the mode is set to 'range'."
          );
        },
        getCalendarPickerUnexpectedRangePropErrorMsg: function (t, n) {
          return (
            "The property '" +
            n +
            "' of component '" +
            t +
            "' only expects properties 'start-date' and 'end-date' when the mode is set to 'range'."
          );
        },
        getInvalidPropertyNameForConditionErrorMsg: function (t, n, r) {
          return (
            "Cannot set property '" +
            r +
            "' when " +
            n +
            " for component '" +
            t +
            "'."
          );
        },
        getInvalidPropertyValueForConditionErrorMsg: function (t, n, r, o) {
          return (
            "Cannot set property '" +
            r +
            "' to '" +
            o +
            "' when " +
            n +
            " for component '" +
            t +
            "'."
          );
        },
        getDuplicatePropertyForConditionErrorMsg: function (t, n, r) {
          return "For the '" + t + "' component, '" + n + "' " + r;
        },
        getFlowJsonExceedMaxSizeErrorMsg: function (t, n) {
          return (
            "The maximum size of the Flow JSON is " +
            n +
            " MB. But your Flow JSON size exceeds the maximum size by " +
            (t - n * o("WAFlowJSONConstants").BYTES_IN_A_MEGABYTE) +
            " bytes."
          );
        },
      });
    function c(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").WA_FLOW_JSON_SCREEN_ID_PATTERN:
        case o("WAFlowJSONConstants").WA_FLOW_JSON_SCREEN_ID_PATTERN_V700:
          return "should only consist of alphabets and underscores.";
        case o("WAFlowJSONSchemaUtils")
          .WA_FLOW_JSON_SCHEMA_DYNAMIC_DATA_PATTERN:
          return t != null
            ? "should be of type '" +
                t.toLowerCase() +
                "' or have dynamic data format of the form ${data.your_value}."
            : "should have dynamic data format of the form ${data.your_value}.";
        case o("WAFlowJSONSchemaUtils")
          .WA_FLOW_JSON_SCHEMA_DYNAMIC_DATA_PATTERN_V400:
        case o("WAFlowJSONSchemaUtils")
          .WA_FLOW_JSON_SCHEMA_DYNAMIC_DATA_PATTERN_V600:
          return t != null
            ? "should be of type '" +
                t.toLowerCase() +
                "' or have dynamic data format of the form ${screen.data.your_value} or ${data.your_value}."
            : "should have dynamic data format of the form ${screen.data.your_value} or ${data.your_value}.";
        case o("WAFlowJSONSchemaUtils")
          .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN:
          return "should not be blank or an empty string.";
        case o("WAFlowJSONSchemaUtils")
          .WA_FLOW_JSON_SCHEMA_NEGATED_DYNAMIC_DATA_PATTERN_V400:
          return "should not be dynamic data format of the form ${screen.data.your_value} or ${data.your_value}.";
        case o("WAFlowJSONSchemaUtils")
          .WA_FLOW_JSON_NEGATED_NESTED_EXPRESSION_PATTERN:
          return "should not be enclosed in backticks.";
        default:
          return "should match the pattern '" + e + "'.";
      }
    }
    function d(e) {
      var t,
        n =
          (t = e.get("/" + o("WAFlowJSONConstants").WA_FLOW_JSON_VERSION)) ==
          null
            ? void 0
            : t.value;
      return o("WAFlowJSONValidationResultUtil").getWAFlowJSONResult({
        code: s.INVALID_FLOW_JSON_VERSION,
        message: u.INVALID_FLOW_JSON_VERSION,
        pointers:
          n != null
            ? n
            : o("WAFlowJSONValidationResultUtil").getWAFlowJSONErrorPointer(
                0,
                0,
                0,
                0,
                o("WAFlowJSONConstants").WA_FLOW_JSON_VERSION,
              ),
      });
    }
    function m(e) {
      var t,
        n = (t = e.get("")) == null ? void 0 : t.value;
      return o("WAFlowJSONValidationResultUtil").getWAFlowJSONResult({
        code: s.MISSING_FLOW_JSON_VERSION,
        message: u.MISSING_FLOW_JSON_VERSION,
        pointers:
          n != null
            ? n
            : o(
                "WAFlowJSONValidationResultUtil",
              ).getWAFlowJSONDefaultErrorPointer(),
      });
    }
    function p(e, t) {
      return o("WAFlowJSONValidationResultUtil").getWAFlowJSONResult({
        code: s.INVALID_FLOW_JSON,
        message: "" + u.INVALID_FLOW_JSON + (e != null ? " " + e : ""),
        pointers:
          t != null
            ? t
            : o(
                "WAFlowJSONValidationResultUtil",
              ).getWAFlowJSONDefaultErrorPointer(),
      });
    }
    function _(e) {
      var t =
        o("WAFlowJSONConstants").WAFlowsDataStoreType.cast(e.store) ===
        o("WAFlowJSONConstants").WAFlowsDataStoreType.DATA
          ? "dynamic data"
          : "form data";
      return o("WAFlowJSONValidationResultUtil").isGlobalDynamicBinding(
        e.expression,
      )
        ? "global " + t
        : t;
    }
    ((l.WA_FLOW_JSON_VALIDATION_ERROR_CODE = s),
      (l.WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE = u),
      (l.invalidFlowJSONVersionError = d),
      (l.missingFlowJSONVersionError = m),
      (l.invalidFlowJSONError = p));
  },
  98,
);
