__d(
  "WAWebEmojiPanel.react",
  [
    "cx",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebDropdown.react",
    "WAWebEmojiPanelContent.react",
    "WAWebEmojiPanelEmojiSections",
    "WAWebEmojiPanelMenuSectionTab.react",
    "WAWebExpressionsPanelPicker.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenu.react",
    "WAWebRecentEmojiCollection",
    "WAWebRecentReactionsCollection",
    "react",
    "useLazyRef",
    "useWAWebForceUpdate",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState;
    function g(t) {
      "use no forget";
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.displayLocation,
        u =
          s === void 0
            ? o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown
            : s,
        d = l.size,
        g = _(),
        h = _(),
        y = r("useLazyRef")(function () {
          var e =
              u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions,
            t = [];
          (!e &&
            o("WAWebRecentEmojiCollection").RecentEmojiCollection.length > 0 &&
            t.push(o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT),
            e &&
              o("WAWebRecentReactionsCollection").RecentReactionsCollection
                .length > 0 &&
              t.push(
                o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS,
              ));
          var n = [].concat(
            t,
            o("WAWebEmojiPanelEmojiSections").ORDERED_TAB_SECTION_IDS,
          );
          return n;
        }),
        C = _(y.current),
        b = r("useLazyRef")(function () {
          var e;
          return (e = l.displayCache) != null
            ? e
            : { scrollTop: 0, sectionId: y.current[0], showSearchInput: !0 };
        }),
        v = _(),
        S = f(b.current.sectionId),
        R = S[0],
        L = S[1],
        E = f(-1),
        k = E[0],
        I = E[1],
        T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        D = _(new Map()),
        x = function (t) {
          var e;
          (e = h.current) == null || e.focusSearchInput(t);
        },
        $ = function (t) {
          x(t);
        },
        P = r("useWAWebUiIdle")();
      (m(function () {
        P($);
      }, []),
        p(i, function () {
          return {
            getElement: function () {
              return v.current;
            },
            restoreFocus: $,
          };
        }));
      var N = function () {
          (I(-1), x());
        },
        M = function (t) {
          g.current || (R !== t && L(t));
        },
        w = function (t) {
          if (h.current) {
            var e = h.current.scrollToSection(t);
            ((g.current = e),
              e.finally(function () {
                e === g.current && (g.current = null);
              }));
          }
        },
        A = function (t) {
          R !== t && (L(t), w(t));
        },
        F = function (t) {
          (l.onChange == null || l.onChange(t), T());
        },
        O = function (t) {
          var e =
            u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions;
          (e ||
            o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t),
            l.onEmoji(t));
        },
        B = function (t, n) {
          (A(t),
            l.onChange == null || l.onChange(""),
            x(),
            n == null || n.preventDefault());
        },
        W = function () {
          var e,
            t = y.current,
            n = (t.length + k - 1) % t.length,
            r = t[n];
          ((e = D.current.get(r)) == null || e.focus(), I(n));
        },
        q = function () {
          var e,
            t = y.current,
            n = (k + 1) % t.length,
            r = t[n];
          ((e = D.current.get(r)) == null || e.focus(), I(n));
        },
        U = function (t) {
          t == null || t.preventDefault();
          var e = y.current[k];
          (I(-1), B(e));
        },
        V = function () {
          var e;
          ((e = D.current.get(R)) == null || e.focus(),
            I(y.current.indexOf(R)));
        },
        H = function (t, n) {
          return c.jsx(
            r("WAWebEmojiPanelMenuSectionTab.react"),
            {
              onClick: B,
              sectionId: t,
              selected: n,
              showFocusIndicator: k !== -1,
              ref: function (n) {
                D.current.set(t, n);
              },
            },
            t,
          );
        },
        G = o("WAWebClassnames").classnamesConvertMeToStylexPlease([
          ((n = {}),
          (n._ajxy =
            u === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown),
          (n._ajxx =
            u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions),
          (n._aloy =
            u ===
              o("WAWebPanelsDisplayLocation").DisplayLocation
                .ExpressionsPanel &&
            d !==
              o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize
                .SMALL),
          (n._aox7 =
            u ===
              o("WAWebPanelsDisplayLocation").DisplayLocation
                .ExpressionsPanel &&
            d !==
              o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize
                .SMALL &&
            o("WAWebABProps").getABPropConfigValue(
              "web_expression_panels_show_less_stickers",
            )),
          (n._ajxv = !0),
          n),
          "x6nvzda x4i4b9w xhl9efl xj65ea0",
        ]),
        z = l.width,
        j = z === void 0 ? o("WAWebDropdown.react").EMOJI_PICKER_WIDTH : z;
      return c.jsxs("div", {
        className: G,
        ref: v,
        role: "grid",
        children: [
          c.jsx(r("WAWebPanelsMenu.react"), {
            selectedSectionId: R,
            sectionIds: y.current,
            renderSectionTab: H,
            showTabHighlight: !((a = l.defaultSearchText) != null && a.trim()),
            onFocusPrev: W,
            onFocusNext: q,
            onFocusLeave: N,
            onEnter: U,
            displayLocation: u,
          }),
          c.jsx(r("WAWebEmojiPanelContent.react"), {
            displayCache: b.current,
            width: j,
            onDisplayCache: l.onDisplayCache,
            onFocusUp: V,
            onFocusPrev: l.onFocusPrev,
            onFocusNext: l.onFocusNext,
            onEmoji: O,
            onSection: M,
            ref: h,
            sectionIds: C.current,
            onChange: F,
            defaultSearchText: l.defaultSearchText,
            displayLocation: u,
            targetWindow: l.targetWindow,
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
