__d(
  "WAWebCreateAssociationProcessor",
  ["WAWebAssociationProcessorConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return babelHelpers.extends({}, e, {
        processorType: o("WAWebAssociationProcessorConstants")
          .AssociationProcessorType.WithDetachedMessages,
      });
    }
    l.createAssociationMsgProcessorWithDetachedMessages = e;
  },
  98,
);
