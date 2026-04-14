__d(
  "WAWebWrapperGroupProfilePicture.react",
  [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebGetDisplayType",
    "WAWebGroupChatProfilePicture.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebViewMode.flow",
    "WAWebWrapperShouldHaveTail",
    "react",
    "useWAWebAssociatedMessages",
    "useWAWebMsgValues",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = [
        o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
        o("WAWebDisplayType").DISPLAY_TYPE.ALL_REPLIES,
      ];
    function d(e) {
      var t = e.selectable,
        n = e.msg,
        a = e.position,
        i = e.tailOverride,
        l = e.sticky,
        d = e.lastMsgs,
        m = d === void 0 ? [] : d,
        p = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsNotification,
        ]),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(
          m.length > 0 ? m[0].unsafe() : n,
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
        ),
        C = u(
          function () {
            return [].concat(m, y).map(function (e) {
              return e.id.toString();
            });
          },
          [y, m],
        ),
        b = r("useWAWebReactions")(
          C,
          r("WAWebNoop"),
          m.some(function (e) {
            return o("WAWebMsgGetters").getHasReaction(e);
          }) ||
            y.some(function (e) {
              return o("WAWebMsgGetters").getHasReaction(e);
            }),
        ),
        v = b.reactionsModels,
        S = v.some(function (e) {
          return e.reactions.length > 0;
        }),
        R = u(
          function () {
            return o("WAWebGetDisplayType").getDisplayType(n);
          },
          [n],
        ),
        L = u(
          function () {
            return o("WAWebFrontendMsgGetters").getChat(n);
          },
          [n],
        ),
        E = o("WAWebWrapperShouldHaveTail").shouldHaveTail({
          chat: L,
          isDisplayedAsNotification: h,
          displayType: R,
          tailOverride: i,
          position: a,
        }),
        k =
          f &&
          !g &&
          (!!E || n.type === o("WAWebMsgType").MSG_TYPE.PTV) &&
          c.includes(R) &&
          t !== !0 &&
          (_ == null ? void 0 : _.id) != null;
      return k
        ? s.jsx(r("WAWebGroupChatProfilePicture.react"), {
            userContact: _,
            chatWid: L.id,
            sticky: l,
            lastMessageHasReaction: S,
          })
        : null;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
