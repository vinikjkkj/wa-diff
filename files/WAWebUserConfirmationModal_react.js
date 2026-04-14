__d(
  "WAWebUserConfirmationModal.react",
  [
    "WAWebEmailConfirmationModal.react",
    "WAWebPhoneNumberConfirmationModal.react",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.actions,
        n = e.actionText,
        a = e.actionType,
        i = e.emailContentText,
        l = e.onCancel,
        u = e.onCompletion,
        c = e.phoneContentText,
        d = e.successText,
        m = e.tsNavigationData,
        p = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return p == null
        ? s.jsx(r("WAWebEmailConfirmationModal.react"), {
            actions: t,
            actionType: a,
            actionText: n,
            contentText: i,
            onCancel: l,
            onCompletion: u,
            successText: d,
            tsNavigationData: m,
          })
        : s.jsx(r("WAWebPhoneNumberConfirmationModal.react"), {
            actions: t,
            actionType: a,
            actionText: n,
            contentText: c,
            mePn: p,
            onCancel: l,
            onCompletion: u,
            successText: d,
            tsNavigationData: m,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
