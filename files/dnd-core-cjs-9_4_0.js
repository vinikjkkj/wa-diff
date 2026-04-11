__d(
  "dnd-core-cjs-9.4.0",
  ["invariant-2.2.4", "asap-2.0.6", "redux-4.0.4"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("invariant-2.2.4")),
      s = e(n("asap-2.0.6")),
      u = e(n("redux-4.0.4")),
      c = {},
      d = { exports: c };
    function m() {
      Object.defineProperty(c, "__esModule", { value: !0 });
      var e;
      (function (e) {
        ((e.SOURCE = "SOURCE"), (e.TARGET = "TARGET"));
      })((e = c.HandlerRole || (c.HandlerRole = {})));
    }
    var p = !1;
    function _() {
      return (p || ((p = !0), m()), d.exports);
    }
    var f = {},
      g = { exports: f };
    function h() {
      (Object.defineProperty(f, "__esModule", { value: !0 }),
        (f.INIT_COORDS = "dnd-core/INIT_COORDS"),
        (f.BEGIN_DRAG = "dnd-core/BEGIN_DRAG"),
        (f.PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE"),
        (f.HOVER = "dnd-core/HOVER"),
        (f.DROP = "dnd-core/DROP"),
        (f.END_DRAG = "dnd-core/END_DRAG"));
    }
    var y = !1;
    function C() {
      return (y || ((y = !0), h()), g.exports);
    }
    var b = {},
      v = { exports: b };
    function S() {
      Object.defineProperty(b, "__esModule", { value: !0 });
      var e = C();
      function t(t, n) {
        return {
          type: e.INIT_COORDS,
          payload: { sourceClientOffset: n || null, clientOffset: t || null },
        };
      }
      b.setClientOffset = t;
    }
    var R = !1;
    function L() {
      return (R || ((R = !0), S()), v.exports);
    }
    var E = {},
      k = { exports: E };
    function I() {
      Object.defineProperty(E, "__esModule", { value: !0 });
      function e(e, t, n) {
        return t.split(".").reduce(function (e, t) {
          return e && e[t] ? e[t] : n || null;
        }, e);
      }
      E.get = e;
      function t(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      E.without = t;
      function n(e) {
        return typeof e == "string";
      }
      E.isString = n;
      function r(e) {
        return typeof e == "object";
      }
      E.isObject = r;
      function o(e, t) {
        var n = new Map(),
          r = function (e) {
            return n.set(e, n.has(e) ? n.get(e) + 1 : 1);
          };
        (e.forEach(r), t.forEach(r));
        var o = [];
        return (
          n.forEach(function (e, t) {
            e === 1 && o.push(t);
          }),
          o
        );
      }
      E.xor = o;
      function a(e, t) {
        return e.filter(function (e) {
          return t.indexOf(e) > -1;
        });
      }
      E.intersection = a;
    }
    var T = !1;
    function D() {
      return (T || ((T = !0), I()), k.exports);
    }
    var x = {},
      $ = { exports: x };
    function P() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(x, "__esModule", { value: !0 });
      var t = e(l()),
        n = L(),
        r = D(),
        o = C(),
        a = {
          type: o.INIT_COORDS,
          payload: { clientOffset: null, sourceClientOffset: null },
        };
      function i(e) {
        return function (r, i) {
          (r === void 0 && (r = []),
            i === void 0 && (i = { publishSource: !0 }));
          var t = i.publishSource,
            l = t === void 0 ? !0 : t,
            m = i.clientOffset,
            p = i.getSourceClientOffset,
            _ = e.getMonitor(),
            f = e.getRegistry();
          (e.dispatch(n.setClientOffset(m)), s(r, _, f));
          var g = d(r, _);
          if (g === null) {
            e.dispatch(a);
            return;
          }
          var h = null;
          (m && (u(p), (h = p(g))), e.dispatch(n.setClientOffset(m, h)));
          var y = f.getSource(g),
            C = y.beginDrag(_, g);
          (c(C), f.pinSource(g));
          var b = f.getSourceType(g);
          return {
            type: o.BEGIN_DRAG,
            payload: {
              itemType: b,
              item: C,
              sourceId: g,
              clientOffset: m || null,
              sourceClientOffset: h || null,
              isSourcePublic: !!l,
            },
          };
        };
      }
      x.default = i;
      function s(e, n, r) {
        (t.default(!n.isDragging(), "Cannot call beginDrag while dragging."),
          e.forEach(function (e) {
            t.default(r.getSource(e), "Expected sourceIds to be registered.");
          }));
      }
      function u(e) {
        t.default(
          typeof e == "function",
          "When clientOffset is provided, getSourceClientOffset must be a function.",
        );
      }
      function c(e) {
        t.default(r.isObject(e), "Item must be an object.");
      }
      function d(e, t) {
        for (var n = null, r = e.length - 1; r >= 0; r--)
          if (t.canDragSource(e[r])) {
            n = e[r];
            break;
          }
        return n;
      }
    }
    var N = !1;
    function M() {
      return (N || ((N = !0), P()), $.exports);
    }
    var w = {},
      A = { exports: w };
    function F() {
      Object.defineProperty(w, "__esModule", { value: !0 });
      var e = C();
      function t(t) {
        return function () {
          var n = t.getMonitor();
          if (n.isDragging()) return { type: e.PUBLISH_DRAG_SOURCE };
        };
      }
      w.default = t;
    }
    var O = !1;
    function B() {
      return (O || ((O = !0), F()), A.exports);
    }
    var W = {},
      q = { exports: W };
    function U() {
      Object.defineProperty(W, "__esModule", { value: !0 });
      function e(e, t) {
        return t === null
          ? e === null
          : Array.isArray(e)
            ? e.some(function (e) {
                return e === t;
              })
            : e === t;
      }
      W.default = e;
    }
    var V = !1;
    function H() {
      return (V || ((V = !0), U()), q.exports);
    }
    var G = {},
      z = { exports: G };
    function j() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(G, "__esModule", { value: !0 });
      var t = e(l()),
        n = e(H()),
        r = C();
      function o(e) {
        return function (n, o) {
          var t = (o === void 0 ? {} : o).clientOffset;
          a(n);
          var l = n.slice(0),
            c = e.getMonitor(),
            d = e.getRegistry();
          i(l, c, d);
          var m = c.getItemType();
          return (
            s(l, d, m),
            u(l, c, d),
            {
              type: r.HOVER,
              payload: { targetIds: l, clientOffset: t || null },
            }
          );
        };
      }
      G.default = o;
      function a(e) {
        t.default(Array.isArray(e), "Expected targetIds to be an array.");
      }
      function i(e, n, r) {
        (t.default(n.isDragging(), "Cannot call hover while not dragging."),
          t.default(!n.didDrop(), "Cannot call hover after drop."));
        for (var o = 0; o < e.length; o++) {
          var a = e[o];
          t.default(
            e.lastIndexOf(a) === o,
            "Expected targetIds to be unique in the passed array.",
          );
          var i = r.getTarget(a);
          t.default(i, "Expected targetIds to be registered.");
        }
      }
      function s(e, t, r) {
        for (var o = e.length - 1; o >= 0; o--) {
          var a = e[o],
            i = t.getTargetType(a);
          n.default(i, r) || e.splice(o, 1);
        }
      }
      function u(e, t, n) {
        e.forEach(function (e) {
          var r = n.getTarget(e);
          r.hover(t, e);
        });
      }
    }
    var K = !1;
    function Q() {
      return (K || ((K = !0), j()), z.exports);
    }
    var X = {},
      Y = { exports: X };
    function J() {
      var e =
          (this && this.__assign) ||
          function () {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          },
        t =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(X, "__esModule", { value: !0 });
      var n = t(l()),
        r = C(),
        o = D();
      function a(t) {
        return function (o) {
          o === void 0 && (o = {});
          var n = t.getMonitor(),
            a = t.getRegistry();
          i(n);
          var l = c(n);
          l.forEach(function (i, l) {
            var u = s(i, l, a, n),
              c = { type: r.DROP, payload: { dropResult: e(e({}, o), u) } };
            t.dispatch(c);
          });
        };
      }
      X.default = a;
      function i(e) {
        (n.default(e.isDragging(), "Cannot call drop while not dragging."),
          n.default(
            !e.didDrop(),
            "Cannot call drop twice during one drag operation.",
          ));
      }
      function s(e, t, n, r) {
        var o = n.getTarget(e),
          a = o ? o.drop(r, e) : void 0;
        return (
          u(a),
          typeof a == "undefined" && (a = t === 0 ? {} : r.getDropResult()),
          a
        );
      }
      function u(e) {
        n.default(
          typeof e == "undefined" || o.isObject(e),
          "Drop result must either be an object or undefined.",
        );
      }
      function c(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
        return (t.reverse(), t);
      }
    }
    var Z = !1;
    function ee() {
      return (Z || ((Z = !0), J()), Y.exports);
    }
    var te = {},
      ne = { exports: te };
    function re() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(te, "__esModule", { value: !0 });
      var t = e(l()),
        n = C();
      function r(e) {
        return function () {
          var t = e.getMonitor(),
            r = e.getRegistry();
          o(t);
          var a = t.getSourceId(),
            i = r.getSource(a, !0);
          return (i.endDrag(t, a), r.unpinSource(), { type: n.END_DRAG });
        };
      }
      te.default = r;
      function o(e) {
        t.default(e.isDragging(), "Cannot call endDrag while not dragging.");
      }
    }
    var oe = !1;
    function ae() {
      return (oe || ((oe = !0), re()), ne.exports);
    }
    var ie = {},
      le = { exports: ie };
    function se() {
      function e(e) {
        for (var t in e) ie.hasOwnProperty(t) || (ie[t] = e[t]);
      }
      var t =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(ie, "__esModule", { value: !0 });
      var n = t(M()),
        r = t(B()),
        o = t(Q()),
        a = t(ee()),
        i = t(ae());
      e(C());
      function l(e) {
        return {
          beginDrag: n.default(e),
          publishDragSource: r.default(e),
          hover: o.default(e),
          drop: a.default(e),
          endDrag: i.default(e),
        };
      }
      ie.default = l;
    }
    var ue = !1;
    function ce() {
      return (ue || ((ue = !0), se()), le.exports);
    }
    var de = {},
      me = { exports: de };
    function pe() {
      (Object.defineProperty(de, "__esModule", { value: !0 }),
        (de.strictEquality = function (e, t) {
          return e === t;
        }));
      function e(e, t) {
        return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
      }
      de.areCoordsEqual = e;
      function t(e, t, n) {
        if ((n === void 0 && (n = de.strictEquality), e.length !== t.length))
          return !1;
        for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
        return !0;
      }
      de.areArraysEqual = t;
    }
    var _e = !1;
    function fe() {
      return (_e || ((_e = !0), pe()), me.exports);
    }
    var ge = {},
      he = { exports: ge };
    function ye() {
      var e =
        (this && this.__assign) ||
        function () {
          return (
            (e =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                  t = arguments[n];
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }
                return e;
              }),
            e.apply(this, arguments)
          );
        };
      Object.defineProperty(ge, "__esModule", { value: !0 });
      var t = ce(),
        n = fe(),
        r = {
          initialSourceClientOffset: null,
          initialClientOffset: null,
          clientOffset: null,
        };
      function o(o, a) {
        o === void 0 && (o = r);
        var i = a.payload;
        switch (a.type) {
          case t.INIT_COORDS:
          case t.BEGIN_DRAG:
            return {
              initialSourceClientOffset: i.sourceClientOffset,
              initialClientOffset: i.clientOffset,
              clientOffset: i.clientOffset,
            };
          case t.HOVER:
            return n.areCoordsEqual(o.clientOffset, i.clientOffset)
              ? o
              : e(e({}, o), { clientOffset: i.clientOffset });
          case t.END_DRAG:
          case t.DROP:
            return r;
          default:
            return o;
        }
      }
      ge.default = o;
    }
    var Ce = !1;
    function be() {
      return (Ce || ((Ce = !0), ye()), he.exports);
    }
    var ve = {},
      Se = { exports: ve };
    function Re() {
      (Object.defineProperty(ve, "__esModule", { value: !0 }),
        (ve.ADD_SOURCE = "dnd-core/ADD_SOURCE"),
        (ve.ADD_TARGET = "dnd-core/ADD_TARGET"),
        (ve.REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE"),
        (ve.REMOVE_TARGET = "dnd-core/REMOVE_TARGET"));
      function e(e) {
        return { type: ve.ADD_SOURCE, payload: { sourceId: e } };
      }
      ve.addSource = e;
      function t(e) {
        return { type: ve.ADD_TARGET, payload: { targetId: e } };
      }
      ve.addTarget = t;
      function n(e) {
        return { type: ve.REMOVE_SOURCE, payload: { sourceId: e } };
      }
      ve.removeSource = n;
      function r(e) {
        return { type: ve.REMOVE_TARGET, payload: { targetId: e } };
      }
      ve.removeTarget = r;
    }
    var Le = !1;
    function Ee() {
      return (Le || ((Le = !0), Re()), Se.exports);
    }
    var ke = {},
      Ie = { exports: ke };
    function Te() {
      var e =
        (this && this.__assign) ||
        function () {
          return (
            (e =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                  t = arguments[n];
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }
                return e;
              }),
            e.apply(this, arguments)
          );
        };
      Object.defineProperty(ke, "__esModule", { value: !0 });
      var t = ce(),
        n = Ee(),
        r = D(),
        o = {
          itemType: null,
          item: null,
          sourceId: null,
          targetIds: [],
          dropResult: null,
          didDrop: !1,
          isSourcePublic: null,
        };
      function a(a, i) {
        a === void 0 && (a = o);
        var l = i.payload;
        switch (i.type) {
          case t.BEGIN_DRAG:
            return e(e({}, a), {
              itemType: l.itemType,
              item: l.item,
              sourceId: l.sourceId,
              isSourcePublic: l.isSourcePublic,
              dropResult: null,
              didDrop: !1,
            });
          case t.PUBLISH_DRAG_SOURCE:
            return e(e({}, a), { isSourcePublic: !0 });
          case t.HOVER:
            return e(e({}, a), { targetIds: l.targetIds });
          case n.REMOVE_TARGET:
            return a.targetIds.indexOf(l.targetId) === -1
              ? a
              : e(e({}, a), { targetIds: r.without(a.targetIds, l.targetId) });
          case t.DROP:
            return e(e({}, a), {
              dropResult: l.dropResult,
              didDrop: !0,
              targetIds: [],
            });
          case t.END_DRAG:
            return e(e({}, a), {
              itemType: null,
              item: null,
              sourceId: null,
              dropResult: null,
              didDrop: !1,
              isSourcePublic: null,
              targetIds: [],
            });
          default:
            return a;
        }
      }
      ke.default = a;
    }
    var De = !1;
    function xe() {
      return (De || ((De = !0), Te()), Ie.exports);
    }
    var $e = {},
      Pe = { exports: $e };
    function Ne() {
      Object.defineProperty($e, "__esModule", { value: !0 });
      var e = Ee();
      function t(t, n) {
        switch ((t === void 0 && (t = 0), n.type)) {
          case e.ADD_SOURCE:
          case e.ADD_TARGET:
            return t + 1;
          case e.REMOVE_SOURCE:
          case e.REMOVE_TARGET:
            return t - 1;
          default:
            return t;
        }
      }
      $e.default = t;
    }
    var Me = !1;
    function we() {
      return (Me || ((Me = !0), Ne()), Pe.exports);
    }
    var Ae = {},
      Fe = { exports: Ae };
    function Oe() {
      Object.defineProperty(Ae, "__esModule", { value: !0 });
      var e = D();
      ((Ae.NONE = []),
        (Ae.ALL = []),
        (Ae.NONE.__IS_NONE__ = !0),
        (Ae.ALL.__IS_ALL__ = !0));
      function t(t, n) {
        if (t === Ae.NONE) return !1;
        if (t === Ae.ALL || typeof n == "undefined") return !0;
        var r = e.intersection(n, t);
        return r.length > 0;
      }
      Ae.areDirty = t;
    }
    var Be = !1;
    function We() {
      return (Be || ((Be = !0), Oe()), Fe.exports);
    }
    var qe = {},
      Ue = { exports: qe };
    function Ve() {
      Object.defineProperty(qe, "__esModule", { value: !0 });
      var e = ce(),
        t = Ee(),
        n = fe(),
        r = We(),
        o = D();
      function a(a, i) {
        switch ((a === void 0 && (a = r.NONE), i.type)) {
          case e.HOVER:
            break;
          case t.ADD_SOURCE:
          case t.ADD_TARGET:
          case t.REMOVE_TARGET:
          case t.REMOVE_SOURCE:
            return r.NONE;
          case e.BEGIN_DRAG:
          case e.PUBLISH_DRAG_SOURCE:
          case e.END_DRAG:
          case e.DROP:
          default:
            return r.ALL;
        }
        var l = i.payload,
          s = l.targetIds,
          u = s === void 0 ? [] : s,
          c = l.prevTargetIds,
          d = c === void 0 ? [] : c,
          m = o.xor(u, d),
          p = m.length > 0 || !n.areArraysEqual(u, d);
        if (!p) return r.NONE;
        var _ = d[d.length - 1],
          f = u[u.length - 1];
        return (_ !== f && (_ && m.push(_), f && m.push(f)), m);
      }
      qe.default = a;
    }
    var He = !1;
    function Ge() {
      return (He || ((He = !0), Ve()), Ue.exports);
    }
    var ze = {},
      je = { exports: ze };
    function Ke() {
      Object.defineProperty(ze, "__esModule", { value: !0 });
      function e(e) {
        return (e === void 0 && (e = 0), e + 1);
      }
      ze.default = e;
    }
    var Qe = !1;
    function Xe() {
      return (Qe || ((Qe = !0), Ke()), je.exports);
    }
    var Ye = {},
      Je = { exports: Ye };
    function Ze() {
      var e =
          (this && this.__assign) ||
          function () {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          },
        t =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(Ye, "__esModule", { value: !0 });
      var n = t(be()),
        r = t(xe()),
        o = t(we()),
        a = t(Ge()),
        i = t(Xe()),
        l = D();
      function s(t, s) {
        return (
          t === void 0 && (t = {}),
          {
            dirtyHandlerIds: a.default(t.dirtyHandlerIds, {
              type: s.type,
              payload: e(e({}, s.payload), {
                prevTargetIds: l.get(t, "dragOperation.targetIds", []),
              }),
            }),
            dragOffset: n.default(t.dragOffset, s),
            refCount: o.default(t.refCount, s),
            dragOperation: r.default(t.dragOperation, s),
            stateId: i.default(t.stateId),
          }
        );
      }
      Ye.default = s;
    }
    var et = !1;
    function tt() {
      return (et || ((et = !0), Ze()), Je.exports);
    }
    var nt = {},
      rt = { exports: nt };
    function ot() {
      Object.defineProperty(nt, "__esModule", { value: !0 });
      function e(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
      }
      nt.add = e;
      function t(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      nt.subtract = t;
      function n(n) {
        var r = n.clientOffset,
          o = n.initialClientOffset,
          a = n.initialSourceClientOffset;
        return !r || !o || !a ? null : t(e(r, a), o);
      }
      nt.getSourceClientOffset = n;
      function r(e) {
        var n = e.clientOffset,
          r = e.initialClientOffset;
        return !n || !r ? null : t(n, r);
      }
      nt.getDifferenceFromInitialOffset = r;
    }
    var at = !1;
    function it() {
      return (at || ((at = !0), ot()), rt.exports);
    }
    var lt = {},
      st = { exports: lt };
    function ut() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(lt, "__esModule", { value: !0 });
      var t = e(l()),
        n = e(H()),
        r = it(),
        o = We(),
        a = (function () {
          function e(e, t) {
            ((this.store = e), (this.registry = t));
          }
          return (
            (e.prototype.subscribeToStateChange = function (e, n) {
              var r = this;
              n === void 0 && (n = { handlerIds: void 0 });
              var a = n.handlerIds;
              (t.default(
                typeof e == "function",
                "listener must be a function.",
              ),
                t.default(
                  typeof a == "undefined" || Array.isArray(a),
                  "handlerIds, when specified, must be an array of strings.",
                ));
              var i = this.store.getState().stateId,
                l = function () {
                  var t = r.store.getState(),
                    n = t.stateId;
                  try {
                    var l =
                      n === i ||
                      (n === i + 1 && !o.areDirty(t.dirtyHandlerIds, a));
                    l || e();
                  } finally {
                    i = n;
                  }
                };
              return this.store.subscribe(l);
            }),
            (e.prototype.subscribeToOffsetChange = function (e) {
              var n = this;
              t.default(typeof e == "function", "listener must be a function.");
              var r = this.store.getState().dragOffset,
                o = function () {
                  var t = n.store.getState().dragOffset;
                  t !== r && ((r = t), e());
                };
              return this.store.subscribe(o);
            }),
            (e.prototype.canDragSource = function (e) {
              if (!e) return !1;
              var n = this.registry.getSource(e);
              return (
                t.default(n, "Expected to find a valid source."),
                this.isDragging() ? !1 : n.canDrag(this, e)
              );
            }),
            (e.prototype.canDropOnTarget = function (e) {
              if (!e) return !1;
              var r = this.registry.getTarget(e);
              if (
                (t.default(r, "Expected to find a valid target."),
                !this.isDragging() || this.didDrop())
              )
                return !1;
              var o = this.registry.getTargetType(e),
                a = this.getItemType();
              return n.default(o, a) && r.canDrop(this, e);
            }),
            (e.prototype.isDragging = function () {
              return !!this.getItemType();
            }),
            (e.prototype.isDraggingSource = function (e) {
              if (!e) return !1;
              var n = this.registry.getSource(e, !0);
              if (
                (t.default(n, "Expected to find a valid source."),
                !this.isDragging() || !this.isSourcePublic())
              )
                return !1;
              var r = this.registry.getSourceType(e),
                o = this.getItemType();
              return r !== o ? !1 : n.isDragging(this, e);
            }),
            (e.prototype.isOverTarget = function (e, t) {
              if ((t === void 0 && (t = { shallow: !1 }), !e)) return !1;
              var r = t.shallow;
              if (!this.isDragging()) return !1;
              var o = this.registry.getTargetType(e),
                a = this.getItemType();
              if (a && !n.default(o, a)) return !1;
              var i = this.getTargetIds();
              if (!i.length) return !1;
              var l = i.indexOf(e);
              return r ? l === i.length - 1 : l > -1;
            }),
            (e.prototype.getItemType = function () {
              return this.store.getState().dragOperation.itemType;
            }),
            (e.prototype.getItem = function () {
              return this.store.getState().dragOperation.item;
            }),
            (e.prototype.getSourceId = function () {
              return this.store.getState().dragOperation.sourceId;
            }),
            (e.prototype.getTargetIds = function () {
              return this.store.getState().dragOperation.targetIds;
            }),
            (e.prototype.getDropResult = function () {
              return this.store.getState().dragOperation.dropResult;
            }),
            (e.prototype.didDrop = function () {
              return this.store.getState().dragOperation.didDrop;
            }),
            (e.prototype.isSourcePublic = function () {
              return this.store.getState().dragOperation.isSourcePublic;
            }),
            (e.prototype.getInitialClientOffset = function () {
              return this.store.getState().dragOffset.initialClientOffset;
            }),
            (e.prototype.getInitialSourceClientOffset = function () {
              return this.store.getState().dragOffset.initialSourceClientOffset;
            }),
            (e.prototype.getClientOffset = function () {
              return this.store.getState().dragOffset.clientOffset;
            }),
            (e.prototype.getSourceClientOffset = function () {
              return r.getSourceClientOffset(this.store.getState().dragOffset);
            }),
            (e.prototype.getDifferenceFromInitialOffset = function () {
              return r.getDifferenceFromInitialOffset(
                this.store.getState().dragOffset,
              );
            }),
            e
          );
        })();
      lt.default = a;
    }
    var ct = !1;
    function dt() {
      return (ct || ((ct = !0), ut()), st.exports);
    }
    var mt = {},
      pt = { exports: mt };
    function _t() {
      Object.defineProperty(mt, "__esModule", { value: !0 });
      var e = 0;
      function t() {
        return e++;
      }
      mt.default = t;
    }
    var ft = !1;
    function gt() {
      return (ft || ((ft = !0), _t()), pt.exports);
    }
    var ht = {},
      yt = { exports: ht };
    function Ct() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(ht, "__esModule", { value: !0 });
      var t = e(l());
      function n(e) {
        (t.default(
          typeof e.canDrag == "function",
          "Expected canDrag to be a function.",
        ),
          t.default(
            typeof e.beginDrag == "function",
            "Expected beginDrag to be a function.",
          ),
          t.default(
            typeof e.endDrag == "function",
            "Expected endDrag to be a function.",
          ));
      }
      ht.validateSourceContract = n;
      function r(e) {
        (t.default(
          typeof e.canDrop == "function",
          "Expected canDrop to be a function.",
        ),
          t.default(
            typeof e.hover == "function",
            "Expected hover to be a function.",
          ),
          t.default(
            typeof e.drop == "function",
            "Expected beginDrag to be a function.",
          ));
      }
      ht.validateTargetContract = r;
      function o(e, n) {
        if (n && Array.isArray(e)) {
          e.forEach(function (e) {
            return o(e, !1);
          });
          return;
        }
        t.default(
          typeof e == "string" || typeof e == "symbol",
          n
            ? "Type can only be a string, a symbol, or an array of either."
            : "Type can only be a string or a symbol.",
        );
      }
      ht.validateType = o;
    }
    var bt = !1;
    function vt() {
      return (bt || ((bt = !0), Ct()), yt.exports);
    }
    var St = {},
      Rt = { exports: St };
    function Lt() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(St, "__esModule", { value: !0 });
      var t = e(s()),
        n = e(l()),
        r = Ee(),
        o = e(gt()),
        a = _(),
        i = vt();
      function u(e) {
        var t = o.default().toString();
        switch (e) {
          case a.HandlerRole.SOURCE:
            return "S" + t;
          case a.HandlerRole.TARGET:
            return "T" + t;
          default:
            throw new Error("Unknown Handler Role: " + e);
        }
      }
      function c(e) {
        switch (e[0]) {
          case "S":
            return a.HandlerRole.SOURCE;
          case "T":
            return a.HandlerRole.TARGET;
          default:
            n.default(!1, "Cannot parse handler ID: " + e);
        }
      }
      function d(e, t) {
        var n = e.entries(),
          r = !1;
        do {
          var o = n.next(),
            a = o.done,
            i = o.value,
            l = i[1];
          if (l === t) return !0;
          r = !!a;
        } while (!r);
        return !1;
      }
      var m = (function () {
        function e(e) {
          ((this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = e));
        }
        return (
          (e.prototype.addSource = function (e, t) {
            (i.validateType(e), i.validateSourceContract(t));
            var n = this.addHandler(a.HandlerRole.SOURCE, e, t);
            return (this.store.dispatch(r.addSource(n)), n);
          }),
          (e.prototype.addTarget = function (e, t) {
            (i.validateType(e, !0), i.validateTargetContract(t));
            var n = this.addHandler(a.HandlerRole.TARGET, e, t);
            return (this.store.dispatch(r.addTarget(n)), n);
          }),
          (e.prototype.containsHandler = function (e) {
            return d(this.dragSources, e) || d(this.dropTargets, e);
          }),
          (e.prototype.getSource = function (e, t) {
            (t === void 0 && (t = !1),
              n.default(this.isSourceId(e), "Expected a valid source ID."));
            var r = t && e === this.pinnedSourceId,
              o = r ? this.pinnedSource : this.dragSources.get(e);
            return o;
          }),
          (e.prototype.getTarget = function (e) {
            return (
              n.default(this.isTargetId(e), "Expected a valid target ID."),
              this.dropTargets.get(e)
            );
          }),
          (e.prototype.getSourceType = function (e) {
            return (
              n.default(this.isSourceId(e), "Expected a valid source ID."),
              this.types.get(e)
            );
          }),
          (e.prototype.getTargetType = function (e) {
            return (
              n.default(this.isTargetId(e), "Expected a valid target ID."),
              this.types.get(e)
            );
          }),
          (e.prototype.isSourceId = function (e) {
            var t = c(e);
            return t === a.HandlerRole.SOURCE;
          }),
          (e.prototype.isTargetId = function (e) {
            var t = c(e);
            return t === a.HandlerRole.TARGET;
          }),
          (e.prototype.removeSource = function (e) {
            var o = this;
            (n.default(this.getSource(e), "Expected an existing source."),
              this.store.dispatch(r.removeSource(e)),
              t.default(function () {
                (o.dragSources.delete(e), o.types.delete(e));
              }));
          }),
          (e.prototype.removeTarget = function (e) {
            (n.default(this.getTarget(e), "Expected an existing target."),
              this.store.dispatch(r.removeTarget(e)),
              this.dropTargets.delete(e),
              this.types.delete(e));
          }),
          (e.prototype.pinSource = function (e) {
            var t = this.getSource(e);
            (n.default(t, "Expected an existing source."),
              (this.pinnedSourceId = e),
              (this.pinnedSource = t));
          }),
          (e.prototype.unpinSource = function () {
            (n.default(this.pinnedSource, "No source is pinned at the time."),
              (this.pinnedSourceId = null),
              (this.pinnedSource = null));
          }),
          (e.prototype.addHandler = function (e, t, n) {
            var r = u(e);
            return (
              this.types.set(r, t),
              e === a.HandlerRole.SOURCE
                ? this.dragSources.set(r, n)
                : e === a.HandlerRole.TARGET && this.dropTargets.set(r, n),
              r
            );
          }),
          e
        );
      })();
      St.default = m;
    }
    var Et = !1;
    function kt() {
      return (Et || ((Et = !0), Lt()), Rt.exports);
    }
    var It = {},
      Tt = { exports: It };
    function Dt() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(It, "__esModule", { value: !0 });
      var t = u(),
        n = e(tt()),
        r = e(ce()),
        o = e(dt()),
        a = e(kt());
      function i(e) {
        var r =
          typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
        return t.createStore(
          n.default,
          e && r && r({ name: "dnd-core", instanceId: "dnd-core" }),
        );
      }
      var l = (function () {
        function e(e) {
          var t = this;
          (e === void 0 && (e = !1),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
              var e = t.store.getState().refCount > 0;
              t.backend &&
                (e && !t.isSetUp
                  ? (t.backend.setup(), (t.isSetUp = !0))
                  : !e &&
                    t.isSetUp &&
                    (t.backend.teardown(), (t.isSetUp = !1)));
            }));
          var n = i(e);
          ((this.store = n),
            (this.monitor = new o.default(n, new a.default(n))),
            n.subscribe(this.handleRefCountChange));
        }
        return (
          (e.prototype.receiveBackend = function (e) {
            this.backend = e;
          }),
          (e.prototype.getMonitor = function () {
            return this.monitor;
          }),
          (e.prototype.getBackend = function () {
            return this.backend;
          }),
          (e.prototype.getRegistry = function () {
            return this.monitor.registry;
          }),
          (e.prototype.getActions = function () {
            var e = this,
              t = this.store.dispatch;
            function n(n) {
              return function () {
                for (var r = [], o = 0; o < arguments.length; o++)
                  r[o] = arguments[o];
                var a = n.apply(e, r);
                typeof a != "undefined" && t(a);
              };
            }
            var o = r.default(this);
            return Object.keys(o).reduce(function (e, t) {
              var r = o[t];
              return ((e[t] = n(r)), e);
            }, {});
          }),
          (e.prototype.dispatch = function (e) {
            this.store.dispatch(e);
          }),
          e
        );
      })();
      It.default = l;
    }
    var xt = !1;
    function $t() {
      return (xt || ((xt = !0), Dt()), Tt.exports);
    }
    var Pt = {},
      Nt = { exports: Pt };
    function Mt() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Pt, "__esModule", { value: !0 });
      var t = e($t());
      function n(e, n, r, o) {
        var a = new t.default(o),
          i = e(a, n, r);
        return (a.receiveBackend(i), a);
      }
      Pt.createDragDropManager = n;
    }
    var wt = !1;
    function At() {
      return (wt || ((wt = !0), Mt()), Nt.exports);
    }
    var Ft = {},
      Ot = { exports: Ft };
    function Bt() {
      function e(e) {
        for (var t in e) Ft.hasOwnProperty(t) || (Ft[t] = e[t]);
      }
      (Object.defineProperty(Ft, "__esModule", { value: !0 }), e(_()), e(At()));
    }
    var Wt = !1;
    function qt() {
      return (Wt || ((Wt = !0), Bt()), Ot.exports);
    }
    function Ut(e) {
      switch (e) {
        case void 0:
          return qt();
      }
    }
    a.exports = Ut;
  },
  null,
);
