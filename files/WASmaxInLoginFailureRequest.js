__d(
  "WASmaxInLoginFailureRequest",
  ["WAResultOrError", "WASmaxInLoginEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "failure");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "reason",
        o("WASmaxInLoginEnums")
          .ENUM_400_401_402_403_405_406_409_412_413_414_415_416_417_418_419_500_501_503,
      );
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
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "message",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "vt",
        1,
        1e5,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "has_offline",
        o("WASmaxInLoginEnums").ENUM_FALSE_TRUE,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "url",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_message_header",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_message_subtext",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_message_locale",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_main_button_text",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_main_button_url",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_secondary_button_text",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_secondary_button_url",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "logout_secondary_button_ch_entrypoint_id",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "appeal_token",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "violation_reason",
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "source_acct",
        -1,
        2,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_eu",
        o("WASmaxInLoginEnums").ENUM_FALSE_TRUE,
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "scope",
        o("WASmaxInLoginEnums").ENUM_PARENTAL_YOUTH,
      );
      return E.success
        ? o("WAResultOrError").makeResult({
            reason: n.value,
            location: r.value,
            code: a.value,
            expire: i.value,
            retry: l.value,
            t: s.value,
            message: u.value,
            vt: c.value,
            hasOffline: d.value,
            url: m.value,
            logoutMessageHeader: p.value,
            logoutMessageSubtext: _.value,
            logoutMessageLocale: f.value,
            logoutMainButtonText: g.value,
            logoutMainButtonUrl: h.value,
            logoutSecondaryButtonText: y.value,
            logoutSecondaryButtonUrl: C.value,
            logoutSecondaryButtonChEntrypointId: b.value,
            appealToken: v.value,
            violationReason: S.value,
            sourceAcct: R.value,
            isEu: L.value,
            scope: E.value,
          })
        : E;
    }
    l.parseFailureRequest = e;
  },
  98,
);
