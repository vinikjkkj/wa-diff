__d(
  "ZenonSignalingClientManager",
  [
    "ZenonActorHooks",
    "ZenonProtocolConfiguration",
    "ZenonSignalingModel",
    "filterMap",
    "randomInt",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        (r === void 0 && (r = null),
          (this.$7 = null),
          (this.$1 = new Map()),
          (this.$2 = { userID: o("ZenonActorHooks").ZenonActor.getID() }),
          (this.$3 = t),
          (this.$4 = new Set()),
          (this.$5 = e),
          (this.$6 = n),
          (this.$7 = r));
      }
      var t = e.prototype;
      return (
        (t.getSignalingClient = function (t) {
          return this.$1.get(t);
        }),
        (t.getSignalingClientsWithRemoteSignalingID = function (t) {
          return Array.from(
            r("filterMap")(this.$1, function (e) {
              return (
                e.getSignalingModel().getRemoteSignalingID() === t &&
                !e.isTerminated()
              );
            }).values(),
          );
        }),
        (t.createSignalingClient = function (t, n, a, i, l, s, u) {
          var e = this;
          if (t != null) {
            var c = this.$1.get(t);
            if (c != null) return c;
          }
          var d =
              t == null || t === "" || t === "null"
                ? String(r("randomInt")(0, 4294967294) + 1)
                : t,
            m = new (r("ZenonSignalingModel"))(d, a, { userID: u }, n, l, i, s),
            p = o("ZenonProtocolConfiguration").getConfiguration(m, this.$6),
            _ = p.eventAggregator,
            f = p.messageSender,
            g = p.transactionManager,
            h = new this.$5(m, g, _, this.$3, this.$7);
          return (
            f.setMessageReceiver(function (t) {
              return e.receiveMessage(t);
            }),
            this.$1.set(d, h),
            h
          );
        }),
        (t.receiveMessage = function (t) {
          var e = t.getHeader(),
            n = this.$8(t);
          if (n != null) {
            t.setSignalingID(n);
            var r = this.getSignalingClient(n);
            if (r != null) r.receiveMessage(t);
            else {
              var o = this.createSignalingClient(
                n,
                e.remoteInfo,
                e.remoteSignalingID,
                e.protocol,
                e.roomInfo,
                e.actorID,
                e.userInfo.userID,
              );
              (o
                .getSignalingModel()
                .updateRemoteSignalingID(e.remoteSignalingID),
                o.receiveMessage(t));
            }
          }
        }),
        (t.$8 = function (t) {
          var e = t.getHeader(),
            n = e.signalingID;
          if (n != null) return n;
          if (!this.$9(e.messageID)) return null;
          var o = e.remoteSignalingID;
          if (
            t.getEvents().some(function (e) {
              return e.eventName === "terminateRequest";
            }) &&
            o != null
          ) {
            var a = this.getSignalingClientsWithRemoteSignalingID(o);
            a.length > 0 && (n = a[0].getSignalingModel().getSignalingID());
          }
          if (n == null) {
            var i = r("randomInt")(0, 4294967294) + 1;
            n = String(i);
          }
          return n;
        }),
        (t.$9 = function (t) {
          return this.$4.has(t) ? !1 : (this.$4.add(t), !0);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
