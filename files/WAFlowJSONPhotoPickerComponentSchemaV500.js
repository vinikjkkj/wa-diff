__d(
  "WAFlowJSONPhotoPickerComponentSchemaV500",
  ["$InternalEnum", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "min-uploaded-photos",
      s = "max-uploaded-photos",
      u = "max-file-size-kb",
      c = "photo-source",
      d = 0,
      m = 1,
      p = 30,
      _ = 1,
      f = 25600,
      g = n("$InternalEnum")({
        CAMERA: "camera",
        GALLERY: "gallery",
        CAMERA_GALLERY: "camera_gallery",
      });
    function h(t, n) {
      var r,
        a,
        i,
        l = {
          type: (a = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            a.WA_FLOW_JSON_SCHEMA_TYPE,
            a.WA_FLOW_JSON_SCHEMA_NAME,
            a.WA_FLOW_JSON_SCHEMA_LABEL,
          ],
          additionalProperties: !1,
          properties:
            ((r = {
              type: { const: a.WA_FLOW_JSON_COMPONENT_TYPE.PHOTO_PICKER },
              name: (i = o("WAFlowJSONSchemaUtils")).getTextFieldSchema(t),
              description: i.getStringBindingSchemaType(t, {
                pattern: i.WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
              }),
              label: i.getStringBindingSchemaType(t, {
                pattern: i.WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
              }),
            }),
            (r[e] = i.getIntegerSchemaType(t, { minimum: d, maximum: p })),
            (r[s] = i.getIntegerSchemaType(t, { minimum: m, maximum: p })),
            (r[u] = i.getIntegerSchemaType(t, { minimum: _, maximum: f })),
            (r[c] = i.getStringEnumBindingSchemaType(
              t,
              Array.from(g.members()).map(function (e) {
                return e;
              }),
            )),
            (r.enabled = i.getBoolBindingSchemaType(t)),
            (r.visible = i.getBoolBindingSchemaType(t)),
            r),
        };
      return (
        n ||
          (l.properties = babelHelpers.extends({}, l.properties, {
            "error-message": o(
              "WAFlowJSONSchemaUtils",
            ).getErrMsgObjectBindingSchemaType(),
          })),
        l
      );
    }
    l.getPhotoPickerComponentSchemaV500 = h;
  },
  98,
);
