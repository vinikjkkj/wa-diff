__d(
  "WAWebConsumerTransparencyModalDialog.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCtwaConsumerDisclosureWamEvent",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSettingsSecurityIcon.react",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebWamEnumDisclosureAction",
    "WAWebWamEnumDisclosureType",
    "WAWebWdsPictoMetaDataChevronIcon.react",
    "WDSIconIcVisibilityOff.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        fullWidth: { width: "xh8yej3", $$css: !0 },
        bulletIconColorNew: { color: "xhslqc4", $$css: !0 },
      };
    function m() {
      o("WAWebModalManager").ModalManager.open(u.jsx(_, {}));
    }
    function p() {
      var e = u.jsx(
          o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon,
          { height: 24, width: 24, xstyle: d.bulletIconColorNew },
        ),
        t = e,
        n = u.jsx(r("WDSIconIcVisibilityOff.react"), {
          height: 24,
          width: 24,
          xstyle: d.bulletIconColorNew,
        }),
        a = u.jsx(
          o("WAWebWdsPictoMetaDataChevronIcon.react")
            .WdsPictoMetaDataChevronIcon,
          { width: 88, height: 88 },
        ),
        i = s._(
          /*BTDS*/ "This icon means Meta receives limited info, like the number and types of interactions with a business chat",
        ),
        l =
          o("WAWebBizGatingUtils").isCTWATosFilteringEnabled() &&
          o("WAWebBizGatingUtils").showCTWACCICompliantUI();
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            xstyle: [d.fullWidth, o("WAWebUISpacing").uiMargin.bottom8],
            children: a,
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            size: "20",
            color: "dark",
            weight: "medium",
            xstyle: o("WAWebUISpacing").uiMargin.top12,
            children: s._(
              /*BTDS*/ "About chats that start from Facebook or Instagram ads",
            ),
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            size: "16",
            weight: "normal",
            color: "dark",
            xstyle: o("WAWebUISpacing").uiMargin.top16,
            children: s._(
              /*BTDS*/ "When you start a chat with a business after interacting with their ad on Facebook or Instagram, WhatsApp's parent company Meta receives limited info. This helps improve Meta ads and your experience on those apps. {=m2}",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getConsumerTransparencyHCAUrl(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ],
            ),
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.top36,
            children: [
              n,
              u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "13",
                color: "dark",
                xstyle: o("WAWebUISpacing").uiMargin.start24,
                children: [
                  s._(
                    /*BTDS*/ "WhatsApp never shares your message content or calls",
                  ),
                  l && ".",
                ],
              }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.top20,
            children: [
              t,
              u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "13",
                color: "dark",
                xstyle: o("WAWebUISpacing").uiMargin.start24,
                children: [i, l && "."],
              }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.top20,
            children: [
              u.jsx(o("WAWebSettingsSecurityIcon.react").SettingsSecurityIcon, {
                height: 24,
                width: 24,
                xstyle: d.bulletIconColorNew,
              }),
              u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "13",
                color: "dark",
                xstyle: o("WAWebUISpacing").uiMargin.start24,
                children: [
                  s._(
                    /*BTDS*/ "You can always stop chatting with a business or block them",
                  ),
                  l &&
                    u.jsxs(u.Fragment, {
                      children: [
                        ". ",
                        s._(
                          /*BTDS*/ "After you block a business, Meta will no longer receive limited info.",
                        ),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return (
        c(function () {
          new (o(
            "WAWebCtwaConsumerDisclosureWamEvent",
          ).CtwaConsumerDisclosureWamEvent)({
            ctwaConsumerDisclosureVersion: 1,
            disclosureAction: o("WAWebWamEnumDisclosureAction")
              .DISCLOSURE_ACTION.SCREEN_VIEW,
            disclosureType: o("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE
              .INFO,
          }).commit();
        }, []),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          testid: void 0,
          type: o("WAWebModal.react").ModalTheme.UpdatedDataSharing,
          onOK: o("WAWebModalManager").closeModalManager,
          okText: s._(/*BTDS*/ "Close"),
          onOverlayClick: o("WAWebModalManager").closeModalManager,
          children: u.jsx(p, {}),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.showConsumerTransparencyModalDialog = m),
      (l.ConsumerTransparencyModalDialog = _));
  },
  226,
);
