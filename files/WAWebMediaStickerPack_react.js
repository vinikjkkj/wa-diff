__d(
  "WAWebMediaStickerPack.react",
  [
    "fbt",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebKeyboardTabUtils",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebStickerPackDetailsFlow.react",
    "WAWebStickerPackPreview",
    "WAWebStickerPackUtils",
    "WAWebUISpacing",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        bubble: { boxSizing: "x9f619", width: "x1o095ql", $$css: !0 },
        caption: { boxSizing: "x9f619", maxWidth: "x1d8l2j3", $$css: !0 },
        newsletterBubble: { boxSizing: "x9f619", width: "x4blvmq", $$css: !0 },
      };
    function m(t) {
      var a = o("react-compiler-runtime").c(34),
        i = t.displayAuthor,
        l = t.displayType,
        u = t.msg,
        m;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [o("WAWebMsgGetters").getIsCaptionByUser]), (a[0] = m))
        : (m = a[0]);
      var p = o("useWAWebMsgValues").useMsgValues(t.msg.id, m),
        _ = p[0],
        f;
      if (a[1] !== u) {
        var g = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield u.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .DOCUMENT_DOWNLOAD,
              isUserInitiated: !0,
            });
            var e = o("WAWebStateUtils").unproxy(u.unsafe()).mediaData
                .mediaBlob,
              t = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(
                e,
                u,
              );
            h(t);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
        f = function () {
          g();
        };
        var h = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(r("WAWebStickerPackDetailsFlow.react"), {
              msg: u,
              stickers: t,
            }),
            { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
          );
        };
        ((a[1] = u), (a[2] = f));
      } else f = a[2];
      var y;
      a[3] !== _ || a[4] !== u
        ? ((y = _
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    d.caption,
                    o("WAWebUISpacing").uiPadding.top6,
                    o("WAWebUISpacing").uiPadding.end4,
                    o("WAWebUISpacing").uiPadding.start6,
                  ),
                  {
                    children: c.jsx(r("WAWebMessageCaption.react"), {
                      msg: u.unsafe(),
                      testId: "document-caption",
                    }),
                  },
                ),
              )
            : null),
          (a[3] = _),
          (a[4] = u),
          (a[5] = y))
        : (y = a[5]);
      var C = y,
        b;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.bottom9,
          )),
          (a[6] = b))
        : (b = a[6]);
      var v;
      a[7] !== u
        ? ((v = c.jsx(r("WAWebStickerPackPreview"), { msg: u })),
          (a[7] = u),
          (a[8] = v))
        : (v = a[8]);
      var S;
      a[9] !== C
        ? ((S = c.jsx(o("WAWebFlex.react").FlexRow, { children: C })),
          (a[9] = C),
          (a[10] = S))
        : (S = a[10]);
      var R;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "x10l6tqk x1inkcgm" }), (a[11] = R))
        : (R = a[11]);
      var L;
      a[12] !== u
        ? ((L = c.jsx(o("WAWebFlex.react").FlexRow, {
            children: c.jsx(
              "div",
              babelHelpers.extends({}, R, {
                children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: u }),
              }),
            ),
          })),
          (a[12] = u),
          (a[13] = L))
        : (L = a[13]);
      var E;
      a[14] !== v || a[15] !== S || a[16] !== L
        ? ((E = c.jsxs(
            "div",
            babelHelpers.extends({}, b, { children: [v, S, L] }),
          )),
          (a[14] = v),
          (a[15] = S),
          (a[16] = L),
          (a[17] = E))
        : (E = a[17]);
      var k;
      a[18] !== i || a[19] !== l || a[20] !== u || a[21] !== E
        ? ((k = c.jsx(r("WAWebMessageTextBubble.react"), {
            displayType: l,
            msg: u,
            displayAuthor: i,
            hideMeta: !0,
            children: E,
          })),
          (a[18] = i),
          (a[19] = l),
          (a[20] = u),
          (a[21] = E),
          (a[22] = k))
        : (k = a[22]);
      var I = k,
        T;
      a[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "View sticker pack")), (a[23] = T))
        : (T = a[23]);
      var D = T,
        x;
      a[24] !== l
        ? ((x = (e || (e = r("stylex"))).props(
            l === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              ? d.newsletterBubble
              : d.bubble,
            o("WAWebUISpacing").uiPadding.all3,
          )),
          (a[24] = l),
          (a[25] = x))
        : (x = a[25]);
      var $;
      a[26] !== I || a[27] !== x
        ? (($ = c.jsxs(
            "div",
            babelHelpers.extends({}, x, { children: [I, " "] }),
          )),
          (a[26] = I),
          (a[27] = x),
          (a[28] = $))
        : ($ = a[28]);
      var P;
      a[29] !== f
        ? ((P = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
              .STICKER_PACK,
            items: [
              {
                label: D,
                title: D,
                onClick: f,
                disabled: !1,
                testid: "view-sticker-pack",
              },
            ],
          })),
          (a[29] = f),
          (a[30] = P))
        : (P = a[30]);
      var N;
      return (
        a[31] !== $ || a[32] !== P
          ? ((N = c.jsxs(c.Fragment, { children: [$, P] })),
            (a[31] = $),
            (a[32] = P),
            (a[33] = N))
          : (N = a[33]),
        N
      );
    }
    l.default = m;
  },
  226,
);
