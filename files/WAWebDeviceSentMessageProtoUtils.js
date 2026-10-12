__d(
  "WAWebDeviceSentMessageProtoUtils",
  ["WAWebFutureproofProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (var t = [e], n = t.pop(); n != null; n = t.pop()) {
        var r, a;
        if (n.deviceSentMessage != null) return !0;
        var i =
          (r = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(n)) ==
          null
            ? void 0
            : r.message;
        i != null && t.push(i);
        var l = (a = n.groupStatusMessageV2) == null ? void 0 : a.message;
        l != null && t.push(l);
      }
      return !1;
    }
    function s(e, t) {
      var n = e == null ? void 0 : e.messageContextInfo;
      if (n == null) {
        var r = {
          deviceSentMessage: {
            destinationJid: t.toString({ legacy: !0 }),
            message: e,
          },
        };
        return r;
      }
      return {
        messageContextInfo: babelHelpers.extends({}, n),
        deviceSentMessage: {
          destinationJid: t.toString({ legacy: !0 }),
          message: babelHelpers.extends({}, e, { messageContextInfo: void 0 }),
        },
      };
    }
    function u(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C = e == null || (t = e.deviceSentMessage) == null ? void 0 : t.message;
      if (C == null) return null;
      var b = babelHelpers.extends({}, C.messageContextInfo, {
        messageSecret:
          (n =
            C == null || (r = C.messageContextInfo) == null
              ? void 0
              : r.messageSecret) != null
            ? n
            : e == null || (o = e.messageContextInfo) == null
              ? void 0
              : o.messageSecret,
        messageAssociation:
          (a =
            C == null || (i = C.messageContextInfo) == null
              ? void 0
              : i.messageAssociation) != null
            ? a
            : e == null || (l = e.messageContextInfo) == null
              ? void 0
              : l.messageAssociation,
        limitSharingV2:
          e == null || (s = e.messageContextInfo) == null
            ? void 0
            : s.limitSharingV2,
        acp2Setting:
          (u =
            C == null || (c = C.messageContextInfo) == null
              ? void 0
              : c.acp2Setting) != null
            ? u
            : e == null || (d = e.messageContextInfo) == null
              ? void 0
              : d.acp2Setting,
        threadId:
          (m =
            (p =
              C == null || (_ = C.messageContextInfo) == null
                ? void 0
                : _.threadId) != null
              ? p
              : e == null || (f = e.messageContextInfo) == null
                ? void 0
                : f.threadId) != null
            ? m
            : [],
        botMetadata:
          (g =
            C == null || (h = C.messageContextInfo) == null
              ? void 0
              : h.botMetadata) != null
            ? g
            : e == null || (y = e.messageContextInfo) == null
              ? void 0
              : y.botMetadata,
      });
      return babelHelpers.extends({}, C, { messageContextInfo: b });
    }
    ((l.containsDeviceSentMessage = e),
      (l.wrapDeviceSentMessage = s),
      (l.unwrapDeviceSentMessage = u));
  },
  98,
);
