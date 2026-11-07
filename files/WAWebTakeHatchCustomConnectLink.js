__d(
  "WAWebTakeHatchCustomConnectLink",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebHatchConnectLinkShape",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebOpenHatchCustomConnectLink",
      ).__setRef("WAWebTakeHatchCustomConnectLink");
    function u(e) {
      return (
        o("WAWebHatchConnectLinkShape").getHatchCustomConnectLinkFlow(e) !=
          null &&
        o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled() &&
        !r("WAWebHatchLinkedStatusManager").isUnlinked()
      );
    }
    function c(t, n) {
      r("promiseDone")(
        s.load(),
        function (e) {
          var r = e.openHatchCustomConnectLink;
          r(t, n);
        },
        function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch: custom connector link opener failed to load",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-custom-connector-link-opener-load-failed");
        },
      );
    }
    ((l.takesHatchCustomConnectLink = u),
      (l.openTakenHatchCustomConnectLink = c));
  },
  98,
);
