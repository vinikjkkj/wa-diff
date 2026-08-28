__d(
  "CometIXTFacebookContentTriggerEntryPoint.entrypoint",
  [
    "CometIXTFacebookContentTriggerRootQuery$Parameters",
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
                  "CometIXTFacebookContentTriggerRootQuery$Parameters",
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
          "CometIXTFacebookContentTriggerRoot.react",
        ).__setRef("CometIXTFacebookContentTriggerEntryPoint.entrypoint"),
      },
      c = u;
    l.default = c;
  },
  98,
);
