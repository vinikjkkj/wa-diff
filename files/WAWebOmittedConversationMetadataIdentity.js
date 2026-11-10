__d(
  "WAWebOmittedConversationMetadataIdentity",
  [
    "WAJids",
    "WAWebOmittedConversationMetadataStorageTypes",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(e.id),
        n = o("WAWebWidFactory").createWid(t);
      if (n.isGroup()) {
        if (e.accountLid != null)
          throw r("err")("Group metadata cannot have an account LID");
        return { historyId: t };
      }
      if (e.accountLid == null) return { historyId: t };
      var a = c(e.accountLid);
      if (n.isLid() && !n.equals(o("WAWebWidFactory").createWid(a)))
        throw r("err")(
          "Native LID metadata has a conflicting account identity",
        );
      return { historyId: t, accountLid: a };
    }
    function s(e) {
      if (
        (e.kind !== "initial" && e.kind !== "metadata") ||
        typeof e.id != "string"
      )
        throw r("err")("Batch marker is not a conversation identity");
      var t = u(e.id);
      return e.accountLid == null
        ? { historyId: t }
        : { historyId: t, accountLid: e.accountLid };
    }
    function u(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WAJids").validateChatJid(t.toJid());
      if ((!t.isUser() && !t.isGroup()) || n == null)
        throw r("err")("Unsupported omitted conversation identity");
      return n;
    }
    function c(e) {
      var t = o("WAJids").validateLidUserJid(
        o("WAWebWidFactory").createWid(e).toJid(),
      );
      if (t == null)
        throw r("err")("Omitted metadata account identity is not a LID");
      return t;
    }
    function d(e, t) {
      var n = o("WAWebWidFactory").createWid(t.id),
        r = o("WAWebWidFactory").createWid(e.historyId);
      if (r.isGroup()) return n.equals(r);
      if (e.accountLid != null) {
        var a = o("WAWebWidFactory").createWid(e.accountLid);
        return t.accountLid == null ||
          !o("WAWebWidFactory").createWid(t.accountLid).equals(a)
          ? !1
          : n.equals(r) || n.equals(a);
      }
      return n.equals(r);
    }
    function m(e, t) {
      var n,
        r,
        o = e.filter(function (e) {
          return e.kind === "metadata" && d(s(e), t);
        }),
        a = new Set(
          o.map(function (e) {
            var t;
            return (t = e.accountLid) != null ? t : e.id;
          }),
        );
      return a.size !== 1
        ? null
        : (n =
              (r = o.find(function (e) {
                return e.id === t.historyId;
              })) != null
                ? r
                : o.find(function (e) {
                    return e.id === t.id;
                  })) != null
          ? n
          : new Set(
                o.map(function (e) {
                  return e.id;
                }),
              ).size === 1
            ? o[0]
            : null;
    }
    function p(e) {
      return o(
        "WAWebOmittedConversationMetadataStorageTypes",
      ).asOmittedMetadataBatchRowId("batch:" + e);
    }
    function _(e) {
      return (
        new Set(
          e.map(function (e) {
            return e.historyId;
          }),
        ).size !== e.length ||
        new Set(
          e.map(function (e) {
            var t;
            return (t = e.accountLid) != null ? t : e.historyId;
          }),
        ).size !== e.length
      );
    }
    function f(e, t, n) {
      var r = [].concat(t, n.flat()).filter(Boolean),
        o = e.some(function (e) {
          return r.some(function (t) {
            return t.kind === "initial" && g(t, e);
          });
        });
      if (o) return "initial";
      var a = e.some(function (e) {
        return r.some(function (t) {
          return t.kind === "metadata" && g(t, e);
        });
      });
      return a ? "metadata" : null;
    }
    function g(e, t) {
      return (
        e.id === t.historyId ||
        e.accountLid === t.historyId ||
        (t.accountLid != null &&
          (e.id === t.accountLid || e.accountLid === t.accountLid))
      );
    }
    ((l.getOmittedMetadataIdentity = e),
      (l.getStoredOmittedMetadataIdentity = s),
      (l.parseOmittedMetadataChatJid = u),
      (l.parseOmittedMetadataAccountLid = c),
      (l.metadataMatchesChat = d),
      (l.selectOmittedMetadataForChat = m),
      (l.metadataBatchRowId = p),
      (l.hasDuplicateOmittedMetadataIdentities = _),
      (l.findStoredOmittedMetadataIdentityConflict = f));
  },
  98,
);
