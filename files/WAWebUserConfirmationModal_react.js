__d(
  "WAWebUserConfirmationModal.react",
  [
    "WAWebEmailConfirmationModal.react",
    "WAWebPhoneNumberConfirmationModal.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.actions,
        a = e.actionText,
        i = e.actionType,
        l = e.emailContentText,
        u = e.onCancel,
        c = e.onCompletion,
        d = e.phoneContentText,
        m = e.successText,
        p = e.tsNavigationData,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o("WAWebUserPrefsMeUser").getMaybeMePnUser()), (t[0] = _))
        : (_ = t[0]);
      var f = _;
      if (f == null) {
        var g;
        return (
          t[1] !== a ||
          t[2] !== i ||
          t[3] !== n ||
          t[4] !== l ||
          t[5] !== u ||
          t[6] !== c ||
          t[7] !== m ||
          t[8] !== p
            ? ((g = s.jsx(r("WAWebEmailConfirmationModal.react"), {
                actions: n,
                actionType: i,
                actionText: a,
                contentText: l,
                onCancel: u,
                onCompletion: c,
                successText: m,
                tsNavigationData: p,
              })),
              (t[1] = a),
              (t[2] = i),
              (t[3] = n),
              (t[4] = l),
              (t[5] = u),
              (t[6] = c),
              (t[7] = m),
              (t[8] = p),
              (t[9] = g))
            : (g = t[9]),
          g
        );
      }
      var h;
      return (
        t[10] !== a ||
        t[11] !== i ||
        t[12] !== n ||
        t[13] !== u ||
        t[14] !== c ||
        t[15] !== d ||
        t[16] !== m ||
        t[17] !== p
          ? ((h = s.jsx(r("WAWebPhoneNumberConfirmationModal.react"), {
              actions: n,
              actionType: i,
              actionText: a,
              contentText: d,
              mePn: f,
              onCancel: u,
              onCompletion: c,
              successText: m,
              tsNavigationData: p,
            })),
            (t[10] = a),
            (t[11] = i),
            (t[12] = n),
            (t[13] = u),
            (t[14] = c),
            (t[15] = d),
            (t[16] = m),
            (t[17] = p),
            (t[18] = h))
          : (h = t[18]),
        h
      );
    }
    l.default = u;
  },
  98,
);
