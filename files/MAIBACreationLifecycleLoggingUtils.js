__d(
  "MAIBACreationLifecycleLoggingUtils",
  ["ALToolTab", "react", "useAdsALCustomEventLogger", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useRef,
      p = "r23_e2e_proposal_lifecycle_v1",
      _ = "maiba_2_ga",
      f = "strategy_artifact_v1",
      g = "maiba_creation_lifecycle_web_v1";
    function h(e) {
      if (e == null || e === "") return null;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (typeof t != "object" || t == null) return null;
      var n = t,
        r = n.kind,
        o = n.strategy_id,
        a = n.strategy_revision,
        i = n.strategy_correlation_id;
      if (
        (r !== "strategy" && r !== "candidate") ||
        typeof o != "string" ||
        o.trim() === "" ||
        typeof i != "string" ||
        i.trim() === "" ||
        typeof a != "number" ||
        !Number.isInteger(a) ||
        a <= 0
      )
        return null;
      if (r === "strategy")
        return n.candidate_revision != null ||
          n.candidate_correlation_id != null
          ? null
          : {
              kind: r,
              strategy_correlation_id: i,
              strategy_id: o,
              strategy_revision: a,
            };
      var l = n.candidate_revision,
        s = n.candidate_correlation_id;
      return typeof l != "number" ||
        !Number.isInteger(l) ||
        l <= 0 ||
        typeof s != "string" ||
        s.trim() === ""
        ? null
        : {
            candidate_correlation_id: s,
            candidate_revision: l,
            kind: r,
            strategy_correlation_id: i,
            strategy_id: o,
            strategy_revision: a,
          };
    }
    function y(e) {
      var t = r("useAdsALCustomEventLogger")(),
        n = m(null),
        a = d(
          function () {
            return h(e.rawIdentity);
          },
          [e.rawIdentity],
        ),
        i = u(
          function (n) {
            var i, l;
            if (
              !e.isRendered ||
              a == null ||
              a.kind !== e.expectedKind ||
              e.botResponseId == null ||
              e.botResponseId === "" ||
              e.conversationId == null ||
              e.conversationId === "" ||
              o("ALToolTab").getCurrentToolTab().tool !==
                "Ads Manager (Campaigns)"
            )
              return !1;
            var s =
              ((i = {}),
              (i["maiba:bot_response_id"] = e.botResponseId),
              (i["maiba:conversation_id"] = e.conversationId),
              (i["maiba:creation_client_version"] = g),
              (i["maiba:creation_event_contract_version"] = p),
              (i["maiba:creation_event_instance_id"] = r("uuidv4")()),
              (i["maiba:creation_identity_scheme"] = f),
              (i["maiba:creation_runtime_family"] = _),
              (i["maiba:producer"] = "ads_manager_web_client"),
              (i["maiba:strategy_correlation_id"] = a.strategy_correlation_id),
              (i["maiba:strategy_id"] = a.strategy_id),
              i);
            a.candidate_correlation_id != null &&
              (s["maiba:candidate_correlation_id"] =
                a.candidate_correlation_id);
            var u =
              ((l = {}),
              (l["maiba:strategy_revision"] = String(a.strategy_revision)),
              l);
            a.candidate_revision != null &&
              (u["maiba:candidate_revision"] = String(a.candidate_revision));
            var c = a.kind === "candidate";
            try {
              t.log(
                n === "mounted"
                  ? c
                    ? "maiba_creation_candidate_review_client_mounted"
                    : "maiba_creation_strategy_card_client_mounted"
                  : c
                    ? "maiba_creation_candidate_review_clicked"
                    : "maiba_creation_strategy_card_clicked",
                { int: u, string: s },
              );
            } catch (e) {}
            return !0;
          },
          [
            t,
            a,
            e.botResponseId,
            e.conversationId,
            e.expectedKind,
            e.isRendered,
          ],
        );
      return (
        c(
          function () {
            if (a != null) {
              var t = JSON.stringify([
                e.botResponseId,
                e.conversationId,
                e.expectedKind,
                a.strategy_id,
                a.strategy_revision,
                a.strategy_correlation_id,
                a.candidate_revision,
                a.candidate_correlation_id,
              ]);
              n.current !== t && i("mounted") && (n.current = t);
            }
          },
          [a, i, e.botResponseId, e.conversationId, e.expectedKind],
        ),
        u(
          function () {
            i("clicked");
          },
          [i],
        )
      );
    }
    ((l.parseMAIBACreationLifecycleIdentity = h),
      (l.useMAIBACreationLifecycleClientLogging = y));
  },
  98,
);
