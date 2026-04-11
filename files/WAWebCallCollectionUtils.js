__d(
  "WAWebCallCollectionUtils",
  ["WAWebCallModel"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        o = {
          id: e,
          isGroup:
            (r = n == null ? void 0 : n.isGroupCall) != null
              ? r
              : !!(n != null && n.groupWid),
          groupJid: n == null ? void 0 : n.groupWid,
        };
      return (
        t != null && (o.peerJid = t),
        n &&
          (n.isVideo != null && (o.isVideo = n.isVideo),
          n.offerTime != null && (o.offerTime = n.offerTime),
          n.isSilenced != null && (o.isSilenced = n.isSilenced),
          n.offerReceivedWhileOffline != null &&
            (o.offerReceivedWhileOffline = n.offerReceivedWhileOffline)),
        o
      );
    }
    function s(e, t) {
      if (
        ((e.id = t.id),
        t.isGroup != null && (e.isGroup = t.isGroup),
        t.groupJid !== void 0)
      ) {
        var n;
        e.groupJid = (n = t.groupJid) != null ? n : null;
      }
      return (
        t.peerJid != null && (e.peerJid = t.peerJid),
        t.isVideo != null && (e.isVideo = t.isVideo),
        t.offerTime != null && (e.offerTime = t.offerTime),
        t.isSilenced != null && (e.isSilenced = t.isSilenced),
        t.offerReceivedWhileOffline != null &&
          (e.offerReceivedWhileOffline = t.offerReceivedWhileOffline),
        e
      );
    }
    function u(e) {
      var t = new (r("WAWebCallModel"))(e.id);
      return s(t, e);
    }
    ((l.buildCallPropsFromOffer = e),
      (l.assignCallPropsToCall = s),
      (l.createCallModel = u));
  },
  98,
);
