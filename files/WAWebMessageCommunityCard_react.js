__d(
  "WAWebMessageCommunityCard.react",
  [
    "fbt",
    "WAWebArrowForwardIcon.react",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebCommunitySquircleIcon.react",
    "WAWebDetailImage.react",
    "WAWebDrawerManagerContext",
    "WAWebFlex.react",
    "WAWebGroupMetadataCollection",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "WAWebWid",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        communitySquircle: { color: "x17k9de1", $$css: !0 },
        footerButton: {
          color: "xo1mcw5",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          width: "xh8yej3",
          $$css: !0,
        },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
        paddingAll12: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = e.body,
        a = e.footer,
        i = e.onFooterClick,
        l = e.openNavigation,
        d = l === void 0 ? !1 : l,
        m = e.subgroupId,
        p = e.subtitle,
        _ = e.title,
        f = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        g = null;
      e.communityId &&
        (g =
          e.communityId instanceof r("WAWebWid")
            ? e.communityId
            : o("WAWebWidFactory").createWid(e.communityId));
      var h = m ? o("WAWebChatCollection").ChatCollection.get(m) : null,
        y = h
          ? !!(
              o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(h) ||
              ((t = h.groupMetadata) != null && t.isParentGroup)
            )
          : !1,
        C = h ? o("WAWebChatGroupUtils").isCommunityGeneralGroup(h) : !1,
        b = function (t) {
          var e;
          if (
            !g ||
            !(
              (e = r("WAWebGroupMetadataCollection").get(g)) != null &&
              e.hasJoined()
            )
          ) {
            var n = s._(/*BTDS*/ "This community no longer exists");
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, { msg: n }),
            );
            return;
          }
          if (
            (h &&
              new (o(
                "WAWebCommunityGroupJourneyEventImpl",
              ).CommunityGroupJourneyEvent)({
                action: o("WAWebWamEnumChatFilterActionTypes")
                  .CHAT_FILTER_ACTION_TYPES.COMMUNITY_RICH_SYSTEM_MESSAGE_CLICK,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                chat: h,
              }).commit(),
            t && (t.preventDefault(), t.stopPropagation()),
            i)
          )
            return i();
          if (!d) {
            var a,
              l = (a = f.existsDrawer()) != null ? a : !1;
            !l && g && o("WAWebCmd").Cmd.openCommunityTabbedInfo(g);
            return;
          }
          o("WAWebCmd").Cmd.openCommunityHome(g);
        },
        v;
      C ||
        (g
          ? (v = u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: g,
              shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
            }))
          : (v = u.jsx(
              o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon,
              { width: 49, height: 49, iconXstyle: c.communitySquircle },
            )));
      var S;
      C
        ? (S = u.jsx("div", {
            className:
              "x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpyat2d x1exxlbk x1n2onr6",
            children: u.jsx(
              o("WAWebCommunityGeneralChatImage.react")
                .CommunityGeneralChatImage,
              {},
            ),
          }))
        : m &&
          !y &&
          (S = u.jsxs(u.Fragment, {
            children: [
              u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: m,
                xstyle: c.marginEnd8,
              }),
              u.jsx(o("WAWebArrowForwardIcon.react").ArrowForwardIcon, {
                directional: !0,
                xstyle: c.marginEnd8,
              }),
            ],
          }));
      var R = u.jsxs(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          align: "center",
          children: [S, v],
        }),
        L = u.jsxs("div", {
          className: "x1380le5 xcytdqz",
          children: [
            u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
              color: "primary",
              weight: "medium",
              level: "3",
              children: _,
            }),
            p != null
              ? u.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "p",
                  size: "13",
                  children: p,
                })
              : null,
          ],
        }),
        E =
          a != null
            ? u.jsx(r("WAWebUnstyledButton.react"), {
                xstyle: [c.footerButton, c.paddingAll12],
                onClick: b,
                children: u.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "span",
                  size: "14",
                  weight: "medium",
                  children: a,
                }),
              })
            : null;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "xb0esv5 xyo0t3i x1xrf6ya" },
                1: { className: "xb0esv5 xyo0t3i x1xrf6ya xvpt6g3" },
              }[!!n << 0],
              { children: [R, L, n] },
            ),
          ),
          E,
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.items;
      return u.jsx("ul", {
        className: "x1yc453h x1n2onr6 xyxtwap",
        children: t.map(function (e, t) {
          return u.jsx(
            "li",
            { className: "xo7wnuk x1a8jhtq x1hmns74", children: e },
            t,
          );
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MessageCommunityCard = d),
      (l.BulletedList = m));
  },
  226,
);
