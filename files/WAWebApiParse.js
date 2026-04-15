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
        var e = qe(t),
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
                      o("WAWebUsernameTypes").isUsernameKey(c) &&
                      (n.usernameKey = c));
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
        var i = Fe(t);
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
      N = /^whatsapp:\/\/appOpen\/?(\?.*)?$/i;
    function M(e) {
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
    function w(e) {
      var t = e.match(N);
      if (!t) return null;
      var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[1]),
        a = n.get("session");
      return babelHelpers.extends(
        { resultType: o("WAWebApi").APICmd.APP_OPEN },
        !r("isStringNullOrEmpty")(a) && { data: { session: a } },
      );
    }
    var A = /^whatsapp:\/\/newcall\/$/i,
      F = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/forward/?\\?(.+)$",
        "i",
      ),
      O = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/send/?\\?(.+)$",
        "i",
      ),
      B = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i,
      W = /^whatsapp:\/\/send\/?\?(.*)$/i,
      q =
        /^https?:\/\/wa\.me\/([0-9.]{1,20})\/signup\/([^/?]+)\/?(?:\?(.+))?$/i,
      U = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20}))\/?\??(.+)?$/i,
      V = /^https?:\/\/wa\.me\/?(?:([0-9a-z.]{5,35}))?\/?\??(.+)?$/i,
      H =
        /^https?:\/\/wa\.me\/?@?(?:([0-9a-z._]{3,30}))(?::([0-9]{4}))?(\/?\?(.*))?$/i,
      G = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      z = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i,
      j = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})$",
        "i",
      ),
      K = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      Q = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i,
      X = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      Y = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      J = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i,
      Z = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})$",
        "i",
      ),
      ee = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      te = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i,
      ne = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/product/([^/]{0,200})/([0-9]{0,20})(/?.*)$",
        "i",
      ),
      re = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i,
      oe = /^whatsapp-smb:\/\/advertise\/?(.+)$/i,
      ae = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/,
      ie = /^https?:\/\/wa\.me\/pay\/br\/merchant\/pix\/add\/?(.+)$/i,
      le = /^https?:\/\/faq\.whatsapp\.com\/1013401987232838\/?(.+)$/i,
      se = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_PATH_PART +
          "/pay/br/merchant/pix/add/?(.+)$",
        "i",
      ),
      ue = /^whatsapp-smb:\/\/biztab\/manage-data-sharing\/?(?:\?.*)?$/i,
      ce = /^whatsapp-smb:\/\/biz-agents-onboarding\/?(?:\?.*)?$/i,
      de = /^whatsapp-smb:\/\/biz-broadcast-audience-modal\/?(?:\?.*)?$/i,
      me = /^whatsapp-smb:\/\/biz-broadcast-home\/?(?:\?.*)?$/i,
      pe = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i,
      _e = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i,
      fe = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i,
      ge = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i,
      he = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_PATH_PART + "/calluser/?\\?(.+)$",
        "i",
      ),
      ye = /^https?:\/\/wa\.me\/call\?\\?(.+)$/i,
      Ce = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/reg/wacom[/\\?]{0,2}(.*)$",
        "i",
      ),
      be = [G, z, Y, J],
      ve = [j, Z],
      Se = [X, ne],
      Re = [K, Q, ee, te],
      Le = [].concat(be, ve, Se, Re);
    function Ee(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = e.match(t[n]);
        if (r) return r;
      }
    }
    var ke = function (t) {
        return Ee(t, Le) != null;
      },
      Ie = new RegExp(
        "^" + p.ORIGIN + p.OPTIONAL_NON_CAPTURING_PATH_PART + "/push/",
        "i",
      ),
      Te = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i,
      De = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i,
      xe = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})?$",
        "i",
      ),
      $e = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/catalog/([0-9]{0,20})(/?.*)?$",
        "i",
      ),
      Pe = function (t) {
        return [Te, De, xe, $e].some(function (e) {
          return t.match(e);
        });
      },
      Ne = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i,
      Me = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/favorites/?(?:\\?.*)?$",
        "i",
      );
    function we(e) {
      if (o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
        var t = e.match(H);
        if (t) {
          var n = null;
          t[1] && (n = { username: t[1] });
          var r = t[2];
          if (
            (r != null &&
              o("WAWebUsernameTypes").isUsernameKey(r) &&
              (n = babelHelpers.extends({}, n, { usernameKey: r })),
            t[3])
          ) {
            var a = x(t[3], e);
            a != null && (n = babelHelpers.extends({}, n, a));
          }
          if (n != null) {
            var i = Fe(e);
            i != null && (n = babelHelpers.extends({}, n, { partnertoken: i }));
          }
          return n;
        }
      }
    }
    function Ae(t) {
      var n = t.match(O);
      if (n) {
        var r = x(n[2], t);
        if (r) return ((r.url = n[1] || "/"), r);
      }
      if (((n = t.match(B)), n || ((n = t.match(W)), n))) return x(n[1], t);
      if (((n = t.match(q)), n)) {
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
        var c = Fe(t);
        return (c != null && (a.partnertoken = c), a);
      }
      if (((n = t.match(U)), n)) {
        var d,
          m = t.match(V);
        if (
          (n[1]
            ? (d = { phone: n[1] + "@c.us" })
            : m &&
              m[1] &&
              !m[2] &&
              ((d = { url: t, customUrl: m[1] }),
              (d = babelHelpers.extends({}, d, we(t)))),
          n[2])
        ) {
          var p = x(n[2], t);
          p && (d = babelHelpers.extends({}, d, p));
        }
        if (d) {
          var _ = Fe(t);
          _ != null && (d.partnertoken = _);
        }
        if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled())
          return d;
      }
      return we(t);
    }
    function Fe(e) {
      var t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames(),
        n = new URL(e);
      for (var r of t) {
        var a = n.searchParams.get(r);
        if (a != null) return a;
      }
      return null;
    }
    var Oe = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function Be(e) {
      var t = e.match(Oe);
      if (t) {
        var n = new (r("WAWebPonyfillsUrlSearchParams"))(t[1]).get(
          "entrypoint",
        );
        return { url: "/", entrypointType: n };
      }
    }
    function We(e, t) {
      var n = { catalogOwnerJid: e[1] + "@s.whatsapp.net" },
        r = Fe(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function qe(e) {
      var t = new (r("WAWebPonyfillsUrlSearchParams"))(e),
        n = t.get(C),
        o = t.get(b);
      if (o == null && n == null) return null;
      var a = {};
      return (n != null && (a.source = n), o != null && (a.campaign = o), a);
    }
    function Ue(e) {
      var t = e.match(Te) || e.match(De);
      if (t) return We(t, e);
      if (((t = e.match(xe)), t))
        return babelHelpers.extends({}, We(t, e), { url: "/" });
      if (((t = e.match($e)), t)) {
        var n = qe(t[2]);
        return babelHelpers.extends({}, We(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
    }
    function Ve(e, t) {
      var n = { productId: e[1], businessOwnerJid: e[2] + "@s.whatsapp.net" },
        r = Fe(t);
      return (r != null && (n.partnertoken = r), n);
    }
    function He(e) {
      var t = Ee(e, be);
      if (t) return Ve(t, e);
      if (((t = Ee(e, ve)), t))
        return babelHelpers.extends({}, Ve(t, e), { url: "/" });
      if (((t = Ee(e, Se)), t)) {
        var n = qe(t[3]);
        return babelHelpers.extends({}, Ve(t, e), n != null && { utm: n }, {
          url: "/",
        });
      }
      if (((t = Ee(e, Re)), t)) {
        var r = qe(t[3]);
        return babelHelpers.extends({}, Ve(t, e), r != null && { utm: r });
      }
    }
    function Ge(e) {
      var t = e.match(Ie);
      if (t) return { url: "/" };
    }
    function ze(e) {
      var t = new (r("WAWebPonyfillsUrlSearchParams"))(e),
        n = t.get("wa_campaign_id");
      if (!(n == null || n === "")) {
        var o = t.get("wa_campaign_type");
        return o == null || o === ""
          ? null
          : { campaignId: n, campaignType: o };
      }
    }
    function je(e) {
      var t = e.match(oe);
      if (t) return ze(t[1]);
    }
    function Ke(e) {
      var t = e.match(re);
      if (t) return ze(t[1]);
    }
    function Qe(e) {
      var t = e.match(ie),
        n = null;
      if ((t ? (n = t[1]) : ((t = e.match(se)), t && (n = t[2])), n != null)) {
        var r = ze(n);
        if (r)
          return {
            resultType: "BRAZIL_PAYMENTS",
            data: babelHelpers.extends({}, r, {
              subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING,
            }),
          };
      }
      if (((t = e.match(le)), t)) {
        var a = ze(t[1]);
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
    function Xe(e) {
      var t = e.match(pe);
      if (t) {
        var n = ze(t[1]);
        if ((n == null ? void 0 : n.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_CATALOG_SETTINGS,
          };
      }
      var r = e.match(_e);
      if (r) {
        var a = ze(r[1]);
        if ((a == null ? void 0 : a.campaignType) === "chat_psa")
          return {
            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE
              .DEEP_LINK_BOOST_CATALOG,
          };
      }
    }
    function Ye(e) {
      return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    var Je = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i,
      Ze = /^https?:\/\/wa\.me\/edit-profile-picture$/i,
      et =
        /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i,
      tt = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function nt(e) {
      var t = e.match(tt);
      return t != null;
    }
    function rt(e) {
      var t = e.match(Je);
      return !!t;
    }
    var ot = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i,
      at = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/ais/(\\d{14,20})/?(\\?.*)?$",
        "i",
      );
    function it(e) {
      var t,
        n,
        r = (
          (t = (n = e.match(ot)) != null ? n : e.match(at)) != null ? t : []
        )[1];
      return r
        ? { resultType: o("WAWebApi").APICmd.UGC_BOT, data: { fbid: r } }
        : null;
    }
    var lt = /^https?:\/\/wa\.me\/man\/link(?:\?(.*))?$/i,
      st = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/man/link(?:\\?(.*))?$",
        "i",
      );
    function ut(e) {
      var t,
        n = (t = e.match(lt)) != null ? t : e.match(st);
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
    var ct = /^https?:\/\/wa\.me\/hatch\/link(?:\?(.*))?$/i,
      dt = new RegExp(
        "^" +
          p.ORIGIN +
          p.OPTIONAL_NON_CAPTURING_PATH_PART +
          "/hatch/link(?:\\?(.*))?$",
        "i",
      );
    function mt(e) {
      var t,
        n = (t = e.match(ct)) != null ? t : e.match(dt);
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
    function pt(e) {
      if (nt(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          o = n[1],
          a = n[2];
        return a;
      }
    }
    function _t(e) {
      var t = e.match(tt);
      if (t) {
        var n = pt(e);
        return { resultType: "STICKER_PACK", data: { url: n } };
      }
    }
    var ft = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      gt = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function ht(e) {
      var t = e.get("audio_device"),
        n = e.get("speaker_device"),
        r = e.get("video_device"),
        a = e.get("color_index"),
        i = a != null && a !== "" ? parseInt(a, 10) : null,
        l =
          o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1;
      return {
        audioDeviceId: t != null && t !== "" ? t : null,
        colorIndex: i != null && !isNaN(i) && i >= 1 && i <= l ? i : null,
        speakerDeviceId: n != null && n !== "" ? n : null,
        videoDeviceId: r != null && r !== "" ? r : null,
        videoMuted: e.get("video_muted") === "1",
        audioMuted: e.get("audio_muted") === "1",
      };
    }
    function yt(e) {
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
      var l = ht(n);
      return {
        resultType: "CALL_LINK",
        data: babelHelpers.extends({ token: i, callType: a }, l),
      };
    }
    function Ct(e) {
      var t = e.match(ft) || e.match(gt);
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
      var n = yt(e);
      if (n != null) return n;
    }
    function bt(e) {
      return Ct(e) != null;
    }
    function vt(e) {
      var t = e.match(Ce);
      if (t && t[0]) {
        var n = new URL(e),
          a = new (r("WAWebPonyfillsUrlSearchParams"))(n.search),
          i = a.get("g"),
          l = a.get("pn"),
          s = null;
        return (
          i === "0"
            ? (s = o(
                "WAWebRegistrationCampaignConstants",
              ).WHATSAPP_DOT_COM_REG_EXP_CONTROL)
            : i === "1"
              ? (s = o(
                  "WAWebRegistrationCampaignConstants",
                ).WHATSAPP_DOT_COM_REG_EXP_FLOW_1)
              : i === "2" &&
                (s = o(
                  "WAWebRegistrationCampaignConstants",
                ).WHATSAPP_DOT_COM_REG_EXP_FLOW_2),
          l != null && l.length > 0 && /^\d{10}$/.test(l)
            ? {
                referrer: "wacom",
                url: "/",
                phoneNumberWithoutCountryCode: l,
                group: s,
              }
            : { referrer: "wacom", url: "/", group: s }
        );
      }
    }
    function St() {
      var e = new (r("WAWebPonyfillsUrlSearchParams"))(window.location.search),
        t = e.get("work_contact_sync_data");
      return t != null && t !== "" ? { compressedData: t } : null;
    }
    function Rt(e) {
      var t = e.match(F);
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
    function Lt(e, t) {
      if (typeof e != "string")
        return { resultType: o("WAWebApi").APICmd.INVALID };
      var n = y(e);
      if (n) return { resultType: o("WAWebApi").APICmd.GROUP_INVITE, data: n };
      var a = Ue(e);
      if (a) return { resultType: o("WAWebApi").APICmd.CATALOG, data: a };
      var i = He(e);
      if (i) return { resultType: o("WAWebApi").APICmd.PRODUCT, data: i };
      var l = Be(e);
      if (l)
        return { resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY, data: l };
      var s = rt(e);
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
        [fe, ge].some(function (t) {
          return e.match(t);
        })
      )
        return { resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF };
      if (
        [Ne, Me].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.FAVORITES,
          data: { url: "/" },
        };
      var p = Ke(e);
      if (p != null)
        return { resultType: o("WAWebApi").APICmd.OPEN_CATALOG, data: p };
      var _ = Xe(e);
      if (_ != null)
        return {
          resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
          data: _,
        };
      var f = _t(e);
      if (f) {
        var g;
        return {
          resultType: o("WAWebApi").APICmd.STICKER_PACK,
          data: { url: (g = f.data.url) != null ? g : "" },
        };
      }
      var h = Ge(e);
      if (h)
        return { resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION, data: h };
      var C = je(e);
      if (C != null)
        return { resultType: o("WAWebApi").APICmd.ADVERTISE, data: C };
      var b = Ct(e);
      if (b) return b;
      if (e.match(ae))
        return {
          resultType: o("WAWebApi").APICmd.MANAGE_ADS,
          trigger: "chatListBanner",
        };
      if (e.match(ue)) {
        var v = new URL(e),
          S = v.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING,
          source: S != null ? S : "unknown",
        };
      }
      if (e.match(ce))
        return { resultType: o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING };
      if (e.match(de))
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL,
        };
      if (e.match(me)) {
        var R = new URL(e),
          L = R.searchParams.get("source");
        return {
          resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
          source: L != null ? L : "unknown",
        };
      }
      var E = Qe(e);
      if (E) return E;
      if (e.match(Ze))
        return { resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE };
      var k = e.match(et);
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
        [he, ye].some(function (t) {
          return e.match(t);
        })
      )
        return {
          resultType: o("WAWebApi").APICmd.CALL_USER,
          data: { url: "/" },
        };
      var x = Ye(e);
      if (x != null)
        return { resultType: o("WAWebApi").APICmd.PAYMENT_LINK, data: x };
      var P = ut(e);
      if (P != null) return P;
      var N = mt(e);
      if (N != null) return N;
      var F = it(e);
      if (F) return F;
      var O = Ae(e);
      if (O) return { resultType: o("WAWebApi").APICmd.MSG_SEND, data: O };
      var B = vt(e);
      if (B != null)
        return {
          resultType: o("WAWebApi").APICmd.WEB_REGISTRATION_CAMPAIGN,
          data: B,
        };
      var W = M(e);
      if (W != null) return W;
      var q = w(e);
      if (q != null) return q;
      if (e.match($)) return { resultType: o("WAWebApi").APICmd.NEW_CHAT };
      if (e.match(A)) return { resultType: o("WAWebApi").APICmd.NEW_CALL };
      var U = r("gkx")("26258") ? null : St();
      if (U)
        return { resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC, data: U };
      var V = Rt(e);
      return V
        ? { resultType: o("WAWebApi").APICmd.SEND_FILE, data: V }
        : { resultType: o("WAWebApi").APICmd.INVALID };
    }
    ((l.parseConversionData = E),
      (l.parseCTWADeeplinkToken = T),
      (l.matchProductUrl = ke),
      (l.matchCatalogUrl = Pe),
      (l.isStickerPackURL = nt),
      (l.parseCallLinkDevicePrefs = ht),
      (l.parseCallLink = Ct),
      (l.isValidCallLink = bt),
      (l.parseAPICmd = Lt));
  },
  98,
);
