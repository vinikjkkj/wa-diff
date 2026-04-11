__d(
  "WAWebSafetyToolsModal.react",
  [
    "fbt",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebCellV2.react",
    "WAWebChevronIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebContactsIcon.react",
    "WAWebDialpadIcon.react",
    "WAWebExternalLink.react",
    "WAWebFMXGatingUtils",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebPsFmxActionWamEvent",
    "WAWebReportContactPopup.react",
    "WAWebSettingsBlockedIcon.react",
    "WAWebSpamConstants",
    "WAWebText.react",
    "WAWebThumbsDownIcon.react",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        criticalColor: { color: "x30a034", $$css: !0 },
      };
    function d(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(p, { chat: t, contact: e }),
      );
    }
    function m(e) {
      var t = e.trusted
        ? o("WAWebSpamConstants").SpamFlow.ChatFmxCardSafetyToolsReport
        : o("WAWebSpamConstants").SpamFlow
            .ChatFmxCardSafetyToolsReportSuspicious;
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebReportContactPopup.react"), { chat: e, spamFlow: t }),
      );
    }
    function p(e) {
      var t = e.chat,
        n = e.contact,
        a = function (t) {
          o("WAWebFMXGatingUtils").fmxLoggingEnabled() &&
            new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
              fmxEvent: t,
              fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                .SAFETY_TOOLS,
            }).commit();
        },
        i = function () {
          (a(o("WAWebWamEnumFmxEvent").FMX_EVENT.LEARN_MORE),
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getSafetyToolsFaqUrl(),
            ));
        },
        l = function () {
          (a(o("WAWebWamEnumFmxEvent").FMX_EVENT.REPORT), m(t));
        },
        d = function () {
          (a(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK),
            o("WAWebBlockContactUtils").handleBlock(
              t,
              t.trusted
                ? o("WAWebBlockContants").BlockEntryPoint
                    .ChatFmxCardSafetyToolsBlock
                : o("WAWebBlockContants").BlockEntryPoint
                    .ChatFmxCardSafetyToolsBlockSuspicious,
            ));
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "fmx-safety-tools" },
        cancelText: r("WAWebFbtCommon")("Learn more"),
        okText: s._(/*BTDS*/ "Back to chat"),
        onCancel: i,
        onOK: o("WAWebModalManager").closeModalManager,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebText.react").WAWebTextLarge, {
              children: s._(/*BTDS*/ "Safety tools"),
            }),
            u.jsx(o("WAWebText.react").WAWebTextTitle, {
              paddingTop: 16,
              children: s._(/*BTDS*/ "Here's what you can do"),
            }),
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              paddingTop: 8,
              children: s._(
                /*BTDS*/ "When receiving messages from an unknown sender you can take any of these actions. They won't be notified if you do.",
              ),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              alignSelf: "stretch",
              gap: 4,
              padding: [16, 0],
              children: [
                !n.isContactBlocked &&
                  u.jsx(r("WAWebCellV2.react"), {
                    colorScheme: "lightest",
                    detailLeft: u.jsx(
                      o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
                      { iconXstyle: c.criticalColor },
                    ),
                    detailRight: u.jsx(
                      o("WAWebChevronIcon.react").ChevronIcon,
                      { directional: !0 },
                    ),
                    onClick: d,
                    primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                      color: "critical",
                      children: s._(/*BTDS*/ "Block contact"),
                    }),
                    size: "medium",
                  }),
                u.jsx(r("WAWebCellV2.react"), {
                  colorScheme: "lightest",
                  detailLeft: u.jsx(
                    o("WAWebThumbsDownIcon.react").ThumbsDownIcon,
                    { iconXstyle: c.criticalColor },
                  ),
                  detailRight: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    directional: !0,
                  }),
                  onClick: l,
                  primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    color: "critical",
                    children: s._(/*BTDS*/ "Report contact"),
                  }),
                  size: "medium",
                }),
              ],
            }),
            u.jsx(o("WAWebText.react").WAWebTextTitle, {
              children: s._(/*BTDS*/ "Staying safe in chats"),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              alignSelf: "stretch",
              paddingTop: 8,
              children: [
                u.jsx(r("WAWebCellV2.react"), {
                  colorScheme: "lightest",
                  detailLeft: u.jsx(o("WAWebContactsIcon.react").ContactsIcon, {
                    iconXstyle: c.secondaryColor,
                  }),
                  interactive: !1,
                  primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Profile name and photo"),
                  }),
                  secondary: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    textWrap: "wrap",
                    children: s._(
                      /*BTDS*/ "Names and photos set by the sender. WhatsApp does not verify this information.",
                    ),
                  }),
                  size: "medium",
                }),
                u.jsx(r("WAWebCellV2.react"), {
                  colorScheme: "lightest",
                  detailLeft: u.jsx(o("WAWebDialpadIcon.react").DialpadIcon, {
                    iconXstyle: c.secondaryColor,
                  }),
                  interactive: !1,
                  primary: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Phone number"),
                  }),
                  secondary: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    textWrap: "wrap",
                    children: s._(
                      /*BTDS*/ "Make sure that the country code of the number looks familiar.",
                    ),
                  }),
                  size: "medium",
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.displaySafetyToolsModal = d));
  },
  226,
);
