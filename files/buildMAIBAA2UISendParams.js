__d(
  "buildMAIBAA2UISendParams",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r, o) {
      var a = {
        externalConversationId: e,
        isSentFromOutOfChat: !1,
        message: t,
      };
      return (
        o != null && (a.entrypointContext = { enforcement_instance_id: o }),
        n != null
          ? ((a.displayMessage = n), a)
          : ((a.hideUserMessage = !0), r === !0 && (a.scrollLock = !0), a)
      );
    }
    i.default = e;
  },
  66,
);
