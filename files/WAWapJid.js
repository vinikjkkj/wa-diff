__d(
  "WAWapJid",
  ["$InternalEnum", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { JID: 0, JID_U: 1, JID_AD: 1, JID_FB: 3, JID_INTEROP: 4 },
      s = n("$InternalEnum")({
        WHATSAPP: 0,
        LID: 1,
        HOSTED: 128,
        HOSTED_LID: 129,
      }),
      u = (function () {
        function t(e) {
          this.$1 = e;
        }
        ((t.createAD = function (r, o, a) {
          return new t({
            type: e.JID_AD,
            user: r,
            device: a == null ? 0 : a,
            agent: o == null ? 0 : o,
            domainType: s.WHATSAPP,
          });
        }),
          (t.createJidU = function (r, o, a) {
            return new t({
              type: e.JID_U,
              user: r,
              device: a == null ? 0 : a,
              domainType: o == null ? s.WHATSAPP : o,
            });
          }),
          (t.createFbJid = function (r, o) {
            var n = o == null ? 0 : o;
            return new t({ type: e.JID_FB, user: r, device: n });
          }),
          (t.createInteropJid = function (r, o, a) {
            var n = o == null ? 0 : o;
            return new t({
              type: e.JID_INTEROP,
              user: r,
              device: n,
              integrator: a,
            });
          }),
          (t.create = function (r, o) {
            return new t({ type: e.JID, user: r, server: o });
          }));
        var n = t.prototype;
        return (
          (n.toString = function () {
            if (this.$1.type === e.JID_AD || this.$1.type === e.JID_U) {
              var t = this.$1,
                n = t.device,
                r = t.domainType,
                a = t.user,
                i = "";
              return (
                r === s.WHATSAPP
                  ? (i = o("WAJids").WA_USER_JID_SUFFIX)
                  : r === s.HOSTED
                    ? (i = o("WAJids").HOSTED_SUFFIX)
                    : r === s.HOSTED_LID
                      ? (i = o("WAJids").HOSTED_LID_SUFFIX)
                      : (i = o("WAJids").LID_SUFFIX),
                n === 0 ? a + "@" + i : a + ":" + n + "@" + i
              );
            } else if (this.$1.type === e.JID_FB) {
              var l = this.$1,
                u = l.device,
                c = l.user,
                d = o("WAJids").MSGR_USER_JID_SUFFIX;
              return c + ":" + u + "@" + d;
            } else if (this.$1.type === e.JID_INTEROP) {
              var m = this.$1,
                p = m.device,
                _ = m.integrator,
                f = m.user,
                g = o("WAJids").INTEROP_USER_JID_SUFFIX;
              return _ + "-" + f + ":" + p + "@" + g;
            } else {
              this.$1.type;
              var h = this.$1,
                y = h.server,
                C = h.user;
              return C != null ? C + "@" + y : y;
            }
          }),
          (n.getInnerJid = function () {
            return this.$1;
          }),
          t
        );
      })();
    ((l.WAP_JID_SUBTYPE = e), (l.DomainType = s), (l.WapJid = u));
  },
  98,
);
