__d(
  "useWAWebNewsletterActionListeners",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNewsletterUpdateUserSettingsAction",
    "react",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = r("useWAWebUIM")(),
        t = function (n) {
          var t = r("WAWebNewsletterCollection").get(n);
          t != null &&
            (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "newsletter_tab" }
                : s.jsx(
                    o("WAWebNewsletterTabFlowLoadable")
                      .NewsletterTabFlowLoadable,
                    {},
                  ),
              {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                transition: "slide-left",
                uim: e,
              },
            ),
            o("WAWebCmd").Cmd.openChatBottom({
              chat: t,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .NewsletterCreationFlow,
            }));
        },
        n = function (t, n) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? { descriptorType: "info_flow", chat: t, initialStep: n }
              : s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                  chat: t,
                  initialStep: n,
                }),
            {
              transition: "slide-left",
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              noFocus: !0,
            },
          );
        },
        a = function (t, n, r) {
          o(
            "WAWebNewsletterUpdateUserSettingsAction",
          ).updateNewsletterUserSettingsAction(
            t,
            n
              ? o("WAWebNewsletterModelUtils").MUTED_STATE
              : o("WAWebNewsletterModelUtils").UNMUTED_STATE,
            [
              o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting
                .AdminActivity,
            ],
            r,
          );
        };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_created_newsletter",
        t,
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_newsletter_profile",
          n,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "newsletter:mute_toggle",
          a,
        ));
    }
    l.default = u;
  },
  98,
);
