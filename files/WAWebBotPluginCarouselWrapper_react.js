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
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(52),
        l,
        s;
      i[0] !== t
        ? ((s = t.ref),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = s))
        : ((l = i[1]), (s = i[2]));
      var c = g(null),
        m = l,
        p = m.botPluginCarouselId,
        y = m.isFocused,
        C = m.msgs,
        S =
          (n = C[0]) == null || (n = n.id) == null || (n = n.remote) == null
            ? void 0
            : n.isUser(),
        R = g(null),
        L;
      i[3] !== C[0]
        ? ((L = o("WAWebMsgGetters").getBotPluginType(C[0])),
          (i[3] = C[0]),
          (i[4] = L))
        : (L = i[4]);
      var E =
          L ===
          o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.REELS,
        k = h(!0),
        I = k[0],
        T = k[1],
        D = h(null),
        x = D[0],
        $ = D[1],
        P = h(!1),
        N = P[0],
        M = P[1],
        w;
      if (i[5] !== C[0]) {
        var A;
        ((w =
          (A = o("WAWebMsgGetters").getBotResponseTargetId(C[0])) != null
            ? A
            : "NULL_MSG_BOT_PLUGIN_TARGET_ID"),
          (i[5] = C[0]),
          (i[6] = w));
      } else w = i[6];
      var F = w,
        O;
      (i[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function (t) {
            var e = t === void 0 ? !0 : t;
            (T(e), self.setTimeout(v));
          }),
          (i[7] = O))
        : (O = i[7]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "bot_toggle_plugin_search_details_for_target_id_" + F,
          O,
        ));
      var B;
      i[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function (t, n) {
            var e = R.current;
            if (e) {
              var r = e.offsetParent;
              r &&
                (r instanceof HTMLElement || u(0, 56542),
                o("WAWebDomScroll").scrollAt(e, r, n).then(t));
            }
          }),
          (i[8] = B))
        : (B = i[8]);
      var W = B,
        q;
      i[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function () {
            return c.current;
          }),
          (i[9] = q))
        : (q = i[9]);
      var U = q,
        V;
      i[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = function () {
            return r("WANullthrows")(R.current);
          }),
          (i[10] = V))
        : (V = i[10]);
      var H = V,
        G;
      (i[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function () {
            return { getElement: U, getContainerElement: H };
          }),
          (i[11] = G))
        : (G = i[11]),
        f(s, G));
      var z;
      i[12] !== C.length || i[13] !== x
        ? ((z = function () {
            x == null && C.length > 1 && $(!0);
          }),
          (i[12] = C.length),
          (i[13] = x),
          (i[14] = z))
        : (z = i[14]);
      var j;
      (i[15] !== C || i[16] !== x
        ? ((j = [C, x]), (i[15] = C), (i[16] = x), (i[17] = j))
        : (j = i[17]),
        _(z, j));
      var K = r("useWAWebCarouselScrollUtils")(c, M, $, C),
        Q = K[0],
        X = K[1],
        Y;
      if (i[18] !== E || i[19] !== C) {
        var J;
        (i[21] !== E
          ? ((J = function (t) {
              return d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  { 0: {}, 1: { className: "x1e03a83 x1vd4hg5" } }[!!E << 0],
                  {
                    children: d.jsx(
                      o("WAWebMediaLinkPreviewContainer.react")
                        .LinkPreviewContainer,
                      {
                        msg: t.unsafe(),
                        displayType: E
                          ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN
                          : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                        theme: "bot_plugin_link",
                      },
                    ),
                  },
                ),
                t.id.id,
              );
            }),
            (i[21] = E),
            (i[22] = J))
          : (J = i[22]),
          (Y = C.toSorted(b).map(J)),
          (i[18] = E),
          (i[19] = C),
          (i[20] = Y));
      } else Y = i[20];
      var Z = Y,
        ee;
      i[23] !== E || i[24] !== X || i[25] !== N
        ? ((ee =
            N === !0
              ? d.jsx(
                  o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                  {
                    buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
                    onButtonClick: function () {
                      return X(!1);
                    },
                    displayType: E
                      ? o("WAWebChevronButton.react").ChevronButtonDisplayType
                          .BotReelsPluginCarousel
                      : o("WAWebChevronButton.react").ChevronButtonDisplayType
                          .BotPluginCarousel,
                  },
                )
              : null),
          (i[23] = E),
          (i[24] = X),
          (i[25] = N),
          (i[26] = ee))
        : (ee = i[26]);
      var te = ee,
        ne;
      i[27] !== E || i[28] !== X || i[29] !== x
        ? ((ne =
            x === !0
              ? d.jsx(
                  o("WAWebCarouselNavigationButton").CarouselNavigationButton,
                  {
                    buttonType: o("WAWebChevronButton.react").ButtonType.Next,
                    onButtonClick: function () {
                      return X(!0);
                    },
                    displayType: E
                      ? o("WAWebChevronButton.react").ChevronButtonDisplayType
                          .BotReelsPluginCarousel
                      : o("WAWebChevronButton.react").ChevronButtonDisplayType
                          .BotPluginCarousel,
                  },
                )
              : null),
          (i[27] = E),
          (i[28] = X),
          (i[29] = x),
          (i[30] = ne))
        : (ne = i[30]);
      var re = ne,
        oe;
      i[31] !== y
        ? ((oe = y
            ? d.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
                parent: { scrollMsg: W },
              })
            : null),
          (i[31] = y),
          (i[32] = oe))
        : (oe = i[32]);
      var ae = oe,
        ie = o("WAWebErrorBoundary.react").ErrorBoundary,
        le = "bot-plugin-carousel",
        se = o("WAWebKeyboardHotKeys.react").HotKeys,
        ue = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}),
          (a._aopv = !0),
          (a._aopw = !I),
          (a._amjz = S),
          (a._amjy = !S),
          a),
        ),
        ce;
      if (
        i[33] !== p ||
        i[34] !== Z ||
        i[35] !== Q ||
        i[36] !== E ||
        i[37] !== C.length ||
        i[38] !== re ||
        i[39] !== te ||
        i[40] !== I
      ) {
        var de;
        ((ce = I
          ? d.jsxs("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((de = {}),
                (de._aopx = !0),
                (de._amkd = !0),
                (de._ap4k = !!E && C.length === 1),
                (de._ap4m = !!E && C.length === 2),
                (de._ap4n = !!E && C.length === 3),
                de),
              ),
              children: [
                te,
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
                    }[(C.length === 1) << 0],
                    {
                      onScroll: Q,
                      ref: c,
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
                            (!!E << 3) |
                              ((C.length === 1) << 2) |
                              ((C.length === 2) << 1) |
                              ((C.length === 4) << 0)
                          ],
                          { "data-id": p, children: Z },
                        ),
                      ),
                    },
                  ),
                ),
                re,
              ],
            })
          : null),
          (i[33] = p),
          (i[34] = Z),
          (i[35] = Q),
          (i[36] = E),
          (i[37] = C.length),
          (i[38] = re),
          (i[39] = te),
          (i[40] = I),
          (i[41] = ce));
      } else ce = i[41];
      var me;
      i[42] !== ce
        ? ((me = d.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "bot-plugin-carousel",
            children: ce,
          })),
          (i[42] = ce),
          (i[43] = me))
        : (me = i[43]);
      var pe;
      i[44] !== se || i[45] !== ue || i[46] !== me || i[47] !== ae
        ? ((pe = d.jsxs(se, {
            className: ue,
            ref: R,
            tabIndex: -1,
            children: [me, ae],
          })),
          (i[44] = se),
          (i[45] = ue),
          (i[46] = me),
          (i[47] = ae),
          (i[48] = pe))
        : (pe = i[48]);
      var _e;
      return (
        i[49] !== ie || i[50] !== pe
          ? ((_e = d.jsx(ie, { name: le, children: pe })),
            (i[49] = ie),
            (i[50] = pe),
            (i[51] = _e))
          : (_e = i[51]),
        _e
      );
    }
    function b(e, t) {
      var n = e.botPluginReferenceIndex,
        r = t.botPluginReferenceIndex;
      return n != null && r != null ? (n > r ? 1 : -1) : 0;
    }
    function v() {
      o("WAWebCmd").Cmd.scrollChatHeight(y);
    }
    l.default = C;
  },
  98,
);
