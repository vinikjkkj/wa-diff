__d(
  "WAWebNewsletterMessageAdminContextCard.react",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebCameraV2Icon.react",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebNewsletterInfoPhoto.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebProfilePicThumbCollection",
    "WAWebText.react",
    "WAWebWamEnumAdminFlowType",
    "WAWebWamEnumChannelLinkShareEntryPoint",
    "react",
    "useWAWebModelValues",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        body: { textAlign: "x2b8uid", $$css: !0 },
        title: {
          maxWidth: "x17fpy1y",
          boxSizing: "x9f619",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
        marginHoriz20: {
          marginInlineStart: "x6pxu1d",
          marginInlineEnd: "xd6izgl",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        marginVert24: {
          marginTop: "x9u28bd",
          marginBottom: "x14mdic9",
          $$css: !0,
        },
        paddingHoriz20: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      d = 850;
    function m(e) {
      var t,
        n = e.chat,
        a = o("useWAWebModelValues").useOptionalModelValues(
          n.newsletterMetadata,
          ["isSuspendedOrTerminated", "name", "description", "membershipType"],
        ),
        i = new (o(
          "WAWebNewsletterAdminFunnelLogging",
        ).NewsletterAdminFunnelLogger)(
          o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT,
        ),
        l = r("useWAWebWindowSize")(),
        m = l.width,
        p = u(
          function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "info_flow",
                    chat: n,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                    newsletterLinkShareScreenEntryPoint: o(
                      "WAWebWamEnumChannelLinkShareEntryPoint",
                    ).CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD,
                  }
                : s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: n,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                    newsletterLinkShareScreenEntryPoint: o(
                      "WAWebWamEnumChannelLinkShareEntryPoint",
                    ).CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD,
                  }),
              {
                transition: "slide-left",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                noFocus: !0,
              },
            );
          },
          [n],
        ),
        _ = u(
          function () {
            (o("WAWebCmd").Cmd.editNewsletterDescription(),
              o("WAWebCmd").Cmd.chatInfoDrawer(n, {
                focusNewsletterDescriptionOnMount: !0,
              }));
          },
          [n],
        ),
        f = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
          n.id,
        ),
        g =
          m <= d
            ? o("WAWebFlex.react").FlexColumn
            : o("WAWebFlex.react").FlexRow,
        h = m <= d ? { rowGap: 8, align: "center" } : {};
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        rowGap: 12,
        xstyle: [c.body, c.marginHoriz20, c.marginVert24],
        align: "center",
        testid: void 0,
        children: [
          (f == null ? void 0 : f.img) != null
            ? s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: n.id,
                shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                size: 88,
                showOutline: !0,
                testId: "newsletter-admin-context-card-readonly-photo",
              })
            : s.jsx(r("WAWebNewsletterInfoPhoto.react"), {
                chat: n,
                readOnly:
                  (a == null ? void 0 : a.isSuspendedOrTerminated) === !0 ||
                  !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(a),
                HoverIcon: o("WAWebCameraV2Icon.react").CameraV2Icon,
                adminFunnelLogger: i,
                showAddIconOverlay: !1,
                size: 88,
                testId: "newsletter-admin-context-card-photo-picker",
              }),
          s.jsx(o("WAWebText.react").WAWebTextTitle, {
            color: "primary",
            xstyle: [c.title, c.paddingHoriz20],
            testid: void 0,
            children: o(
              "WAWebCommonNewsletterStrings",
            ).startGrowingChannelNameText(
              (t = a == null ? void 0 : a.name) != null ? t : "",
            ),
          }),
          s.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "secondary",
            wrap: "wrap",
            testid: void 0,
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getStartedWithChannelText(),
          }),
          s.jsxs(
            g,
            babelHelpers.extends({ columnGap: 8, marginTop: 8 }, h, {
              children: [
                ((a == null ? void 0 : a.description) == null ||
                  (a == null ? void 0 : a.description) === "") &&
                  s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                    onClick: _,
                    shadowOnHover: !1,
                    testid: void 0,
                    children: o(
                      "WAWebCommonNewsletterStrings",
                    ).getAddDescriptionButtonText(),
                  }),
                o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                  n.newsletterMetadata,
                ) &&
                  s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                    onClick: p,
                    shadowOnHover: !1,
                    testid: void 0,
                    children: o(
                      "WAWebCommonNewsletterStrings",
                    ).getShareChannelLinkButtonText(),
                  }),
              ],
            }),
          ),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
