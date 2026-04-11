__d(
  "WAWebMediaPanelHeader.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebDebugGatingUtils",
    "WAWebDetailImage.react",
    "WAWebDropdown.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEmojiText.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebIcCloseIcon.react",
    "WAWebKeepInChatMsgUtils",
    "WAWebMediaIncrementalZoom",
    "WAWebMediaPanelHeader.styles",
    "WAWebMediaPanelHeaderButtons.react",
    "WAWebMediaPanelHeaderTestIds",
    "WAWebMediaTypes",
    "WAWebMediaViewerFlow.react",
    "WAWebMenuBar.react",
    "WAWebMessageAssociation.flow",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgReply",
    "WAWebMsgViewCount",
    "WAWebNewsletterGatingUtils",
    "WAWebPdfViewerEventEmitter",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsPanel.react",
    "WAWebReactionsUtils",
    "WAWebReportNewsletterPostSpamButton.react",
    "WAWebSearchTheWebButton.react",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebSendForAdminReviewButton.react",
    "WAWebSendReactionMsgAction",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayContainer.react",
    "WAWebTPEditPdfInWhatsappContext.react",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WAWebWamEnumStwEntryPoint",
    "WAWebWamEnumStwInteraction",
    "WAWebWamMsgUtils",
    "WDSIconIcMoreVert.react",
    "WDSIconWdsIcViewOnce.react",
    "WDSMenuBarItem.react",
    "WDSTooltip.react",
    "cr:1528",
    "cr:19638",
    "cr:21122",
    "cr:7565",
    "cr:7572",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useLayoutEffect,
      f = d.useRef,
      g = d.useState;
    function h(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.filename,
        i = f(null),
        l = g(!1),
        s = l[0],
        u = l[1],
        d;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function () {
            var e = i.current;
            e != null && u(e.scrollWidth > e.clientWidth);
          }),
          (n[0] = d))
        : (d = n[0]);
      var m;
      (n[1] !== a ? ((m = [a]), (n[1] = a), (n[2] = m)) : (m = n[2]), _(d, m));
      var p = !s,
        h;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e || (e = r("stylex")))(
            r("WAWebMediaPanelHeader.styles").filename,
          )),
          (n[3] = h))
        : (h = n[3]);
      var y;
      n[4] !== a
        ? ((y = c.jsx("span", {
            ref: i,
            className: h,
            children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: a }),
          })),
          (n[4] = a),
          (n[5] = y))
        : (y = n[5]);
      var C;
      return (
        n[6] !== a || n[7] !== p || n[8] !== y
          ? ((C = c.jsx(r("WDSTooltip.react"), {
              label: a,
              disabled: p,
              children: y,
            })),
            (n[6] = a),
            (n[7] = p),
            (n[8] = y),
            (n[9] = C))
          : (C = n[9]),
        C
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx(C, babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function C(t) {
      var a,
        i = t.msg,
        l = t.msgIndexInAlbum,
        s = t.onClose,
        u = t.onHightlightCloseEnd,
        d = t.onViewOnceInfoClick,
        _ = t.showBorderBottom,
        y = _ === void 0 ? !1 : _,
        C = t.theme,
        b = C === void 0 ? "default" : C,
        v = f(null),
        R = f(null),
        L = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getStar,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getIsGif,
          o("WAWebMsgGetters").getIsViewOnce,
          o("WAWebMsgGetters").getSender,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getT,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsStickerMsg,
          o("WAWebMsgGetters").getBroadcastId,
          o("WAWebMsgGetters").getIsKept,
          o("WAWebMsgGetters").getMessageSecret,
          o("WAWebMsgGetters").getIsCarouselCard,
          o("WAWebMsgGetters").getCaption,
        ]),
        k = L[0],
        I = L[1],
        T = L[2],
        D = L[3],
        x = L[4],
        $ = L[5],
        P = L[6],
        N = L[7],
        M = L[8],
        w = L[9],
        A = L[10],
        F = L[11],
        O = L[12],
        B = L[13],
        W = L[14],
        q = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(i.id),
        U = o("WAWebFrontendMsgGetters").getChat(i),
        V = o("useWAWebModelValues").useModelValues(t.mediaData, [
          "size",
          "filehash",
          "mediaStage",
          "renderableUrl",
          "filename",
          "mimetype",
        ]),
        H = g(null),
        G = H[0],
        z = H[1],
        j = g(null),
        K = j[0],
        Q = j[1],
        X = f(null),
        Y = g(!1),
        J = Y[0],
        Z = Y[1];
      !J &&
        V.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
        Z(!0);
      var ee = f(!1),
        te = function () {
          (z(null),
            ee.current ||
              o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.trayClose());
        },
        ne = function () {
          (Q(null),
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.trayClose(),
            (ee.current = !1));
        },
        re = r("useWAWebStableCallback")(function (e) {
          if (o("WAWebReactionsUtils").canReactToMessage(e)) {
            var t = function (n) {
              (o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.reactionSelect(n),
                o("WAWebSendReactionMsgAction")
                  .sendReactionToMsg(e, n)
                  .catch(function (e) {}),
                ne());
            };
            Q({
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX: o("WAWebDropdown.react").DirX.CENTER,
              type: o("WAWebDropdown.react").MenuType.ReactionPicker,
              menu: c.jsx(r("WAWebReactionsPanel.react"), {
                msgId: e.id.toString(),
                onSelection: t,
              }),
              flipOnRTL: !0,
              anchor: X.current,
            });
          }
        }),
        oe = function () {
          if (o("WAWebReactionsUtils").canReactToMessage(i)) {
            var e = function (t) {
                ((ee.current =
                  t === o("WAWebSendReactionsTray.react").MORE_REACTIONS),
                  t !== o("WAWebSendReactionsTray.react").MORE_REACTIONS
                    ? (o(
                        "WAWebReactionUserJourneyLogger",
                      ).ReactionUserJourneyLogger.reactionSelect(t),
                      o("WAWebSendReactionMsgAction")
                        .sendReactionToMsg(i, t)
                        .catch(function (e) {}))
                    : self.setTimeout(function () {
                        re(i);
                      }, 150),
                  te());
              },
              t = {
                dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                type: o("WAWebDropdown.react").MenuType.ReactionSendTray,
                menu: c.jsx(
                  o("WAWebSendReactionsTrayContainer.react")
                    .SendReactionsTrayContainer,
                  {
                    msg: i,
                    selectedCallback: e,
                    userJourneyEntryPoint: o(
                      "WAWebWamEnumReactionUserJourneyEntryPoint",
                    ).REACTION_USER_JOURNEY_ENTRY_POINT
                      .MEDIA_VIEWER_REACTION_CTA,
                  },
                ),
                flipOnRTL: !1,
                anchor: X.current,
              };
            z(t);
          }
        };
      o("useWAWebListener").useListener(v.current, "animationend", function () {
        u();
      });
      var ae = i.displayName({ showShortName: !0, withPushName: !0 }),
        ie = function () {
          return x || !o("WAWebMsgActionCapability").canDownloadMsg(i)
            ? !1
            : o(
                  "WAWebTPPdfViewerGatingUtils",
                ).isWebTPPdfViewerEnabledForMimeType(V.mimetype) &&
                V.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT
              ? !0
              : !!V.renderableUrl ||
                V.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED;
        },
        le = function () {
          return c.jsx(o("WAWebIcCloseIcon.react").IcCloseIcon, {
            xstyle: t.isHighlightClose
              ? r("WAWebMediaPanelHeader.styles").highlightClose
              : {},
            containerRef: v,
          });
        },
        se;
      G
        ? (se = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MsgReaction",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: te,
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: G }),
          }))
        : K &&
          (se = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MsgReactionPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: ne,
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: K }),
          }));
      var ue =
        o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(
          U == null || (a = U.newsletterMetadata) == null
            ? void 0
            : a.membershipType,
        ) && q != null
          ? c.jsxs(o("WAWebFlex.react").FlexRow, {
              className: (e || (e = r("stylex")))(
                r("WAWebMediaPanelHeader.styles").viewCount,
              ),
              children: [
                o("WAWebClock").Clock.relativeDateAndTimeStr(N),
                c.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
                c.jsx("span", { children: q }),
              ],
            })
          : c.jsx(c.Fragment, {
              children: o("WAWebClock").Clock.relativeDateAndTimeStr(N),
            });
      o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(
        V.mimetype,
      ) &&
        !r("isStringNullOrEmpty")(W) &&
        W !== V.filename &&
        (ue = c.jsxs(o("WAWebFlex.react").FlexRow, {
          children: [
            c.jsx("span", {
              children: o("WAWebClock").Clock.relativeDateAndTimeStr(N),
            }),
            c.jsx(o("WAWebMessageMeta.react").MetaBullet, {}),
            c.jsx(o("WAWebEmojiText.react").EmojiText, {
              className: (e || (e = r("stylex")))(
                r("WAWebMediaPanelHeader.styles").filename,
              ),
              ellipsify: !0,
              text: W,
              titlify: !0,
              title: W,
            }),
          ],
        }));
      var ce = o(
          "WAWebTPPdfViewerGatingUtils",
        ).isWebTPPdfViewerEnabledForMimeType(V.mimetype)
          ? c.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [
                c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  className: (e || (e = r("stylex")))(
                    r("WAWebMediaPanelHeader.styles").author,
                  ),
                  ellipsify: !0,
                  text: ae,
                }),
                c.jsx("div", {
                  className: (e || (e = r("stylex")))(
                    r("WAWebMediaPanelHeader.styles").dot,
                  ),
                  children: "\xB7",
                }),
                c.jsx(h, { filename: V.filename }),
              ],
            })
          : c.jsx(o("WAWebEmojiText.react").EmojiText, {
              ellipsify: !0,
              text: ae,
            }),
        de = m(
          function () {
            o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(
              V.mimetype,
            ) &&
              o("WAWebTPLoggingUtils").logDownloadDocumentClickEvent(
                "media_viewer_header",
                V.filehash,
                V.size,
              );
          },
          [V.mimetype, V.filehash, V.size],
        ),
        me = p(o("WAWebMediaViewerFlow.react").MediaViewerFlowZoomContext),
        pe = p(
          o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx,
        ).isEnabled,
        _e = o(
          "WAWebTPEditPdfInWhatsappContext.react",
        ).useWAWebTPEditPdfInWhatsappContext(),
        fe = _e.isEditing,
        ge = !pe && me;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            r("WAWebMediaPanelHeader.styles").mediaPanelHeader,
            ge && r("WAWebMediaPanelHeader.styles").mediaPanelHeaderHidden,
            y && r("WAWebMediaPanelHeader.styles").mediaPanelHeaderBorderBottom,
          ),
          {
            children:
              fe && n("cr:21122") != null
                ? c.jsx(n("cr:21122"), {
                    containerRef: R,
                    filename: V.filename,
                    mimetype: V.mimetype,
                  })
                : c.jsxs(c.Fragment, {
                    children: [
                      c.jsx(
                        "div",
                        babelHelpers.extends(
                          {},
                          (e || (e = r("stylex"))).props(
                            r("WAWebMediaPanelHeader.styles").info,
                          ),
                          {
                            children: c.jsx(r("WAWebCellFrame.react"), {
                              idle: !0,
                              image: c.jsx(
                                o("WAWebDetailImage.react").DetailImage,
                                { id: $, size: 40 },
                              ),
                              primary: ce,
                              secondary: ue,
                              theme: "media",
                            }),
                          },
                        ),
                      ),
                      c.jsx(
                        "div",
                        babelHelpers.extends(
                          { ref: R },
                          (e || (e = r("stylex"))).props(
                            r("WAWebMediaPanelHeader.styles").mediaPanelTools,
                          ),
                          {
                            children: c.jsxs(
                              o("WAWebMenuBar.react").MenuBar,
                              {
                                theme: "strong",
                                gap: "single",
                                children: [
                                  n("cr:1528") &&
                                    o(
                                      "WAWebTPPdfViewerGatingUtils",
                                    ).isWebTPPdfEditAndShareEnabled(
                                      V.mimetype,
                                    ) &&
                                    c.jsx(n("cr:1528"), {
                                      msg: i,
                                      mediaData: V,
                                      isDisabled: !J || t.hasRendered !== !0,
                                    }),
                                  n("cr:7572") &&
                                    o(
                                      "WAWebTPPdfViewerGatingUtils",
                                    ).isWebTPPdfViewerEnabledForMimeType(
                                      V.mimetype,
                                    ) &&
                                    c.jsx(n("cr:7572"), {
                                      isDisabled: !J || t.hasRendered !== !0,
                                      onSearchClick: E,
                                    }),
                                  c.jsx(S, {
                                    isMediaDownloadable: ie,
                                    msg: i,
                                    msgIndexInAlbum: l,
                                    onClose: s,
                                    onViewOnceInfoClick: d,
                                    openReactionTray: oe,
                                    sendReactionButtonRef: X,
                                    theme: b,
                                    onDownloadClick: de,
                                  }),
                                  c.jsx(r("WDSMenuBarItem.react"), {
                                    testid: void 0,
                                    icon: le,
                                    title: r("WAWebFbtCommon")("Close"),
                                    onClick: t.onClose,
                                  }),
                                ],
                              },
                              "media-panel-header",
                            ),
                          },
                        ),
                      ),
                      se,
                      n("cr:19638") &&
                        c.jsx(n("cr:19638"), {
                          containerRef: R,
                          mimetype: V.mimetype,
                        }),
                    ],
                  }),
          },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.isMediaDownloadable,
        r = e.msg,
        a = e.onClose,
        i = e.openReactionTray,
        l = e.sendReactionButtonRef,
        s = e.theme,
        u = s === void 0 ? "default" : s,
        d;
      t[0] !== r || t[1] !== a || t[2] !== u
        ? ((d = o("WAWebMsgReply").canReplyMsg(r)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
                msg: r,
                onClose: a,
                theme: u,
              })
            : null),
          (t[0] = r),
          (t[1] = a),
          (t[2] = u),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== r
        ? ((m = o("WAWebMsgActionCapability").canStarMsg(r)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, {
                msg: r,
              })
            : null),
          (t[4] = r),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== r
        ? ((p = o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(r)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
                msg: r,
              })
            : null),
          (t[6] = r),
          (t[7] = p))
        : (p = t[7]);
      var _;
      t[8] !== r
        ? ((_ = o("WAWebMsgActionCapability").canPinMsg(r)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, {
                msg: r,
              })
            : null),
          (t[8] = r),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      t[10] !== r || t[11] !== i || t[12] !== l
        ? ((f = o("WAWebReactionsUtils").canReactToMessage(r)
            ? c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").SendReactionButton,
                { msg: r, openReactionTray: i, sendReactionButtonRef: l },
              )
            : null),
          (t[10] = r),
          (t[11] = i),
          (t[12] = l),
          (t[13] = f))
        : (f = t[13]);
      var g;
      t[14] !== r || t[15] !== a
        ? ((g = c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
            msg: r,
            onClose: a,
          })),
          (t[14] = r),
          (t[15] = a),
          (t[16] = g))
        : (g = t[16]);
      var h;
      t[17] !== r
        ? ((h = o("WAWebMsgActionCapability").canForwardMsg(r)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, {
                msg: r,
              })
            : null),
          (t[17] = r),
          (t[18] = h))
        : (h = t[18]);
      var y;
      t[19] !== n || t[20] !== r || t[21] !== a
        ? ((y = c.jsx(R, {
            isMediaDownloadable: n,
            isAlbumMedia: !0,
            msg: r,
            onClose: a,
          })),
          (t[19] = n),
          (t[20] = r),
          (t[21] = a),
          (t[22] = y))
        : (y = t[22]);
      var C;
      return (
        t[23] !== d ||
        t[24] !== m ||
        t[25] !== p ||
        t[26] !== _ ||
        t[27] !== f ||
        t[28] !== g ||
        t[29] !== h ||
        t[30] !== y
          ? ((C = c.jsxs(c.Fragment, { children: [d, m, p, _, f, g, h, y] })),
            (t[23] = d),
            (t[24] = m),
            (t[25] = p),
            (t[26] = _),
            (t[27] = f),
            (t[28] = g),
            (t[29] = h),
            (t[30] = y),
            (t[31] = C))
          : (C = t[31]),
        C
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(48),
        a = e.isMediaDownloadable,
        i = e.msg,
        l = e.onClose,
        s = e.onDownloadClick,
        u = e.openReactionTray,
        d = e.sendReactionButtonRef,
        m = e.theme,
        p = m === void 0 ? "default" : m,
        _;
      if (t[0] !== i) {
        var f = o("WAWebFrontendMsgGetters").getChat(i);
        ((_ = o("WAWebChatGetters").getIsBroadcast(f)), (t[0] = i), (t[1] = _));
      } else _ = t[1];
      var g = _,
        h;
      t[2] !== i || t[3] !== l
        ? ((h =
            !o("WAWebMsgGetters").getIsStickerMsg(i) &&
            !o("WAWebMsgGetters").getIsCarouselCard(i)
              ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").GoToButton, {
                  msg: i,
                  type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                    .MenuBar,
                  onClose: l,
                })
              : null),
          (t[2] = i),
          (t[3] = l),
          (t[4] = h))
        : (h = t[4]);
      var y;
      t[5] !== g || t[6] !== i || t[7] !== l || t[8] !== p
        ? ((y =
            (o("WAWebMsgGetters").getIsStickerMsg(i) ||
              o("WAWebMsgGetters").getIsMedia(i)) &&
            !o("WAWebMsgGetters").getIsCarouselCard(i) &&
            !o("WAWebMsgGetters").getIsNewsletterMsg(i) &&
            !g
              ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
                  msg: i,
                  onClose: l,
                  theme: p,
                })
              : null),
          (t[5] = g),
          (t[6] = i),
          (t[7] = l),
          (t[8] = p),
          (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== i
        ? ((C = o("WAWebMsgActionCapability").canStarMsg(i)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, {
                msg: i,
              })
            : null),
          (t[10] = i),
          (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] !== i
        ? ((b = o("WAWebMsgActionCapability").canPinMsg(i)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, {
                msg: i,
              })
            : null),
          (t[12] = i),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] !== i
        ? ((v = o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(i)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
                msg: i,
              })
            : null),
          (t[14] = i),
          (t[15] = v))
        : (v = t[15]);
      var S;
      t[16] !== i || t[17] !== l
        ? ((S =
            o("WAWebMsgGetters").getIsStickerMsg(i) &&
            o("WAWebMediaPanelHeaderButtons.react").canDeleteMsg(i)
              ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
                  msg: i,
                  onClose: l,
                })
              : null),
          (t[16] = i),
          (t[17] = l),
          (t[18] = S))
        : (S = t[18]);
      var L;
      t[19] !== i || t[20] !== u || t[21] !== d
        ? ((L = o("WAWebReactionsUtils").canReactToMessage(i)
            ? c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").SendReactionButton,
                { msg: i, openReactionTray: u, sendReactionButtonRef: d },
              )
            : null),
          (t[19] = i),
          (t[20] = u),
          (t[21] = d),
          (t[22] = L))
        : (L = t[22]);
      var E;
      t[23] !== i
        ? ((E = o("WAWebMsgActionCapability").canForwardMsg(i)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, {
                msg: i,
              })
            : null),
          (t[23] = i),
          (t[24] = E))
        : (E = t[24]);
      var k;
      t[25] !== a || t[26] !== i || t[27] !== s
        ? ((k = o("WAWebMsgGetters").getIsStickerMsg(i)
            ? null
            : c.jsx(o("WAWebMediaPanelHeaderButtons.react").DownloadButton, {
                isMediaDownloadable: a,
                msg: i,
                type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                  .MenuBar,
                onDownloadClick: s,
              })),
          (t[25] = a),
          (t[26] = i),
          (t[27] = s),
          (t[28] = k))
        : (k = t[28]);
      var I;
      t[29] !== a || t[30] !== i
        ? ((I =
            !o("WAWebMsgGetters").getIsStickerMsg(i) &&
            r("WAWebEnvironment").isWindows &&
            n("cr:7565") != null &&
            a() &&
            !o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled()
              ? c.jsx(
                  o("WAWebMediaPanelHeaderButtons.react")
                    .OpenWithAnotherAppButton,
                  { msg: i },
                )
              : null),
          (t[29] = a),
          (t[30] = i),
          (t[31] = I))
        : (I = t[31]);
      var T;
      t[32] !== a || t[33] !== i || t[34] !== l
        ? ((T = o("WAWebMsgActionCapability").canReportMsg(i)
            ? c.jsx(R, {
                isMediaDownloadable: a,
                isAlbumMedia: !1,
                msg: i,
                onClose: l,
              })
            : null),
          (t[32] = a),
          (t[33] = i),
          (t[34] = l),
          (t[35] = T))
        : (T = t[35]);
      var D;
      return (
        t[36] !== E ||
        t[37] !== k ||
        t[38] !== I ||
        t[39] !== T ||
        t[40] !== h ||
        t[41] !== y ||
        t[42] !== C ||
        t[43] !== b ||
        t[44] !== v ||
        t[45] !== S ||
        t[46] !== L
          ? ((D = c.jsxs(c.Fragment, {
              children: [h, y, C, b, v, S, L, E, k, I, T],
            })),
            (t[36] = E),
            (t[37] = k),
            (t[38] = I),
            (t[39] = T),
            (t[40] = h),
            (t[41] = y),
            (t[42] = C),
            (t[43] = b),
            (t[44] = v),
            (t[45] = S),
            (t[46] = L),
            (t[47] = D))
          : (D = t[47]),
        D
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.isMediaDownloadable,
        r = e.msg,
        a = e.msgIndexInAlbum,
        i = e.onClose,
        l = e.onDownloadClick,
        s = e.onViewOnceInfoClick,
        u = e.openReactionTray,
        d = e.sendReactionButtonRef,
        m = e.theme,
        _ = m === void 0 ? "default" : m,
        f;
      t[0] !== i || t[1] !== _
        ? ((f = function () {
            (i(),
              _ === "media_hub" && o("WAWebModalManager").ModalManager.close());
          }),
          (t[0] = i),
          (t[1] = _),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        y;
      if (
        t[3] !== g ||
        t[4] !== n ||
        t[5] !== r ||
        t[6] !== a ||
        t[7] !== i ||
        t[8] !== l ||
        t[9] !== s ||
        t[10] !== u ||
        t[11] !== d ||
        t[12] !== _ ||
        t[13] !== h.isEnabled
      ) {
        if (((y = []), h.isEnabled)) {
          var C, S;
          if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            var R;
            ((C = c.jsx(
              (R = o("WAWebMediaIncrementalZoom")).ZoomButton,
              { direction: R.ZoomDirection.OUT },
              "zoom-out",
            )),
              (S = c.jsx(
                R.ZoomButton,
                { direction: R.ZoomDirection.IN },
                "zoom-in",
              )),
              (t[15] = C),
              (t[16] = S));
          } else ((C = t[15]), (S = t[16]));
          y.push(C, S);
        }
        if (r.isViewOnce) {
          var E;
          (t[17] !== n || t[18] !== r || t[19] !== i || t[20] !== s
            ? ((E = c.jsx(
                L,
                {
                  isMediaDownloadable: n,
                  msg: r,
                  onClose: i,
                  onViewOnceInfoClick: s,
                },
                "view-once",
              )),
              (t[17] = n),
              (t[18] = r),
              (t[19] = i),
              (t[20] = s),
              (t[21] = E))
            : (E = t[21]),
            y.push(E));
        } else if (
          a >= 0 &&
          r.associationType ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
        ) {
          var k;
          (t[22] !== n ||
          t[23] !== r ||
          t[24] !== i ||
          t[25] !== u ||
          t[26] !== d
            ? ((k = c.jsx(
                b,
                {
                  isMediaDownloadable: n,
                  msg: r,
                  onClose: i,
                  openReactionTray: u,
                  sendReactionButtonRef: d,
                },
                "album",
              )),
              (t[22] = n),
              (t[23] = r),
              (t[24] = i),
              (t[25] = u),
              (t[26] = d),
              (t[27] = k))
            : (k = t[27]),
            y.push(k));
        } else {
          var I;
          (t[28] !== g ||
          t[29] !== n ||
          t[30] !== r ||
          t[31] !== l ||
          t[32] !== u ||
          t[33] !== d ||
          t[34] !== _
            ? ((I = c.jsx(
                v,
                {
                  isMediaDownloadable: n,
                  msg: r,
                  onClose: g,
                  openReactionTray: u,
                  sendReactionButtonRef: d,
                  theme: _,
                  onDownloadClick: l,
                },
                "non-album",
              )),
              (t[28] = g),
              (t[29] = n),
              (t[30] = r),
              (t[31] = l),
              (t[32] = u),
              (t[33] = d),
              (t[34] = _),
              (t[35] = I))
            : (I = t[35]),
            y.push(I));
        }
        ((t[3] = g),
          (t[4] = n),
          (t[5] = r),
          (t[6] = a),
          (t[7] = i),
          (t[8] = l),
          (t[9] = s),
          (t[10] = u),
          (t[11] = d),
          (t[12] = _),
          (t[13] = h.isEnabled),
          (t[14] = y));
      } else y = t[14];
      return y;
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(40),
        n = e.isAlbumMedia,
        a = e.isMediaDownloadable,
        i = e.msg,
        l = e.onClose,
        u;
      if (t[0] !== i) {
        var d = o("WAWebSearchTheWebCommonUtils").getSupportedSearchOptions(i);
        (d.get(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE) != null &&
          (u = o("WAWebSearchTheWebCommonUtils").getSTWFormat(d)),
          (t[0] = i),
          (t[1] = u));
      } else u = t[1];
      var m;
      if (t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== u) {
        if (
          ((m = []),
          a() && o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled())
        ) {
          var p, _;
          (t[8] !== i
            ? ((_ = o(
                "WAWebMediaPanelHeaderButtons.react",
              ).getDropdownMenuItemsForWindowsShareSheet(i)),
              (t[8] = i),
              (t[9] = _))
            : (_ = t[9]),
            (p = m).push.apply(p, _));
        }
        var f = o("WAWebFrontendMsgGetters").getChat(i);
        if (
          o("WAWebMsgReply").canPrivateReply(i) ||
          o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(i)
        ) {
          var g;
          (t[10] !== i
            ? ((g = c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").PrivateReplyButton,
                { msg: i },
                "private_reply",
              )),
              (t[10] = i),
              (t[11] = g))
            : (g = t[11]),
            m.push(g));
        }
        if (n) {
          if (o("WAWebMsgGetters").getIsSentByMe(i)) {
            var h;
            (t[12] !== i || t[13] !== l
              ? ((h = c.jsx(
                  o("WAWebMediaPanelHeaderButtons.react").MsgInfoButton,
                  { msg: i, onClose: l },
                  "dropdownMsgInfo",
                )),
                (t[12] = i),
                (t[13] = l),
                (t[14] = h))
              : (h = t[14]),
              m.push(h));
          }
          var y;
          t[15] !== i || t[16] !== l
            ? ((y = c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").GoToButton,
                {
                  msg: i,
                  type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                    .Dropdown,
                  onClose: l,
                },
                "dropdownGoToMsg",
              )),
              (t[15] = i),
              (t[16] = l),
              (t[17] = y))
            : (y = t[17]);
          var C;
          (t[18] !== a || t[19] !== i
            ? ((C = c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").DownloadButton,
                {
                  isMediaDownloadable: a,
                  msg: i,
                  type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                    .Dropdown,
                },
                "dropdownDownload",
              )),
              (t[18] = a),
              (t[19] = i),
              (t[20] = C))
            : (C = t[20]),
            m.push(y, C));
        }
        u != null &&
          m.push(
            c.jsx(
              r("WAWebSearchTheWebButton.react"),
              {
                messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
                msg: i,
                entryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT
                  .MEDIA_VIEWER,
                stwFormat: u,
              },
              "search_the_web",
            ),
          );
        var b =
            !o("WAWebChatGetters").getIsNewsletter(f) &&
            (i.isViewOnce || o("WAWebMsgActionCapability").canReportMsg(i)),
          v =
            o("WAWebChatGetters").getIsNewsletter(f) &&
            o("WAWebMsgActionCapability").canReportMsg(i);
        if (v) {
          var S;
          (t[21] !== i
            ? ((S = c.jsx(
                r("WAWebReportNewsletterPostSpamButton.react"),
                { msg: i },
                "reportSpam",
              )),
              (t[21] = i),
              (t[22] = S))
            : (S = t[22]),
            m.push(S));
        } else if (b) {
          var R;
          (t[23] !== i
            ? ((R = c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").ReportSpamButton,
                { msg: i },
                "reportSpam",
              )),
              (t[23] = i),
              (t[24] = R))
            : (R = t[24]),
            m.push(R));
        }
        if (o("WAWebMsgActionCapability").canReportToAdmin(i)) {
          var L;
          (t[25] !== i
            ? ((L = c.jsx(
                r("WAWebSendForAdminReviewButton.react"),
                { msg: i },
                "report_to_admin",
              )),
              (t[25] = i),
              (t[26] = L))
            : (L = t[26]),
            m.push(L));
        }
        if (o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled()) {
          var E;
          (t[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = c.jsx(r("WAWebDropdownItemSeparator.react"), {})),
              (t[27] = E))
            : (E = t[27]),
            m.push(E));
          var k;
          (t[28] !== i
            ? ((k = c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").CopyMsgIdButton,
                { msg: i },
              )),
              (t[28] = i),
              (t[29] = k))
            : (k = t[29]),
            m.push(k));
        }
        ((t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = l),
          (t[6] = u),
          (t[7] = m));
      } else m = t[7];
      var I;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = r("WAWebMediaPanelHeaderTestIds").MORE_MENU_BUTTON.valueOf()),
          (t[30] = I))
        : (I = t[30]);
      var T;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Menu")), (t[31] = T))
        : (T = t[31]);
      var D;
      t[32] !== m
        ? ((D = {
            menu: m,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            flipOnRTL: !0,
            dirX: o("WAWebDropdown.react").DirX.LEFT,
          }),
          (t[32] = m),
          (t[33] = D))
        : (D = t[33]);
      var x;
      t[34] !== i || t[35] !== u
        ? ((x = function () {
            u != null &&
              o("WAWebSearchTheWebEventLogger").logSTWEvent({
                stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT
                  .MEDIA_VIEWER,
                stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
                  .ENTRY_POINT_SURFACED,
                stwFormat: u,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
              });
          }),
          (t[34] = i),
          (t[35] = u),
          (t[36] = x))
        : (x = t[36]);
      var $;
      return (
        t[37] !== D || t[38] !== x
          ? (($ = c.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              icon: r("WDSIconIcMoreVert.react"),
              title: T,
              dropdownMenu: D,
              onOpen: x,
            })),
            (t[37] = D),
            (t[38] = x),
            (t[39] = $))
          : ($ = t[39]),
        $
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.isMediaDownloadable,
        a = e.msg,
        i = e.onClose,
        l = e.onViewOnceInfoClick,
        u,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = c.jsx(r("WDSIconWdsIcViewOnce.react"), {
            iconXstyle: r("WAWebMediaPanelHeader.styles").voIcon,
          })),
          (d = s._(/*BTDS*/ "View once info")),
          (t[0] = u),
          (t[1] = d))
        : ((u = t[0]), (d = t[1]));
      var m;
      t[2] !== l
        ? ((m = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            icon: u,
            title: d,
            onClick: l,
          })),
          (t[2] = l),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== n || t[5] !== a || t[6] !== i
        ? ((p = c.jsx(R, {
            isMediaDownloadable: n,
            isAlbumMedia: !1,
            msg: a,
            onClose: i,
          })),
          (t[4] = n),
          (t[5] = a),
          (t[6] = i),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== m || t[9] !== p
          ? ((_ = c.jsxs(c.Fragment, { children: [m, p] })),
            (t[8] = m),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    function E() {
      o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
        "search:show",
        [],
      );
    }
    l.default = y;
  },
  226,
);
