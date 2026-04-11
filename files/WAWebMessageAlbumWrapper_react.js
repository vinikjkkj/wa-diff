__d(
  "WAWebMessageAlbumWrapper.react",
  [
    "cx",
    "fbt",
    "invariant",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAddOnBubblesContainer.react",
    "WAWebChatGetters",
    "WAWebCheckBox.react",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebFbtCommon",
    "WAWebFileSaver",
    "WAWebFocusTracer",
    "WAWebForwardMessageFlowLoadable",
    "WAWebForwardRefreshedIcon.react",
    "WAWebForwardedNewsletterMessageInfoActionButton.react",
    "WAWebFrontendMsgGetters",
    "WAWebGroupChatProfilePicture.react",
    "WAWebGroupHistoryGating",
    "WAWebKeyboardListHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMediaAlbumGrid.react",
    "WAWebMediaAlbumGridConstants",
    "WAWebMessageAlbumWrapperGroupedSticker.react",
    "WAWebMessageAlbumWrapperMenuContent.react",
    "WAWebMessageAuthor.react",
    "WAWebMessageCheckbox.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageListAlbums",
    "WAWebMessageMenu.react",
    "WAWebMessagePosition",
    "WAWebMessageUiUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebMsgSendFailIcon.react",
    "WAWebMultiSelectBar.react",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsListeners.react",
    "WAWebReactionsUtils",
    "WAWebRevokeMetricUtils",
    "WAWebRound.react",
    "WAWebStateUtils",
    "WAWebThemeContext",
    "WAWebTypesMedia",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperGetTailIcon",
    "WAWebWrapperListeners.react",
    "WAWebWrapperMessageActionButtonsRow",
    "WDSFocusStateStyles",
    "compactMap",
    "countWhere",
    "cr:7565",
    "react",
    "stylex",
    "useWAWebIsKeyboardUser",
    "useWAWebMsgValues",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    var e,
      d,
      m = ["ref"],
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.useCallback,
      y = g.useEffect,
      C = g.useImperativeHandle,
      b = g.useRef,
      v = g.useState,
      S = {
        svgColorRefreshed: { color: "xhslqc4", $$css: !0 },
        groupHistoryMessageRow: {
          position: "x1n2onr6",
          "::before_content": "x1cpjm7i",
          "::before_position": "x1hmns74",
          "::before_top": "x1y3wzot",
          "::before_bottom": "xhq5o37",
          "::before_insetInlineStart": "xfbisj7",
          "::before_transform": "xnyzbwf",
          "::before_width": "xkeh78v",
          "::before_zIndex": "xy5mcqj",
          $$css: !0,
        },
        groupHistoryMessageRowLight: {
          "::before_backgroundColor": "xd3jkiw",
          $$css: !0,
        },
        groupHistoryMessageRowDark: {
          "::before_backgroundColor": "x5cow8b",
          $$css: !0,
        },
      };
    function R(t) {
      var a,
        i,
        l,
        s,
        _,
        g,
        R = t.ref,
        L = babelHelpers.objectWithoutPropertiesLoose(t, m),
        E = L.albumId,
        k = L.displayType,
        I = L.focusedMsgIndex,
        T = L.isFocusable,
        D = L.isFocusedAlbum,
        x = L.isMsgVisible,
        $ = L.msgs,
        P = L.onMessageSelect,
        N = L.position,
        M = L.selectable,
        w = L.selectedMessages,
        A = L.showProfilePicture,
        F = A === void 0 ? !0 : A,
        O = o("useWAWebMsgValues").useMsgValues($[0].id, [
          o("WAWebMsgGetters").getGroupHistoryBundleMessageKey,
          o("WAWebMsgGetters").getNewsletterAdminProfile,
        ]),
        B = O[0],
        W = O[1],
        q = o("WAWebThemeContext").useIsDarkTheme(),
        U = v(),
        V = U[0],
        H = U[1],
        G = v(!1),
        z = G[0],
        j = G[1],
        K = v(!1),
        Q = K[0],
        X = K[1],
        Y = v(
          r("countWhere")($, function (e) {
            return w.isSelected(o("WAWebStateUtils").unproxy(e.unsafe()));
          }),
        ),
        J = Y[0],
        Z = Y[1],
        ee = v(),
        te = ee[0],
        ne = ee[1],
        re = r("useWAWebIsKeyboardUser")(),
        oe = re.isKeyboardUser,
        ae = b(!0),
        ie = b(),
        le = b({}),
        se = b(),
        ue = b(null),
        ce = b(null),
        de = b(),
        me = b(null),
        pe = b(),
        _e = b(),
        fe = h(function (e) {
          ne(e);
        }, []);
      y(
        function () {
          (o("WAWebMiscGatingUtils").messageCustomAriaLabelEnabled() &&
            !ae.current &&
            o("WAWebMessageUiUtils")
              .getLegacyAlbumRowAriaLabel($)
              .then(fe)
              .catch(function () {}),
            (ae.current = !1));
        },
        [fe, $],
      );
      var ge = h(
          function (e) {
            !e.buttons && !z && j(!0);
          },
          [z],
        ),
        he = h(
          function () {
            z && j(!1);
          },
          [z],
        ),
        ye = h(function (e) {
          ie.current && r("WAWebFocusTracer").focus(ie.current, e);
        }, []),
        Ce = h(
          function (e) {
            var t = e.event,
              n = e.mode,
              r = e.selectedMsg;
            if (
              (o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
              t && t.stopPropagation(),
              r)
            ) {
              P(
                o("WAWebStateUtils").unproxy(r.unsafe()),
                !w.isSelected(o("WAWebStateUtils").unproxy(r)),
                n,
                t,
              );
              return;
            }
            var a = J === 0;
            $.forEach(function (e) {
              P(o("WAWebStateUtils").unproxy(e.unsafe()), a, n, t);
            });
          },
          [$, J, w, P],
        ),
        be = h(
          function (e, t) {
            for (var n = 0; n < $.length; n++)
              if (o("WAWebFrontendMsgGetters").getIsUnsentMedia($[n])) {
                var a = u._(
                  /*BTDS*/ '_j{"*":"Wait until the messages finish sending and displays a checkmark before forwarding.","_1":"Wait until the message finishes sending and displays a checkmark before forwarding."}',
                  [u._plural(1)],
                );
                o("WAWebModalManager").ModalManager.open(
                  f.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "message-album",
                    },
                    title: u._(/*BTDS*/ "Can't forward"),
                    onOK: o("WAWebModalManager").closeModalManager,
                    okText: r("WAWebFbtCommon")("OK"),
                    children: a,
                  }),
                );
                return;
              }
            e
              ? Ce({
                  mode: o("WAWebMultiSelectBar.react").MultiSelectMode.FORWARD,
                  selectedMsg: t,
                })
              : o("WAWebModalManager").ModalManager.open(
                  f.jsx(
                    o("WAWebForwardMessageFlowLoadable")
                      .ForwardMessageFlowLoadable,
                    {
                      msgs: $.map(function (e) {
                        return e.unsafe();
                      }),
                      onClose: o("WAWebModalManager").closeModalManager,
                    },
                  ),
                  { transition: "modal-flow" },
                );
          },
          [Ce, $],
        ),
        ve = h(
          function () {
            o("WAWebCmd").Cmd.sendStarMsgs(
              o("WAWebFrontendMsgGetters").getChat($[0].unsafe()),
              $.map(function (e) {
                return e.unsafe();
              }),
            );
          },
          [$],
        ),
        Se = h(
          function () {
            o("WAWebCmd").Cmd.sendUnstarMsgs(
              o("WAWebFrontendMsgGetters").getChat($[0].unsafe()),
              $.map(function (e) {
                return e.unsafe();
              }),
            );
          },
          [$],
        ),
        Re = h(
          function () {
            o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() &&
              ye({ preventScroll: !0 });
          },
          [ye],
        ),
        Le = h(
          function () {
            Re();
          },
          [Re],
        ),
        Ee = h(
          function () {
            var e = 0;
            return (
              $.forEach(function (t) {
                w.isSelected(o("WAWebStateUtils").unproxy(t.unsafe())) && e++;
              }),
              e
            );
          },
          [$, w],
        ),
        ke = h(
          function () {
            var e = $[0],
              t = $[1];
            return (
              o("WAWebFrontendMsgGetters").getAsGroupedSticker(e.unsafe()) !=
                null &&
              o("WAWebFrontendMsgGetters").getAsGroupedSticker(t.unsafe()) !=
                null
            );
          },
          [$],
        ),
        Ie = h(
          function (e) {
            var t;
            (ke() ? (t = Ee()) : (t = e ? $.length : 0), J !== t && Z(t));
          },
          [Ee, ke, $.length, J],
        ),
        Te = h(
          function () {
            o("WAWebFileSaver").FileSaver.initDownload(
              $.map(function (e) {
                return e.unsafe();
              }),
            );
          },
          [$],
        ),
        De = h(
          function () {
            $.length !== 0 &&
              (n("cr:7565") == null ||
                n("cr:7565")
                  .selectFolderAndSaveFiles(
                    $.map(function (e) {
                      return e.unsafe();
                    }),
                  )
                  .catch(function (t) {
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to save files: ",
                          "",
                        ])),
                      t,
                    );
                  }));
          },
          [$],
        ),
        xe = h(
          function (e, t) {
            (e
              ? Ce({
                  mode: o("WAWebMultiSelectBar.react").MultiSelectMode.DELETE,
                  selectedMsg: t,
                })
              : o("WAWebModalManager").ModalManager.open(
                  f.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                    chat: o("WAWebFrontendMsgGetters").getChat($[0].unsafe()),
                    msgList: $.map(function (e) {
                      return e.unsafe();
                    }),
                    isMsgVisible: x,
                  }),
                ),
              o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
              o(
                "WAWebRevokeMetricUtils",
              ).UiRevokeActionHelper.messageSelected());
          },
          [Ce, $, x],
        ),
        $e = h(
          function () {
            (Le(), oe && j(!1), H(null));
          },
          [Le, oe],
        ),
        Pe = f.jsx(
          o("WAWebMessageAlbumWrapperMenuContent.react")
            .WAWebMessageAlbumWrapperMenuContent,
          {
            msgs: $,
            handleDownload: Te,
            handleOpenForwardFlow: be,
            handleStar: ve,
            handleUnstar: Se,
            handleSaveAll: De,
            handleOpenDeleteFlow: xe,
          },
        ),
        Ne = r("useWDSMenu")({
          targetRef: ue,
          menu: Pe,
          contextMenuArea: !0,
          enableUIM: !0,
          onClose: $e,
        }),
        Me = Ne.menuPortal,
        we = Ne.openMenu,
        Ae = r("useWDSMenu")({
          targetRef: ce,
          menu: Pe,
          enableUIM: !0,
          onClose: $e,
        }),
        Fe = Ae.menuPortal,
        Oe = Ae.openMenu,
        Be = function (t) {
          var e, n;
          ((e =
            (n = document.getSelection()) == null ? void 0 : n.toString()) !=
          null
            ? e
            : "") === "" && (t.stopPropagation(), we(t));
        },
        We = function () {
          Oe();
        },
        qe = h(
          function () {
            var e,
              t,
              n =
                (e =
                  (t = ie.current) == null
                    ? void 0
                    : t.contains(document.activeElement)) != null
                  ? e
                  : !1;
            return oe && n;
          },
          [oe],
        ),
        Ue = h(function (e, t) {
          e
            ? (le.current[t.id.toString()] = e)
            : delete le.current[t.id.toString()];
        }, []),
        Ve = h(function (e, t) {
          var n = ie.current;
          if (n) {
            var r = n.offsetParent;
            r &&
              (r instanceof HTMLElement || c(0, 56542),
              o("WAWebDomScroll").scrollAt(n, r, t).then(e));
          }
        }, []),
        He = h(
          function (e) {
            var t;
            (ke() ? (I === 0 ? (t = pe) : I === 1 && (t = _e)) : (t = de),
              t && T && e !== !0 && ye({ preventScroll: !0 }));
          },
          [ke, T, I, ye],
        ),
        Ge = h(
          function () {
            var e = $.map(function (e) {
              return e.id.toString();
            });
            (o("WAWebReactionsUtils").lastMessageReactionChange(e),
              o("WAWebMiscGatingUtils").messageCustomAriaLabelEnabled() &&
                o("WAWebMessageUiUtils")
                  .getLegacyAlbumRowAriaLabel($)
                  .then(fe)
                  .catch(function () {}));
          },
          [$, fe],
        );
      C(R, function () {
        return {
          getContainerElement: function () {
            return ie.current;
          },
          props: L,
          refAlbumComponents: le.current,
          isGroupedSticker: ke,
        };
      });
      var ze = $[0],
        je = o("WAWebMsgGetters").getIsSentByMe(ze),
        Ke = o("WAWebMsgGetters").getIsGroupMsg(ze),
        Qe = o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() && qe(),
        Xe =
          $.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE
            ? $.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1
            : null,
        Ye = o("WAWebDisplayType").isWideDisplay(k),
        Je = ke(),
        Ze =
          !Ye &&
          (N === o("WAWebMessagePosition").MsgPosition.FRONT ||
            N === o("WAWebMessagePosition").MsgPosition.SINGLE ||
            Je),
        et =
          Ke &&
          !je &&
          !!Ze &&
          k === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION &&
          !M &&
          ((a = ze.senderObj) == null ? void 0 : a.id) != null &&
          F,
        tt = et
          ? f.jsx(r("WAWebGroupChatProfilePicture.react"), {
              userContact: ze.senderObj,
              chatWid: o("WAWebFrontendMsgGetters").getChat(ze.unsafe()).id,
            })
          : null,
        nt = Je && Ze && (je || !Ke),
        rt = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          { "message-out": je, "message-in": !je },
          ((i = {}),
          (i[
            o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME
          ] = T),
          i),
          ((l = {}),
          (l._amjy = k !== o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT),
          (l._amjz = !o("WAWebChatGetters").getIsGroup(
            o("WAWebFrontendMsgGetters").getChat(ze.unsafe()),
          )),
          (l._amjv = !0),
          (l._amjw = !0),
          (l["_amj-"] = Ye),
          l),
          { 0: "", 1: "x1klvx2g xahtqtb" }[
            (k !== o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT) << 0
          ],
          (p || (p = r("stylex")))(
            B != null &&
              o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled() &&
              S.groupHistoryMessageRow,
            B != null &&
              o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled() &&
              (q
                ? S.groupHistoryMessageRowDark
                : S.groupHistoryMessageRowLight),
          ),
          "xscbp6u",
          { 0: "", 1: "xa0aww2" }[
            ((N === o("WAWebMessagePosition").MsgPosition.FRONT ||
              N === o("WAWebMessagePosition").MsgPosition.MID) &&
              !Ye) << 0
          ],
        ),
        ot =
          ((!je || Ye) && Ke) ||
          (W != null &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterAdminProfilesReceiverEnabled()),
        at;
      if (ot) {
        var it,
          lt = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((it = {}),
            (it._amlk = Je),
            (it._amll = Ye),
            (it._amla = !0),
            (it._amlm = je),
            it),
          );
        at = f.jsx("div", {
          className: lt,
          children: f.jsx(r("WAWebMessageAuthor.react"), {
            msg: $[0],
            contact: $[0].senderObj,
            albumId: E,
            displayType: k,
          }),
        });
      }
      var st = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((s = {}),
          (s._amk9 = Je),
          (s._amk5 = Ze),
          (s._amka = nt),
          (s._amlf = !Je && ot),
          (s._amlb = !Je && o("WAWebMsgSelectors").showForwarded($[0])),
          (s._amk4 = !0),
          s),
          p(
            Q &&
              oe &&
              o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent,
          ),
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_highlight_me_mention",
          ) && "_avau",
          { 0: "", 1: "x9lmoot x1ppz1d2" }[
            !!(
              B != null &&
              o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled()
            ) << 0
          ],
        ),
        ut = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((_ = {}),
          (_._amk6 = !Je),
          (_._amlo = !Je),
          (_._amlc = !0),
          (_._amld = Ye),
          _),
        ),
        ct;
      if (Ze) {
        var dt = o("WAWebWrapperGetTailIcon").getTailIcon(je);
        ct = f.jsx(dt, {
          className_DONOTUSE: "_amk7",
          containerRef: me,
          "aria-hidden": !0,
        });
      }
      var mt = [];
      if (o("WAWebMsgActionCapability").canQuickForwardMsg(ze.unsafe())) {
        var pt = f.jsx(o("WAWebRound.react").Round, {
          label: u._(/*BTDS*/ "Forward media"),
          theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
          onClick: function () {
            be(!1);
          },
          children: f.jsx(
            o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
            { directional: !0, xstyle: S.svgColorRefreshed, height: 20 },
          ),
        });
        mt.push(pt);
      }
      var _t = r("compactMap")($, function (e) {
          return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
        }),
        ft = _t.some(function (e) {
          return e.hasReaction === !0;
        }),
        gt;
      (z || V || Qe) &&
        (gt = f.jsx(
          r("WAWebMessageMenu.react"),
          {
            msg: ze.unsafe(),
            hasAuthor: ot,
            position: N,
            ref: se,
            onToggle: function (t) {
              We();
            },
            role: "button",
            ariaLabel: u._(/*BTDS*/ "Context menu"),
            tabIndex: 0,
            displayType: k,
            isMenuOpen: !!V,
          },
          "icon-context",
        ));
      var ht;
      V
        ? (ht = "none")
        : o("WAWebFrontendMsgGetters").getIsRTL(ze)
          ? (ht = "pop-fast-reverse")
          : (ht = "pop-fast");
      var yt = u._(
          /*BTDS*/ "Checkbox, {checkbox-state} , for group of images",
          [u._param("checkbox-state", J > 0 ? "selected" : "unselected")],
        ),
        Ct = M
          ? f.jsx(r("WAWebMessageCheckbox.react"), {
              checked: J > 0,
              theme:
                J > 0 && J < $.length
                  ? o("WAWebCheckBox.react").CheckboxTheme.PARTIAL
                  : void 0,
              onClick: function (t) {
                Ce({ event: t });
              },
              ariaLabel: yt,
            })
          : null,
        bt;
      if (
        (D &&
          (bt = f.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
            parent: { scrollMsg: Ve, highlight: He },
          })),
        Je)
      )
        return f.jsx(r("WAWebMessageAlbumWrapperGroupedSticker.react"), {
          msgs: $,
          albumId: E,
          albumWrapperClass: rt,
          containerClass: st,
          tail: ct,
          groupProfilePicture: tt,
          author: at,
          selected: Ct,
          selectable: M,
          selectedMessages: w,
          menuTransition: ht,
          isWide: Ye,
          isFocusedAlbum: D,
          focusedMsgIndex: I,
          isAlbumWrapperKeyboardFocused: Qe,
          displayType: k,
          albumWrapperRef: ie,
          leftStickerBubbleRef: pe,
          rightStickerBubbleRef: _e,
          handleSelectClick: Ce,
          handleSelectChange: Ie,
          handleOpenForwardFlow: be,
          handleOpenDeleteFlow: xe,
          handleReactionChange: Ge,
          handleModalClosed: Le,
          scrollMsg: Ve,
          setIsFocused: X,
        });
      _t.length !== $.length &&
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Only ",
                "/",
                " were valid album messages",
              ])),
            _t.length,
            $.length,
          )
          .sendLogs("invalid-album-grid");
      var vt = null;
      if (_t.length > 0) {
        var St = _t.map(function (e) {
          return e.id.toString();
        });
        vt = f.jsx(r("WAWebAddOnBubblesContainer.react"), {
          isOutgoingMsg: je,
          displayType: k,
          hasReaction: ft,
          onDetailsPaneClosed: Le,
          parentIds: St,
        });
      }
      var Rt =
          _t.length > 0
            ? f.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
                msgs: _t,
                showForMessages: !1,
                showForAddOns: !0,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              })
            : null,
        Lt =
          _t.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? _t[0] : null,
        Et = o("WAWebMsgSelectors").showForwarded($[0])
          ? f.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: $[0].unsafe(),
              className: "_amle",
            })
          : null,
        kt = f.jsxs("div", {
          className: rt,
          "data-id": E,
          "data-testid": void 0,
          ref: ie,
          "aria-label": te,
          onFocus: function () {
            X(!0);
          },
          onBlur: function () {
            X(!1);
          },
          tabIndex: -1,
          children: [
            f.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "delay-leave",
              children: Ct,
            }),
            f.jsxs("div", {
              className: st,
              role: "group",
              ref: ue,
              onContextMenu: Be,
              onMouseOver: ge,
              onFocus: ge,
              onMouseDown: he,
              onMouseUp: ge,
              onMouseLeave: he,
              children: [
                ct,
                tt,
                f.jsxs("div", {
                  className: ut,
                  ref: de,
                  children: [
                    at,
                    Et,
                    f.jsx("div", {
                      className: o(
                        "WAWebClassnames",
                      ).classnamesConvertMeToStylexPlease(
                        ((g = {}), (g._aml8 = !0), (g._aml9 = Ye), g),
                      ),
                      children: $.slice(
                        0,
                        o("WAWebMediaAlbumGridConstants")
                          .ALBUM_GRID_MAX_THUMBNAIL,
                      ).map(function (e, t) {
                        var n =
                          t ===
                          o("WAWebMediaAlbumGridConstants")
                            .ALBUM_GRID_MAX_THUMBNAIL -
                            1
                            ? { numAdditionalMedia: Xe, zoomMsg: Lt }
                            : null;
                        return f.jsx(
                          r("WAWebMediaAlbumGrid.react"),
                          babelHelpers.extends(
                            {
                              msg: r("WANullthrows")(
                                o("WAWebFrontendMsgGetters").getAsAlbumAsset(
                                  e.unsafe(),
                                ),
                              ),
                              albumMsgs: _t,
                              albumPosition: o("WAWebMediaAlbumGridConstants")
                                .ALBUM_GRID_POSITIONS[
                                t %
                                  o("WAWebMediaAlbumGridConstants")
                                    .ALBUM_GRID_MAX_THUMBNAIL
                              ],
                              isMsgVisible: x,
                              displayType: k,
                              ref: function (n) {
                                Ue(n, e);
                              },
                              albumTheme:
                                o("WAWebTypesMedia").DisplayTheme.Album,
                              currentAlbumMessageIndex: t,
                            },
                            n,
                          ),
                          e.id.toString(),
                        );
                      }),
                    }),
                    f.jsx(
                      r(
                        "WAWebForwardedNewsletterMessageInfoActionButton.react",
                      ),
                      { msg: $[0].unsafe(), isAlbum: !0 },
                    ),
                  ],
                }),
                f.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: ht,
                  children: gt,
                }),
                f.jsx("div", {
                  ref: ce,
                  className: "x10l6tqk xyc4j8s xceh6e4",
                }),
                Rt,
                f.jsx(r("WAWebWrapperMessageActionButtonsRow"), {
                  isOutgoingMsg: je,
                  isMsgGallery: !1,
                  hasReaction: ft,
                  messageActionButtons: mt,
                }),
              ],
            }),
            vt,
            o("WAWebMiscGatingUtils").messageCustomAriaLabelEnabled()
              ? f.jsx(r("WAWebReactionsListeners.react"), {
                  msgIds: $.map(function (e) {
                    return e.id.toString();
                  }),
                  onReactionChange: Ge,
                })
              : null,
            Me,
            Fe,
            bt,
            f.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
              parent: { onSelectChange: Ie },
              msgId: $[0].id.toString(),
              selectedMessages: w,
            }),
          ],
        });
      return o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
        ? f.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
            role: "row",
            children: kt,
          })
        : kt;
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
