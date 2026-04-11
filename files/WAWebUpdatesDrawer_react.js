__d(
  "WAWebUpdatesDrawer.react",
  [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebChatListSearch.react",
    "WAWebCmd",
    "WAWebCreateTextStatusFlow.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlatListController",
    "WAWebIcAddPhotoAlternateIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebModalManager",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterDirectoryFunnelLogging",
    "WAWebNewsletterDrawerListItem.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInboxSearchLogging",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterTabDrawerUtils",
    "WAWebNewsletterWamoSubUtils",
    "WAWebOpenNewsletterChat",
    "WAWebPrivacyModeIndicator.react",
    "WAWebSideNavButtonsActivityModel",
    "WAWebSingleSelection",
    "WAWebStatusAttachMediaFlow.react",
    "WAWebStatusCollection",
    "WAWebStatusListHeader.react",
    "WAWebStatusListSearchable.react",
    "WAWebStatusListSearchableCarousel.react",
    "WAWebStatusSearchUtils",
    "WAWebUpdatesHeaderDropdown.react",
    "WAWebUpdatesTabDrawerNewsletterWrapper.react",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUpdateTabSearchEventType",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "WDSIconIcGridView.react",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "react",
    "useLazyRef",
    "useMergeRefs",
    "useWAWebDebouncedSearch",
    "useWAWebFocusOnMount",
    "useWAWebNewsletterDirectoryResults",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        exploreButton: {
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
        searchBar: { backgroundColor: "x1280gxy", $$css: !0 },
        subHeader: {
          paddingTop: "x1h678fw",
          paddingBottom: "x12xbjc7",
          marginBottom: "xat24cr",
          $$css: !0,
        },
      },
      h = function (t) {
        var e = {
          followedChannelsCount: 0,
          adminChannelsCount: 0,
          premiumChannelsFollowedCount: 0,
        };
        return (
          t.forEach(function (t) {
            o("WAWebNewsletterMembershipUtil").iAmSubscriber(
              t.newsletterMetadata,
            )
              ? (e.followedChannelsCount++,
                o(
                  "WAWebNewsletterWamoSubUtils",
                ).newsletterSupportsSubscriptions(t.newsletterMetadata) &&
                  e.premiumChannelsFollowedCount++)
              : o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                  t.newsletterMetadata,
                ) && e.adminChannelsCount++;
          }),
          e
        );
      };
    function y(e) {
      var t = e.initialScrollTop,
        n = e.newsletters,
        a = e.onBack,
        i = e.onCreateNewsletter,
        l = e.onNewsletterDirectorySearch,
        c = e.onOpenHiddenUpdates,
        y = e.onOpenStatusPrivacySettingDrawer,
        b = e.ref,
        v = e.setScrollTop,
        S = _(),
        R = r("useLazyRef")(function () {
          return Math.round(Math.random() * 1e9);
        }),
        L = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }),
        E = f([]),
        k = E[0],
        I = E[1],
        T = _(t != null ? t : 0),
        D = _(!1),
        x = _(),
        $ = _(t != null ? t : 0),
        P = _(!1),
        N = _(),
        M = p(function () {
          return new (o(
            "WAWebNewsletterDirectoryFunnelLogging",
          ).NewsletterDirectoryFunnelLogger)();
        }, []),
        w = p(function () {
          return new (r("WAWebFlatListController"))();
        }, []);
      m(function () {
        (o("WAWebUserPrefsGeneral").setLastStatusUsage(),
          R.current != null &&
            o("WAWebStatusCollection").StatusCollection.logMetrics({
              type: "session",
              sessionId: R.current,
            }),
          o("WAWebCmd").Cmd.onStatusViewerOpen());
      }, []);
      var A = u.jsx(
          r("WDSMenuBarItem.react"),
          {
            icon: r("WDSIconIcMoreVert.react"),
            title: s._(/*BTDS*/ "Menu"),
            wdsMenuToRender: u.jsx(r("WAWebUpdatesHeaderDropdown.react"), {
              onOpenStatusPrivacySettingDrawer: y,
              onCreateNewsletter: i,
            }),
          },
          "updates-menu",
        ),
        F = u.jsx(
          r("WDSMenuBarItem.react"),
          {
            icon: o("WAWebIcAddPhotoAlternateIcon.react")
              .IcAddPhotoAlternateIcon,
            title: s._(/*BTDS*/ "Photos & videos"),
            onClick: C,
          },
          "menu-bar-add-media-status",
        ),
        O = u.jsx(
          r("WDSMenuBarItem.react"),
          {
            testid: void 0,
            icon: r("WDSIconIcEdit.react"),
            title: s._(/*BTDS*/ "Text"),
            onClick: function () {
              o("WAWebModalManager").ModalManager.openMedia(
                u.jsx(r("WAWebCreateTextStatusFlow.react"), {}),
                { transition: "status-modal" },
              );
            },
          },
          "menu-bar-add-text-status",
        ),
        B = u.jsx(r("WDSButton.react"), {
          Icon: r("WDSIconIcGridView.react"),
          xstyle: g.exploreButton,
          variant: "borderless",
          size: "small",
          label: s._(/*BTDS*/ "Explore"),
          onPress: function () {
            return l(
              o("WAWebWamEnumChannelDirectoryEntryPoint")
                .CHANNEL_DIRECTORY_ENTRY_POINT.SUGGESTED_CHANNELS,
            );
          },
        }),
        W = s._(/*BTDS*/ "Updates"),
        q = s._(/*BTDS*/ "Updates tab drawer"),
        U = r("useWAWebDebouncedSearch")(
          o(
            "WAWebNewsletterGatingUtils",
          ).getNewsletterDirectorySearchDebounce(),
        ),
        V = U[0],
        H = U[1],
        G = V.trim(),
        z = f(!1),
        j = z[0],
        K = z[1],
        Q = _(),
        X = h(n),
        Y = X.adminChannelsCount,
        J = X.followedChannelsCount,
        Z = X.premiumChannelsFollowedCount,
        ee = f(function () {
          var e = o("WAWebStatusSearchUtils").getFilteredStatusLists(),
            t = e.read,
            n = e.unread,
            r = n.length > 0 || t.length > 0;
          return J > 0 && r;
        }),
        te = ee[0],
        ne = p(
          function () {
            return o("WAWebStatusSearchUtils").hasStatusesMatchingSearch(V);
          },
          [V],
        ),
        re = o(
          "useWAWebNewsletterDirectoryResults",
        ).useNewsletterDirectoryResults({
          searchText: G,
          countryCode: o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).getCountryCodeIso(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
          ),
          listView: o("WAWebNewsletterDirectoryFilterUtils")
            .NewsletterDirectoryListView.Recommended,
          newsletterDirectoryFunnelLogger: M,
          skipSubscribedNewsletters: !0,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
            .NewsletterUpdatesTab,
        }),
        oe = re[0],
        ae = re[1],
        ie = re[2],
        le = re[3],
        se = re[4],
        ue = re[5];
      (m(
        function () {
          D.current = G !== "";
        },
        [G],
      ),
        m(
          function () {
            if (G === "") {
              w.setScrollFromStart(T.current);
              return;
            }
            if (k.length > 0) {
              var e;
              (e = N.current) == null || e.scrollIntoViewIfNeeded(0);
            }
          },
          [G, w, k.length],
        ),
        m(
          function () {
            return (
              k.length &&
                P.current === !1 &&
                (w.setScrollFromStart(t != null ? t : 0), (P.current = !0)),
              function () {
                D.current
                  ? v == null || v(T.current)
                  : v == null || v($.current);
              }
            );
          },
          [k.length, t, v, w],
        ));
      var ce = function (t) {
          (($.current = t.currentTarget.scrollTop),
            G === "" && (T.current = t.currentTarget.scrollTop));
          var e = x.current;
          e == null ||
            G === "" ||
            (o("WAWebNewsletterTabDrawerUtils").isScrollAtBottomOfList(e) &&
              ae() &&
              le());
        },
        de = function () {
          if (N.current) {
            var e = L.current.value;
            if (e == null) return;
            var t = k.findIndex(function (t) {
              return t.itemKey === e.itemKey;
            });
            if (t !== -1) {
              var n;
              (n = N.current) == null || n.scrollIntoViewIfNeeded(t, 100);
            }
          }
        },
        me = function () {
          G && K(!1);
        },
        pe = function () {
          K(!1);
        },
        _e = function () {
          G &&
            o(
              "WAWebNewsletterInboxSearchLogging",
            ).logNewsletterInboxSearchEvent({
              updateTabSearchEventType: o(
                "WAWebWamEnumUpdateTabSearchEventType",
              ).UPDATE_TAB_SEARCH_EVENT_TYPE.SEARCH_TAP,
              channelsFollowedCount: J,
              channelsAdminCount: Y,
              premiumChannelsFollowedCount: o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubLoggingEnabled()
                ? Z
                : void 0,
            });
        },
        fe = function () {
          G.trim() === "" && (j || _e(), K(!0));
        },
        ge = function (t) {
          H(t);
        },
        he = function (t) {
          switch (t.type) {
            case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
              .NEWSLETTER_CHAT_CELL:
            case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
              .NEWSLETTER_DIRECTORY_CELL:
              o(
                "WAWebSideNavButtonsActivityModel",
              ).setLastActiveNewsletterEntryPoint(t.chatEntryPoint);
              break;
          }
          if (G !== "")
            switch (t.type) {
              case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                .NEWSLETTER_CHAT_CELL:
                o(
                  "WAWebNewsletterInboxSearchLogging",
                ).logNewsletterInboxSearchEvent({
                  updateTabSearchEventType: o(
                    "WAWebWamEnumUpdateTabSearchEventType",
                  ).UPDATE_TAB_SEARCH_EVENT_TYPE.ITEM_TAP,
                });
                break;
              case o("WAWebNewsletterDrawerListItem.react").TabCellDataType
                .NEWSLETTER_DIRECTORY_CELL:
                o(
                  "WAWebNewsletterInboxSearchLogging",
                ).logNewsletterInboxSearchEvent({
                  updateTabSearchEventType: o(
                    "WAWebWamEnumUpdateTabSearchEventType",
                  ).UPDATE_TAB_SEARCH_EVENT_TYPE.ITEM_TAP,
                });
                break;
            }
          L.current.setVal(t);
        },
        ye = function (t) {
          if (k.length !== 0) {
            var e = k[0];
            e.type === "NEWSLETTER_CHAT_CELL" &&
              (t.preventDefault(),
              o("WAWebOpenNewsletterChat").openNewsletterChat({
                newsletter: e.newsletter,
                onSelect: he(e),
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterChatlist,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .CHANNEL_UPDATES_HOME_SEARCH,
              }));
          }
        },
        Ce = u.jsx(r("WAWebDrawerSection.react"), {
          animation: !1,
          theme: "list-section",
          xstyle: g.searchBar,
          children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            onBlur: me,
            children: u.jsx(o("WAWebChatListSearch.react").ListSearch, {
              ref: Q,
              placeholder: r("WAWebFbtCommon")("Search"),
              onSearch: ge,
              borderBottom: !1,
              onEnter: ye,
              onSearchInputFocus: fe,
              onBackButton: pe,
              type: o("WAWebChatListSearch.react").ListSearchType
                .NEWSLETTER_SEARCH,
              showPlaceholderUntilType: !0,
            }),
          }),
        }),
        be = V.trim() !== "",
        ve = !be || ne,
        Se = !te || be,
        Re = f(!1),
        Le = Re[0],
        Ee = Re[1],
        ke = d(function () {
          Ee(!0);
        }, []),
        Ie = d(function () {
          Ee(!1);
        }, []),
        Te = u.jsxs(r("WAWebDrawerSection.react"), {
          animation: !1,
          xstyle: g.subHeader,
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Status"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SUBHEADER,
              menu: be
                ? null
                : u.jsxs("div", {
                    className: "x78zum5 x1qvou4u x1s70e7g",
                    children: [F, O],
                  }),
            }),
            Se &&
              !be &&
              u.jsx(r("WAWebStatusListHeader.react"), { sessionIdRef: R }),
          ],
        }),
        De = u.jsx(r("WAWebDrawerSection.react"), {
          theme: ne ? "full-height" : "list-section",
          animation: !1,
          testid: void 0,
          children: Se
            ? u.jsx(
                o("WAWebStatusListSearchable.react").WAWebStatusListSearchable,
                { sessionIdRef: R, searchQuery: V },
              )
            : u.jsx(r("WAWebStatusListSearchableCarousel.react"), {
                sessionIdRef: R,
                showCarouselNavigationButtons: Le,
                onOpenHiddenUpdates: c,
                searchQuery: V,
              }),
        }),
        xe = u.jsxs(u.Fragment, { children: [Te, De] }),
        $e = u.jsxs(r("WAWebDrawerSection.react"), {
          theme: "list-section",
          animation: !1,
          testid: void 0,
          children: [
            !be &&
              u.jsx("div", {
                className: "x1h678fw x12xbjc7 xat24cr",
                children: u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title: s._(/*BTDS*/ "Channels"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                    .SUBHEADER,
                  menu: u.jsx("div", {
                    className:
                      "x78zum5 x4m7ku4 x21xpn4 x1p57kb1 xvpt6g3 xl56j7k x6s0dn4",
                    children: B,
                  }),
                }),
              }),
            u.jsx(r("WAWebUpdatesTabDrawerNewsletterWrapper.react"), {
              newsletters: n,
              onCreateNewsletter: i,
              onNewsletterDirectorySearch: l,
              listData: k,
              setListData: I,
              searchText: V,
              selectionRef: L,
              handleSelectNewsletter: he,
              directoryNewsletters: oe,
              tryFetchDirectoryNewsletters: ie,
              loadingDirectory: ue,
              scrollListIntoFocusedItem: de,
            }),
          ],
        }),
        Pe = r("useWAWebFocusOnMount")(),
        Ne = r("useMergeRefs")(S, Pe);
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: Ne,
        "aria-label": q,
        "data-testid": void 0,
        onMouseEnter: ke,
        onMouseLeave: Ie,
        children: u.jsxs(r("WAWebDrawer.react"), {
          ref: b,
          theme: "striped",
          testid: void 0,
          tsNavigationData: { surface: "status" },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: W,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
              onBack: a,
              menu: [
                u.jsx(
                  r("WAWebPrivacyModeIndicator.react"),
                  {},
                  "btn-privacy-mode",
                ),
                A,
              ],
            }),
            Ce,
            u.jsxs(r("WAWebDrawerBody.react"), {
              ref: x,
              onScroll: ce,
              flatListControllers: [w],
              children: [ve && xe, $e],
            }),
          ],
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebStatusAttachMediaFlow.react"), {}),
      );
    }
    l.default = y;
  },
  226,
);
