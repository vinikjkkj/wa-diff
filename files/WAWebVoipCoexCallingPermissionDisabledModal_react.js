__d(
  "WAWebVoipCoexCallingPermissionDisabledModal.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "You can't call this customer right now"),
        onOK: o("WAWebModalManager").closeModalManager,
        okText: s._(/*BTDS*/ "OK"),
        testid: void 0,
        children: s._(
          /*BTDS*/ "They declined your call request. You can still message or accept calls from them.",
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
