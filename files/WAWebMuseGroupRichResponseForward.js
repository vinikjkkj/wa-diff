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
      var n = C(t);
      if (n == null) return null;
      var r = n.media,
        a = r.height,
        i = r.mime_type,
        l = r.url,
        s = r.width;
      return l == null || l === ""
        ? null
        : n.kind === "image"
          ? { kind: "image", mimetype: R(i, "image", u), url: l }
          : s == null || s === 0 || a == null || a === 0
            ? null
            : { kind: "video", mimetype: R(i, "video", c), url: l };
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
    function h(e) {
      return m(e) && _(e) != null;
    }
    function y(e) {
      if (!m(e)) return null;
      var t = _(e);
      if (t == null) return null;
      var n = g(e);
      return n === "" ? null : { caption: n, kind: t.kind };
    }
    function C(e) {
      for (var t of e.sections)
        for (var n of o("WAWebUnifiedResponseUtils").getPrimitives(
          t.view_model,
        )) {
          var r = b(n);
          if (r != null) return r;
        }
      return null;
    }
    function b(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIImagePrimitive"
        ) {
          var t = e;
          return v(t.full_image);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIImaginePrimitive"
        ) {
          var n = e;
          return L(n)
            ? {
                kind: o("WAWebUnifiedResponseUtils").isAnimateImagineType(
                  n.imagine_type,
                )
                  ? "video"
                  : "image",
                media: n.media,
              }
            : null;
        }
        return null;
      })(e);
    }
    function v(e) {
      return e != null && S(e) ? { kind: "image", media: e } : null;
    }
    function S(e) {
      return (e == null ? void 0 : e.url) != null && e.url !== "";
    }
    function R(e, t, n) {
      return e != null && e.startsWith(t + "/") ? e : n;
    }
    function L(e) {
      var t,
        n = (t = e.status) == null ? void 0 : t.status;
      return (n == null || String(n) === d) && S(e.media);
    }
    ((l.isMuseGroupAgentRichResponse = m),
      (l.canForwardMuseGroupRichResponse = p),
      (l.getMuseGroupForwardMedia = _),
      (l.getMuseGroupForwardText = f),
      (l.getMuseGroupForwardCaption = g),
      (l.hasMuseGroupForwardMedia = h),
      (l.getMuseGroupForwardCaptionPreview = y));
  },
  98,
);
