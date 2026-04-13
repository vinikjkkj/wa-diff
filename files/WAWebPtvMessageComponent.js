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
    "WAWebMiscGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMutedIcon.react",
    "WAWebPttFindSequentialMsg",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPtvDownloadState.react",
    "WAWebPtvGatingUtils",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVideo.react",
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
      h = 200,
      y = 4,
      C = h + y * 2,
      b = 320,
      v = b + y * 2,
      S = 300,
      R = S + y * 2,
      L = 10,
      E = 300,
      k = { objectFit: "cover" },
      I = function () {
        return k;
      },
      T = r("bx").getURL(r("bx")("10047")),
      D = {
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
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
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
    function x(t) {
      var n,
        a = t.displayAuthor,
        i = t.displayType,
        l = t.mediaData,
        c = t.msg,
        m = t.position,
        h = t.quotedMsg,
        y = o("WAWebPtvGatingUtils").getPtvMaxDurationSeconds(),
        C = o("WAWebMediaGatingUtils").isVideoCometVideoPlayerEnabled(),
        b = f(null),
        v = g(null),
        S = v[0],
        R = v[1],
        L = g(0),
        E = L[0],
        k = L[1],
        T = g(!1),
        x = T[0],
        N = T[1],
        M = g(null),
        w = M[0],
        A = M[1],
        F = f(null),
        O = o("useWAWebMsgValues").useMsgValues(c.id, [
          (n = o("WAWebMsgGetters")).getId,
          n.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getHasReaction,
          n.getGroupHistoryBundleMessageKey,
        ]),
        B = O[0],
        W = O[1],
        q = O[2],
        U = O[3],
        V = O[4],
        H = o("WAWebFrontendMsgGetters").getChat(c.unsafe()),
        G = o("useWAWebModelValues").useModelValues(l, [
          "mediaStage",
          "renderableUrl",
          "size",
          "preview",
          "fullPreviewData",
        ]),
        z = r("useWAWebEventTargetValue")(
          C ? null : S,
          "timeupdate",
          function () {
            return S ? S.currentTime : 0;
          },
        ),
        j = C ? E : z,
        K = S
          ? Math.min(
              o(
                "WAWebPttGetDurationFromMediaOrProtobuf",
              ).getDurationFromMediaOrProtobuf(S, l),
              y,
            )
          : null;
      C && w != null && (K = Math.min(w, y));
      var Q = o("useWAWebSendViewCount").useSendViewCount(c.id, {
        mediaData: l,
        displayType: i,
      });
      (o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(c),
        _(
          function () {
            o("WAWebMiscGatingUtils").isHighQualityVideoThumbnailsEnabled() &&
              o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
                msg: o("WAWebStateUtils").unproxy(c),
                chat: H,
              });
          },
          [c, H],
        ));
      var X = g(!1),
        Y = X[0],
        J = X[1],
        Z = r("useWAWebPrevious")(Y),
        ee = f(null),
        te = g(!1),
        ne = te[0],
        re = te[1],
        oe = p(
          function (t, n) {
            (J(t),
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
          [J],
        );
      o("useWAWebListener").useListener(document.body, ["click"], function (e) {
        e.defaultPrevented ||
          !Y ||
          !ee.current ||
          ee.current.contains(e.target) ||
          oe(!1, "click-listener");
      });
      var ae = p(
          function () {
            var e = b.current;
            if (e) {
              if (Y) {
                e.getPaused() ? e.play() : e.pause();
                return;
              }
              oe(!0, "ptv-click");
            }
          },
          [Y],
        ),
        ie = p(
          function (e) {
            e.button !== 0 || Y || re(!0);
          },
          [Y, re],
        );
      (o("useWAWebListener").useListener(
        ne ? document.body : null,
        "mouseup",
        function () {
          re(!1);
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "sequential_ptv_playback",
          function (e) {
            !b.current || !c.id.equals(e) || oe(!0, "sequential-ptv-playback");
          },
        ));
      var le = f(0),
        se = function () {
          if (!Y) {
            if (
              ((le.current += 1),
              le.current >= o("WAWebPtvGatingUtils").getPtvAutoplayLoopLimit())
            ) {
              var e;
              (e = b.current) == null || e.pause("product_initiated");
            }
            return;
          }
          oe(!1, "loop");
          var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(c);
          t && o("WAWebCmd").Cmd.playNextPtv(t.id);
        },
        ue = function () {
          var e = b.current;
          if (e) {
            if (!Y) {
              ((le.current += 1),
                e.seek(0),
                le.current <
                  o("WAWebPtvGatingUtils").getPtvAutoplayLoopLimit() &&
                  e.play());
              return;
            }
            (e.seek(0), e.play(), oe(!1, "loop"));
            var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(c);
            t && o("WAWebCmd").Cmd.playNextPtv(t.id);
          }
        };
      o("useWAWebListener").useListener(
        C ? null : S,
        "timeupdate",
        function () {
          S && S.currentTime >= y && ((S.currentTime = 0), se());
        },
      );
      var ce = r("useWAWebIntersection")({ root: null, threshold: 0 }),
        de = ce[0],
        me = ce[1].isIntersecting,
        pe = r("useWAWebPrevious")(me);
      !me &&
        pe === !0 &&
        (self.setTimeout(function () {
          var e;
          (e = b.current) == null || e.pause("product_initiated");
        }, 100),
        (le.current = 0));
      var _e = function () {
        if (o("WAWebPtvGatingUtils").isPtvAutoplayEnabled()) {
          var e;
          (e = b.current) == null || e.play("product_initiated");
        }
      };
      (me &&
        pe === !1 &&
        self.setTimeout(function () {
          Y || _e();
        }, 100),
        _(
          function () {
            if (Y && Z === !1) {
              var e = b.current;
              (e &&
                (e.seek(0),
                e.play(),
                o("WAWebMarkPlayedMsgAction").canMarkPlayed(c.unsafe()) &&
                  o("WAWebMarkPlayedMsgAction").markPlayed(c.unsafe())),
                (le.current = 0));
            }
          },
          [Y, c, Z],
        ));
      var fe = r("useWAWebEventTargetValue")(
          C ? null : S,
          ["playing", "pause"],
          function () {
            return S ? !S.paused : !0;
          },
        ),
        ge = C ? x : fe,
        he = o("useWAWebDebouncedChanges").useDebouncedChanges({
          value: ge,
          debounceMs: 100,
          shouldDebounce: !ge,
        }),
        ye = ne && !Y,
        Ce = o("WAWebMsgCollection").MsgCollection.get(B),
        be = d.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
          isSentByMe: W,
          isTransparent: !0,
          displayType: i,
          xstyle: V != null && D.groupHistoryMessage,
          children: d.jsx(o("WAWebMessageMeta.react").Meta, { msg: c }),
        }),
        ve = d.jsx(d.Fragment, {
          children:
            i != null &&
            [
              o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            ].includes(i) &&
            Ce != null &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.startAuto,
                ),
                {
                  children: d.jsx(r("WAWebAddOnBubblesContainer.react"), {
                    isOutgoingMsg: W,
                    displayType: i,
                    bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                      .STICKER_LIKE_MSG,
                    parentIds: [Ce.id.toString()],
                    hasReaction: U,
                  }),
                },
              ),
            ),
        });
      return d.jsxs("div", {
        ref: ee,
        children: [
          a &&
            d.jsx(
              "div",
              babelHelpers.extends(
                { ref: F },
                (u || (u = r("stylex"))).props(
                  D.borderRadius,
                  D.boxShadow,
                  o("WAWebUISpacing").uiPadding.top4,
                  o("WAWebUISpacing").uiPadding.start9,
                  o("WAWebUISpacing").uiPadding.end8,
                  o("WAWebUISpacing").uiPadding.bottom3,
                  !o("WAWebDisplayType").isWideDisplay(i) && D.fitContent,
                  W ? D.authorIsMe : D.authorIsNotMe,
                  (m === o("WAWebMessagePosition").MsgPosition.FRONT ||
                    m === o("WAWebMessagePosition").MsgPosition.SINGLE) &&
                    D.isFirst,
                  V != null && D.groupHistoryMessage,
                ),
                {
                  children: d.jsx(r("WAWebMessageAuthor.react"), {
                    msg: c,
                    contact: q,
                    displayType: i,
                  }),
                },
              ),
            ),
          h &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  D.quotedMsgContainer,
                  W ? D.quotedMsgContainerSender : D.quotedMsgContainerReceiver,
                  o("WAWebUISpacing").uiMargin.top12,
                  o("WAWebUISpacing").uiPadding.all4,
                ),
                { children: h },
              ),
            ),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            ref: de,
            justify: o("WAWebDisplayType").isWideDisplay(i)
              ? "center"
              : "start",
            className: {
              0: "x3oybdh x1d8287x x11xpdln",
              1: "x11xpdln x1jec706 x1pv9i8n",
            }[!!ye << 0],
            children: d.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              className: (u || (u = r("stylex")))(
                D.ptvContainer,
                D.animateDimensions,
                o("WAWebUISpacing").uiMargin.top12,
                o("WAWebUISpacing").uiMargin.bottom4,
                Y && i === "MSG_INFO" && D.activePtvContainerInMsgInfo,
                Y && i !== "MSG_INFO" && D.activePtvContainer,
              ),
              children: [
                d.jsx("div", {
                  className: "x10l6tqk x1rn7vjc xb51amx x1d8287x",
                  children: d.jsx(P, {
                    isActive: Y,
                    getCurrentTime: function () {
                      var e, t;
                      return (e =
                        (t = b.current) == null
                          ? void 0
                          : t.getCurrentTime()) != null
                        ? e
                        : 0;
                    },
                    isPlaying: ge,
                    duration: K,
                    isSentByMe: W,
                    displayType: i,
                  }),
                }),
                d.jsxs(r("WAWebUnstyledButton.react"), {
                  xstyle: [
                    D.videoContainer,
                    D.animateDimensions,
                    Y && i === "MSG_INFO" && D.activeVideoContainerInMsgInfo,
                    Y && i !== "MSG_INFO" && D.activeVideoContainer,
                  ],
                  onMouseDown: Y ? void 0 : ie,
                  onClick: ae,
                  children: [
                    d.jsx($, { mediaData: l }),
                    d.jsx(r("WAWebPtvDownloadState.react"), {
                      mediaDataFileSize: G.size,
                      mediaStage: G.mediaStage,
                      isPlaying: he,
                      onDownloadClick: function () {
                        c.forceDownloadMediaEvenIfExpensive();
                      },
                    }),
                    G.mediaStage ===
                      o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                      d.jsx("div", {
                        ref: Q,
                        children: d.jsx(r("WAWebVideo.react"), {
                          ref: function (t) {
                            if (((b.current = t != null ? t : null), !C)) {
                              var e;
                              R(
                                (e =
                                  t == null ? void 0 : t.underlyingVideo()) !=
                                  null
                                  ? e
                                  : null,
                              );
                            }
                          },
                          src: G.renderableUrl,
                          xstyle: [D.video, ye && D.depressedVideo],
                          renderVideoPixelsFit: I,
                          muted: !Y,
                          autoPlay:
                            !C &&
                            o("WAWebPtvGatingUtils").isPtvAutoplayEnabled(),
                          disableAutoplayManagement: C,
                          loop: !C,
                          onAudioChannelRelease: function () {
                            oe(!1, "audio-channel-release");
                          },
                          onLoadedData: C
                            ? function () {
                                var e, t;
                                if (
                                  o(
                                    "WAWebPtvGatingUtils",
                                  ).isPtvAutoplayEnabled()
                                ) {
                                  var n;
                                  (n = b.current) == null ||
                                    n.play("product_initiated");
                                }
                                A(
                                  (e =
                                    (t = b.current) == null
                                      ? void 0
                                      : t.getDuration()) != null
                                    ? e
                                    : null,
                                );
                              }
                            : void 0,
                          onEnded: C ? ue : void 0,
                          onLoop: C ? void 0 : se,
                          onStoppedPlaying: C
                            ? function () {
                                N(!1);
                              }
                            : void 0,
                          onPlaying: C
                            ? function () {
                                return N(!0);
                              }
                            : void 0,
                          onTimeUpdate: C
                            ? function (e) {
                                (k(e), e >= y && ue());
                              }
                            : void 0,
                          children: s._(
                            /*BTDS*/ "Your browser doesn't support video playback.",
                          ),
                        }),
                      }),
                    K != null &&
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
                                  D.muteIcon,
                                  Y || !he
                                    ? [
                                        D.muteIconHidden,
                                        o("WAWebUISpacing").uiMargin.end0,
                                      ]
                                    : o("WAWebUISpacing").uiMargin.end4,
                                ],
                              }),
                              d.jsx("span", {
                                children: o("WAWebClock").Clock.durationStr(
                                  Y ? j : K,
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
                children: [ve, be],
              })
            : d.jsxs(o("WAWebFlex.react").FlexColumn, { children: [be, ve] }),
        ],
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
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
      } else l = T;
      var m;
      t[5] !== s
        ? ((m = {
            0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm",
            1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm x14tgpju",
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
    function P(e) {
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
        b;
      (t[5] !== y ? ((b = { active: y }), (t[5] = y), (t[6] = b)) : (b = t[6]),
        r("useWAWebAnimationFrames")(h, b));
      var S = C;
      l && (S = n === "MSG_INFO" ? R : v);
      var L = l ? f : 0,
        E = u ? "outgoing" : "incoming",
        k;
      return (
        t[7] !== S || t[8] !== L || t[9] !== E
          ? ((k = d.jsx(o("WAWebSpinner.react").Spinner, {
              size: S,
              value: L,
              max: 1,
              color: "highlight",
              progressContainerColor: E,
              strokeLinecap: "butt",
              xstyle: D.animateDimensions,
            })),
            (t[7] = S),
            (t[8] = L),
            (t[9] = E),
            (t[10] = k))
          : (k = t[10]),
        k
      );
    }
    l.default = x;
  },
  226,
);
