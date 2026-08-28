__d(
  "TwoStepVerificationChallengePickerDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "TwoStepVerificationChallengePickerDialogQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.encryptedContext,
          n = t.navigation;
        return {
          extraProps: { navigation: n },
          queries: {
            queryReference: {
              parameters: r(
                "TwoStepVerificationChallengePickerDialogQuery$Parameters",
              ),
              variables: { encryptedContext: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "TwoStepVerificationChallengePickerDialog.react",
      ).__setRef("TwoStepVerificationChallengePickerDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
