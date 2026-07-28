__d(
  "WAWebUnifiedResponseUtils",
  ["WAWebBotUnifiedResponseGating", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891428050, "1412"),
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.markerStart = function (n) {
            e != null &&
              o("WAWebQplFlowWrapper").QPL.markerStart(e, { annotations: n });
          }),
          (n.markerEnd = function (n) {
            e != null && o("WAWebQplFlowWrapper").QPL.markerEnd(e, n);
          }),
          (n.markerPoint = function (n) {
            e != null && o("WAWebQplFlowWrapper").QPL.markerPoint(e, n);
          }),
          t
        );
      })();
    function u(e) {
      return e == null
        ? []
        : e.primitive
          ? [e.primitive]
          : e.primitives
            ? e.primitives
            : [];
    }
    function c(e) {
      var t = e.unifiedResponse;
      return t == null
        ? !1
        : d(t) ||
            o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(
              e.t,
            );
    }
    function d(e) {
      return (
        m(e) &&
        o(
          "WAWebBotUnifiedResponseGating",
        ).isUnifiedResponseImagineReceiverEnabled()
      );
    }
    function m(e) {
      if (e == null) return !1;
      var t = !1;
      for (var n of e.sections) {
        var r = u(n.view_model);
        for (var o of r)
          if (o.__typename === "GenAIImaginePrimitive") t = !0;
          else if (o.__typename === "GenAIMarkdownTextUXPrimitive") {
            if (o.inline_entities && o.inline_entities.length > 0) return !1;
          } else return !1;
      }
      return t;
    }
    function p(e) {
      var t;
      if (e == null) return !1;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      for (var r of n)
        for (var o of u(r.view_model))
          if (o.__typename === "GenAIMetaSubsQuotaUpsellPrimitive") return !0;
      return !1;
    }
    var _ = [
      "GenAIImaginePrimitive",
      "GenAIImagePrimitive",
      "GenAIReelPrimitive",
    ];
    function f(e) {
      if (e != null) return { data: e };
    }
    function g(e) {
      if (e == null) return !1;
      for (var t of e.sections) {
        var n = u(t.view_model);
        for (var r of n) if (_.includes(r.__typename)) return !0;
      }
      return !1;
    }
    function h(e) {
      var t = e == null ? void 0 : e.embedded_screens;
      if (t == null || t.length === 0) return [];
      var n = [];
      for (var r of t)
        for (var o of (a = r.content) != null ? a : []) {
          var a;
          if ("viewModel" in o) {
            var i = o.viewModel;
            if (i != null)
              for (var l of (s = i.sources) != null ? s : []) {
                var s;
                l.source_url != null && l.source_url !== "" && n.push(l);
              }
          }
        }
      return n;
    }
    function y(e) {
      return e.embedded_screens == null || e.embedded_screens.length === 0
        ? e
        : babelHelpers.extends({}, e, { embedded_screens: void 0 });
    }
    ((l.UnifiedResponseQPLLogger = s),
      (l.getPrimitives = u),
      (l.isUnifiedResponseVisible = c),
      (l.isImagineResponse = m),
      (l.isQuotaUpsellResponse = p),
      (l.buildUnifiedResponseFromRawData = f),
      (l.unifiedResponseHasMediaContent = g),
      (l.getMetaAiEmbeddedSources = h),
      (l.stripEmbeddedScreens = y));
  },
  98,
);
