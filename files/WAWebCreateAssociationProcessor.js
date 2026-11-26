__d(
  "WAWebCreateAssociationProcessor",
  ["WAWebAssociationProcessorConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return babelHelpers.extends({}, e, {
        processorType: o("WAWebAssociationProcessorConstants")
          .AssociationProcessorType.Regular,
      });
    }
    function s(e) {
      return babelHelpers.extends({}, e, {
        processorType: o("WAWebAssociationProcessorConstants")
          .AssociationProcessorType.WithDetachedMessages,
      });
    }
    function u(e, t) {
      var n;
      return t.groupHistoryIndividualMessageInfo != null &&
        (n = e.groupHistoryViewMode) != null
        ? n
        : e.viewMode;
    }
    ((l.createAssociationMsgProcessor = e),
      (l.createAssociationMsgProcessorWithDetachedMessages = s),
      (l.getAssociatedMsgViewMode = u));
  },
  98,
);
