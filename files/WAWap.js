__d(
  "WAWap",
  [
    "WAAssertUnreachable",
    "WABinary",
    "WACryptoDependencies",
    "WAJids",
    "WALogger",
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
      u,
      c = (s = o("WAJids")).MSGR_USER_DOMAIN.replace("@", ""),
      d = s.WA_USER_DOMAIN.replace("@", ""),
      m = s.LID_DOMAIN.replace("@", ""),
      p = s.INTEROP_DOMAIN.replace("@", ""),
      _ = s.HOSTED_DOMAIN.replace("@", ""),
      f = 2,
      g = 128,
      h = 0,
      y = 236,
      C = 237,
      b = 238,
      v = 239,
      S = [y, C, b, v],
      R = 245,
      L = 246,
      E = 247,
      k = 248,
      I = 249,
      T = 250,
      D = 251,
      x = 252,
      $ = 253,
      P = 254,
      N = 255,
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
        "-",
        ".",
        "\uFFFD",
        "\uFFFD",
        "\uFFFD",
        "\uFFFD",
      ],
      w = [
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
      A = "",
      F = 1,
      O = { sentinel: "DROP_ATTR" },
      B = (u = o("WAWapJid")).WapJid.create(null, "g.us"),
      W = u.WapJid.create(null, s.WA_SERVER_JID_SUFFIX),
      q = u.WapJid.create("status", "broadcast"),
      U = u.WapJid.create(null, "newsletter"),
      V = u.WapJid.create(null, "hosted"),
      H = u.WapJid.create(null, "hosted.lid"),
      G = u.WapJid.create(null, "call"),
      z = {},
      j = !1;
    function K() {
      j = !0;
    }
    var Q = o("WATextEncoding").newTextEncoder(),
      X = (function () {
        function e(e, t, n) {
          (t === void 0 && (t = z),
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
              j && (e = r("WAXmlFormatter")(e)),
              e
            );
          }),
          e
        );
      })();
    function Y(e, t, n) {
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
            n !== O && (u[t] = n);
          }
        });
      }
      return new X(e, u, a);
    }
    var J = Y;
    function Z(e) {
      return e instanceof o("WAWapJid").WapJid ? e.toString() : e;
    }
    function ee(e) {
      var t = e.content;
      return (
        Array.isArray(t)
          ? (t = t.map(ee))
          : typeof t == "string" &&
            (t = o("WABinary").Binary.build(t).readByteArrayView()),
        new X(e.tag, e.attrs || z, t)
      );
    }
    function te(e) {
      var t = e instanceof X ? e : ee(e),
        n = new (o("WABinary").Binary)();
      ne(t, n);
      var r = 0,
        a = n.readByteArrayView(),
        i = new Uint8Array(1 + a.length);
      return ((i[0] = r), i.set(a, 1), i);
    }
    function ne(e, t) {
      if (e == null) t.writeUint8(h);
      else if (e instanceof X) oe(e, t);
      else if (e instanceof o("WAWapJid").WapJid) re(e, t);
      else if (typeof e == "string") se(e, t);
      else if (e instanceof Uint8Array) ce(e, t);
      else {
        var n = typeof e;
        throw r("err")("Invalid payload type " + n);
      }
    }
    function re(e, t) {
      var n = e.getInnerJid();
      if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_U) {
        var r = n.device,
          a = n.domainType,
          i = n.user;
        (t.writeUint8(E), t.writeUint8(a), t.writeUint8(r), ne(i, t));
      } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_FB) {
        var l = n.device,
          s = n.user;
        (t.writeUint8(L), ne(s, t), t.writeUint16(l), ne(c, t));
      } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_INTEROP) {
        var u = n.device,
          d = n.integrator,
          m = n.user;
        (t.writeUint8(R), ne(m, t), t.writeUint16(u), t.writeUint16(d));
      } else {
        var p = n.server,
          _ = n.user;
        (t.writeUint8(T), _ != null ? ne(_, t) : t.writeUint8(h), ne(p, t));
      }
    }
    function oe(e, t) {
      if (e.tag === void 0) {
        (t.writeUint8(k), t.writeUint8(h));
        return;
      }
      var n = 1;
      (e.attrs && (n += Object.keys(e.attrs).length * 2),
        e.content && n++,
        n < 256
          ? (t.writeUint8(k), t.writeUint8(n))
          : n < 65536 && (t.writeUint8(I), t.writeUint16(n)),
        ne(e.tag, t),
        e.attrs &&
          Object.keys(e.attrs).forEach(function (n) {
            (se(n, t), ne(e.attrs[n], t));
          }));
      var r = e.content;
      if (Array.isArray(r)) {
        r.length < 256
          ? (t.writeUint8(k), t.writeUint8(r.length))
          : r.length < 65536 && (t.writeUint8(I), t.writeUint16(r.length));
        for (var o = 0; o < r.length; o++) oe(r[o], t);
      } else r && ne(r, t);
    }
    var ae, ie;
    function le(e) {
      for (var t = new Map(), n = 0; n < e.length; n++) t.set(e[n], n);
      return t;
    }
    function se(e, t) {
      if (e === "") {
        (t.writeUint8(x), t.writeUint8(0));
        return;
      }
      ae == null && (ae = le(o("WAWapDict").SINGLE_BYTE_TOKEN));
      var n = ae.get(e);
      if (n != null) {
        t.writeUint8(n + 1);
        return;
      }
      if (ie == null) {
        ie = [];
        for (var r = 0; r < o("WAWapDict").DICTIONARIES.length; ++r)
          ie.push(le(o("WAWapDict").DICTIONARIES[r]));
      }
      for (var a = 0; a < ie.length; ++a) {
        var i = ie[a].get(e);
        if (i != null) {
          (t.writeUint8(S[a]), t.writeUint8(i));
          return;
        }
      }
      var l = o("WABinary").numUtf8Bytes(e);
      if (l < 128) {
        var s = /[^0-9.-]+?/,
          u = /[^0-9A-F]+?/;
        if (s.exec(e)) {
          if (!u.exec(e)) {
            ue(e, D, t);
            return;
          }
        } else {
          ue(e, N, t);
          return;
        }
      }
      (de(l, t), t.writeString(e));
    }
    function ue(e, t, n) {
      var o = e.length % 2 === 1;
      n.writeUint8(t);
      var a = Math.ceil(e.length / 2);
      (o && (a |= g), n.writeUint8(a));
      for (var i = 0, l = 0; l < e.length; l++) {
        var s = e.charCodeAt(l),
          u = null;
        if (
          (48 <= s && s <= 57
            ? (u = s - 48)
            : t === N
              ? s === 45
                ? (u = 10)
                : s === 46 && (u = 11)
              : t === D && 65 <= s && s <= 70 && (u = s - 55),
          u == null)
        )
          throw r("err")("Cannot nibble encode " + s);
        l % 2 === 0
          ? ((i = u << 4), l === e.length - 1 && ((i |= 15), n.writeUint8(i)))
          : ((i |= u), n.writeUint8(i));
      }
    }
    function ce(e, t) {
      (de(e.length, t), t.writeByteArray(e));
    }
    function de(e, t) {
      if (e < 256) (t.writeUint8(x), t.writeUint8(e));
      else if (e < 1048576)
        (t.writeUint8($),
          t.writeUint8((e >>> 16) & 255),
          t.writeUint8((e >>> 8) & 255),
          t.writeUint8(e & 255));
      else if (e < 4294967296) (t.writeUint8(P), t.writeUint32(e));
      else
        throw r("err")(
          "Binary with length " + e + " is too big for WAP protocol",
        );
    }
    function me(t, n) {
      var r = new (o("WABinary").Binary)(t),
        a = r.readUint8(),
        i = a & f;
      return i
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Decoding compressed stanza",
              ])),
          ),
          n(r.readByteArrayView()).then(function (e) {
            return ge(new (o("WABinary").Binary)(e));
          }))
        : Promise.resolve(ge(r));
    }
    function pe(e) {
      var t = new (o("WABinary").Binary)(e),
        n = t.readUint8(),
        a = n & f;
      if (a)
        throw r("err")("Cannot pass compressed stanza to decodeStanzaDebug");
      return ge(t);
    }
    function _e(e, t) {
      var n = e.readUint8();
      if (n === h) return null;
      if (n === k) return fe(e, e.readUint8());
      if (n === I) return fe(e, e.readUint16());
      if (n === x) {
        var a = e.readUint8();
        return Re(e, a, t);
      }
      if (n === $) {
        var i = e.readUint8(),
          l = e.readUint8(),
          s = e.readUint8(),
          u = ((i & 15) << 16) + (l << 8) + s;
        return Re(e, u, t);
      }
      if (n === P) {
        var c = e.readUint32();
        return Re(e, c, t);
      }
      if (n === T) return Ce(e);
      if (n === L) return be(e);
      if (n === R) return ve(e);
      if (n === E) return Se(e);
      if (n === N) {
        var d = e.readUint8(),
          m = d >>> 7,
          p = d & 127;
        return Le(e, M, m, p);
      }
      if (n === D) {
        var _ = e.readUint8(),
          f = _ >>> 7,
          g = _ & 127;
        return Le(e, w, f, g);
      }
      if (n <= 0 || n >= 240) throw r("err")("Unable to decode WAP buffer");
      if (n >= y && n <= v) {
        var C = n - y,
          b = o("WAWapDict").DICTIONARIES[C];
        if (b === void 0) throw r("err")("Missing WAP dictionary " + C);
        var S = e.readUint8(),
          A = b[S];
        if (A === void 0)
          throw r("err")("Invalid value index " + S + " in dict " + C);
        return A;
      }
      var F = o("WAWapDict").SINGLE_BYTE_TOKEN[n - 1];
      if (F === void 0) throw r("err")("Undefined token with index " + n);
      return F;
    }
    function fe(e, t) {
      for (var n = [], r = 0; r < t; r++) n.push(ge(e));
      return n;
    }
    function ge(e) {
      var t = e.readUint8(),
        n;
      if (t === k) n = e.readUint8();
      else if (t === I) n = e.readUint16();
      else
        throw r("err")(
          "Failed to decode node since type byte " + String(t) + " is invalid",
        );
      var a = void 0,
        i = null;
      if (n === 0)
        throw r("err")("Failed to decode node, list cannot be empty");
      var l = he(e);
      for (n -= 1; n > 1; ) {
        a || (a = {});
        var s = he(e),
          u = _e(e, !0);
        ((a[s] = u), (n -= 2));
      }
      return (
        n === 1 &&
          ((i = _e(e, !1)),
          i instanceof o("WAWapJid").WapJid && (i = String(i)),
          typeof i == "string" && (i = Q.encode(i))),
        new X(l, a, i)
      );
    }
    function he(e) {
      var t = _e(e, !0);
      if (typeof t != "string")
        throw r("err")("WAWap:decodeString got invalid value, string expected");
      return t;
    }
    function ye(e) {
      var t = _e(e, !0);
      if (t != null && typeof t != "string")
        throw r("err")(
          "WAWap:decodeNullableString got invalid value, string expected",
        );
      return t;
    }
    function Ce(e) {
      var t = ye(e),
        n = he(e);
      return o("WAWapJid").WapJid.create(t, n);
    }
    function be(e) {
      var t = he(e),
        n = e.readUint16();
      return (he(e), o("WAWapJid").WapJid.createFbJid(t, n));
    }
    function ve(e) {
      var t = he(e),
        n = e.readUint16(),
        r = e.readUint16();
      return (he(e), o("WAWapJid").WapJid.createInteropJid(t, n, r));
    }
    function Se(e) {
      var t = null,
        n = e.readUint8();
      if (n === 0) t = o("WAWapJid").DomainType.WHATSAPP;
      else if (n === 1) t = o("WAWapJid").DomainType.LID;
      else if ((1 & n) === 0 && (128 & n) !== 0)
        t = o("WAWapJid").DomainType.HOSTED;
      else if (n === 129) t = o("WAWapJid").DomainType.HOSTED_LID;
      else throw r("err")("decodeJidU - Invalid domain type encoding " + n);
      var a = e.readUint8(),
        i = he(e);
      return o("WAWapJid").WapJid.createJidU(i, t, a);
    }
    function Re(e, t, n) {
      return (
        n === void 0 && (n = !1),
        n ? e.readString(t) : e.readByteArrayView(t)
      );
    }
    function Le(e, t, n, r) {
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
    function Ee() {
      if (!A) {
        var e = new Uint16Array(2);
        (o("WACryptoDependencies").getCrypto().getRandomValues(e),
          (A = String(e[0]) + "." + String(e[1]) + "-"));
      }
      return "" + A + F++;
    }
    function ke(e) {
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
    function Ie(e) {
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
    function Te(e) {
      return e.type === "status" || e.type === "group" || e.type === "broadcast"
        ? xe(e.author)
        : O;
    }
    function De(e) {
      return xe(ke(e));
    }
    function xe(e) {
      var t = o("WAJids").validateDomainJid(e);
      if (t != null) return $e(t);
      var n = e.split("@"),
        a = n[0],
        i = n[1],
        l = null,
        s = null;
      if (
        (i === d ||
          i === c ||
          i === p ||
          i === m ||
          i === _ ||
          i === o("WAJids").HOSTED_LID_SUFFIX) &&
        a.indexOf(":") !== -1
      ) {
        var u = a.split(":");
        ((a = u[0]), (l = u[1]), (s = parseInt(l, 10)));
      }
      if (i === p) {
        var f = a.split("-"),
          g = f[0],
          h = f[1];
        return o("WAWapJid").WapJid.createInteropJid(h, s, parseInt(g, 10));
      } else if (i === c) return o("WAWapJid").WapJid.createFbJid(a, s);
      var y = null;
      if (i === m) y = o("WAWapJid").DomainType.LID;
      else if (i === _) {
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
    function $e(e) {
      return e === "s.whatsapp.net"
        ? W
        : e === "g.us"
          ? B
          : e === "newsletter"
            ? U
            : e === "call"
              ? G
              : r("WAAssertUnreachable")(e);
    }
    function Pe(e) {
      return xe(e);
    }
    function Ne(e) {
      return xe(e);
    }
    function Me(e) {
      return xe(e);
    }
    function we(e) {
      return xe(e);
    }
    function Ae(e) {
      return xe(e);
    }
    function Fe(e) {
      return xe(e);
    }
    function Oe(e) {
      return e.jidType === "phoneDevice" ||
        e.jidType === "msgrDevice" ||
        e.jidType === "lidDevice"
        ? xe(e.deviceJid)
        : e.jidType === "phoneUser" ||
            e.jidType === "msgrUser" ||
            e.jidType === "lidUser"
          ? xe(e.userJid)
          : e.jidType === "group"
            ? xe(e.groupJid)
            : e.jidType === "status"
              ? xe(e.statusJid)
              : e.jidType === "call"
                ? xe(e.callJid)
                : e.jidType === "interopDevice"
                  ? xe(e.deviceJid)
                  : e.jidType === "interopUser"
                    ? xe(e.userJid)
                    : e.jidType === "newsletter"
                      ? xe(e.newsletterJid)
                      : e.jidType === "hosted"
                        ? xe(e.hostedDeviceJid)
                        : e.jidType === "hostedLid"
                          ? xe(e.hostedLidDeviceJid)
                          : e.jidType === "bot"
                            ? xe(e.botJid)
                            : (e.jidType, xe(e.broadcastJid));
    }
    function Be(e) {
      return e;
    }
    function We(e) {
      return e.toString();
    }
    function qe(e) {
      return e;
    }
    function Ue(e) {
      return e;
    }
    function Ve(e) {
      return e == null ? O : e;
    }
    function He(e) {
      return e.toString();
    }
    function Ge(e) {
      return o("WALongInt").longIntToDecimalString(e);
    }
    function ze(e, t) {
      t === void 0 && (t = 4);
      for (var n = e, r = new Uint8Array(t), o = t - 1; o >= 0; o--)
        ((r[o] = n & 255), (n >>>= 8));
      return r;
    }
    ((l.DROP_ATTR = O),
      (l.G_US = B),
      (l.S_WHATSAPP_NET = W),
      (l.STATUS_BROADCAST = q),
      (l.NEWSLETTER = U),
      (l.HOSTED = V),
      (l.HOSTED_LID = H),
      (l.CALL = G),
      (l.enableXMLFormat = K),
      (l.WapNode = X),
      (l.makeWapNode = Y),
      (l.wap = J),
      (l.decodeAsString = Z),
      (l.makeStanza = ee),
      (l.encodeStanza = te),
      (l.decodeStanza = me),
      (l.decodeStanzaDebug = pe),
      (l.generateId = Ee),
      (l.extractToJid = ke),
      (l.extractParticipantJid = Ie),
      (l.PARTICIPANT_JID = Te),
      (l.TO_JID = De),
      (l.JID = xe),
      (l.DOMAIN_JID = $e),
      (l.USER_JID = Pe),
      (l.DEVICE_JID = Ne),
      (l.GROUP_JID = Me),
      (l.BROADCAST_JID = we),
      (l.CALL_JID = Ae),
      (l.NEWSLETTER_JID = Fe),
      (l.TO_WAP_JID = Oe),
      (l.STANZA_ID = Be),
      (l.SMAX_ID = We),
      (l.CUSTOM_STRING = qe),
      (l.CALL_ID = Ue),
      (l.MAYBE_CUSTOM_STRING = Ve),
      (l.INT = He),
      (l.LONG_INT = Ge),
      (l.BIG_ENDIAN_CONTENT = ze));
  },
  98,
);
