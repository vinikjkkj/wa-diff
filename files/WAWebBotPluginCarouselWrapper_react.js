__d(
  "WAWebBotPluginCarouselWrapper.react",
  [
    "cx",
    "invariant",
    "WANullthrows",
    "WAWebCarouselNavigationButton",
    "WAWebChevronButton.react",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMsgGetters",
    "WAWebProtobufsAICommon.pb",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperListeners.react",
    "react",
    "useWAWebCarouselScrollUtils",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useImperativeHandle,
      g = m.useRef,
      h = m.useState,
      y = 100;
    function C(t) {
      var n,
        a,
        i,
        l,
        s = t.ref,
        c = babelHelpers.objectWithoutPropertiesLoose(t, e),
        m = g(null),
        C = c.botPluginCarouselId,
        b = c.isFocused,
        v = c.msgs,
        S =
          (n = v[0]) == null || (n = n.id) == null || (n = n.remote) == null
            ? void 0
            : n.isUser(),
        R = g(null),
        L =
          o("WAWebMsgGetters").getBotPluginType(v[0]) ===
          o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.REELS,
        E = h(!0),
        k = E[0],
        I = E[1],
        T = h(null),
        D = T[0],
        x = T[1],
        $ = h(!1),
        P = $[0],
        N = $[1],
        M =
          (a = o("WAWebMsgGetters").getBotResponseTargetId(v[0])) != null
            ? a
            : "NULL_MSG_BOT_PLUGIN_TARGET_ID";
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "bot_toggle_plugin_search_details_for_target_id_" + M,
        function (e) {
          (e === void 0 && (e = !0),
            I(e),
            self.setTimeout(function () {
              o("WAWebCmd").Cmd.scrollChatHeight(y);
            }));
        },
      );
      var w = p(function (e, t) {
          var n = R.current;
          if (n) {
            var r = n.offsetParent;
            r &&
              (r instanceof HTMLElement || u(0, 56542),
              o("WAWebDomScroll").scrollAt(n, r, t).then(e));
          }
        }, []),
        A = function () {
          return m.current;
        },
        F = function () {
          return r("WANullthrows")(R.current);
        };
      (f(s, function () {
        return { getElement: A, getContainerElement: F };
      }),
        _(
          function () {
            D == null && v.length > 1 && x(!0);
          },
          [v, D],
        ));
      var O = r("useWAWebCarouselScrollUtils")(m, N, x, v),
        B = O[0],
        W = O[1],
        q = v
          .toSorted(function (e, t) {
            var n = e.botPluginReferenceIndex,
              r = t.botPluginReferenceIndex;
            return n != null && r != null ? (n > r ? 1 : -1) : 0;
          })
          .map(function (e) {
            return d.jsx(
              "div",
              babelHelpers.extends(
                {},
                { 0: {}, 1: { className: "x1e03a83 x1vd4hg5" } }[!!L << 0],
                {
                  children: d.jsx(
                    o("WAWebMediaLinkPreviewContainer.react")
                      .LinkPreviewContainer,
                    {
                      msg: e.unsafe(),
                      displayType: L
                        ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN
                        : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                      theme: "bot_plugin_link",
                    },
                  ),
                },
              ),
              e.id.id,
            );
          }),
        U =
          P === !0
            ? d.jsx(
                o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                {
                  buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
                  onButtonClick: function () {
                    return W(!1);
                  },
                  displayType: L
                    ? o("WAWebChevronButton.react").ChevronButtonDisplayType
                        .BotReelsPluginCarousel
                    : o("WAWebChevronButton.react").ChevronButtonDisplayType
                        .BotPluginCarousel,
                },
              )
            : null,
        V =
          D === !0
            ? d.jsx(
                o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                {
                  buttonType: o("WAWebChevronButton.react").ButtonType.Next,
                  onButtonClick: function () {
                    return W(!0);
                  },
                  displayType: L
                    ? o("WAWebChevronButton.react").ChevronButtonDisplayType
                        .BotReelsPluginCarousel
                    : o("WAWebChevronButton.react").ChevronButtonDisplayType
                        .BotPluginCarousel,
                },
              )
            : null,
        H = b
          ? d.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
              parent: { scrollMsg: w },
            })
          : null;
      return d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "bot-plugin-carousel",
        children: d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((i = {}),
            (i._aopv = !0),
            (i._aopw = !k),
            (i._amjz = S),
            (i._amjy = !S),
            i),
          ),
          ref: R,
          tabIndex: -1,
          children: [
            d.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "bot-plugin-carousel",
              children: k
                ? d.jsxs("div", {
                    className: o(
                      "WAWebClassnames",
                    ).classnamesConvertMeToStylexPlease(
                      ((l = {}),
                      (l._aopx = !0),
                      (l._amkd = !0),
                      (l._ap4k = !!L && v.length === 1),
                      (l._ap4m = !!L && v.length === 2),
                      (l._ap4n = !!L && v.length === 3),
                      l),
                    ),
                    children: [
                      U,
                      d.jsx(
                        "div",
                        babelHelpers.extends(
                          {},
                          {
                            0: {
                              className:
                                "x1rife3k xlrljjx xp43t2z x5j5mwf xptal55 xjodkme x1xmf6yo xod5an3",
                            },
                            1: {
                              className:
                                "x1rife3k xlrljjx xp43t2z x5j5mwf xptal55 xjodkme x1xmf6yo xod5an3 x1rohswg",
                            },
                          }[(v.length === 1) << 0],
                          {
                            onScroll: B,
                            ref: m,
                            children: d.jsx(
                              "div",
                              babelHelpers.extends(
                                {},
                                {
                                  0: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x75ztot",
                                  },
                                  8: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x2vq7qx xtfe9a7 xeq5yr9",
                                  },
                                  4: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x15x72sd",
                                  },
                                  12: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x14atkfc x15x72sd",
                                  },
                                  2: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n",
                                  },
                                  10: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x2vq7qx xtfe9a7 xwv353n",
                                  },
                                  6: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x15x72sd xwv353n",
                                  },
                                  14: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x15x72sd xwv353n",
                                  },
                                  1: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x75ztot xgqtt45",
                                  },
                                  9: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xeq5yr9 xgqtt45",
                                  },
                                  5: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc xgqtt45",
                                  },
                                  13: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x14atkfc xgqtt45",
                                  },
                                  3: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n xgqtt45",
                                  },
                                  11: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xwv353n xgqtt45",
                                  },
                                  7: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n xgqtt45",
                                  },
                                  15: {
                                    className:
                                      "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xwv353n xgqtt45",
                                  },
                                }[
                                  (!!L << 3) |
                                    ((v.length === 1) << 2) |
                                    ((v.length === 2) << 1) |
                                    ((v.length === 4) << 0)
                                ],
                                { "data-id": C, children: q },
                              ),
                            ),
                          },
                        ),
                      ),
                      V,
                    ],
                  })
                : null,
            }),
            H,
          ],
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
