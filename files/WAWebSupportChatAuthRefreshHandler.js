__d(
  "WAWebSupportChatAuthRefreshHandler",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebGroupMetadataCollection",
    "WAWebSupportChatAuthRefreshMutation",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 6e4,
      p = new Map(),
      _ = new Set(),
      f = 0;
    function g() {
      (f++, p.clear(), _.clear());
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.id.toString();
          if (!(_.has(n) || E(n))) {
            var r = f;
            _.add(n);
            try {
              yield C(e, n, t, r);
            } finally {
              r === f && _.delete(n);
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = yield S(e).catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[support-chat-auth] ",
                        " group members could not be loaded",
                      ])),
                    n,
                  )
                  .catching(r("getErrorSafe")(e)),
                null
              );
            });
            if (!(i == null || a !== f)) {
              var l = i.botFbid,
                s = i.chatKind;
              p.set(t, o("WATimeUtils").monotonicTime());
              try {
                var d = yield o(
                  "WAWebSupportChatAuthRefreshMutation",
                ).refreshSupportChatAuthGraphQL({ bot_fbid: l, chat_kind: s });
                v(n, s, d);
              } catch (e) {
                (a === f && p.delete(t),
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[support-chat-auth] ",
                          " ",
                          " refresh failed",
                        ])),
                      n,
                      s,
                    )
                    .catching(r("getErrorSafe")(e)));
              }
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(t, n, r) {
      if (r === "SCHEDULED") {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[support-chat-auth] ",
              " ",
              " refresh: status=",
              "",
            ])),
          t,
          n,
          r,
        );
        return;
      }
      o("WALogger").WARN(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[support-chat-auth] ",
            " ",
            " refresh: status=",
            "",
          ])),
        t,
        n,
        r,
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.id.isSupportAgentBot())
            return { botFbid: e.id.user, chatKind: "SUPPORT_CHAT" };
          if (!e.id.isGroup()) return null;
          var t = yield L(e),
            n = t.participants.findFirst(function (e) {
              return e.id.isSupportAgentBot();
            });
          return n == null
            ? null
            : { botFbid: n.id.user, chatKind: "GROUP_CHAT" };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = e.groupMetadata;
      return t != null && !t.stale
        ? (d || (d = n("Promise"))).resolve(t)
        : r("WAWebGroupMetadataCollection").find(e.id);
    }
    function E(e) {
      var t = p.get(e);
      return t != null && o("WATimeUtils").monotonicTimeSince(t) < m;
    }
    ((l.resetSession = g), (l.refreshIfSupportChat = h));
  },
  98,
);
