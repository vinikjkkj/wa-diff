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
      var t = e == null ? void 0 : e.replace(/[\u200B\uFEFF]/g, "").trim();
      return t != null && t !== "" ? t : null;
    }
    function g(e) {
      return f(e.textContent);
    }
    var h = 'input, select, textarea, button, label, [role="combobox"]';
    function y(e) {
      var t,
        n,
        r =
          (t = e.getAttribute("aria-labelledby")) == null
            ? void 0
            : t.split(/\s+/).find(function (e) {
                return e !== "";
              });
      if (r == null) return null;
      var o = e.ownerDocument.getElementById(r);
      if (!(o instanceof HTMLLabelElement)) return null;
      var a =
        (o.htmlFor !== "" && o.htmlFor === e.id) ||
        (e instanceof HTMLInputElement &&
          Array.from((n = e.labels) != null ? n : []).some(function (e) {
            return e === o;
          }));
      if (a) return null;
      for (var i = e; i != null && !i.contains(o); i = i.parentElement) {
        var l = i.nextElementSibling;
        if (
          l != null &&
          l.id !== "" &&
          l.nextElementSibling == null &&
          !l.matches(h) &&
          l.querySelector(h) == null
        ) {
          var s = i.querySelector('[aria-invalid="true"]');
          return s != null && s !== e ? null : b(l);
        }
      }
      return null;
    }
    function C(e) {
      return Array.from(e.childNodes).some(function (e) {
        return e.nodeType === Node.TEXT_NODE && f(e.textContent) != null;
      });
    }
    function b(e) {
      for (var t = e; t.childElementCount === 1 && !C(t); ) {
        var n = t.firstElementChild;
        if (n == null) break;
        t = n;
      }
      if (t.childElementCount < 2 || C(t)) return g(e);
      var r = Array.from(t.children).map(g).filter(Boolean);
      return r.length > 0 ? r.join(" ") : null;
    }
    function v(e) {
      var t;
      if (
        e.getAttribute("aria-invalid") !== "true" ||
        !r("justknobx")._("8429")
      )
        return null;
      var n = [
          e.getAttribute("aria-errormessage"),
          e.getAttribute("data-errormessage-id"),
          e.getAttribute("role") === "combobox"
            ? (t = e.parentElement) == null
              ? void 0
              : t.getAttribute("data-errormessage-id")
            : null,
        ],
        o = new Set();
      for (var a of n)
        for (var i of (l = a == null ? void 0 : a.split(/\s+/)) != null
          ? l
          : []) {
          var l;
          i !== "" && o.add(i);
        }
      var s = e.ownerDocument,
        u = new Set(),
        c = !1;
      for (var d of o) {
        var m = s.getElementById(d);
        if (m == null) {
          c = !0;
          continue;
        }
        var p = g(m);
        p != null && u.add(p);
      }
      if (c) {
        var _ = y(e);
        _ != null && u.add(_);
      }
      return u.size > 0 ? Array.from(u).join(" ") : null;
    }
    var S = new Set([
      "cc-csc",
      "cc-exp",
      "cc-exp-month",
      "cc-exp-year",
      "cc-number",
      "cc-type",
      "current-password",
      "new-password",
      "one-time-code",
    ]);
    function R(e) {
      if (e instanceof HTMLInputElement && e.type === "password") return !0;
      var t = e.getAttribute("autocomplete");
      return t == null
        ? !1
        : t
            .toLowerCase()
            .split(/\s+/)
            .some(function (e) {
              return S.has(e);
            });
    }
    function L(e) {
      var t, n, o;
      if (R(e)) return null;
      var a = E(e);
      if (a === "combobox") return null;
      if (a === "button") {
        var i = e.getAttribute("aria-pressed");
        return i !== null ? (i === "true" ? c.SELECTED : c.UNSELECTED) : null;
      }
      if (e instanceof HTMLInputElement)
        switch (a) {
          case "checkbox":
            return e.checked ? c.CHECKED : c.UNCHECKED;
          case "radio":
            return e.checked
              ? c.SELECTED
              : r("justknobx")._("7193")
                ? c.UNSELECTED
                : c.CHECKED;
          case "file":
            return ((t = (n = e.files) == null ? void 0 : n.length) != null
              ? t
              : 0) > 0
              ? c.FILE_SELECTED
              : c.NO_FILE;
          default:
            return e.value;
        }
      return e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement
        ? e.value
        : (o = e.textContent) == null
          ? void 0
          : o.trim();
    }
    function E(e) {
      return e instanceof HTMLInputElement ? e.type : e.getAttribute("role");
    }
    function k(e) {
      return e instanceof HTMLInputElement && e.disabled === !0
        ? !0
        : e.getAttribute("aria-disabled") === "true";
    }
    function I(e) {
      var t = E(e);
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
    function T(e) {
      var t = {};
      t = babelHelpers.extends({}, t, { role: I(e) });
      var n = L(e);
      n != null && n !== "" && (t = babelHelpers.extends({}, t, { value: n }));
      var r = k(e);
      r === !0 && (t = babelHelpers.extends({}, t, { disabled: r }));
      var o = _(e);
      o != null &&
        o !== "" &&
        (!R(e) || e instanceof HTMLInputElement) &&
        (t = babelHelpers.extends({}, t, { label: o }));
      var a = R(e) ? null : v(e);
      return (
        a != null &&
          a !== f(o) &&
          (t = babelHelpers.extends({}, t, { message: a })),
        e instanceof HTMLSelectElement &&
          !R(e) &&
          (t.options = Array.from(e.options).map(function (e) {
            return e.text;
          })),
        t
      );
    }
    function D(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }
    function x(e, t) {
      (e === void 0 && (e = !1), t === void 0 && (t = !1));
      var n = r("gkx")("18014"),
        o = '[role="button"], input, [role="combobox"]',
        a = n ? o + ', [data-interactable*="|click|"]' : o,
        i = document.querySelectorAll(a),
        l = new Map();
      return (
        i.forEach(function (n) {
          if (!(!t && !D(n))) {
            var r = $(n);
            if (r != null) {
              l.has(r) ||
                l.set(r, { inputData: [], refs: [], inputDataKeys: new Set() });
              var o = l.get(r);
              if (o == null) return;
              var a = T(n),
                i = JSON.stringify(a);
              o.inputDataKeys.has(i) ||
                (o.inputDataKeys.add(i),
                o.inputData.push(a),
                e && o.refs.push(n));
            }
          }
        }),
        l
      );
    }
    function $(t) {
      var n = (
          e || (e = o("hyperionAutoLogging"))
        ).ALSurfaceUtils.getAncestralSurfaceNode(
          t == null ? void 0 : t.parentElement,
        ),
        r = e.ALSurfaceUtils.getElementSurface(n);
      return r;
    }
    function P(e) {
      return (
        e.text == null &&
        e.children == null &&
        e.metadata == null &&
        (e.inputs == null || e.inputs.length === 0)
      );
    }
    function N(e, t, n, r) {
      r === void 0 && (r = {});
      var o = e
        .getChildren()
        .map(function (e) {
          return M(e, n, r);
        })
        .filter(Boolean);
      return o.length > 0 ? babelHelpers.extends({}, t, { children: o }) : t;
    }
    function M(e, t, n) {
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
        return ((_ = N(e, _, t, n)), P(_) ? null : _);
      }
      var f = d == null ? void 0 : d.getAttribute("data-maiba-contact-id"),
        g = d == null ? void 0 : d.getAttribute("data-maiba-contact-type");
      f != null &&
        f !== "" &&
        (g === "fb_user" || g === "wa_user" || g === "ig_user") &&
        (a = babelHelpers.extends({}, a, {
          metadata: babelHelpers.extends({}, a.metadata, {
            "maiba:contact_id": f,
            "maiba:contact_type": g,
          }),
        }));
      var h = p(d, e.surface);
      h.trim() !== "" && (a = babelHelpers.extends({}, a, { text: h }));
      var y = t.get(o);
      if (
        (y != null &&
          y.inputData.length > 0 &&
          ((a = babelHelpers.extends({}, a, { inputs: y.inputData })),
          (y.inputData = [])),
        n.includeRef === !0)
      ) {
        var C = m(d, e.surface),
          b = [];
        (y != null &&
          y.refs.length > 0 &&
          ((b = [].concat(y.refs)), (y.refs = [])),
          (a = babelHelpers.extends({}, a, { refs: { text: C, inputs: b } })));
      }
      return ((a = N(e, a, t, n)), P(a) ? null : a);
    }
    function w(t) {
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
      var n = x(t.includeRef === !0, t.showHidden === !0),
        r = {};
      return (
        (r = N(
          (e || (e = o("hyperionAutoLogging"))).ALSurfaceData.root,
          r,
          n,
          t,
        )),
        r
      );
    }
    ((l.EXCLUDE_FROM_SURFACE_TREE = u),
      (l.extractInputElementData = T),
      (l.getALSurfaceData = w));
  },
  98,
);
