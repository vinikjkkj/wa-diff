__d(
  "MAIBAAdRejectChatInitiationArgs",
  ["fbt", "MAIBAEntrypointConstants"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return typeof e == "string" ? { rejectedAdID: e, violationTypes: [] } : e;
    }
    function u(e) {
      var t = e.rejectedAdID,
        n = e.violationTypes;
      return n.length === 0
        ? s._(/*BTDS*/ "", [s._param("ad ID", t)]).toString()
        : s
            ._(/*BTDS*/ "", [
              s._plural(n.length),
              s._param("ad ID", t),
              s._param("violation types", n.join(", ")),
            ])
            .toString();
    }
    function c(t) {
      if (t.length === 0) return null;
      var n = t.map(e).map(u);
      return s
        ._(/*BTDS*/ "", [s._param("selected rejected ads", n.join(", "))])
        .toString();
    }
    function d(t, n, r) {
      var a = o("MAIBAEntrypointConstants").AD_REJECT_INPUT_TEXT.toString();
      if (t == null) return a;
      var i = [s._(/*BTDS*/ "", [s._param("ad account ID", t)]).toString()],
        l = c(n != null ? n : []);
      if (l != null) {
        i.push(l);
        var u = new Set(
          (n != null ? n : [])
            .map(e)
            .map(function (e) {
              return e.rejectedAdID.trim();
            })
            .filter(function (e) {
              return e !== "";
            }),
        );
        if (r && t.trim() !== "" && u.size === 1) {
          var d = "rejected-ad";
          i.push(s._(/*BTDS*/ "", [s._param("rejectedAdToken", d)]).toString());
        } else
          (i.push(s._(/*BTDS*/ "").toString()),
            i.push(s._(/*BTDS*/ "").toString()));
      }
      return a + " " + i.join("; ");
    }
    function m(t, n, r, a, i) {
      i === void 0 && (i = !1);
      var l = (n != null ? n : []).map(e);
      return {
        adAccountID: t != null ? t : void 0,
        entrypointContext: {
          ad_object_ids: l.map(function (e) {
            return e.rejectedAdID;
          }),
          ad_object_level: "ADGROUP",
          admin_text: o(
            "MAIBAEntrypointConstants",
          ).AD_REJECT_ADMIN_TEXT.toString(),
          additional_info: JSON.stringify({
            ad_reject_entrypoint: !0,
            entrypoint_source:
              r != null ? r : "bsh_rejected_ads_request_review",
            support_intent: "rejected_ad_review_and_restore",
            issue_type: "individual_ad_reject",
            selected_rejected_ads: l.map(function (e) {
              return {
                ad_id: e.rejectedAdID,
                violation_types: e.violationTypes,
              };
            }),
          }),
          prompt_id: a != null ? a : "bsh_ad_reject_entrypoint",
        },
        userInput: { initialUserMessage: d(t, n, i) },
      };
    }
    l.getAdRejectChatInitiationArgs = m;
  },
  226,
);
