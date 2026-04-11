__d(
  "WAWebStatusProfilePhotoRing.react",
  [
    "fbt",
    "WAJids",
    "WAWebDetailImage.react",
    "WAWebFrontendStatusGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenStatusQuotedFlow",
    "WAWebStatusGatingUtils",
    "WAWebStatusGetters",
    "WAWebStatusImageRing.react",
    "WAWebStatusQuotedFlowLoadable",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebStatusValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = 4,
      m = 53;
    function p(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.contactStatus,
        r = e.hideWhenNoUnreadStatuses,
        a = e.photoSize,
        i = e.rowIndex,
        l = e.rowSection,
        c = e.waitIdle,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
            o("WAWebStatusGetters").getId,
            o("WAWebFrontendStatusGetters").getContact,
            o("WAWebStatusGetters").getTotalCount,
            o("WAWebStatusGetters").getUnreadCount,
            o("WAWebFrontendStatusGetters").getLastStatus,
          ]),
          (t[0] = p))
        : (p = t[0]);
      var f = o("useWAWebStatusValues").useStatusValues(n.id, p),
        g = f[0],
        h = f[1],
        y = f[2],
        C = f[3],
        b = f[4],
        v;
      e: {
        if (
          !o(
            "WAWebStatusGatingUtils",
          ).isStatusCloseFriendsViewerSideEnabled() ||
          b == null
        ) {
          v = null;
          break e;
        }
        if (b.statusAudienceMetadata != null) {
          v = o("WDSVars.stylex").WDSBaseColor.plum400;
          break e;
        }
        v = null;
      }
      var S = v,
        R = (C === 0 && e.hideWhenNoUnreadStatuses) || y === 0,
        L;
      t[1] !== n || t[2] !== g || t[3] !== R || t[4] !== i || t[5] !== l
        ? ((L = function (t) {
            if (!R) {
              if (
                (t.stopPropagation(),
                t.preventDefault(),
                n.isSyntheticFromMetadata &&
                  g.isNewsletter() &&
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterStatusReceiverEnabled())
              ) {
                o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
                  newsletterJid: o("WAJids").toNewsletterJid(g.toString()),
                  statusModelId: g,
                  rowSection: l,
                  rowIndex: i,
                });
                return;
              }
              o("WAWebModalManager").ModalManager.openMedia(
                u.jsx(
                  o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable,
                  { status: n, onClose: _, rowSection: l, rowIndex: i },
                ),
                { transition: "status-modal" },
              );
            }
          }),
          (t[1] = n),
          (t[2] = g),
          (t[3] = R),
          (t[4] = i),
          (t[5] = l),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k = o("WAWebDetailImage.react").getSize(a),
        I = k != null ? k + d : m,
        T;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "View status")), (t[7] = T))
        : (T = t[7]);
      var D = T,
        x;
      t[8] !== S || t[9] !== r || t[10] !== g || t[11] !== I
        ? ((x = u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
            id: g,
            size: I,
            stroke: d,
            hideWhenNoUnreadStatuses: r,
            theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
            respectAppTheme: !0,
            breakRing: !1,
            customUnreadRingColor: S,
          })),
          (t[8] = S),
          (t[9] = r),
          (t[10] = g),
          (t[11] = I),
          (t[12] = x))
        : (x = t[12]);
      var $ = R ? void 0 : "status_profile_photo_ring",
        P;
      t[13] !== h.id || t[14] !== E || t[15] !== a || t[16] !== $ || t[17] !== c
        ? ((P = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: h.id,
            theme: $,
            size: a,
            waitIdle: c,
            ephemeralIcon: "chat-list",
            tabIndex: 0,
            ariaLabel: D,
            onClick: E,
          })),
          (t[13] = h.id),
          (t[14] = E),
          (t[15] = a),
          (t[16] = $),
          (t[17] = c),
          (t[18] = P))
        : (P = t[18]);
      var N;
      t[19] !== E || t[20] !== P
        ? ((N = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            onClick: E,
            children: P,
          })),
          (t[19] = E),
          (t[20] = P),
          (t[21] = N))
        : (N = t[21]);
      var M;
      return (
        t[22] !== x || t[23] !== N
          ? ((M = u.jsxs(u.Fragment, { children: [x, N] })),
            (t[22] = x),
            (t[23] = N),
            (t[24] = M))
          : (M = t[24]),
        M
      );
    }
    function _() {
      return o("WAWebModalManager").ModalManager.closeMedia();
    }
    l.default = p;
  },
  226,
);
