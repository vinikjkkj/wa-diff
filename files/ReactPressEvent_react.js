__d(
  "ReactPressEvent.react",
  [
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = { passive: !0 };
    function m(e, t, n, r, o) {
      var a = {
        altKey: r.altKey,
        buttons: t,
        clientX: r.clientX,
        clientY: r.clientY,
        ctrlKey: r.ctrlKey,
        defaultPrevented: r.defaultPrevented,
        metaKey: r.metaKey,
        pageX: r.pageX,
        pageY: r.pageY,
        pointerType: n,
        screenX: r.screenX,
        screenY: r.screenY,
        shiftKey: r.shiftKey,
        target: o,
        timeStamp: r.timeStamp,
        type: e,
        x: r.clientX,
        y: r.clientY,
        preventDefault: function () {
          ((a.defaultPrevented = !0), r.preventDefault());
        },
        stopPropagation: function () {
          r.stopPropagation();
        },
      };
      return a;
    }
    function p(e, t) {
      var n,
        a = t.disabled,
        i = t.onPressChange,
        l = t.onPressEnd,
        s = t.onPressMove,
        p = t.onPressStart,
        _ = c({
          isPressed: !1,
          isPressActive: !1,
          pointerId: null,
          bounds: null,
          pointerType: "",
          buttons: 0,
          activationEvent: null,
        }),
        f = (n = r("ReactUseEvent.react"))("pointerdown"),
        g = n("pointermove", d),
        h = n("pointerup", d),
        y = n("pointercancel", d),
        C = n("mousedown"),
        b = n("mouseup", d),
        v = n("mousemove", d),
        S = n("dragstart", d),
        R = n("focusout", d);
      u(
        function () {
          var t = e.current,
            n = _.current;
          if (t !== null) {
            var r = document,
              u = function (t) {
                if (a === !0) {
                  L(t);
                  return;
                }
                o("ReactEventHookPropagation").hasEventHookPropagationStopped(
                  t,
                  "usePress",
                ) ||
                  (o("ReactEventHookPropagation").stopEventHookPropagation(
                    t,
                    "usePress",
                  ),
                  !(
                    t.buttons === 2 ||
                    t.buttons > 4 ||
                    (o("ReactEventHelpers").isMac &&
                      t.pointerType === "mouse" &&
                      t.ctrlKey)
                  ) &&
                    ((n.buttons = t.buttons),
                    t.button === 1 && (n.buttons = 4),
                    c(t)));
              },
              c = function (a) {
                if (!n.isPressed) {
                  var e = a,
                    l = e.pointerId,
                    s = e.pointerType || "mouse";
                  ((n.isPressed = !0),
                    (n.isPressActive = !0),
                    (n.pointerId = l !== void 0 ? l : null),
                    (n.pointerType = s),
                    (n.activationEvent = a),
                    s !== "mouse" && (n.bounds = t.getBoundingClientRect()),
                    p && p(m("pressstart", n.buttons, s, a, t)),
                    i && i(!0),
                    o("ReactEventHelpers").hasPointerEvents
                      ? (h.setListener(r, L),
                        g.setListener(r, E),
                        y.setListener(r, L))
                      : (v.setListener(r, E),
                        b.setListener(r, L),
                        S.setListener(r, L)));
                }
              },
              d = function (r) {
                n.isPressed &&
                  ((n.isPressed = !1),
                  l && l(m("pressend", n.buttons, n.pointerType, r, t)),
                  i && i(!1));
              },
              L = function (t) {
                ((n.isPressActive = !1),
                  (n.bounds = null),
                  (n.activationEvent = null),
                  d(t),
                  o("ReactEventHelpers").hasPointerEvents
                    ? (h.setListener(r, null),
                      g.setListener(r, null),
                      y.setListener(r, null))
                    : (v.setListener(r, null),
                      b.setListener(r, null),
                      S.setListener(r, null)));
              },
              E = function (r) {
                if (a === !0) {
                  L(r);
                  return;
                }
                if (n.isPressActive) {
                  var e = n.pointerType,
                    o = n.isPressed,
                    i = !1;
                  if (e === "mouse") {
                    var l = r.target;
                    i = t.contains(l);
                  } else {
                    var u = r,
                      p = u.pointerId,
                      _ = n.bounds;
                    if (p !== n.pointerId || _ === null) return;
                    var f = r.clientX,
                      g = r.clientY,
                      h = _.bottom,
                      y = _.left,
                      C = _.right,
                      b = _.top;
                    f >= y && f <= C && g >= b && g <= h && (i = !0);
                  }
                  i
                    ? o
                      ? s && s(m("pressmove", n.buttons, e, r, t))
                      : c(r)
                    : o && d(r);
                }
              };
            return (
              o("ReactEventHelpers").hasPointerEvents
                ? f.setListener(t, u)
                : C.setListener(t, u),
              R.setListener(t, function (e) {
                var r = n.activationEvent;
                e.target === t && r !== null && L(r);
              }),
              n.isPressActive &&
                (o("ReactEventHelpers").hasPointerEvents
                  ? (h.setListener(r, L),
                    g.setListener(r, E),
                    y.setListener(r, L))
                  : (v.setListener(r, E),
                    b.setListener(r, L),
                    S.setListener(r, L))),
              function () {
                var t = n.activationEvent;
                e.current === null && t !== null && L(t);
              }
            );
          }
        },
        [a, S, R, C, v, b, i, l, s, p, y, f, g, h, e],
      );
    }
    l.usePress = p;
  },
  98,
);
