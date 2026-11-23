__d(
  "WASmaxSyncdNewPatchRPC",
  [
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("NewPatch", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNewPatchResponseClientAck: function () {
          return d(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "collection");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "version", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, version: r.value })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChild(e, "delete_all_data");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "server_sync",
      );
      if (!a.success) return a;
      var i = c(e);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "collection",
        0,
        20,
        s,
      );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: r.value, type: a.value }, i.value, {
              hasDeleteAllData: n.value != null,
              collection: l.value,
            }),
          )
        : l;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "offline",
        0,
        1024,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            id: r.value,
            offline: a.value,
          })
        : a;
    }
    function d(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrDomainJid,
        e,
        ["from"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxJsx").smax("ack", {
        class: "notification",
        type: "server_sync",
        to: o("WAWap").DOMAIN_JID(t.value),
        id: o("WAWap").STANZA_ID(n.value),
      });
      return r;
    }
    ((l.receiveNewPatchRPC = e),
      (l.parseNewPatchRequest = u),
      (l.makeNewPatchResponseClientAck = d));
  },
  98,
);
