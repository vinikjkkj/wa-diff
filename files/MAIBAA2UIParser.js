__d(
  "MAIBAA2UIParser",
  ["MAIBAA2UITypes", "MAIBAA2UIv09Parser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e instanceof Error ? e.message : String(e);
    }
    function s(e) {
      for (
        var t = [], n = 0, r = !1, o = !1, a = -1, i = 0;
        i < e.length;
        i++
      ) {
        var l = e[i];
        if (o) {
          o = !1;
          continue;
        }
        if (l === "\\" && r) {
          o = !0;
          continue;
        }
        if (l === '"') {
          r = !r;
          continue;
        }
        r ||
          (l === "{"
            ? (n === 0 && (a = i), n++)
            : l === "}" &&
              (n--,
              n === 0 && a >= 0 && (t.push(e.slice(a, i + 1)), (a = -1))));
      }
      return t;
    }
    function u(e, t) {
      return c(e, t).state;
    }
    function c(t, n) {
      if (!n) {
        var r;
        try {
          r = JSON.parse(t);
        } catch (t) {
          return { errorMessage: "json_parse_error: " + e(t), state: null };
        }
        return Array.isArray(r)
          ? o("MAIBAA2UIv09Parser").isV09MessageStream(r)
            ? {
                errorMessage: null,
                state: {
                  kind: "v09",
                  state: o("MAIBAA2UIv09Parser").processV09Messages(r),
                },
              }
            : {
                errorMessage: null,
                state: {
                  kind: "v08",
                  state: o("MAIBAA2UITypes").processMessages(r),
                },
              }
          : { errorMessage: "payload_not_array", state: null };
      }
      var a = s(t);
      if (a.length === 0)
        return { errorMessage: "streaming_no_complete_objects", state: null };
      var i = [],
        l = null;
      for (var u of a)
        try {
          i.push(JSON.parse(u));
        } catch (t) {
          l == null && (l = e(t));
          continue;
        }
      return i.length === 0
        ? {
            errorMessage:
              "streaming_all_objects_failed_json_parse: " +
              (l != null ? l : "unknown"),
            state: null,
          }
        : o("MAIBAA2UIv09Parser").isV09MessageStream(i)
          ? {
              errorMessage: null,
              state: {
                kind: "v09",
                state: o("MAIBAA2UIv09Parser").processV09Messages(i),
              },
            }
          : {
              errorMessage: null,
              state: {
                kind: "v08",
                state: o("MAIBAA2UITypes").processMessages(i),
              },
            };
    }
    ((l.extractCompleteObjects = s),
      (l.parseA2UIPayload = u),
      (l.parseA2UIPayloadWithDiagnostics = c));
  },
  98,
);
