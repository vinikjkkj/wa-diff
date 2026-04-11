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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(4);
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterDiscoveryVisibilityLoggingEnabled()
      ) {
        var n;
        return (
          t[0] !== e
            ? ((n = s.jsx(g, babelHelpers.extends({}, e))),
              (t[0] = e),
              (t[1] = n))
            : (n = t[1]),
          n
        );
      }
      var r;
      return (
        t[2] !== e
          ? ((r = s.jsx(f, babelHelpers.extends({}, e))),
            (t[2] = e),
            (t[3] = r))
          : (r = t[3]),
        r
      );
    }
    function f(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(83),
        l = e.chatEntryPoint,
        u = e.directoryFunnelLogger,
        _ = e.index,
        f = e.newsletter,
        g = e.newsletterDirectorySectionIndex,
        h = e.newsletterDirectorySectionName,
        y = e.onSelect,
        C = e.active,
        b;
      i[0] !== e.newsletter.id
        ? ((b = e.newsletter.id.toString()),
          (i[0] = e.newsletter.id),
          (i[1] = b))
        : (b = i[1]);
      var v = r("useWAWebActiveSelection")(C, "newsletter-" + b),
        S = v[0],
        R = v[1],
        L = c(),
        E;
      i[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = ["name", "size", "inviteCode", "isPreview", "statusMetadata"]),
          (i[2] = E))
        : (E = i[2]);
      var k = o("useWAWebModelValues").useOptionalModelValues(
          f.newsletterMetadata,
          E,
        ),
        I = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS_OPEN_CHAT,
          !1,
          !0,
        ),
        T = I.failInteraction,
        D = I.startInteraction,
        x = I.stopInteraction,
        $ =
          k != null &&
          o("WATimeUtils").unixTime() -
            ((t =
              (n = k.statusMetadata) == null ? void 0 : n.lastStatusSentTime) !=
            null
              ? t
              : 0) <
            o("WATimeUtils").DAY_SECONDS,
        P;
      i[3] !== $
        ? ((P =
            $ &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterStatusReceiverEnabled()),
          (i[3] = $),
          (i[4] = P))
        : (P = i[4]);
      var N = P,
        M;
      i[5] !== N || i[6] !== f.id
        ? ((M = function () {
            var e;
            return (e = N
              ? o("WAWebStatusCollection").StatusCollection.get(f.id)
              : null) != null
              ? e
              : null;
          }),
          (i[5] = N),
          (i[6] = f.id),
          (i[7] = M))
        : (M = i[7]);
      var w = d(M),
        A = w[0],
        F = w[1],
        O;
      i[8] !== N || i[9] !== f.id
        ? ((O = N ? f.id.toString() : ""),
          (i[8] = N),
          (i[9] = f.id),
          (i[10] = O))
        : (O = i[10]);
      var B = O,
        W = d(B),
        q = W[0],
        U = W[1];
      if (B !== q) {
        var V;
        (U(B),
          F(
            (V = N
              ? o("WAWebStatusCollection").StatusCollection.get(f.id)
              : null) != null
              ? V
              : null,
          ));
      }
      var H;
      i[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = ["add", "remove", "change:msgsChanged"]), (i[11] = H))
        : (H = i[11]);
      var G;
      if (
        (i[12] !== f.id
          ? ((G = function (t) {
              if (t.id === f.id) {
                var e;
                F(
                  (e = o("WAWebStatusCollection").StatusCollection.get(f.id)) !=
                    null
                    ? e
                    : null,
                );
              }
            }),
            (i[12] = f.id),
            (i[13] = G))
          : (G = i[13]),
        o("useWAWebListener").useListener(
          N ? o("WAWebStatusCollection").StatusCollection : null,
          H,
          G,
        ),
        k == null)
      )
        return null;
      var z;
      i[14] !== _ || i[15] !== f.id
        ? ((z = function (t) {
            (t.stopPropagation(),
              o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
                event: t,
                newsletterJid: o("WAJids").toNewsletterJid(f.id.toString()),
                statusModelId: f.id,
                rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                  .CHANNEL_DIRECTORY_LIST,
                rowIndex: _,
              }));
          }),
          (i[14] = _),
          (i[15] = f.id),
          (i[16] = z))
        : (z = i[16]);
      var j = z,
        K;
      i[17] !== l ||
      i[18] !== u ||
      i[19] !== T ||
      i[20] !== _ ||
      i[21] !== f.id ||
      i[22] !== g ||
      i[23] !== h ||
      i[24] !== k.inviteCode ||
      i[25] !== y ||
      i[26] !== e.discoverySurface ||
      i[27] !== D ||
      i[28] !== x
        ? ((K = function () {
            (D(),
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
                identifier: k.inviteCode,
                chatEntryPoint: l,
                discoverySurface: e.discoverySurface,
                failInteraction: T,
                stopInteraction: x,
              }));
          }),
          (i[17] = l),
          (i[18] = u),
          (i[19] = T),
          (i[20] = _),
          (i[21] = f.id),
          (i[22] = g),
          (i[23] = h),
          (i[24] = k.inviteCode),
          (i[25] = y),
          (i[26] = e.discoverySurface),
          (i[27] = D),
          (i[28] = x),
          (i[29] = K))
        : (K = i[29]);
      var Q = K,
        X;
      i[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function () {
            r("WAWebFocusTracer").focus(L.current);
          }),
          (i[30] = X))
        : (X = i[30]);
      var Y = X,
        J;
      i[31] !== S
        ? ((J = function () {
            r("WAWebFocusTracer").focus(S.current);
          }),
          (i[31] = S),
          (i[32] = J))
        : (J = i[32]);
      var Z = J,
        ee;
      i[33] !== Z || i[34] !== Q
        ? ((ee = { enter: Q, space: Q, right: Y, left: Z }),
          (i[33] = Z),
          (i[34] = Q),
          (i[35] = ee))
        : (ee = i[35]);
      var te = ee,
        ne;
      i[36] !== e.discoverySurface
        ? ((ne = o(
            "WAWebNewsletterLoggingUtils",
          ).getEventSurfaceFromDiscoverySurface(e.discoverySurface)),
          (i[36] = e.discoverySurface),
          (i[37] = ne))
        : (ne = i[37]);
      var re;
      i[38] !== l
        ? ((re = o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(l)),
          (i[38] = l),
          (i[39] = re))
        : (re = i[39]);
      var oe;
      i[40] !== _ ||
      i[41] !== g ||
      i[42] !== h ||
      i[43] !== e.discoverySurface ||
      i[44] !== e.newsletterEventUnit ||
      i[45] !== ne ||
      i[46] !== re
        ? ((oe = {
            eventSurface: ne,
            directoryCategoryIndex: g,
            directoryChannelIndex: _,
            directoryCategoryName: h,
            entryPoint: re,
            discoverySurface: e.discoverySurface,
            eventUnit: e.newsletterEventUnit,
          }),
          (i[40] = _),
          (i[41] = g),
          (i[42] = h),
          (i[43] = e.discoverySurface),
          (i[44] = e.newsletterEventUnit),
          (i[45] = ne),
          (i[46] = re),
          (i[47] = oe))
        : (oe = i[47]);
      var ae = oe,
        ie = (a = e.testid) != null ? a : "newsletter-directory-cell-" + _,
        le = e.bottomItem === !0 ? null : "bottom-partial",
        se;
      i[48] !== f || i[49] !== e.highlightText
        ? ((se = s.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: p.title,
            children: s.jsx(o("WAWebName.react").Name, {
              chat: f,
              ellipsify: !0,
              highlightText: e.highlightText,
            }),
          })),
          (i[48] = f),
          (i[49] = e.highlightText),
          (i[50] = se))
        : (se = i[50]);
      var ue;
      i[51] !== k.size
        ? ((ue = o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(
            k.size,
          )),
          (i[51] = k.size),
          (i[52] = ue))
        : (ue = i[52]);
      var ce;
      i[53] !== ue
        ? ((ce = s.jsx(o("WAWebText.react").WAWebTextMuted, { children: ue })),
          (i[53] = ue),
          (i[54] = ce))
        : (ce = i[54]);
      var de;
      i[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = { className: "x1n2onr6" }), (i[55] = de))
        : (de = i[55]);
      var me;
      if (i[56] !== f.id || i[57] !== A) {
        var pe;
        ((me =
          A != null &&
          s.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
            id: f.id,
            size:
              ((pe = o("WAWebDetailImage.react").getSize(
                o("WAWebDetailImage.react").DetailImageSize.Small,
              )) != null
                ? pe
                : 49) + m,
            stroke: m,
            theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
            breakRing: !1,
            hideWhenNoUnreadStatuses: !1,
            respectAppTheme: !0,
          })),
          (i[56] = f.id),
          (i[57] = A),
          (i[58] = me));
      } else me = i[58];
      var _e;
      i[59] !== j || i[60] !== f.id || i[61] !== A
        ? ((_e =
            A != null
              ? s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                  handlers: { enter: j, space: j },
                  role: "button",
                  onClick: j,
                  children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: f.id,
                    size: o("WAWebDetailImage.react").DetailImageSize.Small,
                    quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
                    showOutline: !1,
                    theme: "status_profile_photo_ring",
                    tabIndex: 0,
                    onClick: j,
                  }),
                })
              : s.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: f.id,
                  size: o("WAWebDetailImage.react").DetailImageSize.Small,
                  quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
                  showOutline: !1,
                })),
          (i[59] = j),
          (i[60] = f.id),
          (i[61] = A),
          (i[62] = _e))
        : (_e = i[62]);
      var fe;
      i[63] !== me || i[64] !== _e
        ? ((fe = s.jsxs(
            "div",
            babelHelpers.extends({}, de, { children: [me, _e] }),
          )),
          (i[63] = me),
          (i[64] = _e),
          (i[65] = fe))
        : (fe = i[65]);
      var ge;
      i[66] !== u || i[67] !== ae || i[68] !== f
        ? ((ge = s.jsx(r("WAWebNewsletterDirectoryActionButton.react"), {
            ref: L,
            newsletter: f,
            directoryFunnelLogger: u,
            loggingOptions: ae,
          })),
          (i[66] = u),
          (i[67] = ae),
          (i[68] = f),
          (i[69] = ge))
        : (ge = i[69]);
      var he;
      i[70] !== R ||
      i[71] !== Q ||
      i[72] !== S ||
      i[73] !== le ||
      i[74] !== se ||
      i[75] !== ce ||
      i[76] !== fe ||
      i[77] !== ge
        ? ((he = s.jsx(r("WAWebCellV2.react"), {
            ref: S,
            active: R,
            tabIndex: -1,
            onClick: Q,
            colorScheme: "default",
            size: "large",
            border: le,
            containerXStyle: o("WAWebUISpacing").uiMargin.horiz10,
            detailLeftXStyle: o("WAWebUISpacing").uiPadding.start12,
            detailRightXStyle: o("WAWebUISpacing").uiPadding.end12,
            primary: se,
            secondary: ce,
            detailLeft: fe,
            detailRight: ge,
          })),
          (i[70] = R),
          (i[71] = Q),
          (i[72] = S),
          (i[73] = le),
          (i[74] = se),
          (i[75] = ce),
          (i[76] = fe),
          (i[77] = ge),
          (i[78] = he))
        : (he = i[78]);
      var ye;
      return (
        i[79] !== te || i[80] !== ie || i[81] !== he
          ? ((ye = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              role: "button",
              "data-testid": void 0,
              handlers: te,
              children: he,
            })),
            (i[79] = te),
            (i[80] = ie),
            (i[81] = he),
            (i[82] = ye))
          : (ye = i[82]),
        ye
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.country,
        a = e.directoryFunnelLogger,
        i = e.discoverySurface,
        l = e.index,
        u = e.listView,
        c = e.newsletter,
        d = e.newsletterDirectorySectionIndex,
        m = e.newsletterDirectorySectionName,
        p = e.newsletterEventUnit,
        _ = a == null ? void 0 : a.sessionId,
        g;
      t[0] !== i || t[1] !== u
        ? ((g =
            i === o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY
              ? o(
                  "WAWebNewsletterDirectoryFilterUtils",
                ).getNewsletterSelectedPill(u)
              : void 0),
          (t[0] = i),
          (t[1] = u),
          (t[2] = g))
        : (g = t[2]);
      var h;
      t[3] !== n ||
      t[4] !== i ||
      t[5] !== l ||
      t[6] !== c.id.user ||
      t[7] !== d ||
      t[8] !== m ||
      t[9] !== p ||
      t[10] !== _ ||
      t[11] !== g
        ? ((h = {
            cid: c.id.user,
            newsletterEventUnit: p,
            discoverySurface: i,
            newsletterDirectorySectionName: m,
            newsletterIndex: l,
            newsletterDirectorySectionIndex: d,
            newsletterDirectorySessionId: _,
            country: n,
            pillSelected: g,
          }),
          (t[3] = n),
          (t[4] = i),
          (t[5] = l),
          (t[6] = c.id.user),
          (t[7] = d),
          (t[8] = m),
          (t[9] = p),
          (t[10] = _),
          (t[11] = g),
          (t[12] = h))
        : (h = t[12]);
      var y = r("useWAWebNewsletterDiscoveryVisibilityLogger")(h),
        C = y[0],
        b;
      t[13] !== e
        ? ((b = s.jsx(f, babelHelpers.extends({}, e))),
          (t[13] = e),
          (t[14] = b))
        : (b = t[14]);
      var v;
      return (
        t[15] !== b || t[16] !== C
          ? ((v = s.jsx("div", { ref: C, children: b })),
            (t[15] = b),
            (t[16] = C),
            (t[17] = v))
          : (v = t[17]),
        v
      );
    }
    l.default = _;
  },
  98,
);
