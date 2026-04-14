__d(
  "WAWebSimilarNewslettersUnits.react",
  [
    "WAWebChatEntryPoint",
    "WAWebCommonNewsletterStrings",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterDirectorySearchAction",
    "WAWebNewsletterLoggingContext",
    "WAWebNewsletterRecommendedV2Unit.react",
    "WAWebSimilarNewsletterLogging",
    "WAWebSimilarNewsletterSessionId",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumBannerStatus",
    "WAWebWamEnumBannerStatusReason",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventUnit",
    "WAWebWamEnumTsSurface",
    "WAWebXIcon.react",
    "WDSButton.react",
    "react",
    "stylex",
    "useWAWebOnUnmount",
    "useWAWebSimilarNewsletters",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = {
        root: { backgroundColor: "x1280gxy", position: "x1n2onr6", $$css: !0 },
        dismissButton: {
          position: "x10l6tqk",
          top: "x1eu8d0j",
          insetInlineEnd: "xeer0ze",
          left: null,
          right: null,
          $$css: !0,
        },
        iconFill: { color: "xhslqc4", $$css: !0 },
      };
    function g(t) {
      var n = t.chat,
        a = t.ref,
        i = o("useWAWebSimilarNewsletters").useSimilarNewsletters(n),
        l = i.similarNewsletters,
        s = i.similarNewslettersToDisplay,
        c = p(!1),
        _ = o(
          "WAWebSimilarNewsletterSessionId",
        ).useSimilarNewslettersSessionId(),
        g = m(
          function () {
            return {
              similarNewsletterSessionId: _,
              eventUnit: o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT
                .SIMILAR_CHANNELS,
              entryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
                .SIMILAR_CHANNEL,
            };
          },
          [_],
        );
      (r("useWAWebOnUnmount")(function () {
        o(
          "WAWebNewsletterAttributionLogging",
        ).NewsletterCoreEventLogger.setIsSimilarUnitMountedForChat(null);
      }),
        d(
          function () {
            c.current ||
              (o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.setSimilarChannelsSessionId(_),
              o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.setIsSimilarUnitMountedForChat(n.id),
              o("WAWebSimilarNewsletterLogging").logSimilarNewsletterImpression(
                {
                  originNewsletter: n,
                  similarNewsletters: l,
                  similarNewslettersToDisplay: s,
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                  sessionId: _,
                  bannerStatus: o("WAWebWamEnumBannerStatus").BANNER_STATUS
                    .DISPLAYED,
                },
              ),
              (c.current = !0));
          },
          [n],
        ));
      var h = function () {
        var e;
        (o("WAWebSimilarNewsletterLogging").logSimilarNewsletterDismiss({
          chat: n,
          reason: o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON
            .CLOSE_TAP,
          sessionId: _,
        }),
          (e = o("WAWebStateUtils").unproxy(n).newsletterMetadata) == null ||
            e.resetRecentlyFollowedFrom());
      };
      return u.jsx(r("WAWebNewsletterLoggingContext").Provider, {
        value: g,
        children: u.jsxs(
          "div",
          babelHelpers.extends(
            {
              "aria-label": o(
                "WAWebCommonNewsletterStrings",
              ).getNewsletterSimilarNewslettersTitle(),
              ref: a,
            },
            (e || (e = r("stylex"))).props(
              f.root,
              o("WAWebUISpacing").uiPadding.top12,
              o("WAWebUISpacing").uiPadding.bottom16,
              o("WAWebUISpacing").uiPadding.horiz16,
            ),
            {
              children: [
                u.jsx(r("WDSButton.react"), {
                  Icon: o("WAWebXIcon.react").XIcon,
                  onPress: h,
                  xstyle: [f.dismissButton, f.iconFill],
                  variant: "borderless",
                }),
                u.jsx(y, {
                  discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                    .CHANNEL_THREAD,
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                  newsletters: s,
                  similarNewslettersSessionId: Number(_),
                }),
              ],
            },
          ),
        ),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.chat,
        a = o("useWAWebSimilarNewsletters").useSimilarNewsletters(n),
        i = a.hasEnoughNewsletters,
        l = a.similarNewsletters,
        s = a.similarNewslettersToDisplay,
        c = o(
          "WAWebSimilarNewsletterSessionId",
        ).useSimilarNewslettersSessionId(),
        g = m(
          function () {
            return {
              similarNewsletterSessionId: c,
              eventUnit: o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT
                .SIMILAR_CHANNELS,
              entryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
                .SIMILAR_CHANNEL,
            };
          },
          [c],
        ),
        h = r("useWAWebUnmountSignal")(),
        C = _(s.length === 0),
        b = C[0],
        v = C[1];
      d(
        function () {
          h.aborted ||
            (s.length === 0 &&
              o("WAWebNewsletterDirectorySearchAction")
                .getSimilarNewslettersAction(n)
                .finally(function () {
                  return v(!1);
                }));
        },
        [n, s.length, h],
      );
      var S = p(!1);
      return (
        d(
          function () {
            !b &&
              !S.current &&
              (o(
                "WAWebSimilarNewsletterLogging",
              ).logSimilarNewsletterImpression({
                originNewsletter: n,
                similarNewsletters: l,
                similarNewslettersToDisplay: s,
                eventSurface: o("WAWebWamEnumChannelEventSurface")
                  .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                sessionId: c,
                bannerStatus: i
                  ? o("WAWebWamEnumBannerStatus").BANNER_STATUS.DISPLAYED
                  : o("WAWebWamEnumBannerStatus").BANNER_STATUS.HIDDEN,
              }),
              (S.current = !0));
          },
          [b],
        ),
        !i && !b
          ? null
          : u.jsx(r("WAWebNewsletterLoggingContext").Provider, {
              value: g,
              children: u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    f.root,
                    o("WAWebUISpacing").uiMargin.top10,
                    o("WAWebUISpacing").uiPadding.start30,
                    o("WAWebUISpacing").uiPadding.vert16,
                  ),
                  {
                    children: u.jsx(y, {
                      discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                        .CHANNEL_PROFILE,
                      eventSurface: o("WAWebWamEnumChannelEventSurface")
                        .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                      isLoading: b,
                      newsletters: s,
                      similarNewslettersSessionId: Number(c),
                    }),
                  },
                ),
              ),
            })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.discoverySurface,
        a = t.eventSurface,
        i = t.isLoading,
        l = i === void 0 ? !1 : i,
        s = t.newsletters,
        c = t.ref,
        d = t.similarNewslettersSessionId;
      return u.jsxs("div", {
        ref: c,
        children: [
          u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiMargin.bottom12,
              ),
              {
                children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  children: o(
                    "WAWebCommonNewsletterStrings",
                  ).getNewsletterSimilarNewslettersTitle(),
                }),
              },
            ),
          ),
          u.jsx(r("WAWebNewsletterRecommendedV2Unit.react"), {
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .SimilarNewsletters,
            discoverySurface: n,
            eventSurface: a,
            isFullUnit: !1,
            isLoading: l,
            newsletterEventUnit: o("WAWebWamEnumChannelEventUnit")
              .CHANNEL_EVENT_UNIT.SIMILAR_CHANNELS,
            newsletters: s,
            similarNewslettersSessionId: d,
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.SimilarNewslettersConversationBanner = g),
      (l.SimilarNewslettersInfoDrawerUnit = h));
  },
  98,
);
