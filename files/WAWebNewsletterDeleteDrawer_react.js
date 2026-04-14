__d(
  "WAWebNewsletterDeleteDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDeleteIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterDeleteModal.react",
    "WAWebNewsletterDrawerBodyParagraph.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterImageWithAction.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebText_DONOTUSE.react",
    "WAWebWamEnumInteractionSurface",
    "WDSIconIcHistory.react",
    "cr:640",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1nhvcw1",
          paddingTop: "xijc0j3",
          paddingInlineEnd: "x15zmtp0",
          paddingBottom: "xq1608w",
          paddingInlineStart: "x1oiqv2n",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        buttonContainer: { textAlign: "x2b8uid", $$css: !0 },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function _(e) {
      var t = e.chat,
        a = e.onBack,
        i = e.onCancel,
        l = e.ref,
        c = o("useWAWebModelValues").useModelValues(t, [
          "newsletterMetadata",
          "contact",
        ]),
        _ = o("useWAWebModelValues").useModelValues(c.contact, ["id", "name"]),
        f = o("useWAWebModelValues").useOptionalModelValues(
          c.newsletterMetadata,
          ["suspended", "wamoSubPlanId"],
        );
      m(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .DELETE_CHANNEL_CONFIRMATION_SCREEN,
        );
      }, []);
      var g = s._(/*BTDS*/ 'Delete "{channel-name}"?', [
          s._param(
            "channel-name",
            u.jsx(o("WAWebEmojiText.react").EmojiText, { text: _.name }),
          ),
        ]),
        h = [];
      (h.push({
        title: s._(/*BTDS*/ "Channel will be permanently deleted"),
        description: s._(/*BTDS*/ "You won't be able to recover the channel."),
        Icon: o("WAWebDeleteIcon.react").DeleteIcon,
        key: "channel-will-be-permanently-deleted",
      }),
        n("cr:640") != null &&
        o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(f) &&
        o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()
          ? ((f == null ? void 0 : f.suspended) !== !0 &&
              h.push(
                n(
                  "cr:640",
                ).getNewsletterDeleteDialogSuspendedWamoSubWarningMessageContent(),
              ),
            h.push(
              n(
                "cr:640",
              ).getNewsletterDeleteDialogWamoSubWarningMessageContent(),
            ))
          : (f == null ? void 0 : f.suspended) !== !0 &&
            h.push({
              title: s._(/*BTDS*/ "Followers can see past activity"),
              description: s._(
                /*BTDS*/ "Past channel activity will stay on your followers' devices.",
              ),
              Icon: r("WDSIconIcHistory.react"),
              key: "followers-can-see-past-activity",
            }));
      var y = d(
          function () {
            (r("WAWebEnforcementActionLogging").isSessionStarted() &&
              r("WAWebEnforcementActionLogging").logDeleteChannelConfirmClick(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebNewsletterDeleteModal.react"), { chat: t }),
              ));
          },
          [t],
        ),
        C = d(
          function () {
            (r("WAWebEnforcementActionLogging").logBackClick(),
              a == null || a());
          },
          [a],
        ),
        b = d(
          function () {
            (r("WAWebEnforcementActionLogging").logDismissDrawerClick(),
              i == null || i());
          },
          [i],
        );
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: l,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "newsletter-delete" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o("WAWebCommonNewsletterStrings").getDeleteChannelText(),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: C,
            onCancel: b,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: p.container,
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(r("WAWebNewsletterImageWithAction.react"), {
                    chat: t,
                    actionTheme: "danger",
                    Icon: o("WAWebDeleteIcon.react").DeleteIcon,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                    xstyle: [p.header, p.marginTop16, p.marginBottom16],
                    size: "24",
                    color: "dark",
                    weight: "medium",
                    children: g,
                  }),
                }),
                h.map(function (e) {
                  var t = e.Icon,
                    n = e.description,
                    o = e.key,
                    a = e.title;
                  return u.jsx(
                    r("WAWebNewsletterDrawerBodyParagraph.react"),
                    {
                      icon: u.jsx(t, { width: 24, height: 24, xstyle: p.icon }),
                      title: a,
                      description: n,
                    },
                    o,
                  );
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: [p.buttonContainer, p.marginTop16],
                  children: u.jsx(o("WAWebButton.react").Button, {
                    testid: void 0,
                    type: "solid-warning",
                    onClick: y,
                    children: s._(/*BTDS*/ "Delete"),
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
