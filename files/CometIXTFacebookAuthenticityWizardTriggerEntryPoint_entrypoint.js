__d(
  "CometIXTFacebookAuthenticityWizardTriggerEntryPoint.entrypoint",
  [
    "CometIXTFacebookAuthenticityWizardTriggerRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "react",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = r("react")),
      u = {
        getPreloadProps: function (t) {
          return {
            queries: {
              reference: {
                parameters: r(
                  "CometIXTFacebookAuthenticityWizardTriggerRootQuery$Parameters",
                ),
                variables: {
                  input: babelHelpers.extends({}, t, {
                    nt_context: null,
                    trigger_session_id: r("uuidv4")(),
                  }),
                  scale: o("WebPixelRatio").get(),
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "CometIXTFacebookAuthenticityWizardTriggerRoot.react",
        ).__setRef(
          "CometIXTFacebookAuthenticityWizardTriggerEntryPoint.entrypoint",
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
