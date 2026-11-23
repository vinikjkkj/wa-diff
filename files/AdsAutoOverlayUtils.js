__d(
  "AdsAutoOverlayUtils",
  [
    "XFBAdsAutoOverlayTextHorizontalAlignment.facebook",
    "XFBAdsAutoOverlayTextVerticalAlignment.facebook",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.startsWith("#") ? e.slice(1) : e;
    }
    function s(e, t) {
      return e == null ? t : e.startsWith("#") ? e : "#" + e;
    }
    function u(e) {
      return e === "top"
        ? "TOP"
        : e === "bottom"
          ? "BOTTOM"
          : e === "left"
            ? "LEFT"
            : e === "right"
              ? "RIGHT"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function c(t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "solid" &&
          "color" in t
        ) {
          var n = t.color;
          return { type: "SOLID", color: e(n) };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "gradient-linear" &&
          "directionTo" in t &&
          "startingColor" in t &&
          "endingColor" in t
        ) {
          var r = t.directionTo,
            o = t.startingColor,
            a = t.endingColor;
          return {
            type: "GRADIENT_LINEAR",
            directionTo: u(r),
            startingColor: e(o),
            endingColor: e(a),
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function d(e) {
      return typeof e == "number" ? String(e) : e;
    }
    function m(t) {
      var n = {
          background: c(t.background),
          color: e(t.color),
          fontFamily: t.fontFamily,
          fontSize: Math.round(t.fontSize),
          fontStyle: t.fontStyle === "italic" ? "ITALIC" : "NORMAL",
          fontWeight: d(t.fontWeight),
        },
        o = t.textAlignment;
      return (
        o != null &&
          (n.textAlignment = {
            x:
              o.x != null
                ? r("XFBAdsAutoOverlayTextHorizontalAlignment.facebook").cast(
                    o.x,
                  )
                : null,
            y:
              o.y != null
                ? r("XFBAdsAutoOverlayTextVerticalAlignment.facebook").cast(o.y)
                : null,
          }),
        n
      );
    }
    function p(e) {
      return e
        .filter(function (e) {
          return e.translatable === !0 || e.resizable === !0;
        })
        .map(function (e) {
          var t = {
            left: e.transformable.left,
            top: e.transformable.top,
            width: e.transformable.width,
            height: e.transformable.height,
          };
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "text" &&
              "value" in e &&
              "style" in e
            ) {
              var n = e.value,
                r = e.style;
              return { type: "TEXT", value: n, style: m(r), transformable: t };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "image" &&
              "src" in e
            ) {
              var o = e.src;
              return { type: "IMAGE", value: o, transformable: t };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              (e.type === "custom" || e.type === "spotlight")
            )
              return { type: "IMAGE", value: "", transformable: t };
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e);
        });
    }
    var _ = {
        fontFamily: "Arial",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        color: "#FFFFFF",
        background: { type: "solid", color: "#000000" },
      },
      f = { left: 0, top: 0, width: 200, height: 50 },
      g = { left: 0, top: 0, width: 80, height: 80 };
    function h(e) {
      if (e == null) return "bold";
      if (e === "bold" || e === "normal") return e;
      var t = parseInt(e, 10);
      return isNaN(t)
        ? "bold"
        : t === 100
          ? 100
          : t === 200
            ? 200
            : t === 300
              ? 300
              : t === 400
                ? 400
                : t === 500
                  ? 500
                  : t === 600
                    ? 600
                    : t === 700
                      ? 700
                      : t === 800
                        ? 800
                        : t === 900
                          ? 900
                          : "bold";
    }
    function y(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function C(e, t) {
      var n = e[t];
      return typeof n == "number" ? n : null;
    }
    function b(e, t) {
      var n = e[t];
      return n != null && typeof n == "object" && !Array.isArray(n)
        ? JSON.parse(JSON.stringify(n))
        : null;
    }
    function v(e) {
      if (e == null) return { type: "solid", color: "#000000" };
      var t = y(e, "type"),
        n = y(e, "directionTo"),
        r = y(e, "startingColor"),
        o = y(e, "endingColor"),
        a = y(e, "color");
      if (t === "gradient-linear" || t === "GRADIENT_LINEAR") {
        var i = n != null ? n.toLowerCase() : null;
        if (i === "top" || i === "right" || i === "bottom" || i === "left")
          return {
            type: "gradient-linear",
            directionTo: i,
            startingColor: s(r, "#000000"),
            endingColor: s(o, "#FFFFFF"),
          };
      }
      return { type: "solid", color: s(a, "#000000") };
    }
    function S(e) {
      if (e == null) return _;
      var t = y(e, "fontFamily"),
        n = C(e, "fontSize"),
        r = y(e, "fontWeight"),
        o = y(e, "fontStyle"),
        a = y(e, "color"),
        i = b(e, "background"),
        l = b(e, "textAlignment"),
        u = void 0;
      if (l != null) {
        var c = y(l, "x"),
          d = y(l, "y"),
          m = c === "LEFT" || c === "CENTER" || c === "RIGHT" ? c : void 0,
          p = d === "TOP" || d === "CENTER" || d === "BOTTOM" ? d : void 0;
        (m != null || p != null) && (u = { x: m, y: p });
      }
      return {
        fontFamily: t != null ? t : "Arial",
        fontSize: n != null ? n : 24,
        fontWeight: h(r),
        fontStyle:
          o != null && (o === "italic" || o === "ITALIC") ? "italic" : "normal",
        color: s(a, "#FFFFFF"),
        background: v(i),
        textAlignment: u,
      };
    }
    function R(e, t) {
      if (e == null) return t;
      var n = C(e, "left"),
        r = C(e, "top"),
        o = C(e, "width"),
        a = C(e, "height");
      return {
        left: n != null ? n : t.left,
        top: r != null ? r : t.top,
        width: o != null ? o : t.width,
        height: a != null ? a : t.height,
      };
    }
    function L(e) {
      if (e == null || e === "") return [];
      try {
        var t = JSON.parse(e);
        return Array.isArray(t)
          ? t
              .map(function (e) {
                if (e == null || typeof e != "object") return null;
                var t = y(e, "type"),
                  n = y(e, "value"),
                  o = b(e, "style"),
                  a = b(e, "transformable"),
                  i = t != null ? t.toUpperCase() : null;
                return i === "TEXT"
                  ? {
                      id: r("uuidv4")(),
                      type: "text",
                      value: n != null ? n : "",
                      resizable: !0,
                      translatable: !0,
                      editable: !0,
                      transformable: R(a, f),
                      style: S(o),
                    }
                  : i === "IMAGE"
                    ? {
                        id: r("uuidv4")(),
                        type: "image",
                        src: n != null ? n : "",
                        fit: "contain",
                        resizable: !0,
                        translatable: !0,
                        transformable: R(a, g),
                      }
                    : null;
              })
              .filter(Boolean)
          : [];
      } catch (e) {
        return [];
      }
    }
    ((l.wizzyElementsToOverlayInputs = p), (l.overlayJsonToWizzyElements = L));
  },
  98,
);
