__d(
  "WAWebSupportChatAuthRefreshHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupMetadataCollection",
    "WAWebSupportChatAuthRefreshMutation",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 6e4,
      m = new Map(),
      p = new Set(),
      _ = 0;
    function f() {
      (_++, m.clear(), p.clear());
    }
    async function g(e, t) {
      var n = e.id.toString();
      if (!(p.has(n) || v(n))) {
        var r = _;
        p.add(n);
        try {
          await h(e, n, t, r);
        } finally {
          r === _ && p.delete(n);
        }
      }
    }
    async function h(t, n, a, i) {
      var l = await C(t).catch(function (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[support-chat-auth] ",
                  " group members could not be loaded",
                ])),
              a,
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      });
      if (!(l == null || i !== _)) {
        var u = l.botFbid,
          c = l.chatKind;
        m.set(n, o("WATimeUtils").monotonicTime());
        try {
          var d = await o(
            "WAWebSupportChatAuthRefreshMutation",
          ).refreshSupportChatAuthGraphQL({ bot_fbid: u, chat_kind: c });
          y(a, c, d);
        } catch (e) {
          (i === _ && m.delete(n),
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[support-chat-auth] ",
                    " ",
                    " refresh failed",
                  ])),
                a,
                c,
              )
              .catching(r("getErrorSafe")(e)));
        }
      }
    }
    function y(e, t, n) {
      if (n === "SCHEDULED") {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[support-chat-auth] ",
              " ",
              " refresh: status=",
              "",
            ])),
          e,
          t,
          n,
        );
        return;
      }
      o("WALogger").WARN(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[support-chat-auth] ",
            " ",
            " refresh: status=",
            "",
          ])),
        e,
        t,
        n,
      );
    }
    async function C(e) {
      if (e.id.isSupportAgentBot())
        return { botFbid: e.id.user, chatKind: "SUPPORT_CHAT" };
      if (!e.id.isGroup()) return null;
      var t = await b(e),
        n = t.participants.findFirst(function (e) {
          return e.id.isSupportAgentBot();
        });
      return n == null ? null : { botFbid: n.id.user, chatKind: "GROUP_CHAT" };
    }
    function b(e) {
      var t = e.groupMetadata;
      return t != null && !t.stale
        ? Promise.resolve(t)
        : r("WAWebGroupMetadataCollection").find(e.id);
    }
    function v(e) {
      var t = m.get(e);
      return t != null && o("WATimeUtils").monotonicTimeSince(t) < d;
    }
    ((l.resetSession = f), (l.refreshIfSupportChat = g));
  },
  98,
);
