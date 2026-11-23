__d(
  "MAIBATrajectoryDataParser",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = {
          raw_llm_output: e[n].raw_llm_output,
          thought: e[n].thought,
          tool_call: e[n].tool_call,
          utterance: e[n].utterance,
        };
        if (
          ((!r.thought || r.thought === "") &&
            r.utterance != null &&
            r.utterance !== "" &&
            (r.thought = "Responding back to the user"),
          r.tool_call != null &&
            r.tool_call !== "none" &&
            n + 1 < e.length &&
            e[n + 1].tool_output != null)
        ) {
          var o = e[n + 1].tool_output,
            a = r.tool_call;
          typeof o == "string" && typeof a == "string" && o.includes(a)
            ? (r.tool_output = o.replace(a, "tool call"))
            : (r.tool_output = o);
        }
        t.push(r);
      }
      return t;
    }
    function s(t) {
      var n = t.Messages,
        o = [];
      if (n.length % 2 !== 0)
        return (
          r("FBLogger")("ads_ai").warn(
            "Expected an even number of messages in the conversation",
          ),
          o
        );
      for (var a = 0; a < n.length; a += 2) {
        var i = n[a],
          l = n[a + 1],
          s = l.contents
            .filter(function (e) {
              return e.trajectoryStep != null;
            })
            .map(function (e) {
              return e.trajectoryStep;
            }),
          u = e(s);
        if (i.role !== 2 || l.role !== 3) {
          r("FBLogger")("ads_ai").warn(
            "Unexpected message roles at index %s. Expected user (2) followed by agent (3), got %s followed by %s",
            a,
            i.role,
            l.role,
          );
          continue;
        }
        o.push({ assistantMessage: l, trajectories: u, userMessage: i });
      }
      return o;
    }
    l.parseTrajectoryData = s;
  },
  98,
);
