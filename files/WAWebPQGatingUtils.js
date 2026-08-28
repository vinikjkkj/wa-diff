__d(
  "WAWebPQGatingUtils",
  ["WAWebABProps"],
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
      return !1;
    }
    ((l.isPqKeysUploadEnabled = u),
      (l.isPq1on1MessageEnabled = c),
      (l.isPqKeyRollbackEnabled = d));
  },
  98,
);
