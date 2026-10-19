__d(
  "WAWebPQGatingUtils",
  ["WAWebABProps", "WAWebSessionScope"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return (
        e == null &&
          (e = o("WAWebABProps").getABPropConfigValue("pq_keys_upload") === !0),
        e
      );
    }
    function c() {
      return (
        s == null &&
          (s =
            u() &&
            o("WAWebABProps").getABPropConfigValue(
              "pq_1on1_message_enabled",
            ) === !0),
        s
      );
    }
    function d() {
      return c()
        ? o("WAWebSessionScope").SessionScope.PQ
        : o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function m() {
      return !1;
    }
    ((l.isPqKeysUploadEnabled = u),
      (l.isPq1on1MessageEnabled = c),
      (l.getOneToOneChatSessionScope = d),
      (l.isPqKeyRollbackEnabled = m));
  },
  98,
);
