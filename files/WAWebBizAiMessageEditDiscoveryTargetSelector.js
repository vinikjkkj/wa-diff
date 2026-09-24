__d(
  "WAWebBizAiMessageEditDiscoveryTargetSelector",
  ["WAWebDisplayType", "WAWebFrontendMsgGetters", "WAWebMsgActionCapability"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = new Set(e.getAllCMCs()),
        a = new Map();
      t.forEach(function (t) {
        var n = t.anchor,
          i = t.isVisible,
          l = t.msg,
          s = l.getMsgChunk();
        n == null ||
          !i ||
          o("WAWebFrontendMsgGetters").getMaybeChat(l) !== e ||
          s == null ||
          !r.has(s) ||
          s.indexOf(l) === -1 ||
          !o("WAWebMsgActionCapability").canShowMsgEditAction(
            l,
            o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
            e,
          ) ||
          !o("WAWebMsgActionCapability").shouldCoachAgentEdit(l) ||
          a.set(l, { anchor: n, msg: l });
      });
      var i = e.sortMsgs(Array.from(a.keys())),
        l = i[i.length - 1];
      return l == null ? null : (n = a.get(l)) != null ? n : null;
    }
    l.selectBizAiMessageEditDiscoveryTarget = e;
  },
  98,
);
