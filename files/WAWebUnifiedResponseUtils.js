__d(
  "WAWebUnifiedResponseUtils",
  [
    "WACryptoSha256",
    "WAHex",
    "WAWebBotUnifiedResponseGating",
    "WAWebQplFlowWrapper",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
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
      var t = [];
      for (var n of e.sections)
        for (var r of u(n.view_model)) "imagine_type" in r && t.push(r);
      return t;
    }
    function d(e) {
      return String(e) === "ANIMATE";
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WACryptoSha256").sha256(new TextEncoder().encode(e));
          return o("WAHex").toLowerCaseHex(new Uint8Array(t));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.unifiedResponse;
      return t == null
        ? !1
        : f(t) ||
            o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(
              e.t,
            );
    }
    function f(e) {
      return (
        g(e) &&
        o(
          "WAWebBotUnifiedResponseGating",
        ).isUnifiedResponseImagineReceiverEnabled()
      );
    }
    function g(e) {
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
    function h(e) {
      return y(e) != null;
    }
    function y(e) {
      var t;
      if (e == null) return null;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      for (var r of n)
        for (var o of u(r.view_model))
          if (o.__typename === "GenAIMetaSubsQuotaUpsellPrimitive") return o;
      return null;
    }
    function C(e) {
      var t;
      return (t = y(e)) == null ? void 0 : t.benefit_type;
    }
    var b = [
      "GenAIImaginePrimitive",
      "GenAIImagePrimitive",
      "GenAIReelPrimitive",
    ];
    function v(e) {
      if (e != null) return { data: e };
    }
    function S(e) {
      if (e == null) return !1;
      for (var t of e.sections) {
        var n = u(t.view_model);
        for (var r of n) if (b.includes(r.__typename)) return !0;
      }
      return !1;
    }
    function R(e) {
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
    function L(e) {
      return e.embedded_screens == null || e.embedded_screens.length === 0
        ? e
        : babelHelpers.extends({}, e, { embedded_screens: void 0 });
    }
    ((l.UnifiedResponseQPLLogger = s),
      (l.getPrimitives = u),
      (l.getImaginePrimitives = c),
      (l.isAnimateImagineType = d),
      (l.computeRichResponseMediaId = m),
      (l.isUnifiedResponseVisible = _),
      (l.isImagineResponse = g),
      (l.isQuotaUpsellResponse = h),
      (l.getQuotaUpsellBenefitType = C),
      (l.buildUnifiedResponseFromRawData = v),
      (l.unifiedResponseHasMediaContent = S),
      (l.getMetaAiEmbeddedSources = R),
      (l.stripEmbeddedScreens = L));
  },
  98,
);
