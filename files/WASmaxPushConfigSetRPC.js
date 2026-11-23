__d(
  "WASmaxPushConfigSetRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = m(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success) return { name: "SetResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success) return { name: "SetResponseBadRequest", value: i.value };
      var l = c(r, n);
      if (l.success)
        return { name: "SetResponseInternalServerError", value: l.value };
      var p = u(r, n);
      if (p.success) return { name: "SetResponseConflict", value: p.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
          Success: a,
          BadRequest: i,
          InternalServerError: l,
          Conflict: p,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = _(r.value);
      if (!a.success) return a;
      var i = h(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorBadRequestMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = f(r.value);
      if (!a.success) return a;
      var i = h(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorConflictMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = g(r.value);
      if (!a.success) return a;
      var i = h(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = y(e, t);
      return (r.success, r);
    }
    function m(e) {
      var t = e.setSetConfigOrSetClearMixinGroupArgs,
        n = p(
          b(
            o("WASmaxJsx").smax("iq", {
              to: o("WAWap").S_WHATSAPP_NET,
              xmlns: "urn:xmpp:whatsapp:push",
            }),
          ),
          t,
        );
      return n;
    }
    function p(e, t) {
      if (t.setSetConfig) return L(e, t.setSetConfig);
      if (t.setClear) return S(e, t.setClear);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "bad-request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        400,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "conflict",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        409,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "internal-server-error",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        500,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function h(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function y(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function C() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function b(e) {
      var t = C();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function v(e) {
      var t = e.clearPlatform,
        n = o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("clear", {
            platform: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
        );
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function R(e) {
      var t = e.configMixinsArgs,
        n = o("WASmaxJsx").smax(
          "iq",
          null,
          E(o("WASmaxJsx").smax("config", null), t),
        );
      return n;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E(e, t) {
      if (t.fBClient) return D(e, t.fBClient);
      if (t.androidClient) return A(e, t.androidClient);
      if (t.appleClient) return B(e, t.appleClient);
      if (t.wNSClient) return $(e, t.wNSClient);
      if (t.enterpriseClient) return I(e, t.enterpriseClient);
      if (t.webClient) return N(e, t.webClient);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function k(e) {
      var t = e.configId,
        n = o("WASmaxJsx").smax("config", {
          platform: "ent",
          id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e) {
      var t = e.configAppid,
        n = e.configDeviceid,
        r = e.configFbid,
        a = o("WASmaxJsx").smax("config", {
          platform: "fb",
          appid: o("WAWap").CUSTOM_STRING(t),
          deviceid: o("WAWap").CUSTOM_STRING(n),
          fbid: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
        });
      return a;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e) {
      var t,
        n = e.configVersion,
        r = e.configId,
        a = e.configPkey,
        i = e.configSettings,
        l = o("WASmaxJsx").smax("config", {
          platform: "wns",
          version: o("WASmaxAttrs").OPTIONAL((t = o("WAWap")).CUSTOM_STRING, n),
          id: t.CUSTOM_STRING(r),
          pkey: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          settings: o("WASmaxAttrs").OPTIONAL(t.INT, i),
        });
      return l;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P(e) {
      var t,
        n = e.configEndpoint,
        r = e.configAuth,
        a = e.configP256dh,
        i = e.configLg,
        l = e.configLc,
        s = e.configPushPreferences,
        u = o("WASmaxJsx").smax("config", {
          platform: "web",
          endpoint: (t = o("WAWap")).CUSTOM_STRING(n),
          auth: t.CUSTOM_STRING(r),
          p256dh: t.CUSTOM_STRING(a),
          lg: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
          lc: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, l),
          push_preferences: o("WASmaxAttrs").OPTIONAL(t.INT, s),
        });
      return u;
    }
    function N(e, t) {
      var n = P(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function M(e) {
      var t = e.itemJid,
        n = e.itemMute,
        r = o("WASmaxJsx").smax("item", {
          jid: o("WAWap").GROUP_JID(t),
          mute: o("WAWap").INT(n),
        });
      return r;
    }
    function w(e) {
      var t = e.itemArgs,
        n = q(
          o("WASmaxJsx").smax(
            "config",
            null,
            o("WASmaxChildren").REPEATED_CHILD(M, t, 0, 1 / 0),
          ),
          e,
        );
      return n;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e) {
      var t,
        n = e.itemJid,
        r = e.itemMute,
        a = e.itemNotify,
        i = e.itemCall,
        l = o("WASmaxJsx").smax("item", {
          jid: (t = o("WAWap")).JID(n),
          mute: o("WASmaxAttrs").OPTIONAL(t.INT, r),
          notify: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          call: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
        });
      return l;
    }
    function O(e) {
      var t,
        n,
        r = e.itemArgs,
        a = e.configPlatform,
        i = e.hasConfigVersion2,
        l = e.configId,
        s = e.configVoip,
        u = e.configPreview,
        c = e.configDefault,
        d = e.configGroups,
        m = e.configCall,
        p = e.configStatusSound,
        _ = e.configLg,
        f = e.configLc,
        g = e.configBackgroundLocation,
        h = e.configNseVer,
        y = e.configNseCall,
        C = e.configNseRead,
        b = e.configNseRetry,
        v = e.configRegPush,
        S = e.configPkey,
        R = e.configVoipPayloadType,
        L = e.configSettings,
        E = e.configAppMute,
        k = e.configCallMute,
        I = e.configAppleWatchId,
        T = e.configAppleWatchPkey,
        D = o("WASmaxJsx").smax(
          "config",
          {
            platform: (t = o("WAWap")).CUSTOM_STRING(a),
            version: (n = o("WASmaxAttrs")).OPTIONAL_LITERAL("2", i),
            id: n.OPTIONAL(t.CUSTOM_STRING, l),
            voip: n.OPTIONAL(t.CUSTOM_STRING, s),
            preview: t.CUSTOM_STRING(u),
            default: t.CUSTOM_STRING(c),
            groups: t.CUSTOM_STRING(d),
            call: t.CUSTOM_STRING(m),
            status_sound: n.OPTIONAL(t.CUSTOM_STRING, p),
            lg: t.CUSTOM_STRING(_),
            lc: t.CUSTOM_STRING(f),
            background_location: n.OPTIONAL(t.CUSTOM_STRING, g),
            nse_ver: n.OPTIONAL(t.CUSTOM_STRING, h),
            nse_call: n.OPTIONAL(t.CUSTOM_STRING, y),
            nse_read: n.OPTIONAL(t.CUSTOM_STRING, C),
            nse_retry: n.OPTIONAL(t.CUSTOM_STRING, b),
            reg_push: n.OPTIONAL(t.CUSTOM_STRING, v),
            pkey: n.OPTIONAL(t.CUSTOM_STRING, S),
            voip_payload_type: t.CUSTOM_STRING(R),
            settings: n.OPTIONAL(t.INT, L),
            app_mute: n.OPTIONAL(t.INT, E),
            call_mute: n.OPTIONAL(t.INT, k),
            apple_watch_id: n.OPTIONAL(t.CUSTOM_STRING, I),
            apple_watch_pkey: n.OPTIONAL(t.CUSTOM_STRING, T),
          },
          o("WASmaxChildren").REPEATED_CHILD(F, r, 0, 1 / 0),
        );
      return D;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W(e) {
      var t,
        n,
        r = e.configPlatform,
        a = e.configId,
        i = e.configAppid,
        l = e.configAppMute,
        s = e.configPkey,
        u = e.configVoipPayloadType,
        c = e.configNumAcc,
        d = e.configSettings,
        m = o("WASmaxJsx").smax("config", {
          platform: (t = o("WAWap")).CUSTOM_STRING(r),
          id: t.CUSTOM_STRING(a),
          appid: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, i),
          app_mute: n.OPTIONAL(t.INT, l),
          pkey: n.OPTIONAL(t.CUSTOM_STRING, s),
          voip_payload_type: n.OPTIONAL(t.CUSTOM_STRING, u),
          num_acc: n.OPTIONAL(t.INT, c),
          settings: n.OPTIONAL(t.INT, d),
        });
      return m;
    }
    function q(e, t) {
      var n = W(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendSetRPC = e),
      (l.parseSetResponseBadRequest = s),
      (l.parseSetResponseConflict = u),
      (l.parseSetResponseInternalServerError = c),
      (l.parseSetResponseSuccess = d),
      (l.makeSetRequest = m));
  },
  98,
);
