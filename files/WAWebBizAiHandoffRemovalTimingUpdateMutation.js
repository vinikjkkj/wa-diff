__d(
  "WAWebBizAiHandoffRemovalTimingUpdateMutation",
  [
    "CometRelay",
    "Promise",
    "WALogger",
    "WAWebBizAiHandoffRemovalTimingUpdateMutation.graphql",
    "XFBMetaAIBizAgentWAHandoffListRemovalTiming.facebook",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (c || (c = o("react"))).useCallback,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiHandoffRemovalTimingUpdateMutation.graphql")),
      p = { isSuccess: !0 },
      _ = { isSuccess: !1 };
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t = o("CometRelay").useMutation(m),
        a = t[0],
        i;
      return (
        e[0] !== a
          ? ((i = function (t) {
              var e = r(
                "XFBMetaAIBizAgentWAHandoffListRemovalTiming.facebook",
              ).cast(t);
              return e == null
                ? (u || (u = n("Promise"))).resolve(_)
                : new (u || (u = n("Promise")))(function (t) {
                    a({
                      variables: { input: { timing: e } },
                      updater: function (n, r) {
                        var t;
                        (r == null ||
                        (t =
                          r.xfb_meta_ai_biz_agent_wa_update_handoff_removal_timing) ==
                          null
                          ? void 0
                          : t.success) === !0 && g(n, e);
                      },
                      onCompleted: function (n) {
                        var e;
                        t(
                          (n == null ||
                          (e =
                            n.xfb_meta_ai_biz_agent_wa_update_handoff_removal_timing) ==
                            null
                            ? void 0
                            : e.success) === !0
                            ? p
                            : _,
                        );
                      },
                      onError: function (n) {
                        (o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "updateHandoffRemovalTiming failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(n))
                          .sendLogs("biz-ai-handoff-removal-timing-update"),
                          t(_));
                      },
                    });
                  });
            }),
            (e[0] = a),
            (e[1] = i))
          : (i = e[1]),
        i
      );
    }
    function g(e, t) {
      var n = e.getRoot(),
        r = n.getLinkedRecord(
          "xfb_meta_ai_biz_agent_wa_handoff_removal_timing",
        );
      (r == null &&
        ((r = e.create(
          "client:xfb_meta_ai_biz_agent_wa_handoff_removal_timing",
          "XFBMetaAIBizAgentWAHandoffRemovalTiming",
        )),
        n.setLinkedRecord(
          r,
          "xfb_meta_ai_biz_agent_wa_handoff_removal_timing",
        )),
        r.setValue(t, "timing"));
    }
    l.useUpdateHandoffRemovalTiming = f;
  },
  98,
);
