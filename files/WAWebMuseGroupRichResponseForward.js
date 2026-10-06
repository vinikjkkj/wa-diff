__d(
  "WAWebMuseGroupRichResponseForward",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebGroupAgentProfileRouting",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUnifiedResponseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1023,
      s = "\u2026",
      u = "image/jpeg",
      c = "video/mp4",
      d = "READY";
    function m(e) {
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE ||
        !e.id.remote.isGroup() ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      if (
        t == null ||
        !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t) ||
        o("WAWebBotStaticProfiles").isStaticProfile(t)
      )
        return !1;
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(t);
      return (n == null ? void 0 : n.lastFetchedTimeMs) == null
        ? !0
        : o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(
            t,
            o("WAWebBotProduct").botProductFromServerValue(n.product),
          );
    }
    function p(e) {
      return e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER ||
        o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(e.unifiedResponse)
        ? !1
        : _(e) != null || f(e) !== "";
    }
    function _(e) {
      var t = e.unifiedResponse;
      if (
        t == null ||
        !o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)
      )
        return null;
      var n = o("WAWebUnifiedResponseUtils").getImaginePrimitives(t).find(y);
      if (n == null) return null;
      var r = n.media,
        a = r.height,
        i = r.mime_type,
        l = r.url,
        s = r.width;
      return l == null || l === ""
        ? null
        : o("WAWebUnifiedResponseUtils").isAnimateImagineType(n.imagine_type)
          ? s == null || s === 0 || a == null || a === 0
            ? null
            : { kind: "video", mimetype: h(i, "video", c), url: l }
          : { kind: "image", mimetype: h(i, "image", u), url: l };
    }
    function f(e) {
      var t;
      return (t = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, {
        includeBodyFallback: !1,
      })) != null
        ? t
        : "";
    }
    function g(t) {
      var n = Array.from(f(t));
      return n.length <= e ? n.join("") : n.slice(0, e).join("") + s;
    }
    function h(e, t, n) {
      return e != null && e.startsWith(t + "/") ? e : n;
    }
    function y(e) {
      var t,
        n = (t = e.status) == null ? void 0 : t.status;
      return (
        (n == null || String(n) === d) &&
        e.media.url != null &&
        e.media.url !== ""
      );
    }
    ((l.isMuseGroupAgentRichResponse = m),
      (l.canForwardMuseGroupRichResponse = p),
      (l.getMuseGroupForwardMedia = _),
      (l.getMuseGroupForwardText = f),
      (l.getMuseGroupForwardCaption = g));
  },
  98,
);
