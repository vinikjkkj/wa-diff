__d(
  "WAWebMediaHubMessageDropdownMenu.react",
  [
    "fbt",
    "WAWebBizCtwaAGMUtils",
    "WAWebChatGetters",
    "WAWebChatRefreshedIcon.react",
    "WAWebCheckRefreshedIcon.react",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyUtils",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebForwardRefreshedIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebKeepInChatMsgUtils",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubMessageActionHandlers",
    "WAWebMessageContextMenuActionsWamEvent",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgReply",
    "WAWebNoop",
    "WAWebReplyPrivatelyRefreshedIcon.react",
    "WAWebReplyRefreshedIcon.react",
    "WAWebRevokeMetricUtils",
    "WAWebStarRefreshedIcon.react",
    "WAWebStateUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstarRefreshedIcon.react",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumMessageContextMenuActionType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSIconIcBookmark.react",
    "WDSIconIcDownload.react",
    "WDSIconIcOpenInNew.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        isForMedia: {
          position: "x10l6tqk",
          top: "xfr5jun",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          zIndex: "x12xzxwr",
          transition: "x13k7yer",
          opacity: "xg01cxk",
          $$css: !0,
        },
        opacityVisible: { opacity: "x1hc1fzr", $$css: !0 },
        opacityInvisble: { opacity: "xg01cxk", $$css: !0 },
      };
    function f(e) {
      var t = e.isForMedia,
        n = t === void 0 ? !1 : t,
        a = e.isHover,
        i = e.link,
        l = e.msg,
        c = e.onHover,
        f = e.searchType,
        g = m(null),
        h = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        C = h.contextMenuMsg,
        b = h.isSelectMode,
        v = h.onMessageSelect,
        S = h.setContextMenuMsg,
        R = h.setIsSelectMode,
        L = function () {
          (R(!0), v(l));
        },
        E = p(!1),
        k = E[0],
        I = E[1],
        T = function () {
          R(!1);
        };
      (o("useWAWebListener").useListener(l, "revoked", function () {
        k && S(null);
      }),
        d(
          function () {
            return (C == null ? void 0 : C.msg) === l &&
              (C == null ? void 0 : C.searchType) === f
              ? I(!0)
              : I(!1);
          },
          [C, l, f],
        ));
      var D = (a || k) && !b;
      if (!b) {
        var x = u.jsx(y, { msg: l, onMessageSelect: L, link: i, onCancel: T }),
          $ = C == null ? void 0 : C.event;
        return u.jsxs(o("WAWebFlex.react").FlexItem, {
          shrink: 0,
          align: "center",
          tabIndex: -1,
          xstyle: [_.opacityInvisble, n && _.isForMedia, D && _.opacityVisible],
          children: [
            u.jsx(r("WDSMenuBarItem.react"), {
              buttonSize: "small",
              title: s._(/*BTDS*/ "Message's context menu"),
              onClick: D
                ? function (e) {
                    (e == null || e.stopPropagation(),
                      S(k ? null : { msg: l, searchType: f }));
                  }
                : void 0,
              icon: o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
            }),
            k &&
              u.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "MsgContextMenu",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: function () {
                  S(null);
                },
                children: u.jsx(r("WAWebUimUieMenu.react"), {
                  contextMenu:
                    $ != null
                      ? {
                          menu: x,
                          event: $,
                          dirX: o("WAWebDropdown.react").DirX.RIGHT,
                        }
                      : {
                          menu: x,
                          anchor: g == null ? void 0 : g.current,
                          dirX: n
                            ? o("WAWebDropdown.react").DirX.RIGHT
                            : o("WAWebDropdown.react").DirX.LEFT,
                          offsetX: n ? -12 : 0,
                          offsetY: n ? 16 : 0,
                        },
                }),
              }),
            u.jsx(
              "div",
              babelHelpers.extends(
                { ref: g },
                {
                  0: {},
                  2: {
                    className:
                      "x10l6tqk xfr5jun x11dcrhx x12xzxwr x13k7yer xg01cxk",
                  },
                  1: { className: "xomnu4r xdg88n9" },
                  3: {
                    className:
                      "x10l6tqk x12xzxwr x13k7yer xg01cxk xomnu4r xdg88n9",
                  },
                }[(!!n << 1) | (!!n << 0)],
              ),
            ),
          ],
        });
      }
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      new (o(
        "WAWebMessageContextMenuActionsWamEvent",
      ).MessageContextMenuActionsWamEvent)({
        isAGroup: o("WAWebChatGetters").getIsGroup(
          o("WAWebFrontendMsgGetters").getChat(e),
        ),
        isMultiAction: !1,
        isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
        messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType")
          .MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
        messageContextMenuOption: t,
      }).commit();
    }
    var h = { delete: { color: "xqnyt8g", $$css: !0 } };
    function y(e) {
      var t = o("react-compiler-runtime").c(96),
        a = e.isMsgVisible,
        i = e.link,
        l = e.msg,
        c = e.onCancel,
        d = e.onMessageSelect,
        m;
      t[0] !== l
        ? ((m = o("WAWebFrontendMsgGetters").getChat(l)),
          (t[0] = l),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] !== p || t[3] !== a || t[4] !== l || t[5] !== c
        ? ((_ = function () {
            (o("WAWebModalManager").ModalManager.openSupportModal(
              u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                chat: p,
                msgList: [l].map(o("WAWebStateUtils").unproxy),
                isMsgVisible: a,
                onEnd: c,
                theme: "mediaHub",
              }),
            ),
              o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
              o(
                "WAWebRevokeMetricUtils",
              ).UiRevokeActionHelper.messageSelected());
          }),
          (t[2] = p),
          (t[3] = a),
          (t[4] = l),
          (t[5] = c),
          (t[6] = _))
        : (_ = t[6]);
      var f = _,
        y;
      if (t[7] !== l) {
        var C, b;
        ((y =
          (!o("WAWebMsgGetters").getIsNewsletterMsg(l) ||
            o("WAWebMsgActionCapability").canRevokeNewsletterMsg(l)) &&
          !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
            (C = l.ctwaContext) == null ? void 0 : C.sourceApp,
            l.type,
            (b = l.ctwaContext) == null
              ? void 0
              : b.automatedGreetingMessageShown,
            l.subtype,
          )),
          (t[7] = l),
          (t[8] = y));
      } else y = t[8];
      var v = y,
        S;
      if (
        t[9] !== v ||
        t[10] !== f ||
        t[11] !== i ||
        t[12] !== l ||
        t[13] !== c ||
        t[14] !== d
      ) {
        var R = [],
          L,
          E;
        t[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = u.jsx(
              o("WAWebCheckRefreshedIcon.react").CheckRefreshedIcon,
              {},
            )),
            (E = s._(/*BTDS*/ "Select")),
            (t[16] = L),
            (t[17] = E))
          : ((L = t[16]), (E = t[17]));
        var k;
        (t[18] !== d
          ? ((k = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { testid: void 0, action: d, icon: L, children: E },
              "select",
            )),
            (t[18] = d),
            (t[19] = k))
          : (k = t[19]),
          R.push(k));
        var I;
        if (
          (t[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = u.jsx(
                r("WAWebDropdownItemSeparator.react"),
                {},
                "separator-select",
              )),
              (t[20] = I))
            : (I = t[20]),
          R.push(I),
          !o("WAWebMsgActionCapability").canDownloadMsg(
            l,
            l.mediaObject != null,
          ) && i != null)
        ) {
          var T;
          t[21] !== i.href
            ? ((T = function () {
                (o("WAWebExternalLink.react").openExternalLink(i.href),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN,
                  }));
              }),
              (t[21] = i.href),
              (t[22] = T))
            : (T = t[22]);
          var D, x;
          t[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = u.jsx(r("WDSIconIcOpenInNew.react"), {})),
              (x = s._(/*BTDS*/ "Open link in a new tab")),
              (t[23] = D),
              (t[24] = x))
            : ((D = t[23]), (x = t[24]));
          var $;
          (t[25] !== T
            ? (($ = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: T, icon: D, children: x },
                "link",
              )),
              (t[25] = T),
              (t[26] = $))
            : ($ = t[26]),
            R.push($));
        }
        var P;
        t[27] !== l
          ? ((P = function () {
              (o("WAWebMediaHubMessageActionHandlers").goToMessageFromModal(l),
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.GO_TO_MESSAGE,
                }));
            }),
            (t[27] = l),
            (t[28] = P))
          : (P = t[28]);
        var N, M;
        t[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {
              directional: !0,
            })),
            (M = s._(/*BTDS*/ "Go to message")),
            (t[29] = N),
            (t[30] = M))
          : ((N = t[29]), (M = t[30]));
        var w;
        if (
          (t[31] !== P
            ? ((w = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: P, icon: N, children: M },
                "go-to-msg",
              )),
              (t[31] = P),
              (t[32] = w))
            : (w = t[32]),
          R.push(w),
          o("WAWebMsgReply").canReplyMsg(l))
        ) {
          var A;
          t[33] !== l
            ? ((A = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY,
                    }),
                      yield o(
                        "WAWebMediaHubMessageActionHandlers",
                      ).replyToMessageFromModal(l),
                      g(
                        l,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY,
                      ));
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (t[33] = l),
              (t[34] = A))
            : (A = t[34]);
          var F, O;
          t[35] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = u.jsx(
                o("WAWebReplyRefreshedIcon.react").ReplyRefreshedIcon,
                {},
              )),
              (O = s._(/*BTDS*/ "Reply")),
              (t[35] = F),
              (t[36] = O))
            : ((F = t[35]), (O = t[36]));
          var B;
          (t[37] !== A
            ? ((B = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: A, icon: F, children: O },
                "reply",
              )),
              (t[37] = A),
              (t[38] = B))
            : (B = t[38]),
            R.push(B));
        }
        if (o("WAWebMsgReply").canPrivateReply(l)) {
          var W;
          t[39] !== l
            ? ((W = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY,
                    }),
                      yield o(
                        "WAWebMediaHubMessageActionHandlers",
                      ).replyPrivatelyToMessageFromModal(l),
                      g(
                        l,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY_PRIVATELY,
                      ));
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (t[39] = l),
              (t[40] = W))
            : (W = t[40]);
          var q, U;
          t[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = u.jsx(
                o("WAWebReplyPrivatelyRefreshedIcon.react")
                  .ReplyPrivatelyRefreshedIcon,
                {},
              )),
              (U = s._(/*BTDS*/ "Reply privately")),
              (t[41] = q),
              (t[42] = U))
            : ((q = t[41]), (U = t[42]));
          var V;
          (t[43] !== W
            ? ((V = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: W, icon: q, children: U },
                "reply-privately",
              )),
              (t[43] = W),
              (t[44] = V))
            : (V = t[44]),
            R.push(V));
        }
        if (
          !r("WAWebEnvironment").isWindows &&
          o("WAWebMsgActionCapability").canDownloadMsg(l, l.mediaObject != null)
        ) {
          var H;
          t[45] !== l || t[46] !== c
            ? ((H = function () {
                (o(
                  "WAWebMediaHubMessageActionHandlers",
                ).handleMessageDownloadClick([l], c, "media_hub"),
                  g(
                    l,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
                  ),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE.DOWNLOAD,
                  }));
              }),
              (t[45] = l),
              (t[46] = c),
              (t[47] = H))
            : (H = t[47]);
          var G, z;
          t[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = u.jsx(r("WDSIconIcDownload.react"), {})),
              (z = s._(/*BTDS*/ "Download")),
              (t[48] = G),
              (t[49] = z))
            : ((G = t[48]), (z = t[49]));
          var j;
          (t[50] !== H
            ? ((j = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: H, icon: G, children: z },
                "download",
              )),
              (t[50] = H),
              (t[51] = j))
            : (j = t[51]),
            R.push(j));
        }
        if (o("WAWebCopyUtils").canCopyMessage(l)) {
          var K;
          t[52] !== l
            ? ((K = function () {
                (o("WAWebCopyUtils").copyMessageToClipboard(l),
                  g(
                    l,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY,
                  ));
              }),
              (t[52] = l),
              (t[53] = K))
            : (K = t[53]);
          var Q, X;
          t[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((Q = u.jsx(
                o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
                {},
              )),
              (X = s._(/*BTDS*/ "Copy")),
              (t[54] = Q),
              (t[55] = X))
            : ((Q = t[54]), (X = t[55]));
          var Y;
          (t[56] !== K
            ? ((Y = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: K, icon: Q, children: X },
                "copy",
              )),
              (t[56] = K),
              (t[57] = Y))
            : (Y = t[57]),
            R.push(Y));
        }
        if (o("WAWebMsgActionCapability").canForwardMsg(l)) {
          var J;
          t[58] !== l
            ? ((J = function () {
                (o("WAWebMediaHubMessageActionHandlers").handleForwardClick(
                  l,
                  r("WAWebNoop"),
                ),
                  g(
                    l,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD,
                  ),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE.FORWARD,
                  }));
              }),
              (t[58] = l),
              (t[59] = J))
            : (J = t[59]);
          var Z, ee;
          t[60] === Symbol.for("react.memo_cache_sentinel")
            ? ((Z = u.jsx(
                o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
                { directional: !0 },
              )),
              (ee = s._(/*BTDS*/ "Forward")),
              (t[60] = Z),
              (t[61] = ee))
            : ((Z = t[60]), (ee = t[61]));
          var te;
          (t[62] !== J
            ? ((te = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: J, icon: Z, children: ee },
                "forward",
              )),
              (t[62] = J),
              (t[63] = te))
            : (te = t[63]),
            R.push(te));
        }
        if (o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(l)) {
          var ne;
          t[64] !== l
            ? ((ne = function () {
                (o("WAWebMediaHubMessageActionHandlers")
                  .handleUndoKeepClick(l)
                  .catch(r("WAWebNoop")),
                  g(
                    l,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
                  ));
              }),
              (t[64] = l),
              (t[65] = ne))
            : (ne = t[65]);
          var re, oe;
          t[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((re = u.jsx(r("WDSIconWdsIcBookmarkSlash.react"), {})),
              (oe = s._(/*BTDS*/ "Unkeep")),
              (t[66] = re),
              (t[67] = oe))
            : ((re = t[66]), (oe = t[67]));
          var ae;
          (t[68] !== ne
            ? ((ae = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: ne, icon: re, children: oe },
                "unkeep",
              )),
              (t[68] = ne),
              (t[69] = ae))
            : (ae = t[69]),
            R.push(ae));
        } else if (
          !o("WAWebMsgGetters").getIsKept(l) &&
          o("WAWebKeepInChatMsgUtils").canShowKeepOption(l)
        ) {
          var ie;
          t[70] !== l
            ? ((ie = function () {
                (o("WAWebMediaHubMessageActionHandlers")
                  .handleKeepClick(l)
                  .catch(r("WAWebNoop")),
                  g(
                    l,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
                  ));
              }),
              (t[70] = l),
              (t[71] = ie))
            : (ie = t[71]);
          var le, se;
          t[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((le = u.jsx(r("WDSIconIcBookmark.react"), {})),
              (se = s._(/*BTDS*/ "Keep")),
              (t[72] = le),
              (t[73] = se))
            : ((le = t[72]), (se = t[73]));
          var ue;
          (t[74] !== ie
            ? ((ue = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: ie, icon: le, children: se },
                "keep",
              )),
              (t[74] = ie),
              (t[75] = ue))
            : (ue = t[75]),
            R.push(ue));
        }
        if (o("WAWebMsgActionCapability").canStarMsg(l)) {
          if (l.star) {
            var ce;
            t[76] !== l
              ? ((ce = function () {
                  (o(
                    "WAWebMediaHubMessageActionHandlers",
                  ).handleMessageUnstarClick(l),
                    g(
                      l,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
                    ),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR,
                    }));
                }),
                (t[76] = l),
                (t[77] = ce))
              : (ce = t[77]);
            var de, me;
            t[78] === Symbol.for("react.memo_cache_sentinel")
              ? ((de = u.jsx(
                  o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon,
                  {},
                )),
                (me = s._(/*BTDS*/ "Unstar")),
                (t[78] = de),
                (t[79] = me))
              : ((de = t[78]), (me = t[79]));
            var pe;
            (t[80] !== ce
              ? ((pe = u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  { testid: void 0, action: ce, icon: de, children: me },
                  "star",
                )),
                (t[80] = ce),
                (t[81] = pe))
              : (pe = t[81]),
              R.push(pe));
          } else if (!o("WAWebMsgGetters").getIsKept(l)) {
            var _e;
            t[82] !== l
              ? ((_e = function () {
                  (o(
                    "WAWebMediaHubMessageActionHandlers",
                  ).handleMessageStarClick(l),
                    g(
                      l,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
                    ),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR,
                    }));
                }),
                (t[82] = l),
                (t[83] = _e))
              : (_e = t[83]);
            var fe, ge;
            t[84] === Symbol.for("react.memo_cache_sentinel")
              ? ((fe = u.jsx(
                  o("WAWebStarRefreshedIcon.react").StarRefreshedIcon,
                  {},
                )),
                (ge = s._(/*BTDS*/ "Star")),
                (t[84] = fe),
                (t[85] = ge))
              : ((fe = t[84]), (ge = t[85]));
            var he;
            (t[86] !== _e
              ? ((he = u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  { testid: void 0, action: _e, icon: fe, children: ge },
                  "star",
                )),
                (t[86] = _e),
                (t[87] = he))
              : (he = t[87]),
              R.push(he));
          }
        }
        if (v) {
          var ye;
          (t[88] === Symbol.for("react.memo_cache_sentinel")
            ? ((ye = u.jsx(
                r("WAWebDropdownItemSeparator.react"),
                {},
                "separator",
              )),
              (t[88] = ye))
            : (ye = t[88]),
            R.push(ye));
          var Ce;
          t[89] !== f || t[90] !== l
            ? ((Ce = function () {
                (f(),
                  g(
                    l,
                    o("WAWebWamEnumMessageContextMenuOptionType")
                      .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE,
                  ),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE.DELETE,
                  }));
              }),
              (t[89] = f),
              (t[90] = l),
              (t[91] = Ce))
            : (Ce = t[91]);
          var be;
          t[92] === Symbol.for("react.memo_cache_sentinel")
            ? ((be = u.jsx(
                o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                {},
              )),
              (t[92] = be))
            : (be = t[92]);
          var ve;
          t[93] === Symbol.for("react.memo_cache_sentinel")
            ? ((ve = s._(/*BTDS*/ "Delete")), (t[93] = ve))
            : (ve = t[93]);
          var Se;
          (t[94] !== Ce
            ? ((Se = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: Ce,
                  icon: be,
                  xstyle: h.delete,
                  children: ve,
                },
                "delete",
              )),
              (t[94] = Ce),
              (t[95] = Se))
            : (Se = t[95]),
            R.push(Se));
        }
        ((S = u.jsx(u.Fragment, { children: R })),
          (t[9] = v),
          (t[10] = f),
          (t[11] = i),
          (t[12] = l),
          (t[13] = c),
          (t[14] = d),
          (t[15] = S));
      } else S = t[15];
      return S;
    }
    ((l.WAWebMediaHubMessageDropdownMenu = f), (l.DropdownMenuItems = y));
  },
  226,
);
