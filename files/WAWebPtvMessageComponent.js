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
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
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
        ptvOuterContainer: {
          transform: "x3oybdh",
          transitionDuration: "x1d8287x",
          transitionProperty: "x11xpdln",
          $$css: !0,
        },
        depressed: {
          transform: "x1jec706",
          transitionDuration: "x1pv9i8n",
          $$css: !0,
        },
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
        videoTimestamp: {
          position: "x10l6tqk",
          bottom: "x1wa3icf",
          width: "xh8yej3",
          color: "x1awj2ng",
          fontSize: "x1pg5gke",
          fontWeight: "x1xlr1w8",
          zIndex: "xhtitgo",
          $$css: !0,
        },
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
    function x(e) {
      var t,
        n,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.mediaData,
        u = e.msgKey,
        d = e.position,
        h = e.quotedMsg,
        y = o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds"),
        C = _(null),
        b = f(0),
        v = b[0],
        S = b[1],
        R = f(!1),
        L = R[0],
        E = R[1],
        k = f(null),
        T = k[0],
        x = k[1],
        w = _(null),
        A = o("useWAWebMsgValues").useMsgValues(
          u,
          o("WAWebMsgCasts").castToPtvMsg,
          [
            (t = o("WAWebMsgGetters")).getId,
            t.getIsSentByMe,
            t.getHasReaction,
            t.getIsGroupHistoryMessageInOwnChat,
            t.getIsNewsletterMsg,
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebFrontendMsgGetters").getIsTransparentMsg,
          ],
        ),
        F = A[0],
        O = A[1],
        B = A[2],
        W = A[3],
        q = A[4],
        U = A[5],
        V = A[6],
        H = o("useWAWebMediaDataValues").useMediaDataValues(l, [
          (n = o("WAWebMediaDataGetters")).getMediaStage,
          n.getRenderableUrl,
          n.getSize,
          n.getPreview,
          n.getFullPreviewData,
        ]),
        G = H[0],
        z = H[1],
        j = H[2],
        K = H[3],
        Q = H[4],
        X = v,
        Y = T != null ? Math.min(T, y) : null,
        J = o("useWAWebSendViewCount").useSendViewCount(u, {
          mediaData: l,
          displayType: i,
        });
      (o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(u),
        p(
          function () {
            var e,
              t =
                (e = o("WAWebMsgCollection").MsgCollection.get(u)) == null
                  ? void 0
                  : e.safe();
            t == null ||
              t.type !== o("WAWebMsgType").MSG_TYPE.PTV ||
              o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
                msg: o("WAWebStateUtils").unproxy(t),
                chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              });
          },
          [u],
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
          function (e, t) {
            (te(e), $(e, t));
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
            var e = C.current;
            if (e) {
              if (ee) {
                e.getPaused() ? e.play() : e.pause();
                return;
              }
              le(!0, "ptv-click");
            }
          },
          [ee, le],
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
            !C.current || !u.equals(e) || le(!0, "sequential-ptv-playback");
          },
        ));
      var ce = _(0),
        de = function () {
          var e = C.current;
          if (e) {
            if (!ee) {
              ((ce.current += 1), e.seek(0), ce.current < M() && e.play());
              return;
            }
            (e.seek(0), e.play(), le(!1, "loop"));
            var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(u, q);
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
              (e = C.current) == null || e.pause("product_initiated");
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
              var t = C.current;
              if (t) {
                (t.seek(0), t.play());
                var n = o("WAWebMsgCollection").MsgCollection.get(u);
                n != null &&
                  o("WAWebMarkPlayedMsgAction").canMarkPlayed(n) &&
                  o("WAWebMarkPlayedMsgAction").markPlayed(n);
              }
              ce.current = 0;
            }
          },
          [ee, u],
        ));
      var ge = L,
        he = o("useWAWebDebouncedChanges").useDebouncedChanges({
          value: ge,
          debounceMs: 100,
          shouldDebounce: !ge,
        }),
        ye = ae && !ee,
        Ce = o("WAWebMsgCollection").MsgCollection.get(F),
        be = c.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
          isSentByMe: O,
          isTransparent: V,
          displayType: i,
          xstyle: W && D.groupHistoryMessage,
          children: c.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: u }),
        }),
        ve = c.jsx(c.Fragment, {
          children:
            i != null &&
            [
              o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            ].includes(i) &&
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
                    displayType: i,
                    bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                      .STICKER_LIKE_MSG,
                    parentIds: [Ce.id.toString()],
                    hasReaction: B,
                  }),
                },
              ),
            ),
        });
      return c.jsxs("div", {
        ref: re,
        children: [
          a &&
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
                  !o("WAWebDisplayType").isWideDisplay(i) && D.fitContent,
                  O ? D.authorIsMe : D.authorIsNotMe,
                  (d === o("WAWebMessagePosition").MsgPosition.FRONT ||
                    d === o("WAWebMessagePosition").MsgPosition.SINGLE) &&
                    D.isFirst,
                  W && D.groupHistoryMessage,
                ),
                {
                  children: c.jsx(r("WAWebMessageAuthor.react"), {
                    msgKey: u,
                    contact: U,
                    displayType: i,
                  }),
                },
              ),
            ),
          h &&
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (s || (s = r("stylex"))).props(
                  V ? D.quotedMsgContainer : null,
                  O ? D.quotedMsgContainerSender : D.quotedMsgContainerReceiver,
                  o("WDSMargins.stylex").wdsMargins.marginTop12,
                  o("WDSPaddings.stylex").wdsPaddings.padding4,
                ),
                { children: h },
              ),
            ),
          c.jsx(o("WAWebFlex.react").FlexRow, {
            ref: pe,
            justify: o("WAWebDisplayType").isWideDisplay(i)
              ? "center"
              : "start",
            xstyle: [D.ptvOuterContainer, ye && D.depressed],
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              xstyle: [
                D.ptvContainer,
                D.animateDimensions,
                o("WDSMargins.stylex").wdsMargins.marginTop12,
                o("WDSMargins.stylex").wdsMargins.marginBottom4,
                ee && i === "MSG_INFO" && D.activePtvContainerInMsgInfo,
                ee && i !== "MSG_INFO" && D.activePtvContainer,
              ],
              children: [
                c.jsx("div", {
                  className: "x10l6tqk x78zum5 x1rn7vjc xb51amx x1d8287x",
                  children: c.jsx(N, {
                    isActive: ee,
                    getCurrentTime: function () {
                      var e, t;
                      return (e =
                        (t = C.current) == null
                          ? void 0
                          : t.getCurrentTime()) != null
                        ? e
                        : 0;
                    },
                    isPlaying: ge,
                    duration: Y,
                    isSentByMe: O,
                    displayType: i,
                  }),
                }),
                c.jsxs(r("WAWebUnstyledButton.react"), {
                  xstyle: [
                    D.videoContainer,
                    D.animateDimensions,
                    ee && i === "MSG_INFO" && D.activeVideoContainerInMsgInfo,
                    ee && i !== "MSG_INFO" && D.activeVideoContainer,
                  ],
                  onMouseDown: ee ? void 0 : ue,
                  onClick: se,
                  children: [
                    c.jsx(P, { mediaData: l }),
                    c.jsx(r("WAWebPtvDownloadState.react"), {
                      mediaDataFileSize: j,
                      mediaStage: G,
                      isPlaying: he,
                      onDownloadClick: function () {
                        var e;
                        (e = o("WAWebMsgCollection").MsgCollection.get(u)) ==
                          null || e.forceDownloadMediaEvenIfExpensive();
                      },
                    }),
                    G === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                      c.jsx("div", {
                        ref: J,
                        children: c.jsx(r("WAWebVideo.react"), {
                          ref: function (t) {
                            C.current = t != null ? t : null;
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
                            x(
                              (e =
                                (t = C.current) == null
                                  ? void 0
                                  : t.getDuration()) != null
                                ? e
                                : null,
                            );
                          },
                          onEnded: de,
                          onStoppedPlaying: function () {
                            E(!1);
                          },
                          onPlaying: function () {
                            return E(!0);
                          },
                          onTimeUpdate: function (t) {
                            (S(t), t >= y && de());
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
                            xstyle: D.videoTimestamp,
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
          o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(i)
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
    function $(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "PtvMessageComponent: setIsActive: ",
            " from ",
            "",
          ])),
        t,
        n,
      );
    }
    function P(e) {
      var t = e.mediaData,
        n = o("useWAWebMediaDataValues").useMediaDataValues(t, [
          o("WAWebMediaDataGetters").getPreview,
          o("WAWebMediaDataGetters").getFullPreviewData,
        ]),
        a = n[0],
        i = n[1],
        l,
        s = !0;
      return (
        i
          ? ((l = i instanceof r("WAWebMediaOpaqueData") ? i.url() : i),
            (s = !1))
          : a != null
            ? (l = a instanceof r("WAWebMediaOpaqueData") ? a.url() : a)
            : (l = T),
        c.jsx("div", {
          className: {
            0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm",
            1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm x1df5jli",
          }[!!s << 0],
          style: { backgroundImage: "url(" + l + ")" },
        })
      );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      var t = e.displayType,
        n = e.duration,
        a = e.getCurrentTime,
        i = e.isActive,
        l = e.isPlaying,
        s = e.isSentByMe,
        u = f(function () {
          return a();
        }),
        d = u[0],
        m = u[1],
        p = n == null ? 0 : d / n;
      r("useWAWebAnimationFrames")(
        function () {
          var e = a();
          d !== e && m(e);
        },
        { active: i && l },
      );
      var _ = C;
      return (
        i && (_ = t === "MSG_INFO" ? R : v),
        c.jsx(o("WAWebSpinner.react").Spinner, {
          size: _,
          value: i ? p : 0,
          max: 1,
          color: "highlight",
          progressContainerColor: s ? "outgoing" : "incoming",
          strokeLinecap: "butt",
          xstyle: D.animateDimensions,
        })
      );
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      var e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
      return e === 0 ? 1 / 0 : e;
    }
    l.default = x;
  },
  98,
);
