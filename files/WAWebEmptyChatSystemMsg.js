__d(
  "WAWebEmptyChatSystemMsg",
  ["WAWebInitialSystemMsg", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (!o("WAWebMsgGetters").getIsGroupMsg(e) && t.msgs.length === 0) {
        var n;
        return r("WAWebInitialSystemMsg")(
          t.id,
          t.contact.privacyMode,
          (n = t.contact.businessProfile) == null ? void 0 : n.automatedType,
        );
      }
      return null;
    }
    l.default = e;
  },
  98,
);
