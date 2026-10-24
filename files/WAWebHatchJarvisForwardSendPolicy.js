__d(
  "WAWebHatchJarvisForwardSendPolicy",
  [
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebHatchJarvisForwardMedia",
    "WAWebHatchJarvisForwardPolicy",
    "WAWebHatchJarvisMedia",
    "WAWebHatchJarvisPayload",
    "WAWebHatchJarvisRender",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { readOnly: !0 };
    function s(e) {
      var t = u(e);
      return t.ok &&
        !o("WAWebBotBaseGating").isRichResponseJarvisForwardSendingEnabled()
        ? { ok: !1, reason: { kind: "policy", cause: "sending_disabled" } }
        : t;
    }
    function u(e) {
      var t = m(e);
      return typeof t == "string"
        ? { ok: !1, reason: { kind: "policy", cause: t } }
        : babelHelpers.extends({}, t, { ok: !0 });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p(e);
          if (!(t == null || !f(e))) {
            var n = _(t);
            typeof n != "string" &&
              (yield o(
                "WAWebHatchJarvisForwardMedia",
              ).resolveHatchJarvisForwardMedia(
                n.refs,
                e.unifiedResponseMutationMediaList,
              ));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = p(e);
      if (t == null) return "not_jarvis_reply";
      var n = f(e);
      if (n && !g(e)) return "not_hatch_copy";
      if (!n && !h(e)) return "not_first_hop";
      var r = _(t);
      if (typeof r == "string") return r;
      if (n) return y(r.refs, e.unifiedResponseMutationMediaList);
      var o = C(r.refs, r.payload);
      return o != null ? { media: o } : "unbound_media";
    }
    function p(e) {
      var t = e.unifiedResponse;
      return e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        t != null &&
        o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(t)
        ? t
        : null;
    }
    function _(t) {
      var n = o("WAWebHatchJarvisPayload").getHatchJarvisPayload(t);
      if (n == null) return "unsupported_envelope";
      if (!n.displayTextReady) return "display_text_not_ready";
      var r = o("WAWebHatchJarvisForwardPolicy").getHatchJarvisForwardMediaRefs(
        n,
        o("WAWebHatchJarvisRender").buildHatchJarvisRender(n, t.response_id, e),
      );
      return r != null ? { payload: n, refs: r } : "unsupported_content";
    }
    function f(e) {
      return e.isForwarded === !0 || e.forwardedAiBotMessageInfo != null;
    }
    function g(e) {
      var t,
        n = (t = e.forwardedAiBotMessageInfo) == null ? void 0 : t.botId;
      return n == null || o("WAWebBotUtils").isHatchBot(n);
    }
    function h(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function y(e, t) {
      var n = o(
        "WAWebHatchJarvisForwardMedia",
      ).resolveHatchJarvisForwardMediaSync(e, t);
      if (n === "pending") return "media_ids_pending";
      var r = [];
      for (var a of e) {
        var i = n == null ? void 0 : n.get(a.url);
        if (i == null) return "unbound_media";
        r.push({ descriptor: i, ref: a });
      }
      return { media: r };
    }
    function C(e, t) {
      var n = t.fileMetadata,
        r = Array.from(n.values()),
        a = [],
        i = function (t) {
          var e,
            n = r.find(function (e) {
              var n = e.url;
              return n === t.url;
            }),
            i = o("WAWebHatchJarvisMedia").getHatchJarvisMediaSource(n);
          if (
            o("WAWebHatchJarvisForwardMedia").decodeHash(
              (e = n == null ? void 0 : n.envelopeFilehash) != null ? e : "",
            ) == null ||
            (i == null ? void 0 : i.kind) !== "encrypted"
          )
            return { v: null };
          a.push({ descriptor: i.descriptor, ref: t });
        },
        l;
      for (var s of e) if (((l = i(s)), l)) return l.v;
      return a;
    }
    ((l.inspectHatchJarvisForward = s),
      (l.inspectHatchJarvisForwardability = u),
      (l.genHatchJarvisForwardMediaIds = c));
  },
  98,
);
