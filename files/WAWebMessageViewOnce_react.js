__d(
  "WAWebMessageViewOnce.react",
  [
    "fbt",
    "WALogger",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebL10nFilesize",
    "WAWebMediaTypes",
    "WAWebMessageContentBox.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMessageViewOncePendingCancel",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebSpacerText.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUnstyledButton.react",
    "WAWebViewOnceDownloadIcon.react",
    "WAWebViewOnceGatingUtils",
    "WAWebViewOnceRetryIcon.react",
    "WAWebViewOnceState",
    "WAWebViewOnceSunset.react",
    "WAWebViewOnceViewedIcon.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSButton.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useMemo,
      g = 54,
      h = 170,
      y = 4,
      C = 24,
      b = {
        buttonContainer: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x1qjc9v5",
          minWidth: "xgqtt45",
          height: "x1dnml7z",
          color: "x1heor9g",
          textAlign: "x16tdsg8",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        statusIcon: { color: "x1ll7wkd", height: "xxk0z11", $$css: !0 },
        statusDone: { color: "x181wc8j", $$css: !0 },
        content: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x1cy8zhl",
          maxHeight: "xok94ej",
          paddingInlineEnd: "xpdmqnj",
          $$css: !0,
        },
        deepContainerContent: {
          boxSizing: "x9f619",
          minWidth: "x173radd",
          height: "x1dnml7z",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "xe2zdcy",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        accentIconSvg: { color: "x1v5yvga", $$css: !0 },
        nonSpinnerIcon: {
          display: "x1rg5ohu",
          minWidth: "xnei2rj",
          marginTop: "xdj266r",
          marginInlineEnd: "x7g7pl8",
          marginBottom: "xat24cr",
          marginInlineStart: "x3n7f7h",
          $$css: !0,
        },
        nonSpinnerIconSvg: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        contentMeta: { color: "xhslqc4", $$css: !0 },
        labelContainer: { minWidth: "xek95gm", $$css: !0 },
        labelText: { userSelect: "x87ps6o", $$css: !0 },
        labelActive: { color: "xhslqc4", $$css: !0 },
        labelInactive: { fontStyle: "x1k4tb9n", color: "xhslqc4", $$css: !0 },
        labelRetry: { fontWeight: "xk50ysn", color: "xhslqc4", $$css: !0 },
        dialogTitle: { marginBottom: "xefnzgg", $$css: !0 },
      };
    function v(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    function S(t, n) {
      var a = f(
        function () {
          var a = n.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE,
            i;
          switch (n.type) {
            case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
              i = s._(/*BTDS*/ "Photo");
              break;
            case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
              i = s._(/*BTDS*/ "Video");
              break;
            case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
              i = s._(/*BTDS*/ "Voice message");
              break;
          }
          if (o("WAWebViewOnceState").isViewed(n))
            return {
              type: "complete",
              icon: d.jsx(
                o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon,
                { xstyle: b.nonSpinnerIcon, iconXstyle: b.nonSpinnerIconSvg },
              ),
              label: s._(/*BTDS*/ "Opened"),
              labelStyle: b.labelInactive,
            };
          if (
            o("WAWebViewOnceState").isExpired(n) &&
            !o("WAWebMsgGetters").getIsSentByMe(n)
          )
            return {
              type: "unviewed",
              icon: d.jsx(r("WDSIconWdsIcViewOnce.react"), {
                xstyle: b.nonSpinnerIcon,
                iconXstyle: [b.accentIconSvg, b.nonSpinnerIconSvg],
              }),
              handleClick: function () {
                var e = o("WAWebFrontendContactGetters").getDisplayName(
                    n.senderObj,
                  ),
                  t = a
                    ? s._(/*BTDS*/ "Photo expired")
                    : s._(/*BTDS*/ "Video expired"),
                  r = a
                    ? s._(
                        /*BTDS*/ "This view once photo has expired. Please ask {name} to re-send it.",
                        [s._param("name", e)],
                      )
                    : s._(
                        /*BTDS*/ "This view once video has expired. Please ask {name} to re-send it.",
                        [s._param("name", e)],
                      );
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "view-once",
                    },
                    onOK: o("WAWebModalManager").closeModalManager,
                    children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
                      children: [
                        d.jsx(o("WAWebText.react").WAWebTextLarge, {
                          xstyle: b.dialogTitle,
                          children: t,
                        }),
                        d.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: r,
                        }),
                      ],
                    }),
                  }),
                );
              },
              label: i,
            };
          switch (t.mediaStage) {
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
            case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY: {
              if (o("WAWebMsgGetters").getIsSentByMe(n))
                return {
                  type: "complete",
                  icon: d.jsx(r("WDSIconWdsIcViewOnce.react"), {
                    xstyle: b.nonSpinnerIcon,
                    iconXstyle: b.nonSpinnerIconSvg,
                  }),
                  label: i,
                  labelStyle: b.labelActive,
                };
              var l = function () {
                o("WAWebCmd").Cmd.mediaViewerModal({
                  msg: o("WAWebStateUtils").unproxy(n.unsafe()),
                });
              };
              return {
                type: "unviewed",
                icon: d.jsx(r("WDSIconWdsIcViewOnce.react"), {
                  xstyle: b.nonSpinnerIcon,
                  iconXstyle: [b.accentIconSvg, b.nonSpinnerIconSvg],
                }),
                handleClick: l,
                label: i,
              };
            }
            case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
              if (o("WAWebMsgGetters").getIsSentByMe(n))
                return {
                  type: "complete",
                  icon: d.jsx(r("WDSIconWdsIcViewOnce.react"), {
                    xstyle: b.nonSpinnerIcon,
                    iconXstyle: b.nonSpinnerIconSvg,
                  }),
                  label: i,
                  labelStyle: b.labelActive,
                };
              var u = function (t) {
                (v(t), n.cancelDownload());
              };
              return {
                type: "unviewed",
                icon: d.jsx(r("WAWebMessageViewOncePendingCancel"), {}),
                handleClick: u,
                label: i,
              };
            }
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
              var c = function (t) {
                (v(t), n.forceDownloadMediaEvenIfExpensive());
              };
              return {
                type: "unviewed",
                icon: d.jsx(
                  o("WAWebViewOnceDownloadIcon.react").ViewOnceDownloadIcon,
                  {
                    xstyle: b.nonSpinnerIcon,
                    iconXstyle: [b.accentIconSvg, b.nonSpinnerIconSvg],
                  },
                ),
                handleClick: c,
                label: i,
              };
            }
            case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING: {
              var m = function (t) {
                (v(t), n.cancelUpload());
              };
              return {
                type: "complete",
                icon: d.jsx(r("WAWebMessageViewOncePendingCancel"), {
                  onClick: m,
                }),
                label: i,
                labelStyle: b.labelActive,
              };
            }
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD: {
              var p = function (t) {
                (v(t), n.resumeUpload());
              };
              return {
                type: "complete",
                icon: d.jsx(r("WDSButton.react"), {
                  xstyle: b.nonSpinnerIcon,
                  Icon: o("WAWebViewOnceRetryIcon.react").ViewOnceRetryIcon,
                  onPress: p,
                  variant: "borderless",
                  "aria-label": s._(/*BTDS*/ "Retry"),
                }),
                label: s._(/*BTDS*/ "Retry"),
                labelStyle: b.labelRetry,
              };
            }
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
              var _ = function (t) {
                (v(t), n.resumeRemoteUpload());
              };
              return {
                type: "complete",
                icon: d.jsx(r("WDSButton.react"), {
                  xstyle: b.nonSpinnerIcon,
                  Icon: o("WAWebViewOnceRetryIcon.react").ViewOnceRetryIcon,
                  onPress: _,
                  variant: "borderless",
                  "aria-label": s._(/*BTDS*/ "Retry"),
                }),
                label: s._(/*BTDS*/ "Retry"),
                labelStyle: b.labelRetry,
              };
            }
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
              return {
                type: "complete",
                icon: d.jsx(r("WAWebMessageViewOncePendingCancel"), {}),
                label: i,
                labelStyle: b.labelActive,
              };
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
              return {
                type: "complete",
                icon: d.jsx(
                  o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon,
                  { xstyle: b.nonSpinnerIcon, iconXstyle: b.nonSpinnerIconSvg },
                ),
                label: s._(/*BTDS*/ "Expired"),
                labelStyle: b.labelInactive,
              };
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Unsupported/too large/not readable view once media message",
                      ])),
                  )
                  .sendLogs("view-once-hook-error"),
                {
                  type: "complete",
                  icon: d.jsx(
                    o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon,
                    {
                      xstyle: b.nonSpinnerIcon,
                      iconXstyle: b.nonSpinnerIconSvg,
                    },
                  ),
                  label: i,
                  labelStyle: b.labelActive,
                }
              );
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.PREPARING:
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
              if (!o("WAWebMsgGetters").getIsSentByMe(n))
                return {
                  type: "unviewed",
                  icon: d.jsx(r("WAWebMessageViewOncePendingCancel"), {}),
                  handleClick: v,
                  label: i,
                };
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
              return {
                type: "complete",
                icon: d.jsx(r("WDSIconWdsIcViewOnce.react"), {
                  xstyle: b.nonSpinnerIcon,
                  iconXstyle: b.nonSpinnerIconSvg,
                }),
                label: i,
                labelStyle: b.labelActive,
              };
          }
        },
        [t, n, n.ack],
      );
      return a;
    }
    function R(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l = e.quotedMsg,
        c = e.ref,
        m = e.trusted,
        f = o("useWAWebMsgValues").useMsgValues(i.id, [
          (t = o("WAWebMsgGetters")).getAck,
          t.getIsGroupMsg,
          t.getIsFailed,
          t.getIsPSA,
          t.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          t.getType,
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        g = f[0],
        h = f[1],
        y = f[2],
        C = f[3],
        v = f[4],
        R = f[5],
        L = f[6],
        E = f[7],
        k = S(E, i);
      (_(c, function () {
        return {
          handleKeyActivation: function (t) {
            m && k.handleClick != null && k.handleClick(t);
          },
        };
      }),
        p(
          function () {
            o("WAWebViewOnceGatingUtils").isViewOnceSunsetEnabled() ||
              (!v &&
                o("WAWebViewOnceState").isUnviewed(i) &&
                i.downloadMedia({
                  downloadEvenIfExpensive: !1,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.MSG_RENDER,
                  isUserInitiated: !1,
                }));
          },
          [i, v],
        ));
      var I;
      switch (i.type) {
        case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
          I = s._(/*BTDS*/ "View once photo");
          break;
        case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
          I = s._(/*BTDS*/ "View once video");
          break;
        case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
          I = s._(/*BTDS*/ "View once voice message");
          break;
      }
      var T;
      if (k.type === "complete") {
        var D = k.icon,
          x = k.label,
          $ = k.labelStyle,
          P = o("WAWebViewOnceState").isUnviewed(i) ? I : [x, I].join(" - ");
        T = d.jsxs(r("WAWebMessageTextBubble.react"), {
          msg: i,
          displayAuthor: n,
          displayType: a,
          children: [
            l != null
              ? d.jsx("div", {
                  className: "x1198e8h x1lxpwgx xzueoph xw01apr",
                  children: l,
                })
              : null,
            d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: b.labelContainer,
              testid: void 0,
              "aria-label": P,
              children: [
                d.jsx(r("WAWebFlexItem.react"), {
                  xstyle: [
                    b.statusIcon,
                    o("WAWebViewOnceState").isViewed(i) && b.statusDone,
                  ],
                  grow: 0,
                  children: D,
                }),
                d.jsx(r("WAWebFlexItem.react"), {
                  grow: 1,
                  children: d.jsx(r("WAWebMessageSpacerText.react"), {
                    className: (u || (u = r("stylex")))($, b.labelText),
                    msg: i.unsafe(),
                    children: x,
                  }),
                }),
              ],
            }),
          ],
        });
      } else {
        var N = k.handleClick,
          M = k.icon,
          w = k.label,
          A =
            E.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE ||
            E.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING
              ? o("WAWebL10nFilesize").getL10nFilesize(E.size)
              : null;
        T = o("WAWebViewOnceGatingUtils").isViewOnceSunsetEnabled()
          ? d.jsx(r("WAWebViewOnceSunset.react"), { msg: i, displayType: a })
          : d.jsx(r("WAWebMessageContentBox.react"), {
              displayType: a,
              hideCaption: !0,
              hideMeta: !0,
              msg: i,
              quotedMsg: l,
              showAuthor: n,
              trusted: m,
              children: d.jsx(r("WAWebUnstyledButton.react"), {
                testid: void 0,
                xstyle: b.buttonContainer,
                onClick: m ? N : r("WAWebNoop"),
                "aria-label": I,
                children: d.jsx(r("WAWebMessageDeeperContainer.react"), {
                  outgoingMsg: v,
                  children: d.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: b.deepContainerContent,
                    align: "center",
                    children: [
                      d.jsx(r("WAWebFlexItem.react"), {
                        xstyle: b.statusIcon,
                        grow: 0,
                        children: M,
                      }),
                      d.jsxs(r("WAWebFlexItem.react"), {
                        xstyle: b.content,
                        grow: 1,
                        children: [
                          d.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                            color: "secondary",
                            level: "3",
                            weight: "medium",
                            size: "15",
                            children: w,
                          }),
                          A != null
                            ? d.jsx(
                                o("WAWebText_DONOTUSE.react").TextParagraph,
                                {
                                  xstyle: b.contentMeta,
                                  size: "10",
                                  children: A,
                                },
                              )
                            : null,
                        ],
                      }),
                      d.jsx(r("WAWebFlexItem.react"), {
                        grow: 0,
                        children: d.jsx(r("WAWebSpacerText.react"), {
                          msg: i.unsafe(),
                          children: d.jsx("div", {
                            className: "x10l6tqk x1f889gz xajswfj",
                            children: d.jsx(o("WAWebMessageMeta.react").Meta, {
                              msg: i,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            });
      }
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {},
            1: { className: "x9f619 x1iorvi4 x11lfxj5 xjkvuk6 x135b78x" },
          }[(k.type === "unviewed") << 0],
          { children: T },
        ),
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
