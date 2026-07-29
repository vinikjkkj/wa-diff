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
      h = /^whatsapp:\/\/chat\/?\?code=(\w+)(?:&.*)?$/i;
    function y(e) {
      var t = Ye(e),
        n = e.match(_);
      if (n)
        return babelHelpers.extends(
          { code: n[2], url: n[1] || "/" },
          t != null && { utm: t },
        );
      if (((n = e.match(f)), n))
        return babelHelpers.extends({ code: n[1] }, t != null && { utm: t });
      if (((n = e.match(g)), n))
        return babelHelpers.extends({ code: n[1] }, t != null && { utm: t });
      if (((n = e.match(h)), n))
        return babelHelpers.extends({ code: n[1] }, t != null && { utm: t });
    }
    var C = "utm_source",
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
        "dp",
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
        (new URLSearchParams(e).forEach(function (e, t) {
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
        var i = je(t);
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
    function F(e) {
      return N.test(e)
        ? { resultType: o("WAWebApi").APICmd.CALL_ACTIVE }
        : null;
    }
    function O(e) {
      var t = e.match(M);
      if (!t) return null;
      var n = new URLSearchParams(t[1]),
        a = n.get("session");
      return babelHelpers.extends(
        { resultType: o("WAWebApi").APICmd.APP_OPEN },
        !r("isStringNullOrEmpty")(a) && { data: { session: a } },
      );
    }
    function B(e) {
      var t = e.match(w);
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
      Q = /^https?:\/\/wa\.me\/settings\/?(?:\?.*)?$/i,
      X = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      Y = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      J = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})$",
        "i",
      ),
      Z = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      ee = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      te = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      ne = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      re = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      oe = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})$",
        "i",
      ),
      ae = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      ie = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      le = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      se = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i,
      ue = /^whatsapp-smb:\/\/advertise\/?(.+)$/i,
      ce = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/,
      de = /^https?:\/\/wa\.me\/pay\/br\/merchant\/pix\/add\/?(.+)$/i,
      me = /^https?:\/\/faq\.whatsapp\.com\/1013401987232838\/?(.+)$/i,
      pe = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_PATH_PART +
          "/pay/br/merchant/pix/add/?(.+)$",
        "i",
      ),
      _e = /^whatsapp-smb:\/\/biztab\/manage-data-sharing\/?(?:\?.*)?$/i,
      fe = /^whatsapp-smb:\/\/biz-agents-onboarding\/?(?:\?.*)?$/i,
      ge = /^whatsapp-smb:\/\/biz-broadcast-audience-modal\/?(?:\?.*)?$/i,
      he = /^whatsapp-smb:\/\/biz-broadcast-home\/?(?:\?.*)?$/i,
      ye = new RegExp("^" + p.ORIGIN + "/biz-broadcast-home/?(?:\\?.*)?$", "i"),
      Ce = /^whatsapp-smb:\/\/business-broadcast\/?(?:\?.*)?$/i,
      be = new RegExp("^" + p.ORIGIN + "/business-broadcast/?(?:\\?.*)?$", "i"),
      ve = /^whatsapp-smb:\/\/marketingmessages\/?(?:\?.*)?$/i,
      Se = new RegExp("^" + p.ORIGIN + "/marketingmessages/?(?:\\?.*)?$", "i"),
      Re = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
      Le = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
      Ee = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
      ke = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
      Ie = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
        "i",
      ),
      Te = /^https?:\/\/wa\.me\/call\?\\?(.+)$/i,
      De = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/reg/wacom[/\\?]{0,2}(.*)$",
        "i",
      ),
      xe = [X, Y, ne, re],
      $e = [J, oe],
      Pe = [te, le],
      Ne = [Z, ee, ae, ie],
      Me = [].concat(xe, $e, Pe, Ne);
    function we(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = e.match(t[n]);
        if (r) return r;
      }
    }
    function Ae(e) {
      return we(e, Me) != null;
    }
    var Fe = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
        "i",
      ),
      Oe = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
      Be = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
      We = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})?$",
        "i",
      ),
      qe = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})(/?.*)?$",
        "i",
      );
    function Ue(e) {
      return [Oe, Be, We, qe].some(function (t) {
        return e.match(t);
      });
    }
    var Ve = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
      He = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/favorites/?(?:\\?.*)?$",
        "i",
      );
    function Ge(e) {
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
            var i = je(e);
            i != null && (n = babelHelpers.extends({}, n, { partnertoken: i }));
          }
          return n;
        }
      }
    }
    function ze(t) {
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
        var c = je(t);
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
              (d = babelHelpers.extends({}, d, Ge(t)))),
          n[2])
        ) {
          var p = x(n[2], t);
          p && (d = babelHelpers.extends({}, d, p));
        }
        if (d) {
          var _ = je(t);
          _ != null && (d.partnertoken = _);
        }
        if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled())
          return d;
      }
      return Ge(t);
    }
    function je(e) {
      var t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames(),
        n = new URL(e);
      for (var r of t) {
        var a = n.searchParams.get(r);
        if (a != null) return a;
      }
      return null;
    }
    var Ke = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function Qe(e) {
      var t = e.match(Ke);
      if (t) {
        var n = new URLSearchParams(t[1]).get("entrypoint");
        return { url: "/", entrypointType: n };
      }
    }
    function Xe(e, t) {
      var n = { catalogOwnerJid: e[1] + "@s.whatsapp.net" },
        r = je(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function Ye(e) {
      var t = new URLSearchParams(e),
        n = t.get(C),
        r = t.get(b);
      if (r == null && n == null) return null;
      var o = {};
      return (n != null && (o.source = n), r != null && (o.campaign = r), o);
    }
    function Je(e) {
      var t = e.match(Oe) || e.match(Be);
      if (t) return Xe(t, e);
      if (((t = e.match(We)), t))
        return babelHelpers.extends({}, Xe(t, e), { url: "/" });
      if (((t = e.match(qe)), t)) {
        var n = Ye(t[2]);
        return babelHelpers.extends({}, Xe(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
    }
    function Ze(e, t) {
      var n = { productId: e[1], businessOwnerJid: e[2] + "@s.whatsapp.net" },
        r = je(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function et(e) {
      var t = we(e, xe);
      if (t) return Ze(t, e);
      if (((t = we(e, $e)), t))
        return babelHelpers.extends({}, Ze(t, e), { url: "/" });
      if (((t = we(e, Pe)), t)) {
        var n = Ye(t[3]);
        return babelHelpers.extends({}, Ze(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
      if (((t = we(e, Ne)), t)) {
        var r = Ye(t[3]);
        return babelHelpers.extends({}, Ze(t, e), r != null && { utm: r });
      }
    }
    function tt(e) {
      var t = e.match(Fe);
      if (t) return { url: "/" };
    }
    function nt(e) {
      var t = new URLSearchParams(e),
        n = t.get("wa_campaign_id");
      if (!(n == null || n === "")) {
        var r = t.get("wa_campaign_type");
        return r == null || r === ""
          ? null
          : { campaignId: n, campaignType: r };
      }
    }
    function rt(e) {
      var t = e.match(ue);
      if (t) return nt(t[1]);
    }
    function ot(e) {
      var t = e.match(se);
      if (t) return nt(t[1]);
    }
    function at(e) {
      var t = e.match(de),
        n = null;
      if ((t ? (n = t[1]) : ((t = e.match(pe)), t && (n = t[2])), n != null)) {
        var r = nt(n);
        if (r)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, r, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING,
            }),
          };
      }
      if (((t = e.match(me)), t)) {
        var a = nt(t[1]);
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
    function it(e) {
      var t = e.match(Re);
      if (t) {
        var n = nt(t[1]);
        if ((n == null ? void 0 : n.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_CATALOG_SETTINGS,
          };
      }
      var r = e.match(Le);
      if (r) {
        var a = nt(r[1]);
        if ((a == null ? void 0 : a.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_BOOST_CATALOG,
          };
      }
    }
    function lt(e) {
      return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    var st = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
      ut = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
      ct =
        /^(?:https?:\/\/wa\.me\/set-about|whatsapp:\/\/set-about)\/?(?:\?.*)?$/i,
      dt =
        /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i,
      mt = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function pt(e) {
      var t = e.match(mt);
      return t != null;
    }
    function _t(e) {
      var t = e.match(st);
      return !!t;
    }
    var ft = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
      gt = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/ais/(\\d{14,20})/?(\\?.*)?$",
        "i",
      );
    function ht(e) {
      var t,
        n,
        r = (
          (t = (n = e.match(ft)) != null ? n : e.match(gt)) != null ? t : []
        )[1];
      return r
        ? { resultType: o("WAWebApi").APICmd.UGC_BOT, data: { fbid: r } }
        : null;
    }
    var yt = /^https?:\/\/wa\.me\/man\/link(?:\?(.*))?$/i,
      Ct = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/man/link(?:\\?(.*))?$",
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
          resultType: o("WAWebApi").APICmd.MAN_LINK,
          data: { token: r },
        };
      }
      return null;
    }
    var vt = /^https?:\/\/wa\.me\/hatch\/link(?:\?(.*))?$/i,
      St = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/hatch/link(?:\\?(.*))?$",
        "i",
      );
    function Rt(e) {
      var t,
        n = (t = e.match(vt)) != null ? t : e.match(St);
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
    function Lt(e) {
      if (pt(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          o = n[1],
          a = n[2];
        return a;
      }
    }
    function Et(e) {
      var t = e.match(mt);
      if (t) {
        var n = Lt(e);
        return { resultType: "STICKER_PACK", data: { url: n } };
      }
    }
    var kt = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      It = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      Tt = new RegExp(
        "^" + p.ORIGIN + "/call/(video|voice)/(\\w+)(?:\\?.*)?$",
        "i",
      ),
      Dt =
        /^https:\/\/web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function xt(e) {
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
    function $t(e) {
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
      var l = xt(r);
      return {
        resultType: "CALL_LINK",
        data: babelHelpers.extends({ token: i, callType: a }, l),
      };
    }
    function Pt(e) {
      var t = e.match(kt) || e.match(It) || e.match(Tt) || e.match(Dt);
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
      var n = $t(e);
      if (n != null) return n;
    }
    function Nt(e) {
      return Pt(e) != null;
    }
    function Mt(e) {
      var t = e.match(De);
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
    function wt() {
      var e = new URLSearchParams(window.location.search),
        t = e.get("work_contact_sync_data");
      return t != null && t !== "" ? { compressedData: t } : null;
    }
    function At(e) {
      var t = e.match(q);
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
    function Ft(e, t) {
      if (typeof e != "string")
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var n = y(e);
      if (n) return { resultType: o("WAWebApi").APICmd.GROUP_INVITE, data: n };
      var a = Je(e);
      if (a) return { resultType: o("WAWebApi").APICmd.CATALOG, data: a };
      var i = et(e);
      if (i) return { resultType: o("WAWebApi").APICmd.PRODUCT, data: i };
      var l = Qe(e);
      if (l)
        return { resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY, data: l };
      var s = _t(e);
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
        [Ee, ke].some(function (t) {
          return e.match(t);
        })
      )
        return { resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF };
      if (
        [Ve, He].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.FAVORITES,
          data: { url: "/" },
        };
      var p = ot(e);
      if (p != null)
        return { resultType: o("WAWebApi").APICmd.OPEN_CATALOG, data: p };
      var _ = it(e);
      if (_ != null)
        return {
          resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
          data: _,
        };
      var f = Et(e);
      if (f) {
        var g;
        return {
          resultType: o("WAWebApi").APICmd.STICKER_PACK,
          data: { url: (g = f.data.url) != null ? g : "" },
        };
      }
      var h = tt(e);
      if (h)
        return { resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION, data: h };
      var C = rt(e);
      if (C != null)
        return { resultType: o("WAWebApi").APICmd.ADVERTISE, data: C };
      var b = Pt(e);
      if (b) return b;
      if (e.match(ce))
        return {
          resultType: o("WAWebApi").APICmd.MANAGE_ADS,
          trigger: "chatListBanner",
        };
      if (e.match(_e)) {
        var v = new URL(e),
          S = v.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING,
          source: S != null ? S : "unknown",
        };
      }
      if (e.match(fe))
        return { resultType: o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING };
      if (e.match(ge))
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL,
        };
      if (
        e.match(he) ||
        e.match(ye) ||
        e.match(Ce) ||
        e.match(be) ||
        e.match(ve) ||
        e.match(Se)
      ) {
        var R = new URL(e),
          L = R.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
          data: { source: L != null ? L : "unknown", url: "/" },
        };
      }
      var E = at(e);
      if (E) return E;
      if (e.match(ut))
        return { resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
      if (e.match(ct)) return { resultType: o("WAWebApi").APICmd.SET_ABOUT };
      var k = e.match(dt);
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
        [Ie, Te].some(function (t) {
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
      var q = lt(e);
      if (q != null)
        return { resultType: o("WAWebApi").APICmd.PAYMENT_LINK, data: q };
      var U = bt(e);
      if (U != null) return U;
      var V = Rt(e);
      if (V != null) return V;
      var H = ht(e);
      if (H) return H;
      if (Q.test(e)) return { resultType: o("WAWebApi").APICmd.INVALID };
      var G = ze(e);
      if (G) return { resultType: o("WAWebApi").APICmd.MSG_SEND, data: G };
      var z = Mt(e);
      if (z != null)
        return {
          resultType: o("WAWebApi").APICmd.WEB_REGISTRATION_CAMPAIGN,
          data: z,
        };
      var j = A(e);
      if (j != null) return j;
      var K = F(e);
      if (K != null) return K;
      var X = O(e);
      if (X != null) return X;
      var Y = B(e);
      if (Y != null) return Y;
      if (e.match($)) return { resultType: o("WAWebApi").APICmd.NEW_CHAT };
      var J = e.match(W);
      if (J) {
        var Z = new URLSearchParams(J[1]),
          ee = Z.get("phone"),
          te = Z.get("lid"),
          ne = Z.get("video") === "true",
          re = Z.get("dp") === "1",
          oe = {};
        (r("isStringNullOrEmpty")(ee) || (oe.phone = ee),
          r("isStringNullOrEmpty")(te) || (oe.lid = te),
          ne && (oe.video = ne),
          re && (oe.fromDefaultProtocol = !0));
        var ae =
          !r("isStringNullOrEmpty")(ee) || !r("isStringNullOrEmpty")(te) || ne;
        return babelHelpers.extends(
          { resultType: o("WAWebApi").APICmd.NEW_CALL },
          ae && { data: oe },
        );
      }
      var ie = r("gkx")("26258") ? null : wt();
      if (ie)
        return { resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC, data: ie };
      var le = At(e);
      return le
        ? { resultType: o("WAWebApi").APICmd.SEND_FILE, data: le }
        : { resultType: o("WAWebApi").APICmd.INVALID };
    }
    ((l.parseConversionData = E),
      (l.parseCTWADeeplinkToken = T),
      (l.matchProductUrl = Ae),
      (l.matchCatalogUrl = Ue),
      (l.isStickerPackURL = pt),
      (l.parseCallLinkDevicePrefs = xt),
      (l.parseCallLink = Pt),
      (l.isValidCallLink = Nt),
      (l.parseAPICmd = Ft));
  },
  98,
);
