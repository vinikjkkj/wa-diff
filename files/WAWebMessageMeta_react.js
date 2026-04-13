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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(4),
        n = e.light,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [m.bullet, o("WAWebUISpacing").uiMargin.horiz4]), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebABProps").getABPropConfigValue("wds_web_roboto")),
          (t[1] = i))
        : (i = t[1]);
      var l = n === !0 ? "persistentAlwaysWhite" : "contentDeemphasized",
        s;
      return (
        t[2] !== l
          ? ((s = c.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: a,
              justify: "center",
              children: c.jsx(r("WDSText.react"), {
                type: "Body3",
                robotoPropValue: i,
                colorName: l,
                children: "\u2022",
              }),
            })),
            (t[2] = l),
            (t[3] = s))
          : (s = t[3]),
        s
      );
    }
    function _(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(76),
        l = e.agmTag,
        u = e.associatedMessages,
        p = e.displayType,
        _ = e.isAlbum,
        f = e.isFollowUpReply,
        y = e.msg,
        v = e.theme,
        S = e.xstyle,
        R;
      if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        var L;
        ((R = [
          (L = o("WAWebMsgGetters")).getId,
          L.getBroadcast,
          L.getCaption,
          L.getIsLive,
          o("WAWebFrontendMsgGetters").getAsRevoked,
          L.getIsSentByMe,
          L.getIsViewOnce,
          L.getLoc,
          L.getStar,
          L.getT,
          L.getType,
          L.getSubtype,
          L.getIsSendFailure,
          L.getIsKept,
          L.getIsEdited,
          L.getIsBotResponse,
          L.getIsBizBot1pResponse,
          L.getBotPluginSearchQuery,
          L.getIsWamoSub,
        ]),
          (i[0] = R));
      } else R = i[0];
      var E = o("useWAWebMsgValues").useMsgValues(y.id, R),
        k = E[0],
        I = E[1],
        T = E[2],
        D = E[3],
        x = E[4],
        $ = E[5],
        P = E[6],
        N = E[7],
        M = E[8],
        w = E[9],
        A = E[10],
        F = E[11],
        O = E[12],
        B = E[13],
        W = E[14],
        q = E[15],
        U = E[16],
        V = E[17],
        H = E[18],
        G = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(y.id),
        z = r("useWAWebIsPinnedMsg")(k),
        j = d(!1),
        K = j[0],
        Q = j[1],
        X;
      (i[1] !== K
        ? ((X = function () {
            Q(!K);
          }),
          (i[1] = K),
          (i[2] = X))
        : (X = i[2]),
        o("useWAWebListener").useListener(
          o("WAWebClock").Clock,
          o("WAWebClock").HOUR24_FORMAT_CHANGE_EVENT,
          X,
        ));
      var Y;
      i[3] !== y
        ? ((Y = function () {
            o("WAWebCmd").Cmd.msgInfoDrawer(
              o("WAWebStateUtils").unproxy(y.unsafe()),
            );
          }),
          (i[3] = y),
          (i[4] = Y))
        : (Y = i[4]);
      var J = Y,
        Z = [],
        ee;
      i[5] !== T || i[6] !== D || i[7] !== P || i[8] !== N || i[9] !== A
        ? ((ee =
            ((A === o("WAWebMsgType").MSG_TYPE.IMAGE ||
              A === o("WAWebMsgType").MSG_TYPE.VIDEO) &&
              r("isStringNullOrEmpty")(T) &&
              !P) ||
            (A === o("WAWebMsgType").MSG_TYPE.LOCATION && !D && !N)),
          (i[5] = T),
          (i[6] = D),
          (i[7] = P),
          (i[8] = N),
          (i[9] = A),
          (i[10] = ee))
        : (ee = i[10]);
      var te = ee;
      if (M && !x) {
        var ne;
        i[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((ne = s._(/*BTDS*/ "Starred messages").toString()), (i[11] = ne))
          : (ne = i[11]);
        var re = " " + ne + " ",
          oe;
        (i[12] !== re
          ? ((oe = c.jsx(o("WAWebStarIcon.react").StarIcon, {
              "aria-label": re,
            })),
            (i[12] = re),
            (i[13] = oe))
          : (oe = i[13]),
          Z.push(oe));
      }
      if (B && !x) {
        var ae;
        i[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((ae = s._(/*BTDS*/ "Kept message").toString()), (i[14] = ae))
          : (ae = i[14]);
        var ie = " " + ae + " ",
          le;
        (i[15] !== ie
          ? ((le = c.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
              width: 15.64,
              height: 14.67,
              "aria-label": ie,
            })),
            (i[15] = ie),
            (i[16] = le))
          : (le = i[16]),
          Z.push(le));
      }
      if (
        I &&
        y.type !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE
      ) {
        var se;
        (i[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((se = c.jsx(o("WAWebBroadcastIcon.react").BroadcastIcon, {})),
            (i[17] = se))
          : (se = i[17]),
          Z.push(se));
      }
      if (
        z &&
        !x &&
        o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled()
      ) {
        var ue;
        i[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((ue = s._(/*BTDS*/ "Pinned message").toString()), (i[18] = ue))
          : (ue = i[18]);
        var ce = " " + ue + " ",
          de;
        (i[19] !== ce
          ? ((de = c.jsx(o("WAWebPinnedSmallIcon.react").PinnedSmallIcon, {
              width: 15,
              "aria-label": ce,
            })),
            (i[19] = ce),
            (i[20] = de))
          : (de = i[20]),
          Z.push(de));
      }
      var me = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(y);
      if (
        f === !0 &&
        me != null &&
        o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(me) >= 2 &&
        o("WAWebThreadsGating").isFollowUpReplyEnabled()
      ) {
        var pe;
        (i[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((pe = c.jsx(o("WAWebFollowUpReplyIcon.react").FollowUpReplyIcon, {
              width: 15,
            })),
            (i[21] = pe))
          : (pe = i[21]),
          Z.push(pe));
      }
      var _e = $ && !x,
        fe = null;
      if (_e) {
        var ge;
        i[22] !== y
          ? ((ge = y.unsafe()), (i[22] = y), (i[23] = ge))
          : (ge = i[23]);
        var he;
        (i[24] !== u || i[25] !== ge
          ? ((he = c.jsx(r("WAWebMessageStatus"), {
              msg: ge,
              associatedMessages: u,
            })),
            (i[24] = u),
            (i[25] = ge),
            (i[26] = he))
          : (he = i[26]),
          (fe = he));
      }
      ((A === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && F === "fanout") ||
        O === !0) &&
        (fe = null);
      var ye;
      if (
        i[27] !== p ||
        i[28] !== _ ||
        i[29] !== y ||
        i[30] !== te ||
        i[31] !== G
      ) {
        var Ce,
          be = o("WAWebFrontendMsgGetters").getChat(y.unsafe());
        ((ye =
          o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(
            be == null || (Ce = be.newsletterMetadata) == null
              ? void 0
              : Ce.membershipType,
          ) &&
          _ !== !0 &&
          G != null &&
          p !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
          y.type !== o("WAWebMsgType").MSG_TYPE.REVOKED
            ? c.jsx(r("WDSText.react"), {
                type: "Body3",
                robotoPropValue:
                  o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
                colorName: te ? "persistentAlwaysWhite" : "contentDeemphasized",
                children: c.jsx("span", { "data-testid": void 0, children: G }),
              })
            : null),
          (i[27] = p),
          (i[28] = _),
          (i[29] = y),
          (i[30] = te),
          (i[31] = G),
          (i[32] = ye));
      } else ye = i[32];
      var ve = ye,
        Se;
      if (W && !x && !q) {
        var Re;
        i[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((Re = h()), (i[33] = Re))
          : (Re = i[33]);
        var Le = Re,
          Ee;
        i[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ee = o("WAWebABProps").getABPropConfigValue("wds_web_roboto")),
            (i[34] = Ee))
          : (Ee = i[34]);
        var ke = te ? "persistentAlwaysWhite" : "contentDeemphasized",
          Ie;
        (i[35] !== ke
          ? ((Ie = c.jsx(r("WDSText.react"), {
              type: "Body3",
              robotoPropValue: Ee,
              xstyle: m.editedLabel,
              colorName: ke,
              children: Le,
            })),
            (i[35] = ke),
            (i[36] = Ie))
          : (Ie = i[36]),
          (Se = Ie));
      }
      var Te,
        De = C(y),
        xe = b(y);
      if (
        r("WAWebWid").isCAPISupportAccount(
          y == null || (t = y.id) == null ? void 0 : t.remote,
        ) &&
        xe != null &&
        o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled()
      ) {
        var $e;
        i[37] === Symbol.for("react.memo_cache_sentinel")
          ? (($e = { className: "x2fvf9 xwklpps" }), (i[37] = $e))
          : ($e = i[37]);
        var Pe;
        (i[38] !== xe
          ? ((Pe = c.jsx(
              "span",
              babelHelpers.extends({}, $e, {
                "data-testid": void 0,
                children: xe,
              }),
            )),
            (i[38] = xe),
            (i[39] = Pe))
          : (Pe = i[39]),
          (Te = Pe));
        var Ne;
        (i[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ne = c.jsx(r("WDSIconWdsIcAiFilled.react"), {
              width: 14,
              height: 14,
            })),
            (i[40] = Ne))
          : (Ne = i[40]),
          Z.push(Ne));
      } else if (De != null) {
        var Me;
        i[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((Me = { className: "x2fvf9 xwklpps" }), (i[41] = Me))
          : (Me = i[41]);
        var we;
        (i[42] !== De
          ? ((we = c.jsx(
              "span",
              babelHelpers.extends({}, Me, {
                "data-testid": void 0,
                children: De,
              }),
            )),
            (i[42] = De),
            (i[43] = we))
          : (we = i[43]),
          (Te = we));
        var Ae;
        (i[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ae = c.jsx(r("WDSIconWdsIcAiFilled.react"), {
              width: 14,
              height: 14,
            })),
            (i[44] = Ae))
          : (Ae = i[44]),
          Z.push(Ae));
      }
      var Fe;
      if (o("WAWebBotGating").showBotSearchPlugin(y.unsafe())) {
        var Oe;
        i[45] !== y
          ? ((Oe = o("WAWebMsgGetters").getBotPluginSearchUrl(y)),
            (i[45] = y),
            (i[46] = Oe))
          : (Oe = i[46]);
        var Be;
        i[47] !== y
          ? ((Be = o("WAWebMsgGetters").getBotPluginSearchProvider(y)),
            (i[47] = y),
            (i[48] = Be))
          : (Be = i[48]);
        var We;
        (i[49] !== V || i[50] !== w || i[51] !== Oe || i[52] !== Be
          ? ((We = c.jsx(r("WAWebBotPluginMsgBubbleMeta.react"), {
              t: w,
              botPluginSearchQuery: V,
              botPluginSearchUrl: Oe,
              botPluginSearchProvider: Be,
            })),
            (i[49] = V),
            (i[50] = w),
            (i[51] = Oe),
            (i[52] = Be),
            (i[53] = We))
          : (We = i[53]),
          (Fe = We));
      }
      var qe;
      if (
        De == null &&
        o("WAWebMsgGetters").getIsCAPISupport(y) &&
        U &&
        o("WAWebABPropsSaga").getIsSagaV1Enabled()
      ) {
        var Ue;
        (i[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ue = c.jsx(r("WAWebSagaMessageMarker.react"), {
              width: 11,
              height: 11,
              marginRight: !0,
            })),
            (i[54] = Ue))
          : (Ue = i[54]),
          (qe = Ue));
      }
      var Ve;
      i[55] !== H
        ? ((Ve =
            H === !0 &&
            o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported()
              ? c.jsx(
                  o("WAWebPremiumChannelFilledIcon.react")
                    .PremiumChannelFilledIcon,
                  { width: 11, height: 11 },
                )
              : null),
          (i[55] = H),
          (i[56] = Ve))
        : (Ve = i[56]);
      var He = Ve,
        Ge = r("useWAWebCanOpenInfoDrawer")(y.id),
        ze =
          Ge &&
          p !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING &&
          p !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO,
        je;
      i[57] !== y || i[58] !== w || i[59] !== v
        ? (w &&
            (v !== "date"
              ? (je = o("WAWebClock").Clock.timestampStr(w))
              : (je = o("WAWebClock").Clock.relativeStr(w))),
          je != null &&
            o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(y) &&
            (je = je.toString() + " [LID]"),
          (i[57] = y),
          (i[58] = w),
          (i[59] = v),
          (i[60] = je))
        : (je = i[60]);
      var Ke;
      i[61] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ke = o("WAWebABProps").getABPropConfigValue("wds_web_roboto")),
          (i[61] = Ke))
        : (Ke = i[61]);
      var Qe = te ? "persistentAlwaysWhite" : "contentDeemphasized",
        Xe;
      i[62] !== Qe || i[63] !== je
        ? ((Xe = c.jsx(r("WDSText.react"), {
            type: "Body3",
            robotoPropValue: Ke,
            colorName: Qe,
            children: je,
          })),
          (i[62] = Qe),
          (i[63] = je),
          (i[64] = Xe))
        : (Xe = i[64]);
      var Ye = Xe,
        Je;
      if (
        l != null &&
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
          (n = y.ctwaContext) == null ? void 0 : n.sourceApp,
          y.type,
          (a = y.ctwaContext) == null
            ? void 0
            : a.automatedGreetingMessageShown,
          y.subtype,
        )
      ) {
        var Ze;
        i[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ze = o("WAWebABProps").getABPropConfigValue("wds_web_roboto")),
            (i[65] = Ze))
          : (Ze = i[65]);
        var et = te ? "persistentAlwaysWhite" : "contentDeemphasized",
          tt;
        (i[66] !== l || i[67] !== et
          ? ((tt = c.jsx(r("WDSText.react"), {
              type: "Body3",
              robotoPropValue: Ze,
              colorName: et,
              children: l,
            })),
            (i[66] = l),
            (i[67] = et),
            (i[68] = tt))
          : (tt = i[68]),
          (Je = tt),
          (fe = null));
      } else A === o("WAWebMsgType").MSG_TYPE.CALL_LOG && (fe = null);
      var nt = Fe == null && Je == null && Ye,
        rt;
      i[69] !== Je ||
      i[70] !== Te ||
      i[71] !== Fe ||
      i[72] !== Se ||
      i[73] !== qe ||
      i[74] !== nt
        ? ((rt = c.jsxs(r("WDSTextContainer.react"), {
            children: [Se, qe, Te, Fe, nt, Je],
          })),
          (i[69] = Je),
          (i[70] = Te),
          (i[71] = Fe),
          (i[72] = Se),
          (i[73] = qe),
          (i[74] = nt),
          (i[75] = rt))
        : (rt = i[75]);
      var ot = rt;
      return c.jsx(g, {
        icons: Z,
        premiumMessageMarker: He,
        light: te,
        viewCount: ve,
        includeBotSearchPluginDetailToggleEl: Fe != null,
        onClick: ze ? J : null,
        status: fe,
        xstyle: S,
        children: ot,
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
      var n = o("react-compiler-runtime").c(29),
        a = t.children,
        i = t.icons,
        l = t.includeBotSearchPluginDetailToggleEl,
        s = t.light,
        u = t.onClick,
        d = t.premiumMessageMarker,
        _ = t.status,
        g = t.viewCount,
        h = t.xstyle,
        y;
      n[0] !== i || n[1] !== s
        ? ((y =
            i && i.length > 0
              ? i.map(function (e, t) {
                  return c.createElement(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: { className: "xhslqc4 x1rg5ohu x16q7b9a" },
                        1: { className: "x1rg5ohu x16q7b9a x17t9dm2" },
                      }[(s === !0) << 0],
                      { key: "icon-" + t },
                    ),
                    e,
                  );
                })
              : null),
          (n[0] = i),
          (n[1] = s),
          (n[2] = y))
        : (y = n[2]);
      var C = y,
        b;
      n[3] !== s || n[4] !== d
        ? ((b = d
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "xhslqc4 x1rg5ohu x7phf20" },
                    1: { className: "x1rg5ohu x7phf20 x17t9dm2" },
                  }[(s === !0) << 0],
                  { "data-testid": void 0, children: d },
                ),
              )
            : null),
          (n[3] = s),
          (n[4] = d),
          (n[5] = b))
        : (b = n[5]);
      var v = b,
        S;
      n[6] !== _
        ? ((S = _
            ? c.jsx("div", {
                className: "xhslqc4 x1rg5ohu x7phf20",
                children: _,
              })
            : null),
          (n[6] = _),
          (n[7] = S))
        : (S = n[7]);
      var R = S,
        L;
      n[8] !== s || n[9] !== g
        ? ((L =
            g != null
              ? c.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [g, c.jsx(p, { light: s })],
                })
              : null),
          (n[8] = s),
          (n[9] = g),
          (n[10] = L))
        : (L = n[10]);
      var E = L,
        k;
      if (n[11] !== l || n[12] !== s || n[13] !== h) {
        var I = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles;
        ((k = (e || (e = r("stylex")))(
          f.meta,
          s === !0 && f.metaLight,
          o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC &&
            o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME &&
            o("WAWebUA").UA.osVersion.includes("10.15") &&
            m.chromeFix,
          l && f.botPlugin,
          I,
          h,
        )),
          (n[11] = l),
          (n[12] = s),
          (n[13] = h),
          (n[14] = k));
      } else k = n[14];
      var T = k,
        D = u ? "button" : null,
        x;
      n[15] !== l
        ? ((x = {
            0: { className: "x1rg5ohu x16dsc37" },
            1: { className: "x1rg5ohu x1qughib xh8yej3" },
          }[(l === !0) << 0]),
          (n[15] = l),
          (n[16] = x))
        : (x = n[16]);
      var $;
      n[17] !== a || n[18] !== x
        ? (($ = c.jsx(
            "span",
            babelHelpers.extends({}, x, { dir: "auto", children: a }),
          )),
          (n[17] = a),
          (n[18] = x),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      return (
        n[20] !== T ||
        n[21] !== C ||
        n[22] !== u ||
        n[23] !== v ||
        n[24] !== R ||
        n[25] !== D ||
        n[26] !== $ ||
        n[27] !== E
          ? ((P = c.jsxs("div", {
              className: T,
              "data-testid": void 0,
              onClick: u,
              role: D,
              children: [C, E, $, v, R],
            })),
            (n[20] = T),
            (n[21] = C),
            (n[22] = u),
            (n[23] = v),
            (n[24] = R),
            (n[25] = D),
            (n[26] = $),
            (n[27] = E),
            (n[28] = P))
          : (P = n[28]),
        P
      );
    }
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
        n = o("react-compiler-runtime").c(2),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebFrontendMsgGetters").getAsRevoked,
            o("WAWebMsgGetters").getIsBizBot1pResponse,
            o("WAWebMsgGetters").getBizBotType,
          ]),
          (n[0] = r))
        : (r = n[0]);
      var a = o("useWAWebMsgValues").useMsgValues(e.id, r),
        i = a[0],
        l = a[1],
        u = a[2],
        c =
          (t = o("useWAWebContactValues").useOptionalContactValues(e.to, [
            o("WAWebContactGetters").getBusinessProfile,
          ])) != null
            ? t
            : [],
        d = c[0];
      if (!o("WAWebBotBaseGating").isBizBot1pEnabled() || i) return null;
      var m =
        e.id.fromMe &&
        u === o("WAWebBotTypes").BizBotType.BIZ_1P &&
        !(d != null && d.automatedType);
      if (!l && !m) return null;
      var p;
      return (
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(/*BTDS*/ "AI")), (n[1] = p))
          : (p = n[1]),
        p
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebMsgGetters").getIsSupportAIMessage,
            o("WAWebMsgGetters").getBizBotType,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebMsgValues").useMsgValues(e.id, n),
        a = r[0],
        i = r[1],
        l = !1;
      if (
        (i === o("WAWebBotTypes").BizBotType.BIZ_1P && (l = !0),
        a != null && (l = a),
        l === !0)
      ) {
        var u;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = s._(/*BTDS*/ "AI")), (t[1] = u))
            : (u = t[1]),
          u
        );
      }
      return null;
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
      var n = o("react-compiler-runtime").c(11),
        a = t.children,
        i = t.displayType,
        l = t.isSentByMe,
        s = t.isTransparent,
        u = t.ref,
        d = t.xstyle,
        m;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            o("WAWebUISpacing").uiPadding.vert3,
            o("WAWebUISpacing").uiPadding.start6,
            o("WAWebUISpacing").uiPadding.end7,
            v.transparentStyles,
          ]),
          (n[0] = m))
        : (m = n[0]);
      var p = m,
        _;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebUISpacing").uiPadding.vert5,
            o("WAWebUISpacing").uiPadding.horiz8,
            v.fiftyBorderRadius,
          ]),
          (n[1] = _))
        : (_ = n[1]);
      var f = _,
        g;
      n[2] !== i || n[3] !== l || n[4] !== s || n[5] !== d
        ? ((g = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.startAuto,
            s && (l ? v.authorIsMe : v.authorIsNotMe),
            s && p,
            s && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(i) && f,
            d,
          )),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = d),
          (n[6] = g))
        : (g = n[6]);
      var h;
      return (
        n[7] !== a || n[8] !== u || n[9] !== g
          ? ((h = c.jsx(
              "div",
              babelHelpers.extends({ ref: u }, g, { children: a }),
            )),
            (n[7] = a),
            (n[8] = u),
            (n[9] = g),
            (n[10] = h))
          : (h = n[10]),
        h
      );
    }
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
