__d(
  "WAWap",
  [
    "WAAssertUnreachable",
    "WABinary",
    "WACryptoDependencies",
    "WAJids",
    "WALongInt",
    "WATextEncoding",
    "WAWapDict",
    "WAWapJid",
    "WAXmlFormatter",
    "WAXmlNode",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = o("WAJids")).MSGR_USER_DOMAIN.replace("@", ""),
      c = e.WA_USER_DOMAIN.replace("@", ""),
      d = e.LID_DOMAIN.replace("@", ""),
      m = e.INTEROP_DOMAIN.replace("@", ""),
      p = e.HOSTED_DOMAIN.replace("@", ""),
      _ = 2,
      f = 128,
      g = 0,
      h = 236,
      y = 237,
      C = 238,
      b = 239,
      v = [h, y, C, b],
      S = 245,
      R = 246,
      L = 247,
      E = 248,
      k = 249,
      I = 250,
      T = 251,
      D = 252,
      x = 253,
      $ = 254,
      P = 255,
      N = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-",
        ".",
        "\uFFFD",
        "\uFFFD",
        "\uFFFD",
        "\uFFFD",
      ],
      M = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ],
      w = "",
      A = 1,
      F = { sentinel: "DROP_ATTR" },
      O = (s = o("WAWapJid")).WapJid.create(null, "g.us"),
      B = s.WapJid.create(null, e.WA_SERVER_JID_SUFFIX),
      W = s.WapJid.create("status", "broadcast"),
      q = s.WapJid.create(null, "newsletter"),
      U = s.WapJid.create(null, "hosted"),
      V = s.WapJid.create(null, "hosted.lid"),
      H = s.WapJid.create(null, "call"),
      G = {},
      z = !1;
    function j() {
      z = !0;
    }
    var K = o("WATextEncoding").newTextEncoder(),
      Q = (function () {
        function e(e, t, n) {
          (t === void 0 && (t = G),
            n === void 0 && (n = null),
            (this.tag = e),
            (this.attrs = t),
            (this.content = n));
        }
        var t = e.prototype;
        return (
          (t.toString = function () {
            var e = "<" + this.tag;
            e += o("WAXmlNode").attrsToString(this.attrs);
            var t = this.content;
            return (
              Array.isArray(t)
                ? (e += ">" + t.map(String).join("") + "</" + this.tag + ">")
                : t
                  ? (e +=
                      ">" +
                      o("WAXmlNode").uint8ArrayToDebugString(t) +
                      "</" +
                      this.tag +
                      ">")
                  : (e += " />"),
              z && (e = r("WAXmlFormatter")(e)),
              e
            );
          }),
          e
        );
      })();
    function X(e, t, n) {
      var a = null;
      if (t && t.children != null)
        throw r("err")(
          'Children should not be passed via props (see eslint check "react/no-children-props")',
        );
      if (Array.isArray(n)) a = n.filter(Boolean);
      else if (typeof n == "string")
        a = o("WABinary").Binary.build(n).readByteArrayView();
      else if (n instanceof ArrayBuffer) a = new Uint8Array(n);
      else if (n instanceof Uint8Array) a = n;
      else {
        for (var i = [], l = 2; l < arguments.length; l++) {
          var s = arguments[l];
          s && i.push(s);
        }
        a = i;
      }
      Array.isArray(a) && a.length === 0 && (a = null);
      var u = {};
      if (t) {
        var c = t;
        Object.keys(c).forEach(function (t) {
          if (!["__self", "__source"].includes(t)) {
            var n = c[t];
            if (n == null)
              throw r("err")("Attr " + t + " in <" + e + "> is null");
            n !== F && (u[t] = n);
          }
        });
      }
      return new Q(e, u, a);
    }
    var Y = X;
    function J(e) {
      return e instanceof o("WAWapJid").WapJid ? e.toString() : e;
    }
    function Z(e) {
      var t = e.content;
      return (
        Array.isArray(t)
          ? (t = t.map(Z))
          : typeof t == "string" &&
            (t = o("WABinary").Binary.build(t).readByteArrayView()),
        new Q(e.tag, e.attrs || G, t)
      );
    }
    function ee(e) {
      var t = e instanceof Q ? e : Z(e),
        n = new (o("WABinary").Binary)();
      te(t, n);
      var r = 0,
        a = n.readByteArrayView(),
        i = new Uint8Array(1 + a.length);
      return ((i[0] = r), i.set(a, 1), i);
    }
    function te(e, t) {
      if (e == null) t.writeUint8(g);
      else if (e instanceof Q) re(e, t);
      else if (e instanceof o("WAWapJid").WapJid) ne(e, t);
      else if (typeof e == "string") le(e, t);
      else if (e instanceof Uint8Array) ue(e, t);
      else {
        var n = typeof e;
        throw r("err")("Invalid payload type " + n);
      }
    }
    function ne(e, t) {
      var n = e.getInnerJid();
      if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_U) {
        var r = n.device,
          a = n.domainType,
          i = n.user;
        (t.writeUint8(L), t.writeUint8(a), t.writeUint8(r), te(i, t));
      } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_FB) {
        var l = n.device,
          s = n.user;
        (t.writeUint8(R), te(s, t), t.writeUint16(l), te(u, t));
      } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_INTEROP) {
        var c = n.device,
          d = n.integrator,
          m = n.user;
        (t.writeUint8(S), te(m, t), t.writeUint16(c), t.writeUint16(d));
      } else {
        var p = n.server,
          _ = n.user;
        (t.writeUint8(I), _ != null ? te(_, t) : t.writeUint8(g), te(p, t));
      }
    }
    function re(e, t) {
      if (e.tag === void 0) {
        (t.writeUint8(E), t.writeUint8(g));
        return;
      }
      var n = 1;
      (e.attrs && (n += Object.keys(e.attrs).length * 2),
        e.content && n++,
        n < 256
          ? (t.writeUint8(E), t.writeUint8(n))
          : n < 65536 && (t.writeUint8(k), t.writeUint16(n)),
        te(e.tag, t),
        e.attrs &&
          Object.keys(e.attrs).forEach(function (n) {
            (le(n, t), te(e.attrs[n], t));
          }));
      var r = e.content;
      if (Array.isArray(r)) {
        r.length < 256
          ? (t.writeUint8(E), t.writeUint8(r.length))
          : r.length < 65536 && (t.writeUint8(k), t.writeUint16(r.length));
        for (var o = 0; o < r.length; o++) re(r[o], t);
      } else r && te(r, t);
    }
    var oe, ae;
    function ie(e) {
      for (var t = new Map(), n = 0; n < e.length; n++) t.set(e[n], n);
      return t;
    }
    function le(e, t) {
      if (e === "") {
        (t.writeUint8(D), t.writeUint8(0));
        return;
      }
      oe == null && (oe = ie(o("WAWapDict").SINGLE_BYTE_TOKEN));
      var n = oe.get(e);
      if (n != null) {
        t.writeUint8(n + 1);
        return;
      }
      if (ae == null) {
        ae = [];
        for (var r = 0; r < o("WAWapDict").DICTIONARIES.length; ++r)
          ae.push(ie(o("WAWapDict").DICTIONARIES[r]));
      }
      for (var a = 0; a < ae.length; ++a) {
        var i = ae[a].get(e);
        if (i != null) {
          (t.writeUint8(v[a]), t.writeUint8(i));
          return;
        }
      }
      var l = o("WABinary").numUtf8Bytes(e);
      if (l < 128) {
        var s = /[^0-9.-]+?/,
          u = /[^0-9A-F]+?/;
        if (s.exec(e)) {
          if (!u.exec(e)) {
            se(e, T, t);
            return;
          }
        } else {
          se(e, P, t);
          return;
        }
      }
      (ce(l, t), t.writeString(e));
    }
    function se(e, t, n) {
      var o = e.length % 2 === 1;
      n.writeUint8(t);
      var a = Math.ceil(e.length / 2);
      (o && (a |= f), n.writeUint8(a));
      for (var i = 0, l = 0; l < e.length; l++) {
        var s = e.charCodeAt(l),
          u = null;
        if (
          (48 <= s && s <= 57
            ? (u = s - 48)
            : t === P
              ? s === 45
                ? (u = 10)
                : s === 46 && (u = 11)
              : t === T && 65 <= s && s <= 70 && (u = s - 55),
          u == null)
        )
          throw r("err")("Cannot nibble encode " + s);
        l % 2 === 0
          ? ((i = u << 4), l === e.length - 1 && ((i |= 15), n.writeUint8(i)))
          : ((i |= u), n.writeUint8(i));
      }
    }
    function ue(e, t) {
      (ce(e.length, t), t.writeByteArray(e));
    }
    function ce(e, t) {
      if (e < 256) (t.writeUint8(D), t.writeUint8(e));
      else if (e < 1048576)
        (t.writeUint8(x),
          t.writeUint8((e >>> 16) & 255),
          t.writeUint8((e >>> 8) & 255),
          t.writeUint8(e & 255));
      else if (e < 4294967296) (t.writeUint8($), t.writeUint32(e));
      else
        throw r("err")(
          "Binary with length " + e + " is too big for WAP protocol",
        );
    }
    function de(e, t) {
      var n = new (o("WABinary").Binary)(e),
        r = n.readUint8(),
        a = r & _;
      return a
        ? t(n.readByteArrayView()).then(function (e) {
            return fe(new (o("WABinary").Binary)(e));
          })
        : Promise.resolve(fe(n));
    }
    function me(e) {
      var t = new (o("WABinary").Binary)(e),
        n = t.readUint8(),
        a = n & _;
      if (a)
        throw r("err")("Cannot pass compressed stanza to decodeStanzaDebug");
      return fe(t);
    }
    function pe(e, t) {
      var n = e.readUint8();
      if (n === g) return null;
      if (n === E) return _e(e, e.readUint8());
      if (n === k) return _e(e, e.readUint16());
      if (n === D) {
        var a = e.readUint8();
        return Se(e, a, t);
      }
      if (n === x) {
        var i = e.readUint8(),
          l = e.readUint8(),
          s = e.readUint8(),
          u = ((i & 15) << 16) + (l << 8) + s;
        return Se(e, u, t);
      }
      if (n === $) {
        var c = e.readUint32();
        return Se(e, c, t);
      }
      if (n === I) return ye(e);
      if (n === R) return Ce(e);
      if (n === S) return be(e);
      if (n === L) return ve(e);
      if (n === P) {
        var d = e.readUint8(),
          m = d >>> 7,
          p = d & 127;
        return Re(e, N, m, p);
      }
      if (n === T) {
        var _ = e.readUint8(),
          f = _ >>> 7,
          y = _ & 127;
        return Re(e, M, f, y);
      }
      if (n <= 0 || n >= 240) throw r("err")("Unable to decode WAP buffer");
      if (n >= h && n <= b) {
        var C = n - h,
          v = o("WAWapDict").DICTIONARIES[C];
        if (v === void 0) throw r("err")("Missing WAP dictionary " + C);
        var w = e.readUint8(),
          A = v[w];
        if (A === void 0)
          throw r("err")("Invalid value index " + w + " in dict " + C);
        return A;
      }
      var F = o("WAWapDict").SINGLE_BYTE_TOKEN[n - 1];
      if (F === void 0) throw r("err")("Undefined token with index " + n);
      return F;
    }
    function _e(e, t) {
      for (var n = [], r = 0; r < t; r++) n.push(fe(e));
      return n;
    }
    function fe(e) {
      var t = e.readUint8(),
        n;
      if (t === E) n = e.readUint8();
      else if (t === k) n = e.readUint16();
      else
        throw r("err")(
          "Failed to decode node since type byte " + String(t) + " is invalid",
        );
      var a = void 0,
        i = null;
      if (n === 0)
        throw r("err")("Failed to decode node, list cannot be empty");
      var l = ge(e);
      for (n -= 1; n > 1; ) {
        a || (a = {});
        var s = ge(e),
          u = pe(e, !0);
        ((a[s] = u), (n -= 2));
      }
      return (
        n === 1 &&
          ((i = pe(e, !1)),
          i instanceof o("WAWapJid").WapJid && (i = String(i)),
          typeof i == "string" && (i = K.encode(i))),
        new Q(l, a, i)
      );
    }
    function ge(e) {
      var t = pe(e, !0);
      if (typeof t != "string")
        throw r("err")("WAWap:decodeString got invalid value, string expected");
      return t;
    }
    function he(e) {
      var t = pe(e, !0);
      if (t != null && typeof t != "string")
        throw r("err")(
          "WAWap:decodeNullableString got invalid value, string expected",
        );
      return t;
    }
    function ye(e) {
      var t = he(e),
        n = ge(e);
      return o("WAWapJid").WapJid.create(t, n);
    }
    function Ce(e) {
      var t = ge(e),
        n = e.readUint16();
      return (ge(e), o("WAWapJid").WapJid.createFbJid(t, n));
    }
    function be(e) {
      var t = ge(e),
        n = e.readUint16(),
        r = e.readUint16();
      return (ge(e), o("WAWapJid").WapJid.createInteropJid(t, n, r));
    }
    function ve(e) {
      var t = null,
        n = e.readUint8();
      if (n === 0) t = o("WAWapJid").DomainType.WHATSAPP;
      else if (n === 1) t = o("WAWapJid").DomainType.LID;
      else if ((1 & n) === 0 && (128 & n) !== 0)
        t = o("WAWapJid").DomainType.HOSTED;
      else if (n === 129) t = o("WAWapJid").DomainType.HOSTED_LID;
      else throw r("err")("decodeJidU - Invalid domain type encoding " + n);
      var a = e.readUint8(),
        i = ge(e);
      return o("WAWapJid").WapJid.createJidU(i, t, a);
    }
    function Se(e, t, n) {
      return (
        n === void 0 && (n = !1),
        n ? e.readString(t) : e.readByteArrayView(t)
      );
    }
    function Re(e, t, n, r) {
      for (var o = new Array(r * 2 - n), a = 0; a < o.length - 1; a += 2) {
        var i = e.readUint8();
        ((o[a] = t[i >>> 4]), (o[a + 1] = t[i & 15]));
      }
      if (n) {
        var l = e.readUint8();
        o[o.length - 1] = t[l >>> 4];
      }
      return o.join("");
    }
    function Le() {
      if (!w) {
        var e = new Uint16Array(2);
        (o("WACryptoDependencies").getCrypto().getRandomValues(e),
          (w = String(e[0]) + "." + String(e[1]) + "-"));
      }
      return "" + w + A++;
    }
    function Ee(e) {
      switch (e.type) {
        case "group":
          return e.groupJid;
        case "status":
          return o("WAJids").STATUS_JID;
        case "device":
          return e.deviceJid;
        case "newsletter":
          return e.newsletterJid;
        case "hosted":
          return e.hostedDeviceJid;
        case "hostedLid":
          return e.hostedLidDeviceJid;
        default:
          return (e.type, e.broadcastJid);
      }
    }
    function ke(e) {
      switch (e.type) {
        case "group":
          return e.author;
        case "status":
          return e.author;
        case "broadcast":
          return e.author;
        default:
          return (e.type, null);
      }
    }
    function Ie(e) {
      return e.type === "status" || e.type === "group" || e.type === "broadcast"
        ? De(e.author)
        : F;
    }
    function Te(e) {
      return De(Ee(e));
    }
    function De(e) {
      var t = o("WAJids").validateDomainJid(e);
      if (t != null) return xe(t);
      var n = e.split("@"),
        a = n[0],
        i = n[1],
        l = null,
        s = null;
      if (
        (i === c ||
          i === u ||
          i === m ||
          i === d ||
          i === p ||
          i === o("WAJids").HOSTED_LID_SUFFIX) &&
        a.indexOf(":") !== -1
      ) {
        var _ = a.split(":");
        ((a = _[0]), (l = _[1]), (s = parseInt(l, 10)));
      }
      if (i === m) {
        var f = a.split("-"),
          g = f[0],
          h = f[1];
        return o("WAWapJid").WapJid.createInteropJid(h, s, parseInt(g, 10));
      } else if (i === u) return o("WAWapJid").WapJid.createFbJid(a, s);
      var y = null;
      if (i === d) y = o("WAWapJid").DomainType.LID;
      else if (i === p) {
        if (s !== 99) throw r("err")("wid unexpected deviceId");
        y = o("WAWapJid").DomainType.HOSTED;
      } else if (i === o("WAJids").HOSTED_LID_SUFFIX) {
        if (s !== 99) throw r("err")("lid invalid deviceId");
        y = o("WAWapJid").DomainType.HOSTED_LID;
      } else y = o("WAWapJid").DomainType.WHATSAPP;
      return s != null && s !== 0
        ? o("WAWapJid").WapJid.createJidU(a, y, s)
        : o("WAWapJid").WapJid.create(a, i);
    }
    function xe(e) {
      return e === "s.whatsapp.net"
        ? B
        : e === "g.us"
          ? O
          : e === "newsletter"
            ? q
            : e === "call"
              ? H
              : r("WAAssertUnreachable")(e);
    }
    function $e(e) {
      return De(e);
    }
    function Pe(e) {
      return De(e);
    }
    function Ne(e) {
      return De(e);
    }
    function Me(e) {
      return De(e);
    }
    function we(e) {
      return De(e);
    }
    function Ae(e) {
      return De(e);
    }
    function Fe(e) {
      return e.jidType === "phoneDevice" ||
        e.jidType === "msgrDevice" ||
        e.jidType === "lidDevice"
        ? De(e.deviceJid)
        : e.jidType === "phoneUser" ||
            e.jidType === "msgrUser" ||
            e.jidType === "lidUser"
          ? De(e.userJid)
          : e.jidType === "group"
            ? De(e.groupJid)
            : e.jidType === "status"
              ? De(e.statusJid)
              : e.jidType === "call"
                ? De(e.callJid)
                : e.jidType === "interopDevice"
                  ? De(e.deviceJid)
                  : e.jidType === "interopUser"
                    ? De(e.userJid)
                    : e.jidType === "newsletter"
                      ? De(e.newsletterJid)
                      : e.jidType === "hosted"
                        ? De(e.hostedDeviceJid)
                        : e.jidType === "hostedLid"
                          ? De(e.hostedLidDeviceJid)
                          : e.jidType === "bot"
                            ? De(e.botJid)
                            : (e.jidType, De(e.broadcastJid));
    }
    function Oe(e) {
      return e;
    }
    function Be(e) {
      return e.toString();
    }
    function We(e) {
      return e;
    }
    function qe(e) {
      return e;
    }
    function Ue(e) {
      return e == null ? F : e;
    }
    function Ve(e) {
      return e.toString();
    }
    function He(e) {
      return o("WALongInt").longIntToDecimalString(e);
    }
    function Ge(e, t) {
      t === void 0 && (t = 4);
      for (var n = e, r = new Uint8Array(t), o = t - 1; o >= 0; o--)
        ((r[o] = n & 255), (n >>>= 8));
      return r;
    }
    ((l.DROP_ATTR = F),
      (l.G_US = O),
      (l.S_WHATSAPP_NET = B),
      (l.STATUS_BROADCAST = W),
      (l.NEWSLETTER = q),
      (l.HOSTED = U),
      (l.HOSTED_LID = V),
      (l.CALL = H),
      (l.enableXMLFormat = j),
      (l.WapNode = Q),
      (l.makeWapNode = X),
      (l.wap = Y),
      (l.decodeAsString = J),
      (l.makeStanza = Z),
      (l.encodeStanza = ee),
      (l.decodeStanza = de),
      (l.decodeStanzaDebug = me),
      (l.generateId = Le),
      (l.extractToJid = Ee),
      (l.extractParticipantJid = ke),
      (l.PARTICIPANT_JID = Ie),
      (l.TO_JID = Te),
      (l.JID = De),
      (l.DOMAIN_JID = xe),
      (l.USER_JID = $e),
      (l.DEVICE_JID = Pe),
      (l.GROUP_JID = Ne),
      (l.BROADCAST_JID = Me),
      (l.CALL_JID = we),
      (l.NEWSLETTER_JID = Ae),
      (l.TO_WAP_JID = Fe),
      (l.STANZA_ID = Oe),
      (l.SMAX_ID = Be),
      (l.CUSTOM_STRING = We),
      (l.CALL_ID = qe),
      (l.MAYBE_CUSTOM_STRING = Ue),
      (l.INT = Ve),
      (l.LONG_INT = He),
      (l.BIG_ENDIAN_CONTENT = Ge));
  },
  98,
);
