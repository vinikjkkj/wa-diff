__d(
  "WAWebSuspendedCommunityMsgBar.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebClickableLink.react",
    "WAWebCxtUrl",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDeactivateIconIcon.react",
    "WAWebDrawerManager",
    "WAWebExitIcon.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebKeyboardTabUtils",
    "WAWebLeaveCommunityModal.react",
    "WAWebModalManager",
    "WAWebSuspendedCommunityUtils",
    "WAWebSuspendedGroupUtils",
    "WDSButton.react",
    "WDSIconIcHelp.react",
    "react",
    "react-compiler-runtime",
    "useWAWebUIM",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        deactivate: { color: "x30a034", $$css: !0 },
        suspendedMsgBar: { width: "xh8yej3", $$css: !0 },
      };
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(42),
        a = e.chat,
        i = r("useWAWebWindowSize")(),
        l = i.width,
        d = r("useWAWebUIM")(),
        m = (t = a.groupMetadata) == null ? void 0 : t.parentGroup;
      if (m != null) {
        var p, _, f, g, h, y, C, b, v, S, R, L;
        if (n[0] !== a || n[1] !== m || n[2] !== d || n[3] !== l) {
          L = Symbol.for("react.early_return_sentinel");
          e: {
            var E = o("WAWebChatCollection").ChatCollection.get(m);
            if (E == null) {
              L = void 0;
              break e;
            }
            var k = function () {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? { descriptorType: "deactivate_community", chat: E }
                    : u.jsx(
                        o("WAWebDeactivateCommunityDrawerLoadable")
                          .DeactivateCommunityDrawerLoadable,
                        {
                          onBack: o("WAWebDrawerManager").closeDrawerRight,
                          chat: E,
                        },
                      ),
                  {
                    transition: "slide-left",
                    uim: d,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  },
                );
              },
              I = function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: E }),
                  { transition: "modal-flow" },
                );
              },
              T;
            n[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = o(
                  "WAWebGroupGatingUtils",
                ).isGroupSuspensionAppealsRedesignEnabled()),
                (n[16] = T))
              : (T = n[16]);
            var D = T,
              x;
            n[17] !== k
              ? ((x = D
                  ? u.jsx(r("WDSButton.react"), {
                      variant: "borderless",
                      type: "destructive",
                      onPress: k,
                      testid: void 0,
                      Icon: o("WAWebDeactivateIconIcon.react")
                        .DeactivateIconIcon,
                      label: s._(/*BTDS*/ "Deactivate community"),
                    })
                  : u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
                      onClick: k,
                      testid: void 0,
                      children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                        xstyle: c.deactivate,
                        justify: "center",
                        align: "center",
                        gap: 4,
                        children: [
                          u.jsx(
                            o("WAWebDeactivateIconIcon.react")
                              .DeactivateIconIcon,
                            { directional: !0 },
                          ),
                          s._(/*BTDS*/ "Deactivate community"),
                        ],
                      }),
                    })),
                (n[17] = k),
                (n[18] = x))
              : (x = n[18]);
            var $ = x,
              P;
            n[19] !== I
              ? ((P = D
                  ? u.jsx(r("WDSButton.react"), {
                      type: "destructive",
                      variant: "borderless",
                      onPress: I,
                      testid: void 0,
                      Icon: o("WAWebExitIcon.react").ExitIcon,
                      label: s._(/*BTDS*/ "Exit community"),
                    })
                  : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
                      onClick: I,
                      testid: void 0,
                      children: [
                        u.jsx(o("WAWebExitIcon.react").ExitIcon, {
                          directional: !0,
                        }),
                        s._(/*BTDS*/ "Exit community"),
                      ],
                    })),
                (n[19] = I),
                (n[20] = P))
              : (P = n[20]);
            var N = P,
              M =
                l <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH
                  ? o("WAWebFlex.react").FlexColumn
                  : o("WAWebFlex.react").FlexRow,
              w;
            n[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl()),
                (n[21] = w))
              : (w = n[21]);
            var A;
            n[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: w,
                  testid: void 0,
                  children: s._(/*BTDS*/ "Learn more"),
                })),
                (n[22] = A))
              : (A = n[22]);
            var F = A,
              O = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(E) ? $ : N;
            ((f = o("WAWebFlex.react").FlexColumn),
              (R = c.suspendedMsgBar),
              (_ = M),
              (y = "stretch"),
              (C = "center"),
              (b = "all"),
              (v = "suspended-msg-bar"));
            var B;
            (n[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = { className: "x126k92a" }), (n[23] = B))
              : (B = n[23]),
              n[24] !== a
                ? ((S = u.jsx(o("WAWebFlex.react").FlexColumn, {
                    children: u.jsx(
                      "span",
                      babelHelpers.extends({}, B, {
                        "data-testid": void 0,
                        children: D
                          ? s._(
                              /*BTDS*/ "Community activity suspended. {link to see details}",
                              [
                                s._param(
                                  "link to see details",
                                  u.jsx(r("WAWebClickableLink.react"), {
                                    onClick: function () {
                                      o(
                                        "WAWebSuspendedCommunityUtils",
                                      ).openSuspendedCommunityRedesignModal(a);
                                    },
                                    testid: void 0,
                                    children: s._(/*BTDS*/ "See details"),
                                  }),
                                ),
                              ],
                            )
                          : s._(
                              /*BTDS*/ "This community is no longer available. {link to learn more}",
                              [s._param("link to learn more", F)],
                            ),
                      }),
                    ),
                  })),
                  (n[24] = a),
                  (n[25] = S))
                : (S = n[25]),
              (p = o("WAWebFlex.react").FlexRow),
              (g = O),
              (h =
                D &&
                o("WAWebChatCommunityUtils").isCommunitySuperAdmin(E) &&
                u.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  onPress: function () {
                    o(
                      "WAWebSuspendedGroupUtils",
                    ).openGroupSuspensionAppealModal(E.id);
                  },
                  testid: void 0,
                  Icon: r("WDSIconIcHelp.react"),
                  label: s._(/*BTDS*/ "Request review"),
                })));
          }
          ((n[0] = a),
            (n[1] = m),
            (n[2] = d),
            (n[3] = l),
            (n[4] = p),
            (n[5] = _),
            (n[6] = f),
            (n[7] = g),
            (n[8] = h),
            (n[9] = y),
            (n[10] = C),
            (n[11] = b),
            (n[12] = v),
            (n[13] = S),
            (n[14] = R),
            (n[15] = L));
        } else
          ((p = n[4]),
            (_ = n[5]),
            (f = n[6]),
            (g = n[7]),
            (h = n[8]),
            (y = n[9]),
            (C = n[10]),
            (b = n[11]),
            (v = n[12]),
            (S = n[13]),
            (R = n[14]),
            (L = n[15]));
        if (L !== Symbol.for("react.early_return_sentinel")) return L;
        var W;
        n[26] !== p || n[27] !== g || n[28] !== h
          ? ((W = u.jsxs(p, { children: [g, h] })),
            (n[26] = p),
            (n[27] = g),
            (n[28] = h),
            (n[29] = W))
          : (W = n[29]);
        var q;
        n[30] !== _ ||
        n[31] !== W ||
        n[32] !== y ||
        n[33] !== C ||
        n[34] !== b ||
        n[35] !== v ||
        n[36] !== S
          ? ((q = u.jsxs(_, {
              alignSelf: y,
              align: C,
              justify: b,
              testid: void 0,
              children: [S, W],
            })),
            (n[30] = _),
            (n[31] = W),
            (n[32] = y),
            (n[33] = C),
            (n[34] = b),
            (n[35] = v),
            (n[36] = S),
            (n[37] = q))
          : (q = n[37]);
        var U;
        return (
          n[38] !== f || n[39] !== q || n[40] !== R
            ? ((U = u.jsx(f, { xstyle: R, children: q })),
              (n[38] = f),
              (n[39] = q),
              (n[40] = R),
              (n[41] = U))
            : (U = n[41]),
          U
        );
      }
    }
    l.default = d;
  },
  226,
);
