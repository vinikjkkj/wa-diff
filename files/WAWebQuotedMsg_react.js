__d(
  "WAWebQuotedMsg.react",
  [
    "cx",
    "fbt",
    "WAFilteredCatch",
    "WANullthrows",
    "WAWebBackendErrors",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebCatalogCollection",
    "WAWebChatCollection",
    "WAWebChatMessageSearch",
    "WAWebChatParticipantColor",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactUtils",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebIsInThreadsViewContext",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageAuthor.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterQuotedMsgUtils",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebQuotedMsgContent.react",
    "WAWebQuotedMsgQuotedMedia.react",
    "WAWebQuotedMsgWrapper.react",
    "WAWebStateUtils",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebThreadMsgUtils",
    "WAWebThreadsViewFocusMsgContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumStatusRowSection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
    "useWAWebMsgValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = {
        msgBody: {
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          alignItems: "x6s0dn4",
          minHeight: "xruhr43",
          maxHeight: "xh8rlot",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        paddingTop4: { paddingTop: "x1tiyuxx", $$css: !0 },
        paddingEnd12: { paddingInlineEnd: "xde1mab", $$css: !0 },
        paddingBottom8: { paddingBottom: "x12xbjc7", $$css: !0 },
        paddingStart8: { paddingInlineStart: "x12w63v0", $$css: !0 },
      };
    function g(t) {
      var a,
        i,
        l,
        s = t.chat,
        c = t.composeQuotedMsgRemoteJid,
        m = t.displayType,
        g = t.isMsgVisible,
        y = t.msg,
        C = t.onClick,
        b = t.rootMsg,
        v = t.shouldHideQuotedMsgAuthor,
        S = t.t,
        R = r("useWAWebUIM")(),
        L = p(r("WAWebIsInThreadsViewContext")),
        E = p(r("WAWebThreadsViewFocusMsgContext")),
        k = o("useWAWebMsgValues").useMsgValues(y.id, [
          o("WAWebFrontendMsgGetters").getSenderForReplyMsg,
          o("WAWebMsgGetters").getIsGroupStatus,
        ]),
        I = k[0],
        T = k[1],
        D = r("useLazyRef")(function () {
          return new (o("WAWebProductCatalogSession").ProductCatalogSession)();
        }),
        x = o("WAWebChatCollection").ChatCollection.get(y.author),
        $ = o("WAWebContactCollection").ContactCollection.get(y.author),
        P = I,
        N = s;
      T && ((N = x != null ? x : s), (P = $ != null ? $ : I));
      var M = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(N);
      _(function () {
        var e = o("WAWebFrontendMsgGetters").getAsProductInquiry(y.unsafe());
        if (e != null) {
          var t = e.businessOwnerJid,
            n = r("isStringNullOrEmpty")(t)
              ? null
              : o("WAWebWidFactory").createWid(t);
          n &&
            (S != null && (e.t = S),
            o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(
              o("WAWebStateUtils").unproxy(e.unsafe()),
            ));
        }
      }, []);
      var w = function (t) {
          var e = t.businessOwnerJid,
            n = r("isStringNullOrEmpty")(e)
              ? null
              : o("WAWebWidFactory").createWid(e);
          if (n) {
            var a = o("WAWebCatalogCollection").CatalogCollection.get(n);
            if (a) {
              var i =
                  t.productId != null
                    ? a.productCollection.get(t.productId)
                    : null,
                l =
                  t.productId != null
                    ? a.msgProductCollection.get(t.productId)
                    : null;
              if (!(i == null && l == null)) {
                var s = l;
                if (
                  (i != null &&
                    S != null &&
                    i.t >= S &&
                    ((s = i), l != null && a.productCollection.remove(l)),
                  s != null)
                ) {
                  var u = o(
                    "WAWebProductCatalogContext",
                  ).buildProductCatalogContext(
                    D.current,
                    o("WAWebContactUtils").getMaybeBizPlatformForLogging(
                      t.businessOwnerJid,
                    ),
                    o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                      .CATALOG_ENTRY_POINT_MESSAGE,
                  );
                  return (
                    o("WAWebProductCatalogLogEvents").logProductInquiryClick({
                      product: o("WAWebStateUtils").unproxy(s),
                      catalogContext: u,
                    }),
                    o("WAWebUtilsLogQplEvents").qplStartProductView("Message"),
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                      d.jsx(
                        o("WAWebProductDetailsFlowLoadable")
                          .ProductDetailsFlowLoadable,
                        {
                          product: s,
                          chat: o("WAWebFrontendMsgGetters").getChat(
                            t.unsafe(),
                          ),
                          refreshCarousel: !0,
                        },
                      ),
                      { transition: "slide-left", uim: R, newDrawerContext: u },
                    )
                  );
                }
              }
            }
          }
        },
        A = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            if ((C == null || C(), y.unsafe().local !== !0)) {
              if (o("WAWebMsgGetters").getIsStatus(y)) {
                if (!b || !b.isQuotedMsgAvailable)
                  o("WAWebToastManager").ToastManager.open(
                    d.jsx(o("WAWebToast.react").Toast, {
                      msg: u._(/*BTDS*/ "Status update not found"),
                    }),
                  );
                else {
                  var t = o("WAWebMsgGetters").getSender(y);
                  t != null &&
                    o("WAWebStatusCollection")
                      .StatusCollection.find(
                        o("WAWebLidStatusMigrationUtils").matWidConvert(t),
                      )
                      .then(function (e) {
                        var t = function () {
                          b && (b.unsafe().isQuotedMsgAvailable = !1);
                        };
                        o("WAWebModalManager").ModalManager.openMedia(
                          d.jsx(
                            o("WAWebStatusQuotedFlowLoadable")
                              .StatusQuotedFlowLoadable,
                            {
                              status: e,
                              msgKey: o(
                                "WAWebLidStatusMigrationKeyUtils",
                              ).matKeyConvert(y.id),
                              onMsgNotFound: t,
                              onClose: function () {
                                return o(
                                  "WAWebModalManager",
                                ).ModalManager.closeMedia();
                              },
                              rowSection: o("WAWebWamEnumStatusRowSection")
                                .STATUS_ROW_SECTION.QUOTED_MESSAGE_IN_CHAT,
                            },
                          ),
                          { transition: "quoted-status-modal" },
                        );
                      });
                }
                return;
              }
              var n = o("WAWebFrontendMsgGetters").getAsProductInquiry(
                y.unsafe(),
              );
              if (n != null) return w(n);
              if (b && !b.isQuotedMsgAvailable) {
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: u._(/*BTDS*/ "Couldn't find message"),
                  }),
                );
                return;
              }
              var a = o("WAWebFrontendMsgGetters").getChat(y.unsafe()),
                i = yield o(
                  "WAWebNewsletterQuotedMsgUtils",
                ).getMsgDetailsForSearch(y),
                l = i.msgInStore,
                s = i.quotedMsgKey;
              if (L) {
                var c,
                  m = (c = l == null ? void 0 : l.id) != null ? c : s;
                (E == null || !E(m.id)) &&
                  o("WAWebToastManager").ToastManager.open(
                    d.jsx(o("WAWebToast.react").Toast, {
                      msg: u._(/*BTDS*/ "Couldn't find message"),
                    }),
                  );
                return;
              }
              var p;
              if (
                a.id.isBot() &&
                o("WAWebBotGating").isAiChatThreadsEnabled() &&
                ((p = o("WAWebThreadMsgUtils").getMsgAiThread(y.unsafe())),
                p == null)
              ) {
                var _,
                  f = ((_ = l == null ? void 0 : l.id) != null ? _ : s).remote;
                b != null &&
                  f.equals(a.id) &&
                  (p = o("WAWebThreadMsgUtils").getMsgAiThread(b.unsafe()));
              }
              var v = o("WAWebChatMessageSearch").getSearchContext({
                chat: a,
                msgKey: (e = l == null ? void 0 : l.id) != null ? e : s,
                rootMsg: b == null ? void 0 : b.unsafe(),
                threadId: p,
              });
              v && (v.slideToMsg = !0);
              var S = b != null && b.selectedCarouselCardIndex != null;
              S && (v.highlightMsg = !1);
              var R =
                b != null
                  ? o("WAWebFrontendMsgGetters").getChat(b.unsafe())
                  : null;
              (R != null &&
                o("WAWebBotUtils").isMetaAiBot(R.id) &&
                p == null &&
                o("WAWebBotGating").isAiChatThreadsEnabled() &&
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
                o("WAWebCmd").Cmd.openChatAt({
                  chat: a,
                  msgContext: v,
                  onSuccess: {
                    mediaMsgToOpenInMediaViewer:
                      o("WAWebMsgCollection").MsgCollection.get(s),
                    onScrollToQuotedCarouselCard: S
                      ? h(
                          s,
                          r("WANullthrows")(
                            b == null ? void 0 : b.selectedCarouselCardIndex,
                          ),
                          g,
                        )
                      : void 0,
                  },
                  threadId: p != null ? p : void 0,
                }),
                !l &&
                  v.collection.loadAroundPromise.catch(
                    o("WAFilteredCatch").filteredCatch(
                      o("WAWebBackendErrors").E404,
                      function () {
                        var e = b == null ? void 0 : b.unsafe(),
                          t =
                            e != null
                              ? o("WAWebFrontendMsgGetters").getChat(e)
                              : null;
                        e == null ||
                          t == null ||
                          o("WAWebCmd").Cmd.openChatAt({
                            chat: t,
                            msgContext: o(
                              "WAWebChatMessageSearch",
                            ).getSearchContext({
                              chat: t,
                              msgKey: e.id,
                              threadId: p,
                            }),
                            threadId: p != null ? p : void 0,
                          });
                      },
                    ),
                  ));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        F =
          m != null &&
          [
            o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
            o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS,
          ].includes(m),
        O = c || (b == null ? void 0 : b.quotedRemoteJid),
        B =
          v === !0 ||
          (o("WAWebBotUtils").isMetaAiBot(s.id) &&
            !(
              o("WAWebBotUtils").isMetaAiBot(y.from) ||
              o("WAWebBotUtils").isMetaAiBot(y.to)
            )),
        W =
          B === !0
            ? null
            : d.jsx(r("WAWebMessageAuthor.react"), {
                msg: y,
                contact: P != null ? P : I,
                chat: N,
                quotedRemoteJid: O,
                disableClick: !0,
                showMemberLabel: !1,
              }),
        q = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}), (a._aju9 = M), (a._aju8 = !0), a),
        ),
        U = [
          f.msgBody,
          f.paddingTop4,
          f.paddingEnd12,
          f.paddingBottom8,
          f.paddingStart8,
        ],
        V = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((i = {}), (i._aju9 = M), (i._ajua = !0), i),
        ),
        H = d.jsxs("div", {
          className: V,
          children: [
            W,
            d.jsx(r("WAWebQuotedMsgContent.react"), {
              msg: y,
              rootMsg: b,
              theme: t.theme,
            }),
          ],
        }),
        G =
          m === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS
            ? "starred"
            : t.theme,
        z = o("WAWebMsgGetters").getSender(y),
        j = o(
          "useWAWebDefaultProfileColors",
        ).isDefaultProfileColorsEnabledForWid(z)
          ? 1
          : o("WAWebChatParticipantColor").getAssignedColor(
              N,
              z,
              "WAWebQuotedMsg-" +
                ((l = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                  s.id,
                )) != null
                  ? l
                  : ""),
            ),
        K = o("useWAWebGroupColors").useGroupsColorStyle(j, "background"),
        Q = o("useWAWebDefaultProfileColors").useDefaultProfileColors(z),
        X = Q.accent;
      return d.jsxs(r("WAWebQuotedMsgWrapper.react"), {
        authorBackgroundStyle: X != null ? X : K,
        theme: t.theme,
        handleClick: A,
        clickable: F,
        rootMsg: b,
        children: [
          d.jsx("div", {
            className: q + " " + (e || (e = r("stylex")))(U),
            dir: F ? null : o("WAWebFrontendMsgGetters").getDir(y),
            children: H,
          }),
          d.jsx(o("WAWebQuotedMsgQuotedMedia.react").QuotedMediaUnsafe, {
            rootMsg: b != null ? b.unsafe() : null,
            msg: y.unsafe(),
            theme: G,
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t, n) {
      if (n != null) {
        var r = n(e);
        if (!(r == null || typeof r != "object" || r.scrollToCard == null)) {
          var o = r.scrollToCard;
          o(t);
        }
      }
    }
    l.default = g;
  },
  226,
);
