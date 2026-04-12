__d(
  "WAWebNewsletterIntegritySection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebCommonNewsletterStrings",
    "WAWebContactCollection",
    "WAWebDeleteIcon.react",
    "WAWebExitIcon.react",
    "WAWebModalManager",
    "WAWebNewsletterDismissAdminPopup.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebPersonArrowIcon.react",
    "WAWebReportNewsletterPopup.react",
    "WAWebSpamConstants",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcThumbDown.react",
    "WDSText.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        dangerIcon: { color: "xqnyt8g", $$css: !0 },
        accentIcon: { color: "xo1mcw5", $$css: !0 },
      };
    function m(e) {
      var t = e.chat,
        n = e.onDeleteNewsletter,
        r = e.onTransferNewsletterOwnership,
        a = e.xstyle,
        i = u.jsx(_, { chat: t }),
        l = u.jsx(p, { chat: t }),
        s = u.jsx(g, { chat: t, onTransferOwnership: r }),
        c = u.jsx(h, { chat: t, onDeleteNewsletter: n }),
        d = u.jsx(f, { chat: t });
      return u.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
        { xstyle: a, children: [i, d, s, c, l] },
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["suspended", "terminated", "isSuspendedOrTerminated"],
        );
      if (n != null && n.isSuspendedOrTerminated) return null;
      var a = s._(/*BTDS*/ "Report channel"),
        i = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebReportNewsletterPopup.react"), {
              chat: t,
              spamFlow: o("WAWebSpamConstants").SpamFlow.NewsletterInfoReport,
            }),
          );
        };
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          testid: void 0,
          icon: u.jsx(r("WDSIconIcThumbDown.react"), {
            iconXstyle: d.dangerIcon,
          }),
          onClick: i,
          title: u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            {
              title: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "secondaryNegativeEmphasized",
                children: a,
              }),
            },
          ),
        },
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["membershipType"],
        ),
        a = s._(/*BTDS*/ "Unfollow channel"),
        i = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                {
                  chat: t,
                  loggingOptions: {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_PROFILE,
                  },
                },
              ),
            );
          },
          [t],
        );
      return o("WAWebNewsletterMembershipUtil").iAmSubscriber(n)
        ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
            testid: void 0,
            icon: u.jsx(o("WAWebExitIcon.react").ExitIcon, {
              directional: !0,
              iconXstyle: d.dangerIcon,
            }),
            onClick: i,
            title: u.jsx(
              o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
              {
                title: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "secondaryNegativeEmphasized",
                  children: a,
                }),
              },
            ),
          })
        : null;
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["membershipType"],
        ),
        a = c(
          function () {
            var e = o(
              "WAWebContactCollection",
            ).ContactCollection.getMeContact();
            e != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebNewsletterDismissAdminPopup.react"), {
                  newsletter: t,
                  isMe: !0,
                  contact: e,
                }),
              );
          },
          [t],
        );
      if (
        !o("WAWebNewsletterMembershipUtil").iAmAdmin(n) ||
        !o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()
      )
        return null;
      var i = s._(/*BTDS*/ "Dismiss yourself as admin");
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          testid: void 0,
          icon: u.jsx(r("WDSIconIcDoNotDisturbOn.react"), {
            iconXstyle: d.dangerIcon,
          }),
          onClick: a,
          title: u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            {
              title: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "secondaryNegativeEmphasized",
                children: i,
              }),
            },
          ),
        },
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        n = e.onTransferOwnership,
        a = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["membershipType", "suspended"],
        );
      return o("WAWebNewsletterMembershipUtil").iAmOwner(a) &&
        !(a != null && a.suspended)
        ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
            testid: void 0,
            icon: u.jsx(o("WAWebPersonArrowIcon.react").PersonArrowIcon, {
              directional: !0,
              iconXstyle: d.accentIcon,
            }),
            onClick: n,
            title: u.jsx(
              o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
              {
                title: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentActionEmphasized",
                  children: o(
                    "WAWebCommonNewsletterStrings",
                  ).getNewsletterTransferOwnershipText(),
                }),
              },
            ),
          })
        : null;
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chat,
        n = e.onDeleteNewsletter,
        a = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["membershipType"],
        );
      return o("WAWebNewsletterMembershipUtil").iAmOwner(a)
        ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
            testid: void 0,
            icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
              directional: !0,
              iconXstyle: d.dangerIcon,
            }),
            onClick: n,
            title: u.jsx(
              o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
              {
                title: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "secondaryNegativeEmphasized",
                  children: o(
                    "WAWebCommonNewsletterStrings",
                  ).getDeleteChannelText(),
                }),
              },
            ),
          })
        : null;
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
