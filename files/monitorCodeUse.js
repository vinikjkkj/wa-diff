__d(
  "monitorCodeUse",
  [
    "invariant",
    "CoreMonitorFalcoEvent",
    "ErrorNormalizeUtils",
    "ScriptPath",
    "SiteData",
    "err",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = n("react"));
    function u(e) {
      var t = e.type;
      return typeof t == "string"
        ? t
        : typeof t == "function"
          ? t.displayName || t.name
          : null;
    }
    function c(e) {
      var t = e;
      return typeof t != "string"
        ? t
        : ((t = t.replace(
            /Check your code at .+?:\d+/g,
            "Check your code at **",
          )),
          t
            .split(/\n/)
            .map(function (e) {
              return e.replace(
                / +(?:at|in) ([^(\[\n]+)[^\n]*/,
                function (e, t) {
                  var n = t.trim();
                  return n.startsWith("https:") ? "<anonomyous>" : n;
                },
              );
            })
            .filter(Boolean));
    }
    function d() {
      var t = e || (e = n("react")),
        r = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        o = r.A;
      if (o === null) return [];
      for (var a = o.getOwner(), i = 1e3, l = []; a && l.length < i; ) {
        var s = u(a),
          c = s === null ? "" : s.toString();
        (l.push(c.toString()),
          typeof a.tag == "number"
            ? (a = a.return)
            : (a = a._currentElement && a._currentElement._owner));
      }
      return l;
    }
    function m(e) {
      return Array.isArray(e) ? "[...]" : p(e);
    }
    function p(e) {
      if (e == null) return "" + String(e);
      if (Array.isArray(e)) {
        if (e.length > 10) {
          var t = e.slice(0, 5).map(m);
          return "[" + t.join(", ") + ", ...]";
        }
        return ((t = e.map(m)), "[" + t.join(", ") + "]");
      }
      if (typeof e == "string") return "'" + e + "'";
      if (typeof e == "object") {
        var n = Object.keys(e).map(function (e) {
          return e + "=...";
        });
        return "{" + n.join(", ") + "}";
      }
      return String(e);
    }
    function _(e) {
      return e.identifier || "";
    }
    function f(e) {
      var t, n, r;
      return (
        ((t = e.script) != null ? t : "") +
        "  " +
        ((n = e.line) != null ? n : "") +
        ":" +
        ((r = e.column) != null ? r : "")
      );
    }
    var g;
    function h(e, t, r) {
      (t === void 0 && (t = {}),
        r === void 0 && (r = {}),
        (e && !/[^a-z0-9_]/.test(e)) || l(0, 2789),
        g === void 0 && (g = n("gkx")("20935")));
      var o = n("SiteData").devserver_username || "",
        a = !1;
      r.forceIncludeStackTrace === !0 && (a = !0);
      var i, s, u;
      if (a)
        try {
          var c = n("err")(e);
          ((c.framesToPop = 1),
            (i = n("ErrorNormalizeUtils").normalizeError(c).stackFrames),
            (s = i.map(_)),
            (u = i.map(f).join("\n")));
        } catch (e) {}
      var m = t.params,
        p;
      (Array.isArray(m) &&
        (p = Array.from(m, function (e) {
          return String(e);
        })),
        n("CoreMonitorFalcoEvent").log(function () {
          return {
            class_name: String(t.className),
            message: String(t.message),
            params: p,
            push_phase_field: String(t.pushPhase),
            svn_revision_field: String(t.svnRevision),
            version: String(t.version),
            event: e,
            is_comet: String(g ? 1 : 0),
            owners: d(),
            uri_field: window.location.href,
            script_path: n("ScriptPath").getScriptPath(),
            devserver_username: o,
            stacktrace: s,
            stack: u,
            sample_rate: String(r.sampleRate),
          };
        }));
    }
    a.exports = h;
  },
  null,
);
