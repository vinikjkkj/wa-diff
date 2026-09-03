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
      d = s.createUserWidOrThrow("13135550202@c.us"),
      m = s.createUserWidOrThrow("718584497008509@bot"),
      p = s.createUserWidOrThrow("1273596044787272@bot"),
      _ = s.createUserWidOrThrow("1807055946647697@bot"),
      f = s.createUserWidOrThrow("1807055946647698@bot"),
      g = s.createUserWidOrThrow("165332417282214@lid"),
      h = s.createUserWidOrThrow("2942131436135992@bot"),
      y = s.createUserWidOrThrow("867051314767696555@bot"),
      C = s.createUserWidOrThrow("103242709127222@lid"),
      b = [_];
    function v(e) {
      return e.equals(u) || e.equals(c);
    }
    function S(e) {
      return e.equals(d) || e.equals(m);
    }
    function R(e) {
      return e.equals(h) || e.equals(y);
    }
    function L(e) {
      return v(e) || I(e) || e.equals(p) || R(e);
    }
    function E(e) {
      return e.equals(_);
    }
    function k(e) {
      return e.equals(f);
    }
    function I(e) {
      return b.some(function (t) {
        return e.equals(t);
      });
    }
    function T(e) {
      var t = e.botResponseTargetId;
      return t == null
        ? null
        : new (r("WAWebMsgKey"))({ fromMe: !0, remote: e.id.remote, id: t });
    }
    function D(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(c)
        : !1;
    }
    function x(e) {
      return e instanceof r("WAWebWid")
        ? e == null
          ? void 0
          : e.equals(p)
        : !1;
    }
    function $(e) {
      return o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled()
        ? !1
        : e instanceof r("WAWebWid")
          ? e.equals(p) || R(e) || e.equals(C)
          : !1;
    }
    function P(t) {
      var n = !1;
      for (var r of t) {
        var a = D(r.id),
          i = x(r.id);
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
      (l.META_BOT_SMB_PN_WID = d),
      (l.META_BOT_SMB_FBID_WID = m),
      (l.META_BOT_TEE_FBID_WID = p),
      (l.HATCH_BOT_FBID_WID = _),
      (l.MAIBA_AI_HUB_FBID_WID = f),
      (l.MAIBA_AI_HUB_LID_WID = g),
      (l.META_BOT_SIDECHAT_FBID_WID = h),
      (l.META_BOT_SIDECHAT_LEGACY_FBID_WID = y),
      (l.META_BOT_LID_WID = C),
      (l.isMetaAiBot = v),
      (l.isBusinessAssistantBot = S),
      (l.isSideChatBotWid = R),
      (l.isAnyMetaAiBot = L),
      (l.isHatchBot = E),
      (l.isMaibaAiHubFbid = k),
      (l.isBotChannelFBID = I),
      (l.getBotResponseTargetMsgKey = T),
      (l.isWidOpenGroupMetaBotFbidWid = D),
      (l.isWidTeeGroupMetaBotFbidWid = x),
      (l.isHiddenBotWid = $),
      (l.participantListIncludeOpenOrTeeGroupBotWid = P));
  },
  98,
);
