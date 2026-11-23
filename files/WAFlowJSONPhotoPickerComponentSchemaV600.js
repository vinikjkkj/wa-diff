__d(
  "WAFlowJSONPhotoPickerComponentSchemaV600",
  ["WAFlowJSONPhotoPickerComponentSchemaV500", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "WAFlowJSONPhotoPickerComponentSchemaV500",
      ).getPhotoPickerComponentSchemaV500(e, t);
      return babelHelpers.extends({}, n, {
        properties: babelHelpers.extends({}, n.properties, {
          name: o("WAFlowJSONSchemaUtils").getComponentNameSchemaType(e),
        }),
      });
    }
    l.getPhotoPickerComponentSchemaV600 = e;
  },
  98,
);
