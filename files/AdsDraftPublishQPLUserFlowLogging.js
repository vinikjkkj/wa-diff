__d(
  "AdsDraftPublishQPLUserFlowLogging",
  [
    "AdsDraftPublishQPLUserFlowLoggingConsts",
    "AdsManagerQPLUserFlowLogger",
    "AdsPerfInteractionsController",
    "QPLSharing",
    "QPLUserFlow",
    "SharedQPLPointRecorder",
    "adsDraftIsSystemError",
    "adsGetInferredLinkedIDsSelector",
    "adsGetInferredProductTypeSelectorAnnotationUtils",
    "equalsSet",
    "err",
    "justknobx",
    "performanceNow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e.some(function (e) {
        return r("adsDraftIsSystemError")(e);
      });
    }
    function u(e) {
      return e.some(function (e) {
        return e != null && !r("adsDraftIsSystemError")(e);
      });
    }
    function c(e, t, n) {
      var o,
        a,
        i = t.endFailure,
        l = t.endSuccess,
        s = t.endValidationFailure,
        u = t.instanceKey,
        c = {
          opes_mids: ((o = n.request) != null ? o : []).concat(
            (a = n.fragment) != null ? a : [],
          ),
          request_opes_mids: n.request,
          fragment_opes_mids: n.fragment,
        };
      i
        ? r("QPLUserFlow").endFailure(
            e,
            "At least one fragment failed to publish with a system error",
            {
              annotations: {
                string: { failure_type: "SYSTEM_FAILURE" },
                string_array: c,
              },
              instanceKey: u,
            },
          )
        : s
          ? r("QPLUserFlow").endFailure(e, "PUBLISH_VALIDATION_FAILED", {
              annotations: {
                string: { failure_type: "VALIDATION_FAILURE" },
                string_array: c,
              },
              instanceKey: u,
            })
          : l && r("QPLUserFlow").endSuccess(e, { instanceKey: u });
    }
    function d(e, t) {
      var n = new Set();
      return (
        e == null ||
          e.forEach(function (e) {
            var r = e.split("_"),
              o = r[0],
              a = r[1];
            (t == null || t(o)) && a !== "none" && a != null && n.add(a);
          }),
        Array.from(n)
      );
    }
    function m(e) {
      var t, n;
      p(e);
      var a = e.options,
        l = e.pointName,
        m =
          a == null || (t = a.data) == null || (t = t.string_array) == null
            ? void 0
            : t.opes_mids,
        _ =
          a == null || (n = a.data) == null || (n = n.string_array) == null
            ? void 0
            : n.fragment_ids_to_opes_mids;
      o("AdsDraftPublishQPLUserFlowLoggingConsts").PUBLISH_USER_FLOWS.forEach(
        function (e) {
          if (o("AdsManagerQPLUserFlowLogger").isActiveFlow(e)) {
            if (e === r("qpl")._(270216423, "7513")) {
              var t, n, p, f;
              c(
                e,
                {
                  endFailure:
                    (t =
                      a == null || (n = a.data) == null || (n = n.bool) == null
                        ? void 0
                        : n.had_system_error) != null
                      ? t
                      : !1,
                  endValidationFailure:
                    (p =
                      a == null || (f = a.data) == null || (f = f.bool) == null
                        ? void 0
                        : f.had_validation_error) != null
                      ? p
                      : !1,
                  endSuccess: !0,
                },
                { request: m, fragment: d(_) },
              );
              return;
            }
            if (e === r("qpl")._(270209385, "467")) {
              var g,
                h,
                y,
                C,
                b =
                  (g =
                    a == null || (h = a.data) == null || (h = h.bool) == null
                      ? void 0
                      : h.had_system_error) != null
                    ? g
                    : !1,
                v =
                  (y =
                    a == null || (C = a.data) == null || (C = C.bool) == null
                      ? void 0
                      : C.had_validation_error) != null
                    ? y
                    : !1,
                S = d(_);
              if (b || v) {
                var R = S.concat(m != null ? m : []),
                  L = r("err")("Publish failed");
                ((L.opes_mids = R),
                  r("AdsPerfInteractionsController").annotateFailure(
                    "am.toast_card.publish",
                    i.id,
                    { error: L },
                    b ? "SYSTEM_FAILURE" : "VALIDATION_FAILURE",
                  ));
              }
              return;
            }
            o("AdsManagerQPLUserFlowLogger").forEachMarker(
              e,
              function (e, t, n) {
                var i,
                  p,
                  f,
                  g,
                  h,
                  y,
                  C = new Set(
                    (i =
                      (p = e.annotations) == null ||
                      (p = p.string_array) == null
                        ? void 0
                        : p.fragment_ids) != null
                      ? i
                      : [],
                  ),
                  b = (
                    (f =
                      a == null ||
                      (g = a.data) == null ||
                      (g = g.string_array) == null
                        ? void 0
                        : g.fragment_ids) != null
                      ? f
                      : []
                  ).filter(function (e) {
                    return C.has(e);
                  });
                o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(
                  n,
                  { string_array: { published_fragment_ids: b } },
                  { instanceKey: t },
                );
                var v = r("equalsSet")(
                  C,
                  new Set(
                    (h =
                      (y = e.annotations) == null ||
                      (y = y.string_array) == null
                        ? void 0
                        : y.published_fragment_ids) != null
                      ? h
                      : [],
                  ),
                );
                if (l === "PUBLISH_COMPLETED") {
                  var S,
                    R,
                    L,
                    E,
                    k,
                    I = (
                      (S =
                        a == null ||
                        (R = a.data) == null ||
                        (R = R.string_array) == null
                          ? void 0
                          : R.fragment_ids_to_error_codes) != null
                        ? S
                        : []
                    ).reduce(function (e, t) {
                      var n = t.split("_"),
                        r = n[0],
                        o = n[1];
                      return (C.has(r) && o !== "none" && e.push(o), e);
                    }, []);
                  c(
                    n,
                    {
                      endFailure:
                        b.length > 0 &&
                        s(
                          [
                            a == null ||
                            (L = a.data) == null ||
                            (L = L.string) == null
                              ? void 0
                              : L.overall_publish_error_code,
                            a == null ||
                            (E = a.data) == null ||
                            (E = E.string) == null
                              ? void 0
                              : E.publish_request_error_code,
                            a == null ||
                            (k = a.data) == null ||
                            (k = k.string) == null
                              ? void 0
                              : k.publish_request_error_subcode,
                          ].concat(I),
                        ),
                      endValidationFailure: u(I),
                      endSuccess: v,
                      instanceKey: t,
                    },
                    {
                      request: m,
                      fragment: d(_, function (e) {
                        return C.has(e);
                      }),
                    },
                  );
                } else if (l === "PUBLISH_FAILED") {
                  var T, D, x, $;
                  c(
                    n,
                    {
                      endFailure:
                        b.length > 0 &&
                        ((T =
                          a == null ||
                          (D = a.data) == null ||
                          (D = D.bool) == null
                            ? void 0
                            : D.had_system_error) != null
                          ? T
                          : !1),
                      endValidationFailure:
                        b.length > 0 &&
                        ((x =
                          a == null ||
                          ($ = a.data) == null ||
                          ($ = $.bool) == null
                            ? void 0
                            : $.had_validation_error) != null
                          ? x
                          : !1),
                      endSuccess: v,
                      instanceKey: t,
                    },
                    { request: m },
                  );
                }
              },
            );
          }
        },
      );
    }
    function p(t) {
      var n = new Map();
      (r("AdsPerfInteractionsController")
        .getAllOngoingInteraction()
        .forEach(function (e) {
          var t = e.interactionConfig.qplEvent,
            r = e.interactionID;
          n.set(t, r);
        }),
        o(
          "AdsDraftPublishQPLUserFlowLoggingConsts",
        ).PERF_PUBLISH_USER_FLOWS.forEach(function (o) {
          if (n.has(o)) {
            var a = n.get(o);
            r("SharedQPLPointRecorder").record({
              interactionId: a != null ? a : "",
              name: t.pointName,
              timestamp: (e || (e = r("performanceNow")))(),
            });
          }
        }));
    }
    function _() {
      var e;
      ((e = r("QPLSharing")).onSharedPoint("PUBLISH", "PUBLISH_COMPLETED", m),
        e.onSharedPoint("PUBLISH", "PUBLISH_FAILED", m),
        e.onSharedPoint("PUBLISH_REQUEST", "PUBLISH_DRAFT_API_END", p),
        e.onSharedPoint("PUBLISH_REQUEST", "PUBLISH_DRAFT_API_ERROR", p),
        e.onSharedPoint("PUBLISH_REQUEST", "PUBLISH_DRAFT_API_START", p),
        e.onSharedPoint(
          "PUBLISH_REQUEST",
          "CREATE_AND_PUBLISH_DRAFT_API_END",
          p,
        ),
        e.onSharedPoint(
          "PUBLISH_REQUEST",
          "CREATE_AND_PUBLISH_DRAFT_API_ERROR",
          p,
        ),
        e.onSharedPoint(
          "PUBLISH_REQUEST",
          "CREATE_AND_PUBLISH_DRAFT_API_START",
          p,
        ),
        e.onSharedPoint("PUBLISH_REQUEST", "PUBLISH_STARTED", p));
    }
    function f(e) {
      if (r("justknobx")._("26")) {
        var t = r("adsGetInferredProductTypeSelectorAnnotationUtils")(
            e.map(function (e) {
              return { id: e.ad_object_id, type: e.ad_object_type };
            }),
          ),
          n = e
            .filter(function (e) {
              return e.action === "add";
            })
            .map(function (e) {
              return e.ad_object_id;
            });
        g(babelHelpers.extends({}, t, { new_ad_object_ids: n }));
        var a = {};
        (e.forEach(function (e) {
          var t = o(
            "adsGetInferredLinkedIDsSelector",
          ).adsGetInferredLinkedIDsSelector({
            id: e.ad_object_id,
            type: e.ad_object_type,
          });
          Object.keys(t).forEach(function (e) {
            a[e] == null && (a[e] = new Set());
            var n = t[e];
            n != null && a[e].add(n);
          });
        }),
          o(
            "AdsDraftPublishQPLUserFlowLoggingConsts",
          ).PUBLISH_USER_FLOWS.forEach(function (e) {
            o("AdsManagerQPLUserFlowLogger").isActiveFlow(e) &&
              Object.keys(a).forEach(function (t) {
                var n;
                r("QPLUserFlow").addAnnotations(e, {
                  string_array: ((n = {}), (n[t] = Array.from(a[t])), n),
                });
              });
          }));
      }
    }
    function g(e) {
      o("AdsDraftPublishQPLUserFlowLoggingConsts").PUBLISH_USER_FLOWS.forEach(
        function (t) {
          o("AdsManagerQPLUserFlowLogger").isActiveFlow(t) &&
            o("AdsManagerQPLUserFlowLogger").forEachMarker(
              t,
              function (t, n, r) {
                o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(
                  r,
                  { string_array: e },
                  { instanceKey: n },
                );
              },
            );
        },
      );
    }
    function h(e) {
      o("AdsDraftPublishQPLUserFlowLoggingConsts").PUBLISH_USER_FLOWS.forEach(
        function (t) {
          o("AdsManagerQPLUserFlowLogger").isActiveFlow(t) &&
            o("AdsManagerQPLUserFlowLogger").forEachMarker(
              t,
              function (t, n, o) {
                r("QPLUserFlow").addAnnotations(o, e, { instanceKey: n });
              },
            );
        },
      );
    }
    ((l.includesValidationError = u),
      (l.registerSharedPointCallbacks = _),
      (l.appendInferredProductTypeAnnotations = f),
      (l.logToAllPublishUserFlowsAppendArrayAnnotations = g),
      (l.logToAllPublishUserFlows = h));
  },
  98,
);
