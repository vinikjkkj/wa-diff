__d(
  "WAWebEmojiPanelContent.react",
  [
    "fbt",
    "Promise",
    "WAMemoizeOne",
    "WAWebEmoji",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEmojiPanelContentSectionScrollList.react",
    "WAWebEmojiPanelEmojiSections",
    "WAWebEmojiPanelSearchResultsAnnouncement.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebRecentEmojiCollection",
    "WAWebRecentReactionsCollection",
    "WAWebStopEvent",
    "WAWebVelocityTransitionGroup",
    "WDSSearchBar.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = m.useState,
      h = {
        search: {
          position: "x1n2onr6",
          zIndex: "x12xzxwr",
          display: "x1lliihq",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        searchBarWrapper: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          $$css: !0,
        },
      },
      y = 15,
      C = 5;
    function b(e) {
      var t = e.displayLocation,
        n = e.onFocusUp,
        a = e.onSearchChange,
        i = e.onSearchDownKey,
        l = e.onSearchEnterKey,
        u = e.searchInputRef,
        c = e.searchText,
        m = e.transitionName,
        p =
          t === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions
            ? s._(/*BTDS*/ "Search reaction")
            : s._(/*BTDS*/ "Search emoji"),
        _ = function (t) {
          if (t.key === "ArrowUp") return (n(), !1);
          if (t.key === "ArrowDown") return (i(), !1);
        };
      return d.jsx(r("WAWebVelocityTransitionGroup"), {
        transitionName: m,
        xstyle: h.search,
        children: d.jsx(r("WDSSearchBar.react"), {
          hintText: p,
          onValueChange: a,
          onKeyDown: _,
          onEnter: l,
          ref: u,
          value: c,
          xstyle: h.searchBarWrapper,
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.data,
        n = e.displayLocation,
        r = e.onEmoji,
        a = e.onEmojiFocus,
        i = e.onSearchResultsFocusAbove,
        l = e.searchResultsRef,
        s = e.targetWindow,
        u = e.width;
      return d.jsx("div", {
        className: "x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j",
        children: d.jsx(
          o("WAWebEmojiPanelContentSectionScrollList.react")
            .EmojiSectionScrollList,
          {
            data: t,
            width: u,
            initialScrollTop: 0,
            searchInputVisible: !0,
            focusAbove: i,
            onFocusUp: i,
            onEmoji: r,
            onEmojiFocus: a,
            ref: l,
            showTitles: !1,
            displayLocation: n,
            targetWindow: s,
          },
        ),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.displayLocation,
        s = i.onChange,
        c = i.onEmoji,
        m = i.onFocusNext,
        h = i.onFocusPrev,
        S = i.onFocusUp,
        E = i.onSection,
        k = i.sectionIds,
        I = i.width,
        T = f(null),
        D = f(null),
        x = f(null),
        $ = f(null),
        P = f(!1),
        N = f(!1),
        M = f(!1),
        w = f(i.displayCache.scrollTop),
        A = f(i.displayCache.sectionId),
        F = g(i.defaultSearchText || ""),
        O = F[0],
        B = F[1],
        W = g(i.displayCache.showSearchInput),
        q = W[0],
        U = W[1],
        V = g(function () {
          return k.map(function (e) {
            var t = [];
            switch (e) {
              case "RECENT":
                t = R();
                break;
              case "RECENT_REACTIONS":
                t = L();
                break;
              default:
                t = o("WAWebEmoji").EmojiUtil.getEmojisInCategory(e);
            }
            return { sectionId: e, emojis: t };
          });
        }),
        H = V[0],
        G = o("useWAWebTimeout").useTimeout(function () {
          M.current = !1;
        }, 200),
        z = G[0],
        j = function (t, n) {
          ((M.current = !0), z());
          var e = n.scrollTop,
            r =
              t.getBoundingClientRect().top - n.getBoundingClientRect().top + e,
            a = 2,
            i = r - n.clientHeight + t.clientHeight + a,
            l = q
              ? r -
                o("WAWebEmojiPanelContentSectionScrollList.react")
                  .TOTAL_SEARCH_HEIGHT
              : r - a;
          n.scrollTop = Math.min(Math.max(e, i), l);
        },
        K = function (t) {
          if (!D.current) {
            ((P.current = !0), U(!0));
            return;
          }
          D.current.focus();
        };
      p(
        function () {
          q && K(!0);
        },
        [q],
      );
      var Q = function () {
          ((M.current = !0), z(), K(), T.current && T.current.scrollToTop());
        },
        X = function () {
          Q();
        },
        Y = function () {
          var e = w.current === 0;
          return (e && U(!0), e);
        },
        J = function (t) {
          var e = t - w.current;
          if (((w.current = t), !M.current && !N.current && !Y())) {
            var n = Math.abs(e);
            P.current = n > y;
            var r = e >= 0 ? 1 : -1;
            if (
              t <
              o("WAWebEmojiPanelContentSectionScrollList.react")
                .TOTAL_SEARCH_HEIGHT
            ) {
              U(!0);
              return;
            }
            n < C || (q ? r === 1 && U(!1) : r === -1 && U(!0));
          }
        },
        Z = function (t) {
          N.current || ((A.current = t), E(t));
        },
        ee = function () {
          Q();
        },
        te = function (t) {
          (s == null || s(t), B(t));
        },
        ne = function () {
          Q();
        },
        re = function () {
          if (O) {
            if (!x.current) return;
            x.current.focusFirstVisibleEmoji();
            return;
          }
          T.current &&
            T.current.focusFirstVisibleEmoji(
              o("WAWebEmojiPanelContentSectionScrollList.react")
                .TOTAL_SEARCH_HEIGHT,
            );
        },
        oe = function () {
          O && x.current && x.current.selectFirstVisibleEmoji();
        },
        ae = function (t) {
          if ((t.preventDefault(), t.stopPropagation(), !!D.current)) {
            if (document.activeElement !== D.current) return K();
            h == null || h();
          }
        },
        ie = function (t) {
          if ((t.preventDefault(), t.stopPropagation(), !!D.current)) {
            if (document.activeElement !== D.current) return K();
            m == null || m();
          }
        },
        le = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            ((A.current = e),
              yield new (u || (u = n("Promise")))(function (e) {
                ((P.current = !0), B(""), U(!0), e());
              }),
              (N.current = !0));
            var t = T.current
              ? T.current.scrollToSection(
                  e,
                  0 -
                    o("WAWebEmojiPanelContentSectionScrollList.react")
                      .TOTAL_SEARCH_HEIGHT,
                )
              : (u || (u = n("Promise"))).resolve();
            return (
              t.finally(function () {
                t === t && ((N.current = !1), Y());
              }),
              ($.current = t),
              t
            );
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        se = function (t) {
          (o("WAWebStopEvent").stopEvent(t), K());
        },
        ue = r("WAMemoizeOne")(function (e) {
          var t = e.searchText,
            n = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(
              t.trimEnd(),
            );
          return [
            {
              sectionId: o("WAWebEmojiPanelEmojiSections").SECTIONS
                .SEARCH_RESULT,
              emojis: n,
            },
          ];
        }),
        ce = function () {
          var e = O.replace(/^\s+/, "");
          return ue({ searchText: e });
        };
      _(a, function () {
        return { focusSearchInput: K, scrollToSection: le };
      });
      var de = O ? ce() : null;
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: { tab: ie, "shift+tab": ae },
        tabIndex: null,
        className: "x1avzhq7",
        onClick: se,
        children: d.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x1n2onr6 xhjsbib x5yr21d x78zum5 xdt5ytf" },
              2: {
                className: "x1n2onr6 xhjsbib x5yr21d x78zum5 xdt5ytf xfl633f",
              },
              1: { className: "x1n2onr6 x5yr21d x78zum5 xdt5ytf x1kapp2c" },
              3: {
                className: "x1n2onr6 x5yr21d x78zum5 xdt5ytf xfl633f x1kapp2c",
              },
            }[
              ((l ===
                o("WAWebPanelsDisplayLocation").DisplayLocation
                  .ExpressionsPanel) <<
                1) |
                ((l ===
                  o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions ||
                  l ===
                    o("WAWebPanelsDisplayLocation").DisplayLocation
                      .ExpressionsPanel ||
                  l ===
                    o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown) <<
                  0)
            ],
            {
              children: [
                d.jsx(b, {
                  transitionName: P.current
                    ? "emoji-search-slide-away-fast"
                    : "emoji-search-slide-away",
                  onFocusUp: S,
                  searchInputRef: D,
                  searchText: O,
                  onSearchChange: te,
                  onSearchDownKey: re,
                  onSearchEnterKey: oe,
                  displayLocation: l,
                }),
                de != null
                  ? d.jsxs(d.Fragment, {
                      children: [
                        d.jsx(
                          r("WAWebEmojiPanelSearchResultsAnnouncement.react"),
                          { data: de, displayLocation: l },
                        ),
                        d.jsx(v, {
                          width: I,
                          onEmoji: c,
                          data: de,
                          searchResultsRef: x,
                          onEmojiFocus: j,
                          onSearchResultsFocusAbove: ee,
                          displayLocation: l,
                          targetWindow: i.targetWindow,
                        }),
                      ],
                    })
                  : null,
                d.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j",
                      },
                      1: {
                        className:
                          "x1s85apg x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j",
                      },
                    }[!!O << 0],
                    {
                      children: d.jsx(
                        o("WAWebEmojiPanelContentSectionScrollList.react")
                          .EmojiSectionScrollList,
                        {
                          data: H,
                          width: i.width,
                          onFocusUp: ne,
                          initialScrollTop: i.displayCache.scrollTop,
                          searchInputVisible: q,
                          focusAbove: X,
                          onEmoji: i.onEmoji,
                          onEmojiFocus: j,
                          onScroll: J,
                          onSection: Z,
                          ref: T,
                          showTitles: !0,
                          displayLocation: l,
                          targetWindow: i.targetWindow,
                        },
                      ),
                    },
                  ),
                ),
              ],
            },
          ),
        ),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return Array.from(
        new Set(
          o("WAWebRecentEmojiCollection").RecentEmojiCollection.reduce(
            function (e, t) {
              var n = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t.id) || t.id,
                r = o("WAWebEmoji").EmojiUtil.getGlyphId(n);
              return (r != null && e.push(n), e);
            },
            [],
          ),
        ),
      );
    }
    function L() {
      return Array.from(
        new Set(
          o("WAWebRecentReactionsCollection").RecentReactionsCollection.reduce(
            function (e, t) {
              var n = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t.id) || t.id,
                r = o("WAWebEmoji").EmojiUtil.getGlyphId(n),
                a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
              return (r != null && a != null && e.push(a), e);
            },
            [],
          ),
        ),
      );
    }
    l.default = S;
  },
  226,
);
