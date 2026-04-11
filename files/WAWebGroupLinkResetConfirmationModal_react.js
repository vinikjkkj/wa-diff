__d(
  "WAWebGroupLinkResetConfirmationModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onConfirm,
        a;
      t[0] !== n
        ? ((a = function () {
            (n(), o("WAWebModalManager").closeModalManager());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Group link will reset")), (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "The current group link will no longer work for people to join this group",
            ),
          })),
          (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== i
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: l,
              onOK: i,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: c,
            })),
            (t[4] = i),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = c;
  },
  226,
);
