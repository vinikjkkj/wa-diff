__d(
  "WAWebForwardWithCaptionPreview.react",
  [
    "fbt",
    "WAWebChatMsgSymbol.react",
    "WAWebChatPreferenceCollection",
    "WAWebClickable.react",
    "WAWebClock",
    "WAWebEmojiPickerPlugin",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebImageIcon.react",
    "WAWebMediaThumbnail.react",
    "WAWebMediaUrlProvider",
    "WAWebMsgType",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebUISpacing",
    "WAWebVideoPlaceholderIcon.react",
    "WAWebVideoPreview.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcDescription.react",
    "WDSIconIcEdit.react",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(e) {
      var t = {
        video: { count: 0, representativeMsg: null },
        photo: { count: 0, representativeMsg: null },
        gif: { count: 0, representativeMsg: null },
      };
      for (var n of e)
        n.type === o("WAWebMsgType").MSG_TYPE.VIDEO && !n.isGif
          ? ((t.video.count += 1),
            t.video.representativeMsg == null &&
              (t.video.representativeMsg = n))
          : n.type === o("WAWebMsgType").MSG_TYPE.IMAGE
            ? ((t.photo.count += 1),
              t.photo.representativeMsg == null &&
                (t.photo.representativeMsg = n))
            : n.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
              n.isGif &&
              ((t.gif.count += 1),
              t.gif.representativeMsg == null && (t.gif.representativeMsg = n));
      return t;
    }
    function p(e) {
      var t = e.gif,
        n = e.photo,
        r = e.video;
      return r.count > 0 && r.count >= n.count && r.count >= t.count
        ? { type: "video", info: r }
        : n.count > 0 && n.count >= t.count
          ? { type: "photo", info: n }
          : t.count > 0
            ? { type: "gif", info: t }
            : null;
    }
    function _(e, t) {
      switch (e) {
        case "video":
          return s._(/*BTDS*/ '_j{"*":"{number} videos","_1":"1 video"}', [
            s._plural(t, "number"),
          ]);
        case "photo":
          return s._(/*BTDS*/ '_j{"*":"{number} photos","_1":"1 photo"}', [
            s._plural(t, "number"),
          ]);
        case "gif":
          return s._(/*BTDS*/ '_j{"*":"{number} GIFs","_1":"1 GIF"}', [
            s._plural(t, "number"),
          ]);
      }
    }
    function f(e, t, n) {
      var r = _(e, t);
      return n > 0
        ? s._(
            /*BTDS*/ '_j{"*":"{primary_type} and {number} others","_1":"{primary_type} and 1 other"}',
            [s._plural(n, "number"), s._param("primary_type", r)],
          )
        : r;
    }
    function g(e) {
      var t = m(e),
        n = p(t);
      if (n != null) {
        var r = e.length - n.info.count;
        return {
          mediaTypeText: f(n.type, n.info.count, r),
          representativeMsg: n.info.representativeMsg,
        };
      }
      return {
        mediaTypeText: s._(
          /*BTDS*/ '_j{"*":"{number} messages","_1":"1 message"}',
          [s._plural(e.length, "number")],
        ),
        representativeMsg: null,
      };
    }
    var h = "xekv6nw-B",
      y = "0.1s",
      C = "0.3s",
      b = "cubic-bezier(0.1, 0.82, 0.25, 1)",
      v = "forwards",
      S = "hidden",
      R = {
        mediaForwardWrapper: {
          position: "x1n2onr6",
          height: "xcbkimw",
          width: "x3p9ev8",
          backgroundColor: "x1od0jb8",
          $$css: !0,
        },
        textForwardWrapper: {
          position: "x1n2onr6",
          height: "xwzfr38",
          width: "x3p9ev8",
          backgroundColor: "xtl5do8",
          $$css: !0,
        },
        textForwardWrapperPadding: { paddingTop: "x1xrf6ya", $$css: !0 },
        textContainer: {
          position: "x1n2onr6",
          height: "x5yr21d",
          width: "xh8yej3",
          $$css: !0,
        },
        mediaForwardInputContainer: {
          position: "x1n2onr6",
          height: "x5yr21d",
          width: "x86nts4",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
        textForwardInputContainer: {
          position: "x1n2onr6",
          height: "xn3w4p2",
          width: "x3p9ev8",
          backgroundColor: "x1c7u0tx",
          $$css: !0,
        },
        captionPreviewContainer: {
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        mediaForwardComposerContainer: {
          cursor: "x1ed109x",
          opacity: "xg01cxk",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        textForwardComposerContainer: {
          cursor: "x1ed109x",
          opacity: "xg01cxk",
          borderStartStartRadius: "x1ua1ujl",
          borderStartEndRadius: "xksyday",
          borderEndEndRadius: "xshg46c",
          borderEndStartRadius: "xlej2ay",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        composerWrapper: { display: "x78zum5", $$css: !0 },
        mediaForwardComposerInput: {
          height: "x1plxi8p",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        textForwardComposerInput: {
          height: "x1fgtraw",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        composerFont: { fontSize: null, $$css: !0 },
        textForwardPlaceholderColor: { color: "x18cpw0e", $$css: !0 },
        mediaThumbContainer: {
          minWidth: "xculje8",
          height: "x5yr21d",
          $$css: !0,
        },
        placeholderIcon: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
        documentIcon: { height: "xng8ra", width: "x1247r65", $$css: !0 },
        thumbContainer: {
          width: "x46vnbo",
          height: "x11daxxc",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x14rkfp4",
          borderInlineEndColor: "x1ykej3n",
          borderBottomColor: "xolcn3t",
          borderInlineStartColor: "xskrr25",
          $$css: !0,
        },
        thumb: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundRepeat: "xiy17q3",
          backgroundPosition: "x1xsqp64",
          backgroundSize: "x18d0r48",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        quotedCaption: {
          flexGrow: "x1iyjqo2",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1f6kntn",
          fontWeight: "xo1l8bm",
          position: "x1n2onr6",
          color: "xhslqc4",
          $$css: !0,
        },
        captionTextContainer: { width: "xh8yej3", $$css: !0 },
        captionTextSpacing: { whiteSpace: "xti2ec1", $$css: !0 },
        composerContainerAnimate: {
          animationName: "x127lhb5",
          animationDuration: "x4afe7t",
          animationDelay: "x1k0bccz",
          animationTimingFunction: "x1wg5k15",
          animationFillMode: "x10e4vud",
          backfaceVisibility: "xlp1x4z",
          $$css: !0,
        },
      };
    function L(t) {
      var n = t.allMsgs,
        a = t.captionPlaceholderText,
        l = t.displayCaptionText,
        u = t.msgs,
        m = t.onAppendMessage,
        p = t.onEditClick,
        _ = t.onRemoveCaptionSelect,
        f = t.showEditIcon,
        h = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["spellcheck", "transformTextEmoji", "enterIsSend"],
        ),
        y = u[0],
        C = u.length > 1,
        b = function () {
          var e = n != null ? n : u,
            t = e.length === 1;
          if (t) {
            var a = null,
              i =
                y.type === o("WAWebMsgType").MSG_TYPE.VIDEO && !y.isGif
                  ? o("WAWebClock").Clock.durationStr(Number(y.duration)) + " "
                  : null;
            switch (y.type) {
              case o("WAWebMsgType").MSG_TYPE.IMAGE:
                a = s._(/*BTDS*/ "Photo");
                break;
              case o("WAWebMsgType").MSG_TYPE.VIDEO:
                y.isGif
                  ? (a = s._(/*BTDS*/ "GIF"))
                  : (a = s._(/*BTDS*/ "Video"));
                break;
              case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                a = y.filename;
                break;
            }
            var l = c.jsxs("span", {
                className: "xk50ysn",
                children: [" ", a, " "],
              }),
              d = c.jsx(
                r("WAWebChatMsgSymbol.react"),
                { msg: y.unsafe() },
                "msg-symbol",
              );
            return [i, l, d];
          }
          var m = g(e),
            p = m.mediaTypeText,
            _ = m.representativeMsg,
            f = c.jsxs("span", {
              className: "xk50ysn",
              children: [" ", p, " "],
            }),
            h = _ != null ? _ : y,
            C = c.jsx(
              r("WAWebChatMsgSymbol.react"),
              { msg: h.unsafe() },
              "msg-symbol",
            );
          return [null, f, C];
        },
        v = function (t) {
          m(t.text);
        },
        S = b(),
        L = S[0],
        k = S[1],
        I = S[2],
        T =
          C || (n != null && n.length > u.length)
            ? s._(
                /*BTDS*/ '_j{"*":"{caption_count} captions","_1":"1 caption"}',
                [s._plural(u.length, "caption_count")],
              )
            : r("WAWebFormatMsgText")({
                msg: y.unsafe(),
                options: { unformat: !1 },
              }),
        D = o("WAWebFormatConfiguration").QuotedMention({
          mentions: y.mentionMap(),
          groupMentions: y.groupMentionMap(),
        }),
        x = c.jsxs(o("WAWebFlex.react").FlexColumn, {
          className: (e || (e = r("stylex")))([
            R.quotedCaption,
            o("WAWebUISpacing").uiPadding.all8,
          ]),
          align: "start",
          justify: "center",
          children: [
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 4,
              children: [I, L, k],
            }),
            c.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                o("WAWebUISpacing").uiMargin.vert5,
                R.captionTextContainer,
              ],
              children: c.jsx(
                o("WAWebEmojiText.react").EmojiText,
                {
                  xstyle: R.captionTextSpacing,
                  className:
                    "x1evy7pa x104kibb x6ikm8r x10wlt62 xlyipyv x1h7i4cw x1ua5tub",
                  direction: o("WAWebFrontendMsgGetters").getDir(y),
                  text: T,
                  formatters: D,
                  ellipsify: !0,
                  testid: void 0,
                },
                "status",
              ),
            }),
          ],
        }),
        $ = C
          ? s._(/*BTDS*/ "Remove captions")
          : s._(/*BTDS*/ "Remove caption"),
        P = l
          ? c.jsxs(r("WAWebFlexItem.react"), {
              grow: 1,
              xstyle: [R.mediaForwardInputContainer, R.captionPreviewContainer],
              children: [
                c.jsx("span", { className: "x2lah0s x51ohtg x1rr48d" }),
                x,
                c.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcClose.react"),
                  variant: "borderless",
                  size: "small",
                  onPress: _,
                  "aria-label": $,
                  testid: void 0,
                }),
              ],
            })
          : null,
        N = d(),
        M = N[0],
        w = N[1],
        A = function () {
          M == null || M.focus();
        };
      function F(e) {
        switch (e.type) {
          case o("WAWebMsgType").MSG_TYPE.IMAGE:
            return o("WAWebImageIcon.react").ImageIcon;
          case o("WAWebMsgType").MSG_TYPE.VIDEO:
            return o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon;
          default:
            return r("WDSIconIcDescription.react");
        }
      }
      function O(e) {
        var t = F(e);
        return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT
          ? c.jsx(
              "div",
              {
                className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                children: c.jsx(t, { iconXstyle: R.documentIcon }),
              },
              "default",
            )
          : c.jsx(
              "div",
              {
                className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                children: c.jsx(t, { iconXstyle: R.placeholderIcon }),
              },
              "default",
            );
      }
      O.displayName = O.name + " [from " + i.id + "]";
      var B = O(y);
      function W(t) {
        switch (t.type) {
          case o("WAWebMsgType").MSG_TYPE.IMAGE:
            return c.jsx(r("WAWebMediaUrlProvider"), {
              mediaData: t.mediaData,
              placeholderRenderer: function () {
                return B;
              },
              downloadMedia: function () {
                return t.downloadMedia({
                  downloadEvenIfExpensive: !1,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.OTHER,
                  isUserInitiated: !1,
                });
              },
              renderProgressively: !1,
              children: function (n) {
                return c.jsx("div", {
                  className: (e || (e = r("stylex")))([
                    R.thumbContainer,
                    R.thumb,
                    o("WAWebUISpacing").uiMargin.end8,
                  ]),
                  style: { backgroundImage: "url(" + n + ")" },
                });
              },
            });
          case o("WAWebMsgType").MSG_TYPE.VIDEO: {
            var n = t.safe();
            return n.type === o("WAWebMsgType").MSG_TYPE.VIDEO && n.isGif !== !0
              ? c.jsx("div", {
                  className: (e || (e = r("stylex")))([
                    R.thumbContainer,
                    R.thumb,
                  ]),
                  children: c.jsx(r("WAWebVideoPreview.react"), {
                    msg: n,
                    mediaData: t.mediaData,
                  }),
                })
              : null;
          }
          case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
            return c.jsx(r("WAWebMediaThumbnail.react"), {
              msg: t,
              thumbnailPlaceholder: B,
              containerClassName:
                "x46vnbo x11daxxc xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x14rkfp4 x1ykej3n xolcn3t xskrr25",
            });
          default:
            return null;
        }
      }
      var q = W(y),
        U = a != null ? a : E(),
        V = l
          ? null
          : c.jsx(o("WAWebClickable.react").Clickable, {
              onClick: A,
              children: c.jsx(r("WAWebFlexItem.react"), {
                grow: 1,
                xstyle: [
                  q
                    ? R.mediaForwardInputContainer
                    : R.textForwardInputContainer,
                  q
                    ? R.mediaForwardComposerContainer
                    : R.textForwardComposerContainer,
                  R.composerContainerAnimate,
                ],
                children: c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiPadding.all12,
                      R.composerWrapper,
                    ),
                    {
                      children: c.jsxs(r("WAWebRichTextInput.react"), {
                        ref: w,
                        xstyle: q
                          ? R.mediaForwardComposerInput
                          : R.textForwardComposerInput,
                        textXstyle: R.composerFont,
                        placeholderTextXStyle:
                          !q && R.textForwardPlaceholderColor,
                        multiline: !0,
                        readOnly: !1,
                        placeholder: U,
                        title: U,
                        maxVisibleLines: q ? 3 : 1,
                        onChange: v,
                        testid: void 0,
                        spellCheck: h.spellcheck,
                        enterIsNewLine: !h.enterIsSend,
                        children: [
                          c.jsx(r("WAWebRichTextInputPlugins.react"), {
                            transformTextEmoji: h.transformTextEmoji,
                            textFormatEnabled: !0,
                            bulletPointsEnabled: !0,
                            numberedListEnabled: !0,
                            inlineCodeEnabled: !0,
                            blockQuoteEnabled: !0,
                          }),
                          c.jsx(r("WAWebEmojiPickerPlugin"), {}),
                        ],
                      }),
                    },
                  ),
                ),
              }),
            }),
        H = q
          ? c.jsx(r("WAWebFlexItem.react"), {
              grow: 0,
              xstyle: R.mediaThumbContainer,
              children: c.jsxs("div", {
                className: "x1n2onr6",
                children: [
                  q,
                  f === !0 &&
                    p != null &&
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: p,
                      ariaLabel: s._(/*BTDS*/ "Edit"),
                      children: c.jsx("div", {
                        className:
                          "x10l6tqk xi2lk0m xz03a8w x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1j3esqa xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1y55ic2 x1urg34u xee4sfp x1xm068e x1ypdohk xo1mcw5",
                        children: c.jsx(r("WDSIconIcEdit.react"), {
                          width: 16,
                          height: 16,
                        }),
                      }),
                    }),
                ],
              }),
            })
          : null;
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(o("WAWebFlex.react").FlexRow, {}),
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              e.props(
                q ? R.mediaForwardWrapper : R.textForwardWrapper,
                o("WAWebUISpacing").uiPadding.all8,
                !q && R.textForwardWrapperPadding,
              ),
              {
                children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: R.textContainer,
                  align: "center",
                  justify: "start",
                  children: [H, P, V],
                }),
              },
            ),
          ),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Add a message...");
    }
    l.default = L;
  },
  226,
);
