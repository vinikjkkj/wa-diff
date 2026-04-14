__d(
  "WAWebGalaxyFlowsNavBarUtils.react",
  [
    "fbt",
    "WAWebActionMenuItem.react",
    "WAWebClickable.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownV2.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebReportMsgPopup.react",
    "WAWebSpamConstants",
    "WDSIconIcClose.react",
    "WDSIconIcMoreVert.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = { LEARN_MORE: 0x77cb899945874, HELP: 301407378887650 },
      m = 197,
      p = {
        contextMenuIconContainer: {
          borderStartStartRadius: "xvs2etk",
          borderStartEndRadius: "xg3wpu6",
          borderEndEndRadius: "x1jwbhkm",
          borderEndStartRadius: "xgg4q86",
          height: "x1vqgdyp",
          width: "x100vrsf",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flex: "x1okw0bk",
          cursor: "x1ypdohk",
          ":hover_backgroundColor": "x1j1k1sc",
          $$css: !0,
        },
      };
    function _(e) {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getFullUrl(e),
      );
    }
    function f(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebReportMsgPopup.react"), {
          msg: e.unsafe(),
          spamFlow:
            o("WAWebSpamConstants").SpamFlow.GalaxyFlowsContextMenuReport,
        }),
      );
    }
    function g(e) {
      var t = e.isResponseFlow,
        n = e.msg,
        a = e.onCancel,
        i = c(null),
        l = c(null),
        g = s._(/*BTDS*/ "Menu"),
        h = s._(/*BTDS*/ "Close"),
        y = u.jsx(o("WAWebClickable.react").Clickable, {
          ref: i,
          xstyle: p.contextMenuIconContainer,
          title: h,
          ariaLabel: h,
          onClick: a,
          children: u.jsx(r("WDSIconIcClose.react"), {}),
        }),
        C = u.jsxs(u.Fragment, {
          children: [
            !t &&
              u.jsx(o("WAWebClickable.react").Clickable, {
                ref: l,
                xstyle: p.contextMenuIconContainer,
                title: g,
                ariaLabel: g,
                children: u.jsx(r("WDSIconIcMoreVert.react"), {}),
              }),
            u.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
              minWidth: m,
              target: l,
              alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
              position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
              children: [
                u.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                  optionId: "help",
                  primary: s._(/*BTDS*/ "Help"),
                  onSelect: function () {
                    return _(d.HELP);
                  },
                }),
                u.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                  optionId: "report",
                  primary: s._(/*BTDS*/ "Report"),
                  onSelect: function () {
                    return f(n);
                  },
                }),
              ],
            }),
          ],
        });
      return u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
        testid: void 0,
        type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "end",
          justify: "end",
          gap: 12,
          children: [C, y],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.GALAXY_FLOWS_ARTICLE_IDS = d),
      (l.openHelpCenterArticle = _),
      (l.reportGalaxyFlow = f),
      (l.WAWebGalaxyFlowsNavBar = g));
  },
  226,
);
