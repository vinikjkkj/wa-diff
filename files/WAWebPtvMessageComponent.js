__d(
  "WAWebPtvMessageComponent",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAddOnBubbleRenderUtils",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebDownloadVideoThumbnail",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMarkPlayedMsgAction",
    "WAWebMediaDataGetters",
    "WAWebMediaGatingUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePosition",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebPttFindSequentialMsg",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPtvDownloadState.react",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebUnstyledButton.react",
    "WAWebVideo.react",
    "WDSIconIcVolumeOff.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "bx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebAnimationFrames",
    "useWAWebDebouncedChanges",
    "useWAWebEventTargetValue",
    "useWAWebIntersection",
    "useWAWebListener",
    "useWAWebMediaDataValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = {
        paddingInlineStart9: { paddingInlineStart: "x7coems", $$css: !0 },
        paddingBottom3: { paddingBottom: "xg8j3zb", $$css: !0 },
      },
      y = 200,
      C = 4,
      b = y + C * 2,
      v = 320,
      S = v + C * 2,
      R = 300,
      L = R + C * 2,
      E = 10,
      k = 300,
      I = { objectFit: "cover" },
      T = function () {
        return I;
      },
      D = r("bx").getURL(r("bx")("10047")),
      x = {
        ptvContainer: {
          width: "x143tcsw",
          height: "x12bdpze",
          borderStartStartRadius: "xvs2etk",
          borderStartEndRadius: "xg3wpu6",
          borderEndEndRadius: "x1jwbhkm",
          borderEndStartRadius: "xgg4q86",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "xjbqb8w",
          $$css: !0,
        },
        activePtvContainer: { width: "xi55695", height: "x1lgcfn3", $$css: !0 },
        activePtvContainerInMsgInfo: {
          width: "xdrqleo",
          height: "xb7tys7",
          $$css: !0,
        },
        videoContainer: {
          zIndex: "xhtitgo",
          width: "x1oysuqx",
          height: "x1m3v4wt",
          position: "x1n2onr6",
          borderStartStartRadius: "xvs2etk",
          borderStartEndRadius: "xg3wpu6",
          borderEndEndRadius: "x1jwbhkm",
          borderEndStartRadius: "xgg4q86",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        activeVideoContainer: {
          width: "x1m258z3",
          height: "xu3xrit",
          $$css: !0,
        },
        activeVideoContainerInMsgInfo: {
          width: "xdzyupr",
          height: "x1vd4hg5",
          $$css: !0,
        },
        animateDimensions: {
          transitionProperty: "x1rn7vjc",
          transitionTimingFunction: "xb51amx",
          transitionDuration: "x1d8287x",
          $$css: !0,
        },
        video: {
          objectFit: "xl1xv1r",
          zIndex: "xhtitgo",
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          transitionProperty: "x1xkhett",
          transitionDuration: "x1g2r6go",
          transform: "x3oybdh",
          $$css: !0,
        },
        depressedVideo: { filter: "x1kp5ph", transform: "x1jec706", $$css: !0 },
        borderRadius: {
          borderStartStartRadius: "x1liijdw",
          borderStartEndRadius: "xu342n7",
          borderEndEndRadius: "xelbjmh",
          borderEndStartRadius: "x16pgt24",
          $$css: !0,
        },
        boxShadow: { boxShadow: "x1lpesih", $$css: !0 },
        authorIsMe: { backgroundColor: "x1g5lz36", $$css: !0 },
        authorIsNotMe: { backgroundColor: "x1ew7x2d", $$css: !0 },
        isFirst: { borderStartStartRadius: "x1bczwif", $$css: !0 },
        muteIcon: {
          transitionProperty: "x1oc9h5i",
          transitionTimingFunction: "xz4gly6",
          transitionDuration: "x1d8287x",
          width: "x1fsd2vl",
          $$css: !0,
        },
        muteIconHidden: {
          opacity: "xg01cxk",
          visibility: "xlshs6z",
          width: "xnalus7",
          transform: "x11e568v",
          $$css: !0,
        },
        fitContent: { width: "xeq5yr9", $$css: !0 },
        quotedMsgContainer: {
          width: "xqyf9gi",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        quotedMsgContainerSender: { backgroundColor: "x1g5lz36", $$css: !0 },
        quotedMsgContainerReceiver: { backgroundColor: "x1ew7x2d", $$css: !0 },
        groupHistoryMessage: { backgroundColor: "x1fast2d", $$css: !0 },
      };
    function $(t) {
      var n,
        a,
        i = t.displayAuthor,
        l = t.displayType,
        c = t.mediaData,
        m = t.msg,
        y = t.position,
        C = t.quotedMsg,
        b = o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds"),
        v = o("WAWebMediaGatingUtils").isVideoCometVideoPlayerEnabled(),
        S = f(null),
        R = g(null),
        L = R[0],
        E = R[1],
        k = g(0),
        I = k[0],
        D = k[1],
        $ = g(!1),
        w = $[0],
        A = $[1],
        F = g(null),
        O = F[0],
        B = F[1],
        W = f(null),
        q = o("useWAWebMsgValues").useMsgValues(m.id, [
          (n = o("WAWebMsgGetters")).getId,
          n.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getHasReaction,
          n.getIsGroupHistoryMessageInOwnChat,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
        ]),
        U = q[0],
        V = q[1],
        H = q[2],
        G = q[3],
        z = q[4],
        j = q[5],
        K = o("WAWebFrontendMsgGetters").getChat(m.unsafe()),
        Q = o("useWAWebMediaDataValues").useMediaDataValues(c, [
          (a = o("WAWebMediaDataGetters")).getMediaStage,
          a.getRenderableUrl,
          a.getSize,
          a.getPreview,
          a.getFullPreviewData,
        ]),
        X = Q[0],
        Y = Q[1],
        J = Q[2],
        Z = Q[3],
        ee = Q[4],
        te = r("useWAWebEventTargetValue")(
          v ? null : L,
          "timeupdate",
          function () {
            return L ? L.currentTime : 0;
          },
        ),
        ne = v ? I : te,
        re = L
          ? Math.min(
              o(
                "WAWebPttGetDurationFromMediaOrProtobuf",
              ).getDurationFromMediaOrProtobuf(L, c),
              b,
            )
          : null;
      v && O != null && (re = Math.min(O, b));
      var oe = o("useWAWebSendViewCount").useSendViewCount(m.id, {
        mediaData: c,
        displayType: l,
      });
      (o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(m),
        _(
          function () {
            o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
              msg: o("WAWebStateUtils").unproxy(m),
              chat: K,
            });
          },
          [m, K],
        ));
      var ae = g(!1),
        ie = ae[0],
        le = ae[1],
        se = f(null),
        ue = f(null),
        ce = g(!1),
        de = ce[0],
        me = ce[1],
        pe = p(
          function (t, n) {
            (le(t),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PtvMessageComponent: setIsActive: ",
                    " from ",
                    "",
                  ])),
                t,
                n,
              ));
          },
          [le],
        );
      o("useWAWebListener").useListener(document.body, ["click"], function (e) {
        e.defaultPrevented ||
          !ie ||
          !ue.current ||
          (e.target instanceof Node && ue.current.contains(e.target)) ||
          pe(!1, "click-listener");
      });
      var _e = p(
          function () {
            var e = S.current;
            if (e) {
              if (ie) {
                e.getPaused() ? e.play() : e.pause();
                return;
              }
              pe(!0, "ptv-click");
            }
          },
          [ie],
        ),
        fe = p(
          function (e) {
            e.button !== 0 || ie || me(!0);
          },
          [ie, me],
        );
      (o("useWAWebListener").useListener(
        de ? document.body : null,
        "mouseup",
        function () {
          me(!1);
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "sequential_ptv_playback",
          function (e) {
            !S.current || !m.id.equals(e) || pe(!0, "sequential-ptv-playback");
          },
        ));
      var ge = f(0),
        he = function () {
          if (!ie) {
            if (((ge.current += 1), ge.current >= M())) {
              var e;
              (e = S.current) == null || e.pause("product_initiated");
            }
            return;
          }
          pe(!1, "loop");
          var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(m);
          t && o("WAWebCmd").Cmd.playNextPtv(t.id);
        },
        ye = function () {
          var e = S.current;
          if (e) {
            if (!ie) {
              ((ge.current += 1), e.seek(0), ge.current < M() && e.play());
              return;
            }
            (e.seek(0), e.play(), pe(!1, "loop"));
            var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(m);
            t && o("WAWebCmd").Cmd.playNextPtv(t.id);
          }
        };
      o("useWAWebListener").useListener(
        v ? null : L,
        "timeupdate",
        function () {
          L && L.currentTime >= b && ((L.currentTime = 0), he());
        },
      );
      var Ce = r("useWAWebIntersection")({ root: null, threshold: 0 }),
        be = Ce[0],
        ve = Ce[1].isIntersecting,
        Se = f(null);
      (_(
        function () {
          var e = Se.current;
          if (((Se.current = ve), !ve && e === !0)) {
            var t = self.setTimeout(function () {
              var e;
              (e = S.current) == null || e.pause("product_initiated");
            }, 100);
            return (
              (ge.current = 0),
              function () {
                self.clearTimeout(t);
              }
            );
          }
        },
        [ve],
      ),
        _(
          function () {
            var e = se.current;
            if (((se.current = ie), ie && e === !1)) {
              var t = S.current;
              (t &&
                (t.seek(0),
                t.play(),
                o("WAWebMarkPlayedMsgAction").canMarkPlayed(m.unsafe()) &&
                  o("WAWebMarkPlayedMsgAction").markPlayed(m.unsafe())),
                (ge.current = 0));
            }
          },
          [ie, m],
        ));
      var Re = r("useWAWebEventTargetValue")(
          v ? null : L,
          ["playing", "pause"],
          function () {
            return L ? !L.paused : !0;
          },
        ),
        Le = v ? w : Re,
        Ee = o("useWAWebDebouncedChanges").useDebouncedChanges({
          value: Le,
          debounceMs: 100,
          shouldDebounce: !Le,
        }),
        ke = de && !ie,
        Ie = o("WAWebMsgCollection").MsgCollection.get(U),
        Te = d.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
          isSentByMe: V,
          isTransparent: j,
          displayType: l,
          xstyle: z && x.groupHistoryMessage,
          children: d.jsx(o("WAWebMessageMeta.react").Meta, { msg: m }),
        }),
        De = d.jsx(d.Fragment, {
          children:
            l != null &&
            [
              o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            ].includes(l) &&
            Ie != null &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WDSMargins.stylex").wdsMargins.marginStartAuto,
                ),
                {
                  children: d.jsx(r("WAWebAddOnBubblesContainer.react"), {
                    isOutgoingMsg: V,
                    displayType: l,
                    bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                      .STICKER_LIKE_MSG,
                    parentIds: [Ie.id.toString()],
                    hasReaction: G,
                  }),
                },
              ),
            ),
        });
      return d.jsxs("div", {
        ref: ue,
        children: [
          i &&
            d.jsx(
              "div",
              babelHelpers.extends(
                { ref: W },
                (u || (u = r("stylex"))).props(
                  x.borderRadius,
                  x.boxShadow,
                  o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
                  h.paddingInlineStart9,
                  o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
                  h.paddingBottom3,
                  !o("WAWebDisplayType").isWideDisplay(l) && x.fitContent,
                  V ? x.authorIsMe : x.authorIsNotMe,
                  (y === o("WAWebMessagePosition").MsgPosition.FRONT ||
                    y === o("WAWebMessagePosition").MsgPosition.SINGLE) &&
                    x.isFirst,
                  z && x.groupHistoryMessage,
                ),
                {
                  children: d.jsx(r("WAWebMessageAuthor.react"), {
                    msg: m,
                    contact: H,
                    displayType: l,
                  }),
                },
              ),
            ),
          C &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  j ? x.quotedMsgContainer : null,
                  V ? x.quotedMsgContainerSender : x.quotedMsgContainerReceiver,
                  o("WDSMargins.stylex").wdsMargins.marginTop12,
                  o("WDSPaddings.stylex").wdsPaddings.padding4,
                ),
                { children: C },
              ),
            ),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            ref: be,
            justify: o("WAWebDisplayType").isWideDisplay(l)
              ? "center"
              : "start",
            className: {
              0: "x3oybdh x1d8287x x11xpdln",
              1: "x11xpdln x1jec706 x1pv9i8n",
            }[!!ke << 0],
            children: d.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              className: (u || (u = r("stylex")))(
                x.ptvContainer,
                x.animateDimensions,
                o("WDSMargins.stylex").wdsMargins.marginTop12,
                o("WDSMargins.stylex").wdsMargins.marginBottom4,
                ie && l === "MSG_INFO" && x.activePtvContainerInMsgInfo,
                ie && l !== "MSG_INFO" && x.activePtvContainer,
              ),
              children: [
                d.jsx("div", {
                  className: "x10l6tqk x1rn7vjc xb51amx x1d8287x",
                  children: d.jsx(N, {
                    isActive: ie,
                    getCurrentTime: function () {
                      var e, t;
                      return (e =
                        (t = S.current) == null
                          ? void 0
                          : t.getCurrentTime()) != null
                        ? e
                        : 0;
                    },
                    isPlaying: Le,
                    duration: re,
                    isSentByMe: V,
                    displayType: l,
                  }),
                }),
                d.jsxs(r("WAWebUnstyledButton.react"), {
                  xstyle: [
                    x.videoContainer,
                    x.animateDimensions,
                    ie && l === "MSG_INFO" && x.activeVideoContainerInMsgInfo,
                    ie && l !== "MSG_INFO" && x.activeVideoContainer,
                  ],
                  onMouseDown: ie ? void 0 : fe,
                  onClick: _e,
                  children: [
                    d.jsx(P, { mediaData: c }),
                    d.jsx(r("WAWebPtvDownloadState.react"), {
                      mediaDataFileSize: J,
                      mediaStage: X,
                      isPlaying: Ee,
                      onDownloadClick: function () {
                        m.forceDownloadMediaEvenIfExpensive();
                      },
                    }),
                    X === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                      d.jsx("div", {
                        ref: oe,
                        children: d.jsx(r("WAWebVideo.react"), {
                          ref: function (t) {
                            if (((S.current = t != null ? t : null), !v)) {
                              var e;
                              E(
                                (e =
                                  t == null ? void 0 : t.underlyingVideo()) !=
                                  null
                                  ? e
                                  : null,
                              );
                            }
                          },
                          src: Y,
                          xstyle: [x.video, ke && x.depressedVideo],
                          renderVideoPixelsFit: T,
                          muted: !ie,
                          autoPlay: !1,
                          disableAutoplayManagement: v,
                          loop: !v,
                          onAudioChannelRelease: function () {
                            pe(!1, "audio-channel-release");
                          },
                          onLoadedData: v
                            ? function () {
                                var e, t;
                                B(
                                  (e =
                                    (t = S.current) == null
                                      ? void 0
                                      : t.getDuration()) != null
                                    ? e
                                    : null,
                                );
                              }
                            : void 0,
                          onEnded: v ? ye : void 0,
                          onLoop: v ? void 0 : he,
                          onStoppedPlaying: v
                            ? function () {
                                A(!1);
                              }
                            : void 0,
                          onPlaying: v
                            ? function () {
                                return A(!0);
                              }
                            : void 0,
                          onTimeUpdate: v
                            ? function (e) {
                                (D(e), e >= b && ye());
                              }
                            : void 0,
                          children: s._(
                            /*BTDS*/ "Your browser doesn't support video playback.",
                          ),
                        }),
                      }),
                    re != null &&
                      d.jsxs(d.Fragment, {
                        children: [
                          d.jsx("div", {
                            className:
                              "xh8yej3 x1jjfqgs x10l6tqk x1ey2m1c x2iuv4i xuzhngd xhtitgo",
                          }),
                          d.jsxs(o("WAWebFlex.react").FlexRow, {
                            justify: "center",
                            align: "center",
                            className:
                              "x10l6tqk x1wa3icf xh8yej3 x1awj2ng x1pg5gke x1xlr1w8 xhtitgo",
                            children: [
                              d.jsx(r("WDSIconIcVolumeOff.react"), {
                                height: 10,
                                testid: "muted",
                                width: 10,
                                xstyle: [
                                  x.muteIcon,
                                  ie || !Ee
                                    ? [
                                        x.muteIconHidden,
                                        o("WDSMargins.stylex").wdsMargins
                                          .marginEnd0,
                                      ]
                                    : o("WDSMargins.stylex").wdsMargins
                                        .marginEnd4,
                                ],
                              }),
                              d.jsx("span", {
                                children: o("WAWebClock").Clock.durationStr(
                                  ie ? ne : re,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
          o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(l)
            ? d.jsxs(o("WAWebFlex.react").FlexRow, {
                justifySelf: "center",
                columnGap: 2,
                children: [De, Te],
              })
            : d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [Te, De] }),
        ],
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.mediaData,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMediaDataGetters").getPreview,
            o("WAWebMediaDataGetters").getFullPreviewData,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMediaDataValues").useMediaDataValues(n, a),
        l = i[0],
        s = i[1],
        u,
        c = !0;
      if (s) {
        var m;
        (t[1] !== s
          ? ((m = s instanceof r("WAWebMediaOpaqueData") ? s.url() : s),
            (t[1] = s),
            (t[2] = m))
          : (m = t[2]),
          (u = m),
          (c = !1));
      } else if (l != null) {
        var p;
        (t[3] !== l
          ? ((p = l instanceof r("WAWebMediaOpaqueData") ? l.url() : l),
            (t[3] = l),
            (t[4] = p))
          : (p = t[4]),
          (u = p));
      } else u = D;
      var _;
      t[5] !== c
        ? ((_ = {
            0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm",
            1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm x1df5jli",
          }[!!c << 0]),
          (t[5] = c),
          (t[6] = _))
        : (_ = t[6]);
      var f = "url(" + u + ")",
        g;
      t[7] !== f
        ? ((g = { backgroundImage: f }), (t[7] = f), (t[8] = g))
        : (g = t[8]);
      var h;
      return (
        t[9] !== _ || t[10] !== g
          ? ((h = d.jsx("div", { className: _, style: g })),
            (t[9] = _),
            (t[10] = g),
            (t[11] = h))
          : (h = t[11]),
        h
      );
    }
    function N(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.displayType,
        a = e.duration,
        i = e.getCurrentTime,
        l = e.isActive,
        s = e.isPlaying,
        u = e.isSentByMe,
        c;
      t[0] !== i
        ? ((c = function () {
            return i();
          }),
          (t[0] = i),
          (t[1] = c))
        : (c = t[1]);
      var m = g(c),
        p = m[0],
        _ = m[1],
        f = a == null ? 0 : p / a,
        h;
      t[2] !== i || t[3] !== p
        ? ((h = function () {
            var e = i();
            p !== e && _(e);
          }),
          (t[2] = i),
          (t[3] = p),
          (t[4] = h))
        : (h = t[4]);
      var y = l && s,
        C;
      (t[5] !== y ? ((C = { active: y }), (t[5] = y), (t[6] = C)) : (C = t[6]),
        r("useWAWebAnimationFrames")(h, C));
      var v = b;
      l && (v = n === "MSG_INFO" ? L : S);
      var R = l ? f : 0,
        E = u ? "outgoing" : "incoming",
        k;
      return (
        t[7] !== v || t[8] !== R || t[9] !== E
          ? ((k = d.jsx(o("WAWebSpinner.react").Spinner, {
              size: v,
              value: R,
              max: 1,
              color: "highlight",
              progressContainerColor: E,
              strokeLinecap: "butt",
              xstyle: x.animateDimensions,
            })),
            (t[7] = v),
            (t[8] = R),
            (t[9] = E),
            (t[10] = k))
          : (k = t[10]),
        k
      );
    }
    function M() {
      var e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
      return e === 0 ? 1 / 0 : e;
    }
    l.default = $;
  },
  226,
);
