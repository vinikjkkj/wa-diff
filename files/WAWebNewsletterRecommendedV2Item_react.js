__d(
  "WAWebNewsletterRecommendedV2Item.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebChatEntryPoint",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterChatItem.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingContext",
    "WAWebNewsletterQuickFollowButton.react",
    "WAWebOpenNewsletterPreviewChat",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChannelEventUnit",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebNewsletterDiscoveryVisibilityLogger",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = {
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a =
            "x6nvzda x4i4b9w xhl9efl xj65ea0 xog00wb x9oqtsu xk1krjo xqk4rbu x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 xj35x94 x1xrf6ya x12w63v0 x1nzty39 xscbp6u"),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n
        ? ((i = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            testid: void 0,
            className: a,
            children: n,
          })),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== r || t[4] !== i
          ? ((l = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              role: "button",
              onClick: r,
              children: i,
            })),
            (t[3] = r),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6);
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterDiscoveryVisibilityLoggingEnabled()
      ) {
        var n;
        return (
          t[0] !== e
            ? ((n = u.jsx(y, babelHelpers.extends({}, e))),
              (t[0] = e),
              (t[1] = n))
            : (n = t[1]),
          n
        );
      }
      var r;
      t[2] !== e
        ? ((r = babelHelpers.extends({}, (s(e), e))), (t[2] = e), (t[3] = r))
        : (r = t[3]);
      var a;
      return (
        t[4] !== r
          ? ((a = u.jsx(h, babelHelpers.extends({}, r))),
            (t[4] = r),
            (t[5] = a))
          : (a = t[5]),
        a
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsxs(_, {
              children: [
                u.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
                  diameter: 64,
                  xstyle: p.marginBottom8,
                }),
                u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 20,
                  width: 96,
                  xstyle: p.marginBottom16,
                }),
                u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 20,
                  width: 66,
                  xstyle: p.marginBottom8,
                }),
              ],
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.chatEntryPoint,
        a = e.discoverySurface,
        i = e.eventSurface,
        l = e.newsletter,
        s = e.onFollow,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["newsletterMetadata"]), (t[0] = c))
        : (c = t[0]);
      var d = o("useWAWebModelValues").useModelValues(l, c),
        p = d.newsletterMetadata,
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["isSubscribedOrOwned"]), (t[1] = f))
        : (f = t[1]);
      var g;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["isSubscribedOrOwned"]), (t[2] = g))
        : (g = t[2]);
      var h;
      t[3] !== (p == null ? void 0 : p.isSubscribedOrOwned)
        ? ((h = function () {
            return (p == null ? void 0 : p.isSubscribedOrOwned) === !0;
          }),
          (t[3] = p == null ? void 0 : p.isSubscribedOrOwned),
          (t[4] = h))
        : (h = t[4]);
      var y = r("useWAWebEventTargetValue")(
          o("useWAWebModelValues").useOptionalModelValues(p, f),
          g,
          h,
        ),
        C = m(r("WAWebNewsletterLoggingContext")),
        b = C.entryPoint,
        v = C.eventUnit,
        S = C.similarNewsletterSessionId,
        R;
      t[5] !== n || t[6] !== a || t[7] !== l.id || t[8] !== S
        ? ((R = function () {
            (n === o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters &&
              o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.setSimilarChannelsSessionId(S),
              o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
                identifier: l.id.toString(),
                chatEntryPoint: n,
                discoverySurface: a,
              }));
          }),
          (t[5] = n),
          (t[6] = a),
          (t[7] = l.id),
          (t[8] = S),
          (t[9] = R))
        : (R = t[9]);
      var L = R,
        E;
      t[10] !== a || t[11] !== b || t[12] !== i || t[13] !== v || t[14] !== S
        ? ((E = {
            eventSurface: i,
            similarChannelSessionId: S,
            entryPoint: b,
            eventUnit: v,
            discoverySurface: a,
          }),
          (t[10] = a),
          (t[11] = b),
          (t[12] = i),
          (t[13] = v),
          (t[14] = S),
          (t[15] = E))
        : (E = t[15]);
      var k = E,
        I;
      t[16] !== l
        ? ((I = u.jsx(r("WAWebNewsletterChatItem.react"), { newsletter: l })),
          (t[16] = l),
          (t[17] = I))
        : (I = t[17]);
      var T;
      t[18] !== y || t[19] !== k || t[20] !== l || t[21] !== s
        ? ((T = u.jsx(r("WAWebNewsletterQuickFollowButton.react"), {
            confirmUnfollow: !1,
            onFollowSuccess: s,
            following: y,
            loggingOptions: k,
            newsletter: l,
          })),
          (t[18] = y),
          (t[19] = k),
          (t[20] = l),
          (t[21] = s),
          (t[22] = T))
        : (T = t[22]);
      var D;
      return (
        t[23] !== L || t[24] !== I || t[25] !== T
          ? ((D = u.jsxs(_, { onClick: L, children: [I, T] })),
            (t[23] = L),
            (t[24] = I),
            (t[25] = T),
            (t[26] = D))
          : (D = t[26]),
        D
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.discoverySurface,
        a = e.newsletter,
        i = e.newsletterDirectorySessionId,
        l = e.newsletterEventUnit,
        c = e.similarNewslettersSessionId,
        d;
      t[0] !== l
        ? ((d =
            l !==
            o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT
              .SIMILAR_CHANNELS
              ? o(
                  "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
                ).getCountryCodeIso(
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
                    .user,
                )
              : void 0),
          (t[0] = l),
          (t[1] = d))
        : (d = t[1]);
      var m = d,
        p;
      t[2] !== m ||
      t[3] !== n ||
      t[4] !== a.id.user ||
      t[5] !== i ||
      t[6] !== l ||
      t[7] !== c
        ? ((p = {
            cid: a.id.user,
            newsletterEventUnit: l,
            discoverySurface: n,
            similarNewslettersSessionId: c,
            newsletterDirectorySessionId: i,
            country: m,
          }),
          (t[2] = m),
          (t[3] = n),
          (t[4] = a.id.user),
          (t[5] = i),
          (t[6] = l),
          (t[7] = c),
          (t[8] = p))
        : (p = t[8]);
      var _ = r("useWAWebNewsletterDiscoveryVisibilityLogger")(p),
        f = _[0],
        g;
      t[9] !== e
        ? ((g = babelHelpers.extends({}, (s(e), e))), (t[9] = e), (t[10] = g))
        : (g = t[10]);
      var y;
      t[11] !== g
        ? ((y = u.jsx(h, babelHelpers.extends({}, g))),
          (t[11] = g),
          (t[12] = y))
        : (y = t[12]);
      var C;
      return (
        t[13] !== y || t[14] !== f
          ? ((C = u.jsx("div", { ref: f, children: y })),
            (t[13] = y),
            (t[14] = f),
            (t[15] = C))
          : (C = t[15]),
        C
      );
    }
    ((l.NewsletterRecommendedItem = f),
      (l.NewsletterRecommendedItemShimmer = g));
  },
  98,
);
