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
    "WAWebBroadcastApiParse",
    "WAWebExternalCtxConfig",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterStatusApiParse",
    "WAWebPaymentLinkUrlMetaData",
    "WAWebPhoneNumberSearch",
    "WAWebPonyfillsUrlSearchParams",
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
      _ = new RegExp(
        "^" +
          (p = o("WAWebApiParseUtils")).ORIGIN +
          p.OPTIONAL_PATH_PART +
          "/accept/?\\?code=(\\w+)(?:&.*)?$",
        "i",
      ),
      f = /^https?:\/\/chat\.whatsapp\.com\/invite\/(\w+)(?:\?.*)?$/i,
      g = /^https?:\/\/chat\.whatsapp\.com\/(\w+)(?:\?.*)?$/i,
      h = /^whatsapp:\/\/chat\/?\?code=(\w+)(?:&.*)?$/i,
      y = function (t) {
        var e = ze(t),
          n = t.match(_);
        if (n)
          return babelHelpers.extends(
            { code: n[2], url: n[1] || "/" },
            e != null && { utm: e },
          );
        if (((n = t.match(f)), n))
          return babelHelpers.extends({ code: n[1] }, e != null && { utm: e });
        if (((n = t.match(g)), n))
          return babelHelpers.extends({ code: n[1] }, e != null && { utm: e });
        if (((n = t.match(h)), n))
          return babelHelpers.extends({ code: n[1] }, e != null && { utm: e });
      },
      C = "utm_source",
      b = "utm_campaign",
      v = [
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
      ];
    function S(e) {
      return v.find(function (t) {
        return t === e;
      });
    }
    var R = /^\d{1,20}$/,
      L = 32;
    function E(e) {
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
    function k(e, t) {
      var n = e,
        r = o("WABinary").numUtf8Bytes(n);
      r > L ||
        (t.conversionTuple == null
          ? (t.conversionTuple = { conversionSource: n })
          : (t.conversionTuple.conversionSource = n));
    }
    function I(e, t, n) {
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
    function T(e) {
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
    function D(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = e[n];
          if (r != null)
            switch (n) {
              case "source": {
                k(r, t);
                break;
              }
              case "source_url":
              case "context":
              case "icebreaker": {
                I(n, r, t);
                break;
              }
              default:
                (n === "phone" || n === "text" || n === "type") && (t[n] = r);
            }
        }),
        t
      );
    }
    function x(e, t) {
      var n = {},
        a = !1;
      if (
        (new (r("WAWebPonyfillsUrlSearchParams"))(e).forEach(function (e, t) {
          var r = S(t.toLowerCase());
          if (r != null)
            switch (r) {
              case "source": {
                k(e, n);
                break;
              }
              case "source_url":
              case "context":
              case "icebreaker":
                I(r, e, n);
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
                var i = T(e),
                  l = D(i);
                (Object.assign(n, l), (a = !0));
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
                R.test(e) && (n.signupId = e);
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
        var i = Ue(t);
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
    var $ = /^whatsapp:\/\/newchat\/?$/i,
      P = /^whatsapp:\/\/chatOpen\/?(\?.*)?$/i,
      N = /^whatsapp:\/\/callReceived\/?(\?.*)?$/i,
      M = /^whatsapp:\/\/appOpen\/?(\?.*)?$/i,
      w = /^whatsapp:\/\/oidc_callback\/?(\?.*)?$/i;
    function A(e) {
      var t = e.match(P);
      if (!t) return null;
      var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[1]),
        a = n.get("lid");
      if (r("isStringNullOrEmpty")(a))
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var i = a.includes("@") ? a : a + "@lid",
        l = n.get("session");
      return {
        resultType: o("WAWebApi").APICmd.CHAT_OPEN,
        data: babelHelpers.extends(
          { lid: i },
          !r("isStringNullOrEmpty")(l) && { session: l },
        ),
      };
    }
    function F(e) {
      return N.test(e)
        ? { resultType: o("WAWebApi").APICmd.CALL_RECEIVED }
        : null;
    }
    function O(e) {
      var t = e.match(M);
      if (!t) return null;
      var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[1]),
        a = n.get("session");
      return babelHelpers.extends(
        { resultType: o("WAWebApi").APICmd.APP_OPEN },
        !r("isStringNullOrEmpty")(a) && { data: { session: a } },
      );
    }
    function B(e) {
      var t = e.match(w);
      if (!t) return null;
      var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[1]),
        a = n.get("code"),
        i = n.get("state");
      return r("isStringNullOrEmpty")(a) || r("isStringNullOrEmpty")(i)
        ? { resultType: o("WAWebApi").APICmd.INVALID }
        : {
            resultType: o("WAWebApi").APICmd.OIDC_CALLBACK,
            data: { code: a, state: i },
          };
    }
    var W = /^whatsapp:\/\/newcall\/?(\?.*)?$/i,
      q = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/forward/?\\?(.+)$",
        "i",
      ),
      U = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/send/?\\?(.+)$",
        "i",
      ),
      V = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i,
      H = /^whatsapp:\/\/send\/?\?(.*)$/i,
      G =
        /^https?:\/\/wa\.me\/([0-9.]{1,20})\/signup\/([^/?]+)\/?(?:\?(.+))?$/i,
      z = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20}))\/?\??(.+)?$/i,
      j = /^https?:\/\/wa\.me\/?(?:([0-9a-z.]{5,35}))?\/?\??(.+)?$/i,
      K =
        /^https?:\/\/wa\.me\/?@?(?:([0-9a-z._]{3,30}))(?::([^?/]+))?(\/?\?(.*))?$/i,
      Q = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      X = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      Y = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})$",
        "i",
      ),
      J = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      Z = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      ee = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      te = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      ne = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      re = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})$",
        "i",
      ),
      oe = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      ae = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      ie = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      le = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i,
      se = /^whatsapp-smb:\/\/advertise\/?(.+)$/i,
      ue = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/,
      ce = /^https?:\/\/wa\.me\/pay\/br\/merchant\/pix\/add\/?(.+)$/i,
      de = /^https?:\/\/faq\.whatsapp\.com\/1013401987232838\/?(.+)$/i,
      me = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_PATH_PART +
          "/pay/br/merchant/pix/add/?(.+)$",
        "i",
      ),
      pe = /^whatsapp-smb:\/\/biztab\/manage-data-sharing\/?(?:\?.*)?$/i,
      _e = /^whatsapp-smb:\/\/biz-agents-onboarding\/?(?:\?.*)?$/i,
      fe = /^whatsapp-smb:\/\/biz-broadcast-audience-modal\/?(?:\?.*)?$/i,
      ge = /^whatsapp-smb:\/\/biz-broadcast-home\/?(?:\?.*)?$/i,
      he = new RegExp("^" + p.ORIGIN + "/biz-broadcast-home/?(?:\\?.*)?$", "i"),
      ye = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
      Ce = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
      be = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
      ve = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
      Se = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
        "i",
      ),
      Re = /^https?:\/\/wa\.me\/call\?\\?(.+)$/i,
      Le = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/reg/wacom[/\\?]{0,2}(.*)$",
        "i",
      ),
      Ee = [Q, X, te, ne],
      ke = [Y, re],
      Ie = [ee, ie],
      Te = [J, Z, oe, ae],
      De = [].concat(Ee, ke, Ie, Te);
    function xe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = e.match(t[n]);
        if (r) return r;
      }
    }
    var $e = function (t) {
        return xe(t, De) != null;
      },
      Pe = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
        "i",
      ),
      Ne = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
      Me = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
      we = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})?$",
        "i",
      ),
      Ae = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})(/?.*)?$",
        "i",
      ),
      Fe = function (t) {
        return [Ne, Me, we, Ae].some(function (e) {
          return t.match(e);
        });
      },
      Oe = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
      Be = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/favorites/?(?:\\?.*)?$",
        "i",
      );
    function We(e) {
      if (o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
        var t = e.match(K);
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
            var a = x(t[3], e);
            a != null && (n = babelHelpers.extends({}, n, a));
          }
          if (n != null) {
            var i = Ue(e);
            i != null && (n = babelHelpers.extends({}, n, { partnertoken: i }));
          }
          return n;
        }
      }
    }
    function qe(t) {
      var n = t.match(U);
      if (n) {
        var r = x(n[2], t);
        if (r) return ((r.url = n[1] || "/"), r);
      }
      if (((n = t.match(V)), n || ((n = t.match(H)), n))) return x(n[1], t);
      if (((n = t.match(G)), n)) {
        var a = { phone: n[1] + "@c.us" },
          i = n[2];
        if ((R.test(i) && (a.signupId = i), n[3])) {
          var l = x(n[3], t);
          if (l) {
            var s = l.phone,
              u = babelHelpers.objectWithoutPropertiesLoose(l, e);
            a = babelHelpers.extends({}, a, u);
          }
        }
        var c = Ue(t);
        return (c != null && (a.partnertoken = c), a);
      }
      if (((n = t.match(z)), n)) {
        var d,
          m = t.match(j);
        if (
          (n[1]
            ? (d = { phone: n[1] + "@c.us" })
            : m &&
              m[1] &&
              !m[2] &&
              ((d = { url: t, customUrl: m[1] }),
              (d = babelHelpers.extends({}, d, We(t)))),
          n[2])
        ) {
          var p = x(n[2], t);
          p && (d = babelHelpers.extends({}, d, p));
        }
        if (d) {
          var _ = Ue(t);
          _ != null && (d.partnertoken = _);
        }
        if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled())
          return d;
      }
      return We(t);
    }
    function Ue(e) {
      var t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames(),
        n = new URL(e);
      for (var r of t) {
        var a = n.searchParams.get(r);
        if (a != null) return a;
      }
      return null;
    }
    var Ve = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function He(e) {
      var t = e.match(Ve);
      if (t) {
        var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[1]).get(
          "entrypoint",
        );
        return { url: "/", entrypointType: n };
      }
    }
    function Ge(e, t) {
      var n = { catalogOwnerJid: e[1] + "@s.whatsapp.net" },
        r = Ue(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function ze(e) {
      var t = new (r("WAWebPonyfillsUrlSearchParams"))(e),
        n = t.get(C),
        o = t.get(b);
      if (o == null && n == null) return null;
      var a = {};
      return (n != null && (a.source = n), o != null && (a.campaign = o), a);
    }
    function je(e) {
      var t = e.match(Ne) || e.match(Me);
      if (t) return Ge(t, e);
      if (((t = e.match(we)), t))
        return babelHelpers.extends({}, Ge(t, e), { url: "/" });
      if (((t = e.match(Ae)), t)) {
        var n = ze(t[2]);
        return babelHelpers.extends({}, Ge(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
    }
    function Ke(e, t) {
      var n = { productId: e[1], businessOwnerJid: e[2] + "@s.whatsapp.net" },
        r = Ue(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function Qe(e) {
      var t = xe(e, Ee);
      if (t) return Ke(t, e);
      if (((t = xe(e, ke)), t))
        return babelHelpers.extends({}, Ke(t, e), { url: "/" });
      if (((t = xe(e, Ie)), t)) {
        var n = ze(t[3]);
        return babelHelpers.extends({}, Ke(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
      if (((t = xe(e, Te)), t)) {
        var r = ze(t[3]);
        return babelHelpers.extends({}, Ke(t, e), r != null && { utm: r });
      }
    }
    function Xe(e) {
      var t = e.match(Pe);
      if (t) return { url: "/" };
    }
    function Ye(e) {
      var t = new (r("WAWebPonyfillsUrlSearchParams"))(e),
        n = t.get("wa_campaign_id");
      if (!(n == null || n === "")) {
        var o = t.get("wa_campaign_type");
        return o == null || o === ""
          ? null
          : { campaignId: n, campaignType: o };
      }
    }
    function Je(e) {
      var t = e.match(se);
      if (t) return Ye(t[1]);
    }
    function Ze(e) {
      var t = e.match(le);
      if (t) return Ye(t[1]);
    }
    function et(e) {
      var t = e.match(ce),
        n = null;
      if ((t ? (n = t[1]) : ((t = e.match(me)), t && (n = t[2])), n != null)) {
        var r = Ye(n);
        if (r)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, r, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING,
            }),
          };
      }
      if (((t = e.match(de)), t)) {
        var a = Ye(t[1]);
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
    function tt(e) {
      var t = e.match(ye);
      if (t) {
        var n = Ye(t[1]);
        if ((n == null ? void 0 : n.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_CATALOG_SETTINGS,
          };
      }
      var r = e.match(Ce);
      if (r) {
        var a = Ye(r[1]);
        if ((a == null ? void 0 : a.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_BOOST_CATALOG,
          };
      }
    }
    function nt(e) {
      return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    var rt = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
      ot = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
      at =
        /^(?:https?:\/\/wa\.me\/set-about|whatsapp:\/\/set-about)\/?(?:\?.*)?$/i,
      it =
        /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i,
      lt = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function st(e) {
      var t = e.match(lt);
      return t != null;
    }
    function ut(e) {
      var t = e.match(rt);
      return !!t;
    }
    var ct = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
      dt = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/ais/(\\d{14,20})/?(\\?.*)?$",
        "i",
      );
    function mt(e) {
      var t,
        n,
        r = (
          (t = (n = e.match(ct)) != null ? n : e.match(dt)) != null ? t : []
        )[1];
      return r
        ? { resultType: o("WAWebApi").APICmd.UGC_BOT, data: { fbid: r } }
        : null;
    }
    var pt = /^https?:\/\/wa\.me\/man\/link(?:\?(.*))?$/i,
      _t = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/man/link(?:\\?(.*))?$",
        "i",
      );
    function ft(e) {
      var t,
        n = (t = e.match(pt)) != null ? t : e.match(_t);
      if (n != null) {
        var r = null;
        if (n[1] != null) {
          var a = new URLSearchParams(n[1]);
          r = a.get("token");
        }
        return {
          resultType: o("WAWebApi").APICmd.MAN_LINK,
          data: { token: r },
        };
      }
      return null;
    }
    var gt = /^https?:\/\/wa\.me\/hatch\/link(?:\?(.*))?$/i,
      ht = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/hatch/link(?:\\?(.*))?$",
        "i",
      );
    function yt(e) {
      var t,
        n = (t = e.match(gt)) != null ? t : e.match(ht);
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
    function Ct(e) {
      if (st(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          o = n[1],
          a = n[2];
        return a;
      }
    }
    function bt(e) {
      var t = e.match(lt);
      if (t) {
        var n = Ct(e);
        return { resultType: "STICKER_PACK", data: { url: n } };
      }
    }
    var vt = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      St = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Rt = new RegExp(
        "^" + p.ORIGIN + "/call/(video|voice)/(\\w+)(?:\\?.*)?$",
        "i",
      );
    function Lt(e) {
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
    function Et(e) {
      var t = e.indexOf("?");
      if (t === -1) return null;
      var n = new (r("WAWebPonyfillsUrlSearchParams"))(e.slice(t));
      if (n.get("cmd") !== "call_link") return null;
      var a = n.get("call_type"),
        i = n.get("call_token");
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
      var l = Lt(n);
      return {
        resultType: "CALL_LINK",
        data: babelHelpers.extends({ token: i, callType: a }, l),
      };
    }
    function kt(e) {
      var t = e.match(vt) || e.match(St) || e.match(Rt);
      if (t)
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
      var n = Et(e);
      if (n != null) return n;
    }
    function It(e) {
      return kt(e) != null;
    }
    function Tt(e) {
      var t = e.match(Le);
      if (t && t[0]) {
        var n = new URL(e),
          a = new (r("WAWebPonyfillsUrlSearchParams"))(n.search),
          i = a.get("g"),
          l = a.get("pn"),
          s = a.get("prov_num"),
          u = null;
        return (
          i === "0"
            ? (u = o(
                "WAWebRegistrationCampaignConstants",
              ).WHATSAPP_DOT_COM_REG_EXP_CONTROL)
            : i === "1"
              ? (u = o(
                  "WAWebRegistrationCampaignConstants",
                ).WHATSAPP_DOT_COM_REG_EXP_FLOW_1)
              : i === "2" &&
                (u = o(
                  "WAWebRegistrationCampaignConstants",
                ).WHATSAPP_DOT_COM_REG_EXP_FLOW_2),
          l != null && l.length > 0 && /^\d{10}$/.test(l)
            ? babelHelpers.extends(
                {
                  referrer: "wacom",
                  url: "/",
                  phoneNumberWithoutCountryCode: l,
                },
                s != null && { providerNumber: s },
                { group: u },
              )
            : babelHelpers.extends(
                { referrer: "wacom", url: "/" },
                s != null && { providerNumber: s },
                { group: u },
              )
        );
      }
    }
    function Dt() {
      var e = new (r("WAWebPonyfillsUrlSearchParams"))(window.location.search),
        t = e.get("work_contact_sync_data");
      return t != null && t !== "" ? { compressedData: t } : null;
    }
    function xt(e) {
      var t = e.match(q);
      if (!t) return null;
      var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[2]);
      if (!n.has("session_id")) return null;
      var a = n.get("session_id");
      if (a == null || a.trim() === "")
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
      var i = n.get("utm_campaign");
      return {
        sessionId: a != null ? a : void 0,
        utmCampaign: i != null ? i : void 0,
      };
    }
    function $t(e, t) {
      if (typeof e != "string")
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var n = y(e);
      if (n) return { resultType: o("WAWebApi").APICmd.GROUP_INVITE, data: n };
      var a = je(e);
      if (a) return { resultType: o("WAWebApi").APICmd.CATALOG, data: a };
      var i = Qe(e);
      if (i) return { resultType: o("WAWebApi").APICmd.PRODUCT, data: i };
      var l = He(e);
      if (l)
        return { resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY, data: l };
      var s = ut(e);
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
        [be, ve].some(function (t) {
          return e.match(t);
        })
      )
        return { resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF };
      if (
        [Oe, Be].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.FAVORITES,
          data: { url: "/" },
        };
      var p = Ze(e);
      if (p != null)
        return { resultType: o("WAWebApi").APICmd.OPEN_CATALOG, data: p };
      var _ = tt(e);
      if (_ != null)
        return {
          resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
          data: _,
        };
      var f = bt(e);
      if (f) {
        var g;
        return {
          resultType: o("WAWebApi").APICmd.STICKER_PACK,
          data: { url: (g = f.data.url) != null ? g : "" },
        };
      }
      var h = Xe(e);
      if (h)
        return { resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION, data: h };
      var C = Je(e);
      if (C != null)
        return { resultType: o("WAWebApi").APICmd.ADVERTISE, data: C };
      var b = kt(e);
      if (b) return b;
      if (e.match(ue))
        return {
          resultType: o("WAWebApi").APICmd.MANAGE_ADS,
          trigger: "chatListBanner",
        };
      if (e.match(pe)) {
        var v = new URL(e),
          S = v.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING,
          source: S != null ? S : "unknown",
        };
      }
      if (e.match(_e))
        return { resultType: o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING };
      if (e.match(fe))
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL,
        };
      if (e.match(ge) || e.match(he)) {
        var R = new URL(e),
          L = R.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
          data: { source: L != null ? L : "unknown", url: "/" },
        };
      }
      var E = et(e);
      if (E) return E;
      if (e.match(ot))
        return { resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
      if (e.match(at)) return { resultType: o("WAWebApi").APICmd.SET_ABOUT };
      var k = e.match(it);
      if (k) {
        var I,
          T = new URL(e.replace("whatsapp://", "https://")),
          D = (I = T.searchParams.get("entry_point")) != null ? I : void 0;
        return {
          resultType: o("WAWebApi").APICmd.PROFILE_USERNAME,
          data: { entryPoint: D },
        };
      }
      if (
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_deep_link_error",
        ) &&
        [Se, Re].some(function (t) {
          return e.match(t);
        })
      ) {
        var x,
          P = new URL(e),
          N =
            o("WAWebPhoneNumberSearch").numberSearch(
              (x = P.searchParams.get("phone")) != null ? x : "",
            ) || void 0,
          M = P.searchParams.get("video"),
          w = M === "1" || (M == null ? void 0 : M.toLowerCase()) === "true";
        return {
          resultType: o("WAWebApi").APICmd.CALL_USER,
          data: { url: "/", phone: N, video: w },
        };
      }
      var q = nt(e);
      if (q != null)
        return { resultType: o("WAWebApi").APICmd.PAYMENT_LINK, data: q };
      var U = ft(e);
      if (U != null) return U;
      var V = yt(e);
      if (V != null) return V;
      var H = mt(e);
      if (H) return H;
      var G = qe(e);
      if (G) return { resultType: o("WAWebApi").APICmd.MSG_SEND, data: G };
      var z = Tt(e);
      if (z != null)
        return {
          resultType: o("WAWebApi").APICmd.WEB_REGISTRATION_CAMPAIGN,
          data: z,
        };
      var j = A(e);
      if (j != null) return j;
      var K = F(e);
      if (K != null) return K;
      var Q = O(e);
      if (Q != null) return Q;
      var X = B(e);
      if (X != null) return X;
      if (e.match($)) return { resultType: o("WAWebApi").APICmd.NEW_CHAT };
      var Y = e.match(W);
      if (Y) {
        var J = new (r("WAWebPonyfillsUrlSearchParams"))(Y[1]),
          Z = J.get("phone"),
          ee = J.get("lid"),
          te = J.get("video") === "true",
          ne = {};
        (r("isStringNullOrEmpty")(Z) || (ne.phone = Z),
          r("isStringNullOrEmpty")(ee) || (ne.lid = ee),
          te && (ne.video = te));
        var re =
          !r("isStringNullOrEmpty")(Z) || !r("isStringNullOrEmpty")(ee) || te;
        return babelHelpers.extends(
          { resultType: o("WAWebApi").APICmd.NEW_CALL },
          re && { data: ne },
        );
      }
      var oe = r("gkx")("26258") ? null : Dt();
      if (oe)
        return { resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC, data: oe };
      var ae = xt(e);
      return ae
        ? { resultType: o("WAWebApi").APICmd.SEND_FILE, data: ae }
        : { resultType: o("WAWebApi").APICmd.INVALID };
    }
    ((l.parseConversionData = E),
      (l.parseCTWADeeplinkToken = T),
      (l.matchProductUrl = $e),
      (l.matchCatalogUrl = Fe),
      (l.isStickerPackURL = st),
      (l.parseCallLinkDevicePrefs = Lt),
      (l.parseCallLink = kt),
      (l.isValidCallLink = It),
      (l.parseAPICmd = $t));
  },
  98,
);
