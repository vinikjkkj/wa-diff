__d(
  "WAFlowJSONIfComponentSchema",
  ["WAFlowJSONConstants", "WAFlowJSONSchemaUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        {
          formKey: (e = o("WAFlowJSONConstants")).ComponentRefKey.TEXT_INPUT,
          noFormKey: e.ComponentRefKey.TEXT_INPUT_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.TEXT_AREA,
          noFormKey: e.ComponentRefKey.TEXT_AREA_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.OPTIN,
          noFormKey: e.ComponentRefKey.OPTIN_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.CBG,
          noFormKey: e.ComponentRefKey.CBG_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.RBG,
          noFormKey: e.ComponentRefKey.RBG_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.DROPDOWN,
          noFormKey: e.ComponentRefKey.DROPDOWN_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.DATE_PICKER,
          noFormKey: e.ComponentRefKey.DATE_PICKER_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.SWITCH,
          noFormKey: e.ComponentRefKey.SWITCH_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.PHOTO_PICKER,
          noFormKey: e.ComponentRefKey.PHOTO_PICKER_NO_FORM,
        },
        {
          formKey: e.ComponentRefKey.DOCUMENT_PICKER,
          noFormKey: e.ComponentRefKey.DOCUMENT_PICKER_NO_FORM,
        },
      ];
    function u(e, t) {
      return o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
        e ? t.formKey : t.noFormKey,
      );
    }
    function c(e, t, n) {
      var r,
        a,
        i = [
          (r = o("WAFlowJSONSchemaUtils")).createJSONSchemaComponentRef(
            (a = o("WAFlowJSONConstants")).ComponentRefKey.TEXT_BODY,
          ),
          r.createJSONSchemaComponentRef(a.ComponentRefKey.TEXT_CAPTION),
          r.createJSONSchemaComponentRef(a.ComponentRefKey.TEXT_HEADING),
          r.createJSONSchemaComponentRef(a.ComponentRefKey.TEXT_SUBHEADING),
          r.createJSONSchemaComponentRef(a.ComponentRefKey.IMAGE),
          r.createJSONSchemaComponentRef(a.ComponentRefKey.EMBEDDED_LINK),
        ].concat(
          s.map(function (e) {
            return u(n, e);
          }),
        );
      return (
        +e >= 601 &&
          i.push(
            u(n, {
              formKey: o("WAFlowJSONConstants").ComponentRefKey.CALENDAR_PICKER,
              noFormKey: o("WAFlowJSONConstants").ComponentRefKey
                .CALENDAR_PICKER_NO_FORM,
            }),
          ),
        +e >= 701 &&
          i.push(
            u(n, {
              formKey: o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR,
              noFormKey: o("WAFlowJSONConstants").ComponentRefKey
                .CHIPS_SELECTOR_NO_FORM,
            }),
          ),
        +e >= 704 &&
          i.push(
            u(n, {
              formKey: o("WAFlowJSONConstants").ComponentRefKey.SEAT_SELECTOR,
              noFormKey: o("WAFlowJSONConstants").ComponentRefKey
                .SEAT_SELECTOR_NO_FORM,
            }),
          ),
        t === 0 &&
          i.push(
            o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
              o("WAFlowJSONConstants").ComponentRefKey.FOOTER,
            ),
          ),
        t < 2 &&
          i.push(
            u(n, {
              formKey: o("WAFlowJSONConstants").ComponentRefKey.IF,
              noFormKey: o("WAFlowJSONConstants").ComponentRefKey.IF_NO_FORM,
            }),
          ),
        i
      );
    }
    function d(e, t, n) {
      var o = c(e, t, n),
        a = e;
      if (a < 400)
        throw r("err")('"If" component is not available in Flow JSON ' + a);
      return a < 600 ? m(e, o) : p(o);
    }
    function m(e, t) {
      var n;
      return {
        type: (n = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          n.WA_FLOW_JSON_SCHEMA_TYPE,
          n.WA_FLOW_JSON_SCHEMA_CONDITION,
          n.WA_FLOW_JSON_SCHEMA_THEN,
        ],
        additionalProperties: !1,
        properties: {
          type: { const: n.WA_FLOW_JSON_COMPONENT_TYPE.IF },
          condition: o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e),
          then: { type: n.WA_FLOW_JSON_SCHEMA_ARRAY, items: { oneOf: t } },
          else: { type: n.WA_FLOW_JSON_SCHEMA_ARRAY, items: { oneOf: t } },
        },
      };
    }
    function p(e) {
      var t;
      return {
        type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          t.WA_FLOW_JSON_SCHEMA_TYPE,
          t.WA_FLOW_JSON_SCHEMA_CONDITION,
          t.WA_FLOW_JSON_SCHEMA_THEN,
        ],
        additionalProperties: !1,
        properties: {
          type: { const: t.WA_FLOW_JSON_COMPONENT_TYPE.IF },
          condition: o(
            "WAFlowJSONSchemaUtils",
          ).getBoolOrStringBindingSchemaType(),
          then: { type: t.WA_FLOW_JSON_SCHEMA_ARRAY, items: { oneOf: e } },
          else: { type: t.WA_FLOW_JSON_SCHEMA_ARRAY, items: { oneOf: e } },
        },
      };
    }
    l.getIfComponentSchemaByVersion = d;
  },
  98,
);
