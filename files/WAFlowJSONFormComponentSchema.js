__d(
  "WAFlowJSONFormComponentSchema",
  ["WAFlowJSONConstants", "WAFlowJSONSchemaUtils", "WAFlowJSONValidationError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return {
        type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          t.WA_FLOW_JSON_SCHEMA_TYPE,
          t.WA_FLOW_JSON_SCHEMA_NAME,
          t.WA_FLOW_JSON_SCHEMA_CHILDREN,
        ],
        additionalProperties: !1,
        properties: {
          type: { const: t.WA_FLOW_JSON_COMPONENT_TYPE.FORM },
          name: o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e, {
            minLength: 1,
          }),
          "error-messages": o(
            "WAFlowJSONSchemaUtils",
          ).getSimpleObjectBindingSchema(e, t.WA_FLOW_JSON_SCHEMA_STRING),
          "init-values": o("WAFlowJSONSchemaUtils").getMixedObjectBindingSchema(
            e,
          ),
          children: u(e),
        },
      };
    }
    function s(t) {
      var n = e(t);
      return babelHelpers.extends({}, n, {
        properties: babelHelpers.extends({}, n.properties, {
          "error-messages": o(
            "WAFlowJSONSchemaUtils",
          ).getMixedObjectBindingSchema(t),
        }),
      });
    }
    function u(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
        items: { oneOf: c(e) },
      };
    }
    function c(e) {
      switch (e) {
        case 100:
        case 101:
        case 110:
        case 120:
        case 200:
        case 202:
        case 299:
        case 302:
        case 401:
        case 201:
        case 300:
        case 301:
        case 400:
        case 500:
          throw o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNSUPPORTED_FLOW_JSON_VERSION.concat(
            ": " + String(e),
          );
        case 501:
        case 502:
          return d();
        case 600:
          return m();
        case 601:
          return p();
        case 602:
          return _();
        case 603:
        case 700:
          return f();
        case 701:
        case 702:
        case 703:
          return g();
        case 704:
          return h();
      }
    }
    function d() {
      var e, t;
      return [
        (e = o("WAFlowJSONSchemaUtils")).createJSONSchemaComponentRef(
          (t = o("WAFlowJSONConstants")).ComponentRefKey.TEXT_INPUT,
        ),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_AREA),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.CBG),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.RBG),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DROPDOWN),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DATE_PICKER),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.EMBEDDED_LINK),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.FOOTER),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_BODY),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_CAPTION),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_HEADING),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_SUBHEADING),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.OPTIN),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.IMAGE),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.IF),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.SWITCH),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.PHOTO_PICKER),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DOCUMENT_PICKER),
      ];
    }
    function m() {
      var e, t;
      return [
        (e = o("WAFlowJSONSchemaUtils")).createJSONSchemaComponentRef(
          (t = o("WAFlowJSONConstants")).ComponentRefKey.TEXT_INPUT,
        ),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_AREA),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.CBG),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.RBG),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DROPDOWN),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DATE_PICKER),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.EMBEDDED_LINK),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.FOOTER),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_BODY),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_CAPTION),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_HEADING),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.TEXT_SUBHEADING),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.OPTIN),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.IMAGE),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.IF),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.SWITCH),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.PHOTO_PICKER),
        e.createJSONSchemaComponentRef(t.ComponentRefKey.DOCUMENT_PICKER),
      ];
    }
    function p() {
      return [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.CALENDAR_PICKER,
        ),
      ].concat(m());
    }
    function _() {
      return [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST,
        ),
      ].concat(p());
    }
    function f() {
      return [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.CHIPS_SELECTOR,
        ),
      ].concat(_());
    }
    function g() {
      return [].concat(f(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.IMAGE_CAROUSEL,
        ),
      ]);
    }
    function h() {
      return [].concat(g(), [
        o("WAFlowJSONSchemaUtils").createJSONSchemaComponentRef(
          o("WAFlowJSONConstants").ComponentRefKey.SEAT_SELECTOR,
        ),
      ]);
    }
    ((l.getFormComponentSchemaV500 = e), (l.getFormComponentSchemaV600 = s));
  },
  98,
);
