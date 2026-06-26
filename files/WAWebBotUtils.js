__d(
  "WAWebBotUtils",
  [
    "WALogger",
    "WAWebDebugHiddenBotChats",
    "WAWebMsgKey",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = o("WAWebWidFactory")).createUserWidOrThrow("13135550002@c.us"),
      c = s.createUserWidOrThrow("867051314767696@bot"),
      d = s.createUserWidOrThrow("1273596044787272@bot"),
      m = s.createUserWidOrThrow("1807055946647696@bot"),
      p = s.createUserWidOrThrow("1807055946647697@bot"),
      _ = s.createUserWidOrThrow("1807055946647698@bot"),
      f = s.createUserWidOrThrow("165332417282214@lid"),
      g = s.createUserWidOrThrow("2942131436135992@bot"),
      h = s.createUserWidOrThrow("867051314767696555@bot"),
      y = s.createUserWidOrThrow("103242709127222@lid"),
      C = [m, p];
    function b(e) {
      return e.equals(u) || e.equals(c);
    }
    function v(e) {
      return e.equals(g) || e.equals(h);
    }
    function S(e) {
      return b(e) || R(e) || L(e) || k(e) || e.equals(d) || v(e);
    }
    function R(e) {
      return e.equals(m);
    }
    function L(e) {
      return e.equals(p);
    }
    function E(e) {
      return e.equals(_);
    }
    function k(e) {
      return C.some(function (t) {
        return e.equals(t);
      });
    }
    function I(e) {
      var t = e.botResponseTargetId;
      return t == null
        ? null
        : new (r("WAWebMsgKey"))({ fromMe: !0, remote: e.id.remote, id: t });
    }
    function T(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(c)
        : !1;
    }
    function D(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(d)
        : !1;
    }
    function x(e) {
      return o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled()
        ? !1
        : e instanceof r("WAWebWid")
          ? e.equals(d) || v(e) || e.equals(y)
          : !1;
    }
    function $(t) {
      var n = !1;
      for (var r of t) {
        var a = T(r.id),
          i = D(r.id);
        if (a)
          return (
            n &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "unexpected tee and open bot in same group",
                    ])),
                )
                .sendLogs("unexpected tee and open bot in same group"),
            { includeOpenMetabot: !0, includeTeeMetabot: !1 }
          );
        i && (n = !0);
      }
      return { includeOpenMetabot: !1, includeTeeMetabot: n };
    }
    ((l.META_BOT_PN_WID = u),
      (l.META_BOT_FBID_WID = c),
      (l.META_BOT_TEE_FBID_WID = d),
      (l.MANUS_BOT_FBID_WID = m),
      (l.HATCH_BOT_FBID_WID = p),
      (l.MAIBA_AI_HUB_FBID_WID = _),
      (l.MAIBA_AI_HUB_LID_WID = f),
      (l.META_BOT_SIDECHAT_FBID_WID = g),
      (l.META_BOT_SIDECHAT_LEGACY_FBID_WID = h),
      (l.META_BOT_LID_WID = y),
      (l.isMetaAiBot = b),
      (l.isSideChatBotWid = v),
      (l.isAnyMetaAiBot = S),
      (l.isManusBot = R),
      (l.isHatchBot = L),
      (l.isMaibaAiHubFbid = E),
      (l.isBotChannelFBID = k),
      (l.getBotResponseTargetMsgKey = I),
      (l.isWidOpenGroupMetaBotFbidWid = T),
      (l.isWidTeeGroupMetaBotFbidWid = D),
      (l.isHiddenBotWid = x),
      (l.participantListIncludeOpenOrTeeGroupBotWid = $));
  },
  98,
);
