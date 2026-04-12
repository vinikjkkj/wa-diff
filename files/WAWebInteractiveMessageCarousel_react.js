__d(
  "WAWebInteractiveMessageCarousel.react",
  [
    "cx",
    "invariant",
    "WAWebABProps",
    "WAWebBizVPVTrackableMessageComponent.react",
    "WAWebCarousel.react",
    "WAWebClassnames",
    "WAWebCopyPasteCopyable.react",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActionsForCarouselCard",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebL10N",
    "WAWebMessageCropping",
    "WAWebMsgType",
    "WAWebResizeObserver",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebWamEnumMessageBodyTypeEnum",
    "react",
    "stylex",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMeasureTimeOnScreen",
    "useWAWebMsgValues",
    "useWAWebOnScreen",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useImperativeHandle,
      g = m.useLayoutEffect,
      h = m.useMemo,
      y = m.useRef,
      C = m.useState,
      b = 4;
    function v(t) {
      var n,
        a = t.bizVPVData,
        i = t.isMsgVisible,
        l = t.mainMsgWrapperRef,
        s = t.msg,
        c = t.msgComponentRef,
        m = y(null),
        _ = C(0),
        v = _[0],
        k = _[1],
        I = C(null),
        T = I[0],
        D = I[1],
        x = E(),
        $ = x[0],
        P = x[1],
        N = o("WAWebFrontendMsgGetters").getChat(s.unsafe()),
        M = r("useWAWebConversationPanelCanCompose")(N),
        w = M[0],
        A = o("useWAWebMsgValues").useMsgValues(s.id, [
          o("WAWebFrontendMsgGetters").getCarouselCards,
        ]),
        F = A[0];
      R(m == null || (n = m.current) == null ? void 0 : n.outerDivRef, s);
      var O = h(
        function () {
          return F == null
            ? null
            : F.map(function (e) {
                var t = e.safe();
                return (
                  t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
                    u(0, 73709),
                  { card: t, actions: S(t, w) }
                );
              });
        },
        [F, w],
      );
      g(
        function () {
          var e,
            t =
              m == null ||
              (e = m.current) == null ||
              (e = e.outerDivRef) == null
                ? void 0
                : e.current;
          if (t != null) {
            var n = o("WAWebCopyPasteCopyable.react").findCopyableChildren(t),
              r = n.reduce(function (e, t) {
                return t.getBoundingClientRect().height > e
                  ? t.getBoundingClientRect().height
                  : e;
              }, Number.MIN_VALUE);
            k(r);
          }
        },
        [k, O],
      );
      var B = p(
        function (e) {
          var t = getComputedStyle(e);
          D({
            left: parseFloat(t.paddingLeft),
            right: parseFloat(t.paddingRight),
          });
        },
        [D],
      );
      g(
        function () {
          var e,
            t = (e = l == null ? void 0 : l.current) != null ? e : null;
          if (t != null)
            return (
              B(t),
              o("WAWebResizeObserver").observe(t, function () {
                return B(t);
              })
            );
        },
        [B, l, D],
      );
      var W = p(
          function (e) {
            var t,
              n =
                m == null || (t = m.current) == null ? void 0 : t.scrollToCard;
            O == null || n == null || n(e);
          },
          [O],
        ),
        q = h(
          function () {
            var e = {};
            if (O == null) return e;
            for (var t = 0; t < O.length; t++) {
              var n = O[t].card;
              e[n.id.toString()] = t;
            }
            return e;
          },
          [O],
        ),
        U = p(
          function (e) {
            var t = q[e.toString()],
              n = $(t).header;
            return n == null || n.getImgNode == null ? null : n.getImgNode();
          },
          [$, q],
        ),
        V = p(
          function (e) {
            var t = q[e.toString()];
            return $(t).visibility === !0;
          },
          [$, q],
        );
      if (
        (f(c, function () {
          return { scrollToCard: W, getImgNodeByMsgKey: U, isCardVisible: V };
        }),
        O == null)
      )
        return null;
      var H = s.id.fromMe === !1;
      return d.jsx(
        "div",
        babelHelpers.extends(
          { onDoubleClick: o("WAWebStopEvent").stopPropagation },
          {
            0: { className: "x78zum5 xh8yej3 x13a6bvl" },
            1: { className: "x78zum5 xh8yej3 x1nhvcw1" },
          }[!!H << 0],
          {
            children: d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(!H && !r("WAWebL10N").isRTL()),
                {
                  children: d.jsx(r("WAWebCarousel.react"), {
                    cardWidth: o("WAWebMessageCropping").CAROUSEL_MEDIA_DIMS
                      .bubbleWidth,
                    spacing: b,
                    carouselMargins: T,
                    isRTL: r("WAWebL10N").isRTL(),
                    ref: m,
                    children: O.map(function (e, t) {
                      var n,
                        l = d.jsx(L, {
                          msg: e.card,
                          visibilityRef: function (n) {
                            return P(t, { visibility: n });
                          },
                          children: d.jsx(r("WAWebInteractiveBubble.react"), {
                            msg: e.card,
                            displayAuthor: !1,
                            displayFooter: !1,
                            header: d.jsx(r("WAWebInteractiveHeader"), {
                              msg: e.card,
                              isMsgVisible: i,
                              headerRef: function (n) {
                                return P(t, { header: n });
                              },
                            }),
                            actions: e.actions,
                            minTextHeight: v,
                            hideMeta: !0,
                          }),
                        });
                      return d.jsx(
                        "div",
                        {
                          className: o(
                            "WAWebClassnames",
                          ).classnamesConvertMeToStylexPlease(
                            {
                              0: "xp43t2z x5j5mwf xptal55 xjodkme xfl633f x1g5lz36",
                              1: "xp43t2z x5j5mwf xptal55 xjodkme xfl633f x1ew7x2d",
                            }[!!H << 0],
                            "_amk4",
                            o("WAWebABProps").getABPropConfigValue(
                              "wa_web_highlight_me_mention",
                            ) && "_avau",
                          ),
                          ref: function (n) {
                            return P(t, { containerEl: n });
                          },
                          children:
                            a != null &&
                            ((n = e.card.id) == null ? void 0 : n.id) != null
                              ? d.jsx(
                                  r(
                                    "WAWebBizVPVTrackableMessageComponent.react",
                                  ),
                                  {
                                    component: l,
                                    visibilityData: babelHelpers.extends(
                                      {},
                                      a,
                                      {
                                        messageId: e.card.id.id,
                                        messageBodyType: o(
                                          "WAWebWamEnumMessageBodyTypeEnum",
                                        ).MESSAGE_BODY_TYPE_ENUM.CAROUSEL_CARD,
                                        mmCarouselCardIndex: t,
                                      },
                                    ),
                                  },
                                )
                              : l,
                        },
                        e.card.id.toString(),
                      );
                    }),
                  }),
                },
              ),
            ),
          },
        ),
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      var n = r("WAWebGetInteractiveActionsForCarouselCard")(e, t);
      return n.map(function (e) {
        var t;
        return babelHelpers.extends({}, e, {
          onClick:
            (t = e.onClick) != null
              ? t
              : function () {
                  return r("WAWebShowMessageActionFallbackErrorAction")();
                },
        });
      });
    }
    function R(e, t) {
      var n = p(
        function (e) {
          return o("WAWebInteractiveMessageCarouselLogEvents").logViewCarousel(
            o("WAWebStateUtils").unproxy(t.unsafe()),
            e,
          );
        },
        [t],
      );
      r("useWAWebMeasureTimeOnScreen")(e, n);
    }
    function L(e) {
      var t = e.children,
        n = e.msg,
        a = e.visibilityRef,
        i = y(),
        l = p(
          function (e) {
            return o(
              "WAWebInteractiveMessageCarouselLogEvents",
            ).logViewCarouselCard(o("WAWebStateUtils").unproxy(n.unsafe()), e);
          },
          [n],
        );
      r("useWAWebMeasureTimeOnScreen")(i, l);
      var s = r("useWAWebOnScreen")(i, function () {
        return a(!1);
      });
      return (
        _(
          function () {
            a(s);
          },
          [s, a],
        ),
        d.jsx("span", { ref: i, children: t })
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      var e = y([]),
        t = p(function (t, n) {
          e.current[t] = babelHelpers.extends({}, e.current[t], n);
        }, []),
        n = p(function (t) {
          var n;
          return (n = e.current[t]) != null ? n : {};
        }, []);
      return [n, t];
    }
    l.default = v;
  },
  98,
);
