__d(
  "WAWebNewsletterFullSubscriberList.react",
  [
    "WAWebBoolFunc",
    "WAWebCommonNewsletterStrings",
    "WAWebContactsModal.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSubscriberList.react",
    "WAWebUserPrefsNewsletter",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterSubscribers",
    "useWAWebNewsletterSubscribersContextMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.newsletter,
        a = e.onCancel,
        i = e.onTransferOwnershipSelection,
        l = e.onVerification,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o("WAWebNewsletterGatingUtils").getMaxSubscriberNumber()),
          (t[0] = u))
        : (u = t[0]);
      var c;
      t[1] !== n
        ? ((c = {
            newsletter: n,
            count: u,
            cacheType: o("WAWebUserPrefsNewsletter")
              .ValidCachedNewsletterSubscriberKeys.FULL,
            includeMeContact: !0,
          }),
          (t[1] = n),
          (t[2] = c))
        : (c = t[2]);
      var _ = o("useWAWebNewsletterSubscribers").useNewsletterSubscribers(c),
        f = _[0],
        g;
      t[3] !== f
        ? ((g = new Map(f.map(p))), (t[3] = f), (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] !== f
        ? ((y = new Map(f.map(m))), (t[5] = f), (t[6] = y))
        : (y = t[6]);
      var C;
      t[7] !== n || t[8] !== i || t[9] !== l || t[10] !== y
        ? ((C = {
            chat: n,
            isFullModal: !0,
            onVerification: l,
            followerInformation: y,
            newsletter: n,
            onTransferOwnershipSelection: i,
          }),
          (t[7] = n),
          (t[8] = i),
          (t[9] = l),
          (t[10] = y),
          (t[11] = C))
        : (C = t[11]);
      var b = o(
          "useWAWebNewsletterSubscribersContextMenu",
        ).useNewsletterSubscribersContextMenu(C),
        v = b[0],
        S = b[1],
        R;
      t[12] !== (n == null ? void 0 : n.newsletterMetadata)
        ? ((R = function (t) {
            return o("WAWebNewsletterSubscriberList.react").showContextForCell(
              t,
              n == null ? void 0 : n.newsletterMetadata,
            );
          }),
          (t[12] = n == null ? void 0 : n.newsletterMetadata),
          (t[13] = R))
        : (R = t[13]);
      var L = R,
        E;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o(
            "WAWebCommonNewsletterStrings",
          ).getSearchForChannelFollowersText()),
          (t[14] = E))
        : (E = t[14]);
      var k;
      t[15] !== f ? ((k = f.map(d)), (t[15] = f), (t[16] = k)) : (k = t[16]);
      var I;
      t[17] !== S || t[18] !== h || t[19] !== a || t[20] !== L || t[21] !== k
        ? ((I = s.jsx(r("WAWebContactsModal.react"), {
            title: E,
            onCancel: a,
            contacts: k,
            newsletterRoles: h,
            isNewsletter: !0,
            openContextOnClick: !0,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            contextMenu: L,
            onContext: S,
          })),
          (t[17] = S),
          (t[18] = h),
          (t[19] = a),
          (t[20] = L),
          (t[21] = k),
          (t[22] = I))
        : (I = t[22]);
      var T;
      return (
        t[23] !== I || t[24] !== v
          ? ((T = s.jsxs(s.Fragment, { children: [I, v] })),
            (t[23] = I),
            (t[24] = v),
            (t[25] = T))
          : (T = t[25]),
        T
      );
    }
    function d(e) {
      var t = e.contact;
      return t;
    }
    function m(e) {
      var t = e.contact,
        n = e.role;
      return [t.id, { newsletterRole: n }];
    }
    function p(e) {
      var t = e.contact,
        n = e.role,
        r = t.id;
      return [r, { role: n }];
    }
    l.default = c;
  },
  98,
);
