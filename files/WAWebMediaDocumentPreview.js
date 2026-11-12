__d(
  "WAWebMediaDocumentPreview",
  [
    "fbt",
    "WAWebBackendRuntime",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
    "WAWebFilenameManager",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebL10nFilesize",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaDownloadService",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaThumbnail.react",
    "WAWebMediaTimeLeftEta.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageUiUtils",
    "WAWebMimeTypes",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WDSIconIcVideocamFilled.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebDocumentMediaType",
    "useWAWebIsMsgTrusted",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = {
        paddingBlock13: {
          paddingTop: "x1d0ri9u",
          paddingBottom: "x1ug4tga",
          $$css: !0,
        },
        marginInline10: {
          marginInlineStart: "x1hm9lzh",
          marginInlineEnd: "x1sa5p1d",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      },
      _ = {
        textContainerPadding: { paddingInlineEnd: "xl3akx1", $$css: !0 },
        container: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x1qjc9v5",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          color: "x1heor9g",
          textAlign: "x16tdsg8",
          borderStartStartRadius: "x1i282gy",
          borderStartEndRadius: "xx9ypkp",
          $$css: !0,
        },
        fixedTextHeight: { height: "xdiz9cm", $$css: !0 },
        text: {
          position: "x1n2onr6",
          top: "x1qiirwl",
          marginTop: "xdj266r",
          marginBottom: "xat24cr",
          marginInlineEnd: "x1sa5p1d",
          marginInlineStart: "x1hm9lzh",
          $$css: !0,
        },
        textRTL: { textAlign: "x1hr2gdg", $$css: !0 },
        deepContainerContent: {
          paddingTop: "x1d0ri9u",
          paddingInlineEnd: "xl3akx1",
          paddingBottom: "x1ug4tga",
          paddingInlineStart: "x11ahuha",
          position: "x1n2onr6",
          $$css: !0,
        },
        embeddedContent: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          marginBottom: "xz62fqu",
          position: "x1n2onr6",
          $$css: !0,
        },
        metaValue: {
          display: "x1rg5ohu",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          ":last-child_display": "xwcf1sq",
          $$css: !0,
        },
        deepContainer: { cursor: "xmper1u", $$css: !0 },
        mediaThumbVideoIcon: {
          position: "x10l6tqk",
          bottom: "xy1j3rs",
          insetInlineStart: "xrr41r3",
          left: null,
          right: null,
          color: "x17t9dm2",
          $$css: !0,
        },
      };
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx("span", {
              className:
                "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq xdj266r x7g7pl8 xat24cr x1wbi8v6",
              children: "\u2022",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.size;
      if (n == null || n <= 0) return null;
      var r;
      t[0] !== n
        ? ((r = o("WAWebL10nFilesize").getL10nFilesize(n)),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
          }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== a
        ? ((l = u.jsx(
            "span",
            babelHelpers.extends({}, i, { title: a, children: a }),
          )),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(f, {})), (t[5] = s))
        : (s = t[5]);
      var c;
      return (
        t[6] !== l
          ? ((c = u.jsxs(u.Fragment, { children: [l, s] })),
            (t[6] = l),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.count;
      if (n == null || n <= 0) return null;
      var r;
      t[0] !== n
        ? ((r = s._(/*BTDS*/ '_j{"*":"{count} pages","_1":"1 page"}', [
            s._plural(n, "count"),
          ])),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
          }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== a
        ? ((l = u.jsx(
            "span",
            babelHelpers.extends({}, i, { title: a, children: a }),
          )),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var c;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(f, {})), (t[5] = c))
        : (c = t[5]);
      var d;
      return (
        t[6] !== l
          ? ((d = u.jsxs(u.Fragment, { children: [l, c] })),
            (t[6] = l),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.ext;
      if (n == null) return null;
      var r;
      t[0] !== n ? ((r = n.toUpperCase()), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq",
          }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== a
        ? ((l = u.jsx(
            "span",
            babelHelpers.extends(
              { "data-meta-key": "type", "data-testid": "type" },
              i,
              { title: a, children: a },
            ),
          )),
          (t[3] = a),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(f, {})), (t[5] = s))
        : (s = t[5]);
      var c;
      return (
        t[6] !== l
          ? ((c = u.jsxs(u.Fragment, { children: [l, s] })),
            (t[6] = l),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function C(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(106),
        i = e.displayType,
        l = e.embedded,
        c = e.msgKey,
        C = e.ref,
        b = e.showMessageMeta,
        v = l === void 0 ? !1 : l,
        S = b === void 0 ? !1 : b,
        R = r("useWAWebIsMsgTrusted")(c),
        L = m(null),
        E;
      if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
        var k, I;
        ((E = [
          (k = o("WAWebMsgGetters")).getAck,
          k.getCaption,
          (I = o("WAWebFrontendMsgGetters")).getDir,
          k.getIsFromTemplate,
          k.getIsSentByMe,
          I.getRtl,
          k.getSubtype,
          k.getType,
          k.getIsDynamicReplyButtonsMsg,
          k.getMimetype,
          I.getSenderObj,
          I.getMediaData,
          k.getT,
        ]),
          (a[0] = E));
      } else E = a[0];
      var T = o("useWAWebMsgValues").useMsgValues(
          c,
          o("WAWebMsgCasts").castToDocumentOrInteractiveMsg,
          E,
        ),
        D = T[1],
        x = T[3],
        $ = T[4],
        P = T[5],
        N = T[7],
        M = T[8],
        w = T[9],
        A = T[11],
        F = T[12],
        O;
      if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
        var B;
        ((O = [
          (B = o("WAWebMediaDataGetters")).getMediaStage,
          B.getFilename,
          B.getPageCount,
          B.getSize,
          B.getMimetype,
          B.getPreview,
          B.getFullPreviewData,
          B.getLoadedSize,
          B.getFilehash,
        ]),
          (a[1] = O));
      } else O = a[1];
      var W = o("useWAWebMediaDataValues").useMediaDataValues(A, O),
        q = W[0],
        U = W[1],
        V = W[2],
        H = W[3],
        G = W[4],
        z = W[5],
        j = W[6],
        K = W[7],
        Q;
      a[2] !== D || a[3] !== U || a[4] !== w || a[5] !== F || a[6] !== N
        ? ((Q =
            N === o("WAWebMsgType").MSG_TYPE.DOCUMENT
              ? o("WAWebFilenameManager").getDefaultName({
                  t: F,
                  type: N,
                  mimetype: w,
                  filename: U,
                  caption: D,
                  vcardList: null,
                  isVcardOverMmsDocument: !1,
                })
              : U),
          (a[2] = D),
          (a[3] = U),
          (a[4] = w),
          (a[5] = F),
          (a[6] = N),
          (a[7] = Q))
        : (Q = a[7]);
      var X = Q,
        Y;
      a[8] !== G || a[9] !== X
        ? ((Y = { mimetype: G, filename: X }),
          (a[8] = G),
          (a[9] = X),
          (a[10] = Y))
        : (Y = a[10]);
      var J = r("useWAWebDocumentMediaType")(Y),
        Z;
      a[11] !== J.mime
        ? ((Z =
            J.mime != null &&
            o("WAWebMediaMessageGetValidatedProperties").isMediaMimeType(
              J.mime,
            )),
          (a[11] = J.mime),
          (a[12] = Z))
        : (Z = a[12]);
      var ee = Z,
        te;
      a[13] !== ee || a[14] !== J.mime
        ? ((te =
            J.mime != null &&
            (ee || o("WAWebMimeTypes").previewType(J.mime) != null)),
          (a[13] = ee),
          (a[14] = J.mime),
          (a[15] = te))
        : (te = a[15]);
      var ne = te,
        re = !!((x || M) && D),
        oe;
      a[16] !== ne ||
      a[17] !== re ||
      a[18] !== K ||
      a[19] !== q ||
      a[20] !== J.ext ||
      a[21] !== V ||
      a[22] !== H
        ? ((oe = re
            ? null
            : u.jsxs("div", {
                className:
                  "xx3o462 x1ncwhqj xyqdw3p xyri2b xg8j3zb x1c1uobl x152skdk x1bvqhpb xt1z7ec x1yp9nv9 x186kree x1y04bub x1duis28",
                children: [
                  o("WAWebMessageUiUtils").ETA_SUPPORTED_STATES.has(q)
                    ? u.jsx(r("WAWebMediaTimeLeftEta.react"), {
                        size: H,
                        loadedSize: K,
                        sampling: 3,
                        xstyle: _.metaValue,
                        children: u.jsx(f, {}),
                      })
                    : u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(h, { count: ne ? V : null }),
                          u.jsx(y, { ext: J.ext }),
                        ],
                      }),
                  u.jsx(g, { size: H }),
                ],
              })),
          (a[16] = ne),
          (a[17] = re),
          (a[18] = K),
          (a[19] = q),
          (a[20] = J.ext),
          (a[21] = V),
          (a[22] = H),
          (a[23] = oe))
        : (oe = a[23]);
      var ae = oe,
        ie;
      a[24] !== ne || a[25] !== j || a[26] !== c
        ? ((ie = function () {
            var e;
            if (!(!ne || j)) {
              var t =
                (e = o("WAWebMsgCollection").MsgCollection.get(c)) == null
                  ? void 0
                  : e.safe();
              if (
                !(
                  t == null ||
                  (t.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                    t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
                )
              ) {
                var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
                (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMediaDownloadService").MediaDownloadService,
                    ).downloadMmsThumbnail
                  : r("WAWebMediaDownloadMmsThumbnail"))({
                  msg: t,
                  isPreload: !1,
                  chat: n,
                });
              }
            }
          }),
          (a[24] = ne),
          (a[25] = j),
          (a[26] = c),
          (a[27] = ie))
        : (ie = a[27]);
      var le = r("useWAWebStableCallback")(ie),
        se,
        ue;
      (a[28] !== le
        ? ((se = function () {
            return le();
          }),
          (ue = [le]),
          (a[28] = le),
          (a[29] = se),
          (a[30] = ue))
        : ((se = a[29]), (ue = a[30])),
        d(se, ue));
      var ce;
      a[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = "xiy17q3 x1tbiz1a x1gnnpzl x23j0i4"), (a[31] = ce))
        : (ce = a[31]);
      var de = ce,
        me;
      a[32] !== X
        ? ((me = X || s._(/*BTDS*/ "Untitled")), (a[32] = X), (a[33] = me))
        : (me = a[33]);
      var pe = me,
        _e;
      a[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = {
            getZoomNode: function () {
              return L.current;
            },
          }),
          (a[34] = _e))
        : (_e = a[34]);
      var fe = o("WAWebMediaDocumentUtils").useMediaAction(c, _e),
        ge = fe[0],
        he = fe[1],
        ye;
      a[35] !== ge || a[36] !== i
        ? ((ye = babelHelpers.extends({}, ge)),
          i === o("WAWebDisplayType").DISPLAY_TYPE.EDITING &&
            (ye.onClick = null),
          (a[35] = ge),
          (a[36] = i),
          (a[37] = ye))
        : (ye = a[37]);
      var Ce = ne && (z != null ? z : j) != null,
        be;
      a[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((be = {
            className:
              "x6ikm8r x10wlt62 xlyipyv x1yn0g08 x104kibb x1h7i4cw x1ua5tub",
          }),
          (a[38] = be))
        : (be = a[38]);
      var ve;
      a[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((ve = r("WAWebL10N").isRTL()), (a[39] = ve))
        : (ve = a[39]);
      var Se = P !== ve,
        Re;
      a[40] !== pe || a[41] !== Se
        ? ((Re = u.jsx(
            "div",
            babelHelpers.extends({}, be, {
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: pe,
                dirMismatch: Se,
                direction: "auto",
                breakWord: !0,
              }),
            }),
          )),
          (a[40] = pe),
          (a[41] = Se),
          (a[42] = Re))
        : (Re = a[42]);
      var Le = Re,
        Ee = ee && R && Ce,
        ke;
      a[43] !== c || a[44] !== S
        ? ((ke =
            S &&
            u.jsx("div", {
              className: "x10l6tqk xxx7yvo xbfrwjf",
              children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: c }),
            })),
          (a[43] = c),
          (a[44] = S),
          (a[45] = ke))
        : (ke = a[45]);
      var Ie = ke,
        Te = v ? _.embeddedContent : _.deepContainerContent,
        De;
      a[46] !== Te
        ? ((De = [Te, o("WDSPaddings.stylex").wdsPaddings.padding0]),
          (a[46] = Te),
          (a[47] = De))
        : (De = a[47]);
      var xe;
      a[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = { className: "x1n2onr6" }), (a[48] = xe))
        : (xe = a[48]);
      var $e, Pe;
      a[49] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = "xcbkimw x1n2onr6 xjzcg3w"),
          (Pe = "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3"),
          (a[49] = $e),
          (a[50] = Pe))
        : (($e = a[49]), (Pe = a[50]));
      var Ne;
      a[51] !== c
        ? ((Ne = u.jsx(r("WAWebMediaThumbnail.react"), {
            msgKey: c,
            containerClassName: $e,
            childClassName: Pe,
          })),
          (a[51] = c),
          (a[52] = Ne))
        : (Ne = a[52]);
      var Me;
      a[53] !== w
        ? ((Me =
            w != null &&
            w !== "" &&
            o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(w) &&
            u.jsx(r("WDSIconIcVideocamFilled.react"), {
              xstyle: _.mediaThumbVideoIcon,
              height: 14,
              width: 14,
              testid: "msg-video",
            })),
          (a[53] = w),
          (a[54] = Me))
        : (Me = a[54]);
      var we;
      a[55] !== Ne || a[56] !== Me
        ? ((we = u.jsx(r("WAWebFlexItem.react"), {
            shrink: 0,
            grow: 0,
            children: u.jsxs(
              "div",
              babelHelpers.extends({}, xe, { children: [Ne, Me] }),
            ),
          })),
          (a[55] = Ne),
          (a[56] = Me),
          (a[57] = we))
        : (we = a[57]);
      var Ae;
      a[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ae = [_.textContainerPadding, p.paddingBlock13]), (a[58] = Ae))
        : (Ae = a[58]);
      var Fe;
      a[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = [
            _.text,
            r("WAWebL10N").isRTL() && _.textRTL,
            p.marginInline10,
            _.fixedTextHeight,
          ]),
          (a[59] = Fe))
        : (Fe = a[59]);
      var Oe;
      a[60] !== Le
        ? ((Oe = u.jsx(r("WAWebFlexItem.react"), { children: Le })),
          (a[60] = Le),
          (a[61] = Oe))
        : (Oe = a[61]);
      var Be;
      a[62] !== ae
        ? ((Be = u.jsx(r("WAWebFlexItem.react"), { children: ae })),
          (a[62] = ae),
          (a[63] = Be))
        : (Be = a[63]);
      var We;
      a[64] !== Oe || a[65] !== Be
        ? ((We = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            justify: "center",
            xstyle: Fe,
            children: [Oe, Be],
          })),
          (a[64] = Oe),
          (a[65] = Be),
          (a[66] = We))
        : (We = a[66]);
      var qe;
      a[67] !== he
        ? ((qe = u.jsx(r("WAWebFlexItem.react"), {
            grow: 0,
            shrink: 0,
            children: he,
          })),
          (a[67] = he),
          (a[68] = qe))
        : (qe = a[68]);
      var Ue;
      a[69] !== We || a[70] !== qe
        ? ((Ue = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "start",
            xstyle: Ae,
            grow: 1,
            children: [We, qe],
          })),
          (a[69] = We),
          (a[70] = qe),
          (a[71] = Ue))
        : (Ue = a[71]);
      var Ve;
      a[72] !== De || a[73] !== we || a[74] !== Ue
        ? ((Ve = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: De,
            children: [we, Ue],
          })),
          (a[72] = De),
          (a[73] = we),
          (a[74] = Ue),
          (a[75] = Ve))
        : (Ve = a[75]);
      var He = Ve,
        Ge = v ? _.embeddedContent : _.deepContainerContent,
        ze = (t = J.mime) != null ? t : "",
        je = (n = J.ext) != null ? n : "",
        Ke;
      a[76] !== ze || a[77] !== je
        ? ((Ke = u.jsx(r("WAWebFlexItem.react"), {
            shrink: 0,
            children: u.jsx("div", {
              className: de,
              children: u.jsx(r("WAWebDocumentFileIcon"), {
                width: 26,
                mimeType: ze,
                ext: je,
              }),
            }),
          })),
          (a[76] = ze),
          (a[77] = je),
          (a[78] = Ke))
        : (Ke = a[78]);
      var Qe;
      a[79] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qe = [_.text, r("WAWebL10N").isRTL() && _.textRTL]), (a[79] = Qe))
        : (Qe = a[79]);
      var Xe;
      a[80] !== ae || a[81] !== Le
        ? ((Xe = u.jsxs(r("WAWebFlexItem.react"), {
            xstyle: Qe,
            grow: 1,
            children: [Le, ae],
          })),
          (a[80] = ae),
          (a[81] = Le),
          (a[82] = Xe))
        : (Xe = a[82]);
      var Ye;
      a[83] !== he
        ? ((Ye = u.jsx(r("WAWebFlexItem.react"), {
            grow: 0,
            shrink: 0,
            children: he,
          })),
          (a[83] = he),
          (a[84] = Ye))
        : (Ye = a[84]);
      var Je;
      a[85] !== Ie ||
      a[86] !== Ge ||
      a[87] !== Ke ||
      a[88] !== Xe ||
      a[89] !== Ye
        ? ((Je = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: Ge,
            align: "start",
            children: [Ke, Xe, Ye, Ie],
          })),
          (a[85] = Ie),
          (a[86] = Ge),
          (a[87] = Ke),
          (a[88] = Xe),
          (a[89] = Ye),
          (a[90] = Je))
        : (Je = a[90]);
      var Ze = Je,
        et = Ee ? He : Ze,
        tt;
      a[91] !== ne || a[92] !== c || a[93] !== Ee || a[94] !== R
        ? ((tt =
            R && ne && !Ee
              ? u.jsx(r("WAWebMediaThumbnail.react"), {
                  msgKey: c,
                  containerClassName: "xpyat2d x1n2onr6 xh8yej3",
                  childClassName:
                    "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                  thumbnailRef: L,
                })
              : null),
          (a[91] = ne),
          (a[92] = c),
          (a[93] = Ee),
          (a[94] = R),
          (a[95] = tt))
        : (tt = a[95]);
      var nt;
      a[96] !== et || a[97] !== v || a[98] !== Ce || a[99] !== $
        ? ((nt = v
            ? et
            : u.jsx(r("WAWebMessageDeeperContainer.react"), {
                xstyle: _.deepContainer,
                outgoingMsg: $,
                position: Ce ? "bottom" : void 0,
                testid: "document-thumb-details",
                children: et,
              })),
          (a[96] = et),
          (a[97] = v),
          (a[98] = Ce),
          (a[99] = $),
          (a[100] = nt))
        : (nt = a[100]);
      var rt;
      return (
        a[101] !== ye || a[102] !== C || a[103] !== tt || a[104] !== nt
          ? ((rt = u.jsxs(
              o("WAWebClickable.react").Clickable,
              babelHelpers.extends(
                { ref: C, xstyle: _.container, dataTestId: "document-thumb" },
                ye,
                { children: [tt, nt] },
              ),
            )),
            (a[101] = ye),
            (a[102] = C),
            (a[103] = tt),
            (a[104] = nt),
            (a[105] = rt))
          : (rt = a[105]),
        rt
      );
    }
    l.default = C;
  },
  226,
);
