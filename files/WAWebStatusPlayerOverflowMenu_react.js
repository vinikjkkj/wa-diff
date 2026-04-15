__d(
  "WAWebStatusPlayerOverflowMenu.react",
  [
    "fbt",
    "WAWebAccountLinkingConstants",
    "WAWebContactGetters",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingConfig",
    "WAWebCrosspostingGatingUtils",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebMsgGetters",
    "WAWebMuteNotificationsRefreshedIcon.react",
    "WAWebSettingsGetters",
    "WAWebStatusGatingUtils",
    "WAWebTabOrder",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WDSIconIcDownload.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcThumbDown.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.contact,
        a = e.crosspostingInfo,
        i = e.msg,
        l = e.onCrosspost,
        c = e.onDelete,
        d = e.onDownload,
        m = e.onMuteOrUnmute,
        p = e.onOverflowMenuDismissed,
        _ = e.onOverflowMenuShown,
        f = e.onReport,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [
            o("WAWebSettingsGetters").getIsFBLinked,
            o("WAWebSettingsGetters").getIsIGLinked,
            o("WAWebSettingsGetters").getLinkState,
          ]),
          (t[0] = g))
        : (g = t[0]);
      var h = o("useWAWebSettingsValues").useSettingsValues(g),
        y = h[0],
        C = h[1],
        b = h[2],
        v = function (t) {
          return (
            o("WAWebContactGetters").getIsMe(t) &&
            b === o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
            o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled()
          );
        },
        S = [],
        R,
        L;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(r("WDSIconIcThumbDown.react"), {})),
          (L = s._(/*BTDS*/ "Report")),
          (t[1] = R),
          (t[2] = L))
        : ((R = t[1]), (L = t[2]));
      var E;
      t[3] !== f
        ? ((E = u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            { action: f, testid: void 0, icon: R, children: L },
            "status-player-header-overflow-menu-report",
          )),
          (t[3] = f),
          (t[4] = E))
        : (E = t[4]);
      var k = E;
      if (
        (!o("WAWebMsgGetters").getIsSentByMe(i) &&
          !o("WAWebContactGetters").getIsPSA(n) &&
          S.push(k),
        d != null)
      ) {
        var I, T;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = u.jsx(r("WDSIconIcDownload.react"), {})),
            (T = s._(/*BTDS*/ "Download")),
            (t[5] = I),
            (t[6] = T))
          : ((I = t[5]), (T = t[6]));
        var D;
        (t[7] !== d
          ? ((D = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { action: d, testid: void 0, icon: I, children: T },
              "status-player-header-overflow-menu-save",
            )),
            (t[7] = d),
            (t[8] = D))
          : (D = t[8]),
          S.push(D));
      }
      if (o("WAWebContactGetters").getIsMe(n)) {
        var x, $;
        t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = u.jsx(
              o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
              {},
            )),
            ($ = s._(/*BTDS*/ "Delete")),
            (t[9] = x),
            (t[10] = $))
          : ((x = t[9]), ($ = t[10]));
        var P;
        (t[11] !== c
          ? ((P = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { action: c, testid: void 0, icon: x, children: $ },
              "status-player-header-overflow-menu-revoke",
            )),
            (t[11] = c),
            (t[12] = P))
          : (P = t[12]),
          S.push(P));
      }
      if (v(n)) {
        var N = function (t) {
          var e =
            (t.destination ===
              o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK &&
              y) ||
            (t.destination ===
              o("WAWebCrossposting.flow").CrosspostingDestination.INSTAGRAM &&
              C);
          if (!e) return 1;
          var n = o("WAWebCrosspostingConfig").isCrosspostedToDestination(
              a,
              t.destination,
            ),
            r = o("WAWebCrosspostingConfig").isPendingCrosspostingToDestination(
              a,
              t.destination,
            );
          !n &&
            !r &&
            S.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: function () {
                    return l(t.gqlValue);
                  },
                  testid: void 0,
                  icon: t.getIcon(),
                  children: t.getLabel(),
                },
                "status-player-header-overflow-menu-crosspost-" + t.keySuffix,
              ),
            );
        };
        for (var M of o("WAWebCrosspostingConfig")
          .CROSSPOSTING_DESTINATION_CONFIG)
          N(M);
      }
      var w;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = [o("WAWebContactGetters").getCalculatedStatusMute]),
          (t[13] = w))
        : (w = t[13]);
      var A = o("useWAWebContactValues").useContactValues(n.id, w),
        F = A[0];
      if (
        !o("WAWebMsgGetters").getIsSentByMe(i) &&
        !o("WAWebContactGetters").getIsPSA(n)
      ) {
        var O, B, W, q, U, V;
        t[14] !== F || t[15] !== m
          ? ((V = function () {
              m(!F);
            }),
            (t[14] = F),
            (t[15] = m),
            (t[16] = V))
          : (V = t[16]);
        var H = V;
        if (F) {
          var G;
          (t[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = u.jsx(
                o("WAWebUnmuteNotificationsRefreshedIcon.react")
                  .UnmuteNotificationsRefreshedIcon,
                {},
              )),
              (t[17] = G))
            : (G = t[17]),
            (q = G));
          var z;
          (t[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = u.jsx(r("WDSIconIcVisibility.react"), {})), (t[18] = z))
            : (z = t[18]),
            (U = z));
          var j;
          (t[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = s._(/*BTDS*/ "Unhide")), (t[19] = j))
            : (j = t[19]),
            (B = j));
          var K;
          (t[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((K = s._(/*BTDS*/ "Unmute")), (t[20] = K))
            : (K = t[20]),
            (O = K),
            (W = "status-player-header-overflow-menu-unmute"));
        } else {
          var Q;
          (t[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = u.jsx(
                o("WAWebMuteNotificationsRefreshedIcon.react")
                  .MuteNotificationsRefreshedIcon,
                {},
              )),
              (t[21] = Q))
            : (Q = t[21]),
            (q = Q));
          var X;
          (t[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((X = u.jsx(r("WDSIconIcVisibilityOff.react"), {})), (t[22] = X))
            : (X = t[22]),
            (U = X));
          var Y;
          (t[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y = s._(/*BTDS*/ "Hide")), (t[23] = Y))
            : (Y = t[23]),
            (B = Y));
          var J;
          (t[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((J = s._(/*BTDS*/ "Mute")), (t[24] = J))
            : (J = t[24]),
            (O = J),
            (W = "status-player-header-overflow-menu-mute"));
        }
        var Z =
            o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled() ||
            o("WAWebStatusGatingUtils").isStatusHideStringEnabled(),
          ee = Z ? B : O,
          te = Z ? U : q,
          ne;
        t[25] !== H || t[26] !== te || t[27] !== W || t[28] !== ee
          ? ((ne = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { action: H, testid: void 0, icon: te, children: ee },
              W,
            )),
            (t[25] = H),
            (t[26] = te),
            (t[27] = W),
            (t[28] = ee),
            (t[29] = ne))
          : (ne = t[29]);
        var re = ne;
        S.push(re);
      }
      if (S.length === 0) return null;
      var oe;
      return (
        t[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((oe = s._(/*BTDS*/ "Menu")), (t[30] = oe))
          : (oe = t[30]),
        u.jsx(r("WDSMenuBarItem.react"), {
          icon: r("WDSIconIcMoreVert.react"),
          onClick: _,
          onClose: p,
          testid: void 0,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
          buttonType: "media",
          title: oe,
          dropdownMenu: {
            menu: S,
            dirY: o("WAWebDropdown.react").DirY.BOTTOM,
            dirX: o("WAWebDropdown.react").DirX.LEFT,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            flipOnRTL: !0,
            testid: "status-player-header-overflow-menu",
          },
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
