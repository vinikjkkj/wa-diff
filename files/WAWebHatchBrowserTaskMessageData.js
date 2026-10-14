__d(
  "WAWebHatchBrowserTaskMessageData",
  ["WAWebHatchBrowserTaskState", "WAWebUnifiedResponseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = function (n) {
        return (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.__typename === "GenAIBrowserTaskPrimitive"
          ) {
            var r = e;
            return t(r);
          }
          return n;
        })(n);
      };
      return babelHelpers.extends({}, e, {
        sections: e.sections.map(function (e) {
          return babelHelpers.extends({}, e, {
            view_model: (function (t) {
              if (
                ((typeof t == "object" && t !== null) ||
                  typeof t == "function") &&
                t.__typename === "GenAISingleLayoutViewModel" &&
                "primitive" in t
              ) {
                var r = t.primitive,
                  o = t;
                return babelHelpers.extends({}, o, { primitive: n(r) });
              }
              if (
                ((typeof t == "object" && t !== null) ||
                  typeof t == "function") &&
                (t.__typename === "GenAIHScrollLayoutViewModel" ||
                  t.__typename === "GenAIGridLayoutViewModel" ||
                  t.__typename === "GenAIVStackLayoutViewModel") &&
                "primitives" in t
              ) {
                var a = t.primitives,
                  i = t;
                return babelHelpers.extends({}, i, { primitives: a.map(n) });
              }
              return e.view_model;
            })(e.view_model),
          });
        }),
      });
    }
    function s(e, t) {
      return e == null
        ? t == null
        : Number.isFinite(e) && e >= 0 && (t == null || e >= t);
    }
    function u(e) {
      return (function (e) {
        return e === "complete" || e === "completed"
          ? "completed"
          : e === "failed"
            ? "failed"
            : null;
      })(e == null ? void 0 : e.trim().toLowerCase());
    }
    function c(e) {
      var t, n, r, o, a, i;
      return JSON.stringify(
        [
          (t = e.id) == null ? void 0 : t.toString(),
          e.type,
          (n = e.subtype) != null ? n : null,
          (r = (o = e.latestEditMsgKey) == null ? void 0 : o.toString()) != null
            ? r
            : null,
          (a = e.latestEditSenderTimestampMs) != null ? a : null,
          e.unifiedResponseRawData == null
            ? null
            : Array.from(e.unifiedResponseRawData),
          (i = e.botSignatureVerificationMetadata) != null ? i : null,
        ],
        function (e, t) {
          return t instanceof ArrayBuffer ? Array.from(new Uint8Array(t)) : t;
        },
      );
    }
    function d(e) {
      return o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e).trim();
    }
    function m(t, n) {
      var r = t.unifiedResponse,
        a = n == null ? void 0 : n.unifiedResponse;
      if (n == null || a == null || r == null || c(n) !== c(t)) return r;
      var i = new Map();
      for (var l of a.sections)
        for (var m of o("WAWebUnifiedResponseUtils").getPrimitives(
          l.view_model,
        )) {
          var _ = p(m);
          if (_ != null) {
            var f = d(_.browser_task_id),
              g = i.get(f);
            (g == null || s(_.version, g.version)) && i.set(f, _);
          }
        }
      return e(r, function (e) {
        var t = i.get(d(e.browser_task_id));
        return t == null ||
          !s(t.version, e.version) ||
          u(t.state == null ? t.status : String(t.state)) == null
          ? e
          : babelHelpers.extends({}, e, {
              state: t.state,
              status: t.status,
              version: t.version,
              title: t.title,
              status_label: t.status_label,
              activity_title: t.activity_title,
              terminal_reason: t.terminal_reason,
            });
      });
    }
    function p(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIBrowserTaskPrimitive"
        ) {
          var t = e;
          return t;
        }
        return null;
      })(e);
    }
    function _(e) {
      var t, n;
      return (t = u(e.status)) != null
        ? t
        : u((n = e.displayState) != null ? n : e.displayStatus);
    }
    ((l.mapBrowserTasks = e),
      (l.canReplace = s),
      (l.terminal = u),
      (l.messageIdentity = c),
      (l.normalizedTaskID = d),
      (l.preserveBrowserTaskMessageResponse = m),
      (l.browserTaskMessageTerminalState = _));
  },
  98,
);
