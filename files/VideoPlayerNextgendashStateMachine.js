__d(
  "VideoPlayerNextgendashStateMachine",
  ["VideoPlayerNextgendashWorkQueue", "nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = {},
      u = "$$nextgendashSkipAutoDisposeSymbol";
    function c(e) {
      return (
        e != null &&
          typeof e == "object" &&
          Object.defineProperty(e, u, {
            configurable: !1,
            enumerable: !1,
            value: s,
            writable: !1,
          }),
        e
      );
    }
    function d(e, t, n, r, o) {
      var a,
        i = (a = r.options) == null ? void 0 : a.augmentEnv,
        l = i ? i(t.env, o) : t.env,
        s = r.createSM(
          t.displayName + "." + n,
          babelHelpers.extends({}, l, { workQueue: e }),
          t,
          o,
        );
      return s;
    }
    function m(e, t, n, r, o, a) {
      (t.env.logging.log(t.env, {
        event: n,
        eventClock: r,
        fromSm: o,
        sendReason: a,
        sm: t,
        type: "state_machine_send_event",
      }),
        e.enqueueWork(function () {
          if (
            (f(t, n, r, o, a),
            t.$$nextgendashEventsReceivedBeforeInit != null &&
              n.type === "__init" &&
              t.state.state !== "__null__" &&
              t.state.state !== "__disposed__")
          ) {
            var i = t.$$nextgendashEventsReceivedBeforeInit;
            t.$$nextgendashEventsReceivedBeforeInit = null;
            for (var l = 0, s = i.length; l < s; ++l)
              m(e, t, i[l], r, o, "sendAfterInit:" + (a != null ? a : ""));
          }
        }));
    }
    function p(e, t) {
      return {
        sendToOther: function (r, o, a) {
          var n = e.env.host.clock(e.env);
          m(t, r, o, n, e, a != null ? a : "sendToOther");
        },
        sendToSelf: function (r, o) {
          var n = e.env.host.clock(e.env);
          m(t, e, r, n, e, o != null ? o : "sendToSelf");
        },
      };
    }
    function _(e, t, n, r, a, i) {
      return {
        makeChildSm: function (l, s) {
          if (
            ((e.$$nextgendashEverCalledMakeChildSm = !0), !n.duringTransition)
          )
            throw o("nextgendasherr").nextgendasherr(
              e.env,
              "VideoPlayerNextgendashStateMachineChildSMOutsideTransition[" +
                e.displayName +
                "]@" +
                a +
                ">[" +
                l +
                "]",
            );
          for (
            var i = arguments.length, u = new Array(i > 2 ? i - 2 : 0), c = 2;
            c < i;
            c++
          )
            u[c - 2] = arguments[c];
          var m = d.apply(void 0, [t, e, l, s].concat(u));
          return (
            r.add(m),
            e.env.config.optimizeAutoDisposeTraversal &&
              (e.$$nextgendashChildSms == null &&
                (e.$$nextgendashChildSms = []),
              e.$$nextgendashChildSms.push(m)),
            m
          );
        },
        unexpectedEvent: function (n, r) {
          for (
            var t = arguments.length, l = new Array(t > 2 ? t - 2 : 0), s = 2;
            s < t;
            s++
          )
            l[s - 2] = arguments[s];
          var u = o("nextgendasherr").nextgendasherr.apply(
            void 0,
            [
              e.env,
              "VideoPlayerNextgendashStateMachineUnexpectedEvent[" +
                e.displayName +
                "]@" +
                a +
                "<--" +
                i,
              r,
            ].concat(l),
          );
          if (n === "log")
            e.env.logging.log(e.env, {
              error: u,
              type: "generic_error_as_warning",
            });
          else throw u;
        },
      };
    }
    function f(e, t, n, r, a) {
      var i = e.state;
      if (!(i.state === "__disposed__" && t.type !== "__enter")) {
        if (i.state === "__null__" && t.type !== "__init") {
          (e.$$nextgendashEventsReceivedBeforeInit == null &&
            (e.$$nextgendashEventsReceivedBeforeInit = []),
            e.$$nextgendashEventsReceivedBeforeInit.push(t));
          return;
        }
        var l = new Set();
        !e.env.config.optimizeAutoDisposeTraversal &&
          e.$$nextgendashEverCalledMakeChildSm === !0 &&
          S(e, i, l, !1);
        try {
          e.env.logging.log(e.env, {
            event: t,
            eventClock: n,
            fromSm: r,
            sendReason: a,
            sm: e,
            type: "state_machine_receive_event_begin",
          });
          try {
            var s,
              u,
              c = { duringTransition: !0 },
              f = [],
              g = function (t) {
                f.push(t);
              },
              h = e.env.workQueue.enqueueWork,
              y = o(
                "VideoPlayerNextgendashWorkQueue",
              ).createVideoPlayerNextgendashWorkQueue(g),
              C = e.env.config.releasePastStateMachineStates
                ? babelHelpers.extends(
                    {},
                    _(e, y, c, l, (s = i.state) != null ? s : "?", t.type),
                    p(e, y),
                  )
                : {
                    makeChildSm: function (n, r) {
                      if (
                        ((e.$$nextgendashEverCalledMakeChildSm = !0),
                        !c.duringTransition)
                      ) {
                        var t;
                        throw o("nextgendasherr").nextgendasherr(
                          e.env,
                          "VideoPlayerNextgendashStateMachineChildSMOutsideTransition[" +
                            e.displayName +
                            "]@" +
                            ((t = i.state) != null ? t : "?") +
                            ">[" +
                            n +
                            "]",
                        );
                      }
                      for (
                        var a = arguments.length,
                          s = new Array(a > 2 ? a - 2 : 0),
                          u = 2;
                        u < a;
                        u++
                      )
                        s[u - 2] = arguments[u];
                      var m = d.apply(void 0, [y, e, n, r].concat(s));
                      return (
                        l.add(m),
                        e.env.config.optimizeAutoDisposeTraversal &&
                          (e.$$nextgendashChildSms == null &&
                            (e.$$nextgendashChildSms = []),
                          e.$$nextgendashChildSms.push(m)),
                        m
                      );
                    },
                    sendToOther: function (n, r, o) {
                      var t = e.env.host.clock(e.env);
                      m(y, n, r, t, e, o != null ? o : "sendToOther");
                    },
                    sendToSelf: function (n, r) {
                      var t = e.env.host.clock(e.env);
                      m(y, e, n, t, e, r != null ? r : "sendToSelf");
                    },
                    unexpectedEvent: function (r, a) {
                      for (
                        var n,
                          l = arguments.length,
                          s = new Array(l > 2 ? l - 2 : 0),
                          u = 2;
                        u < l;
                        u++
                      )
                        s[u - 2] = arguments[u];
                      var c = o("nextgendasherr").nextgendasherr.apply(
                        void 0,
                        [
                          e.env,
                          "VideoPlayerNextgendashStateMachineUnexpectedEvent[" +
                            e.displayName +
                            "]@" +
                            ((n = i.state) != null ? n : "?") +
                            "<--" +
                            t.type,
                          a,
                        ].concat(s),
                      );
                      if (r === "log")
                        e.env.logging.log(e.env, {
                          error: c,
                          type: "generic_error_as_warning",
                        });
                      else throw c;
                    },
                  },
              b = babelHelpers.extends(
                { args: e.args, env: e.env, eventClock: n, fromSm: r },
                C,
                {
                  sendReason: a,
                  stateClock: e.stateClock,
                  thisName: e.displayName,
                  thisSm: e,
                },
              ),
              v = void 0,
              R = l.size;
            if (i.state === "__null__") {
              if (t.type !== "__dispose")
                if (t.type === "__init") v = e.initialTransition(b);
                else throw b.unexpectedEvent("throw");
            } else
              v = e.transition(
                babelHelpers.extends({}, b, { event: t, state: i }),
              );
            if (
              (e.env.config.optimizeAutoDisposeTraversal &&
                v === void 0 &&
                l.size === R &&
                l.clear(),
              (t.type === "__exception" && v === void 0) ||
                t.type === "__dispose")
            ) {
              var L = t.exception,
                E = t.reason;
              (v != null &&
                !e.env.config.optimizeAutoDisposeTraversal &&
                e.$$nextgendashEverCalledMakeChildSm &&
                S(e, v, l, !1),
                (v = {
                  exception: L,
                  reason: E != null ? E : t.type,
                  state: "__disposed__",
                }));
            }
            if (
              e.env.config.optimizeAutoDisposeTraversal &&
              e.$$nextgendashEverCalledMakeChildSm === !0 &&
              (v !== void 0 || l.size > 0)
            ) {
              var k = e.$$nextgendashChildSms;
              if (k != null) {
                l.clear();
                for (var I = k.length - 1; I >= 0; I--) l.add(k[I]);
              } else S(e, i, l, !1);
            }
            if (
              ((e.stateClock = e.env.host.clock(e.env)),
              v !== void 0 &&
                (!e.env.config.optimizeAutoDisposeTraversal &&
                  e.$$nextgendashEverCalledMakeChildSm &&
                  S(e, e.state, l, !1),
                (e.state = v)),
              v !== void 0 && v.state !== i.state && t.type !== "__enter")
            ) {
              var T, D;
              m(
                e.env.workQueue,
                e,
                { prevState: i, type: "__enter" },
                e.env.host.clock(e.env),
                e,
                "from:" +
                  ((T = i.state) != null ? T : "?") +
                  ":to:" +
                  ((D = e.state.state) != null ? D : "?"),
              );
            }
            if (
              ((c.duringTransition = !1),
              y.setScheduleToRun(h),
              (u = e.env.workQueue).enqueueWork.apply(u, f),
              v !== void 0)
            ) {
              var x = e.args,
                $ = x.onDisposed,
                P = x.onTransitioned;
              if (P) {
                var N,
                  M,
                  w = e.state,
                  A =
                    "#" +
                    e.sequentialId +
                    "#" +
                    e.displayName +
                    ":from:" +
                    ((N = i.state) != null ? N : "?") +
                    ":to:" +
                    ((M = e.state.state) != null ? M : "?") +
                    ":event:" +
                    t.type;
                e.env.workQueue.enqueueWork(function () {
                  P(i, w, A);
                });
              }
              if ($ && e.state.state === "__disposed__") {
                var F,
                  O,
                  B = e.state,
                  W =
                    "#" +
                    e.sequentialId +
                    "#" +
                    e.displayName +
                    ":from:" +
                    ((F = i.state) != null ? F : "?") +
                    ":to:" +
                    ((O = e.state.state) != null ? O : "?") +
                    ":event:" +
                    t.type;
                e.env.workQueue.enqueueWork(function () {
                  $(i, B, W);
                });
              }
            }
            e.env.logging.log(e.env, {
              event: t,
              eventClock: n,
              fromSm: r,
              sendReason: a,
              sm: e,
              smPrevState: i,
              type: "state_machine_receive_event_success",
            });
          } catch (l) {
            var q,
              U = o("nextgendasherr").nextgendasherrFromNextgendasherr(l),
              V =
                U != null &&
                U.name.startsWith(
                  "VideoPlayerNextgendashStateMachineUnexpectedEvent",
                )
                  ? U
                  : o("nextgendasherr").nextgendasherrFromCause(
                      e.env,
                      l,
                      "VideoPlayerNextgendashStateMachineException[" +
                        e.displayName +
                        "]@" +
                        ((q = i.state) != null ? q : "?") +
                        "<--" +
                        t.type,
                    );
            if (
              (e.env.logging.log(e.env, {
                event: t,
                eventClock: n,
                exception: V,
                fromSm: r,
                sendReason: a,
                sm: e,
                smPrevState: i,
                type: "state_machine_receive_event_exception",
              }),
              t.type !== "__exception")
            ) {
              var H;
              m(
                e.env.workQueue,
                e,
                { exception: V, type: "__exception" },
                e.env.host.clock(e.env),
                e,
                "in:" +
                  ((H = i.state) != null ? H : "?") +
                  ":event:" +
                  t.type +
                  ":exception:" +
                  V.name,
              );
            } else throw l;
          }
        } catch (n) {
          var G,
            z = o("nextgendasherr").nextgendasherrFromCause(
              e.env,
              n,
              "VideoPlayerNextgendashStateMachineFatalException[" +
                e.displayName +
                "]@" +
                ((G = i.state) != null ? G : "?") +
                "<--" +
                t.type,
            );
          if (e.$$nextgendashEverCalledMakeChildSm) {
            var j = e.$$nextgendashChildSms;
            if (e.env.config.optimizeAutoDisposeTraversal && j != null) {
              l.clear();
              for (var K = j.length - 1; K >= 0; K--) l.add(j[K]);
            } else S(e, e.state, l, !1);
          }
          if (
            ((e.state = {
              exception: z,
              reason: "state_machine_fatal_exception",
              state: "__disposed__",
            }),
            (e.$$nextgendashChildSms = null),
            e.env.logging.log(e.env, {
              exception: z,
              sm: e,
              smPrevState: i,
              type: "state_machine_fatal_exception",
            }),
            i.state !== "__disposed__" && t.type !== "__enter")
          ) {
            var Q, X;
            m(
              e.env.workQueue,
              e,
              { prevState: i, type: "__enter" },
              e.env.host.clock(e.env),
              e,
              "from:" +
                ((Q = i.state) != null ? Q : "?") +
                ":to:" +
                ((X = e.state.state) != null ? X : "?"),
            );
          }
          {
            var Y = e.parentSm;
            if (Y) {
              var J, Z;
              m(
                e.env.workQueue,
                Y,
                { exception: z, type: "__exception" },
                e.env.host.clock(e.env),
                e,
                "child:#" +
                  e.sequentialId +
                  "#" +
                  e.displayName +
                  ":from:" +
                  ((J = i.state) != null ? J : "?") +
                  ":to:" +
                  ((Z = e.state.state) != null ? Z : "?") +
                  ":event:" +
                  t.type,
              );
            }
          }
        } finally {
          if (l.size > 0) {
            S(e, e.state, l, !0);
            for (var ee of l) {
              var te, ne;
              m(
                ee.env.workQueue,
                ee,
                { reason: "__released_by_parent", type: "__dispose" },
                e.env.host.clock(e.env),
                e,
                "parent:#" +
                  e.sequentialId +
                  "#" +
                  e.displayName +
                  ":from:" +
                  ((te = i.state) != null ? te : "?") +
                  ":to:" +
                  ((ne = e.state.state) != null ? ne : "?") +
                  ":event:" +
                  t.type,
              );
              var re = e.$$nextgendashChildSms;
              if (re != null) {
                var oe = re.indexOf(ee);
                oe !== -1 && re.splice(oe, 1);
              }
            }
          }
        }
      }
    }
    var g = {}.constructor,
      h = [].constructor,
      y = new Map().constructor,
      C = new Set().constructor,
      b = [],
      v = new Set();
    function S(t, n, r, o) {
      if ((o === void 0 && (o = !1), !(o && r.size <= 0) && n[u] !== s)) {
        var a = t.env.config.optimizeAutoDisposeTraversal,
          i = t.env.config.reduceStateMachineEventOverhead,
          l = a ? b : [],
          c = a ? v : new Set();
        try {
          c.add(n);
          for (var d = n; d != null; ) {
            if (d.$$nextgendashBaseSymbol === e) {
              if (d.parentSm === t)
                if (o) {
                  if ((r.delete(d), r.size <= 0)) break;
                } else r.add(d);
            } else if (!(i && d[u] === s)) {
              var m = d.constructor;
              if (m === g)
                for (var p in d) {
                  var _ = d[p];
                  _ != null &&
                    typeof _ == "object" &&
                    d[u] !== s &&
                    !c.has(_) &&
                    (c.add(_), l.push(_));
                }
              else if (m === h || m === y || m === C)
                for (var f of d)
                  f != null &&
                    typeof f == "object" &&
                    d[u] !== s &&
                    !c.has(f) &&
                    (c.add(f), l.push(f));
            }
            d = l.pop();
          }
        } finally {
          a && ((l.length = 0), c.clear());
        }
      }
    }
    var R = 1;
    function L(e) {
      return E(e);
    }
    function E(t) {
      return (
        typeof t == "object" && t != null && t.$$nextgendashBaseSymbol === e
      );
    }
    function k(t, n, r) {
      var o = {};
      return {
        createSM: function (a, i, l, s) {
          var t = i.host.clock(i),
            u = {
              $$nextgendashBaseSymbol: e,
              $$nextgendashChildSms: null,
              $$nextgendashDefinitionSymbol: o,
              $$nextgendashEventsReceivedBeforeInit: null,
              $$nextgendashEverCalledMakeChildSm: !1,
              args: s,
              displayName: a,
              env: i,
              initialTransition: n,
              parentSm: l,
              sendEvent: function (t, n, r, o) {
                m(
                  u.env.workQueue,
                  u,
                  t,
                  o != null ? o : u.env.host.clock(u.env),
                  n,
                  r,
                );
              },
              sequentialId: R++,
              state: { state: "__null__" },
              stateClock: t,
              transition: r,
            };
          return (
            u.env.logging.log(u.env, {
              fromSm: l,
              sm: u,
              type: "state_machine_created",
            }),
            m(
              u.env.workQueue,
              u,
              { type: "__init" },
              u.env.host.clock(u.env),
              l,
            ),
            u
          );
        },
        didDefineThisSM: function (t) {
          return E(t) && t.$$nextgendashDefinitionSymbol === o;
        },
        options: t,
      };
    }
    ((l.skipAutoDisposeInsideThisObject = c),
      (l.isStateMachine = L),
      (l.defineStateMachine = k));
  },
  98,
);
