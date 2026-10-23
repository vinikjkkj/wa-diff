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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success) return { name: "SetResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "SetResponseBadRequest", value: i.value };
          var l = d(r, n);
          if (l.success)
            return { name: "SetResponseInternalServerError", value: l.value };
          var s = c(r, n);
          if (s.success) return { name: "SetResponseConflict", value: s.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
              Success: a,
              BadRequest: i,
              InternalServerError: l,
              Conflict: s,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = f(r.value);
      if (!a.success) return a;
      var i = y(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorBadRequestMixin: a.value },
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
      var i = y(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorConflictMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = h(r.value);
      if (!a.success) return a;
      var i = y(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = C(e, t);
      return (r.success, r);
    }
    function p(e) {
      var t = e.setSetConfigOrSetClearMixinGroupArgs,
        n = _(
          v(
            o("WASmaxJsx").smax("iq", {
              to: o("WAWap").S_WHATSAPP_NET,
              xmlns: "urn:xmpp:whatsapp:push",
            }),
          ),
          t,
        );
      return n;
    }
    function _(e, t) {
      if (t.setSetConfig) return E(e, t.setSetConfig);
      if (t.setClear) return R(e, t.setClear);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function f(e) {
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
    function g(e) {
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
    function h(e) {
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
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function C(e, t) {
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
    function b() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function v(e) {
      var t = b();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function S(e) {
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
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e) {
      var t = e.configMixinsArgs,
        n = o("WASmaxJsx").smax(
          "iq",
          null,
          k(o("WASmaxJsx").smax("config", null), t),
        );
      return n;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e, t) {
      if (t.fBClient) return x(e, t.fBClient);
      if (t.androidClient) return F(e, t.androidClient);
      if (t.appleClient) return W(e, t.appleClient);
      if (t.wNSClient) return P(e, t.wNSClient);
      if (t.enterpriseClient) return T(e, t.enterpriseClient);
      if (t.webClient) return M(e, t.webClient);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function I(e) {
      var t = e.configId,
        n = o("WASmaxJsx").smax("config", {
          platform: "ent",
          id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
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
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $(e) {
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
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
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
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.itemJid,
        n = e.itemMute,
        r = o("WASmaxJsx").smax("item", {
          jid: o("WAWap").GROUP_JID(t),
          mute: o("WAWap").INT(n),
        });
      return r;
    }
    function A(e) {
      var t = e.itemArgs,
        n = U(
          o("WASmaxJsx").smax(
            "config",
            null,
            o("WASmaxChildren").REPEATED_CHILD(w, t, 0, 1 / 0),
          ),
          e,
        );
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
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
    function B(e) {
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
          o("WASmaxChildren").REPEATED_CHILD(O, r, 0, 1 / 0),
        );
      return D;
    }
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q(e) {
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
    function U(e, t) {
      var n = q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendSetRPC = e),
      (l.parseSetResponseBadRequest = u),
      (l.parseSetResponseConflict = c),
      (l.parseSetResponseInternalServerError = d),
      (l.parseSetResponseSuccess = m),
      (l.makeSetRequest = p),
      (l.mergeSetSetConfigOrSetClearMixinGroup = _),
      (l.parseIQErrorBadRequestMixin = f),
      (l.parseIQErrorConflictMixin = g),
      (l.parseIQErrorInternalServerErrorMixin = h),
      (l.parseIQErrorResponseMixin = y),
      (l.parseIQResultResponseMixin = C),
      (l.mergeBaseIQSetRequestMixin = v),
      (l.mergeSetClearMixin = R),
      (l.mergeSetSetConfigMixin = E),
      (l.mergeConfigMixins = k),
      (l.mergeEnterpriseClientMixin = T),
      (l.mergeFBClientMixin = x),
      (l.mergeWNSClientMixin = P),
      (l.mergeWebClientMixin = M),
      (l.makeAndroidClientItem = w),
      (l.mergeAndroidClientMixin = F),
      (l.makeAppleClientItem = O),
      (l.mergeAppleClientMixin = W),
      (l.mergeAndroidClientConfigMixin = U));
  },
  98,
);
