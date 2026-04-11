__d(
  "WAWebMessageAlbumWrapperGroupedSticker.react",
  [
    "cx",
    "WANullthrows",
    "WAWebClassnames",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMessageGroupedSticker.react",
    "WAWebMessageGroupedStickerCheckbox.react",
    "WAWebMessageUiUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgSendFailIcon.react",
    "WAWebReactionsListeners.react",
    "WAWebReactionsUtils",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperListeners.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t,
        n,
        a,
        i = e.albumId,
        l = e.albumWrapperClass,
        s = e.albumWrapperRef,
        d = e.author,
        m = e.containerClass,
        p = e.displayType,
        _ = e.focusedMsgIndex,
        f = e.groupProfilePicture,
        g = e.handleModalClosed,
        h = e.handleOpenDeleteFlow,
        y = e.handleOpenForwardFlow,
        C = e.handleReactionChange,
        b = e.handleSelectChange,
        v = e.handleSelectClick,
        S = e.isAlbumWrapperKeyboardFocused,
        R = e.isFocusedAlbum,
        L = e.isWide,
        E = e.leftStickerBubbleRef,
        k = e.menuTransition,
        I = e.msgs,
        T = e.rightStickerBubbleRef,
        D = e.scrollMsg,
        x = e.selectable,
        $ = e.selected,
        P = e.selectedMessages,
        N = e.setIsFocused,
        M = e.tail,
        w = c(null),
        A = c(null),
        F = I[0],
        O = I[1],
        B = I.map(function (e) {
          return u.jsx(
            o("WAWebWrapperListeners.react").SelectionListener,
            {
              parent: { onSelectChange: b },
              msgId: e.id.toString(),
              selectedMessages: P,
            },
            e.id.toString(),
          );
        }),
        W =
          F.type === "sticker"
            ? o("WAWebMessageUiUtils").getStickerCustomLabel(
                F.mediaData.accessibilityLabel,
                (t = F.mediaData.emojis) == null ? void 0 : t.join(" "),
              )
            : null,
        q =
          O.type === "sticker"
            ? o("WAWebMessageUiUtils").getStickerCustomLabel(
                O.mediaData.accessibilityLabel,
                (n = O.mediaData.emojis) == null ? void 0 : n.join(" "),
              )
            : null,
        U = x
          ? u.jsx(r("WAWebMessageGroupedStickerCheckbox.react"), {
              checked: P.isSelected(o("WAWebStateUtils").unproxy(F.unsafe())),
              onClick: function (t) {
                v({ selectedMsg: F.unsafe() });
              },
              ariaLabel: W,
            })
          : null,
        V = x
          ? u.jsx(r("WAWebMessageGroupedStickerCheckbox.react"), {
              checked: P.isSelected(o("WAWebStateUtils").unproxy(O.unsafe())),
              onClick: function (t) {
                v({ selectedMsg: O.unsafe() });
              },
              ariaLabel: q,
            })
          : null,
        H = I.some(function (e) {
          return o("WAWebReactionsUtils").canReactToMessage(e.unsafe());
        })
          ? u.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
              msgs: I,
              showForMessages: !1,
              showForAddOns: !0,
              displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
            })
          : null,
        G = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}), (a._amlh = !0), (a._amli = L), a),
        ),
        z = u.jsxs("div", {
          className: l,
          "data-id": i,
          ref: s,
          onFocus: function () {
            N(!0);
          },
          onBlur: function () {
            N(!1);
          },
          tabIndex: -1,
          children: [
            u.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "delay-leave",
              children: $,
            }),
            u.jsxs("div", {
              className: m,
              role: "group",
              onContextMenu: o("WAWebStopEvent").stopPropagation,
              children: [
                M,
                f,
                d,
                u.jsxs("div", {
                  className: G,
                  children: [
                    u.jsxs("div", {
                      onMouseEnter: function () {
                        var e;
                        return (e = w.current) == null
                          ? void 0
                          : e.startAnimation();
                      },
                      role: "img",
                      className: "x1n2onr6",
                      ref: E,
                      children: [
                        u.jsx(r("WAWebVelocityTransitionGroup"), {
                          transitionName: "delay-leave",
                          children: U,
                        }),
                        u.jsx(r("WAWebMessageGroupedSticker.react"), {
                          msg: r("WANullthrows")(
                            o("WAWebFrontendMsgGetters").getAsGroupedSticker(
                              F.unsafe(),
                            ),
                          ),
                          menuTransition: k,
                          onOpenForwardFlow: y,
                          onOpenDeleteFlow: h,
                          scrollMsg: D,
                          isFocused: R && _ === 0,
                          forwardRef: w,
                          displayType: p,
                          rowIsKeyboardFocused: S,
                          onModalClosed: g,
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      onMouseEnter: function () {
                        var e;
                        return (e = A.current) == null
                          ? void 0
                          : e.startAnimation();
                      },
                      role: "img",
                      className: "x1n2onr6",
                      ref: T,
                      children: [
                        u.jsx(r("WAWebVelocityTransitionGroup"), {
                          transitionName: "delay-leave",
                          children: V,
                        }),
                        u.jsx(r("WAWebMessageGroupedSticker.react"), {
                          msg: r("WANullthrows")(
                            o("WAWebFrontendMsgGetters").getAsGroupedSticker(
                              O.unsafe(),
                            ),
                          ),
                          menuTransition: k,
                          onOpenForwardFlow: y,
                          onOpenDeleteFlow: h,
                          scrollMsg: D,
                          isFocused: R && _ === 1,
                          forwardRef: A,
                          displayType: p,
                          rowIsKeyboardFocused: S,
                          onModalClosed: g,
                        }),
                      ],
                    }),
                    u.jsx(r("WAWebReactionsListeners.react"), {
                      msgIds: I.map(function (e) {
                        return e.id.toString();
                      }),
                      onReactionChange: C,
                    }),
                  ],
                }),
                H,
              ],
            }),
            B,
          ],
        });
      return o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
        ? u.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
            role: "row",
            children: z,
          })
        : z;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
