__d(
  "MessengerGroupsSyncStatus.bs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      switch (e) {
        case "OPT_IN":
          return "OPT_IN";
        case "OPT_OUT":
          return "OPT_OUT";
        case "PENDING_OPT_IN":
          return "PENDING_OPT_IN";
        case "PENDING_OPT_OUT":
          return "PENDING_OPT_OUT";
        case "UNSET":
          return "UNSET";
        case "UNSUPPORTED":
          return "UNSUPPORTED";
        default:
          return null;
      }
    }
    i.fromNullableString = e;
  },
  66,
);
