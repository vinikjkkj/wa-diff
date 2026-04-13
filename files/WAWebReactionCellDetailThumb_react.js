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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        placeholderIcon: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.reactionText,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x10l6tqk xtzk6r2 xqwxbl3 xmix8c7 x1xp8n7a" }),
          (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = u.jsx(
              "div",
              babelHelpers.extends({}, r, {
                children: u.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                  scale: "reactionCellDetailThumb",
                  size: "small",
                  reaction: n,
                }),
              }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.profileImageId,
        r = e.reactionText,
        a = e.size,
        i = a === void 0 ? "small" : a,
        l;
      t[0] !== i
        ? ((l = {
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
          }[((i === "small") << 1) | ((i === "medium") << 0)]),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s = i === "small" ? 32 : 42,
        c;
      t[2] !== n || t[3] !== s
        ? ((c = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n,
            size: s,
            shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
            theme: "reaction_details",
          })),
          (t[2] = n),
          (t[3] = s),
          (t[4] = c))
        : (c = t[4]);
      var m;
      t[5] !== r
        ? ((m = u.jsx(d, { reactionText: r })), (t[5] = r), (t[6] = m))
        : (m = t[6]);
      var p;
      return (
        t[7] !== l || t[8] !== c || t[9] !== m
          ? ((p = u.jsxs(
              "div",
              babelHelpers.extends({}, l, { children: [c, m] }),
            )),
            (t[7] = l),
            (t[8] = c),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.msg,
        a = e.onCloseDetailsPane,
        i = e.reactionText,
        l = e.showReactionText,
        m = l === void 0 ? !0 : l,
        p;
      t[0] !== n || t[1] !== a
        ? ((p = function (t) {
            var e;
            (t.stopPropagation(), t.preventDefault());
            var r = n.id,
              i = o("WAWebFrontendMsgGetters").getChat(n),
              l = o("WAWebMsgCollection").MsgCollection.get(r),
              c = o("WAWebChatMessageSearch").getSearchContext({
                chat: i,
                msgKey: (e = l == null ? void 0 : l.id) != null ? e : r,
                rootMsg: n == null ? void 0 : n.unsafe(),
              });
            (c && (c.slideToMsg = !0),
              a(),
              o("WAWebCmd").Cmd.openChatAt({
                chat: i,
                msgContext: c,
                onSuccess: {
                  mediaMsgToOpenInMediaViewer: o(
                    "WAWebMsgCollection",
                  ).MsgCollection.get(n.id),
                },
              }),
              !l &&
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Couldn't find message"),
                  }),
                ));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = p))
        : (p = t[2]);
      var f = p,
        g;
      t[3] !== f
        ? ((g = {
            enter: function (t) {
              f(t);
            },
            space: function (t) {
              f(t);
            },
          }),
          (t[3] = f),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] !== n.type
        ? ((y =
            n.type === o("WAWebMsgType").MSG_TYPE.IMAGE
              ? u.jsx(o("WAWebImageIcon.react").ImageIcon, {
                  iconXstyle: c.placeholderIcon,
                })
              : u.jsx(
                  o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon,
                  { iconXstyle: c.placeholderIcon },
                )),
          (t[5] = n.type),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d" }),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== C
        ? ((v = u.createElement(
            "div",
            babelHelpers.extends({}, b, { key: "default" }),
            C,
          )),
          (t[8] = C),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      t[10] !== n || t[11] !== S
        ? ((R =
            n.type === o("WAWebMsgType").MSG_TYPE.IMAGE
              ? u.jsx(r("WAWebMediaUrlProvider"), {
                  mediaData: n.mediaData,
                  placeholderRenderer: function () {
                    return S;
                  },
                  downloadMedia: function () {
                    return n.downloadMedia({
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
                  msg: n,
                  thumbnailPlaceholder: S,
                  childClassName:
                    "xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97 x6ikm8r x10wlt62 xiy17q3 x1xsqp64 x18d0r48",
                })),
          (t[10] = n),
          (t[11] = S),
          (t[12] = R))
        : (R = t[12]);
      var L = R,
        E;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Click to open media")), (t[13] = E))
        : (E = t[13]);
      var k = E,
        I;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97",
          }),
          (t[14] = I))
        : (I = t[14]);
      var T;
      t[15] !== i || t[16] !== m
        ? ((T = m && u.jsx(d, { reactionText: i })),
          (t[15] = i),
          (t[16] = m),
          (t[17] = T))
        : (T = t[17]);
      var D;
      t[18] !== f || t[19] !== T || t[20] !== L
        ? ((D = u.jsxs(
            "div",
            babelHelpers.extends({}, I, {
              onClickCapture: f,
              children: [L, T],
            }),
          )),
          (t[18] = f),
          (t[19] = T),
          (t[20] = L),
          (t[21] = D))
        : (D = t[21]);
      var x;
      t[22] !== f || t[23] !== D
        ? ((x = u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: f,
            "aria-label": k,
            children: D,
          })),
          (t[22] = f),
          (t[23] = D),
          (t[24] = x))
        : (x = t[24]);
      var $;
      return (
        t[25] !== h || t[26] !== x
          ? (($ = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: h,
              children: x,
            })),
            (t[25] = h),
            (t[26] = x),
            (t[27] = $))
          : ($ = t[27]),
        $
      );
    }
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
