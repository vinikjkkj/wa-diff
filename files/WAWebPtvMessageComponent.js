__d(
  "WAWebPtvMessageComponent",
  [
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
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePosition",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebPttFindSequentialMsg",
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
    "useWAWebIntersection",
    "useWAWebListener",
    "useWAWebMediaDataValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        paddingInlineStart9: { paddingInlineStart: "x7coems", $$css: !0 },
        paddingBottom3: { paddingBottom: "xg8j3zb", $$css: !0 },
      },
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
    function x(t) {
      var n,
        a,
        i = t.displayAuthor,
        l = t.displayType,
        u = t.mediaData,
        d = t.msg,
        h = t.position,
        y = t.quotedMsg,
        C = o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds"),
        b = _(null),
        v = f(0),
        S = v[0],
        R = v[1],
        L = f(!1),
        E = L[0],
        k = L[1],
        T = f(null),
        x = T[0],
        M = T[1],
        w = _(null),
        A = o("useWAWebMsgValues").useMsgValues(d.id, [
          (n = o("WAWebMsgGetters")).getId,
          n.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getHasReaction,
          n.getIsGroupHistoryMessageInOwnChat,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
        ]),
        F = A[0],
        O = A[1],
        B = A[2],
        W = A[3],
        q = A[4],
        U = A[5],
        V = o("WAWebFrontendMsgGetters").getChat(d.unsafe()),
        H = o("useWAWebMediaDataValues").useMediaDataValues(u, [
          (a = o("WAWebMediaDataGetters")).getMediaStage,
          a.getRenderableUrl,
          a.getSize,
          a.getPreview,
          a.getFullPreviewData,
        ]),
        G = H[0],
        z = H[1],
        j = H[2],
        K = H[3],
        Q = H[4],
        X = S,
        Y = x != null ? Math.min(x, C) : null,
        J = o("useWAWebSendViewCount").useSendViewCount(d.id, {
          mediaData: u,
          displayType: l,
        });
      (o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(d.id),
        p(
          function () {
            o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
              msg: o("WAWebStateUtils").unproxy(d),
              chat: V,
            });
          },
          [d, V],
        ));
      var Z = f(!1),
        ee = Z[0],
        te = Z[1],
        ne = _(null),
        re = _(null),
        oe = f(!1),
        ae = oe[0],
        ie = oe[1],
        le = m(
          function (t, n) {
            (te(t),
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
          [te],
        );
      o("useWAWebListener").useListener(document.body, ["click"], function (e) {
        e.defaultPrevented ||
          !ee ||
          !re.current ||
          (e.target instanceof Node && re.current.contains(e.target)) ||
          le(!1, "click-listener");
      });
      var se = m(
          function () {
            var e = b.current;
            if (e) {
              if (ee) {
                e.getPaused() ? e.play() : e.pause();
                return;
              }
              le(!0, "ptv-click");
            }
          },
          [ee],
        ),
        ue = m(
          function (e) {
            e.button !== 0 || ee || ie(!0);
          },
          [ee, ie],
        );
      (o("useWAWebListener").useListener(
        ae ? document.body : null,
        "mouseup",
        function () {
          ie(!1);
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "sequential_ptv_playback",
          function (e) {
            !b.current || !d.id.equals(e) || le(!0, "sequential-ptv-playback");
          },
        ));
      var ce = _(0),
        de = function () {
          var e = b.current;
          if (e) {
            if (!ee) {
              ((ce.current += 1), e.seek(0), ce.current < N() && e.play());
              return;
            }
            (e.seek(0), e.play(), le(!1, "loop"));
            var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(d);
            t && o("WAWebCmd").Cmd.playNextPtv(t.id);
          }
        },
        me = r("useWAWebIntersection")({ root: null, threshold: 0 }),
        pe = me[0],
        _e = me[1].isIntersecting,
        fe = _(null);
      (p(
        function () {
          var e = fe.current;
          if (((fe.current = _e), !_e && e === !0)) {
            var t = self.setTimeout(function () {
              var e;
              (e = b.current) == null || e.pause("product_initiated");
            }, 100);
            return (
              (ce.current = 0),
              function () {
                self.clearTimeout(t);
              }
            );
          }
        },
        [_e],
      ),
        p(
          function () {
            var e = ne.current;
            if (((ne.current = ee), ee && e === !1)) {
              var t = b.current;
              (t &&
                (t.seek(0),
                t.play(),
                o("WAWebMarkPlayedMsgAction").canMarkPlayed(d.unsafe()) &&
                  o("WAWebMarkPlayedMsgAction").markPlayed(d.unsafe())),
                (ce.current = 0));
            }
          },
          [ee, d],
        ));
      var ge = E,
        he = o("useWAWebDebouncedChanges").useDebouncedChanges({
          value: ge,
          debounceMs: 100,
          shouldDebounce: !ge,
        }),
        ye = ae && !ee,
        Ce = o("WAWebMsgCollection").MsgCollection.get(F),
        be = c.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
          isSentByMe: O,
          isTransparent: U,
          displayType: l,
          xstyle: q && D.groupHistoryMessage,
          children: c.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: d.id }),
        }),
        ve = c.jsx(c.Fragment, {
          children:
            l != null &&
            [
              o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            ].includes(l) &&
            Ce != null &&
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (s || (s = r("stylex"))).props(
                  o("WDSMargins.stylex").wdsMargins.marginStartAuto,
                ),
                {
                  children: c.jsx(r("WAWebAddOnBubblesContainer.react"), {
                    isOutgoingMsg: O,
                    displayType: l,
                    bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                      .STICKER_LIKE_MSG,
                    parentIds: [Ce.id.toString()],
                    hasReaction: W,
                  }),
                },
              ),
            ),
        });
      return c.jsxs("div", {
        ref: re,
        children: [
          i &&
            c.jsx(
              "div",
              babelHelpers.extends(
                { ref: w },
                (s || (s = r("stylex"))).props(
                  D.borderRadius,
                  D.boxShadow,
                  o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
                  g.paddingInlineStart9,
                  o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
                  g.paddingBottom3,
                  !o("WAWebDisplayType").isWideDisplay(l) && D.fitContent,
                  O ? D.authorIsMe : D.authorIsNotMe,
                  (h === o("WAWebMessagePosition").MsgPosition.FRONT ||
                    h === o("WAWebMessagePosition").MsgPosition.SINGLE) &&
                    D.isFirst,
                  q && D.groupHistoryMessage,
                ),
                {
                  children: c.jsx(r("WAWebMessageAuthor.react"), {
                    msgKey: d.id,
                    contact: B,
                    displayType: l,
                  }),
                },
              ),
            ),
          y &&
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (s || (s = r("stylex"))).props(
                  U ? D.quotedMsgContainer : null,
                  O ? D.quotedMsgContainerSender : D.quotedMsgContainerReceiver,
                  o("WDSMargins.stylex").wdsMargins.marginTop12,
                  o("WDSPaddings.stylex").wdsPaddings.padding4,
                ),
                { children: y },
              ),
            ),
          c.jsx(o("WAWebFlex.react").FlexRow, {
            ref: pe,
            justify: o("WAWebDisplayType").isWideDisplay(l)
              ? "center"
              : "start",
            className: {
              0: "x3oybdh x1d8287x x11xpdln",
              1: "x11xpdln x1jec706 x1pv9i8n",
            }[!!ye << 0],
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              className: (s || (s = r("stylex")))(
                D.ptvContainer,
                D.animateDimensions,
                o("WDSMargins.stylex").wdsMargins.marginTop12,
                o("WDSMargins.stylex").wdsMargins.marginBottom4,
                ee && l === "MSG_INFO" && D.activePtvContainerInMsgInfo,
                ee && l !== "MSG_INFO" && D.activePtvContainer,
              ),
              children: [
                c.jsx("div", {
                  className: "x10l6tqk x1rn7vjc xb51amx x1d8287x",
                  children: c.jsx(P, {
                    isActive: ee,
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
                    duration: Y,
                    isSentByMe: O,
                    displayType: l,
                  }),
                }),
                c.jsxs(r("WAWebUnstyledButton.react"), {
                  xstyle: [
                    D.videoContainer,
                    D.animateDimensions,
                    ee && l === "MSG_INFO" && D.activeVideoContainerInMsgInfo,
                    ee && l !== "MSG_INFO" && D.activeVideoContainer,
                  ],
                  onMouseDown: ee ? void 0 : ue,
                  onClick: se,
                  children: [
                    c.jsx($, { mediaData: u }),
                    c.jsx(r("WAWebPtvDownloadState.react"), {
                      mediaDataFileSize: j,
                      mediaStage: G,
                      isPlaying: he,
                      onDownloadClick: function () {
                        d.forceDownloadMediaEvenIfExpensive();
                      },
                    }),
                    G === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                      c.jsx("div", {
                        ref: J,
                        children: c.jsx(r("WAWebVideo.react"), {
                          ref: function (t) {
                            b.current = t != null ? t : null;
                          },
                          src: z,
                          xstyle: [D.video, ye && D.depressedVideo],
                          renderVideoPixelsFit: I,
                          muted: !ee,
                          autoPlay: !1,
                          disableAutoplayManagement: !0,
                          onAudioChannelRelease: function () {
                            le(!1, "audio-channel-release");
                          },
                          onLoadedData: function () {
                            var e, t;
                            M(
                              (e =
                                (t = b.current) == null
                                  ? void 0
                                  : t.getDuration()) != null
                                ? e
                                : null,
                            );
                          },
                          onEnded: de,
                          onStoppedPlaying: function () {
                            k(!1);
                          },
                          onPlaying: function () {
                            return k(!0);
                          },
                          onTimeUpdate: function (t) {
                            (R(t), t >= C && de());
                          },
                        }),
                      }),
                    Y != null &&
                      c.jsxs(c.Fragment, {
                        children: [
                          c.jsx("div", {
                            className:
                              "xh8yej3 x1jjfqgs x10l6tqk x1ey2m1c x2iuv4i xuzhngd xhtitgo",
                          }),
                          c.jsxs(o("WAWebFlex.react").FlexRow, {
                            justify: "center",
                            align: "center",
                            className:
                              "x10l6tqk x1wa3icf xh8yej3 x1awj2ng x1pg5gke x1xlr1w8 xhtitgo",
                            children: [
                              c.jsx(r("WDSIconIcVolumeOff.react"), {
                                height: 10,
                                testid: "muted",
                                width: 10,
                                xstyle: [
                                  D.muteIcon,
                                  ee || !he
                                    ? [
                                        D.muteIconHidden,
                                        o("WDSMargins.stylex").wdsMargins
                                          .marginEnd0,
                                      ]
                                    : o("WDSMargins.stylex").wdsMargins
                                        .marginEnd4,
                                ],
                              }),
                              c.jsx("span", {
                                children: o("WAWebClock").Clock.durationStr(
                                  ee ? X : Y,
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
            ? c.jsxs(o("WAWebFlex.react").FlexRow, {
                justifySelf: "center",
                columnGap: 2,
                children: [ve, be],
              })
            : c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [be, ve] }),
        ],
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
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
        d = !0;
      if (s) {
        var m;
        (t[1] !== s
          ? ((m = s instanceof r("WAWebMediaOpaqueData") ? s.url() : s),
            (t[1] = s),
            (t[2] = m))
          : (m = t[2]),
          (u = m),
          (d = !1));
      } else if (l != null) {
        var p;
        (t[3] !== l
          ? ((p = l instanceof r("WAWebMediaOpaqueData") ? l.url() : l),
            (t[3] = l),
            (t[4] = p))
          : (p = t[4]),
          (u = p));
      } else u = T;
      var _;
      t[5] !== d
        ? ((_ = {
            0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm",
            1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm x1df5jli",
          }[!!d << 0]),
          (t[5] = d),
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
          ? ((h = c.jsx("div", { className: _, style: g })),
            (t[9] = _),
            (t[10] = g),
            (t[11] = h))
          : (h = t[11]),
        h
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
        d;
      t[0] !== i
        ? ((d = function () {
            return i();
          }),
          (t[0] = i),
          (t[1] = d))
        : (d = t[1]);
      var m = f(d),
        p = m[0],
        _ = m[1],
        g = a == null ? 0 : p / a,
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
      var L = l ? g : 0,
        E = u ? "outgoing" : "incoming",
        k;
      return (
        t[7] !== S || t[8] !== L || t[9] !== E
          ? ((k = c.jsx(o("WAWebSpinner.react").Spinner, {
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
    function N() {
      var e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
      return e === 0 ? 1 / 0 : e;
    }
    l.default = x;
  },
  98,
);
