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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(45),
        n = e.body,
        a = e.footer,
        i = e.onFooterClick,
        l = e.openNavigation,
        d = e.subgroupId,
        m = e.subtitle,
        p = e.title,
        _ = l === void 0 ? !1 : l,
        f = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        g;
      t[0] !== e.communityId
        ? ((g = null),
          e.communityId &&
            (g =
              e.communityId instanceof r("WAWebWid")
                ? e.communityId
                : o("WAWebWidFactory").createWid(e.communityId)),
          (t[0] = e.communityId),
          (t[1] = g))
        : (g = t[1]);
      var h, y, C;
      if (t[2] !== d) {
        var b;
        ((h = d ? o("WAWebChatCollection").ChatCollection.get(d) : null),
          (y = h
            ? !!(
                o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(h) ||
                ((b = h.groupMetadata) != null && b.isParentGroup)
              )
            : !1),
          (C = h ? o("WAWebChatGroupUtils").isCommunityGeneralGroup(h) : !1),
          (t[2] = d),
          (t[3] = h),
          (t[4] = y),
          (t[5] = C));
      } else ((h = t[3]), (y = t[4]), (C = t[5]));
      var v = C,
        S;
      t[6] !== h || t[7] !== g || t[8] !== i || t[9] !== _ || t[10] !== f
        ? ((S = function (t) {
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
                    .CHAT_FILTER_ACTION_TYPES
                    .COMMUNITY_RICH_SYSTEM_MESSAGE_CLICK,
                  surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                  chat: h,
                }).commit(),
              t && (t.preventDefault(), t.stopPropagation()),
              i)
            )
              return i();
            if (!_) {
              var a,
                l = (a = f.existsDrawer()) != null ? a : !1;
              !l && g && o("WAWebCmd").Cmd.openCommunityTabbedInfo(g);
              return;
            }
            o("WAWebCmd").Cmd.openCommunityHome(g);
          }),
          (t[6] = h),
          (t[7] = g),
          (t[8] = i),
          (t[9] = _),
          (t[10] = f),
          (t[11] = S))
        : (S = t[11]);
      var R = S,
        L;
      if (!v)
        if (g) {
          var E;
          (t[12] !== g
            ? ((E = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: g,
                shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
              })),
              (t[12] = g),
              (t[13] = E))
            : (E = t[13]),
            (L = E));
        } else {
          var k;
          (t[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = u.jsx(
                o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon,
                { width: 49, height: 49, iconXstyle: c.communitySquircle },
              )),
              (t[14] = k))
            : (k = t[14]),
            (L = k));
        }
      var I;
      if (v) {
        var T;
        (t[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = u.jsx("div", {
              className:
                "x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpyat2d x1exxlbk x1n2onr6",
              children: u.jsx(
                o("WAWebCommunityGeneralChatImage.react")
                  .CommunityGeneralChatImage,
                {},
              ),
            })),
            (t[15] = T))
          : (T = t[15]),
          (I = T));
      } else if (d && !y) {
        var D;
        t[16] !== d
          ? ((D = u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: d,
              xstyle: c.marginEnd8,
            })),
            (t[16] = d),
            (t[17] = D))
          : (D = t[17]);
        var x;
        t[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = u.jsx(o("WAWebArrowForwardIcon.react").ArrowForwardIcon, {
              directional: !0,
              xstyle: c.marginEnd8,
            })),
            (t[18] = x))
          : (x = t[18]);
        var $;
        (t[19] !== D
          ? (($ = u.jsxs(u.Fragment, { children: [D, x] })),
            (t[19] = D),
            (t[20] = $))
          : ($ = t[20]),
          (I = $));
      }
      var P;
      t[21] !== L || t[22] !== I
        ? ((P = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: [I, L],
          })),
          (t[21] = L),
          (t[22] = I),
          (t[23] = P))
        : (P = t[23]);
      var N = P,
        M;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { className: "x1380le5 xcytdqz" }), (t[24] = M))
        : (M = t[24]);
      var w;
      t[25] !== p
        ? ((w = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            color: "primary",
            weight: "medium",
            level: "3",
            children: p,
          })),
          (t[25] = p),
          (t[26] = w))
        : (w = t[26]);
      var A;
      t[27] !== m
        ? ((A =
            m != null
              ? u.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "p",
                  size: "13",
                  children: m,
                })
              : null),
          (t[27] = m),
          (t[28] = A))
        : (A = t[28]);
      var F;
      t[29] !== w || t[30] !== A
        ? ((F = u.jsxs(
            "div",
            babelHelpers.extends({}, M, { children: [w, A] }),
          )),
          (t[29] = w),
          (t[30] = A),
          (t[31] = F))
        : (F = t[31]);
      var O = F,
        B;
      t[32] !== a || t[33] !== R
        ? ((B =
            a != null
              ? u.jsx(r("WAWebUnstyledButton.react"), {
                  xstyle: [c.footerButton, c.paddingAll12],
                  onClick: R,
                  children: u.jsx(o("WAWebText_DONOTUSE.react").Text, {
                    as: "span",
                    size: "14",
                    weight: "medium",
                    children: a,
                  }),
                })
              : null),
          (t[32] = a),
          (t[33] = R),
          (t[34] = B))
        : (B = t[34]);
      var W = B,
        q;
      t[35] !== n
        ? ((q = {
            0: { className: "xb0esv5 xyo0t3i x1xrf6ya" },
            1: { className: "xb0esv5 xyo0t3i x1xrf6ya xvpt6g3" },
          }[!!n << 0]),
          (t[35] = n),
          (t[36] = q))
        : (q = t[36]);
      var U;
      t[37] !== n || t[38] !== O || t[39] !== N || t[40] !== q
        ? ((U = u.jsxs(
            "div",
            babelHelpers.extends({}, q, { children: [N, O, n] }),
          )),
          (t[37] = n),
          (t[38] = O),
          (t[39] = N),
          (t[40] = q),
          (t[41] = U))
        : (U = t[41]);
      var V;
      return (
        t[42] !== W || t[43] !== U
          ? ((V = u.jsxs(u.Fragment, { children: [U, W] })),
            (t[42] = W),
            (t[43] = U),
            (t[44] = V))
          : (V = t[44]),
        V
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.items,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x1yc453h x1n2onr6 xyxtwap" }), (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n ? ((a = n.map(p)), (t[1] = n), (t[2] = a)) : (a = t[2]);
      var i;
      return (
        t[3] !== a
          ? ((i = u.jsx("ul", babelHelpers.extends({}, r, { children: a }))),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function p(e, t) {
      return u.jsx(
        "li",
        { className: "xo7wnuk x1a8jhtq x1hmns74", children: e },
        t,
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.MessageCommunityCard = d),
      (l.BulletedList = m));
  },
  226,
);
