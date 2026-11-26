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
      s = "CANCEL_REASONING",
      u = new Set(["LOCAL", "SAVED"]),
      c = (function () {
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
    function d(e) {
      return e == null
        ? []
        : e.primitive
          ? [e.primitive]
          : e.primitives
            ? e.primitives
            : [];
    }
    function m(e) {
      var t = [];
      for (var n of e.sections)
        for (var r of d(n.view_model)) "imagine_type" in r && t.push(r);
      return t;
    }
    function p(e) {
      return String(e) === "ANIMATE";
    }
    async function _(e) {
      var t = await o("WACryptoSha256").sha256(new TextEncoder().encode(e));
      return o("WAHex").toLowerCaseHex(new Uint8Array(t));
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
        var r = d(n.view_model);
        for (var o of r)
          if (o.__typename === "GenAIImaginePrimitive") t = !0;
          else if (o.__typename === "GenAIMarkdownTextUXPrimitive") {
            if (o.inline_entities && o.inline_entities.length > 0) return !1;
          } else return !1;
      }
      return t;
    }
    function y(e) {
      var t,
        n = e.sections.map(function (e) {
          var t = e.view_model;
          return C(t) ? d(t).length : 0;
        }),
        r = n.reduce(function (e, t) {
          return e + t;
        }, 0),
        o = m(e);
      return (
        n.length > 0 &&
        n.every(function (e) {
          return e > 0;
        }) &&
        o.length === r &&
        o.every(b) &&
        ((t = e.footer_sections) != null ? t : []).length === 0 &&
        !ee(e) &&
        e.streaming_action == null
      );
    }
    function C(e) {
      if (e == null) return !1;
      var t = e.__typename;
      return (
        t === "GenAISingleLayoutViewModel" ||
        t === "GenAIGridLayoutViewModel" ||
        t === "GenAIHScrollLayoutViewModel" ||
        t === "GenAIVStackLayoutViewModel"
      );
    }
    function b(e) {
      var t,
        n = (t = e.status) == null ? void 0 : t.status;
      return n == null || String(n) === "READY";
    }
    function v(e) {
      return S(e) != null;
    }
    function S(e) {
      var t;
      if (e == null) return null;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      for (var r of n)
        for (var o of d(r.view_model))
          if (o.__typename === "GenAIMetaSubsQuotaUpsellPrimitive") return o;
      return null;
    }
    function R(e) {
      var t;
      if (e == null || ((t = e.footer_sections) != null ? t : []).length > 0)
        return null;
      var n = e.sections.at(-1),
        r = d(n == null ? void 0 : n.view_model).at(-1);
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
    function L(e) {
      var t;
      return (
        e.sections.length > 0 ||
        ((t = e.footer_sections) != null ? t : []).length > 0
      );
    }
    function E(e) {
      var t,
        n,
        r = e.sections;
      return (
        R(e) != null &&
        r.length === 1 &&
        d(r[0].view_model).length === 1 &&
        ((t = e.embedded_screens) != null ? t : []).length === 0 &&
        ((n = e.nested_responses) != null ? n : []).length === 0 &&
        e.streaming_action == null
      );
    }
    function k(e) {
      var t;
      return (t = S(e)) == null ? void 0 : t.benefit_type;
    }
    var I = [
      "GenAIFilePrimitive",
      "GenAIImaginePrimitive",
      "GenAIImagePrimitive",
      "GenAIReelPrimitive",
    ];
    function T(e) {
      if (e != null) return { data: e };
    }
    function D(e) {
      if (e == null) return !1;
      for (var t of e.sections) {
        var n = d(t.view_model);
        for (var r of n) if (I.includes(r.__typename)) return !0;
      }
      return !1;
    }
    function x(e) {
      return e == null
        ? !1
        : B(e).some(function (e) {
            return d(e.view_model).some(P);
          });
    }
    function $(e) {
      var t = 0;
      for (var n of [].concat(
        e.sections,
        (r = e.footer_sections) != null ? r : [],
      )) {
        var r;
        t += d(n.view_model).filter(P).length;
      }
      return t >= 2;
    }
    function P(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIMuseConnectorActionCardPrimitive"
      );
    }
    function N(e) {
      return e == null
        ? !1
        : W(e).some(function (e) {
            return d(e).some(M);
          });
    }
    function M(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIBrowserTaskPrimitive"
      );
    }
    function w(e) {
      return e == null
        ? !1
        : W(e).some(function (e) {
            return d(e).some(F);
          });
    }
    function A(e) {
      var t,
        n = e.sections;
      if (
        n.length !== 1 ||
        ((t = e.footer_sections) != null ? t : []).length > 0 ||
        ee(e) ||
        e.streaming_action != null
      )
        return !1;
      var r = d(n[0].view_model);
      return r.length === 1 && O(r[0]);
    }
    function F(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAISpaceCardPrimitive"
      );
    }
    function O(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAISpaceCardPrimitive" &&
          "display_name" in e &&
          "source" in e
        ) {
          var t = e.display_name,
            n = e.source;
          return typeof t == "string" && t.trim() !== "" && u.has(n);
        }
        return !1;
      })(e);
    }
    function B(e) {
      var t;
      return [].concat(
        U(e),
        ((t = e.nested_responses) != null ? t : []).flatMap(U),
      );
    }
    function W(e) {
      var t;
      return [].concat(
        B(e).map(function (e) {
          return e.view_model;
        }),
        [e].concat((t = e.nested_responses) != null ? t : []).flatMap(q),
      );
    }
    function q(e) {
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
    function U(e) {
      var t, n, r;
      return [].concat(
        (t = e.sections) != null ? t : [],
        (n = e.footer_sections) != null ? n : [],
        ((r = e.embedded_screens) != null ? r : []).flatMap(V),
      );
    }
    function V(e) {
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
    function H(e) {
      return e == null
        ? !1
        : B(e).some(function (e) {
            return d(e.view_model).some(G);
          });
    }
    function G(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAISecureCredentialRequestPrimitive"
      );
    }
    function z(e) {
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
    function j(e) {
      return e.embedded_screens == null || e.embedded_screens.length === 0
        ? e
        : babelHelpers.extends({}, e, { embedded_screens: void 0 });
    }
    function K(e) {
      var t = e.sections,
        n = t.map(Q),
        r = new Map();
      n.forEach(function (e, t) {
        if (e != null) {
          var o = r.get(e.browser_task_id),
            a = o != null ? n[o] : null;
          (a == null || X(e, a)) && r.set(e.browser_task_id, t);
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
    function Q(e) {
      var t = d(e.view_model);
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
    function X(e, t) {
      var n,
        r,
        o = (n = e.version) != null ? n : 0,
        a = (r = t.version) != null ? r : 0;
      return o !== a ? o > a : Y(e) >= Y(t);
    }
    function Y(e) {
      var t,
        n = Number((t = e.updated_at_ms) != null ? t : 0);
      return Number.isFinite(n) ? n : 0;
    }
    function J(e) {
      var t;
      if (e == null || ee(e)) return !1;
      var n = [].concat(e.sections, (t = e.footer_sections) != null ? t : []);
      return n.length > 0 && n.every(te);
    }
    function Z(e) {
      var t = !1;
      for (var n of [].concat(
        e.sections,
        (r = e.footer_sections) != null ? r : [],
      )) {
        var r,
          o = n.view_model;
        if (re(o)) return !1;
        for (var a of d(o))
          if (ae(a)) t = !0;
          else if (!ie(a)) return !1;
      }
      return t;
    }
    function ee(e) {
      var t, n;
      return (
        ((t = e.nested_responses) != null ? t : []).length > 0 ||
        ((n = e.embedded_screens) != null ? n : []).length > 0
      );
    }
    function te(e) {
      var t = d(e.view_model);
      return t.length > 0 && t.every(ne);
    }
    function ne(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIBotProgressStatusPrimitive" &&
        e.is_in_progress === !1
      );
    }
    function re(e) {
      return e == null
        ? !1
        : ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.__typename === "GenAIRichListItemLayoutViewModel"
          ? !0
          : oe(e);
    }
    function oe(e) {
      return (((typeof e == "object" && e !== null) ||
        typeof e == "function") &&
        e.__typename === "GenAIMultipleResponseLayoutViewModel") ||
        (((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIRichListItemLayoutViewModel")
        ? !1
        : !("primitive" in e) && !("primitives" in e);
    }
    function ae(e) {
      return (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.__typename === "GenAIBotProgressStatusPrimitive"
      );
    }
    function ie(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIDividerPrimitive"
        )
          return !0;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIFooterActionPrimitive" &&
          "cta_type" in e
        ) {
          var t = e.cta_type;
          return String(t) === s;
        }
        return (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.__typename === "GenAISpacerPrimitive") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.__typename === "GenAITimestampPlaceholderPrimitive")
        );
      })(e);
    }
    ((l.UnifiedResponseQPLLogger = c),
      (l.getPrimitives = d),
      (l.getImaginePrimitives = m),
      (l.isAnimateImagineType = p),
      (l.computeRichResponseMediaId = _),
      (l.isUnifiedResponseVisible = f),
      (l.isImagineResponse = h),
      (l.isImagineOnlyResponse = y),
      (l.isQuotaUpsellResponse = v),
      (l.trailingBrowserTaskId = R),
      (l.hasUnifiedResponseContent = L),
      (l.isSoleBrowserTaskCardResponse = E),
      (l.getQuotaUpsellBenefitType = k),
      (l.buildUnifiedResponseFromRawData = T),
      (l.unifiedResponseHasMediaContent = D),
      (l.unifiedResponseHasConnectorActionCard = x),
      (l.hasMultipleConnectorActionCards = $),
      (l.unifiedResponseHasBrowserTaskCard = N),
      (l.unifiedResponseHasSpaceCard = w),
      (l.isSoleSpaceCardResponse = A),
      (l.getAllSections = B),
      (l.unifiedResponseHasSecureCredentialRequest = H),
      (l.isSecureCredentialRequest = G),
      (l.getMetaAiEmbeddedSources = z),
      (l.stripEmbeddedScreens = j),
      (l.highestVersionBrowserTasks = K),
      (l.isSettledProgressStatusOnly = J),
      (l.isHatchProgressStatusOnly = Z),
      (l.hasNestedOrEmbeddedContent = ee),
      (l.isUnreadableLayout = oe));
  },
  98,
);
