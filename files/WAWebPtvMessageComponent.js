__d(
  "WAWebPtvMessageComponent",
  [
    "fbt",
    "WALogger",
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
    "WAWebMediaGatingUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePosition",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMutedIcon.react",
    "WAWebPttFindSequentialMsg",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPtvDownloadState.react",
    "WAWebPtvGatingUtils",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebUnstyledButton.react",
    "WAWebVideo.react",
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
    "useWAWebModelValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebPrevious",
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
        a = t.displayAuthor,
        i = t.displayType,
        l = t.mediaData,
        c = t.msg,
        m = t.position,
        y = t.quotedMsg,
        C = o("WAWebPtvGatingUtils").getPtvMaxDurationSeconds(),
        b = o("WAWebMediaGatingUtils").isVideoCometVideoPlayerEnabled(),
        v = f(null),
        S = g(null),
        R = S[0],
        L = S[1],
        E = g(0),
        k = E[0],
        I = E[1],
        D = g(!1),
        $ = D[0],
        M = D[1],
        w = g(null),
        A = w[0],
        F = w[1],
        O = f(null),
        B = o("useWAWebMsgValues").useMsgValues(c.id, [
          (n = o("WAWebMsgGetters")).getId,
          n.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getHasReaction,
          n.getGroupHistoryBundleMessageKey,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
        ]),
        W = B[0],
        q = B[1],
        U = B[2],
        V = B[3],
        H = B[4],
        G = B[5],
        z = o("WAWebFrontendMsgGetters").getChat(c.unsafe()),
        j = o("useWAWebModelValues").useModelValues(l, [
          "mediaStage",
          "renderableUrl",
          "size",
          "preview",
          "fullPreviewData",
        ]),
        K = r("useWAWebEventTargetValue")(
          b ? null : R,
          "timeupdate",
          function () {
            return R ? R.currentTime : 0;
          },
        ),
        Q = b ? k : K,
        X = R
          ? Math.min(
              o(
                "WAWebPttGetDurationFromMediaOrProtobuf",
              ).getDurationFromMediaOrProtobuf(R, l),
              C,
            )
          : null;
      b && A != null && (X = Math.min(A, C));
      var Y = o("useWAWebSendViewCount").useSendViewCount(c.id, {
        mediaData: l,
        displayType: i,
      });
      (o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(c),
        _(
          function () {
            o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
              msg: o("WAWebStateUtils").unproxy(c),
              chat: z,
            });
          },
          [c, z],
        ));
      var J = g(!1),
        Z = J[0],
        ee = J[1],
        te = r("useWAWebPrevious")(Z),
        ne = f(null),
        re = g(!1),
        oe = re[0],
        ae = re[1],
        ie = p(
          function (t, n) {
            (ee(t),
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
          [ee],
        );
      o("useWAWebListener").useListener(document.body, ["click"], function (e) {
        e.defaultPrevented ||
          !Z ||
          !ne.current ||
          ne.current.contains(e.target) ||
          ie(!1, "click-listener");
      });
      var le = p(
          function () {
            var e = v.current;
            if (e) {
              if (Z) {
                e.getPaused() ? e.play() : e.pause();
                return;
              }
              ie(!0, "ptv-click");
            }
          },
          [Z],
        ),
        se = p(
          function (e) {
            e.button !== 0 || Z || ae(!0);
          },
          [Z, ae],
        );
      (o("useWAWebListener").useListener(
        oe ? document.body : null,
        "mouseup",
        function () {
          ae(!1);
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "sequential_ptv_playback",
          function (e) {
            !v.current || !c.id.equals(e) || ie(!0, "sequential-ptv-playback");
          },
        ));
      var ue = f(0),
        ce = function () {
          if (!Z) {
            if (
              ((ue.current += 1),
              ue.current >= o("WAWebPtvGatingUtils").getPtvAutoplayLoopLimit())
            ) {
              var e;
              (e = v.current) == null || e.pause("product_initiated");
            }
            return;
          }
          ie(!1, "loop");
          var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(c);
          t && o("WAWebCmd").Cmd.playNextPtv(t.id);
        },
        de = function () {
          var e = v.current;
          if (e) {
            if (!Z) {
              ((ue.current += 1),
                e.seek(0),
                ue.current <
                  o("WAWebPtvGatingUtils").getPtvAutoplayLoopLimit() &&
                  e.play());
              return;
            }
            (e.seek(0), e.play(), ie(!1, "loop"));
            var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(c);
            t && o("WAWebCmd").Cmd.playNextPtv(t.id);
          }
        };
      o("useWAWebListener").useListener(
        b ? null : R,
        "timeupdate",
        function () {
          R && R.currentTime >= C && ((R.currentTime = 0), ce());
        },
      );
      var me = r("useWAWebIntersection")({ root: null, threshold: 0 }),
        pe = me[0],
        _e = me[1].isIntersecting,
        fe = r("useWAWebPrevious")(_e);
      (!_e &&
        fe === !0 &&
        (self.setTimeout(function () {
          var e;
          (e = v.current) == null || e.pause("product_initiated");
        }, 100),
        (ue.current = 0)),
        _(
          function () {
            if (Z && te === !1) {
              var e = v.current;
              (e &&
                (e.seek(0),
                e.play(),
                o("WAWebMarkPlayedMsgAction").canMarkPlayed(c.unsafe()) &&
                  o("WAWebMarkPlayedMsgAction").markPlayed(c.unsafe())),
                (ue.current = 0));
            }
          },
          [Z, c, te],
        ));
      var ge = r("useWAWebEventTargetValue")(
          b ? null : R,
          ["playing", "pause"],
          function () {
            return R ? !R.paused : !0;
          },
        ),
        he = b ? $ : ge,
        ye = o("useWAWebDebouncedChanges").useDebouncedChanges({
          value: he,
          debounceMs: 100,
          shouldDebounce: !he,
        }),
        Ce = oe && !Z,
        be = o("WAWebMsgCollection").MsgCollection.get(W),
        ve = d.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
          isSentByMe: q,
          isTransparent: G,
          displayType: i,
          xstyle: H != null && x.groupHistoryMessage,
          children: d.jsx(o("WAWebMessageMeta.react").Meta, { msg: c }),
        }),
        Se = d.jsx(d.Fragment, {
          children:
            i != null &&
            [
              o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            ].includes(i) &&
            be != null &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WDSMargins.stylex").wdsMargins.marginStartAuto,
                ),
                {
                  children: d.jsx(r("WAWebAddOnBubblesContainer.react"), {
                    isOutgoingMsg: q,
                    displayType: i,
                    bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                      .STICKER_LIKE_MSG,
                    parentIds: [be.id.toString()],
                    hasReaction: V,
                  }),
                },
              ),
            ),
        });
      return d.jsxs("div", {
        ref: ne,
        children: [
          a &&
            d.jsx(
              "div",
              babelHelpers.extends(
                { ref: O },
                (u || (u = r("stylex"))).props(
                  x.borderRadius,
                  x.boxShadow,
                  o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
                  h.paddingInlineStart9,
                  o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
                  h.paddingBottom3,
                  !o("WAWebDisplayType").isWideDisplay(i) && x.fitContent,
                  q ? x.authorIsMe : x.authorIsNotMe,
                  (m === o("WAWebMessagePosition").MsgPosition.FRONT ||
                    m === o("WAWebMessagePosition").MsgPosition.SINGLE) &&
                    x.isFirst,
                  H != null && x.groupHistoryMessage,
                ),
                {
                  children: d.jsx(r("WAWebMessageAuthor.react"), {
                    msg: c,
                    contact: U,
                    displayType: i,
                  }),
                },
              ),
            ),
          y &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  G ? x.quotedMsgContainer : null,
                  q ? x.quotedMsgContainerSender : x.quotedMsgContainerReceiver,
                  o("WDSMargins.stylex").wdsMargins.marginTop12,
                  o("WDSPaddings.stylex").wdsPaddings.padding4,
                ),
                { children: y },
              ),
            ),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            ref: pe,
            justify: o("WAWebDisplayType").isWideDisplay(i)
              ? "center"
              : "start",
            className: {
              0: "x3oybdh x1d8287x x11xpdln",
              1: "x11xpdln x1jec706 x1pv9i8n",
            }[!!Ce << 0],
            children: d.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              className: (u || (u = r("stylex")))(
                x.ptvContainer,
                x.animateDimensions,
                o("WDSMargins.stylex").wdsMargins.marginTop12,
                o("WDSMargins.stylex").wdsMargins.marginBottom4,
                Z && i === "MSG_INFO" && x.activePtvContainerInMsgInfo,
                Z && i !== "MSG_INFO" && x.activePtvContainer,
              ),
              children: [
                d.jsx("div", {
                  className: "x10l6tqk x1rn7vjc xb51amx x1d8287x",
                  children: d.jsx(N, {
                    isActive: Z,
                    getCurrentTime: function () {
                      var e, t;
                      return (e =
                        (t = v.current) == null
                          ? void 0
                          : t.getCurrentTime()) != null
                        ? e
                        : 0;
                    },
                    isPlaying: he,
                    duration: X,
                    isSentByMe: q,
                    displayType: i,
                  }),
                }),
                d.jsxs(r("WAWebUnstyledButton.react"), {
                  xstyle: [
                    x.videoContainer,
                    x.animateDimensions,
                    Z && i === "MSG_INFO" && x.activeVideoContainerInMsgInfo,
                    Z && i !== "MSG_INFO" && x.activeVideoContainer,
                  ],
                  onMouseDown: Z ? void 0 : se,
                  onClick: le,
                  children: [
                    d.jsx(P, { mediaData: l }),
                    d.jsx(r("WAWebPtvDownloadState.react"), {
                      mediaDataFileSize: j.size,
                      mediaStage: j.mediaStage,
                      isPlaying: ye,
                      onDownloadClick: function () {
                        c.forceDownloadMediaEvenIfExpensive();
                      },
                    }),
                    j.mediaStage ===
                      o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                      d.jsx("div", {
                        ref: Y,
                        children: d.jsx(r("WAWebVideo.react"), {
                          ref: function (t) {
                            if (((v.current = t != null ? t : null), !b)) {
                              var e;
                              L(
                                (e =
                                  t == null ? void 0 : t.underlyingVideo()) !=
                                  null
                                  ? e
                                  : null,
                              );
                            }
                          },
                          src: j.renderableUrl,
                          xstyle: [x.video, Ce && x.depressedVideo],
                          renderVideoPixelsFit: T,
                          muted: !Z,
                          autoPlay: !1,
                          disableAutoplayManagement: b,
                          loop: !b,
                          onAudioChannelRelease: function () {
                            ie(!1, "audio-channel-release");
                          },
                          onLoadedData: b
                            ? function () {
                                var e, t;
                                F(
                                  (e =
                                    (t = v.current) == null
                                      ? void 0
                                      : t.getDuration()) != null
                                    ? e
                                    : null,
                                );
                              }
                            : void 0,
                          onEnded: b ? de : void 0,
                          onLoop: b ? void 0 : ce,
                          onStoppedPlaying: b
                            ? function () {
                                M(!1);
                              }
                            : void 0,
                          onPlaying: b
                            ? function () {
                                return M(!0);
                              }
                            : void 0,
                          onTimeUpdate: b
                            ? function (e) {
                                (I(e), e >= C && de());
                              }
                            : void 0,
                          children: s._(
                            /*BTDS*/ "Your browser doesn't support video playback.",
                          ),
                        }),
                      }),
                    X != null &&
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
                              d.jsx(o("WAWebMutedIcon.react").MutedIcon, {
                                width: 10,
                                xstyle: [
                                  x.muteIcon,
                                  Z || !ye
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
                                  Z ? Q : X,
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
          o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(i)
            ? d.jsxs(o("WAWebFlex.react").FlexRow, {
                justifySelf: "center",
                columnGap: 2,
                children: [Se, ve],
              })
            : d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [ve, Se] }),
        ],
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.mediaData,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["preview", "fullPreviewData"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l,
        s = !0;
      if (i.fullPreviewData) {
        var u;
        (t[1] !== i.fullPreviewData
          ? ((u =
              i.fullPreviewData instanceof r("WAWebMediaOpaqueData")
                ? i.fullPreviewData.url()
                : i.fullPreviewData),
            (t[1] = i.fullPreviewData),
            (t[2] = u))
          : (u = t[2]),
          (l = u),
          (s = !1));
      } else if (i.preview != null) {
        var c;
        (t[3] !== i.preview
          ? ((c =
              i.preview instanceof r("WAWebMediaOpaqueData")
                ? i.preview.url()
                : i.preview),
            (t[3] = i.preview),
            (t[4] = c))
          : (c = t[4]),
          (l = c));
      } else l = D;
      var m;
      t[5] !== s
        ? ((m = {
            0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm",
            1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm x1df5jli",
          }[!!s << 0]),
          (t[5] = s),
          (t[6] = m))
        : (m = t[6]);
      var p = "url(" + l + ")",
        _;
      t[7] !== p
        ? ((_ = { backgroundImage: p }), (t[7] = p), (t[8] = _))
        : (_ = t[8]);
      var f;
      return (
        t[9] !== m || t[10] !== _
          ? ((f = d.jsx("div", { className: m, style: _ })),
            (t[9] = m),
            (t[10] = _),
            (t[11] = f))
          : (f = t[11]),
        f
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
    l.default = $;
  },
  226,
);
