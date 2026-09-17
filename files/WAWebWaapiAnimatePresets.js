__d(
  "WAWebWaapiAnimatePresets",
  ["WAWebWaapiAnimateEasing"],
  function (t, n, r, o, a, i, l) {
    var e = [0.1, 0.82, 0.25, 1],
      s = 300,
      u = 22,
      c = 300,
      d = 24,
      m = [0.33, 0, 0.39, 0.91],
      p = "easeInCirc",
      _ = [
        "height",
        "marginTop",
        "marginBottom",
        "paddingTop",
        "paddingBottom",
      ],
      f = {
        "attach.Down": {
          duration: 200,
          easing: m,
          keyframes: [
            { opacity: "1", transform: "translateY(0%) scaleX(1) scaleY(1)" },
            {
              opacity: "0",
              transform: "translateY(100%) scaleX(0.3) scaleY(0.3)",
            },
          ],
        },
        "dropdown.Down": {
          duration: 200,
          easing: e,
          keyframes: [
            { opacity: "0", transform: "translateY(-15px)" },
            { opacity: "1", transform: "translateY(0%)" },
          ],
        },
        "transition.expandIn": {
          duration: 700,
          easing: "ease",
          keyframes: [
            {
              opacity: "0",
              transformOrigin: "50% 50%",
              transform: "scaleX(0.625) scaleY(0.625) translateZ(0px)",
            },
            {
              opacity: "1",
              transformOrigin: "50% 50%",
              transform: "scaleX(1) scaleY(1) translateZ(0px)",
            },
          ],
        },
        "transition.expandOut": {
          duration: 700,
          easing: "ease",
          keyframes: [
            {
              opacity: "1",
              transformOrigin: "50% 50%",
              transform: "scaleX(1) scaleY(1) translateZ(0px)",
            },
            {
              opacity: "0",
              transformOrigin: "50% 50%",
              transform: "scaleX(0.5) scaleY(0.5) translateZ(0px)",
            },
          ],
        },
        "transition.bounceDownOut": {
          duration: 1e3,
          easing: "linear",
          keyframes: [
            {
              transform: "translateY(0px)",
              offset: 0,
              easing: o("WAWebWaapiAnimateEasing").resolveCssEasing("ease"),
            },
            {
              transform: "translateY(-20px)",
              offset: 0.2,
              easing: o("WAWebWaapiAnimateEasing").resolveCssEasing("ease"),
            },
            { transform: "translateY(1000px)", offset: 1 },
          ],
        },
      };
    function g(e) {
      return (
        e in f || e === "attach.Up" || e === "slideUp" || e === "slideDown"
      );
    }
    function h(e, t, n) {
      var r, a;
      if (e === "slideUp" || e === "slideDown")
        return v(e === "slideDown" ? "down" : "up", t, n);
      if (e === "attach.Up") return y(n);
      var i = f[e];
      if (i == null) return null;
      var l =
        e === "transition.bounceDownOut"
          ? [
              {
                easing: "linear",
                keyframes: [
                  { opacity: "1", offset: 0 },
                  {
                    opacity: "1",
                    offset: 0.2,
                    easing: o("WAWebWaapiAnimateEasing").resolveCssEasing(p),
                  },
                  { opacity: "0", offset: 1 },
                ],
              },
            ]
          : void 0;
      return {
        additionalAnimations: l,
        keyframes: i.keyframes,
        duration: (r = n.duration) != null ? r : i.duration,
        easing: o("WAWebWaapiAnimateEasing").resolveCssEasing(
          (a = i.easing) != null ? a : n.easing,
        ),
        staticStyles: {},
      };
    }
    function y(e) {
      var t,
        n,
        r = o("WAWebWaapiAnimateEasing").sampleSpringProgress(
          s,
          u,
          d,
          (t = e.duration) != null ? t : c,
        ),
        a = r.length - 1,
        i = r.map(function (e, t) {
          var n = t === a ? 1 : e,
            r = C(150, 0, n),
            o = C(0.3, 1, n),
            i = b(C(0, 1, n));
          return {
            offset: t / a,
            opacity: String(i),
            transform:
              "translateY(" + r + "%) scaleX(" + o + ") scaleY(" + o + ")",
          };
        });
      return {
        keyframes: i,
        duration: (n = e.duration) != null ? n : c,
        easing: "linear",
        staticStyles: {},
      };
    }
    function C(e, t, n) {
      return e + (t - e) * n;
    }
    function b(e) {
      return Math.min(1, Math.max(0, e));
    }
    function v(e, t, n) {
      var r,
        a = t.style.overflow;
      (e === "down" && (t.style.display = R(t)), (t.style.overflow = "hidden"));
      var i = window.getComputedStyle(t),
        l = {},
        s = {};
      for (var u of _) {
        var c = u.replace(/[A-Z]/g, function (e) {
            return "-" + e.toLowerCase();
          }),
          d = i.getPropertyValue(c) || "0px";
        ((l[u] = e === "down" ? "0px" : d), (s[u] = e === "down" ? d : "0px"));
      }
      return {
        keyframes: [l, s],
        duration: (r = n.duration) != null ? r : 400,
        easing: o("WAWebWaapiAnimateEasing").resolveCssEasing(n.easing),
        staticStyles: {},
        onComplete: function (r, o) {
          if (((t.style.overflow = a), !!o && e === "up")) {
            t.style.display = "none";
            return;
          }
        },
      };
    }
    var S = new Set([
      "b",
      "big",
      "i",
      "small",
      "tt",
      "abbr",
      "acronym",
      "cite",
      "code",
      "dfn",
      "em",
      "kbd",
      "strong",
      "samp",
      "var",
      "a",
      "bdo",
      "br",
      "img",
      "map",
      "object",
      "q",
      "script",
      "span",
      "sub",
      "sup",
      "button",
      "input",
      "label",
      "select",
      "textarea",
    ]);
    function R(e) {
      return S.has(e.tagName.toLowerCase()) ? "inline-block" : "block";
    }
    ((l.isWaapiPreset = g), (l.buildPreset = h));
  },
  98,
);
