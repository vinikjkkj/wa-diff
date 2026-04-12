__d(
  "WAWebMediaViewerModal.react",
  [
    "cx",
    "fbt",
    "WALogger",
    "WATypeUtils",
    "WAWebAppTracker",
    "WAWebClassnames",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataContext",
    "WAWebHeroInteraction.react",
    "WAWebIncrementalZoomUtils",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardHotKeys.react",
    "WAWebMarkPlayedMsgAction",
    "WAWebMediaAudio.react",
    "WAWebMediaData",
    "WAWebMediaImage.react",
    "WAWebMediaIncrementalZoom",
    "WAWebMediaPanelHeader.react",
    "WAWebMediaStage.react",
    "WAWebMediaSticker.react",
    "WAWebMediaTypes",
    "WAWebMediaViewerCaption.react",
    "WAWebMediaViewerConstants",
    "WAWebMediaViewerFlow.react",
    "WAWebMediaViewerMediaVideo.react",
    "WAWebMediaViewerModalStyle",
    "WAWebMediaViewerShortcuts.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebNux",
    "WAWebResizeObserver.react",
    "WAWebTPDiscardEditPdfPopup.react",
    "WAWebTPEditPdfInWhatsappContext.react",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebVelocityAnimate",
    "WAWebViewOnceNux.react",
    "WDSButton.react",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcChevronRight.react",
    "WDSTooltip.react",
    "cr:23046",
    "cr:27506",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebNux",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useCallback,
      h = f.useContext,
      y = f.useEffect,
      C = f.useId,
      b = f.useMemo,
      v = f.useRef,
      S = f.useState;
    function R(e) {
      e == null || e.stopPropagation();
    }
    function L(e) {
      return o("WAWebTPPdfViewerGatingUtils").isWebTPEditPdfInWhatsappEnabled()
        ? _.jsx(
            o("WAWebTPEditPdfInWhatsappContext.react")
              .WAWebTPEditPdfInWhatsappProvider,
            { children: _.jsx(E, babelHelpers.extends({}, e)) },
          )
        : _.jsx(E, babelHelpers.extends({}, e));
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(t) {
      var a,
        i,
        l = t.isAnimatingThumbs,
        s = t.msg,
        p = t.onBack,
        f = t.onExitAnimation,
        C = t.onImageLoad,
        R = t.onImgZoomIn,
        L = t.shouldShowAllMedia,
        E = t.shouldShowNumberText,
        D = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (i = o("WAWebMsgGetters")).getId,
          i.getStar,
          o("WAWebFrontendMsgGetters").getIsUnsentMedia,
          i.getIsViewOnce,
          i.getIsStickerMsg,
          i.getHasThumbList,
          i.getCaption,
          i.getInteractiveAnnotations,
          i.getType,
          i.getMessageSecret,
        ]),
        x = D[0],
        $ = D[1],
        P = D[2],
        N = D[3],
        M = D[4],
        w = D[5],
        A = D[6],
        F = D[7],
        O = D[8],
        B = D[9],
        W = o("WAWebFrontendMsgGetters").getChat(s),
        q = o("useWAWebModelValues").useModelValues(t.mediaData, [
          "mediaStage",
          "type",
          "isGif",
          "mimetype",
          "filename",
        ]),
        U = h(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        V = U.hasOverflownThumbnailSection,
        H = h(o("WAWebMediaViewerFlow.react").MediaViewerFlowZoomContext) || V,
        G = o(
          "WAWebTPEditPdfInWhatsappContext.react",
        ).useWAWebTPEditPdfInWhatsappContext(),
        z = G.isEditing,
        j = G.setIsEditing,
        K = function () {
          o("WAWebModalManager").ModalManager.openSupportModal(
            _.jsx(r("WAWebTPDiscardEditPdfPopup.react"), {
              onDiscard: function () {
                return j(!1);
              },
              onDownload: r("WAWebNoop"),
            }),
          );
        },
        Q = v(null),
        X = v(null),
        Y = v(null),
        J = v(null),
        Z = v(null),
        ee = v(!1),
        te = v(!1),
        ne = v(!1),
        re = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE_RECEIVER),
        oe = re[0],
        ae = re[1],
        ie = N && oe,
        le = t.getZoomNode,
        se = b(
          function () {
            return q.mediaStage ===
              o("WAWebMediaTypes").MediaDataStage.RESOLVED && le
              ? le(x)
              : null;
          },
          [q.mediaStage, le, x],
        ),
        ue = S(!1),
        ce = ue[0],
        de = ue[1],
        me = U.isEnabled,
        pe = S(!1),
        _e = pe[0],
        fe = pe[1],
        ge = [
          r("WAWebMediaData").TYPE.IMAGE,
          r("WAWebMediaData").TYPE.STICKER,
        ].includes(q.type),
        he = S(ge),
        ye = he[0],
        Ce = he[1],
        be = S(!t.isAnimatingThumbs && !ye),
        ve = be[0],
        Se = be[1],
        Re = S(!1),
        Le = Re[0],
        Ee = Re[1],
        ke = S(!1),
        Ie = ke[0],
        Te = ke[1],
        De =
          N || !o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(s, W),
        xe = v(null);
      o("WAWebIncrementalZoomUtils").usePreventDefaultZoom(xe);
      var $e = function () {
          var e = _.jsx(r("WAWebViewOnceNux.react"), {
            isPhoto: q.type === r("WAWebMediaData").TYPE.IMAGE,
            onOkClick: function () {
              (ae(), o("WAWebModalManager").ModalManager.close());
            },
          });
          o("WAWebModalManager").ModalManager.open(e);
        },
        Pe = r("useWAWebThrottledCallback")(function (e, t) {
          if (!_e) {
            var n = Q.current;
            if (n) {
              var a = n.getInsideContainer();
              if (!(!a || !(a instanceof HTMLElement))) {
                var i = n.getOutsideContainer();
                if (!(!i || !(i instanceof HTMLElement))) {
                  var l = n.getTranslatePosition(i, e, t),
                    s = l.translateX,
                    u = l.translateY;
                  (r("WAWebVelocityAnimate")(a, "stop"),
                    r("WAWebVelocityAnimate")(
                      a,
                      {
                        translateX: s,
                        translateY: u,
                        scale: o("WAWebMediaViewerConstants").ZOOM_IN_FACTOR,
                      },
                      { duration: 0 },
                    ));
                }
              }
            }
          }
        });
      (y(function () {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "MediaViewerModal: Opened",
              ])),
          ),
          ie && $e(),
          r("WAWebFocusTracer").focus(J.current),
          function () {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "MediaViewerModal: Closed",
                ])),
            ),
              T(),
              Pe.cancel());
          }
        );
      }, []),
        y(
          function () {
            I(q.type);
          },
          [q.type],
        ));
      var Ne = function () {
          $e();
        },
        Me = function (t, n) {
          var e,
            a = n.getBoundingClientRect(),
            i = t.getBoundingClientRect(),
            l = i.top - a.top,
            s = i.left - a.left,
            u = t.clientWidth / n.clientWidth,
            c = (n.clientHeight - t.clientHeight) / 2,
            d = (n.clientWidth - t.clientWidth) / 2;
          ((l -= c),
            (s -= d),
            r("WAWebVelocityAnimate")(
              n,
              {
                opacity: [1, 0],
                translateX: [0, s],
                translateY: [0, l],
                scale: [1, u],
              },
              {
                duration: o("WAWebMediaViewerConstants").ANIMATION_DURATION,
                easing: [0.1, 0.82, 0.25, 1],
              },
            ).then(function () {
              return Ce(!1);
            }));
          var m = (e = Y.current) == null ? void 0 : e.getElement();
          m &&
            r("WAWebVelocityAnimate")(
              m,
              { opacity: [1, 0] },
              { duration: o("WAWebMediaViewerConstants").ANIMATION_DURATION },
            );
        },
        we = function () {
          N &&
            o("WAWebMarkPlayedMsgAction").canMarkPlayed(s) &&
            o("WAWebMarkPlayedMsgAction").markPlayed(s);
        },
        Ae = function (t) {
          (we(), C && C());
          var e = se,
            n = t == null ? void 0 : t.target;
          if (!t) {
            var r,
              o = (r = X.current) == null ? void 0 : r.getContainerElement();
            o instanceof HTMLElement && (n = o);
          }
          if (!e || !n || !(n instanceof HTMLElement) || ne.current || me) {
            Ce(!1);
            return;
          }
          ((ne.current = !0), Me(e, n));
        },
        Fe = function () {
          var e;
          if (!ee.current) {
            ((ee.current = !0), o("WATypeUtils").isFunction(f) && f());
            var n = t.getZoomNode && t.getZoomNode(x);
            if (!n) return p();
            var a;
            if (ge && Q.current) {
              var i;
              ((a = Q.current.getInsideContainer()),
                (i = Q.current) == null || i.closingMediaZoomable());
            } else if (q.isGif && X.current) {
              var l;
              ((a = X.current.getContainerElement()),
                (l = X.current) == null || l.closingMedia());
            } else Z.current && (a = Z.current);
            if (!a) return p();
            var s = a,
              u = a.getBoundingClientRect(),
              c = n.getBoundingClientRect(),
              d = c.top - u.top,
              m = c.left - u.left,
              _ = n.clientWidth / s.clientWidth,
              g = (s.clientHeight - n.clientHeight) / 2,
              h = (s.clientWidth - n.clientWidth) / 2;
            ((d -= g),
              (m -= h),
              r("WAWebVelocityAnimate")(
                a,
                { translateX: [m, 0], translateY: [d, 0], scale: [_, 1] },
                {
                  duration: o("WAWebMediaViewerConstants")
                    .CLOSE_ANIMATION_DURATION,
                  easing: [0.1, 0.82, 0.25, 1],
                },
              ).then(function () {
                p();
              }));
            var y = (e = Y.current) == null ? void 0 : e.getElement();
            y &&
              r("WAWebVelocityAnimate")(
                y,
                { opacity: [0, 1] },
                {
                  duration: o("WAWebMediaViewerConstants")
                    .CLOSE_ANIMATION_DURATION,
                  easing: [0.1, 0.82, 0.25, 1],
                },
              );
          }
        },
        Oe = function () {
          o("WAWebModalManager").ModalManager.openSupportModal(
            _.jsx(r("WAWebTPDiscardEditPdfPopup.react"), {
              onDiscard: function () {
                (j(!1), Fe());
              },
              onDownload: r("WAWebNoop"),
            }),
          );
        },
        Be = function (t) {
          var e = Q.current;
          (t &&
            e &&
            (te.current =
              e.getHeightOverflow() > 0 || e.getWidthOverflow() > 0),
            de(t),
            R(t));
        },
        We = function (t) {
          Pe.cancel();
          var e = Q.current;
          e && ce && e.onClick(t);
        },
        qe = function (t) {
          me || Pe(t.pageX, t.pageY);
        },
        Ue = function (t) {
          var e,
            n = (e = Q.current) == null ? void 0 : e.getInsideContainer(),
            r = !!(n != null && n.contains(document.activeElement));
          if (!(l || ye || !r)) {
            Pe.cancel();
            var o = Q.current;
            o != null && o.onKeyboardZoom(t);
          }
        },
        Ve = function () {
          Ee(!0);
        },
        He = function () {
          Ee(!1);
        },
        Ge = function () {
          fe(!0);
        },
        ze = function () {
          fe(!1);
        };
      (y(
        function () {
          !ve && !l && !ye && Se(!0);
        },
        [l, ve, ye],
      ),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "media-viewer",
        }));
      var je = null,
        Ke = t.msgIndexInAlbum >= 0 && t.albumSize >= 0;
      function Qe() {
        return [];
      }
      if (A || Ke) {
        var Xe = function () {
            var e = A == null && Ye != null ? Ye : A,
              t = [{ testid: "media-caption", text: e }];
            return (
              E &&
                A != null &&
                Ye != null &&
                t.push({ testid: "media-number-caption", text: Ye }),
              t
            );
          },
          Ye;
        Ke &&
          (Ye = u._(/*BTDS*/ "{number} of {totalNumber}", [
            u._param("number", t.msgIndexInAlbum + 1),
            u._param("totalNumber", t.albumSize),
          ]));
        var Je = o("WAWebMediaViewerCaption.react").getCaptionFormatters({
            msg: s,
            id: x,
          }),
          Ze = q.type === r("WAWebMediaData").TYPE.IMAGE && !N,
          et = (!ve && (q.isGif || Ze)) || U.isZoomedIn,
          tt = {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_alhf",
              (m || (m = r("stylex")))(
                r("WAWebMediaViewerModalStyle").mediaCaption,
                et && r("WAWebMediaViewerModalStyle").mediaCaptionHidden,
              ),
            ),
            formatters: Je,
          };
        je = _.jsx(_.Fragment, {
          children: (o(
            "WAWebTPPdfViewerGatingUtils",
          ).isWebTPPdfViewerEnabledForMimeType(q.mimetype)
            ? Qe()
            : Xe()
          ).map(function (e, t) {
            return _.jsx(
              o("WAWebEmojiText.react").EmojiText,
              babelHelpers.extends({}, e, tt, {
                ref: function (t) {
                  Y.current = t;
                },
              }),
              t,
            );
          }),
        });
      }
      var nt = babelHelpers.extends(
        {},
        (m || (m = r("stylex"))).props(
          r("WAWebMediaViewerModalStyle").captionWrapper,
          H && r("WAWebMediaViewerModalStyle").captionWrapperZoomedIn,
        ),
      );
      je = U.isEnabled
        ? _.jsx(
            r("WAWebResizeObserver.react"),
            babelHelpers.extends(
              {
                component: "p",
                onResize: function (t) {
                  U.setCaptionHeight(t.height);
                },
              },
              nt,
              { children: je },
            ),
          )
        : _.jsx("p", babelHelpers.extends({}, nt, { children: je }));
      var rt,
        ot = g(
          function () {
            Te(!0);
          },
          [Te],
        );
      switch (q.type) {
        case r("WAWebMediaData").TYPE.IMAGE:
          rt = _.jsx(
            r("WAWebMediaImage.react"),
            {
              msg: s,
              mediaData: q,
              onLoad: Ae,
              onImgZoomIn: Be,
              onAnnotationTooltipDisplay: Ge,
              onAnnotationTooltipDismiss: ze,
              preventDownload: De,
              ref: Q,
            },
            x.toString(),
          );
          break;
        case r("WAWebMediaData").TYPE.STICKER:
          rt = _.jsx(
            r("WAWebMediaSticker.react"),
            {
              msg: s,
              mediaData: q,
              onLoad: Ae,
              onImgZoomIn: Be,
              onStickerPackView: Fe,
              stickerPackViewDelay: o("WAWebMediaViewerConstants")
                .CLOSE_ANIMATION_DURATION,
              ref: Q,
            },
            x.toString(),
          );
          break;
        case r("WAWebMediaData").TYPE.VIDEO:
          rt = _.jsx(
            r("WAWebMediaViewerMediaVideo.react"),
            {
              autoPlay: !ie,
              msg: s,
              mediaData: q,
              onLoadedData: q.isGif ? Ae : we,
              startTime: t.startTime,
              onClose: Fe,
              ref: X,
            },
            x.toString(),
          );
          break;
        case r("WAWebMediaData").TYPE.AUDIO:
          rt = _.jsx(
            r("WAWebMediaAudio.react"),
            { mediaData: q, msg: s },
            x.toString(),
          );
          break;
        case r("WAWebMediaData").TYPE.DOCUMENT:
          n("cr:27506") &&
            o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(
              q.mimetype,
            ) &&
            (rt = _.jsx(r("WAWebHeroInteraction.react"), {
              enableHoldTrigger: !1,
              description: "PdfViewer",
              policy: r("WAWebInteractionTracePolicy").PDF_VIEWER,
              children: function (t, r) {
                return _.jsx(
                  n("cr:27506"),
                  {
                    onLoad: Ae,
                    msg: s,
                    mediaData: q,
                    containerRef: Z,
                    interactonRef: t,
                    onRender: ot,
                    onClose: z ? K : Fe,
                    interaction: r,
                  },
                  x.toString(),
                );
              },
            }));
          break;
        default:
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose(["type: ", ""])),
              q.type,
            )
            .sendLogs("MediaViewerModal: unexpected media type");
      }
      var at = m(
          r("WAWebMediaViewerModalStyle").media,
          !!je && r("WAWebMediaViewerModalStyle").mediaWithCaption,
        ),
        it =
          (a =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? a
            : !1,
        lt =
          Qe().length === 0 &&
          o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(
            q.mimetype,
          ),
        st = o(
          "WAWebTPPdfViewerGatingUtils",
        ).isWebTPPdfViewerEnabledForMimeType(q.mimetype),
        ut = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "overlay",
          m(
            (ye || l) && r("WAWebMediaViewerModalStyle").mediaViewerAnimate,
            ce && r("WAWebMediaViewerModalStyle").cursorZoomOut,
            r("WAWebMediaViewerModalStyle").mediaViewer,
            !w && o("WAWebUISpacing").uiPadding.bottom40,
            it && r("WAWebMediaViewerModalStyle").mediaViewerHybrid,
            lt && o("WAWebUISpacing").uiPadding.bottom0,
          ),
        ),
        ct = ce && te.current ? qe : null,
        dt = ce ? We : null,
        mt = ce ? null : Fe;
      return (
        mt != null && N && (mt = Ve),
        o("WAWebMediaViewerShortcuts.react").useMediaViewerShortcuts(s),
        _.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "MediaViewer",
          escapable: !0,
          requestDismiss: function (t, n) {
            var e,
              r = n instanceof KeyboardEvent && n.key === "Escape";
            if (r && z) {
              Oe();
              return;
            }
            if (!U.isEnabled) {
              Fe();
              return;
            }
            if (!r || U.currentZoomLevel === 1) {
              Fe();
              return;
            }
            (e = U.getHandler()) == null || e.performZoom(1);
          },
          children: _.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            handlers: { space: Ue, enter: Ue },
            ref: J,
            children: _.jsxs("div", {
              className: ut,
              "data-animate-media-viewer": !0,
              "data-testid": void 0,
              onClick: dt,
              onMouseMove: ct,
              children: [
                _.jsx(r("WAWebMediaPanelHeader.react"), {
                  isHighlightClose: Le,
                  msg: s,
                  mediaData: q,
                  onClose: Fe,
                  onHightlightCloseEnd: He,
                  onViewOnceInfoClick: Ne,
                  msgIndexInAlbum: t.msgIndexInAlbum,
                  theme: L === !0 ? "media_hub" : void 0,
                  hasRendered: Ie,
                  showBorderBottom: o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(q.mimetype),
                }),
                _.jsx(
                  "div",
                  babelHelpers.extends(
                    { ref: xe },
                    m.props(
                      [
                        r("WAWebMediaViewerModalStyle").mediaContent,
                        o("WAWebUISpacing").uiPadding.top10,
                        o("WAWebUISpacing").uiPadding.bottom15,
                      ],
                      M && r("WAWebMediaViewerModalStyle").mediaContentSticker,
                      lt && o("WAWebUISpacing").uiPadding.bottom0,
                      st && o("WAWebUISpacing").uiPadding.top0,
                    ),
                    {
                      onClick: mt,
                      children: _.jsx(k, {
                        hasNavigationButtons: w,
                        onNext: t.onNext,
                        onPrev: t.onPrev,
                        imgZoomed: ce,
                        children: _.jsxs("div", {
                          className: at,
                          children: [
                            _.jsx(r("WAWebMediaStage.react"), {
                              msg: s,
                              mediaData: q,
                            }),
                            rt,
                            _.jsx(r("WAWebGroupMetadataContext").Provider, {
                              value: W.groupMetadata,
                              children: je,
                            }),
                          ],
                        }),
                      }),
                    },
                  ),
                ),
              ],
            }),
          }),
        })
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.children,
        n = e.hasNavigationButtons,
        a = e.imgZoomed,
        i = e.onNext,
        l = e.onPrev,
        s = h(
          o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx,
        ).isZoomedIn,
        c = C(),
        d = C();
      return _.jsxs(_.Fragment, {
        children: [
          n &&
            _.jsx(
              "div",
              babelHelpers.extends(
                {},
                (m || (m = r("stylex"))).props(
                  r("WAWebMediaViewerModalStyle").mediaNavBtn,
                  r("WAWebMediaViewerModalStyle").mediaNavBtnPrev,
                  s && r("WAWebMediaViewerModalStyle").mediaNavBtnHidden,
                  r("WAWebMediaViewerModalStyle")
                    .mediaNavBtnPrevIncrementalZoom,
                ),
                {
                  children: _.jsx("div", {
                    onClick: l ? null : R,
                    children: _.jsx(r("WDSTooltip.react"), {
                      id: c,
                      label: u._(/*BTDS*/ "Previous"),
                      children: _.jsx(r("WDSButton.react"), {
                        Icon: r("WDSIconIcChevronLeft.react"),
                        variant: "tonal",
                        type: "media",
                        size: "medium",
                        directional: !0,
                        onPress: l != null ? l : void 0,
                        disabled: !l || a,
                        testid: void 0,
                        "aria-describedby": c,
                        "aria-label": u._(/*BTDS*/ "Previous"),
                      }),
                    }),
                  }),
                },
              ),
            ),
          t,
          n &&
            _.jsx(
              "div",
              babelHelpers.extends(
                {},
                (m || (m = r("stylex"))).props(
                  r("WAWebMediaViewerModalStyle").mediaNavBtn,
                  r("WAWebMediaViewerModalStyle").mediaNavBtnNext,
                  s && r("WAWebMediaViewerModalStyle").mediaNavBtnHidden,
                  r("WAWebMediaViewerModalStyle")
                    .mediaNavBtnNextIncrementalZoom,
                ),
                {
                  children: _.jsx("div", {
                    onClick: i ? null : R,
                    children: _.jsx(r("WDSTooltip.react"), {
                      id: d,
                      label: u._(/*BTDS*/ "Next"),
                      children: _.jsx(r("WDSButton.react"), {
                        Icon: r("WDSIconIcChevronRight.react"),
                        variant: "tonal",
                        type: "media",
                        size: "medium",
                        directional: !0,
                        onPress: i != null ? i : void 0,
                        disabled: !i || a,
                        testid: void 0,
                        "aria-describedby": d,
                        "aria-label": u._(/*BTDS*/ "Next"),
                      }),
                    }),
                  }),
                },
              ),
            ),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t;
      ((t = o("WAWebAppTracker")).AppTracker.stop(t.AppTrackerType.MediaOpen),
        t.AppTracker.stop(t.AppTrackerType.MediaOpenImage),
        t.AppTracker.stop(t.AppTrackerType.MediaOpenVideo),
        e === r("WAWebMediaData").TYPE.IMAGE
          ? o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.MediaOpenImage,
            )
          : e === r("WAWebMediaData").TYPE.VIDEO
            ? o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.MediaOpenVideo,
              )
            : o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.MediaOpen,
              ));
    }
    function T() {
      var e;
      ((e = o("WAWebAppTracker")).AppTracker.stop(e.AppTrackerType.MediaOpen),
        e.AppTracker.stop(e.AppTrackerType.MediaOpenImage),
        e.AppTracker.stop(e.AppTrackerType.MediaOpenVideo));
    }
    l.default = L;
  },
  226,
);
