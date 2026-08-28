__d(
  "AdsRuleDialogReducerPlugins",
  ["AdsRuleFlowTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.EDITING;
        },
      },
      s = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.BOOTLOADING;
        },
      },
      u = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.DELETING;
        },
      },
      c = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.EXECUTING;
        },
      },
      d = {
        reduce: function (t, n) {
          var e = n.data.changedParamKeys;
          return !e.tool && !e.section
            ? t
            : o("AdsRuleFlowTypes").DialogState.CLOSED;
        },
      },
      m = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.CLOSED;
        },
      },
      p = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.CREATING;
        },
      },
      _ = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.CREATE_DIALOG;
        },
      },
      f = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.PREVIEW;
        },
      },
      g = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.EDIT_DIALOG;
        },
      },
      h = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.EDIT_ERROR;
        },
      },
      y = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.APPLIES_TO_DIALOG;
        },
      },
      C = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.DELETE_DIALOG;
        },
      },
      b = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.EXECUTE_DIALOG;
        },
      },
      v = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.RULE_LIST_DIALOG;
        },
      },
      S = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.RULE_HISTORY_DIALOG;
        },
      },
      R = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.VIEW_ACTIVE_RULES_DIALOG;
        },
      },
      L = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.CLOSED;
        },
      },
      E = {
        reduce: function (t) {
          return t === o("AdsRuleFlowTypes").DialogState.CLOSED
            ? o("AdsRuleFlowTypes").DialogState.CLOSED
            : o("AdsRuleFlowTypes").DialogState.CREATE_ERROR;
        },
      },
      k = {
        reduce: function (t) {
          return t === o("AdsRuleFlowTypes").DialogState.CLOSED
            ? o("AdsRuleFlowTypes").DialogState.CLOSED
            : o("AdsRuleFlowTypes").DialogState.DELETE_SUCCESS;
        },
      },
      I = {
        reduce: function (t) {
          return t === o("AdsRuleFlowTypes").DialogState.CLOSED
            ? o("AdsRuleFlowTypes").DialogState.CLOSED
            : o("AdsRuleFlowTypes").DialogState.DELETE_ERROR;
        },
      },
      T = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.EDIT_SUCCESS;
        },
      },
      D = {
        reduce: function (t) {
          return t === o("AdsRuleFlowTypes").DialogState.CLOSED
            ? o("AdsRuleFlowTypes").DialogState.CLOSED
            : o("AdsRuleFlowTypes").DialogState.EXECUTE_SUCCESS;
        },
      },
      x = {
        reduce: function (t) {
          return t === o("AdsRuleFlowTypes").DialogState.CLOSED
            ? o("AdsRuleFlowTypes").DialogState.CLOSED
            : o("AdsRuleFlowTypes").DialogState.EXECUTE_ERROR;
        },
      },
      $ = {
        reduce: function () {
          return o("AdsRuleFlowTypes").DialogState.RULE_TEMPLATES;
        },
      };
    ((l.AdsRuleDialogEditActionReducerPlugin = e),
      (l.AdsRuleDialogBootloadActionReducerPlugin = s),
      (l.AdsRuleDialogDeleteActionReducerPlugin = u),
      (l.AdsRuleRuleExecuteRunActionReducerPlugin = c),
      (l.AdsInterfacesRouteUpdateParamsDataActionReducerPlugin = d),
      (l.AdsNavigationChangeNavigationStateDataReducerPlugin = m),
      (l.AdsRuleDialogCreateActionReducerPlugin = p),
      (l.AdsRuleDialogOpenCreateReducerPlugin = _),
      (l.AdsRuleDialogOpenPreviewReducerPlugin = f),
      (l.AdsRuleDialogOpenEditReducerPlugin = g),
      (l.AdsRuleRuleEditErrorReducerPlugin = h),
      (l.AdsRuleDialogOpenAppliesToReducerPlugin = y),
      (l.AdsRuleDialogOpenDeleteReducerPlugin = C),
      (l.AdsRuleDialogOpenExecuteReducerPlugin = b),
      (l.AdsRuleDialogOpenRuleListReducerPlugin = v),
      (l.AdsRuleDialogOpenHistoryResultsReducerPlugin = S),
      (l.AdsRuleDialogOpenViewActiveRulesReducerPlugin = R),
      (l.AdsRuleRuleCreateActionReducerPlugin = L),
      (l.AdsRuleRuleCreateErrorReducerPlugin = E),
      (l.AdsRuleRuleDeleteReducerPlugin = k),
      (l.AdsRuleRuleDeleteErrorReducerPlugin = I),
      (l.AdsRuleRuleEditReducerPlugin = T),
      (l.AdsRuleRuleExecuteLoadReducerPlugin = D),
      (l.AdsRuleRuleExecuteLoadErrorReducerPlugin = x),
      (l.AdsRuleDialogOpenTemplateListReducerPlugin = $));
  },
  98,
);
