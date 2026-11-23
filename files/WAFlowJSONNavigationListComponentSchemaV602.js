__d(
  "WAFlowJSONNavigationListComponentSchemaV602",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONChildrenSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONNavigationListProperties",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return [
        o("WAFlowJSONNavigationListProperties")
          .WAFlowJSONNavigationListMediaSizeType.REGULAR,
        o("WAFlowJSONNavigationListProperties")
          .WAFlowJSONNavigationListMediaSizeType.LARGE,
      ];
    }
    function s(e) {
      if (+e >= 602) return u(e);
      throw o("WAFlowJSONValidationError")
        .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNAVAILABLE_FLOW_JSON_VERSION.concat(
          ' The "' +
            o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
              .NAVIGATION_LIST +
            '" component is not supported in Flow JSON: ',
        )
        .concat(String(e));
    }
    function u(t) {
      var n,
        r,
        a,
        i,
        l = {
          type: (r = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            r.WA_FLOW_JSON_SCHEMA_TYPE,
            r.WA_FLOW_JSON_SCHEMA_NAME,
            r.WA_FLOW_JSON_SCHEMA_LIST_ITEMS,
          ],
          additionalProperties: !1,
          properties:
            ((n = {
              type: { const: r.WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST },
              name: (a = o("WAFlowJSONSchemaUtils")).getComponentNameSchemaType(
                t,
              ),
              label: a.getStringBindingSchemaType(t),
              description: a.getStringBindingSchemaType(t),
            }),
            (n[
              (i = o(
                "WAFlowJSONNavigationListProperties",
              )).WAFlowJSONNavigationListPropsType.MEDIA_SIZE
            ] = a.getStringBindingSchemaType(t, { enum: e() })),
            (n[i.WAFlowJSONNavigationListPropsType.LIST_ITEMS] =
              a.getArrayObjectBindingSchemaType(
                t,
                [
                  i.WAFlowJSONNavigationListPropsType.ID,
                  i.WAFlowJSONNavigationListPropsType.MAIN_CONTENT,
                ],
                o("WAFlowJSONChildrenSchema").getNavigationListItemsSchema(t),
              )),
            (n["on-click-action"] = o(
              "WAFlowJSONActionSchema",
            ).getOnClickActionSchema(
              t,
              r.WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST,
            )),
            n),
        };
      return l;
    }
    ((l.getNavigationlistMediaSizeTypes = e),
      (l.getNavigationListComponentSchemaByVersion = s));
  },
  98,
);
