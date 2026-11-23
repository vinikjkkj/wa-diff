__d(
  "isMAIBALWIR23CopilotConversation",
  ["LWIMAIBACopilotGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["Facebook Ad Center", "MBS"]);
    function s(t, n) {
      return (
        n != null &&
        e.has(n) &&
        t === "FB_LWI_BOOST_POST_MAIBA" &&
        o("LWIMAIBACopilotGating").isCopilotEntryEnabled()
      );
    }
    l.default = s;
  },
  98,
);
