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
            (p(t, n, r, o, a),
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
    function p(e, t, n, r, a) {
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
          b(e, i, l, !1);
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
              u = !0,
              c = [],
              p = function (t) {
                c.push(t);
              },
              _ = e.env.workQueue.enqueueWork,
              f = o(
                "VideoPlayerNextgendashWorkQueue",
              ).createVideoPlayerNextgendashWorkQueue(p),
              g = {
                args: e.args,
                env: e.env,
                eventClock: n,
                fromSm: r,
                makeChildSm: function (n, r) {
                  if (((e.$$nextgendashEverCalledMakeChildSm = !0), !u)) {
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
                      c = 2;
                    c < a;
                    c++
                  )
                    s[c - 2] = arguments[c];
                  var m = d.apply(void 0, [f, e, n, r].concat(s));
                  return (
                    l.add(m),
                    e.env.config.optimizeAutoDisposeTraversal &&
                      (e.$$nextgendashChildSms == null &&
                        (e.$$nextgendashChildSms = []),
                      e.$$nextgendashChildSms.push(m)),
                    m
                  );
                },
                sendReason: a,
                sendToOther: function (n, r, o) {
                  var t = e.env.host.clock();
                  m(f, n, r, t, e, o != null ? o : "sendToOther");
                },
                sendToSelf: function (n, r) {
                  var t = e.env.host.clock();
                  m(f, e, n, t, e, r != null ? r : "sendToSelf");
                },
                stateClock: e.stateClock,
                thisName: e.displayName,
                thisSm: e,
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
              h = void 0,
              y = l.size;
            if (i.state === "__null__") {
              if (t.type !== "__dispose")
                if (t.type === "__init") h = e.initialTransition(g);
                else throw g.unexpectedEvent("throw");
            } else
              h = e.transition(
                babelHelpers.extends({}, g, { event: t, state: i }),
              );
            if (
              (e.env.config.optimizeAutoDisposeTraversal &&
                h === void 0 &&
                l.size === y &&
                l.clear(),
              (t.type === "__exception" && h === void 0) ||
                t.type === "__dispose")
            ) {
              var C = t.exception,
                v = t.reason;
              (h != null &&
                !e.env.config.optimizeAutoDisposeTraversal &&
                e.$$nextgendashEverCalledMakeChildSm &&
                b(e, h, l, !1),
                (h = {
                  exception: C,
                  reason: v != null ? v : t.type,
                  state: "__disposed__",
                }));
            }
            if (
              e.env.config.optimizeAutoDisposeTraversal &&
              e.$$nextgendashEverCalledMakeChildSm === !0 &&
              (h !== void 0 || l.size > 0)
            ) {
              var S = e.$$nextgendashChildSms;
              if (S != null) {
                l.clear();
                for (var R = S.length - 1; R >= 0; R--) l.add(S[R]);
              } else b(e, i, l, !1);
            }
            if (
              ((e.stateClock = e.env.host.clock()),
              h !== void 0 &&
                (!e.env.config.optimizeAutoDisposeTraversal &&
                  e.$$nextgendashEverCalledMakeChildSm &&
                  b(e, e.state, l, !1),
                (e.state = h)),
              h !== void 0 && h.state !== i.state && t.type !== "__enter")
            ) {
              var L, E;
              m(
                e.env.workQueue,
                e,
                { prevState: i, type: "__enter" },
                e.env.host.clock(),
                e,
                "from:" +
                  ((L = i.state) != null ? L : "?") +
                  ":to:" +
                  ((E = e.state.state) != null ? E : "?"),
              );
            }
            if (
              ((u = !1),
              f.setScheduleToRun(_),
              (s = e.env.workQueue).enqueueWork.apply(s, c),
              h !== void 0)
            ) {
              var k = e.args,
                I = k.onDisposed,
                T = k.onTransitioned;
              if (T) {
                var D,
                  x,
                  $ = e.state,
                  P =
                    "#" +
                    e.sequentialId +
                    "#" +
                    e.displayName +
                    ":from:" +
                    ((D = i.state) != null ? D : "?") +
                    ":to:" +
                    ((x = e.state.state) != null ? x : "?") +
                    ":event:" +
                    t.type;
                e.env.workQueue.enqueueWork(function () {
                  T(i, $, P);
                });
              }
              if (I && e.state.state === "__disposed__") {
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
                  I(i, w, A);
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
            var F,
              O = o("nextgendasherr").nextgendasherrFromNextgendasherr(l),
              B =
                O != null &&
                O.name.startsWith(
                  "VideoPlayerNextgendashStateMachineUnexpectedEvent",
                )
                  ? O
                  : o("nextgendasherr").nextgendasherrFromCause(
                      e.env,
                      l,
                      "VideoPlayerNextgendashStateMachineException[" +
                        e.displayName +
                        "]@" +
                        ((F = i.state) != null ? F : "?") +
                        "<--" +
                        t.type,
                    );
            if (
              (e.env.logging.log(e.env, {
                event: t,
                eventClock: n,
                exception: B,
                fromSm: r,
                sendReason: a,
                sm: e,
                smPrevState: i,
                type: "state_machine_receive_event_exception",
              }),
              t.type !== "__exception")
            ) {
              var W;
              m(
                e.env.workQueue,
                e,
                { exception: B, type: "__exception" },
                e.env.host.clock(),
                e,
                "in:" +
                  ((W = i.state) != null ? W : "?") +
                  ":event:" +
                  t.type +
                  ":exception:" +
                  B.name,
              );
            } else throw l;
          }
        } catch (n) {
          var q,
            U = o("nextgendasherr").nextgendasherrFromCause(
              e.env,
              n,
              "VideoPlayerNextgendashStateMachineFatalException[" +
                e.displayName +
                "]@" +
                ((q = i.state) != null ? q : "?") +
                "<--" +
                t.type,
            );
          if (e.$$nextgendashEverCalledMakeChildSm) {
            var V = e.$$nextgendashChildSms;
            if (e.env.config.optimizeAutoDisposeTraversal && V != null) {
              l.clear();
              for (var H = V.length - 1; H >= 0; H--) l.add(V[H]);
            } else b(e, e.state, l, !1);
          }
          if (
            ((e.state = {
              exception: U,
              reason: "state_machine_fatal_exception",
              state: "__disposed__",
            }),
            (e.$$nextgendashChildSms = null),
            e.env.logging.log(e.env, {
              exception: U,
              sm: e,
              smPrevState: i,
              type: "state_machine_fatal_exception",
            }),
            i.state !== "__disposed__" && t.type !== "__enter")
          ) {
            var G, z;
            m(
              e.env.workQueue,
              e,
              { prevState: i, type: "__enter" },
              e.env.host.clock(),
              e,
              "from:" +
                ((G = i.state) != null ? G : "?") +
                ":to:" +
                ((z = e.state.state) != null ? z : "?"),
            );
          }
          {
            var j = e.parentSm;
            if (j) {
              var K, Q;
              m(
                e.env.workQueue,
                j,
                { exception: U, type: "__exception" },
                e.env.host.clock(),
                e,
                "child:#" +
                  e.sequentialId +
                  "#" +
                  e.displayName +
                  ":from:" +
                  ((K = i.state) != null ? K : "?") +
                  ":to:" +
                  ((Q = e.state.state) != null ? Q : "?") +
                  ":event:" +
                  t.type,
              );
            }
          }
        } finally {
          if (l.size > 0) {
            b(e, e.state, l, !0);
            for (var X of l) {
              var Y, J;
              m(
                X.env.workQueue,
                X,
                { reason: "__released_by_parent", type: "__dispose" },
                e.env.host.clock(),
                e,
                "parent:#" +
                  e.sequentialId +
                  "#" +
                  e.displayName +
                  ":from:" +
                  ((Y = i.state) != null ? Y : "?") +
                  ":to:" +
                  ((J = e.state.state) != null ? J : "?") +
                  ":event:" +
                  t.type,
              );
              var Z = e.$$nextgendashChildSms;
              if (Z != null) {
                var ee = Z.indexOf(X);
                ee !== -1 && Z.splice(ee, 1);
              }
            }
          }
        }
      }
    }
    var _ = {}.constructor,
      f = [].constructor,
      g = new Map().constructor,
      h = new Set().constructor,
      y = [],
      C = new Set();
    function b(t, n, r, o) {
      if ((o === void 0 && (o = !1), !(o && r.size <= 0) && n[u] !== s)) {
        var a = t.env.config.optimizeAutoDisposeTraversal,
          i = a ? y : [],
          l = a ? C : new Set();
        try {
          l.add(n);
          for (var c = n; c != null; ) {
            if (c.$$nextgendashBaseSymbol === e) {
              if (c.parentSm === t)
                if (o) {
                  if ((r.delete(c), r.size <= 0)) break;
                } else r.add(c);
            } else {
              var d = c.constructor;
              if (d === _)
                for (var m in c) {
                  var p = c[m];
                  p != null &&
                    typeof p == "object" &&
                    c[u] !== s &&
                    !l.has(p) &&
                    (l.add(p), i.push(p));
                }
              else if (d === f || d === g || d === h)
                for (var b of c)
                  b != null &&
                    typeof b == "object" &&
                    c[u] !== s &&
                    !l.has(b) &&
                    (l.add(b), i.push(b));
            }
            c = i.pop();
          }
        } finally {
          a && ((i.length = 0), l.clear());
        }
      }
    }
    var v = 1;
    function S(e) {
      return R(e);
    }
    function R(t) {
      return (
        typeof t == "object" && t != null && t.$$nextgendashBaseSymbol === e
      );
    }
    function L(t, n, r) {
      var o = {};
      return {
        createSM: function (a, i, l, s) {
          var t = i.host.clock(),
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
                  o != null ? o : u.env.host.clock(),
                  n,
                  r,
                );
              },
              sequentialId: v++,
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
            m(u.env.workQueue, u, { type: "__init" }, u.env.host.clock(), l),
            u
          );
        },
        didDefineThisSM: function (t) {
          return R(t) && t.$$nextgendashDefinitionSymbol === o;
        },
        options: t,
      };
    }
    ((l.skipAutoDisposeInsideThisObject = c),
      (l.isStateMachine = S),
      (l.defineStateMachine = L));
  },
  98,
);
