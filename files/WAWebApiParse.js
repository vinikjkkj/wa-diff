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
    "WAWebCurrentUser",
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
      var t = it(e),
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
        var i = nt(t);
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
      N = /^whatsapp:\/\/chatOpen\/?(\?.*)?$/i,
      M = /^whatsapp:\/\/callActive\/?(\?.*)?$/i,
      w = /^whatsapp:\/\/appOpen\/?(\?.*)?$/i,
      A = /^whatsapp:\/\/oidc_callback\/?(\?.*)?$/i,
      F = /^whatsapp-smb:\/\/biz_ai_oauth_callback\/?(\?.*)?$/i,
      O = "https://b.whatsapp.com/oauth/biz_ai_redirect";
    function B(e) {
      var t = e.match(N);
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
    function W(e) {
      return M.test(e)
        ? { resultType: o("WAWebApi").APICmd.CALL_ACTIVE }
        : null;
    }
    function q(e) {
      var t = e.match(w);
      if (!t) return null;
      var n = new URLSearchParams(t[1]),
        a = n.get("session");
      return babelHelpers.extends(
        { resultType: o("WAWebApi").APICmd.APP_OPEN },
        !r("isStringNullOrEmpty")(a) && { data: { session: a } },
      );
    }
    function U(e) {
      var t = e.match(A);
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
    function V(e) {
      var t = e.match(F);
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
      var s = H(n, l);
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
    function H(e, t) {
      var n = e.get("plugin_id"),
        o = e.get("bizai_nonce"),
        a = e.get("connection_id");
      if (
        r("isStringNullOrEmpty")(n) ||
        r("isStringNullOrEmpty")(o) ||
        r("isStringNullOrEmpty")(a)
      )
        return null;
      var i = new URL(O);
      return (
        i.searchParams.set("state", t),
        i.searchParams.set("plugin_id", n),
        i.searchParams.set("bizai_nonce", o),
        i.searchParams.set("connectionId", a),
        i.toString()
      );
    }
    var G = /^whatsapp:\/\/newcall\/?(\?.*)?$/i,
      z = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/forward/?\\?(.+)$",
        "i",
      ),
      j = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/send/?\\?(.+)$",
        "i",
      ),
      K = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i,
      Q = /^whatsapp:\/\/send\/?\?(.*)$/i,
      X =
        /^https?:\/\/wa\.me\/([0-9.]{1,20})\/signup\/([^/?]+)\/?(?:\?(.+))?$/i,
      Y = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20}))\/?\??(.+)?$/i,
      J = /^https?:\/\/wa\.me\/?(?:([0-9a-z.]{5,35}))?\/?\??(.+)?$/i,
      Z =
        /^https?:\/\/wa\.me\/?@?(?:([0-9a-z._]{3,30}))(?::([^?/]+))?(\/?\?(.*))?$/i,
      ee = /^https?:\/\/wa\.me\/settings\/?(?:\?.*)?$/i,
      te = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      ne = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      re = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})$",
        "i",
      ),
      oe = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      ae = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      ie = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      le = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      se = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      ue = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})$",
        "i",
      ),
      ce = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      de = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      me = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      pe = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i,
      _e = /^whatsapp-smb:\/\/advertise\/?(.+)$/i,
      fe = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/,
      ge = /^https?:\/\/wa\.me\/pay\/br\/merchant\/pix\/add\/?(.+)$/i,
      he = /^https?:\/\/faq\.whatsapp\.com\/1013401987232838\/?(.+)$/i,
      ye = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_PATH_PART +
          "/pay/br/merchant/pix/add/?(.+)$",
        "i",
      ),
      Ce = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/pay/br/add-pix-key/?(?:\\?(.*))?$",
        "i",
      ),
      be = /^whatsapp:\/\/pay\/br\/add-pix-key\/?(?:\?(.*))?$/i,
      ve = /^whatsapp-smb:\/\/biztab\/manage-data-sharing\/?(?:\?.*)?$/i,
      Se = /^whatsapp-smb:\/\/biz-agents-onboarding\/?(?:\?.*)?$/i,
      Re = /^whatsapp-smb:\/\/biz-broadcast-audience-modal\/?(?:\?.*)?$/i,
      Le = /^whatsapp-smb:\/\/biz-broadcast-home\/?(?:\?.*)?$/i,
      Ee = new RegExp("^" + _.ORIGIN + "/biz-broadcast-home/?(?:\\?.*)?$", "i"),
      ke = /^[a-z0-9_]{1,64}$/i;
    function Ie(e) {
      return e != null && ke.test(e);
    }
    var Te = /^whatsapp-smb:\/\/business-broadcast\/?(?:\?.*)?$/i,
      De = new RegExp("^" + _.ORIGIN + "/business-broadcast/?(?:\\?.*)?$", "i"),
      xe = /^whatsapp-smb:\/\/marketingmessages\/?(?:\?.*)?$/i,
      $e = new RegExp("^" + _.ORIGIN + "/marketingmessages/?(?:\\?.*)?$", "i"),
      Pe = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
      Ne = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
      Me = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
      we = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
      Ae = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
        "i",
      ),
      Fe = /^https?:\/\/wa\.me\/call\/([^/?]+)\/?(?:\?.*)?$/i,
      Oe = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/reg/wacom[/\\?]{0,2}(.*)$",
        "i",
      ),
      Be = [te, ne, le, se],
      We = [re, ue],
      qe = [ie, me],
      Ue = [oe, ae, ce, de],
      Ve = [].concat(Be, We, qe, Ue);
    function He(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = e.match(t[n]);
        if (r) return r;
      }
    }
    function Ge(e) {
      return He(e, Ve) != null;
    }
    var ze = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
        "i",
      ),
      je = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
      Ke = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
      Qe = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})?$",
        "i",
      ),
      Xe = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})(/?.*)?$",
        "i",
      );
    function Ye(e) {
      return [je, Ke, Qe, Xe].some(function (t) {
        return e.match(t);
      });
    }
    var Je = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
      Ze = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/favorites/?(?:\\?.*)?$",
        "i",
      );
    function et(e) {
      if (o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
        var t = e.match(Z);
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
            var i = nt(e);
            i != null && (n = babelHelpers.extends({}, n, { partnertoken: i }));
          }
          return n;
        }
      }
    }
    function tt(t) {
      var n = t.match(j);
      if (n) {
        var r = $(n[2], t);
        if (r) return ((r.url = n[1] || "/"), r);
      }
      if (((n = t.match(K)), n || ((n = t.match(Q)), n))) return $(n[1], t);
      if (((n = t.match(X)), n)) {
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
        var c = nt(t);
        return (c != null && (a.partnertoken = c), a);
      }
      if (((n = t.match(Y)), n)) {
        var d,
          m = t.match(J);
        if (
          (n[1]
            ? (d = { phone: n[1] + "@c.us" })
            : m &&
              m[1] &&
              !m[2] &&
              ((d = { url: t, customUrl: m[1] }),
              (d = babelHelpers.extends({}, d, et(t)))),
          n[2])
        ) {
          var p = $(n[2], t);
          p && (d = babelHelpers.extends({}, d, p));
        }
        if (d) {
          var _ = nt(t);
          _ != null && (d.partnertoken = _);
        }
        if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled())
          return d;
      }
      return et(t);
    }
    function nt(e) {
      var t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames(),
        n = new URL(e);
      for (var r of t) {
        var a = n.searchParams.get(r);
        if (a != null) return a;
      }
      return null;
    }
    var rt = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function ot(e) {
      var t = e.match(rt);
      if (t) {
        var n = new URLSearchParams(t[1]).get("entrypoint");
        return { url: "/", entrypointType: n };
      }
    }
    function at(e, t) {
      var n = { catalogOwnerJid: e[1] + "@s.whatsapp.net" },
        r = nt(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function it(e) {
      var t = new URLSearchParams(e),
        n = t.get(b),
        r = t.get(v);
      if (r == null && n == null) return null;
      var o = {};
      return (n != null && (o.source = n), r != null && (o.campaign = r), o);
    }
    function lt(e) {
      var t = e.match(je) || e.match(Ke);
      if (t) return at(t, e);
      if (((t = e.match(Qe)), t))
        return babelHelpers.extends({}, at(t, e), { url: "/" });
      if (((t = e.match(Xe)), t)) {
        var n = it(t[2]);
        return babelHelpers.extends({}, at(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
    }
    function st(e, t) {
      var n = { productId: e[1], businessOwnerJid: e[2] + "@s.whatsapp.net" },
        r = nt(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function ut(e) {
      var t = He(e, Be);
      if (t) return st(t, e);
      if (((t = He(e, We)), t))
        return babelHelpers.extends({}, st(t, e), { url: "/" });
      if (((t = He(e, qe)), t)) {
        var n = it(t[3]);
        return babelHelpers.extends({}, st(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
      if (((t = He(e, Ue)), t)) {
        var r = it(t[3]);
        return babelHelpers.extends({}, st(t, e), r != null && { utm: r });
      }
    }
    function ct(e) {
      var t = e.match(ze);
      if (t) return { url: "/" };
    }
    function dt(e) {
      var t = new URLSearchParams(e),
        n = t.get("wa_campaign_id");
      if (!(n == null || n === "")) {
        var r = t.get("wa_campaign_type");
        return r == null || r === ""
          ? null
          : { campaignId: n, campaignType: r };
      }
    }
    function mt(e) {
      var t = e.match(_e);
      if (t) return dt(t[1]);
    }
    function pt(e) {
      var t = e.match(pe);
      if (t) return dt(t[1]);
    }
    function _t(e) {
      var t = e.match(ge),
        n = null;
      if ((t ? (n = t[1]) : ((t = e.match(ye)), t && (n = t[2])), n != null)) {
        var r = dt(n);
        if (r)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, r, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING,
            }),
          };
      }
      if (((t = e.match(he)), t)) {
        var a = dt(t[1]);
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
    function ft(e) {
      var t,
        n,
        r = (t = e.match(Ce)) != null ? t : e.match(be);
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
    function gt(e) {
      var t = e.match(Pe);
      if (t) {
        var n = dt(t[1]);
        if ((n == null ? void 0 : n.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_CATALOG_SETTINGS,
          };
      }
      var r = e.match(Ne);
      if (r) {
        var a = dt(r[1]);
        if ((a == null ? void 0 : a.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_BOOST_CATALOG,
          };
      }
    }
    function ht(e) {
      return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    var yt = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
      Ct = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
      bt =
        /^(?:https?:\/\/wa\.me\/set-about|whatsapp:\/\/set-about)\/?(?:\?.*)?$/i,
      vt =
        /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i,
      St = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function Rt(e) {
      var t = e.match(St);
      return t != null;
    }
    function Lt(e) {
      var t = e.match(yt);
      return !!t;
    }
    var Et = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
      kt = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/ais/(\\d{14,20})/?(\\?.*)?$",
        "i",
      );
    function It(e) {
      var t,
        n,
        r = (
          (t = (n = e.match(Et)) != null ? n : e.match(kt)) != null ? t : []
        )[1];
      return r
        ? { resultType: o("WAWebApi").APICmd.UGC_BOT, data: { fbid: r } }
        : null;
    }
    var Tt = /^https?:\/\/wa\.me\/(?:hatch|muse)\/link(?:\?(.*))?$/i,
      Dt = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/(?:hatch|muse)/link(?:\\?(.*))?$",
        "i",
      );
    function xt(e) {
      var t,
        n = (t = e.match(Tt)) != null ? t : e.match(Dt);
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
    function $t(e) {
      if (Rt(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          o = n[1],
          a = n[2];
        return a;
      }
    }
    function Pt(e) {
      var t = e.match(St);
      if (t) {
        var n = $t(e);
        return { resultType: "STICKER_PACK", data: { url: n } };
      }
    }
    var Nt = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Mt = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      wt = new RegExp(
        "^" + _.ORIGIN + "/call/(video|voice)/(\\w+)(?:\\?.*)?$",
        "i",
      ),
      At =
        /^https:\/\/web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Ft =
        /^https:\/\/dev-web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Ot =
        /^https:\/\/call\.[^/]+\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Bt =
        /^https:\/\/dev-web\.[^/]+\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function Wt(e) {
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
    function qt(e) {
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
      var l = Wt(r);
      return {
        resultType: "CALL_LINK",
        data: babelHelpers.extends({ token: i, callType: a }, l),
      };
    }
    function Ut(e) {
      var t = e.match(Nt) || e.match(Mt) || e.match(wt) || e.match(At);
      if (
        (t == null && o("WAWebCurrentUser").isEmployee() && (t = e.match(Ft)),
        t)
      )
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
      var n = qt(e);
      if (n != null) return n;
    }
    function Vt(e) {
      return Ut(e) != null;
    }
    function Ht(e) {
      var t = e.match(Oe);
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
    function Gt() {
      var e = new URLSearchParams(window.location.search),
        t = e.get("work_contact_sync_data");
      return t != null && t !== "" ? { compressedData: t } : null;
    }
    function zt(e) {
      var t = e.match(z);
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
    function jt(e) {
      var t;
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_deep_link_error",
        )
      )
        return null;
      var n = e.match(Fe);
      if (n == null && !Ae.test(e)) return null;
      var r = new URL(e),
        a =
          n == null
            ? (t = r.searchParams.get("phone")) != null
              ? t
              : ""
            : Kt(n[1]),
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
    function Kt(e) {
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
    function Qt(e, t) {
      if (typeof e != "string")
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var n = C(e);
      if (n) return { resultType: o("WAWebApi").APICmd.GROUP_INVITE, data: n };
      var a = lt(e);
      if (a) return { resultType: o("WAWebApi").APICmd.CATALOG, data: a };
      var i = ut(e);
      if (i) return { resultType: o("WAWebApi").APICmd.PRODUCT, data: i };
      var l = ot(e);
      if (l)
        return { resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY, data: l };
      var s = Lt(e);
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
        [Me, we].some(function (t) {
          return e.match(t);
        })
      )
        return { resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF };
      if (
        [Je, Ze].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.FAVORITES,
          data: { url: "/" },
        };
      var p = pt(e);
      if (p != null)
        return { resultType: o("WAWebApi").APICmd.OPEN_CATALOG, data: p };
      var _ = gt(e);
      if (_ != null)
        return {
          resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
          data: _,
        };
      var f = Pt(e);
      if (f) {
        var g;
        return {
          resultType: o("WAWebApi").APICmd.STICKER_PACK,
          data: { url: (g = f.data.url) != null ? g : "" },
        };
      }
      var h = ct(e);
      if (h)
        return { resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION, data: h };
      var y = mt(e);
      if (y != null)
        return { resultType: o("WAWebApi").APICmd.ADVERTISE, data: y };
      var b = Ut(e);
      if (b) return b;
      if (e.match(fe))
        return {
          resultType: o("WAWebApi").APICmd.MANAGE_ADS,
          trigger: "chatListBanner",
        };
      if (e.match(ve)) {
        var v = new URL(e),
          S = v.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING,
          source: S != null ? S : "unknown",
        };
      }
      if (e.match(Se))
        return { resultType: o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING };
      if (e.match(Re))
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL,
        };
      if (
        e.match(Le) ||
        e.match(Ee) ||
        e.match(Te) ||
        e.match(De) ||
        e.match(xe) ||
        e.match($e)
      ) {
        var R = new URL(e),
          L = R.searchParams.get("source"),
          E = R.searchParams.get("moment");
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
          data: {
            source: L != null ? L : "unknown",
            moment: Ie(E) ? E : void 0,
            url: "/",
          },
        };
      }
      var k = V(e);
      if (k != null) return k;
      var I = ft(e);
      if (I) return I;
      var T = _t(e);
      if (T) return T;
      if (e.match(Ct))
        return { resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
      if (e.match(bt)) return { resultType: o("WAWebApi").APICmd.SET_ABOUT };
      var D = e.match(vt);
      if (D) {
        var x,
          $ = new URL(e.replace("whatsapp://", "https://")),
          N = (x = $.searchParams.get("entry_point")) != null ? x : void 0;
        return {
          resultType: o("WAWebApi").APICmd.PROFILE_USERNAME,
          data: { entryPoint: N },
        };
      }
      var M = jt(e);
      if (M != null) return M;
      var w = ht(e);
      if (w != null)
        return { resultType: o("WAWebApi").APICmd.PAYMENT_LINK, data: w };
      var A = xt(e);
      if (A != null) return A;
      var F = It(e);
      if (F) return F;
      if (ee.test(e)) return { resultType: o("WAWebApi").APICmd.INVALID };
      var O = tt(e);
      if (O) return { resultType: o("WAWebApi").APICmd.MSG_SEND, data: O };
      var H = Ht(e);
      if (H != null)
        return {
          resultType: o("WAWebApi").APICmd.WEB_REGISTRATION_CAMPAIGN,
          data: H,
        };
      var z = B(e);
      if (z != null) return z;
      var j = W(e);
      if (j != null) return j;
      var K = q(e);
      if (K != null) return K;
      var Q = U(e);
      if (Q != null) return Q;
      if (e.match(P)) return { resultType: o("WAWebApi").APICmd.NEW_CHAT };
      var X = e.match(G);
      if (X) {
        var Y = new URLSearchParams(X[1]),
          J = Y.get("phone"),
          Z = Y.get("lid"),
          te = Y.get("video") === "true",
          ne = Y.get("dp") === "1",
          re = {};
        (r("isStringNullOrEmpty")(J) || (re.phone = J),
          r("isStringNullOrEmpty")(Z) || (re.lid = Z),
          te && (re.video = te),
          ne && (re.fromDefaultProtocol = !0));
        var oe =
          !r("isStringNullOrEmpty")(J) || !r("isStringNullOrEmpty")(Z) || te;
        return babelHelpers.extends(
          { resultType: o("WAWebApi").APICmd.NEW_CALL },
          oe && { data: re },
        );
      }
      var ae = r("gkx")("26258") ? null : Gt();
      if (ae)
        return { resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC, data: ae };
      var ie = zt(e);
      return ie
        ? { resultType: o("WAWebApi").APICmd.SEND_FILE, data: ie }
        : { resultType: o("WAWebApi").APICmd.INVALID };
    }
    ((l.parseConversionData = k),
      (l.parseCTWADeeplinkToken = D),
      (l.matchProductUrl = Ge),
      (l.matchCatalogUrl = Ye),
      (l.isStickerPackURL = Rt),
      (l.parseCallLinkDevicePrefs = Wt),
      (l.parseCallLink = Ut),
      (l.isValidCallLink = Vt),
      (l.parseAPICmd = Qt));
  },
  98,
);
