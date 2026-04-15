__d(
  "WAWebChannelStatusPlayerOverflowMenu.react",
  [
    "fbt",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebMegaphoneRefreshedIcon.react",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebTabOrder",
    "WDSIconIcMoreVert.react",
    "WDSIconIcThumbDown.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.msg,
        a = e.onAddPaidPartnershipLabel,
        i = e.onDelete,
        l = e.onOverflowMenuDismissed,
        c = e.onOverflowMenuShown,
        d = e.onReport,
        m;
      if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== d) {
        if (
          ((m = []),
          o("WAWebMsgActionCapability").canAddPaidPartnershipLabelToMsg(n))
        ) {
          var p, _;
          t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = u.jsx(
                o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
                {},
              )),
              (_ = s._(/*BTDS*/ "Add paid partnership")),
              (t[5] = p),
              (t[6] = _))
            : ((p = t[5]), (_ = t[6]));
          var f;
          (t[7] !== a
            ? ((f = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { action: a, testid: void 0, icon: p, children: _ },
                "channel-status-overflow-menu-paid-partnership",
              )),
              (t[7] = a),
              (t[8] = f))
            : (f = t[8]),
            m.push(f));
        }
        if (o("WAWebMsgGetters").getIsSentByMe(n)) {
          if (
            o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled()
          ) {
            var C, b;
            t[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = u.jsx(
                  o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                  {},
                )),
                (b = s._(/*BTDS*/ "Delete")),
                (t[13] = C),
                (t[14] = b))
              : ((C = t[13]), (b = t[14]));
            var v;
            (t[15] !== i
              ? ((v = u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  { action: i, testid: void 0, icon: C, children: b },
                  "channel-status-overflow-menu-delete",
                )),
                (t[15] = i),
                (t[16] = v))
              : (v = t[16]),
              m.push(v));
          }
        } else {
          var g, h;
          t[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = u.jsx(r("WDSIconIcThumbDown.react"), {})),
              (h = s._(/*BTDS*/ "Report")),
              (t[9] = g),
              (t[10] = h))
            : ((g = t[9]), (h = t[10]));
          var y;
          (t[11] !== d
            ? ((y = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { action: d, testid: void 0, icon: g, children: h },
                "channel-status-overflow-menu-report",
              )),
              (t[11] = d),
              (t[12] = y))
            : (y = t[12]),
            m.push(y));
        }
        ((t[0] = n), (t[1] = a), (t[2] = i), (t[3] = d), (t[4] = m));
      } else m = t[4];
      if (m.length === 0) return null;
      var S;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Menu")), (t[17] = S))
        : (S = t[17]);
      var R;
      t[18] !== m
        ? ((R = {
            menu: m,
            dirY: o("WAWebDropdown.react").DirY.BOTTOM,
            dirX: o("WAWebDropdown.react").DirX.LEFT,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            flipOnRTL: !0,
            testid: "channel-status-overflow-menu",
          }),
          (t[18] = m),
          (t[19] = R))
        : (R = t[19]);
      var L;
      return (
        t[20] !== l || t[21] !== c || t[22] !== R
          ? ((L = u.jsx(r("WDSMenuBarItem.react"), {
              icon: r("WDSIconIcMoreVert.react"),
              onClick: c,
              onClose: l,
              testid: void 0,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
              buttonType: "media",
              title: S,
              dropdownMenu: R,
            })),
            (t[20] = l),
            (t[21] = c),
            (t[22] = R),
            (t[23] = L))
          : (L = t[23]),
        L
      );
    }
    l.default = c;
  },
  226,
);
