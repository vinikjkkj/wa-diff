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
      var n = t.filename,
        a = f(null),
        i = g(!1),
        l = i[0],
        s = i[1];
      return (
        _(
          function () {
            var e = a.current;
            e != null && s(e.scrollWidth > e.clientWidth);
          },
          [n],
        ),
        c.jsx(r("WDSTooltip.react"), {
          label: n,
          disabled: !l,
          children: c.jsx("span", {
            ref: a,
            className: (e || (e = r("stylex")))(
              r("WAWebMediaPanelHeader.styles").filename,
            ),
            children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: n }),
          }),
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return c.jsx(C, babelHelpers.extends({}, e));
    }
    y.displayName = y.name + " [from " + i.id + "]";
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
      var t = e.isMediaDownloadable,
        n = e.msg,
        r = e.onClose,
        a = e.openReactionTray,
        i = e.sendReactionButtonRef,
        l = e.theme,
        s = l === void 0 ? "default" : l;
      return c.jsxs(c.Fragment, {
        children: [
          o("WAWebMsgReply").canReplyMsg(n)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
                msg: n,
                onClose: r,
                theme: s,
              })
            : null,
          o("WAWebMsgActionCapability").canStarMsg(n)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, {
                msg: n,
              })
            : null,
          o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(n)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
                msg: n,
              })
            : null,
          o("WAWebMsgActionCapability").canPinMsg(n)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, {
                msg: n,
              })
            : null,
          o("WAWebReactionsUtils").canReactToMessage(n)
            ? c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").SendReactionButton,
                { msg: n, openReactionTray: a, sendReactionButtonRef: i },
              )
            : null,
          c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
            msg: n,
            onClose: r,
          }),
          o("WAWebMsgActionCapability").canForwardMsg(n)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, {
                msg: n,
              })
            : null,
          c.jsx(R, {
            isMediaDownloadable: t,
            isAlbumMedia: !0,
            msg: n,
            onClose: r,
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.isMediaDownloadable,
        a = e.msg,
        i = e.onClose,
        l = e.onDownloadClick,
        s = e.openReactionTray,
        u = e.sendReactionButtonRef,
        d = e.theme,
        m = d === void 0 ? "default" : d,
        p = o("WAWebFrontendMsgGetters").getChat(a),
        _ = o("WAWebChatGetters").getIsBroadcast(p);
      return c.jsxs(c.Fragment, {
        children: [
          !o("WAWebMsgGetters").getIsStickerMsg(a) &&
          !o("WAWebMsgGetters").getIsCarouselCard(a)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").GoToButton, {
                msg: a,
                type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                  .MenuBar,
                onClose: i,
              })
            : null,
          (o("WAWebMsgGetters").getIsStickerMsg(a) ||
            o("WAWebMsgGetters").getIsMedia(a)) &&
          !o("WAWebMsgGetters").getIsCarouselCard(a) &&
          !o("WAWebMsgGetters").getIsNewsletterMsg(a) &&
          !_
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ReplyButton, {
                msg: a,
                onClose: i,
                theme: m,
              })
            : null,
          o("WAWebMsgActionCapability").canStarMsg(a)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").StarButton, {
                msg: a,
              })
            : null,
          o("WAWebMsgActionCapability").canPinMsg(a)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").PinButton, {
                msg: a,
              })
            : null,
          o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(a)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").KeepInChatButton, {
                msg: a,
              })
            : null,
          o("WAWebMsgGetters").getIsStickerMsg(a) &&
          o("WAWebMediaPanelHeaderButtons.react").canDeleteMsg(a)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").DeleteButton, {
                msg: a,
                onClose: i,
              })
            : null,
          o("WAWebReactionsUtils").canReactToMessage(a)
            ? c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").SendReactionButton,
                { msg: a, openReactionTray: s, sendReactionButtonRef: u },
              )
            : null,
          o("WAWebMsgActionCapability").canForwardMsg(a)
            ? c.jsx(o("WAWebMediaPanelHeaderButtons.react").ForwardButton, {
                msg: a,
              })
            : null,
          o("WAWebMsgGetters").getIsStickerMsg(a)
            ? null
            : c.jsx(o("WAWebMediaPanelHeaderButtons.react").DownloadButton, {
                isMediaDownloadable: t,
                msg: a,
                type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                  .MenuBar,
                onDownloadClick: l,
              }),
          !o("WAWebMsgGetters").getIsStickerMsg(a) &&
          r("WAWebEnvironment").isWindows &&
          n("cr:7565") != null &&
          t() &&
          !o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled()
            ? c.jsx(
                o("WAWebMediaPanelHeaderButtons.react")
                  .OpenWithAnotherAppButton,
                { msg: a },
              )
            : null,
          o("WAWebMsgActionCapability").canReportMsg(a)
            ? c.jsx(R, {
                isMediaDownloadable: t,
                isAlbumMedia: !1,
                msg: a,
                onClose: i,
              })
            : null,
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.isMediaDownloadable,
        n = e.msg,
        r = e.msgIndexInAlbum,
        a = e.onClose,
        i = e.onDownloadClick,
        l = e.onViewOnceInfoClick,
        s = e.openReactionTray,
        u = e.sendReactionButtonRef,
        d = e.theme,
        m = d === void 0 ? "default" : d,
        _ = function () {
          (a(),
            m === "media_hub" && o("WAWebModalManager").ModalManager.close());
        },
        f = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        g = [];
      if (f.isEnabled) {
        var h;
        g.push(
          c.jsx(
            (h = o("WAWebMediaIncrementalZoom")).ZoomButton,
            { direction: h.ZoomDirection.OUT },
            "zoom-out",
          ),
          c.jsx(h.ZoomButton, { direction: h.ZoomDirection.IN }, "zoom-in"),
        );
      }
      return (
        n.isViewOnce
          ? g.push(
              c.jsx(
                L,
                {
                  isMediaDownloadable: t,
                  msg: n,
                  onClose: a,
                  onViewOnceInfoClick: l,
                },
                "view-once",
              ),
            )
          : r >= 0 &&
              n.associationType ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .MEDIA_ALBUM
            ? g.push(
                c.jsx(
                  b,
                  {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: s,
                    sendReactionButtonRef: u,
                  },
                  "album",
                ),
              )
            : g.push(
                c.jsx(
                  v,
                  {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: _,
                    openReactionTray: s,
                    sendReactionButtonRef: u,
                    theme: m,
                    onDownloadClick: i,
                  },
                  "non-album",
                ),
              ),
        g
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.isAlbumMedia,
        n = e.isMediaDownloadable,
        a = e.msg,
        i = e.onClose,
        l = o("WAWebSearchTheWebCommonUtils").getSupportedSearchOptions(a),
        u;
      l.get(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE) != null &&
        (u = o("WAWebSearchTheWebCommonUtils").getSTWFormat(l));
      var d = [];
      n() &&
        o("WAWebMediaPanelHeaderButtons.react").isShareSheetEnabled() &&
        d.push.apply(
          d,
          o(
            "WAWebMediaPanelHeaderButtons.react",
          ).getDropdownMenuItemsForWindowsShareSheet(a),
        );
      var m = o("WAWebFrontendMsgGetters").getChat(a);
      ((o("WAWebMsgReply").canPrivateReply(a) ||
        o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(a)) &&
        d.push(
          c.jsx(
            o("WAWebMediaPanelHeaderButtons.react").PrivateReplyButton,
            { msg: a },
            "private_reply",
          ),
        ),
        t &&
          (o("WAWebMsgGetters").getIsSentByMe(a) &&
            d.push(
              c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").MsgInfoButton,
                { msg: a, onClose: i },
                "dropdownMsgInfo",
              ),
            ),
          d.push(
            c.jsx(
              o("WAWebMediaPanelHeaderButtons.react").GoToButton,
              {
                msg: a,
                type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                  .Dropdown,
                onClose: i,
              },
              "dropdownGoToMsg",
            ),
            c.jsx(
              o("WAWebMediaPanelHeaderButtons.react").DownloadButton,
              {
                isMediaDownloadable: n,
                msg: a,
                type: o("WAWebMediaPanelHeaderButtons.react").ButtonType
                  .Dropdown,
              },
              "dropdownDownload",
            ),
          )),
        u != null &&
          d.push(
            c.jsx(
              r("WAWebSearchTheWebButton.react"),
              {
                messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
                msg: a,
                entryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT
                  .MEDIA_VIEWER,
                stwFormat: u,
              },
              "search_the_web",
            ),
          ));
      var p =
          !o("WAWebChatGetters").getIsNewsletter(m) &&
          (a.isViewOnce || o("WAWebMsgActionCapability").canReportMsg(a)),
        _ =
          o("WAWebChatGetters").getIsNewsletter(m) &&
          o("WAWebMsgActionCapability").canReportMsg(a);
      return (
        _
          ? d.push(
              c.jsx(
                r("WAWebReportNewsletterPostSpamButton.react"),
                { msg: a },
                "reportSpam",
              ),
            )
          : p &&
            d.push(
              c.jsx(
                o("WAWebMediaPanelHeaderButtons.react").ReportSpamButton,
                { msg: a },
                "reportSpam",
              ),
            ),
        o("WAWebMsgActionCapability").canReportToAdmin(a) &&
          d.push(
            c.jsx(
              r("WAWebSendForAdminReviewButton.react"),
              { msg: a },
              "report_to_admin",
            ),
          ),
        o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() &&
          (d.push(c.jsx(r("WAWebDropdownItemSeparator.react"), {})),
          d.push(
            c.jsx(o("WAWebMediaPanelHeaderButtons.react").CopyMsgIdButton, {
              msg: a,
            }),
          )),
        c.jsx(r("WDSMenuBarItem.react"), {
          testid: void 0,
          icon: r("WDSIconIcMoreVert.react"),
          title: s._(/*BTDS*/ "Menu"),
          dropdownMenu: {
            menu: d,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            flipOnRTL: !0,
            dirX: o("WAWebDropdown.react").DirX.LEFT,
          },
          onOpen: function () {
            u != null &&
              o("WAWebSearchTheWebEventLogger").logSTWEvent({
                stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT
                  .MEDIA_VIEWER,
                stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
                  .ENTRY_POINT_SURFACED,
                stwFormat: u,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
              });
          },
        })
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.isMediaDownloadable,
        n = e.msg,
        a = e.onClose,
        i = e.onViewOnceInfoClick;
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            icon: c.jsx(r("WDSIconWdsIcViewOnce.react"), {
              iconXstyle: r("WAWebMediaPanelHeader.styles").voIcon,
            }),
            title: s._(/*BTDS*/ "View once info"),
            onClick: i,
          }),
          c.jsx(R, {
            isMediaDownloadable: t,
            isAlbumMedia: !1,
            msg: n,
            onClose: a,
          }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
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
