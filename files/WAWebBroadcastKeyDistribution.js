__d(
  "WAWebBroadcastKeyDistribution",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = e.server,
            o = e.user;
          (t.has(r) || t.set(r, new Set()), (n = t.get(r)) == null || n.add(o));
        }),
        { recipientsByServer: t }
      );
    }
    function l(e, t) {
      var n,
        r = e.server,
        o = e.user,
        a = t.recipientsByServer.get(r);
      return (n = a == null ? void 0 : a.has(o)) != null ? n : !1;
    }
    function s(t, n) {
      var r = t.filter(function (e) {
          return !e.isHosted();
        }),
        o = e(n);
      return r.filter(function (e) {
        return l(e, o);
      });
    }
    function u(e, t, n) {
      var r = s(e, t);
      return { rotateKey: n.rotateKey, skDistribList: r, participantList: [] };
    }
    function c(e, t, n) {
      var r = [],
        o = [],
        a = 0,
        i = s(e, t);
      return (
        i.forEach(function (e) {
          var t = String(e),
            i = n.senderKey.has(t);
          i ? (r.push(e), a++) : o.push(e);
        }),
        { participantList: r, skDistribList: o, senderKeyHitCount: a }
      );
    }
    function d(e, t, n, r) {
      if (n >= r) return null;
      var o = s(e, t);
      return { rotateKey: !0, skDistribList: o, participantList: [] };
    }
    ((i.handleFullDistribution = u),
      (i.handlePartialDistribution = c),
      (i.checkAndHandleSecurityRotation = d));
  },
  66,
);
