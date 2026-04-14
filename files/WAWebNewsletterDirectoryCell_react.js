__d(
  "WAWebNewsletterDirectoryCell.react",
  [
    "WAJids",
    "WATimeUtils",
    "WAWebAppRootInteractionContext.react",
    "WAWebCellV2.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDetailImage.react",
    "WAWebFocusTracer",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardHotKeys.react",
    "WAWebName.react",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterDirectoryActionButton.react",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebOpenNewsletterPreviewChat",
    "WAWebOpenStatusQuotedFlow",
    "WAWebStatusCollection",
    "WAWebStatusImageRing.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumStatusRowSection",
    "WAWebWamEnumTsSurface",
    "react",
    "useWAWebActiveSelection",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebNewsletterDiscoveryVisibilityLogger",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState,
      m = 4,
      p = {
        title: {
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function _(e) {
      return o(
        "WAWebNewsletterGatingUtils",
      ).isNewsletterDiscoveryVisibilityLoggingEnabled()
        ? s.jsx(g, babelHelpers.extends({}, e))
        : s.jsx(f, babelHelpers.extends({}, e));
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n,
        a,
        i,
        l = e.chatEntryPoint,
        u = e.directoryFunnelLogger,
        _ = e.index,
        f = e.newsletter,
        g = e.newsletterDirectorySectionIndex,
        h = e.newsletterDirectorySectionName,
        y = e.onSelect,
        C = r("useWAWebActiveSelection")(
          e.active,
          "newsletter-" + e.newsletter.id.toString(),
        ),
        b = C[0],
        v = C[1],
        S = c(),
        R = o("useWAWebModelValues").useOptionalModelValues(
          f.newsletterMetadata,
          ["name", "size", "inviteCode", "isPreview", "statusMetadata"],
        ),
        L = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS_OPEN_CHAT,
          !1,
          !0,
        ),
        E = L.failInteraction,
        k = L.startInteraction,
        I = L.stopInteraction,
        T =
          R != null &&
          o("WATimeUtils").unixTime() -
            ((t =
              (n = R.statusMetadata) == null ? void 0 : n.lastStatusSentTime) !=
            null
              ? t
              : 0) <
            o("WATimeUtils").DAY_SECONDS,
        D =
          T &&
          o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled(),
        x = d(function () {
          var e;
          return (e = D
            ? o("WAWebStatusCollection").StatusCollection.get(f.id)
            : null) != null
            ? e
            : null;
        }),
        $ = x[0],
        P = x[1],
        N = D ? f.id.toString() : "",
        M = d(N),
        w = M[0],
        A = M[1];
      if (N !== w) {
        var F;
        (A(N),
          P(
            (F = D
              ? o("WAWebStatusCollection").StatusCollection.get(f.id)
              : null) != null
              ? F
              : null,
          ));
      }
      if (
        (o("useWAWebListener").useListener(
          D ? o("WAWebStatusCollection").StatusCollection : null,
          ["add", "remove", "change:msgsChanged"],
          function (e) {
            if (e.id === f.id) {
              var t;
              P(
                (t = o("WAWebStatusCollection").StatusCollection.get(f.id)) !=
                  null
                  ? t
                  : null,
              );
            }
          },
        ),
        R == null)
      )
        return null;
      var O = function (t) {
          (t.stopPropagation(),
            o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
              event: t,
              newsletterJid: o("WAJids").toNewsletterJid(f.id.toString()),
              statusModelId: f.id,
              rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                .CHANNEL_DIRECTORY_LIST,
              rowIndex: _,
            }));
        },
        B = function () {
          (k(),
            u == null || u.logNavigateToNewsletterFromRow(f.id, _),
            y == null || y(),
            o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.setNewsletterDirectoryLoggingData({
              directoryCategoryName: h,
              directoryChannelIndex: _,
              directoryCategoryIndex: g,
            }),
            o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
              identifier: R.inviteCode,
              chatEntryPoint: l,
              discoverySurface: e.discoverySurface,
              failInteraction: E,
              stopInteraction: I,
            }));
        },
        W = function () {
          r("WAWebFocusTracer").focus(S.current);
        },
        q = function () {
          r("WAWebFocusTracer").focus(b.current);
        },
        U = { enter: B, space: B, right: W, left: q },
        V = {
          eventSurface: o(
            "WAWebNewsletterLoggingUtils",
          ).getEventSurfaceFromDiscoverySurface(e.discoverySurface),
          directoryCategoryIndex: g,
          directoryChannelIndex: _,
          directoryCategoryName: h,
          entryPoint: o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(l),
          discoverySurface: e.discoverySurface,
          eventUnit: e.newsletterEventUnit,
        };
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        role: "button",
        "data-testid": void 0,
        handlers: U,
        children: s.jsx(r("WAWebCellV2.react"), {
          ref: b,
          active: v,
          tabIndex: -1,
          onClick: B,
          colorScheme: "default",
          size: "large",
          border: e.bottomItem === !0 ? null : "bottom-partial",
          containerXStyle: o("WAWebUISpacing").uiMargin.horiz10,
          detailLeftXStyle: o("WAWebUISpacing").uiPadding.start12,
          detailRightXStyle: o("WAWebUISpacing").uiPadding.end12,
          primary: s.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: p.title,
            children: s.jsx(o("WAWebName.react").Name, {
              chat: f,
              ellipsify: !0,
              highlightText: e.highlightText,
            }),
          }),
          secondary: s.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getNewsletterFollowersText(R.size),
          }),
          detailLeft: s.jsxs("div", {
            className: "x1n2onr6",
            children: [
              $ != null &&
                s.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
                  id: f.id,
                  size:
                    ((i = o("WAWebDetailImage.react").getSize(
                      o("WAWebDetailImage.react").DetailImageSize.Small,
                    )) != null
                      ? i
                      : 49) + m,
                  stroke: m,
                  theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
                  breakRing: !1,
                  hideWhenNoUnreadStatuses: !1,
                  respectAppTheme: !0,
                }),
              $ != null
                ? s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                    handlers: { enter: O, space: O },
                    role: "button",
                    onClick: O,
                    children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: f.id,
                      size: o("WAWebDetailImage.react").DetailImageSize.Small,
                      quality: o("WAWebDetailImage.react").DetailImageQuality
                        .Low,
                      showOutline: !1,
                      theme: "status_profile_photo_ring",
                      tabIndex: 0,
                      onClick: O,
                    }),
                  })
                : s.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: f.id,
                    size: o("WAWebDetailImage.react").DetailImageSize.Small,
                    quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
                    showOutline: !1,
                  }),
            ],
          }),
          detailRight: s.jsx(r("WAWebNewsletterDirectoryActionButton.react"), {
            ref: S,
            newsletter: f,
            directoryFunnelLogger: u,
            loggingOptions: V,
          }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.country,
        n = e.directoryFunnelLogger,
        a = e.discoverySurface,
        i = e.index,
        l = e.listView,
        u = e.newsletter,
        c = e.newsletterDirectorySectionIndex,
        d = e.newsletterDirectorySectionName,
        m = e.newsletterEventUnit,
        p = r("useWAWebNewsletterDiscoveryVisibilityLogger")({
          cid: u.id.user,
          newsletterEventUnit: m,
          discoverySurface: a,
          newsletterDirectorySectionName: d,
          newsletterIndex: i,
          newsletterDirectorySectionIndex: c,
          newsletterDirectorySessionId: n == null ? void 0 : n.sessionId,
          country: t,
          pillSelected:
            a === o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY
              ? o(
                  "WAWebNewsletterDirectoryFilterUtils",
                ).getNewsletterSelectedPill(l)
              : void 0,
        }),
        _ = p[0],
        g = p[1];
      return s.jsx("div", {
        ref: _,
        children: s.jsx(f, babelHelpers.extends({}, e)),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
