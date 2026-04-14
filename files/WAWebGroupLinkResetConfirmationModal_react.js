__d(
  "WAWebGroupLinkResetConfirmationModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onConfirm,
        n = function () {
          (t(), o("WAWebModalManager").closeModalManager());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Group link will reset"),
        onOK: n,
        onCancel: o("WAWebModalManager").closeModalManager,
        children: u.jsx(r("WDSText.react"), {
          colorName: "contentDeemphasized",
          type: "Body2",
          children: s._(
            /*BTDS*/ "The current group link will no longer work for people to join this group",
          ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
