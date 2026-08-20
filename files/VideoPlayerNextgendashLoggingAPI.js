__d(
  "VideoPlayerNextgendashLoggingAPI",
  ["VideoPlayerNextgendashStateMachine", "emptyFunction", "nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.loggingState.prevLogstamp,
        r = {
          clock: e.host.clock(),
          sequence: ((t = n == null ? void 0 : n.sequence) != null ? t : 0) + 1,
        };
      return ((e.loggingState.prevLogstamp = r), [n, r]);
    }
    function s(e, t) {
      for (
        var n,
          r = (n = t == null ? void 0 : t.slice()) != null ? n : [],
          o = r.slice(),
          a = 0,
          i = e != null ? e : "",
          l = /(?!\\)%[sidfoOc]/g,
          s = l.exec(i);
        s != null;
      )
        (++a, o.shift(), (s = l.exec(i)));
      for (; o.length > 0; ) (o.shift(), (i += " %s"), ++a);
      for (; r.length < a; ) r.push("NOPARAM");
      return [i, r];
    }
    function u(e, t, n, r) {
      var o = s(e, t),
        a = o[0],
        i = o[1],
        l = s(n, r),
        u = l[0],
        c = l[1],
        d = a !== "" && u !== "" ? a + " :: " + u : a + u;
      return [d, i.concat(c)];
    }
    var c = {
      displayName: "VideoPlayerNextgendashLoggingDestinationNull",
      log: r("emptyFunction"),
    };
    function d(e) {
      var t = new Set(e.filter(Boolean));
      return t.size < 1
        ? c
        : {
            displayName:
              "VideoPlayerNextgendashLoggingDestinationCombined:" +
              Array.from(t)
                .map(function (e) {
                  return e.displayName;
                })
                .join(":"),
            log: function (n, r) {
              t.forEach(function (e) {
                try {
                  e.log(n, r);
                } catch (l) {
                  var a;
                  t.delete(e);
                  var i = o("nextgendasherr").nextgendasherrFromCause(
                    n,
                    l,
                    "VideoPlayerNextgendashLoggingDestinationError",
                    "Caught exception from " +
                      e.displayName +
                      " when calling log with " +
                      r.type,
                  );
                  (a = o("nextgendasherr")
                    .nextgendasherrFBLogger(n)
                    .catching(i)).mustfix.apply(
                    a,
                    [i.messageFormat].concat(i.messageParams),
                  );
                }
              });
            },
          };
    }
    function m(e, t) {
      return {
        _: "#" + e.sequentialId + "#" + e.displayName,
        state:
          t === !0
            ? babelHelpers.extends(
                { state: e.state.state },
                e.state.state === "__disposed__" && e.state.exception != null
                  ? { exception: e.state.exception }
                  : {},
              )
            : e.state,
      };
    }
    var p = t.Element,
      _ = t.HTMLVideoElement,
      f = t.HTMLAudioElement,
      g = Object.prototype.toString;
    function h(e, t) {
      return y(e, function (n) {
        if (typeof n == "function")
          return t.shouldSnapshotFunctions
            ? "[Function " + n.toString() + "]"
            : n;
        if (n instanceof Error) {
          if (!t.shouldSnapshotErrors) return n;
          var r = n,
            a = {
              message: r.message !== r.messageFormat ? r.message : void 0,
              messageFormat: r.messageFormat,
              messageParams: r.messageParams,
              metadata: r.metadata ? r.metadata.getAll() : void 0,
              name: r.name,
              nextgendashClock: n.nextgendashClock,
              project: r.project,
              stack: t.shouldSnapshotIncludeErrorStackTrace ? r.stack : void 0,
            };
          return (
            Object.keys(a).forEach(function (e) {
              a[e] == null && e !== "name" && delete a[e];
            }),
            a
          );
        } else if (typeof n == "object" && n != null) {
          var i = function (n) {
            if (!t.shouldSnapshotIncludeObjectProperties) return new Map();
            var e = [];
            if (p != null && n instanceof p) {
              var r, o;
              for (var a of n.attributes)
                e.push([
                  a.name === "class"
                    ? "className"
                    : a.name === "for"
                      ? "htmlFor"
                      : a.name,
                  a.value,
                ]);
              e.push.apply(
                e,
                []
                  .concat(
                    (_ != null && n instanceof _) ||
                      (f != null && n instanceof f)
                      ? Object.getOwnPropertyNames(
                          (r = Object.getPrototypeOf(
                            Object.getPrototypeOf(n),
                          )) != null
                            ? r
                            : {},
                        )
                      : [],
                    Object.getOwnPropertyNames(
                      (o = Object.getPrototypeOf(n)) != null ? o : {},
                    ),
                    Object.getOwnPropertyNames(n),
                  )
                  .map(function (e) {
                    try {
                      return [e, n[e]];
                    } catch (t) {
                      return [e, "<exception:" + String(t) + ">"];
                    }
                  }),
              );
            } else if (n instanceof Map) {
              var i = [];
              for (var l of n.entries()) i.push(l);
              e.push(["$Map.entries", i]);
            } else if (n instanceof Set) {
              var s = [];
              for (var u of n.values()) s.push(u);
              e.push(["$Set.values", s]);
            } else if (n instanceof Uint8Array) {
              for (var c = [], d = 5, m = 0; m < d && m < n.length; ++m)
                c.push(n[m]);
              for (
                n.length > d + d && c.push("..."),
                  m = Math.max(m, n.length - d);
                m < n.length;
                ++m
              )
                c.push(n[m]);
              (e.push(["$Uint8Array.length", n.length]),
                e.push(["$Uint8Array.byteOffset", n.byteOffset]),
                e.push(["$Uint8Array.byteLength", n.byteLength]),
                e.push(["$Uint8Array.bytes", c]));
            } else if (n instanceof ArrayBuffer) {
              for (
                var g = new Uint8Array(n), h = [], y = 5, C = 0;
                C < y && C < g.length;
                ++C
              )
                h.push(g[C]);
              for (
                g.length > y + y && h.push("..."),
                  C = Math.max(C, g.length - y);
                C < g.length;
                ++C
              )
                h.push(g[C]);
              (e.push(["$ArrayBuffer.byteLength", n.byteLength]),
                e.push(["$ArrayBuffer.bytes", h]));
            }
            return new Map(
              e.filter(function (e) {
                var t = e[0],
                  n = e[1];
                return (
                  t.startsWith("$Map.") ||
                  t.startsWith("$Set.") ||
                  t.startsWith("$Uint8Array.") ||
                  t.startsWith("$ArrayBuffer.") ||
                  !(
                    typeof n == "object" ||
                    typeof n == "function" ||
                    (t.startsWith("on") && n === null) ||
                    t.toUpperCase() === t
                  )
                );
              }),
            );
          };
          if (o("VideoPlayerNextgendashStateMachine").isStateMachine(n))
            return m(n, n !== e && t.shouldOmitChildStateMachineState);
          if (p != null && n instanceof p) {
            var l = n,
              s = i(l),
              u = { $_: "<" + l.nodeName.toLowerCase() + ">" };
            t.shouldSnapshotIncludeOriginalReference && (u.$$ = l);
            for (var c of s.entries()) {
              var d = c[0],
                h = c[1];
              u[d] = h;
            }
            return u;
          } else {
            var y = g.call(n);
            if (
              !(n instanceof Boolean) &&
              !(n instanceof Date) &&
              !(n instanceof Number) &&
              !(n instanceof RegExp) &&
              !(n instanceof String) &&
              y !== "[object Object]" &&
              y !== "[object Array]"
            ) {
              var C = i(n),
                b = { $_: y };
              t.shouldSnapshotIncludeOriginalReference && (b.$$ = n);
              for (var v of C.entries()) {
                var S = v[0],
                  R = v[1];
                b[S] = R;
              }
              return b;
            } else return n;
          }
        } else return n;
      });
    }
    function y(e, t) {
      var n = new WeakMap();
      return (function e(r, o) {
        var a,
          i,
          l = t !== void 0 ? t(r) : r;
        if (
          typeof l == "object" &&
          l !== null &&
          !(l instanceof Boolean) &&
          !(l instanceof Date) &&
          !(l instanceof Number) &&
          !(l instanceof RegExp) &&
          !(l instanceof String)
        ) {
          if (((a = n.get(l)), a !== void 0)) return { $ref: a };
          if ((n.set(l, o), Array.isArray(l))) {
            for (var s = [], u = l, c = 0, d = u.length; c < d; ++c)
              s[c] = e(u[c], o + "[" + c + "]");
            i = s;
          } else {
            for (
              var m = {}, p = Object.keys(l), _ = 0, f = p.length;
              _ < f;
              ++_
            ) {
              var g = p[_];
              g === "$$"
                ? (m[g] = l[g])
                : (m[g] = e(l[g], o + "[" + JSON.stringify(g) + "]"));
            }
            i = m;
          }
          return i;
        }
        return l;
      })(e, "$");
    }
    ((l.getLogstamps = e),
      (l.normalizeFormatAndParams = s),
      (l.combineFormatAndParams = u),
      (l.combineLoggingDestinations = d),
      (l.snapshotObjectForLogging = h));
  },
  98,
);
