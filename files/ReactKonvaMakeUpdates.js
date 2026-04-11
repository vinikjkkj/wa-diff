__d(
  "ReactKonvaMakeUpdates",
  ["konva-7.2.3"],
  function (t, n, r, o, a, i) {
    var e = n("konva-7.2.3")("/lib/Global.js"),
      l = {
        children: !0,
        ref: !0,
        key: !0,
        style: !0,
        forwardedRef: !0,
        unstable_applyCache: !0,
        unstable_applyDrawHitFromCache: !0,
      },
      s = !1,
      u = !1;
    i.EVENTS_NAMESPACE = ".react-konva-event";
    var c = !1;
    function d(e) {
      c = e;
    }
    i.toggleStrictMode = d;
    var m =
        "ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.\nPosition of a node will be changed during drag&drop, so you should update state of the react app as well.\nConsider to add onDragMove or onDragEnd events.\nFor more info see: https://github.com/konvajs/react-konva/issues/256\n",
      p =
        'ReactKonva: You are using "zIndex" attribute for a Konva node.\nreact-konva may get confused with ordering. Just define correct order of elements in your render function of a component.\nFor more info see: https://github.com/konvajs/react-konva/issues/194\n',
      _ = {};
    function f(e, t, n) {
      if (
        (n === void 0 && (n = _),
        !s && "zIndex" in t && (s = !0),
        !u && t.draggable)
      ) {
        var r = t.x !== void 0 || t.y !== void 0,
          o = t.onDragEnd || t.onDragMove;
        r && !o && (u = !0);
      }
      for (var a in n)
        if (!l[a]) {
          var d = a.slice(0, 2) === "on",
            f = n[a] !== t[a];
          if (d && f) {
            var h = a.substr(2).toLowerCase();
            (h.substr(0, 7) === "content" &&
              (h = "content" + h.substr(7, 1).toUpperCase() + h.substr(8)),
              e.off(h, n[a]));
          }
          var y = !Object.prototype.hasOwnProperty.call(t, a);
          y && e.setAttr(a, void 0);
        }
      var C = c || t._useStrictMode,
        b = {},
        v = !1,
        S = {};
      for (var a in t)
        if (!l[a]) {
          var d = a.slice(0, 2) === "on",
            R = n[a] !== t[a];
          if (d && R) {
            var h = a.substr(2).toLowerCase();
            (h.substr(0, 7) === "content" &&
              (h = "content" + h.substr(7, 1).toUpperCase() + h.substr(8)),
              t[a] && (S[h] = t[a]));
          }
          !d &&
            (t[a] !== n[a] || (C && t[a] !== e.getAttr(a))) &&
            ((v = !0), (b[a] = t[a]));
        }
      v && (e.setAttrs(b), g(e));
      for (var h in S) e.on(h + i.EVENTS_NAMESPACE, S[h]);
    }
    i.applyNodeProps = f;
    function g(t) {
      if (!e.autoDrawEnabled) {
        var n = t.getLayer() || t.getStage();
        n && n.batchDraw();
      }
    }
    i.updatePicture = g;
  },
  null,
);
