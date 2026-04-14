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
      var a = t.displayAuthor,
        i = t.displayType,
        l = t.msg,
        u = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          o("WAWebMsgGetters").getIsCaptionByUser,
        ]),
        m = u[0],
        p = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield l.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .DOCUMENT_DOWNLOAD,
              isUserInitiated: !0,
            });
            var e = o("WAWebStateUtils").unproxy(l.unsafe()).mediaData
                .mediaBlob,
              t = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(
                e,
                l,
              );
            f(t);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        _ = function () {
          p();
        },
        f = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(r("WAWebStickerPackDetailsFlow.react"), {
              msg: l,
              stickers: t,
            }),
            { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
          );
        },
        g = m
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
                    msg: l.unsafe(),
                    testId: "document-caption",
                  }),
                },
              ),
            )
          : null,
        h = c.jsx(r("WAWebMessageTextBubble.react"), {
          displayType: i,
          msg: l,
          displayAuthor: a,
          hideMeta: !0,
          children: c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.bottom9,
              ),
              {
                children: [
                  c.jsx(r("WAWebStickerPackPreview"), { msg: l }),
                  c.jsx(o("WAWebFlex.react").FlexRow, { children: g }),
                  c.jsx(o("WAWebFlex.react").FlexRow, {
                    children: c.jsx("div", {
                      className: "x10l6tqk x1inkcgm",
                      children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                        msg: l,
                      }),
                    }),
                  }),
                ],
              },
            ),
          ),
        }),
        y = s._(/*BTDS*/ "View sticker pack");
      return c.jsxs(c.Fragment, {
        children: [
          c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              e.props(
                i === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
                  ? d.newsletterBubble
                  : d.bubble,
                o("WAWebUISpacing").uiPadding.all3,
              ),
              { children: [h, " "] },
            ),
          ),
          c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
              .STICKER_PACK,
            items: [
              {
                label: y,
                title: y,
                onClick: _,
                disabled: !1,
                testid: "view-sticker-pack",
              },
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
