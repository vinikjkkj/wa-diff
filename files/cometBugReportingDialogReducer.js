__d(
  "cometBugReportingDialogReducer",
  ["cometBugReportingDialogAttachmentsReducer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (t.type) {
        case "SET_BUG_ID":
          return babelHelpers.extends({}, e, { bugID: t.value });
        case "SET_CATEGORY":
          return babelHelpers.extends({}, e, {
            category: t.value,
            subCategory: null,
          });
        case "SET_SUB_CATEGORY":
          return babelHelpers.extends({}, e, { subCategory: t.value });
        case "SET_DESCRIPTION":
          return babelHelpers.extends({}, e, {
            description: t.value,
            userHasModifiedDescription:
              e.userHasModifiedDescription || t.value !== "",
            validationErrors:
              t.value !== ""
                ? babelHelpers.extends({}, e.validationErrors, {
                    description: !1,
                  })
                : e.validationErrors,
          });
        case "SET_HAS_COMPLETE_LOGS":
          return babelHelpers.extends({}, e, { hasCompleteLogs: t.value });
        case "SET_LOGIN_AS_ME":
          return babelHelpers.extends({}, e, { loginAsMe: t.value });
        case "SET_ASSIGN_TO_ME":
          return babelHelpers.extends({}, e, { assignToMe: t.value });
        case "SET_PRODUCT": {
          var n = e.previousProductSelections;
          if (t.product != null) {
            var o = t.product;
            n =
              e.previousProductSelections.length > 5
                ? [].concat(e.previousProductSelections.toSpliced(0, 1), [o])
                : [].concat(e.previousProductSelections, [o]);
          }
          return babelHelpers.extends({}, e, {
            description:
              !e.userHasModifiedDescription && t.description != null
                ? t.description
                : e.description,
            previousProductSelections: n,
            product: t.product,
            validationErrors: babelHelpers.extends({}, e.validationErrors, {
              product: !1,
            }),
          });
        }
        case "SET_PROBLEM_TYPE":
          return babelHelpers.extends({}, e, { problemType: t.value });
        case "VALIDATE":
          return babelHelpers.extends({}, e, {
            validationErrors: {
              description: e.description === "",
              product: e.product == null,
            },
          });
      }
      var a = r("cometBugReportingDialogAttachmentsReducer")(e.attachments, t);
      return a === e.attachments
        ? e
        : babelHelpers.extends({}, e, { attachments: a });
    }
    l.default = e;
  },
  98,
);
