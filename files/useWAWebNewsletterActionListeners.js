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
    "WAWebNewsletterTabFlowLoadable",
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
        ));
    }
    l.default = u;
  },
  98,
);
