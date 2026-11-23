__d(
  "WASmaxLoginFailureRPC",
  [
    "WAResultOrError",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Failure", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "failure");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "reason", u);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "location");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "code",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "expire",
        0,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "retry",
        0,
        void 0,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!s.success) return s;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "message",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "vt",
        1,
        1e5,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "has_offline",
        c,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "url",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_message_header",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_message_subtext",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_message_locale",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_icon",
        "sim_binding",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_main_button_text",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_main_button_url",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_secondary_button_text",
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_secondary_button_url",
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_secondary_button_ch_entrypoint_id",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "appeal_token",
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "violation_reason",
      );
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "source_acct",
        -1,
        2,
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_eu",
        c,
      );
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "scope",
        d,
      );
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "age_collection",
        "retry_allowed",
      );
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "reg_info",
        "should_keep_reg_info",
      );
      return $.success
        ? o("WAResultOrError").makeResult({
            reason: n.value,
            location: r.value,
            code: a.value,
            expire: i.value,
            retry: l.value,
            t: s.value,
            message: m.value,
            vt: p.value,
            hasOffline: _.value,
            url: f.value,
            logoutMessageHeader: g.value,
            logoutMessageSubtext: h.value,
            logoutMessageLocale: y.value,
            logoutIcon: C.value,
            logoutMainButtonText: b.value,
            logoutMainButtonUrl: v.value,
            logoutSecondaryButtonText: S.value,
            logoutSecondaryButtonUrl: R.value,
            logoutSecondaryButtonChEntrypointId: L.value,
            appealToken: E.value,
            violationReason: k.value,
            sourceAcct: I.value,
            isEu: T.value,
            scope: D.value,
            ageCollection: x.value,
            regInfo: $.value,
          })
        : $;
    }
    var u = {
        400: "400",
        401: "401",
        402: "402",
        403: "403",
        405: "405",
        406: "406",
        409: "409",
        412: "412",
        413: "413",
        414: "414",
        415: "415",
        416: "416",
        417: "417",
        418: "418",
        419: "419",
        500: "500",
        501: "501",
        503: "503",
      },
      c = { false: "false", true: "true" },
      d = { parental: "parental", youth: "youth" };
    ((l.receiveFailureRPC = e),
      (l.parseFailureRequest = s),
      (l.ENUM_400_401_402_403_405_406_409_412_413_414_415_416_417_418_419_500_501_503 =
        u),
      (l.ENUM_FALSE_TRUE = c),
      (l.ENUM_PARENTAL_YOUTH = d));
  },
  98,
);
