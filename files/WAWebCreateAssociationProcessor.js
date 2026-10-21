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
    function s(e, t) {
      var n;
      return t.groupHistoryIndividualMessageInfo != null &&
        (n = e.groupHistoryViewMode) != null
        ? n
        : e.viewMode;
    }
    ((l.createAssociationMsgProcessorWithDetachedMessages = e),
      (l.getAssociatedMsgViewMode = s));
  },
  98,
);
