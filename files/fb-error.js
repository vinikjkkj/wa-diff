__d(
  "fb-error",
  ["performanceNow", "removeFromArray"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4,
      };
    function s(e) {
      var t = new Error(e);
      if (t.stack === void 0)
        try {
          throw t;
        } catch (e) {}
      t.messageFormat = e;
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return (
        (t.messageParams = r.map(function (e) {
          return String(e);
        })),
        (t.taalOpcodes = [l.PREVIOUS_FRAME]),
        t
      );
    }
    var u = !1,
      c = {
        errorListener: function (n) {
          var e = t.console,
            r = e[n.type] ? n.type : "error";
          if (n.type === "fatal" || (r === "error" && !u)) {
            var o = n.message;
            (e.error(
              "ErrorUtils caught an error:\n\n" +
                o +
                "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.",
              n,
            ),
              (u = !0));
          }
        },
      },
      d = { skipDupErrorGuard: !1 },
      m = { config: d, setup: _ },
      p = !1;
    function _(e) {
      p === !1 && ((p = !0), (m.config = Object.freeze(e)));
    }
    var f = 6,
      g = 6e4,
      h = 10 * g,
      y = new Map(),
      C = 0;
    function b() {
      var t = (e || (e = n("performanceNow")))();
      if (t > C + g) {
        var r = t - h;
        for (var o of y) {
          var a = o[0],
            i = o[1];
          i.lastAccessed < r && y.delete(a);
        }
        C = t;
      }
    }
    function v(t) {
      b();
      var r = (e || (e = n("performanceNow")))(),
        o = y.get(t);
      if (o == null)
        return (y.set(t, { dropped: 0, logged: [r], lastAccessed: r }), 1);
      var a = o.dropped,
        i = o.logged;
      for (o.lastAccessed = r; i[0] < r - g; ) i.shift();
      return i.length < f
        ? ((o.dropped = 0), i.push(r), a + 1)
        : (o.dropped++, null);
    }
    var S = {
        shouldLog: function (t) {
          return v(t.hash);
        },
      },
      R = "RE_EXN_ID";
    function L(e) {
      var t = null;
      return (
        e == null || typeof e != "object"
          ? (t = s("Non-object thrown: %s", String(e)))
          : Object.prototype.hasOwnProperty.call(e, R)
            ? (t = s("Rescript exception thrown: %s", JSON.stringify(e)))
            : typeof (e == null ? void 0 : e.then) == "function"
              ? (t = s("Promise thrown: %s", JSON.stringify(e)))
              : typeof e.message != "string"
                ? (t = s(
                    "Non-error thrown: %s, keys: %s",
                    String(e),
                    JSON.stringify(Object.keys(e).sort()),
                  ))
                : e.messageFormat != null && typeof e.messageFormat != "string"
                  ? (t = s(
                      "Error with non-string messageFormat thrown: %s, %s, keys: %s",
                      String(e.message),
                      String(e),
                      JSON.stringify(Object.keys(e).sort()),
                    ))
                  : Object.isExtensible &&
                    !Object.isExtensible(e) &&
                    (t = s("Non-extensible thrown: %s", String(e.message))),
        t != null
          ? ((t.taalOpcodes = t.taalOpcodes || []),
            t.taalOpcodes.push(l.PREVIOUS_FRAME),
            t)
          : e
      );
    }
    var E =
        typeof window == "undefined" ? "<self.onerror>" : "<window.onerror>",
      k;
    function I(e) {
      var t,
        n = e.error != null ? L(e.error) : s(e.message || "");
      (n.fileName == null && e.filename != null && (n.fileName = e.filename),
        n.line == null && e.lineno != null && (n.line = e.lineno),
        n.column == null && e.colno != null && (n.column = e.colno),
        (n.guardList = [E]),
        (n.loggingSource = "ONERROR"),
        (t = k) === null || t === void 0 || t.reportError(n));
    }
    var T = {
        setup: function (n) {
          typeof t.addEventListener == "function" &&
            k == null &&
            ((k = n), t.addEventListener("error", I));
        },
      },
      D = [],
      x = {
        pushGuard: function (t) {
          D.unshift(t);
        },
        popGuard: function () {
          D.shift();
        },
        inGuard: function () {
          return D.length !== 0;
        },
        cloneGuardList: function () {
          return D.map(function (e) {
            return e.name;
          });
        },
        findDeferredSource: function () {
          for (var e of D)
            if (e.deferredSource != null) return e.deferredSource;
        },
      };
    function $(e) {
      return e.type != null
        ? e.type
        : e.loggingSource == "GUARDED" ||
            e.loggingSource == "ERROR_BOUNDARY" ||
            e.name == "SyntaxError"
          ? "fatal"
          : (e.loggingSource == "ONERROR" &&
                e.message.indexOf("ResizeObserver loop") >= 0) ||
              (e.stack != null && e.stack.indexOf("chrome-extension://") >= 0)
            ? "warn"
            : "error";
    }
    var P = [],
      N = (function () {
        function e() {
          this.metadata = [].concat(P);
        }
        var t = e.prototype;
        return (
          (t.addEntries = function () {
            var e;
            return ((e = this.metadata).push.apply(e, arguments), this);
          }),
          (t.addEntry = function (t, n, r) {
            return (this.metadata.push([t, n, r]), this);
          }),
          (t.isEmpty = function () {
            return this.metadata.length === 0;
          }),
          (t.clearEntries = function () {
            this.metadata = [];
          }),
          (t.format = function () {
            var e = [];
            return (
              this.metadata.forEach(function (t) {
                if (t && t.length) {
                  var n = t
                    .map(function (e) {
                      return e != null ? String(e).replace(/:/g, "_") : "";
                    })
                    .join(":");
                  e.push(n);
                }
              }),
              e
            );
          }),
          (t.getAll = function () {
            return this.metadata;
          }),
          (e.addGlobalMetadata = function (t, n, r) {
            P.push([t, n, r]);
          }),
          (e.getGlobalMetadata = function () {
            return P;
          }),
          (e.unsetGlobalMetadata = function (t, n) {
            P = P.filter(function (e) {
              return !(Array.isArray(e) && e[0] === t && e[1] === n);
            });
          }),
          e
        );
      })(),
      M = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
    function w(e, t) {
      var n, r;
      if (!Object.isFrozen(e)) {
        t.type && (!e.type || M[e.type] > M[t.type]) && (e.type = t.type);
        var o = t.metadata;
        if (o != null) {
          var a,
            i = (a = e.metadata) !== null && a !== void 0 ? a : new N();
          (o != null && i.addEntries.apply(i, o.getAll()), (e.metadata = i));
        }
        (t.project != null && (e.project = t.project),
          t.errorName != null && (e.errorName = t.errorName),
          t.componentStack != null && (e.componentStack = t.componentStack),
          t.deferredSource != null && (e.deferredSource = t.deferredSource),
          t.blameModule != null && (e.blameModule = t.blameModule),
          t.loggingSource != null && (e.loggingSource = t.loggingSource));
        var l = (n = e.messageFormat) !== null && n !== void 0 ? n : e.message,
          s = (r = e.messageParams) !== null && r !== void 0 ? r : [];
        if (l !== t.messageFormat && t.messageFormat != null) {
          var u;
          ((l += " [Caught in: " + t.messageFormat + "]"),
            s.push.apply(
              s,
              (u = t.messageParams) !== null && u !== void 0 ? u : [],
            ));
        }
        ((e.messageFormat = l), (e.messageParams = s));
        var c = t.forcedKey,
          d = e.forcedKey,
          m = c != null && d != null ? c + "_" + d : c != null ? c : d;
        e.forcedKey = m;
      }
    }
    function A(e) {
      var t;
      return F(
        (t = e.messageFormat) !== null && t !== void 0 ? t : e.message,
        e.messageParams || [],
      );
    }
    function F(e, t) {
      var n = 0,
        r = String(e),
        o = r.replace(/%s/g, function () {
          return n < t.length ? t[n++] : "NOPARAM";
        });
      return (n < t.length && (o += " PARAMS" + JSON.stringify(t.slice(n))), o);
    }
    function O(e) {
      return (e != null ? e : []).map(function (e) {
        return String(e);
      });
    }
    var B = { aggregateError: w, toReadableMessage: A, toStringParams: O },
      W = 5,
      q = [];
    function U(e) {
      (q.push(e), q.length > W && q.shift());
    }
    function V(e) {
      var t = e.getAllResponseHeaders();
      if (t != null && t.indexOf("X-FB-Debug") >= 0) {
        var n = e.getResponseHeader("X-FB-Debug");
        n != null && n !== "" && U(n);
      }
    }
    function H() {
      return q;
    }
    var G = { add: U, addFromXHR: V, getAll: H },
      z = "abcdefghijklmnopqrstuvwxyz012345";
    function j() {
      for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      for (var o of n)
        if (o != null)
          for (var a = o.length, i = 0; i < a; i++)
            e = (e << 5) - e + o.charCodeAt(i);
      for (var l = "", s = 0; s < 6; s++)
        ((l = z.charAt(e & 31) + l), (e >>= 5));
      return l;
    }
    var K = [
        /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
        /@([^\s\)\()]+):(\d+):(\d+)$/,
        /^([^\s\)\()]+):(\d+):(\d+)$/,
        /^at ([^\s\)\()]+):(\d+):(\d+)$/,
      ],
      Q = /^\w+:\s.*?\n/g;
    Error.stackTraceLimit != null &&
      Error.stackTraceLimit < 80 &&
      (Error.stackTraceLimit = 80);
    function X(e) {
      var t = e.message,
        n = e.name,
        r = e.stack;
      if (r == null) return null;
      if (n != null && t != null && t !== "") {
        var o = n + ": " + t + "\n";
        if (r.startsWith(o)) return r.substr(o.length);
        if (r === n + ": " + t) return null;
      }
      if (n != null) {
        var a = n + "\n";
        if (r.startsWith(a)) return r.substr(a.length);
      }
      if (t != null && t !== "") {
        var i = ": " + t + "\n",
          l = r.indexOf(i),
          s = r.substring(0, l);
        if (/^\w+$/.test(s)) return r.substring(l + i.length);
      }
      return r.replace(Q, "");
    }
    function Y(e) {
      var t = e.trim(),
        n = t,
        r,
        o,
        a;
      if (t.includes("charset=utf-8;base64,")) n = "<inlined-file>";
      else {
        var i;
        for (var l of K) if (((i = t.match(l)), i != null)) break;
        (i != null && i.length === 4
          ? ((r = i[1]),
            (o = parseInt(i[2], 10)),
            (a = parseInt(i[3], 10)),
            (n = t.substring(0, t.length - i[0].length)))
          : (n = t),
          (n = n.replace(/^at /, "").trim()));
      }
      var s = { identifier: n, script: r, line: o, column: a };
      return ((s.text = te(s)), s);
    }
    function J(e) {
      return e == null || e === "" ? [] : e.split(/\n\n/)[0].split("\n").map(Y);
    }
    function Z(e) {
      var t = X(e);
      return J(t);
    }
    function ee(e) {
      if (e == null || e === "") return null;
      var t = e.split("\n");
      return (
        t.splice(0, 1),
        t.map(function (e) {
          return e.trim();
        })
      );
    }
    function te(e) {
      var t = e.column,
        n = e.identifier,
        r = e.line,
        o = e.script,
        a = "    at " + (n != null ? n : "<unknown>");
      return (
        o != null &&
          r != null &&
          t != null &&
          (a += " (" + o + ":" + r + ":" + t + ")"),
        a
      );
    }
    function ne(r) {
      var o,
        a,
        i,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f = Z(r),
        g = (o = r.taalOpcodes) !== null && o !== void 0 ? o : [],
        h = r.framesToPop;
      if (h != null)
        for (var y = Math.min(h, f.length), C = 0; C < y; C++)
          g.unshift(l.PREVIOUS_FRAME);
      var b = (a = r.messageFormat) !== null && a !== void 0 ? a : r.message,
        v = ((i = r.messageParams) !== null && i !== void 0 ? i : []).map(
          function (e) {
            return String(e);
          },
        ),
        S = ee(r.componentStack),
        R = S == null ? null : S.map(Y),
        L = r.metadata ? r.metadata.format() : new N().format();
      L.length === 0 && (L = void 0);
      var E = f
          .map(function (e) {
            return e.text;
          })
          .join("\n"),
        k = (s = r.errorName) !== null && s !== void 0 ? s : r.name,
        I = $(r),
        T = r.loggingSource,
        D = r.project,
        x = (u = r.lineNumber) !== null && u !== void 0 ? u : r.line,
        P = (c = r.columnNumber) !== null && c !== void 0 ? c : r.column,
        M = (d = r.fileName) !== null && d !== void 0 ? d : r.sourceURL,
        w = f.length > 0;
      (w && x == null && (x = f[0].line),
        w && P == null && (P = f[0].column),
        w && M == null && (M = f[0].script));
      var A = {
        blameModule: r.blameModule,
        cause: r.cause,
        column: P == null ? null : String(P),
        clientTime: Math.floor(Date.now() / 1e3),
        componentStackFrames: R,
        deferredSource: r.deferredSource != null ? ne(r.deferredSource) : null,
        extra: (m = r.extra) !== null && m !== void 0 ? m : {},
        fbtrace_id: r.fbtrace_id,
        guardList: (p = r.guardList) !== null && p !== void 0 ? p : [],
        hash: j(k, E, I, D, T),
        isNormalizedError: !0,
        line: x == null ? null : String(x),
        loggingSource: T,
        message: B.toReadableMessage(r),
        messageFormat: b,
        messageParams: v,
        metadata: L,
        name: k,
        page_time: Math.floor((e || (e = n("performanceNow")))()),
        project: D,
        reactComponentStack: S,
        script: M,
        serverHash: r.serverHash,
        stack: E,
        stackFrames: f,
        type: I,
        xFBDebug: G.getAll(),
        tags: (_ = r.tags) !== null && _ !== void 0 ? _ : [],
        operation: r.operation,
      };
      (r.forcedKey != null && (A.forcedKey = r.forcedKey),
        g.length > 0 && (A.taalOpcodes = g));
      var F = t.location;
      F && (A.windowLocationURL = F.href);
      for (var O in A) A[O] == null && delete A[O];
      return A;
    }
    function re(e) {
      return e != null && typeof e == "object" && e.isNormalizedError === !0
        ? e
        : null;
    }
    var oe = {
        formatStackFrame: te,
        normalizeError: ne,
        ifNormalizedError: re,
      },
      ae = "<global.react>",
      ie = [],
      le = [],
      se = 50,
      ue = !1,
      ce = {
        history: le,
        addListener: function (t, n) {
          (n === void 0 && (n = !1),
            ie.push(t),
            n ||
              le.forEach(function (e) {
                var n;
                return t(
                  e,
                  (n = e.loggingSource) !== null && n !== void 0
                    ? n
                    : "DEPRECATED",
                );
              }));
        },
        unshiftListener: function (t) {
          ie.unshift(t);
        },
        removeListener: function (t) {
          n("removeFromArray")(ie, t);
        },
        reportError: function (t) {
          var e = oe.normalizeError(t);
          ce.reportNormalizedError(e);
        },
        reportNormalizedError: function (t) {
          if (ue) return !1;
          var e = x.cloneGuardList();
          if (
            (t.componentStackFrames && e.unshift(ae),
            e.length > 0 && (t.guardList = e),
            t.deferredSource == null)
          ) {
            var n = x.findDeferredSource();
            n != null && (t.deferredSource = oe.normalizeError(n));
          }
          (le.length > se && le.splice(se / 2, 1), le.push(t), (ue = !0));
          for (var r = 0; r < ie.length; r++)
            try {
              var o;
              ie[r](
                t,
                (o = t.loggingSource) !== null && o !== void 0
                  ? o
                  : "DEPRECATED",
              );
            } catch (e) {}
          return ((ue = !1), !0);
        },
      };
    ce.addListener(c.errorListener);
    var de = "<anonymous guard>",
      me = !1,
      pe = {
        applyWithGuard: function (t, n, r, o) {
          if (m.config.skipDupErrorGuard && "__isMetaErrorGuarded" in t)
            return t.apply(n, r);
          if (
            (x.pushGuard({
              name:
                ((o == null ? void 0 : o.name) != null ? o.name : null) ||
                (t.name ? "func_name:" + t.name : null) ||
                de,
              deferredSource: o == null ? void 0 : o.deferredSource,
            }),
            me)
          )
            try {
              return t.apply(n, r);
            } finally {
              x.popGuard();
            }
          try {
            return Function.prototype.apply.call(t, n, r);
          } catch (n) {
            try {
              var e,
                a = o != null ? o : babelHelpers.extends({}, null),
                i = a.deferredSource,
                l = a.onError,
                s = a.onNormalizedError,
                u = L(n),
                c = {
                  deferredSource: i,
                  loggingSource: "GUARDED",
                  project:
                    (e = o == null ? void 0 : o.project) !== null &&
                    e !== void 0
                      ? e
                      : "ErrorGuard",
                  type: o == null ? void 0 : o.errorType,
                };
              B.aggregateError(u, c);
              var d = oe.normalizeError(u);
              (u == null &&
                t &&
                ((d.extra[t.toString().substring(0, 100)] = "function"),
                r != null &&
                  r.length &&
                  (d.extra[Array.from(r).toString().substring(0, 100)] =
                    "args")),
                (d.guardList = x.cloneGuardList()),
                l && l(u),
                s && s(d),
                ce.reportNormalizedError(d));
            } catch (e) {}
          } finally {
            x.popGuard();
          }
        },
        guard: function (t, n) {
          function e() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return pe.applyWithGuard(t, this, r, n);
          }
          return (
            (e.__isMetaErrorGuarded = !0),
            t.__SMmeta && (e.__SMmeta = t.__SMmeta),
            e
          );
        },
        inGuard: function () {
          return x.inGuard();
        },
        skipGuardGlobal: function (t) {
          me = t;
        },
      },
      _e = 1024,
      fe = [],
      ge = 0;
    function he(e) {
      return String(e);
    }
    function ye(e) {
      return e == null ? null : String(e);
    }
    function Ce(e, t) {
      var n = {};
      return (
        t &&
          t.forEach(function (e) {
            n[e] = !0;
          }),
        Object.keys(e).forEach(function (t) {
          e[t] ? (n[t] = !0) : n[t] && delete n[t];
        }),
        Object.keys(n)
      );
    }
    function be(e) {
      return (e != null ? e : []).map(function (e) {
        return {
          column: ye(e.column),
          identifier: e.identifier,
          line: ye(e.line),
          script: e.script,
        };
      });
    }
    function ve(e) {
      var t = String(e);
      return t.length > _e ? t.substring(0, _e - 3) + "..." : t;
    }
    function Se(e, t) {
      var n,
        r,
        o,
        a,
        i = {
          appId: ye(t.appId),
          cavalry_lid: t.cavalry_lid,
          ancestor_hash: e.hash,
          bundle_variant:
            (n = t.bundle_variant) !== null && n !== void 0 ? n : null,
          clientTime: he(e.clientTime),
          column: e.column,
          componentStackFrames: be(e.componentStackFrames),
          events: e.events,
          extra: Ce(e.extra, t.extra),
          forcedKey: e.forcedKey,
          frontend_env:
            (r = t.frontend_env) !== null && r !== void 0 ? r : null,
          guardList: e.guardList,
          line: e.line,
          loggingFramework: t.loggingFramework,
          messageFormat: ve(e.messageFormat),
          messageParams: e.messageParams.map(ve),
          name: e.name,
          sample_weight: ye(t.sample_weight),
          script: e.script,
          site_category: t.site_category,
          stackFrames: be(e.stackFrames),
          type: e.type,
          page_time: ye(e.page_time),
          project: e.project,
          push_phase: t.push_phase,
          report_source: t.report_source,
          report_source_ref: t.report_source_ref,
          rollout_hash:
            (o = t.rollout_hash) !== null && o !== void 0 ? o : null,
          script_path: t.script_path,
          server_revision: ye(t.server_revision),
          spin: ye(t.spin),
          svn_rev: String(t.client_revision),
          additional_client_revisions: Array.from(
            (a = t.additional_client_revisions) !== null && a !== void 0
              ? a
              : [],
          ).map(he),
          taalOpcodes:
            e.taalOpcodes == null
              ? null
              : e.taalOpcodes.map(function (e) {
                  return e;
                }),
          web_session_id: t.web_session_id,
          version: "3",
          xFBDebug: e.xFBDebug,
          tags: e.tags,
        },
        l = e.blameModule,
        s = e.deferredSource;
      return (
        l != null && (i.blameModule = String(l)),
        s &&
          s.stackFrames &&
          (i.deferredSource = { stackFrames: be(s.stackFrames) }),
        e.metadata && (i.metadata = e.metadata),
        e.loadingUrls && (i.loadingUrls = e.loadingUrls),
        e.serverHash != null && (i.serverHash = e.serverHash),
        e.windowLocationURL != null &&
          (i.windowLocationURL = e.windowLocationURL),
        e.loggingSource != null && (i.loggingSource = e.loggingSource),
        i
      );
    }
    function Re(e, t, n) {
      var r;
      if ((ge++, t.sample_weight === 0)) return !1;
      var o = S.shouldLog(e);
      if (
        o == null ||
        ((r = t.projectBlocklist) !== null &&
          r !== void 0 &&
          r.includes(e.project))
      )
        return !1;
      var a = Se(e, t);
      return (
        Object.assign(a, {
          ancestors: fe.slice(),
          clientWeight: he(o),
          page_position: he(ge),
        }),
        fe.length < 15 &&
          ["fatal", "error"].includes(e.type) &&
          fe.push(e.hash),
        n(a),
        !0
      );
    }
    var Le = { createErrorPayload: Se, postError: Re },
      Ee = null,
      ke = !1;
    function Ie(e) {
      if (Ee != null) {
        var t = Ee,
          n = e.reason,
          r,
          o = L(n),
          a = null;
        if (n !== o && typeof n == "object" && n !== null) {
          if (
            ((r = Object.keys(n).sort().slice(0, 3)),
            typeof n.message != "string" &&
              typeof n.messageFormat == "string" &&
              ((n.message = n.messageFormat), (o = L(n))),
            typeof n.message != "string" && typeof n.errorMsg == "string")
          )
            if (/^\s*\<!doctype/i.test(n.errorMsg)) {
              var i =
                /<title>([^<]+)<\/title>(?:(?:.|\n)*<h1>([^<]+)<\/h1>)?/im.exec(
                  n.errorMsg,
                );
              if (i) {
                var l, u;
                o = s(
                  'HTML document with title="%s" and h1="%s"',
                  (l = i[1]) !== null && l !== void 0 ? l : "",
                  (u = i[2]) !== null && u !== void 0 ? u : "",
                );
              } else o = s("HTML document sanitized");
            } else
              /^\s*<\?xml/i.test(n.errorMsg)
                ? (o = s("XML document sanitized"))
                : ((n.message = n.errorMsg), (o = L(n)));
          (o !== n && typeof n.name == "string" && (a = n.name),
            typeof n.name != "string" &&
              typeof n.errorCode == "string" &&
              (a = "UnhandledRejectionWith_errorCode_" + n.errorCode),
            typeof n.name != "string" &&
              typeof n.error == "number" &&
              (a = "UnhandledRejectionWith_error_" + String(n.error)));
        }
        o.loggingSource = "ONUNHANDLEDREJECTION";
        try {
          ((a =
            o === n && a != null && a !== ""
              ? a
              : typeof (n == null ? void 0 : n.name) == "string" &&
                  n.name !== ""
                ? n.name
                : r != null && r.length > 0
                  ? "UnhandledRejectionWith_" + r.join("_")
                  : "UnhandledRejection_" + (n === null ? "null" : typeof n)),
            (o.name = a));
        } catch (e) {}
        try {
          var c = n == null ? void 0 : n.stack;
          ((typeof c != "string" || c === "") && (c = o.stack),
            (typeof c != "string" || c === "") && (c = s("").stack),
            (o.stack =
              o.name +
              ": " +
              o.message +
              "\n" +
              c.split("\n").slice(1).join("\n")));
        } catch (e) {}
        try {
          var d = e.promise,
            m = d;
          o.stack =
            o.stack +
            (d != null && typeof m.settledStack == "string"
              ? "\n    at <promise_settled_stack_below>\n" + m.settledStack
              : "") +
            (d != null && typeof m.createdStack == "string"
              ? "\n    at <promise_created_stack_below>\n" + m.createdStack
              : "");
        } catch (e) {}
        try {
          var p = e.promise;
          "__isPromiseWithTracing" in p &&
            p.__isPromiseWithTracing === !0 &&
            p.deferredError != null &&
            (o.deferredSource = L(p.deferredError));
        } catch (e) {}
        (t.reportError(o), e.preventDefault());
      }
    }
    function Te(e) {
      ((Ee = e),
        typeof t.addEventListener == "function" &&
          !ke &&
          ((ke = !0), t.addEventListener("unhandledrejection", Ie)));
    }
    var De = { onunhandledrejection: Ie, setup: Te },
      xe = {
        preSetup: function (t) {
          ((t == null || t.ignoreOnError !== !0) && T.setup(ce),
            (t == null || t.ignoreOnUnahndledRejection !== !0) && De.setup(ce));
        },
        setup: function (t, n, r) {
          ce.addListener(function (e) {
            var o,
              a = babelHelpers.extends(
                {},
                t,
                (o = r == null ? void 0 : r()) !== null && o !== void 0
                  ? o
                  : {},
              );
            Le.postError(e, a, n);
          });
        },
      },
      $e = 20,
      Pe = (function () {
        function e(e, t) {
          var n = this;
          (t === void 0 && (t = []),
            (this.FATAL = function (e) {
              for (
                var t = e.join("%s"),
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              n.fatal.apply(n, [t].concat(o));
            }),
            (this.MUSTFIX = function (e) {
              for (
                var t = n.getTagString() + e.join("%s"),
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              n.mustfix.apply(n, [t].concat(o));
            }),
            (this.WARN = function (e) {
              for (
                var t = n.getTagString() + e.join("%s"),
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              n.warn.apply(n, [t].concat(o));
            }),
            (this.INFO = function (e) {
              for (
                var t = n.getTagString() + e.join("%s"),
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              n.info.apply(n, [t].concat(o));
            }),
            (this.DEBUG = function (e) {
              for (
                var t = n.getTagString() + e.join("%s"),
                  r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              n.debug.apply(n, [t].concat(o));
            }),
            (this.project = e),
            (this.events = []),
            (this.metadata = new N()),
            (this.taalOpcodes = []),
            (this.loggerTags = new Set(t)));
        }
        var t = e.prototype;
        return (
          (t.$1 = function (n, r) {
            for (
              var t = String(r),
                o = this.blameModule,
                a = this.events,
                i = this.forcedKey,
                s = this.metadata,
                u = this.project,
                c = this.error,
                d,
                m = arguments.length,
                p = new Array(m > 2 ? m - 2 : 0),
                _ = 2;
              _ < m;
              _++
            )
              p[_ - 2] = arguments[_];
            if (this.normalizedError)
              ((d = babelHelpers.extends({}, this.normalizedError, {
                messageFormat:
                  this.normalizedError.messageFormat +
                  " [Caught in: " +
                  t +
                  "]",
                messageParams: B.toStringParams(
                  [].concat(this.normalizedError.messageParams, p),
                ),
                project: u,
                type: n,
                loggingSource: "FBLOGGER",
              })),
                (d.message = B.toReadableMessage(d)),
                i != null &&
                  (d.forcedKey =
                    d.forcedKey != null ? i + "_" + d.forcedKey : i));
            else if (c)
              (this.taalOpcodes.length > 0 &&
                new e("fblogger")
                  .blameToPreviousFrame()
                  .blameToPreviousFrame()
                  .warn("Blame helpers do not work with catching"),
                B.aggregateError(c, {
                  messageFormat: t,
                  messageParams: B.toStringParams(p),
                  errorName: c.name,
                  forcedKey: i,
                  project: u,
                  type: n,
                  loggingSource: "FBLOGGER",
                }),
                (d = oe.normalizeError(c)));
            else {
              if (((c = new Error(t)), c.stack === void 0))
                try {
                  throw c;
                } catch (e) {}
              ((c.messageFormat = t),
                (c.messageParams = B.toStringParams(p)),
                (c.blameModule = o),
                (c.forcedKey = i),
                (c.project = u),
                (c.type = n),
                (c.loggingSource = "FBLOGGER"),
                (c.taalOpcodes = [l.PREVIOUS_FRAME, l.PREVIOUS_FRAME].concat(
                  this.taalOpcodes,
                )),
                (d = oe.normalizeError(c)),
                (d.name = "FBLogger"));
            }
            if (!s.isEmpty())
              if (d.metadata == null) d.metadata = s.format();
              else {
                var f = d.metadata.concat(s.format()),
                  g = new Set(f);
                d.metadata = Array.from(g.values());
              }
            if (a.length > 0) {
              if (d.events != null) {
                var h;
                (h = d.events).push.apply(h, a);
              } else d.events = [].concat(a);
              if (d.events != null && d.events.length > $e) {
                var y = d.events.length - $e;
                d.events.splice(0, y + 1, "<first " + y + " events omitted>");
              }
            }
            return (
              (d.tags = Array.from(this.loggerTags)),
              ce.reportNormalizedError(d),
              c
            );
          }),
          (t.fatal = function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            this.$1.apply(this, ["fatal", t].concat(n));
          }),
          (t.mustfix = function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            this.$1.apply(this, ["error", t].concat(n));
          }),
          (t.warn = function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            this.$1.apply(this, ["warn", t].concat(n));
          }),
          (t.info = function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            this.$1.apply(this, ["info", t].concat(n));
          }),
          (t.debug = function (t) {}),
          (t.mustfixThrow = function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            var o = this.$1.apply(this, ["error", t].concat(n));
            o ||
              ((o = s("mustfixThrow does not support catchingNormalizedError")),
              (o.taalOpcodes = o.taalOpcodes || []),
              o.taalOpcodes.push(l.PREVIOUS_FRAME));
            try {
              o.message = B.toReadableMessage(o);
            } catch (e) {}
            throw ((o.is_js_error = !0), o);
          }),
          (t.catching = function (n) {
            return (
              n instanceof Error
                ? (this.error = n)
                : new e("fblogger")
                    .blameToPreviousFrame()
                    .warn("Catching non-Error object is not supported"),
              this
            );
          }),
          (t.catchingNormalizedError = function (t) {
            return ((this.normalizedError = t), this);
          }),
          (t.event = function (t) {
            return (this.events.push(t), this);
          }),
          (t.blameToModule = function (t) {
            return ((this.blameModule = t), this);
          }),
          (t.blameToPreviousFile = function () {
            return (this.taalOpcodes.push(l.PREVIOUS_FILE), this);
          }),
          (t.blameToPreviousFrame = function () {
            return (this.taalOpcodes.push(l.PREVIOUS_FRAME), this);
          }),
          (t.blameToPreviousDirectory = function () {
            return (this.taalOpcodes.push(l.PREVIOUS_DIR), this);
          }),
          (t.addToCategoryKey = function (t) {
            return ((this.forcedKey = t), this);
          }),
          (t.addMetadata = function (t, n, r) {
            return (this.metadata.addEntry(t, n, r), this);
          }),
          (t.tags = function (n) {
            var t = n.concat(Array.from(this.loggerTags)),
              r = new e(this.project, t);
            return (
              this.events.forEach(function (e) {
                return r.event(e);
              }),
              this.metadata.getAll().forEach(function (e) {
                var t = e[0],
                  n = e[1],
                  o = e[2];
                return r.addMetadata(t, n, o);
              }),
              r
            );
          }),
          (t.getTagString = function () {
            var e =
              this.loggerTags.size > 0
                ? "[" + Array.from(this.loggerTags).join("|") + "] "
                : "";
            return e;
          }),
          e
        );
      })(),
      Ne = function (t, n) {
        var e = new Pe(t);
        return n != null ? e.event(t + "." + n) : e;
      };
    Ne.addGlobalMetadata = function (e, t, n) {
      N.addGlobalMetadata(e, t, n);
    };
    var Me = "<CUSTOM_NAME:",
      we = ">";
    function Ae(e, t) {
      if (e != null && t != null)
        try {
          Object.defineProperty(e, "name", { value: Me + " " + t + we });
        } catch (e) {}
      return e;
    }
    var Fe = {
        blameToPreviousFile: function (t) {
          var e;
          return (
            (t.taalOpcodes =
              (e = t.taalOpcodes) !== null && e !== void 0 ? e : []),
            t.taalOpcodes.push(l.PREVIOUS_FILE),
            t
          );
        },
        blameToPreviousFrame: function (t) {
          var e;
          return (
            (t.taalOpcodes =
              (e = t.taalOpcodes) !== null && e !== void 0 ? e : []),
            t.taalOpcodes.push(l.PREVIOUS_FRAME),
            t
          );
        },
        blameToPreviousDirectory: function (t) {
          var e;
          return (
            (t.taalOpcodes =
              (e = t.taalOpcodes) !== null && e !== void 0 ? e : []),
            t.taalOpcodes.push(l.PREVIOUS_DIR),
            t
          );
        },
      },
      Oe = {
        err: s,
        ErrorBrowserConsole: c,
        ErrorConfig: m,
        ErrorFilter: S,
        ErrorGlobalEventHandler: T,
        ErrorGuard: pe,
        ErrorGuardState: x,
        ErrorMetadata: N,
        ErrorNormalizeUtils: oe,
        ErrorPoster: Le,
        ErrorPubSub: ce,
        ErrorSerializer: B,
        ErrorSetup: xe,
        ErrorXFBDebug: G,
        FBLogger: Ne,
        getErrorSafe: L,
        getSimpleHash: j,
        TAAL: Fe,
        TAALOpcode: l,
        renameFunction: Ae,
      };
    a.exports = Oe;
  },
  null,
);
