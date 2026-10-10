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
      if (e == null || ((t = e.footer_sections) != null ? t : []).length > 0)
        return null;
      var n = e.sections.at(-1),
        r = u(n == null ? void 0 : n.view_model).at(-1);
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIBrowserTaskPrimitive" &&
          "browser_task_id" in e
        ) {
          var t = e.browser_task_id;
          return typeof t == "string" && t.trim() !== "" ? t.trim() : null;
        }
        return null;
      })(r);
    }
    function b(e) {
      var t;
      return (t = y(e)) == null ? void 0 : t.benefit_type;
    }
    var v = [
      "GenAIFilePrimitive",
      "GenAIImaginePrimitive",
      "GenAIImagePrimitive",
      "GenAIReelPrimitive",
    ];
    function S(e) {
      if (e != null) return { data: e };
    }
    function R(e) {
      if (e == null) return !1;
      for (var t of e.sections) {
        var n = u(t.view_model);
        for (var r of n) if (v.includes(r.__typename)) return !0;
      }
      return !1;
    }
    function L(e) {
      return e == null
        ? !1
        : k(e).some(function (e) {
            return u(e.view_model).some(E);
          });
    }
    function E(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIMuseConnectorActionCardPrimitive"
      );
    }
    function k(e) {
      var t;
      return [].concat(
        I(e),
        ((t = e.nested_responses) != null ? t : []).flatMap(I),
      );
    }
    function I(e) {
      var t, n, r;
      return [].concat(
        (t = e.sections) != null ? t : [],
        (n = e.footer_sections) != null ? n : [],
        ((r = e.embedded_screens) != null ? r : []).flatMap(T),
      );
    }
    function T(e) {
      var t;
      return ((t = e.content) != null ? t : []).flatMap(function (e) {
        if ("view_model" in e) return [e];
        if ("sections" in e) {
          var t;
          return (t = e.sections) != null ? t : [];
        }
        if ("tabs" in e) {
          var n;
          return ((n = e.tabs) != null ? n : []).flatMap(function (e) {
            var t;
            return (t = e.sections) != null ? t : [];
          });
        }
        return [];
      });
    }
    function D(e) {
      return e == null
        ? !1
        : k(e).some(function (e) {
            return u(e.view_model).some(x);
          });
    }
    function x(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAISecureCredentialRequestPrimitive"
      );
    }
    function $(e) {
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
    function P(e) {
      return e.embedded_screens == null || e.embedded_screens.length === 0
        ? e
        : babelHelpers.extends({}, e, { embedded_screens: void 0 });
    }
    function N(e) {
      var t = e.sections,
        n = t.map(M),
        r = new Map();
      n.forEach(function (e, t) {
        if (e != null) {
          var o = r.get(e.browser_task_id),
            a = o != null ? n[o] : null;
          (a == null || w(e, a)) && r.set(e.browser_task_id, t);
        }
      });
      var o = t.filter(function (e, t) {
        var o = n[t];
        return o == null || r.get(o.browser_task_id) === t;
      });
      return o.length === t.length
        ? e
        : babelHelpers.extends({}, e, { sections: o });
    }
    function M(e) {
      var t = u(e.view_model);
      return t.length !== 1
        ? null
        : (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.__typename === "GenAIBrowserTaskPrimitive"
            ) {
              var t = e;
              return t;
            }
            return null;
          })(t[0]);
    }
    function w(e, t) {
      var n,
        r,
        o = (n = e.version) != null ? n : 0,
        a = (r = t.version) != null ? r : 0;
      return o !== a ? o > a : A(e) >= A(t);
    }
    function A(e) {
      var t,
        n = Number((t = e.updated_at_ms) != null ? t : 0);
      return Number.isFinite(n) ? n : 0;
    }
    function F(e) {
      var t;
      if (e == null || O(e)) return !1;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      return n.length > 0 && n.every(B);
    }
    function O(e) {
      var t, n;
      return (
        ((t = e.nested_responses) != null ? t : []).length > 0 ||
        ((n = e.embedded_screens) != null ? n : []).length > 0
      );
    }
    function B(e) {
      var t = u(e.view_model);
      return t.length > 0 && t.every(W);
    }
    function W(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIBotProgressStatusPrimitive" &&
        e.is_in_progress === !1
      );
    }
    ((l.UnifiedResponseQPLLogger = s),
      (l.getPrimitives = u),
      (l.getImaginePrimitives = c),
      (l.isAnimateImagineType = d),
      (l.computeRichResponseMediaId = m),
      (l.isUnifiedResponseVisible = _),
      (l.isImagineResponse = g),
      (l.isQuotaUpsellResponse = h),
      (l.trailingBrowserTaskId = C),
      (l.getQuotaUpsellBenefitType = b),
      (l.buildUnifiedResponseFromRawData = S),
      (l.unifiedResponseHasMediaContent = R),
      (l.unifiedResponseHasConnectorActionCard = L),
      (l.unifiedResponseHasSecureCredentialRequest = D),
      (l.isSecureCredentialRequest = x),
      (l.getMetaAiEmbeddedSources = $),
      (l.stripEmbeddedScreens = P),
      (l.highestVersionBrowserTasks = N),
      (l.isSettledProgressStatusOnly = F),
      (l.hasNestedOrEmbeddedContent = O));
  },
  98,
);
