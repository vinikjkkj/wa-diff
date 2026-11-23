__d(
  "AdsLeadGenCloseFormDialogDataReducerPlugin",
  ["AdsLeadGenFormEditorOriginalFormSnapshot"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return (
            o(
              "AdsLeadGenFormEditorOriginalFormSnapshot",
            ).clearOriginalEditForm(),
            t
              .set("isDialogShown", !1)
              .set("draftFormID", null)
              .set("duplicationSourceFormID", null)
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
