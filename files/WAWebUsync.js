__d(
  "WAWebUsync",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebUsyncBackoff",
    "WAWebUsyncBotProfile",
    "WAWebUsyncBusiness",
    "WAWebUsyncContact",
    "WAWebUsyncDevice",
    "WAWebUsyncDisappearingMode",
    "WAWebUsyncFeature",
    "WAWebUsyncLid",
    "WAWebUsyncPicture",
    "WAWebUsyncStatus",
    "WAWebUsyncTextStatus",
    "WAWebUsyncUsername",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { PN: "pn", LID: "lid" },
      c = {
        FEATURE: "feature",
        DEVICE: "devices",
        CONTACT: "contact",
        PICTURE: "picture",
        STATUS: "status",
        BUSINESS: "business",
        DISAPPEARING_MODE: "disappearing_mode",
        LID: "lid",
        BOT: "bot",
        USERNAME: "username",
        TEXT_STATUS: "text_status",
      },
      d = {
        feature: o("WAWebUsyncFeature").featureParser,
        devices: o("WAWebUsyncDevice").deviceParser,
        contact: o("WAWebUsyncContact").contactParser,
        picture: o("WAWebUsyncPicture").pictureParser,
        status: o("WAWebUsyncStatus").statusParser,
        business: o("WAWebUsyncBusiness").businessParser,
        disappearing_mode: o("WAWebUsyncDisappearingMode")
          .disappearingModeParser,
        lid: o("WAWebUsyncLid").lidParser,
        bot: o("WAWebUsyncBotProfile").botProfileParser,
        username: o("WAWebUsyncUsername").usernameParser,
        text_status: o("WAWebUsyncTextStatus").textStatusParser,
      };
    function m(e) {
      var t = [];
      return (
        e.forEachChildWithTag("user", function (e) {
          var n = {},
            r = e.maybeChild(c.CONTACT);
          (!e.hasAttr("jid") && r == null) ||
            (Object.keys(c).forEach(function (t) {
              var r = c[t],
                o = e.maybeChild(r);
              o && d[r] && (n[r] = d[r](o));
            }),
            e.hasAttr("jid") &&
              (n.id = o("WAWebJidToWid").deviceJidToUserWid(
                e.attrDeviceJid("jid"),
              )),
            e.hasAttr("pn_jid") &&
              (n.pn = o("WAWebJidToWid").deviceJidToUserWid(
                e.attrDeviceJid("pn_jid"),
              )),
            t.push(n));
        }),
        t
      );
    }
    var p = new (r("WADeprecatedWapParser"))("usyncParser", function (t) {
        t.assertAttr("type", "result");
        var n = { error: {}, refresh: {}, list: [] },
          r = t.child("usync"),
          a = r.child("result"),
          i = r.child("list");
        return (
          Object.keys(c).forEach(function (e) {
            var t = c[e],
              r = a.maybeChild(t);
            if (r) {
              var o = r.maybeChild("error");
              o
                ? (n.error[t] = {
                    errorCode: o.attrInt("code"),
                    errorText: o.attrString("text"),
                    errorBackoff: o.attrInt("backoff"),
                  })
                : r.hasAttr("refresh") &&
                  (n.refresh[t] = r.attrInt("refresh", 0));
            }
          }),
          (n.list = m(i)),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "usync query success!",
              ])),
          ),
          n
        );
      }),
      _ = (function () {
        function e() {
          ((this.context = "interactive"),
            (this.mode = "query"),
            (this.protocols = []),
            (this.users = []),
            (this.$1 = !1));
        }
        var t = e.prototype;
        return (
          (t.withMode = function (t) {
            return ((this.mode = t), this);
          }),
          (t.withContext = function (t) {
            return ((this.context = t), this);
          }),
          (t.withContactProtocol = function (t) {
            return (
              this.protocols.push(
                new (o("WAWebUsyncContact").USyncContactProtocol)(t),
              ),
              this
            );
          }),
          (t.withBusinessProtocol = function () {
            return (
              this.protocols.push(
                new (o("WAWebUsyncBusiness").USyncBusinessProtocol)(),
              ),
              this
            );
          }),
          (t.withDeviceProtocol = function () {
            return (
              this.protocols.push(
                new (o("WAWebUsyncDevice").USyncDeviceProtocol)(),
              ),
              this
            );
          }),
          (t.withDisappearingModeProtocol = function () {
            return (
              this.protocols.push(
                new (o(
                  "WAWebUsyncDisappearingMode",
                ).USyncDisappearingModeProtocol)(),
              ),
              this
            );
          }),
          (t.withPictureProtocol = function () {
            return (
              this.protocols.push(
                new (o("WAWebUsyncPicture").USyncPictureProtocol)(),
              ),
              this
            );
          }),
          (t.withStatusProtocol = function () {
            return (
              this.protocols.push(
                new (o("WAWebUsyncStatus").USyncStatusProtocol)(),
              ),
              this
            );
          }),
          (t.withTextStatusProtocol = function () {
            return (
              this.protocols.push(
                new (o("WAWebUsyncTextStatus").USyncTextStatusProtocol)(),
              ),
              this
            );
          }),
          (t.withFeaturesProtocol = function (t) {
            return (
              this.protocols.push(
                new (o("WAWebUsyncFeature").USyncFeaturesProtocol)(t),
              ),
              this
            );
          }),
          (t.withLidProtocol = function () {
            return (
              this.$1 ||
                (this.protocols.push(
                  new (o("WAWebUsyncLid").USyncLidProtocol)(),
                ),
                (this.$1 = !0)),
              this
            );
          }),
          (t.withBotProfileProtocol = function () {
            return (
              this.protocols.push(
                new (o("WAWebUsyncBotProfile").USyncBotProfileProtocol)(),
              ),
              this
            );
          }),
          (t.withUser = function (t, n) {
            n === void 0 && (n = !1);
            var e = t.getId();
            return (
              n &&
                this.$1 &&
                e != null &&
                (e.isLid()
                  ? t.withLid(e)
                  : e.isRegularUserPn() && this.$2(t, e)),
              this.users.push(t),
              this
            );
          }),
          (t.$2 = function (t, n) {
            var e = o("WAWebApiContact").getCurrentLid(n);
            e != null && t.withLid(e);
          }),
          (t.withUsernameProtocol = function () {
            return (
              this.protocols.push(
                new (o("WAWebUsyncUsername").USyncUsernameProtocol)(),
              ),
              this
            );
          }),
          (t.$3 = function () {
            var e = this;
            if (this.protocols.length === 0)
              throw r("err")("a usync query must have at least one protocol");
            var t = this.users.filter(function (e) {
              var t = e.getId();
              return t && r("WAWebWid").isServer(t) ? !1 : e.validate();
            });
            t.length === 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Usync warning: a usync query must have at least one user",
                  ])),
              );
            var n = o("WAWap").wap(
                "query",
                null,
                this.protocols.map(function (e) {
                  return e.getQueryElement();
                }),
              ),
              a = t.map(function (t) {
                var n = t.getId(),
                  r = t.getPnJid();
                return o("WAWap").wap(
                  "user",
                  {
                    jid: n
                      ? o("WAWebCommsWapMd").USER_JID(n)
                      : o("WAWap").DROP_ATTR,
                    pn_jid: r
                      ? o("WAWebCommsWapMd").USER_JID(r)
                      : o("WAWap").DROP_ATTR,
                  },
                  e.protocols.map(function (e) {
                    return e.getUserElement(t);
                  }),
                );
              }),
              i = o("WAWap").wap("list", null, a);
            return o("WAWap").wap(
              "iq",
              {
                to: o("WAWap").S_WHATSAPP_NET,
                xmlns: "usync",
                type: "get",
                id: o("WAWap").generateId(),
              },
              o("WAWap").wap(
                "usync",
                {
                  sid: o("WAWap").generateId(),
                  index: "0",
                  last: "true",
                  mode: o("WAWap").CUSTOM_STRING(this.mode),
                  context: o("WAWap").CUSTOM_STRING(this.context),
                },
                n,
                i,
              ),
            );
          }),
          (t.execute = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.$3();
              yield o("WAWebUsyncBackoff").waitForBackoff(this);
              var t = yield o("WADeprecatedSendIq").deprecatedSendIq(e, p);
              return t.success
                ? (f(t.result), t.result)
                : {
                    error: {
                      all: {
                        errorCode: t.errorCode,
                        errorText: t.errorText,
                        errorType: t.errorType,
                      },
                    },
                    refresh: {},
                    list: [],
                  };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })();
    function f(e) {
      Object.keys(c).forEach(function (t) {
        var n = c[t],
          r = e.error[n];
        r != null &&
          r.errorBackoff != null &&
          o("WAWebUsyncBackoff").setProtocolBackoffMs(n, r.errorBackoff * 1e3);
      });
    }
    ((l.USYNC_ADDRESSING_MODE = u), (l.USyncQuery = _));
  },
  98,
);
