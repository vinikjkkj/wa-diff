__d(
  "WAWebWid",
  [
    "WAJids",
    "WALogger",
    "WATypeUtils",
    "WAWebABPropsCAPISupportNumber",
    "WAWebABPropsSupportGroup",
    "WAWebABPropsSupportLid",
    "WAWebBizCoexGatingUtils",
    "WAWebWidError",
    "WAWebWidValidator",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "server@c.us",
      _ = "0@c.us",
      f = "16508638904@c.us",
      g = "165332417282214",
      h = "16505361212@c.us",
      y = /^1313555\d{4}$|^131655500\d{2}$/,
      C = 99,
      b = 4,
      v = (function () {
        function t(t, n) {
          var a = n.intentionallyUsePrivateConstructor;
          if (!a)
            throw r("err")(
              "You should use WidFactory.createWid() instead of the Wid constructor. If you absolutely must use the constructor, pass {intentionallyUsePrivateConstructor: true} as a second parameter.",
            );
          if (t === "call") {
            ((this.user = "call"),
              (this.device = null),
              (this._serialized = "call"));
            return;
          }
          var i = o("WAWebWidValidator").validateAndGetParts(
            t,
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled(),
          );
          if (i == null)
            throw (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid wid: ",
                    "",
                  ])),
                t,
              ),
              new (o("WAWebWidError").InvalidWidError)("wid error: invalid wid")
            );
          var l = [],
            d = i.userPart,
            m = i.devicePart,
            p = i.serverPart.toLowerCase(),
            _;
          switch (p) {
            case "s.whatsapp.net":
              _ = "c.us";
              break;
            default:
              _ = p;
              break;
          }
          if (((this.server = _), d == null))
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "wid represents server and should not be used: ",
                    "",
                  ])),
                t,
              ),
              r("err")(
                "wid error: wid represents server and should not be used",
              )
            );
          if (((this.user = d), l.push(this.user), m != null)) {
            if (
              this.server !== "c.us" &&
              this.server !== "lid" &&
              this.server !== "hosted" &&
              this.server !== "hosted.lid" &&
              this.server !== "bot"
            )
              throw (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "wrong server for wid with device present: ",
                      "",
                    ])),
                  t,
                ),
                r("err")("wid error: wrong server for wid with device present")
              );
            var f = parseInt(m, 10);
            f && (l.push(":"), l.push(f), (this.device = f));
          }
          if (
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            this.isHosted() &&
            (this.device == null || this.device !== C)
          )
            throw (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "@hosted jid must have device id of 99",
                  ])),
              ),
              r("err")("wid error: unexpected device id in hosted wid")
            );
          (l.push("@"), l.push(this.server), (this._serialized = l.join("")));
        }
        var n = t.prototype;
        return (
          (n.$1 = function () {
            if (!r("gkx")("26258")) return this.user;
            if (this.isGroup()) {
              var e = this.user.split("-");
              if (e.length === 2) {
                var t = e[0],
                  n = e[1];
                return t.slice(-b) + "-" + n;
              }
            }
            return this.user.slice(-b);
          }),
          (n.toString = function (t) {
            if (t) {
              var e,
                n,
                r =
                  t.legacy && this.server === "c.us"
                    ? "s.whatsapp.net"
                    : this.server;
              (t.formatFull === !0 || t.formatIncludeDevice === !0
                ? (n = ":" + (this.device || 0))
                : (n =
                    this.device != null && this.device !== 0
                      ? ":" + this.device
                      : ""),
                (t.formatFull === !0 || t.formatIncludeAgent === !0) &&
                  (e = ".0"));
              var o = t.forLog === !0 ? this.$1() : this.user;
              if (
                t.forLog === !0 ||
                t.formatFull === !0 ||
                (t.legacy && this.server === "c.us")
              )
                return [o, e, n, "@", r].join("");
            }
            return this._serialized;
          }),
          (n.toLogString = function () {
            return this.toString({ forLog: !0, legacy: !1 });
          }),
          (n.toJid = function () {
            return this.toString({ legacy: !0 });
          }),
          (n.getJidServer = function () {
            return this.server === "c.us"
              ? o("WAJids").WA_USER_JID_SUFFIX
              : this.server;
          }),
          (n.getDeviceId = function () {
            var e = this.device;
            return e == null ? 0 : e;
          }),
          (n.equals = function (n) {
            return n instanceof t && this.toString() === n.toString();
          }),
          (n.isLessThan = function (n) {
            return n instanceof t && this.toString() < n.toString();
          }),
          (n.isGreaterThan = function (n) {
            return n instanceof t && this.toString() > n.toString();
          }),
          (n.isCompanion = function () {
            return (
              this.device != null &&
              this.device !== o("WAJids").DEFAULT_DEVICE_ID
            );
          }),
          (n.isSameAccountAndAddressingMode = function (t) {
            if (
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              (this.device === C || t.device === C)
            ) {
              o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "isSameAccount check for hosted : ",
                      " : ",
                      "",
                    ])),
                  this.toLogString(),
                  t.toLogString(),
                )
                .tags("coex");
              var e = !1;
              switch (this.server) {
                case "hosted":
                  e = t.server === "c.us";
                  break;
                case "hosted.lid":
                  e = t.server === "lid";
                  break;
                case "c.us":
                  e = t.server === "hosted";
                  break;
                case "lid":
                  e = t.server === "hosted.lid";
                  break;
                default:
                  break;
              }
              if (e) return this.user === t.user;
            }
            return this.server === t.server && this.user === t.user;
          }),
          (n.isUser = function () {
            return (
              this.server === "c.us" ||
              this.server === "lid" ||
              this.server === "bot" ||
              this.server === "hosted" ||
              this.server === "hosted.lid"
            );
          }),
          (n.isLid = function () {
            return this.server === "lid";
          }),
          (n.isHostedLid = function () {
            return this.server === "hosted.lid";
          }),
          (n.isUserNotPSA = function () {
            return this.isUser() && !this.isPSA();
          }),
          (n.isRegularUser = function () {
            return this.isUser() && !this.isPSA() && !this.isBot();
          }),
          (n.isRegularUserPn = function () {
            return this.isRegularUser() && !this.isLid();
          }),
          (n.isBroadcast = function () {
            return this.server === "broadcast";
          }),
          (n.isBroadcastList = function () {
            return this.server === "broadcast" && !this.isStatus();
          }),
          (n.isOfficialBizAccount = function () {
            return this.toString() === h;
          }),
          (n.isEligibleForUSync = function () {
            return this.isUser() && !this.isPSA();
          }),
          (n.isGroup = function () {
            return this.server === "g.us";
          }),
          (n.isGroupCall = function () {
            return this.server === "call";
          }),
          (n.isServer = function () {
            return (
              this.user.toLowerCase() === "server" && this.server === "c.us"
            );
          }),
          (n.isPSA = function () {
            return this.user === "0" && this.server === "c.us";
          }),
          (n.isIAS = function () {
            return this.user === "16508638904" && this.server === "c.us";
          }),
          (n.isAiHub = function () {
            return this.user === "165332417282214" && this.server === "lid";
          }),
          (n.isStatus = function () {
            return (
              this.user.toLowerCase() === "status" &&
              this.server === "broadcast"
            );
          }),
          (n.isSupportAccount = function () {
            return this.isLid()
              ? o("WAWebABPropsSupportLid").getIsWaSupportLid(this.user)
              : r("WAWebABPropsSupportGroup")(this.user);
          }),
          (n.isCAPISupportAccount = function () {
            return this.isLid()
              ? o("WAWebABPropsSupportLid").getIsWaCAPISupportLid(this.user)
              : r("WAWebABPropsCAPISupportNumber")(this.user);
          }),
          (n.isNewsletter = function () {
            return this.server === "newsletter";
          }),
          (n.isBot = function () {
            return this.isPnBot() || this.isFbidBot();
          }),
          (n.isPnBot = function () {
            return (
              this.server === "c.us" &&
              y.test(this.user) &&
              (this.device == null || this.device === 0)
            );
          }),
          (n.isFbidBot = function () {
            return (
              this.server === "bot" &&
              (this.device == null || this.device === 0)
            );
          }),
          (n.toJSON = function () {
            return this.toString();
          }),
          (n.isHosted = function () {
            return (
              this.server === "hosted" ||
              this.server === "hosted.lid" ||
              this.device === C
            );
          }),
          (t.isXWid = function (n, r) {
            return o("WATypeUtils").isString(r)
              ? r.split("@")[1] === n
              : r instanceof t
                ? r.server === n
                : (r !== void 0 &&
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "wid:isXWid called on typeof: ",
                          "",
                        ])),
                      typeof r,
                    ),
                  !1);
          }),
          (t.isUser = function (n) {
            return (
              t.isXWid("c.us", n) ||
              t.isXWid(o("WAJids").WA_USER_JID_SUFFIX, n) ||
              t.isXWid("lid", n) ||
              t.isXWid("bot", n)
            );
          }),
          (t.isStringLid = function (n) {
            return t.isXWid("lid", n);
          }),
          (t.isBroadcast = function (n) {
            return t.isXWid("broadcast", n);
          }),
          (t.isGroup = function (n) {
            return t.isXWid("g.us", n);
          }),
          (t.isNewsletter = function (n) {
            return t.isXWid("newsletter", n);
          }),
          (t.isHosted = function (n) {
            return o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
              ? t.isXWid("hosted", n) || t.isXWid("hosted.lid", n)
              : !1;
          }),
          (t.isFbidBot = function (n) {
            return t.isXWid("bot", n);
          }),
          (t.isPnBot = function (n) {
            var e,
              r,
              o =
                (e =
                  n == null || (r = n.toString()) == null
                    ? void 0
                    : r.split("@")[0]) != null
                  ? e
                  : "";
            return t.isXWid("c.us", n) && y.test(o);
          }),
          (t.isBot = function (n) {
            return t.isFbidBot(n) || t.isPnBot(n);
          }),
          (t.isRegularUserNoImply = function (t) {
            return S(t);
          }),
          (t.isGroupCall = function (n) {
            return t.isXWid("call", n);
          }),
          (t.isWid = function (n) {
            return o("WATypeUtils").isString(n)
              ? o("WAWebWidValidator").validateWid(
                  n,
                  o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled(),
                )
              : n instanceof t;
          }),
          (t.isServer = function (n) {
            return o("WATypeUtils").isString(n)
              ? n.toLowerCase() === p
              : n instanceof t
                ? n.isServer()
                : !1;
          }),
          (t.isPSA = function (n) {
            return o("WATypeUtils").isString(n)
              ? n.toLowerCase() === _
              : n instanceof t
                ? n.isPSA()
                : !1;
          }),
          (t.isIAS = function (n) {
            return o("WATypeUtils").isString(n)
              ? n.toLowerCase() === f
              : n instanceof t
                ? n.isIAS()
                : !1;
          }),
          (t.isAiHub = function (n) {
            return o("WATypeUtils").isString(n)
              ? n.toLowerCase() === g
              : n instanceof t
                ? n.isAiHub()
                : !1;
          }),
          (t.isStatus = function (n) {
            return o("WATypeUtils").isString(n)
              ? n.toLowerCase() === o("WAJids").STATUS_JID
              : n instanceof t
                ? n.isStatus()
                : !1;
          }),
          (t.isSupportAccount = function (n) {
            return o("WATypeUtils").isString(n)
              ? t.isStringLid(n)
                ? o("WAWebABPropsSupportLid").getIsWaSupportLid(n.split("@")[0])
                : r("WAWebABPropsSupportGroup")(n.split("@")[0])
              : n instanceof t
                ? n.isLid()
                  ? o("WAWebABPropsSupportLid").getIsWaSupportLid(n.user)
                  : n.isSupportAccount()
                : !1;
          }),
          (t.isCAPISupportAccount = function (n) {
            return o("WATypeUtils").isString(n)
              ? t.isStringLid(n)
                ? o("WAWebABPropsSupportLid").getIsWaCAPISupportLid(
                    n.split("@")[0],
                  )
                : r("WAWebABPropsCAPISupportNumber")(n.split("@")[0])
              : n instanceof t
                ? n.isLid()
                  ? o("WAWebABPropsSupportLid").getIsWaCAPISupportLid(n.user)
                  : n.isCAPISupportAccount()
                : !1;
          }),
          (t.isOfficialBizAccount = function (n) {
            return o("WATypeUtils").isString(n)
              ? n.toLowerCase() === h
              : n instanceof t
                ? n.isOfficialBizAccount()
                : !1;
          }),
          (t.isEligibleForUSync = function (n) {
            return t.isUser(n) && !t.isPSA(n);
          }),
          (t.user = function (n) {
            if (o("WATypeUtils").isString(n)) return n.split("@")[0];
            if (n instanceof t) return n.user;
          }),
          (t.equals = function (n, r) {
            return !(n instanceof t) && !(r instanceof t)
              ? n === r
              : n instanceof t && n.equals(r);
          }),
          (t.compare = function (t, n) {
            var e = t.toJid(),
              r = n.toJid();
            return e < r ? -1 : e > r ? 1 : 0;
          }),
          t
        );
      })();
    function S(e) {
      return v.isUser(e) && !v.isPSA(e) && !v.isBot(e);
    }
    l.default = v;
  },
  98,
);
