__d(
  "WAWebChatParticipant.react",
  [
    "WAWebChatContact.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WAWebChatContact.react").ContactFactory();
    function c(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.active,
        r = e.contact,
        a = e.contextEnabled,
        i = e.contextMenu,
        l = e.elevatedPushNamesEnabled,
        c = e.isPendingParticipant,
        d = e.nameOverride,
        m = e.onClick,
        p = e.onContext,
        _ = e.participantCollection,
        f = e.showStatusRingAroundProfilePhoto,
        g = e.showTeeLockBadge,
        h = e.theme,
        y = e.truncateName,
        C = c === void 0 ? !1 : c,
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = ["isAdmin"]), (t[0] = b))
        : (b = t[0]);
      var v = o("useWAWebModelValues").useModelValues(e.participant, b),
        S;
      t[1] !== r || t[2] !== a
        ? ((S = function () {
            return a == null ? !1 : a(r);
          }),
          (t[1] = r),
          (t[2] = a),
          (t[3] = S))
        : (S = t[3]);
      var R = S,
        L;
      t[4] !== r || t[5] !== p
        ? ((L = function (t) {
            return p == null ? void 0 : p(t, r);
          }),
          (t[4] = r),
          (t[5] = p),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k = C ? p : m,
        I = h || "drawer-list",
        T;
      return (
        t[7] !== n ||
        t[8] !== r ||
        t[9] !== i ||
        t[10] !== l ||
        t[11] !== E ||
        t[12] !== R ||
        t[13] !== C ||
        t[14] !== d ||
        t[15] !== v.isAdmin ||
        t[16] !== _ ||
        t[17] !== e.showMemberLabel ||
        t[18] !== e.sourceChat ||
        t[19] !== f ||
        t[20] !== g ||
        t[21] !== k ||
        t[22] !== I ||
        t[23] !== y
          ? ((T = s.jsx(u, {
              truncateName: y,
              active: n,
              contact: r,
              admin: v.isAdmin,
              onClick: k,
              theme: I,
              contextEnabled: R,
              contextMenu: i,
              onContext: E,
              isPendingParticipant: C,
              nameOverride: d,
              showNotifyName: !0,
              elevatedPushNamesEnabled: l,
              waitIdle: !0,
              showStatusRingAroundProfilePhoto: f,
              showTeeLockBadge: g,
              participantCollection: _,
              sourceChat: e.sourceChat,
              showMemberLabel: e.showMemberLabel,
            })),
            (t[7] = n),
            (t[8] = r),
            (t[9] = i),
            (t[10] = l),
            (t[11] = E),
            (t[12] = R),
            (t[13] = C),
            (t[14] = d),
            (t[15] = v.isAdmin),
            (t[16] = _),
            (t[17] = e.showMemberLabel),
            (t[18] = e.sourceChat),
            (t[19] = f),
            (t[20] = g),
            (t[21] = k),
            (t[22] = I),
            (t[23] = y),
            (t[24] = T))
          : (T = t[24]),
        T
      );
    }
    l.default = c;
  },
  98,
);
