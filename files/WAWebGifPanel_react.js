__d(
  "WAWebGifPanel.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebABProps",
    "WAWebDomScroll",
    "WAWebEmojiPickerConstants",
    "WAWebExpressionsPanelPicker.react",
    "WAWebGifPanelGifInfo",
    "WAWebGifPanelGifSearch.react",
    "WAWebGifPanelGifSections",
    "WAWebGifPanelMenuSectionTab.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenu.react",
    "WAWebStopEvent",
    "WAWebWebcEmojiOpenWamEvent",
    "WDSSearchBar.react",
    "lodash",
    "react",
    "useWAWebOnUnmount",
    "useWAWebThrottledCallback",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = o("WAWebGifPanelGifSections").ORDERED_TAB_SECTION_IDS.filter(
        function (e) {
          return e !== o("WAWebGifPanelGifSections").SECTIONS.FAVORITES;
        },
      ),
      g = {
        searchBarWrapper: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          $$css: !0,
        },
      };
    function h(e) {
      var t = e.defaultSearchText,
        n = e.displayCache,
        a = e.displayLocation,
        i = e.onChange,
        l = e.onDisplayCache,
        c = e.onFocusNext,
        h = e.onFocusPrev,
        y = e.onGif,
        C = e.ref,
        b = e.size,
        v = p(),
        S = p(),
        R = p(),
        L = p(),
        E = p(0),
        k = p(!1),
        I = p(0),
        T = p(0),
        D = r("lodash").defaults(n || {}, {
          scrollTop: 0,
          showSearchInput: !0,
        }),
        x = _(!D.scrollTop),
        $ = x[0],
        P = x[1],
        N = _(t != null ? t : ""),
        M = N[0],
        w = N[1],
        A = _(D.showSearchInput),
        F = A[0],
        O = A[1],
        B = _(
          D.selectedSectionId ||
            o("WAWebGifPanelGifSections").SECTIONS.TRENDING,
        ),
        W = B[0],
        q = B[1],
        U = _(!1),
        V = U[0],
        H = U[1],
        G = _(-1),
        z = G[0],
        j = G[1],
        K = p(new Map()),
        Q = function (t) {
          R.current ? R.current.focus() : ((k.current = !0), O(!0));
        };
      m(C, function () {
        return {
          getElement: function () {
            return v.current;
          },
          focusSearchInput: function (t) {
            Q(t);
          },
          restoreFocus: function (t) {
            Q(t);
          },
        };
      });
      var X = r("useWAWebUiIdle")();
      d(
        function () {
          if (T.current === 0) {
            T.current = Date.now();
            var e = n == null ? void 0 : n.scrollTop,
              t = L.current;
            (t && e != null && e !== 0 && (t.scrollTop = e),
              X(function () {
                (Q(),
                  new (o("WAWebWebcEmojiOpenWamEvent").WebcEmojiOpenWamEvent)({
                    webcEmojiOpenTab: "GIF",
                  }).commit(),
                  P(!1));
              }));
          }
        },
        [n == null ? void 0 : n.scrollTop, X],
      );
      var Y = r("useWAWebThrottledCallback")(function () {
        var e,
          t = L.current;
        if (W == null && M && t && S.current) {
          S.current.animateOnScroll(t);
          return;
        }
        if (
          !(
            Date.now() - T.current <
            o("WAWebEmojiPickerConstants").SCROLL_CLICK_TIME_GAP
          ) &&
          ($ && P(!1), !!t)
        ) {
          var n = t.scrollTop,
            r = E.current - n,
            a =
              Math.abs(r) >
              o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
          ((k.current =
            Math.abs(r) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST),
            r < 0
              ? F &&
                ((n > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && a) ||
                  (E.current <
                    o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT &&
                    n >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT)) &&
                O(!1)
              : F ||
                ((a || n < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT) &&
                  O(!0)),
            (e = S.current) == null || e.animateOnScroll(t),
            (E.current = n));
        }
      }, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME);
      r("useWAWebOnUnmount")(function () {
        var e,
          t = L.current;
        l({
          scrollTop: (e = t == null ? void 0 : t.scrollTop) != null ? e : 0,
          showSearchInput: F,
          selectedSectionId: W,
        });
      });
      var J = function (t) {
          var e = L.current;
          e &&
            t.offsetTop - e.scrollTop <
              o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT &&
            o("WAWebDomScroll").scrollIntoView(t, !0, e);
        },
        Z = function (t) {
          if (L.current != null) {
            if (M.length === 0 && t) {
              var e;
              ((I.current = L.current.scrollTop),
                (e = L.current) == null || e.scrollTo(0, 0));
            } else if (M && t.length === 0 && I.current > 0) {
              var n;
              (n = L.current) == null || n.scrollTo(0, I.current);
            }
            (i == null || i(t), w(t), H(!1));
          }
        },
        ee = function (t) {
          var e,
            n = W != null ? W : f[0];
          ((e = K.current.get(n)) == null || e.focus(), j(f.indexOf(W)));
        },
        te = function (t) {
          (o("WAWebStopEvent").stopEvent(t), Q());
        },
        ne = function (t) {
          var e = t == null ? void 0 : t.nativeEvent.target,
            n =
              e instanceof HTMLElement && !!S.current && S.current.contains(e);
          n && (Q(), o("WAWebStopEvent").stopEvent(t));
        },
        re = function (t) {
          var e,
            n = t == null ? void 0 : t.nativeEvent.target;
          if (n instanceof Node && (e = S.current) != null && e.contains(n)) {
            var r;
            ((r = S.current) == null || r.initSelection(!1),
              o("WAWebStopEvent").stopEvent(t));
          }
        },
        oe = function (t) {
          if ((o("WAWebStopEvent").stopEvent(t), !!R.current)) {
            if (document.activeElement !== R.current) return Q();
            c();
          }
        },
        ae = function (t) {
          if ((o("WAWebStopEvent").stopEvent(t), !!R.current)) {
            if (document.activeElement !== R.current) return Q();
            h();
          }
        },
        ie = function (t) {
          var e;
          (O(!0),
            q(t),
            w(t === o("WAWebGifPanelGifSections").SECTIONS.FAVORITES ? "" : t),
            H(!0),
            i == null || i(""),
            (e = R.current) == null || e.focus());
        },
        le = function (t) {
          var e = f[z];
          (j(-1), ie(e));
        },
        se = function (t) {
          var e,
            n = (z + 1) % f.length,
            r = f[n];
          ((e = K.current.get(r)) == null || e.focus(), j(n));
        },
        ue = function (t) {
          var e,
            n = (f.length + z - 1) % f.length,
            r = f[n];
          ((e = K.current.get(r)) == null || e.focus(), j(n));
        },
        ce = function (t) {
          (Q(), j(-1));
        },
        de =
          a ===
          o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel,
        me = function (t) {
          if (t.key === "ArrowUp") return (ee(), !1);
          if (t.key === "ArrowDown") {
            var e;
            return ((e = S.current) == null || e.initSelection(), !1);
          }
        };
      return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: v,
        handlers: { tab: oe, "shift+tab": ae, up: ne, down: re },
        className: {
          0: "",
          2: "x1wwgg98 x3vt2i0 x6ikm8r x10wlt62",
          1: "x3g49sk",
          3: "x3vt2i0 x6ikm8r x10wlt62 x3g49sk",
        }[
          (!!(
            de &&
            b !==
              o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL
          ) <<
            1) |
            (!!(
              de &&
              b !==
                o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize
                  .SMALL &&
              o("WAWebABProps").getABPropConfigValue(
                "web_expression_panels_show_less_stickers",
              )
            ) <<
              0)
        ],
        children: [
          u.jsx(r("WAWebPanelsMenu.react"), {
            selectedSectionId: W,
            sectionIds: f,
            renderSectionTab: function (t, n) {
              var e = function (n) {
                K.current.set(t, n);
              };
              return u.jsx(
                r("WAWebGifPanelMenuSectionTab.react"),
                {
                  onClick: ie,
                  sectionId: t,
                  selected: n,
                  showFocusIndicator: z !== -1,
                  displayLocation: a,
                  ref: e,
                },
                t,
              );
            },
            displayLocation: a,
            showTabHighlight: !(t != null && t.trim()),
            onFocusPrev: ue,
            onFocusNext: se,
            onEnter: le,
            onFocusLeave: ce,
          }),
          u.jsx("div", {
            className: "x6ikm8r x10wlt62 x17dzmu4 xm4efwp x20szjt",
            children: u.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x1n2onr6 xhjsbib x5yr21d" },
                  2: { className: "x1n2onr6 x5yr21d x1kapp2c" },
                  1: { className: "x1n2onr6 xhjsbib x5yr21d xfl633f" },
                  3: { className: "x1n2onr6 x5yr21d x1kapp2c xfl633f" },
                }[(!!de << 1) | (!!de << 0)],
                {
                  onMouseDown: te,
                  children: [
                    u.jsx("div", {
                      onMouseDown: o("WAWebStopEvent").stopPropagation,
                      onMouseUp: o("WAWebStopEvent").stopPropagation,
                      onFocus: o("WAWebStopEvent").stopPropagation,
                      children: u.jsx(r("WDSSearchBar.react"), {
                        hintText: s._(/*BTDS*/ "Search GIFs via {service}", [
                          s._param(
                            "service",
                            o("WAWebGifPanelGifInfo").BRAND_NAMES[
                              o("WAWebGifPanelGifInfo").getGifProvider()
                            ],
                          ),
                        ]),
                        onValueChange: Z,
                        onKeyDown: me,
                        ref: R,
                        value: M,
                        xstyle: g.searchBarWrapper,
                      }),
                    }),
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        {
                          0: {
                            className:
                              "x1n2onr6 x9f619 x1rr6inw xexx8yu x16lop4 x1raw695 x1rife3k",
                          },
                          1: {
                            className:
                              "x1n2onr6 x9f619 xexx8yu x16lop4 x1raw695 x1rife3k x1dbpiyn",
                          },
                        }[
                          !!(
                            de &&
                            b !==
                              o("WAWebExpressionsPanelPicker.react")
                                .ExpressionsPanelSize.SMALL
                          ) << 0
                        ],
                        {
                          onScroll: Y,
                          ref: L,
                          children: u.jsx(
                            o("WAWebGifPanelGifSearch.react").GifSearch,
                            {
                              displayLocation: a,
                              ref: S,
                              onGif: r("WANullthrows")(y),
                              searchText: (M || "").replace(/^\s+/, ""),
                              scrollGifIntoViewIfNeeded: J,
                              selectedSectionId: W,
                            },
                          ),
                        },
                      ),
                    ),
                  ],
                },
              ),
            ),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
