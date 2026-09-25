__d(
  "WAWebGetChatTypeInd",
  ["WAWebWamEnumChatType", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["unknown", "low", "high"]);
    function s(t) {
      return t == null
        ? o("WAWebWamEnumChatType").CHAT_TYPE.INDIVIDUAL
        : t.isApi
          ? o("WAWebWamEnumChatType").CHAT_TYPE.ENT
          : t.isSmb
            ? o("WAWebWamEnumChatType").CHAT_TYPE.SMB
            : t.level != null && e.has(t.level)
              ? o("WAWebWamEnumChatType").CHAT_TYPE.BUSINESS
              : o("WAWebWamEnumChatType").CHAT_TYPE.INDIVIDUAL;
    }
    function u(e, t) {
      var n;
      return e.isGroup()
        ? t != null
          ? o("WAWebWidFactory").createWid(t)
          : (n = c(e)) != null
            ? n
            : e
        : e;
    }
    function c(e) {
      var t = e.user.indexOf("-");
      return t === -1
        ? null
        : o("WAWebWidFactory").createWid(e.user.slice(0, t) + "@c.us");
    }
    ((l.getChatTypeInd = s), (l.getChatTypeWid = u));
  },
  98,
);
