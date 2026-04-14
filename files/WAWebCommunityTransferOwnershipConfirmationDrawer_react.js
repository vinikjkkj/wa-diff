__d(
  "WAWebCommunityTransferOwnershipConfirmationDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebCommunityInformationCell.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebNetworkStatus",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTransferCommunityOwnershipAction",
    "WAWebUISpacing",
    "WAWebUserShieldIcon.react",
    "WAWebWarningIcon.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        buttonContainer: { textAlign: "x2b8uid", $$css: !0 },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function _(e) {
      var t = e.chat,
        a = e.newOwner,
        i = e.onBack,
        l = e.ref,
        c = d(),
        _ = m(!1),
        f = _[0],
        g = _[1],
        h = s._(/*BTDS*/ "Assign {contact_name} as the new owner", [
          s._param(
            "contact_name",
            u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: o("WAWebFrontendContactGetters").getFormattedName(a),
            }),
          ),
        ]),
        y = [
          {
            title: s._(/*BTDS*/ "You'll no longer be an owner"),
            description: s._(
              /*BTDS*/ "Only the owner can deactivate the community.",
            ),
            Icon: o("WAWebWarningIcon.react").WarningIcon,
            key: "no-longer-owner",
          },
          {
            title: s._(/*BTDS*/ "You'll remain a community admin"),
            description: s._(
              /*BTDS*/ "Another admin can demote you or remove you from the community.",
            ),
            Icon: o("WAWebUserShieldIcon.react").UserShieldIcon,
            key: "remain-admin",
          },
        ],
        C = f
          ? u.jsx(o("WAWebSpinner.react").Spinner, { size: 18 })
          : s._(/*BTDS*/ "Confirm"),
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!r("WAWebNetworkStatus").online) {
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Check your internet connection and try again.",
                  ),
                }),
              );
              return;
            }
            (g(!0),
              o("WAWebTransferCommunityOwnershipAction")
                .transferCommunityOwnershipAction(t, a)
                .then(function () {
                  o("WAWebCmd").Cmd.openCommunityTabbedInfo(
                    t.id,
                    void 0,
                    !1,
                    !0,
                  );
                })
                .catch(function () {
                  (g(!1),
                    o("WAWebDrawerManager").DrawerManager.closeDrawerRight());
                }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: l,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-transfer-confirmation",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Assign new owner"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            ref: c,
            tabIndex: "-1",
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: [
                p.container,
                o("WAWebUISpacing").uiPadding.top32,
                o("WAWebUISpacing").uiPadding.horiz48,
                o("WAWebUISpacing").uiPadding.bottom48,
              ],
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: t.id,
                    size: 104,
                    quality: o("WAWebDetailImage.react").DetailImageQuality
                      .High,
                    shape: o("WAWebDetailImage.react").DetailImageShape
                      .Squircle,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                    weight: "bold",
                    xstyle: [p.header, o("WAWebUISpacing").uiMargin.vert16],
                    children: h,
                  }),
                }),
                y.map(function (e) {
                  var t = e.Icon,
                    n = e.description,
                    o = e.key,
                    a = e.title;
                  return u.jsx(
                    r("WAWebCommunityInformationCell.react"),
                    { Icon: t, title: a, description: n },
                    o,
                  );
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    p.buttonContainer,
                    o("WAWebUISpacing").uiMargin.top16,
                  ],
                  children: u.jsx(o("WAWebButton.react").Button, {
                    testid: void 0,
                    type: "primary",
                    onClick: b,
                    children: C,
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
