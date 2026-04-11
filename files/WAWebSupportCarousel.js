__d(
  "WAWebSupportCarousel",
  [
    "WALongInt",
    "WAWebChevronButton.react",
    "WAWebDisplayType",
    "WAWebErrorBoundary.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMediaLinkPreview.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportCarouselChevronBtn.react",
    "WAWebVelocityAnimate",
    "WAWebVelocityTransitionGroup",
    "WAWebWaLogoIcon.react",
    "WAWebWamEnumSupportAiEventType",
    "react",
    "useVisibility",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState,
      p = {
        carouselItem: { height: "x5yr21d", $$css: !0 },
        carouselItemThumbnail: {
          backgroundColor: "x1ew7x2d",
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          borderEndEndRadius: "x1u0fnx4",
          borderEndStartRadius: "xbxn0j6",
          $$css: !0,
        },
        carouselItemIcon: {
          color: "x1jlmlw1",
          backgroundColor: "x1ew7x2d",
          marginTop: "xw7yly9",
          marginInlineEnd: "x1ys307a",
          marginBottom: "x1yztbdb",
          marginInlineStart: "xyqm7xq",
          $$css: !0,
        },
      },
      _ = 200,
      f = 7,
      g = 200;
    function h(e) {
      var t = d(null),
        n = r("useVisibility")({
          onVisible: function () {
            R();
          },
        }),
        a = n[0],
        i = m(!1),
        l = i[0],
        u = i[1],
        h = m(!1),
        C = h[0],
        b = h[1],
        v = r("WAWebL10N").isRTL();
      c(function () {
        return (
          window.addEventListener("resize", R),
          function () {
            window.removeEventListener("resize", R);
          }
        );
      }, []);
      var S = function (o) {
          var n = _ * 0.5 * e.items.length * (o ? 1 : -1) * (v ? -1 : 1),
            a = t == null ? void 0 : t.current;
          a != null &&
            (r("WAWebVelocityAnimate")(a, "stop"),
            r("WAWebVelocityAnimate")(a, "scroll", {
              SCROLL_ANIMATION: g,
              container: a,
              offset: n,
              axis: "x",
              easing: [0.1, 0.82, 0.25, 1],
            }));
        },
        R = r("useWAWebThrottledCallback")(function () {
          var e = t == null ? void 0 : t.current;
          if (e != null) {
            var n = (v ? -1 : 1) * e.scrollLeft <= f;
            b(!n);
            var r =
              (v ? -1 : 1) * e.scrollLeft + e.clientWidth >= e.scrollWidth - f;
            u(!r);
          }
        }, 100),
        L = e.items.map(function (t) {
          return s.jsx(
            "div",
            {
              children: s.jsx(r("WAWebMediaLinkPreview.react"), {
                containerXstyle: p.carouselItem,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                title: t.title,
                theme: "support_citations_link",
                matchedText: t.subtitle,
                isLoading: !1,
                onClick: function () {
                  (o("WAWebExternalLink.react").openExternalLink(y(t.cmsId)),
                    new (o(
                      "WAWebSupportAiSessionWamEvent",
                    ).SupportAiSessionWamEvent)({
                      supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                        .SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_CITATION_TAPPED,
                      citationCmsId: t.cmsId,
                    }).commit());
                },
                thumbnail: s.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: p.carouselItemThumbnail,
                  children: s.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                    height: 38,
                    width: 38,
                    displayInline: !0,
                    iconXstyle: p.carouselItemIcon,
                  }),
                }),
              }),
            },
            e.items.indexOf(t),
          );
        }),
        E =
          C === !0
            ? s.jsx(r("WAWebSupportCarouselChevronBtn.react"), {
                type: o("WAWebChevronButton.react").ButtonType.Prev,
                onClick: function () {
                  S(!1);
                },
              })
            : null,
        k =
          l === !0
            ? s.jsx(r("WAWebSupportCarouselChevronBtn.react"), {
                type: o("WAWebChevronButton.react").ButtonType.Next,
                onClick: function () {
                  S(!0);
                },
              })
            : null;
      return s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "support-citations-carousel",
        children: s.jsx("div", {
          className: "x1n2onr6",
          children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: a,
            tabIndex: -1,
            children: s.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "support-citations-carousel",
              children: s.jsxs("div", {
                className: "x1n2onr6",
                children: [
                  E,
                  s.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className:
                            "x1rife3k xlrljjx xp43t2z x5j5mwf xptal55 xjodkme x7r5mf7 x12nagc",
                        },
                        1: {
                          className:
                            "x1rife3k xlrljjx xp43t2z x5j5mwf xptal55 xjodkme x7r5mf7 x12nagc x1rohswg",
                        },
                      }[(e.items.length === 1) << 0],
                      {
                        onScroll: R,
                        ref: t,
                        children: s.jsx(
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
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x15x72sd",
                              },
                              4: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc xmj3umr",
                              },
                              12: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc xmj3umr",
                              },
                              2: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9",
                              },
                              10: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9",
                              },
                              6: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9",
                              },
                              14: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x1s523m9",
                              },
                              1: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                              9: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                              5: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                              13: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                              3: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                              11: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                              7: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                              15: {
                                className:
                                  "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x2ucdep",
                              },
                            }[
                              ((e.items.length === 1) << 3) |
                                ((e.items.length === 2) << 2) |
                                ((e.items.length === 3) << 1) |
                                ((e.items.length === 4) << 0)
                            ],
                            { children: L },
                          ),
                        ),
                      },
                    ),
                  ),
                  k,
                ],
              }),
            }),
          }),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return C(e)
        ? o("WAWebFaqUrl").getFullUrl(o("WALongInt").decimalStringToLongInt(e))
        : o("WAWebFaqUrl").getFaqUrl();
    }
    function C(e) {
      var t = /^[1-9]\d*$/;
      return e != null && t.test(e);
    }
    l.default = h;
  },
  98,
);
