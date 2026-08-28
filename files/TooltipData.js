__d(
  "TooltipData",
  [
    "DOM",
    "DataStore",
    "FBLogger",
    "URI",
    "getElementText",
    "ifRequired",
    "isStringNullOrEmpty",
    "isTextNode",
    "tooltipPropsFor",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["content"],
      s;
    function u(t) {
      var n,
        o,
        a = t.getAttribute("data-tooltip-delay"),
        i = a ? parseInt(a, 10) || 1e3 : 250,
        l = (n = r("DataStore").get(t, "tooltip")) != null ? n : {},
        s = l.content,
        u = babelHelpers.objectWithoutPropertiesLoose(l, e),
        c = t.getAttribute("data-tooltip-content");
      return (
        !r("isStringNullOrEmpty")(s) &&
          !r("isStringNullOrEmpty")(c) &&
          r("FBLogger")("tooltip").warn(
            'Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',
            t.getAttribute("data-tooltip-content"),
          ),
        babelHelpers.extends(
          {
            className: t.getAttribute("data-tooltip-root-class"),
            delay: i,
            position: t.getAttribute("data-tooltip-position") || "above",
            alignH: t.getAttribute("data-tooltip-alignh") || "left",
            offsetY: t.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay:
              t.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: t.getAttribute("data-pitloot-persistonclick"),
            textDirection: t.getAttribute("data-tooltip-text-direction"),
            content: (o = c != null ? c : s) != null ? o : null,
          },
          u,
        )
      );
    }
    function c(e, t) {
      var n,
        o = u(e);
      ((typeof t.content != "string" || !r("isStringNullOrEmpty")(t.content)) &&
        !r("isStringNullOrEmpty")(e.getAttribute("data-tooltip-content")) &&
        r("FBLogger")("tooltip").warn(
          'Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',
          e.getAttribute("data-tooltip-content"),
        ),
        r("DataStore").set(e, "tooltip", {
          content:
            t.content ||
            ((n = r("DataStore").get(e, "tooltip")) != null ? n : {}).content,
          position: t.position || o.position,
          alignH: t.alignH || o.alignH,
          suppress: t.suppress !== void 0 ? t.suppress : o.suppress,
          overflowDisplay: t.overflowDisplay || o.overflowDisplay,
          persistOnClick: t.persistOnClick || o.persistOnClick,
        }));
    }
    function d(e, t) {
      (c(e, t), e.setAttribute("data-hover", "tooltip"));
    }
    function m(e, t) {}
    var p = {
      remove: function (t, n) {
        var e = n === void 0 ? {} : n,
          o = e.onlyCleanupDataStore,
          a = o === void 0 ? !1 : o;
        (r("DataStore").remove(t, "tooltip"),
          a ||
            (t.removeAttribute("data-hover"),
            t.removeAttribute("data-tooltip-position"),
            t.removeAttribute("data-tooltip-alignh"),
            r("ifRequired")("Tooltip", function (e) {
              e.isActive(t) && e.hide();
            })));
      },
      set: function (t, n, o, a) {
        n instanceof (s || (s = r("URI")))
          ? (t.setAttribute("data-tooltip-uri", n.toString()),
            r("ifRequired")("Tooltip", function (e) {
              e.isActive(t) && e.fetchIfNecessary(t);
            }))
          : (t.removeAttribute("data-tooltip-content"),
            p._store({ context: t, content: n, position: o, alignH: a }),
            p.refreshIfActive(t));
      },
      refreshIfActive: function (t) {
        r("ifRequired")("Tooltip", function (e) {
          e.isActive(t) && e.show(t);
        });
      },
      _store: function (t) {
        var e = t.alignH,
          n = t.content,
          o = t.context,
          a = t.position,
          i = n;
        r("isTextNode")(i) &&
          i instanceof Element &&
          (i = r("getElementText")(i));
        var l = !1;
        typeof i != "string"
          ? (i = r("DOM").create("div", {}, i))
          : (l = i === "");
        var s = { alignH: e, content: i, position: a, suppress: l };
        return (d(o, s), s);
      },
      propsFor: r("tooltipPropsFor"),
      enableDisplayOnOverflow: function (t) {
        (t.removeAttribute("data-tooltip-display"),
          d(t, { overflowDisplay: !0 }));
      },
      enablePersistOnClick: function (t) {
        (t.removeAttribute("data-pitloot-persistOnClick"),
          d(t, { persistOnClick: !0 }));
      },
      suppress: function (t, n) {
        c(t, { suppress: n });
      },
      _get: u,
    };
    i.exports = p;
  },
  34,
);
