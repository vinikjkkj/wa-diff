__d(
  "WAWebReactionCellDetailThumb.react",
  [
    "fbt",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebImageIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaThumbnail.react",
    "WAWebMediaUrlProvider",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebReactionEmoji.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "WAWebVideoPlaceholderIcon.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        placeholderIcon: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
      };
    function d(e) {
      var t = e.reactionText;
      return u.jsx("div", {
        className: "x10l6tqk xtzk6r2 xqwxbl3 xmix8c7 x1xp8n7a",
        children: u.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
          scale: "reactionCellDetailThumb",
          size: "small",
          reaction: t,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.profileImageId,
        n = e.reactionText,
        r = e.size,
        a = r === void 0 ? "small" : r;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh" },
            2: {
              className:
                "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97",
            },
            1: {
              className:
                "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x10h3iyq x5kalc8",
            },
            3: {
              className:
                "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x10h3iyq x5kalc8",
            },
          }[((a === "small") << 1) | ((a === "medium") << 0)],
          {
            children: [
              u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: t,
                size: a === "small" ? 32 : 42,
                shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                theme: "reaction_details",
              }),
              u.jsx(d, { reactionText: n }),
            ],
          },
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.msg,
        n = e.onCloseDetailsPane,
        a = e.reactionText,
        i = e.showReactionText,
        l = i === void 0 ? !0 : i,
        m = function (r) {
          var e;
          (r.stopPropagation(), r.preventDefault());
          var a = t.id,
            i = o("WAWebFrontendMsgGetters").getChat(t),
            l = o("WAWebMsgCollection").MsgCollection.get(a),
            c = o("WAWebChatMessageSearch").getSearchContext({
              chat: i,
              msgKey: (e = l == null ? void 0 : l.id) != null ? e : a,
              rootMsg: t == null ? void 0 : t.unsafe(),
            });
          (c && (c.slideToMsg = !0),
            n(),
            o("WAWebCmd").Cmd.openChatAt({
              chat: i,
              msgContext: c,
              onSuccess: {
                mediaMsgToOpenInMediaViewer: o(
                  "WAWebMsgCollection",
                ).MsgCollection.get(t.id),
              },
            }),
            !l &&
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't find message"),
                }),
              ));
        },
        p = {
          enter: function (t) {
            m(t);
          },
          space: function (t) {
            m(t);
          },
        },
        f =
          t.type === o("WAWebMsgType").MSG_TYPE.IMAGE
            ? u.jsx(o("WAWebImageIcon.react").ImageIcon, {
                iconXstyle: c.placeholderIcon,
              })
            : u.jsx(o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon, {
                iconXstyle: c.placeholderIcon,
              }),
        g = u.jsx(
          "div",
          { className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d", children: f },
          "default",
        ),
        h =
          t.type === o("WAWebMsgType").MSG_TYPE.IMAGE
            ? u.jsx(r("WAWebMediaUrlProvider"), {
                mediaData: t.mediaData,
                placeholderRenderer: function () {
                  return g;
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
                children: _,
              })
            : u.jsx(r("WAWebMediaThumbnail.react"), {
                msg: t,
                thumbnailPlaceholder: g,
                childClassName:
                  "xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97 x6ikm8r x10wlt62 xiy17q3 x1xsqp64 x18d0r48",
              }),
        y = s._(/*BTDS*/ "Click to open media");
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: p,
        children: u.jsx(r("WAWebUnstyledButton.react"), {
          onClick: m,
          "aria-label": y,
          children: u.jsxs("div", {
            className:
              "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97",
            onClickCapture: m,
            children: [h, l && u.jsx(d, { reactionText: a })],
          }),
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return u.jsx("div", {
        className:
          "xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97 x6ikm8r x10wlt62 xiy17q3 x1xsqp64 x18d0r48",
        style: { backgroundImage: "url(" + e + ")" },
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.ReactionCellProfileImageThumb = m),
      (l.ReactionCellDetailThumb = p));
  },
  226,
);
