__d(
  "WAWebCreateViewModeProcessor",
  ["WAWebBoolFunc"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return babelHelpers.extends({}, e);
    }
    function s(e) {
      var t;
      return babelHelpers.extends({}, e, {
        messageVisibleInChat: (t = o("WAWebBoolFunc")).returnTrue,
        messageVisibleInChatlistPreview: t.returnTrue,
        shouldShowInNotification: t.returnTrue,
        shouldShowInSearch: t.returnTrue,
        shouldIncludeInChatSpamReport: t.returnTrue,
      });
    }
    function u(e) {
      var t;
      return babelHelpers.extends({}, e, {
        messageVisibleInChat: (t = o("WAWebBoolFunc")).returnFalse,
        messageVisibleInChatlistPreview: t.returnFalse,
        shouldShowInNotification: t.returnFalse,
        shouldShowInSearch: t.returnFalse,
        shouldIncludeInChatSpamReport: t.returnFalse,
      });
    }
    ((l.createViewModeProcessor = e),
      (l.createFullyVisibleViewModeProcessor = s),
      (l.createFullyHiddenViewModeProcessor = u));
  },
  98,
);
