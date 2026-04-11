__d(
  "WAWebNewsletterMessageAdminContextCard.react",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebCameraV2Icon.react",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebNewsletterInfoPhoto.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebProfilePicThumbCollection",
    "WAWebText.react",
    "WAWebWamEnumAdminFlowType",
    "WAWebWamEnumChannelLinkShareEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        body: { textAlign: "x2b8uid", $$css: !0 },
        title: {
          maxWidth: "x17fpy1y",
          boxSizing: "x9f619",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
        marginHoriz20: {
          marginInlineStart: "x6pxu1d",
          marginInlineEnd: "xd6izgl",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        marginVert24: {
          marginTop: "x9u28bd",
          marginBottom: "x14mdic9",
          $$css: !0,
        },
        paddingHoriz20: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      d = 850;
    function m(e) {
      var t,
        n = o("react-compiler-runtime").c(36),
        a = e.chat,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            "isSuspendedOrTerminated",
            "name",
            "description",
            "membershipType",
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebModelValues").useOptionalModelValues(
          a.newsletterMetadata,
          i,
        ),
        u;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = new (o(
            "WAWebNewsletterAdminFunnelLogging",
          ).NewsletterAdminFunnelLogger)(
            o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT,
          )),
          (n[1] = u))
        : (u = n[1]);
      var m = u,
        p = r("useWAWebWindowSize")(),
        _ = p.width,
        f;
      n[2] !== a
        ? ((f = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "info_flow",
                    chat: a,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                    newsletterLinkShareScreenEntryPoint: o(
                      "WAWebWamEnumChannelLinkShareEntryPoint",
                    ).CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD,
                  }
                : s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: a,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                    newsletterLinkShareScreenEntryPoint: o(
                      "WAWebWamEnumChannelLinkShareEntryPoint",
                    ).CHANNEL_LINK_SHARE_ENTRY_POINT.PRODUCER_CONTEXT_CARD,
                  }),
              {
                transition: "slide-left",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                noFocus: !0,
              },
            );
          }),
          (n[2] = a),
          (n[3] = f))
        : (f = n[3]);
      var g = f,
        h;
      n[4] !== a
        ? ((h = function () {
            (o("WAWebCmd").Cmd.editNewsletterDescription(),
              o("WAWebCmd").Cmd.chatInfoDrawer(a, {
                focusNewsletterDescriptionOnMount: !0,
              }));
          }),
          (n[4] = a),
          (n[5] = h))
        : (h = n[5]);
      var y = h,
        C;
      n[6] !== a.id
        ? ((C = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.get(a.id)),
          (n[6] = a.id),
          (n[7] = C))
        : (C = n[7]);
      var b = C,
        v =
          _ <= d
            ? o("WAWebFlex.react").FlexColumn
            : o("WAWebFlex.react").FlexRow,
        S;
      n[8] !== _
        ? ((S = _ <= d ? { rowGap: 8, align: "center" } : {}),
          (n[8] = _),
          (n[9] = S))
        : (S = n[9]);
      var R = S,
        L;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [c.body, c.marginHoriz20, c.marginVert24]), (n[10] = L))
        : (L = n[10]);
      var E;
      n[11] !== a || n[12] !== (b == null ? void 0 : b.img) || n[13] !== l
        ? ((E =
            (b == null ? void 0 : b.img) != null
              ? s.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: a.id,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                  quality: o("WAWebDetailImage.react").DetailImageQuality.High,
                  size: 88,
                  showOutline: !0,
                  testId: "newsletter-admin-context-card-readonly-photo",
                })
              : s.jsx(r("WAWebNewsletterInfoPhoto.react"), {
                  chat: a,
                  readOnly:
                    (l == null ? void 0 : l.isSuspendedOrTerminated) === !0 ||
                    !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(l),
                  HoverIcon: o("WAWebCameraV2Icon.react").CameraV2Icon,
                  adminFunnelLogger: m,
                  showAddIconOverlay: !1,
                  size: 88,
                  testId: "newsletter-admin-context-card-photo-picker",
                })),
          (n[11] = a),
          (n[12] = b == null ? void 0 : b.img),
          (n[13] = l),
          (n[14] = E))
        : (E = n[14]);
      var k;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [c.title, c.paddingHoriz20]), (n[15] = k))
        : (k = n[15]);
      var I = (t = l == null ? void 0 : l.name) != null ? t : "",
        T;
      n[16] !== I
        ? ((T = o("WAWebCommonNewsletterStrings").startGrowingChannelNameText(
            I,
          )),
          (n[16] = I),
          (n[17] = T))
        : (T = n[17]);
      var D;
      n[18] !== T
        ? ((D = s.jsx(o("WAWebText.react").WAWebTextTitle, {
            color: "primary",
            xstyle: k,
            testid: void 0,
            children: T,
          })),
          (n[18] = T),
          (n[19] = D))
        : (D = n[19]);
      var x;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "secondary",
            wrap: "wrap",
            testid: void 0,
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getStartedWithChannelText(),
          })),
          (n[20] = x))
        : (x = n[20]);
      var $;
      n[21] !== y || n[22] !== (l == null ? void 0 : l.description)
        ? (($ =
            ((l == null ? void 0 : l.description) == null ||
              (l == null ? void 0 : l.description) === "") &&
            s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
              onClick: y,
              shadowOnHover: !1,
              testid: void 0,
              children: o(
                "WAWebCommonNewsletterStrings",
              ).getAddDescriptionButtonText(),
            })),
          (n[21] = y),
          (n[22] = l == null ? void 0 : l.description),
          (n[23] = $))
        : ($ = n[23]);
      var P;
      n[24] !== a.newsletterMetadata || n[25] !== g
        ? ((P =
            o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
              a.newsletterMetadata,
            ) &&
            s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
              onClick: g,
              shadowOnHover: !1,
              testid: void 0,
              children: o(
                "WAWebCommonNewsletterStrings",
              ).getShareChannelLinkButtonText(),
            })),
          (n[24] = a.newsletterMetadata),
          (n[25] = g),
          (n[26] = P))
        : (P = n[26]);
      var N;
      n[27] !== v || n[28] !== R || n[29] !== $ || n[30] !== P
        ? ((N = s.jsxs(
            v,
            babelHelpers.extends({ columnGap: 8, marginTop: 8 }, R, {
              children: [$, P],
            }),
          )),
          (n[27] = v),
          (n[28] = R),
          (n[29] = $),
          (n[30] = P),
          (n[31] = N))
        : (N = n[31]);
      var M;
      return (
        n[32] !== D || n[33] !== N || n[34] !== E
          ? ((M = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 12,
              xstyle: L,
              align: "center",
              testid: void 0,
              children: [E, D, x, N],
            })),
            (n[32] = D),
            (n[33] = N),
            (n[34] = E),
            (n[35] = M))
          : (M = n[35]),
        M
      );
    }
    l.default = m;
  },
  98,
);
