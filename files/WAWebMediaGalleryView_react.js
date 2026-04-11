__d(
  "WAWebMediaGalleryView.react",
  [
    "fbt",
    "WAWebClassnames",
    "WAWebEmptyState.react",
    "WAWebFbtIntlList",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebMediaHubEmptyGalleryEntryPoint.react",
    "WAWebSpinner.react",
    "WAWebStylesEnv",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useRef,
      p = {
        containerRefreshedPadding: {
          paddingTop: "x16ovd2e",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdylf7x",
          paddingInlineEnd: "x5s3kwk",
          $$css: !0,
        },
        container: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexWrap: "x1a02dak",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1yrsyyn",
          marginInlineEnd: "x1bryted",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        containerRefreshed: {
          display: "x78zum5",
          flexWrap: "x1a02dak",
          columnGap: "x1s70e7g",
          $$css: !0,
        },
        justifySpaceBetween: {
          justifyContent: "x1qughib",
          width: "xh8yej3",
          $$css: !0,
        },
        galleryEmpty: {
          height: "xqvfhly",
          paddingTop: "xexx8yu",
          paddingBottom: "xr1496l",
          fontSize: "x1f6kntn",
          lineHeight: "x1i47q4g",
          color: "x12lhmx5",
          $$css: !0,
        },
        fontSmoothing: {
          "-webkit-font-smoothing": "xvmahel",
          "-moz-osx-font-smoothing": "xlh3980",
          $$css: !0,
        },
        drawer: {
          paddingTop: "x9orja2",
          paddingBottom: "xbaz6xv",
          paddingInlineStart: "x162tt16",
          paddingInlineEnd: "x1xnnf8n",
          marginInlineEnd: "x14z9mp",
          overflowY: "x1rife3k",
          $$css: !0,
        },
        themeChatInfo: { color: "xnv7mtq", $$css: !0 },
      };
    function _() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = d.jsx("div", {
              className: "x1n2onr6 xa1il55 xqtp20y x1bryted x1hmdwey x1gk22k6",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(34),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.chat,
        c = l.fullCollection,
        f = l.isRefresh,
        h = l.justify,
        y = l.mediaCollection,
        C = l.onScroll,
        b = f === void 0 ? !1 : f,
        v = a.medias || a.productMedias,
        S = a.theme === "chat-info",
        R = y.length === 0,
        L = m(null),
        E = m(null),
        k = r("useMergeRefs")(i, L);
      if (!v) return null;
      var I, T, D;
      if (
        n[3] !== s ||
        n[4] !== S ||
        n[5] !== c ||
        n[6] !== R ||
        n[7] !== b ||
        n[8] !== h ||
        n[9] !== y.hasMediaBefore ||
        n[10] !== y.length ||
        n[11] !== y.queryMediaBefore ||
        n[12] !== v
      ) {
        D = Symbol.for("react.early_return_sentinel");
        e: {
          if (
            ((I = (u || (u = r("stylex")))(
              b
                ? [p.containerRefreshed, p.containerRefreshedPadding]
                : p.container,
              !!c && p.drawer,
              R && p.galleryEmpty,
              R && o("WAWebStylesEnv").isOSMac && p.fontSmoothing,
              h === "space-between" && p.justifySpaceBetween,
              S && R && p.themeChatInfo,
            )),
            (T = [].concat(v)),
            y.queryMediaBefore != null && (c || T.length < 6))
          ) {
            var x = {
                0: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1sa5p1d xyorhqc x1hmdwey x1gk22k6",
                4: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0",
                2: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1sa5p1d xyorhqc x1hmdwey x1gk22k6 x1s85apg x1axa3pm xze2x15",
                6: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0 x1s85apg x1axa3pm xze2x15",
                1: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1hmdwey x1gk22k6 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
                5: "x78zum5 x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
                3: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 xa1il55 x1hmdwey x1gk22k6 x1s85apg x1axa3pm xze2x15 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
                7: "x6s0dn4 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1brnrfz x9f619 xccv8h0 x1s85apg x1axa3pm xze2x15 xqvfhly xdj266r x14z9mp xat24cr x1lziwak",
              }[
                (!!b << 2) |
                  ((!c && T.length >= 3) << 1) |
                  ((y.length === 0) << 0)
              ],
              $,
              P;
            n[16] === Symbol.for("react.memo_cache_sentinel")
              ? (($ = d.jsx("span", {
                  className: "x1etwn82 x1ukowes x14obwa1",
                })),
                (P = d.jsx(o("WAWebSpinner.react").Spinner, {
                  stroke: 6,
                  size: 24,
                })),
                (n[16] = $),
                (n[17] = P))
              : (($ = n[16]), (P = n[17]));
            var N;
            (n[18] !== x
              ? ((N = d.jsxs(
                  "div",
                  { className: x, children: [$, P] },
                  "spinner",
                )),
                (n[18] = x),
                (n[19] = N))
              : (N = n[19]),
              T.push(N));
          }
          if (v.length === 0) {
            if (c) {
              if (y.queryMediaBefore != null) {
                var M;
                (n[20] === Symbol.for("react.memo_cache_sentinel")
                  ? ((M = d.jsx("div", {
                      className:
                        "x9orja2 xbaz6xv x162tt16 x1xnnf8n x14z9mp x1n2onr6 xhtitgo x78zum5 x1iyjqo2 xdt5ytf x6ikm8r x1odjw0f x1hc1fzr",
                      children: d.jsx(o("WAWebEmptyState.react").Loading, {}),
                    })),
                    (n[20] = M))
                  : (M = n[20]),
                  (D = M));
                break e;
              } else if (y.hasMediaBefore !== !0) {
                var w;
                (n[21] === Symbol.for("react.memo_cache_sentinel")
                  ? ((w = d.jsx(
                      o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                        .WAWebMediaHubEmptyGalleryEntryPoint,
                      {
                        tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react")
                          .MediaHubTabs.MEDIA,
                      },
                    )),
                    (n[21] = w))
                  : (w = n[21]),
                  (D = w));
                break e;
              }
            }
            if (S) {
              D = null;
              break e;
            }
            if (y.queryMediaBefore == null && y.hasMediaBefore !== !0) {
              I = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                I,
                {
                  0: "xqvfhly xexx8yu xr1496l x1f6kntn x1i47q4g x12lhmx5",
                  1: "xqvfhly xexx8yu xr1496l x1f6kntn x1i47q4g x12lhmx5 xvmahel xlh3980",
                }[!!o("WAWebStylesEnv").isOSMac << 0],
              );
              var A = Math.max(s ? s.docCount : 0, 0),
                F = Math.max(s ? s.linkCount : 0, 0),
                O = Math.max(s ? s.productCount : 0, 0),
                B;
              n[22] !== A || n[23] !== F || n[24] !== O
                ? ((B = g(A, F, O)),
                  (n[22] = A),
                  (n[23] = F),
                  (n[24] = O),
                  (n[25] = B))
                : (B = n[25]);
              var W;
              (n[26] !== B
                ? ((W = [B]), (n[26] = B), (n[27] = W))
                : (W = n[27]),
                (T = W));
            }
          } else for (var q = 0; q < 6; q++) T.push(d.jsx(_, {}, "empty" + q));
        }
        ((n[3] = s),
          (n[4] = S),
          (n[5] = c),
          (n[6] = R),
          (n[7] = b),
          (n[8] = h),
          (n[9] = y.hasMediaBefore),
          (n[10] = y.length),
          (n[11] = y.queryMediaBefore),
          (n[12] = v),
          (n[13] = I),
          (n[14] = T),
          (n[15] = D));
      } else ((I = n[13]), (T = n[14]), (D = n[15]));
      if (D !== Symbol.for("react.early_return_sentinel")) return D;
      var U;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function () {
            if (document.activeElement === L.current) {
              var e;
              (e = E.current) == null || e.focusFirst();
            }
          }),
          (n[28] = U))
        : (U = n[28]);
      var V;
      return (
        n[29] !== I || n[30] !== T || n[31] !== k || n[32] !== C
          ? ((V = d.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
              ref: E,
              customSelector: "[role='listitem']",
              children: d.jsx("div", {
                ref: k,
                tabIndex: 0,
                onFocus: U,
                onScroll: C,
                "data-testid": void 0,
                className: I,
                children: T,
              }),
            })),
            (n[29] = I),
            (n[30] = T),
            (n[31] = k),
            (n[32] = C),
            (n[33] = V))
          : (V = n[33]),
        V
      );
    }
    function g(e, t, n) {
      var o = [];
      return (
        e != null &&
          e > 0 &&
          o.push(
            s._(/*BTDS*/ '_j{"*":"{count} docs","_1":"1 doc"}', [
              s._plural(e, "count"),
            ]),
          ),
        t != null &&
          t > 0 &&
          o.push(
            s._(/*BTDS*/ '_j{"*":"{count} links","_1":"1 link"}', [
              s._plural(t, "count"),
            ]),
          ),
        n != null &&
          n > 0 &&
          o.push(
            s._(/*BTDS*/ '_j{"*":"{count} products","_1":"1 product"}', [
              s._plural(n, "count"),
            ]),
          ),
        o.length > 0
          ? r("WAWebFbtIntlList")(
              o,
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            )
          : s._(/*BTDS*/ "No media, links, docs and products")
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = f;
    ((l.EmptyCanvas = _), (l.MediaGalleryView = h));
  },
  226,
);
