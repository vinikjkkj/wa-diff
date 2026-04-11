__d(
  "WAWebStatusChangePrivacyPopup.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebStatusPrivacySettingsFlowLoadable",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.setStatusPostingPrivacyConfig,
        a = e.statusPostingPrivacyConfig,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebStatusPrivacySettingsFlowLoadable")
                  .StatusPrivacySettingsFlowLoadable,
                {
                  statusPostingPrivacyConfig: a,
                  setStatusPostingPrivacyConfig: n,
                },
              ),
            );
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Update privacy settings")), (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== l
          ? ((d = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onCancel: o("WAWebModalManager").closeModalManager,
              title: c,
              children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(
                  /*BTDS*/ "This status update will be sent to 0 contacts. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(r("WAWebClickableLink.react"), {
                        onClick: l,
                        children: s._(/*BTDS*/ "Change privacy settings."),
                      }),
                    ),
                  ],
                ),
              }),
            })),
            (t[4] = l),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = c;
  },
  226,
);
