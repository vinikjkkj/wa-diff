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
      s = new Set(["LOCAL", "SAVED"]),
      u = (function () {
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
    function c(e) {
      return e == null
        ? []
        : e.primitive
          ? [e.primitive]
          : e.primitives
            ? e.primitives
            : [];
    }
    function d(e) {
      var t = [];
      for (var n of e.sections)
        for (var r of c(n.view_model)) "imagine_type" in r && t.push(r);
      return t;
    }
    function m(e) {
      return String(e) === "ANIMATE";
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WACryptoSha256").sha256(new TextEncoder().encode(e));
          return o("WAHex").toLowerCaseHex(new Uint8Array(t));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = e.unifiedResponse;
      return t == null
        ? !1
        : g(t) ||
            o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(
              e.t,
            );
    }
    function g(e) {
      return (
        h(e) &&
        o(
          "WAWebBotUnifiedResponseGating",
        ).isUnifiedResponseImagineReceiverEnabled()
      );
    }
    function h(e) {
      if (e == null) return !1;
      var t = !1;
      for (var n of e.sections) {
        var r = c(n.view_model);
        for (var o of r)
          if (o.__typename === "GenAIImaginePrimitive") t = !0;
          else if (o.__typename === "GenAIMarkdownTextUXPrimitive") {
            if (o.inline_entities && o.inline_entities.length > 0) return !1;
          } else return !1;
      }
      return t;
    }
    function y(e) {
      return C(e) != null;
    }
    function C(e) {
      var t;
      if (e == null) return null;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      for (var r of n)
        for (var o of c(r.view_model))
          if (o.__typename === "GenAIMetaSubsQuotaUpsellPrimitive") return o;
      return null;
    }
    function b(e) {
      var t;
      if (e == null || ((t = e.footer_sections) != null ? t : []).length > 0)
        return null;
      var n = e.sections.at(-1),
        r = c(n == null ? void 0 : n.view_model).at(-1);
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
    function v(e) {
      var t,
        n,
        r = e.sections;
      return (
        b(e) != null &&
        r.length === 1 &&
        c(r[0].view_model).length === 1 &&
        ((t = e.embedded_screens) != null ? t : []).length === 0 &&
        ((n = e.nested_responses) != null ? n : []).length === 0 &&
        e.streaming_action == null
      );
    }
    function S(e) {
      var t;
      return (t = C(e)) == null ? void 0 : t.benefit_type;
    }
    var R = [
      "GenAIFilePrimitive",
      "GenAIImaginePrimitive",
      "GenAIImagePrimitive",
      "GenAIReelPrimitive",
    ];
    function L(e) {
      if (e != null) return { data: e };
    }
    function E(e) {
      if (e == null) return !1;
      for (var t of e.sections) {
        var n = c(t.view_model);
        for (var r of n) if (R.includes(r.__typename)) return !0;
      }
      return !1;
    }
    function k(e) {
      return e == null
        ? !1
        : N(e).some(function (e) {
            return c(e.view_model).some(T);
          });
    }
    function I(e) {
      var t = 0;
      for (var n of [].concat(
        e.sections,
        (r = e.footer_sections) != null ? r : [],
      )) {
        var r;
        t += c(n.view_model).filter(T).length;
      }
      return t >= 2;
    }
    function T(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIMuseConnectorActionCardPrimitive"
      );
    }
    function D(e) {
      return e == null
        ? !1
        : M(e).some(function (e) {
            return c(e).some($);
          });
    }
    function x(e) {
      var t,
        n = e.sections;
      if (
        n.length !== 1 ||
        ((t = e.footer_sections) != null ? t : []).length > 0 ||
        j(e) ||
        e.streaming_action != null
      )
        return !1;
      var r = c(n[0].view_model);
      return r.length === 1 && P(r[0]);
    }
    function $(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAISpaceCardPrimitive"
      );
    }
    function P(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAISpaceCardPrimitive" &&
          "display_name" in e &&
          "source" in e
        ) {
          var t = e.display_name,
            n = e.source;
          return typeof t == "string" && t.trim() !== "" && s.has(n);
        }
        return !1;
      })(e);
    }
    function N(e) {
      var t;
      return [].concat(
        A(e),
        ((t = e.nested_responses) != null ? t : []).flatMap(A),
      );
    }
    function M(e) {
      var t;
      return [].concat(
        N(e).map(function (e) {
          return e.view_model;
        }),
        [e].concat((t = e.nested_responses) != null ? t : []).flatMap(w),
      );
    }
    function w(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIUnifiedResponseInsertToStreamingCacheAction" &&
          "insertions" in e
        ) {
          var t = e.insertions;
          return (t != null ? t : []).map(function (e) {
            return e.content;
          });
        }
        return [];
      })(e.streaming_action);
    }
    function A(e) {
      var t, n, r;
      return [].concat(
        (t = e.sections) != null ? t : [],
        (n = e.footer_sections) != null ? n : [],
        ((r = e.embedded_screens) != null ? r : []).flatMap(F),
      );
    }
    function F(e) {
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
    function O(e) {
      return e == null
        ? !1
        : N(e).some(function (e) {
            return c(e.view_model).some(B);
          });
    }
    function B(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAISecureCredentialRequestPrimitive"
      );
    }
    function W(e) {
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
    function q(e) {
      return e.embedded_screens == null || e.embedded_screens.length === 0
        ? e
        : babelHelpers.extends({}, e, { embedded_screens: void 0 });
    }
    function U(e) {
      var t = e.sections,
        n = t.map(V),
        r = new Map();
      n.forEach(function (e, t) {
        if (e != null) {
          var o = r.get(e.browser_task_id),
            a = o != null ? n[o] : null;
          (a == null || H(e, a)) && r.set(e.browser_task_id, t);
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
    function V(e) {
      var t = c(e.view_model);
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
    function H(e, t) {
      var n,
        r,
        o = (n = e.version) != null ? n : 0,
        a = (r = t.version) != null ? r : 0;
      return o !== a ? o > a : G(e) >= G(t);
    }
    function G(e) {
      var t,
        n = Number((t = e.updated_at_ms) != null ? t : 0);
      return Number.isFinite(n) ? n : 0;
    }
    function z(e) {
      var t;
      if (e == null || j(e)) return !1;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      return n.length > 0 && n.every(K);
    }
    function j(e) {
      var t, n;
      return (
        ((t = e.nested_responses) != null ? t : []).length > 0 ||
        ((n = e.embedded_screens) != null ? n : []).length > 0
      );
    }
    function K(e) {
      var t = c(e.view_model);
      return t.length > 0 && t.every(Q);
    }
    function Q(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIBotProgressStatusPrimitive" &&
        e.is_in_progress === !1
      );
    }
    ((l.UnifiedResponseQPLLogger = u),
      (l.getPrimitives = c),
      (l.getImaginePrimitives = d),
      (l.isAnimateImagineType = m),
      (l.computeRichResponseMediaId = p),
      (l.isUnifiedResponseVisible = f),
      (l.isImagineResponse = h),
      (l.isQuotaUpsellResponse = y),
      (l.trailingBrowserTaskId = b),
      (l.isSoleBrowserTaskCardResponse = v),
      (l.getQuotaUpsellBenefitType = S),
      (l.buildUnifiedResponseFromRawData = L),
      (l.unifiedResponseHasMediaContent = E),
      (l.unifiedResponseHasConnectorActionCard = k),
      (l.hasMultipleConnectorActionCards = I),
      (l.unifiedResponseHasSpaceCard = D),
      (l.isSoleSpaceCardResponse = x),
      (l.unifiedResponseHasSecureCredentialRequest = O),
      (l.isSecureCredentialRequest = B),
      (l.getMetaAiEmbeddedSources = W),
      (l.stripEmbeddedScreens = q),
      (l.highestVersionBrowserTasks = U),
      (l.isSettledProgressStatusOnly = z),
      (l.hasNestedOrEmbeddedContent = j));
  },
  98,
);
