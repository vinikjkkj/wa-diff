__d(
  "MqttProtocolCodec",
  ["MqttProtocolUtils", "MqttUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14,
      }),
      s = [0, 6, 77, 81, 73, 115, 100, 112, 3];
    function u(t, n) {
      var a = n,
        i = a,
        l = t[a],
        s = l >> 4;
      a += 1;
      var u = o("MqttProtocolUtils").decodeMultiByteInt(t, a);
      if (u == null) return { position: i, wireMessage: null };
      a = u.offset;
      var c = a + u.value;
      if (c > t.length) return { position: i, wireMessage: null };
      var d;
      switch (s) {
        case e.CONNACK: {
          var p = t[a++],
            h = !!(p & 1),
            y = t[a++];
          d = new f(h, y);
          break;
        }
        case e.PUBLISH: {
          var v = l & 15,
            S = (v >> 1) & 3,
            R = o("MqttProtocolUtils").readUInt16BE(t, a);
          a += 2;
          var L = o("MqttProtocolUtils").convertUTF8ToString(t, a, R);
          a += R;
          var E = null;
          S === 1 &&
            ((E = o("MqttProtocolUtils").readUInt16BE(t, a)), (a += 2));
          var k = C.createWithBytes(t.subarray(a, c)),
            I = (v & 1) === 1,
            T = (v & 8) === 8;
          d = new b(L, k, S, E, I, T);
          break;
        }
        case e.PINGREQ:
          d = new m("PINGREQ");
          break;
        case e.PINGRESP:
          d = new m("PINGRESP");
          break;
        case e.PUBACK:
        case e.UNSUBACK: {
          var D = o("MqttProtocolUtils").readUInt16BE(t, a);
          d = new g(s === e.PUBACK ? "PUBACK" : "UNSUBACK", D);
          break;
        }
        case e.SUBACK: {
          var x = o("MqttProtocolUtils").readUInt16BE(t, a);
          a += 2;
          var $ = t.subarray(a, c);
          d = new _(x, $);
          break;
        }
        default:
          throw r("err")(
            o("MqttUtils").sprintf("Invalid MQTT message type %s.", s),
          );
      }
      return { position: c, wireMessage: d };
    }
    function c(e) {
      for (var t = [], n = 0; n < e.length; ) {
        var r = u(e, n),
          o = r.wireMessage;
        if (((n = r.position), o)) t.push(o);
        else break;
      }
      var a = null;
      return (
        n < e.length && (a = e.subarray(n)),
        { messages: t, remaining: a }
      );
    }
    var d = (function () {
        function t(t) {
          this.messageType = e[t];
        }
        var n = t.prototype;
        return (
          (n.encode = function () {
            var e = new TypeError("Cannot abstract class WireMessage");
            throw (e.stack, e);
          }),
          t
        );
      })(),
      m = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.encode = function () {
            var e = new ArrayBuffer(2),
              t = new Uint8Array(e);
            return ((t[0] = (this.messageType & 15) << 4), e);
          }),
          t
        );
      })(d),
      p = (function (e) {
        function t() {
          return e.call(this, "DISCONNECT") || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.encode = function () {
            var e = (this.messageType & 15) << 4,
              t = new ArrayBuffer(2),
              n = new Uint8Array(t);
            return (
              (n[0] = e),
              n.set(o("MqttProtocolUtils").encodeMultiByteInt(0), 1),
              t
            );
          }),
          t
        );
      })(d),
      _ = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, "SUBACK") || this),
            (r.messageIdentifier = t),
            (r.returnCode = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      f = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, "CONNACK") || this),
            (r.sessionPresent = t),
            (r.returnCode = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      g = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.messageIdentifier = n), r);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.encode = function () {
            var e = (this.messageType & 15) << 4,
              t = 2,
              n = o("MqttProtocolUtils").encodeMultiByteInt(t),
              r = n.length + 1,
              a = new ArrayBuffer(t + r),
              i = new Uint8Array(a);
            return (
              (i[0] = e),
              i.set(n, 1),
              (r = o("MqttProtocolUtils").writeUInt16BE(
                this.messageIdentifier,
                i,
                r,
              )),
              a
            );
          }),
          t
        );
      })(d),
      h = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, "CONNECT") || this),
            (r.clientId = t),
            (r.connectOptions = n),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.encode = function () {
            var e,
              t = (this.messageType & 15) << 4,
              n = s.length + 3;
            ((n += (e = o("MqttProtocolUtils")).UTF8Length(this.clientId) + 2),
              (n += e.UTF8Length(this.connectOptions.userName) + 2));
            var r = e.encodeMultiByteInt(n),
              a = new ArrayBuffer(1 + r.length + n),
              i = new Uint8Array(a);
            i[0] = t;
            var l = 1;
            (i.set(r, 1), (l += r.length), i.set(s, l), (l += s.length));
            var u = 130;
            return (
              (i[l++] = u),
              (l = e.writeUInt16BE(
                this.connectOptions.getKeepAliveIntervalSeconds(),
                i,
                l,
              )),
              (l = e.writeString(
                this.clientId,
                e.UTF8Length(this.clientId),
                i,
                l,
              )),
              (l = e.writeString(
                this.connectOptions.userName,
                e.UTF8Length(this.connectOptions.userName),
                i,
                l,
              )),
              a
            );
          }),
          t
        );
      })(d),
      y = (function (t) {
        function n(e, n, r, a) {
          var i;
          if (
            ((i = t.call(this, e) || this),
            (i.topic = n),
            (r < 0 && r > 1) || (r === 1 && a == null))
          ) {
            var l = new TypeError(
              o("MqttUtils").sprintf(
                "Argument Invalid. qos: %s messageType: %s.",
                r,
                e,
              ),
            );
            throw (l.stack, l);
          }
          return ((i.qos = r), (i.messageIdentifier = a), i);
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.encode = function () {
            var t = (this.messageType & 15) << 4;
            t |= 2;
            var n = o("MqttProtocolUtils").UTF8Length(this.topic),
              r = 2 + n + 2;
            this.messageType === e.SUBSCRIBE && (r += 1);
            var a = o("MqttProtocolUtils").encodeMultiByteInt(r),
              i = new ArrayBuffer(1 + a.length + r),
              l = new Uint8Array(i);
            l[0] = t;
            var s = 1;
            return (
              l.set(a, 1),
              (s += a.length),
              this.messageIdentifier != null &&
                (s = o("MqttProtocolUtils").writeUInt16BE(
                  this.messageIdentifier,
                  l,
                  s,
                )),
              (s = o("MqttProtocolUtils").writeString(this.topic, n, l, s)),
              this.messageType === e.SUBSCRIBE &&
                this.qos != null &&
                (l[s++] = this.qos),
              i
            );
          }),
          n
        );
      })(d),
      C = (function () {
        function e(e, t) {
          ((this.payloadString = e), (this.payloadBytes = t));
        }
        ((e.createWithString = function (n) {
          var t = new Uint8Array(
            new ArrayBuffer(o("MqttProtocolUtils").UTF8Length(n)),
          );
          return (
            o("MqttProtocolUtils").convertStringToUTF8(n, t, 0),
            new e(n, t)
          );
        }),
          (e.createWithBytes = function (n) {
            var t = o("MqttProtocolUtils").convertUTF8ToString(n, 0, n.length);
            return new e(t, n);
          }));
        var t = e.prototype;
        return (
          (t.string = function () {
            return this.payloadString;
          }),
          (t.bytes = function () {
            return this.payloadBytes;
          }),
          e
        );
      })(),
      b = (function (e) {
        function t(t, n, r, o, a, i) {
          var l;
          if (
            ((l = e.call(this, "PUBLISH") || this),
            (l.topic = t),
            (l.payloadMessage = n),
            (l.qos = r),
            (l.messageIdentifier = o),
            (l.retained = a != null ? a : !1),
            (l.duplicate = i != null ? i : !1),
            l.qos === 1 && l.messageIdentifier == null)
          ) {
            var s = new TypeError(
              "Argument Invalid. messageIdentifier: null and qos: 1",
            );
            throw (s.stack, s);
          }
          return l;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.encode = function () {
            var e = (this.messageType & 15) << 4;
            (this.duplicate && (e |= 8),
              (e = e |= this.qos << 1),
              this.retained && e != 1);
            var t = o("MqttProtocolUtils").UTF8Length(this.topic),
              n = t + 2,
              r = this.qos === 0 ? 0 : 2;
            n += r;
            var a = this.payloadMessage.bytes();
            n += a.byteLength;
            var i = o("MqttProtocolUtils").encodeMultiByteInt(n),
              l = new ArrayBuffer(1 + i.length + n),
              s = new Uint8Array(l);
            ((s[0] = e), s.set(i, 1));
            var u = 1 + i.length;
            return (
              (u = o("MqttProtocolUtils").writeString(this.topic, t, s, u)),
              this.qos !== 0 &&
                this.messageIdentifier != null &&
                (u = o("MqttProtocolUtils").writeUInt16BE(
                  this.messageIdentifier,
                  s,
                  u,
                )),
              s.set(a, u),
              l
            );
          }),
          t
        );
      })(d),
      v = C.createWithString,
      S = C.createWithBytes,
      R = {
        Base: d,
        ConnAck: f,
        Connect: h,
        Disconnect: p,
        Ping: m,
        PubAckUnsubAck: g,
        Publish: b,
        Subscription: y,
      };
    ((l.MESSAGE_TYPE = e),
      (l.decodeMessage = u),
      (l.decodeByteMessages = c),
      (l.Message = C),
      (l.createMessageWithString = v),
      (l.createMessageWithBytes = S),
      (l.WireMessage = R));
  },
  98,
);
