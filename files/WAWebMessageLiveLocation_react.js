__d(
  "WAWebMessageLiveLocation.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMap.react",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        container: {
          position: "x1n2onr6",
          maxWidth: "xz9dduz",
          cursor: "xt0e3qv",
          $$css: !0,
        },
        containerAnnouncement: { maxWidth: "xmewjk2", $$css: !0 },
        clickable: { cursor: "x1ypdohk", $$css: !0 },
        caption: { boxSizing: "x9f619", maxWidth: "xz9dduz", $$css: !0 },
        captionAnnouncement: { maxWidth: "xmewjk2", $$css: !0 },
        author: { paddingInlineStart: "x25sj25", $$css: !0 },
        authorElevatedPushNames: { paddingInlineEnd: "x1uc92m", $$css: !0 },
        avatar: {
          position: "x10l6tqk",
          top: "x13vifvy",
          right: "x3m8u43",
          bottom: "x1ey2m1c",
          left: "xu96u03",
          width: "x187nhsf",
          height: "xn3w4p2",
          filter: "xkozzs",
          $$css: !0,
        },
        thumbBody: {
          zIndex: "x1vjfegm",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          WebkitTransition: "xtzlr6k",
          $$css: !0,
        },
        hidden: { visibility: "xlshs6z", $$css: !0 },
        metaWithCaption: {
          bottom: "xy1j3rs",
          position: "x10l6tqk",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          zIndex: "xhtitgo",
          $$css: !0,
        },
      },
      p = 150,
      _ = 270,
      f = 30,
      g = 40,
      h = 250,
      y = 474,
      C = p + f + g;
    function b(t) {
      var n = o("react-compiler-runtime").c(56),
        a = t.displayAuthor,
        i = t.msg,
        l = t.quotedMsg,
        u = t.trusted,
        f;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var g;
        ((f = [
          (g = o("WAWebMsgGetters")).getComment,
          o("WAWebFrontendMsgGetters").getDir,
          g.getFinalLat,
          g.getFinalLng,
          g.getIsGroupMsg,
          g.getIsPSA,
          g.getIsSentByMe,
          g.getLat,
          g.getLng,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getSenderObj,
          g.getSender,
          g.getShareDuration,
          g.getT,
        ]),
          (n[0] = f));
      } else f = n[0];
      var C = o("useWAWebMsgValues").useMsgValues(t.msg.id, f),
        b = C[0],
        S = C[2],
        R = C[3],
        L = C[7],
        E = C[8],
        k = C[10],
        I = C[11],
        T = C[12],
        D = C[13],
        x = o("WAWebFrontendMsgGetters").getChat(t.msg.unsafe()),
        $ = d(!1),
        P = $[0],
        N = $[1],
        M = v,
        w;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            N(!0);
          }),
          (n[1] = w))
        : (w = n[1]);
      var A = w,
        F;
      n[2] !== T || n[3] !== D
        ? ((F = function () {
            return T == null ? D : D + T;
          }),
          (n[2] = T),
          (n[3] = D),
          (n[4] = F))
        : (F = n[4]);
      var O = F,
        B = !!b,
        W = o("WAWebDisplayType").isWideDisplay(t.displayType),
        q = a
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  m.author,
                  o("WAWebUISpacing").uiPadding.top3,
                  o("WAWebUISpacing").uiPadding.bottom5,
                  o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(x) &&
                    m.authorElevatedPushNames,
                ),
                {
                  children: c.jsx(r("WAWebMessageAuthor.react"), {
                    msg: i,
                    contact: k,
                    displayType: t.displayType,
                  }),
                },
              ),
            )
          : null,
        U;
      n[5] !== l
        ? ((U = l ? c.jsx("div", { className: "xahult9", children: l }) : null),
          (n[5] = l),
          (n[6] = U))
        : (U = n[6]);
      var V = U,
        H = o("WATimeUtils").unixTime() >= O(),
        G = H && S !== void 0 && R !== void 0,
        z = L,
        j = E;
      G && ((z = S), (j = R));
      var K = M,
        Q = W ? y : _,
        X = W ? h : p,
        Y;
      n[7] !== X ? ((Y = { height: X }), (n[7] = X), (n[8] = Y)) : (Y = n[8]);
      var J = Y,
        Z;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z =
            "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xaejkm2 x1uuy6ko"),
          (n[9] = Z))
        : (Z = n[9]);
      var ee;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = { className: "x1n2onr6" }), (n[10] = ee))
        : (ee = n[10]);
      var te;
      n[11] !== X || n[12] !== z || n[13] !== j || n[14] !== Q
        ? ((te = c.jsx(
            "div",
            babelHelpers.extends({}, ee, {
              children: c.jsx(r("WAWebMap.react"), {
                lat: z,
                lng: j,
                width: Q,
                height: X,
                xstyle: m.thumbBody,
                linkify: !1,
                showMarker: !1,
                onLoad: A,
              }),
            }),
          )),
          (n[11] = X),
          (n[12] = z),
          (n[13] = j),
          (n[14] = Q),
          (n[15] = te))
        : (te = n[15]);
      var ne;
      n[16] !== P
        ? ((ne = (e || (e = r("stylex"))).props(
            m.avatar,
            o("WAWebUISpacing").uiMargin.allAuto,
            !P && m.hidden,
          )),
          (n[16] = P),
          (n[17] = ne))
        : (ne = n[17]);
      var re;
      n[18] !== I
        ? ((re = c.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: I,
            size: 40,
            border: !0,
          })),
          (n[18] = I),
          (n[19] = re))
        : (re = n[19]);
      var oe;
      n[20] !== ne || n[21] !== re
        ? ((oe = c.jsx("div", babelHelpers.extends({}, ne, { children: re }))),
          (n[20] = ne),
          (n[21] = re),
          (n[22] = oe))
        : (oe = n[22]);
      var ae;
      n[23] !== H
        ? ((ae =
            H &&
            c.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1ey2m1c xu96u03 xh8yej3 x5yr21d x1lliihq x143bgyd",
            })),
          (n[23] = H),
          (n[24] = ae))
        : (ae = n[24]);
      var ie;
      n[25] !== J || n[26] !== oe || n[27] !== ae || n[28] !== te
        ? ((ie = c.jsxs("div", {
            className: Z,
            onClick: K,
            style: J,
            children: [te, oe, ae],
          })),
          (n[25] = J),
          (n[26] = oe),
          (n[27] = ae),
          (n[28] = te),
          (n[29] = ie))
        : (ie = n[29]);
      var le = ie,
        se;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = s._(/*BTDS*/ "Live location not available")), (n[30] = se))
        : (se = n[30]);
      var ue = se,
        ce;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = {
            className:
              "x1n2onr6 x1ey2m1c xu96u03 x1gnnpzl xexx8yu x1im30kd x18d9i69 x1djpfga x1cmjdxs xqfj769 x1gfim23 xdpxx8g",
          }),
          (n[31] = ce))
        : (ce = n[31]);
      var de;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = c.jsx(
            "div",
            babelHelpers.extends({}, ce, {
              onClick: K,
              children: c.jsx("span", {
                className: "x1n2onr6 xndqk7f x1pg5gke xhslqc4 xxymvpz",
                children: ue,
              }),
            }),
          )),
          (n[32] = de))
        : (de = n[32]);
      var me = de,
        pe = B
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  m.caption,
                  o("WAWebUISpacing").uiPadding.top7,
                  o("WAWebUISpacing").uiPadding.end4,
                  o("WAWebUISpacing").uiPadding.bottom5,
                  o("WAWebUISpacing").uiPadding.start6,
                  W && m.captionAnnouncement,
                ),
                {
                  children: c.jsx(r("WAWebMessageCaption.react"), {
                    msg: i.unsafe(),
                    trusted: u,
                  }),
                },
              ),
            )
          : null,
        _e = B && m.metaWithCaption,
        fe;
      n[33] !== B
        ? ((fe = !B && [
            o("WAWebUISpacing").uiPadding.horiz3,
            o("WAWebUISpacing").uiPadding.top3,
          ]),
          (n[33] = B),
          (n[34] = fe))
        : (fe = n[34]);
      var ge;
      n[35] !== _e || n[36] !== fe
        ? ((ge = [_e, fe]), (n[35] = _e), (n[36] = fe), (n[37] = ge))
        : (ge = n[37]);
      var he;
      n[38] !== i
        ? ((he = c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i })),
          (n[38] = i),
          (n[39] = he))
        : (he = n[39]);
      var ye;
      n[40] !== ge || n[41] !== he
        ? ((ye = c.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            xstyle: ge,
            children: he,
          })),
          (n[40] = ge),
          (n[41] = he),
          (n[42] = ye))
        : (ye = n[42]);
      var Ce = ye,
        be = r("WAWebMessageBubbleHiddenText.react"),
        ve = (e || (e = r("stylex")))(
          m.container,
          o("WAWebUISpacing").uiPadding.all3,
          W && m.containerAnnouncement,
          !!K && m.clickable,
        ),
        Se;
      n[43] !== i
        ? ((Se = i.unsafe()), (n[43] = i), (n[44] = Se))
        : (Se = n[44]);
      var Re;
      return (
        n[45] !== be ||
        n[46] !== q ||
        n[47] !== pe ||
        n[48] !== le ||
        n[49] !== Ce ||
        n[50] !== V ||
        n[51] !== k ||
        n[52] !== me ||
        n[53] !== ve ||
        n[54] !== Se
          ? ((Re = c.jsxs(be, {
              className: ve,
              contact: k,
              msg: Se,
              children: [q, V, le, me, pe, Ce],
            })),
            (n[45] = be),
            (n[46] = q),
            (n[47] = pe),
            (n[48] = le),
            (n[49] = Ce),
            (n[50] = V),
            (n[51] = k),
            (n[52] = me),
            (n[53] = ve),
            (n[54] = Se),
            (n[55] = Re))
          : (Re = n[55]),
        Re
      );
    }
    function v() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "live-location" },
          okText: r("WAWebFbtCommon")("OK"),
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(
            /*BTDS*/ "Live location is not available on this device. View location on your phone.",
          ),
        }),
      );
    }
    ((l.MSG_HEIGHT = C), (l.LiveLocation = b));
  },
  226,
);
