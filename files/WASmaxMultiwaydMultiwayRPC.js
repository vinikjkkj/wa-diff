__d(
  "WASmaxMultiwaydMultiwayRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success) return { name: "MultiwayResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success) return { name: "MultiwayResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Multiway", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(r.value, "text");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(r.value, "code", 400, 599);
      if (!i.success) return i;
      var l = d(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorText: a.value, errorCode: i.value },
              l.value,
            ),
          )
        : l;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "multiway");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "binary_version",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(r.value, 0, void 0);
      if (!i.success) return i;
      var l = m(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { multiwayBinaryVersion: a.value, multiwayElementValue: i.value },
              l.value,
            ),
          )
        : l;
    }
    function c(e) {
      var t,
        n,
        r = e.multiwayFlowId,
        a = e.multiwayBinaryVersion,
        i = e.multiwayConferenceName,
        l = e.multiwayServerInfoData,
        s = e.multiwayTransactionId,
        u = e.multiwayMessageType,
        c = e.multiwayElementValue,
        d = _(
          o("WASmaxJsx").smax(
            "iq",
            { to: (t = o("WAWap")).S_WHATSAPP_NET, xmlns: "fb:multiway" },
            o("WASmaxJsx").smax(
              "multiway",
              {
                flow_id: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, r),
                binary_version: t.INT(a),
                conference_name: n.OPTIONAL(t.CUSTOM_STRING, i),
                server_info_data: n.OPTIONAL(t.CUSTOM_STRING, l),
                transaction_id: n.OPTIONAL(t.INT, s),
                message_type: n.OPTIONAL(t.CUSTOM_STRING, u),
              },
              c,
            ),
          ),
        );
      return d;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function p() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function _(e) {
      var t = p();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendMultiwayRPC = e),
      (l.parseMultiwayResponseError = s),
      (l.parseMultiwayResponseSuccess = u),
      (l.makeMultiwayRequest = c));
  },
  98,
);
