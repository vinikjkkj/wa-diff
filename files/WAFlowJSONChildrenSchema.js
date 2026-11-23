__d(
  "WAFlowJSONChildrenSchema",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONCalendarPickerSchema",
    "WAFlowJSONCheckboxGroupComponentSchemaV500",
    "WAFlowJSONCheckboxGroupComponentSchemaV600",
    "WAFlowJSONChipsSelectorSchema",
    "WAFlowJSONChipsSelectorSchemaV701",
    "WAFlowJSONConstants",
    "WAFlowJSONDatePickerSchemaV500",
    "WAFlowJSONDatePickerSchemaV600",
    "WAFlowJSONDocumentPickerComponentSchemaV500",
    "WAFlowJSONDocumentPickerComponentSchemaV600",
    "WAFlowJSONDropdownComponentSchemaV500",
    "WAFlowJSONDropdownComponentSchemaV600",
    "WAFlowJSONEmbeddedLinkComponentSchemaV500",
    "WAFlowJSONFooterComponentSchemaV500",
    "WAFlowJSONFormComponentSchema",
    "WAFlowJSONIfComponentSchema",
    "WAFlowJSONImageCarouselComponentSchemaV701",
    "WAFlowJSONImageComponentSchemaV500",
    "WAFlowJSONNavigationListComponentSchemaV602",
    "WAFlowJSONNavigationListProperties",
    "WAFlowJSONOptInComponentSchemaV500",
    "WAFlowJSONOptInComponentSchemaV600",
    "WAFlowJSONPhotoPickerComponentSchemaV500",
    "WAFlowJSONPhotoPickerComponentSchemaV600",
    "WAFlowJSONRadioButtonsGroupComponentSchemaV500",
    "WAFlowJSONRadioButtonsGroupComponentSchemaV600",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONSeatSelectorComponentSchemaV704",
    "WAFlowJSONSwitchComponentSchema",
    "WAFlowJSONTextAreaComponentSchemaV500",
    "WAFlowJSONTextAreaComponentSchemaV600",
    "WAFlowJSONTextAreaComponentSchemaV700",
    "WAFlowJSONTextComponentSchema",
    "WAFlowJSONTextInputComponentSchemaV500",
    "WAFlowJSONTextInputComponentSchemaV600",
    "WAFlowJSONTextInputComponentSchemaV602",
    "WAFlowJSONTextInputComponentSchemaV700",
    "WAFlowJSONValidationError",
    "WAFlowsRichTextSchema",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case 100:
        case 101:
        case 110:
        case 120:
        case 202:
        case 299:
        case 302:
        case 200:
        case 201:
        case 300:
        case 301:
        case 400:
        case 401:
        case 500:
          throw o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNSUPPORTED_FLOW_JSON_VERSION.concat(
            ": " + String(e),
          );
        case 501:
        case 502:
        case 600:
          return babelHelpers.extends({}, s(c()));
        case 601:
          return babelHelpers.extends({}, s(d()));
        case 602:
          return babelHelpers.extends({}, s(m()));
        case 603:
        case 700:
          return babelHelpers.extends({}, s(p()));
        case 701:
        case 702:
        case 703:
          return babelHelpers.extends({}, s(_()));
        case 704:
          return babelHelpers.extends({}, s(f()));
      }
    }
    function s(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
        items: { oneOf: e },
      };
    }
    function u() {
      var e, t;
      return [
        (e = o("WAFlowJSONSchemaUtils")).createJSONSchemaComponentRef(
          (t = o("WAFlowJSONConstants")).ComponentRefKey.EMBEDDED_LINK,
        ),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.FOOTER),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_BODY),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_CAPTION),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_HEADING),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_SUBHEADING),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.IMAGE),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_INPUT_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_AREA_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.CBG_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.RBG_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DROPDOWN_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DATE_PICKER_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.IF_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.SWITCH_NO_FORM),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.PHOTO_PICKER_NO_FORM),
        e.createJSONSchemaComponentRef(
          t.ComponentRefKey.DOCUMENT_PICKER_NO_FORM,
        ),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.OPTIN_NO_FORM),
      ];
    }
    function c() {
      return [].concat(u(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.RICH_TEXT,
        ),
      ]);
    }
    function d() {
      return [].concat(c(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.CALENDAR_PICKER_NO_FORM,
        ),
      ]);
    }
    function m() {
      return [].concat(d(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST,
        ),
      ]);
    }
    function p() {
      return [].concat(m(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR_NO_FORM,
        ),
      ]);
    }
    function _() {
      return [].concat(p(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.IMAGE_CAROUSEL,
        ),
      ]);
    }
    function f() {
      return [].concat(_(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.SEAT_SELECTOR_NO_FORM,
        ),
      ]);
    }
    function g(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.CBG:
          return o(
            "WAFlowJSONCheckboxGroupComponentSchemaV500",
          ).getCheckboxGroupComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.CBG_NO_FORM:
          return o(
            "WAFlowJSONCheckboxGroupComponentSchemaV500",
          ).getCheckboxGroupComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.RBG:
          return o(
            "WAFlowJSONRadioButtonsGroupComponentSchemaV500",
          ).getRadioButtonsGroupComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.RBG_NO_FORM:
          return o(
            "WAFlowJSONRadioButtonsGroupComponentSchemaV500",
          ).getRadioButtonsGroupComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.SWITCH:
          return o(
            "WAFlowJSONSwitchComponentSchema",
          ).getSwitchComponentSchemaByVersion(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.SWITCH_NO_FORM:
          return o(
            "WAFlowJSONSwitchComponentSchema",
          ).getSwitchComponentSchemaByVersion(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.DATE_PICKER:
          return o(
            "WAFlowJSONDatePickerSchemaV500",
          ).getDatePickerComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.DATE_PICKER_NO_FORM:
          return o(
            "WAFlowJSONDatePickerSchemaV500",
          ).getDatePickerComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.OPTIN:
          return o(
            "WAFlowJSONOptInComponentSchemaV500",
          ).getOptInComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.OPTIN_NO_FORM:
          return o(
            "WAFlowJSONOptInComponentSchemaV500",
          ).getOptInComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA:
          return o(
            "WAFlowJSONTextAreaComponentSchemaV500",
          ).getTextAreaComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA_NO_FORM:
          return o(
            "WAFlowJSONTextAreaComponentSchemaV500",
          ).getTextAreaComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT:
          return o(
            "WAFlowJSONTextInputComponentSchemaV500",
          ).getTextInputComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT_NO_FORM:
          return o(
            "WAFlowJSONTextInputComponentSchemaV500",
          ).getTextInputComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.PHOTO_PICKER:
          return o(
            "WAFlowJSONPhotoPickerComponentSchemaV500",
          ).getPhotoPickerComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.PHOTO_PICKER_NO_FORM:
          return o(
            "WAFlowJSONPhotoPickerComponentSchemaV500",
          ).getPhotoPickerComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.DOCUMENT_PICKER:
          return o(
            "WAFlowJSONDocumentPickerComponentSchemaV500",
          ).getDocumentPickerComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.DOCUMENT_PICKER_NO_FORM:
          return o(
            "WAFlowJSONDocumentPickerComponentSchemaV500",
          ).getDocumentPickerComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.EMBEDDED_LINK:
          return o(
            "WAFlowJSONEmbeddedLinkComponentSchemaV500",
          ).getEmbeddedLinkComponentSchemaV500(t);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_BODY:
          return o(
            "WAFlowJSONTextComponentSchema",
          ).getTextBodyComponentSchemaByVersion(t);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_CAPTION:
          return o(
            "WAFlowJSONTextComponentSchema",
          ).getTextCaptionComponentSchemaByVersion(t);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_HEADING:
          return o(
            "WAFlowJSONTextComponentSchema",
          ).getTextHeadingComponentSchemaV500(t);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_SUBHEADING:
          return o(
            "WAFlowJSONTextComponentSchema",
          ).getTextSubheadingComponentSchemaV500(t);
        case o("WAFlowJSONConstants").ComponentRefKey.DROPDOWN:
          return o(
            "WAFlowJSONDropdownComponentSchemaV500",
          ).getDropdownComponentSchemaV500(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.DROPDOWN_NO_FORM:
          return o(
            "WAFlowJSONDropdownComponentSchemaV500",
          ).getDropdownComponentSchemaV500(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.IMAGE:
          return o(
            "WAFlowJSONImageComponentSchemaV500",
          ).getImageComponentSchemaV500(t);
        case o("WAFlowJSONConstants").ComponentRefKey.FOOTER:
          return o(
            "WAFlowJSONFooterComponentSchemaV500",
          ).getFooterComponentSchemaV500(t);
        case o("WAFlowJSONConstants").ComponentRefKey.FORM:
          return o("WAFlowJSONFormComponentSchema").getFormComponentSchemaV500(
            t,
          );
        case o("WAFlowJSONConstants").ComponentRefKey.IF:
          return o("WAFlowJSONIfComponentSchema").getIfComponentSchemaByVersion(
            t,
            0,
            !0,
          );
        case o("WAFlowJSONConstants").ComponentRefKey.IF_NO_FORM:
          return o("WAFlowJSONIfComponentSchema").getIfComponentSchemaByVersion(
            t,
            0,
            !1,
          );
        default:
          return null;
      }
    }
    function h(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.RICH_TEXT:
          return o("WAFlowsRichTextSchema").getRichTextSchemaByVersion(t);
        default:
          return g(e, t);
      }
    }
    function y(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.FORM:
          return o("WAFlowJSONFormComponentSchema").getFormComponentSchemaV600(
            t,
          );
        case o("WAFlowJSONConstants").ComponentRefKey.CBG:
          return o(
            "WAFlowJSONCheckboxGroupComponentSchemaV600",
          ).getCheckboxGroupComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.CBG_NO_FORM:
          return o(
            "WAFlowJSONCheckboxGroupComponentSchemaV600",
          ).getCheckboxGroupComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.RBG:
          return o(
            "WAFlowJSONRadioButtonsGroupComponentSchemaV600",
          ).getRadioButtonsGroupComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.RBG_NO_FORM:
          return o(
            "WAFlowJSONRadioButtonsGroupComponentSchemaV600",
          ).getRadioButtonsGroupComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.OPTIN:
          return o(
            "WAFlowJSONOptInComponentSchemaV600",
          ).getOptInComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.OPTIN_NO_FORM:
          return o(
            "WAFlowJSONOptInComponentSchemaV600",
          ).getOptInComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.DROPDOWN:
          return o(
            "WAFlowJSONDropdownComponentSchemaV600",
          ).getDropdownComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.DROPDOWN_NO_FORM:
          return o(
            "WAFlowJSONDropdownComponentSchemaV600",
          ).getDropdownComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.DATE_PICKER:
          return o(
            "WAFlowJSONDatePickerSchemaV600",
          ).getDatePickerComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.DATE_PICKER_NO_FORM:
          return o(
            "WAFlowJSONDatePickerSchemaV600",
          ).getDatePickerComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.DOCUMENT_PICKER:
          return o(
            "WAFlowJSONDocumentPickerComponentSchemaV600",
          ).getDocumentPickerComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.DOCUMENT_PICKER_NO_FORM:
          return o(
            "WAFlowJSONDocumentPickerComponentSchemaV600",
          ).getDocumentPickerComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.PHOTO_PICKER:
          return o(
            "WAFlowJSONPhotoPickerComponentSchemaV600",
          ).getPhotoPickerComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.PHOTO_PICKER_NO_FORM:
          return o(
            "WAFlowJSONPhotoPickerComponentSchemaV600",
          ).getPhotoPickerComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA:
          return o(
            "WAFlowJSONTextAreaComponentSchemaV600",
          ).getTextAreaComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA_NO_FORM:
          return o(
            "WAFlowJSONTextAreaComponentSchemaV600",
          ).getTextAreaComponentSchemaV600(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT:
          return o(
            "WAFlowJSONTextInputComponentSchemaV600",
          ).getTextInputComponentSchemaV600(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT_NO_FORM:
          return o(
            "WAFlowJSONTextInputComponentSchemaV600",
          ).getTextInputComponentSchemaV600(t, !1);
        default:
          return h(e, t);
      }
    }
    function C(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.CALENDAR_PICKER:
          return o(
            "WAFlowJSONCalendarPickerSchema",
          ).getCalendarPickerComponentSchemaByVersion(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.CALENDAR_PICKER_NO_FORM:
          return o(
            "WAFlowJSONCalendarPickerSchema",
          ).getCalendarPickerComponentSchemaByVersion(t, !1);
        default:
          return y(e, t);
      }
    }
    function b(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST:
          return o(
            "WAFlowJSONNavigationListComponentSchemaV602",
          ).getNavigationListComponentSchemaByVersion(t);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT:
          return o(
            "WAFlowJSONTextInputComponentSchemaV602",
          ).getTextInputComponentSchemaV602(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT_NO_FORM:
          return o(
            "WAFlowJSONTextInputComponentSchemaV602",
          ).getTextInputComponentSchemaV602(t, !1);
        default:
          return C(e, t);
      }
    }
    function v(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR:
          return o(
            "WAFlowJSONChipsSelectorSchema",
          ).getChipsSelectorComponentSchemaByVersion(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR_NO_FORM:
          return o(
            "WAFlowJSONChipsSelectorSchema",
          ).getChipsSelectorComponentSchemaByVersion(t, !1);
        default:
          return b(e, t);
      }
    }
    function S(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA:
          return o(
            "WAFlowJSONTextAreaComponentSchemaV700",
          ).getTextAreaComponentSchemaV700(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_AREA_NO_FORM:
          return o(
            "WAFlowJSONTextAreaComponentSchemaV700",
          ).getTextAreaComponentSchemaV700(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT:
          return o(
            "WAFlowJSONTextInputComponentSchemaV700",
          ).getTextInputComponentSchemaV700(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.TEXT_INPUT_NO_FORM:
          return o(
            "WAFlowJSONTextInputComponentSchemaV700",
          ).getTextInputComponentSchemaV700(t, !1);
        default:
          return v(e, t);
      }
    }
    function R(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR:
          return o(
            "WAFlowJSONChipsSelectorSchemaV701",
          ).getChipsSelectorComponentSchemaV701(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR_NO_FORM:
          return o(
            "WAFlowJSONChipsSelectorSchemaV701",
          ).getChipsSelectorComponentSchemaV701(t, !1);
        case o("WAFlowJSONConstants").ComponentRefKey.IMAGE_CAROUSEL:
          return o(
            "WAFlowJSONImageCarouselComponentSchemaV701",
          ).getImageCarouselComponentSchemaV701(t);
        default:
          return S(e, t);
      }
    }
    function L(e, t) {
      switch (e) {
        case o("WAFlowJSONConstants").ComponentRefKey.SEAT_SELECTOR:
          return o(
            "WAFlowJSONSeatSelectorComponentSchemaV704",
          ).getSeatSelectorComponentSchemaV704(t, !0);
        case o("WAFlowJSONConstants").ComponentRefKey.SEAT_SELECTOR_NO_FORM:
          return o(
            "WAFlowJSONSeatSelectorComponentSchemaV704",
          ).getSeatSelectorComponentSchemaV704(t, !1);
        default:
          return R(e, t);
      }
    }
    function E(e) {
      var t =
          +e >= 600
            ? {
                type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
                pattern: o("WAFlowJSONSchemaUtils")
                  .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
              }
            : { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING },
        n =
          +e >= 401
            ? {
                oneOf: [
                  {
                    type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN,
                  },
                  {
                    type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
                    pattern: o("WAFlowJSONSchemaUtils")
                      .WA_FLOW_JSON_SCHEMA_ALL_DYNAMIC_DATA_PATTERN_V400,
                  },
                ],
              }
            : { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN };
      return { id: t, title: t, metadata: t, description: t, enabled: n };
    }
    function k(e) {
      return babelHelpers.extends({}, E(e), {
        color: {
          type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
          pattern: o("WAFlowJSONSchemaUtils").WA_FLOW_JSON_6_DIGIT_HEX_PATTERN,
        },
        image: o("WAFlowJSONSchemaUtils").getBase64StringBindingSchemaType(e),
        "alt-text": o("WAFlowJSONSchemaUtils").getTextFieldSchema(e),
      });
    }
    function I(e) {
      return babelHelpers.extends({}, k(e), {
        "on-select-action": o("WAFlowJSONActionSchema").getOnSelectActionSchema(
          [o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA],
        ),
        "on-unselect-action": o(
          "WAFlowJSONActionSchema",
        ).getOnSelectActionSchema([
          o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA,
        ]),
      });
    }
    function T() {
      return [
        o("WAFlowJSONConstants").WAFlowJSONRequiredDataSourceAttributes.ID,
        o("WAFlowJSONConstants").WAFlowJSONRequiredDataSourceAttributes.TITLE,
      ];
    }
    function D(e) {
      var t, n;
      return {
        type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          t.WA_FLOW_JSON_SCHEMA_TYPE,
          t.WA_FLOW_JSON_SCHEMA_NAME,
          t.WA_FLOW_JSON_SCHEMA_DATA_SOURCE,
          t.WA_FLOW_JSON_SCHEMA_LABEL,
        ],
        additionalProperties: !1,
        properties: {
          type: { const: "" },
          label: (n = o("WAFlowJSONSchemaUtils")).getStringBindingSchemaType(e),
          name: n.getTextFieldSchema(e),
          required: n.getBoolBindingSchemaType(e),
          enabled: n.getBoolBindingSchemaType(e),
          "data-source": n.getArrayObjectBindingSchemaType(e, T(), k(e)),
          visible: n.getBoolBindingSchemaType(e),
          "on-select-action": o(
            "WAFlowJSONActionSchema",
          ).getOnSelectActionSchema(),
        },
      };
    }
    function x(e) {
      return babelHelpers.extends({}, D(e), {
        properties: babelHelpers.extends({}, D(e).properties, {
          name: o("WAFlowJSONSchemaUtils").getComponentNameSchemaType(e),
          "data-source": o(
            "WAFlowJSONSchemaUtils",
          ).getArrayObjectBindingSchemaType(e, T(), I(e)),
          "on-select-action": o(
            "WAFlowJSONActionSchema",
          ).getOnSelectActionSchema([
            o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
            o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA,
          ]),
          "on-unselect-action": o(
            "WAFlowJSONActionSchema",
          ).getOnSelectActionSchema([
            o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA,
          ]),
        }),
      });
    }
    function $(e) {
      var t,
        n,
        r,
        a,
        i = (n = o("WAFlowJSONSchemaUtils"))
          .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN;
      return (
        (t = {
          id: {
            type: (r = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_STRING,
            pattern: i,
          },
          enabled: { type: r.WA_FLOW_JSON_SCHEMA_BOOLEAN },
        }),
        (t[
          (a = o(
            "WAFlowJSONNavigationListProperties",
          )).WAFlowJSONNavigationListPropsType.MAIN_CONTENT
        ] = n.getContentBlockSchemaType(!0)),
        (t[a.WAFlowJSONNavigationListPropsType.END_ADD_ON] =
          n.getContentBlockSchemaType(!1)),
        (t[a.WAFlowJSONNavigationListPropsType.START_ADD_ON] =
          n.getImageBlockSchemaType(e)),
        (t[a.WAFlowJSONNavigationListPropsType.BADGE] = {
          type: r.WA_FLOW_JSON_SCHEMA_STRING,
          pattern: i,
        }),
        (t[a.WAFlowJSONNavigationListPropsType.TAGS] = {
          type: r.WA_FLOW_JSON_SCHEMA_ARRAY,
          minItems: a.WAFlowJSONNavigationListConstants.MIN_ITEMS,
          maxItems: a.WAFlowJSONNavigationListConstants.MAX_TAGS,
          items: { type: r.WA_FLOW_JSON_SCHEMA_STRING },
        }),
        (t["on-click-action"] = o(
          "WAFlowJSONActionSchema",
        ).getOnClickActionSchema(
          e,
          r.WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST,
        )),
        t
      );
    }
    function P() {
      var e,
        t = {
          type: (e = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_STRING,
          pattern: o("WAFlowJSONSchemaUtils")
            .WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
        };
      return {
        id: t,
        title: t,
        enabled: {
          oneOf: [
            { type: e.WA_FLOW_JSON_SCHEMA_BOOLEAN },
            {
              type: e.WA_FLOW_JSON_SCHEMA_STRING,
              pattern: o("WAFlowJSONSchemaUtils")
                .WA_FLOW_JSON_SCHEMA_ALL_DYNAMIC_DATA_PATTERN_V400,
            },
          ],
        },
        "on-select-action": o("WAFlowJSONActionSchema").getOnSelectActionSchema(
          [e.WAFlowsActionType.UPDATE_DATA],
        ),
        "on-unselect-action": o(
          "WAFlowJSONActionSchema",
        ).getOnSelectActionSchema([e.WAFlowsActionType.UPDATE_DATA]),
      };
    }
    function N(e, t) {
      switch (t) {
        case 501:
        case 502:
          return h(e, t);
        case 600:
          return y(e, t);
        case 601:
          return C(e, t);
        case 602:
          return b(e, t);
        case 603:
          return v(e, t);
        case 700:
          return S(e, t);
        case 701:
        case 702:
        case 703:
          return R(e, t);
        case 704:
          return L(e, t);
        default:
          throw o("WAFlowJSONValidationError")
            .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNAVAILABLE_FLOW_JSON_VERSION.concat(
              "Unsupported version for component ref key: ",
            )
            .concat(String(t));
      }
    }
    ((l.getLayoutChildrenSchema = e),
      (l.getComponentDataSourcePropertiesV500 = k),
      (l.getOptionListComponentSchemaV500 = D),
      (l.getOptionListComponentSchemaV600 = x),
      (l.getNavigationListItemsSchema = $),
      (l.getChipsSelectorComponentDataSourceProperties = P),
      (l.getComponentSchemaRefByVersion = N));
  },
  98,
);
