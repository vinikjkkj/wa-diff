__d(
  "WAWebGalaxySetIframeTheme",
  ["SecurePostMessage", "WAWebGalaxyFlowsDrawerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = document.getElementById(
        o("WAWebGalaxyFlowsDrawerUtils").FLOWS_IFRAME_ID,
      );
      t instanceof HTMLIFrameElement &&
        t.contentWindow &&
        r("SecurePostMessage").sendMessageToSpecificOrigin(
          t.contentWindow,
          JSON.stringify({ eventName: "update_theme", payload: { theme: e } }),
          o("WAWebGalaxyFlowsDrawerUtils").FLOWS_URL,
        );
    }
    l.setGalaxyFlowIframeTheme = e;
  },
  98,
);
