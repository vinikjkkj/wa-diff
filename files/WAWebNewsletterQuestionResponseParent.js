__d(
  "WAWebNewsletterQuestionResponseParent",
  [
    "WAWebDBMessageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield t.get(e.toString());
          if (
            a == null &&
            e.remote.isNewsletter() &&
            e.fromMe &&
            /^\d+$/.test(e.id)
          ) {
            var i = yield t.anyOf(
              ["internalId"],
              [
                o("WAWebDBMessageUtils").craftInternalId({
                  chatId: e.remote.toJid(),
                  inChatMsgId: Number(e.id),
                }),
              ],
            );
            a = i[0];
          }
          var l = (n = a) == null ? void 0 : n.internalId;
          if (l == null || !e.remote.isNewsletter() || a == null)
            return { id: e, keys: [e.toString()] };
          var s = r("WAWebMsgKey").from(a.id),
            u = o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(
              o("WAWebDBMessageUtils").getInChatMsgId(l),
              s.remote,
            );
          return {
            id: s,
            keys: Array.from(new Set([s.toString(), u.toString()])),
          };
        })),
        s.apply(this, arguments)
      );
    }
    l.resolveQuestionResponseParent = e;
  },
  98,
);
