__d(
  "WAWebUnifiedResponseUtils",
  [
    "WACryptoSha256",
    "WAHex",
    "WAWebBotUnifiedResponseGating",
    "WAWebQplFlowWrapper",
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
    async function p(e) {
      var t = await o("WACryptoSha256").sha256(new TextEncoder().encode(e));
      return o("WAHex").toLowerCaseHex(new Uint8Array(t));
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
        var r = c(n.view_model);
        for (var o of r)
          if (o.__typename === "GenAIImaginePrimitive") t = !0;
          else if (o.__typename === "GenAIMarkdownTextUXPrimitive") {
            if (o.inline_entities && o.inline_entities.length > 0) return !1;
          } else return !1;
      }
      return t;
    }
    function h(e) {
      var t,
        n = e.sections.map(function (e) {
          var t = e.view_model;
          return y(t) ? c(t).length : 0;
        }),
        r = n.reduce(function (e, t) {
          return e + t;
        }, 0),
        o = d(e);
      return (
        n.length > 0 &&
        n.every(function (e) {
          return e > 0;
        }) &&
        o.length === r &&
        o.every(C) &&
        ((t = e.footer_sections) != null ? t : []).length === 0 &&
        !J(e) &&
        e.streaming_action == null
      );
    }
    function y(e) {
      if (e == null) return !1;
      var t = e.__typename;
      return (
        t === "GenAISingleLayoutViewModel" ||
        t === "GenAIGridLayoutViewModel" ||
        t === "GenAIHScrollLayoutViewModel" ||
        t === "GenAIVStackLayoutViewModel"
      );
    }
    function C(e) {
      var t,
        n = (t = e.status) == null ? void 0 : t.status;
      return n == null || String(n) === "READY";
    }
    function b(e) {
      return v(e) != null;
    }
    function v(e) {
      var t;
      if (e == null) return null;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      for (var r of n)
        for (var o of c(r.view_model))
          if (o.__typename === "GenAIMetaSubsQuotaUpsellPrimitive") return o;
      return null;
    }
    function S(e) {
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
    function R(e) {
      var t;
      return (
        e.sections.length > 0 ||
        ((t = e.footer_sections) != null ? t : []).length > 0
      );
    }
    function L(e) {
      var t,
        n,
        r = e.sections;
      return (
        S(e) != null &&
        r.length === 1 &&
        c(r[0].view_model).length === 1 &&
        ((t = e.embedded_screens) != null ? t : []).length === 0 &&
        ((n = e.nested_responses) != null ? n : []).length === 0 &&
        e.streaming_action == null
      );
    }
    function E(e) {
      var t;
      return (t = v(e)) == null ? void 0 : t.benefit_type;
    }
    var k = [
      "GenAIFilePrimitive",
      "GenAIImaginePrimitive",
      "GenAIImagePrimitive",
      "GenAIReelPrimitive",
    ];
    function I(e) {
      if (e != null) return { data: e };
    }
    function T(e) {
      if (e == null) return !1;
      for (var t of e.sections) {
        var n = c(t.view_model);
        for (var r of n) if (k.includes(r.__typename)) return !0;
      }
      return !1;
    }
    function D(e) {
      return e == null
        ? !1
        : O(e).some(function (e) {
            return c(e.view_model).some($);
          });
    }
    function x(e) {
      var t = 0;
      for (var n of [].concat(
        e.sections,
        (r = e.footer_sections) != null ? r : [],
      )) {
        var r;
        t += c(n.view_model).filter($).length;
      }
      return t >= 2;
    }
    function $(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIMuseConnectorActionCardPrimitive"
      );
    }
    function P(e) {
      return e == null
        ? !1
        : B(e).some(function (e) {
            return c(e).some(N);
          });
    }
    function N(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIBrowserTaskPrimitive"
      );
    }
    function M(e) {
      return e == null
        ? !1
        : B(e).some(function (e) {
            return c(e).some(A);
          });
    }
    function w(e) {
      var t,
        n = e.sections;
      if (
        n.length !== 1 ||
        ((t = e.footer_sections) != null ? t : []).length > 0 ||
        J(e) ||
        e.streaming_action != null
      )
        return !1;
      var r = c(n[0].view_model);
      return r.length === 1 && F(r[0]);
    }
    function A(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAISpaceCardPrimitive"
      );
    }
    function F(e) {
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
    function O(e) {
      var t;
      return [].concat(
        q(e),
        ((t = e.nested_responses) != null ? t : []).flatMap(q),
      );
    }
    function B(e) {
      var t;
      return [].concat(
        O(e).map(function (e) {
          return e.view_model;
        }),
        [e].concat((t = e.nested_responses) != null ? t : []).flatMap(W),
      );
    }
    function W(e) {
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
    function q(e) {
      var t, n, r;
      return [].concat(
        (t = e.sections) != null ? t : [],
        (n = e.footer_sections) != null ? n : [],
        ((r = e.embedded_screens) != null ? r : []).flatMap(U),
      );
    }
    function U(e) {
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
    function V(e) {
      return e == null
        ? !1
        : O(e).some(function (e) {
            return c(e.view_model).some(H);
          });
    }
    function H(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAISecureCredentialRequestPrimitive"
      );
    }
    function G(e) {
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
    function z(e) {
      return e.embedded_screens == null || e.embedded_screens.length === 0
        ? e
        : babelHelpers.extends({}, e, { embedded_screens: void 0 });
    }
    function j(e) {
      var t = e.sections,
        n = t.map(K),
        r = new Map();
      n.forEach(function (e, t) {
        if (e != null) {
          var o = r.get(e.browser_task_id),
            a = o != null ? n[o] : null;
          (a == null || Q(e, a)) && r.set(e.browser_task_id, t);
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
    function K(e) {
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
    function Q(e, t) {
      var n,
        r,
        o = (n = e.version) != null ? n : 0,
        a = (r = t.version) != null ? r : 0;
      return o !== a ? o > a : X(e) >= X(t);
    }
    function X(e) {
      var t,
        n = Number((t = e.updated_at_ms) != null ? t : 0);
      return Number.isFinite(n) ? n : 0;
    }
    function Y(e) {
      var t;
      if (e == null || J(e)) return !1;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      return n.length > 0 && n.every(Z);
    }
    function J(e) {
      var t, n;
      return (
        ((t = e.nested_responses) != null ? t : []).length > 0 ||
        ((n = e.embedded_screens) != null ? n : []).length > 0
      );
    }
    function Z(e) {
      var t = c(e.view_model);
      return t.length > 0 && t.every(ee);
    }
    function ee(e) {
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
      (l.isUnifiedResponseVisible = _),
      (l.isImagineResponse = g),
      (l.isImagineOnlyResponse = h),
      (l.isQuotaUpsellResponse = b),
      (l.trailingBrowserTaskId = S),
      (l.hasUnifiedResponseContent = R),
      (l.isSoleBrowserTaskCardResponse = L),
      (l.getQuotaUpsellBenefitType = E),
      (l.buildUnifiedResponseFromRawData = I),
      (l.unifiedResponseHasMediaContent = T),
      (l.unifiedResponseHasConnectorActionCard = D),
      (l.hasMultipleConnectorActionCards = x),
      (l.unifiedResponseHasBrowserTaskCard = P),
      (l.unifiedResponseHasSpaceCard = M),
      (l.isSoleSpaceCardResponse = w),
      (l.unifiedResponseHasSecureCredentialRequest = V),
      (l.isSecureCredentialRequest = H),
      (l.getMetaAiEmbeddedSources = G),
      (l.stripEmbeddedScreens = z),
      (l.highestVersionBrowserTasks = j),
      (l.isSettledProgressStatusOnly = Y),
      (l.hasNestedOrEmbeddedContent = J));
  },
  98,
);
