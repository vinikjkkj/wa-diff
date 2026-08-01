__d(
  "cometBugReportingDialogAttachmentsReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      switch (t.type) {
        case "REMOVE_ATTACHMENT":
          return e.filter(function (e) {
            return t.value !== e;
          });
        case "UPLOAD_ATTACHMENT":
          return [].concat(e, [t.value]);
      }
      return e;
    }
    i.default = e;
  },
  66,
);
