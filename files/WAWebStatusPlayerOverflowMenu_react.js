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
    "useWAWebContactValues",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = e.crosspostingInfo,
        a = e.msg,
        i = e.onCrosspost,
        l = e.onDelete,
        c = e.onDownload,
        d = e.onMuteOrUnmute,
        m = e.onOverflowMenuDismissed,
        p = e.onOverflowMenuShown,
        _ = e.onReport,
        f = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getIsFBLinked,
          o("WAWebSettingsGetters").getIsIGLinked,
          o("WAWebSettingsGetters").getLinkState,
        ]),
        g = f[0],
        h = f[1],
        y = f[2],
        C = function (t) {
          return (
            o("WAWebContactGetters").getIsMe(t) &&
            y === o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
            o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled()
          );
        },
        b = [],
        v = u.jsx(
          o("WAWebDropdownItem.react").DropdownItem,
          {
            action: _,
            testid: void 0,
            icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
            children: s._(/*BTDS*/ "Report"),
          },
          "status-player-header-overflow-menu-report",
        );
      if (
        (!o("WAWebMsgGetters").getIsSentByMe(a) &&
          !o("WAWebContactGetters").getIsPSA(t) &&
          b.push(v),
        c != null &&
          b.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: c,
                testid: void 0,
                icon: u.jsx(r("WDSIconIcDownload.react"), {}),
                children: s._(/*BTDS*/ "Download"),
              },
              "status-player-header-overflow-menu-save",
            ),
          ),
        o("WAWebContactGetters").getIsMe(t) &&
          b.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: l,
                testid: void 0,
                icon: u.jsx(
                  o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Delete"),
              },
              "status-player-header-overflow-menu-revoke",
            ),
          ),
        C(t))
      ) {
        var S = function (t) {
          var e =
            (t.destination ===
              o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK &&
              g) ||
            (t.destination ===
              o("WAWebCrossposting.flow").CrosspostingDestination.INSTAGRAM &&
              h);
          if (!e) return 1;
          var r = o("WAWebCrosspostingConfig").isCrosspostedToDestination(
              n,
              t.destination,
            ),
            a = o("WAWebCrosspostingConfig").isPendingCrosspostingToDestination(
              n,
              t.destination,
            );
          !r &&
            !a &&
            b.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: function () {
                    return i(t.gqlValue);
                  },
                  testid: void 0,
                  icon: t.getIcon(),
                  children: t.getLabel(),
                },
                "status-player-header-overflow-menu-crosspost-" + t.keySuffix,
              ),
            );
        };
        for (var R of o("WAWebCrosspostingConfig")
          .CROSSPOSTING_DESTINATION_CONFIG)
          S(R);
      }
      var L = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getCalculatedStatusMute,
        ]),
        E = L[0];
      if (
        !o("WAWebMsgGetters").getIsSentByMe(a) &&
        !o("WAWebContactGetters").getIsPSA(t)
      ) {
        var k,
          I,
          T,
          D = null,
          x = null,
          $ = function () {
            d(!E);
          };
        E
          ? ((D = u.jsx(
              o("WAWebUnmuteNotificationsRefreshedIcon.react")
                .UnmuteNotificationsRefreshedIcon,
              {},
            )),
            (x = u.jsx(r("WDSIconIcVisibility.react"), {})),
            (I = s._(/*BTDS*/ "Unhide")),
            (k = s._(/*BTDS*/ "Unmute")),
            (T = "status-player-header-overflow-menu-unmute"))
          : ((D = u.jsx(
              o("WAWebMuteNotificationsRefreshedIcon.react")
                .MuteNotificationsRefreshedIcon,
              {},
            )),
            (x = u.jsx(r("WDSIconIcVisibilityOff.react"), {})),
            (I = s._(/*BTDS*/ "Hide")),
            (k = s._(/*BTDS*/ "Mute")),
            (T = "status-player-header-overflow-menu-mute"));
        var P =
            o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled() ||
            o("WAWebStatusGatingUtils").isStatusHideStringEnabled(),
          N = P ? I : k,
          M = P ? x : D,
          w = u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            { action: $, testid: void 0, icon: M, children: N },
            T,
          );
        b.push(w);
      }
      return b.length === 0
        ? null
        : u.jsx(r("WDSMenuBarItem.react"), {
            icon: r("WDSIconIcMoreVert.react"),
            onClick: p,
            onClose: m,
            testid: void 0,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
            buttonType: "media",
            title: s._(/*BTDS*/ "Menu"),
            dropdownMenu: {
              menu: b,
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX: o("WAWebDropdown.react").DirX.LEFT,
              type: o("WAWebDropdown.react").MenuType.DropdownMenu,
              flipOnRTL: !0,
              testid: "status-player-header-overflow-menu",
            },
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
