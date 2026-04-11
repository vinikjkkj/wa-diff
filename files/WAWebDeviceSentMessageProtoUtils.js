__d(
  "WAWebDeviceSentMessageProtoUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
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
    function l(e) {
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
        g = e == null || (t = e.deviceSentMessage) == null ? void 0 : t.message;
      if (g == null) return null;
      var h = babelHelpers.extends({}, g.messageContextInfo, {
        messageSecret:
          (n =
            g == null || (r = g.messageContextInfo) == null
              ? void 0
              : r.messageSecret) != null
            ? n
            : e == null || (o = e.messageContextInfo) == null
              ? void 0
              : o.messageSecret,
        messageAssociation:
          (a =
            g == null || (i = g.messageContextInfo) == null
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
        threadId:
          (u =
            (c =
              g == null || (d = g.messageContextInfo) == null
                ? void 0
                : d.threadId) != null
              ? c
              : e == null || (m = e.messageContextInfo) == null
                ? void 0
                : m.threadId) != null
            ? u
            : [],
        botMetadata:
          (p =
            g == null || (_ = g.messageContextInfo) == null
              ? void 0
              : _.botMetadata) != null
            ? p
            : e == null || (f = e.messageContextInfo) == null
              ? void 0
              : f.botMetadata,
      });
      return babelHelpers.extends({}, g, { messageContextInfo: h });
    }
    ((i.wrapDeviceSentMessage = e), (i.unwrapDeviceSentMessage = l));
  },
  66,
);
