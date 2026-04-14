__d(
  "WAWebNewsletterLinkDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebCellFrame.react",
    "WAWebCommonNewsletterStrings",
    "WAWebCopyPasteSelectable.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumChannelLinkShareScreen",
    "WDSIconIcContentCopy.react",
    "WDSIconIcFastForward.react",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebNewsletterInviteLink",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = {
        drawer: { backgroundColor: "x1280gxy", $$css: !0 },
        header: {
          width: "x14atkfc",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          backgroundColor: "x1h3rtpe",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        optionsHeader: { textAlign: "x1yc453h", $$css: !0 },
        mouseCursor: { cursor: "x1ypdohk", $$css: !0 },
        link: { wordBreak: "x1yn0g08", $$css: !0 },
        newsletterName: {
          overflowWrap: "x1mzt3pk",
          maxHeight: "x1o16irs",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function p(t) {
      var n = t.entryPoint,
        a = t.newsletter,
        i = t.onBack,
        l = t.onClose,
        c = t.ref,
        p = n != null ? n : void 0;
      p === void 0 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Encountered null link share screen entry point",
              ])),
          )
          .tags("newsletter-logging")
          .sendLogs(
            "Null link share screen entry point in newsletter link share logging",
          );
      var _ = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink({
          chat: a,
          linkShareLoggingNavigationParams: {
            linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen")
              .CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
            linkShareScreenEntryPoint: p,
          },
        }),
        f = _[0],
        g = _[1],
        h = _[2],
        y = o("useWAWebModelValues").useOptionalModelValues(
          a.newsletterMetadata,
          ["name"],
        ),
        C = o("useWAWebModelValues").useModelValues(a.contact, [
          "id",
          "profilePicThumb",
        ]),
        b = [];
      f != null &&
        (b.push({
          icon: d.jsx(r("WDSIconIcFastForward.react"), {
            iconXstyle: m.secondaryColor,
          }),
          onClick: h,
          testid: "newsletter-info-invite-action",
          title: o("WAWebCommonNewsletterStrings").getSendLinkViaWhatsAppText(),
        }),
        document.queryCommandSupported("copy") &&
          b.push({
            icon: d.jsx(r("WDSIconIcContentCopy.react"), {
              iconXstyle: m.secondaryColor,
            }),
            onClick: g,
            testid: "newsletter-info-copy-link-action",
            title: o("WAWebCommonNewsletterStrings").getCopyLinkText(),
          }));
      var v = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            (u || (u = r("stylex"))).props(
              m.header,
              o("WAWebUISpacing").uiMargin.all15,
            ),
            {
              children: d.jsx(r("WAWebCellFrame.react"), {
                className: u(
                  o("WAWebUISpacing").uiMargin.vert4,
                  o("WAWebUISpacing").uiMargin.horiz2,
                ),
                image: d.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: C.id,
                  quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                  size: 56,
                }),
                primary: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                  xstyle: m.newsletterName,
                  children: y == null ? void 0 : y.name,
                }),
                secondary: d.jsx(
                  o("WAWebCopyPasteSelectable.react").SelectableLink,
                  {
                    onClick: g,
                    selectable: !0,
                    xstyle: m.mouseCursor,
                    children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                      color: "link",
                      testid: void 0,
                      textWrap: "wrap",
                      xstyle: m.link,
                      children: f,
                    }),
                  },
                ),
                theme: "newsletter-link-cell",
              }),
            },
          ),
        ),
        S = d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
          color: "primary",
          marginBottom: 20,
          marginEnd: 32,
          marginStart: 32,
          marginTop: 16,
          xstyle: m.optionsHeader,
          children: o(
            "WAWebCommonNewsletterStrings",
          ).getChannelLinkInformationText(),
        }),
        R = d.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: [
            o("WAWebUISpacing").uiMargin.vert4,
            o("WAWebUISpacing").uiMargin.horiz30,
          ],
          children: d.jsx("div", { className: "xh8yej3 xjm9jq1 x3x0x6p" }),
        }),
        L = i ? { onBack: i } : { onCancel: l };
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: c,
        testid: void 0,
        theme: "striped",
        tsNavigationData: { surface: "channel-link" },
        xstyle: m.drawer,
        children: [
          d.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              {
                title: s._(/*BTDS*/ "Channel link"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              },
              L,
              { rtlFixIfOnDarwin: !0, testid: void 0 },
            ),
          ),
          v,
          S,
          R,
          b.map(function (e, t) {
            var n = e.icon,
              r = e.onClick,
              a = e.testid,
              i = e.title;
            return d.jsx(
              o("WAWebDrawerButton.react").DrawerButtonSimple,
              { divider: !1, icon: n, onClick: r, testid: void 0, children: i },
              a + "-" + t,
            );
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
