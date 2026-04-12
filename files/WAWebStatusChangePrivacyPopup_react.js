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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.setStatusPostingPrivacyConfig,
        n = e.statusPostingPrivacyConfig,
        a = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebStatusPrivacySettingsFlowLoadable")
                .StatusPrivacySettingsFlowLoadable,
              {
                statusPostingPrivacyConfig: n,
                setStatusPostingPrivacyConfig: t,
              },
            ),
          );
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onCancel: o("WAWebModalManager").closeModalManager,
        title: s._(/*BTDS*/ "Update privacy settings"),
        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "This status update will be sent to 0 contacts. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("WAWebClickableLink.react"), {
                  onClick: a,
                  children: s._(/*BTDS*/ "Change privacy settings."),
                }),
              ),
            ],
          ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
