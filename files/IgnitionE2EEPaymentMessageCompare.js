__d(
  "IgnitionE2EEPaymentMessageCompare",
  ["MAWProtobufDeserializers", "WAArmadilloXMA.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      ["transaction_id", "opg_transaction_id_diff"],
      ["amount", "opg_amount_diff"],
      ["currency_symbol", "opg_currency_diff"],
      ["transaction_type", "opg_direction_diff"],
      ["initiating_user_fb_id", "opg_initiator_diff"],
      ["target_user_fb_id", "opg_target_diff"],
      ["initiating_user_wallet_type", "opg_initiator_wallet_type_diff"],
      ["target_user_wallet_type", "opg_target_wallet_type_diff"],
    ];
    function s(e) {
      return e == null || typeof e != "object" || Array.isArray(e) ? null : e;
    }
    function u(e) {
      return typeof e == "string"
        ? e
        : typeof e == "number" && Number.isSafeInteger(e)
          ? String(e)
          : null;
    }
    function c(e) {
      return Math.floor(Number(e) / 1e3);
    }
    function d(e) {
      var t,
        n =
          (t = o("MAWProtobufDeserializers")
            .DeserializedBackupMessage.create(e)
            .encryptedTransportMessage()) == null ||
          (t = t.armadillo()) == null ||
          (t = t.extendedContentMessage()) == null
            ? void 0
            : t.payload;
      return (n == null ? void 0 : n.targetType) ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .MSG_OPG_P2P_PAYMENT
        ? n
        : null;
    }
    function m(e) {
      var t = e.xmaDataclass;
      if (t == null) return null;
      try {
        return s(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function p(e) {
      var t, n;
      return s(
        (t = s((n = s(e.content)) == null ? void 0 : n.custom_template_data)) ==
          null
          ? void 0
          : t.transaction_data,
      );
    }
    function _(t, n) {
      var r = [];
      for (var o of e) {
        var a = o[0],
          i = o[1],
          l = u(t[a]);
        l != null && l !== u(n[a]) && r.push(i);
      }
      var s = u(t.creation_timestamp_ms),
        d = u(n.creation_timestamp_ms);
      return (
        s != null &&
          (d == null || c(s) !== c(d)) &&
          r.push("opg_creation_timestamp_diff"),
        r
      );
    }
    function f(e, t) {
      var n, r, a, i;
      try {
        a = d(e);
      } catch (e) {
        return { errorReason: "payload1_deser_fail", result: "not_compared" };
      }
      try {
        i = d(t);
      } catch (e) {
        return { errorReason: "payload2_deser_fail", result: "not_compared" };
      }
      if (a == null || i == null)
        return { diffs: ["opg_target_type_diff"], result: "mismatch" };
      var l = m(a);
      if (l == null)
        return {
          errorReason: "opg_dataclass1_deser_fail",
          result: "not_compared",
        };
      var s = m(i);
      if (s == null)
        return {
          errorReason: "opg_dataclass2_deser_fail",
          result: "not_compared",
        };
      var c = [];
      (((n = a.xmaLayoutType) != null
        ? n
        : o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE
            .SINGLE) !==
        ((r = i.xmaLayoutType) != null
          ? r
          : o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE
              .SINGLE) ||
        u(l.layout_type) !== u(s.layout_type)) &&
        c.push("opg_layout_diff");
      var f = p(l),
        g = p(s);
      return (
        f != null && g != null
          ? c.push.apply(c, _(f, g))
          : (f != null || g != null) && c.push("opg_transaction_data_missing"),
        c.length === 0 ? { result: "match" } : { diffs: c, result: "mismatch" }
      );
    }
    l.comparePaymentMessagePayloads = f;
  },
  98,
);
