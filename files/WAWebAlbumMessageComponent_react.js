__d(
  "WAWebAlbumMessageComponent.react",
  [
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaAlbumGrid.react",
    "WAWebMediaAlbumGridConstants",
    "WAWebMessageAuthor.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageListAlbums",
    "WAWebMessageMeta.react",
    "WAWebMsgModelPropUtils",
    "WAWebMsgSelectors",
    "WAWebTypesMedia",
    "WAWebUISpacing",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        albumBubbleContainer: { width: "x1equxi", $$css: !0 },
        albumAnnouncementBubbleContainer: { width: "x14ty1w6", $$css: !0 },
        caption: { boxSizing: "x9f619", maxWidth: "x1d8l2j3", $$css: !0 },
        captionAnnouncement: { maxWidth: "xno0opx", $$css: !0 },
        metaWithCaption: {
          bottom: "xy1j3rs",
          position: "x10l6tqk",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          zIndex: "xhtitgo",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(61),
        a = t.associatedMessages,
        i = t.chat,
        l = t.displayAuthor,
        s = t.displayType,
        c = t.isMsgVisible,
        m = t.msg,
        f = t.quotedMsg,
        g = t.trusted,
        h;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [o("WAWebFrontendMsgGetters").getSenderObj]), (n[0] = h))
        : (h = n[0]);
      var y = o("useWAWebMsgValues").useMsgValues(m.id, h),
        C = y[0],
        b,
        v;
      n[1] !== i || n[2] !== l || n[3] !== s || n[4] !== m || n[5] !== C
        ? ((b = o("WAWebMsgSelectors").showForwarded(m)),
          (v = l
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WAWebUISpacing").uiPadding.top3,
                    o("WAWebUISpacing").uiPadding.bottom5,
                    o("WAWebUISpacing").uiPadding.start6,
                    b && o("WAWebUISpacing").uiPadding.bottom0,
                    o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(
                      i,
                    ) && o("WAWebUISpacing").uiPadding.end4,
                  ),
                  {
                    children: u.jsx(r("WAWebMessageAuthor.react"), {
                      msg: m,
                      contact: C,
                      displayType: s,
                    }),
                  },
                ),
              )
            : null),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s),
          (n[4] = m),
          (n[5] = C),
          (n[6] = b),
          (n[7] = v))
        : ((b = n[6]), (v = n[7]));
      var S = v,
        R;
      n[8] !== l || n[9] !== m || n[10] !== b
        ? ((R = b
            ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: m.unsafe(),
                xstyle: [
                  o("WAWebUISpacing").uiPadding.vert3,
                  o("WAWebUISpacing").uiPadding.end0,
                  o("WAWebUISpacing").uiPadding.start6,
                  l && o("WAWebUISpacing").uiPadding.top0,
                ],
              })
            : null),
          (n[8] = l),
          (n[9] = m),
          (n[10] = b),
          (n[11] = R))
        : (R = n[11]);
      var L = R,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M;
      if (
        n[12] !== a ||
        n[13] !== S ||
        n[14] !== s ||
        n[15] !== L ||
        n[16] !== f ||
        n[17] !== g
      ) {
        var w = o("WAWebDisplayType").isWideDisplay(s),
          A;
        (n[28] !== a
          ? ((A = r("compactMap")(a, _)), (n[28] = a), (n[29] = A))
          : (A = n[29]),
          (k = A));
        var F = k.find(p);
        ((E =
          F != null
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    d.caption,
                    o("WAWebUISpacing").uiPadding.top7,
                    o("WAWebUISpacing").uiPadding.end6,
                    o("WAWebUISpacing").uiPadding.bottom5,
                    o("WAWebUISpacing").uiPadding.start6,
                    w && d.captionAnnouncement,
                  ),
                  {
                    children: u.jsx(r("WAWebMessageCaption.react"), {
                      msg: F.unsafe(),
                      trusted:
                        g && o("WAWebMsgModelPropUtils").isTrusted(F.unsafe()),
                      spacer: !0,
                      testId: "album-caption",
                    }),
                  },
                ),
              )
            : null),
          (I =
            k.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE
              ? k.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1
              : null),
          (M =
            k.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE
              ? k[0]
              : null));
        var O;
        n[30] !== f
          ? ((O = f
              ? u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiMargin.bottom3,
                    ),
                    { children: f },
                  ),
                )
              : null),
            (n[30] = f),
            (n[31] = O))
          : (O = n[31]);
        var B = O;
        ((D = (e || (e = r("stylex"))).props(
          o("WAWebUISpacing").uiPadding.all3,
          d.albumBubbleContainer,
          w && d.albumAnnouncementBubbleContainer,
        )),
          (x = "media-album"),
          ($ = S),
          (P = L),
          (N = B),
          (T = {
            0: {
              className: "x1equxi x1jjtzf3 x6ikm8r x10wlt62 xrvj5dj xn2kgx5",
            },
            1: {
              className: "x6ikm8r x10wlt62 xrvj5dj xn2kgx5 x14ty1w6 xr710yv",
            },
          }[!!w << 0]),
          (n[12] = a),
          (n[13] = S),
          (n[14] = s),
          (n[15] = L),
          (n[16] = f),
          (n[17] = g),
          (n[18] = E),
          (n[19] = k),
          (n[20] = I),
          (n[21] = T),
          (n[22] = D),
          (n[23] = x),
          (n[24] = $),
          (n[25] = P),
          (n[26] = N),
          (n[27] = M));
      } else
        ((E = n[18]),
          (k = n[19]),
          (I = n[20]),
          (T = n[21]),
          (D = n[22]),
          (x = n[23]),
          ($ = n[24]),
          (P = n[25]),
          (N = n[26]),
          (M = n[27]));
      var W;
      n[32] !== s || n[33] !== c || n[34] !== k || n[35] !== I || n[36] !== M
        ? ((W = k
            .slice(
              0,
              o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL,
            )
            .map(function (e, t) {
              var n =
                t ===
                o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL - 1
                  ? { numAdditionalMedia: I, zoomMsg: M }
                  : null;
              return u.jsx(
                r("WAWebMediaAlbumGrid.react"),
                babelHelpers.extends(
                  {
                    msg: e,
                    albumMsgs: k,
                    currentAlbumMessageIndex: t,
                    albumPosition: o("WAWebMediaAlbumGridConstants")
                      .ALBUM_GRID_POSITIONS[
                      t %
                        o("WAWebMediaAlbumGridConstants")
                          .ALBUM_GRID_MAX_THUMBNAIL
                    ],
                    isMsgVisible: c,
                    displayType: s,
                    albumTheme: o("WAWebTypesMedia").DisplayTheme.AlbumV2,
                  },
                  n,
                ),
                e.id.toString(),
              );
            })),
          (n[32] = s),
          (n[33] = c),
          (n[34] = k),
          (n[35] = I),
          (n[36] = M),
          (n[37] = W))
        : (W = n[37]);
      var q;
      n[38] !== W || n[39] !== T
        ? ((q = u.jsx("div", babelHelpers.extends({}, T, { children: W }))),
          (n[38] = W),
          (n[39] = T),
          (n[40] = q))
        : (q = n[40]);
      var U = E && d.metaWithCaption,
        V;
      n[41] !== E
        ? ((V = !E && [
            o("WAWebUISpacing").uiPadding.horiz3,
            o("WAWebUISpacing").uiPadding.top3,
          ]),
          (n[41] = E),
          (n[42] = V))
        : (V = n[42]);
      var H;
      n[43] !== U || n[44] !== V
        ? ((H = [U, V]), (n[43] = U), (n[44] = V), (n[45] = H))
        : (H = n[45]);
      var G;
      n[46] !== a || n[47] !== m
        ? ((G = u.jsx(o("WAWebMessageMeta.react").Meta, {
            msg: m,
            associatedMessages: a,
          })),
          (n[46] = a),
          (n[47] = m),
          (n[48] = G))
        : (G = n[48]);
      var z;
      n[49] !== H || n[50] !== G
        ? ((z = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            xstyle: H,
            children: G,
          })),
          (n[49] = H),
          (n[50] = G),
          (n[51] = z))
        : (z = n[51]);
      var j;
      return (
        n[52] !== E ||
        n[53] !== q ||
        n[54] !== z ||
        n[55] !== D ||
        n[56] !== x ||
        n[57] !== $ ||
        n[58] !== P ||
        n[59] !== N
          ? ((j = u.jsxs(
              "div",
              babelHelpers.extends({}, D, {
                "data-testid": void 0,
                children: [$, P, N, q, E, z],
              }),
            )),
            (n[52] = E),
            (n[53] = q),
            (n[54] = z),
            (n[55] = D),
            (n[56] = x),
            (n[57] = $),
            (n[58] = P),
            (n[59] = N),
            (n[60] = j))
          : (j = n[60]),
        j
      );
    }
    function p(e) {
      var t = e.caption;
      return t != null;
    }
    function _(e) {
      return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
    }
    l.default = m;
  },
  98,
);
