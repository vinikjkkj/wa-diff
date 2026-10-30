__d(
  "WAWebApiParse",
  [
    "WAArrayBufferUtils",
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebABProps",
    "WAWebApi",
    "WAWebApiParseUtils",
    "WAWebBrAddPixKeyDeepLinkPrefill",
    "WAWebBroadcastApiParse",
    "WAWebExternalCtxConfig",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterStatusApiParse",
    "WAWebPaymentLinkUrlMetaData",
    "WAWebPhoneNumberSearch",
    "WAWebRegistrationCampaignConstants",
    "WAWebStatusApiParse",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVoipGroupCallAccentColors",
    "WAWebWamEnumDeepLinkType",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["phone"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new RegExp(
        "^" +
          (_ = o("WAWebApiParseUtils")).ORIGIN +
          _.OPTIONAL_PATH_PART +
          "/accept/?\\?code=(\\w+)(?:&.*)?$",
        "i",
      ),
      g = /^https?:\/\/chat\.whatsapp\.com\/invite\/(\w+)(?:\?.*)?$/i,
      h = /^https?:\/\/chat\.whatsapp\.com\/(\w+)(?:\?.*)?$/i,
      y = /^whatsapp:\/\/chat\/?\?code=(\w+)(?:&.*)?$/i;
    function C(e) {
      var t = st(e),
        n = e.match(f);
      if (n)
        return babelHelpers.extends(
          { code: n[2], url: n[1] || "/" },
          t != null && { utm: t },
        );
      if (((n = e.match(g)), n))
        return babelHelpers.extends({ code: n[1] }, t != null && { utm: t });
      if (((n = e.match(h)), n))
        return babelHelpers.extends({ code: n[1] }, t != null && { utm: t });
      if (((n = e.match(y)), n))
        return babelHelpers.extends({ code: n[1] }, t != null && { utm: t });
    }
    var b = "utm_source",
      v = "utm_campaign",
      S = [
        "utm_source",
        "utm_campaign",
        "text",
        "phone",
        "source",
        "context",
        "icebreaker",
        "source_url",
        "type",
        "token",
        "attachment_uris",
        "username",
        "jid",
        "lid",
        "signup_id",
        "dp",
      ];
    function R(e) {
      return S.find(function (t) {
        return t === e;
      });
    }
    var L = /^\d{1,20}$/,
      E = 32;
    function k(e) {
      if (!(!e || typeof e != "string")) {
        var t = o("WABinary").Binary.build(e);
        if (
          !(
            t.size() >
            o("WAWebABProps").getABPropConfigValue("ctwa_data_max_length")
          )
        )
          return t.readBuffer();
      }
    }
    function I(e, t) {
      var n = e,
        r = o("WABinary").numUtf8Bytes(n);
      r > E ||
        (t.conversionTuple == null
          ? (t.conversionTuple = { conversionSource: n })
          : (t.conversionTuple.conversionSource = n));
    }
    function T(e, t, n) {
      e: {
        if (e === "source_url") {
          n.ctwaContextLinkData != null
            ? (n.ctwaContextLinkData.sourceUrl = t)
            : (n.ctwaContextLinkData = { sourceUrl: t });
          break e;
        }
        if (e === "context") {
          n.ctwaContextLinkData != null
            ? (n.ctwaContextLinkData.context = t)
            : (n.ctwaContextLinkData = { context: t });
          break e;
        }
        if (e === "icebreaker") {
          n.ctwaContextLinkData != null
            ? (n.ctwaContextLinkData.icebreaker = t)
            : (n.ctwaContextLinkData = { icebreaker: t });
          break e;
        }
        break e;
      }
    }
    function D(e) {
      if (e != null && e.split(".").length === 3) {
        var t = e.split(".")[1].replace(/\s/g, "");
        try {
          var n = o("WABase64").decodeB64UrlSafe(t);
          return JSON.parse(o("WAArrayBufferUtils").arrayBufferToString(n));
        } catch (e) {
          return (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "parseCTWADeeplinkToken: failed to parse token",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("ctwa-deeplink-token-parse-error")
              .tags("ctwa-error"),
            {}
          );
        }
      }
      return {};
    }
    function x(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = e[n];
          if (r != null)
            switch (n) {
              case "source": {
                I(r, t);
                break;
              }
              case "source_url":
              case "context":
              case "icebreaker": {
                T(n, r, t);
                break;
              }
              default:
                (n === "phone" || n === "text" || n === "type") && (t[n] = r);
            }
        }),
        t
      );
    }
    function $(e, t) {
      var n = {},
        a = !1;
      if (
        (new URLSearchParams(e).forEach(function (e, t) {
          var r = R(t.toLowerCase());
          if (r != null)
            switch (r) {
              case "source": {
                I(e, n);
                break;
              }
              case "source_url":
              case "context":
              case "icebreaker":
                T(r, e, n);
                break;
              case "utm_campaign":
                n.utm != null
                  ? (n.utm.campaign = e)
                  : (n.utm = { campaign: e });
                break;
              case "utm_source":
                n.utm != null ? (n.utm.source = e) : (n.utm = { source: e });
                break;
              case "token": {
                var i = D(e),
                  l = x(i);
                ((n = babelHelpers.extends({}, n, l)), (a = !0));
                break;
              }
              case "attachment_uris":
                n.attachmentUris = e.split(",");
                break;
              case "jid":
                n.jid = e;
                break;
              case "lid":
                n.lid = e;
                break;
              case "username":
                {
                  var s = e.split(":"),
                    u = s[0],
                    c = s[1];
                  ((n.username = u),
                    c != null &&
                      (o("WAWebUsernameTypes").isUsernameKey(c)
                        ? (n.usernameKey = c)
                        : (n.invalidUsernameKey = !0)));
                }
                break;
              case "signup_id":
                L.test(e) && (n.signupId = e);
                break;
              case "dp":
                e === "1" && (n.fromDefaultProtocol = !0);
                break;
              default:
                n[r] = e;
            }
        }),
        a &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "parseMsgSendParams:parsed values",
              ])),
          ),
        n.phone != null &&
          n.phone !== "" &&
          ((n.phone = n.phone.replace(/\D/g, "") + "@c.us"),
          n.ctwaContextLinkData && (n.ctwaContextLinkData.phone = n.phone)),
        n.ctwaContextLinkData == null)
      ) {
        var i = ot(t);
        i != null && (n.partnertoken = i);
      }
      if (
        !r("isStringNullOrEmpty")(n.phone) ||
        !r("isStringNullOrEmpty")(n.text) ||
        (n.attachmentUris != null && n.attachmentUris.length > 0) ||
        !r("isStringNullOrEmpty")(n.username)
      )
        return n;
    }
    var P = /^whatsapp:\/\/newchat\/?$/i,
      N = /^whatsapp:\/\/newgroup\/?$/i,
      M = /^whatsapp:\/\/chatOpen\/?(\?.*)?$/i,
      w = /^whatsapp:\/\/callActive\/?(\?.*)?$/i,
      A = /^whatsapp:\/\/appOpen\/?(\?.*)?$/i,
      F = /^whatsapp:\/\/oidc_callback\/?(\?.*)?$/i,
      O = /^whatsapp-smb:\/\/biz_ai_oauth_callback\/?(\?.*)?$/i,
      B = "https://b.whatsapp.com/oauth/biz_ai_redirect";
    function W(e) {
      var t = e.match(M);
      if (!t) return null;
      var n = new URLSearchParams(t[1]),
        a = n.get("lid");
      if (r("isStringNullOrEmpty")(a))
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var i = a.includes("@") ? a : a + "@lid",
        l = n.get("session"),
        s = { lid: i };
      return (
        r("isStringNullOrEmpty")(l) || (s.session = l),
        n.get("dp") === "1" && (s.fromDefaultProtocol = !0),
        { resultType: o("WAWebApi").APICmd.CHAT_OPEN, data: s }
      );
    }
    function q(e) {
      return w.test(e)
        ? { resultType: o("WAWebApi").APICmd.CALL_ACTIVE }
        : null;
    }
    function U(e) {
      var t = e.match(A);
      if (!t) return null;
      var n = new URLSearchParams(t[1]),
        a = n.get("session");
      return babelHelpers.extends(
        { resultType: o("WAWebApi").APICmd.APP_OPEN },
        !r("isStringNullOrEmpty")(a) && { data: { session: a } },
      );
    }
    function V(e) {
      var t = e.match(F);
      if (!t) return null;
      var n = new URLSearchParams(t[1]),
        a = n.get("code"),
        i = n.get("state");
      return r("isStringNullOrEmpty")(a) || r("isStringNullOrEmpty")(i)
        ? { resultType: o("WAWebApi").APICmd.INVALID }
        : {
            resultType: o("WAWebApi").APICmd.OIDC_CALLBACK,
            data: { code: a, state: i },
          };
    }
    function H(e) {
      var t = e.match(O);
      if (!t) return null;
      var n = new URLSearchParams(t[1]),
        a = n.get("code"),
        i = n.get("error"),
        l = n.get("state");
      if (r("isStringNullOrEmpty")(l))
        return { resultType: o("WAWebApi").APICmd.INVALID };
      if (!r("isStringNullOrEmpty")(i))
        return {
          resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
          data: { code: null, error: i, state: l },
        };
      var s = G(n, l);
      return s != null
        ? {
            resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
            data: { callbackUrl: s, code: null, error: null, state: l },
          }
        : r("isStringNullOrEmpty")(a)
          ? r("isStringNullOrEmpty")(n.get("plugin_id"))
            ? { resultType: o("WAWebApi").APICmd.INVALID }
            : {
                resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
                data: {
                  code: null,
                  error: "brokered_callback_incomplete",
                  state: l,
                },
              }
          : {
              resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
              data: { code: a, error: null, state: l },
            };
    }
    function G(e, t) {
      var n = e.get("plugin_id"),
        o = e.get("bizai_nonce"),
        a = e.get("connection_id");
      if (
        r("isStringNullOrEmpty")(n) ||
        r("isStringNullOrEmpty")(o) ||
        r("isStringNullOrEmpty")(a)
      )
        return null;
      var i = new URL(B);
      return (
        i.searchParams.set("state", t),
        i.searchParams.set("plugin_id", n),
        i.searchParams.set("bizai_nonce", o),
        i.searchParams.set("connectionId", a),
        i.toString()
      );
    }
    var z = /^whatsapp:\/\/newcall\/?(\?.*)?$/i,
      j = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/forward/?\\?(.+)$",
        "i",
      ),
      K = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/send/?\\?(.+)$",
        "i",
      ),
      Q = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i,
      X = /^whatsapp:\/\/send\/?\?(.*)$/i,
      Y =
        /^https?:\/\/wa\.me\/([0-9.]{1,20})\/signup\/([^/?]+)\/?(?:\?(.+))?$/i,
      J = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20}))\/?\??(.+)?$/i,
      Z = /^https?:\/\/wa\.me\/?(?:([0-9a-z.]{5,35}))?\/?\??(.+)?$/i,
      ee =
        /^https?:\/\/wa\.me\/?@?(?:([0-9a-z._]{3,30}))(?::([^?/]+))?(\/?\?(.*))?$/i,
      te = /^https?:\/\/wa\.me\/settings\/?(?:\?.*)?$/i,
      ne = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      re = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      oe = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})$",
        "i",
      ),
      ae = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      ie = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      le = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      se = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      ue = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      ce = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})$",
        "i",
      ),
      de = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      me = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      pe = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      _e = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i,
      fe = /^whatsapp-smb:\/\/advertise\/?(.+)$/i,
      ge = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/,
      he = /^whatsapp-smb:\/\/pix\/?(?:\?.*)?$/i,
      ye = /^https?:\/\/wa\.me\/pay\/br\/merchant\/pix\/add\/?(.+)$/i,
      Ce = /^https?:\/\/faq\.whatsapp\.com\/1013401987232838\/?(.+)$/i,
      be = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_PATH_PART +
          "/pay/br/merchant/pix/add/?(.+)$",
        "i",
      ),
      ve = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/pay/br/add-pix-key/?(?:\\?(.*))?$",
        "i",
      ),
      Se = /^whatsapp:\/\/pay\/br\/add-pix-key\/?(?:\?(.*))?$/i,
      Re = /^whatsapp-smb:\/\/biztab\/manage-data-sharing\/?(?:\?.*)?$/i,
      Le = /^whatsapp-smb:\/\/biz-agents-onboarding\/?(?:\?.*)?$/i,
      Ee = /^whatsapp-smb:\/\/biz-broadcast-audience-modal\/?(?:\?.*)?$/i,
      ke = /^whatsapp-smb:\/\/biz-broadcast-home\/?(?:\?.*)?$/i,
      Ie = new RegExp("^" + _.ORIGIN + "/biz-broadcast-home/?(?:\\?.*)?$", "i"),
      Te = /^[a-z0-9_]{1,64}$/i;
    function De(e) {
      return e != null && Te.test(e);
    }
    var xe = /^whatsapp-smb:\/\/business-broadcast\/?(?:\?.*)?$/i,
      $e = new RegExp("^" + _.ORIGIN + "/business-broadcast/?(?:\\?.*)?$", "i"),
      Pe = /^whatsapp-smb:\/\/marketingmessages\/?(?:\?.*)?$/i,
      Ne = new RegExp("^" + _.ORIGIN + "/marketingmessages/?(?:\\?.*)?$", "i"),
      Me = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
      we = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
      Ae = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
      Fe = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
      Oe = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
        "i",
      ),
      Be = /^https?:\/\/wa\.me\/call\/([^/?]+)\/?(?:\?.*)?$/i,
      We = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/reg/wacom[/\\?]{0,2}(.*)$",
        "i",
      ),
      qe = [ne, re, se, ue],
      Ue = [oe, ce],
      Ve = [le, pe],
      He = [ae, ie, de, me],
      Ge = [].concat(qe, Ue, Ve, He);
    function ze(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = e.match(t[n]);
        if (r) return r;
      }
    }
    function je(e) {
      return ze(e, Ge) != null;
    }
    var Ke = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
        "i",
      ),
      Qe = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
      Xe = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
      Ye = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})?$",
        "i",
      ),
      Je = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})(/?.*)?$",
        "i",
      );
    function Ze(e) {
      return [Qe, Xe, Ye, Je].some(function (t) {
        return e.match(t);
      });
    }
    var et = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
      tt = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/favorites/?(?:\\?.*)?$",
        "i",
      );
    function nt(e) {
      if (o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
        var t = e.match(ee);
        if (t) {
          var n = null;
          t[1] && (n = { username: t[1] });
          var r = t[2];
          if (
            (r != null &&
              (o("WAWebUsernameTypes").isUsernameKey(r)
                ? (n = babelHelpers.extends({}, n, { usernameKey: r }))
                : (n = babelHelpers.extends({}, n, {
                    invalidUsernameKey: !0,
                  }))),
            t[3])
          ) {
            var a = $(t[3], e);
            a != null && (n = babelHelpers.extends({}, n, a));
          }
          if (n != null) {
            var i = ot(e);
            i != null && (n = babelHelpers.extends({}, n, { partnertoken: i }));
          }
          return n;
        }
      }
    }
    function rt(t) {
      var n = t.match(K);
      if (n) {
        var r = $(n[2], t);
        if (r) return ((r.url = n[1] || "/"), r);
      }
      if (((n = t.match(Q)), n || ((n = t.match(X)), n))) return $(n[1], t);
      if (((n = t.match(Y)), n)) {
        var a = { phone: n[1] + "@c.us" },
          i = n[2];
        if ((L.test(i) && (a.signupId = i), n[3])) {
          var l = $(n[3], t);
          if (l) {
            var s = l.phone,
              u = babelHelpers.objectWithoutPropertiesLoose(l, e);
            a = babelHelpers.extends({}, a, u);
          }
        }
        var c = ot(t);
        return (c != null && (a.partnertoken = c), a);
      }
      if (((n = t.match(J)), n)) {
        var d,
          m = t.match(Z);
        if (
          (n[1]
            ? (d = { phone: n[1] + "@c.us" })
            : m &&
              m[1] &&
              !m[2] &&
              ((d = { url: t, customUrl: m[1] }),
              (d = babelHelpers.extends({}, d, nt(t)))),
          n[2])
        ) {
          var p = $(n[2], t);
          p && (d = babelHelpers.extends({}, d, p));
        }
        if (d) {
          var _ = ot(t);
          _ != null && (d.partnertoken = _);
        }
        if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled())
          return d;
      }
      return nt(t);
    }
    function ot(e) {
      var t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames(),
        n = new URL(e);
      for (var r of t) {
        var a = n.searchParams.get(r);
        if (a != null) return a;
      }
      return null;
    }
    var at = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function it(e) {
      var t = e.match(at);
      if (t) {
        var n = new URLSearchParams(t[1]).get("entrypoint");
        return { url: "/", entrypointType: n };
      }
    }
    function lt(e, t) {
      var n = { catalogOwnerJid: e[1] + "@s.whatsapp.net" },
        r = ot(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function st(e) {
      var t = new URLSearchParams(e),
        n = t.get(b),
        r = t.get(v);
      if (r == null && n == null) return null;
      var o = {};
      return (n != null && (o.source = n), r != null && (o.campaign = r), o);
    }
    function ut(e) {
      var t = e.match(Qe) || e.match(Xe);
      if (t) return lt(t, e);
      if (((t = e.match(Ye)), t))
        return babelHelpers.extends({}, lt(t, e), { url: "/" });
      if (((t = e.match(Je)), t)) {
        var n = st(t[2]);
        return babelHelpers.extends({}, lt(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
    }
    function ct(e, t) {
      var n = { productId: e[1], businessOwnerJid: e[2] + "@s.whatsapp.net" },
        r = ot(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function dt(e) {
      var t = ze(e, qe);
      if (t) return ct(t, e);
      if (((t = ze(e, Ue)), t))
        return babelHelpers.extends({}, ct(t, e), { url: "/" });
      if (((t = ze(e, Ve)), t)) {
        var n = st(t[3]);
        return babelHelpers.extends({}, ct(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
      if (((t = ze(e, He)), t)) {
        var r = st(t[3]);
        return babelHelpers.extends({}, ct(t, e), r != null && { utm: r });
      }
    }
    function mt(e) {
      var t = e.match(Ke);
      if (t) return { url: "/" };
    }
    function pt(e) {
      var t = new URLSearchParams(e),
        n = t.get("wa_campaign_id");
      if (!(n == null || n === "")) {
        var r = t.get("wa_campaign_type");
        return r == null || r === ""
          ? null
          : { campaignId: n, campaignType: r };
      }
    }
    function _t(e) {
      var t = e.match(fe);
      if (t) return pt(t[1]);
    }
    function ft(e) {
      var t = e.match(_e);
      if (t) return pt(t[1]);
    }
    function gt(e) {
      var t = e.match(ye),
        n = null;
      if ((t ? (n = t[1]) : ((t = e.match(be)), t && (n = t[2])), n != null)) {
        var r = pt(n);
        if (r)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, r, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING,
            }),
          };
      }
      if (((t = e.match(Ce)), t)) {
        var a = pt(t[1]);
        if (a)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, a, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_FAQ,
            }),
          };
      }
      return null;
    }
    function ht(e) {
      var t,
        n,
        r = (t = e.match(ve)) != null ? t : e.match(Se);
      if (!r) return null;
      var a = ((n = r[1]) != null ? n : "").split("#")[0],
        i = new URLSearchParams(a);
      return {
        resultType: "BRAZIL_ADD_PIX_KEY",
        data: {
          campaignId: i.get("c"),
          prefill: o("WAWebBrAddPixKeyDeepLinkPrefill").parseAddPixKeyPrefill(
            i,
            a,
          ),
          referralSlug: i.get("referral"),
          url: "/",
        },
      };
    }
    function yt(e) {
      var t = e.match(Me);
      if (t) {
        var n = pt(t[1]);
        if ((n == null ? void 0 : n.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_CATALOG_SETTINGS,
          };
      }
      var r = e.match(we);
      if (r) {
        var a = pt(r[1]);
        if ((a == null ? void 0 : a.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_BOOST_CATALOG,
          };
      }
    }
    function Ct(e) {
      return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    var bt = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
      vt = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
      St =
        /^(?:https?:\/\/wa\.me\/set-about|whatsapp:\/\/set-about)\/?(?:\?.*)?$/i,
      Rt =
        /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i,
      Lt = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function Et(e) {
      var t = e.match(Lt);
      return t != null;
    }
    function kt(e) {
      var t = e.match(bt);
      return !!t;
    }
    var It = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
      Tt = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/ais/(\\d{14,20})/?(\\?.*)?$",
        "i",
      );
    function Dt(e) {
      var t,
        n,
        r = (
          (t = (n = e.match(It)) != null ? n : e.match(Tt)) != null ? t : []
        )[1];
      return r
        ? { resultType: o("WAWebApi").APICmd.UGC_BOT, data: { fbid: r } }
        : null;
    }
    var xt = /^https?:\/\/wa\.me\/(?:hatch|muse)\/link(?:\?(.*))?$/i,
      $t = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/(?:hatch|muse)/link(?:\\?(.*))?$",
        "i",
      );
    function Pt(e) {
      var t,
        n = (t = e.match(xt)) != null ? t : e.match($t);
      if (n != null) {
        var r = null;
        if (n[1] != null) {
          var a = new URLSearchParams(n[1]);
          r = a.get("token");
        }
        return {
          resultType: o("WAWebApi").APICmd.HATCH_LINK,
          data: { token: r },
        };
      }
      return null;
    }
    function Nt(e) {
      if (Et(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          o = n[1],
          a = n[2];
        return a;
      }
    }
    function Mt(e) {
      var t = e.match(Lt);
      if (t) {
        var n = Nt(e);
        return { resultType: "STICKER_PACK", data: { url: n } };
      }
    }
    var wt = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      At = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Ft = new RegExp(
        "^" + _.ORIGIN + "/call/(video|voice)/(\\w+)(?:\\?.*)?$",
        "i",
      ),
      Ot =
        /^https:\/\/web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Bt =
        /^https:\/\/dev-web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Wt =
        /^https:\/\/call\.[^/]+\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      qt =
        /^https:\/\/dev-web\.[^/]+\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function Ut(e) {
      var t = e.get("audio_device"),
        n = e.get("speaker_device"),
        r = e.get("video_device"),
        a = e.get("color_index"),
        i = a != null && a !== "" ? parseInt(a, 10) : null,
        l =
          o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1;
      return {
        audioDeviceId: t != null && t !== "" ? t : null,
        autoJoin: e.get("auto_join") === "1",
        colorIndex: i != null && !isNaN(i) && i >= 1 && i <= l ? i : null,
        speakerDeviceId: n != null && n !== "" ? n : null,
        videoDeviceId: r != null && r !== "" ? r : null,
        videoMuted: e.get("video_muted") === "1",
        audioMuted: e.get("audio_muted") === "1",
      };
    }
    function Vt(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return null;
      }
      var n = t.hostname.toLowerCase();
      if (n !== "whatsapp.com" && !n.endsWith(".whatsapp.com")) return null;
      var r = t.searchParams;
      if (r.get("cmd") !== "call_link") return null;
      var a = r.get("call_type"),
        i = r.get("call_token");
      if ((a !== "video" && a !== "voice") || i == null || i === "")
        return null;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "Successfully parsed call link from query params: ",
            "",
          ])),
        e,
      );
      var l = Ut(r);
      return {
        resultType: "CALL_LINK",
        data: babelHelpers.extends({ token: i, callType: a }, l),
      };
    }
    function Ht(e) {
      var t = e.match(wt) || e.match(At) || e.match(Ft) || e.match(Ot);
      if ((t == null && r("gkx")("9092") && (t = e.match(Bt)), t))
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Successfully parsed call link: ",
                "",
              ])),
            e,
          ),
          { resultType: "CALL_LINK", data: { token: t[2], callType: t[1] } }
        );
      var n = Vt(e);
      if (n != null) return n;
    }
    function Gt(e) {
      return Ht(e) != null;
    }
    function zt(e) {
      var t = e.match(We);
      if (t && t[0]) {
        var n = new URL(e),
          r = new URLSearchParams(n.search),
          a = r.get("g"),
          i = r.get("pn"),
          l = r.get("prov_num"),
          s = null;
        return (
          a === "0"
            ? (s = o(
                "WAWebRegistrationCampaignConstants",
              ).WHATSAPP_DOT_COM_REG_EXP_CONTROL)
            : a === "1"
              ? (s = o(
                  "WAWebRegistrationCampaignConstants",
                ).WHATSAPP_DOT_COM_REG_EXP_FLOW_1)
              : a === "2" &&
                (s = o(
                  "WAWebRegistrationCampaignConstants",
                ).WHATSAPP_DOT_COM_REG_EXP_FLOW_2),
          i != null && i.length > 0 && /^\d{10}$/.test(i)
            ? babelHelpers.extends(
                {
                  referrer: "wacom",
                  url: "/",
                  phoneNumberWithoutCountryCode: i,
                },
                l != null && { providerNumber: l },
                { group: s },
              )
            : babelHelpers.extends(
                { referrer: "wacom", url: "/" },
                l != null && { providerNumber: l },
                { group: s },
              )
        );
      }
    }
    function jt() {
      var e = new URLSearchParams(window.location.search),
        t = e.get("work_contact_sync_data");
      return t != null && t !== "" ? { compressedData: t } : null;
    }
    function Kt(e) {
      var t = e.match(j);
      if (!t) return null;
      var n = new URLSearchParams(t[2]);
      if (!n.has("session_id")) return null;
      var r = n.get("session_id");
      if (r == null || r.trim() === "")
        return (
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "parseSendFile: invalid or missing session_id",
                ])),
            )
            .sendLogs("send-file-invalid-session-id"),
          null
        );
      var a = n.get("utm_campaign");
      return {
        sessionId: r != null ? r : void 0,
        utmCampaign: a != null ? a : void 0,
      };
    }
    function Qt(e) {
      var t;
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_deep_link_error",
        )
      )
        return null;
      var n = e.match(Be);
      if (n == null && !Oe.test(e)) return null;
      var r = new URL(e),
        a =
          n == null
            ? (t = r.searchParams.get("phone")) != null
              ? t
              : ""
            : Xt(n[1]),
        i = o("WAWebPhoneNumberSearch").numberSearch(a) || void 0,
        l =
          r.searchParams.get("call_type") === "video" &&
          o("WAWebABProps").getABPropConfigValue(
            "enable_calluser_video_deeplink",
          );
      return {
        resultType: o("WAWebApi").APICmd.CALL_USER,
        data: { url: "/", phone: i, video: l },
      };
    }
    function Xt(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "parseCallUser: phone path segment is not decodable: ",
                  "",
                ])),
              t,
            )
            .sendLogs("calling-deep-link-undecodable-phone", {
              sampling: 0.01,
            }),
          e
        );
      }
    }
    function Yt(e, t) {
      if (typeof e != "string")
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var n = C(e);
      if (n) return { resultType: o("WAWebApi").APICmd.GROUP_INVITE, data: n };
      var a = ut(e);
      if (a) return { resultType: o("WAWebApi").APICmd.CATALOG, data: a };
      var i = dt(e);
      if (i) return { resultType: o("WAWebApi").APICmd.PRODUCT, data: i };
      var l = it(e);
      if (l)
        return { resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY, data: l };
      var s = kt(e);
      if (s) return { resultType: o("WAWebApi").APICmd.AVATAR_STICKERPACK };
      var u = o("WAWebNewsletterStatusApiParse").parseNewsletterStatusDeeplink(
        e,
      );
      if (u)
        return {
          resultType: o("WAWebApi").APICmd.NEWSLETTER_STATUS_DEEPLINK,
          data: u,
        };
      var c = o("WAWebStatusApiParse").parseStatusPostFeatureLink(e);
      if (c) return { resultType: o("WAWebApi").APICmd.STATUS_POST, data: c };
      var d = o("WAWebBroadcastApiParse").parseBroadcastFeatureLink(e);
      if (d) return { resultType: o("WAWebApi").APICmd.BROADCAST, data: d };
      var m = o("WAWebNewsletterApiParse").parseNewsletter(e, t);
      if (m) return { resultType: o("WAWebApi").APICmd.NEWSLETTER, data: m };
      if (
        [Ae, Fe].some(function (t) {
          return e.match(t);
        })
      )
        return { resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF };
      if (
        [et, tt].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.FAVORITES,
          data: { url: "/" },
        };
      var p = ft(e);
      if (p != null)
        return { resultType: o("WAWebApi").APICmd.OPEN_CATALOG, data: p };
      var _ = yt(e);
      if (_ != null)
        return {
          resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
          data: _,
        };
      var f = Mt(e);
      if (f) {
        var g;
        return {
          resultType: o("WAWebApi").APICmd.STICKER_PACK,
          data: { url: (g = f.data.url) != null ? g : "" },
        };
      }
      var h = mt(e);
      if (h)
        return { resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION, data: h };
      var y = _t(e);
      if (y != null)
        return { resultType: o("WAWebApi").APICmd.ADVERTISE, data: y };
      var b = Ht(e);
      if (b) return b;
      if (e.match(ge))
        return {
          resultType: o("WAWebApi").APICmd.MANAGE_ADS,
          trigger: "chatListBanner",
        };
      if (e.match(Re)) {
        var v = new URL(e),
          S = v.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING,
          source: S != null ? S : "unknown",
        };
      }
      if (e.match(Le))
        return { resultType: o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING };
      if (e.match(Ee))
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL,
        };
      if (
        e.match(ke) ||
        e.match(Ie) ||
        e.match(xe) ||
        e.match($e) ||
        e.match(Pe) ||
        e.match(Ne)
      ) {
        var R = new URL(e),
          L = R.searchParams.get("source"),
          E = R.searchParams.get("moment");
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
          data: {
            source: L != null ? L : "unknown",
            moment: De(E) ? E : void 0,
            url: "/",
          },
        };
      }
      var k = H(e);
      if (k != null) return k;
      var I = ht(e);
      if (I) return I;
      var T = gt(e);
      if (T) return T;
      if (he.test(e))
        return {
          resultType: o("WAWebApi").APICmd.BRAZIL_PIX_HOME,
          data: { url: "/" },
        };
      if (e.match(vt))
        return { resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
      if (e.match(St)) return { resultType: o("WAWebApi").APICmd.SET_ABOUT };
      var D = e.match(Rt);
      if (D) {
        var x,
          $ = new URL(e.replace("whatsapp://", "https://")),
          M = (x = $.searchParams.get("entry_point")) != null ? x : void 0;
        return {
          resultType: o("WAWebApi").APICmd.PROFILE_USERNAME,
          data: { entryPoint: M },
        };
      }
      var w = Qt(e);
      if (w != null) return w;
      var A = Ct(e);
      if (A != null)
        return { resultType: o("WAWebApi").APICmd.PAYMENT_LINK, data: A };
      var F = Pt(e);
      if (F != null) return F;
      var O = Dt(e);
      if (O) return O;
      if (te.test(e)) return { resultType: o("WAWebApi").APICmd.INVALID };
      var B = rt(e);
      if (B) return { resultType: o("WAWebApi").APICmd.MSG_SEND, data: B };
      var G = zt(e);
      if (G != null)
        return {
          resultType: o("WAWebApi").APICmd.WEB_REGISTRATION_CAMPAIGN,
          data: G,
        };
      var j = W(e);
      if (j != null) return j;
      var K = q(e);
      if (K != null) return K;
      var Q = U(e);
      if (Q != null) return Q;
      var X = V(e);
      if (X != null) return X;
      if (e.match(P)) return { resultType: o("WAWebApi").APICmd.NEW_CHAT };
      if (N.test(e)) return { resultType: o("WAWebApi").APICmd.NEW_GROUP };
      var Y = e.match(z);
      if (Y) {
        var J = new URLSearchParams(Y[1]),
          Z = J.get("phone"),
          ee = J.get("lid"),
          ne = J.get("video") === "true",
          re = J.get("dp") === "1",
          oe = {};
        (r("isStringNullOrEmpty")(Z) || (oe.phone = Z),
          r("isStringNullOrEmpty")(ee) || (oe.lid = ee),
          ne && (oe.video = ne),
          re && (oe.fromDefaultProtocol = !0));
        var ae =
          !r("isStringNullOrEmpty")(Z) || !r("isStringNullOrEmpty")(ee) || ne;
        return babelHelpers.extends(
          { resultType: o("WAWebApi").APICmd.NEW_CALL },
          ae && { data: oe },
        );
      }
      var ie = r("gkx")("26258") ? null : jt();
      if (ie)
        return { resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC, data: ie };
      var le = Kt(e);
      return le
        ? { resultType: o("WAWebApi").APICmd.SEND_FILE, data: le }
        : { resultType: o("WAWebApi").APICmd.INVALID };
    }
    ((l.parseConversionData = k),
      (l.parseCTWADeeplinkToken = D),
      (l.matchProductUrl = je),
      (l.matchCatalogUrl = Ze),
      (l.isStickerPackURL = Et),
      (l.parseCallLinkDevicePrefs = Ut),
      (l.parseCallLink = Ht),
      (l.isValidCallLink = Gt),
      (l.parseAPICmd = Yt));
  },
  98,
);
