__d(
  "WAWebMessageMeta.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAddOnBubbleRenderUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotPluginMsgBubbleMeta.react",
    "WAWebBotTypes",
    "WAWebBroadcastIcon.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebDisplayType",
    "WAWebFlex.react",
    "WAWebFollowUpReplyIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatIcon.react",
    "WAWebLidMigrationUtils",
    "WAWebMessageStatus",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgViewCount",
    "WAWebNewsletterGatingUtils",
    "WAWebPinMsgGatingUtils",
    "WAWebPinnedSmallIcon.react",
    "WAWebPremiumChannelFilledIcon.react",
    "WAWebQuotedMsgUtils",
    "WAWebSagaMessageMarker.react",
    "WAWebStarIcon.react",
    "WAWebStateUtils",
    "WAWebTextSizeUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadsGating",
    "WAWebUA",
    "WAWebUISpacing",
    "WAWebWid",
    "WDSIconWdsIcAiFilled.react",
    "WDSText.react",
    "WDSTextContainer.react",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebCanOpenInfoDrawer",
    "useWAWebContactValues",
    "useWAWebIsPinnedMsg",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        chromeFix: { lineHeight: "xuy8w9f", $$css: !0 },
        bullet: { display: "x78zum5", $$css: !0 },
        editedLabel: {
          marginInlineEnd: "x2fvf9",
          marginInlineStart: "xwklpps",
          $$css: !0,
        },
      };
    function p(e) {
      var t = e.light;
      return c.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [m.bullet, o("WAWebUISpacing").uiMargin.horiz4],
        justify: "center",
        children: c.jsx(r("WDSText.react"), {
          type: "Body3",
          robotoPropValue:
            o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
          colorName: t === !0 ? "persistentAlwaysWhite" : "contentDeemphasized",
          children: "\u2022",
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t,
        n,
        a,
        i,
        l,
        u = e.agmTag,
        p = e.associatedMessages,
        _ = e.displayType,
        f = e.isAlbum,
        y = e.isFollowUpReply,
        v = e.msg,
        S = e.theme,
        R = e.xstyle,
        L = o("useWAWebMsgValues").useMsgValues(v.id, [
          (l = o("WAWebMsgGetters")).getId,
          l.getBroadcast,
          l.getCaption,
          l.getIsLive,
          o("WAWebFrontendMsgGetters").getAsRevoked,
          l.getIsSentByMe,
          l.getIsViewOnce,
          l.getLoc,
          l.getStar,
          l.getT,
          l.getType,
          l.getSubtype,
          l.getIsSendFailure,
          l.getIsKept,
          l.getIsEdited,
          l.getIsBotResponse,
          l.getIsBizBot1pResponse,
          l.getBotPluginSearchQuery,
          l.getIsWamoSub,
        ]),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = L[4],
        x = L[5],
        $ = L[6],
        P = L[7],
        N = L[8],
        M = L[9],
        w = L[10],
        A = L[11],
        F = L[12],
        O = L[13],
        B = L[14],
        W = L[15],
        q = L[16],
        U = L[17],
        V = L[18],
        H = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(v.id),
        G = r("useWAWebIsPinnedMsg")(E),
        z = d(!1),
        j = z[0],
        K = z[1];
      o("useWAWebListener").useListener(
        o("WAWebClock").Clock,
        o("WAWebClock").HOUR24_FORMAT_CHANGE_EVENT,
        function () {
          K(!j);
        },
      );
      var Q = function () {
          o("WAWebCmd").Cmd.msgInfoDrawer(
            o("WAWebStateUtils").unproxy(v.unsafe()),
          );
        },
        X = [],
        Y =
          ((w === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            w === o("WAWebMsgType").MSG_TYPE.VIDEO) &&
            r("isStringNullOrEmpty")(I) &&
            !$) ||
          (w === o("WAWebMsgType").MSG_TYPE.LOCATION && !T && !P);
      (N &&
        !D &&
        X.push(
          c.jsx(o("WAWebStarIcon.react").StarIcon, {
            "aria-label":
              " " + s._(/*BTDS*/ "Starred messages").toString() + " ",
          }),
        ),
        O &&
          !D &&
          X.push(
            c.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
              width: 15.64,
              height: 14.67,
              "aria-label": " " + s._(/*BTDS*/ "Kept message").toString() + " ",
            }),
          ),
        k &&
          v.type !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE &&
          X.push(c.jsx(o("WAWebBroadcastIcon.react").BroadcastIcon, {})),
        G &&
          !D &&
          o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled() &&
          X.push(
            c.jsx(o("WAWebPinnedSmallIcon.react").PinnedSmallIcon, {
              width: 15,
              "aria-label":
                " " + s._(/*BTDS*/ "Pinned message").toString() + " ",
            }),
          ));
      var J = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(v);
      y === !0 &&
        J != null &&
        o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(J) >= 2 &&
        o("WAWebThreadsGating").isFollowUpReplyEnabled() &&
        X.push(
          c.jsx(o("WAWebFollowUpReplyIcon.react").FollowUpReplyIcon, {
            width: 15,
          }),
        );
      var Z = x && !D,
        ee = null;
      (Z &&
        (ee = c.jsx(r("WAWebMessageStatus"), {
          msg: v.unsafe(),
          associatedMessages: p,
        })),
        ((w === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && A === "fanout") ||
          F === !0) &&
          (ee = null));
      var te = o("WAWebFrontendMsgGetters").getChat(v.unsafe()),
        ne =
          o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(
            te == null || (t = te.newsletterMetadata) == null
              ? void 0
              : t.membershipType,
          ) &&
          f !== !0 &&
          H != null &&
          _ !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
          v.type !== o("WAWebMsgType").MSG_TYPE.REVOKED
            ? c.jsx(r("WDSText.react"), {
                type: "Body3",
                robotoPropValue:
                  o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
                colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
                children: c.jsx("span", { "data-testid": void 0, children: H }),
              })
            : null,
        re;
      if (B && !D && !W) {
        var oe = h();
        re = c.jsx(r("WDSText.react"), {
          type: "Body3",
          robotoPropValue:
            o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
          xstyle: m.editedLabel,
          colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
          children: oe,
        });
      }
      var ae,
        ie = C(v),
        le = b(v);
      r("WAWebWid").isCAPISupportAccount(
        v == null || (n = v.id) == null ? void 0 : n.remote,
      ) &&
      le != null &&
      o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled()
        ? ((ae = c.jsx("span", {
            className: "x2fvf9 xwklpps",
            "data-testid": void 0,
            children: le,
          })),
          X.push(
            c.jsx(r("WDSIconWdsIcAiFilled.react"), { width: 14, height: 14 }),
          ))
        : ie != null &&
          ((ae = c.jsx("span", {
            className: "x2fvf9 xwklpps",
            "data-testid": void 0,
            children: ie,
          })),
          X.push(
            c.jsx(r("WDSIconWdsIcAiFilled.react"), { width: 14, height: 14 }),
          ));
      var se;
      o("WAWebBotGating").showBotSearchPlugin(v.unsafe()) &&
        (se = c.jsx(r("WAWebBotPluginMsgBubbleMeta.react"), {
          t: M,
          botPluginSearchQuery: U,
          botPluginSearchUrl: o("WAWebMsgGetters").getBotPluginSearchUrl(v),
          botPluginSearchProvider:
            o("WAWebMsgGetters").getBotPluginSearchProvider(v),
        }));
      var ue;
      ie == null &&
        o("WAWebMsgGetters").getIsCAPISupport(v) &&
        q &&
        o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
        (ue = c.jsx(r("WAWebSagaMessageMarker.react"), {
          width: 11,
          height: 11,
          marginRight: !0,
        }));
      var ce =
          V === !0 &&
          o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported()
            ? c.jsx(
                o("WAWebPremiumChannelFilledIcon.react")
                  .PremiumChannelFilledIcon,
                { width: 11, height: 11 },
              )
            : null,
        de = r("useWAWebCanOpenInfoDrawer")(v.id),
        me =
          de &&
          _ !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING &&
          _ !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO,
        pe;
      (M &&
        (S !== "date"
          ? (pe = o("WAWebClock").Clock.timestampStr(M))
          : (pe = o("WAWebClock").Clock.relativeStr(M))),
        pe != null &&
          o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(v) &&
          (pe = pe.toString() + " [LID]"));
      var _e = c.jsx(r("WDSText.react"), {
          type: "Body3",
          robotoPropValue:
            o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
          colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
          children: pe,
        }),
        fe;
      u != null &&
      o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
        (a = v.ctwaContext) == null ? void 0 : a.sourceApp,
        v.type,
        (i = v.ctwaContext) == null ? void 0 : i.automatedGreetingMessageShown,
        v.subtype,
      )
        ? ((fe = c.jsx(r("WDSText.react"), {
            type: "Body3",
            robotoPropValue:
              o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
            colorName: Y ? "persistentAlwaysWhite" : "contentDeemphasized",
            children: u,
          })),
          (ee = null))
        : w === o("WAWebMsgType").MSG_TYPE.CALL_LOG && (ee = null);
      var ge = c.jsxs(r("WDSTextContainer.react"), {
        children: [re, ue, ae, se, se == null && fe == null && _e, fe],
      });
      return c.jsx(g, {
        icons: X,
        premiumMessageMarker: ce,
        light: Y,
        viewCount: ne,
        includeBotSearchPluginDetailToggleEl: se != null,
        onClick: me ? Q : null,
        status: ee,
        xstyle: R,
        children: ge,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = {
      meta: {
        color: "x1bvqhpb",
        fontSize: "x1ncwhqj",
        height: "xx3o462",
        lineHeight: "x152skdk",
        whiteSpace: "xuxw1ft",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        $$css: !0,
      },
      metaLight: { color: "x1dxgm4b", $$css: !0 },
      botPlugin: { height: "x5yr21d", $$css: !0 },
    };
    function g(t) {
      var n = t.children,
        a = t.icons,
        i = t.includeBotSearchPluginDetailToggleEl,
        l = t.light,
        s = t.onClick,
        u = t.premiumMessageMarker,
        d = t.status,
        _ = t.viewCount,
        g = t.xstyle,
        h =
          a && a.length > 0
            ? a.map(function (e, t) {
                return c.createElement(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "xhslqc4 x1rg5ohu x16q7b9a" },
                      1: { className: "x1rg5ohu x16q7b9a x17t9dm2" },
                    }[(l === !0) << 0],
                    { key: "icon-" + t },
                  ),
                  e,
                );
              })
            : null,
        y = u
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "xhslqc4 x1rg5ohu x7phf20" },
                  1: { className: "x1rg5ohu x7phf20 x17t9dm2" },
                }[(l === !0) << 0],
                { "data-testid": void 0, children: u },
              ),
            )
          : null,
        C = d
          ? c.jsx("div", { className: "xhslqc4 x1rg5ohu x7phf20", children: d })
          : null,
        b =
          _ != null
            ? c.jsxs(o("WAWebFlex.react").FlexRow, {
                children: [_, c.jsx(p, { light: l })],
              })
            : null,
        v = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles,
        S = (e || (e = r("stylex")))(
          f.meta,
          l === !0 && f.metaLight,
          o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC &&
            o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME &&
            o("WAWebUA").UA.osVersion.includes("10.15") &&
            m.chromeFix,
          i && f.botPlugin,
          v,
          g,
        );
      return c.jsxs("div", {
        className: S,
        "data-testid": void 0,
        onClick: s,
        role: s ? "button" : null,
        children: [
          h,
          b,
          c.jsx(
            "span",
            babelHelpers.extends(
              {},
              {
                0: { className: "x1rg5ohu x16dsc37" },
                1: { className: "x1rg5ohu x1qughib xh8yej3" },
              }[(i === !0) << 0],
              { dir: "auto", children: n },
            ),
          ),
          y,
          C,
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Edited");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Automated greeting");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t,
        n = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebFrontendMsgGetters").getAsRevoked,
          o("WAWebMsgGetters").getIsBizBot1pResponse,
          o("WAWebMsgGetters").getBizBotType,
        ]),
        r = n[0],
        a = n[1],
        i = n[2],
        l =
          (t = o("useWAWebContactValues").useOptionalContactValues(e.to, [
            o("WAWebContactGetters").getBusinessProfile,
          ])) != null
            ? t
            : [],
        u = l[0];
      if (!o("WAWebBotBaseGating").isBizBot1pEnabled() || r) return null;
      var c =
        e.id.fromMe &&
        i === o("WAWebBotTypes").BizBotType.BIZ_1P &&
        !(u != null && u.automatedType);
      return !a && !c ? null : s._(/*BTDS*/ "AI");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getIsSupportAIMessage,
          o("WAWebMsgGetters").getBizBotType,
        ]),
        n = t[0],
        r = t[1],
        a = !1;
      return (
        r === o("WAWebBotTypes").BizBotType.BIZ_1P && (a = !0),
        n != null && (a = n),
        a === !0 ? s._(/*BTDS*/ "AI") : null
      );
    }
    var v = {
      authorIsMe: { backgroundColor: "x1g5lz36", $$css: !0 },
      authorIsNotMe: { backgroundColor: "x1ew7x2d", $$css: !0 },
      transparentStyles: {
        width: "xeq5yr9",
        borderStartStartRadius: "xp43t2z",
        borderStartEndRadius: "x5j5mwf",
        borderEndEndRadius: "xptal55",
        borderEndStartRadius: "xjodkme",
        boxShadow: "x1lpesih",
        $$css: !0,
      },
      fiftyBorderRadius: {
        borderStartStartRadius: "xal68kn",
        borderStartEndRadius: "x51dqfy",
        borderEndEndRadius: "x1w4cqa3",
        borderEndStartRadius: "x1byqp33",
        $$css: !0,
      },
    };
    function S(t) {
      var n,
        a = t.children,
        i = t.displayType,
        l = t.isSentByMe,
        s = t.isTransparent,
        u = t.ref,
        d = t.xstyle,
        m = [
          (n = o("WAWebUISpacing")).uiPadding.vert3,
          n.uiPadding.start6,
          n.uiPadding.end7,
          v.transparentStyles,
        ],
        p = [n.uiPadding.vert5, n.uiPadding.horiz8, v.fiftyBorderRadius];
      return c.jsx(
        "div",
        babelHelpers.extends(
          { ref: u },
          (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.startAuto,
            s && (l ? v.authorIsMe : v.authorIsNotMe),
            s && m,
            s && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(i) && p,
            d,
          ),
          { children: a },
        ),
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    var R = S;
    ((l.MetaBullet = p),
      (l.Meta = _),
      (l.getEditedLabel = h),
      (l.getAGMTag = y),
      (l.useBizBot1pLabel = C),
      (l.MetaWrapper = R));
  },
  226,
);
