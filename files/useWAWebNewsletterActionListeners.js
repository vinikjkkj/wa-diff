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
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useWAWebUIM")(),
        n;
      e[0] !== t
        ? ((n = function (n) {
            var e = r("WAWebNewsletterCollection").get(n);
            e != null &&
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
                  uim: t,
                },
              ),
              o("WAWebCmd").Cmd.openChatBottom({
                chat: e,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterCreationFlow,
              }));
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n,
        i = d,
        l = c;
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_created_newsletter",
        a,
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_newsletter_profile",
          i,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "newsletter:mute_toggle",
          l,
        ));
    }
    function c(e, t, n) {
      o(
        "WAWebNewsletterUpdateUserSettingsAction",
      ).updateNewsletterUserSettingsAction(
        e,
        t
          ? o("WAWebNewsletterModelUtils").MUTED_STATE
          : o("WAWebNewsletterModelUtils").UNMUTED_STATE,
        [
          o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting
            .AdminActivity,
        ],
        n,
      );
    }
    function d(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "info_flow", chat: e, initialStep: t }
          : s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
              chat: e,
              initialStep: t,
            }),
        {
          transition: "slide-left",
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          noFocus: !0,
        },
      );
    }
    l.default = u;
  },
  98,
);
