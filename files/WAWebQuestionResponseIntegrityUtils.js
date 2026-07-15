__d(
  "WAWebQuestionResponseIntegrityUtils",
  [
    "fbt",
    "Promise",
    "WAWebActionToast.react",
    "WAWebFbtCommon",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "Couldn't block. Please try again.");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function m(e) {
      var t = o("WAWebToast.react").genId(),
        n = s._(/*BTDS*/ "Blocked responses from {response sender pushname}", [
          s._param("response sender pushname", e != null ? e : "this person"),
        ]);
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: n, id: t }),
      );
    }
    function p(e) {
      var t = o("WAWebToast.react").genId(),
        n = e
          ? s._(/*BTDS*/ "Couldn't star response. Please try again.")
          : s._(/*BTDS*/ "Couldn't unstar response. Please try again.");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: n, id: t }),
      );
    }
    function _() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "Response not deleted. Please try again.");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function f(t) {
      var a = o("WAWebToast.react").genId(),
        i = s._(/*BTDS*/ "Response deleted"),
        l = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Deleting response..."),
        ),
        u = (e || (e = n("Promise"))).resolve(
          new (o("WAWebActionToast.react").ActionType)(i, {
            actionText: r("WAWebFbtCommon")("Undo"),
            actionHandler: t,
          }),
        );
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: a,
          pendingAction: u,
          initialAction: l,
        }),
      );
    }
    ((l.showBlockFailureToast = d),
      (l.showBlockSuccessToast = m),
      (l.showStarFailureToast = p),
      (l.showDeleteFailureToast = _),
      (l.showDeleteSuccessToastWithUndo = f));
  },
  226,
);
