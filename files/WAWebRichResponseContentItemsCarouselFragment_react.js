__d(
  "WAWebRichResponseContentItemsCarouselFragment.react",
  [
    "cx",
    "WANullthrows",
    "WAWebCarouselNavigationButton",
    "WAWebChevronButton.react",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "useWAWebCarouselScrollUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = {
        carouselControlContainer: {
          width: "xh8yej3",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function g(e) {
      var t,
        n,
        a = e.fragment,
        i = e.msg,
        l = e.ref,
        s = p(null),
        c = p(null),
        g = a.contentItem.items,
        h = _(null),
        y = h[0],
        C = h[1],
        b = _(!1),
        v = b[0],
        S = b[1],
        R = r("useWAWebCarouselScrollUtils")(s, S, C, [i]),
        L = R[0],
        E = R[1],
        k = function () {
          return s.current;
        },
        I = function () {
          return r("WANullthrows")(c.current);
        };
      (d(function () {
        var e = s.current;
        if (e) {
          var t = e.scrollWidth > e.clientWidth;
          C(t);
        }
      }, []),
        m(l, function () {
          return { getElement: k, getContainerElement: I };
        }));
      var T = g.map(function (e, t) {
          return u.jsx(
            "div",
            {
              className: "x1e03a83 x1gqwnh9 x1s9hi2i",
              children: u.jsx(
                o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer,
                {
                  msg: i.unsafe(),
                  displayType:
                    o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
                  theme: "bot_plugin_link",
                  reelItem: e,
                },
              ),
            },
            t,
          );
        }),
        D =
          v === !0
            ? u.jsx(
                o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                {
                  buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
                  onButtonClick: E,
                  displayType: o("WAWebChevronButton.react")
                    .ChevronButtonDisplayType.BotReelsPluginCarousel,
                },
              )
            : null,
        x =
          y === !0
            ? u.jsx(
                o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                {
                  buttonType: o("WAWebChevronButton.react").ButtonType.Next,
                  onButtonClick: E,
                  displayType: o("WAWebChevronButton.react")
                    .ChevronButtonDisplayType.BotReelsPluginCarousel,
                },
              )
            : null;
      return u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "content-item-carousel-fragment",
        children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((t = {}), (t._aopv = !0), t),
          ),
          xstyle: g.length > 3 && f.carouselControlContainer,
          ref: c,
          tabIndex: -1,
          children: u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "bot-plugin-carousel",
            children: u.jsxs("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((n = {}), (n._aopx = !0), n),
              ),
              children: [
                D,
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "xw2csxc x10wlt62 xlrljjx xp43t2z x5j5mwf xptal55 xjodkme",
                      },
                      1: {
                        className:
                          "x10wlt62 xlrljjx xp43t2z x5j5mwf xptal55 xjodkme x1rohswg x6ikm8r",
                      },
                    }[(g.length === 1) << 0],
                    {
                      onScroll: L,
                      ref: s,
                      children: u.jsx("div", {
                        className:
                          "x78zum5 x1q0g3np xozqiw3 x9xpc1z xezivpi xk8lq53",
                        "data-id": i.id.id,
                        children: T,
                      }),
                    },
                  ),
                ),
                x,
              ],
            }),
          }),
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
