__d(
  "WAWebMuseGroupRichResponseForward",
  [
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotTypes",
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
      var t = o("WAWebMsgGetters").getSender(e);
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE ||
        !e.id.remote.isGroup() ||
        t == null
      )
        return !1;
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(t);
      return o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileState(
        t,
        o("WAWebBotProduct").botProductFromServerValue(
          n == null ? void 0 : n.product,
        ),
        n == null ? void 0 : n.lastFetchedTimeMs,
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
      var n = b(t);
      if (n == null) return null;
      var r = n.media,
        a = r.height,
        i = r.mime_type,
        l = r.url,
        s = r.width;
      return l == null || l === ""
        ? null
        : n.kind === "image"
          ? { kind: "image", mimetype: L(i, "image", u), url: l }
          : s == null || s === 0 || a == null || a === 0
            ? null
            : { kind: "video", mimetype: L(i, "video", c), url: l };
    }
    function f(e) {
      var t;
      return (t = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, {
        includeBodyFallback: !1,
      })) != null
        ? t
        : "";
    }
    function g(e) {
      return h(f(e));
    }
    function h(t) {
      var n = Array.from(t);
      return n.length <= e ? n.join("") : n.slice(0, e).join("") + s;
    }
    function y(e) {
      return m(e) && _(e) != null;
    }
    function C(e) {
      if (!m(e)) return null;
      var t = _(e);
      if (t == null) return null;
      var n = g(e);
      return n === "" ? null : { caption: n, kind: t.kind };
    }
    function b(e) {
      for (var t of e.sections)
        for (var n of o("WAWebUnifiedResponseUtils").getPrimitives(
          t.view_model,
        )) {
          var r = v(n);
          if (r != null) return r;
        }
      return null;
    }
    function v(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIImagePrimitive"
        ) {
          var t = e;
          return S(t.full_image);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIImaginePrimitive"
        ) {
          var n = e;
          return E(n)
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
    function S(e) {
      return e != null && R(e) ? { kind: "image", media: e } : null;
    }
    function R(e) {
      return (e == null ? void 0 : e.url) != null && e.url !== "";
    }
    function L(e, t, n) {
      return e != null && e.startsWith(t + "/") ? e : n;
    }
    function E(e) {
      var t,
        n = (t = e.status) == null ? void 0 : t.status;
      return (n == null || String(n) === d) && R(e.media);
    }
    ((l.isMuseGroupAgentRichResponse = m),
      (l.canForwardMuseGroupRichResponse = p),
      (l.getMuseGroupForwardMedia = _),
      (l.getMuseGroupForwardText = f),
      (l.getMuseGroupForwardCaption = g),
      (l.truncateForwardMediaCaption = h),
      (l.hasMuseGroupForwardMedia = y),
      (l.getMuseGroupForwardCaptionPreview = C));
  },
  98,
);
