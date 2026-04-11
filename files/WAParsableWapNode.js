__d(
  "WAParsableWapNode",
  [
    "WABinary",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAParsableXmlNode",
    "WASignalKeys",
    "WATimeUtils",
    "WAWap",
    "WAWapJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, "XmppParsingFailure: " + t + ": " + n) || this),
            (r.name = "XmppParsingFailure"),
            (r.parser = t),
            (r.reason = n),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.toString = function () {
            return "XmppParsingFailure: " + this.parser + ": " + this.reason;
          }),
          t
        );
      })(babelHelpers.wrapNativeSuper(Error)),
      c = (function (t) {
        function n(e, n) {
          return t.call(this, e, n) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.assertFromServer = function () {
            var e = this.attrString("from");
            e !== o("WAJids").WA_SERVER_JID_SUFFIX &&
              this.throw(
                'to have "from"="s.whatsapp.net", but instead has "' + e + '"',
              );
          }),
          (a.attrUserJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.botJid != null
              ? n.botJid
              : n.userJid == null
                ? this.throw(
                    'to have "' +
                      t +
                      '"={UserJid}, but instead has "' +
                      e +
                      '"',
                  )
                : n.userJid;
          }),
          (a.attrPhoneUserJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.jidType === "phoneUser"
              ? n.userJid
              : this.throw(
                  'to have "' +
                    t +
                    '"={PhoneUserJid}, but instead has "' +
                    e +
                    '"',
                );
          }),
          (a.attrLidUserJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.jidType === "lidUser"
              ? n.userJid
              : this.throw(
                  'to have "' +
                    t +
                    '"={LidUserJid}, but instead has "' +
                    e +
                    '"',
                );
          }),
          (a.maybeAttrUserJid = function (t) {
            return this.hasAttr(t) ? this.attrUserJid(t) : null;
          }),
          (a.maybeAttrPhoneUserJid = function (t) {
            return this.hasAttr(t) ? this.attrPhoneUserJid(t) : null;
          }),
          (a.maybeAttrLidUserJid = function (t) {
            return this.hasAttr(t) ? this.attrLidUserJid(t) : null;
          }),
          (a.attrGroupJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.groupJid == null
              ? this.throw(
                  'to have "' + t + '"={GroupJid}, but instead has "' + e + '"',
                )
              : n.groupJid;
          }),
          (a.maybeAttrGroupJid = function (t) {
            return this.hasAttr(t) ? this.attrGroupJid(t) : null;
          }),
          (a.attrChatJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.userJid != null
              ? n.userJid
              : n.groupJid != null
                ? n.groupJid
                : n.botJid != null
                  ? n.botJid
                  : this.throw(
                      'to have "' +
                        t +
                        '"={ChatJid}, but instead has "' +
                        e +
                        '"',
                    );
          }),
          (a.attrPhoneChatJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.jidType === "phoneUser"
              ? n.userJid
              : n.jidType === "group"
                ? n.groupJid
                : this.throw(
                    'to have "' +
                      t +
                      '"={ChatJid}, but instead has "' +
                      e +
                      '"',
                  );
          }),
          (a.attrDeviceJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.deviceJid != null
              ? n.deviceJid
              : n.userJid != null
                ? o("WAJids").defaultDeviceJidForUser(n.userJid)
                : n.hostedDeviceJid != null
                  ? n.hostedDeviceJid
                  : n.hostedLidDeviceJid != null
                    ? n.hostedLidDeviceJid
                    : n.botJid != null
                      ? n.botJid
                      : this.throw(
                          'to have "' +
                            t +
                            '"={DeviceJid}, but instead has "' +
                            e +
                            '"',
                        );
          }),
          (a.attrPhoneDeviceJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.jidType === "phoneDevice"
              ? n.deviceJid
              : n.jidType === "phoneUser"
                ? o("WAJids").defaultPhoneDeviceJidForUser(n.userJid)
                : this.throw(
                    'to have "' +
                      t +
                      '"={PhoneDeviceJid}, but instead has "' +
                      e +
                      '"',
                  );
          }),
          (a.attrLidDeviceJid = function (t) {
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.jidType === "lidDevice"
              ? n.deviceJid
              : n.jidType === "lidUser"
                ? o("WAJids").defaultLidDeviceJidForLidUserJid(n.userJid)
                : this.throw(
                    'to have "' +
                      t +
                      '"={LidDeviceJid}, but instead has "' +
                      e +
                      '"',
                  );
          }),
          (a.attrDeviceId = function (t) {
            var e = this.attrInt(t);
            return o("WAJids").interpretAsDeviceId(e);
          }),
          (a.attrFromJidChat = function () {
            var t = this.attrJidWithType();
            switch (t.jidType) {
              case "msgrUser": {
                var n = t.userJid,
                  a = o("WAJids").defaultDeviceJidForUser(n);
                return { type: "device", chat: n, deviceJid: a, author: a };
              }
              case "interopUser": {
                var i = t.userJid,
                  l = o("WAJids").defaultDeviceJidForUser(i);
                return { type: "device", chat: i, deviceJid: l, author: l };
              }
              case "phoneUser": {
                var s = t.userJid,
                  u = o("WAJids").defaultDeviceJidForUser(s);
                return { type: "device", chat: s, deviceJid: u, author: u };
              }
              case "lidUser": {
                var c = t.userJid,
                  d = o("WAJids").defaultLidDeviceJidForLidUserJid(c);
                return { type: "device", chat: c, deviceJid: d, author: d };
              }
              case "phoneDevice": {
                var m = t.deviceJid;
                return {
                  type: "device",
                  chat: o("WAJids").extractUserJid(m),
                  deviceJid: m,
                  author: m,
                };
              }
              case "msgrDevice": {
                var p = t.deviceJid;
                return {
                  type: "device",
                  chat: o("WAJids").extractUserJid(p),
                  deviceJid: p,
                  author: p,
                };
              }
              case "interopDevice": {
                var _ = t.deviceJid;
                return {
                  type: "device",
                  chat: o("WAJids").extractUserJid(_),
                  deviceJid: _,
                  author: _,
                };
              }
              case "lidDevice": {
                var f = t.deviceJid;
                return {
                  type: "device",
                  chat: o("WAJids").extractUserJid(f),
                  deviceJid: f,
                  author: f,
                };
              }
              case "group": {
                var g = this.hasAttr("participant")
                  ? this.attrDeviceJid("participant")
                  : null;
                return g == null
                  ? this.throw("expected to have participant JID for group")
                  : {
                      type: "group",
                      chat: t.groupJid,
                      groupJid: t.groupJid,
                      author: g,
                    };
              }
              case "broadcast": {
                var h = this.hasAttr("participant")
                  ? this.attrDeviceJid("participant")
                  : null;
                return h == null
                  ? this.throw("expected to have participant JID for group")
                  : {
                      type: "broadcast",
                      broadcastJid: t.broadcastJid,
                      chat: o("WAJids").extractUserJid(h),
                      author: h,
                    };
              }
              case "hosted": {
                var y = t.hostedDeviceJid;
                return {
                  type: "device",
                  chat: o("WAJids").extractUserJid(y),
                  deviceJid: y,
                  author: y,
                };
              }
              case "hostedLid": {
                var C = t.hostedLidDeviceJid;
                return {
                  type: "device",
                  chat: o("WAJids").extractUserJid(C),
                  deviceJid: C,
                  author: C,
                };
              }
              case "call":
                throw (
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ParsableWapNode: attrFromJid() is called with ",
                        "",
                      ])),
                    t.callJid,
                  ),
                  r("err")(
                    "ParsableWapNode: attrFromJid() does not support CallJid",
                  )
                );
              default:
                return (
                  t.jidType,
                  this.throw(
                    "attrFromJidChat should not be used with jid of type " +
                      t.jidType,
                  )
                );
            }
          }),
          (a.attrFromJidPhoneChat = function () {
            var e = this.attrJidWithType();
            switch (e.jidType) {
              case "phoneUser": {
                var t = e.userJid,
                  n = o("WAJids").defaultPhoneDeviceJidForUser(t);
                return { type: "device", chat: t, deviceJid: n, author: n };
              }
              case "phoneDevice": {
                var a = e.deviceJid;
                return {
                  type: "device",
                  chat: o("WAJids").extractPhoneUserJid(a),
                  deviceJid: a,
                  author: a,
                };
              }
              case "group": {
                var i = this.hasAttr("participant")
                  ? this.attrPhoneDeviceJid("participant")
                  : null;
                return i == null
                  ? this.throw("expected to have participant JID for group")
                  : {
                      type: "group",
                      chat: e.groupJid,
                      groupJid: e.groupJid,
                      author: i,
                    };
              }
              case "broadcast": {
                var l = this.hasAttr("participant")
                  ? this.attrPhoneDeviceJid("participant")
                  : null;
                return l == null
                  ? this.throw("expected to have participant JID for group")
                  : {
                      type: "broadcast",
                      broadcastJid: e.broadcastJid,
                      chat: o("WAJids").extractPhoneUserJid(l),
                      author: l,
                    };
              }
              case "call":
                throw (
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "ParsableWapNode: attrFromJid() is called with ",
                        "",
                      ])),
                    e.callJid,
                  ),
                  r("err")(
                    "ParsableWapNode: attrFromJid() does not support CallJid",
                  )
                );
              default:
                return (
                  e.jidType,
                  this.throw(
                    "attrFromJidChat should not be used with jid of type " +
                      e.jidType,
                  )
                );
            }
          }),
          (a.attrFromPhoneJid = function () {
            var e = this.attrJidWithType();
            if (e.jidType === "status") {
              var t = this.hasAttr("participant")
                ? this.attrPhoneDeviceJid("participant")
                : null;
              return t == null
                ? this.throw("to have participant for status msg")
                : { type: "status", author: t };
            } else return this.attrFromJidPhoneChat();
          }),
          (a.attrFromJid = function () {
            var e = this.attrJidWithType();
            if (e.jidType === "status") {
              var t = this.hasAttr("participant")
                ? this.attrPhoneDeviceJid("participant")
                : null;
              return t == null
                ? this.throw("to have participant for status msg")
                : { type: "status", author: t };
            }
            return e.jidType === "newsletter"
              ? { type: "newsletter", newsletterJid: e.newsletterJid }
              : e.jidType === "hosted"
                ? { type: "hosted", hostedDeviceJid: e.hostedDeviceJid }
                : e.jidType === "hostedLid"
                  ? {
                      type: "hostedLid",
                      hostedLidDeviceJid: e.hostedLidDeviceJid,
                    }
                  : this.attrFromJidChat();
          }),
          (a.attrJidWithType = function (t) {
            t === void 0 && (t = "from");
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.jidType === "unknown"
              ? this.throw(
                  'to have "' + t + '"={Jid}, but instead has "' + e + '"',
                )
              : n;
          }),
          (a.attrWapJid = function (t) {
            t === void 0 && (t = "from");
            var e = this.attrString(t),
              n = o("WAJids").interpretAndValidateJid(e);
            return n.jidType === "unknown"
              ? o("WAWapJid").WapJid.create(null, e)
              : o("WAWap").JID(o("WAJids").extractFromJid(n));
          }),
          (a.attrLongInt = function (t) {
            var e = this.attrString(t);
            return o("WALongInt").decimalStringToLongInt(e);
          }),
          (a.attrTime = function (t) {
            return o("WATimeUtils").castToUnixTime(this.attrInt(t));
          }),
          (a.maybeAttrTime = function (t) {
            return this.hasAttr(t) ? this.attrTime(t) : null;
          }),
          (a.attrFutureTime = function (t) {
            var e = this.attrInt(t);
            return o("WATimeUtils").futureUnixTime(e);
          }),
          (a.contentString = function () {
            if (this.hasChildren())
              return this.throw(
                "to have string content, but has children instead",
              );
            if (this.hasContent()) {
              var e = new (o("WABinary").Binary)(this.contentBytes());
              return e.readString(e.size());
            } else return this.throw("to have content");
          }),
          (a.decodeAsString = function (t) {
            return o("WAWap").decodeAsString(t);
          }),
          (a.contentSerializedPubKey = function () {
            return this.hasContent()
              ? o("WASignalKeys").serializeIdentity(this.contentBytes())
              : this.throw("to have content");
          }),
          (a.createParseError = function (t) {
            return new u(this.name(), "expected <" + this.tag() + "> " + t);
          }),
          (a.throw = function (t) {
            throw this.createParseError(t);
          }),
          n
        );
      })(o("WAParsableXmlNode").ParsableXmlNode);
    ((l.XmppParsingFailure = u), (l.ParsableWapNode = c));
  },
  98,
);
