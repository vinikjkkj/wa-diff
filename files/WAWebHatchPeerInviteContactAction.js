__d(
  "WAWebHatchPeerInviteContactAction",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDebugHatchDirectSend",
    "WAWebFindChatAction",
    "WAWebHatchPeerConnectionsActions",
    "WAWebHatchVmConnection",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new Set(),
      c = new Map();
    async function d(e) {
      var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        n = await o("WAWebHatchPeerConnectionsActions").mintHatchPeerInviteLink(
          e.name,
          e.key,
        );
      if (
        n.kind !== "ok" ||
        t !== o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      )
        return "failed";
      var r = await f(
        e.wid,
        h() +
          `
` +
          n.value,
      );
      return r ? (u.add(y(t, e.key)), "invited") : "failed";
    }
    function m() {
      var e = y(o("WAWebHatchVmConnection").getHatchVmAccountGeneration(), "");
      return new Set(
        Array.from(u)
          .filter(function (t) {
            return t.startsWith(e);
          })
          .map(function (t) {
            return t.slice(e.length);
          }),
      );
    }
    async function p(e) {
      if (
        !o("WAWebDebugHatchDirectSend").isHatchDirectSendEnabled() ||
        !e.wid.isLid()
      )
        return "failed";
      var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        n = await o(
          "WAWebHatchPeerConnectionsActions",
        ).mintHatchPeerMailboxInvite(e.name, e.key);
      if (
        n.kind !== "ok" ||
        t !== o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      )
        return "failed";
      var r = await o(
        "WAWebHatchPeerConnectionsActions",
      ).sendHatchPeerMailboxInvite(
        { kind: "whatsapp", lid: o("WAWebWidFactory").asUserLidOrThrow(e.wid) },
        n.value,
      );
      if (
        r.kind !== "ok" ||
        t !== o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      )
        return "failed";
      var a = r.value === "sent" ? "sent" : "not_on_muse";
      return (c.set(y(t, e.key), a), a);
    }
    function _() {
      var e = y(o("WAWebHatchVmConnection").getHatchVmAccountGeneration(), "");
      return new Map(
        Array.from(c)
          .filter(function (t) {
            var n = t[0];
            return n.startsWith(e);
          })
          .map(function (t) {
            var n = t[0],
              r = t[1];
            return [n.slice(e.length), r];
          }),
      );
    }
    async function f(t, n) {
      try {
        var a = await o("WAWebFindChatAction").findOrCreateLatestChat(
            t,
            "hatchConnectionsInvite",
          ),
          i = a.chat,
          l = i.active;
        l ||
          i.setComposeContents({
            text: g(i, n),
            timestamp: o("WATimeUtils").unixTime(),
          });
        var s = await o("WAWebCmd").Cmd.openChatFromUnread({
          chat: i,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer,
        });
        return (
          s && l && o("WAWebComposeBoxActions").ComposeBoxActions.paste(i, n),
          s && o("WAWebComposeBoxActions").ComposeBoxActions.focus(i),
          s
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-peer-invite: opening the chat failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-peer-invite-open-chat-failed"),
          !1
        );
      }
    }
    function g(e, t) {
      var n, r;
      o("WAWebComposeBoxActions").ComposeBoxActions.trigger(
        "flush_compose_contents_" + e.id.toString(),
      );
      var a = (
        (n = (r = e.getComposeContents()) == null ? void 0 : r.text) != null
          ? n
          : ""
      ).trimEnd();
      return a !== ""
        ? a +
            `
` +
            t
        : t;
    }
    function h() {
      return s._(/*BTDS*/ "").toString();
    }
    function y(e, t) {
      return e + "|" + t;
    }
    ((l.inviteHatchPeerContact = d),
      (l.getHatchPeerInvitedContactKeys = m),
      (l.directSendHatchPeerContact = p),
      (l.getHatchPeerContactMuseRequests = _));
  },
  226,
);
