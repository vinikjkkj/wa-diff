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
      var n = t.parentMsgs,
        a = n[0],
        i = o("useWAWebCommentMessages").useHydrateAndAggregateComments(
          n.map(function (e) {
            return e.id;
          }),
        ),
        l = o("WAWebFrontendMsgGetters").getChat(a),
        u = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(),
        d = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount([a]),
        g = p(null),
        h = function () {
          if (g.current != null) {
            var e = g.current.scrollHeight;
            g.current.scrollTo({ top: e, behavior: "smooth" });
          }
        };
      (r("useWAWebCommentModalListeners")({ scrollReplyModalToBottom: h }),
        m(
          function () {
            var e = i.filter(function (e) {
              return !e.read;
            });
            e.length !== 0 &&
              u({
                addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Comment,
                addOns: e.map(function (e) {
                  return { msgKey: e.id, sender: e.author.toString() };
                }),
              });
          },
          [i, u],
        ));
      var y = s._(
        /*BTDS*/ "Use WhatsApp on your primary phone to see older replies.",
      );
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Comments,
        children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "comments-modal",
          children: c.jsxs(c.Fragment, {
            children: [
              c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: s._(/*BTDS*/ "Replies"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                onCancel: o("WAWebModalManager").closeModalManager,
              }),
              i.length > 0
                ? c.jsxs("div", {
                    className: "x3d5gib x14aock7 x1rife3k",
                    ref: g,
                    children: [
                      f(d, i.length)
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
                              children: y,
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
                          comments: i,
                          isAlbumMsg: o(
                            "WAWebCommentFrontendUtils",
                          ).isAlbumMessageContainer(n),
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
                  ),
              !o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(
                l,
              ) &&
              !o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(
                l,
              ) &&
              n != null &&
              n.length === 1
                ? c.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: [_.footer, o("WAWebUISpacing").uiPadding.top8],
                    children: c.jsx(r("WAWebCommentComposeBox.react"), {
                      parent: a,
                    }),
                  })
                : null,
            ],
          }),
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
