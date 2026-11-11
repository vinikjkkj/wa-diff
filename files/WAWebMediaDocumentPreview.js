__d(
  "WAWebMediaDocumentPreview",
  [
    "fbt",
    "WAWebBackendRuntime",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
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
        a = o("react-compiler-runtime").c(94),
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
        N = T[8],
        M = T[9],
        w = T[11],
        A;
      if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
        var F;
        ((A = [
          (F = o("WAWebMediaDataGetters")).getMediaStage,
          F.getFilename,
          F.getPageCount,
          F.getSize,
          F.getMimetype,
          F.getPreview,
          F.getFullPreviewData,
          F.getLoadedSize,
          F.getFilehash,
        ]),
          (a[1] = A));
      } else A = a[1];
      var O = o("useWAWebMediaDataValues").useMediaDataValues(w, A),
        B = O[0],
        W = O[1],
        q = O[2],
        U = O[3],
        V = O[4],
        H = O[5],
        G = O[6],
        z = O[7],
        j;
      a[2] !== W || a[3] !== V
        ? ((j = { mimetype: V, filename: W }),
          (a[2] = W),
          (a[3] = V),
          (a[4] = j))
        : (j = a[4]);
      var K = r("useWAWebDocumentMediaType")(j),
        Q = !!((x || N) && D),
        X;
      a[5] !== Q ||
      a[6] !== z ||
      a[7] !== B ||
      a[8] !== K.ext ||
      a[9] !== q ||
      a[10] !== U
        ? ((X = Q
            ? null
            : u.jsxs("div", {
                className:
                  "xx3o462 x1ncwhqj xyqdw3p xyri2b xg8j3zb x1c1uobl x152skdk x1bvqhpb xt1z7ec x1yp9nv9 x186kree x1y04bub x1duis28",
                children: [
                  o("WAWebMessageUiUtils").ETA_SUPPORTED_STATES.has(B)
                    ? u.jsx(r("WAWebMediaTimeLeftEta.react"), {
                        size: U,
                        loadedSize: z,
                        sampling: 3,
                        xstyle: _.metaValue,
                        children: u.jsx(f, {}),
                      })
                    : u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(h, { count: q }),
                          u.jsx(y, { ext: K.ext }),
                        ],
                      }),
                  u.jsx(g, { size: U }),
                ],
              })),
          (a[5] = Q),
          (a[6] = z),
          (a[7] = B),
          (a[8] = K.ext),
          (a[9] = q),
          (a[10] = U),
          (a[11] = X))
        : (X = a[11]);
      var Y = X,
        J;
      a[12] !== G || a[13] !== c
        ? ((J = function () {
            var e;
            if (!G) {
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
          (a[12] = G),
          (a[13] = c),
          (a[14] = J))
        : (J = a[14]);
      var Z = r("useWAWebStableCallback")(J),
        ee,
        te;
      (a[15] !== Z
        ? ((ee = function () {
            return Z();
          }),
          (te = [Z]),
          (a[15] = Z),
          (a[16] = ee),
          (a[17] = te))
        : ((ee = a[16]), (te = a[17])),
        d(ee, te));
      var ne;
      a[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = "xiy17q3 x1tbiz1a x1gnnpzl x23j0i4"), (a[18] = ne))
        : (ne = a[18]);
      var re = ne,
        oe;
      a[19] !== W
        ? ((oe = W || s._(/*BTDS*/ "Untitled")), (a[19] = W), (a[20] = oe))
        : (oe = a[20]);
      var ae = oe,
        ie;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = {
            getZoomNode: function () {
              return L.current;
            },
          }),
          (a[21] = ie))
        : (ie = a[21]);
      var le = o("WAWebMediaDocumentUtils").useMediaAction(c, ie),
        se = le[0],
        ue = le[1],
        ce;
      a[22] !== se || a[23] !== i
        ? ((ce = babelHelpers.extends({}, se)),
          i === o("WAWebDisplayType").DISPLAY_TYPE.EDITING &&
            (ce.onClick = null),
          (a[22] = se),
          (a[23] = i),
          (a[24] = ce))
        : (ce = a[24]);
      var de = (H != null ? H : G) != null,
        me;
      a[25] !== K.mime
        ? ((me =
            K.mime != null &&
            o("WAWebMediaMessageGetValidatedProperties").isMediaMimeType(
              K.mime,
            )),
          (a[25] = K.mime),
          (a[26] = me))
        : (me = a[26]);
      var pe = me,
        _e;
      a[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = {
            className:
              "x6ikm8r x10wlt62 xlyipyv x1yn0g08 x104kibb x1h7i4cw x1ua5tub",
          }),
          (a[27] = _e))
        : (_e = a[27]);
      var fe;
      a[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = r("WAWebL10N").isRTL()), (a[28] = fe))
        : (fe = a[28]);
      var ge = P !== fe,
        he;
      a[29] !== ae || a[30] !== ge
        ? ((he = u.jsx(
            "div",
            babelHelpers.extends({}, _e, {
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: ae,
                dirMismatch: ge,
                direction: "auto",
                breakWord: !0,
              }),
            }),
          )),
          (a[29] = ae),
          (a[30] = ge),
          (a[31] = he))
        : (he = a[31]);
      var ye = he,
        Ce = pe && R && de,
        be;
      a[32] !== c || a[33] !== S
        ? ((be =
            S &&
            u.jsx("div", {
              className: "x10l6tqk xxx7yvo xbfrwjf",
              children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: c }),
            })),
          (a[32] = c),
          (a[33] = S),
          (a[34] = be))
        : (be = a[34]);
      var ve = be,
        Se = v ? _.embeddedContent : _.deepContainerContent,
        Re;
      a[35] !== Se
        ? ((Re = [Se, o("WDSPaddings.stylex").wdsPaddings.padding0]),
          (a[35] = Se),
          (a[36] = Re))
        : (Re = a[36]);
      var Le;
      a[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((Le = { className: "x1n2onr6" }), (a[37] = Le))
        : (Le = a[37]);
      var Ee, ke;
      a[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = "xcbkimw x1n2onr6 xjzcg3w"),
          (ke = "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3"),
          (a[38] = Ee),
          (a[39] = ke))
        : ((Ee = a[38]), (ke = a[39]));
      var Ie;
      a[40] !== c
        ? ((Ie = u.jsx(r("WAWebMediaThumbnail.react"), {
            msgKey: c,
            containerClassName: Ee,
            childClassName: ke,
          })),
          (a[40] = c),
          (a[41] = Ie))
        : (Ie = a[41]);
      var Te;
      a[42] !== M
        ? ((Te =
            M != null &&
            M !== "" &&
            o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(M) &&
            u.jsx(r("WDSIconIcVideocamFilled.react"), {
              xstyle: _.mediaThumbVideoIcon,
              height: 14,
              width: 14,
              testid: "msg-video",
            })),
          (a[42] = M),
          (a[43] = Te))
        : (Te = a[43]);
      var De;
      a[44] !== Ie || a[45] !== Te
        ? ((De = u.jsx(r("WAWebFlexItem.react"), {
            shrink: 0,
            grow: 0,
            children: u.jsxs(
              "div",
              babelHelpers.extends({}, Le, { children: [Ie, Te] }),
            ),
          })),
          (a[44] = Ie),
          (a[45] = Te),
          (a[46] = De))
        : (De = a[46]);
      var xe;
      a[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = [_.textContainerPadding, p.paddingBlock13]), (a[47] = xe))
        : (xe = a[47]);
      var $e;
      a[48] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = [
            _.text,
            r("WAWebL10N").isRTL() && _.textRTL,
            p.marginInline10,
            _.fixedTextHeight,
          ]),
          (a[48] = $e))
        : ($e = a[48]);
      var Pe;
      a[49] !== ye
        ? ((Pe = u.jsx(r("WAWebFlexItem.react"), { children: ye })),
          (a[49] = ye),
          (a[50] = Pe))
        : (Pe = a[50]);
      var Ne;
      a[51] !== Y
        ? ((Ne = u.jsx(r("WAWebFlexItem.react"), { children: Y })),
          (a[51] = Y),
          (a[52] = Ne))
        : (Ne = a[52]);
      var Me;
      a[53] !== Pe || a[54] !== Ne
        ? ((Me = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            justify: "center",
            xstyle: $e,
            children: [Pe, Ne],
          })),
          (a[53] = Pe),
          (a[54] = Ne),
          (a[55] = Me))
        : (Me = a[55]);
      var we;
      a[56] !== ue
        ? ((we = u.jsx(r("WAWebFlexItem.react"), {
            grow: 0,
            shrink: 0,
            children: ue,
          })),
          (a[56] = ue),
          (a[57] = we))
        : (we = a[57]);
      var Ae;
      a[58] !== Me || a[59] !== we
        ? ((Ae = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "start",
            xstyle: xe,
            grow: 1,
            children: [Me, we],
          })),
          (a[58] = Me),
          (a[59] = we),
          (a[60] = Ae))
        : (Ae = a[60]);
      var Fe;
      a[61] !== Re || a[62] !== De || a[63] !== Ae
        ? ((Fe = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: Re,
            children: [De, Ae],
          })),
          (a[61] = Re),
          (a[62] = De),
          (a[63] = Ae),
          (a[64] = Fe))
        : (Fe = a[64]);
      var Oe = Fe,
        Be = v ? _.embeddedContent : _.deepContainerContent,
        We = (t = K.mime) != null ? t : "",
        qe = (n = K.ext) != null ? n : "",
        Ue;
      a[65] !== We || a[66] !== qe
        ? ((Ue = u.jsx(r("WAWebFlexItem.react"), {
            shrink: 0,
            children: u.jsx("div", {
              className: re,
              children: u.jsx(r("WAWebDocumentFileIcon"), {
                width: 26,
                mimeType: We,
                ext: qe,
              }),
            }),
          })),
          (a[65] = We),
          (a[66] = qe),
          (a[67] = Ue))
        : (Ue = a[67]);
      var Ve;
      a[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = [_.text, r("WAWebL10N").isRTL() && _.textRTL]), (a[68] = Ve))
        : (Ve = a[68]);
      var He;
      a[69] !== Y || a[70] !== ye
        ? ((He = u.jsxs(r("WAWebFlexItem.react"), {
            xstyle: Ve,
            grow: 1,
            children: [ye, Y],
          })),
          (a[69] = Y),
          (a[70] = ye),
          (a[71] = He))
        : (He = a[71]);
      var Ge;
      a[72] !== ue
        ? ((Ge = u.jsx(r("WAWebFlexItem.react"), {
            grow: 0,
            shrink: 0,
            children: ue,
          })),
          (a[72] = ue),
          (a[73] = Ge))
        : (Ge = a[73]);
      var ze;
      a[74] !== ve ||
      a[75] !== Be ||
      a[76] !== Ue ||
      a[77] !== He ||
      a[78] !== Ge
        ? ((ze = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: Be,
            align: "start",
            children: [Ue, He, Ge, ve],
          })),
          (a[74] = ve),
          (a[75] = Be),
          (a[76] = Ue),
          (a[77] = He),
          (a[78] = Ge),
          (a[79] = ze))
        : (ze = a[79]);
      var je = ze,
        Ke = Ce ? Oe : je,
        Qe;
      a[80] !== c || a[81] !== Ce || a[82] !== R
        ? ((Qe =
            R && !Ce
              ? u.jsx(r("WAWebMediaThumbnail.react"), {
                  msgKey: c,
                  containerClassName: "xpyat2d x1n2onr6 xh8yej3",
                  childClassName:
                    "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                  thumbnailRef: L,
                })
              : null),
          (a[80] = c),
          (a[81] = Ce),
          (a[82] = R),
          (a[83] = Qe))
        : (Qe = a[83]);
      var Xe;
      a[84] !== Ke || a[85] !== v || a[86] !== de || a[87] !== $
        ? ((Xe = v
            ? Ke
            : u.jsx(r("WAWebMessageDeeperContainer.react"), {
                xstyle: _.deepContainer,
                outgoingMsg: $,
                position: de ? "bottom" : void 0,
                testid: "document-thumb-details",
                children: Ke,
              })),
          (a[84] = Ke),
          (a[85] = v),
          (a[86] = de),
          (a[87] = $),
          (a[88] = Xe))
        : (Xe = a[88]);
      var Ye;
      return (
        a[89] !== ce || a[90] !== C || a[91] !== Qe || a[92] !== Xe
          ? ((Ye = u.jsxs(
              o("WAWebClickable.react").Clickable,
              babelHelpers.extends(
                { ref: C, xstyle: _.container, dataTestId: "document-thumb" },
                ce,
                { children: [Qe, Xe] },
              ),
            )),
            (a[89] = ce),
            (a[90] = C),
            (a[91] = Qe),
            (a[92] = Xe),
            (a[93] = Ye))
          : (Ye = a[93]),
        Ye
      );
    }
    l.default = C;
  },
  226,
);
