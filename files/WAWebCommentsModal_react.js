__d(
  "WAWebCommentsModal.react",
  [
    "fbt",
    "WAWebChatGroupUtils",
    "WAWebCommentComposeBox.react",
    "WAWebCommentFrontendUtils",
    "WAWebCommentList.react",
    "WAWebDrawerHeader.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebMessageAddOnType",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCommentMessages",
    "useWAWebCommentModalListeners",
    "useWAWebCommentReplyCount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = {
        content: { maxHeight: "x3d5gib", $$css: !0 },
        pillContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        pill: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          color: "xsztnxe",
          backgroundColor: "x4pcxzf",
          alignItems: "x6s0dn4",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        footer: { bottom: "x1ey2m1c", position: "x7wzq59", $$css: !0 },
        emptyState: {
          paddingTop: "x11408do",
          paddingBottom: "x1ej9moc",
          $$css: !0,
        },
      };
    function f(e, t) {
      return e !== t;
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(27),
        a = t.parentMsgs,
        i = a[0],
        l;
      n[0] !== a ? ((l = a.map(C)), (n[0] = a), (n[1] = l)) : (l = n[1]);
      var u = o("useWAWebCommentMessages").useHydrateAndAggregateComments(l),
        d = o("WAWebFrontendMsgGetters").getChat(i),
        g = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(),
        b;
      n[2] !== i ? ((b = [i]), (n[2] = i), (n[3] = b)) : (b = n[3]);
      var v = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount(b),
        S = p(null),
        R;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            if (S.current != null) {
              var e = S.current.scrollHeight;
              S.current.scrollTo({ top: e, behavior: "smooth" });
            }
          }),
          (n[4] = R))
        : (R = n[4]);
      var L = R,
        E;
      (n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { scrollReplyModalToBottom: L }), (n[5] = E))
        : (E = n[5]),
        r("useWAWebCommentModalListeners")(E));
      var k, I;
      (n[6] !== u || n[7] !== g
        ? ((k = function () {
            var e = u.filter(y);
            e.length !== 0 &&
              g({
                addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Comment,
                addOns: e.map(h),
              });
          }),
          (I = [u, g]),
          (n[6] = u),
          (n[7] = g),
          (n[8] = k),
          (n[9] = I))
        : ((k = n[8]), (I = n[9])),
        m(k, I));
      var T;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(
            /*BTDS*/ "Use WhatsApp on your primary phone to see older replies.",
          )),
          (n[10] = T))
        : (T = n[10]);
      var D = T,
        x = o("WAWebModal.react").Modal,
        $ = o("WAWebModal.react").ModalTheme,
        P = o("WAWebErrorBoundary.react").ErrorBoundary,
        N = "comments-modal",
        M;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Replies"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onCancel: o("WAWebModalManager").closeModalManager,
          })),
          (n[11] = M))
        : (M = n[11]);
      var w;
      n[12] !== u || n[13] !== a || n[14] !== v
        ? ((w =
            u.length > 0
              ? c.jsxs("div", {
                  className: "x3d5gib x14aock7 x1rife3k",
                  ref: S,
                  children: [
                    f(v, u.length)
                      ? c.jsx(o("WAWebFlex.react").FlexColumn, {
                          xstyle: [
                            o("WAWebUISpacing").uiPadding.vert16,
                            o("WAWebUISpacing").uiPadding.horiz24,
                            _.pillContainer,
                          ],
                          children: c.jsx(r("WAWebFlexItem.react"), {
                            xstyle: [
                              o("WAWebUISpacing").uiPadding.vert6,
                              o("WAWebUISpacing").uiPadding.horiz10,
                              _.pill,
                            ],
                            children: D,
                          }),
                        })
                      : null,
                    c.jsx(o("WAWebFlex.react").FlexColumn, {
                      className: (e || (e = r("stylex")))(
                        o("WAWebUISpacing").uiPadding.vert8,
                        o("WAWebUISpacing").uiPadding.horiz16,
                        _.content,
                      ),
                      align: "stretch",
                      children: c.jsx(r("WAWebCommentList.react"), {
                        comments: u,
                        isAlbumMsg: o(
                          "WAWebCommentFrontendUtils",
                        ).isAlbumMessageContainer(a),
                      }),
                    }),
                  ],
                })
              : c.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      _.emptyState,
                      o("WAWebUISpacing").uiPadding.horiz24,
                    ),
                    {
                      children: [
                        c.jsx("div", {
                          className: "x2b8uid x1w7chpp x1jchvi3 xk50ysn",
                          children: s._(/*BTDS*/ "No replies yet"),
                        }),
                        c.jsx("div", {
                          className: "x2b8uid xhslqc4 x1f6kntn xo1l8bm",
                          children: s._(/*BTDS*/ "Share your thoughts"),
                        }),
                      ],
                    },
                  ),
                )),
          (n[12] = u),
          (n[13] = a),
          (n[14] = v),
          (n[15] = w))
        : (w = n[15]);
      var A =
          !o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(
            d,
          ) &&
          !o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(d) &&
          a != null &&
          a.length === 1
            ? c.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: [_.footer, o("WAWebUISpacing").uiPadding.top8],
                children: c.jsx(r("WAWebCommentComposeBox.react"), {
                  parent: i,
                }),
              })
            : null,
        F;
      n[16] !== M || n[17] !== w || n[18] !== A
        ? ((F = c.jsxs(c.Fragment, { children: [M, w, A] })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F))
        : (F = n[19]);
      var O;
      n[20] !== P || n[21] !== F
        ? ((O = c.jsx(P, { name: N, children: F })),
          (n[20] = P),
          (n[21] = F),
          (n[22] = O))
        : (O = n[22]);
      var B;
      return (
        n[23] !== x || n[24] !== O || n[25] !== $.Comments
          ? ((B = c.jsx(x, { type: $.Comments, children: O })),
            (n[23] = x),
            (n[24] = O),
            (n[25] = $.Comments),
            (n[26] = B))
          : (B = n[26]),
        B
      );
    }
    function h(e) {
      return { msgKey: e.id, sender: e.author.toString() };
    }
    function y(e) {
      return !e.read;
    }
    function C(e) {
      return e.id;
    }
    l.default = g;
  },
  226,
);
