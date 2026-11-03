__d(
  "FRXIXTContentTrigger.entrypoint",
  [
    "CometIXTFacebookContentTriggerEntryPoint.entrypoint",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: r("CometIXTFacebookContentTriggerEntryPoint.entrypoint")
        .getPreloadProps,
      root: r("JSResourceForInteraction")(
        "FRXIXTContentTriggerRoot.react",
      ).__setRef("FRXIXTContentTrigger.entrypoint"),
    };
    l.default = e;
  },
  98,
);
