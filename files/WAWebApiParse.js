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
        var e = Ke(t),
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
        var i = He(t);
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
      N = /^whatsapp:\/\/callActive\/?(\?.*)?$/i,
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
        ? { resultType: o("WAWebApi").APICmd.CALL_ACTIVE }
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
      ye = /^whatsapp-smb:\/\/marketingmessages\/?(?:\?.*)?$/i,
      Ce = new RegExp("^" + p.ORIGIN + "/marketingmessages/?(?:\\?.*)?$", "i"),
      be = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
      ve = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
      Se = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
      Re = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
      Le = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
        "i",
      ),
      Ee = /^https?:\/\/wa\.me\/call\?\\?(.+)$/i,
      ke = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/reg/wacom[/\\?]{0,2}(.*)$",
        "i",
      ),
      Ie = [Q, X, te, ne],
      Te = [Y, re],
      De = [ee, ie],
      xe = [J, Z, oe, ae],
      $e = [].concat(Ie, Te, De, xe);
    function Pe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = e.match(t[n]);
        if (r) return r;
      }
    }
    function Ne(e) {
      return Pe(e, $e) != null;
    }
    var Me = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
        "i",
      ),
      we = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
      Ae = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
      Fe = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})?$",
        "i",
      ),
      Oe = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})(/?.*)?$",
        "i",
      );
    function Be(e) {
      return [we, Ae, Fe, Oe].some(function (t) {
        return e.match(t);
      });
    }
    var We = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
      qe = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/favorites/?(?:\\?.*)?$",
        "i",
      );
    function Ue(e) {
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
            var i = He(e);
            i != null && (n = babelHelpers.extends({}, n, { partnertoken: i }));
          }
          return n;
        }
      }
    }
    function Ve(t) {
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
        var c = He(t);
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
              (d = babelHelpers.extends({}, d, Ue(t)))),
          n[2])
        ) {
          var p = x(n[2], t);
          p && (d = babelHelpers.extends({}, d, p));
        }
        if (d) {
          var _ = He(t);
          _ != null && (d.partnertoken = _);
        }
        if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled())
          return d;
      }
      return Ue(t);
    }
    function He(e) {
      var t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames(),
        n = new URL(e);
      for (var r of t) {
        var a = n.searchParams.get(r);
        if (a != null) return a;
      }
      return null;
    }
    var Ge = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function ze(e) {
      var t = e.match(Ge);
      if (t) {
        var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[1]).get(
          "entrypoint",
        );
        return { url: "/", entrypointType: n };
      }
    }
    function je(e, t) {
      var n = { catalogOwnerJid: e[1] + "@s.whatsapp.net" },
        r = He(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function Ke(e) {
      var t = new (r("WAWebPonyfillsUrlSearchParams"))(e),
        n = t.get(C),
        o = t.get(b);
      if (o == null && n == null) return null;
      var a = {};
      return (n != null && (a.source = n), o != null && (a.campaign = o), a);
    }
    function Qe(e) {
      var t = e.match(we) || e.match(Ae);
      if (t) return je(t, e);
      if (((t = e.match(Fe)), t))
        return babelHelpers.extends({}, je(t, e), { url: "/" });
      if (((t = e.match(Oe)), t)) {
        var n = Ke(t[2]);
        return babelHelpers.extends({}, je(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
    }
    function Xe(e, t) {
      var n = { productId: e[1], businessOwnerJid: e[2] + "@s.whatsapp.net" },
        r = He(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function Ye(e) {
      var t = Pe(e, Ie);
      if (t) return Xe(t, e);
      if (((t = Pe(e, Te)), t))
        return babelHelpers.extends({}, Xe(t, e), { url: "/" });
      if (((t = Pe(e, De)), t)) {
        var n = Ke(t[3]);
        return babelHelpers.extends({}, Xe(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
      if (((t = Pe(e, xe)), t)) {
        var r = Ke(t[3]);
        return babelHelpers.extends({}, Xe(t, e), r != null && { utm: r });
      }
    }
    function Je(e) {
      var t = e.match(Me);
      if (t) return { url: "/" };
    }
    function Ze(e) {
      var t = new (r("WAWebPonyfillsUrlSearchParams"))(e),
        n = t.get("wa_campaign_id");
      if (!(n == null || n === "")) {
        var o = t.get("wa_campaign_type");
        return o == null || o === ""
          ? null
          : { campaignId: n, campaignType: o };
      }
    }
    function et(e) {
      var t = e.match(se);
      if (t) return Ze(t[1]);
    }
    function tt(e) {
      var t = e.match(le);
      if (t) return Ze(t[1]);
    }
    function nt(e) {
      var t = e.match(ce),
        n = null;
      if ((t ? (n = t[1]) : ((t = e.match(me)), t && (n = t[2])), n != null)) {
        var r = Ze(n);
        if (r)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, r, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING,
            }),
          };
      }
      if (((t = e.match(de)), t)) {
        var a = Ze(t[1]);
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
    function rt(e) {
      var t = e.match(be);
      if (t) {
        var n = Ze(t[1]);
        if ((n == null ? void 0 : n.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_CATALOG_SETTINGS,
          };
      }
      var r = e.match(ve);
      if (r) {
        var a = Ze(r[1]);
        if ((a == null ? void 0 : a.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_BOOST_CATALOG,
          };
      }
    }
    function ot(e) {
      return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    var at = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
      it = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
      lt =
        /^(?:https?:\/\/wa\.me\/set-about|whatsapp:\/\/set-about)\/?(?:\?.*)?$/i,
      st =
        /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i,
      ut = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function ct(e) {
      var t = e.match(ut);
      return t != null;
    }
    function dt(e) {
      var t = e.match(at);
      return !!t;
    }
    var mt = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
      pt = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/ais/(\\d{14,20})/?(\\?.*)?$",
        "i",
      );
    function _t(e) {
      var t,
        n,
        r = (
          (t = (n = e.match(mt)) != null ? n : e.match(pt)) != null ? t : []
        )[1];
      return r
        ? { resultType: o("WAWebApi").APICmd.UGC_BOT, data: { fbid: r } }
        : null;
    }
    var ft = /^https?:\/\/wa\.me\/man\/link(?:\?(.*))?$/i,
      gt = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/man/link(?:\\?(.*))?$",
        "i",
      );
    function ht(e) {
      var t,
        n = (t = e.match(ft)) != null ? t : e.match(gt);
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
    var yt = /^https?:\/\/wa\.me\/hatch\/link(?:\?(.*))?$/i,
      Ct = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/hatch/link(?:\\?(.*))?$",
        "i",
      );
    function bt(e) {
      var t,
        n = (t = e.match(yt)) != null ? t : e.match(Ct);
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
    function vt(e) {
      if (ct(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          o = n[1],
          a = n[2];
        return a;
      }
    }
    function St(e) {
      var t = e.match(ut);
      if (t) {
        var n = vt(e);
        return { resultType: "STICKER_PACK", data: { url: n } };
      }
    }
    var Rt = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Lt = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Et = new RegExp(
        "^" + p.ORIGIN + "/call/(video|voice)/(\\w+)(?:\\?.*)?$",
        "i",
      );
    function kt(e) {
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
    function It(e) {
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
      var l = kt(n);
      return {
        resultType: "CALL_LINK",
        data: babelHelpers.extends({ token: i, callType: a }, l),
      };
    }
    function Tt(e) {
      var t = e.match(Rt) || e.match(Lt) || e.match(Et);
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
      var n = It(e);
      if (n != null) return n;
    }
    function Dt(e) {
      return Tt(e) != null;
    }
    function xt(e) {
      var t = e.match(ke);
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
    function $t() {
      var e = new (r("WAWebPonyfillsUrlSearchParams"))(window.location.search),
        t = e.get("work_contact_sync_data");
      return t != null && t !== "" ? { compressedData: t } : null;
    }
    function Pt(e) {
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
    function Nt(e, t) {
      if (typeof e != "string")
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var n = y(e);
      if (n) return { resultType: o("WAWebApi").APICmd.GROUP_INVITE, data: n };
      var a = Qe(e);
      if (a) return { resultType: o("WAWebApi").APICmd.CATALOG, data: a };
      var i = Ye(e);
      if (i) return { resultType: o("WAWebApi").APICmd.PRODUCT, data: i };
      var l = ze(e);
      if (l)
        return { resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY, data: l };
      var s = dt(e);
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
        [Se, Re].some(function (t) {
          return e.match(t);
        })
      )
        return { resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF };
      if (
        [We, qe].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.FAVORITES,
          data: { url: "/" },
        };
      var p = tt(e);
      if (p != null)
        return { resultType: o("WAWebApi").APICmd.OPEN_CATALOG, data: p };
      var _ = rt(e);
      if (_ != null)
        return {
          resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
          data: _,
        };
      var f = St(e);
      if (f) {
        var g;
        return {
          resultType: o("WAWebApi").APICmd.STICKER_PACK,
          data: { url: (g = f.data.url) != null ? g : "" },
        };
      }
      var h = Je(e);
      if (h)
        return { resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION, data: h };
      var C = et(e);
      if (C != null)
        return { resultType: o("WAWebApi").APICmd.ADVERTISE, data: C };
      var b = Tt(e);
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
      if (e.match(ge) || e.match(he) || e.match(ye) || e.match(Ce)) {
        var R = new URL(e),
          L = R.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
          data: { source: L != null ? L : "unknown", url: "/" },
        };
      }
      var E = nt(e);
      if (E) return E;
      if (e.match(it))
        return { resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
      if (e.match(lt)) return { resultType: o("WAWebApi").APICmd.SET_ABOUT };
      var k = e.match(st);
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
        [Le, Ee].some(function (t) {
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
      var q = ot(e);
      if (q != null)
        return { resultType: o("WAWebApi").APICmd.PAYMENT_LINK, data: q };
      var U = ht(e);
      if (U != null) return U;
      var V = bt(e);
      if (V != null) return V;
      var H = _t(e);
      if (H) return H;
      var G = Ve(e);
      if (G) return { resultType: o("WAWebApi").APICmd.MSG_SEND, data: G };
      var z = xt(e);
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
      var oe = r("gkx")("26258") ? null : $t();
      if (oe)
        return { resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC, data: oe };
      var ae = Pt(e);
      return ae
        ? { resultType: o("WAWebApi").APICmd.SEND_FILE, data: ae }
        : { resultType: o("WAWebApi").APICmd.INVALID };
    }
    ((l.parseConversionData = E),
      (l.parseCTWADeeplinkToken = T),
      (l.matchProductUrl = Ne),
      (l.matchCatalogUrl = Be),
      (l.isStickerPackURL = ct),
      (l.parseCallLinkDevicePrefs = kt),
      (l.parseCallLink = Tt),
      (l.isValidCallLink = Dt),
      (l.parseAPICmd = Nt));
  },
  98,
);
