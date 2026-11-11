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
      var t = o("react-compiler-runtime").c(128),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.mediaData,
        l = e.msgKey,
        u = e.position,
        d = e.quotedMsg,
        m = o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds"),
        h = _(null),
        y = f(0),
        C = y[0],
        b = y[1],
        v = f(!1),
        S = v[0],
        R = v[1],
        L = f(null),
        E = L[0],
        k = L[1],
        T = _(null),
        x;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var w;
        ((x = [
          (w = o("WAWebMsgGetters")).getId,
          w.getIsSentByMe,
          w.getHasReaction,
          w.getIsGroupHistoryMessageInOwnChat,
          w.getIsNewsletterMsg,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
        ]),
          (t[0] = x));
      } else x = t[0];
      var A = o("useWAWebMsgValues").useMsgValues(
          l,
          o("WAWebMsgCasts").castToPtvMsg,
          x,
        ),
        F = A[0],
        O = A[1],
        B = A[2],
        W = A[3],
        q = A[4],
        U = A[5],
        V = A[6],
        H;
      if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
        var G;
        ((H = [
          (G = o("WAWebMediaDataGetters")).getMediaStage,
          G.getRenderableUrl,
          G.getSize,
          G.getPreview,
          G.getFullPreviewData,
        ]),
          (t[1] = H));
      } else H = t[1];
      var z = o("useWAWebMediaDataValues").useMediaDataValues(i, H),
        j = z[0],
        K = z[1],
        Q = z[2],
        X = C,
        Y = E != null ? Math.min(E, m) : null,
        J;
      t[2] !== a || t[3] !== i
        ? ((J = { mediaData: i, displayType: a }),
          (t[2] = a),
          (t[3] = i),
          (t[4] = J))
        : (J = t[4]);
      var Z = o("useWAWebSendViewCount").useSendViewCount(l, J);
      o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(l);
      var ee, te;
      (t[5] !== l
        ? ((ee = function () {
            var e,
              t =
                (e = o("WAWebMsgCollection").MsgCollection.get(l)) == null
                  ? void 0
                  : e.safe();
            t == null ||
              t.type !== o("WAWebMsgType").MSG_TYPE.PTV ||
              o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
                msg: o("WAWebStateUtils").unproxy(t),
                chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              });
          }),
          (te = [l]),
          (t[5] = l),
          (t[6] = ee),
          (t[7] = te))
        : ((ee = t[6]), (te = t[7])),
        p(ee, te));
      var ne = f(!1),
        re = ne[0],
        oe = ne[1],
        ae = _(null),
        ie = _(null),
        le = f(!1),
        se = le[0],
        ue = le[1],
        ce;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = function (t, n) {
            (oe(t), $(t, n));
          }),
          (t[8] = ce))
        : (ce = t[8]);
      var de = ce,
        me;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = ["click"]), (t[9] = me))
        : (me = t[9]);
      var pe;
      (t[10] !== re
        ? ((pe = function (t) {
            t.defaultPrevented ||
              !re ||
              !ie.current ||
              (t.target instanceof Node && ie.current.contains(t.target)) ||
              de(!1, "click-listener");
          }),
          (t[10] = re),
          (t[11] = pe))
        : (pe = t[11]),
        o("useWAWebListener").useListener(document.body, me, pe));
      var _e;
      t[12] !== re
        ? ((_e = function () {
            var e = h.current;
            if (e) {
              if (re) {
                e.getPaused() ? e.play() : e.pause();
                return;
              }
              de(!0, "ptv-click");
            }
          }),
          (t[12] = re),
          (t[13] = _e))
        : (_e = t[13]);
      var fe = _e,
        ge;
      t[14] !== re
        ? ((ge = function (t) {
            t.button !== 0 || re || ue(!0);
          }),
          (t[14] = re),
          (t[15] = ge))
        : (ge = t[15]);
      var he = ge,
        ye;
      (t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((ye = function () {
            ue(!1);
          }),
          (t[16] = ye))
        : (ye = t[16]),
        o("useWAWebListener").useListener(
          se ? document.body : null,
          "mouseup",
          ye,
        ));
      var Ce;
      (t[17] !== l
        ? ((Ce = function (t) {
            !h.current || !l.equals(t) || de(!0, "sequential-ptv-playback");
          }),
          (t[17] = l),
          (t[18] = Ce))
        : (Ce = t[18]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "sequential_ptv_playback",
          Ce,
        ));
      var be = _(0),
        ve;
      t[19] !== re || t[20] !== q || t[21] !== l
        ? ((ve = function () {
            var e = h.current;
            if (e) {
              if (!re) {
                ((be.current = be.current + 1),
                  e.seek(0),
                  be.current < M() && e.play());
                return;
              }
              (e.seek(0), e.play(), de(!1, "loop"));
              var t = o("WAWebPttFindSequentialMsg").findSequentialPtv(l, q);
              t && o("WAWebCmd").Cmd.playNextPtv(t.id);
            }
          }),
          (t[19] = re),
          (t[20] = q),
          (t[21] = l),
          (t[22] = ve))
        : (ve = t[22]);
      var Se = ve,
        Re;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = { root: null, threshold: 0 }), (t[23] = Re))
        : (Re = t[23]);
      var Le = r("useWAWebIntersection")(Re),
        Ee = Le[0],
        ke = Le[1],
        Ie = ke.isIntersecting,
        Te = _(null),
        De,
        xe;
      (t[24] !== Ie
        ? ((De = function () {
            var e = Te.current;
            if (((Te.current = Ie), !Ie && e === !0)) {
              var t = self.setTimeout(function () {
                var e;
                (e = h.current) == null || e.pause("product_initiated");
              }, 100);
              return (
                (be.current = 0),
                function () {
                  self.clearTimeout(t);
                }
              );
            }
          }),
          (xe = [Ie]),
          (t[24] = Ie),
          (t[25] = De),
          (t[26] = xe))
        : ((De = t[25]), (xe = t[26])),
        p(De, xe));
      var $e, Pe;
      (t[27] !== re || t[28] !== l
        ? (($e = function () {
            var e = ae.current;
            if (((ae.current = re), re && e === !1)) {
              var t = h.current;
              if (t) {
                (t.seek(0), t.play());
                var n = o("WAWebMsgCollection").MsgCollection.get(l);
                n != null &&
                  o("WAWebMarkPlayedMsgAction").canMarkPlayed(n) &&
                  o("WAWebMarkPlayedMsgAction").markPlayed(n);
              }
              be.current = 0;
            }
          }),
          (Pe = [re, l]),
          (t[27] = re),
          (t[28] = l),
          (t[29] = $e),
          (t[30] = Pe))
        : (($e = t[29]), (Pe = t[30])),
        p($e, Pe));
      var Ne = S,
        Me = !Ne,
        we;
      t[31] !== Ne || t[32] !== Me
        ? ((we = { value: Ne, debounceMs: 100, shouldDebounce: Me }),
          (t[31] = Ne),
          (t[32] = Me),
          (t[33] = we))
        : (we = t[33]);
      var Ae = o("useWAWebDebouncedChanges").useDebouncedChanges(we),
        Fe = se && !re,
        Oe,
        Be;
      if (
        t[34] !== a ||
        t[35] !== B ||
        t[36] !== F ||
        t[37] !== W ||
        t[38] !== O ||
        t[39] !== V ||
        t[40] !== l
      ) {
        var We = o("WAWebMsgCollection").MsgCollection.get(F),
          qe = W && D.groupHistoryMessage,
          Ue;
        t[43] !== l
          ? ((Ue = c.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: l })),
            (t[43] = l),
            (t[44] = Ue))
          : (Ue = t[44]);
        var Ve;
        (t[45] !== a ||
        t[46] !== O ||
        t[47] !== V ||
        t[48] !== qe ||
        t[49] !== Ue
          ? ((Ve = c.jsx(o("WAWebMessageMeta.react").MetaWrapper, {
              isSentByMe: O,
              isTransparent: V,
              displayType: a,
              xstyle: qe,
              children: Ue,
            })),
            (t[45] = a),
            (t[46] = O),
            (t[47] = V),
            (t[48] = qe),
            (t[49] = Ue),
            (t[50] = Ve))
          : (Ve = t[50]),
          (Oe = Ve),
          (Be =
            a != null &&
            [
              o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            ].includes(a) &&
            We != null &&
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
                    displayType: a,
                    bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType
                      .STICKER_LIKE_MSG,
                    parentIds: [We.id.toString()],
                    hasReaction: B,
                  }),
                },
              ),
            )),
          (t[34] = a),
          (t[35] = B),
          (t[36] = F),
          (t[37] = W),
          (t[38] = O),
          (t[39] = V),
          (t[40] = l),
          (t[41] = Oe),
          (t[42] = Be));
      } else ((Oe = t[41]), (Be = t[42]));
      var He;
      t[51] !== Be
        ? ((He = c.jsx(c.Fragment, { children: Be })),
          (t[51] = Be),
          (t[52] = He))
        : (He = t[52]);
      var Ge = He,
        ze;
      t[53] !== n ||
      t[54] !== a ||
      t[55] !== W ||
      t[56] !== O ||
      t[57] !== l ||
      t[58] !== u ||
      t[59] !== U
        ? ((ze =
            n &&
            c.jsx(
              "div",
              babelHelpers.extends(
                { ref: T },
                (s || (s = r("stylex"))).props(
                  D.borderRadius,
                  D.boxShadow,
                  o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
                  g.paddingInlineStart9,
                  o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
                  g.paddingBottom3,
                  !o("WAWebDisplayType").isWideDisplay(a) && D.fitContent,
                  O ? D.authorIsMe : D.authorIsNotMe,
                  (u === o("WAWebMessagePosition").MsgPosition.FRONT ||
                    u === o("WAWebMessagePosition").MsgPosition.SINGLE) &&
                    D.isFirst,
                  W && D.groupHistoryMessage,
                ),
                {
                  children: c.jsx(r("WAWebMessageAuthor.react"), {
                    msgKey: l,
                    contact: U,
                    displayType: a,
                  }),
                },
              ),
            )),
          (t[53] = n),
          (t[54] = a),
          (t[55] = W),
          (t[56] = O),
          (t[57] = l),
          (t[58] = u),
          (t[59] = U),
          (t[60] = ze))
        : (ze = t[60]);
      var je;
      t[61] !== O || t[62] !== V || t[63] !== d
        ? ((je =
            d &&
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
                { children: d },
              ),
            )),
          (t[61] = O),
          (t[62] = V),
          (t[63] = d),
          (t[64] = je))
        : (je = t[64]);
      var Ke = o("WAWebDisplayType").isWideDisplay(a) ? "center" : "start",
        Qe = Fe && D.depressed,
        Xe;
      t[65] !== Qe
        ? ((Xe = [D.ptvOuterContainer, Qe]), (t[65] = Qe), (t[66] = Xe))
        : (Xe = t[66]);
      var Ye = re && a === "MSG_INFO" && D.activePtvContainerInMsgInfo,
        Je = re && a !== "MSG_INFO" && D.activePtvContainer,
        Ze;
      t[67] !== Ye || t[68] !== Je
        ? ((Ze = [
            D.ptvContainer,
            D.animateDimensions,
            o("WDSMargins.stylex").wdsMargins.marginTop12,
            o("WDSMargins.stylex").wdsMargins.marginBottom4,
            Ye,
            Je,
          ]),
          (t[67] = Ye),
          (t[68] = Je),
          (t[69] = Ze))
        : (Ze = t[69]);
      var et;
      t[70] === Symbol.for("react.memo_cache_sentinel")
        ? ((et = { className: "x10l6tqk x1rn7vjc xb51amx x1d8287x" }),
          (t[70] = et))
        : (et = t[70]);
      var tt;
      t[71] === Symbol.for("react.memo_cache_sentinel")
        ? ((tt = function () {
            var e, t;
            return (e =
              (t = h.current) == null ? void 0 : t.getCurrentTime()) != null
              ? e
              : 0;
          }),
          (t[71] = tt))
        : (tt = t[71]);
      var nt;
      t[72] !== a || t[73] !== Y || t[74] !== re || t[75] !== Ne || t[76] !== O
        ? ((nt = c.jsx(
            "div",
            babelHelpers.extends({}, et, {
              children: c.jsx(N, {
                isActive: re,
                getCurrentTime: tt,
                isPlaying: Ne,
                duration: Y,
                isSentByMe: O,
                displayType: a,
              }),
            }),
          )),
          (t[72] = a),
          (t[73] = Y),
          (t[74] = re),
          (t[75] = Ne),
          (t[76] = O),
          (t[77] = nt))
        : (nt = t[77]);
      var rt = re && a === "MSG_INFO" && D.activeVideoContainerInMsgInfo,
        ot = re && a !== "MSG_INFO" && D.activeVideoContainer,
        at;
      t[78] !== rt || t[79] !== ot
        ? ((at = [D.videoContainer, D.animateDimensions, rt, ot]),
          (t[78] = rt),
          (t[79] = ot),
          (t[80] = at))
        : (at = t[80]);
      var it = re ? void 0 : he,
        lt;
      t[81] !== i
        ? ((lt = c.jsx(P, { mediaData: i })), (t[81] = i), (t[82] = lt))
        : (lt = t[82]);
      var st;
      t[83] !== l
        ? ((st = function () {
            var e;
            (e = o("WAWebMsgCollection").MsgCollection.get(l)) == null ||
              e.forceDownloadMediaEvenIfExpensive();
          }),
          (t[83] = l),
          (t[84] = st))
        : (st = t[84]);
      var ut;
      t[85] !== Ae || t[86] !== j || t[87] !== Q || t[88] !== st
        ? ((ut = c.jsx(r("WAWebPtvDownloadState.react"), {
            mediaDataFileSize: Q,
            mediaStage: j,
            isPlaying: Ae,
            onDownloadClick: st,
          })),
          (t[85] = Ae),
          (t[86] = j),
          (t[87] = Q),
          (t[88] = st),
          (t[89] = ut))
        : (ut = t[89]);
      var ct;
      t[90] !== Fe ||
      t[91] !== Se ||
      t[92] !== re ||
      t[93] !== j ||
      t[94] !== K ||
      t[95] !== Z
        ? ((ct =
            j === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            c.jsx("div", {
              ref: Z,
              children: c.jsx(r("WAWebVideo.react"), {
                ref: function (t) {
                  h.current = t != null ? t : null;
                },
                src: K,
                xstyle: [D.video, Fe && D.depressedVideo],
                renderVideoPixelsFit: I,
                muted: !re,
                autoPlay: !1,
                disableAutoplayManagement: !0,
                onAudioChannelRelease: function () {
                  de(!1, "audio-channel-release");
                },
                onLoadedData: function () {
                  var e, t;
                  k(
                    (e = (t = h.current) == null ? void 0 : t.getDuration()) !=
                      null
                      ? e
                      : null,
                  );
                },
                onEnded: Se,
                onStoppedPlaying: function () {
                  R(!1);
                },
                onPlaying: function () {
                  return R(!0);
                },
                onTimeUpdate: function (t) {
                  (b(t), t >= m && Se());
                },
              }),
            })),
          (t[90] = Fe),
          (t[91] = Se),
          (t[92] = re),
          (t[93] = j),
          (t[94] = K),
          (t[95] = Z),
          (t[96] = ct))
        : (ct = t[96]);
      var dt;
      t[97] !== X || t[98] !== Ae || t[99] !== Y || t[100] !== re
        ? ((dt =
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
                        re || !Ae
                          ? [
                              D.muteIconHidden,
                              o("WDSMargins.stylex").wdsMargins.marginEnd0,
                            ]
                          : o("WDSMargins.stylex").wdsMargins.marginEnd4,
                      ],
                    }),
                    c.jsx("span", {
                      children: o("WAWebClock").Clock.durationStr(re ? X : Y),
                    }),
                  ],
                }),
              ],
            })),
          (t[97] = X),
          (t[98] = Ae),
          (t[99] = Y),
          (t[100] = re),
          (t[101] = dt))
        : (dt = t[101]);
      var mt;
      t[102] !== fe ||
      t[103] !== at ||
      t[104] !== it ||
      t[105] !== lt ||
      t[106] !== ut ||
      t[107] !== ct ||
      t[108] !== dt
        ? ((mt = c.jsxs(r("WAWebUnstyledButton.react"), {
            xstyle: at,
            onMouseDown: it,
            onClick: fe,
            children: [lt, ut, ct, dt],
          })),
          (t[102] = fe),
          (t[103] = at),
          (t[104] = it),
          (t[105] = lt),
          (t[106] = ut),
          (t[107] = ct),
          (t[108] = dt),
          (t[109] = mt))
        : (mt = t[109]);
      var pt;
      t[110] !== Ze || t[111] !== nt || t[112] !== mt
        ? ((pt = c.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: Ze,
            children: [nt, mt],
          })),
          (t[110] = Ze),
          (t[111] = nt),
          (t[112] = mt),
          (t[113] = pt))
        : (pt = t[113]);
      var _t;
      t[114] !== Ee || t[115] !== Ke || t[116] !== Xe || t[117] !== pt
        ? ((_t = c.jsx(o("WAWebFlex.react").FlexRow, {
            ref: Ee,
            justify: Ke,
            xstyle: Xe,
            children: pt,
          })),
          (t[114] = Ee),
          (t[115] = Ke),
          (t[116] = Xe),
          (t[117] = pt),
          (t[118] = _t))
        : (_t = t[118]);
      var ft;
      t[119] !== Ge || t[120] !== a || t[121] !== Oe
        ? ((ft = o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(a)
            ? c.jsxs(o("WAWebFlex.react").FlexRow, {
                justifySelf: "center",
                columnGap: 2,
                children: [Ge, Oe],
              })
            : c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [Oe, Ge] })),
          (t[119] = Ge),
          (t[120] = a),
          (t[121] = Oe),
          (t[122] = ft))
        : (ft = t[122]);
      var gt;
      return (
        t[123] !== ze || t[124] !== je || t[125] !== _t || t[126] !== ft
          ? ((gt = c.jsxs("div", { ref: ie, children: [ze, je, _t, ft] })),
            (t[123] = ze),
            (t[124] = je),
            (t[125] = _t),
            (t[126] = ft),
            (t[127] = gt))
          : (gt = t[127]),
        gt
      );
    }
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
    function N(e) {
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
    function M() {
      var e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
      return e === 0 ? 1 / 0 : e;
    }
    l.default = x;
  },
  98,
);
