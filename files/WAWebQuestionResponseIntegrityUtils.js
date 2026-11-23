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
        t = s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function m(e) {
      var t = o("WAWebToast.react").genId(),
        n = s._(/*BTDS*/ "", [
          s._param("response sender pushname", e != null ? e : "this person"),
        ]);
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: n, id: t }),
      );
    }
    function p() {
      var e = o("WAWebToast.react").genId(),
        t = s._(/*BTDS*/ "");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function _(t) {
      var a = o("WAWebToast.react").genId(),
        i = s._(/*BTDS*/ ""),
        l = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
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
      (l.showDeleteFailureToast = p),
      (l.showDeleteSuccessToastWithUndo = _));
  },
  226,
);
