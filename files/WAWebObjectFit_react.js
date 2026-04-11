__d(
  "WAWebObjectFit.react",
  [
    "cx",
    "WALogger",
    "WAWebClassnames",
    "react",
    "useWAWebListener",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useImperativeHandle,
      f = m.useLayoutEffect,
      g = m.useRef,
      h = "transform 300ms cubic-bezier(.1,.82,.25,1)";
    function y(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l = g(),
        s = g();
      _(a, function () {
        return {
          getInsideContainer: function () {
            return s.current;
          },
          getOutsideContainer: function () {
            return l.current;
          },
          getElement: function () {
            return l.current;
          },
        };
      });
      var c = i.objectPosition,
        m = i.onObjectLoad,
        h = i.position,
        y = i.size,
        R = i.type,
        L = i.zoomIn,
        E = y == null ? void 0 : y.width,
        k = y == null ? void 0 : y.height,
        I = L == null ? void 0 : L.factor,
        T = L == null ? void 0 : L.translateX,
        D = L == null ? void 0 : L.translateY,
        x = p(
          function () {
            m != null && s.current != null && m(s.current.firstChild);
          },
          [m],
        ),
        $ = p(
          function () {
            var t;
            if (!(E == null || k == null)) {
              var n = l.current,
                r = s.current;
              if (!(!n || !r)) {
                var a;
                switch (R) {
                  case "contain":
                    a = b(n, E, k);
                    break;
                  case "cover":
                    a = C(n, E, k);
                    break;
                  case "scaleDown":
                    a = v(n, E, k);
                    break;
                  case "zoomIn":
                    a = S(
                      n,
                      E,
                      k,
                      I != null && T != null && D != null
                        ? { factor: I, translateX: T, translateY: D }
                        : null,
                    );
                    break;
                  default:
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "unrecognized type ",
                            "",
                          ])),
                        R,
                      )
                      .sendLogs("object-fit");
                    return;
                }
                (n.removeAttribute("class"),
                  r.removeAttribute("style"),
                  (t = n.classList).add.apply(t, a.className.split(" ")),
                  h === "relative" && n.classList.add("_ajug"));
                var i = c != null ? c : a.style.position;
                r.style.setProperty("position", i);
                for (var u of Object.keys(a.style)) {
                  var d = a.style[u];
                  d == null ||
                    Number.isNaN(d) ||
                    r.style.setProperty(u, typeof d == "number" ? d + "px" : d);
                }
                x();
              }
            }
          },
          [x, c, h, k, E, R, I, T, D],
        ),
        P = r("useWAWebThrottledCallback")($);
      return (
        o("useWAWebListener").useListener(window, "resize", P),
        f(
          function () {
            $();
          },
          [$],
        ),
        d.jsx("div", {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((n = {}), (n._ajuf = !0), (n._ajug = h === "relative"), n),
          ),
          ref: l,
          children: d.jsx("div", {
            style: { visibility: "hidden" },
            ref: s,
            children: i.children,
          }),
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t, n) {
      var r = e.clientWidth,
        o = e.clientHeight,
        a = t,
        i = n,
        l = 0,
        s = 0;
      return (
        a !== r && ((i *= r / a), (a = r), i > o && (l = o / 2 - i / 2)),
        i < o && ((a *= o / i), (i = o), a > r && (s = r / 2 - a / 2)),
        {
          style: { width: a, height: i, top: l, left: s, position: "absolute" },
          className: "_ajuf",
        }
      );
    }
    function b(e, t, n) {
      var r = e.clientWidth,
        o = e.clientHeight,
        a = t,
        i = n,
        l = 0,
        s = 0,
        u = a / r,
        c = i / o;
      return (
        u > c
          ? ((i *= r / a), (a = r), i < o && (l = o / 2 - i / 2))
          : ((a *= o / i), (i = o), a < r && (s = r / 2 - a / 2)),
        {
          style: { width: a, height: i, top: l, left: s, position: "absolute" },
          className: "_ajuf",
        }
      );
    }
    function v(e, t, n) {
      var r = e.clientWidth,
        a = e.clientHeight,
        i = n,
        l = t;
      return (
        i > a && ((i = a), (l = t * (a / n))),
        l > r && ((l = r), (i = n * (r / t))),
        {
          style: { width: l, height: i },
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ajuf",
            "_ajuh",
          ),
        }
      );
    }
    function S(e, t, n, r) {
      var a = v(e, t, n).style,
        i;
      return (
        r
          ? (i = {
              width: a.width,
              height: a.height,
              transition: h,
              transform:
                "translateX(" +
                r.translateX +
                "px) translateY(" +
                r.translateY +
                "px) scale(" +
                r.factor +
                ")",
            })
          : (i = { width: a.width, height: a.height, transition: h }),
        {
          style: i,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ajuf",
            "_ajuh",
            "_ajui",
          ),
        }
      );
    }
    l.default = y;
  },
  98,
);
