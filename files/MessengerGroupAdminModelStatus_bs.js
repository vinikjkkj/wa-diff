__d(
  "MessengerGroupAdminModelStatus.bs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = e.toUpperCase();
      switch (t) {
        case "NOT_SUPPORTED":
          return "not_supported";
        case "OPTIONAL":
          return "optional";
        case "REQUIRED":
          return "required";
        default:
          return null;
      }
    }
    i.fromNullableString = e;
  },
  66,
);
