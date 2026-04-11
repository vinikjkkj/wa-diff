__d(
  "WAWebNewsletterExecApiCmd",
  [
    "Promise",
    "WALogger",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDirectoryFlowLoadable",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterNotAvailableModal.react",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNewsletterTabFlowStep",
    "WAWebOpenNewsletterCreationFlow",
    "WAWebOpenNewsletterDirectory",
    "WAWebOpenNewsletterPreviewChat",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var r = o(
        "WAWebNewsletterExtendedGatingUtils",
      ).getNewsletterDeeplinkGating();
      switch (r) {
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .Enabled:
          switch (t.type) {
            case "view":
              return (
                o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
                  identifier: t.identifier,
                  chatEntryPoint: t.chatEntryPoint,
                  serverMessageId: t.serverId,
                  discoverySurface: t.discoverySurface,
                }),
                (s || (s = n("Promise"))).resolve()
              );
            case "create":
              return (
                o("WAWebOpenNewsletterCreationFlow").openNewsletterCreationFlow(
                  {
                    tosAcceptCallback: function (t) {
                      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                        c.jsx(
                          o("WAWebNewsletterTabFlowLoadable")
                            .NewsletterTabFlowLoadable,
                          {
                            initialStep: o("WAWebNewsletterTabFlowStep")
                              .NewsletterTabFlowStep.CreateNewsletter,
                            adminFunnelLogger: t,
                          },
                        ),
                        {
                          focusType: o("WAWebKeyboardTabUtils").FocusType
                            .TABBABLE,
                        },
                      );
                    },
                  },
                ),
                (s || (s = n("Promise"))).resolve()
              );
            case "directory":
              return (
                o("WAWebOpenNewsletterDirectory").openNewsletterDirectory({
                  tosAcceptCallback: function () {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                      c.jsx(
                        o("WAWebNewsletterDirectoryFlowLoadable")
                          .NewsletterDirectoryFlowLoadable,
                        {
                          directoryEntryPoint: o(
                            "WAWebWamEnumChannelDirectoryEntryPoint",
                          ).CHANNEL_DIRECTORY_ENTRY_POINT.DEEP_LINK,
                        },
                      ),
                      {
                        focusType: o("WAWebKeyboardTabUtils").FocusType
                          .TABBABLE,
                      },
                    );
                  },
                }),
                (s || (s = n("Promise"))).resolve()
              );
            default:
              return (
                t.type,
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[execNewsletterApiCmd] Unsupported type ",
                      "",
                    ])),
                  t.type,
                ),
                (s || (s = n("Promise"))).resolve()
              );
          }
        default:
          return (m(r), (s || (s = n("Promise"))).resolve());
      }
    }
    function m(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebNewsletterNotAvailableModal.react"), { gating: e }),
      );
    }
    l.execNewsletterApiCmd = d;
  },
  98,
);
