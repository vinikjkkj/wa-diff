__d(
  "WAWebNewsletterChatCell.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChat.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenNewsletterChat",
    "WAWebWamEnumTsSurface",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebFocusState",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.active,
        a = e.chatEntryPoint,
        i = e.firstCellInList,
        l = e.newsletter,
        c = e.onSelect,
        d = e.searchQuery,
        m;
      t[0] !== l.id
        ? ((m = l.id.toString()), (t[0] = l.id), (t[1] = m))
        : (m = t[1]);
      var p = r("useWAWebActiveSelection")(n, "newsletter-local-" + m),
        _ = p[0],
        f = p[1],
        g = r("useWAWebFocusState")(),
        h = g[0],
        y = g[1],
        C = r("useMergeRefs")(_, h),
        b;
      t[2] !== l.formattedTitle
        ? ((b = s._(/*BTDS*/ "{newsletter-name} Channel", [
            s._param("newsletter-name", l.formattedTitle),
          ])),
          (t[2] = l.formattedTitle),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] !== a || t[5] !== l || t[6] !== c || t[7] !== d
        ? ((S = function (t) {
            (t.preventDefault(),
              o("WAWebOpenNewsletterChat").openNewsletterChat({
                newsletter: l,
                onSelect: c,
                chatEntryPoint: a,
                discoverySurface:
                  d.trimmed() === ""
                    ? o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME
                    : o("WAWebWamEnumTsSurface").TS_SURFACE
                        .CHANNEL_UPDATES_HOME_SEARCH,
              }));
          }),
          (t[4] = a),
          (t[5] = l),
          (t[6] = c),
          (t[7] = d),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] !== R
        ? ((L = { enter: R, space: R }), (t[9] = R), (t[10] = L))
        : (L = t[10]);
      var E = L,
        k;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o("WAWebABProps").getABPropConfigValue(
            "channels_verified_badge_in_compact_inbox_enabled",
          )),
          (t[11] = k))
        : (k = t[11]);
      var I = !k,
        T;
      t[12] !== v
        ? ((T = v.toString()), (t[12] = v), (t[13] = T))
        : (T = t[13]);
      var D;
      t[14] !== l
        ? ((D = o("WAWebNewsletterGatingUtils").isNewsletterContextMenuEnabled(
            l,
          )),
          (t[14] = l),
          (t[15] = D))
        : (D = t[15]);
      var x = !D,
        $;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterStatusReceiverEnabled()),
          (t[16] = $))
        : ($ = t[16]);
      var P;
      t[17] !== f ||
      t[18] !== i ||
      t[19] !== R ||
      t[20] !== y ||
      t[21] !== l ||
      t[22] !== d ||
      t[23] !== x
        ? ((P = u.jsx(o("WAWebChat.react").Chat, {
            focused: y,
            onClick: R,
            chat: l,
            searchQuery: d,
            forceActive: f,
            theme: "newsletter-cell",
            firstCellInList: i,
            noContext: x,
            hideArchivedIcon: !0,
            skipCheckMark: I,
            showStatusRingAroundProfilePhoto: $,
          })),
          (t[17] = f),
          (t[18] = i),
          (t[19] = R),
          (t[20] = y),
          (t[21] = l),
          (t[22] = d),
          (t[23] = x),
          (t[24] = P))
        : (P = t[24]);
      var N;
      return (
        t[25] !== f || t[26] !== E || t[27] !== C || t[28] !== P || t[29] !== T
          ? ((N = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: C,
              handlers: E,
              "aria-label": T,
              role: "button",
              "aria-current": f,
              "data-testid": void 0,
              children: P,
            })),
            (t[25] = f),
            (t[26] = E),
            (t[27] = C),
            (t[28] = P),
            (t[29] = T),
            (t[30] = N))
          : (N = t[30]),
        N
      );
    }
    l.default = c;
  },
  226,
);
