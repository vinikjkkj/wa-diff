__d(
  "WAFlowsComponentSchemasV602",
  ["WAFlowsTextInput.react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [].concat((e = o("WAFlowsTextInput.react")).supportedInputTypes, [
        e.WAFlowJSONTextInputType.REGEX,
      ]),
      u = babelHelpers.extends({}, e.SCHEMA, {
        properties: babelHelpers.extends({}, e.SCHEMA.properties, {
          inputType: { enum: s },
          pattern: { type: "string", format: "regex" },
        }),
      });
    l.WAFlowsTextInputV602Schema = u;
  },
  98,
);
