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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        n = e.isResponseFlow,
        a = e.msg,
        i = e.onCancel,
        l = c(null),
        d = c(null),
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Menu")), (t[0] = _))
        : (_ = t[0]);
      var g = _,
        y;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Close")), (t[1] = y))
        : (y = t[1]);
      var C = y,
        b;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(r("WDSIconIcClose.react"), {})), (t[2] = b))
        : (b = t[2]);
      var v;
      t[3] !== i
        ? ((v = u.jsx(o("WAWebClickable.react").Clickable, {
            ref: l,
            xstyle: p.contextMenuIconContainer,
            title: C,
            ariaLabel: C,
            onClick: i,
            children: b,
          })),
          (t[3] = i),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      t[5] !== n
        ? ((R =
            !n &&
            u.jsx(o("WAWebClickable.react").Clickable, {
              ref: d,
              xstyle: p.contextMenuIconContainer,
              title: g,
              ariaLabel: g,
              children: u.jsx(r("WDSIconIcMoreVert.react"), {}),
            })),
          (t[5] = n),
          (t[6] = R))
        : (R = t[6]);
      var L;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
            optionId: "help",
            primary: s._(/*BTDS*/ "Help"),
            onSelect: h,
          })),
          (t[7] = L))
        : (L = t[7]);
      var E;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Report")), (t[8] = E))
        : (E = t[8]);
      var k;
      t[9] !== a
        ? ((k = u.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
            minWidth: m,
            target: d,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            children: [
              L,
              u.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
                optionId: "report",
                primary: E,
                onSelect: function () {
                  return f(a);
                },
              }),
            ],
          })),
          (t[9] = a),
          (t[10] = k))
        : (k = t[10]);
      var I;
      t[11] !== R || t[12] !== k
        ? ((I = u.jsxs(u.Fragment, { children: [R, k] })),
          (t[11] = R),
          (t[12] = k),
          (t[13] = I))
        : (I = t[13]);
      var T = I,
        D;
      return (
        t[14] !== S || t[15] !== T
          ? ((D = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "end",
                justify: "end",
                gap: 12,
                children: [T, S],
              }),
            })),
            (t[14] = S),
            (t[15] = T),
            (t[16] = D))
          : (D = t[16]),
        D
      );
    }
    function h() {
      return _(d.HELP);
    }
    ((l.GALAXY_FLOWS_ARTICLE_IDS = d),
      (l.openHelpCenterArticle = _),
      (l.reportGalaxyFlow = f),
      (l.WAWebGalaxyFlowsNavBar = g));
  },
  226,
);
