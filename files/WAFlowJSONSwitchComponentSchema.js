__d(
  "WAFlowJSONSwitchComponentSchema",
  ["WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "value",
      u = "cases",
      c = [
        (e = o("WAFlowJSONConstants")).ComponentRefKey.EMBEDDED_LINK,
        e.ComponentRefKey.FOOTER,
        e.ComponentRefKey.TEXT_BODY,
        e.ComponentRefKey.TEXT_CAPTION,
        e.ComponentRefKey.TEXT_HEADING,
        e.ComponentRefKey.TEXT_SUBHEADING,
        e.ComponentRefKey.IMAGE,
      ],
      d = [
        {
          form: e.ComponentRefKey.TEXT_INPUT,
          noForm: e.ComponentRefKey.TEXT_INPUT_NO_FORM,
        },
        {
          form: e.ComponentRefKey.TEXT_AREA,
          noForm: e.ComponentRefKey.TEXT_AREA_NO_FORM,
        },
        {
          form: e.ComponentRefKey.OPTIN,
          noForm: e.ComponentRefKey.OPTIN_NO_FORM,
        },
        { form: e.ComponentRefKey.CBG, noForm: e.ComponentRefKey.CBG_NO_FORM },
        { form: e.ComponentRefKey.RBG, noForm: e.ComponentRefKey.RBG_NO_FORM },
        {
          form: e.ComponentRefKey.DROPDOWN,
          noForm: e.ComponentRefKey.DROPDOWN_NO_FORM,
        },
        {
          form: e.ComponentRefKey.DATE_PICKER,
          noForm: e.ComponentRefKey.DATE_PICKER_NO_FORM,
        },
        {
          form: e.ComponentRefKey.PHOTO_PICKER,
          noForm: e.ComponentRefKey.PHOTO_PICKER_NO_FORM,
        },
        {
          form: e.ComponentRefKey.DOCUMENT_PICKER,
          noForm: e.ComponentRefKey.DOCUMENT_PICKER_NO_FORM,
        },
      ],
      m = {
        form: e.ComponentRefKey.CALENDAR_PICKER,
        noForm: e.ComponentRefKey.CALENDAR_PICKER_NO_FORM,
      },
      p = {
        form: e.ComponentRefKey.CHIPS_SELECTOR,
        noForm: e.ComponentRefKey.CHIPS_SELECTOR_NO_FORM,
      },
      _ = {
        form: e.ComponentRefKey.SEAT_SELECTOR,
        noForm: e.ComponentRefKey.SEAT_SELECTOR_NO_FORM,
      };
    function f(e, t) {
      var n = function (n) {
          return t ? n.form : n.noForm;
        },
        r = [].concat(
          c.map(function (e) {
            return o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(e);
          }),
          d.map(function (e) {
            return o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
              n(e),
            );
          }),
        );
      return (
        +e >= 601 &&
          r.push(o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(n(m))),
        +e >= 701 &&
          r.push(o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(n(p))),
        +e >= 704 &&
          r.push(o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(n(_))),
        o("WAFlowJSONSchemaUtils").getMapOfComponentsArrayBindingSchemaType(r)
      );
    }
    function g(e, t) {
      if (+e < 400) {
        var n = new Error(
          '"Switch" component is not available in Flow JSON ' + +e,
        );
        throw (n.stack, n);
      }
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE, s, u],
        additionalProperties: !1,
        properties: {
          type: {
            const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH,
          },
          value: o("WAFlowJSONSchemaUtils").getDynamicDataPatternSchema(e),
          cases: f(e, t),
        },
      };
    }
    l.getSwitchComponentSchemaByVersion = g;
  },
  98,
);
