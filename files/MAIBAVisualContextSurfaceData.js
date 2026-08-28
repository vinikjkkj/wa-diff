__d(
  "MAIBAVisualContextSurfaceData",
  ["$InternalEnum", "ODS", "gkx", "hyperionAutoLogging", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "EXCLUDE_FROM_SURFACE_TREE",
      c = n("$InternalEnum")({
        SELECTED: "selected",
        UNSELECTED: "unselected",
        CHECKED: "checked",
        UNCHECKED: "unchecked",
        FILE_SELECTED: "file selected",
        NO_FILE: "no file",
      });
    function d(t, n) {
      return (
        e || (e = o("hyperionAutoLogging"))
      ).ALInteractableDOMElement.getElementTextEvent(t, n, null, !1, {
        skipChildSurface: !0,
        updateText: function (t, n) {
          (t.elements == null && (t.elements = []), t.elements.push(n.element));
        },
        getText: function (t) {
          var e = [],
            n = t.reduce(
              function (t, n) {
                var r, o;
                e.push(n);
                var a = (r = t.elements) != null ? r : [],
                  i = (o = n.elements) != null ? o : [];
                return babelHelpers.extends({}, t, n, {
                  text: t.text + n.text,
                  elements: [].concat(a, i),
                });
              },
              { text: "", source: "innerText", elements: [] },
            );
          return ((n.sourceTexts = e), n);
        },
      });
    }
    function m(e, t) {
      var n,
        r,
        o = d(e, t);
      return (
        (n =
          (r = o.elementText) == null || (r = r.sourceTexts) == null
            ? void 0
            : r.flatMap(function (e) {
                var t;
                return (t = e.elements) != null ? t : [];
              })) != null
          ? n
          : []
      ).filter(Boolean);
    }
    function p(e, t) {
      var n, r;
      return (n =
        (r = d(e, t).elementText) == null ||
        (r = r.sourceTexts) == null ||
        (r = r.map(function (e) {
          return e.text;
        })) == null
          ? void 0
          : r.join(" ")) != null
        ? n
        : "";
    }
    function _(e) {
      if (e instanceof HTMLInputElement) {
        var t = Array.from(e.labels || []).find(function (e) {
          return e.textContent != null && e.textContent.trim() !== "";
        });
        if (t != null) return t.textContent;
      }
      return p(e, null);
    }
    function f(e) {
      var t,
        n = g(e);
      if (n === "combobox") return null;
      if (n === "button") {
        var r = e.getAttribute("aria-pressed");
        return r !== null ? (r === "true" ? c.SELECTED : c.UNSELECTED) : null;
      }
      if (e instanceof HTMLInputElement)
        switch (n) {
          case "checkbox":
            return e.checked ? c.CHECKED : c.UNCHECKED;
          case "radio":
            return e.checked ? c.SELECTED : c.CHECKED;
          case "file":
            return ((t = e.files) == null ? void 0 : t.length) > 0
              ? c.FILE_SELECTED
              : c.NO_FILE;
          default:
            return e.value;
        }
      return e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement
        ? e.value
        : e.textContent.trim();
    }
    function g(e) {
      return e instanceof HTMLInputElement ? e.type : e.getAttribute("role");
    }
    function h(e) {
      return e instanceof HTMLInputElement && e.disabled === !0
        ? !0
        : e.getAttribute("aria-disabled") === "true";
    }
    function y(e) {
      var t = g(e);
      switch (t) {
        case "checkbox":
          return "boolean";
        case "radio":
          return "choice";
        case "button":
        case "submit":
          return "button";
        case "combobox":
        case "text":
          return "text";
        default:
          return "button";
      }
    }
    function C(e) {
      var t = {};
      r("justknobx")._("3465")
        ? (t = babelHelpers.extends({}, t, { role: y(e) }))
        : (t = babelHelpers.extends({}, t, { inputRole: y(e) }));
      var n = f(e);
      n != null && n !== "" && (t = babelHelpers.extends({}, t, { value: n }));
      var o = h(e);
      o === !0 && (t = babelHelpers.extends({}, t, { disabled: o }));
      var a = _(e);
      return (
        a != null &&
          a !== "" &&
          (t = babelHelpers.extends({}, t, { label: a })),
        e instanceof HTMLSelectElement &&
          (t.options = Array.from(e.options).map(function (e) {
            return e.text;
          })),
        t
      );
    }
    function b(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }
    function v(e, t) {
      (e === void 0 && (e = !1), t === void 0 && (t = !1));
      var n = r("gkx")("18014"),
        o = '[role="button"], input, [role="combobox"]',
        a = n ? o + ', [data-interactable*="|click|"]' : o,
        i = document.querySelectorAll(a),
        l = new Map();
      return (
        i.forEach(function (n) {
          if (!(!t && !b(n))) {
            var o = S(n);
            if (o != null) {
              l.has(o) ||
                l.set(o, { inputData: [], refs: [], inputDataKeys: new Set() });
              var a = l.get(o);
              if (a == null) return;
              var i = C(n);
              if (r("justknobx")._("3465")) {
                var s = JSON.stringify(i);
                a.inputDataKeys.has(s) ||
                  (a.inputDataKeys.add(s),
                  a.inputData.push(i),
                  e && a.refs.push(n));
              } else (a.inputData.push(i), e && a.refs.push(n));
            }
          }
        }),
        l
      );
    }
    function S(t) {
      var n = (
          e || (e = o("hyperionAutoLogging"))
        ).ALSurfaceUtils.getAncestralSurfaceNode(
          t == null ? void 0 : t.parentElement,
        ),
        r = e.ALSurfaceUtils.getElementSurface(n);
      return r;
    }
    function R(e) {
      return (
        e.text == null &&
        e.children == null &&
        e.metadata == null &&
        (e.inputs == null || e.inputs.length === 0)
      );
    }
    function L(e, t, n, r) {
      r === void 0 && (r = {});
      var o = e
        .getChildren()
        .map(function (e) {
          return E(e, n, r);
        })
        .filter(Boolean);
      return o.length > 0 ? babelHelpers.extends({}, t, { children: o }) : t;
    }
    function E(e, t, n) {
      if ((n === void 0 && (n = {}), e.getInheritedPropery(u))) return null;
      var r = e.surfaceName,
        o = e.surface,
        a = { surface: r };
      n.includeSurfacePath === !0 &&
        (a = babelHelpers.extends({}, a, { surfacePath: o }));
      var i = e.metadata;
      if (i != null) {
        var l = {},
          s = !1;
        for (var c of Object.keys(i))
          c.startsWith("maiba:") && ((l[c] = i[c]), (s = !0));
        s && (a = babelHelpers.extends({}, a, { metadata: l }));
      }
      var d = e.getElements(!0)[0];
      if (d != null && !d.isConnected) {
        var _ = {};
        return ((_ = L(e, _, t, n)), R(_) ? null : _);
      }
      var f = p(d, e.surface);
      f.trim() !== "" && (a = babelHelpers.extends({}, a, { text: f }));
      var g = t.get(o);
      if (
        (g != null &&
          g.inputData.length > 0 &&
          ((a = babelHelpers.extends({}, a, { inputs: g.inputData })),
          (g.inputData = [])),
        n.includeRef === !0)
      ) {
        var h = m(d, e.surface),
          y = [];
        (g != null &&
          g.refs.length > 0 &&
          ((y = [].concat(g.refs)), (g.refs = [])),
          (a = babelHelpers.extends({}, a, { refs: { text: h, inputs: y } })));
      }
      return ((a = L(e, a, t, n)), R(a) ? null : a);
    }
    function k(t) {
      (t === void 0 && (t = {}),
        t.includeRef === !0
          ? (s || (s = o("ODS"))).bumpEntityKey(
              68,
              "maiba_visual_context",
              "get_al_surface_data_with_include_ref",
            )
          : (s || (s = o("ODS"))).bumpEntityKey(
              68,
              "maiba_visual_context",
              "get_al_surface_data_without_include_ref",
            ));
      var n = v(t.includeRef === !0, t.showHidden === !0),
        r = {};
      return (
        (r = L(
          (e || (e = o("hyperionAutoLogging"))).ALSurfaceData.root,
          r,
          n,
          t,
        )),
        r
      );
    }
    ((l.EXCLUDE_FROM_SURFACE_TREE = u),
      (l.extractInputElementData = C),
      (l.getALSurfaceData = k));
  },
  98,
);
