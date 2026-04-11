__d(
  "WAWebStatusPrivacySettingsModalFlow.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebModalManager",
    "WAWebStatusPrivacySettingUtils",
    "WAWebStatusPrivacySettingsModal.react",
    "WAWebStatusSelectPrivacyContactsModal.react",
    "WAWebUserPrefsStatusType",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = n("$InternalEnum").Mirrored([
        "StatusPrivacySettingModal",
        "StatusPrivacySettingContactsSelection",
      ]);
    function d(e) {
      var t,
        n,
        a = e.setStatusPostingPrivacyConfig,
        i = e.statusPostingPrivacyConfig,
        l = (t = i == null ? void 0 : i.allowList) != null ? t : [],
        d = (n = i == null ? void 0 : i.denyList) != null ? n : [],
        m = u(null),
        p = m[0],
        _ = m[1],
        f = function () {
          o("WAWebModalManager").ModalManager.existsSupportModal(function (e) {
            e
              ? o("WAWebModalManager").ModalManager.closeSupportModal()
              : o("WAWebModalManager").ModalManager.close();
          });
        },
        g = function () {
          C.pop("flow-transition-box-size-drawer-pop");
        },
        h = o("useWAWebFlow").useFlow(c.StatusPrivacySettingModal, {
          transitions: o("useWAWebFlow").FlowTransitions.Modal,
          onEnd: f,
        }),
        y = h[0],
        C = h[1];
      if (C.step == null) return null;
      var b =
        C.step === c.StatusPrivacySettingModal
          ? s.jsx(r("WAWebStatusPrivacySettingsModal.react"), {
              onClose: f,
              onSelectStatusPrivacyOption: function (t) {
                (_(t),
                  t ===
                  o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
                    ? (o("WAWebStatusPrivacySettingUtils").handleContactClick(
                        a,
                        l,
                        d,
                      ),
                      f())
                    : C.push(
                        c.StatusPrivacySettingContactsSelection,
                        "flow-transition-box-size-drawer-push",
                      ));
              },
              statusPostingPrivacyConfig: i,
            })
          : C.step === c.StatusPrivacySettingContactsSelection
            ? s.jsx(r("WAWebStatusSelectPrivacyContactsModal.react"), {
                updatedSettings: r("WANullthrows")(p),
                statusPostingPrivacyConfig: i,
                setStatusPostingPrivacyConfig: a,
                onBack: g,
              })
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    C.step,
                );
              })();
      return s.jsx(y, { flow: C, children: b });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
