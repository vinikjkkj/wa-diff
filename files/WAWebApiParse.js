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
      var t = nt(e),
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
        var i = Je(t);
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
      A = /^whatsapp:\/\/oidc_callback\/?(\?.*)?$/i;
    function F(e) {
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
    function O(e) {
      return M.test(e)
        ? { resultType: o("WAWebApi").APICmd.CALL_ACTIVE }
        : null;
    }
    function B(e) {
      var t = e.match(w);
      if (!t) return null;
      var n = new URLSearchParams(t[1]),
        a = n.get("session");
      return babelHelpers.extends(
        { resultType: o("WAWebApi").APICmd.APP_OPEN },
        !r("isStringNullOrEmpty")(a) && { data: { session: a } },
      );
    }
    function W(e) {
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
    var q = /^whatsapp:\/\/newcall\/?(\?.*)?$/i,
      U = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/forward/?\\?(.+)$",
        "i",
      ),
      V = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/send/?\\?(.+)$",
        "i",
      ),
      H = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i,
      G = /^whatsapp:\/\/send\/?\?(.*)$/i,
      z =
        /^https?:\/\/wa\.me\/([0-9.]{1,20})\/signup\/([^/?]+)\/?(?:\?(.+))?$/i,
      j = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20}))\/?\??(.+)?$/i,
      K = /^https?:\/\/wa\.me\/?(?:([0-9a-z.]{5,35}))?\/?\??(.+)?$/i,
      Q =
        /^https?:\/\/wa\.me\/?@?(?:([0-9a-z._]{3,30}))(?::([^?/]+))?(\/?\?(.*))?$/i,
      X = /^https?:\/\/wa\.me\/settings\/?(?:\?.*)?$/i,
      Y = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      J = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      Z = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})$",
        "i",
      ),
      ee = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      te = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      ne = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      re = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      oe = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      ae = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})$",
        "i",
      ),
      ie = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      le = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      se = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      ue = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i,
      ce = /^whatsapp-smb:\/\/advertise\/?(.+)$/i,
      de = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/,
      me = /^https?:\/\/wa\.me\/pay\/br\/merchant\/pix\/add\/?(.+)$/i,
      pe = /^https?:\/\/faq\.whatsapp\.com\/1013401987232838\/?(.+)$/i,
      _e = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_PATH_PART +
          "/pay/br/merchant/pix/add/?(.+)$",
        "i",
      ),
      fe = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/pay/br/add-pix-key/?(?:\\?(.*))?$",
        "i",
      ),
      ge = /^whatsapp:\/\/pay\/br\/add-pix-key\/?(?:\?(.*))?$/i,
      he = /^whatsapp-smb:\/\/biztab\/manage-data-sharing\/?(?:\?.*)?$/i,
      ye = /^whatsapp-smb:\/\/biz-agents-onboarding\/?(?:\?.*)?$/i,
      Ce = /^whatsapp-smb:\/\/biz-broadcast-audience-modal\/?(?:\?.*)?$/i,
      be = /^whatsapp-smb:\/\/biz-broadcast-home\/?(?:\?.*)?$/i,
      ve = new RegExp("^" + _.ORIGIN + "/biz-broadcast-home/?(?:\\?.*)?$", "i"),
      Se = /^[a-z0-9_]{1,64}$/i;
    function Re(e) {
      return e != null && Se.test(e);
    }
    var Le = /^whatsapp-smb:\/\/business-broadcast\/?(?:\?.*)?$/i,
      Ee = new RegExp("^" + _.ORIGIN + "/business-broadcast/?(?:\\?.*)?$", "i"),
      ke = /^whatsapp-smb:\/\/marketingmessages\/?(?:\?.*)?$/i,
      Ie = new RegExp("^" + _.ORIGIN + "/marketingmessages/?(?:\\?.*)?$", "i"),
      Te = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
      De = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
      xe = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
      $e = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
      Pe = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
        "i",
      ),
      Ne = /^https?:\/\/wa\.me\/call\/([^/?]+)\/?(?:\?.*)?$/i,
      Me = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/reg/wacom[/\\?]{0,2}(.*)$",
        "i",
      ),
      we = [Y, J, re, oe],
      Ae = [Z, ae],
      Fe = [ne, se],
      Oe = [ee, te, ie, le],
      Be = [].concat(we, Ae, Fe, Oe);
    function We(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = e.match(t[n]);
        if (r) return r;
      }
    }
    function qe(e) {
      return We(e, Be) != null;
    }
    var Ue = new RegExp(
        "^" + _.ORIGIN + _.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
        "i",
      ),
      Ve = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
      He = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
      Ge = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})?$",
        "i",
      ),
      ze = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})(/?.*)?$",
        "i",
      );
    function je(e) {
      return [Ve, He, Ge, ze].some(function (t) {
        return e.match(t);
      });
    }
    var Ke = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
      Qe = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/favorites/?(?:\\?.*)?$",
        "i",
      );
    function Xe(e) {
      if (o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
        var t = e.match(Q);
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
            var i = Je(e);
            i != null && (n = babelHelpers.extends({}, n, { partnertoken: i }));
          }
          return n;
        }
      }
    }
    function Ye(t) {
      var n = t.match(V);
      if (n) {
        var r = $(n[2], t);
        if (r) return ((r.url = n[1] || "/"), r);
      }
      if (((n = t.match(H)), n || ((n = t.match(G)), n))) return $(n[1], t);
      if (((n = t.match(z)), n)) {
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
        var c = Je(t);
        return (c != null && (a.partnertoken = c), a);
      }
      if (((n = t.match(j)), n)) {
        var d,
          m = t.match(K);
        if (
          (n[1]
            ? (d = { phone: n[1] + "@c.us" })
            : m &&
              m[1] &&
              !m[2] &&
              ((d = { url: t, customUrl: m[1] }),
              (d = babelHelpers.extends({}, d, Xe(t)))),
          n[2])
        ) {
          var p = $(n[2], t);
          p && (d = babelHelpers.extends({}, d, p));
        }
        if (d) {
          var _ = Je(t);
          _ != null && (d.partnertoken = _);
        }
        if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled())
          return d;
      }
      return Xe(t);
    }
    function Je(e) {
      var t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames(),
        n = new URL(e);
      for (var r of t) {
        var a = n.searchParams.get(r);
        if (a != null) return a;
      }
      return null;
    }
    var Ze = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function et(e) {
      var t = e.match(Ze);
      if (t) {
        var n = new URLSearchParams(t[1]).get("entrypoint");
        return { url: "/", entrypointType: n };
      }
    }
    function tt(e, t) {
      var n = { catalogOwnerJid: e[1] + "@s.whatsapp.net" },
        r = Je(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function nt(e) {
      var t = new URLSearchParams(e),
        n = t.get(b),
        r = t.get(v);
      if (r == null && n == null) return null;
      var o = {};
      return (n != null && (o.source = n), r != null && (o.campaign = r), o);
    }
    function rt(e) {
      var t = e.match(Ve) || e.match(He);
      if (t) return tt(t, e);
      if (((t = e.match(Ge)), t))
        return babelHelpers.extends({}, tt(t, e), { url: "/" });
      if (((t = e.match(ze)), t)) {
        var n = nt(t[2]);
        return babelHelpers.extends({}, tt(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
    }
    function ot(e, t) {
      var n = { productId: e[1], businessOwnerJid: e[2] + "@s.whatsapp.net" },
        r = Je(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function at(e) {
      var t = We(e, we);
      if (t) return ot(t, e);
      if (((t = We(e, Ae)), t))
        return babelHelpers.extends({}, ot(t, e), { url: "/" });
      if (((t = We(e, Fe)), t)) {
        var n = nt(t[3]);
        return babelHelpers.extends({}, ot(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
      if (((t = We(e, Oe)), t)) {
        var r = nt(t[3]);
        return babelHelpers.extends({}, ot(t, e), r != null && { utm: r });
      }
    }
    function it(e) {
      var t = e.match(Ue);
      if (t) return { url: "/" };
    }
    function lt(e) {
      var t = new URLSearchParams(e),
        n = t.get("wa_campaign_id");
      if (!(n == null || n === "")) {
        var r = t.get("wa_campaign_type");
        return r == null || r === ""
          ? null
          : { campaignId: n, campaignType: r };
      }
    }
    function st(e) {
      var t = e.match(ce);
      if (t) return lt(t[1]);
    }
    function ut(e) {
      var t = e.match(ue);
      if (t) return lt(t[1]);
    }
    function ct(e) {
      var t = e.match(me),
        n = null;
      if ((t ? (n = t[1]) : ((t = e.match(_e)), t && (n = t[2])), n != null)) {
        var r = lt(n);
        if (r)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, r, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING,
            }),
          };
      }
      if (((t = e.match(pe)), t)) {
        var a = lt(t[1]);
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
    function dt(e) {
      var t,
        n,
        r = (t = e.match(fe)) != null ? t : e.match(ge);
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
    function mt(e) {
      var t = e.match(Te);
      if (t) {
        var n = lt(t[1]);
        if ((n == null ? void 0 : n.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_CATALOG_SETTINGS,
          };
      }
      var r = e.match(De);
      if (r) {
        var a = lt(r[1]);
        if ((a == null ? void 0 : a.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_BOOST_CATALOG,
          };
      }
    }
    function pt(e) {
      return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    var _t = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
      ft = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
      gt =
        /^(?:https?:\/\/wa\.me\/set-about|whatsapp:\/\/set-about)\/?(?:\?.*)?$/i,
      ht =
        /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i,
      yt = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function Ct(e) {
      var t = e.match(yt);
      return t != null;
    }
    function bt(e) {
      var t = e.match(_t);
      return !!t;
    }
    var vt = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
      St = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/ais/(\\d{14,20})/?(\\?.*)?$",
        "i",
      );
    function Rt(e) {
      var t,
        n,
        r = (
          (t = (n = e.match(vt)) != null ? n : e.match(St)) != null ? t : []
        )[1];
      return r
        ? { resultType: o("WAWebApi").APICmd.UGC_BOT, data: { fbid: r } }
        : null;
    }
    var Lt = /^https?:\/\/wa\.me\/(?:hatch|muse)\/link(?:\?(.*))?$/i,
      Et = new RegExp(
        "^" +
          _.ORIGIN +
          _.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/(?:hatch|muse)/link(?:\\?(.*))?$",
        "i",
      );
    function kt(e) {
      var t,
        n = (t = e.match(Lt)) != null ? t : e.match(Et);
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
    function It(e) {
      if (Ct(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          o = n[1],
          a = n[2];
        return a;
      }
    }
    function Tt(e) {
      var t = e.match(yt);
      if (t) {
        var n = It(e);
        return { resultType: "STICKER_PACK", data: { url: n } };
      }
    }
    var Dt = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      xt = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      $t = new RegExp(
        "^" + _.ORIGIN + "/call/(video|voice)/(\\w+)(?:\\?.*)?$",
        "i",
      ),
      Pt =
        /^https:\/\/web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Nt =
        /^https:\/\/dev-web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Mt =
        /^https:\/\/call\.[^/]+\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      wt =
        /^https:\/\/dev-web\.[^/]+\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function At(e) {
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
    function Ft(e) {
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
      var l = At(r);
      return {
        resultType: "CALL_LINK",
        data: babelHelpers.extends({ token: i, callType: a }, l),
      };
    }
    function Ot(e) {
      var t = e.match(Dt) || e.match(xt) || e.match($t) || e.match(Pt);
      if (
        (t == null && o("WAWebCurrentUser").isEmployee() && (t = e.match(Nt)),
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
      var n = Ft(e);
      if (n != null) return n;
    }
    function Bt(e) {
      return Ot(e) != null;
    }
    function Wt(e) {
      var t = e.match(Me);
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
    function qt() {
      var e = new URLSearchParams(window.location.search),
        t = e.get("work_contact_sync_data");
      return t != null && t !== "" ? { compressedData: t } : null;
    }
    function Ut(e) {
      var t = e.match(U);
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
    function Vt(e) {
      var t;
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_deep_link_error",
        )
      )
        return null;
      var n = e.match(Ne);
      if (n == null && !Pe.test(e)) return null;
      var r = new URL(e),
        a =
          n == null
            ? (t = r.searchParams.get("phone")) != null
              ? t
              : ""
            : Ht(n[1]),
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
    function Ht(e) {
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
    function Gt(e, t) {
      if (typeof e != "string")
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var n = C(e);
      if (n) return { resultType: o("WAWebApi").APICmd.GROUP_INVITE, data: n };
      var a = rt(e);
      if (a) return { resultType: o("WAWebApi").APICmd.CATALOG, data: a };
      var i = at(e);
      if (i) return { resultType: o("WAWebApi").APICmd.PRODUCT, data: i };
      var l = et(e);
      if (l)
        return { resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY, data: l };
      var s = bt(e);
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
        [xe, $e].some(function (t) {
          return e.match(t);
        })
      )
        return { resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF };
      if (
        [Ke, Qe].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.FAVORITES,
          data: { url: "/" },
        };
      var p = ut(e);
      if (p != null)
        return { resultType: o("WAWebApi").APICmd.OPEN_CATALOG, data: p };
      var _ = mt(e);
      if (_ != null)
        return {
          resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
          data: _,
        };
      var f = Tt(e);
      if (f) {
        var g;
        return {
          resultType: o("WAWebApi").APICmd.STICKER_PACK,
          data: { url: (g = f.data.url) != null ? g : "" },
        };
      }
      var h = it(e);
      if (h)
        return { resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION, data: h };
      var y = st(e);
      if (y != null)
        return { resultType: o("WAWebApi").APICmd.ADVERTISE, data: y };
      var b = Ot(e);
      if (b) return b;
      if (e.match(de))
        return {
          resultType: o("WAWebApi").APICmd.MANAGE_ADS,
          trigger: "chatListBanner",
        };
      if (e.match(he)) {
        var v = new URL(e),
          S = v.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING,
          source: S != null ? S : "unknown",
        };
      }
      if (e.match(ye))
        return { resultType: o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING };
      if (e.match(Ce))
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL,
        };
      if (
        e.match(be) ||
        e.match(ve) ||
        e.match(Le) ||
        e.match(Ee) ||
        e.match(ke) ||
        e.match(Ie)
      ) {
        var R = new URL(e),
          L = R.searchParams.get("source"),
          E = R.searchParams.get("moment");
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
          data: {
            source: L != null ? L : "unknown",
            moment: Re(E) ? E : void 0,
            url: "/",
          },
        };
      }
      var k = dt(e);
      if (k) return k;
      var I = ct(e);
      if (I) return I;
      if (e.match(ft))
        return { resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
      if (e.match(gt)) return { resultType: o("WAWebApi").APICmd.SET_ABOUT };
      var T = e.match(ht);
      if (T) {
        var D,
          x = new URL(e.replace("whatsapp://", "https://")),
          $ = (D = x.searchParams.get("entry_point")) != null ? D : void 0;
        return {
          resultType: o("WAWebApi").APICmd.PROFILE_USERNAME,
          data: { entryPoint: $ },
        };
      }
      var N = Vt(e);
      if (N != null) return N;
      var M = pt(e);
      if (M != null)
        return { resultType: o("WAWebApi").APICmd.PAYMENT_LINK, data: M };
      var w = kt(e);
      if (w != null) return w;
      var A = Rt(e);
      if (A) return A;
      if (X.test(e)) return { resultType: o("WAWebApi").APICmd.INVALID };
      var U = Ye(e);
      if (U) return { resultType: o("WAWebApi").APICmd.MSG_SEND, data: U };
      var V = Wt(e);
      if (V != null)
        return {
          resultType: o("WAWebApi").APICmd.WEB_REGISTRATION_CAMPAIGN,
          data: V,
        };
      var H = F(e);
      if (H != null) return H;
      var G = O(e);
      if (G != null) return G;
      var z = B(e);
      if (z != null) return z;
      var j = W(e);
      if (j != null) return j;
      if (e.match(P)) return { resultType: o("WAWebApi").APICmd.NEW_CHAT };
      var K = e.match(q);
      if (K) {
        var Q = new URLSearchParams(K[1]),
          Y = Q.get("phone"),
          J = Q.get("lid"),
          Z = Q.get("video") === "true",
          ee = Q.get("dp") === "1",
          te = {};
        (r("isStringNullOrEmpty")(Y) || (te.phone = Y),
          r("isStringNullOrEmpty")(J) || (te.lid = J),
          Z && (te.video = Z),
          ee && (te.fromDefaultProtocol = !0));
        var ne =
          !r("isStringNullOrEmpty")(Y) || !r("isStringNullOrEmpty")(J) || Z;
        return babelHelpers.extends(
          { resultType: o("WAWebApi").APICmd.NEW_CALL },
          ne && { data: te },
        );
      }
      var re = r("gkx")("26258") ? null : qt();
      if (re)
        return { resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC, data: re };
      var oe = Ut(e);
      return oe
        ? { resultType: o("WAWebApi").APICmd.SEND_FILE, data: oe }
        : { resultType: o("WAWebApi").APICmd.INVALID };
    }
    ((l.parseConversionData = k),
      (l.parseCTWADeeplinkToken = D),
      (l.matchProductUrl = qe),
      (l.matchCatalogUrl = je),
      (l.isStickerPackURL = Ct),
      (l.parseCallLinkDevicePrefs = At),
      (l.parseCallLink = Ot),
      (l.isValidCallLink = Bt),
      (l.parseAPICmd = Gt));
  },
  98,
);
